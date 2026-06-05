<script setup lang="ts">
import { computed } from 'vue';
import AuthorByline from '~/components/AuthorByline.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';
import {
	guideCopyByLocale,
	datePublished,
	dateModified,
	type DisambiguationGuideCopy,
} from '~/content/guides/idp-vs-idl-vs-ida-2026';

definePageMeta({ path: '/guides/idp-vs-idl-vs-ida-2026' });
defineI18nRoute({ locales: ['en', 'ru', 'es'] });

const { locale } = useI18n();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(runtimeConfig.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const appUrl = String(runtimeConfig.public.appUrl || 'https://app.idpcompanion.com').replace(/\/+$/, '');

const canonicalPath = '/guides/idp-vs-idl-vs-ida-2026/';
const localizedCanonicalPath = computed(() => String(localePath(canonicalPath)));
const canonicalUrl = computed(() => `${siteUrl}${localizedCanonicalPath.value}`);

const copy = computed<DisambiguationGuideCopy>(() => {
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
				articleSection: 'International Driving Permit Disambiguation',
				keywords: 'IDP, IDL, IDA, IAA, International Driving Permit, International Driving License, Geneva 1949, Vienna 1968, Inter-American 1943, FTC, AAA, AATA, РОСАВТОКЛУБ',
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
				name: copy.value.howToVerify.heading,
				description: copy.value.howToSchemaDescription,
				step: copy.value.howToVerify.steps.map((s, i) => ({
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
	<article class="disambig-page">

		<!-- Hero -->
		<section class="section disambig-hero">
			<div class="container max-w-5xl">
				<nav class="disambig-breadcrumbs" aria-label="Breadcrumb">
					<NuxtLink :to="localePath('/')" class="disambig-breadcrumbs__link">{{ copy.breadcrumbs.home }}</NuxtLink>
					<span class="disambig-breadcrumbs__sep" aria-hidden="true">›</span>
					<span class="disambig-breadcrumbs__current">{{ copy.breadcrumbs.guides }}</span>
					<span class="disambig-breadcrumbs__sep" aria-hidden="true">›</span>
					<span class="disambig-breadcrumbs__current">{{ copy.breadcrumbs.current }}</span>
				</nav>

				<div class="disambig-hero__grid">
					<div class="disambig-hero__text">
						<p class="disambig-hero__kicker">{{ copy.hero.kicker }}</p>

						<h1 class="disambig-hero__title">{{ copy.hero.title }}</h1>

						<AuthorByline
							author-name="Petr Shchepetin"
							profile-href="/authors/petr-shchepetin"
							:by-label="copy.hero.authorBy"
							:reviewed-label="copy.hero.authorReviewedLabel"
							:reviewed-date="copy.hero.authorReviewedDate"
						/>

						<p class="disambig-hero__lead">{{ copy.hero.lead }}</p>

						<div class="disambig-hero__cta-row">
							<a :href="applyUrl" class="disambig-hero__cta-primary">
								{{ copy.hero.ctaPrimary }}
							</a>
							<NuxtLink :to="localePath('/pricing')" class="disambig-hero__cta-secondary">
								{{ copy.hero.ctaSecondary }}
							</NuxtLink>
						</div>
					</div>
					<div class="disambig-hero__illustration" aria-hidden="true">
						<img
							src="/guides/idp-vs-idl-vs-ida-hero.svg"
							alt=""
							loading="eager"
							width="1344"
							height="768"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Quick Verdict — 5 acronym cards -->
		<section class="section disambig-section disambig-section--mint">
			<div class="container max-w-5xl">
				<h2 class="disambig-h2">{{ copy.quickVerdict.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.quickVerdict.lead }}</p>

				<div class="disambig-verdict-grid">
					<div
						v-for="card in copy.quickVerdict.cards"
						:key="card.acronym"
						class="disambig-verdict-card"
						:class="`disambig-verdict-card--${card.tone}`"
					>
						<div class="disambig-verdict-card__pill">{{ card.pill }}</div>
						<div class="disambig-verdict-card__acronym">{{ card.acronym }}</div>
						<p class="disambig-verdict-card__text">{{ card.text }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Mid-page soft CTA — fires right after the highest-engagement section -->
		<section class="disambig-midcta">
			<div class="container max-w-5xl">
				<div class="disambig-midcta__card">
					<div class="disambig-midcta__text">
						<p class="disambig-midcta__kicker">{{ copy.midCta.kicker }}</p>
						<p class="disambig-midcta__title">{{ copy.midCta.title }}</p>
					</div>
					<a :href="applyUrl" class="disambig-midcta__button">{{ copy.midCta.button }}</a>
				</div>
			</div>
		</section>

		<!-- Real IDP Deep Dive — Geneva/Vienna/IADP -->
		<section class="section disambig-section">
			<div class="container max-w-3xl">
				<h2 class="disambig-h2">{{ copy.realIdpDeepDive.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.realIdpDeepDive.lead }}</p>

				<div class="disambig-deepdive">
					<div v-for="block in copy.realIdpDeepDive.blocks" :key="block.h3" class="disambig-deepdive__block">
						<h3 class="disambig-h3">{{ block.h3 }}</h3>
						<p class="disambig-body">{{ block.body }}</p>
					</div>
				</div>

				<figure class="disambig-figure">
					<img
						src="/guides/conventions-map-decorative.svg"
						alt=""
						loading="lazy"
						width="1820"
						height="1024"
						class="disambig-figure__img"
					/>
				</figure>
			</div>
		</section>

		<!-- Fakes and Myths — IDL + IDA -->
		<section class="section disambig-section disambig-section--slate">
			<div class="container max-w-3xl">
				<h2 class="disambig-h2">{{ copy.fakesAndMyths.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.fakesAndMyths.lead }}</p>

				<div class="disambig-deepdive">
					<div
						v-for="(block, idx) in copy.fakesAndMyths.blocks"
						:key="block.h3"
						class="disambig-deepdive__block"
						:class="{ 'disambig-deepdive__block--first': idx === 0 }"
					>
						<div v-if="idx === 0" class="disambig-myth-intro">
							<div class="disambig-myth-intro__text">
								<h3 class="disambig-h3">{{ block.h3 }}</h3>
								<p class="disambig-body">{{ block.body }}</p>
							</div>
							<img
								src="/guides/fake-permit-warning.svg"
								alt=""
								loading="lazy"
								width="800"
								height="800"
								class="disambig-myth-intro__img"
								aria-hidden="true"
							/>
						</div>
						<template v-else>
							<h3 class="disambig-h3">{{ block.h3 }}</h3>
							<p class="disambig-body">{{ block.body }}</p>
						</template>
					</div>
				</div>
			</div>
		</section>

		<!-- Decision Matrix -->
		<section class="section disambig-section">
			<div class="container max-w-5xl">
				<h2 class="disambig-h2">{{ copy.decisionMatrix.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.decisionMatrix.lead }}</p>

				<div class="disambig-matrix">
					<div
						v-for="(row, idx) in copy.decisionMatrix.rows"
						:key="idx"
						class="disambig-matrix__row"
					>
						<div class="disambig-matrix__col">
							<div class="disambig-matrix__label">{{ copy.decisionMatrix.columnLabels.scenario }}</div>
							<div class="disambig-matrix__value disambig-matrix__value--scenario">{{ row.scenario }}</div>
						</div>
						<div class="disambig-matrix__col">
							<div class="disambig-matrix__label">{{ copy.decisionMatrix.columnLabels.document }}</div>
							<div class="disambig-matrix__value">{{ row.document }}</div>
						</div>
						<div class="disambig-matrix__col">
							<div class="disambig-matrix__label">{{ copy.decisionMatrix.columnLabels.where }}</div>
							<div class="disambig-matrix__value">{{ row.where }}</div>
						</div>
						<div class="disambig-matrix__hint">{{ row.hint }}</div>
					</div>
				</div>

				<p class="disambig-body disambig-footnote">{{ copy.decisionMatrix.footnote }}</p>
			</div>
		</section>

		<!-- Red Flag Checklist -->
		<section class="section disambig-section disambig-section--mint">
			<div class="container max-w-3xl">
				<h2 class="disambig-h2">{{ copy.redFlagChecklist.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.redFlagChecklist.lead }}</p>

				<ul class="disambig-checklist">
					<li v-for="(item, i) in copy.redFlagChecklist.items" :key="i" class="disambig-checklist__item">
						<span class="disambig-checklist__flag" aria-hidden="true">⚑</span>
						<span class="disambig-checklist__text">{{ item }}</span>
					</li>
				</ul>
			</div>
		</section>

		<!-- How to Verify — 5 steps -->
		<section class="section disambig-section">
			<div class="container max-w-3xl">
				<h2 class="disambig-h2">{{ copy.howToVerify.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.howToVerify.lead }}</p>

				<div class="disambig-howto-list">
					<div v-for="s in copy.howToVerify.steps" :key="s.num" class="disambig-howto-step">
						<div class="disambig-howto-step__num">{{ s.num }}</div>
						<div>
							<h3 class="disambig-howto-step__title">{{ s.title }}</h3>
							<p class="disambig-howto-step__body">{{ s.body }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Companion Fit — Honesty Block -->
		<section class="section disambig-section disambig-section--slate">
			<div class="container max-w-3xl">
				<h2 class="disambig-h2">{{ copy.companionFit.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.companionFit.lead }}</p>

				<div class="disambig-companion">
					<p v-for="(p, i) in copy.companionFit.paragraphs" :key="i" class="disambig-body">{{ p }}</p>

					<h3 class="disambig-h3 disambig-companion__compare-heading">{{ copy.companionFit.comparisonTable.heading }}</h3>
					<div class="disambig-companion__compare-wrap">
						<table class="disambig-compare-table">
							<thead>
								<tr>
									<th scope="col">&nbsp;</th>
									<th scope="col">{{ copy.companionFit.comparisonTable.columnGov }}</th>
									<th scope="col" class="disambig-compare-table__col-us">{{ copy.companionFit.comparisonTable.columnUs }}</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="row in copy.companionFit.comparisonTable.rows" :key="row.label">
									<th scope="row">{{ row.label }}</th>
									<td>{{ row.gov }}</td>
									<td class="disambig-compare-table__cell-us">{{ row.us }}</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="disambig-companion__pricing">{{ copy.companionFit.pricingLine }}</div>
				</div>
			</div>
		</section>

		<!-- FAQ -->
		<section class="section disambig-section disambig-section--mint">
			<div class="container max-w-3xl">
				<h2 class="disambig-h2">{{ copy.faq.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.faq.lead }}</p>
				<FaqAccordion :items="copy.faq.items" id-prefix="idp-vs-idl-faq" />
			</div>
		</section>

		<!-- Related -->
		<section class="section disambig-section">
			<div class="container max-w-5xl">
				<h2 class="disambig-h2">{{ copy.related.heading }}</h2>
				<p class="disambig-h2-lead">{{ copy.related.lead }}</p>

				<div class="disambig-related-grid">
					<NuxtLink
						v-for="card in copy.related.cards"
						:key="card.href"
						:to="card.href"
						class="disambig-related-card"
					>
						<div class="disambig-related-card__title">{{ card.title }}</div>
						<div class="disambig-related-card__text">{{ card.text }}</div>
					</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Final CTA -->
		<section class="section disambig-cta">
			<div class="container max-w-5xl">
				<h2 class="disambig-cta__heading">{{ copy.finalCta.heading }}</h2>
				<p class="disambig-cta__text">{{ copy.finalCta.text }}</p>
				<a :href="applyUrl" class="disambig-cta__button">{{ copy.finalCta.button }}</a>
			</div>
		</section>

		<!-- Sources + Legal -->
		<section class="section disambig-sources">
			<div class="container max-w-3xl">
				<h2 class="disambig-sources__h2">{{ copy.sources.heading }}</h2>
				<ul class="disambig-sources__list">
					<li v-for="(item, i) in copy.sources.items" :key="i">{{ item }}</li>
				</ul>

				<h2 class="disambig-sources__h2 disambig-sources__h2--legal">{{ copy.sources.legalHeading }}</h2>
				<p class="disambig-sources__legal">{{ copy.sources.legalText }}</p>
			</div>
		</section>

	</article>
</template>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

.disambig-page {
	background: white;
}

.disambig-hero {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, white 100%);
	padding-top: 48px;
	padding-bottom: 56px;
}

.disambig-breadcrumbs {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 24px;
	font-size: 13px;
	color: rgb(var(--c-slate-500));
	flex-wrap: wrap;
}

.disambig-breadcrumbs__link {
	color: rgb(var(--c-slate-700));
	text-decoration: none;
	&:hover { color: rgb(var(--c-sea)); }
}

.disambig-breadcrumbs__sep { color: rgb(var(--c-slate-400)); }
.disambig-breadcrumbs__current { color: rgb(var(--c-slate-700)); font-weight: 600; }

.disambig-hero__kicker {
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 16px;
}

.disambig-hero__title {
	font-size: clamp(1.875rem, 1.4rem + 2.2vw, 2.875rem);
	line-height: 1.12;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	letter-spacing: -0.01em;
	margin-bottom: 20px;
	overflow-wrap: anywhere;
}

.disambig-hero__lead {
	font-size: 17px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin: 24px 0 32px;
}

.disambig-hero__cta-row {
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
}

.disambig-hero__grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 32px;
	align-items: center;
}

@media (min-width: 1024px) {
	.disambig-hero__grid {
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 56px;
	}
}

.disambig-hero__text {
	min-width: 0;
}

.disambig-hero__illustration {
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
		max-width: 620px;
		height: auto;
		display: block;
		border-radius: 18px;
	}
}

.disambig-hero__cta-primary {
	display: inline-flex;
	align-items: center;
	padding: 14px 26px;
	border-radius: $radius-xl;
	background: rgb(var(--c-orange));
	color: rgb(var(--c-slate-900));
	font-weight: 800;
	text-decoration: none;
	transition: transform 0.15s ease, box-shadow 0.15s ease;
	box-shadow: 0 6px 22px -8px rgba(var(--c-orange), 0.55);
	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 10px 28px -8px rgba(var(--c-orange), 0.6);
	}
}

.disambig-hero__cta-secondary {
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

.disambig-section {
	padding-block: 56px;
}

.disambig-section--mint { background: rgba(var(--c-mint), 0.25); }
.disambig-section--slate { background: rgb(var(--c-slate-50)); }

.disambig-h2 {
	font-size: clamp(1.5rem, 1.25rem + 1.1vw, 2.125rem);
	line-height: 1.18;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
	letter-spacing: -0.005em;
}

.disambig-h3 {
	font-size: clamp(1.1rem, 1rem + 0.45vw, 1.35rem);
	line-height: 1.3;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin: 0 0 14px;
}

.disambig-h2-lead {
	font-size: 16px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
	margin-bottom: 32px;
}

.disambig-body {
	font-size: 16px;
	line-height: 1.75;
	color: rgb(var(--c-slate-700));
	margin: 0 0 20px;
}

// ── Quick Verdict cards ──────────────────────────────────────────────────────
.disambig-verdict-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 16px;
}

.disambig-verdict-card {
	padding: 22px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left-width: 4px;
}

.disambig-verdict-card--real-primary { border-left-color: rgb(var(--c-sea)); }
.disambig-verdict-card--real-secondary { border-left-color: rgb(var(--c-orange)); }
.disambig-verdict-card--real-limited { border-left-color: rgb(var(--c-slate-400)); }
.disambig-verdict-card--marketing { border-left-color: #d4a017; background: linear-gradient(180deg, rgba(212, 160, 23, 0.05) 0%, white 60%); }
.disambig-verdict-card--scam { border-left-color: #dc2626; background: linear-gradient(180deg, rgba(220, 38, 38, 0.06) 0%, white 60%); }

.disambig-verdict-card__pill {
	display: inline-flex;
	font-size: 10.5px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(var(--c-mint), 0.5);
	color: rgb(var(--c-sea));
	margin-bottom: 10px;
}

.disambig-verdict-card--real-secondary .disambig-verdict-card__pill {
	background: rgba(var(--c-orange), 0.12);
	color: rgb(var(--c-orange));
}

.disambig-verdict-card--real-limited .disambig-verdict-card__pill {
	background: rgb(var(--c-slate-100));
	color: rgb(var(--c-slate-700));
}

.disambig-verdict-card--marketing .disambig-verdict-card__pill {
	background: rgba(212, 160, 23, 0.15);
	color: #b8870e;
}

.disambig-verdict-card--scam .disambig-verdict-card__pill {
	background: rgba(220, 38, 38, 0.1);
	color: #dc2626;
}

.disambig-verdict-card__acronym {
	font-size: 17px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 10px;
}

.disambig-verdict-card__text {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

// ── Deep Dive blocks ─────────────────────────────────────────────────────────
.disambig-deepdive {
	display: flex;
	flex-direction: column;
	gap: 32px;
}

.disambig-deepdive__block {
	min-width: 0;
}

.disambig-myth-intro {
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;
	align-items: start;
}

@media (min-width: 768px) {
	.disambig-myth-intro {
		grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
		gap: 28px;
	}
}

.disambig-myth-intro__text {
	min-width: 0;
}

.disambig-myth-intro__img {
	width: 100%;
	max-width: 500px;
	height: auto;
	display: block;
	margin: 0 auto;
}

.disambig-figure {
	margin: 36px 0 0;
	display: flex;
	justify-content: center;
}

.disambig-figure__img {
	width: 100%;
	max-width: 1020px;
	height: auto;
	display: block;
	border-radius: 18px;
}

// ── Decision Matrix ──────────────────────────────────────────────────────────
.disambig-matrix {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.disambig-matrix__row {
	display: grid;
	grid-template-columns: 1fr;
	gap: 14px;
	padding: 22px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

@media (min-width: 768px) {
	.disambig-matrix__row {
		grid-template-columns: 1.3fr 1.2fr 1fr;
		gap: 22px;
	}
}

.disambig-matrix__col {
	min-width: 0;
}

.disambig-matrix__label {
	font-size: 10.5px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
	margin-bottom: 6px;
}

.disambig-matrix__value {
	font-size: 14.5px;
	line-height: 1.5;
	color: rgb(var(--c-slate-800));
}

.disambig-matrix__value--scenario {
	font-weight: 700;
	color: rgb(var(--c-slate-900));
}

.disambig-matrix__hint {
	grid-column: 1 / -1;
	font-size: 13px;
	color: rgb(var(--c-slate-600));
	line-height: 1.55;
	padding-top: 14px;
	border-top: 1px solid rgb(var(--c-slate-100));
	font-style: italic;
}

.disambig-footnote {
	margin-top: 24px;
	font-size: 14px;
	color: rgb(var(--c-slate-600));
}

// ── Red Flag Checklist ───────────────────────────────────────────────────────
.disambig-checklist {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.disambig-checklist__item {
	display: grid;
	grid-template-columns: 28px 1fr;
	gap: 12px;
	padding: 16px 20px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left: 4px solid #dc2626;
}

.disambig-checklist__flag {
	color: #dc2626;
	font-size: 20px;
	line-height: 1;
	font-weight: 800;
}

.disambig-checklist__text {
	font-size: 14.5px;
	line-height: 1.6;
	color: rgb(var(--c-slate-800));
}

// ── How To Verify ────────────────────────────────────────────────────────────
.disambig-howto-list {
	display: flex;
	flex-direction: column;
	gap: 18px;
}

.disambig-howto-step {
	display: grid;
	grid-template-columns: 80px 1fr;
	gap: 18px;
	align-items: flex-start;
	padding: 22px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.disambig-howto-step__num {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: rgb(var(--c-sea));
	color: white;
	font-weight: 800;
	font-size: 22px;
}

.disambig-howto-step__title {
	font-size: 17px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
}

.disambig-howto-step__body {
	font-size: 14.5px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
}

// ── Mid-page CTA ─────────────────────────────────────────────────────────────
.disambig-midcta {
	padding-block: 28px 28px;
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.25) 0%, white 100%);
}

.disambig-midcta__card {
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;
	align-items: center;
	padding: 26px 30px;
	border-radius: $radius-2xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left: 5px solid rgb(var(--c-orange));
	box-shadow: 0 6px 22px -10px rgba(15, 23, 42, 0.18);
}

@media (min-width: 768px) {
	.disambig-midcta__card {
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 28px;
	}
}

.disambig-midcta__kicker {
	font-size: 11.5px;
	font-weight: 800;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: rgb(var(--c-orange));
	margin-bottom: 8px;
}

.disambig-midcta__title {
	font-size: 16px;
	line-height: 1.5;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	margin: 0;
}

.disambig-midcta__button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	padding: 14px 26px;
	border-radius: $radius-xl;
	background: rgb(var(--c-orange));
	color: rgb(var(--c-slate-900));
	font-weight: 800;
	font-size: 15px;
	text-decoration: none;
	box-shadow: 0 6px 18px -6px rgba(var(--c-orange), 0.45);
	transition: transform 0.15s ease, box-shadow 0.15s ease;

	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 10px 26px -8px rgba(var(--c-orange), 0.55);
	}
}

// ── Companion Fit ────────────────────────────────────────────────────────────
.disambig-companion__compare-heading {
	margin-top: 32px;
	margin-bottom: 14px;
}

.disambig-companion__compare-wrap {
	overflow-x: auto;
	margin-bottom: 24px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.disambig-compare-table {
	width: 100%;
	min-width: 540px;
	border-collapse: collapse;
	font-size: 14px;
	line-height: 1.5;

	th, td {
		padding: 12px 16px;
		text-align: left;
		vertical-align: top;
		border-bottom: 1px solid rgb(var(--c-slate-100));
	}

	thead th {
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: rgb(var(--c-slate-600));
		background: rgb(var(--c-slate-50));
		border-bottom: 2px solid rgb(var(--c-slate-200));
	}

	tbody th {
		font-weight: 700;
		color: rgb(var(--c-slate-900));
		background: rgb(248, 250, 252);
		width: 32%;
	}

	tbody td {
		color: rgb(var(--c-slate-700));
	}

	&__col-us {
		color: rgb(var(--c-sea)) !important;
	}

	&__cell-us {
		font-weight: 700;
		color: rgb(var(--c-slate-900)) !important;
		background: rgba(var(--c-mint), 0.18);
	}

	tbody tr:last-child th,
	tbody tr:last-child td {
		border-bottom: none;
	}
}

.disambig-companion__pricing {
	margin-top: 12px;
	padding: 18px 22px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left: 4px solid rgb(var(--c-sea));
	font-size: 14.5px;
	line-height: 1.6;
	color: rgb(var(--c-slate-800));
}

// ── Related ──────────────────────────────────────────────────────────────────
.disambig-related-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 14px;
}

.disambig-related-card {
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

.disambig-related-card__title {
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
}

.disambig-related-card__text {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(var(--c-slate-600));
}

// ── Final CTA ────────────────────────────────────────────────────────────────
.disambig-cta {
	background: linear-gradient(135deg, rgb(var(--c-sea)) 0%, rgb(var(--c-mint)) 100%);
	padding-block: 64px;
	color: rgb(var(--c-slate-900));
	text-align: center;
}

.disambig-cta__heading {
	font-size: clamp(1.5rem, 1.25rem + 1.1vw, 2.125rem);
	font-weight: 800;
	margin-bottom: 16px;
}

.disambig-cta__text {
	max-width: 60ch;
	margin: 0 auto 28px;
	font-size: 16px;
	line-height: 1.6;
	color: rgb(var(--c-slate-900));
}

.disambig-cta__button {
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

// ── Sources + Legal ──────────────────────────────────────────────────────────
.disambig-sources {
	background: rgb(var(--c-slate-50));
	padding-block: 56px;
	border-top: 1px solid rgb(var(--c-slate-200));
}

.disambig-sources__h2 {
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 14px;
}

.disambig-sources__h2--legal { margin-top: 36px; }

.disambig-sources__list {
	list-style: disc;
	padding-left: 20px;
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	li { margin-bottom: 6px; }
}

.disambig-sources__legal {
	font-size: 12px;
	line-height: 1.65;
	color: rgb(var(--c-slate-500));
	max-width: 75ch;
}
</style>
