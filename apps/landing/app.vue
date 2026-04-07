<!-- apps/landing/app.vue -->
<template>
	<div class="app-shell">
		<AppHeader
			:show-start-button="false"
			start-as="a"
			:start-href="appApplyUrl"
			:home-href="localePath({ name: 'index' })"
			how-href="#how-it-works"
			faq-href="#faq"
			pricing-href="#pricing"
			:brand-name="t('layout.logo')"
			:nav-how-label="t('layout.navHow')"
			:nav-faq-label="t('layout.navFaq')"
			:nav-pricing-label="t('layout.navPricing')"
		>
			<template #localeSwitcher>
				<LandingLocaleSwitcher />
			</template>
		</AppHeader>
		<main class="app-main">
			<NuxtPage />
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
			:link-privacy="t('footer.linkPrivacy')"
			:link-terms="t('footer.linkTerms')"
			:link-refund="t('footer.linkRefund')"
			:link-contact="t('footer.linkContact')"
			:copyright-line="t('footer.copyright', { year: year })"
			:links="footerLinks"
		/>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useI18n, useRuntimeConfig, useLocalePath, useLocaleHead, useHead } from '#imports';
	import AppFooter from '@ui-kit/components/layout/AppFooter.vue';
	import AppHeader from '@ui-kit/components/layout/AppHeader.vue';
	import LandingLocaleSwitcher from '~/components/LandingLocaleSwitcher.vue';
	import { LOCALE_QUERY_PARAM } from '@i18n';

	const { t, locale } = useI18n();

	// Adds hreflang alternate links to <head> for all locales
	const i18nHead = useLocaleHead({ addSeoAttributes: true });
	useHead(() => ({
		htmlAttrs: i18nHead.value.htmlAttrs,
		link: i18nHead.value.link,
		meta: i18nHead.value.meta,
	}));
	const config = useRuntimeConfig();
	const localePath = useLocalePath();

	const year = new Date().getFullYear();

	const appApplyUrl = computed(() => {
		const base = String(config.public.appUrl || '').trim().replace(/\/+$/, '');
		if (!base) return '/apply';
		const qs = new URLSearchParams({ [LOCALE_QUERY_PARAM]: locale.value });
		return `${base}/apply?${qs.toString()}`;
	});

	const footerLinks = computed(() => ({
		pricing: localePath({ name: 'index', hash: '#pricing' }),
		howItWorks: localePath({ name: 'index', hash: '#how-it-works' }),
		faq: localePath({ name: 'index', hash: '#faq' }),
		privacy: localePath({ name: 'privacy-policy' }),
		terms: localePath({ name: 'terms-of-service' }),
		refund: localePath({ name: 'refund-policy' }),
		contact: localePath({ name: 'index', hash: '#faq' }),
	}));
</script>

<style scoped>
	.app-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.app-main {
		flex: 1;
		background: #f3f4f6;
	}
</style>
