<script setup lang="ts">
import { computed } from 'vue';

definePageMeta({ path: '/sample-pdf' });
defineI18nRoute({ locales: ['en'] });

const { locale } = useI18n();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
const siteUrl = runtimeConfig.public.siteUrl || 'https://www.idpcompanion.com';
const appUrl = runtimeConfig.public.appUrl || 'https://app.idpcompanion.com';

const canonicalPath = '/sample-pdf/';
const canonicalUrl = `${siteUrl}${canonicalPath}`;

const seo = {
	title: 'IDP Companion PDF Sample — See Exactly What You Get',
	description: 'Preview the IDP Companion PDF before you buy. See the cover page, personal details layout, photo placement, license categories, and all 12 language translations included in every document.',
	ogTitle: 'IDP Companion PDF — Full Preview',
	ogDescription: 'See exactly what your IDP Companion document looks like: cover, personal details, 12 multilingual translations, and license categories.',
};

useSeoMeta({
	title: seo.title,
	ogTitle: seo.ogTitle,
	description: seo.description,
	ogDescription: seo.ogDescription,
	ogUrl: canonicalUrl,
	ogType: 'website',
	ogSiteName: 'IDP Companion',
	ogImage: `${siteUrl}/sample/sample-cover.png`,
	ogImageWidth: 874,
	ogImageHeight: 1213,
	twitterCard: 'summary_large_image',
	twitterTitle: seo.ogTitle,
	twitterDescription: seo.ogDescription,
	twitterImage: `${siteUrl}/sample/sample-cover.png`,
});

useHead({
	link: [{ rel: 'canonical', href: canonicalUrl }],
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebPage',
				name: seo.title,
				description: seo.description,
				url: canonicalUrl,
				mainEntity: {
					'@type': 'Product',
					name: 'IDP Companion PDF',
					description: 'Multilingual companion translation document for your driver\'s license, covering 12 languages per the 1949 Geneva Convention format.',
					image: `${siteUrl}/sample/sample-cover.png`,
				},
				breadcrumb: {
					'@type': 'BreadcrumbList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl + '/' },
						{ '@type': 'ListItem', position: 2, name: 'Sample PDF', item: canonicalUrl },
					],
				},
			}),
		},
	],
});

const applyUrl = computed(() => `${appUrl}/apply?locale=${locale.value}`);

const languages = [
	'English', 'French', 'Spanish', 'German', 'Italian', 'Portuguese',
	'Russian', 'Arabic', 'Chinese', 'Japanese', 'Vietnamese', 'Thai',
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
				<nav class="breadcrumbs mb-6 text-sm text-slate-500">
					<NuxtLink :to="localePath('/')" class="hover:text-sea transition-colors">Home</NuxtLink>
					<span class="mx-2">/</span>
					<span class="text-slate-700">Sample PDF</span>
				</nav>

				<h1 class="sample-pdf__title">
					What Your IDP Companion PDF Actually Looks Like
				</h1>

				<p class="sample-pdf__lead">
					Your IDP Companion is a 15-page multilingual translation document that follows
					the 1949 Geneva Convention format. It includes your personal details, photo,
					signature, license categories, and translations in 12 languages. Below are
					actual pages from a sample document — watermarked for preview.
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
					or 5 years from purchase), your unique permit number, and the issuing authority seal.
				</p>

				<div class="sample-pdf__preview">
					<img
						src="/sample/sample-cover.png"
						alt="IDP Companion cover page showing International Driving Permit title, validity date, Geneva Convention reference, and official seal"
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
					License categories (A through E) are stamped with an official seal.
				</p>

				<div class="sample-pdf__preview">
					<img
						src="/sample/sample-back.png"
						alt="IDP Companion personal details page showing name fields, photo area, signature, and license category stamps A through E"
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

		<!-- 12 Languages -->
		<section class="section">
			<div class="container max-w-4xl">
				<h2 class="sample-pdf__h2">12 Language Translations</h2>
				<p class="sample-pdf__desc">
					The bulk of the document — pages 3 through 14 — repeats the category descriptions
					and personal-data fields in 12 languages. When a rental agent or police officer
					doesn't read English, they find the translation in their language and match it
					against the numbered fields on page 2.
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
						Arabic translation page — one of 12 language sections in every IDP Companion PDF.
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
							<p class="text-slate-600 text-sm">Cover, personal details, and 12 language translation sections following the Geneva Convention format.</p>
						</div>
					</div>
					<div class="sample-pdf__feature">
						<span class="sample-pdf__feature-icon">🌍</span>
						<div>
							<h3 class="font-semibold text-slate-800">12 Languages</h3>
							<p class="text-slate-600 text-sm">English, French, Spanish, German, Italian, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese, and Thai.</p>
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
							<p class="text-slate-600 text-sm">Select your categories during application. Each selected category is stamped with an official seal.</p>
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

.breadcrumbs a {
	text-decoration: none;
}
</style>
