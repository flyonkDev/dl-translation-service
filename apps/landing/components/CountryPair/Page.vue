<template>
	<article class="country-pair">

		<!-- Hero -->
		<CountryPairHero
			:breadcrumbs-home="copy.breadcrumbs.home"
			:breadcrumbs-current="copy.breadcrumbs.current"
			:origin-flag="originFlag"
			:destination-flag="destinationFlag"
			:kicker="copy.hero.kicker"
			:title="copy.hero.title"
			:lead="copy.hero.lead"
			:quick-answer="copy.quickAnswer"
			:cta-primary-label="copy.hero.ctaPrimary"
			:cta-primary-href="appHref"
			:cta-secondary-label="copy.hero.ctaSecondary"
			cta-secondary-to="/pricing"
			:illustration="illustration"
			:badge-top-label="copy.hero.badgeTop"
			:badge-bottom-label="copy.hero.badgeBottom"
			:author-name="AUTHOR_NAME"
			:author-profile-href="`/authors/${AUTHOR_SLUG}`"
			:author-by-label="authorByLabel"
			:author-reviewed-label="copy.lastReviewed ? freshnessLabel : ''"
			:author-reviewed-date="copy.lastReviewed || ''"
			@primary-click="goToApp"
		/>

		<!-- TL;DR comparison -->
		<section v-if="copy.tldr" class="section bg-white">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.tldr.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.tldr.lead }}</p>

				<div class="tldr-table-wrap">
					<table class="tldr-table">
						<thead>
							<tr>
								<th class="tldr-table__th">{{ copy.tldr.colDocument }}</th>
								<th class="tldr-table__th">{{ copy.tldr.colWhatItDoes }}</th>
								<th class="tldr-table__th tldr-table__th--cost">{{ copy.tldr.colCost }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="r in copy.tldr.rows" :key="r.document" :class="`tldr-row tldr-row--${r.tone}`">
								<td class="tldr-table__td tldr-table__td--doc">{{ r.document }}</td>
								<td class="tldr-table__td">{{ r.whatItDoes }}</td>
								<td class="tldr-table__td tldr-table__td--cost">{{ r.cost }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="tldr-cards">
					<div v-for="r in copy.tldr.rows" :key="r.document" :class="`tldr-card tldr-card--${r.tone}`">
						<div class="tldr-card__head">
							<span class="tldr-card__doc">{{ r.document }}</span>
							<span class="tldr-card__cost">{{ r.cost }}</span>
						</div>
						<p class="tldr-card__text">{{ r.whatItDoes }}</p>
					</div>
				</div>

				<p class="country-pair__pattern">{{ copy.tldr.footnote }}</p>
			</div>
		</section>

		<!-- Why your X license isn't enough -->
		<section class="section bg-slate-50">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.whyNotEnough.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.whyNotEnough.lead }}</p>

				<div class="reasons-grid">
					<div v-for="r in copy.whyNotEnough.reasons" :key="r.icon + r.title" class="reason-card">
						<div class="reason-card__icon">
							<Icon :icon="r.icon" width="28" />
						</div>
						<h3 class="reason-card__title">{{ r.title }}</h3>
						<p class="reason-card__text">{{ r.text }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Things destination rejects (e.g. Japan-specific) -->
		<section v-if="copy.rejects" class="section rejects-section">
			<div class="container max-w-5xl">
				<div v-if="copy.rejects.badge" class="rejects-flag">
					<Icon icon="ph:prohibit-bold" width="20" />
					<span>{{ copy.rejects.badge }}</span>
				</div>
				<h2 class="country-pair__h2">{{ copy.rejects.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.rejects.lead }}</p>

				<div class="rejects-grid">
					<div v-for="r in copy.rejects.items" :key="r.icon + r.title" class="reject-card">
						<div class="reject-card__icon">
							<Icon :icon="r.icon" width="26" />
						</div>
						<h3 class="reject-card__title">{{ r.title }}</h3>
						<p class="reject-card__text">{{ r.text }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Driving rules -->
		<section class="section bg-white">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.rules.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.rules.lead }}</p>

				<div class="rules-grid">
					<div v-for="r in copy.rules.items" :key="r.label" class="rule-card">
						<div class="rule-card__top">
							<div class="rule-card__icon">
								<Icon :icon="r.icon" width="28" />
							</div>
							<div class="rule-card__value">{{ r.value }}</div>
						</div>
						<div class="rule-card__label">{{ r.label }}</div>
						<p v-if="r.note" class="rule-card__note">{{ r.note }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- LEZ / ZBE / ZTL deep-dive -->
		<section v-if="copy.lez" class="section lez-section">
			<div class="container max-w-5xl">
				<div v-if="copy.lez.badge" class="lez-flag">
					<Icon icon="mdi:cctv" width="20" />
					<span>{{ copy.lez.badge }}</span>
				</div>
				<h2 class="country-pair__h2">{{ copy.lez.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.lez.lead }}</p>

				<div class="lez-zones">
					<div v-for="z in copy.lez.zones" :key="z.name" class="lez-zone">
						<div class="lez-zone__head">
							<div class="lez-zone__name">{{ z.name }}</div>
							<div class="lez-zone__city">{{ z.city }}</div>
						</div>
						<p class="lez-zone__desc">{{ z.description }}</p>
						<div class="lez-zone__meta">
							<div class="lez-zone__fine">
								<span class="lez-zone__fine-label">Fine</span>
								<span class="lez-zone__fine-amount">{{ z.fine }}</span>
							</div>
							<div class="lez-zone__note">{{ z.note }}</div>
						</div>
					</div>
				</div>

				<p class="country-pair__pattern">{{ copy.lez.tip }}</p>
			</div>
		</section>

		<!-- Fines -->
		<section class="section bg-white">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.fines.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.fines.lead }}</p>

				<CountryPairFines
					:items="copy.fines.items"
					:col-violation="copy.fines.colViolation"
					:col-amount="copy.fines.colAmount"
					:col-note="copy.fines.colNote"
					:caption="copy.fines.caption"
				/>
			</div>
		</section>

		<!-- Alphabet (non-Latin script destinations) -->
		<section v-if="copy.alphabet" class="section alphabet-section">
			<div class="container max-w-5xl">
				<div v-if="copy.alphabet.badge" class="alphabet-flag">
					<Icon icon="ph:translate-bold" width="20" />
					<span>{{ copy.alphabet.badge }}</span>
				</div>
				<h2 class="country-pair__h2">{{ copy.alphabet.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.alphabet.lead }}</p>

				<div class="alphabet-grid">
					<div v-for="ex in copy.alphabet.examples" :key="ex.sign" class="alphabet-card">
						<div class="alphabet-card__sign">{{ ex.sign }}</div>
						<div class="alphabet-card__latin">{{ ex.latin }}</div>
						<div class="alphabet-card__meaning">{{ ex.meaning }}</div>
					</div>
				</div>

				<h3 class="alphabet-helps__heading">{{ copy.alphabet.helpsHeading }}</h3>
				<ul class="alphabet-helps">
					<li v-for="h in copy.alphabet.helps" :key="h" class="alphabet-helps__item">
						<Icon icon="ph:check-bold" width="18" class="alphabet-helps__check" />
						<span>{{ h }}</span>
					</li>
				</ul>

				<p class="country-pair__pattern">{{ copy.alphabet.outro }}</p>
			</div>
		</section>

		<!-- HowTo -->
		<section v-if="copy.howTo" class="section bg-slate-50">
			<div class="container max-w-3xl">
				<h2 class="country-pair__h2">{{ copy.howTo.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.howTo.lead }}</p>

				<ol class="howto-list">
					<li v-for="(step, idx) in copy.howTo.steps" :key="step.title" class="howto-step">
						<div class="howto-step__number">{{ idx + 1 }}</div>
						<div class="howto-step__body">
							<h3 class="howto-step__title">{{ step.title }}</h3>
							<p class="howto-step__text">{{ step.text }}</p>
						</div>
					</li>
				</ol>
			</div>
		</section>

		<!-- Honesty -->
		<section class="section bg-mint/15">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.honesty.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.honesty.lead }}</p>

				<div class="honesty-grid">
					<div class="honesty-card honesty-card--yes">
						<div class="honesty-card__title">
							<Icon icon="ph:check-circle-fill" width="22" />
							<span>{{ copy.honesty.is.title }}</span>
						</div>
						<ul class="honesty-card__list">
							<li v-for="t in copy.honesty.is.items" :key="t">{{ t }}</li>
						</ul>
					</div>

					<div class="honesty-card honesty-card--no">
						<div class="honesty-card__title">
							<Icon icon="ph:x-circle-fill" width="22" />
							<span>{{ copy.honesty.isNot.title }}</span>
						</div>
						<ul class="honesty-card__list">
							<li v-for="t in copy.honesty.isNot.items" :key="t">{{ t }}</li>
						</ul>
					</div>

					<div class="honesty-card honesty-card--info">
						<div class="honesty-card__title">
							<Icon icon="ph:lightning-fill" width="22" />
							<span>{{ copy.honesty.helps.title }}</span>
						</div>
						<ul class="honesty-card__list">
							<li v-for="t in copy.honesty.helps.items" :key="t">{{ t }}</li>
						</ul>
					</div>

					<div class="honesty-card honesty-card--warn">
						<div class="honesty-card__title">
							<Icon icon="ph:warning-fill" width="22" />
							<span>{{ copy.honesty.needOfficial.title }}</span>
						</div>
						<ul class="honesty-card__list">
							<li v-for="t in copy.honesty.needOfficial.items" :key="t">{{ t }}</li>
						</ul>
					</div>
				</div>

				<p class="country-pair__pattern">{{ copy.honesty.pattern }}</p>
			</div>
		</section>

		<!-- Renting -->
		<section class="section bg-white">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.renting.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.renting.lead }}</p>

				<div class="renting-list">
					<div v-for="r in copy.renting.chains" :key="r.name" class="renting-item">
						<div class="renting-item__name">{{ r.name }}</div>
						<div class="renting-item__policy">{{ r.policy }}</div>
					</div>
				</div>

				<h3 class="renting-tips__heading">{{ copy.renting.tipsHeading }}</h3>
				<ul class="renting-tips">
					<li v-for="t in copy.renting.tips" :key="t" class="renting-tips__item">
						<Icon icon="ph:check-bold" width="18" class="renting-tips__check" />
						<span>{{ t }}</span>
					</li>
				</ul>
			</div>
		</section>

		<!-- Phrases -->
		<section v-if="copy.phrases" class="section bg-slate-50">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.phrases.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.phrases.lead }}</p>

				<div class="phrases-grid">
					<div v-for="p in copy.phrases.items" :key="p.phrase" class="phrase-card">
						<div class="phrase-card__top">
							<div class="phrase-card__it">{{ p.phrase }}</div>
							<div class="phrase-card__en">{{ p.translation }}</div>
						</div>
						<div class="phrase-card__ctx">{{ p.context }}</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Outcomes -->
		<section class="section bg-white">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.outcomes.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.outcomes.lead }}</p>

				<div class="outcomes-list">
					<div
						v-for="o in copy.outcomes.items"
						:key="o.label"
						class="outcome"
						:class="`outcome--${o.severity}`"
					>
						<div class="outcome__top">
							<span class="outcome__frequency">{{ o.frequency }}</span>
							<span class="outcome__label">{{ o.label }}</span>
						</div>
						<p class="outcome__text">{{ o.text }}</p>
					</div>
				</div>

				<p class="country-pair__math">{{ copy.outcomes.math }}</p>
			</div>
		</section>

		<!-- FAQ -->
		<section class="section bg-slate-50">
			<div class="container max-w-3xl">
				<h2 class="country-pair__h2">{{ copy.faq.heading }}</h2>
				<FaqAccordion :items="copy.faq.items" :id-prefix="idPrefix" />
			</div>
		</section>

		<!-- Related -->
		<section class="section bg-mint/15">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.related.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.related.lead }}</p>

				<div class="related-grid">
					<template v-for="r in copy.related.items" :key="r.label">
						<NuxtLink
							v-if="r.href"
							:to="r.href"
							class="related-card related-card--linked"
						>
							<div class="related-card__flags">
								<span class="fi" :class="`fi-${r.flagFrom}`" aria-hidden="true" />
								<Icon icon="ph:arrow-right-bold" width="16" class="related-card__sep" />
								<span class="fi" :class="`fi-${r.flagTo}`" aria-hidden="true" />
							</div>
							<div class="related-card__label">{{ r.label }}</div>
							<div class="related-card__status">{{ r.status }}</div>
						</NuxtLink>
						<div v-else class="related-card">
							<div class="related-card__flags">
								<span class="fi" :class="`fi-${r.flagFrom}`" aria-hidden="true" />
								<Icon icon="ph:arrow-right-bold" width="16" class="related-card__sep" />
								<span class="fi" :class="`fi-${r.flagTo}`" aria-hidden="true" />
							</div>
							<div class="related-card__label">{{ r.label }}</div>
							<div class="related-card__status">{{ r.status }}</div>
						</div>
					</template>
				</div>
			</div>
		</section>

		<!-- Pillar guide hub link -->
		<section class="section bg-mint/10 border-t border-sea/10">
			<div class="container max-w-4xl">
				<NuxtLink :to="localePath('/guides/driving-abroad-complete-guide-2026/')" class="country-pair__pillar-link">
					<div class="country-pair__pillar-icon">
						<Icon icon="ph:book-open-text-bold" width="28" />
					</div>
					<div class="country-pair__pillar-text">
						<div class="country-pair__pillar-kicker">Cross-cutting guide</div>
						<div class="country-pair__pillar-heading">Driving Abroad in 2026: The Complete IDP Guide</div>
						<div class="country-pair__pillar-sub">Geneva 1949 vs Vienna 1968, the destinations where it matters, what insurance does when you skip it, and the three ways to get an IDP-class document before you fly.</div>
					</div>
					<Icon icon="ph:arrow-right-bold" width="22" class="country-pair__pillar-arrow" />
				</NuxtLink>
			</div>
		</section>

		<!-- Final CTA -->
		<section class="section bg-white border-t border-sea/10">
			<div class="container flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<div>
					<h2 class="country-pair__h2 mb-2">{{ copy.finalCta.heading }}</h2>
					<p class="text-sm leading-relaxed text-slate-700 max-w-xl">{{ copy.finalCta.text }}</p>
				</div>
				<div>
					<a :href="appHref" @click.prevent="goToApp">
						<BaseButton type="button" variant="primary">
							<span class="font-bold">{{ copy.finalCta.button }}</span>
						</BaseButton>
					</a>
				</div>
			</div>
		</section>

		<!-- Disclaimer + Sources -->
		<section class="section bg-slate-50 border-t border-slate-200">
			<div class="container max-w-3xl">
				<div class="legal-block">
					<h3 class="legal-block__heading">{{ copy.legal.disclaimerHeading }}</h3>
					<p class="legal-block__text">{{ copy.legal.disclaimer }}</p>
				</div>

				<div class="legal-block legal-block--sources">
					<h3 class="legal-block__heading">{{ copy.legal.sourcesHeading }}</h3>
					<ul class="legal-block__list">
						<li v-for="s in copy.legal.sources" :key="s">{{ s }}</li>
					</ul>
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
import CountryPairHero from '~/components/CountryPair/Hero.vue';
import CountryPairFines from '~/components/CountryPair/FinesTable.vue';
import { useProductAnalytics } from '~/composables/useProductAnalytics';
import type { CountryPairCopy } from '~/content/country-pairs/_types';

interface Props {
	/** Per-locale copy map. Page picks the matching key by current locale, fallback = first available */
	copyByLocale: Record<string, CountryPairCopy>;
	/** ISO-2 lowercase, e.g. 'us' / 'gb' / 'ru' */
	originFlag: string;
	/** ISO-2 lowercase, e.g. 'jp' / 'it' / 'gr' */
	destinationFlag: string;
	/** Country code passed to /apply, e.g. 'US' / 'RU' */
	issueCountry: string;
	/** Default-locale path (Nuxt i18n localePath() will localise this), e.g. '/idp-for-us-drivers-in-japan' */
	canonicalPath: string;
	/** FAQ id prefix for accordion accessibility, e.g. 'us-jp-faq' */
	idPrefix: string;
	/** Hero illustration absolute path, e.g. '/illustrations/us-japan-hero.svg' */
	illustration: string;
	/** PostHog event tag, e.g. 'us' */
	analyticsOrigin: string;
	/** PostHog event tag, e.g. 'japan' */
	analyticsDestination: string;
}

const props = defineProps<Props>();

const { locale } = useI18n();

/** Resolve copy for current locale, fall back to first locale provided (usually 'en'). */
const copy = computed<CountryPairCopy>(() => {
	const byLocale = props.copyByLocale;
	const direct = byLocale[locale.value as keyof typeof byLocale];
	if (direct) return direct;
	const firstKey = Object.keys(byLocale)[0];
	return byLocale[firstKey];
});

const config = useRuntimeConfig();
const localePath = useLocalePath();
const { capture } = useProductAnalytics();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const localizedPath = computed(() => {
	const p = String(localePath(props.canonicalPath));
	return p.endsWith('/') ? p : p + '/';
});
const canonicalUrl = computed(() => siteUrl + localizedPath.value);
const appUrl = computed(() => String(config.public.appUrl || '').trim().replace(/\/+$/, ''));

const appHref = computed(() => {
	if (!appUrl.value) return '#';
	const qs = new URLSearchParams({
		[LOCALE_QUERY_PARAM]: locale.value,
		issueCountry: props.issueCountry,
		planYears: '5',
	});
	return `${appUrl.value}/apply?${qs.toString()}`;
});

function goToApp() {
	capture('country_pair_cta_click', {
		origin: props.analyticsOrigin,
		destination: props.analyticsDestination,
		locale: locale.value,
	});
	if (typeof window !== 'undefined') {
		window.location.href = appHref.value;
	}
}

/** "Last reviewed:" prefix — copy override or default per locale */
const freshnessLabel = computed(() => {
	const override = copy.value.labels?.freshnessPrefix;
	if (override) return override;
	switch (locale.value) {
		case 'es': return 'Última revisión:';
		case 'ru': return 'Последняя проверка:';
		default: return 'Last reviewed:';
	}
});

/**
 * Author byline (GEO + E-E-A-T "Experience" pillar). Single author across all
 * country-pair pages today. If we add co-authors per cluster later, extend
 * CountryPairCopy with an optional `author` field and prefer it here.
 */
const AUTHOR_NAME = 'Petr Shchepetin';
const AUTHOR_SLUG = 'petr-shchepetin';

/** "By" prefix translated per locale. */
const authorByLabel = computed(() => {
	switch (locale.value) {
		case 'es': return 'Por';
		case 'ru': return 'Автор:';
		default: return 'By';
	}
});

/** og:locale must be xx_XX format per OG spec */
const ogLocaleTag = computed(() => {
	switch (locale.value) {
		case 'es': return 'es_ES';
		case 'ru': return 'ru_RU';
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

/** Per-route + per-locale dynamic OG PNG via Satori. Each locale gets its own cached PNG. */
defineOgImageComponent('CountryPair', {
	origin: { code: props.originFlag, name: copy.value.og.originName },
	destination: { code: props.destinationFlag, name: copy.value.og.destinationName },
	title: copy.value.seo.ogTitleShort,
	subtitle: copy.value.seo.ogSubtitle,
});

useHead(() => {
	const baseScripts = [
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
				datePublished: copy.value.datePublished || '2026-04-26',
				dateModified: copy.value.dateModified || copy.value.datePublished || '2026-04-26',
				image: [siteUrl + props.illustration],
				articleSection: 'International Driving Permit Guides',
				author: {
					'@type': 'Person',
					name: AUTHOR_NAME,
					url: `${siteUrl}/authors/${AUTHOR_SLUG}`,
					'@id': `${siteUrl}/authors/${AUTHOR_SLUG}#person`,
				},
				publisher: {
					'@type': 'Organization',
					name: 'IDP Companion',
					url: `${siteUrl}/`,
					'@id': `${siteUrl}/#organization`,
				},
				about: [
					{ '@type': 'Country', name: copy.value.og.originName },
					{ '@type': 'Country', name: copy.value.og.destinationName },
					{ '@type': 'Thing', name: 'International Driving Permit' },
				],
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: copy.value.breadcrumbs.home, item: `${siteUrl}/` },
					{ '@type': 'ListItem', position: 2, name: copy.value.breadcrumbs.current, item: canonicalUrl.value },
				],
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'FAQPage',
				mainEntity: copy.value.faq.items.map((item) => ({
					'@type': 'Question',
					name: item.question,
					acceptedAnswer: { '@type': 'Answer', text: item.answer },
				})),
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Product',
				name: 'IDP Companion',
				description: copy.value.honesty.lead,
				url: `${siteUrl}/pricing`,
				brand: { '@type': 'Brand', name: 'IDP Companion' },
				publisher: { '@id': `${siteUrl}/#organization` },
				offers: {
					'@type': 'AggregateOffer',
					priceCurrency: 'USD',
					lowPrice: '35',
					highPrice: '55',
					offerCount: '3',
					availability: 'https://schema.org/InStock',
				},
			}),
		},
	];

	if (copy.value.howTo) {
		baseScripts.push({
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'HowTo',
				name: copy.value.howTo.schemaName,
				description: copy.value.howTo.lead,
				totalTime: copy.value.howTo.duration,
				estimatedCost: {
					'@type': 'MonetaryAmount',
					currency: 'USD',
					value: copy.value.howTo.cost.replace(/[^0-9.]/g, ''),
				},
				step: copy.value.howTo.steps.map((step, idx) => ({
					'@type': 'HowToStep',
					position: idx + 1,
					name: step.title,
					text: step.text,
				})),
			}),
		});
	}

	return {
		link: [{ rel: 'canonical', href: canonicalUrl.value }],
		script: baseScripts,
	};
});
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

/* === Generic === */

.country-pair__h2 {
	font-size: 24px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
	letter-spacing: -0.01em;

	@include up($bp-tablet) {
		font-size: 30px;
	}
}

.country-pair__h2-lead {
	font-size: 14px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin-bottom: 28px;
	max-width: 760px;
}

.freshness-pill {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 6px 12px;
	margin-bottom: 16px;
	border-radius: 999px;
	background: rgba(var(--c-mint), 0.55);
	color: rgb(var(--c-sea));
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.04em;
	text-transform: uppercase;
}

/* === TL;DR table === */

.tldr-table-wrap {
	display: none;
	border-radius: $radius-2xl;
	overflow: hidden;
	border: 1px solid rgb(var(--c-slate-200));
	background: white;
	margin-bottom: 24px;

	@include up($bp-tablet) {
		display: block;
	}
}

.tldr-table {
	width: 100%;
	border-collapse: collapse;
	font-size: 13px;
}

.tldr-table__th {
	text-align: left;
	padding: 14px 18px;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
	background: rgb(var(--c-slate-50));
	border-bottom: 1px solid rgb(var(--c-slate-200));

	&--cost {
		text-align: right;
	}
}

.tldr-table__td {
	padding: 18px;
	vertical-align: top;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
	border-bottom: 1px solid rgb(var(--c-slate-100));

	&--doc {
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		min-width: 200px;
	}

	&--cost {
		text-align: right;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		white-space: nowrap;
	}
}

.tldr-row {
	&--official {
		background: rgba(var(--c-mint), 0.18);
	}

	&--companion {
		background: rgba(var(--c-orange), 0.06);
	}

	&:last-child .tldr-table__td {
		border-bottom: 0;
	}
}

.tldr-cards {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 24px;

	@include up($bp-tablet) {
		display: none;
	}
}

.tldr-card {
	padding: 16px 18px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left-width: 4px;
	border-left-color: rgb(var(--c-slate-300));

	&--official {
		border-left-color: rgb(var(--c-sea));
	}

	&--companion {
		border-left-color: rgb(var(--c-orange));
	}
}

.tldr-card__head {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	gap: 12px;
	margin-bottom: 8px;
}

.tldr-card__doc {
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}

.tldr-card__cost {
	font-size: 13px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	white-space: nowrap;
}

.tldr-card__text {
	font-size: 13px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

/* === Reasons (whyNotEnough) === */

.reasons-grid {
	display: grid;
	gap: 20px;
	grid-template-columns: 1fr;

	@include up($bp-tablet) {
		grid-template-columns: repeat(3, 1fr);
	}
}

.reason-card {
	padding: 22px;
	border-radius: $radius-2xl;
	border: 1px solid rgb(var(--c-slate-200));
	background: white;
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
	}
}

.reason-card__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	border-radius: 12px;
	background: rgba(var(--c-mint), 0.55);
	color: rgb(var(--c-sea));
	margin-bottom: 14px;
}

.reason-card__title {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
}

.reason-card__text {
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
}

/* === Rejects (e.g. Japan-specific) === */

.rejects-section {
	background: linear-gradient(180deg, rgba(220, 38, 38, 0.05) 0%, rgba(var(--c-mint), 0.18) 100%);
}

.rejects-flag {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 6px 12px;
	margin-bottom: 14px;
	border-radius: 999px;
	background: white;
	border: 1px solid rgba(220, 38, 38, 0.3);
	color: #b91c1c;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.06em;
	text-transform: uppercase;
}

.rejects-grid {
	display: grid;
	gap: 16px;
	grid-template-columns: 1fr;

	@include up($bp-tablet) {
		grid-template-columns: repeat(2, 1fr);
	}
}

.reject-card {
	padding: 20px 22px;
	border-radius: $radius-2xl;
	background: white;
	border: 1px solid rgba(220, 38, 38, 0.15);
	box-shadow: 0 6px 18px -10px rgba(15, 23, 42, 0.08);
}

.reject-card__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 10px;
	background: rgba(220, 38, 38, 0.1);
	color: #b91c1c;
	margin-bottom: 12px;
}

.reject-card__title {
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 6px;
}

.reject-card__text {
	font-size: 13px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

/* === Rules === */

.rules-grid {
	display: grid;
	gap: 14px;
	grid-template-columns: repeat(2, 1fr);

	@include up($bp-tablet) {
		grid-template-columns: repeat(4, 1fr);
	}
}

.rule-card {
	padding: 16px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.rule-card__top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	margin-bottom: 8px;
}

.rule-card__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background: rgba(var(--c-mint), 0.55);
	color: rgb(var(--c-sea));
}

.rule-card__value {
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	text-align: right;
}

.rule-card__label {
	font-size: 11px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: rgb(var(--c-slate-500));
	margin-bottom: 4px;
}

.rule-card__note {
	font-size: 12px;
	line-height: 1.45;
	color: rgb(var(--c-slate-700));
}

/* === LEZ === */

.lez-section {
	background: linear-gradient(180deg, rgba(var(--c-orange), 0.05) 0%, rgba(var(--c-mint), 0.18) 100%);
}

.lez-flag {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 6px 12px;
	margin-bottom: 14px;
	border-radius: 999px;
	background: white;
	border: 1px solid rgba(var(--c-orange), 0.3);
	color: rgb(var(--c-orange));
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.06em;
	text-transform: uppercase;
}

.lez-zones {
	display: grid;
	align-items: stretch;
	gap: 16px;
	grid-template-columns: 1fr;
	margin-bottom: 24px;

	@include up($bp-tablet) {
		grid-template-columns: 1fr 1fr;
	}
}

.lez-zone {
	display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100%;
	padding: 20px 22px;
	border-radius: $radius-2xl;
	background: white;
	border: 1px solid rgba(var(--c-orange), 0.15);
	box-shadow: 0 6px 18px -10px rgba(15, 23, 42, 0.08);

	&:first-child {
		@include up($bp-tablet) {
			grid-column: span 2;
		}
	}
}

.lez-zone__head {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 8px;
	flex-wrap: wrap;
}

.lez-zone__name {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}

.lez-zone__city {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
}

.lez-zone__desc {
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin-bottom: 14px;
}

.lez-zone__meta {
	display: flex;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;
	padding-top: 12px;
	min-height: 110px;
	border-top: 1px dashed rgb(var(--c-slate-200));
}

.lez-zone__fine {
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 90px;
	flex-shrink: 0;
}

.lez-zone__fine-label {
	font-size: 10px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
}

.lez-zone__fine-amount {
	font-size: 15px;
	font-weight: 800;
	color: #b91c1c;
}

.lez-zone__note {
	padding: 0 24px;
	font-size: 12px;
	line-height: 1.45;
	color: rgb(var(--c-slate-700));
	flex: 1;
	min-width: 160px;
}

/* === Alphabet === */

.alphabet-section {
	background: linear-gradient(180deg, rgba(var(--c-sea), 0.05) 0%, rgba(var(--c-mint), 0.18) 100%);
}

.alphabet-flag {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 6px 12px;
	margin-bottom: 14px;
	border-radius: 999px;
	background: white;
	border: 1px solid rgba(var(--c-sea), 0.3);
	color: rgb(var(--c-sea));
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.06em;
	text-transform: uppercase;
}

.alphabet-grid {
	display: grid;
	gap: 14px;
	grid-template-columns: 1fr;
	margin-bottom: 28px;

	@include up($bp-tablet) {
		grid-template-columns: repeat(2, 1fr);
	}
}

.alphabet-card {
	padding: 18px 20px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgba(var(--c-sea), 0.15);
	box-shadow: 0 6px 18px -10px rgba(15, 23, 42, 0.08);
}

.alphabet-card__sign {
	font-size: 28px;
	font-weight: 800;
	color: rgb(var(--c-sea));
	letter-spacing: 0.02em;
	margin-bottom: 4px;
}

.alphabet-card__latin {
	font-size: 14px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	font-style: italic;
	margin-bottom: 8px;
}

.alphabet-card__meaning {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(var(--c-slate-700));
}

.alphabet-helps__heading {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
}

.alphabet-helps {
	list-style: none;
	padding: 0;
	margin: 0 0 24px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.alphabet-helps__item {
	display: flex;
	gap: 12px;
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
}

.alphabet-helps__check {
	flex-shrink: 0;
	color: rgb(var(--c-sea));
	margin-top: 4px;
}

/* === HowTo === */

.howto-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.howto-step {
	display: flex;
	gap: 16px;
	padding: 18px 20px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.howto-step__number {
	flex-shrink: 0;
	width: 32px;
	height: 32px;
	border-radius: 999px;
	background: rgb(var(--c-sea));
	color: white;
	font-size: 14px;
	font-weight: 800;
	display: flex;
	align-items: center;
	justify-content: center;
}

.howto-step__title {
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 4px;
}

.howto-step__text {
	font-size: 13px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

/* === Honesty === */

.honesty-grid {
	display: grid;
	gap: 16px;
	grid-template-columns: 1fr;
	margin-bottom: 24px;

	@include up($bp-tablet) {
		grid-template-columns: repeat(2, 1fr);
	}
}

.honesty-card {
	padding: 20px 22px;
	border-radius: $radius-2xl;
	border: 1px solid rgb(var(--c-slate-200));
	background: white;
}

.honesty-card__title {
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 14px;
}

.honesty-card--yes .honesty-card__title { color: #15803d; }
.honesty-card--no .honesty-card__title { color: #b91c1c; }
.honesty-card--info .honesty-card__title { color: rgb(var(--c-sea)); }
.honesty-card--warn .honesty-card__title { color: #b45309; }

.honesty-card__list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 8px;

	li {
		font-size: 13px;
		line-height: 1.6;
		color: rgb(var(--c-slate-700));
		position: relative;
		padding-left: 14px;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 8px;
			width: 5px;
			height: 5px;
			border-radius: 999px;
			background: rgb(var(--c-sea));
		}
	}
}

.country-pair__pattern {
	font-size: 14px;
	font-weight: 600;
	line-height: 1.65;
	color: rgb(var(--c-slate-900));
	padding: 16px 20px;
	background: rgba(var(--c-mint), 0.4);
	border-left: 3px solid rgb(var(--c-sea));
	border-radius: 8px;
}

.country-pair__pillar-link {
	display: grid;
	grid-template-columns: 56px 1fr 28px;
	align-items: center;
	gap: 20px;
	padding: 22px 26px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: 20px;
	text-decoration: none;
	transition: border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;

	&:hover {
		border-color: rgb(var(--c-sea));
		transform: translateY(-2px);
		box-shadow: 0 10px 28px -10px rgba(var(--c-sea), 0.35);

		.country-pair__pillar-arrow {
			transform: translateX(4px);
		}
	}
}

.country-pair__pillar-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 56px;
	height: 56px;
	border-radius: 14px;
	background: rgba(var(--c-mint), 0.55);
	color: rgb(var(--c-sea));
}

.country-pair__pillar-kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 4px;
}

.country-pair__pillar-heading {
	font-size: 17px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.25;
	margin-bottom: 6px;
}

.country-pair__pillar-sub {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(var(--c-slate-600));
}

.country-pair__pillar-arrow {
	color: rgb(var(--c-sea));
	transition: transform 0.18s ease;
	flex-shrink: 0;
}

@media (max-width: 640px) {
	.country-pair__pillar-link {
		grid-template-columns: 48px 1fr;
		grid-template-rows: auto auto;
		gap: 14px;
	}

	.country-pair__pillar-icon {
		width: 48px;
		height: 48px;
	}

	.country-pair__pillar-arrow {
		display: none;
	}
}

/* === Renting === */

.renting-list {
	display: grid;
	gap: 12px;
	grid-template-columns: 1fr;
	margin-bottom: 32px;

	@include up($bp-tablet) {
		grid-template-columns: repeat(2, 1fr);
	}
}

.renting-item {
	padding: 16px 18px;
	border-radius: $radius-xl;
	background: rgb(var(--c-slate-50));
	border: 1px solid rgb(var(--c-slate-200));
}

.renting-item__name {
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 4px;
}

.renting-item__policy {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(var(--c-slate-700));
}

.renting-tips__heading {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
}

.renting-tips {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.renting-tips__item {
	display: flex;
	gap: 12px;
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
}

.renting-tips__check {
	flex-shrink: 0;
	color: rgb(var(--c-sea));
	margin-top: 4px;
}

/* === Phrases === */

.phrases-grid {
	display: grid;
	gap: 12px;
	grid-template-columns: 1fr;

	@include up($bp-tablet) {
		grid-template-columns: repeat(2, 1fr);
	}
}

.phrase-card {
	padding: 16px 18px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.phrase-card__top {
	display: flex;
	align-items: baseline;
	gap: 12px;
	margin-bottom: 6px;
	flex-wrap: wrap;
}

.phrase-card__it {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-sea));
	font-style: italic;
}

.phrase-card__en {
	font-size: 13px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
}

.phrase-card__ctx {
	font-size: 12px;
	line-height: 1.5;
	color: rgb(var(--c-slate-500));
}

/* === Outcomes === */

.outcomes-list {
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin-bottom: 24px;
}

.outcome {
	padding: 16px 20px 18px;
	border-radius: $radius-xl;
	background: white;
	border-left: 4px solid rgb(var(--c-slate-200));

	&.outcome--low { border-left-color: rgb(var(--c-sea)); }
	&.outcome--med { border-left-color: #f59e0b; }
	&.outcome--high { border-left-color: #dc2626; }
}

.outcome__top {
	display: flex;
	flex-wrap: wrap;
	align-items: baseline;
	gap: 12px;
	margin-bottom: 6px;
}

.outcome__frequency {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
}

.outcome__label {
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}

.outcome__text {
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
}

.country-pair__math {
	font-size: 14px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	padding: 14px 18px;
	background: rgba(var(--c-mint), 0.4);
	border-radius: $radius-xl;
}

/* === Related === */

.related-grid {
	display: grid;
	gap: 12px;
	grid-template-columns: repeat(2, 1fr);

	@include up($bp-tablet) {
		grid-template-columns: repeat(3, 1fr);
	}
}

.related-card {
	position: relative;
	display: block;
	padding: 18px 20px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	cursor: default;
	text-decoration: none;
	color: inherit;
	transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

/* Live (linked) cards: clickable, hover lift, sea-tinted glow */
.related-card--linked {
	cursor: pointer;
	outline: none;

	&:hover {
		transform: translateY(-3px);
		border-color: rgb(var(--c-sea));
		background: rgba(var(--c-mint), 0.25);
		box-shadow:
			0 16px 36px -16px rgba(var(--c-sea), 0.45),
			0 6px 16px -8px rgba(var(--c-sea), 0.25);

		.related-card__sep {
			color: rgb(var(--c-sea));
			transform: translateX(2px);
		}

		.related-card__label {
			color: rgb(var(--c-sea));
		}
	}

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: 2px solid rgb(var(--c-sea));
		outline-offset: 2px;
	}

	&:active {
		transform: translateY(-1px);
	}
}

.related-card__label {
	transition: color 0.25s ease;
}

.related-card__flags {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 10px;

	.fi {
		display: block;
		flex-shrink: 0;
		width: 36px;
		height: 26px;
		border-radius: 4px;
		border: 1px solid rgba(15, 23, 42, 0.06);
		box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
	}
}

.related-card__sep {
	color: rgb(var(--c-slate-400));
	transition: color 0.25s ease, transform 0.25s ease;
}

.related-card__label {
	font-size: 14px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	margin-bottom: 4px;
}

.related-card__status {
	display: inline-flex;
	align-items: center;
	gap: 5px;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));

	&::before {
		content: '';
		width: 6px;
		height: 6px;
		border-radius: 999px;
		background: rgb(var(--c-sea));
		opacity: 0.5;
		animation: cp-pulse 2.4s ease-in-out infinite;
	}
}

@keyframes cp-pulse {
	0%, 100% { opacity: 0.4; transform: scale(1); }
	50% { opacity: 1; transform: scale(1.2); }
}

/* === Legal === */

.legal-block {
	margin-bottom: 24px;

	&:last-child {
		margin-bottom: 0;
	}
}

.legal-block__heading {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
	margin-bottom: 10px;
}

.legal-block__text {
	font-size: 12px;
	line-height: 1.65;
	color: rgb(var(--c-slate-500));
}

.legal-block__list {
	margin: 0;
	padding-left: 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 6px;

	li {
		font-size: 12px;
		line-height: 1.6;
		color: rgb(var(--c-slate-500));
		padding-left: 16px;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 8px;
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background: rgb(var(--c-sea));
		}
	}
}
</style>
