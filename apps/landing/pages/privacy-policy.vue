<template>
	<section class="section">
		<div class="container">
			<article class="legal-page bg-white rounded-2xl p-8 md:p-10 shadow-soft">
				<h1 class="legal-page__title text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
					{{ t('legal.privacyTitle') }}
				</h1>
				<p class="legal-page__updated text-sm text-slate-500 mb-8">
					{{ t('legal.updatedLabel') }} {{ doc.updated }}
				</p>

				<LegalDocumentBody :doc="doc" />

				<div class="legal-page__back mt-10 pt-6 border-t border-slate-200">
					<NuxtLinkLocale
						to="/"
						class="back-link text-sm font-semibold text-slate-700 no-underline hover:text-slate-900"
					>
						{{ t('legal.backHome') }}
					</NuxtLinkLocale>
				</div>
			</article>
		</div>
	</section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const doc = useLegalPrivacy();
const config = useRuntimeConfig();
const localePath = useLocalePath();

const canonicalUrl = computed(() => {
	const base = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
	const p = String(localePath({ name: 'privacy-policy' }));
	return `${base}${p}`;
});

useSeoMeta({
	title: () => t('legal.seoPrivacyTitle'),
	description: () => t('legal.seoPrivacyDesc'),
	ogTitle: () => t('legal.seoPrivacyTitle'),
	ogDescription: () => t('legal.seoPrivacyDesc'),
	ogType: 'website',
	ogUrl: () => canonicalUrl.value,
	ogImage: () => t('seo.ogImage'),
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageType: 'image/png',
	ogImageAlt: 'IDP Companion — Instant Multilingual PDF',
	ogImageSecureUrl: () => t('seo.ogImage'),
	ogSiteName: 'IDP Companion',
	ogLocale: () => locale.value,
	twitterCard: 'summary_large_image',
	twitterTitle: () => t('legal.seoPrivacyTitle'),
	twitterDescription: () => t('legal.seoPrivacyDesc'),
	twitterImage: () => t('seo.ogImage'),
	twitterImageAlt: 'IDP Companion — Instant Multilingual PDF',
});

useHead({
	link: () => [{ rel: 'canonical', href: canonicalUrl.value }],
});
</script>
