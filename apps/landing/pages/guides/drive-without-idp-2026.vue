<script setup lang="ts">
import { computed } from 'vue';
import AuthorByline from '~/components/AuthorByline.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';
import {
	driveWithoutIdpCopyByLocale,
	datePublished,
	dateModified,
	type DriveWithoutIdpCopy,
} from '~/content/guides/drive-without-idp-2026';

definePageMeta({ path: '/guides/drive-without-idp-2026' });
defineI18nRoute({ locales: ['en', 'ru', 'es'] });

const { locale } = useI18n();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(runtimeConfig.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const appUrl = String(runtimeConfig.public.appUrl || 'https://app.idpcompanion.com').replace(/\/+$/, '');

const canonicalPath = '/guides/drive-without-idp-2026/';
const localizedCanonicalPath = computed(() => String(localePath(canonicalPath)));
const canonicalUrl = computed(() => `${siteUrl}${localizedCanonicalPath.value}`);

const copy = computed<DriveWithoutIdpCopy>(() => {
	const direct = driveWithoutIdpCopyByLocale[locale.value as keyof typeof driveWithoutIdpCopyByLocale];
	return direct ?? driveWithoutIdpCopyByLocale.en;
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
				articleSection: 'International Driving Permit · Documented Cases',
				keywords: 'IDP, International Driving Permit, driving without IDP, foreign driver fines, Tulum incident, Cancún incident, Quintana Roo, Bali razzia, Egypt scooter, Japan IDP requirement, Codice della Strada Article 135, Greek Law 4850',
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
				name: copy.value.recovery.heading,
				description: copy.value.recovery.lead,
				step: copy.value.recovery.steps.map((s, i) => ({
					'@type': 'HowToStep',
					position: i + 1,
					name: s.title,
					text: s.body,
				})),
			}),
		},
	],
}));

const faqItems = computed(() =>
	copy.value.faq.items.map((f) => ({
		id: f.id,
		question: f.question,
		answer: [f.answer],
	}))
);
</script>

<template>
	<article class="drive-page">
		<!-- Hero -->
		<section class="section drive-hero">
			<div class="container max-w-5xl">
				<Breadcrumbs
					:items="[
						{ label: copy.breadcrumbs.home, to: '/' },
						{ label: copy.breadcrumbs.guides, to: '/guides/' },
						{ label: copy.breadcrumbs.current },
					]"
				/>

				<div class="drive-hero__grid">
					<div class="drive-hero__text">
						<p class="drive-hero__kicker">{{ copy.hero.kicker }}</p>

						<h1 class="drive-hero__title">{{ copy.hero.title }}</h1>

						<AuthorByline
							author-name="Petr Shchepetin"
							profile-href="/authors/petr-shchepetin"
							:by-label="copy.hero.authorBy"
							:reviewed-label="copy.hero.authorReviewedLabel"
							:reviewed-date="copy.hero.authorReviewedDate"
						/>

						<p class="drive-hero__lead">{{ copy.hero.lead }}</p>

						<div class="drive-hero__cta-row">
							<a :href="applyUrl" class="drive-hero__cta-primary">
								{{ copy.hero.ctaPrimary }}
							</a>
							<NuxtLink :to="localePath('/pricing')" class="drive-hero__cta-secondary">
								{{ copy.hero.ctaSecondary }}
							</NuxtLink>
						</div>
					</div>
					<div class="drive-hero__illustration" aria-hidden="true">
						<img
							src="/guides/drive-without-idp-hero.svg"
							alt=""
							loading="eager"
							width="1200"
							height="800"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Quick Verdict -->
		<section class="section drive-section drive-section--alt">
			<div class="container max-w-5xl">
				<h2 class="drive-h2">{{ copy.quickVerdict.heading }}</h2>
				<p class="drive-h2-lead">{{ copy.quickVerdict.lead }}</p>

				<div class="drive-stats-grid">
					<div v-for="stat in copy.quickVerdict.stats" :key="stat.label" class="drive-stat">
						<div class="drive-stat__value">{{ stat.value }}</div>
						<div class="drive-stat__label">{{ stat.label }}</div>
					</div>
				</div>
			</div>
		</section>

		<!-- 8 Cases -->
		<section class="section drive-section">
			<div class="container max-w-5xl">
				<h2 class="drive-h2">{{ copy.cases.heading }}</h2>
				<p class="drive-h2-lead">{{ copy.cases.lead }}</p>

				<div class="drive-cases-grid">
					<article
						v-for="item in copy.cases.items"
						:key="item.num"
						class="drive-case"
						:class="`drive-case--${item.severity}`"
					>
						<div class="drive-case__head">
							<span class="drive-case__num">{{ item.num }}</span>
							<div class="drive-case__meta">
								<div class="drive-case__region">
									<span :class="`fi fi-${item.flagCode}`" aria-hidden="true"></span>
									<span>{{ item.region }}</span>
								</div>
								<div class="drive-case__date">{{ item.date }}</div>
							</div>
							<span class="drive-case__severity" :class="`drive-case__severity--${item.severity}`">
								{{ item.severity }}
							</span>
						</div>
						<div class="drive-case__body">
							<p class="drive-case__origin"><strong>{{ item.origin }}</strong></p>
							<p class="drive-case__scenario">{{ item.scenario }}</p>
							<p class="drive-case__outcome">{{ item.outcome }}</p>
							<p class="drive-case__source">{{ item.source }}</p>
						</div>
					</article>
				</div>
			</div>
		</section>

		<!-- Escalation Tiers -->
		<section class="section drive-section drive-section--alt">
			<div class="container max-w-5xl">
				<h2 class="drive-h2">{{ copy.escalation.heading }}</h2>
				<p class="drive-h2-lead">{{ copy.escalation.lead }}</p>

				<div class="drive-tiers">
					<article
						v-for="item in copy.escalation.items"
						:key="item.tier"
						class="drive-tier"
						:class="`drive-tier--t${item.tier}`"
					>
						<div class="drive-tier__head">
							<span class="drive-tier__num">Tier {{ item.tier }}</span>
							<h3 class="drive-tier__label">{{ item.label }}</h3>
						</div>
						<p class="drive-tier__desc">{{ item.description }}</p>
						<p class="drive-tier__trigger"><strong>Trigger:</strong> {{ item.triggerScenario }}</p>
						<p class="drive-tier__example"><strong>Documented:</strong> {{ item.documentedExample }}</p>
					</article>
				</div>
			</div>
		</section>

		<!-- Country Table -->
		<section class="section drive-section">
			<div class="container max-w-6xl">
				<h2 class="drive-h2">{{ copy.countryTable.heading }}</h2>
				<p class="drive-h2-lead">{{ copy.countryTable.lead }}</p>

				<div class="drive-table-wrap">
					<table class="drive-country-table">
						<thead>
							<tr>
								<th>{{ copy.countryTable.columnLabels.country }}</th>
								<th>{{ copy.countryTable.columnLabels.legallyRequired }}</th>
								<th>{{ copy.countryTable.columnLabels.penalty }}</th>
								<th>{{ copy.countryTable.columnLabels.worstOutcome }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in copy.countryTable.rows" :key="row.country">
								<th scope="row" class="drive-country-table__country">
									<span :class="`fi fi-${row.flagCode}`" aria-hidden="true"></span>
									<span>{{ row.country }}</span>
								</th>
								<td>{{ row.legallyRequired }}</td>
								<td class="drive-country-table__penalty">{{ row.documentedPenalty }}</td>
								<td>{{ row.worstOutcome }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p class="drive-footnote">{{ copy.countryTable.footnote }}</p>
			</div>
		</section>

		<!-- Rental Contract -->
		<section class="section drive-section drive-section--alt">
			<div class="container max-w-4xl">
				<h2 class="drive-h2">{{ copy.rentalContract.heading }}</h2>
				<p class="drive-h2-lead">{{ copy.rentalContract.lead }}</p>

				<div class="drive-rental">
					<p
						v-for="(p, i) in copy.rentalContract.paragraphs"
						:key="i"
						class="drive-para"
						v-html="renderMarkdown(p)"
					/>
				</div>
			</div>
		</section>

		<!-- Recovery -->
		<section class="section drive-section">
			<div class="container max-w-5xl">
				<h2 class="drive-h2">{{ copy.recovery.heading }}</h2>
				<p class="drive-h2-lead">{{ copy.recovery.lead }}</p>

				<ol class="drive-recovery">
					<li v-for="step in copy.recovery.steps" :key="step.num" class="drive-recovery__step">
						<span class="drive-recovery__num">{{ step.num }}</span>
						<div class="drive-recovery__body">
							<h3 class="drive-recovery__title">{{ step.title }}</h3>
							<p class="drive-recovery__text">{{ step.body }}</p>
						</div>
					</li>
				</ol>
			</div>
		</section>

		<!-- Mid CTA -->
		<section class="section drive-section drive-midcta-wrap">
			<div class="container max-w-5xl">
				<div class="drive-midcta">
					<div class="drive-midcta__text">
						<p class="drive-midcta__kicker">{{ copy.midCta.kicker }}</p>
						<p class="drive-midcta__title">{{ copy.midCta.title }}</p>
					</div>
					<a :href="applyUrl" class="drive-midcta__button">{{ copy.midCta.button }}</a>
				</div>
			</div>
		</section>

		<!-- Cost Comparison -->
		<section class="section drive-section">
			<div class="container max-w-5xl">
				<h2 class="drive-h2">{{ copy.costComparison.heading }}</h2>
				<p class="drive-h2-lead">{{ copy.costComparison.lead }}</p>

				<div class="drive-table-wrap">
					<table class="drive-cost-table">
						<thead>
							<tr>
								<th>{{ copy.costComparison.columnLabels.scenario }}</th>
								<th>{{ copy.costComparison.columnLabels.avoided }}</th>
								<th>{{ copy.costComparison.columnLabels.ratio }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(row, i) in copy.costComparison.rows" :key="i">
								<th scope="row">{{ row.scenario }}</th>
								<td>{{ row.avoided }}</td>
								<td class="drive-cost-table__ratio">{{ row.ratio }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p class="drive-cost-table__math">{{ copy.costComparison.math }}</p>
			</div>
		</section>

		<!-- FAQ -->
		<section class="section drive-section drive-section--alt">
			<div class="container max-w-3xl">
				<h2 class="drive-h2">{{ copy.faq.heading }}</h2>
				<p class="drive-h2-lead">{{ copy.faq.lead }}</p>

				<FaqAccordion :items="faqItems" id-prefix="drive-faq" />
			</div>
		</section>

		<!-- Final CTA -->
		<section class="section drive-finalcta">
			<div class="container max-w-4xl">
				<div class="drive-finalcta__card">
					<h2 class="drive-finalcta__heading">{{ copy.finalCta.heading }}</h2>
					<p class="drive-finalcta__text">{{ copy.finalCta.text }}</p>
					<a :href="applyUrl" class="drive-finalcta__button">{{ copy.finalCta.button }}</a>
				</div>
			</div>
		</section>

		<!-- Methodology + Sources -->
		<section class="section drive-section drive-section--alt">
			<div class="container max-w-4xl">
				<h2 class="drive-h2">{{ copy.methodology.heading }}</h2>
				<p class="drive-para">{{ copy.methodology.body }}</p>

				<h3 class="drive-h3">{{ copy.methodology.sourcesHeading }}</h3>
				<ul class="drive-sources">
					<li v-for="(s, i) in copy.methodology.sources" :key="i">{{ s }}</li>
				</ul>
			</div>
		</section>

		<!-- Legal -->
		<section class="section drive-section drive-legal">
			<div class="container max-w-4xl">
				<h2 class="drive-legal__heading">{{ copy.legal.heading }}</h2>
				<p class="drive-legal__body">{{ copy.legal.body }}</p>
			</div>
		</section>
	</article>
</template>

<script lang="ts">
function renderMarkdown(text: string): string {
	return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;
@import 'flag-icons/css/flag-icons.min.css';

.drive-page {
	min-height: 100vh;
	background: white;
	color: rgb(var(--c-slate-900));
}

/* Hero */
.drive-hero {
	padding: 56px 0 72px;
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.15) 100%);

	@media (min-width: 768px) { padding: 76px 0 96px; }
}
.drive-hero__grid {
	display: grid;
	gap: 36px;
	align-items: start;

	@media (min-width: 1024px) { grid-template-columns: 1fr 1fr; }
}
.drive-hero__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 14px;
}
.drive-hero__title {
	font-size: clamp(1.875rem, 1.5rem + 1.5vw, 2.625rem);
	font-weight: 800;
	line-height: 1.15;
	letter-spacing: -0.01em;
	margin-bottom: 16px;
	overflow-wrap: anywhere;
}
.drive-hero__lead {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin: 14px 0 22px;
}
.drive-hero__cta-row {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	align-items: center;
}
.drive-hero__cta-primary {
	display: inline-flex;
	align-items: center;
	padding: 12px 24px;
	background: rgb(var(--c-orange));
	color: white;
	font-size: 14px;
	font-weight: 800;
	border-radius: 999px;
	text-decoration: none;
	transition: background-color 0.15s ease, transform 0.15s ease;

	&:hover { background: #e88a14; transform: translateY(-1px); }
}
.drive-hero__cta-secondary {
	display: inline-flex;
	align-items: center;
	padding: 14px 22px;
	border-radius: $radius-xl;
	border: 2px solid rgb(var(--c-slate-200));
	color: rgb(var(--c-slate-700));
	font-size: 14px;
	font-weight: 700;
	text-decoration: none;
	transition: border-color 0.15s ease, color 0.15s ease;

	&:hover {
		border-color: rgb(var(--c-sea));
		color: rgb(var(--c-slate-900));
	}
}
.drive-hero__illustration {
	display: flex;
	justify-content: center;
	img {
		max-width: 620px;
		width: 100%;
		height: auto;
	}
}

/* Generic section */
.drive-section { padding: 56px 0; @media (min-width: 768px) { padding: 72px 0; } }
.drive-section--alt { background: rgba(var(--c-slate-50), 1); }
.drive-h2 {
	font-size: clamp(1.5rem, 1.25rem + 0.8vw, 2rem);
	font-weight: 800;
	margin-bottom: 12px;
	line-height: 1.2;
}
.drive-h2-lead {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin-bottom: 28px;
	max-width: 52em;
}
.drive-h3 {
	font-size: 18px;
	font-weight: 800;
	margin: 28px 0 12px;
	color: rgb(var(--c-slate-900));
}
.drive-para {
	font-size: 15px;
	line-height: 1.7;
	color: rgb(var(--c-slate-800));
	margin-bottom: 14px;

	&:deep(strong) { color: rgb(var(--c-slate-900)); font-weight: 800; }
}

/* Stats grid */
.drive-stats-grid {
	display: grid;
	gap: 16px;
	grid-template-columns: 1fr;

	@media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
	@media (min-width: 1024px) { grid-template-columns: repeat(4, 1fr); }
}
.drive-stat {
	padding: 22px 18px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: $radius-2xl;
	text-align: center;
}
.drive-stat__value {
	font-size: 28px;
	font-weight: 800;
	color: rgb(var(--c-sea));
	line-height: 1.1;
	margin-bottom: 6px;
}
.drive-stat__label {
	font-size: 12px;
	font-weight: 600;
	color: rgb(var(--c-slate-600));
	line-height: 1.4;
}

/* Cases grid */
.drive-cases-grid {
	display: grid;
	gap: 18px;
	grid-template-columns: 1fr;

	@media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
}
.drive-case {
	padding: 22px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left: 4px solid rgb(var(--c-slate-300));
	border-radius: $radius-2xl;
	box-shadow: $shadow-soft;
}
.drive-case--medium { border-left-color: #FBBF24; }
.drive-case--high { border-left-color: #F97316; }
.drive-case--critical { border-left-color: #DC2626; }
.drive-case__head {
	display: flex;
	align-items: center;
	gap: 14px;
	margin-bottom: 14px;
	padding-bottom: 12px;
	border-bottom: 1px solid rgb(var(--c-slate-100));
}
.drive-case__num {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	background: rgba(var(--c-mint), 0.6);
	color: rgb(var(--c-sea));
	font-size: 14px;
	font-weight: 800;
	border-radius: 999px;
	flex-shrink: 0;
}
.drive-case__meta { flex: 1; }
.drive-case__region {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}
.drive-case__date {
	font-size: 12px;
	color: rgb(var(--c-slate-500));
	margin-top: 2px;
}
.drive-case__severity {
	font-size: 10px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	padding: 3px 8px;
	border-radius: 999px;
}
.drive-case__severity--medium { background: #FEF3C7; color: #92400E; }
.drive-case__severity--high { background: #FED7AA; color: #9A3412; }
.drive-case__severity--critical { background: #FECACA; color: #991B1B; }
.drive-case__origin {
	font-size: 13px;
	color: rgb(var(--c-slate-600));
	margin-bottom: 8px;
}
.drive-case__scenario {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-800));
	margin-bottom: 10px;
}
.drive-case__outcome {
	font-size: 13px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
	padding: 8px 10px;
	background: rgba(var(--c-mint), 0.25);
	border-radius: 10px;
}
.drive-case__source {
	font-size: 11px;
	color: rgb(var(--c-slate-500));
	font-style: italic;
	line-height: 1.5;
}

/* Tiers */
.drive-tiers {
	display: grid;
	gap: 16px;
	grid-template-columns: 1fr;

	@media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
}
.drive-tier {
	padding: 22px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-top: 4px solid rgb(var(--c-sea));
	border-radius: $radius-2xl;
}
.drive-tier--t1 { border-top-color: #10B981; }
.drive-tier--t2 { border-top-color: #FBBF24; }
.drive-tier--t3 { border-top-color: #F97316; }
.drive-tier--t4 { border-top-color: #DC2626; }
.drive-tier__head { margin-bottom: 12px; }
.drive-tier__num {
	display: inline-block;
	font-size: 10px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
	margin-bottom: 6px;
}
.drive-tier__label {
	font-size: 17px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}
.drive-tier__desc {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
	margin-bottom: 10px;
}
.drive-tier__trigger,
.drive-tier__example {
	font-size: 12px;
	line-height: 1.55;
	color: rgb(var(--c-slate-600));
	margin-bottom: 6px;

	strong { color: rgb(var(--c-slate-900)); font-weight: 800; }
}

/* Country + Cost tables */
.drive-table-wrap {
	overflow-x: auto;
	border-radius: $radius-2xl;
	border: 1px solid rgb(var(--c-slate-200));
	background: white;
	margin: 8px 0;
}
.drive-country-table,
.drive-cost-table {
	width: 100%;
	border-collapse: collapse;
	font-size: 13px;
	min-width: 600px;

	th, td {
		padding: 12px 14px;
		text-align: left;
		border-bottom: 1px solid rgb(var(--c-slate-100));
		color: rgb(var(--c-slate-800));
		vertical-align: top;
	}
	thead th {
		font-size: 12px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		background: rgba(var(--c-slate-50), 1);
		letter-spacing: 0.02em;
		position: sticky;
		top: 0;
	}
	tbody th[scope="row"] {
		font-weight: 700;
		color: rgb(var(--c-slate-900));
		background: rgba(var(--c-slate-50), 0.55);
		min-width: 160px;
	}
	tbody tr:last-child td,
	tbody tr:last-child th { border-bottom: none; }
}
.drive-country-table__country {
	display: flex;
	align-items: center;
	gap: 8px;
}
.drive-country-table__penalty {
	font-weight: 700;
	color: rgb(var(--c-slate-900));
}
.drive-cost-table__ratio {
	font-weight: 800;
	color: rgb(var(--c-sea));
}
.drive-cost-table__math {
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-600));
	margin-top: 18px;
	padding: 14px 16px;
	background: rgba(var(--c-mint), 0.18);
	border-left: 3px solid rgb(var(--c-sea));
	border-radius: 12px;
}
.drive-footnote {
	font-size: 12px;
	color: rgb(var(--c-slate-500));
	margin-top: 12px;
	line-height: 1.55;
}

/* Recovery */
.drive-recovery {
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	gap: 16px;
}
.drive-recovery__step {
	display: flex;
	gap: 18px;
	padding: 22px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: $radius-2xl;

	@media (max-width: 640px) { flex-direction: column; gap: 12px; }
}
.drive-recovery__num {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	background: rgb(var(--c-sea));
	color: white;
	font-size: 14px;
	font-weight: 800;
	border-radius: 999px;
	flex-shrink: 0;
}
.drive-recovery__body { flex: 1; }
.drive-recovery__title {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 6px;
}
.drive-recovery__text {
	font-size: 14px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
}

/* Mid CTA */
.drive-midcta-wrap { padding-top: 0; }
.drive-midcta {
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding: 28px 32px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left: 4px solid rgb(var(--c-orange));
	border-radius: $radius-2xl;
	box-shadow: $shadow-soft;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
}
.drive-midcta__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-orange));
	margin-bottom: 6px;
}
.drive-midcta__title {
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.3;
}
.drive-midcta__button {
	display: inline-flex;
	align-items: center;
	padding: 14px 28px;
	background: rgb(var(--c-orange));
	color: white;
	font-size: 15px;
	font-weight: 800;
	border-radius: 999px;
	text-decoration: none;
	white-space: nowrap;
	transition: background-color 0.15s ease, transform 0.15s ease;

	&:hover { background: #e88a14; transform: translateY(-1px); }
}

/* Final CTA */
.drive-finalcta {
	padding: 64px 0;
	background: linear-gradient(180deg, white 0%, rgba(var(--c-mint), 0.3) 100%);

	@media (min-width: 768px) { padding: 88px 0; }
}
.drive-finalcta__card {
	padding: 40px 28px;
	background: white;
	border: 1px solid rgba(var(--c-sea), 0.18);
	border-radius: $radius-2xl;
	box-shadow: $shadow-soft;
	text-align: center;

	@media (min-width: 768px) { padding: 52px 56px; }
}
.drive-finalcta__heading {
	font-size: clamp(1.5rem, 1.3rem + 0.8vw, 2rem);
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 14px;
	line-height: 1.2;
}
.drive-finalcta__text {
	font-size: 15px;
	line-height: 1.7;
	color: rgb(var(--c-slate-700));
	max-width: 42em;
	margin: 0 auto 24px;
}
.drive-finalcta__button {
	display: inline-flex;
	align-items: center;
	padding: 14px 32px;
	background: rgb(var(--c-orange));
	color: white;
	font-size: 15px;
	font-weight: 800;
	border-radius: 999px;
	text-decoration: none;
	transition: background-color 0.15s ease;

	&:hover { background: #e88a14; }
}

/* Sources */
.drive-sources {
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	gap: 8px;

	li {
		padding: 10px 14px;
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 12px;
		font-size: 13px;
		line-height: 1.55;
		color: rgb(var(--c-slate-700));
	}
}

/* Legal */
.drive-legal { padding: 40px 0 64px; background: rgba(var(--c-slate-50), 0.5); }
.drive-legal__heading {
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-700));
	margin-bottom: 10px;
	letter-spacing: 0.02em;
}
.drive-legal__body {
	font-size: 12px;
	line-height: 1.7;
	color: rgb(var(--c-slate-500));
}

/* Rental */
.drive-rental { display: grid; gap: 4px; }
</style>
