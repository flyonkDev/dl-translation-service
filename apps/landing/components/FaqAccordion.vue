<template>
	<ul class="faq-accordion" role="list">
		<li
			v-for="(item, i) in items"
			:key="item.id ?? i"
			:id="item.anchor || undefined"
			class="faq-accordion__item"
			:class="{ 'faq-accordion__item--open': isOpen(i) }"
		>
			<button
				type="button"
				class="faq-accordion__question"
				:aria-expanded="isOpen(i)"
				:aria-controls="panelId(item.id ?? i)"
				@click="toggle(i)"
			>
				<span class="faq-accordion__question-text">{{ item.question }}</span>
				<span class="faq-accordion__chevron" aria-hidden="true">
					<Icon icon="heroicons:chevron-down-20-solid" width="20" />
				</span>
			</button>
			<div
				:id="panelId(item.id ?? i)"
				class="faq-accordion__answer-wrap"
				role="region"
			>
				<div class="faq-accordion__answer-inner">
					<div class="faq-accordion__answer">
						<p
							v-for="(p, idx) in toParagraphs(item.answer)"
							:key="idx"
							class="faq-accordion__answer-paragraph"
						>
							<template v-for="(seg, si) in parseInline(p)" :key="si">
								<a
									v-if="seg.kind === 'link'"
									:href="resolveHref(seg.href)"
									class="faq-accordion__link"
								>{{ seg.text }}</a>
								<template v-else>{{ seg.text }}</template>
							</template>
						</p>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLocalePath } from '#imports';
import { Icon } from '@iconify/vue';

export interface FaqAccordionItem {
	id?: string | number;
	/** Optional DOM id rendered on the <li> so URL anchors (e.g., /faq/#license-photo-retention) can link directly to the item. */
	anchor?: string;
	question: string;
	answer: string | string[];
}

/** One rendered segment inside a paragraph — plain text or an inline link parsed from `[text](url)` markdown. */
type InlineSegment =
	| { kind: 'text'; text: string }
	| { kind: 'link'; text: string; href: string };

const INLINE_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
const localePath = useLocalePath();

/** Parse a paragraph string into mixed text + link segments. Safe — no v-html, no XSS risk. */
function parseInline(text: string): InlineSegment[] {
	const out: InlineSegment[] = [];
	let lastIndex = 0;
	let m: RegExpExecArray | null;
	INLINE_LINK_RE.lastIndex = 0;
	while ((m = INLINE_LINK_RE.exec(text)) !== null) {
		if (m.index > lastIndex) {
			out.push({ kind: 'text', text: text.slice(lastIndex, m.index) });
		}
		out.push({ kind: 'link', text: m[1], href: m[2] });
		lastIndex = INLINE_LINK_RE.lastIndex;
	}
	if (lastIndex < text.length) {
		out.push({ kind: 'text', text: text.slice(lastIndex) });
	}
	return out;
}

/**
 * Wrap internal paths (starting with `/`) through `useLocalePath` so the link
 * lands on the visitor's current locale (`/ru/idp-validity/` for RU readers).
 * External URLs (http:// / https:// / mailto:) pass through unchanged.
 */
function resolveHref(href: string): string {
	if (href.startsWith('/')) return localePath(href);
	return href;
}

const props = withDefaults(
	defineProps<{
		items: FaqAccordionItem[];
		defaultOpen?: number;
		multiple?: boolean;
		idPrefix?: string;
	}>(),
	{
		defaultOpen: 0,
		multiple: false,
		idPrefix: 'faq',
	},
);

const openSet = ref<Set<number>>(new Set([props.defaultOpen]));

function isOpen(index: number): boolean {
	return openSet.value.has(index);
}

function toggle(index: number) {
	const next = new Set(openSet.value);
	if (next.has(index)) {
		next.delete(index);
	} else {
		if (!props.multiple) next.clear();
		next.add(index);
	}
	openSet.value = next;
}

function toParagraphs(answer: string | string[]): string[] {
	if (Array.isArray(answer)) return answer.filter(Boolean);
	return [answer];
}

function panelId(id: string | number) {
	return `${props.idPrefix}-panel-${id}`;
}

const _ = computed(() => props.items.length);
void _;
</script>

<style scoped lang="scss">
@use 'sass:color';

.faq-accordion {
	list-style: none;
	margin: 0;
	padding: 0;
	border-top: 2px solid rgb(var(--c-sea));
}

.faq-accordion__item {
	border-bottom: 1px solid rgb(var(--c-slate-200));
	transition: background-color 0.2s ease;
}

.faq-accordion__item:hover {
	background-color: rgba(var(--c-mint), 0.18);
}

.faq-accordion__item--open {
	background-color: rgba(var(--c-mint), 0.28);
}

.faq-accordion__question {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	padding: 18px 4px;
	text-align: left;
	background: transparent;
	border: 0;
	cursor: pointer;
	font: inherit;
	color: rgb(var(--c-slate-900));
	font-size: 15px;
	font-weight: 600;
	line-height: 1.4;
	transition: color 0.2s ease;
}

.faq-accordion__question:focus-visible {
	outline: 2px solid rgb(var(--c-sea));
	outline-offset: 2px;
	border-radius: 6px;
}

.faq-accordion__item--open .faq-accordion__question {
	color: rgb(var(--c-sea));
}

.faq-accordion__chevron {
	flex-shrink: 0;
	display: inline-flex;
	color: rgb(var(--c-slate-500));
	transition: transform 0.25s ease, color 0.25s ease;
}

.faq-accordion__item--open .faq-accordion__chevron {
	transform: rotate(180deg);
	color: rgb(var(--c-sea));
}

.faq-accordion__answer-wrap {
	display: grid;
	grid-template-rows: 0fr;
	transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-accordion__item--open .faq-accordion__answer-wrap {
	grid-template-rows: 1fr;
}

.faq-accordion__answer-inner {
	overflow: hidden;
	min-height: 0;
}

.faq-accordion__answer {
	position: relative;
	padding: 4px 4px 20px 14px;
	margin-left: 4px;
	color: rgb(var(--c-slate-700));
	font-size: 14px;
	line-height: 1.65;
}

.faq-accordion__answer::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	bottom: 8px;
	width: 2px;
	background: rgb(var(--c-sea) / 0.35);
	border-radius: 1px;
}

.faq-accordion__answer-paragraph {
	margin: 0;
}

.faq-accordion__answer-paragraph + .faq-accordion__answer-paragraph {
	margin-top: 10px;
}

.faq-accordion__link {
	color: rgb(var(--c-sea));
	text-decoration: underline;
	text-decoration-thickness: 1px;
	text-underline-offset: 2px;
	transition: color 0.15s ease;
}

.faq-accordion__link:hover {
	color: rgb(var(--c-slate-900));
}
</style>
