<template>
  <article class="how-page">

    <!-- Hero -->
    <section class="section how-page__hero">
      <div class="container max-w-4xl">
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
          {{ t('howItWorksPage.hero.kicker') }}
        </p>
        <h1 class="mb-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          {{ t('howItWorksPage.hero.h1') }}
        </h1>
        <p class="mb-7 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
          {{ t('howItWorksPage.hero.lead') }}
        </p>

        <div class="mb-7 flex flex-wrap gap-2">
          <span class="how-page__badge">
            <Icon icon="ph:list-numbers-bold" width="14" />
            {{ t('howItWorksPage.badges.steps') }}
          </span>
          <span class="how-page__badge">
            <Icon icon="ph:timer-bold" width="14" />
            {{ t('howItWorksPage.badges.time') }}
          </span>
          <span class="how-page__badge">
            <Icon icon="ph:shield-check-bold" width="14" />
            {{ t('howItWorksPage.badges.security') }}
          </span>
        </div>

        <div class="flex flex-wrap gap-3">
          <a :href="appliesHref" class="block" @click.prevent="onPrimaryCtaClick">
            <BaseButton type="button" variant="primary">
              <span class="font-bold">{{ t('howItWorksPage.hero.ctaPrimary') }}</span>
            </BaseButton>
          </a>
          <NuxtLinkLocale to="/pricing" class="block">
            <BaseButton type="button" variant="secondary">
              <span class="font-bold">{{ t('howItWorksPage.hero.ctaSecondary') }}</span>
            </BaseButton>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- 5 steps timeline -->
    <section class="section bg-white">
      <div class="container">
        <div class="mb-10 max-w-3xl">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
            {{ t('howItWorksPage.stepsSection.heading') }}
          </h2>
          <p class="text-sm leading-relaxed text-slate-700 md:text-base">
            {{ t('howItWorksPage.stepsSection.lead') }}
          </p>
        </div>

        <ol class="how-page__steps">
          <li
            v-for="(step, i) in steps"
            :key="step.id"
            :id="step.anchor"
            class="how-page__step"
          >
            <div class="how-page__step-marker">
              <span class="how-page__step-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="how-page__step-icon">
                <Icon :icon="step.icon" width="22" />
              </div>
            </div>
            <div class="how-page__step-body">
              <h3 class="how-page__step-title">{{ step.title }}</h3>
              <p class="how-page__step-summary">{{ step.summary }}</p>
              <p class="how-page__step-detail">{{ step.detail }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Verification deep-dive: OCR + Face match -->
    <section class="section how-page__section--slate">
      <div class="container">
        <div class="mb-10 max-w-3xl">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
            {{ t('howItWorksPage.verification.heading') }}
          </h2>
          <p class="text-sm leading-relaxed text-slate-700 md:text-base">
            {{ t('howItWorksPage.verification.lead') }}
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <article
            v-for="block in verificationBlocks"
            :key="block.id"
            class="how-page__verify"
          >
            <div class="how-page__verify-head">
              <div class="how-page__verify-icon">
                <Icon :icon="block.icon" width="26" />
              </div>
              <h3 class="how-page__verify-title">{{ block.title }}</h3>
            </div>
            <p class="how-page__verify-body">{{ block.body }}</p>
            <ul class="how-page__verify-chips">
              <li v-for="(chip, idx) in block.chips" :key="idx" class="how-page__verify-chip">
                <Icon icon="ph:check-circle-bold" width="14" class="text-sea" />
                <span>{{ chip }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- What you receive -->
    <section class="section bg-white">
      <div class="container">
        <div class="mb-10 max-w-3xl">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
            {{ t('howItWorksPage.whatYouGet.heading') }}
          </h2>
          <p class="text-sm leading-relaxed text-slate-700 md:text-base">
            {{ t('howItWorksPage.whatYouGet.lead') }}
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="card in receiveCards"
            :key="card.id"
            class="how-page__receive"
          >
            <div class="how-page__receive-icon">
              <Icon :icon="card.icon" width="22" />
            </div>
            <h3 class="how-page__receive-title">{{ card.title }}</h3>
            <p class="how-page__receive-body">{{ card.body }}</p>
          </div>
        </div>

        <div class="how-page__langs">
          <p class="how-page__langs-label">{{ t('howItWorksPage.whatYouGet.languages.title') }}</p>
          <ul class="how-page__langs-list">
            <li v-for="code in languageCodes" :key="code" class="how-page__lang-chip">
              <span class="how-page__lang-code">{{ code.toUpperCase() }}</span>
              <span>{{ t(`howItWorksPage.whatYouGet.languages.list.${code}`) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Timing breakdown -->
    <section class="section how-page__section--mint">
      <div class="container max-w-3xl">
        <div class="mb-8">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
            {{ t('howItWorksPage.timing.heading') }}
          </h2>
          <p class="text-sm leading-relaxed text-slate-700 md:text-base">
            {{ t('howItWorksPage.timing.lead') }}
          </p>
        </div>

        <div class="how-page__timing">
          <div class="how-page__timing-header">
            <span>{{ t('howItWorksPage.timing.colStep') }}</span>
            <span>{{ t('howItWorksPage.timing.colTime') }}</span>
          </div>
          <ol class="how-page__timing-rows">
            <li
              v-for="row in timingRows"
              :key="row.id"
              class="how-page__timing-row"
            >
              <span class="how-page__timing-label">{{ row.label }}</span>
              <span class="how-page__timing-time">{{ row.time }}</span>
            </li>
          </ol>
          <div class="how-page__timing-total">
            <span class="how-page__timing-total-label">{{ t('howItWorksPage.timing.totalLabel') }}</span>
            <span class="how-page__timing-total-value">{{ t('howItWorksPage.timing.totalValue') }}</span>
          </div>
        </div>

        <p class="mt-5 text-sm leading-relaxed text-slate-600">
          {{ t('howItWorksPage.timing.note') }}
        </p>
      </div>
    </section>

    <!-- Trust signals -->
    <section class="section bg-white">
      <div class="container">
        <div class="mb-10 max-w-3xl">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
            {{ t('howItWorksPage.trust.heading') }}
          </h2>
          <p class="text-sm leading-relaxed text-slate-700 md:text-base">
            {{ t('howItWorksPage.trust.lead') }}
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="item in trustItems"
            :key="item.id"
            class="how-page__trust"
          >
            <div class="how-page__trust-icon">
              <Icon :icon="item.icon" width="22" />
            </div>
            <div>
              <p class="how-page__trust-label">{{ item.label }}</p>
              <p class="how-page__trust-detail">{{ item.detail }}</p>
            </div>
          </div>
        </div>

        <div class="how-page__trust-links">
          <NuxtLinkLocale to="/faq#privacy-and-security" class="how-page__trust-link">
            <Icon icon="ph:arrow-right-bold" width="14" />
            {{ t('howItWorksPage.trust.learnMoreFaq') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/privacy-policy" class="how-page__trust-link">
            <Icon icon="ph:arrow-right-bold" width="14" />
            {{ t('howItWorksPage.trust.learnMorePrivacy') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section how-page__cta-section">
      <div class="container max-w-3xl text-center">
        <h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
          {{ t('howItWorksPage.cta.heading') }}
        </h2>
        <p class="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
          {{ t('howItWorksPage.cta.text') }}
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <a :href="appliesHref" class="block" @click.prevent="onPrimaryCtaClick">
            <BaseButton type="button" variant="primary">
              <span class="font-bold">{{ t('howItWorksPage.cta.primaryButton') }}</span>
            </BaseButton>
          </a>
          <NuxtLinkLocale to="/pricing" class="block">
            <BaseButton type="button" variant="secondary">
              <span class="font-bold">{{ t('howItWorksPage.cta.secondaryButton') }}</span>
            </BaseButton>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  useHead,
  useSeoMeta,
  useI18n,
  useRuntimeConfig,
  useLocalePath,
} from '#imports';
import { Icon } from '@iconify/vue';
import { LOCALE_QUERY_PARAM } from '@i18n';
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import { useProductAnalytics } from '~/composables/useProductAnalytics';
import { toOgLocale } from '~/utils/ogLocale';

const { t, locale } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { capture } = useProductAnalytics();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const canonicalPath = computed(() => String(localePath({ name: 'how-it-works' })));
const canonicalUrl = computed(() => siteUrl + canonicalPath.value);
const appUrl = computed(() => String(config.public.appUrl || '').trim().replace(/\/+$/, ''));

const appliesHref = computed(() => {
  if (!appUrl.value) return '#';
  const qs = new URLSearchParams({ [LOCALE_QUERY_PARAM]: locale.value });
  return `${appUrl.value}/apply?${qs.toString()}`;
});

function onPrimaryCtaClick() {
  capture('how_it_works_cta_click', { target: 'start_application', locale: locale.value });
  if (typeof window !== 'undefined' && appUrl.value) {
    const qs = new URLSearchParams({ [LOCALE_QUERY_PARAM]: locale.value });
    window.location.href = `${appUrl.value}/apply?${qs.toString()}`;
  }
}

/* ---------------------------------------------------------------------------
 * Static data structures — IDs match i18n keys, icons stay in component
 * (icons don't translate and live with the visual layer).
 * ------------------------------------------------------------------------- */

const stepDefs = [
  { id: 'pickPlan',       icon: 'ph:cursor-click-bold',      anchor: 'step-pick-plan' },
  { id: 'uploadLicense',  icon: 'ph:identification-card-bold', anchor: 'step-upload-license' },
  { id: 'selfie',         icon: 'ph:user-focus-bold',        anchor: 'step-selfie' },
  { id: 'pay',            icon: 'ph:credit-card-bold',       anchor: 'step-pay' },
  { id: 'download',       icon: 'ph:file-arrow-down-bold',   anchor: 'step-download' },
] as const;

const steps = computed(() => {
  void locale.value;
  return stepDefs.map((s) => ({
    id: s.id,
    icon: s.icon,
    anchor: s.anchor,
    title: t(`howItWorksPage.steps.${s.id}.title`),
    summary: t(`howItWorksPage.steps.${s.id}.summary`),
    detail: t(`howItWorksPage.steps.${s.id}.detail`),
  }));
});

const verificationDefs = [
  { id: 'ocr',  icon: 'ph:scan-bold' },
  { id: 'face', icon: 'ph:scan-smiley-bold' },
] as const;

const verificationBlocks = computed(() => {
  void locale.value;
  return verificationDefs.map((b) => ({
    id: b.id,
    icon: b.icon,
    title: t(`howItWorksPage.verification.${b.id}.title`),
    body: t(`howItWorksPage.verification.${b.id}.body`),
    chips: [
      t(`howItWorksPage.verification.${b.id}.chip1`),
      t(`howItWorksPage.verification.${b.id}.chip2`),
      t(`howItWorksPage.verification.${b.id}.chip3`),
      t(`howItWorksPage.verification.${b.id}.chip4`),
    ],
  }));
});

const receiveDefs = [
  { id: 'format',    icon: 'ph:file-pdf-bold' },
  { id: 'languages', icon: 'ph:translate-bold' },
  { id: 'usage',     icon: 'ph:printer-bold' },
  { id: 'validity',  icon: 'ph:arrow-clockwise-bold' },
] as const;

const receiveCards = computed(() => {
  void locale.value;
  return receiveDefs.map((c) => ({
    id: c.id,
    icon: c.icon,
    title: t(`howItWorksPage.whatYouGet.${c.id}.title`),
    body: t(`howItWorksPage.whatYouGet.${c.id}.body`),
  }));
});

const languageCodes = ['en', 'fr', 'es', 'de', 'it', 'pt', 'vi', 'ru', 'ar', 'zh', 'ja', 'th'] as const;

const timingDefs = [
  'pickPlan',
  'uploadLicense',
  'ocr',
  'selfie',
  'faceMatch',
  'payment',
  'pdfGeneration',
] as const;

const timingRows = computed(() => {
  void locale.value;
  return timingDefs.map((id) => ({
    id,
    label: t(`howItWorksPage.timing.rows.${id}.label`),
    time: t(`howItWorksPage.timing.rows.${id}.time`),
  }));
});

const trustDefs = [
  { id: 'licensePhoto', icon: 'ph:image-bold' },
  { id: 'headshot',     icon: 'ph:user-bold' },
  { id: 'payment',      icon: 'ph:credit-card-bold' },
  { id: 'servers',      icon: 'ph:server-bold' },
] as const;

const trustItems = computed(() => {
  void locale.value;
  return trustDefs.map((t_) => ({
    id: t_.id,
    icon: t_.icon,
    label: t(`howItWorksPage.trust.items.${t_.id}.label`),
    detail: t(`howItWorksPage.trust.items.${t_.id}.detail`),
  }));
});

/* ---------------------------------------------------------------------------
 * SEO + HowTo JSON-LD schema
 * ------------------------------------------------------------------------- */

useSeoMeta({
  title: () => t('howItWorksPage.seo.title'),
  description: () => t('howItWorksPage.seo.description'),
  ogTitle: () => t('howItWorksPage.seo.title'),
  ogDescription: () => t('howItWorksPage.seo.description'),
  ogImage: () => t('seo.ogImage'),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogImageAlt: 'IDP Companion — How it works',
  ogImageSecureUrl: () => t('seo.ogImage'),
  ogUrl: () => canonicalUrl.value,
  ogType: 'website',
  ogSiteName: 'IDP Companion',
  ogLocale: () => toOgLocale(locale.value),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('howItWorksPage.seo.title'),
  twitterDescription: () => t('howItWorksPage.seo.description'),
  twitterImage: () => t('seo.ogImage'),
  twitterImageAlt: 'IDP Companion — How it works',
});

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script: [
    // HowTo schema — describes the 5-step process, eligible for rich results
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: t('howItWorksPage.hero.h1'),
        description: t('howItWorksPage.seo.description'),
        url: canonicalUrl.value,
        totalTime: 'PT2M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '35',
        },
        supply: [
          { '@type': 'HowToSupply', name: "A clear phone photo of the driver's license" },
          { '@type': 'HowToSupply', name: 'A selfie photo for face verification' },
          { '@type': 'HowToSupply', name: 'A payment method (card / PayPal / Apple Pay)' },
        ],
        step: steps.value.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.title,
          text: s.summary,
          url: `${canonicalUrl.value}#${s.anchor}`,
        })),
      }),
    },
    // Breadcrumbs for the page
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t('layout.navHome') || 'Home',
            item: `${siteUrl}${localePath('/')}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('howItWorksPage.hero.h1'),
            item: canonicalUrl.value,
          },
        ],
      }),
    },
  ],
}));
</script>

<style scoped lang="scss">
.how-page__hero {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.18) 100%);
}

.how-page__section--slate {
	background: rgb(248 250 252); /* slate-50 */
}

.how-page__section--mint {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.18) 0%, rgba(var(--c-mint), 0.42) 100%);
}

.how-page__cta-section {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.25) 0%, rgba(var(--c-mint), 0.6) 100%);
}

.how-page__badge {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 6px 12px;
	background: rgb(255 255 255 / 0.85);
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 999px;
	font-size: 12.5px;
	font-weight: 600;
	color: rgb(var(--c-slate-800));
}

/* --- Steps timeline --- */

.how-page__steps {
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	gap: 28px;
	position: relative;
}

@media (min-width: 768px) {
	/* Vertical connector line on the left through the step markers */
	.how-page__steps::before {
		content: '';
		position: absolute;
		left: 27px; /* aligns with marker center */
		top: 28px;
		bottom: 28px;
		width: 2px;
		background: rgb(var(--c-sea) / 0.18);
		border-radius: 1px;
	}
}

.how-page__step {
	display: grid;
	gap: 16px;
	grid-template-columns: auto 1fr;
	scroll-margin-top: 96px;
}

.how-page__step-marker {
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding-top: 2px;
}

.how-page__step-num {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 56px;
	height: 28px;
	border-radius: 999px;
	background: white;
	border: 2px solid rgb(var(--c-sea));
	color: rgb(var(--c-sea));
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0.06em;
}

.how-page__step-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	border-radius: 12px;
	background: rgb(var(--c-mint) / 0.55);
	color: rgb(var(--c-sea));
}

.how-page__step-body {
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 16px;
	padding: 18px 22px;
	box-shadow: 0 2px 12px rgb(15 23 42 / 0.04);
}

.how-page__step-title {
	margin: 0 0 6px;
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.3;
}

@media (min-width: 768px) {
	.how-page__step-title {
		font-size: 20px;
	}
}

.how-page__step-summary {
	margin: 0 0 10px;
	font-size: 15px;
	font-weight: 600;
	color: rgb(var(--c-slate-800));
	line-height: 1.45;
}

.how-page__step-detail {
	margin: 0;
	font-size: 14px;
	color: rgb(var(--c-slate-600));
	line-height: 1.6;
}

/* --- Verification deep-dive cards --- */

.how-page__verify {
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 18px;
	padding: 26px 24px;
	box-shadow: 0 2px 14px rgb(15 23 42 / 0.04);
}

.how-page__verify-head {
	display: flex;
	align-items: center;
	gap: 14px;
	margin-bottom: 14px;
	padding-bottom: 14px;
	border-bottom: 1px solid rgb(var(--c-slate-200));
}

.how-page__verify-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: 14px;
	background: rgb(var(--c-mint) / 0.55);
	color: rgb(var(--c-sea));
}

.how-page__verify-title {
	margin: 0;
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.3;
}

@media (min-width: 768px) {
	.how-page__verify-title {
		font-size: 20px;
	}
}

.how-page__verify-body {
	margin: 0 0 16px;
	font-size: 14px;
	color: rgb(var(--c-slate-700));
	line-height: 1.6;
}

.how-page__verify-chips {
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	gap: 8px;
}

.how-page__verify-chip {
	display: inline-flex;
	align-items: flex-start;
	gap: 8px;
	font-size: 13px;
	color: rgb(var(--c-slate-700));
	font-weight: 600;
	line-height: 1.45;
}

.how-page__verify-chip > :first-child {
	flex-shrink: 0;
	margin-top: 2px;
}

/* --- "What you receive" cards + languages list --- */

.how-page__receive {
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 16px;
	padding: 22px 20px;
	transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.how-page__receive:hover {
	border-color: rgb(var(--c-sea) / 0.5);
	box-shadow: 0 4px 16px rgb(15 23 42 / 0.05);
}

.how-page__receive-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 11px;
	background: rgb(var(--c-mint) / 0.55);
	color: rgb(var(--c-sea));
	margin-bottom: 14px;
}

.how-page__receive-title {
	margin: 0 0 6px;
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.3;
}

.how-page__receive-body {
	margin: 0;
	font-size: 13.5px;
	color: rgb(var(--c-slate-600));
	line-height: 1.55;
}

.how-page__langs {
	margin-top: 32px;
	padding: 22px 24px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 16px;
}

.how-page__langs-label {
	margin: 0 0 14px;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
}

.how-page__langs-list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.how-page__lang-chip {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 6px 12px 6px 8px;
	background: rgb(var(--c-mint) / 0.32);
	border: 1px solid rgb(var(--c-mint));
	border-radius: 999px;
	font-size: 13px;
	font-weight: 600;
	color: rgb(var(--c-slate-800));
}

.how-page__lang-code {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 26px;
	height: 22px;
	padding: 0 6px;
	background: rgb(var(--c-sea));
	color: white;
	border-radius: 6px;
	font-size: 10.5px;
	font-weight: 800;
	letter-spacing: 0.04em;
}

/* --- Timing table --- */

.how-page__timing {
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 16px;
	overflow: hidden;
}

.how-page__timing-header {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 16px;
	padding: 12px 22px;
	background: rgb(var(--c-slate-50, 248 250 252));
	border-bottom: 1px solid rgb(var(--c-slate-200));
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
}

.how-page__timing-rows {
	list-style: none;
	margin: 0;
	padding: 0;
}

.how-page__timing-row {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 16px;
	padding: 14px 22px;
	border-bottom: 1px solid rgb(var(--c-slate-100));
	align-items: center;
}

.how-page__timing-row:last-child {
	border-bottom: 0;
}

.how-page__timing-label {
	font-size: 14px;
	color: rgb(var(--c-slate-800));
	font-weight: 600;
}

.how-page__timing-time {
	font-size: 14px;
	color: rgb(var(--c-slate-600));
	font-variant-numeric: tabular-nums;
}

.how-page__timing-total {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 16px;
	padding: 16px 22px;
	background: rgb(var(--c-sea));
	color: white;
	align-items: center;
}

.how-page__timing-total-label {
	font-size: 14px;
	font-weight: 800;
	letter-spacing: 0.04em;
	text-transform: uppercase;
}

.how-page__timing-total-value {
	font-size: 16px;
	font-weight: 800;
	font-variant-numeric: tabular-nums;
}

/* --- Trust signals --- */

.how-page__trust {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 16px;
	padding: 22px 22px;
	background: rgb(var(--c-mint) / 0.18);
	border: 1px solid rgb(var(--c-mint));
	border-radius: 16px;
}

.how-page__trust-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 11px;
	background: white;
	color: rgb(var(--c-sea));
}

.how-page__trust-label {
	margin: 0 0 4px;
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.3;
}

.how-page__trust-detail {
	margin: 0;
	font-size: 13.5px;
	color: rgb(var(--c-slate-700));
	line-height: 1.6;
}

.how-page__trust-links {
	margin-top: 24px;
	display: flex;
	flex-wrap: wrap;
	gap: 18px 28px;
}

.how-page__trust-link {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 14px;
	font-weight: 600;
	color: rgb(var(--c-sea));
	text-decoration: none;
	transition: color 0.15s ease;
}

.how-page__trust-link:hover {
	color: rgb(var(--c-slate-900));
	text-decoration: underline;
}
</style>
