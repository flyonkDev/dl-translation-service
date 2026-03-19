<template>
	<div
		class="locale-switcher flex items-center gap-0.5 rounded-lg border border-slate-200/80 bg-white/80 p-0.5"
		role="group"
		:aria-label="t('layout.languageAria')"
	>
		<NuxtLink
			v-for="loc in items"
			:key="loc.code"
			:to="switchLocalePath(loc.code)"
			class="locale-switcher__link inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-600 no-underline transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-activeBlue/30"
			:class="{ 'bg-mint ring-1 ring-sea/20': locale === loc.code }"
			:title="loc.label"
			:aria-label="loc.label"
			:aria-current="locale === loc.code ? 'true' : undefined"
		>
			<span
				class="fi h-4 w-5 rounded-sm bg-cover bg-center shadow-sm"
				:class="`fi-${loc.flag}`"
				aria-hidden="true"
			/>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	import { useI18n } from '#imports';

	const { locale, t } = useI18n();
	const switchLocalePath = useSwitchLocalePath();

	const items = [
		{ code: 'en' as const, flag: 'us', label: 'English' },
		{ code: 'ru' as const, flag: 'ru', label: 'Русский' },
		{ code: 'es' as const, flag: 'es', label: 'Español' },
	] as const;
</script>
