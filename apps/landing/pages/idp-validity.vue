<template>
	<article class="idp-validity">

		<!-- Hero -->
		<section class="section idp-validity__hero">
			<div class="container max-w-4xl">
				<p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
					{{ copy.hero.kicker }}
				</p>
				<h1 class="mb-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
					{{ copy.hero.h1 }}
				</h1>

				<AuthorByline
					:author-name="AUTHOR_NAME"
					:profile-href="`/authors/${AUTHOR_SLUG}`"
					:by-label="copy.hero.bylineByLabel"
					:reviewed-label="copy.hero.reviewedLabel"
					:reviewed-date="copy.hero.reviewedDate"
				/>

				<p class="mb-7 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
					{{ copy.hero.lead }}
				</p>

				<div class="flex flex-wrap gap-3">
					<a :href="applyHref" class="block">
						<BaseButton type="button" variant="primary">
							<span class="font-bold">{{ copy.finalCta.primary }}</span>
						</BaseButton>
					</a>
					<NuxtLinkLocale to="/pricing" class="block">
						<BaseButton type="button" variant="secondary">
							<span class="font-bold">{{ copy.finalCta.secondary }}</span>
						</BaseButton>
					</NuxtLinkLocale>
				</div>
			</div>
		</section>

		<!-- Quick answer table -->
		<section id="quick-answer" class="section bg-white">
			<div class="container">
				<div class="mb-8 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ copy.quickAnswer.heading }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ copy.quickAnswer.lead }}
					</p>
				</div>

				<div class="idp-validity__quick-table">
					<div class="idp-validity__quick-head">
						<span>{{ copy.quickAnswer.colName }}</span>
						<span>{{ copy.quickAnswer.colDuration }}</span>
						<span>{{ copy.quickAnswer.colConditions }}</span>
					</div>
					<div
						v-for="(row, i) in copy.quickAnswer.rows"
						:key="i"
						class="idp-validity__quick-row"
						:class="`idp-validity__quick-row--${row.tone}`"
					>
						<span class="idp-validity__quick-name">{{ row.name }}</span>
						<span class="idp-validity__quick-duration">{{ row.duration }}</span>
						<span class="idp-validity__quick-conditions">{{ row.conditions }}</span>
					</div>
				</div>
			</div>
		</section>

		<!-- 1949 Geneva -->
		<section id="geneva" class="section idp-validity__section--slate">
			<div class="container">
				<div class="grid gap-8 md:grid-cols-[1fr_2fr]">
					<div>
						<span class="idp-validity__treaty-badge idp-validity__treaty-badge--geneva">1949</span>
						<h2 class="mt-4 text-2xl font-extrabold text-slate-900 md:text-3xl">
							{{ copy.geneva.heading }}
						</h2>
					</div>
					<div>
						<p class="mb-5 text-sm leading-relaxed text-slate-700 md:text-base">{{ copy.geneva.lead }}</p>
						<ul class="idp-validity__bullets">
							<li v-for="(b, i) in copy.geneva.bullets" :key="i">
								<Icon icon="ph:check-circle-bold" width="16" class="text-sea shrink-0" />
								<span>{{ b }}</span>
							</li>
						</ul>
						<p class="idp-validity__warning">
							<Icon icon="ph:warning-bold" width="14" class="inline-block text-orange shrink-0" />
							<span>{{ copy.geneva.warning }}</span>
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- 1968 Vienna -->
		<section id="vienna" class="section bg-white">
			<div class="container">
				<div class="grid gap-8 md:grid-cols-[1fr_2fr]">
					<div>
						<span class="idp-validity__treaty-badge idp-validity__treaty-badge--vienna">1968</span>
						<h2 class="mt-4 text-2xl font-extrabold text-slate-900 md:text-3xl">
							{{ copy.vienna.heading }}
						</h2>
					</div>
					<div>
						<p class="mb-5 text-sm leading-relaxed text-slate-700 md:text-base">{{ copy.vienna.lead }}</p>
						<ul class="idp-validity__bullets">
							<li v-for="(b, i) in copy.vienna.bullets" :key="i">
								<Icon icon="ph:check-circle-bold" width="16" class="text-sea shrink-0" />
								<span>{{ b }}</span>
							</li>
						</ul>
						<p class="idp-validity__warning">
							<Icon icon="ph:warning-bold" width="14" class="inline-block text-orange shrink-0" />
							<span>{{ copy.vienna.warning }}</span>
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Recognition clusters -->
		<section id="recognition" class="section idp-validity__section--slate">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ copy.recognition.heading }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ copy.recognition.lead }}
					</p>
				</div>

				<div class="grid gap-5 md:grid-cols-3">
					<article
						v-for="(c, i) in copy.recognition.clusters"
						:key="i"
						class="idp-validity__cluster"
					>
						<h3 class="idp-validity__cluster-label">{{ c.label }}</h3>
						<p class="idp-validity__cluster-countries">{{ c.countries }}</p>
						<p class="idp-validity__cluster-note">{{ c.note }}</p>
					</article>
				</div>
			</div>
		</section>

		<!-- IDP Companion specific -->
		<section id="companion" class="section bg-white">
			<div class="container max-w-4xl">
				<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
					{{ copy.companion.heading }}
				</h2>
				<p class="mb-8 text-sm leading-relaxed text-slate-700 md:text-base">
					{{ copy.companion.lead }}
				</p>

				<div class="grid gap-5 md:grid-cols-2">
					<div class="idp-validity__honesty idp-validity__honesty--is">
						<h3 class="idp-validity__honesty-label">
							<Icon icon="ph:check-square-bold" width="18" /> {{ copy.companion.isLabel }}
						</h3>
						<ul>
							<li v-for="(item, i) in copy.companion.is" :key="i">{{ item }}</li>
						</ul>
					</div>
					<div class="idp-validity__honesty idp-validity__honesty--isnot">
						<h3 class="idp-validity__honesty-label">
							<Icon icon="ph:x-square-bold" width="18" /> {{ copy.companion.isNotLabel }}
						</h3>
						<ul>
							<li v-for="(item, i) in copy.companion.isNot" :key="i">{{ item }}</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Plans -->
		<section id="plans" class="section idp-validity__section--slate">
			<div class="container">
				<div class="mb-8 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ copy.plans.heading }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ copy.plans.lead }}
					</p>
				</div>

				<div class="idp-validity__plans">
					<div class="idp-validity__plans-head">
						<span>{{ copy.plans.colName }}</span>
						<span>{{ copy.plans.colDuration }}</span>
						<span>{{ copy.plans.colPrice }}</span>
						<span>{{ copy.plans.colBestFor }}</span>
					</div>
					<div
						v-for="(p, i) in copy.plans.items"
						:key="i"
						class="idp-validity__plans-row"
					>
						<span class="idp-validity__plans-name">{{ p.name }}</span>
						<span>{{ p.duration }}</span>
						<span class="idp-validity__plans-price">{{ p.price }}</span>
						<span>{{ p.bestFor }}</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Expiry steps -->
		<section id="expiry" class="section bg-white">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ copy.expiry.heading }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ copy.expiry.lead }}
					</p>
				</div>

				<ol class="idp-validity__steps">
					<li v-for="(s, i) in copy.expiry.steps" :key="i" class="idp-validity__step">
						<span class="idp-validity__step-num">{{ String(i + 1).padStart(2, '0') }}</span>
						<div class="idp-validity__step-body">
							<h3 class="idp-validity__step-title">{{ s.title }}</h3>
							<p class="idp-validity__step-text">{{ s.body }}</p>
						</div>
					</li>
				</ol>
			</div>
		</section>

		<!-- FAQ -->
		<section id="faq" class="section idp-validity__section--slate">
			<div class="container max-w-4xl">
				<h2 class="mb-8 text-2xl font-extrabold text-slate-900 md:text-3xl">
					{{ copy.faq.heading }}
				</h2>
				<FaqAccordion
					:items="copy.faq.items"
					id-prefix="idp-validity-faq"
				/>
			</div>
		</section>

		<!-- Final CTA -->
		<section class="section idp-validity__cta-section">
			<div class="container max-w-3xl text-center">
				<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
					{{ copy.finalCta.heading }}
				</h2>
				<p class="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
					{{ copy.finalCta.lead }}
				</p>
				<div class="flex flex-wrap justify-center gap-3">
					<a :href="applyHref" class="block">
						<BaseButton type="button" variant="primary">
							<span class="font-bold">{{ copy.finalCta.primary }}</span>
						</BaseButton>
					</a>
					<NuxtLinkLocale to="/pricing" class="block">
						<BaseButton type="button" variant="secondary">
							<span class="font-bold">{{ copy.finalCta.secondary }}</span>
						</BaseButton>
					</NuxtLinkLocale>
				</div>
			</div>
		</section>

		<!-- Sources + Legal -->
		<section class="section bg-white">
			<div class="container max-w-4xl">
				<h2 class="mb-5 text-lg font-extrabold text-slate-900 md:text-xl">
					{{ copy.sources.heading }}
				</h2>
				<ul class="idp-validity__sources">
					<li v-for="(s, i) in copy.sources.items" :key="i">
						<strong>{{ s.org }}</strong> — {{ s.label }}
					</li>
				</ul>
				<p class="idp-validity__legal">{{ copy.legal }}</p>
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
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import { toOgLocale } from '~/utils/ogLocale';
import AuthorByline from '~/components/AuthorByline.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';
import { idpValidityCopy, type LocaleKey } from '~/content/idp-validity-copy';

const AUTHOR_NAME = 'Petr Shchepetin';
const AUTHOR_SLUG = 'petr-shchepetin';

const { locale } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocalePath();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const canonicalPath = computed(() => String(localePath('/idp-validity')));
const canonicalUrl = computed(() => siteUrl + canonicalPath.value);

const currentLocale = computed<LocaleKey>(() => {
	const l = locale.value;
	return l === 'ru' || l === 'es' ? l : 'en';
});

const copy = computed(() => idpValidityCopy[currentLocale.value]);

// External SPA URL — /apply lives on apps/frontend (SPA), not on landing.
// Avoid `<NuxtLinkLocale to="/apply">` here — Nuxt prerender crawls internal
// links and would 404 on `/apply` during the static build.
const appUrl = computed(() =>
	String(config.public.appUrl || '').trim().replace(/\/+$/, ''),
);

const applyHref = computed(() => {
	if (!appUrl.value) return '#';
	const qs = new URLSearchParams({ locale: locale.value });
	return `${appUrl.value}/apply?${qs.toString()}`;
});

useSeoMeta({
	title: () => copy.value.seo.title,
	description: () => copy.value.seo.description,
	ogTitle: () => copy.value.seo.title,
	ogDescription: () => copy.value.seo.description,
	ogImage: `${siteUrl}/og-image.png`,
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageType: 'image/png',
	ogImageAlt: () => copy.value.seo.title,
	ogImageSecureUrl: `${siteUrl}/og-image.png`,
	ogUrl: () => canonicalUrl.value,
	ogType: 'article',
	ogSiteName: 'IDP Companion',
	ogLocale: () => toOgLocale(locale.value),
	twitterCard: 'summary_large_image',
	twitterTitle: () => copy.value.seo.title,
	twitterDescription: () => copy.value.seo.description,
	twitterImage: `${siteUrl}/og-image.png`,
	twitterImageAlt: () => copy.value.seo.title,
});

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
				inLanguage: locale.value,
				datePublished: copy.value.datePublished,
				dateModified: copy.value.dateModified,
				image: [`${siteUrl}/og-image.png`],
				articleSection: 'International Driving Permit Guides',
				mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl.value },
				author: {
					'@type': 'Person',
					name: AUTHOR_NAME,
					url: `${siteUrl}/authors/${AUTHOR_SLUG}`,
					'@id': `${siteUrl}/authors/${AUTHOR_SLUG}#person`,
				},
				publisher: {
					'@type': 'Organization',
					name: 'IDP Companion',
					url: siteUrl,
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
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: 'Home',
						item: `${siteUrl}${localePath('/')}`,
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: copy.value.hero.h1,
						item: canonicalUrl.value,
					},
				],
			}),
		},
	],
}));
</script>

<style scoped>
.idp-validity {
	background: white;
}

.idp-validity__hero {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.18) 100%);
}

.idp-validity__section--slate {
	background: rgb(248 250 252);
}

/* Quick answer table */
.idp-validity__quick-table {
	display: grid;
	gap: 0;
	border: 1px solid rgb(226 232 240);
	border-radius: 16px;
	overflow: hidden;
}

.idp-validity__quick-head {
	display: grid;
	grid-template-columns: 1.4fr 0.7fr 2fr;
	gap: 16px;
	padding: 14px 20px;
	background: rgb(241 245 249);
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: rgb(71 85 105);
}

.idp-validity__quick-row {
	display: grid;
	grid-template-columns: 1.4fr 0.7fr 2fr;
	gap: 16px;
	padding: 18px 20px;
	border-top: 1px solid rgb(226 232 240);
	font-size: 14px;
	line-height: 1.5;
	color: rgb(15 23 42);
}

.idp-validity__quick-row--geneva {
	background: rgba(255, 159, 28, 0.06);
}

.idp-validity__quick-row--vienna {
	background: rgba(46, 196, 182, 0.06);
}

.idp-validity__quick-row--companion {
	background: rgba(203, 243, 240, 0.4);
	border-top: 2px solid rgba(var(--c-sea), 0.45);
}

.idp-validity__quick-name {
	font-weight: 700;
	color: rgb(15 23 42);
}

.idp-validity__quick-duration {
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-sea));
}

.idp-validity__quick-conditions {
	font-size: 13px;
	color: rgb(71 85 105);
	line-height: 1.45;
}

@media (max-width: 768px) {
	.idp-validity__quick-head { display: none; }
	.idp-validity__quick-row {
		grid-template-columns: 1fr;
		gap: 8px;
	}
}

/* Treaty badges */
.idp-validity__treaty-badge {
	display: inline-block;
	padding: 8px 16px;
	border-radius: 12px;
	font-size: 32px;
	font-weight: 900;
	letter-spacing: -0.02em;
	line-height: 1;
}

.idp-validity__treaty-badge--geneva {
	background: rgba(255, 159, 28, 0.15);
	color: rgb(180 83 9);
}

.idp-validity__treaty-badge--vienna {
	background: rgba(46, 196, 182, 0.15);
	color: rgb(13 148 136);
}

/* Bullets */
.idp-validity__bullets {
	display: flex;
	flex-direction: column;
	gap: 10px;
	list-style: none;
	padding: 0;
}

.idp-validity__bullets li {
	display: flex;
	align-items: flex-start;
	gap: 10px;
	font-size: 14px;
	line-height: 1.55;
	color: rgb(51 65 85);
}

/* Optical alignment — icon's svg viewport sits at the line's top edge by default;
   nudge down so the glyph centres on the first text line cap-height. */
.idp-validity__bullets li > svg,
.idp-validity__bullets li > .iconify {
	margin-top: 3px;
}

.idp-validity__warning {
	margin-top: 18px;
	padding: 14px 16px;
	background: rgba(255, 159, 28, 0.08);
	border-left: 3px solid rgb(var(--c-orange));
	border-radius: 0 8px 8px 0;
	font-size: 13px;
	line-height: 1.5;
	color: rgb(15 23 42);
	display: flex;
	gap: 10px;
	align-items: flex-start;
}

.idp-validity__warning > svg,
.idp-validity__warning > .iconify {
	margin-top: 3px;
}

/* Recognition cluster cards */
.idp-validity__cluster {
	padding: 22px;
	background: white;
	border: 1px solid rgb(226 232 240);
	border-radius: 16px;
	box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}

.idp-validity__cluster-label {
	font-size: 16px;
	font-weight: 800;
	color: rgb(15 23 42);
	margin-bottom: 10px;
}

.idp-validity__cluster-countries {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(51 65 85);
	margin-bottom: 12px;
	padding-bottom: 12px;
	border-bottom: 1px solid rgb(241 245 249);
}

.idp-validity__cluster-note {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(71 85 105);
}

/* Honesty (is/is-not) */
.idp-validity__honesty {
	padding: 22px;
	border-radius: 16px;
	border: 1px solid rgb(226 232 240);
}

.idp-validity__honesty--is {
	background: rgba(46, 196, 182, 0.05);
}

.idp-validity__honesty--isnot {
	background: rgba(255, 159, 28, 0.05);
}

.idp-validity__honesty-label {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 14px;
	font-weight: 800;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: rgb(15 23 42);
	margin-bottom: 14px;
}

.idp-validity__honesty--is .idp-validity__honesty-label {
	color: rgb(13 148 136);
}

.idp-validity__honesty--isnot .idp-validity__honesty-label {
	color: rgb(180 83 9);
}

.idp-validity__honesty ul {
	display: flex;
	flex-direction: column;
	gap: 12px;
	list-style: none;
	padding: 0;
}

.idp-validity__honesty li {
	font-size: 14px;
	line-height: 1.5;
	color: rgb(51 65 85);
	padding-left: 16px;
	position: relative;
}

.idp-validity__honesty li::before {
	content: '—';
	position: absolute;
	left: 0;
	color: rgb(148 163 184);
}

/* Plans table */
.idp-validity__plans {
	display: grid;
	gap: 0;
	border: 1px solid rgb(226 232 240);
	border-radius: 16px;
	overflow: hidden;
	background: white;
}

.idp-validity__plans-head {
	display: grid;
	grid-template-columns: 1.4fr 1fr 0.6fr 2fr;
	gap: 16px;
	padding: 14px 20px;
	background: rgb(241 245 249);
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: rgb(71 85 105);
}

.idp-validity__plans-row {
	display: grid;
	grid-template-columns: 1.4fr 1fr 0.6fr 2fr;
	gap: 16px;
	padding: 18px 20px;
	border-top: 1px solid rgb(226 232 240);
	font-size: 14px;
	line-height: 1.5;
	color: rgb(15 23 42);
}

.idp-validity__plans-name {
	font-weight: 700;
}

.idp-validity__plans-price {
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-sea));
}

@media (max-width: 768px) {
	.idp-validity__plans-head { display: none; }
	.idp-validity__plans-row {
		grid-template-columns: 1fr;
		gap: 6px;
	}
}

/* Expiry steps */
.idp-validity__steps {
	display: flex;
	flex-direction: column;
	gap: 18px;
	list-style: none;
	padding: 0;
}

.idp-validity__step {
	display: flex;
	gap: 18px;
	padding: 22px;
	background: rgb(248 250 252);
	border-radius: 16px;
	border: 1px solid rgb(226 232 240);
}

.idp-validity__step-num {
	flex-shrink: 0;
	font-size: 20px;
	font-weight: 900;
	color: rgb(var(--c-sea));
	min-width: 36px;
}

.idp-validity__step-title {
	font-size: 16px;
	font-weight: 700;
	color: rgb(15 23 42);
	margin-bottom: 6px;
}

.idp-validity__step-text {
	font-size: 14px;
	line-height: 1.55;
	color: rgb(51 65 85);
}

/* CTA */
.idp-validity__cta-section {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.18) 100%);
}

/* Sources / Legal */
.idp-validity__sources {
	display: flex;
	flex-direction: column;
	gap: 10px;
	list-style: none;
	padding: 0;
	margin-bottom: 28px;
}

.idp-validity__sources li {
	font-size: 13px;
	line-height: 1.55;
	color: rgb(71 85 105);
	padding-left: 16px;
	position: relative;
}

.idp-validity__sources li::before {
	content: '·';
	position: absolute;
	left: 0;
	color: rgb(148 163 184);
}

.idp-validity__legal {
	padding: 16px 18px;
	background: rgb(248 250 252);
	border-left: 3px solid rgb(203 213 225);
	border-radius: 0 8px 8px 0;
	font-size: 12px;
	line-height: 1.6;
	color: rgb(100 116 139);
}
</style>
