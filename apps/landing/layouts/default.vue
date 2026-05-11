<!-- apps/landing/layouts/default.vue -->
<template>
	<div class="layout">
		<header class="layout-header">
			<div class="layout-header__inner">
				<NuxtLinkLocale to="/" class="logo inline-flex min-w-0 shrink-0 items-center no-underline">
					<img
						:src="brandLogoCompactSrc"
						:alt="t('layout.logo')"
						class="logo-image logo-image--compact block sm:hidden"
					/>
					<img
						:src="brandLogoFullSrc"
						:alt="t('layout.logo')"
						class="logo-image logo-image--full hidden sm:block"
					/>
				</NuxtLinkLocale>

				<nav class="nav">
					<NuxtLinkLocale to="/how-it-works" class="nav-link">{{ t('layout.navHow') }}</NuxtLinkLocale>
					<NuxtLinkLocale to="/faq" class="nav-link">{{ t('layout.navFaq') }}</NuxtLinkLocale>
					<NuxtLinkLocale to="/pricing" class="nav-link">{{ t('layout.navPricing') }}</NuxtLinkLocale>
					<NuxtLinkLocale to="/about" class="nav-link">{{ t('layout.navAbout') }}</NuxtLinkLocale>
				</nav>

				<div
					class="locale-switcher flex shrink-0 items-center gap-0.5 rounded-lg border border-slate-200 bg-white/80 p-0.5"
					role="group"
					:aria-label="t('layout.languageAria')"
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
					<span class="font-bold">{{ t('layout.ctaStart') }}</span>
				</BaseButton>
			</div>
		</header>

		<main class="layout-main">
			<slot />
		</main>

		<AppFooter
			:brand-name="t('layout.logo')"
			:popular-title="t('footer.popularTitle')"
			:product-title="t('footer.productTitle')"
			:company-title="t('footer.companyTitle')"
			:support-title="t('footer.supportTitle')"
			:disclaimer-line="t('footer.digitalDelivery')"
			:link-pricing="t('footer.linkPricing')"
			:link-how-it-works="t('footer.linkHowItWorks')"
			:link-faq="t('footer.linkFaq')"
			:link-about="t('footer.linkAbout')"
			:link-privacy="t('footer.linkPrivacy')"
			:link-terms="t('footer.linkTerms')"
			:link-refund="t('footer.linkRefund')"
			:link-contact="t('footer.linkContact')"
			:copyright-line="t('footer.copyright', { year: currentYear })"
			:support-email="supportEmail"
			:links="footerLinks"
		/>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useI18n, useLocalePath, useRuntimeConfig } from '#imports';
	import AppFooter from '@ui-kit/components/layout/AppFooter.vue';
	import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
	import brandLogoFullSrc from '@ui-kit/assets/branding/idp-logo-header.svg';
	import brandLogoCompactSrc from '@ui-kit/assets/branding/idp-logo-mobile_1.svg';

	const { locale, t } = useI18n();
	const switchLocalePath = useSwitchLocalePath();
	const localePath = useLocalePath();
	const config = useRuntimeConfig();

	const supportEmail = String(config.public.supportEmail || 'support@idpcompanion.com');
	const currentYear = new Date().getFullYear();

	const landingLocales = [
		{ code: 'en' as const, flag: 'us', label: 'English' },
		{ code: 'ru' as const, flag: 'ru', label: 'Русский' },
		{ code: 'es' as const, flag: 'es', label: 'Español' },
	] as const;

	const footerLinks = computed(() => ({
		pricing: localePath('/pricing'),
		howItWorks: localePath('/how-it-works'),
		faq: localePath('/faq'),
		about: localePath('/about'),
		privacy: localePath('/privacy-policy'),
		terms: localePath('/terms-of-service'),
		refund: localePath('/refund-policy'),
		contact: `mailto:${supportEmail}`,
	}));
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
	  text-decoration: none;
	}

	.logo-image {
	  height: auto;
	  flex-shrink: 0;
	}

	.logo-image--full {
	  width: clamp(170px, 22vw, 240px);
	}

	.logo-image--compact {
	  width: 44px;
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
	  position: relative;
	}

	.nav-link::after {
	  content: '';
	  position: absolute;
	  bottom: -2px;
	  left: 0;
	  width: 0;
	  height: 2px;
	  background-color: #2dd4bf;
	  transition: width 0.2s ease;
	}

	.nav-link:hover {
	  color: #0f172a;
	}

	.nav-link:hover::after {
	  width: 100%;
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
