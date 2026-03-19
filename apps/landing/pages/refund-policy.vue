<template>
	<section class="section">
		<div class="container">
			<article class="legal-page bg-white rounded-2xl p-8 md:p-10 shadow-soft">
				<h1 class="legal-page__title text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
					{{ t('legal.refundTitle') }}
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
const doc = useLegalRefund();

useSeoMeta({
	title: () => t('legal.seoRefundTitle'),
	description: () => t('legal.seoRefundDesc'),
	ogTitle: () => t('legal.seoRefundTitle'),
	ogDescription: () => t('legal.seoRefundDesc'),
});

const config = useRuntimeConfig();
const canonicalUrl = computed(() => {
	const base = config.public.siteUrl
		? String(config.public.siteUrl).replace(/\/$/, '')
		: '';
	if (!base) return null;
	const path = locale.value === 'en' ? '/refund-policy' : `/${locale.value}/refund-policy`;
	return `${base}${path}`;
});

useHead({
	link: () => (canonicalUrl.value ? [{ rel: 'canonical', href: canonicalUrl.value }] : []),
});
</script>
