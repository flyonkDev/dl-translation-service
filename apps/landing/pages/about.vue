<template>
  <article class="about-page">

    <!-- Hero -->
    <section class="section bg-mint/40">
      <div class="container max-w-4xl">
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
          {{ t('about.heroKicker') }}
        </p>
        <h1 class="mb-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          {{ t('about.heroH1') }}
        </h1>
        <p class="mb-7 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
          {{ t('about.heroLead') }}
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="about-pill">
            <Icon icon="ph:calendar-blank-bold" width="14" />
            {{ t('about.heroPill1') }}
          </span>
          <span class="about-pill">
            <Icon icon="ph:translate-bold" width="14" />
            {{ t('about.heroPill2') }}
          </span>
          <span class="about-pill">
            <Icon icon="ph:lightning-bold" width="14" />
            {{ t('about.heroPill3') }}
          </span>
        </div>
      </div>
    </section>

    <!-- Rental-desk reality -->
    <section class="section bg-white">
      <div class="container max-w-3xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900 md:text-3xl">
          {{ t('about.realityHeading') }}
        </h2>
        <div class="space-y-5 text-base leading-relaxed text-slate-700">
          <p>{{ t('about.realityP1') }}</p>
          <p>{{ t('about.realityP2') }}</p>
          <p>{{ t('about.realityP3') }}</p>
        </div>
      </div>
    </section>

    <!-- What it actually solves -->
    <section class="section bg-slate-50">
      <div class="container max-w-5xl">
        <div class="mb-8 max-w-2xl">
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
            {{ t('about.solvesHeading') }}
          </h2>
          <p class="text-sm leading-relaxed text-slate-700">
            {{ t('about.solvesLead') }}
          </p>
        </div>
        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="u in useCases" :key="u.key" class="about-usecase">
            <div class="about-usecase__icon">
              <Icon :icon="u.icon" width="22" />
            </div>
            <h3 class="about-usecase__title">{{ u.title }}</h3>
            <p class="about-usecase__text">{{ u.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What it is — and isn't -->
    <section class="section bg-white">
      <div class="container max-w-5xl">
        <h2 class="mb-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
          {{ t('about.dualHeading') }}
        </h2>
        <p class="mb-8 max-w-3xl text-sm leading-relaxed text-slate-700">
          {{ t('about.dualLead') }}
        </p>

        <div class="grid gap-5 md:grid-cols-2">
          <!-- We are -->
          <div class="about-dual about-dual--positive">
            <div class="about-dual__head">
              <span class="about-dual__badge about-dual__badge--positive">
                <Icon icon="ph:check-bold" width="14" />
                {{ t('about.weAreLabel') }}
              </span>
              <h3 class="about-dual__title">{{ t('about.weAreTitle') }}</h3>
            </div>
            <ul class="about-dual__list">
              <li v-for="key in weAreKeys" :key="key">
                <Icon icon="ph:check-circle-bold" width="18" class="about-dual__bullet text-sea" />
                <span>{{ t(`about.${key}`) }}</span>
              </li>
            </ul>
          </div>

          <!-- We are NOT -->
          <div class="about-dual about-dual--negative">
            <div class="about-dual__head">
              <span class="about-dual__badge about-dual__badge--negative">
                <Icon icon="ph:x-bold" width="14" />
                {{ t('about.weAreNotLabel') }}
              </span>
              <h3 class="about-dual__title">{{ t('about.weAreNotTitle') }}</h3>
            </div>
            <ul class="about-dual__list">
              <li v-for="key in weAreNotKeys" :key="key">
                <Icon icon="ph:x-circle-bold" width="18" class="about-dual__bullet text-slate-500" />
                <span>{{ t(`about.${key}`) }}</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500">
          {{ t('about.disclaimerNote') }}
        </p>
      </div>
    </section>

    <!-- Why $35 -->
    <section class="section bg-mint/15">
      <div class="container max-w-5xl">
        <div class="mb-8 max-w-2xl">
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
            {{ t('about.priceHeading') }}
          </h2>
          <p class="text-sm leading-relaxed text-slate-700">
            {{ t('about.priceLead') }}
          </p>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <div v-for="f in priceFactors" :key="f.key" class="about-factor">
            <Icon :icon="f.icon" width="22" class="text-orange" />
            <h3 class="about-factor__title">{{ f.title }}</h3>
            <p class="about-factor__text">{{ f.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="section bg-white">
      <div class="container max-w-5xl">
        <h2 class="mb-8 text-2xl font-extrabold text-slate-900 md:text-3xl">
          {{ t('about.numbersHeading') }}
        </h2>
        <div class="grid gap-4 grid-cols-2 md:grid-cols-4">
          <div v-for="n in numbers" :key="n.key" class="about-number">
            <div class="about-number__value">{{ n.value }}</div>
            <div class="about-number__label">{{ n.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team (compact, no photo, plural voice) -->
    <section class="section bg-slate-50">
      <div class="container max-w-3xl">
        <div class="team-block">
          <p class="team-block__role">{{ t('about.teamRole') }}</p>
          <h2 class="team-block__heading">{{ t('about.teamHeading') }}</h2>
          <p class="team-block__text">{{ t('about.teamP1') }}</p>
          <p class="team-block__text">{{ t('about.teamP2') }}</p>
          <a
            :href="`mailto:${supportEmail}`"
            class="team-block__email"
          >
            <Icon icon="ph:envelope-simple-bold" width="16" />
            {{ supportEmail }}
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section bg-white">
      <div class="container max-w-3xl">
        <h2 class="mb-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
          {{ t('about.faqHeading') }}
        </h2>
        <p class="mb-6 text-sm text-slate-700">
          {{ t('about.faqLead') }}
        </p>
        <FaqAccordion :items="aboutFaqs" id-prefix="about-faq" />
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section bg-white border-t border-sea/10">
      <div class="container flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900">
            {{ t('about.ctaHeading') }}
          </h2>
          <p class="max-w-xl text-sm leading-relaxed text-slate-700">
            {{ t('about.ctaText') }}
          </p>
        </div>
        <div class="flex flex-col gap-2 md:items-end">
          <a :href="applyHref" @click.prevent="onCtaClick">
            <BaseButton type="button" variant="primary">
              <span class="font-bold">{{ t('about.ctaButton') }}</span>
            </BaseButton>
          </a>
          <NuxtLinkLocale to="/pricing" class="text-xs font-semibold text-sea hover:underline">
            {{ t('about.ctaSecondary') }} →
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHead, useSeoMeta, useI18n, useRuntimeConfig, useLocalePath, defineOgImageComponent } from '#imports';
import { Icon } from '@iconify/vue';
import { LOCALE_QUERY_PARAM } from '@i18n';
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';
import { useProductAnalytics } from '~/composables/useProductAnalytics';

const { t, locale } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { capture } = useProductAnalytics();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const supportEmail = String(config.public.supportEmail || 'support@idpcompanion.com');
const appUrl = String(config.public.appUrl || '').trim().replace(/\/+$/, '');

const canonicalPath = computed(() => String(localePath('/about')));
const canonicalUrl = computed(() => siteUrl + canonicalPath.value);

const applyHref = computed(() => {
  if (!appUrl) return '#';
  const qs = new URLSearchParams({ [LOCALE_QUERY_PARAM]: locale.value });
  return `${appUrl}/apply?${qs.toString()}`;
});

function onCtaClick() {
  capture('about_cta_click', { locale: locale.value, source: 'about_page' });
  if (typeof window !== 'undefined') {
    window.location.href = applyHref.value;
  }
}

const useCases = computed(() => {
  void locale.value;
  return [
    {
      key: 'rental',
      icon: 'ph:car-bold',
      title: t('about.useCase1Title'),
      text: t('about.useCase1Text'),
    },
    {
      key: 'police',
      icon: 'ph:shield-check-bold',
      title: t('about.useCase2Title'),
      text: t('about.useCase2Text'),
    },
    {
      key: 'hotel',
      icon: 'ph:buildings-bold',
      title: t('about.useCase3Title'),
      text: t('about.useCase3Text'),
    },
    {
      key: 'insurance',
      icon: 'ph:file-text-bold',
      title: t('about.useCase4Title'),
      text: t('about.useCase4Text'),
    },
  ];
});

const weAreKeys = ['weAre1', 'weAre2', 'weAre3', 'weAre4'] as const;
const weAreNotKeys = ['weAreNot1', 'weAreNot2', 'weAreNot3', 'weAreNot4'] as const;

const priceFactors = computed(() => {
  void locale.value;
  return [
    {
      key: 'digital',
      icon: 'ph:cloud-bold',
      title: t('about.priceFactor1Title'),
      text: t('about.priceFactor1Text'),
    },
    {
      key: 'lean',
      icon: 'ph:user-bold',
      title: t('about.priceFactor2Title'),
      text: t('about.priceFactor2Text'),
    },
    {
      key: 'transparent',
      icon: 'ph:eye-bold',
      title: t('about.priceFactor3Title'),
      text: t('about.priceFactor3Text'),
    },
  ];
});

const numbers = computed(() => {
  void locale.value;
  return [
    { key: 'languages', value: t('about.number1Value'), label: t('about.number1Label') },
    { key: 'delivery',  value: t('about.number2Value'), label: t('about.number2Label') },
    { key: 'pricing',   value: t('about.number3Value'), label: t('about.number3Label') },
    { key: 'refund',    value: t('about.number4Value'), label: t('about.number4Label') },
  ];
});

const aboutFaqs = computed(() => {
  void locale.value;
  return [1, 2, 3, 4, 5].map((id) => ({
    id,
    question: t(`about.faq${id}Q`),
    answer: t(`about.faq${id}A`),
  }));
});

defineOgImageComponent('Generic', {
  title: 'About IDP Companion',
  subtitle: 'The document that actually gets read at rental desks abroad.',
});

useSeoMeta({
  title: () => t('about.seoTitle'),
  description: () => t('about.seoDesc'),
  ogTitle: () => t('about.seoTitle'),
  ogDescription: () => t('about.seoDesc'),
  ogUrl: () => canonicalUrl.value,
  ogType: 'website',
  ogSiteName: 'IDP Companion',
  ogLocale: () => toOgLocale(locale.value),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('about.seoTitle'),
  twitterDescription: () => t('about.seoDesc'),
});

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        url: canonicalUrl.value,
        name: t('about.seoTitle'),
        description: t('about.seoDesc'),
        inLanguage: locale.value,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'IDP Companion',
        url: `${siteUrl}/`,
        logo: `${siteUrl}/og-image.png`,
        email: supportEmail,
        foundingDate: '2025',
        description: t('about.seoDesc'),
        knowsAbout: [
          'International Driving Permit',
          '1949 Geneva Convention',
          '1968 Vienna Convention',
          'Driver license translation',
          'International car rental documentation',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: t('about.heroH1'), item: canonicalUrl.value },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: aboutFaqs.value.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }),
    },
  ],
}));
</script>

<style scoped lang="scss">
.about-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(var(--c-sea), 0.1);
  border: 1px solid rgba(var(--c-sea), 0.25);
  color: rgb(var(--c-slate-700));
  font-size: 12px;
  font-weight: 700;
}

/* ----- Use cases ----- */

.about-usecase {
  background: white;
  border: 1px solid rgba(var(--c-sea), 0.35);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(var(--c-sea), 0.4);
    box-shadow: $shadow-soft;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(var(--c-mint), 0.5);
    color: rgb(var(--c-sea));
    margin-bottom: 14px;
  }

  &__title {
    font-size: 17px;
    font-weight: 800;
    color: rgb(var(--c-slate-900));
    margin-bottom: 8px;
    line-height: 1.3;
  }

  &__text {
    font-size: 14px;
    line-height: 1.55;
    color: rgb(var(--c-slate-700));
  }
}

/* ----- Dual block (we are / we are not) ----- */

.about-dual {
  border-radius: 20px;
  padding: 28px;
  border: 1px solid rgba(var(--c-sea), 0.4);

  &--positive {
    background: rgba(var(--c-mint), 0.25);
    border-color: rgba(var(--c-sea), 0.45);
  }

  &--negative {
    background: rgb(var(--c-slate-50));
    border-color: rgba(var(--c-sea), 0.4);
  }

  &__head {
    margin-bottom: 18px;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 10px;

    &--positive {
      background: rgb(var(--c-sea));
      color: white;
    }

    &--negative {
      background: rgb(var(--c-slate-700));
      color: white;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 800;
    color: rgb(var(--c-slate-900));
    line-height: 1.3;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 14px;
      line-height: 1.55;
      color: rgb(var(--c-slate-700));
    }
  }

  &__bullet {
    flex-shrink: 0;
    margin-top: 3px;
  }
}

/* ----- Team (compact) ----- */

.team-block {
  background: white;
  border-radius: 24px;
  border: 1px solid rgba(var(--c-sea), 0.2);
  padding: 32px;
  box-shadow: $shadow-soft;

  &__role {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgb(var(--c-sea));
    margin-bottom: 6px;
  }

  &__heading {
    font-size: 24px;
    font-weight: 800;
    color: rgb(var(--c-slate-900));
    margin-bottom: 14px;
  }

  &__text {
    font-size: 15px;
    line-height: 1.6;
    color: rgb(var(--c-slate-700));
    margin-bottom: 12px;
  }

  &__email {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 6px;
    color: rgb(var(--c-sea));
    font-weight: 700;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
}

/* ----- Price factors ----- */

.about-factor {
  background: white;
  border-radius: 16px;
  padding: 22px;
  border: 1px solid rgba(var(--c-sea), 0.35);

  &__title {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 800;
    color: rgb(var(--c-slate-900));
    margin-bottom: 6px;
  }

  &__text {
    font-size: 14px;
    line-height: 1.55;
    color: rgb(var(--c-slate-700));
  }
}

/* ----- Numbers ----- */

.about-number {
  background: white;
  border-radius: 16px;
  padding: 22px;
  border: 1px solid rgba(var(--c-sea), 0.35);
  text-align: center;

  &__value {
    font-size: 32px;
    font-weight: 800;
    color: rgb(var(--c-sea));
    line-height: 1.05;
    margin-bottom: 6px;

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  &__label {
    font-size: 12px;
    font-weight: 600;
    color: rgb(var(--c-slate-500));
    line-height: 1.4;
  }
}
</style>
