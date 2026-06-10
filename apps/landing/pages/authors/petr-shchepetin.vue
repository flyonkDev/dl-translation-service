<template>
	<article class="author-page">

		<!-- Hero -->
		<section class="section bg-mint/40">
			<div class="container max-w-4xl">
				<Breadcrumbs
					:items="[
						{ label: 'Home', to: '/' },
						{ label: 'Authors' },
						{ label: 'Petr Shchepetin' },
					]"
				/>

				<div class="author-page__hero">
					<div class="author-page__avatar">
						<img
							src="/authors/petr-shchepetin.jpg"
							alt="Petr Shchepetin, co-founder of IDP Companion"
							width="160"
							height="160"
							loading="eager"
						/>
					</div>
					<div>
						<p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
							Author profile
						</p>
						<h1 class="mb-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
							Petr Shchepetin
						</h1>
						<p class="mb-5 text-base font-semibold text-slate-700 md:text-lg">
							Co-founder &amp; lead author, IDP Companion
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="author-page__pill">
								<Icon icon="ph:globe-bold" width="14" />
								Cross-border driving documentation
							</span>
							<span class="author-page__pill">
								<Icon icon="ph:scales-bold" width="14" />
								Geneva 1949 &amp; Vienna 1968 Conventions
							</span>
							<span class="author-page__pill">
								<Icon icon="ph:code-bold" width="14" />
								6+ years frontend engineering
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- About -->
		<section class="section bg-white">
			<div class="container max-w-3xl">
				<h2 class="mb-6 text-2xl font-extrabold text-slate-900 md:text-3xl">
					About
				</h2>
				<div class="space-y-5 text-base leading-relaxed text-slate-700">
					<p>
						I'm a co-founder and lead author of <NuxtLinkLocale to="/" class="text-sea underline-offset-4 hover:underline">IDP Companion</NuxtLinkLocale> &mdash; a private multilingual translation companion document for drivers travelling on foreign licences. I write the country-pair guides on this site myself, fact-check them against primary government sources, and update them when laws or enforcement patterns shift.
					</p>
					<p>
						My background is six-plus years of frontend engineering with a product-management bent. I built the IDP Companion product surface from scratch alongside my co-founder &mdash; landing site, application flow, OCR verification, payment integration, PDF generation pipeline &mdash; so every page on this domain reflects choices made by people who have personally tested the documentation against real rental-desk and police-stop scenarios.
					</p>
					<p>
						Russian is my native language. I read and write English fluently and source-check Spanish-language Mexican and Costa Rican traffic regulations directly in Spanish. For destinations where I lack native-language access to primary sources (Greek, Japanese, Vietnamese, Indonesian), every fact is triangulated against at least one English-language government translation plus one independent industry source.
					</p>
				</div>
			</div>
		</section>

		<!-- What I write about -->
		<section class="section bg-slate-50">
			<div class="container max-w-5xl">
				<h2 class="mb-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
					What I cover on this site
				</h2>
				<p class="mb-8 max-w-3xl text-sm leading-relaxed text-slate-700">
					Every country-pair guide answers four questions: is an IDP legally required, what does the destination's actual roadside enforcement look like, what does the rental-counter conversation involve, and what does IDP Companion specifically help with (versus what it does not).
				</p>
				<div class="grid gap-4 md:grid-cols-2">
					<div class="author-page__topic">
						<div class="author-page__topic-icon">
							<Icon icon="ph:scales-bold" width="22" />
						</div>
						<h3 class="author-page__topic-title">Convention frameworks</h3>
						<p class="author-page__topic-text">
							Geneva 1949 vs Vienna 1968 IDP recognition by destination, with the specific countries where the wrong Convention is treated as no IDP at all (Vietnam being the most-cited).
						</p>
					</div>
					<div class="author-page__topic">
						<div class="author-page__topic-icon">
							<Icon icon="ph:police-car-bold" width="22" />
						</div>
						<h3 class="author-page__topic-title">Roadside enforcement reality</h3>
						<p class="author-page__topic-text">
							Specific fine schedules, checkpoint frequencies, ANPR-billed charges and post-trip card surprises &mdash; sourced from government regulators and verified against traveller forum reports.
						</p>
					</div>
					<div class="author-page__topic">
						<div class="author-page__topic-icon">
							<Icon icon="ph:car-bold" width="22" />
						</div>
						<h3 class="author-page__topic-title">Rental-desk conversations</h3>
						<p class="author-page__topic-text">
							Counter policy variance by chain and branch, peak-season turnover patterns at major airports, insurance gaps including credit-card exclusion territories (Ireland is the canonical case for US visitors).
						</p>
					</div>
					<div class="author-page__topic">
						<div class="author-page__topic-icon">
							<Icon icon="ph:check-circle-bold" width="22" />
						</div>
						<h3 class="author-page__topic-title">Honest IDP Companion scope</h3>
						<p class="author-page__topic-text">
							Every page includes a binding &ldquo;what IDP Companion is / is not / when it helps / what local law actually requires&rdquo; block. We are not a government IDP, and our pages say so plainly.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Editorial principles -->
		<section class="section bg-white">
			<div class="container max-w-3xl">
				<h2 class="mb-6 text-2xl font-extrabold text-slate-900 md:text-3xl">
					Editorial principles
				</h2>
				<ul class="space-y-4 text-base leading-relaxed text-slate-700">
					<li class="flex gap-3">
						<Icon icon="ph:check-bold" width="20" class="mt-1 shrink-0 text-sea" />
						<span>
							<strong class="text-slate-900">Verifiable specifics over universals.</strong>
							Every fine, deadline and regulation cited carries a number, date, and named source. &ldquo;Fines can be steep&rdquo; is not a sentence I publish.
						</span>
					</li>
					<li class="flex gap-3">
						<Icon icon="ph:check-bold" width="20" class="mt-1 shrink-0 text-sea" />
						<span>
							<strong class="text-slate-900">Three source categories minimum.</strong>
							Every country-pair page cites at least three of: government regulator, academic/data publication, industry/trade source, traveller-reported incident.
						</span>
					</li>
					<li class="flex gap-3">
						<Icon icon="ph:check-bold" width="20" class="mt-1 shrink-0 text-sea" />
						<span>
							<strong class="text-slate-900">Conservative on language claims.</strong>
							When the destination's native language is not physically present on the IDP Companion PDF template, the page reframes verification through English (the working language at every major tourist-area rental desk and police interaction). We never claim a translation language the template doesn't carry.
						</span>
					</li>
					<li class="flex gap-3">
						<Icon icon="ph:check-bold" width="20" class="mt-1 shrink-0 text-sea" />
						<span>
							<strong class="text-slate-900">No fake authority.</strong>
							IDP Companion is a private translation companion, not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention. Every page legal block states this directly &mdash; we are not AAA, AATA, AA, RAC, PayPoint, РОСАВТОКЛУБ, ADAC or any other authorized issuer.
						</span>
					</li>
					<li class="flex gap-3">
						<Icon icon="ph:check-bold" width="20" class="mt-1 shrink-0 text-sea" />
						<span>
							<strong class="text-slate-900">Pages get reviewed, not just published.</strong>
							Country-pair guides carry a &ldquo;Last reviewed: Month YYYY&rdquo; date that updates when laws, fines, or enforcement patterns change. If you spot a stale fact, <NuxtLinkLocale to="/contact" class="text-sea underline-offset-4 hover:underline">email me</NuxtLinkLocale>.
						</span>
					</li>
				</ul>
			</div>
		</section>

		<!-- Contact / sameAs -->
		<section class="section bg-slate-50">
			<div class="container max-w-3xl">
				<h2 class="mb-4 text-2xl font-extrabold text-slate-900 md:text-3xl">
					Get in touch
				</h2>
				<p class="mb-6 text-base leading-relaxed text-slate-700">
					Email questions, corrections or freelance enquiries via <NuxtLinkLocale to="/contact" class="text-sea underline-offset-4 hover:underline">the contact page</NuxtLinkLocale>. I read every message; replies usually inside 48 hours.
				</p>
			</div>
		</section>
	</article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHead, useSeoMeta, useI18n, useRuntimeConfig, useLocalePath, defineI18nRoute, defineOgImageComponent } from '#imports';
import { Icon } from '@iconify/vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';

defineI18nRoute({
	locales: ['en', 'ru', 'es'],
});

const { locale } = useI18n();
const config = useRuntimeConfig();
const localePath = useLocalePath();

const siteUrl = String(config.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const canonicalUrl = computed(() => siteUrl + String(localePath('/authors/petr-shchepetin')));

useSeoMeta({
	title: 'Petr Shchepetin — IDP Companion co-founder & lead author',
	description: 'Co-founder and lead author of IDP Companion. Writes and fact-checks every country-pair driving guide on this site against primary government sources.',
	ogTitle: 'Petr Shchepetin — IDP Companion co-founder & lead author',
	ogDescription: 'Co-founder and lead author of IDP Companion. Writes and fact-checks every country-pair driving guide on this site against primary government sources.',
	ogUrl: () => canonicalUrl.value,
	ogType: 'profile',
	ogSiteName: 'IDP Companion',
	ogLocale: 'en_US',
	twitterCard: 'summary_large_image',
});

defineOgImageComponent('Author', {
	name: 'Petr Shchepetin',
	role: 'Co-founder & lead author, IDP Companion',
	tagline: 'Writes and fact-checks every country-pair driving guide',
	avatarUrl: '/authors/petr-shchepetin.jpg',
	byLabel: 'BY',
});

useHead(() => ({
	link: [{ rel: 'canonical', href: canonicalUrl.value }],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'ProfilePage',
				url: canonicalUrl.value,
				inLanguage: locale.value,
				mainEntity: {
					'@type': 'Person',
					'@id': `${siteUrl}/authors/petr-shchepetin#person`,
					name: 'Petr Shchepetin',
					url: canonicalUrl.value,
					jobTitle: 'Co-founder & lead author',
					worksFor: { '@id': `${siteUrl}/#organization` },
					knowsAbout: [
						'International Driving Permit',
						'Geneva 1949 Convention on Road Traffic',
						'Vienna 1968 Convention on Road Traffic',
						'Cross-border driving documentation',
						'Frontend engineering',
						'Product management',
					],
					knowsLanguage: ['ru', 'en', 'es'],
				},
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
					// "Authors" section name has no destination page yet — omit `item` so the
					// breadcrumb schema doesn't advertise a 404. When /authors/ index lands,
					// add `item: \`${siteUrl}/authors\`` back.
					{ '@type': 'ListItem', position: 2, name: 'Authors' },
					{ '@type': 'ListItem', position: 3, name: 'Petr Shchepetin', item: canonicalUrl.value },
				],
			}),
		},
	],
}));
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

.author-page__hero {
	display: flex;
	flex-direction: column;
	gap: 24px;

	@include up($bp-tablet) {
		flex-direction: row;
		align-items: center;
		gap: 32px;
	}
}

.author-page__avatar {
	width: 160px;
	height: 160px;
	border-radius: 50%;
	overflow: hidden;
	flex-shrink: 0;
	box-shadow: 0 16px 40px -12px rgba(15, 23, 42, 0.22);
	border: 4px solid white;
	background: rgb(var(--c-slate-100));

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.author-page__pill {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 6px 12px;
	border-radius: 999px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	font-size: 12px;
	font-weight: 700;
	color: rgb(var(--c-slate-700));
}

.author-page__topic {
	padding: 22px;
	border-radius: $radius-2xl;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
}

.author-page__topic-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 10px;
	background: rgba(var(--c-mint), 0.55);
	color: rgb(var(--c-sea));
	margin-bottom: 12px;
}

.author-page__topic-title {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 6px;
}

.author-page__topic-text {
	font-size: 13px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
}
</style>
