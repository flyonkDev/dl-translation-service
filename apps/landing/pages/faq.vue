<template>
  <article class="faq-page">

    <!-- Hero -->
    <section class="section faq-page__hero">
      <div class="container max-w-4xl">
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
          {{ t('faqPage.hero.kicker') }}
        </p>
        <h1 class="mb-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          {{ t('faqPage.hero.h1') }}
        </h1>
        <p class="max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
          {{ t('faqPage.hero.lead') }}
        </p>

        <!-- Quick-glance count chip -->
        <div class="mt-7 flex flex-wrap gap-2">
          <span
            v-for="cat in categories"
            :key="cat.id"
            class="faq-page__chip"
          >
            <span class="faq-page__chip-index">{{ cat.index }}</span>
            <span>{{ cat.heading }}</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Main content with TOC + accordion -->
    <section class="section bg-white">
      <div class="container">
        <div class="faq-page__grid">

          <!-- Mobile dropdown selector (≤1023px) -->
          <div class="faq-page__mobile-nav">
            <label class="faq-page__mobile-label">
              <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {{ t('faqPage.toc.mobileLabel') }}
              </span>
              <select
                v-model="mobileTarget"
                class="faq-page__mobile-select"
                @change="onMobileNavChange"
              >
                <option
                  v-for="cat in categories"
                  :key="cat.id"
                  :value="cat.anchor"
                >
                  {{ cat.index }}. {{ cat.heading }}
                </option>
              </select>
            </label>
          </div>

          <!-- Desktop TOC sidebar (≥1024px, sticky) -->
          <aside class="faq-page__toc" :aria-label="t('faqPage.toc.heading')">
            <div class="faq-page__toc-sticky">
              <p class="faq-page__toc-heading">
                {{ t('faqPage.toc.heading') }}
              </p>
              <ol class="faq-page__toc-list">
                <li v-for="cat in categories" :key="cat.id">
                  <a
                    :href="'#' + cat.anchor"
                    class="faq-page__toc-link"
                    :class="{ 'faq-page__toc-link--active': activeCategory === cat.id }"
                    @click="onTocClick(cat.anchor)"
                  >
                    <span class="faq-page__toc-index">{{ cat.index }}</span>
                    <span class="faq-page__toc-label">{{ cat.heading }}</span>
                    <span class="faq-page__toc-count">{{ cat.items.length }}</span>
                  </a>
                </li>
              </ol>
            </div>
          </aside>

          <!-- Sections -->
          <div class="faq-page__content">
            <section
              v-for="cat in categories"
              :id="cat.anchor"
              :key="cat.id"
              ref="categoryEls"
              :data-cat-id="cat.id"
              class="faq-page__cat"
            >
              <div class="faq-page__cat-header">
                <span class="faq-page__cat-index">
                  {{ String(cat.index).padStart(2, '0') }}
                </span>
                <div>
                  <h2 class="faq-page__cat-heading">{{ cat.heading }}</h2>
                  <p class="faq-page__cat-lead">{{ cat.lead }}</p>
                </div>
              </div>

              <FaqAccordion
                :items="cat.items"
                :default-open="defaultOpenFor(cat.id)"
                :id-prefix="`faq-${cat.id}`"
                multiple
              />
            </section>
          </div>

        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section faq-page__cta">
      <div class="container max-w-3xl text-center">
        <h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
          {{ t('faqPage.cta.heading') }}
        </h2>
        <p class="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
          {{ t('faqPage.cta.text') }}
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <a :href="appliesHref" class="block" @click.prevent="onPrimaryCtaClick">
            <BaseButton type="button" variant="primary">
              <span class="font-bold">{{ t('faqPage.cta.primaryButton') }}</span>
            </BaseButton>
          </a>
          <a :href="`mailto:${contactEmail}`" class="block">
            <BaseButton type="button" variant="secondary">
              <span class="font-bold">{{ t('faqPage.cta.secondaryButton') }}</span>
            </BaseButton>
          </a>
        </div>
      </div>
    </section>

  </article>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue';
import {
  useHead,
  useSeoMeta,
  useI18n,
  useRuntimeConfig,
  useLocalePath,
  useRoute,
} from '#imports';
import { LOCALE_QUERY_PARAM } from '@i18n';
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';
import { useProductAnalytics } from '~/composables/useProductAnalytics';
import { toOgLocale } from '~/utils/ogLocale';

const { t, locale } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const route = useRoute();
const { capture } = useProductAnalytics();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const canonicalPath = computed(() => String(localePath({ name: 'faq' })));
const canonicalUrl = computed(() => siteUrl + canonicalPath.value);
const appUrl = computed(() => String(config.public.appUrl || '').trim().replace(/\/+$/, ''));

const contactEmail = 'support@idpcompanion.com';

/* ---------------------------------------------------------------------------
 * Category structure
 *
 * `id`     — internal category key (matches faqPage.categories.<id> in i18n)
 * `anchor` — DOM/URL slug (used in /faq/#privacy and TOC links)
 * `items`  — flat array of item ids (matches .items.<id> in i18n)
 *
 * Per-item `anchor` field gives each Q its own URL slug (e.g.,
 * /faq/#license-photo-retention) — those are rendered on the <li> by
 * FaqAccordion so native browser scroll-to-anchor works without JS.
 * ------------------------------------------------------------------------- */
interface CatDef {
  id: string;
  anchor: string;
  index: number;
  itemIds: string[];
}

const catDefs: CatDef[] = [
  {
    id: 'product',
    anchor: 'what-is-idp-companion',
    index: 1,
    itemIds: ['whatIs', 'vsOfficialIdp', 'whyExists', 'whoNeedsIt', 'legitVsScammy'],
  },
  {
    id: 'howItWorks',
    anchor: 'how-it-works',
    index: 2,
    itemIds: ['howToApply', 'ocrVerification', 'faceMatch', 'deliveryTime', 'fileFormat'],
  },
  {
    id: 'pricing',
    anchor: 'pricing-and-payment',
    index: 3,
    itemIds: ['whichPlan', 'whatsIncluded', 'paymentMethods', 'refunds', 'multipleDrivers'],
  },
  {
    id: 'whereItWorks',
    anchor: 'where-it-works',
    index: 4,
    itemIds: ['genevaVsVienna', 'supportedCountries', 'whenNeedOfficial', 'rentalVariance', 'ifRejected'],
  },
  {
    id: 'privacy',
    anchor: 'privacy-and-security',
    index: 5,
    itemIds: ['dataStorage', 'licensePhotoRetention', 'headshotUse', 'gdpr'],
  },
  {
    id: 'practical',
    anchor: 'practical-situations',
    index: 6,
    itemIds: ['lostOrDamaged', 'tripExtension', 'multipleCountries', 'licenseExpiry'],
  },
];

/** camelCase → kebab-case for per-question URL anchors */
function toAnchor(itemId: string): string {
  return itemId.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

const categories = computed(() => {
  void locale.value; // re-evaluate on locale change
  return catDefs.map((c) => ({
    id: c.id,
    anchor: c.anchor,
    index: c.index,
    heading: t(`faqPage.categories.${c.id}.heading`),
    lead: t(`faqPage.categories.${c.id}.lead`),
    items: c.itemIds.map((itemId) => ({
      id: itemId,
      anchor: toAnchor(itemId),
      question: t(`faqPage.categories.${c.id}.items.${itemId}.q`),
      answer: t(`faqPage.categories.${c.id}.items.${itemId}.a`),
    })),
  }));
});

/* ---------------------------------------------------------------------------
 * URL-hash handling
 *
 * Two anchor types supported:
 *   /faq/#privacy-and-security   — category anchor, native scroll only
 *   /faq/#license-photo-retention — item anchor, scroll + auto-open accordion
 * ------------------------------------------------------------------------- */

/** Map of category id → index of item to auto-open (-1 = none) */
const initialOpen = ref<Record<string, number>>({});

function defaultOpenFor(catId: string): number {
  return initialOpen.value[catId] ?? -1;
}

function applyHash(rawHash: string) {
  const hash = rawHash.replace(/^#/, '').trim();
  if (!hash) return;

  // Try category match first
  const cat = catDefs.find((c) => c.anchor === hash);
  if (cat) {
    scrollToEl(cat.anchor);
    return;
  }

  // Try item match — find which category contains an item with this anchor
  for (const c of catDefs) {
    const itemIdx = c.itemIds.findIndex((id) => toAnchor(id) === hash);
    if (itemIdx >= 0) {
      // Open the accordion item by index
      initialOpen.value = { ...initialOpen.value, [c.id]: itemIdx };
      scrollToEl(hash);
      return;
    }
  }
}

function scrollToEl(elId: string) {
  if (typeof window === 'undefined') return;
  nextTick(() => {
    const el = document.getElementById(elId);
    if (!el) return;
    const headerOffset = 80; // approx sticky header height
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

/* ---------------------------------------------------------------------------
 * Mobile dropdown nav
 * ------------------------------------------------------------------------- */
const mobileTarget = ref<string>(catDefs[0].anchor);

function onMobileNavChange() {
  scrollToEl(mobileTarget.value);
  if (typeof window !== 'undefined' && window.history?.replaceState) {
    window.history.replaceState(null, '', `${canonicalPath.value}#${mobileTarget.value}`);
  }
}

function onTocClick(anchor: string) {
  capture('faq_toc_click', { category: anchor, locale: locale.value });
  // Browser handles the scroll natively via href="#anchor"
}

function onPrimaryCtaClick() {
  capture('faq_cta_click', { target: 'start_application', locale: locale.value });
  if (typeof window !== 'undefined' && appUrl.value) {
    const qs = new URLSearchParams({ [LOCALE_QUERY_PARAM]: locale.value });
    window.location.href = `${appUrl.value}/apply?${qs.toString()}`;
  }
}

const appliesHref = computed(() => {
  if (!appUrl.value) return '#';
  const qs = new URLSearchParams({ [LOCALE_QUERY_PARAM]: locale.value });
  return `${appUrl.value}/apply?${qs.toString()}`;
});

/* ---------------------------------------------------------------------------
 * Scroll-spy — highlight active TOC item as user scrolls through categories
 * ------------------------------------------------------------------------- */
const categoryEls = ref<HTMLElement[]>([]);
const activeCategory = ref<string>(catDefs[0].id);
let observer: IntersectionObserver | null = null;

function setupScrollSpy() {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;
  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      // Find the first entry with isIntersecting=true (top-most)
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) {
        const id = visible.target.getAttribute('data-cat-id');
        if (id) activeCategory.value = id;
      }
    },
    {
      // Activate when section is in upper half of viewport
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0,
    },
  );
  for (const el of categoryEls.value) {
    if (el) observer.observe(el);
  }
}

onMounted(() => {
  applyHash(route.hash || (typeof window !== 'undefined' ? window.location.hash : ''));
  setupScrollSpy();
});

watch(
  () => route.hash,
  (newHash) => applyHash(newHash),
);

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});

/* ---------------------------------------------------------------------------
 * SEO + FAQPage JSON-LD schema
 * ------------------------------------------------------------------------- */
useSeoMeta({
  title: () => t('faqPage.seo.title'),
  description: () => t('faqPage.seo.description'),
  ogTitle: () => t('faqPage.seo.title'),
  ogDescription: () => t('faqPage.seo.description'),
  ogImage: () => t('seo.ogImage'),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogImageAlt: 'IDP Companion — FAQ',
  ogImageSecureUrl: () => t('seo.ogImage'),
  ogUrl: () => canonicalUrl.value,
  ogType: 'website',
  ogSiteName: 'IDP Companion',
  ogLocale: () => toOgLocale(locale.value),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('faqPage.seo.title'),
  twitterDescription: () => t('faqPage.seo.description'),
  twitterImage: () => t('seo.ogImage'),
  twitterImageAlt: 'IDP Companion — FAQ',
});

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        url: canonicalUrl.value,
        mainEntity: categories.value.flatMap((cat) =>
          cat.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        ),
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
            name: t('layout.navHome') || 'Home',
            item: `${siteUrl}${localePath('/')}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('faqPage.hero.h1'),
            item: canonicalUrl.value,
          },
        ],
      }),
    },
  ],
}));
</script>

<style scoped lang="scss">
.faq-page__hero {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.18) 100%);
}

.faq-page__chip {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 6px 12px;
	background: rgb(255 255 255 / 0.85);
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 999px;
	font-size: 13px;
	font-weight: 600;
	color: rgb(var(--c-slate-800));
	transition: border-color 0.15s ease, background 0.15s ease;
}

.faq-page__chip:hover {
	border-color: rgb(var(--c-sea));
	background: rgb(255 255 255 / 1);
}

.faq-page__chip-index {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 18px;
	height: 18px;
	padding: 0 4px;
	border-radius: 6px;
	background: rgb(var(--c-sea));
	color: white;
	font-size: 11px;
	font-weight: 800;
	line-height: 1;
}

/* --- Grid layout: TOC sidebar + content --- */

.faq-page__grid {
	display: grid;
	gap: 32px;
}

@media (min-width: 1024px) {
	.faq-page__grid {
		grid-template-columns: 280px 1fr;
		gap: 56px;
	}
}

/* Mobile nav dropdown - hidden on desktop */
.faq-page__mobile-nav {
	display: block;
}

@media (min-width: 1024px) {
	.faq-page__mobile-nav {
		display: none;
	}
}

.faq-page__mobile-label {
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.faq-page__mobile-select {
	width: 100%;
	padding: 12px 14px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 12px;
	font-size: 15px;
	font-weight: 600;
	color: rgb(var(--c-slate-900));
	cursor: pointer;
	appearance: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 20 20' fill='%23475569'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right 14px center;
	background-size: 12px;
	padding-right: 38px;
}

.faq-page__mobile-select:focus {
	outline: 2px solid rgb(var(--c-sea));
	outline-offset: 2px;
}

/* TOC sidebar - hidden on mobile */
.faq-page__toc {
	display: none;
}

@media (min-width: 1024px) {
	.faq-page__toc {
		display: block;
	}
}

.faq-page__toc-sticky {
	position: sticky;
	top: 96px;
	padding: 24px 20px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 16px;
	box-shadow: 0 2px 12px rgb(15 23 42 / 0.04);
}

.faq-page__toc-heading {
	margin: 0 0 14px;
	padding-bottom: 12px;
	border-bottom: 1px solid rgb(var(--c-slate-200));
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
}

.faq-page__toc-list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.faq-page__toc-list li + li {
	margin-top: 2px;
}

.faq-page__toc-link {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 9px 10px;
	border-radius: 10px;
	font-size: 13.5px;
	font-weight: 600;
	color: rgb(var(--c-slate-700));
	text-decoration: none;
	transition: background 0.15s ease, color 0.15s ease;
}

.faq-page__toc-link:hover {
	background: rgb(var(--c-mint) / 0.35);
	color: rgb(var(--c-slate-900));
}

.faq-page__toc-link--active {
	background: rgb(var(--c-mint) / 0.5);
	color: rgb(var(--c-sea));
}

.faq-page__toc-link--active .faq-page__toc-index {
	background: rgb(var(--c-sea));
	color: white;
}

.faq-page__toc-index {
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 22px;
	height: 22px;
	border-radius: 7px;
	background: rgb(var(--c-slate-100));
	color: rgb(var(--c-slate-700));
	font-size: 11px;
	font-weight: 800;
	transition: background 0.15s ease, color 0.15s ease;
}

.faq-page__toc-label {
	flex: 1;
	line-height: 1.35;
}

.faq-page__toc-count {
	flex-shrink: 0;
	min-width: 22px;
	padding: 0 5px;
	text-align: center;
	font-size: 11px;
	font-weight: 700;
	color: rgb(var(--c-slate-500));
}

/* --- Category sections --- */

.faq-page__content {
	min-width: 0; /* allow flex/grid children to shrink */
}

.faq-page__cat {
	scroll-margin-top: 96px; /* offset for sticky header on anchor jump */
}

.faq-page__cat + .faq-page__cat {
	margin-top: 56px;
}

.faq-page__cat-header {
	display: flex;
	gap: 16px;
	align-items: flex-start;
	margin-bottom: 24px;
	padding-bottom: 16px;
	border-bottom: 2px solid rgb(var(--c-sea) / 0.2);
}

.faq-page__cat-index {
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	border-radius: 12px;
	background: rgb(var(--c-mint) / 0.55);
	color: rgb(var(--c-sea));
	font-size: 14px;
	font-weight: 800;
	letter-spacing: 0.02em;
}

.faq-page__cat-heading {
	margin: 0 0 4px;
	font-size: 22px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.25;
}

@media (min-width: 768px) {
	.faq-page__cat-heading {
		font-size: 26px;
	}
}

.faq-page__cat-lead {
	margin: 0;
	font-size: 14px;
	color: rgb(var(--c-slate-600));
	line-height: 1.5;
}

/* --- Final CTA --- */

.faq-page__cta {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.25) 0%, rgba(var(--c-mint), 0.6) 100%);
}
</style>
