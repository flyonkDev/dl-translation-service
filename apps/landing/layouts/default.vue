<!-- apps/landing/layouts/default.vue -->
<template>
	<div class="layout">
		<header class="layout-header">
			<div class="layout-header__inner">
				<div class="logo">DL Translate</div>

				<nav class="nav">
					<a href="#how-it-works" class="nav-link">How it works</a>
					<a href="#faq" class="nav-link">FAQ</a>
					<a href="#pricing" class="nav-link">Pricing</a>
				</nav>

				<div
					class="locale-switcher flex shrink-0 items-center gap-0.5 rounded-lg border border-slate-200 bg-white/80 p-0.5"
					role="group"
					aria-label="Language"
				>
					<NuxtLink
						v-for="loc in landingLocales"
						:key="loc.code"
						:to="switchLocalePath(loc.code)"
						class="locale-switcher__link inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-600 no-underline transition hover:bg-slate-100"
						:class="{ 'bg-emerald-100 text-slate-900 ring-1 ring-emerald-200': locale === loc.code }"
						:title="loc.label"
					>
						<span
							class="fi h-4 w-5 rounded-sm bg-cover bg-center shadow-sm"
							:class="`fi-${loc.flag}`"
							aria-hidden="true"
						/>
					</NuxtLink>
				</div>

				<BaseButton type="submit" variant="primary">
					<span class="font-bold">Start application</span>
				</BaseButton>
			</div>
		</header>

		<main class="layout-main">
			<slot />
		</main>

		<AppFooter />
	</div>
</template>

<script setup lang="ts">
	import { useI18n } from '#imports';
	import AppFooter from '@ui-kit/components/layout/AppFooter.vue';
	import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';

	const { locale } = useI18n();
	const switchLocalePath = useSwitchLocalePath();

	const landingLocales = [
		{ code: 'en' as const, flag: 'us', label: 'English' },
		{ code: 'ru' as const, flag: 'ru', label: 'Русский' },
		{ code: 'es' as const, flag: 'es', label: 'Español' },
	] as const;
</script>

<style scoped>
	.layout {
	  min-height: 100vh;
	  display: flex;
	  flex-direction: column;
	}

	/* Header */

	.layout-header {
	  position: sticky;
	  top: 0;
	  z-index: 20;
	  background: #ffffff;
	  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
	  backdrop-filter: blur(10px);
	}

	.layout-header__inner {
	  max-width: 1280px;
	  margin: 0 auto;
	  padding: 10px 16px;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  gap: 16px;
	}

	.logo {
	  font-weight: 800;
	  letter-spacing: 0.04em;
	  font-size: 16px;
	  color: #0f172a;
	}

	.nav {
	  display: flex;
	  gap: 16px;
	  flex: 1;
	  justify-content: center;
	}

	.nav-link {
	  font-size: 13px;
	  text-decoration: none;
	  color: #475569;
	}

	.nav-link:hover {
	  color: #0f172a;
	}

	.nav-cta {
	  padding: 8px 16px;
	  border-radius: 999px;
	  background: #facc15;
	  color: #0f172a;
	  font-size: 13px;
	  font-weight: 700;
	  text-decoration: none;
	  white-space: nowrap;
	}

	/* Main */

	.layout-main {
	  flex: 1;
	  background: #def7d4;
	}
</style>
