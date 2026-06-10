<template>
	<nav class="breadcrumbs" :aria-label="ariaLabel">
		<ol class="breadcrumbs__list">
			<li
				v-for="(item, i) in items"
				:key="i"
				class="breadcrumbs__item"
			>
				<NuxtLinkLocale
					v-if="item.to && i < items.length - 1"
					:to="item.to"
					class="breadcrumbs__link"
				>
					{{ item.label }}
				</NuxtLinkLocale>
				<span
					v-else
					class="breadcrumbs__current"
					:aria-current="i === items.length - 1 ? 'page' : undefined"
				>
					{{ item.label }}
				</span>
				<span
					v-if="i < items.length - 1"
					class="breadcrumbs__sep"
					aria-hidden="true"
				>›</span>
			</li>
		</ol>
	</nav>
</template>

<script setup lang="ts">
export interface BreadcrumbItem {
	label: string;
	to?: string;
}

withDefaults(
	defineProps<{
		items: BreadcrumbItem[];
		ariaLabel?: string;
	}>(),
	{
		ariaLabel: 'Breadcrumb',
	},
);
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

.breadcrumbs {
	margin-bottom: 18px;
}

.breadcrumbs__list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8px;
	padding: 0;
	margin: 0;
	list-style: none;
	font-size: 13px;
	color: rgb(var(--c-slate-500));
}

.breadcrumbs__item {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	min-width: 0;
}

.breadcrumbs__link {
	color: rgb(var(--c-sea));
	text-decoration: none;
	transition: color 0.15s ease;

	&:hover {
		color: rgb(var(--c-slate-900));
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	&:focus-visible {
		outline: 2px solid rgb(var(--c-sea));
		outline-offset: 2px;
		border-radius: 2px;
	}
}

.breadcrumbs__current {
	color: rgb(var(--c-slate-700));
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
}

.breadcrumbs__sep {
	color: rgb(var(--c-slate-300));
	font-size: 14px;
	user-select: none;
}
</style>
