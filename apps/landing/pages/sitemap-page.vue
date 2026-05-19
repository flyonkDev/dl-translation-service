<template>
	<article class="sitemap-page">

		<!-- Hero -->
		<section class="section sitemap-page__hero">
			<div class="container max-w-4xl">
				<p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
					{{ t('sitemapPage.hero.kicker') }}
				</p>
				<h1 class="mb-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
					{{ t('sitemapPage.hero.h1') }}
				</h1>
				<p class="mb-7 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
					{{ t('sitemapPage.hero.lead') }}
				</p>

				<div class="flex flex-wrap gap-3">
					<span class="sitemap-page__stat">
						<Icon icon="ph:globe-bold" width="16" />
						<strong>{{ totalPairs }}</strong>
						<span>{{ t('sitemapPage.counts.pairsLabel') }}</span>
					</span>
					<span class="sitemap-page__stat">
						<Icon icon="ph:users-three-bold" width="16" />
						<strong>{{ groupedPairs.length }}</strong>
						<span>{{ t('sitemapPage.counts.originsLabel') }}</span>
					</span>
				</div>
			</div>
		</section>

		<!-- Main pages -->
		<section id="main" class="section bg-white">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('sitemapPage.sections.main.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('sitemapPage.sections.main.lead') }}
					</p>
				</div>

				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<NuxtLinkLocale
						v-for="card in mainPageCards"
						:key="card.id"
						:to="card.href"
						class="sitemap-page__card"
					>
						<div class="sitemap-page__card-icon">
							<Icon :icon="card.icon" width="22" />
						</div>
						<h3 class="sitemap-page__card-title">{{ card.title }}</h3>
						<p class="sitemap-page__card-body">{{ card.body }}</p>
					</NuxtLinkLocale>
				</div>
			</div>
		</section>

		<!-- Country-pair guides -->
		<section id="country-pairs" class="section sitemap-page__section--slate">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('sitemapPage.sections.countryPairs.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('sitemapPage.sections.countryPairs.lead') }}
					</p>
				</div>

				<div class="sitemap-page__origin-list">
					<div
						v-for="group in groupedPairs"
						:key="group.origin"
						class="sitemap-page__origin"
					>
						<header class="sitemap-page__origin-head">
							<span class="sitemap-page__origin-flag">
								<span :class="`fi fi-${originFlag(group.origin)}`" />
							</span>
							<div>
								<h3 class="sitemap-page__origin-title">
									{{ originName(group.origin, currentLocale) }}
								</h3>
								<p class="sitemap-page__origin-count">
									{{ group.pairs.length }} {{ t('sitemapPage.originGroup.guidesSuffix') }}
								</p>
							</div>
						</header>

						<div class="sitemap-page__destinations">
							<a
								v-for="pair in group.pairs"
								:key="pair.url"
								:href="pair.url"
								class="sitemap-page__destination"
							>
								<span class="sitemap-page__destination-flag">
									<span :class="`fi fi-${destinationFlag(pair.destination)}`" />
								</span>
								<div class="sitemap-page__destination-body">
									<span class="sitemap-page__destination-name">
										{{ destinationName(pair.destination, currentLocale) }}
									</span>
									<div class="sitemap-page__destination-meta">
										<span
											v-for="loc in pair.locales"
											:key="loc"
											class="sitemap-page__locale-pill"
										>
											{{ t(`sitemapPage.localePill.${loc}`) || loc.toUpperCase() }}
										</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Authors -->
		<section id="authors" class="section bg-white">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('sitemapPage.sections.authors.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('sitemapPage.sections.authors.lead') }}
					</p>
				</div>

				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<NuxtLinkLocale
						v-for="author in authorCards"
						:key="author.id"
						:to="author.href"
						class="sitemap-page__card"
					>
						<div class="sitemap-page__card-icon">
							<Icon icon="ph:user-circle-bold" width="22" />
						</div>
						<h3 class="sitemap-page__card-title">{{ author.title }}</h3>
						<p class="sitemap-page__card-body">{{ author.body }}</p>
					</NuxtLinkLocale>
				</div>
			</div>
		</section>

		<!-- Policies -->
		<section id="legal" class="section sitemap-page__section--slate">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('sitemapPage.sections.legal.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('sitemapPage.sections.legal.lead') }}
					</p>
				</div>

				<div class="grid gap-4 md:grid-cols-3">
					<NuxtLinkLocale
						v-for="legal in legalCards"
						:key="legal.id"
						:to="legal.href"
						class="sitemap-page__card"
					>
						<div class="sitemap-page__card-icon">
							<Icon :icon="legal.icon" width="22" />
						</div>
						<h3 class="sitemap-page__card-title">{{ legal.title }}</h3>
						<p class="sitemap-page__card-body">{{ legal.body }}</p>
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
import { toOgLocale } from '~/utils/ogLocale';
import {
	originName,
	originFlag,
	destinationName,
	destinationFlag,
	type LocaleKey,
} from '~/content/_country-display';
import {
	pairsByOrigin,
	totalPairCount,
} from '~/utils/country-pair-discovery';

definePageMeta({ path: '/sitemap-page' });

const { t, locale } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocalePath();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const canonicalPath = computed(() => String(localePath('/sitemap-page')));
const canonicalUrl = computed(() => siteUrl + canonicalPath.value);

const currentLocale = computed<LocaleKey>(() => {
	const l = locale.value;
	return l === 'ru' || l === 'es' ? l : 'en';
});

/* ---------------------------------------------------------------------------
 * Auto-discovered country-pair pages — manifest is built at compile time
 * via Vite glob; new pages appear automatically on next build.
 * ------------------------------------------------------------------------- */

const groupedPairs = computed(() => {
	void locale.value;
	return pairsByOrigin();
});

const totalPairs = computed(() => totalPairCount());

/* ---------------------------------------------------------------------------
 * Static page lists — main pages, authors, legal
 * ------------------------------------------------------------------------- */

const mainPageDefs = [
	{ id: 'home',        href: '/',              icon: 'ph:house-bold' },
	{ id: 'howItWorks',  href: '/how-it-works',  icon: 'ph:list-numbers-bold' },
	{ id: 'pricing',     href: '/pricing',       icon: 'ph:tag-bold' },
	{ id: 'faq',         href: '/faq',           icon: 'ph:question-bold' },
	{ id: 'about',       href: '/about',         icon: 'ph:info-bold' },
	{ id: 'security',    href: '/security',      icon: 'ph:shield-check-bold' },
	{ id: 'contact',     href: '/contact',       icon: 'ph:envelope-bold' },
	{ id: 'idpValidity', href: '/idp-validity',  icon: 'ph:calendar-bold' },
	{ id: 'sitemap',     href: '/sitemap-page',  icon: 'ph:tree-structure-bold' },
] as const;

const mainPageCards = computed(() => {
	void locale.value;
	return mainPageDefs.map((p) => ({
		id: p.id,
		href: p.href,
		icon: p.icon,
		title: t(`sitemapPage.mainPages.${p.id}.title`),
		body: t(`sitemapPage.mainPages.${p.id}.body`),
	}));
});

const authorDefs = [
	{ id: 'petr', href: '/authors/petr-shchepetin' },
] as const;

const authorCards = computed(() => {
	void locale.value;
	return authorDefs.map((a) => ({
		id: a.id,
		href: a.href,
		title: t(`sitemapPage.authors.${a.id}.title`),
		body: t(`sitemapPage.authors.${a.id}.body`),
	}));
});

const legalDefs = [
	{ id: 'privacy', href: '/privacy-policy',    icon: 'ph:lock-bold' },
	{ id: 'refund',  href: '/refund-policy',     icon: 'ph:arrow-counter-clockwise-bold' },
	{ id: 'terms',   href: '/terms-of-service',  icon: 'ph:scroll-bold' },
] as const;

const legalCards = computed(() => {
	void locale.value;
	return legalDefs.map((l) => ({
		id: l.id,
		href: l.href,
		icon: l.icon,
		title: t(`sitemapPage.legalPages.${l.id}.title`),
		body: t(`sitemapPage.legalPages.${l.id}.body`),
	}));
});

/* ---------------------------------------------------------------------------
 * SEO + JSON-LD
 * ------------------------------------------------------------------------- */

useSeoMeta({
	title: () => t('sitemapPage.seo.title'),
	description: () => t('sitemapPage.seo.description'),
	ogTitle: () => t('sitemapPage.seo.title'),
	ogDescription: () => t('sitemapPage.seo.description'),
	ogImage: () => t('seo.ogImage'),
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageType: 'image/png',
	ogImageAlt: 'IDP Companion — Sitemap',
	ogImageSecureUrl: () => t('seo.ogImage'),
	ogUrl: () => canonicalUrl.value,
	ogType: 'website',
	ogSiteName: 'IDP Companion',
	ogLocale: () => toOgLocale(locale.value),
	twitterCard: 'summary_large_image',
	twitterTitle: () => t('sitemapPage.seo.title'),
	twitterDescription: () => t('sitemapPage.seo.description'),
	twitterImage: () => t('seo.ogImage'),
	twitterImageAlt: 'IDP Companion — Sitemap',
});

useHead(() => ({
	link: [{ rel: 'canonical', href: canonicalUrl.value }],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebPage',
				name: t('sitemapPage.hero.h1'),
				description: t('sitemapPage.seo.description'),
				url: canonicalUrl.value,
				inLanguage: locale.value,
				isPartOf: {
					'@type': 'WebSite',
					name: 'IDP Companion',
					url: siteUrl,
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
						name: t('layout.navHome') || 'Home',
						item: `${siteUrl}${localePath('/')}`,
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: t('sitemapPage.hero.h1'),
						item: canonicalUrl.value,
					},
				],
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'ItemList',
				name: t('sitemapPage.sections.countryPairs.heading'),
				numberOfItems: totalPairs.value,
				itemListElement: groupedPairs.value.flatMap((group, gIdx) =>
					group.pairs.map((p, pIdx) => ({
						'@type': 'ListItem',
						position: gIdx * 100 + pIdx + 1,
						url: `${siteUrl}${p.url}`,
						name: `IDP for ${originName(p.origin, 'en')} drivers in ${destinationName(p.destination, 'en')}`,
					})),
				),
			}),
		},
	],
}));
</script>

<style scoped>
.sitemap-page {
	background: white;
}

.sitemap-page__hero {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.18) 100%);
}

.sitemap-page__section--slate {
	background: rgb(248 250 252);
}

.sitemap-page__stat {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 14px;
	border-radius: 999px;
	background: rgba(var(--c-sea), 0.1);
	color: rgb(15 23 42);
	font-size: 13px;
	font-weight: 600;
}

.sitemap-page__stat strong {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-sea));
}

.sitemap-page__card {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px;
	background: white;
	border: 1px solid rgb(226 232 240);
	border-radius: 16px;
	box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
	text-decoration: none;
	transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}

.sitemap-page__card:hover {
	border-color: rgb(var(--c-sea));
	transform: translateY(-2px);
	box-shadow: 0 8px 24px rgba(46, 196, 182, 0.12);
}

.sitemap-page__card-icon {
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	color: rgb(var(--c-sea));
	margin-bottom: 2px;
}

.sitemap-page__card-title {
	font-size: 16px;
	font-weight: 700;
	color: rgb(15 23 42);
	line-height: 1.3;
}

.sitemap-page__card-body {
	font-size: 13px;
	line-height: 1.5;
	color: rgb(71 85 105);
}

.sitemap-page__origin-list {
	display: grid;
	gap: 24px;
}

.sitemap-page__origin {
	padding: 24px;
	background: white;
	border: 1px solid rgb(226 232 240);
	border-radius: 20px;
	box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}

.sitemap-page__origin-head {
	display: flex;
	align-items: center;
	gap: 14px;
	margin-bottom: 18px;
	padding-bottom: 16px;
	border-bottom: 1px solid rgb(241 245 249);
}

.sitemap-page__origin-flag {
	display: inline-flex;
	width: 48px;
	height: 36px;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);
	border: 1px solid rgba(15, 23, 42, 0.08);
}

.sitemap-page__origin-flag .fi {
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
}

.sitemap-page__origin-title {
	font-size: 20px;
	font-weight: 800;
	color: rgb(15 23 42);
	line-height: 1.2;
}

.sitemap-page__origin-count {
	font-size: 13px;
	color: rgb(100 116 139);
	margin-top: 2px;
}

.sitemap-page__destinations {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 10px;
	align-items: start;
}

.sitemap-page__destination {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 12px;
	border: 1px solid rgb(226 232 240);
	border-radius: 12px;
	background: rgb(248 250 252);
	text-decoration: none;
	transition: border-color 0.15s ease, background 0.15s ease;
}

.sitemap-page__destination:hover {
	border-color: rgb(var(--c-sea));
	background: white;
}

.sitemap-page__destination-flag {
	display: inline-flex;
	width: 28px;
	height: 20px;
	border-radius: 4px;
	overflow: hidden;
	flex-shrink: 0;
	border: 1px solid rgba(15, 23, 42, 0.08);
}

.sitemap-page__destination-flag .fi {
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
}

.sitemap-page__destination-body {
	display: flex;
	flex-direction: column;
	gap: 4px;
	min-width: 0;
}

.sitemap-page__destination-name {
	font-size: 14px;
	font-weight: 600;
	color: rgb(15 23 42);
	line-height: 1.2;
}

.sitemap-page__destination-meta {
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
}

.sitemap-page__locale-pill {
	display: inline-block;
	padding: 1px 6px;
	border-radius: 4px;
	font-size: 10px;
	font-weight: 700;
	background: rgb(241 245 249);
	color: rgb(71 85 105);
}
</style>
