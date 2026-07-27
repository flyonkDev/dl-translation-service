<script setup lang="ts">
import { computed } from 'vue';
import AuthorByline from '~/components/AuthorByline.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import FaqAccordion from '~/components/FaqAccordion.vue';

definePageMeta({ path: '/sample-pdf' });
defineI18nRoute({ locales: ['en', 'ru', 'es'] });

const { locale } = useI18n();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(runtimeConfig.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const appUrl = String(runtimeConfig.public.appUrl || 'https://app.idpcompanion.com').replace(/\/+$/, '');

const canonicalPath = '/sample-pdf/';
const canonicalUrl = `${siteUrl}${canonicalPath}`;

const datePublished = '2026-04-20';
const dateModified = '2026-07-24';

const seo = {
	title: 'IDP Companion PDF Sample — Real Preview of the 15-Page Document',
	description: 'Every page of the 15-page IDP Companion PDF, with 11 Geneva 1949 languages. Preview cover, personal details, category descriptions, and per-language sections. Actual document, watermarked for preview.',
	ogTitle: 'IDP Companion PDF — Full Preview (15 pages, 11 languages)',
	ogDescription: 'See exactly what your IDP Companion PDF looks like — cover, personal details, category descriptions, per-language pages.',
};

useSeoMeta({
	title: seo.title,
	ogTitle: seo.ogTitle,
	description: seo.description,
	ogDescription: seo.ogDescription,
	ogUrl: canonicalUrl,
	ogType: 'article',
	ogSiteName: 'IDP Companion',
	ogImage: `${siteUrl}/sample/sample-cover.png`,
	ogImageWidth: 874,
	ogImageHeight: 1213,
	twitterCard: 'summary_large_image',
	twitterTitle: seo.ogTitle,
	twitterDescription: seo.ogDescription,
	twitterImage: `${siteUrl}/sample/sample-cover.png`,
});

const authorByLabel = computed(() => {
	switch (locale.value) {
		case 'ru': return 'Автор:';
		case 'es': return 'Por';
		default: return 'By';
	}
});

const reviewedLabel = computed(() => {
	switch (locale.value) {
		case 'ru': return 'Проверено:';
		case 'es': return 'Revisado:';
		default: return 'Last reviewed:';
	}
});

const reviewedDate = 'July 2026';

const faqItems = [
	{
		id: 1,
		question: 'Is this the same as a government-issued International Driving Permit?',
		answer: "No. IDP Companion is a privately-issued multilingual translation document — not a government IDP under the 1949 Geneva or 1968 Vienna Convention. It carries your driver license details translated into 11 widely-read languages and is intended to reduce friction at rental desks, hotel check-ins, and informal police stops. Where a destination country's law requires a government-authorized IDP, this document is not a legal substitute for it.",
	},
	{
		id: 2,
		question: 'What languages are actually included in the PDF?',
		answer: 'Eleven languages verified in the template: English, French, Spanish, German, Italian, Portuguese, Vietnamese (all Latin script) plus Russian, Arabic, Chinese, and Japanese (non-Latin scripts). These are the widely-spoken languages Geneva 1949 committee originally standardized. The template does not currently include Thai, Greek, Bahasa, Korean, Hindi, Turkish, or Hebrew — if you are driving in one of those markets, English on the document is universally readable at rental desks and tourist-area police stops.',
	},
	{
		id: 3,
		question: 'Can I print it at home, or does it need special paper?',
		answer: "Print it at home on any standard A4 or Letter paper — no special stock required. Officers and rental agents look at the printed page for verifiability, not paper texture. We recommend printing the cover in color if possible (for the seal), but black-and-white is accepted. Keep a digital backup on your phone in case the paper copy is lost.",
	},
	{
		id: 4,
		question: 'What happens if my physical driver license expires before the IDP does?',
		answer: 'The IDP Companion is only valid while the underlying physical driver license it translates is valid. If your original license expires, the companion document loses its function — because the whole design assumes you present them together. Renew your original license at the appropriate DMV/DVLA, then verify whether you need to regenerate an updated companion document reflecting the new details.',
	},
	{
		id: 5,
		question: 'How is this different from a government-authorized IDP?',
		answer: "Government-authorized IDPs (issued under the 1949 Geneva Convention by national motoring clubs designated by each government) are the legally binding permits for destinations where the Convention applies. They cost around $20-25 in the US and require an in-person or mail application through the authorized issuer, typically taking 10-14 days. IDP Companion is a privately-issued multilingual translation document — faster to obtain (2 minutes online), covers 11 languages, and is designed to reduce friction at rental desks and informal police stops. It is not a legal substitute for the government IDP where the destination country requires one.",
	},
	{
		id: 6,
		question: 'What if the destination officer doesn\'t recognize the document?',
		answer: 'The IDP Companion is designed to look identical in structure to the 1949 Geneva Convention layout — same field numbering (1-9), same category-descriptions format, same multilingual section arrangement. Rental agents and police officers trained on that format read it directly. Where they do not: English is universally readable at every major rental chain and tourist-area police stop worldwide, and English is on every IDP Companion. The document reduces friction; it does not create legal status by itself — always carry the original physical driver license alongside.',
	},
];

const comparisonRows = [
	{
		criterion: 'What it is legally',
		companion: 'Private multilingual translation document',
		government: 'Legally recognized permit under 1949 Geneva Convention (issued by an authorized national motoring club)',
	},
	{
		criterion: 'How long to obtain',
		companion: '~2 minutes online, downloadable immediately',
		government: '~10-14 days by mail after in-person or postal application through the authorized issuer',
	},
	{
		criterion: 'Price',
		companion: '$35-55 (1-5 year plans)',
		government: '$20-25 (fixed 1-year term)',
	},
	{
		criterion: 'Languages included',
		companion: '11 (EN, FR, ES, DE, IT, PT, VI, RU, AR, ZH, JA)',
		government: '10 (Geneva 1949 official set)',
	},
	{
		criterion: 'When it is required by law',
		companion: 'Never a legal substitute for a government IDP where required',
		government: 'Required in 60+ Geneva-1949-signatory countries when driving as a foreigner',
	},
	{
		criterion: 'When it actually helps',
		companion: 'Rental-desk friction, hotel check-ins, informal police stops, tourist-corridor verification',
		government: 'Regulatory compliance where the destination has ratified the Convention',
	},
];

useHead({
	link: [{ rel: 'canonical', href: canonicalUrl }],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: seo.title,
				description: seo.description,
				url: canonicalUrl,
				mainEntityOfPage: canonicalUrl,
				inLanguage: locale.value,
				datePublished,
				dateModified,
				image: `${siteUrl}/sample/sample-cover.png`,
				articleSection: 'IDP Companion product documentation',
				author: {
					'@type': 'Person',
					name: 'Petr Shchepetin',
					url: `${siteUrl}/authors/petr-shchepetin`,
					'@id': `${siteUrl}/authors/petr-shchepetin#person`,
				},
				publisher: {
					'@type': 'Organization',
					name: 'IDP Companion',
					url: `${siteUrl}/`,
					'@id': `${siteUrl}/#organization`,
				},
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl + '/' },
					{ '@type': 'ListItem', position: 2, name: 'Sample PDF', item: canonicalUrl },
				],
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Product',
				name: 'IDP Companion PDF',
				description: 'Multilingual companion translation document for your driver license, covering 11 languages per the 1949 Geneva Convention format. 15-page PDF ready in 2 minutes.',
				image: `${siteUrl}/sample/sample-cover.png`,
				sku: 'IDP-COMPANION-PDF',
				category: 'Travel Document / Translation Service',
				brand: { '@type': 'Brand', name: 'IDP Companion' },
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
				mainEntity: faqItems.map((f) => ({
					'@type': 'Question',
					name: f.question,
					acceptedAnswer: { '@type': 'Answer', text: f.answer },
				})),
			}),
		},
	],
});

const applyUrl = computed(() => `${appUrl}/apply?locale=${locale.value}`);

const languages = [
	'English', 'French', 'Spanish', 'German', 'Italian', 'Portuguese',
	'Vietnamese', 'Russian', 'Arabic', 'Chinese', 'Japanese',
];

const fields = [
	{ num: '1', label: 'Surname', sample: 'SMITH' },
	{ num: '2', label: 'Given name', sample: 'JOHN' },
	{ num: '3', label: 'Country of issue', sample: 'USA' },
	{ num: '4', label: 'Date of birth', sample: '15-Jun-1985' },
	{ num: '5', label: 'Permanent residence', sample: 'USA' },
];
</script>

<template>
	<article class="sample-pdf-page">
		<!-- Hero -->
		<section class="section sample-pdf__hero">
			<div class="container max-w-4xl">
				<Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Sample PDF' }]" />

				<h1 class="sample-pdf__title">
					What Your IDP Companion PDF Actually Looks Like
				</h1>

				<p class="sample-pdf__lead">
					IDP Companion is a 15-page multilingual translation PDF that mirrors the 1949 Geneva
					Convention page structure. It carries your personal details, photo, signature, license
					categories, and translations of the field labels and category descriptions in 11 widely-read
					languages. Below are actual pages from a live-generated document — watermarked for preview,
					otherwise identical to what you receive.
				</p>

				<AuthorByline
					author-name="Petr Shchepetin"
					profile-href="/authors/petr-shchepetin"
					:by-label="authorByLabel"
					:reviewed-label="reviewedLabel"
					:reviewed-date="reviewedDate"
				/>

				<p class="sample-pdf__verified">
					<strong>Verified July 2026:</strong> Every page shown below was generated
					from the current production template on 2026-07-24. When we update the
					PDF template (adding languages, adjusting field layout), this page's
					<em>Last reviewed</em> date changes and we re-shoot the previews. If the
					displayed images differ visually from what you receive after purchase,
					that means the template shipped a change and we have not yet pushed
					the updated previews — the underlying PDF is authoritative.
				</p>
			</div>
		</section>

		<!-- Cover Page -->
		<section class="section sample-pdf__section--slate">
			<div class="container max-w-4xl">
				<h2 class="sample-pdf__h2">Cover Page</h2>
				<p class="sample-pdf__desc">
					The front page identifies the document as an International Driving Permit
					under the 1949 Geneva Convention. It displays the validity period (1, 3,
					or 5 years from purchase), your unique permit number, and the IDP Companion document seal.
				</p>

				<div class="sample-pdf__preview">
					<img
						src="/sample/sample-cover.png"
						alt="IDP Companion cover page showing International Driving Permit title, validity date, Geneva Convention reference, and the IDP Companion document seal"
						class="sample-pdf__img"
						loading="eager"
						width="874"
						height="1213"
						draggable="false"
						@contextmenu.prevent
					/>
				</div>
			</div>
		</section>

		<!-- Personal Details (Back Page) -->
		<section class="section">
			<div class="container max-w-4xl">
				<h2 class="sample-pdf__h2">Your Personal Details</h2>
				<p class="sample-pdf__desc">
					Page 2 carries your information — exactly as it appears on your driver's license.
					A passport-style photo and your signature are placed in designated areas.
					License categories (A through E) are stamped with the IDP Companion seal.
				</p>

				<div class="sample-pdf__preview">
					<img
						src="/sample/sample-back.png"
						alt="IDP Companion personal details page showing name fields, photo area, signature, and IDP Companion category stamps A through E"
						class="sample-pdf__img"
						loading="lazy"
						width="874"
						height="1213"
						draggable="false"
						@contextmenu.prevent
					/>
				</div>

				<div class="sample-pdf__fields">
					<h3 class="text-lg font-semibold text-slate-800 mb-3">Fields on this page</h3>
					<ul class="sample-pdf__field-list">
						<li v-for="f in fields" :key="f.num" class="sample-pdf__field-item">
							<span class="sample-pdf__field-num">{{ f.num }}.</span>
							<span class="sample-pdf__field-label">{{ f.label }}</span>
							<span class="sample-pdf__field-sample">{{ f.sample }}</span>
						</li>
					</ul>
					<p class="text-sm text-slate-500 mt-2">
						Plus: passport photo, signature, and stamped license categories (A–E).
					</p>
				</div>
			</div>
		</section>

		<!-- Category Descriptions -->
		<section class="section sample-pdf__section--slate">
			<div class="container max-w-4xl">
				<h2 class="sample-pdf__h2">Vehicle Category Descriptions</h2>
				<p class="sample-pdf__desc">
					Each permit includes the full Geneva Convention vehicle category definitions —
					from motorcycles (A) to heavy vehicles with trailers (E). Officers and rental
					agents read these descriptions to verify which vehicles you're licensed to operate.
				</p>

				<div class="sample-pdf__preview">
					<img
						src="/sample/sample-lang-1.png"
						alt="IDP Companion vehicle categories page showing detailed descriptions for categories A through E per Geneva Convention"
						class="sample-pdf__img"
						loading="lazy"
						width="874"
						height="1213"
						draggable="false"
						@contextmenu.prevent
					/>
				</div>
			</div>
		</section>

		<!-- 11 Languages -->
		<section class="section">
			<div class="container max-w-4xl">
				<h2 class="sample-pdf__h2">11 Language Translations</h2>
				<p class="sample-pdf__desc">
					The bulk of the document — pages 3 through 14 — repeats the category descriptions
					and personal-data field labels in 11 languages. When a rental agent or police
					officer doesn't read English fluently, they find their language on the matching
					page and read the numbered fields against page 2. Non-Latin scripts (Russian,
					Arabic, Chinese, Japanese) render as visual blocks that don't extract via text
					copy but are visually present in the printed document.
				</p>

				<div class="sample-pdf__lang-grid">
					<div v-for="lang in languages" :key="lang" class="sample-pdf__lang-chip">
						{{ lang }}
					</div>
				</div>

				<div class="sample-pdf__preview">
					<img
						src="/sample/sample-lang-2.png"
						alt="IDP Companion Arabic translation page showing right-to-left vehicle category descriptions and driver details fields"
						class="sample-pdf__img"
						loading="lazy"
						width="874"
						height="1213"
						draggable="false"
						@contextmenu.prevent
					/>
					<p class="text-center text-sm text-slate-500 mt-2">
						Arabic translation page — one of 11 language sections in every IDP Companion PDF.
					</p>
				</div>
			</div>
		</section>

		<!-- What's Included Summary -->
		<section class="section sample-pdf__section--mint">
			<div class="container max-w-4xl">
				<h2 class="sample-pdf__h2">What Every IDP Companion Includes</h2>

				<div class="sample-pdf__features">
					<div class="sample-pdf__feature">
						<span class="sample-pdf__feature-icon">📄</span>
						<div>
							<h3 class="font-semibold text-slate-800">15-Page PDF Document</h3>
							<p class="text-slate-600 text-sm">Cover, personal details, and 11 language translation sections following the Geneva Convention format.</p>
						</div>
					</div>
					<div class="sample-pdf__feature">
						<span class="sample-pdf__feature-icon">🌍</span>
						<div>
							<h3 class="font-semibold text-slate-800">11 Languages</h3>
							<p class="text-slate-600 text-sm">English, French, Spanish, German, Italian, Portuguese, Vietnamese (Latin script) plus Russian, Arabic, Chinese, Japanese (non-Latin scripts).</p>
						</div>
					</div>
					<div class="sample-pdf__feature">
						<span class="sample-pdf__feature-icon">📸</span>
						<div>
							<h3 class="font-semibold text-slate-800">Your Photo &amp; Signature</h3>
							<p class="text-slate-600 text-sm">Upload during application — embedded directly into the document for instant verification.</p>
						</div>
					</div>
					<div class="sample-pdf__feature">
						<span class="sample-pdf__feature-icon">🏍️</span>
						<div>
							<h3 class="font-semibold text-slate-800">License Categories A–E</h3>
							<p class="text-slate-600 text-sm">Select your categories during application. Each selected category is stamped with the IDP Companion seal.</p>
						</div>
					</div>
					<div class="sample-pdf__feature">
						<span class="sample-pdf__feature-icon">⏱️</span>
						<div>
							<h3 class="font-semibold text-slate-800">Ready in 2 Minutes</h3>
							<p class="text-slate-600 text-sm">Fill out the form, upload your photo, and download your PDF — no office visits, no waiting.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Comparison mini-table: IDP Companion vs authorised government IDP -->
		<section class="section sample-pdf__section--slate">
			<div class="container max-w-5xl">
				<h2 class="sample-pdf__h2">IDP Companion vs an Authorised Government IDP</h2>
				<p class="sample-pdf__desc">
					IDP Companion is not a substitute for a government International Driving Permit
					where the destination country legally requires one. The two documents serve
					different purposes — the table below is our honest read on which one to carry
					when. If in doubt, carry both.
				</p>

				<div class="sample-pdf__compare-wrap">
					<table class="sample-pdf__compare-table">
						<thead>
							<tr>
								<th scope="col" class="sample-pdf__compare-th">Criterion</th>
								<th scope="col" class="sample-pdf__compare-th">IDP Companion (this document)</th>
								<th scope="col" class="sample-pdf__compare-th">Authorised Government IDP</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="r in comparisonRows" :key="r.criterion">
								<th scope="row" class="sample-pdf__compare-crit">{{ r.criterion }}</th>
								<td class="sample-pdf__compare-td sample-pdf__compare-td--us">{{ r.companion }}</td>
								<td class="sample-pdf__compare-td">{{ r.government }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="sample-pdf__compare-cards">
					<div v-for="r in comparisonRows" :key="r.criterion" class="sample-pdf__compare-card">
						<div class="sample-pdf__compare-card-crit">{{ r.criterion }}</div>
						<div class="sample-pdf__compare-card-row sample-pdf__compare-card-row--us">
							<span class="sample-pdf__compare-card-label">IDP Companion</span>
							<span class="sample-pdf__compare-card-val">{{ r.companion }}</span>
						</div>
						<div class="sample-pdf__compare-card-row">
							<span class="sample-pdf__compare-card-label">Government IDP</span>
							<span class="sample-pdf__compare-card-val">{{ r.government }}</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- FAQ -->
		<section class="section">
			<div class="container max-w-3xl">
				<h2 class="sample-pdf__h2">Frequently asked questions about the sample PDF</h2>
				<FaqAccordion :items="faqItems" id-prefix="sample-pdf-faq" />
			</div>
		</section>

		<!-- CTA -->
		<section class="section sample-pdf__cta-section">
			<div class="container max-w-4xl text-center">
				<h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
					Ready to Get Yours?
				</h2>
				<p class="text-slate-600 mb-8 max-w-xl mx-auto">
					Fill out the application in 2 minutes. Your IDP Companion PDF
					is generated instantly — download it, print it, or keep it on your phone.
				</p>
				<a
					:href="applyUrl"
					class="sample-pdf__cta-btn"
				>
					Start Application
				</a>
				<p class="text-sm text-slate-500 mt-4">
					Plans from $35/year · Instant PDF download · No office visit needed
				</p>
			</div>
		</section>
	</article>
</template>

<style scoped lang="scss">
.sample-pdf-page {
	background: #fff;
}

.sample-pdf__hero {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.35) 0%, #fff 100%);
	padding-top: 48px;
	padding-bottom: 32px;
}

.sample-pdf__title {
	font-size: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.2;
	margin-bottom: 16px;
}

.sample-pdf__lead {
	font-size: 1.05rem;
	line-height: 1.7;
	color: rgb(var(--c-slate-600));
	max-width: 640px;
}

.sample-pdf__h2 {
	font-size: clamp(1.3rem, 1.1rem + 0.8vw, 1.75rem);
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
}

.sample-pdf__desc {
	color: rgb(var(--c-slate-600));
	line-height: 1.7;
	margin-bottom: 24px;
	max-width: 600px;
}

.sample-pdf__section--slate {
	background: rgb(248, 250, 252);
}

.sample-pdf__section--mint {
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.25) 0%, rgba(var(--c-mint), 0.08) 100%);
}

.sample-pdf__preview {
	max-width: 420px;
	margin: 0 auto 32px;
	border-radius: $radius-xl;
	overflow: hidden;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
	user-select: none;
	-webkit-user-drag: none;
}

.sample-pdf__img {
	display: block;
	width: 100%;
	height: auto;
	pointer-events: none;
}

.sample-pdf__fields {
	max-width: 420px;
	margin: 0 auto;
	background: rgb(248, 250, 252);
	border-radius: $radius-xl;
	padding: 20px 24px;
}

.sample-pdf__field-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.sample-pdf__field-item {
	display: flex;
	align-items: baseline;
	gap: 8px;
	padding: 4px 0;
	border-bottom: 1px solid rgb(var(--c-slate-200));

	&:last-child {
		border-bottom: none;
	}
}

.sample-pdf__field-num {
	font-weight: 600;
	color: rgb(var(--c-slate-400));
	min-width: 20px;
}

.sample-pdf__field-label {
	color: rgb(var(--c-slate-600));
	flex: 1;
}

.sample-pdf__field-sample {
	font-family: 'Courier New', monospace;
	font-weight: 600;
	color: rgb(var(--c-slate-800));
	font-size: 0.9rem;
}

.sample-pdf__lang-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 24px;
}

.sample-pdf__lang-chip {
	background: rgb(var(--c-mint));
	color: rgb(var(--c-slate-800));
	padding: 6px 14px;
	border-radius: 999px;
	font-size: 0.85rem;
	font-weight: 500;
}

.sample-pdf__features {
	display: grid;
	gap: 20px;
}

.sample-pdf__feature {
	display: flex;
	gap: 16px;
	align-items: flex-start;
}

.sample-pdf__feature-icon {
	font-size: 1.5rem;
	flex-shrink: 0;
	margin-top: 2px;
}

.sample-pdf__cta-section {
	padding-top: 48px;
	padding-bottom: 64px;
}

.sample-pdf__cta-btn {
	display: inline-block;
	background: rgb(var(--c-orange));
	color: #fff;
	font-weight: 700;
	font-size: 1.1rem;
	padding: 14px 40px;
	border-radius: $radius-xl;
	text-decoration: none;
	transition: transform 0.15s, box-shadow 0.15s;
	box-shadow: 0 4px 14px rgba(var(--c-orange), 0.3);

	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 6px 20px rgba(var(--c-orange), 0.4);
	}
}

/* --- "Verified [Month YYYY]" first-hand block below hero --- */
.sample-pdf__verified {
	margin-top: 20px;
	padding: 14px 18px;
	background: rgba(var(--c-mint), 0.35);
	border-left: 3px solid rgb(var(--c-sea));
	border-radius: 4px;
	font-size: 0.95rem;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
	max-width: 720px;

	strong {
		color: rgb(var(--c-sea));
	}
}

/* --- Comparison table (IDP Companion vs Government IDP) --- */
.sample-pdf__compare-wrap {
	display: none;
	overflow-x: auto;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: $radius-xl;
	background: #fff;

	@include up($bp-tablet) {
		display: block;
	}
}

.sample-pdf__compare-table {
	width: 100%;
	border-collapse: collapse;
	font-size: 0.9rem;
}

.sample-pdf__compare-th {
	background: rgb(var(--c-slate-100));
	color: rgb(var(--c-slate-900));
	font-weight: 700;
	text-align: left;
	padding: 14px 18px;
	border-bottom: 1px solid rgb(var(--c-slate-200));
	vertical-align: top;
}

.sample-pdf__compare-crit {
	text-align: left;
	font-weight: 600;
	color: rgb(var(--c-slate-800));
	padding: 14px 18px;
	border-bottom: 1px solid rgb(var(--c-slate-100));
	vertical-align: top;
	background: rgb(var(--c-slate-50));
}

.sample-pdf__compare-td {
	padding: 14px 18px;
	border-bottom: 1px solid rgb(var(--c-slate-100));
	vertical-align: top;
	color: rgb(var(--c-slate-700));
	line-height: 1.55;
}

.sample-pdf__compare-td--us {
	background: rgba(var(--c-mint), 0.15);
	color: rgb(var(--c-slate-900));
	font-weight: 500;
}

/* Card-view for mobile */
.sample-pdf__compare-cards {
	display: flex;
	flex-direction: column;
	gap: 16px;

	@include up($bp-tablet) {
		display: none;
	}
}

.sample-pdf__compare-card {
	background: #fff;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: $radius-xl;
	padding: 16px 18px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.sample-pdf__compare-card-crit {
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
	padding-bottom: 8px;
	border-bottom: 1px solid rgb(var(--c-slate-100));
}

.sample-pdf__compare-card-row {
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 10px 12px;
	border-radius: 6px;
	background: rgb(var(--c-slate-50));

	& + & {
		margin-top: 8px;
	}
}

.sample-pdf__compare-card-row--us {
	background: rgba(var(--c-mint), 0.25);
}

.sample-pdf__compare-card-label {
	font-size: 0.78rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.04em;
	color: rgb(var(--c-slate-500));
}

.sample-pdf__compare-card-val {
	font-size: 0.9rem;
	line-height: 1.5;
	color: rgb(var(--c-slate-800));
}

</style>
