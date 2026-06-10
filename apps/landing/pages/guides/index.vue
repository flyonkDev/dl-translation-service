<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import AuthorByline from '~/components/AuthorByline.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';

definePageMeta({ path: '/guides' });
defineI18nRoute({ locales: ['en', 'ru', 'es'] });

interface GuideCard {
	num: string;
	icon: string;
	slug: string;
	title: string;
	lead: string;
	meta: string;
}

interface GuidesHubCopy {
	seo: { title: string; description: string };
	breadcrumb: { home: string; current: string };
	hero: {
		kicker: string;
		title: string;
		lead: string;
		authorBy: string;
		authorReviewedLabel: string;
		authorReviewedDate: string;
	};
	cardCta: string;
	listLead: string;
	bridge: { kicker: string; title: string; lead: string; cta: string };
	author: { kicker: string; title: string; bio: string; cta: string };
	finalCta: { title: string; lead: string; button: string };
	guides: GuideCard[];
}

const datePublished = '2026-06-09';
const dateModified = '2026-06-09';

const en: GuidesHubCopy = {
	seo: {
		title: 'IDP Guides — Driving Abroad, Document Disambiguation, Documented Cases (2026)',
		description: 'Three long-form guides on the International Driving Permit: complete driving-abroad reference, real-vs-scam disambiguation across IDP/IDL/IDA/IAA, and eight documented foreign-driver incidents 2024-2026.',
	},
	breadcrumb: { home: 'Home', current: 'Guides' },
	hero: {
		kicker: 'IDP COMPANION GUIDE LIBRARY · 2026',
		title: 'Driving abroad — three long-form guides, one author, zero fluff',
		lead: 'Three pillar guides covering the practical, legal, and consequence layers of driving abroad with a foreign license in 2026. Written and fact-checked by Petr Shchepetin — every fine, statute reference, and incident cross-checked against the 35 country-pair pages on this site and the public sources cited at the bottom of each guide. Use whichever layer your question lands on; each guide stands alone and links forward where the question deepens.',
		authorBy: 'By',
		authorReviewedLabel: 'Library updated',
		authorReviewedDate: 'June 2026',
	},
	cardCta: 'Read guide',
	listLead: 'Three guides — read them in order or pick the one matching your stage. Each guide is fully self-contained.',
	bridge: {
		kicker: 'Looking for a specific country?',
		title: 'Destination pages — 35 countries with verified fines and rental policies',
		lead: 'The guides above cover the cross-country patterns. For a specific origin-destination pair (UK drivers in Italy, US drivers in Mexico, Russian drivers in Thailand, etc.) — the destination pages document the legal floor, the documented fines, and the rental-desk dynamic for that exact route.',
		cta: 'See all destinations',
	},
	author: {
		kicker: 'Behind the library',
		title: 'Petr Shchepetin — Co-founder & lead author',
		bio: 'Engineer-turned-traveller who spent too many hours at rental desks where the agent could not read his license. Writes every country-pair page and Tier 3 guide on this site, fact-checks every fine claim against public source, and keeps every dateModified honest.',
		cta: 'Read full author profile',
	},
	finalCta: {
		title: 'Ready to skip the four-week mail wait?',
		lead: 'Every guide above ends with the same conclusion: $35 IDP Companion in two minutes online is the fastest path to the same operational outcome as the government IDP at the rental desk in front of you.',
		button: 'Get IDP Companion — $35',
	},
	guides: [
		{
			num: '01',
			icon: 'ph:globe-bold',
			slug: 'driving-abroad-complete-guide-2026',
			title: 'Driving Abroad in 2026 — The Complete IDP Guide',
			lead: 'The pillar reference. Geneva 1949 vs Vienna 1968, which countries require an IDP, what insurance does when you skip it, and the three ways to get an IDP-class document before you fly.',
			meta: 'Pillar guide · Updated June 2026',
		},
		{
			num: '02',
			icon: 'ph:scales-bold',
			slug: 'idp-vs-idl-vs-ida-2026',
			title: 'IDP vs IDL vs IDA vs IAA — What\'s Real, What\'s Scam',
			lead: 'Disambiguation guide. Only three international driving documents are real (Geneva 1949, Vienna 1968, Inter-American 1943). Every IDL and IDA permit is a marketing rebrand or a scam. 30-second verification checklist + FTC-cited red flags.',
			meta: 'Disambiguation · Updated June 2026',
		},
		{
			num: '03',
			icon: 'ph:warning-octagon-bold',
			slug: 'drive-without-idp-2026',
			title: 'Driving Without an IDP — Real Cases, Real Fines',
			lead: 'Case-study guide. Eight documented foreign-driver incidents (2024-2026), $50–$2,566 documented penalty range, four escalation tiers, country-by-country fine table, and a five-step recovery guide if you are already caught.',
			meta: 'Case studies · Updated June 2026',
		},
	],
};

const ru: GuidesHubCopy = {
	seo: {
		title: 'Гайды IDP — Вождение за границей, разбор документов, реальные случаи (2026)',
		description: 'Три большие статьи о международных водительских правах: полный справочник по вождению за границей, разбор IDP/IDL/IDA/IAA, восемь задокументированных инцидентов 2024-2026.',
	},
	breadcrumb: { home: 'Главная', current: 'Гайды' },
	hero: {
		kicker: 'БИБЛИОТЕКА ГАЙДОВ IDP COMPANION · 2026',
		title: 'Вождение за границей — три больших гайда, один автор, без воды',
		lead: 'Три опорных гайда, покрывающие практический, юридический и последствийный слои поездки за границу с иностранными правами в 2026. Написано и проверено Петром Щепетиным — каждый штраф, статутная ссылка и инцидент сверены с 35 страницами по странам на этом сайте и публичными источниками внизу каждого гайда. Выбирайте слой, на котором стоит ваш вопрос; каждый гайд работает отдельно и ссылается дальше, когда вопрос углубляется.',
		authorBy: 'Автор',
		authorReviewedLabel: 'Библиотека обновлена',
		authorReviewedDate: 'июнь 2026',
	},
	cardCta: 'Читать гайд',
	listLead: 'Три гайда — читайте по порядку или выбирайте под свою стадию. Каждый гайд самодостаточен.',
	bridge: {
		kicker: 'Ищете конкретную страну?',
		title: 'Страницы по странам — 35 направлений с проверенными штрафами и политикой прокатов',
		lead: 'Гайды выше покрывают общие паттерны между странами. Для конкретной пары «откуда-куда» (россияне в Турцию, в Таиланд, в ОАЭ и т.п.) — страницы по странам документируют закон, задокументированные штрафы и динамику стойки проката для именно этого маршрута.',
		cta: 'Все направления',
	},
	author: {
		kicker: 'За библиотекой',
		title: 'Пётр Щепетин — со-основатель и ведущий автор',
		bio: 'Инженер, ставший путешественником и проводивший слишком много часов на стойках проката, где сотрудник не мог прочитать его права. Пишет каждую страницу по странам и каждый Tier 3 гайд на этом сайте, проверяет каждую цифру штрафа по публичным источникам и держит dateModified честным.',
		cta: 'Профиль автора',
	},
	finalCta: {
		title: 'Готовы пропустить четырёхнедельное ожидание почты?',
		lead: 'Каждый гайд выше заканчивается одним выводом: IDP Companion за $35 онлайн за две минуты — самый быстрый путь к тому же операционному результату, что и государственный IDP на стойке проката перед вами.',
		button: 'Оформить IDP Companion — $35',
	},
	guides: [
		{
			num: '01',
			icon: 'ph:globe-bold',
			slug: 'driving-abroad-complete-guide-2026',
			title: 'Вождение за границей в 2026 — полный гайд по IDP',
			lead: 'Опорный справочник. Женева 1949 vs Вена 1968, какие страны требуют IDP, что делает страховка при отказе и три способа получить документ IDP-класса до вылета.',
			meta: 'Опорный гайд · Обновлено в июне 2026',
		},
		{
			num: '02',
			icon: 'ph:scales-bold',
			slug: 'idp-vs-idl-vs-ida-2026',
			title: 'IDP vs IDL vs IDA vs IAA — что настоящее, что мошенничество',
			lead: 'Гайд по разбору. Только три международных водительских документа — настоящие (Женева 1949, Вена 1968, Межамериканская 1943). Каждый «IDL» и «IDA» — маркетинг или мошенничество. Чек-лист на 30 секунд + красные флаги от FTC.',
			meta: 'Разбор · Обновлено в июне 2026',
		},
		{
			num: '03',
			icon: 'ph:warning-octagon-bold',
			slug: 'drive-without-idp-2026',
			title: 'Ехать без IDP — реальные случаи и штрафы',
			lead: 'Гайд-разбор кейсов. Восемь задокументированных инцидентов с иностранными водителями (2024-2026), диапазон штрафов $50–$2 566, четыре уровня эскалации, таблица штрафов по странам и пятишаговый гайд по выживанию если уже поймали.',
			meta: 'Кейсы · Обновлено в июне 2026',
		},
	],
};

const es: GuidesHubCopy = {
	seo: {
		title: 'Guías PIC — Conducir en el extranjero, desambiguación, casos reales (2026)',
		description: 'Tres guías largas sobre el Permiso Internacional de Conducir: referencia completa de conducción en el extranjero, desambiguación PIC/IDL/IDA/IAA, ocho incidentes documentados 2024-2026.',
	},
	breadcrumb: { home: 'Inicio', current: 'Guías' },
	hero: {
		kicker: 'BIBLIOTECA DE GUÍAS IDP COMPANION · 2026',
		title: 'Conducir en el extranjero — tres guías largas, un autor, sin relleno',
		lead: 'Tres guías pilar que cubren la capa práctica, legal y de consecuencias de conducir en el extranjero con un permiso extranjero en 2026. Escritas y revisadas por Petr Shchepetin — cada multa, referencia estatutaria e incidente cruzados con las 35 páginas país-par en este sitio y las fuentes públicas citadas al final de cada guía. Usa la capa que coincida con tu pregunta; cada guía es independiente y enlaza hacia adelante cuando la pregunta se profundiza.',
		authorBy: 'Por',
		authorReviewedLabel: 'Biblioteca actualizada',
		authorReviewedDate: 'junio 2026',
	},
	cardCta: 'Leer guía',
	listLead: 'Tres guías — léelas en orden o elige la que coincida con tu etapa. Cada guía es totalmente autónoma.',
	bridge: {
		kicker: '¿Buscas un país específico?',
		title: 'Páginas de destino — 35 países con multas verificadas y políticas de alquiler',
		lead: 'Las guías arriba cubren los patrones entre países. Para un par origen-destino específico (conductores estadounidenses en México, británicos en Italia, etc.) — las páginas de destino documentan el piso legal, las multas documentadas y la dinámica del mostrador de alquiler para esa ruta exacta.',
		cta: 'Ver todos los destinos',
	},
	author: {
		kicker: 'Detrás de la biblioteca',
		title: 'Petr Shchepetin — cofundador y autor principal',
		bio: 'Ingeniero convertido en viajero que pasó demasiadas horas en mostradores de alquiler donde el agente no podía leer su permiso. Escribe cada página país-par y cada guía Tier 3 en este sitio, verifica cada cifra de multa contra fuente pública y mantiene dateModified honesto.',
		cta: 'Perfil completo del autor',
	},
	finalCta: {
		title: '¿Listo para saltarte la espera de cuatro semanas?',
		lead: 'Cada guía arriba termina con la misma conclusión: IDP Companion por $35 en dos minutos en línea es la vía más rápida al mismo resultado operativo que el PIC gubernamental en el mostrador de alquiler frente a ti.',
		button: 'Obtén IDP Companion — $35',
	},
	guides: [
		{
			num: '01',
			icon: 'ph:globe-bold',
			slug: 'driving-abroad-complete-guide-2026',
			title: 'Conducir en el extranjero en 2026 — La guía completa del PIC',
			lead: 'La referencia pilar. Ginebra 1949 vs Viena 1968, qué países exigen un PIC, qué hace el seguro cuando lo saltas y las tres formas de obtener un documento tipo PIC antes de volar.',
			meta: 'Guía pilar · Actualizado junio 2026',
		},
		{
			num: '02',
			icon: 'ph:scales-bold',
			slug: 'idp-vs-idl-vs-ida-2026',
			title: 'PIC vs IDL vs IDA vs IAA — qué es real y qué es fraude',
			lead: 'Guía de desambiguación. Solo tres documentos internacionales de conducir son reales (Ginebra 1949, Viena 1968, Interamericana 1943). Cada «IDL» e «IDA» es marketing o fraude. Lista de verificación de 30 segundos + señales de alerta de la FTC.',
			meta: 'Desambiguación · Actualizado junio 2026',
		},
		{
			num: '03',
			icon: 'ph:warning-octagon-bold',
			slug: 'drive-without-idp-2026',
			title: 'Conducir sin PIC — Casos reales, multas reales',
			lead: 'Guía de casos. Ocho incidentes documentados de conductores extranjeros (2024-2026), rango de multas $50–$2.566, cuatro niveles de escalada, tabla de multas país por país y una guía de cinco pasos de recuperación si ya te pillaron.',
			meta: 'Casos · Actualizado junio 2026',
		},
	],
};

const copyByLocale: Record<'en' | 'ru' | 'es', GuidesHubCopy> = { en, ru, es };

const { locale } = useI18n();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(runtimeConfig.public.siteUrl || 'https://www.idpcompanion.com').replace(/\/$/, '');
const appUrl = String(runtimeConfig.public.appUrl || 'https://app.idpcompanion.com').replace(/\/+$/, '');

const canonicalPath = '/guides/';
const localizedCanonicalPath = computed(() => String(localePath(canonicalPath)));
const canonicalUrl = computed(() => `${siteUrl}${localizedCanonicalPath.value}`);

const copy = computed<GuidesHubCopy>(() => {
	const direct = copyByLocale[locale.value as keyof typeof copyByLocale];
	return direct ?? copyByLocale.en;
});

const ogLocaleTag = computed(() => {
	switch (locale.value) {
		case 'ru': return 'ru_RU';
		case 'es': return 'es_ES';
		default: return 'en_US';
	}
});

useSeoMeta({
	title: () => copy.value.seo.title,
	description: () => copy.value.seo.description,
	ogTitle: () => copy.value.seo.title,
	ogDescription: () => copy.value.seo.description,
	ogUrl: () => canonicalUrl.value,
	ogType: 'website',
	ogSiteName: 'IDP Companion',
	ogLocale: () => ogLocaleTag.value,
	twitterCard: 'summary_large_image',
	twitterTitle: () => copy.value.seo.title,
	twitterDescription: () => copy.value.seo.description,
});

defineOgImageComponent('Generic', {
	title: 'IDP Companion Guide Library',
	subtitle: '3 long-form guides · 1 author · zero fluff',
});

const applyUrl = computed(() => `${appUrl}/apply?locale=${locale.value}&planYears=5`);

const guideUrl = (slug: string) => `${siteUrl}${localePath(`/guides/${slug}`)}`;

useHead(() => ({
	link: [{ rel: 'canonical', href: canonicalUrl.value }],
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'CollectionPage',
				'@id': `${canonicalUrl.value}#collectionpage`,
				url: canonicalUrl.value,
				name: copy.value.seo.title,
				description: copy.value.seo.description,
				inLanguage: locale.value,
				isPartOf: { '@id': `${siteUrl}/#website` },
				about: { '@id': `${siteUrl}/#organization` },
				datePublished,
				dateModified,
				author: { '@id': `${siteUrl}/authors/petr-shchepetin#person` },
				publisher: { '@id': `${siteUrl}/#organization` },
				breadcrumb: { '@id': `${canonicalUrl.value}#breadcrumb` },
				hasPart: copy.value.guides.map((g) => ({
					'@type': 'Article',
					name: g.title,
					url: guideUrl(g.slug),
				})),
			}),
		},
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'ItemList',
				'@id': `${canonicalUrl.value}#itemlist`,
				itemListOrder: 'https://schema.org/ItemListOrderAscending',
				numberOfItems: copy.value.guides.length,
				itemListElement: copy.value.guides.map((g, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					url: guideUrl(g.slug),
					name: g.title,
					description: g.lead,
				})),
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
				'@type': 'BreadcrumbList',
				'@id': `${canonicalUrl.value}#breadcrumb`,
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: copy.value.breadcrumb.home, item: siteUrl + '/' },
					{ '@type': 'ListItem', position: 2, name: copy.value.breadcrumb.current, item: canonicalUrl.value },
				],
			}),
		},
	],
}));
</script>

<template>
	<article class="guides-hub">
		<!-- Hero -->
		<section class="guides-hub__hero">
			<div class="container max-w-5xl">
				<Breadcrumbs :items="[{ label: copy.breadcrumb.home, to: '/' }, { label: copy.breadcrumb.current }]" />

				<p class="guides-hub__kicker">{{ copy.hero.kicker }}</p>
				<h1 class="guides-hub__h1">{{ copy.hero.title }}</h1>

				<AuthorByline
					author-name="Petr Shchepetin"
					profile-href="/authors/petr-shchepetin"
					:by-label="copy.hero.authorBy"
					:reviewed-label="copy.hero.authorReviewedLabel"
					:reviewed-date="copy.hero.authorReviewedDate"
				/>

				<p class="guides-hub__lead">{{ copy.hero.lead }}</p>
			</div>
		</section>

		<!-- 3 cards -->
		<section class="guides-hub__list">
			<div class="container max-w-6xl">
				<p class="guides-hub__list-lead">{{ copy.listLead }}</p>

				<div class="guides-grid">
					<NuxtLink
						v-for="g in copy.guides"
						:key="g.slug"
						:to="localePath(`/guides/${g.slug}`)"
						class="guide-card"
					>
						<div class="guide-card__head">
							<span class="guide-card__badge" aria-hidden="true">
								<Icon :icon="g.icon" width="22" />
							</span>
							<span class="guide-card__meta">
								<span class="guide-card__num">{{ g.num }}</span>
								<span class="guide-card__meta-dot" aria-hidden="true">·</span>
								{{ g.meta }}
							</span>
						</div>
						<h2 class="guide-card__title">{{ g.title }}</h2>
						<p class="guide-card__lead">{{ g.lead }}</p>
						<span class="guide-card__cta">
							{{ copy.cardCta }}
							<span aria-hidden="true">→</span>
						</span>
					</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Bridge to country pages -->
		<section class="guides-hub__bridge">
			<div class="container max-w-4xl">
				<div class="bridge-card">
					<p class="bridge-card__kicker">{{ copy.bridge.kicker }}</p>
					<h2 class="bridge-card__title">{{ copy.bridge.title }}</h2>
					<p class="bridge-card__lead">{{ copy.bridge.lead }}</p>
					<NuxtLink :to="localePath('/sitemap-page')" class="link-underline bridge-card__cta">
						{{ copy.bridge.cta }}
						<span aria-hidden="true">→</span>
					</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Author block -->
		<section class="guides-hub__author">
			<div class="container max-w-4xl">
				<NuxtLink :to="localePath('/authors/petr-shchepetin')" class="author-card">
					<p class="author-card__kicker">{{ copy.author.kicker }}</p>
					<h2 class="author-card__title">{{ copy.author.title }}</h2>
					<p class="author-card__bio">{{ copy.author.bio }}</p>
					<span class="link-underline author-card__cta">
						{{ copy.author.cta }}
						<span aria-hidden="true">→</span>
					</span>
				</NuxtLink>
			</div>
		</section>

		<!-- Final CTA -->
		<section class="guides-hub__cta">
			<div class="container max-w-4xl">
				<div class="finalcta">
					<h2 class="finalcta__title">{{ copy.finalCta.title }}</h2>
					<p class="finalcta__lead">{{ copy.finalCta.lead }}</p>
					<a :href="applyUrl" class="finalcta__button">{{ copy.finalCta.button }}</a>
				</div>
			</div>
		</section>
	</article>
</template>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

.guides-hub {
	min-height: 100vh;
	background: white;
	color: rgb(var(--c-slate-900));
}

/* Hero */
.guides-hub__hero {
	padding: 56px 0 48px;
	background: linear-gradient(180deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.15) 100%);

	@media (min-width: 768px) { padding: 76px 0 64px; }
}

.guides-hub__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 14px;
}
.guides-hub__h1 {
	font-size: clamp(1.875rem, 1.5rem + 1.5vw, 2.625rem);
	font-weight: 800;
	line-height: 1.15;
	letter-spacing: -0.01em;
	margin-bottom: 16px;
	overflow-wrap: anywhere;
}
.guides-hub__lead {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin: 14px 0 0;
	max-width: 56em;
}

/* List section */
.guides-hub__list {
	padding: 56px 0;
	background: white;

	@media (min-width: 768px) { padding: 72px 0; }
}
.guides-hub__list-lead {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-600));
	margin-bottom: 28px;
	max-width: 50em;
}

.guides-grid {
	display: grid;
	gap: 18px;
	grid-template-columns: 1fr;

	@media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
}

.guide-card {
	display: flex;
	flex-direction: column;
	padding: 28px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: $radius-2xl;
	box-shadow: $shadow-soft;
	text-decoration: none;
	color: inherit;
	transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;

	&:hover {
		transform: translateY(-3px);
		border-color: rgb(var(--c-sea));
		box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);

		.guide-card__cta { color: rgb(var(--c-sea)); gap: 8px; }
	}

	&:focus-visible {
		outline: 2px solid rgb(var(--c-sea));
		outline-offset: 2px;
	}
}

.guide-card__head {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
}

.guide-card__badge {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	background: rgba(var(--c-mint), 0.55);
	color: rgb(var(--c-sea));
	border-radius: 14px;
	flex-shrink: 0;
	transition: background 0.18s ease, color 0.18s ease;
}

.guide-card:hover .guide-card__badge {
	background: rgb(var(--c-sea));
	color: white;
}

.guide-card__meta {
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 5px;
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgb(var(--c-slate-500));
	text-align: right;
	justify-content: flex-end;
}

.guide-card__num {
	color: rgb(var(--c-sea));
	font-weight: 800;
}

.guide-card__meta-dot {
	color: rgb(var(--c-slate-300));
}

.guide-card__title {
	font-size: 18px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
	line-height: 1.3;
}

.guide-card__lead {
	font-size: 14px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
	margin-bottom: 22px;
	flex: 1;
}

.guide-card__cta {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	transition: color 0.18s ease, gap 0.18s ease;
}

/* Bridge */
.guides-hub__bridge {
	padding: 56px 0;
	background: rgba(var(--c-slate-50), 1);

	@media (min-width: 768px) { padding: 72px 0; }
}

.bridge-card {
	padding: 32px 28px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left: 4px solid rgb(var(--c-orange));
	border-radius: $radius-2xl;
	box-shadow: $shadow-soft;

	@media (min-width: 768px) { padding: 40px 44px; }
}

.bridge-card__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-orange));
	margin-bottom: 8px;
}

.bridge-card__title {
	font-size: clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem);
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
	line-height: 1.25;
}

.bridge-card__lead {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin-bottom: 18px;
}

.bridge-card__cta {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}

/* Author */
.guides-hub__author {
	padding: 56px 0;
	background: white;

	@media (min-width: 768px) { padding: 72px 0; }
}

.author-card {
	display: block;
	padding: 32px 28px;
	background: rgba(var(--c-mint), 0.18);
	border: 1px solid rgba(var(--c-sea), 0.18);
	border-radius: $radius-2xl;
	text-decoration: none;
	color: inherit;
	transition: background 0.18s ease, border-color 0.18s ease;

	@media (min-width: 768px) { padding: 40px 44px; }

	&:hover {
		background: rgba(var(--c-mint), 0.3);
		border-color: rgba(var(--c-sea), 0.35);
	}
}

.author-card__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 8px;
}

.author-card__title {
	font-size: clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem);
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 12px;
	line-height: 1.25;
}

.author-card__bio {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin-bottom: 18px;
}

.author-card__cta {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 14px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
}

/* Final CTA */
.guides-hub__cta {
	padding: 64px 0;
	background: linear-gradient(180deg, white 0%, rgba(var(--c-mint), 0.3) 100%);

	@media (min-width: 768px) { padding: 88px 0; }
}

.finalcta {
	padding: 40px 28px;
	background: white;
	border: 1px solid rgba(var(--c-sea), 0.18);
	border-radius: $radius-2xl;
	box-shadow: $shadow-soft;
	text-align: center;

	@media (min-width: 768px) { padding: 52px 56px; }
}

.finalcta__title {
	font-size: clamp(1.5rem, 1.3rem + 0.8vw, 2rem);
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	margin-bottom: 14px;
	line-height: 1.2;
}

.finalcta__lead {
	font-size: 15px;
	line-height: 1.7;
	color: rgb(var(--c-slate-700));
	max-width: 44em;
	margin: 0 auto 24px;
}

.finalcta__button {
	display: inline-flex;
	align-items: center;
	padding: 14px 32px;
	background: rgb(var(--c-orange));
	color: white;
	font-size: 15px;
	font-weight: 800;
	border-radius: 999px;
	text-decoration: none;
	transition: background-color 0.15s ease, transform 0.15s ease;

	&:hover { background: #e88a14; transform: translateY(-1px); }
}
</style>
