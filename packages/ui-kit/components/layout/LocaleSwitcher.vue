<template>
	<!-- Segmented (compact) variant for small locale lists -->
	<div v-if="!useDropdown" class="locale-switcher">
		<div
			role="group"
			class="locale-switcher flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white/60 p-0.5"
			:aria-label="ariaLabel"
		>
			<button
				v-for="opt in options"
				:key="opt.code"
				type="button"
				class="locale-switcher__btn inline-flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-activeBlue/30"
				:class="{
					'bg-mint ring-1 ring-sea/20': opt.code === locale,
				}"
				:title="opt.label"
				:aria-label="opt.label"
				:aria-pressed="opt.code === locale"
				@click="emitSelect(opt.code)"
			>
				<span
					class="fi h-4 w-5 rounded-sm bg-cover bg-center shadow-sm"
					:class="`fi-${opt.flagCode}`"
					aria-hidden="true"
				/>
			</button>
		</div>
	</div>

	<!-- Dropdown (scales to 6-8 languages) -->
	<div v-else class="app-field" ref="root">
		<button
			ref="triggerRef"
			type="button"
			class="locale-trigger"
			:aria-expanded="isOpen"
			:aria-label="ariaLabel"
			aria-haspopup="listbox"
			:class="{ 'is-open': isOpen }"
			:disabled="!options.length"
			:aria-activedescendant="activeId"
			@click="toggle()"
			@keydown="onTriggerKeydown"
		>
			<span v-if="selected?.flagCode" class="flag fi" :class="flagClass(selected.flagCode)" aria-hidden="true" />
			<span class="trigger-label truncate">{{ selected?.label ?? ariaLabel }}</span>
			<span class="trigger-right flex items-center gap-2">
				<Icon class="chev-icn" icon="mdi:chevron-down" />
			</span>
		</button>

		<div
			v-if="isOpen"
			class="dropdown-panel rounded-xl border border-slate-200 bg-white shadow-soft"
			@keydown.capture="onListKeydown"
		>
			<div v-if="searchable" class="dropdown-search p-2">
				<div class="search-wrap flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-2">
					<Icon class="search-icn text-slate-400" icon="mdi:magnify" />
					<input
						ref="searchInput"
						v-model="query"
						class="search-input w-full text-sm text-slate-900 outline-none"
						type="text"
						autocomplete="off"
						:placeholder="searchPlaceholder"
						@keydown="onSearchKeydown"
						@keydown.stop
					/>
				</div>
			</div>

			<ul
				class="options dropdown-list"
				role="listbox"
				:aria-activedescendant="activeId"
			>
				<li v-if="filteredOptions.length === 0" class="empty px-3 py-3 text-sm text-slate-500">
					{{ emptyText }}
				</li>

				<li v-for="(opt, idx) in filteredOptions" :key="opt.code" class="option-item">
					<button
						:id="optionId(opt.code)"
						type="button"
						class="option-btn"
						:class="{
							'is-active': idx === activeIndex,
							'is-selected': opt.code === locale,
						}"
						role="option"
						:aria-selected="opt.code === locale"
						@click="select(opt)"
						@mouseenter="activeIndex = idx"
						@focus="activeIndex = idx"
					>
						<span v-if="opt.flagCode" class="flag fi" :class="flagClass(opt.flagCode)" aria-hidden="true" />
						<span class="option-label truncate">{{ opt.label }}</span>
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue';

export type LocaleOption = {
	code: string;
	label: string;
	/** flag-icons country code, e.g. us, ru, es */
	flagCode: string;
};

const props = withDefaults(
	defineProps<{
		locale: string;
		options: LocaleOption[];
		ariaLabel?: string;
		/**
		 * - `auto`: dropdown for 5+ languages, segmented otherwise
		 * - `segmented`: compact row of flags
		 * - `dropdown`: full dropdown listbox
		 */
		variant?: 'auto' | 'segmented' | 'dropdown';
		searchable?: boolean;
		searchPlaceholder?: string;
		emptyText?: string;
	}>(),
	{
		ariaLabel: 'Language',
		variant: 'auto',
		searchable: undefined,
		searchPlaceholder: 'Search language…',
		emptyText: 'No matches',
	},
);

const emit = defineEmits<{
	selectLocale: [code: string];
}>();

const root = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLButtonElement | null>(null);
const searchInput = ref<HTMLInputElement | null>(null);

const isOpen = ref(false);
const query = ref('');
const activeIndex = ref(0);

const useDropdown = computed(() => {
	if (props.variant === 'segmented') return false;
	if (props.variant === 'dropdown') return true;
	return props.options.length > 4;
});

const searchable = computed(() => {
	if (!useDropdown.value) return false;
	if (props.searchable !== undefined) return props.searchable;
	return props.options.length > 5;
});

const selected = computed(() => {
	return props.options.find((o) => o.code === props.locale) ?? props.options[0] ?? undefined;
});

const filteredOptions = computed(() => {
	if (!searchable.value) return props.options;
	const q = query.value.trim().toLowerCase();
	if (!q) return props.options;
	return props.options.filter((o) => o.label.toLowerCase().includes(q) || o.code.toLowerCase().includes(q));
});

const activeId = computed(() => {
	const opt = filteredOptions.value[activeIndex.value];
	return opt ? optionId(opt.code) : undefined;
});

function flagClass(code: string) {
	return `fi-${code.toLowerCase()}`;
}

function optionId(code: string) {
	return `locale-opt-${code}`;
}

function open() {
	if (!props.options.length) return;
	isOpen.value = true;
	query.value = '';
	const idx = filteredOptions.value.findIndex((o) => o.code === props.locale);
	activeIndex.value = idx >= 0 ? idx : 0;

	nextTick(() => {
		if (searchable.value) {
			searchInput.value?.focus();
		} else {
			focusActive();
		}
	});
}

function close() {
	isOpen.value = false;
	query.value = '';
	activeIndex.value = 0;
	nextTick(() => triggerRef.value?.focus());
}

function toggle() {
	if (!useDropdown.value) return;
	if (isOpen.value) close();
	else open();
}

function emitSelect(code: string) {
	emit('selectLocale', code);
}

function select(opt: LocaleOption) {
	emitSelect(opt.code);
	close();
}

function moveActive(delta: number, shouldFocus: boolean = true) {
	const len = filteredOptions.value.length;
	if (!len) return;
	const next = (activeIndex.value + delta + len) % len;
	activeIndex.value = next;
	if (shouldFocus) focusActive();
}

function focusActive() {
	nextTick(() => {
		const id = activeId.value;
		if (!id) return;
		const el = document.getElementById(id) as HTMLButtonElement | null;
		el?.focus();
	});
}

function onTriggerKeydown(e: KeyboardEvent) {
	if (!useDropdown.value) return;
	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		toggle();
		return;
	}

	if (e.key === 'ArrowDown') {
		e.preventDefault();
		if (!isOpen.value) open();
		else moveActive(1);
		return;
	}

	if (e.key === 'ArrowUp') {
		e.preventDefault();
		if (!isOpen.value) open();
		else moveActive(-1);
		return;
	}

	if (e.key === 'Escape' && isOpen.value) {
		e.preventDefault();
		close();
	}
}

function onSearchKeydown(e: KeyboardEvent) {
	if (!isOpen.value) return;

	if (e.key === 'ArrowDown') {
		e.preventDefault();
		moveActive(1, false);
		return;
	}
	if (e.key === 'ArrowUp') {
		e.preventDefault();
		moveActive(-1, false);
		return;
	}

	if (e.key === 'Enter') {
		e.preventDefault();
		const opt = filteredOptions.value[activeIndex.value];
		if (opt) select(opt);
		return;
	}

	if (e.key === 'Escape') {
		e.preventDefault();
		close();
		return;
	}
}

function onListKeydown(e: KeyboardEvent) {
	// If focus is in search input, its handler already owns arrow navigation.
	if (searchable.value && document.activeElement === searchInput.value) return;
	if (!isOpen.value) return;

	if (e.key === 'Escape') {
		e.preventDefault();
		close();
		return;
	}

	if (e.key === 'ArrowDown') {
		e.preventDefault();
		moveActive(1);
		return;
	}
	if (e.key === 'ArrowUp') {
		e.preventDefault();
		moveActive(-1);
		return;
	}

	if (e.key === 'Home') {
		e.preventDefault();
		activeIndex.value = 0;
		focusActive();
		return;
	}

	if (e.key === 'End') {
		e.preventDefault();
		activeIndex.value = Math.max(0, filteredOptions.value.length - 1);
		focusActive();
		return;
	}

	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		const opt = filteredOptions.value[activeIndex.value];
		if (opt) select(opt);
	}
}

function onDocumentMouseDown(e: MouseEvent) {
	const el = e.target as Node | null;
	if (!root.value || !el) return;
	if (!root.value.contains(el)) close();
}

watch(
	() => filteredOptions.value.length,
	(len) => {
		if (!len) activeIndex.value = 0;
		else if (activeIndex.value > len - 1) activeIndex.value = 0;
	},
);

watch(
	() => props.locale,
	() => {
		if (!isOpen.value) return;
		const idx = filteredOptions.value.findIndex((o) => o.code === props.locale);
		activeIndex.value = idx >= 0 ? idx : 0;
	},
);

onMounted(() => {
	document.addEventListener('mousedown', onDocumentMouseDown);
});

onBeforeUnmount(() => {
	document.removeEventListener('mousedown', onDocumentMouseDown);
});
</script>

<style scoped lang="scss">
.app-field {
	position: relative;
}

.locale-trigger {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;

	min-width: 140px;
	padding: 6px 10px;
	border-radius: 12px;
	border: 1px solid rgba(226, 232, 240, 0.8);
	background: rgba(255, 255, 255, 0.6);

	color: rgb(var(--c-slate-900));
	outline: none;
	transition: box-shadow 150ms ease, border-color 150ms ease, background 150ms ease;

	&:focus-visible {
		border-color: rgb(var(--c-active-blue));
		box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
	}

	&.is-open {
		border-color: rgb(var(--c-slate-200));
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
}

.flag {
	width: 18px;
	height: 14px;
	border-radius: 4px;
	box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.08);
}

.dropdown-panel {
	position: absolute;
	right: 0;
	top: calc(100% + 8px);
	z-index: 50;
	overflow: hidden;
}

.dropdown-list {
	max-height: 280px;
	overflow: auto;
	padding: 6px 0;
}

.option-item {
	margin: 0;
	padding: 0;
}

.option-btn {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 10px;

	padding: 10px 12px;
	cursor: pointer;
	user-select: none;
	text-align: left;

	background: transparent;
	border: none;
	color: rgb(var(--c-slate-900));

	&:hover {
		background: rgba(2, 132, 199, 0.06);
	}

	&.is-active {
		background: rgba(2, 132, 199, 0.10);
	}

	&.is-selected {
		font-weight: 800;
	}
}

.option-label {
	flex: 1 1 auto;
	min-width: 0;
}

.trigger-label {
	flex: 1 1 auto;
	min-width: 0;
}

.chev-icn {
	font-size: 18px;
	color: rgba(15, 23, 42, 0.55);
}

.search-wrap {
	background: #fff;
}

.search-input {
	background: transparent;
}

.empty {
	user-select: none;
}
</style>

