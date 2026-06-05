<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import AuthorByline from '~/components/AuthorByline.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';
import { guideCopyByLocale, type GuideCopy } from '~/content/guides/driving-abroad-complete-guide-2026';

definePageMeta({ path: '/guides/driving-abroad-complete-guide-2026' });
defineI18nRoute({ locales: ['en', 'ru', 'es'] });

const { locale } = useI18n();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(runtimeConfig.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const appUrl = String(runtimeConfig.public.appUrl || 'https://app.idpcompanion.com').replace(/\/+$/, '');

const canonicalPath = '/guides/driving-abroad-complete-guide-2026/';
const localizedCanonicalPath = computed(() => String(localePath(canonicalPath)));
const canonicalUrl = computed(() => `${siteUrl}${localizedCanonicalPath.value}`);

const datePublished = '2026-06-02';
const dateModified = '2026-06-02';

/** Resolve copy for current locale, fall back to EN. */
const copy = computed<GuideCopy>(() => {
	const direct = guideCopyByLocale[locale.value as keyof typeof guideCopyByLocale];
	return direct ?? guideCopyByLocale.en;
});

const ogLocaleTag = computed(() => {
	switch (locale.value) {
		case 'ru': return 'ru_RU';
		case 'es': return 'es_ES';
		default: return 'en_US';
	}
});

useSeoMeta({
	title: () => copy.value.seo.title,
	description: () => copy.value.seo.description,
	ogTitle: () => copy.value.seo.title,
	ogDescription: () => copy.value.seo.description,
	ogUrl: () => canonicalUrl.value,
	ogType: 'article',
	ogSiteName: 'IDP Companion',
	ogLocale: () => ogLocaleTag.value,
	twitterCard: 'summary_large_image',
	twitterTitle: () => copy.value.seo.title,
	twitterDescription: () => copy.value.seo.description,
});

defineOgImageComponent('Generic', {
	title: copy.value.seo.ogTitleShort,
	subtitle: copy.value.seo.ogSubtitle,
});

const applyUrl = computed(() => `${appUrl}/apply?locale=${locale.value}&planYears=5`);

const breadcrumbs = computed(() => [
	{ '@type': 'ListItem', position: 1, name: copy.value.breadcrumbs.home, item: siteUrl + '/' },
	{ '@type': 'ListItem', position: 2, name: copy.value.breadcrumbs.guides, item: siteUrl + '/guides/' },
	{ '@type': 'ListItem', position: 3, name: copy.value.seo.title, item: canonicalUrl.value },
]);

useHead(() => ({
	link: [{ rel: 'canonical', href: canonicalUrl.value }],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: copy.value.seo.title,
				description: copy.value.seo.description,
				url: canonicalUrl.value,
				mainEntityOfPage: canonicalUrl.value,
				inLanguage: locale.value,
				datePublished,
				dateModified,
				articleSection: 'International Driving Permit Guides',
				author: {
					'@type': 'Person',
					name: 'Petr Shchepetin',
					url: `${siteUrl}/authors/petr-shchepetin`,
					'@id': `${siteUrl}/authors/petr-shchepetin#person`,
				},
				publisher: {
					'@type': 'Organization',
					name: 'IDP Companion',
					url: siteUrl + '/',
				},
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'FAQPage',
				mainEntity: copy.value.faq.items.map((f) => ({
					'@type': 'Question',
					name: f.question,
					acceptedAnswer: {
						'@type': 'Answer',
						text: f.answer,
					},
				})),
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: breadcrumbs.value,
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'HowTo',
				name: copy.value.howTo.heading,
				description: copy.value.howToSchemaDescription,
				step: copy.value.howTo.steps.map((s, i) => ({
					'@type': 'HowToStep',
					position: i + 1,
					name: s.title,
					text: s.body,
				})),
			}),
		},
	],
}));
</script>

<template>
	<article class="guide-page">

		<!-- Hero -->
		<section class="section guide-hero">
			<div class="container max-w-5xl">
				<nav class="guide-breadcrumbs" aria-label="Breadcrumb">
					<NuxtLink :to="localePath('/')" class="guide-breadcrumbs__link">{{ copy.breadcrumbs.home }}</NuxtLink>
					<span class="guide-breadcrumbs__sep" aria-hidden="true">›</span>
					<span class="guide-breadcrumbs__current">{{ copy.breadcrumbs.guides }}</span>
					<span class="guide-breadcrumbs__sep" aria-hidden="true">›</span>
					<span class="guide-breadcrumbs__current">{{ copy.breadcrumbs.current }}</span>
				</nav>

				<div class="guide-hero__grid">
					<div class="guide-hero__text">
						<p class="guide-hero__kicker">{{ copy.hero.kicker }}</p>

						<h1 class="guide-hero__title">{{ copy.hero.title }}</h1>

						<AuthorByline
							author-name="Petr Shchepetin"
							profile-href="/authors/petr-shchepetin"
							:by-label="copy.hero.authorBy"
							:reviewed-label="copy.hero.authorReviewedLabel"
							:reviewed-date="copy.hero.authorReviewedDate"
						/>

						<p class="guide-hero__lead">{{ copy.hero.lead }}</p>

						<div class="guide-hero__cta-row">
							<a :href="applyUrl" class="guide-hero__cta-primary">
								{{ copy.hero.ctaPrimary }}
							</a>
							<NuxtLink :to="localePath('/pricing')" class="guide-hero__cta-secondary">
								{{ copy.hero.ctaSecondary }}
							</NuxtLink>
						</div>
					</div>
					<div class="guide-hero__illustration" aria-hidden="true">
						<img
							src="/guides/driving-abroad-hero.svg"
							alt=""
							loading="eager"
							width="1344"
							height="768"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Quick Verdict -->
		<section class="section guide-section guide-section--mint">
			<div class="container max-w-5xl">
				<h2 class="guide-h2">{{ copy.quickVerdict.heading }}</h2>
				<p class="guide-h2-lead">{{ copy.quickVerdict.lead }}</p>

				<div class="guide-tldr-grid">
					<div
						v-for="card in copy.quickVerdict.cards"
						:key="card.tone"
						class="guide-tldr-card"
						:class="`guide-tldr-card--${card.tone}`"
					>
						<div class="guide-tldr-card__pill">{{ card.pill }}</div>
						<p class="guide-tldr-card__text">{{ card.text }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- What is an IDP -->
		<section class="section guide-section">
			<div class="container max-w-3xl">
				<h2 class="guide-h2">{{ copy.whatIsIdp.heading }}</h2>
				<p class="guide-h2-lead">{{ copy.whatIsIdp.lead }}</p>
				<p v-for="(p, i) in copy.whatIsIdp.paragraphs" :key="i" class="guide-body">{{ p }}</p>

				<figure class="guide-figure">
					<img
						src="/guides/world-map-decorative.svg"
						alt=""
						loading="lazy"
						width="1820"
						height="1024"
						class="guide-figure__img"
					/>
				</figure>
			</div>
		</section>

		<!-- Country Requirements Matrix -->
		<section class="section guide-section guide-section--slate">
			<div class="container max-w-5xl">
				<h2 class="guide-h2">{{ copy.matrix.heading }}</h2>
				<p class="guide-h2-lead">{{ copy.matrix.lead }}</p>

				<div v-for="region in copy.matrix.regions" :key="region.region" class="guide-region">
					<h3 class="guide-region__heading">{{ region.region }}</h3>
					<div class="guide-region__grid">
						<NuxtLink
							v-for="row in region.rows"
							:key="row.href + row.origin"
							:to="row.href"
							class="guide-region__card"
						>
							<div class="guide-region__card-flags">
								<span class="fi" :class="`fi-${row.originFlag}`" aria-hidden="true" />
								<Icon icon="ph:arrow-right-bold" width="14" class="guide-region__arrow" />
								<span class="fi" :class="`fi-${row.destFlag}`" aria-hidden="true" />
							</div>
							<div class="guide-region__card-pair">
								<span class="guide-region__origin">{{ row.origin }}</span>
								<span class="guide-region__sep">→</span>
								<span class="guide-region__destination">{{ row.destination }}</span>
							</div>
							<div class="guide-region__hint">{{ row.hint }}</div>
						</NuxtLink>
					</div>
				</div>

				<p class="guide-body">{{ copy.matrix.footnote }}</p>
			</div>
		</section>

		<!-- The Real Cost -->
		<section class="section guide-section">
			<div class="container max-w-5xl">
				<h2 class="guide-h2">{{ copy.realCost.heading }}</h2>
				<p class="guide-h2-lead">{{ copy.realCost.lead }}</p>

				<div class="guide-cost-grid">
					<div
						v-for="card in copy.realCost.cards"
						:key="card.title"
						class="guide-cost-card"
						:class="{ 'guide-cost-card--severe': card.severe }"
					>
						<div class="guide-cost-card__icon">
							<Icon :icon="card.icon" width="32" />
						</div>
						<h3 class="guide-cost-card__title">{{ card.title }}</h3>
						<p class="guide-cost-card__text">{{ card.text }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- How to Prepare -->
		<section class="section guide-section guide-section--mint">
			<div class="container max-w-3xl">
				<h2 class="guide-h2">{{ copy.howTo.heading }}</h2>
				<p class="guide-h2-lead">{{ copy.howTo.lead }}</p>

				<div class="guide-howto-list">
					<div v-for="s in copy.howTo.steps" :key="s.num" class="guide-howto-step">
						<div class="guide-howto-step__num">{{ s.num }}</div>
						<div>
							<h3 class="guide-howto-step__title">{{ s.title }}</h3>
							<p class="guide-howto-step__body">{{ s.body }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Special Cases -->
		<section class="section guide-section">
			<div class="container max-w-3xl">
				<h2 class="guide-h2">{{ copy.specialCases.heading }}</h2>
				<p class="guide-h2-lead">{{ copy.specialCases.lead }}</p>

				<div class="guide-special">
					<template v-for="(block, idx) in copy.specialCases.blocks" :key="block.h3">
						<div v-if="idx === 0" class="guide-special__intro">
							<div class="guide-special__intro-text">
								<h3 class="guide-special__h3">{{ block.h3 }}</h3>
								<p class="guide-body">{{ block.body }}</p>
							</div>
							<img
								src="/guides/scooter-warning.svg"
								alt=""
								loading="lazy"
								width="800"
								height="800"
								class="guide-special__scooter"
								aria-hidden="true"
							/>
						</div>
						<template v-else>
							<h3 class="guide-special__h3">{{ block.h3 }}</h3>
							<p class="guide-body">{{ block.body }}</p>
						</template>
					</template>
				</div>
			</div>
		</section>

		<!-- FAQ -->
		<section class="section guide-section guide-section--slate">
			<div class="container max-w-3xl">
				<h2 class="guide-h2">{{ copy.faq.heading }}</h2>
				<p class="guide-h2-lead">{{ copy.faq.lead }}</p>
				<FaqAccordion :items="copy.faq.items" id-prefix="driving-abroad-guide" />
			</div>
		</section>

		<!-- Related -->
		<section class="section guide-section">
			<div class="container max-w-5xl">
				<h2 class="guide-h2">{{ copy.related.heading }}</h2>
				<p class="guide-h2-lead">{{ copy.related.lead }}</p>

				<div class="guide-related-grid">
					<NuxtLink
						v-for="card in copy.related.cards"
						:key="card.href"
						:to="card.href"
						class="guide-related-card"
					>
						<div class="guide-related-card__title">{{ card.title }}</div>
						<div class="guide-related-card__text">{{ card.text }}</div>
					</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Final CTA -->
		<section class="section guide-cta">
			<div class="container max-w-5xl">
				<h2 class="guide-cta__heading">{{ copy.finalCta.heading }}</h2>
				<p class="guide-cta__text">{{ copy.finalCta.text }}</p>
				<a :href="applyUrl" class="guide-cta__button">{{ copy.finalCta.button }}</a>
			</div>
		</section>

		<!-- Sources + Legal disclaimer -->
		<section class="section guide-sources">
			<div class="container max-w-3xl">
				<h2 class="guide-sources__h2">{{ copy.sources.heading }}</h2>
				<ul class="guide-sources__list">
					<li v-for="(item, i) in copy.sources.items" :key="i">{{ item }}</li>
				</ul>

				<h2 class="guide-sources__h2 guide-sources__h2--legal">{{ copy.sources.legalHeading }}</h2>
				<p class="guide-sources__legal">{{ copy.sources.legalText }}</p>
			</div>
		</section>

	</article>
</template>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

.guide-page {
	background: white;
}

.guide-hero {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, white 100%);
	padding-top: 48px;
	padding-bottom: 56px;
}

.guide-breadcrumbs {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 24px;
	font-size: 13px;
	color: rgb(var(--c-slate-500));
}

.guide-breadcrumbs__link {
	color: rgb(var(--c-slate-700));
	text-decoration: none;
	&:hover { color: rgb(var(--c-sea)); }
}

.guide-breadcrumbs__sep { color: rgb(var(--c-slate-400)); }
.guide-breadcrumbs__current { color: rgb(var(--c-slate-700)); font-weight: 600; }

.guide-hero__kicker {
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 16px;
}

.guide-hero__title {
	font-size: clamp(2rem, 1.5rem + 2.5vw, 3.25rem);
	line-height: 1.08;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	letter-spacing: -0.01em;
	margin-bottom: 20px;
	overflow-wrap: anywhere;
}

.guide-hero__lead {
	font-size: 18px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
	margin: 24px 0 32px;
}

.guide-hero__cta-row {
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
}

.guide-hero__grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 32px;
	align-items: center;
}

@media (min-width: 1024px) {
	.guide-hero__grid {
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		gap: 48px;
	}
}

.guide-hero__text {
	min-width: 0;
}

.guide-hero__illustration {
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
		max-width: 560px;
		height: auto;
		display: block;
	}
}

.guide-hero__cta-primary {
	display: inline-flex;
	align-items: center;
	padding: 14px 26px;
	border-radius: $radius-xl;
	background: rgb(var(--c-orange));
	color: rgb(var(--c-slate-900));
	font-weight: 800;
	text-decoration: none;
	transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
	box-shadow: 0 6px 22px -8px rgba(var(--c-orange), 0.55);
	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 10px 28px -8px rgba(var(--c-orange), 0.6);
	}
}

.guide-hero__cta-secondary {
	display: inline-flex;
	align-items: center;
	padding: 14px 22px;
	border-radius: $radius-xl;
	border: 2px solid rgb(var(--c-slate-200));
	color: rgb(var(--c-slate-700));
	font-weight: 700;
	text-decoration: none;
	transition: border-color 0.15s ease;
	&:hover { border-color: rgb(var(--c-sea)); }
}

.guide-section {
	padding-block: 56px;
}

.guide-section--mint { background: rgba(var(--c-mint), 0.25); }
.guide-section--slate { background: rgb(var(--c-slate-50)); }

.guide-h2 {
	font-size: clamp(1.625rem, 1.3rem + 1.4vw, 2.25rem);
	line-height: 1.16;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
	letter-spacing: -0.005em;
}

.guide-h2-lead {
	font-size: 16px;
	line-height: 1.55;
	color: rgb(var(--c-slate-700));
	margin-bottom: 32px;
}

.guide-body {
	font-size: 16px;
	line-height: 1.7;
	color: rgb(var(--c-slate-700));
	margin: 0 0 18px;
}

.guide-tldr-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 18px;
}

.guide-tldr-card {
	padding: 22px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.guide-tldr-card--required { border-left: 4px solid rgb(var(--c-orange)); }
.guide-tldr-card--rental { border-left: 4px solid rgb(var(--c-sea)); }
.guide-tldr-card--optional { border-left: 4px solid rgb(var(--c-slate-400)); }

.guide-tldr-card__pill {
	display: inline-flex;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(var(--c-mint), 0.5);
	color: rgb(var(--c-sea));
	margin-bottom: 12px;
}

.guide-tldr-card__text {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

.guide-region {
	margin-bottom: 36px;
}

.guide-region__heading {
	font-size: 17px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 14px;
}

.guide-region__grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	gap: 12px;
}

.guide-region__card {
	display: block;
	padding: 16px 18px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	text-decoration: none;
	transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
	&:hover {
		border-color: rgb(var(--c-sea));
		transform: translateY(-2px);
		box-shadow: 0 8px 20px -10px rgba(var(--c-sea), 0.35);
	}
}

.guide-region__card-flags {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 10px;

	:deep(.fi) {
		width: 24px;
		height: 18px;
		border-radius: 3px;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
	}
}

.guide-region__arrow { color: rgb(var(--c-sea)); flex-shrink: 0; }

.guide-region__card-pair {
	display: flex;
	align-items: center;
	gap: 6px;
	margin-bottom: 6px;
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}

.guide-region__sep {
	color: rgb(var(--c-slate-400));
	font-weight: 600;
}

.guide-region__origin {
	color: rgb(var(--c-slate-900));
}

.guide-region__destination { color: rgb(var(--c-slate-900)); }

.guide-region__hint {
	font-size: 12px;
	color: rgb(var(--c-slate-500));
	line-height: 1.4;
}

.guide-cost-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 18px;
}

.guide-cost-card {
	padding: 24px;
	border-radius: $radius-2xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.guide-cost-card--severe {
	border-color: rgb(var(--c-orange));
	background: linear-gradient(180deg, rgba(var(--c-orange), 0.06) 0%, white 100%);
}

.guide-cost-card__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 52px;
	height: 52px;
	border-radius: 14px;
	background: rgba(var(--c-mint), 0.5);
	color: rgb(var(--c-sea));
	margin-bottom: 14px;
}

.guide-cost-card--severe .guide-cost-card__icon {
	background: rgba(var(--c-orange), 0.18);
	color: rgb(var(--c-orange));
}

.guide-cost-card__title {
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 10px;
}

.guide-cost-card__text {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

.guide-howto-list {
	display: flex;
	flex-direction: column;
	gap: 18px;
}

.guide-howto-step {
	display: grid;
	grid-template-columns: 80px 1fr;
	gap: 18px;
	align-items: flex-start;
	padding: 22px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.guide-howto-step__num {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: rgb(var(--c-sea));
	color: white;
	font-weight: 800;
	font-size: 20px;
}

.guide-howto-step__title {
	font-size: 17px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
}

.guide-howto-step__body {
	font-size: 14px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
}

.guide-special__h3 {
	font-size: 19px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin: 28px 0 12px;
}

.guide-special__intro {
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;
	align-items: start;
	margin-bottom: 12px;
}

@media (min-width: 768px) {
	.guide-special__intro {
		grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
		gap: 32px;
	}
}

.guide-special__intro-text {
	min-width: 0;

	.guide-special__h3 {
		margin-top: 0;
	}
}

.guide-special__scooter {
	width: 100%;
	max-width: 280px;
	height: auto;
	display: block;
	margin: 0 auto;
}

.guide-figure {
	margin: 32px 0 0;
	display: flex;
	justify-content: center;
}

.guide-figure__img {
	width: 100%;
	max-width: 1020px;
	height: auto;
	display: block;
	border-radius: 18px;
}

.guide-related-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 14px;
}

.guide-related-card {
	display: block;
	padding: 20px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	text-decoration: none;
	transition: border-color 0.15s ease, transform 0.15s ease;
	&:hover {
		border-color: rgb(var(--c-sea));
		transform: translateY(-2px);
	}
}

.guide-related-card__title {
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
}

.guide-related-card__text {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(var(--c-slate-600));
}

.guide-cta {
	background: linear-gradient(135deg, rgb(var(--c-sea)) 0%, rgb(var(--c-mint)) 100%);
	padding-block: 64px;
	color: rgb(var(--c-slate-900));
	text-align: center;
}

.guide-cta__heading {
	font-size: clamp(1.625rem, 1.3rem + 1.4vw, 2.25rem);
	font-weight: 800;
	margin-bottom: 16px;
}

.guide-cta__text {
	max-width: 60ch;
	margin: 0 auto 28px;
	font-size: 16px;
	line-height: 1.6;
	color: rgb(var(--c-slate-900));
}

.guide-cta__button {
	display: inline-flex;
	align-items: center;
	padding: 16px 32px;
	background: rgb(var(--c-orange));
	color: rgb(var(--c-slate-900));
	border-radius: $radius-xl;
	text-decoration: none;
	font-weight: 800;
	font-size: 16px;
	box-shadow: 0 8px 24px -6px rgba(15, 23, 42, 0.32);
	transition: transform 0.15s ease;
	&:hover { transform: translateY(-2px); }
}

.guide-sources {
	background: rgb(var(--c-slate-50));
	padding-block: 56px;
	border-top: 1px solid rgb(var(--c-slate-200));
}

.guide-sources__h2 {
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 14px;
}

.guide-sources__h2--legal { margin-top: 36px; }

.guide-sources__list {
	list-style: disc;
	padding-left: 20px;
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	li { margin-bottom: 6px; }
}

.guide-sources__legal {
	font-size: 12px;
	line-height: 1.65;
	color: rgb(var(--c-slate-500));
	max-width: 75ch;
}
</style>
