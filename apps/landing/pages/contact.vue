<template>
	<article class="contact-page">

		<!-- Hero -->
		<section class="section contact-page__hero">
			<div class="container max-w-4xl">
				<p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
					{{ t('contactPage.hero.kicker') }}
				</p>
				<h1 class="mb-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
					{{ t('contactPage.hero.h1') }}
				</h1>
				<p class="mb-7 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
					{{ t('contactPage.hero.lead') }}
				</p>

				<div class="mb-7 flex flex-wrap gap-2">
					<span v-for="badge in heroBadges" :key="badge.id" class="contact-page__badge">
						<Icon :icon="badge.icon" width="14" />
						{{ badge.label }}
					</span>
				</div>

				<a :href="primaryMailto" class="contact-page__hero-email">
					<Icon icon="ph:envelope-bold" width="18" />
					<span>{{ supportEmail }}</span>
				</a>
			</div>
		</section>

		<!-- Categories grid (5 cards, each with mailto + prefilled subject) -->
		<section id="categories" class="section bg-white">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('contactPage.categories.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('contactPage.categories.lead') }}
					</p>
				</div>

				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<a
						v-for="cat in categories"
						:key="cat.id"
						:href="cat.mailto"
						class="contact-page__category"
					>
						<div class="contact-page__category-icon" :class="`contact-page__category-icon--${cat.tone}`">
							<Icon :icon="cat.icon" width="22" />
						</div>
						<h3 class="contact-page__category-title">{{ cat.title }}</h3>
						<p class="contact-page__category-when">{{ cat.when }}</p>
						<div class="contact-page__category-foot">
							<span class="contact-page__category-sla">
								<Icon icon="ph:timer-bold" width="13" />
								{{ cat.sla }}
							</span>
							<span class="contact-page__category-arrow">
								<Icon icon="ph:arrow-up-right-bold" width="14" />
							</span>
						</div>
					</a>
				</div>
			</div>
		</section>

		<!-- Single primary email + SLA promise -->
		<section class="section contact-page__section--slate">
			<div class="container max-w-4xl">
				<div class="contact-page__primary">
					<div class="contact-page__primary-head">
						<div class="contact-page__primary-icon">
							<Icon icon="ph:envelope-simple-open-bold" width="32" />
						</div>
						<div>
							<p class="contact-page__primary-kicker">{{ t('contactPage.primary.kicker') }}</p>
							<h2 class="contact-page__primary-title">
								<a :href="primaryMailto">{{ supportEmail }}</a>
							</h2>
						</div>
					</div>

					<div class="contact-page__primary-grid">
						<div class="contact-page__primary-stat">
							<Icon icon="ph:clock-countdown-bold" width="22" class="text-sea" />
							<div>
								<p class="contact-page__primary-stat-label">{{ t('contactPage.primary.sla.label') }}</p>
								<p class="contact-page__primary-stat-value">{{ t('contactPage.primary.sla.value') }}</p>
							</div>
						</div>
						<div class="contact-page__primary-stat">
							<Icon icon="ph:translate-bold" width="22" class="text-sea" />
							<div>
								<p class="contact-page__primary-stat-label">{{ t('contactPage.primary.languages.label') }}</p>
								<p class="contact-page__primary-stat-value">{{ t('contactPage.primary.languages.value') }}</p>
							</div>
						</div>
						<div class="contact-page__primary-stat">
							<Icon icon="ph:calendar-blank-bold" width="22" class="text-sea" />
							<div>
								<p class="contact-page__primary-stat-label">{{ t('contactPage.primary.hours.label') }}</p>
								<p class="contact-page__primary-stat-value">{{ t('contactPage.primary.hours.value') }}</p>
							</div>
						</div>
					</div>

					<p class="contact-page__primary-note">
						<Icon icon="ph:info-bold" width="14" class="inline-block text-sea" />
						{{ t('contactPage.primary.note') }}
					</p>
				</div>
			</div>
		</section>

		<!-- What to include in your message -->
		<section class="section bg-white">
			<div class="container">
				<div class="grid gap-10 lg:grid-cols-2">
					<div>
						<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
							{{ t('contactPage.include.heading') }}
						</h2>
						<p class="mb-6 text-sm leading-relaxed text-slate-700 md:text-base">
							{{ t('contactPage.include.lead') }}
						</p>

						<ul class="contact-page__include">
							<li v-for="item in includeItems" :key="item.id" class="contact-page__include-item">
								<div class="contact-page__include-icon">
									<Icon icon="ph:check-bold" width="14" />
								</div>
								<div>
									<p class="contact-page__include-label">{{ item.label }}</p>
									<p class="contact-page__include-hint">{{ item.hint }}</p>
								</div>
							</li>
						</ul>
					</div>

					<div>
						<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
							{{ t('contactPage.cannot.heading') }}
						</h2>
						<p class="mb-6 text-sm leading-relaxed text-slate-700 md:text-base">
							{{ t('contactPage.cannot.lead') }}
						</p>

						<ul class="contact-page__cannot">
							<li v-for="item in cannotItems" :key="item.id" class="contact-page__cannot-item">
								<div class="contact-page__cannot-icon">
									<Icon icon="ph:x-bold" width="14" />
								</div>
								<div>
									<p class="contact-page__cannot-label">{{ item.label }}</p>
									<p class="contact-page__cannot-hint">{{ item.hint }}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Before you write — quick links to self-serve resources -->
		<section class="section contact-page__section--mint">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('contactPage.before.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('contactPage.before.lead') }}
					</p>
				</div>

				<div class="grid gap-4 md:grid-cols-3">
					<NuxtLinkLocale
						v-for="link in beforeLinks"
						:key="link.id"
						:to="link.to"
						class="contact-page__shortcut"
					>
						<div class="contact-page__shortcut-icon">
							<Icon :icon="link.icon" width="22" />
						</div>
						<h3 class="contact-page__shortcut-title">{{ link.title }}</h3>
						<p class="contact-page__shortcut-body">{{ link.body }}</p>
						<span class="contact-page__shortcut-arrow">
							<Icon icon="ph:arrow-right-bold" width="14" />
							<span>{{ link.cta }}</span>
						</span>
					</NuxtLinkLocale>
				</div>
			</div>
		</section>

		<!-- Final CTA -->
		<section class="section contact-page__cta-section">
			<div class="container max-w-3xl text-center">
				<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
					{{ t('contactPage.cta.heading') }}
				</h2>
				<p class="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
					{{ t('contactPage.cta.text') }}
				</p>
				<a :href="primaryMailto" class="block">
					<BaseButton type="button" variant="primary">
						<span class="font-bold">{{ t('contactPage.cta.button') }} — {{ supportEmail }}</span>
					</BaseButton>
				</a>
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

	const { t, locale } = useI18n();
	const config = useRuntimeConfig();
	const localePath = useLocalePath();

	const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
	const canonicalPath = computed(() => String(localePath({ name: 'contact' })));
	const canonicalUrl = computed(() => siteUrl + canonicalPath.value);
	const supportEmail = String(config.public.supportEmail || 'support@idpcompanion.com');

	const primaryMailto = computed(() => `mailto:${supportEmail}`);

	function makeMailto(subjectKey: string): string {
		const subject = t(subjectKey);
		return `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}`;
	}

	/* ---------------------------------------------------------------------------
	 * Static data — IDs match i18n keys
	 * ------------------------------------------------------------------------- */

	const heroBadgeDefs = [
		{ id: 'response', icon: 'ph:timer-bold' },
		{ id: 'languages', icon: 'ph:translate-bold' },
		{ id: 'eu',        icon: 'ph:globe-bold' },
		{ id: 'gdpr',      icon: 'ph:shield-check-bold' },
	] as const;

	const heroBadges = computed(() => {
		void locale.value;
		return heroBadgeDefs.map((b) => ({
			id: b.id,
			icon: b.icon,
			label: t(`contactPage.hero.badges.${b.id}`),
		}));
	});

	const categoryDefs = [
		{ id: 'refund',    icon: 'ph:arrow-counter-clockwise-bold', tone: 'orange' },
		{ id: 'technical', icon: 'ph:wrench-bold',                  tone: 'sea' },
		{ id: 'billing',   icon: 'ph:credit-card-bold',             tone: 'sea' },
		{ id: 'privacy',   icon: 'ph:shield-check-bold',            tone: 'sea' },
		{ id: 'press',     icon: 'ph:megaphone-bold',               tone: 'orange' },
		{ id: 'general',   icon: 'ph:chat-circle-text-bold',        tone: 'sea' },
	] as const;

	const categories = computed(() => {
		void locale.value;
		return categoryDefs.map((c) => ({
			id: c.id,
			icon: c.icon,
			tone: c.tone,
			title: t(`contactPage.categories.items.${c.id}.title`),
			when: t(`contactPage.categories.items.${c.id}.when`),
			sla: t(`contactPage.categories.items.${c.id}.sla`),
			mailto: makeMailto(`contactPage.categories.items.${c.id}.subject`),
		}));
	});

	const includeDefs = ['orderId', 'email', 'description', 'screenshot', 'plan'] as const;

	const includeItems = computed(() => {
		void locale.value;
		return includeDefs.map((id) => ({
			id,
			label: t(`contactPage.include.items.${id}.label`),
			hint: t(`contactPage.include.items.${id}.hint`),
		}));
	});

	const cannotDefs = ['visa', 'governmentIdp', 'lostLicense', 'localLaw'] as const;

	const cannotItems = computed(() => {
		void locale.value;
		return cannotDefs.map((id) => ({
			id,
			label: t(`contactPage.cannot.items.${id}.label`),
			hint: t(`contactPage.cannot.items.${id}.hint`),
		}));
	});

	const beforeLinkDefs = [
		{ id: 'faq',        to: '/faq',           icon: 'ph:question-bold' },
		{ id: 'how',        to: '/how-it-works',  icon: 'ph:list-numbers-bold' },
		{ id: 'refund',     to: '/refund-policy', icon: 'ph:scroll-bold' },
	] as const;

	const beforeLinks = computed(() => {
		void locale.value;
		return beforeLinkDefs.map((l) => ({
			id: l.id,
			to: l.to,
			icon: l.icon,
			title: t(`contactPage.before.links.${l.id}.title`),
			body: t(`contactPage.before.links.${l.id}.body`),
			cta: t(`contactPage.before.links.${l.id}.cta`),
		}));
	});

	/* ---------------------------------------------------------------------------
	 * SEO + ContactPage / Organization JSON-LD
	 * ------------------------------------------------------------------------- */

	useSeoMeta({
		title: () => t('contactPage.seo.title'),
		description: () => t('contactPage.seo.description'),
		ogTitle: () => t('contactPage.seo.title'),
		ogDescription: () => t('contactPage.seo.description'),
		ogImage: () => t('seo.ogImage'),
		ogImageWidth: 1200,
		ogImageHeight: 630,
		ogImageType: 'image/png',
		ogImageAlt: 'IDP Companion — Contact',
		ogImageSecureUrl: () => t('seo.ogImage'),
		ogUrl: () => canonicalUrl.value,
		ogType: 'website',
		ogSiteName: 'IDP Companion',
		ogLocale: () => toOgLocale(locale.value),
		twitterCard: 'summary_large_image',
		twitterTitle: () => t('contactPage.seo.title'),
		twitterDescription: () => t('contactPage.seo.description'),
		twitterImage: () => t('seo.ogImage'),
		twitterImageAlt: 'IDP Companion — Contact',
	});

	useHead(() => ({
		link: [{ rel: 'canonical', href: canonicalUrl.value }],
		script: [
			{
				type: 'application/ld+json',
				innerHTML: JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'ContactPage',
					name: t('contactPage.hero.h1'),
					description: t('contactPage.seo.description'),
					url: canonicalUrl.value,
					inLanguage: locale.value,
					isPartOf: {
						'@type': 'WebSite',
						name: 'IDP Companion',
						url: siteUrl,
					},
					mainEntity: {
						'@type': 'Organization',
						name: 'IDP Companion',
						url: siteUrl,
						email: supportEmail,
						contactPoint: [
							{
								'@type': 'ContactPoint',
								contactType: 'customer support',
								email: supportEmail,
								availableLanguage: ['English', 'Russian', 'Spanish'],
							},
						],
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
							name: t('contactPage.hero.h1'),
							item: canonicalUrl.value,
						},
					],
				}),
			},
		],
	}));
</script>

<style scoped>
	.contact-page {
		background: white;
	}

	.contact-page__hero {
		background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.18) 100%);
	}

	.contact-page__section--slate {
		background: rgb(248 250 252);
	}

	.contact-page__section--mint {
		background: linear-gradient(180deg, rgba(var(--c-mint), 0.18) 0%, rgba(var(--c-mint), 0.42) 100%);
	}

	.contact-page__cta-section {
		background: linear-gradient(180deg, rgba(var(--c-mint), 0.25) 0%, rgba(var(--c-mint), 0.6) 100%);
	}

	.contact-page__badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 12px;
		background: rgb(255 255 255 / 0.85);
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 999px;
		font-size: 12.5px;
		font-weight: 600;
		color: rgb(var(--c-slate-800));
	}

	.contact-page__hero-email {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 14px 24px;
		background: rgb(var(--c-orange));
		color: white;
		border-radius: 999px;
		text-decoration: none;
		font-size: 17px;
		font-weight: 800;
		box-shadow: 0 8px 20px rgb(var(--c-orange) / 0.28);
		transition: transform 0.18s ease, box-shadow 0.18s ease;
	}

	.contact-page__hero-email:hover {
		transform: translateY(-1px);
		box-shadow: 0 10px 24px rgb(var(--c-orange) / 0.36);
	}

	/* --- Category cards (6 cards, mailto links with prefilled subject) --- */

	.contact-page__category {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 22px 22px 18px;
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 18px;
		box-shadow: 0 2px 10px rgb(15 23 42 / 0.04);
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	}

	.contact-page__category:hover {
		transform: translateY(-2px);
		border-color: rgb(var(--c-sea) / 0.4);
		box-shadow: 0 8px 20px rgb(15 23 42 / 0.08);
	}

	.contact-page__category-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 12px;
	}

	.contact-page__category-icon--sea {
		background: rgb(var(--c-mint) / 0.55);
		color: rgb(var(--c-sea));
	}

	.contact-page__category-icon--orange {
		background: rgb(var(--c-orange) / 0.12);
		color: rgb(var(--c-orange));
	}

	.contact-page__category-title {
		margin: 0;
		font-size: 17px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		line-height: 1.3;
	}

	.contact-page__category-when {
		margin: 0;
		font-size: 13.5px;
		color: rgb(var(--c-slate-700));
		line-height: 1.55;
		flex-grow: 1;
	}

	.contact-page__category-foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding-top: 10px;
		border-top: 1px dashed rgb(var(--c-slate-200));
		margin-top: 4px;
	}

	.contact-page__category-sla {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 11.5px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: rgb(var(--c-slate-600));
	}

	.contact-page__category-arrow {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 26px;
		border-radius: 999px;
		background: rgb(var(--c-mint) / 0.5);
		color: rgb(var(--c-sea));
		transition: background 0.2s ease;
	}

	.contact-page__category:hover .contact-page__category-arrow {
		background: rgb(var(--c-sea));
		color: white;
	}

	/* --- Primary email block --- */

	.contact-page__primary {
		padding: 32px 32px 28px;
		background: white;
		border-radius: 22px;
		border: 1px solid rgb(var(--c-slate-200));
		box-shadow: 0 4px 18px rgb(15 23 42 / 0.05);
	}

	@media (max-width: 640px) {
		.contact-page__primary {
			padding: 24px 22px;
		}
	}

	.contact-page__primary-head {
		display: flex;
		align-items: flex-start;
		gap: 18px;
		margin-bottom: 22px;
		padding-bottom: 22px;
		border-bottom: 1px solid rgb(var(--c-slate-200));
	}

	.contact-page__primary-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		border-radius: 16px;
		background: rgb(var(--c-mint) / 0.55);
		color: rgb(var(--c-sea));
		flex-shrink: 0;
	}

	.contact-page__primary-kicker {
		margin: 0 0 4px;
		font-size: 11.5px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: rgb(var(--c-slate-600));
	}

	.contact-page__primary-title {
		margin: 0;
		font-size: 22px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		line-height: 1.2;
	}

	@media (min-width: 768px) {
		.contact-page__primary-title {
			font-size: 26px;
		}
	}

	.contact-page__primary-title a {
		color: inherit;
		text-decoration: none;
		border-bottom: 2px solid rgb(var(--c-sea) / 0.4);
		transition: border-color 0.2s ease;
	}

	.contact-page__primary-title a:hover {
		border-color: rgb(var(--c-sea));
	}

	.contact-page__primary-grid {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr;
	}

	@media (min-width: 640px) {
		.contact-page__primary-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.contact-page__primary-stat {
		display: flex;
		gap: 12px;
		align-items: flex-start;
		padding: 14px 16px;
		background: rgb(248 250 252);
		border-radius: 12px;
	}

	.contact-page__primary-stat-label {
		margin: 0 0 2px;
		font-size: 11.5px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: rgb(var(--c-slate-600));
	}

	.contact-page__primary-stat-value {
		margin: 0;
		font-size: 14.5px;
		font-weight: 700;
		color: rgb(var(--c-slate-900));
		line-height: 1.4;
	}

	.contact-page__primary-note {
		margin: 18px 0 0;
		padding: 12px 16px;
		background: rgb(var(--c-mint) / 0.18);
		border-left: 3px solid rgb(var(--c-sea));
		border-radius: 0 10px 10px 0;
		font-size: 13px;
		color: rgb(var(--c-slate-700));
		line-height: 1.55;
	}

	.contact-page__primary-note :deep(svg) {
		margin-right: 6px;
		vertical-align: -2px;
	}

	/* --- Include / Cannot dual-column list --- */

	.contact-page__include,
	.contact-page__cannot {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 14px;
	}

	.contact-page__include-item,
	.contact-page__cannot-item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 12px;
		align-items: flex-start;
		padding: 14px 16px;
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 12px;
	}

	.contact-page__include-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 26px;
		border-radius: 8px;
		background: rgb(var(--c-sea));
		color: white;
		flex-shrink: 0;
	}

	.contact-page__cannot-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 26px;
		border-radius: 8px;
		background: rgb(var(--c-orange) / 0.15);
		color: rgb(var(--c-orange));
		flex-shrink: 0;
	}

	.contact-page__include-label,
	.contact-page__cannot-label {
		margin: 0 0 3px;
		font-size: 14.5px;
		font-weight: 700;
		color: rgb(var(--c-slate-900));
		line-height: 1.4;
	}

	.contact-page__include-hint,
	.contact-page__cannot-hint {
		margin: 0;
		font-size: 13px;
		color: rgb(var(--c-slate-600));
		line-height: 1.5;
	}

	/* --- Before-you-write shortcuts --- */

	.contact-page__shortcut {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 22px 22px 20px;
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 16px;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 2px 10px rgb(15 23 42 / 0.04);
		transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.contact-page__shortcut:hover {
		transform: translateY(-2px);
		border-color: rgb(var(--c-sea) / 0.4);
		box-shadow: 0 8px 18px rgb(15 23 42 / 0.06);
	}

	.contact-page__shortcut-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 12px;
		background: rgb(var(--c-mint) / 0.55);
		color: rgb(var(--c-sea));
	}

	.contact-page__shortcut-title {
		margin: 0;
		font-size: 17px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		line-height: 1.3;
	}

	.contact-page__shortcut-body {
		margin: 0;
		font-size: 13.5px;
		color: rgb(var(--c-slate-700));
		line-height: 1.55;
		flex-grow: 1;
	}

	.contact-page__shortcut-arrow {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 13px;
		font-weight: 700;
		color: rgb(var(--c-sea));
		padding-top: 4px;
	}
</style>
