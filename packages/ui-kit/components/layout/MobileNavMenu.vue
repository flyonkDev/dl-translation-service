<template>
	<div class="mobile-nav" ref="root">
		<button
			type="button"
			class="mobile-nav__btn"
			:aria-label="ariaLabel"
			:aria-expanded="isOpen"
			aria-haspopup="menu"
			@click="toggle()"
			@keydown="onButtonKeydown"
		>
			<Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" class="mobile-nav__icon" />
		</button>

		<div
			v-if="isOpen"
			class="mobile-nav__panel rounded-xl border border-slate-200 bg-white shadow-soft"
			:aria-label="ariaLabel"
			role="menu"
		>
			<a
				:href="howHref"
				class="mobile-nav__link"
				role="menuitem"
				@click="close()"
			>
				{{ navHowLabel }}
			</a>
			<a
				v-if="guidesHref"
				:href="guidesHref"
				class="mobile-nav__link"
				role="menuitem"
				@click="close()"
			>
				{{ navGuidesLabel }}
			</a>
			<a
				:href="faqHref"
				class="mobile-nav__link"
				role="menuitem"
				@click="close()"
			>
				{{ navFaqLabel }}
			</a>
			<a
				v-if="samplePdfHref"
				:href="samplePdfHref"
				class="mobile-nav__link"
				role="menuitem"
				@click="close()"
			>
				{{ navSamplePdfLabel }}
			</a>
			<a
				:href="pricingHref"
				class="mobile-nav__link"
				role="menuitem"
				@click="close()"
			>
				{{ navPricingLabel }}
			</a>
			<a
				:href="aboutHref"
				class="mobile-nav__link"
				role="menuitem"
				@click="close()"
			>
				{{ navAboutLabel }}
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';

withDefaults(
	defineProps<{
		navHowLabel: string;
		navGuidesLabel?: string;
		navFaqLabel: string;
		navSamplePdfLabel?: string;
		navPricingLabel: string;
		navAboutLabel: string;
		howHref: string;
		guidesHref?: string;
		faqHref: string;
		samplePdfHref?: string;
		pricingHref: string;
		aboutHref: string;
		ariaLabel?: string;
	}>(),
	{
		ariaLabel: 'Menu',
	},
);

const root = ref<HTMLElement | null>(null);
const isOpen = ref(false);

const firstLinkSelector = '[role="menuitem"]';

function close() {
	isOpen.value = false;
}

function open() {
	isOpen.value = true;
	nextTick(() => {
		const first = root.value?.querySelector(firstLinkSelector) as HTMLElement | null;
		first?.focus?.();
	});
}

function toggle() {
	isOpen.value ? close() : open();
}

function onDocumentMouseDown(e: MouseEvent) {
	const el = e.target as Node | null;
	if (!root.value || !el) return;
	if (!root.value.contains(el)) close();
}

function onButtonKeydown(e: KeyboardEvent) {
	if (e.key !== 'Escape') return;
	if (isOpen.value) {
		e.preventDefault();
		close();
	}
}

onMounted(() => {
	document.addEventListener('mousedown', onDocumentMouseDown);

	// Ensure the mobile menu never stays visible after resizing to desktop.
	const mq = window.matchMedia('(min-width: 640px)');
	const onChange = (e: MediaQueryListEvent) => {
		if (e.matches) close();
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(mq as any).addEventListener?.('change', onChange);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(mq as any).addListener?.(onChange);

	// Store cleanup on the element to avoid extra refs.
	(root.value as any).__mqCleanup = () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(mq as any).removeEventListener?.('change', onChange);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(mq as any).removeListener?.(onChange);
	};
});

onBeforeUnmount(() => {
	document.removeEventListener('mousedown', onDocumentMouseDown);
	(root.value as any).__mqCleanup?.();
});
</script>

<style scoped lang="scss">
.mobile-nav {
	position: relative;
}

.mobile-nav__btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	border-radius: 12px;
	border: 1px solid rgba(226, 232, 240, 0.8);
	background: rgba(255, 255, 255, 0.6);
	transition:
		background 150ms ease,
		border-color 150ms ease,
		box-shadow 150ms ease;

	&:focus-visible {
		outline: none;
		border-color: rgb(var(--c-active-blue));
		box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
	}
}

.mobile-nav__icon {
	font-size: 20px;
	color: rgba(15, 23, 42, 0.7);
}

.mobile-nav__panel {
	position: absolute;
	right: 0;
	top: calc(100% + 10px);
	z-index: 60;
	min-width: 190px;
	padding: 6px 0;
}

@media (min-width: 640px) {
	.mobile-nav__btn {
		display: none;
	}

	.mobile-nav__panel {
		display: none;
	}
}

.mobile-nav__link {
	display: block;
	padding: 10px 14px;
	text-decoration: none;
	color: rgb(var(--c-slate-900));
	font-weight: 700;
	font-size: 14px;
	transition: background 120ms ease;

	&:hover {
		background: rgba(2, 132, 199, 0.06);
	}
}
</style>

