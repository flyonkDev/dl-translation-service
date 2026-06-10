<template>
	<article class="security-page">

		<!-- Hero -->
		<section class="section security-page__hero">
			<div class="container max-w-4xl">
				<Breadcrumbs :items="[{ label: t('breadcrumbs.home'), to: '/' }, { label: t('footer.linkSecurity') }]" />
				<p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
					{{ t('securityPage.hero.kicker') }}
				</p>
				<h1 class="mb-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
					{{ t('securityPage.hero.h1') }}
				</h1>
				<p class="mb-7 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
					{{ t('securityPage.hero.lead') }}
				</p>

				<div class="mb-7 flex flex-wrap gap-2">
					<span v-for="badge in heroBadges" :key="badge.id" class="security-page__badge">
						<Icon :icon="badge.icon" width="14" />
						{{ badge.label }}
					</span>
				</div>

				<div class="flex flex-wrap gap-3">
					<NuxtLinkLocale to="/faq" class="block">
						<BaseButton type="button" variant="primary">
							<span class="font-bold">{{ t('securityPage.hero.ctaPrimary') }}</span>
						</BaseButton>
					</NuxtLinkLocale>
					<NuxtLinkLocale to="/privacy-policy" class="block">
						<BaseButton type="button" variant="secondary">
							<span class="font-bold">{{ t('securityPage.hero.ctaSecondary') }}</span>
						</BaseButton>
					</NuxtLinkLocale>
				</div>
			</div>
		</section>

		<!-- Data lifecycle visualization -->
		<section id="data-lifecycle" class="section bg-white">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('securityPage.lifecycle.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('securityPage.lifecycle.lead') }}
					</p>
				</div>

				<ol class="security-page__lifecycle">
					<li v-for="(stage, i) in lifecycleStages" :key="stage.id" class="security-page__lifecycle-stage">
						<div class="security-page__lifecycle-marker">
							<span class="security-page__lifecycle-step">{{ String(i + 1).padStart(2, '0') }}</span>
							<div class="security-page__lifecycle-icon">
								<Icon :icon="stage.icon" width="22" />
							</div>
						</div>
						<div class="security-page__lifecycle-body">
							<div class="security-page__lifecycle-head">
								<h3 class="security-page__lifecycle-title">{{ stage.title }}</h3>
								<span class="security-page__lifecycle-ttl" :class="`security-page__lifecycle-ttl--${stage.tone}`">
									<Icon :icon="stage.tone === 'permanent' ? 'ph:database-bold' : 'ph:timer-bold'" width="12" />
									{{ stage.ttl }}
								</span>
							</div>
							<p class="security-page__lifecycle-body-text">{{ stage.body }}</p>
						</div>
					</li>
				</ol>
			</div>
		</section>

		<!-- Encryption & Infrastructure -->
		<section id="encryption" class="section security-page__section--slate">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('securityPage.infra.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('securityPage.infra.lead') }}
					</p>
				</div>

				<div class="grid gap-5 md:grid-cols-2">
					<article v-for="card in infraCards" :key="card.id" class="security-page__infra">
						<div class="security-page__infra-head">
							<div class="security-page__infra-icon">
								<Icon :icon="card.icon" width="24" />
							</div>
							<h3 class="security-page__infra-title">{{ card.title }}</h3>
						</div>
						<p class="security-page__infra-body">{{ card.body }}</p>
						<ul class="security-page__infra-chips">
							<li v-for="(chip, idx) in card.chips" :key="idx" class="security-page__infra-chip">
								<Icon icon="ph:check-circle-bold" width="14" class="text-sea" />
								<span>{{ chip }}</span>
							</li>
						</ul>
					</article>
				</div>
			</div>
		</section>

		<!-- Payment security -->
		<section id="payments" class="section bg-white">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('securityPage.payments.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('securityPage.payments.lead') }}
					</p>
				</div>

				<div class="grid gap-5 md:grid-cols-2">
					<article v-for="provider in paymentProviders" :key="provider.id" class="security-page__payment">
						<div class="security-page__payment-head">
							<div class="security-page__payment-icon">
								<Icon :icon="provider.icon" width="26" />
							</div>
							<div>
								<h3 class="security-page__payment-title">{{ provider.title }}</h3>
								<p class="security-page__payment-sub">{{ provider.sub }}</p>
							</div>
						</div>
						<p class="security-page__payment-body">{{ provider.body }}</p>
						<div class="security-page__payment-data">
							<p class="security-page__payment-data-label">{{ t('securityPage.payments.dataLeavesLabel') }}</p>
							<ul class="security-page__payment-data-list">
								<li v-for="(item, idx) in provider.dataLeaves" :key="idx">
									<Icon icon="ph:arrow-right-bold" width="12" class="text-orange" />
									<span>{{ item }}</span>
								</li>
							</ul>
						</div>
					</article>
				</div>

				<p class="security-page__payment-footnote">
					<Icon icon="ph:info-bold" width="14" class="inline-block text-sea" />
					{{ t('securityPage.payments.footnote') }}
				</p>
			</div>
		</section>

		<!-- Privacy & Compliance -->
		<section id="compliance" class="section security-page__section--slate">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('securityPage.compliance.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('securityPage.compliance.lead') }}
					</p>
				</div>

				<div class="grid gap-5 md:grid-cols-3">
					<article v-for="right in gdprRights" :key="right.id" class="security-page__right">
						<div class="security-page__right-icon">
							<Icon :icon="right.icon" width="20" />
						</div>
						<h3 class="security-page__right-title">{{ right.title }}</h3>
						<p class="security-page__right-body">{{ right.body }}</p>
					</article>
				</div>

				<div class="security-page__compliance-cta">
					<div class="security-page__compliance-cta-text">
						<p class="security-page__compliance-cta-label">{{ t('securityPage.compliance.exerciseTitle') }}</p>
						<p class="security-page__compliance-cta-body">{{ t('securityPage.compliance.exerciseBody') }}</p>
					</div>
					<a :href="`mailto:${supportEmail}?subject=${encodeURIComponent(t('securityPage.compliance.exerciseSubject'))}`" class="security-page__compliance-cta-email">
						<Icon icon="ph:envelope-bold" width="16" />
						{{ supportEmail }}
					</a>
				</div>
			</div>
		</section>

		<!-- Report a security issue -->
		<section id="report" class="section bg-white">
			<div class="container max-w-4xl">
				<div class="security-page__report">
					<div class="security-page__report-icon">
						<Icon icon="ph:shield-warning-bold" width="32" />
					</div>
					<div class="security-page__report-body">
						<h2 class="security-page__report-title">{{ t('securityPage.report.heading') }}</h2>
						<p class="security-page__report-text">{{ t('securityPage.report.body') }}</p>
						<ul class="security-page__report-list">
							<li v-for="(item, idx) in reportEscalation" :key="idx">
								<span class="security-page__report-step">{{ String(idx + 1).padStart(2, '0') }}</span>
								<span>{{ item }}</span>
							</li>
						</ul>
						<a :href="`mailto:${supportEmail}?subject=${encodeURIComponent(t('securityPage.report.emailSubject'))}`" class="security-page__report-email">
							<Icon icon="ph:envelope-bold" width="18" />
							{{ supportEmail }}
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Trust audit checklist -->
		<section class="section security-page__section--mint">
			<div class="container">
				<div class="mb-10 max-w-3xl">
					<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
						{{ t('securityPage.audit.heading') }}
					</h2>
					<p class="text-sm leading-relaxed text-slate-700 md:text-base">
						{{ t('securityPage.audit.lead') }}
					</p>
				</div>

				<div class="grid gap-3 md:grid-cols-2">
					<div v-for="item in auditItems" :key="item.id" class="security-page__audit">
						<div class="security-page__audit-icon">
							<Icon icon="ph:check-bold" width="16" />
						</div>
						<div>
							<p class="security-page__audit-label">{{ item.label }}</p>
							<p class="security-page__audit-detail">{{ item.detail }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Final CTA -->
		<section class="section security-page__cta-section">
			<div class="container max-w-3xl text-center">
				<h2 class="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
					{{ t('securityPage.cta.heading') }}
				</h2>
				<p class="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
					{{ t('securityPage.cta.text') }}
				</p>
				<div class="flex flex-wrap justify-center gap-3">
					<NuxtLinkLocale to="/how-it-works" class="block">
						<BaseButton type="button" variant="primary">
							<span class="font-bold">{{ t('securityPage.cta.primaryButton') }}</span>
						</BaseButton>
					</NuxtLinkLocale>
					<NuxtLinkLocale to="/contact" class="block">
						<BaseButton type="button" variant="secondary">
							<span class="font-bold">{{ t('securityPage.cta.secondaryButton') }}</span>
						</BaseButton>
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
	import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
	import Breadcrumbs from '~/components/Breadcrumbs.vue';
	import { toOgLocale } from '~/utils/ogLocale';

	const { t, locale } = useI18n();
	const config = useRuntimeConfig();
	const localePath = useLocalePath();

	const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
	const canonicalPath = computed(() => String(localePath({ name: 'security' })));
	const canonicalUrl = computed(() => siteUrl + canonicalPath.value);
	const supportEmail = String(config.public.supportEmail || 'support@idpcompanion.com');

	/* ---------------------------------------------------------------------------
	 * Static data — IDs map to i18n keys, icons live in component
	 * ------------------------------------------------------------------------- */

	const heroBadgeDefs = [
		{ id: 'eu',        icon: 'ph:globe-bold' },
		{ id: 'tls',       icon: 'ph:lock-key-bold' },
		{ id: 'gdpr',      icon: 'ph:shield-check-bold' },
		{ id: 'retention', icon: 'ph:timer-bold' },
	] as const;

	const heroBadges = computed(() => {
		void locale.value;
		return heroBadgeDefs.map((b) => ({
			id: b.id,
			icon: b.icon,
			label: t(`securityPage.hero.badges.${b.id}`),
		}));
	});

	const lifecycleDefs = [
		{ id: 'licensePhoto', icon: 'ph:identification-card-bold', tone: 'transient' },
		{ id: 'headshot',     icon: 'ph:user-focus-bold',          tone: 'transient' },
		{ id: 'pdf',          icon: 'ph:file-pdf-bold',            tone: 'transient' },
		{ id: 'profile',      icon: 'ph:database-bold',            tone: 'permanent' },
	] as const;

	const lifecycleStages = computed(() => {
		void locale.value;
		return lifecycleDefs.map((s) => ({
			id: s.id,
			icon: s.icon,
			tone: s.tone,
			title: t(`securityPage.lifecycle.stages.${s.id}.title`),
			ttl: t(`securityPage.lifecycle.stages.${s.id}.ttl`),
			body: t(`securityPage.lifecycle.stages.${s.id}.body`),
		}));
	});

	const infraDefs = [
		{ id: 'inTransit',  icon: 'ph:lock-key-open-bold' },
		{ id: 'atRest',     icon: 'ph:hard-drive-bold' },
		{ id: 'hosting',    icon: 'ph:globe-stand-bold' },
		{ id: 'access',     icon: 'ph:users-three-bold' },
	] as const;

	const infraCards = computed(() => {
		void locale.value;
		return infraDefs.map((c) => ({
			id: c.id,
			icon: c.icon,
			title: t(`securityPage.infra.cards.${c.id}.title`),
			body: t(`securityPage.infra.cards.${c.id}.body`),
			chips: [
				t(`securityPage.infra.cards.${c.id}.chip1`),
				t(`securityPage.infra.cards.${c.id}.chip2`),
				t(`securityPage.infra.cards.${c.id}.chip3`),
			],
		}));
	});

	const paymentProviderDefs = [
		{ id: 'gumroad',     icon: 'ph:credit-card-bold' },
		{ id: 'nowpayments', icon: 'ph:currency-btc-bold' },
	] as const;

	const paymentProviders = computed(() => {
		void locale.value;
		return paymentProviderDefs.map((p) => ({
			id: p.id,
			icon: p.icon,
			title: t(`securityPage.payments.providers.${p.id}.title`),
			sub: t(`securityPage.payments.providers.${p.id}.sub`),
			body: t(`securityPage.payments.providers.${p.id}.body`),
			dataLeaves: [
				t(`securityPage.payments.providers.${p.id}.leaves1`),
				t(`securityPage.payments.providers.${p.id}.leaves2`),
				t(`securityPage.payments.providers.${p.id}.leaves3`),
			],
		}));
	});

	const gdprRightsDefs = [
		{ id: 'access',     icon: 'ph:magnifying-glass-bold' },
		{ id: 'erasure',    icon: 'ph:trash-bold' },
		{ id: 'portability', icon: 'ph:download-bold' },
	] as const;

	const gdprRights = computed(() => {
		void locale.value;
		return gdprRightsDefs.map((r) => ({
			id: r.id,
			icon: r.icon,
			title: t(`securityPage.compliance.rights.${r.id}.title`),
			body: t(`securityPage.compliance.rights.${r.id}.body`),
		}));
	});

	const reportEscalation = computed(() => {
		void locale.value;
		return [
			t('securityPage.report.steps.step1'),
			t('securityPage.report.steps.step2'),
			t('securityPage.report.steps.step3'),
		];
	});

	const auditItemDefs = [
		{ id: 'noCardData' },
		{ id: 'noFaceDb' },
		{ id: 'licenseDelete' },
		{ id: 'headshotDelete' },
		{ id: 'euServers' },
		{ id: 'tls13' },
	] as const;

	const auditItems = computed(() => {
		void locale.value;
		return auditItemDefs.map((a) => ({
			id: a.id,
			label: t(`securityPage.audit.items.${a.id}.label`),
			detail: t(`securityPage.audit.items.${a.id}.detail`),
		}));
	});

	/* ---------------------------------------------------------------------------
	 * SEO + WebPage / Organization JSON-LD
	 * ------------------------------------------------------------------------- */

	useSeoMeta({
		title: () => t('securityPage.seo.title'),
		description: () => t('securityPage.seo.description'),
		ogTitle: () => t('securityPage.seo.title'),
		ogDescription: () => t('securityPage.seo.description'),
		ogImage: () => t('seo.ogImage'),
		ogImageWidth: 1200,
		ogImageHeight: 630,
		ogImageType: 'image/png',
		ogImageAlt: 'IDP Companion — Security & Payments',
		ogImageSecureUrl: () => t('seo.ogImage'),
		ogUrl: () => canonicalUrl.value,
		ogType: 'website',
		ogSiteName: 'IDP Companion',
		ogLocale: () => toOgLocale(locale.value),
		twitterCard: 'summary_large_image',
		twitterTitle: () => t('securityPage.seo.title'),
		twitterDescription: () => t('securityPage.seo.description'),
		twitterImage: () => t('seo.ogImage'),
		twitterImageAlt: 'IDP Companion — Security & Payments',
	});

	useHead(() => ({
		link: [{ rel: 'canonical', href: canonicalUrl.value }],
		script: [
			{
				type: 'application/ld+json',
				innerHTML: JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'WebPage',
					name: t('securityPage.hero.h1'),
					description: t('securityPage.seo.description'),
					url: canonicalUrl.value,
					inLanguage: locale.value,
					isPartOf: {
						'@type': 'WebSite',
						name: 'IDP Companion',
						url: siteUrl,
					},
					about: {
						'@type': 'Thing',
						name: 'Data Security and Payment Protection',
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
							name: t('securityPage.hero.h1'),
							item: canonicalUrl.value,
						},
					],
				}),
			},
		],
	}));
</script>

<style scoped>
	.security-page {
		background: white;
	}

	.security-page__hero {
		background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.18) 100%);
	}

	.security-page__section--slate {
		background: rgb(248 250 252);
	}

	.security-page__section--mint {
		background: linear-gradient(180deg, rgba(var(--c-mint), 0.18) 0%, rgba(var(--c-mint), 0.42) 100%);
	}

	.security-page__cta-section {
		background: linear-gradient(180deg, rgba(var(--c-mint), 0.25) 0%, rgba(var(--c-mint), 0.6) 100%);
	}

	.security-page__badge {
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

	/* --- Data lifecycle timeline (vertical, similar to how-page steps but tinted) --- */

	.security-page__lifecycle {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 22px;
		position: relative;
	}

	@media (min-width: 768px) {
		.security-page__lifecycle::before {
			content: '';
			position: absolute;
			left: 27px;
			top: 28px;
			bottom: 28px;
			width: 2px;
			background: rgb(var(--c-sea) / 0.18);
			border-radius: 1px;
		}
	}

	.security-page__lifecycle-stage {
		display: grid;
		gap: 16px;
		grid-template-columns: auto 1fr;
	}

	.security-page__lifecycle-marker {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding-top: 2px;
	}

	.security-page__lifecycle-step {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 56px;
		height: 28px;
		border-radius: 999px;
		background: white;
		border: 2px solid rgb(var(--c-sea));
		color: rgb(var(--c-sea));
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.06em;
	}

	.security-page__lifecycle-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: rgb(var(--c-mint) / 0.55);
		color: rgb(var(--c-sea));
	}

	.security-page__lifecycle-body {
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 16px;
		padding: 16px 22px;
		box-shadow: 0 2px 12px rgb(15 23 42 / 0.04);
	}

	.security-page__lifecycle-head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-bottom: 8px;
	}

	.security-page__lifecycle-title {
		margin: 0;
		font-size: 17px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		line-height: 1.3;
	}

	@media (min-width: 768px) {
		.security-page__lifecycle-title {
			font-size: 19px;
		}
	}

	.security-page__lifecycle-ttl {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 4px 10px;
		border-radius: 999px;
		font-size: 11.5px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.security-page__lifecycle-ttl--transient {
		background: rgb(var(--c-orange) / 0.12);
		color: rgb(var(--c-orange));
		border: 1px solid rgb(var(--c-orange) / 0.3);
	}

	.security-page__lifecycle-ttl--permanent {
		background: rgb(var(--c-sea) / 0.12);
		color: rgb(var(--c-sea));
		border: 1px solid rgb(var(--c-sea) / 0.3);
	}

	.security-page__lifecycle-body-text {
		margin: 0;
		font-size: 14.5px;
		color: rgb(var(--c-slate-700));
		line-height: 1.6;
	}

	/* --- Infrastructure cards --- */

	.security-page__infra {
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 18px;
		padding: 26px 24px;
		box-shadow: 0 2px 14px rgb(15 23 42 / 0.04);
	}

	.security-page__infra-head {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 12px;
	}

	.security-page__infra-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: 14px;
		background: rgb(var(--c-mint) / 0.55);
		color: rgb(var(--c-sea));
		flex-shrink: 0;
	}

	.security-page__infra-title {
		margin: 0;
		font-size: 18px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		line-height: 1.3;
	}

	.security-page__infra-body {
		margin: 0 0 14px;
		font-size: 14.5px;
		color: rgb(var(--c-slate-700));
		line-height: 1.6;
	}

	.security-page__infra-chips {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 8px;
	}

	.security-page__infra-chip {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		font-size: 13.5px;
		color: rgb(var(--c-slate-800));
		font-weight: 500;
		line-height: 1.45;
	}

	/* --- Payment cards --- */

	.security-page__payment {
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 18px;
		padding: 26px 24px;
		box-shadow: 0 2px 14px rgb(15 23 42 / 0.04);
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.security-page__payment-head {
		display: flex;
		align-items: flex-start;
		gap: 14px;
	}

	.security-page__payment-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		border-radius: 14px;
		background: rgb(var(--c-orange) / 0.12);
		color: rgb(var(--c-orange));
		flex-shrink: 0;
	}

	.security-page__payment-title {
		margin: 0 0 2px;
		font-size: 18px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		line-height: 1.3;
	}

	.security-page__payment-sub {
		margin: 0;
		font-size: 12.5px;
		color: rgb(var(--c-slate-600));
		font-weight: 500;
	}

	.security-page__payment-body {
		margin: 0;
		font-size: 14.5px;
		color: rgb(var(--c-slate-700));
		line-height: 1.6;
	}

	.security-page__payment-data {
		margin-top: auto;
		padding: 14px 16px;
		background: rgb(248 250 252);
		border-radius: 12px;
		border: 1px dashed rgb(var(--c-slate-300));
	}

	.security-page__payment-data-label {
		margin: 0 0 8px;
		font-size: 11.5px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: rgb(var(--c-slate-600));
	}

	.security-page__payment-data-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 6px;
	}

	.security-page__payment-data-list li {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		color: rgb(var(--c-slate-800));
		font-weight: 500;
	}

	.security-page__payment-footnote {
		margin: 24px 0 0;
		padding: 14px 18px;
		background: rgb(var(--c-mint) / 0.18);
		border-left: 3px solid rgb(var(--c-sea));
		border-radius: 0 12px 12px 0;
		font-size: 13.5px;
		color: rgb(var(--c-slate-700));
		line-height: 1.55;
	}

	.security-page__payment-footnote :deep(svg) {
		margin-right: 6px;
		vertical-align: -2px;
	}

	/* --- GDPR rights cards --- */

	.security-page__right {
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 14px;
		padding: 22px 20px;
		box-shadow: 0 2px 10px rgb(15 23 42 / 0.03);
	}

	.security-page__right-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		background: rgb(var(--c-mint) / 0.55);
		color: rgb(var(--c-sea));
		margin-bottom: 10px;
	}

	.security-page__right-title {
		margin: 0 0 6px;
		font-size: 16px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		line-height: 1.3;
	}

	.security-page__right-body {
		margin: 0;
		font-size: 13.5px;
		color: rgb(var(--c-slate-700));
		line-height: 1.55;
	}

	.security-page__compliance-cta {
		margin-top: 28px;
		padding: 20px 24px;
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 16px;
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 2px 10px rgb(15 23 42 / 0.04);
	}

	.security-page__compliance-cta-label {
		margin: 0 0 4px;
		font-size: 15px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
	}

	.security-page__compliance-cta-body {
		margin: 0;
		font-size: 13.5px;
		color: rgb(var(--c-slate-600));
	}

	.security-page__compliance-cta-email {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 18px;
		background: rgb(var(--c-sea));
		color: white;
		border-radius: 999px;
		text-decoration: none;
		font-size: 14px;
		font-weight: 700;
		transition: background 0.18s ease;
	}

	.security-page__compliance-cta-email:hover {
		background: rgb(var(--c-sea) / 0.88);
	}

	/* --- Report a security issue (callout box) --- */

	.security-page__report {
		display: grid;
		gap: 20px;
		grid-template-columns: auto 1fr;
		padding: 28px 28px;
		background: linear-gradient(135deg, rgb(var(--c-orange) / 0.08) 0%, rgb(var(--c-orange) / 0.02) 100%);
		border: 1px solid rgb(var(--c-orange) / 0.3);
		border-radius: 20px;
	}

	@media (max-width: 640px) {
		.security-page__report {
			grid-template-columns: 1fr;
			padding: 22px 20px;
		}
	}

	.security-page__report-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 56px;
		height: 56px;
		border-radius: 14px;
		background: rgb(var(--c-orange) / 0.15);
		color: rgb(var(--c-orange));
		flex-shrink: 0;
	}

	.security-page__report-title {
		margin: 0 0 8px;
		font-size: 22px;
		font-weight: 800;
		color: rgb(var(--c-slate-900));
		line-height: 1.25;
	}

	.security-page__report-text {
		margin: 0 0 16px;
		font-size: 14.5px;
		color: rgb(var(--c-slate-700));
		line-height: 1.6;
	}

	.security-page__report-list {
		list-style: none;
		margin: 0 0 18px;
		padding: 0;
		display: grid;
		gap: 8px;
	}

	.security-page__report-list li {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		font-size: 14px;
		color: rgb(var(--c-slate-800));
		line-height: 1.5;
	}

	.security-page__report-step {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 28px;
		height: 22px;
		padding: 0 8px;
		border-radius: 999px;
		background: white;
		color: rgb(var(--c-orange));
		border: 1.5px solid rgb(var(--c-orange));
		font-size: 11px;
		font-weight: 800;
		letter-spacing: 0.04em;
		flex-shrink: 0;
	}

	.security-page__report-email {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 12px 22px;
		background: rgb(var(--c-orange));
		color: white;
		border-radius: 999px;
		text-decoration: none;
		font-size: 15px;
		font-weight: 800;
		transition: background 0.18s ease;
	}

	.security-page__report-email:hover {
		background: rgb(var(--c-orange) / 0.88);
	}

	/* --- Audit grid --- */

	.security-page__audit {
		display: flex;
		gap: 12px;
		padding: 16px 18px;
		background: white;
		border: 1px solid rgb(var(--c-slate-200));
		border-radius: 14px;
		box-shadow: 0 1px 6px rgb(15 23 42 / 0.03);
	}

	.security-page__audit-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 10px;
		background: rgb(var(--c-sea));
		color: white;
		flex-shrink: 0;
	}

	.security-page__audit-label {
		margin: 0 0 2px;
		font-size: 14.5px;
		font-weight: 700;
		color: rgb(var(--c-slate-900));
	}

	.security-page__audit-detail {
		margin: 0;
		font-size: 13px;
		color: rgb(var(--c-slate-600));
		line-height: 1.5;
	}
</style>
