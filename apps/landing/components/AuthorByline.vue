<template>
	<div class="author-byline">
		<NuxtLinkLocale :to="profileHref" class="author-byline__link">
			<span class="author-byline__avatar" aria-hidden="true">
				<Icon icon="ph:user-circle-fill" width="28" />
			</span>
			<span class="author-byline__text">
				<span class="author-byline__by">{{ byLabel }}</span>
				<span class="author-byline__name">{{ authorName }}</span>
			</span>
		</NuxtLinkLocale>
		<span v-if="reviewedLabel" class="author-byline__reviewed">
			<Icon icon="ph:check-circle-bold" width="14" />
			<span>{{ reviewedLabel }} {{ reviewedDate }}</span>
		</span>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

withDefaults(
	defineProps<{
		authorName: string;
		profileHref: string;
		byLabel: string;
		reviewedLabel?: string;
		reviewedDate?: string;
	}>(),
	{
		reviewedLabel: '',
		reviewedDate: '',
	},
);
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

.author-byline {
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px 14px;
	margin-bottom: 14px;
	font-size: 12px;
	line-height: 1.4;
	color: rgb(var(--c-slate-700));
}

.author-byline__link {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;
	color: inherit;
	padding: 4px 10px 4px 4px;
	border-radius: 999px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	transition: border-color 0.15s ease, background-color 0.15s ease;

	&:hover {
		border-color: rgb(var(--c-sea));
		background: rgba(var(--c-mint), 0.4);
	}
}

.author-byline__avatar {
	display: inline-flex;
	color: rgb(var(--c-sea));
	flex-shrink: 0;
}

.author-byline__text {
	display: inline-flex;
	flex-direction: column;
	line-height: 1.2;
}

.author-byline__by {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
}

.author-byline__name {
	font-size: 12px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}

.author-byline__reviewed {
	display: inline-flex;
	align-items: center;
	gap: 5px;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(var(--c-mint), 0.55);
	color: rgb(var(--c-sea));
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.04em;
	text-transform: uppercase;
}
</style>
