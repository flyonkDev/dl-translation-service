<template>
  <div class="min-h-screen">
    <!-- Hero + widget -->
    <section class="section bg-mint/40">
      <div class="container grid gap-8 lg:grid-cols-2 lg:items-start">

        <div class="lg:pr-3">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
            {{ t('home.heroKicker') }}
          </p>

          <h1 class="mb-4 text-[1.8rem] font-extrabold leading-tight text-slate-900 md:text-5xl">
            {{ t('home.heroTitle') }}
          </h1>

          <p class="mb-3 max-w-xl text-sm font-semibold leading-relaxed text-slate-800">
            {{ t('home.heroSubtitle') }}
          </p>

          <p class="mb-4 max-w-xl text-sm leading-relaxed text-slate-700">
            {{ t('home.heroLead') }}
          </p>

          <ul class="mb-5 space-y-2 text-sm text-slate-900">
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.heroBullet1') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.heroBullet2') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.heroBullet3') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.heroBullet4') }}</span>
            </li>
          </ul>

          <NuxtLinkLocale
            to="/pricing"
            class="link group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-sea/40 underline-offset-4"
          >
            {{ t('home.seePricingDetails') }}
            <span aria-hidden="true" class="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </NuxtLinkLocale>

          <p class="mt-3 text-xs text-slate-500">
            {{ t('home.priceNote', { price: `$${fromPrice}` }) }}
          </p>
        </div>

        <StartApplicationWidget
          id="pricing"
          v-model:issueCountry="issueCountry"
          v-model:planYears="planYears"
          :app-url="appUrl"
        />
      </div>
    </section>

    <section class="section trust-block bg-white border-t border-slate-100">
      <div class="container">

        <div class="mb-8 max-w-2xl">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900">
            {{ t('home.trustTitle') }}
          </h2>

          <p class="text-sm leading-relaxed text-slate-700">
            {{ t('home.trustLead') }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">

          <!-- Problems -->
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-900">
              {{ t('home.problemsTitle') }}
            </h3>

            <ul class="space-y-2 text-sm text-slate-700">

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>{{ t('home.problem1') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>{{ t('home.problem2') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>{{ t('home.problem3') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>{{ t('home.problem4') }}</span>
              </li>

            </ul>
          </div>

          <!-- Solution -->
          <div class="rounded-2xl border border-sea/20 bg-mint/30 p-5">
            <h3 class="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-900">
              {{ t('home.solutionTitle') }}
            </h3>

            <ul class="space-y-2 text-sm text-slate-900">

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>{{ t('home.solution1') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>{{ t('home.solution2') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>{{ t('home.solution3') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>{{ t('home.solution4') }}</span>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>

    <section class="section bg-slate-50">
      <div class="container grid gap-10 md:grid-cols-2">

        <!-- Who is this for -->
        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            {{ t('home.whoTitle') }}
          </h2>

          <ul class="space-y-3 text-sm text-slate-700">

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>{{ t('home.who1') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>{{ t('home.who2') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>{{ t('home.who3') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>{{ t('home.who4') }}</span>
            </li>

          </ul>

          <p class="mt-4 text-sm text-slate-500">
            {{ t('home.whoFootnote') }}
          </p>

        </div>

        <!-- What you receive -->
        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            {{ t('home.receiveTitle') }}
          </h2>

          <ul class="space-y-3 text-sm text-slate-700">

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.receive1') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.receive2') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.receive3') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.receive4') }}</span>
            </li>

          </ul>

        </div>

      </div>
    </section>

    <section id="how-it-works" class="section bg-mint/15">
      <div class="container">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          {{ t('home.howTitle') }}
        </h2>

        <div class="grid gap-5 md:grid-cols-3">

          <!-- Step 1 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              1
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              {{ t('home.step1Title') }}
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              {{ t('home.step1Text') }}
            </p>
          </div>

          <!-- Step 2 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              2
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              {{ t('home.step2Title') }}
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              {{ t('home.step2Text') }}
            </p>
          </div>

          <!-- Step 3 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              3
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              {{ t('home.step3Title') }}
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              {{ t('home.step3Text') }}
            </p>
          </div>

        </div>

        <p class="mt-6 text-xs text-slate-400 italic">
          {{ t('home.disclaimerShort') }}
        </p>

      </div>
    </section>

    <!-- Testimonials -->
    <section class="section bg-white border-t border-slate-100">
      <div class="container">

        <div class="mb-10 text-center">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900">
            {{ t('home.testimonialsTitle') }}
          </h2>

          <p class="text-sm text-slate-600">
            {{ t('home.testimonialsLead') }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">

          <!-- Testimonial 1 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              {{ t('home.t1Text') }}
            </p>

            <div class="text-xs text-slate-500">
              {{ t('home.t1Author') }}
            </div>

          </div>

          <!-- Testimonial 2 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              {{ t('home.t2Text') }}
            </p>

            <div class="text-xs text-slate-500">
              {{ t('home.t2Author') }}
            </div>

          </div>

          <!-- Testimonial 3 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              {{ t('home.t3Text') }}
            </p>

            <div class="text-xs text-slate-500">
              {{ t('home.t3Author') }}
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- FAQ -->
    <section id="faq" class="section bg-slate-50">
      <div class="container max-w-3xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          {{ t('home.faqTitle') }}
        </h2>

        <FaqAccordion :items="faqs" id-prefix="home-faq" />
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section bg-white border-t border-sea/10">
      <div class="container flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900">
            {{ t('home.ctaTitle') }}
          </h2>

          <p class="max-w-xl text-sm leading-relaxed text-slate-700">
            {{ t('home.ctaLead') }}
          </p>

          <p class="mt-2 text-xs text-slate-400">
            {{ t('home.ctaDisclaimer') }}
          </p>
        </div>

        <div>
          <BaseButton type="button" variant="primary" @click="scrollToPricing">
            <span class="font-bold">
              {{ t('home.ctaButton') }}
            </span>
          </BaseButton>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead, useSeoMeta, useI18n, useRuntimeConfig, useLocalePath } from '#imports'
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue'
import StartApplicationWidget from '~/components/widgets/StartApplicationWidget.vue'
import FaqAccordion from '~/components/FaqAccordion.vue'
import { useStartApplication } from '~/composables/useStartApplication'
import { useLandingFaqs } from '~/composables/useLandingFaqs'

const config = useRuntimeConfig()
const appUrl = computed(() => String(config.public.appUrl || '').trim())

const { t, locale } = useI18n()
const { issueCountry, planYears, fromPrice, scrollToPricing } = useStartApplication(appUrl)

const faqs = useLandingFaqs()

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '')
const localePath = useLocalePath()
const canonicalPath = computed(() => String(localePath({ name: 'index' })))
const canonicalUrl = computed(() => siteUrl + canonicalPath.value)

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
  ogImage: () => t('seo.ogImage'),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogImageAlt: 'IDP Companion — Instant Multilingual PDF',
  ogImageSecureUrl: () => t('seo.ogImage'),
  ogUrl: () => canonicalUrl.value,
  ogType: 'website',
  ogSiteName: 'IDP Companion',
  ogLocale: () => toOgLocale(locale.value),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.title'),
  twitterDescription: () => t('seo.description'),
  twitterImage: () => t('seo.ogImage'),
  twitterImageAlt: 'IDP Companion — Instant Multilingual PDF',
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'IDP Companion',
        url: `${siteUrl}/`,
        logo: `${siteUrl}/web-app-manifest-512x512.png`,
        email: 'support@idpcompanion.com',
        sameAs: [],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'IDP Companion',
        url: `${siteUrl}/`,
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: locale.value,
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'IDP Companion',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Web',
        description: t('seo.description'),
        url: canonicalUrl.value,
        publisher: { '@id': `${siteUrl}/#organization` },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '35',
          highPrice: '55',
          offerCount: '3',
        },
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.value.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer.filter(Boolean).join(' '),
          },
        })),
      }),
    },
  ],
}))
</script>
