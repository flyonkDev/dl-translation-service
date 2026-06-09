<template>
	<div class="home">
		<!-- 1. HERO -->
		<section class="home-hero">
			<div class="container">
				<div class="home-hero__grid">
					<div class="home-hero__copy">
						<p class="home-hero__kicker">{{ t('home.heroKicker') }}</p>

						<h1 class="home-hero__title">{{ t('home.heroTitle') }}</h1>

						<AuthorByline
							:author-name="t('home.heroAuthorName')"
							:profile-href="'/authors/petr-shchepetin'"
							:by-label="t('home.heroAuthorBy')"
							:reviewed-label="t('home.heroReviewedLabel')"
							:reviewed-date="t('home.heroReviewedDate')"
						/>

						<p class="home-hero__lead">{{ t('home.heroLead') }}</p>

						<NuxtLinkLocale to="/pricing" class="link-underline home-hero__pricing-link">
							{{ t('home.heroSeePricingLink') }}
						</NuxtLinkLocale>

						<p class="home-hero__price-note">
							{{ t('home.heroPriceNote', { price: `$${fromPrice}` }) }}
						</p>
					</div>

					<StartApplicationWidget
						id="pricing"
						v-model:issueCountry="issueCountry"
						v-model:planYears="planYears"
						:app-url="appUrl"
					/>
				</div>
			</div>
		</section>

		<!-- 2. QUICK VERDICT -->
		<section class="home-verdict">
			<div class="container">
				<div class="home-verdict__card">
					<div class="home-verdict__head">
						<span class="home-verdict__kicker">{{ t('home.verdictKicker') }}</span>
						<h2 class="home-verdict__title">{{ t('home.verdictTitle') }}</h2>
					</div>
					<div class="home-verdict__body">
						<p class="home-verdict__lead">{{ t('home.verdictLead') }}</p>
						<ul class="home-verdict__bullets">
							<li><span class="home-verdict__check">✓</span><span>{{ t('home.verdictBullet1') }}</span></li>
							<li><span class="home-verdict__check">✓</span><span>{{ t('home.verdictBullet2') }}</span></li>
							<li><span class="home-verdict__check">✓</span><span>{{ t('home.verdictBullet3') }}</span></li>
							<li><span class="home-verdict__check">✓</span><span>{{ t('home.verdictBullet4') }}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- 3. WHAT IS IT -->
		<section class="home-what">
			<div class="container max-w-4xl">
				<h2 class="home-h2">{{ t('home.whatTitle') }}</h2>
				<p class="home-lead">{{ t('home.whatLead') }}</p>
				<p class="home-para">{{ t('home.whatPara1') }}</p>
				<p class="home-para">{{ t('home.whatPara2') }}</p>

				<div class="home-what__links">
					<NuxtLinkLocale to="/sample-pdf" class="link-underline home-inline-link">
						{{ t('home.whatSampleLink') }}
					</NuxtLinkLocale>
					<NuxtLinkLocale to="/guides/idp-vs-idl-vs-ida-2026" class="link-underline home-inline-link">
						{{ t('home.whatDisambigLink') }}
					</NuxtLinkLocale>
				</div>
			</div>
		</section>

		<!-- 4. 4 MOMENTS -->
		<section class="home-moments">
			<div class="container">
				<h2 class="home-h2">{{ t('home.momentsTitle') }}</h2>
				<p class="home-lead">{{ t('home.momentsLead') }}</p>

				<div class="home-moments__grid">
					<article class="home-moment">
						<div class="home-moment__num">1</div>
						<h3 class="home-moment__title">{{ t('home.moment1Title') }}</h3>
						<p class="home-moment__text">{{ t('home.moment1Text') }}</p>
					</article>
					<article class="home-moment">
						<div class="home-moment__num">2</div>
						<h3 class="home-moment__title">{{ t('home.moment2Title') }}</h3>
						<p class="home-moment__text">{{ t('home.moment2Text') }}</p>
					</article>
					<article class="home-moment">
						<div class="home-moment__num">3</div>
						<h3 class="home-moment__title">{{ t('home.moment3Title') }}</h3>
						<p class="home-moment__text">{{ t('home.moment3Text') }}</p>
					</article>
					<article class="home-moment">
						<div class="home-moment__num">4</div>
						<h3 class="home-moment__title">{{ t('home.moment4Title') }}</h3>
						<p class="home-moment__text">{{ t('home.moment4Text') }}</p>
					</article>
				</div>
			</div>
		</section>

		<!-- 5. MID-CTA -->
		<section class="home-midcta">
			<div class="container max-w-5xl">
				<div class="home-midcta__card">
					<div class="home-midcta__text">
						<p class="home-midcta__kicker">{{ t('home.midCtaKicker') }}</p>
						<p class="home-midcta__title">{{ t('home.midCtaTitle') }}</p>
					</div>
					<button type="button" class="home-midcta__button" @click="scrollToPricing">
						{{ t('home.midCtaButton') }}
					</button>
				</div>
			</div>
		</section>

		<!-- 6. COMPARISON -->
		<section class="home-compare">
			<div class="container max-w-5xl">
				<h2 class="home-h2">{{ t('home.compareTitle') }}</h2>
				<p class="home-lead">{{ t('home.compareLead') }}</p>

				<div class="home-compare__wrap">
					<table class="home-compare__table">
						<thead>
							<tr>
								<th>&nbsp;</th>
								<th class="home-compare__col-us">{{ t('home.compareColUs') }}</th>
								<th>{{ t('home.compareColGov') }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in compareRows" :key="row.label">
								<th scope="row">{{ row.label }}</th>
								<td class="home-compare__col-us">{{ row.us }}</td>
								<td>{{ row.gov }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p class="home-compare__honest">{{ t('home.compareHonest') }}</p>
			</div>
		</section>

		<!-- 7. HOW IT WORKS -->
		<section id="how-it-works" class="home-how">
			<div class="container">
				<h2 class="home-h2">{{ t('home.howTitle') }}</h2>
				<p class="home-lead">{{ t('home.howLead') }}</p>

				<div class="home-how__grid">
					<div class="home-step">
						<div class="home-step__num">1</div>
						<h3 class="home-step__title">{{ t('home.step1Title') }}</h3>
						<p class="home-step__text">{{ t('home.step1Text') }}</p>
					</div>
					<div class="home-step">
						<div class="home-step__num">2</div>
						<h3 class="home-step__title">{{ t('home.step2Title') }}</h3>
						<p class="home-step__text">{{ t('home.step2Text') }}</p>
					</div>
					<div class="home-step">
						<div class="home-step__num">3</div>
						<h3 class="home-step__title">{{ t('home.step3Title') }}</h3>
						<p class="home-step__text">{{ t('home.step3Text') }}</p>
					</div>
				</div>

				<div class="home-how__links">
					<NuxtLinkLocale to="/how-it-works" class="link-underline home-inline-link">
						{{ t('home.howGuideLink') }}
					</NuxtLinkLocale>
					<NuxtLinkLocale to="/security" class="link-underline home-inline-link">
						{{ t('home.howSecurityLink') }}
					</NuxtLinkLocale>
				</div>
			</div>
		</section>

		<!-- 8. WHAT YOU RECEIVE -->
		<section class="home-receive">
			<div class="container max-w-6xl">
				<h2 class="home-h2">{{ t('home.receiveTitle') }}</h2>
				<p class="home-lead">{{ t('home.receiveLead') }}</p>

				<div class="home-receive__grid">
					<article class="home-receive__card">
						<h3 class="home-receive__title">{{ t('home.receive1Title') }}</h3>
						<p class="home-receive__text">{{ t('home.receive1Text') }}</p>
					</article>
					<article class="home-receive__card">
						<h3 class="home-receive__title">{{ t('home.receive2Title') }}</h3>
						<p class="home-receive__text">{{ t('home.receive2Text') }}</p>
					</article>
					<article class="home-receive__card">
						<h3 class="home-receive__title">{{ t('home.receive3Title') }}</h3>
						<p class="home-receive__text">{{ t('home.receive3Text') }}</p>
					</article>
					<article class="home-receive__card">
						<h3 class="home-receive__title">{{ t('home.receive4Title') }}</h3>
						<p class="home-receive__text">{{ t('home.receive4Text') }}</p>
					</article>
				</div>
			</div>
		</section>

		<!-- 9. TRUST STRIP -->
		<section class="home-trust">
			<div class="container max-w-5xl">
				<div class="home-trust__head">
					<h2 class="home-h2">{{ t('home.trustTitle') }}</h2>
					<p class="home-lead">{{ t('home.trustLead') }}</p>
				</div>
				<div class="home-trust__grid">
					<div class="home-trust__stat">
						<div class="home-trust__value">{{ t('home.trustStat1Value') }}</div>
						<div class="home-trust__label">{{ t('home.trustStat1Label') }}</div>
					</div>
					<div class="home-trust__stat">
						<div class="home-trust__value">{{ t('home.trustStat2Value') }}</div>
						<div class="home-trust__label">{{ t('home.trustStat2Label') }}</div>
					</div>
					<div class="home-trust__stat">
						<div class="home-trust__value">{{ t('home.trustStat3Value') }}</div>
						<div class="home-trust__label">{{ t('home.trustStat3Label') }}</div>
					</div>
					<div class="home-trust__stat">
						<div class="home-trust__value">{{ t('home.trustStat4Value') }}</div>
						<div class="home-trust__label">{{ t('home.trustStat4Label') }}</div>
					</div>
				</div>
			</div>
		</section>

		<!-- 10. FAQ -->
		<section id="faq" class="home-faq">
			<div class="container max-w-3xl">
				<h2 class="home-h2">{{ t('home.faqTitle') }}</h2>
				<p class="home-lead">{{ t('home.faqLead') }}</p>
				<FaqAccordion :items="faqs" id-prefix="home-faq" />
			</div>
		</section>

		<!-- 11. FINAL CTA -->
		<section class="home-cta">
			<div class="container max-w-5xl">
				<div class="home-cta__card">
					<p class="home-cta__kicker">{{ t('home.ctaKicker') }}</p>
					<h2 class="home-cta__title">{{ t('home.ctaTitle') }}</h2>
					<p class="home-cta__lead">{{ t('home.ctaLead') }}</p>
					<div class="home-cta__actions">
						<BaseButton type="button" variant="primary" @click="scrollToPricing">
							<span class="font-bold">{{ t('home.ctaButton') }}</span>
						</BaseButton>
					</div>
					<p class="home-cta__disclaimer">{{ t('home.ctaDisclaimer') }}</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead, useSeoMeta, useI18n, useRuntimeConfig, useLocalePath } from '#imports'
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue'
import StartApplicationWidget from '~/components/widgets/StartApplicationWidget.vue'
import FaqAccordion from '~/components/FaqAccordion.vue'
import AuthorByline from '~/components/AuthorByline.vue'
import { useStartApplication } from '~/composables/useStartApplication'
import { useLandingFaqs } from '~/composables/useLandingFaqs'
import { toOgLocale } from '~/utils/ogLocale'

const config = useRuntimeConfig()
const appUrl = computed(() => String(config.public.appUrl || '').trim())

const { t, locale } = useI18n()
const { issueCountry, planYears, fromPrice, scrollToPricing } = useStartApplication(appUrl)

const faqs = useLandingFaqs()

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '')
const localePath = useLocalePath()
const canonicalPath = computed(() => String(localePath({ name: 'index' })))
const canonicalUrl = computed(() => siteUrl + canonicalPath.value)

const datePublished = '2025-04-01'
const dateModified = '2026-06-08'

const compareRows = computed(() => [
	{ label: t('home.compareRow1Label'), us: t('home.compareRow1Us'), gov: t('home.compareRow1Gov') },
	{ label: t('home.compareRow2Label'), us: t('home.compareRow2Us'), gov: t('home.compareRow2Gov') },
	{ label: t('home.compareRow3Label'), us: t('home.compareRow3Us'), gov: t('home.compareRow3Gov') },
	{ label: t('home.compareRow4Label'), us: t('home.compareRow4Us'), gov: t('home.compareRow4Gov') },
	{ label: t('home.compareRow5Label'), us: t('home.compareRow5Us'), gov: t('home.compareRow5Gov') },
	{ label: t('home.compareRow6Label'), us: t('home.compareRow6Us'), gov: t('home.compareRow6Gov') },
	{ label: t('home.compareRow7Label'), us: t('home.compareRow7Us'), gov: t('home.compareRow7Gov') },
	{ label: t('home.compareRow8Label'), us: t('home.compareRow8Us'), gov: t('home.compareRow8Gov') },
])

useSeoMeta({
	title: () => t('seo.title'),
	description: () => t('seo.description'),
	ogTitle: () => t('seo.title'),
	ogDescription: () => t('seo.description'),
	ogImage: () => t('seo.ogImage'),
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageType: 'image/png',
	ogImageAlt: 'IDP Companion — Multilingual Driver License PDF',
	ogImageSecureUrl: () => t('seo.ogImage'),
	ogUrl: () => canonicalUrl.value,
	ogType: 'website',
	ogSiteName: 'IDP Companion',
	ogLocale: () => toOgLocale(locale.value),
	twitterCard: 'summary_large_image',
	twitterTitle: () => t('seo.title'),
	twitterDescription: () => t('seo.description'),
	twitterImage: () => t('seo.ogImage'),
	twitterImageAlt: 'IDP Companion — Multilingual Driver License PDF',
})

useHead(() => ({
	link: [{ rel: 'canonical', href: canonicalUrl.value }],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Organization',
				'@id': `${siteUrl}/#organization`,
				name: 'IDP Companion',
				url: `${siteUrl}/`,
				logo: `${siteUrl}/web-app-manifest-512x512.png`,
				email: 'support@idpcompanion.com',
				sameAs: [],
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebSite',
				'@id': `${siteUrl}/#website`,
				name: 'IDP Companion',
				url: `${siteUrl}/`,
				publisher: { '@id': `${siteUrl}/#organization` },
				inLanguage: locale.value,
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Person',
				'@id': `${siteUrl}/authors/petr-shchepetin#person`,
				name: 'Petr Shchepetin',
				jobTitle: 'Co-founder & lead author',
				url: `${siteUrl}/authors/petr-shchepetin/`,
				worksFor: { '@id': `${siteUrl}/#organization` },
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebPage',
				'@id': `${canonicalUrl.value}#webpage`,
				url: canonicalUrl.value,
				name: t('seo.title'),
				description: t('seo.description'),
				inLanguage: locale.value,
				isPartOf: { '@id': `${siteUrl}/#website` },
				about: { '@id': `${siteUrl}/#organization` },
				primaryImageOfPage: t('seo.ogImage'),
				datePublished,
				dateModified,
				author: { '@id': `${siteUrl}/authors/petr-shchepetin#person` },
				publisher: { '@id': `${siteUrl}/#organization` },
				breadcrumb: { '@id': `${canonicalUrl.value}#breadcrumb` },
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'SoftwareApplication',
				name: 'IDP Companion',
				applicationCategory: 'UtilityApplication',
				operatingSystem: 'Web',
				description: t('seo.description'),
				url: canonicalUrl.value,
				publisher: { '@id': `${siteUrl}/#organization` },
				offers: {
					'@type': 'AggregateOffer',
					priceCurrency: 'USD',
					lowPrice: '35',
					highPrice: '55',
					offerCount: '3',
					availability: 'https://schema.org/InStock',
					url: `${siteUrl}/pricing/`,
				},
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'FAQPage',
				mainEntity: faqs.value.map((faq) => ({
					'@type': 'Question',
					name: faq.question,
					acceptedAnswer: {
						'@type': 'Answer',
						text: faq.answer.filter(Boolean).join(' '),
					},
				})),
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				'@id': `${canonicalUrl.value}#breadcrumb`,
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl.value },
				],
			}),
		},
	],
}))
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

.home {
	min-height: 100vh;
	background: white;
}

/* ============================
   1. HERO
============================ */
.home-hero {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.18) 100%);
	padding: 52px 0 56px;

	@media (min-width: 768px) {
		padding: 72px 0 80px;
	}
}

.home-hero__grid {
	display: grid;
	gap: 36px;

	@media (min-width: 1024px) {
		grid-template-columns: 1.05fr 0.95fr;
		align-items: start;
	}
}

.home-hero__copy {
	@media (min-width: 1024px) {
		padding-right: 12px;
	}
}

.home-hero__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 10px;
}

.home-hero__title {
	font-size: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
	font-weight: 800;
	line-height: 1.15;
	color: rgb(var(--c-slate-900));
	margin-bottom: 16px;
	overflow-wrap: anywhere;
}

.home-hero__lead {
	font-size: 15px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
	margin: 14px 0 18px;
	max-width: 38em;
}

.home-hero__pricing-link {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 14px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
}

.home-hero__price-note {
	margin-top: 10px;
	font-size: 12px;
	color: rgb(var(--c-slate-500));
}

/* ============================
   2. QUICK VERDICT
============================ */
.home-verdict {
	padding: 56px 0 24px;
	background: white;

	@media (min-width: 768px) {
		padding: 72px 0 32px;
	}
}

.home-verdict__card {
	display: grid;
	gap: 24px;
	padding: 28px;
	border: 1px solid rgb(var(--c-slate-200));
	border-left: 4px solid rgb(var(--c-sea));
	border-radius: $radius-2xl;
	background: rgba(var(--c-mint), 0.18);

	@media (min-width: 768px) {
		grid-template-columns: 0.7fr 1.3fr;
		gap: 36px;
		padding: 36px;
	}
}

.home-verdict__kicker {
	display: inline-block;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 8px;
}

.home-verdict__title {
	font-size: 22px;
	font-weight: 800;
	line-height: 1.25;
	color: rgb(var(--c-slate-900));
}

.home-verdict__lead {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-800));
	margin-bottom: 16px;
}

.home-verdict__bullets {
	display: grid;
	gap: 8px;
	font-size: 14px;
	color: rgb(var(--c-slate-900));

	li {
		display: flex;
		gap: 10px;
	}
}

.home-verdict__check {
	color: rgb(var(--c-sea));
	font-weight: 800;
	flex-shrink: 0;
}

/* ============================
   SHARED: H2, lead, para
============================ */
.home-h2 {
	font-size: clamp(1.4rem, 1.2rem + 0.8vw, 1.875rem);
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 14px;
	line-height: 1.25;
}

.home-lead {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	max-width: 52em;
	margin-bottom: 20px;
}

.home-para {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin-bottom: 14px;
}

.home-inline-link {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 14px;
	font-weight: 700;
	color: rgb(var(--c-sea));
}

/* ============================
   3. WHAT IS IT
============================ */
.home-what {
	padding: 48px 0;
	background: white;

	@media (min-width: 768px) {
		padding: 64px 0;
	}
}

.home-what__links {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	margin-top: 18px;
}

/* ============================
   4. 4 MOMENTS
============================ */
.home-moments {
	padding: 56px 0;
	background: rgba(var(--c-slate-50), 1);

	@media (min-width: 768px) {
		padding: 72px 0;
	}
}

.home-moments__grid {
	display: grid;
	gap: 18px;
	margin-top: 8px;

	@media (min-width: 640px) {
		grid-template-columns: 1fr 1fr;
	}
}

.home-moment {
	position: relative;
	padding: 22px 22px 22px 56px;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: $radius-2xl;
	background: white;
	box-shadow: $shadow-soft;
}

.home-moment__num {
	position: absolute;
	top: 18px;
	left: 18px;
	width: 28px;
	height: 28px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 999px;
	background: rgba(var(--c-mint), 0.7);
	color: rgb(var(--c-sea));
	font-size: 13px;
	font-weight: 800;
}

.home-moment__title {
	font-size: 15px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
	line-height: 1.3;
}

.home-moment__text {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

/* ============================
   5. MID-CTA
============================ */
.home-midcta {
	padding: 40px 0;
	background: white;

	@media (min-width: 768px) {
		padding: 56px 0;
	}
}

.home-midcta__card {
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding: 24px 28px;
	border-radius: $radius-2xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left: 4px solid rgb(var(--c-orange));
	box-shadow: $shadow-soft;
	transition: transform 0.15s ease;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 28px 36px;
	}
}

.home-midcta__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-orange));
	margin-bottom: 6px;
}

.home-midcta__title {
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.3;
}

.home-midcta__button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	padding: 14px 28px;
	border-radius: 999px;
	background: rgb(var(--c-orange));
	color: white;
	font-size: 15px;
	font-weight: 800;
	border: none;
	cursor: pointer;
	white-space: nowrap;
	transition: background-color 0.15s ease, transform 0.15s ease;

	&:hover {
		background: #e88a14;
		transform: translateY(-1px);
	}
}

/* ============================
   6. COMPARISON
============================ */
.home-compare {
	padding: 56px 0;
	background: white;

	@media (min-width: 768px) {
		padding: 72px 0;
	}
}

.home-compare__wrap {
	overflow-x: auto;
	border-radius: $radius-2xl;
	border: 1px solid rgb(var(--c-slate-200));
	margin: 20px 0;
}

.home-compare__table {
	width: 100%;
	border-collapse: collapse;
	font-size: 14px;
	min-width: 600px;

	th,
	td {
		padding: 14px 18px;
		text-align: left;
		border-bottom: 1px solid rgb(var(--c-slate-100));
		color: rgb(var(--c-slate-800));
	}

	thead th {
		font-size: 13px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		background: rgba(var(--c-slate-50), 1);
	}

	tbody th[scope='row'] {
		font-weight: 700;
		color: rgb(var(--c-slate-900));
		background: rgba(var(--c-slate-50), 0.55);
		min-width: 200px;
	}

	tbody tr:last-child td,
	tbody tr:last-child th {
		border-bottom: none;
	}
}

.home-compare__col-us {
	background: rgba(var(--c-mint), 0.35) !important;
	font-weight: 700;
	color: rgb(var(--c-slate-900)) !important;
}

.home-compare__honest {
	font-size: 14px;
	line-height: 1.65;
	color: rgb(var(--c-slate-600));
	margin-top: 16px;
	padding: 16px 18px;
	border-radius: 14px;
	background: rgba(var(--c-mint), 0.18);
	border-left: 3px solid rgb(var(--c-sea));
}

/* ============================
   7. HOW IT WORKS
============================ */
.home-how {
	padding: 56px 0;
	background: rgba(var(--c-mint), 0.15);

	@media (min-width: 768px) {
		padding: 72px 0;
	}
}

.home-how__grid {
	display: grid;
	gap: 18px;
	margin-bottom: 24px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
}

.home-step {
	padding: 22px;
	border-radius: $radius-2xl;
	background: white;
	box-shadow: $shadow-soft;
}

.home-step__num {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 999px;
	background: rgba(var(--c-mint), 0.7);
	color: rgb(var(--c-sea));
	font-size: 13px;
	font-weight: 800;
	margin-bottom: 12px;
	box-shadow: 0 0 0 1px rgba(var(--c-sea), 0.15);
}

.home-step__title {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
}

.home-step__text {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
}

.home-how__links {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	margin-top: 16px;
}

/* ============================
   8. WHAT YOU RECEIVE
============================ */
.home-receive {
	padding: 56px 0;
	background: white;

	@media (min-width: 768px) {
		padding: 72px 0;
	}
}

.home-receive__grid {
	display: grid;
	gap: 16px;
	margin-top: 12px;

	@media (min-width: 640px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
}

.home-receive__card {
	padding: 20px;
	border-radius: $radius-2xl;
	background: rgba(var(--c-slate-50), 1);
	border: 1px solid rgb(var(--c-slate-100));
}

.home-receive__title {
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 8px;
	line-height: 1.3;
}

.home-receive__text {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(var(--c-slate-700));
}

/* ============================
   9. TRUST STRIP
============================ */
.home-trust {
	padding: 56px 0;
	background: rgba(var(--c-slate-50), 1);
	border-top: 1px solid rgb(var(--c-slate-100));
	border-bottom: 1px solid rgb(var(--c-slate-100));

	@media (min-width: 768px) {
		padding: 72px 0;
	}
}

.home-trust__head {
	max-width: 48em;
	margin-bottom: 28px;
}

.home-trust__grid {
	display: grid;
	gap: 16px;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
}

.home-trust__stat {
	padding: 22px 18px;
	background: white;
	border-radius: $radius-2xl;
	border: 1px solid rgb(var(--c-slate-200));
	text-align: center;
}

.home-trust__value {
	font-size: 32px;
	font-weight: 800;
	color: rgb(var(--c-sea));
	margin-bottom: 4px;
	line-height: 1;
}

.home-trust__label {
	font-size: 12px;
	font-weight: 600;
	color: rgb(var(--c-slate-600));
	line-height: 1.4;
}

/* ============================
   10. FAQ
============================ */
.home-faq {
	padding: 56px 0;
	background: white;

	@media (min-width: 768px) {
		padding: 72px 0;
	}
}

/* ============================
   11. FINAL CTA
============================ */
.home-cta {
	padding: 64px 0;
	background: linear-gradient(180deg, white 0%, rgba(var(--c-mint), 0.3) 100%);

	@media (min-width: 768px) {
		padding: 88px 0;
	}
}

.home-cta__card {
	padding: 36px 28px;
	border-radius: $radius-2xl;
	background: white;
	border: 1px solid rgba(var(--c-sea), 0.18);
	box-shadow: $shadow-soft;
	text-align: center;

	@media (min-width: 768px) {
		padding: 48px 56px;
	}
}

.home-cta__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-orange));
	margin-bottom: 8px;
}

.home-cta__title {
	font-size: clamp(1.4rem, 1.2rem + 0.8vw, 1.875rem);
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
	line-height: 1.25;
}

.home-cta__lead {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	max-width: 40em;
	margin: 0 auto 22px;
}

.home-cta__actions {
	display: flex;
	justify-content: center;
	margin-bottom: 18px;
}

.home-cta__disclaimer {
	font-size: 11px;
	line-height: 1.5;
	color: rgb(var(--c-slate-400));
	max-width: 60em;
	margin: 0 auto;
}
</style>
