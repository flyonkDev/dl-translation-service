<template>
	<article class="country-pair">

		<!-- Hero -->
		<CountryPairHero
			:breadcrumbs-home="copy.breadcrumbs.home"
			:breadcrumbs-current="copy.breadcrumbs.current"
			origin-flag="ru"
			destination-flag="th"
			:kicker="copy.hero.kicker"
			:title="copy.hero.title"
			:lead="copy.hero.lead"
			:quick-answer="copy.quickAnswer"
			:cta-primary-label="copy.hero.ctaPrimary"
			:cta-primary-href="appHref"
			:cta-secondary-label="copy.hero.ctaSecondary"
			cta-secondary-to="/pricing"
			illustration="/illustrations/russia-thailand-hero.svg"
			:badge-top-label="copy.hero.badgeTop"
			:badge-bottom-label="copy.hero.badgeBottom"
			@primary-click="goToApp"
		/>

		<!-- Why your Russian license isn't enough -->
		<section class="section bg-white">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.whyNotEnough.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.whyNotEnough.lead }}</p>

				<div class="reasons-grid">
					<div v-for="r in copy.whyNotEnough.reasons" :key="r.icon" class="reason-card">
						<div class="reason-card__icon">
							<Icon :icon="r.icon" width="28" />
						</div>
						<h3 class="reason-card__title">{{ r.title }}</h3>
						<p class="reason-card__text">{{ r.text }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Thailand driving rules -->
		<section class="section bg-slate-50">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.rules.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.rules.lead }}</p>

				<div class="rules-grid">
					<div v-for="r in copy.rules.items" :key="r.icon" class="rule-card">
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

		<!-- 2026 Fines -->
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

		<!-- How IDP Companion fits — Honesty block -->
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

		<!-- Renting practical -->
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

		<!-- What happens — stratified outcomes -->
		<section class="section bg-slate-50">
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
		<section class="section bg-white">
			<div class="container max-w-3xl">
				<h2 class="country-pair__h2">{{ copy.faq.heading }}</h2>
				<FaqAccordion :items="copy.faq.items" id-prefix="ru-th-faq" />
			</div>
		</section>

		<!-- Related (coming soon stubs) -->
		<section class="section bg-mint/15">
			<div class="container max-w-5xl">
				<h2 class="country-pair__h2">{{ copy.related.heading }}</h2>
				<p class="country-pair__h2-lead">{{ copy.related.lead }}</p>

				<div class="related-grid">
					<div v-for="r in copy.related.items" :key="r.label" class="related-card">
						<div class="related-card__flags">
							<span class="fi" :class="`fi-${r.flagFrom}`" aria-hidden="true" />
							<Icon icon="ph:arrow-right-bold" width="16" class="related-card__sep" />
							<span class="fi" :class="`fi-${r.flagTo}`" aria-hidden="true" />
						</div>
						<div class="related-card__label">{{ r.label }}</div>
						<div class="related-card__status">{{ r.status }}</div>
					</div>
				</div>
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
import { useHead, useSeoMeta, useI18n, useRuntimeConfig, useLocalePath, defineOgImageComponent, defineI18nRoute } from '#imports';
import { Icon } from '@iconify/vue';
import { LOCALE_QUERY_PARAM } from '@i18n';
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';
import CountryPairHero from '~/components/CountryPair/Hero.vue';
import CountryPairFines from '~/components/CountryPair/FinesTable.vue';
import { useProductAnalytics } from '~/composables/useProductAnalytics';
import { russiaThailandCopy, type CountryPairCopy } from '~/content/country-pairs/russia-thailand';

// Available in EN + RU. ES intentionally skipped — irrelevant audience for Russian-driver guide.
defineI18nRoute({
	locales: ['en', 'ru'],
});

const { locale } = useI18n();
const copy = computed<CountryPairCopy>(
	() => russiaThailandCopy[locale.value as 'en' | 'ru'] ?? russiaThailandCopy.en,
);
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { capture } = useProductAnalytics();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const canonicalPath = computed(() => String(localePath('/idp-for-russian-drivers-in-thailand')));
const canonicalUrl = computed(() => siteUrl + canonicalPath.value);

const appUrl = computed(() => String(config.public.appUrl || '').trim().replace(/\/+$/, ''));

const appHref = computed(() => {
	if (!appUrl.value) return '#';
	const qs = new URLSearchParams({
		[LOCALE_QUERY_PARAM]: locale.value,
		issueCountry: 'RU',
		planYears: '5',
	});
	return `${appUrl.value}/apply?${qs.toString()}`;
});

function goToApp() {
	capture('country_pair_cta_click', {
		origin: 'russia',
		destination: 'thailand',
		locale: locale.value,
	});
	if (typeof window !== 'undefined') {
		window.location.href = appHref.value;
	}
}

// SEO meta — locale-aware via copy.value
useSeoMeta({
	title: () => copy.value.seo.title,
	description: () => copy.value.seo.description,
	ogTitle: () => copy.value.seo.title,
	ogDescription: () => copy.value.seo.description,
	ogUrl: () => canonicalUrl.value,
	ogType: 'article',
	ogSiteName: 'IDP Companion',
	ogLocale: () => (locale.value === 'ru' ? 'ru_RU' : 'en_US'),
	twitterCard: 'summary_large_image',
	twitterTitle: () => copy.value.seo.title,
	twitterDescription: () => copy.value.seo.description,
});

// Per-page dynamic OG image. Component evaluates once per route at render time, so each
// locale (en, ru) gets its own generated PNG with localized strings.
defineOgImageComponent('CountryPair', {
	origin: { code: 'ru', name: copy.value.og.originName },
	destination: { code: 'th', name: copy.value.og.destinationName },
	title: copy.value.seo.ogTitleShort,
	subtitle: copy.value.seo.ogSubtitle,
});

useHead(() => ({
	link: [{ rel: 'canonical', href: canonicalUrl.value }],
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: copy.value.seo.title,
				description: copy.value.seo.description,
				url: canonicalUrl.value,
				inLanguage: locale.value,
				datePublished: '2026-04-25',
				dateModified: '2026-04-25',
				author: { '@type': 'Organization', name: 'IDP Companion', url: `${siteUrl}/` },
				publisher: { '@id': `${siteUrl}/#organization` },
				about: [
					{ '@type': 'Country', name: copy.value.og.originName },
					{ '@type': 'Country', name: copy.value.og.destinationName },
					{ '@type': 'Thing', name: 'International Driving Permit' },
				],
			}),
		},
		{
			type: 'application/ld+json',
			children: JSON.stringify({
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
			children: JSON.stringify({
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
			children: JSON.stringify({
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
	],
}));
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

/* === Generic section heading === */

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

/* === Reasons (why-not-enough) === */

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

/* === Rules grid === */

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
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
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


/* === Honesty grid === */

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

.honesty-card--yes .honesty-card__title {
	color: #15803d;
}

.honesty-card--no .honesty-card__title {
	color: #b91c1c;
}

.honesty-card--info .honesty-card__title {
	color: rgb(var(--c-sea));
}

.honesty-card--warn .honesty-card__title {
	color: #b45309;
}

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

	&.outcome--low {
		border-left-color: rgb(var(--c-sea));
	}

	&.outcome--med {
		border-left-color: #f59e0b;
	}

	&.outcome--high {
		border-left-color: #dc2626;
	}
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
	padding: 18px 20px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	cursor: default;
	transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease;

	&:hover {
		transform: translateY(-3px);
		border-color: rgba(var(--c-sea), 0.2);
		box-shadow: 0 14px 32px -14px rgba(15, 23, 42, 0.14), 0 4px 12px -6px rgba(var(--c-sea), 0.10);

		.related-card__sep {
			color: rgb(var(--c-sea));
			transform: translateX(2px);
		}
	}
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
	padding-left: 18px;
	display: flex;
	flex-direction: column;
	gap: 6px;

	li {
		font-size: 12px;
		line-height: 1.6;
		color: rgb(var(--c-slate-500));
	}
}
</style>
