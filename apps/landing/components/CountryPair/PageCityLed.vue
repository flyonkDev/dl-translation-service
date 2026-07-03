<template>
	<article class="country-pair country-pair--city-led">

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

		<!-- Cities breakdown — THIS is the structural signature of the city-led variant.
		     Moved to position 2 (replaces TL;DR). Each city gets a self-contained card
		     with rental scene, enforcement, fine band, and watch-out. -->
		<section v-if="copy.cities" class="section cities-section">
			<div class="container max-w-6xl">
				<div v-if="copy.cities.badge" class="cities-flag">
					<Icon icon="ph:map-pin-line-bold" width="20" />
					<span>{{ copy.cities.badge }}</span>
				</div>
				<h2 class="country-pair__h2">{{ copy.cities.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.cities.lead }}</p>

				<div class="cities-grid">
					<article v-for="c in copy.cities.items" :key="c.name" class="city-card">
						<header class="city-card__header">
							<h3 class="city-card__name">{{ c.name }}</h3>
							<div class="city-card__region">{{ c.region }}</div>
						</header>
						<p class="city-card__scene">{{ c.scene }}</p>

						<dl class="city-card__meta">
							<div class="city-card__meta-row">
								<dt class="city-card__meta-label">
									<Icon icon="ph:car-simple-bold" width="16" />
									<span>Rental scene</span>
								</dt>
								<dd class="city-card__meta-val">{{ c.rentalNote }}</dd>
							</div>
							<div class="city-card__meta-row">
								<dt class="city-card__meta-label">
									<Icon icon="mdi:cctv" width="16" />
									<span>Enforcement</span>
								</dt>
								<dd class="city-card__meta-val">{{ c.enforcement }}</dd>
							</div>
							<div class="city-card__meta-row">
								<dt class="city-card__meta-label">
									<Icon icon="ph:currency-circle-dollar-bold" width="16" />
									<span>Fine band</span>
								</dt>
								<dd class="city-card__meta-val city-card__meta-val--fine">{{ c.fineBand }}</dd>
							</div>
						</dl>

						<div class="city-card__watch">
							<Icon icon="ph:warning-diamond-bold" width="18" />
							<span>{{ c.watchOut }}</span>
						</div>
					</article>
				</div>

				<p class="country-pair__pattern">{{ copy.cities.bottomNote }}</p>
			</div>
		</section>

		<!-- Fines (moved earlier since city cards reference fine bands) -->
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

		<!-- LEZ / ZBE / ZTL deep-dive (natural continuation of city + fines context) -->
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

		<!-- Driving rules (moved after fines/LEZ since cities already covered specifics) -->
		<section class="section bg-slate-50">
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

		<!-- Rejects (destination-specific disqualifiers) -->
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

		<!-- Honesty (compressed positioning) -->
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

		<!-- Renting (rental chains list) -->
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

		<!-- TL;DR comparison (moved to bottom — supplementary since cities did the heavy lifting) -->
		<section v-if="copy.tldr" class="section bg-slate-50">
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

		<!-- Why your X license isn't enough (moved to supplementary position) -->
		<section class="section bg-white">
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
	/** Default-locale path (Nuxt i18n localePath() will localise this), e.g. '/idp-for-us-drivers-in-france' */
	canonicalPath: string;
	/** FAQ id prefix for accordion accessibility, e.g. 'us-fr-faq' */
	idPrefix: string;
	/** Hero illustration absolute path, e.g. '/illustrations/us-france-hero.svg' */
	illustration: string;
	/** PostHog event tag, e.g. 'us' */
	analyticsOrigin: string;
	/** PostHog event tag, e.g. 'france' */
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
		layout: 'city-led',
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

const AUTHOR_NAME = 'Petr Shchepetin';
const AUTHOR_SLUG = 'petr-shchepetin';

const authorByLabel = computed(() => {
	switch (locale.value) {
		case 'es': return 'Por';
		case 'ru': return 'Автор:';
		default: return 'By';
	}
});

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

/* Reuse most styles from Page.vue via unscoped .country-pair classes.
   This block only defines the city-led-specific block styles. */

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
	font-size: 16px;
	line-height: 1.55;
	color: rgb(var(--c-slate-700));
	margin-bottom: 32px;
	max-width: 720px;
}

.country-pair__pattern {
	font-size: 14px;
	line-height: 1.55;
	color: rgb(var(--c-slate-700));
	margin-top: 24px;
	font-style: italic;
}

.country-pair__math {
	font-size: 14px;
	line-height: 1.55;
	color: rgb(var(--c-slate-700));
	margin-top: 24px;
}

.country-pair__pillar-link {
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 24px 28px;
	background: rgb(var(--c-mint) / 0.35);
	border: 1px solid rgb(var(--c-sea) / 0.2);
	border-radius: $radius-2xl;
	text-decoration: none;
	transition: background 0.2s ease, transform 0.2s ease;

	&:hover {
		background: rgb(var(--c-mint) / 0.55);
		transform: translateY(-1px);
	}
}

.country-pair__pillar-icon {
	flex-shrink: 0;
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background: rgb(var(--c-sea));
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}

.country-pair__pillar-text {
	flex: 1;
}

.country-pair__pillar-kicker {
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgb(var(--c-sea));
	margin-bottom: 4px;
}

.country-pair__pillar-heading {
	font-size: 18px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	margin-bottom: 6px;
}

.country-pair__pillar-sub {
	font-size: 14px;
	line-height: 1.5;
	color: rgb(var(--c-slate-700));
}

.country-pair__pillar-arrow {
	flex-shrink: 0;
	color: rgb(var(--c-sea));
}

/* === Cities block — the city-led variant's structural signature === */

.cities-section {
	background: linear-gradient(180deg, rgb(var(--c-mint) / 0.18) 0%, rgb(var(--c-mint) / 0.05) 100%);
}

.cities-flag {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 6px 14px;
	background: white;
	border: 1px solid rgb(var(--c-sea) / 0.35);
	border-radius: 999px;
	color: rgb(var(--c-sea));
	font-size: 13px;
	font-weight: 600;
	margin-bottom: 16px;
}

.cities-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;
	margin-top: 8px;

	@include up($bp-tablet) {
		grid-template-columns: repeat(2, 1fr);
	}

	@include up($bp-desktop) {
		grid-template-columns: repeat(3, 1fr);
	}
}

.city-card {
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: $radius-2xl;
	padding: 24px;
	box-shadow: $shadow-soft;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.city-card__header {
	border-bottom: 1px solid rgb(var(--c-slate-100));
	padding-bottom: 12px;
}

.city-card__name {
	font-size: 22px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	letter-spacing: -0.01em;
	margin-bottom: 2px;
}

.city-card__region {
	font-size: 13px;
	color: rgb(var(--c-slate-500));
	font-weight: 500;
}

.city-card__scene {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

.city-card__meta {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin: 0;
}

.city-card__meta-row {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.city-card__meta-label {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.04em;
	color: rgb(var(--c-slate-500));
}

.city-card__meta-val {
	font-size: 13px;
	line-height: 1.5;
	color: rgb(var(--c-slate-800));
	margin: 0;
}

.city-card__meta-val--fine {
	font-weight: 700;
	color: rgb(var(--c-orange));
}

.city-card__watch {
	display: flex;
	align-items: flex-start;
	gap: 8px;
	padding: 12px 14px;
	background: rgb(var(--c-orange) / 0.08);
	border-left: 3px solid rgb(var(--c-orange));
	border-radius: 6px;
	font-size: 13px;
	line-height: 1.5;
	color: rgb(var(--c-slate-800));

	svg {
		flex-shrink: 0;
		color: rgb(var(--c-orange));
		margin-top: 1px;
	}
}
</style>
