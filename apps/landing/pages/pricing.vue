<template>
  <article class="pricing-page">

    <!-- Hero -->
    <section class="section bg-mint/40">
      <div class="container max-w-4xl">
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
          {{ t('pricing.leadKicker') }}
        </p>
        <h1 class="mb-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          {{ t('pricing.h1') }}
        </h1>
        <p class="mb-3 max-w-2xl text-lg font-semibold text-slate-800">
          {{ t('pricing.leadTitle') }}
        </p>
        <p class="max-w-2xl text-sm leading-relaxed text-slate-700">
          {{ t('pricing.leadText') }}
        </p>
      </div>
    </section>

    <!-- Plan cards -->
    <section class="section bg-white">
      <div class="container">
        <div class="mb-8 max-w-2xl">
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900">
            {{ t('pricing.plansHeading') }}
          </h2>
          <p class="text-sm text-slate-600">
            {{ t('pricing.plansLead') }}
          </p>
        </div>

        <div class="pricing-plans grid gap-5 md:grid-cols-3">
          <div
            v-for="plan in plans"
            :key="plan.years"
            class="pricing-plan rounded-2xl border bg-white p-6 shadow-soft transition hover:-translate-y-px"
            :class="plan.recommended
              ? 'border-sea ring-2 ring-sea/20'
              : 'border-slate-200'"
          >
            <div class="mb-3 flex items-center justify-between gap-2">
              <span class="text-sm font-extrabold uppercase tracking-wide text-slate-700">
                {{ plan.title }}
              </span>
              <span
                v-if="plan.recommended"
                class="rounded-full bg-sea/15 px-2 py-0.5 text-[10px] font-extrabold text-sea"
              >
                {{ t('pricing.plan5Badge') }}
              </span>
            </div>

            <div class="pricing-plan__price mb-2 flex items-baseline gap-2">
              <span class="text-4xl font-extrabold text-slate-900">{{ plan.price }}</span>
              <span class="text-xs text-slate-500">{{ plan.sub }}</span>
            </div>

            <p class="pricing-plan__per-year mb-4 text-xs text-slate-500">
              {{ formatPerYear(plan) }}
            </p>

            <p class="pricing-plan__desc mb-5 min-h-12 text-sm text-slate-700">
              {{ plan.desc }}
            </p>

            <a
              :href="planHref(plan.years)"
              class="block"
              @click.prevent="onPlanClick(plan.years)"
            >
              <BaseButton type="button" :variant="plan.recommended ? 'primary' : 'secondary'" class="w-full">
                <span class="font-bold">{{ t('pricing.ctaPlan') }}</span>
              </BaseButton>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- What's included -->
    <section class="section bg-slate-50">
      <div class="container max-w-4xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          {{ t('pricing.includedHeading') }}
        </h2>
        <ul class="grid gap-3 md:grid-cols-2">
          <li v-for="key in includedKeys" :key="key" class="flex gap-2 text-sm text-slate-700">
            <span class="text-sea">✓</span>
            <span>{{ t(`pricing.${key}`) }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Comparison table -->
    <section class="section bg-white">
      <div class="container max-w-4xl">
        <h2 class="mb-3 text-2xl font-extrabold text-slate-900">
          {{ t('pricing.compareHeading') }}
        </h2>
        <p class="mb-6 max-w-3xl text-sm leading-relaxed text-slate-700">
          {{ t('pricing.compareLead') }}
        </p>

        <div class="compare-table overflow-x-auto rounded-2xl border border-slate-200">
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th class="px-4 py-3 font-extrabold">{{ t('pricing.compareColService') }}</th>
                <th class="px-4 py-3 font-extrabold">{{ t('pricing.compareColPrice1y') }}</th>
                <th class="px-4 py-3 font-extrabold">{{ t('pricing.compareColPrice3y') }}</th>
                <th class="px-4 py-3 font-extrabold">{{ t('pricing.compareColPrice5y') }}</th>
                <th class="px-4 py-3 font-extrabold">{{ t('pricing.compareColDelivery') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr class="bg-mint/20">
                <td class="px-4 py-3 font-extrabold text-slate-900">{{ t('pricing.compareUs') }}</td>
                <td class="px-4 py-3 font-bold text-slate-900">{{ t('pricing.plan1Price') }}</td>
                <td class="px-4 py-3 font-bold text-slate-900">{{ t('pricing.plan3Price') }}</td>
                <td class="px-4 py-3 font-bold text-slate-900">{{ t('pricing.plan5Price') }}</td>
                <td class="px-4 py-3 text-slate-700">{{ t('pricing.compareUsDelivery') }}</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-900">{{ t('pricing.compareIda') }}</td>
                <td class="px-4 py-3 text-slate-700">{{ t('pricing.compareIdaPrice1y') }}</td>
                <td class="px-4 py-3 text-slate-700">{{ t('pricing.compareIdaPrice3y') }}</td>
                <td class="px-4 py-3 text-slate-500">{{ t('pricing.compareIdaPrice5y') }}</td>
                <td class="px-4 py-3 text-slate-700">{{ t('pricing.compareIdaDelivery') }}</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-slate-900">{{ t('pricing.compareAaa') }}</td>
                <td class="px-4 py-3 text-slate-700">{{ t('pricing.compareAaaPrice1y') }}</td>
                <td class="px-4 py-3 text-slate-500">{{ t('pricing.compareAaaPrice3y') }}</td>
                <td class="px-4 py-3 text-slate-500">{{ t('pricing.compareAaaPrice5y') }}</td>
                <td class="px-4 py-3 text-slate-700">{{ t('pricing.compareAaaDelivery') }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="mt-3 text-xs text-slate-500">
          {{ t('pricing.compareNote') }}
        </p>
      </div>
    </section>

    <!-- Honest disclaimer -->
    <section class="section bg-mint/15">
      <div class="container max-w-3xl">
        <div class="rounded-2xl border border-sea/20 bg-white p-6 shadow-soft">
          <h2 class="mb-2 text-base font-extrabold uppercase tracking-wide text-slate-900">
            {{ t('pricing.honestyHeading') }}
          </h2>
          <p class="text-sm leading-relaxed text-slate-700">
            {{ t('pricing.honestyText') }}
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section bg-slate-50">
      <div class="container max-w-3xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          {{ t('pricing.faqHeading') }}
        </h2>

        <FaqAccordion :items="pricingFaqs" id-prefix="pricing-faq" />
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section bg-white border-t border-sea/10">
      <div class="container flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900">
            {{ t('pricing.ctaTitle') }}
          </h2>
          <p class="max-w-xl text-sm leading-relaxed text-slate-700">
            {{ t('pricing.ctaText') }}
          </p>
        </div>
        <div>
          <a :href="planHref()" @click.prevent="onPlanClick()">
            <BaseButton type="button" variant="primary">
              <span class="font-bold">{{ t('pricing.ctaButton') }}</span>
            </BaseButton>
          </a>
        </div>
      </div>
    </section>

  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHead, useSeoMeta, useI18n, useRuntimeConfig, useLocalePath } from '#imports';
import { LOCALE_QUERY_PARAM } from '@i18n';
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';
import { useProductAnalytics } from '~/composables/useProductAnalytics';

const { t, locale } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { capture } = useProductAnalytics();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const canonicalPath = computed(() => String(localePath({ name: 'pricing' })));
const canonicalUrl = computed(() => siteUrl + canonicalPath.value);

const appUrl = computed(() => String(config.public.appUrl || '').trim().replace(/\/+$/, ''));

type PricingPlan = {
  years: 1 | 3 | 5;
  title: string;
  sub: string;
  desc: string;
  price: string;
  priceUsd: number;
  recommended: boolean;
};

const plans = computed<PricingPlan[]>(() => {
  void locale.value;
  return [
    {
      years: 1,
      title: t('pricing.plan1Title'),
      sub: t('pricing.plan1Sub'),
      desc: t('pricing.plan1Desc'),
      price: t('pricing.plan1Price'),
      priceUsd: 35,
      recommended: false,
    },
    {
      years: 3,
      title: t('pricing.plan3Title'),
      sub: t('pricing.plan3Sub'),
      desc: t('pricing.plan3Desc'),
      price: t('pricing.plan3Price'),
      priceUsd: 45,
      recommended: false,
    },
    {
      years: 5,
      title: t('pricing.plan5Title'),
      sub: t('pricing.plan5Sub'),
      desc: t('pricing.plan5Desc'),
      price: t('pricing.plan5Price'),
      priceUsd: 55,
      recommended: true,
    },
  ];
});

const includedKeys = ['included1', 'included2', 'included3', 'included4', 'included5', 'included6'] as const;

const pricingFaqs = computed(() => {
  void locale.value;
  return [1, 2, 3, 4, 5].map((id) => ({
    id,
    question: t(`pricing.faq${id}Q`),
    answer: t(`pricing.faq${id}A`),
  }));
});

function formatPerYear(plan: PricingPlan): string {
  const perYear = (plan.priceUsd / plan.years).toFixed(2).replace(/\.00$/, '');
  return `$${perYear} ${t('pricing.perYearLabel')}`;
}

function planHref(years?: 1 | 3 | 5): string {
  if (!appUrl.value) return '#';
  const qs = new URLSearchParams({ [LOCALE_QUERY_PARAM]: locale.value });
  if (years) qs.set('planYears', String(years));
  return `${appUrl.value}/apply?${qs.toString()}`;
}

function onPlanClick(years?: 1 | 3 | 5) {
  capture('pricing_plan_click', {
    plan_years: years ?? null,
    locale: locale.value,
    source: 'pricing_page',
  });
  if (typeof window !== 'undefined') {
    window.location.href = planHref(years);
  }
}

useSeoMeta({
  title: () => t('pricing.seoTitle'),
  description: () => t('pricing.seoDesc'),
  ogTitle: () => t('pricing.seoTitle'),
  ogDescription: () => t('pricing.seoDesc'),
  ogImage: () => t('seo.ogImage'),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogImageAlt: 'IDP Companion — Pricing',
  ogImageSecureUrl: () => t('seo.ogImage'),
  ogUrl: () => canonicalUrl.value,
  ogType: 'website',
  ogSiteName: 'IDP Companion',
  ogLocale: () => toOgLocale(locale.value),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('pricing.seoTitle'),
  twitterDescription: () => t('pricing.seoDesc'),
  twitterImage: () => t('seo.ogImage'),
  twitterImageAlt: 'IDP Companion — Pricing',
});

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'IDP Companion',
        description: t('pricing.leadText'),
        url: canonicalUrl.value,
        brand: { '@type': 'Brand', name: 'IDP Companion' },
        publisher: { '@id': `${siteUrl}/#organization` },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '35',
          highPrice: '55',
          offerCount: '3',
          availability: 'https://schema.org/InStock',
          offers: plans.value.map((p) => ({
            '@type': 'Offer',
            name: p.title,
            description: p.desc,
            price: String(p.priceUsd),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: canonicalUrl.value,
          })),
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('pricing.h1'),
            item: canonicalUrl.value,
          },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pricingFaqs.value.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }),
    },
  ],
}));
</script>

<style scoped lang="scss">
.faq-enter-active,
.faq-leave-active {
  transition: all 0.15s ease;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}

.pricing-plan {
  display: flex;
  flex-direction: column;
}
</style>
