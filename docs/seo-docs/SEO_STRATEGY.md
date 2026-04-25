# IDP Companion — SEO Strategy & Execution Plan

> **Документ для Claude Code и команды.** Цель — выполнимый план за 3 месяца с конкретными задачами, шаблонами, промптами и списком 500 страниц для генерации.

**Последнее обновление:** 25.04.2026 (статус Phase 0 пересмотрен)
**Owner:** Пётр
**Stack:** Nuxt 4 / Vue 3 / TypeScript / NestJS / Pinia / Tailwind v4 / FSD / PostgreSQL / Prisma
**Hosting:** Cloudflare (landing — статика через `nuxt generate`, backend — Railway)
**Analytics:** PostHog Cloud (EU) — wired ✓ / Google Search Console — pending
**Domain:** idpcompanion.com (домен <1 года, не имеет authority)

---

## 0. Executive Summary

**Цель:** 2000–5000 органических визитов/день к месяцу 10–12, $25–55k чистыми/мес.

**Подход:** 3 фазы за 6 месяцев. Tiered content: 50 флагманских → 500 pSEO → опционально 2000–3000.

**Бюджет:** 260–350 часов суммарно. ~10ч/неделя на одного человека.

**Конкурентное преимущество:** скорость (мгновенная цифровая выдача), цена ниже IDA, честное позиционирование (translation companion, не fake IDP).

**Главный риск:** платёжные процессоры (нужен backup), Google HCU банит scaled content без unique data.

---

## 1. Контекст продукта

### Что мы продаём

**IDP Companion** — цифровой PDF-документ с многоязычным представлением данных водительских прав. Используется ВМЕСТЕ с оригинальными правами при поездках за границу.

**Тарифы:**
- $35 — 1 год валидности
- $45 — 3 года валидности
- $55 — 5 лет валидности

**Value prop:**
- Мгновенная цифровая выдача (не нужно ждать почту)
- Многоязычный перевод данных под аренду авто и проверки
- Честное позиционирование (не выдаёт себя за government IDP)
- Без подписок, разовая покупка
- Цена ниже основных конкурентов (IDA: $49–79)

### Кто наш клиент (ICP)

- Путешественники и экспаты, которые в ближайшие дни/недели собираются водить или арендовать авто за границей
- Люди с правами не на латинице (кириллица, арабский, иероглифы)
- Last-minute аудитория: нужен результат быстро, без подписок
- Каналы: SEO (long-term), Reddit/Pikabu (short-term)

### Текущая стадия

- MVP / ранний прод
- ssr включён 2 недели назад (до этого Google не видел контент)
- 0 SEO контента
- ~0 backlinks
- 0 покупок (что нормально для текущей стадии)
- Cloudflare Analytics показывает 436 visitors/нед — это шум, реальные люди ~5–15

---

## 2. Анализ конкурентов

### Карта рынка (3 ценовых сегмента)

| Сегмент | Конкурент | 1 год | 3 года | 5 лет | Стратегия |
|---|---|---|---|---|---|
| Premium | **IDA** (internationaldriversassociation.com) | $49 (Digital) / $79 (Print+Digital 3y) | $79 | none | Market leader. Apple/Google Wallet. 24/7 chat. 1M+ travelers claim. Trustpilot 3000+ reviews |
| Mid | **International-Permit** | $40 | $50 | $70 | Единственный с 5-year. Слабый SEO |
| Mid | **IDA** (legacy pricing) | $40 | $50 | none | Apple/Google Wallet интеграция |
| Budget | **IDLP.org** | $30 | $40 | none | Дампинг. Низкий вход для привлечения |
| **МЫ** | **IDP Companion** | **$35** | **$45** | **$55** | Лучшая цена + единственные с 5-year + честное позиционирование |

### Структура IDA (главный target)

**Их URL pattern:**
- `/international-drivers-license-{country}/` — country pages (~165 страниц)
- `/pricing/`, `/countries/`, `/why-do-i-need-an-idl/`, `/guarantees/`, `/faq/`
- `/international-driving-guides/` — гайды
- `/blog/` — блог
- `/customer-service/`, `/affiliates/`, `/agent/`

**Их сильные стороны (что копировать):**
1. Trust signals везде — Trustpilot widget, partner logos (Hertz, Avis, Sixt, Enterprise, Budget)
2. Money-back guarantee с конкретной формулировкой "no questions asked"
3. Quiz "Do I need IDP?" как lead magnet
4. Multi-currency support (USD, EUR, GBP, INR, AED, JPY...)
5. Multi-language UI (32 языка!)
6. Real-time customer reviews по странам с флагами
7. "Apply in 8 minutes" — конкретное время как hook
8. FAQ с раскрытыми блоками (хорошая SEO + UX)
9. Country-specific limitations (Thailand, UAE, Spain — где digital не принимают)
10. Affiliate + Agent program

**Их слабые стороны (где обходим):**
1. Цена выше — у нас ниже на $5–35 за тариф
2. UX перегружен — 5 раз повторяющиеся carousels с logos
3. Нет 5-year tier (мы это используем)
4. Дисклеймер о том что они не AAA — мелким текстом в футере (мы делаем upfront)
5. Нет country-pair страниц (только destination) — мы делаем по парам
6. Нет данных по штрафам за вождение без IDP — мы делаем
7. Нет калькулятора стоимости + сроков для конкретной поездки

### AAA / AATA (legacy конкуренты)

- **AAA**: $20–25, mail-only, 4 weeks delivery, only US licenses. Их TG — путешественники у которых много времени.
- **AATA**: $25, online application, 1–4 days. Тоже только US.
- **Не наши конкуренты в SEO** — они не делают content marketing. Их трафик из brand search.

### Ключевой инсайт

Реальный конкурент в SEO — это **IDA**. У них ~1500 страниц контента, доминирование в `international driving permit [country]` SERPs.

**Наш подход:** не пытаться обогнать их по объёму. Делать **более глубокие** страницы по country-pair (driver's origin × destination) которых у них вообще нет, плюс реальные данные о штрафах и legal cases.

---

## 3. Content Strategy

### Принцип: Unique data per page

Каждая страница должна давать что-то, чего нет у IDA:

1. **Country-pair specifics** — IDA делает только destination pages. Мы делаем `IDP for [origin] drivers in [destination]`. Это в 10 раз больше long-tail возможностей.
2. **Real fines data** — конкретные штрафы за вождение без IDP по странам (с источниками)
3. **Rental car requirements** — что требуют Hertz/Avis/Sixt в конкретной стране
4. **Legal cases** — реальные кейсы из новостей, что было с туристами без IDP
5. **Calculator widget** — стоимость поездки + сроки IDP под её даты

### Tiered подход — три уровня контента

#### Tier 1: Flagship pages (50 страниц)

Топ-50 country-pair: топ-выездных стран × топ-туристических направлений.

**Структура (1500–2500 слов):**
1. Hero: "Do you need IDP if you're a [origin] driver in [destination]?"
2. Quick answer block (yes/no с иконкой)
3. Local rules для destination (lane, speed limits, drinking limit)
4. **Fines table** — конкретные суммы за нарушения
5. Why your [origin] license isn't enough
6. How to get IDP companion (sales pitch)
7. Rental car partner requirements (Hertz/Avis/Sixt по этой стране)
8. FAQ (8–12 вопросов)
9. Schema.org: TravelAction, FAQPage, Product
10. CTA + affiliate rental car block

**Качество:** human-written или Claude-generated с обязательным human review.

#### Tier 2: Programmatic SEO (450 страниц)

Расширение тех же country-pair, но больше комбинаций. Шаблон + data-driven генерация.

**Структура (800–1500 слов):**
1. Hero (template-driven)
2. Quick answer
3. Local rules (из data source)
4. Fines summary
5. CTA блок
6. Related pages (auto-generated internal links)
7. FAQ (4–6 вопросов из template)

**Качество:** Claude-generated через Claude Code. Human review на 10% выборке.

#### Tier 3: Long-form authority content (3 страницы)

Magnets для бэклинков, ranking по высокочастоткам.

1. **"Complete Guide to Driving Abroad in 2026"** — 5000+ слов, all destinations
2. **"IDP vs IDL vs National License: Legal Truth Explained"** — debunking, comparison
3. **"What Happens If You Drive Without IDP: Real Cases by Country"** — documented cases

**Качество:** human-written с моей помощью в чате, не через Claude Code.

#### Tier 4 (опционально): Информационные гайды

- Pricing comparison page (мы vs IDA vs AAA vs IDLP)
- Country requirements list (как у IDA, но с фокусом на легальность)
- Refund policy page
- About / mission

---

## 4. URL Architecture

### Финальный URL pattern

**Country-pair (Tier 1 + 2):**
```
/idp-for-{origin-country-slug}-drivers-in-{destination-country-slug}/

Examples:
/idp-for-russian-drivers-in-thailand/
/idp-for-us-drivers-in-italy/
/idp-for-indian-drivers-in-uae/
```

**Destination-only (если нужно для покрытия):**
```
/driving-in-{country-slug}/
/driving-in-thailand/
```

**Long-form gудеs:**
```
/guides/driving-abroad-complete-guide-2026/
/guides/idp-vs-idl-vs-license/
/guides/driving-without-idp-real-cases/
```

**Pricing & info:**
```
/pricing/
/countries/
/faq/
/about/
/refund/
```

### Hreflang / multilingual

**Phase 1:** только English. Это покрывает топ-90% выездного трафика и упрощает QA.

**Phase 2 (после месяца 4):** добавить Russian (`/ru/`) для русскоязычных экспатов и стран СНГ. Русские = твоя target group.

**Phase 3 (опционально):** Spanish, German.

---

## 5. Technical Foundation Tasks (Phase 0)

> **Без этих задач весь остальной план мёртвый. Сделать в первые 1–2 недели.**

### Что уже реально есть в коде (на 25.04.2026)

| Задача | Статус | Где |
|---|---|---|
| SSR + `nuxt generate` (статика на Cloudflare) | ✅ | [apps/landing/package.json](apps/landing/package.json) `build: nuxt generate` |
| `@nuxtjs/sitemap` подключён, генерирует `sitemap_index.xml` | ✅ | [apps/landing/nuxt.config.ts:42-63](apps/landing/nuxt.config.ts#L42-L63) |
| `robots.txt` с allow + ссылкой на sitemap | ✅ | [apps/landing/public/robots.txt](apps/landing/public/robots.txt) |
| `@nuxtjs/i18n` с hreflang (en/ru/es) | ✅ | [apps/landing/app.vue:55-60](apps/landing/app.vue#L55-L60) |
| `useSeoMeta` (title, description, canonical) на index + legal | ✅ | [apps/landing/pages/index.vue:462](apps/landing/pages/index.vue#L462) |
| OG / Twitter Cards (полный набор: image:width/height/type/alt) | ✅ | После фикса 25.04 — на всех 4 страницах |
| JSON-LD: `Organization` + `WebSite` + `SoftwareApplication` + `FAQPage` | ✅ | [apps/landing/pages/index.vue:484-543](apps/landing/pages/index.vue#L484-L543) |
| PostHog wired | ✅ | [apps/landing/plugins/posthog.client.ts](apps/landing/plugins/posthog.client.ts) |
| **Google Search Console verified + sitemap submitted** | ❌ | Pending — see runbook |
| **Bing Webmaster Tools** | ❌ | Pending |
| **Cloudflare bot policy verified (Googlebot/Telegrambot reach origin)** | ⚠️ | Bot Fight Mode статус неизвестен |
| **routeRules + prerender explicit config** | ⚠️ | `nuxt generate` статикует всё по умолчанию — `routeRules` нужен только для динамики |
| `BreadcrumbList` schema (для country pages) | ❌ | Появится с шаблоном `[origin]-[destination].vue` |
| Per-page OG image (генерация под пары стран) | ❌ | Phase 1 |
| `/pricing`, `/faq`, `/about`, `/countries` как **отдельные** страницы | ❌ | Сейчас всё якоря на index — теряем 4 индексируемых URL |

**Вывод:** Phase 0 ~70% готова. Из 9 задач из оригинального списка реально открыты 0.6 (per-page OG image), 0.7 (GSC + Bing), 0.8 (canonical для будущих pages), 0.9 (hreflang infra — есть, но проверить корректность для `/ru/...`). Большой отдельный блок — **standalone supporting pages** (pricing/faq/about/countries).

### Задачи Claude Code (оригинальный список — чек-лист на дополнения)

```
Задача 0.1: routeRules + prerender (4ч)
- В nuxt.config.ts настроить routeRules
- Все статические страницы (/, /pricing, /faq, /idp-for-*) → prerender: true
- Динамические (/account, /checkout) → ssr: true (без prerender)
- Verify: curl -A "Googlebot" idpcompanion.com возвращает полный HTML

Задача 0.2: Dynamic sitemap.xml (3ч)
- Module: @nuxtjs/sitemap
- Auto-generate из всех prerendered routes
- Priority: главная 1.0, country-pages 0.8, blog 0.6
- changefreq: weekly для country pages, monthly для гайдов

Задача 0.3: robots.txt (1ч)
- Allow всё кроме /account, /checkout, /api
- Sitemap: https://idpcompanion.com/sitemap.xml
- Block для AhrefsBot, SemrushBot если bandwidth важен (опционально)

Задача 0.4: Schema.org (4ч)
- Главная: Organization + Product
- /pricing: Product с offers (3 тарифа)
- Country pages: TravelAction + FAQPage + BreadcrumbList
- Long-form: Article + Author + Publisher
- Использовать @nuxtjs/schema-org или вручную через useHead

Задача 0.5: Open Graph + Twitter Cards (2ч)
- Каждая страница должна иметь:
  - og:title, og:description, og:image, og:url, og:type
  - twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image
- Создать default og:image (1200x630) для брендирования

Задача 0.6: Core Web Vitals audit (2ч)
- npx unlighthouse --site idpcompanion.com
- Цель: LCP <2.5s, CLS <0.1, INP <200ms
- Vercel + Nuxt должно дать 90+ из коробки

Задача 0.7: Google Search Console + Bing Webmaster Tools (1ч)
- Verify домен через DNS TXT record
- Submit sitemap.xml
- Bing — то же самое, ~5% трафика бесплатно

Задача 0.8: Canonical URLs (1ч)
- useHead({ link: [{ rel: 'canonical', href: ... }] }) на каждой странице
- Особенно важно если будут pagination, filtered views

Задача 0.9: hreflang (2ч)
- Подготовить инфраструктуру (даже если пока только EN)
- <link rel="alternate" hreflang="x-default" href="...">
- В Phase 2 добавим RU
```

**Acceptance criteria для Phase 0:**
- [ ] GSC показывает 0 ошибок индексации
- [ ] PageSpeed Insights ≥ 90 mobile
- [ ] Rich Results Test валидирует все типы schema
- [ ] curl -A "Googlebot" возвращает полный HTML с meta tags
- [ ] sitemap.xml содержит все статические страницы
- [ ] PostHog tracking работает на лендинге и checkout

---

## 6. Page Template для country-pair (для Claude Code)

### Файловая структура

```
content/
├── countries/
│   ├── data.json              # источник правды (см. ниже)
│   ├── pairs.json             # 500 пар стран с метаданными
│   └── overrides/             # ручные правки для top-50
│       ├── russia-thailand.md
│       └── ...
pages/
├── idp-for-[origin]-drivers-in-[destination].vue
└── ...
components/
├── seo/
│   ├── CountryPairPage.vue    # шаблон
│   ├── FinesTable.vue
│   ├── LocalRules.vue
│   ├── FAQAccordion.vue
│   └── RelatedPages.vue
```

### Vue template skeleton

```vue
<!-- pages/idp-for-[origin]-drivers-in-[destination].vue -->
<script setup lang="ts">
const route = useRoute()
const { origin, destination } = route.params

// Загружаем data из JSON (build-time)
const pairData = await $fetch(`/api/country-pair/${origin}/${destination}`)

// SEO
useSeoMeta({
  title: pairData.title,
  description: pairData.metaDescription,
  ogTitle: pairData.title,
  ogDescription: pairData.metaDescription,
  ogImage: `/og-images/${origin}-${destination}.png`,
})

useSchemaOrg([
  defineFAQPage({ mainEntity: pairData.faq }),
  defineBreadcrumb([...]),
  defineProduct({...})
])
</script>

<template>
  <article>
    <CountryPairHero :data="pairData" />
    <QuickAnswer :need-idp="pairData.idpRequired" />
    <LocalRules :rules="pairData.rules" />
    <FinesTable :fines="pairData.fines" />
    <WhyLicenseInsufficient :origin="origin" />
    <ProductPitch />
    <RentalRequirements :country="destination" :partners="pairData.partners" />
    <FAQAccordion :items="pairData.faq" />
    <CTABlock />
    <AffiliateBlock :country="destination" />
    <RelatedPages :current="`${origin}-${destination}`" />
  </article>
</template>
```

### Data structure (countries/data.json)

```json
{
  "countries": {
    "thailand": {
      "name": "Thailand",
      "slug": "thailand",
      "drivingSide": "left",
      "currency": "THB",
      "speedLimits": {
        "urban": 50,
        "rural": 90,
        "highway": 120,
        "unit": "km/h"
      },
      "alcoholLimit": 0.05,
      "idpRequired": true,
      "idpType": "1949 Geneva",
      "fines": [
        {
          "violation": "Driving without IDP",
          "amountUSD": 30,
          "amountLocal": "1000 THB",
          "source": "https://..."
        },
        {
          "violation": "Speeding",
          "amountUSD": 15,
          "amountLocal": "500 THB"
        }
      ],
      "rentalPartners": ["Hertz", "Avis", "Sixt", "Budget"],
      "limitations": "Digital IDP not accepted. Printed only.",
      "popularity": 95
    },
    "russia": {...},
    "us": {...},
    ...
  }
}
```

### Promпт для Claude Code (генерация контента)

```
Generate a country-pair SEO page for IDP Companion.

INPUT:
- Origin country: {origin_name} ({origin_slug})
- Destination country: {destination_name} ({destination_slug})
- Country data: {paste JSON for both countries}
- Target word count: 1200–1800 words for Tier 2, 1800–2500 for Tier 1

REQUIREMENTS:

Title (H1):
"International Driving Permit (IDP) for {origin_name} Drivers in {destination_name}: 2026 Guide"

Meta description (155 chars max):
"{origin_name} driving in {destination_name}? Get your IDP Companion in minutes. Avoid {fine_amount} fines. Accepted at Hertz, Avis. Valid 1-5 years."

Sections (in order):
1. Hero (50–80 words)
   - State the problem clearly
   - Hook with specific fine amount or risk
   - CTA above the fold

2. Quick Answer Block (30–50 words)
   - "Yes/No, you need IDP if..."
   - Visual: green check or red X
   - Backed by source citation

3. Driving Rules in {destination_name} (200–300 words)
   - Side of road
   - Speed limits with numbers
   - Alcohol limit
   - Phone use laws
   - Seatbelt rules
   - Right turn on red
   - All numbers MUST be from country data, no hallucination

4. Fines Table (table block, 100 words context)
   - Driving without IDP: $X
   - Speeding: $X
   - DUI: $X
   - Phone use: $X
   - Source link

5. Why your {origin_name} license isn't enough (200–300 words)
   - Specifics: alphabet (Cyrillic/Arabic/Latin), translation requirements
   - Convention reference (1949 Geneva or 1968 Vienna)
   - Real risk: rental car refusal at desk, police fine, insurance void

6. How IDP Companion solves this (150–200 words)
   - Translation of license data into multiple languages
   - Digital download in minutes (vs weeks with AAA/AATA)
   - Pricing: $35/$45/$55 for 1/3/5 years
   - Disclaimer: companion document, NOT government-issued IDP
   - CTA button

7. Rental Car Requirements in {destination_name} (150–200 words)
   - What Hertz/Avis/Sixt require specifically in this country
   - Age requirements
   - Insurance considerations
   - Mention partner if affiliate active

8. FAQ (8–12 questions, each 30–60 words)
   - "Do I really need IDP if I'm only renting a car for a day?"
   - "Can I get IDP after I arrive in {destination_name}?"
   - "Is IDP Companion the same as the AAA IDP?"
   - "What if my license is in {origin_alphabet}?"
   - "How long is IDP valid?"
   - "What happens if I drive without IDP and get stopped?"
   - "Does {destination_name} accept digital IDP?"
   - + 1–5 country-specific questions

9. Internal links (3–5 related)
   - Other destinations from same origin
   - Same destination from other origins
   - Relevant long-form guides

CONSTRAINTS:
- NO hallucinated facts. If data isn't in country JSON, write generic safe statement.
- NO direct quotes from competitors or government sites longer than 10 words.
- HONEST positioning: "IDP Companion is a translation document, NOT a government-issued IDP. Use alongside your original license."
- All fines, speed limits, alcohol limits MUST be from country data JSON.
- Include 1–2 internal links per 500 words.
- 1 H1, multiple H2s, H3s as needed.
- Use bold for key terms ONCE per term, not repeatedly.

OUTPUT FORMAT:
Single .md file at content/pages/idp-for-{origin_slug}-drivers-in-{destination_slug}.md
With frontmatter:
---
title: "..."
description: "..."
origin: "{origin_slug}"
destination: "{destination_slug}"
publishedAt: "2026-..."
tier: 1 | 2
---
{markdown content}
```

---

## 7. Список 500 страниц (URL + краткое описание)

### Методология выбора

**Топ-25 origin countries** (по объёму outbound tourism + размеру рынка):
US, UK, Germany, France, Russia, India, China, Brazil, Japan, Canada, Australia, Mexico, Italy, Spain, Netherlands, South Korea, Sweden, Poland, Turkey, Saudi Arabia, UAE, Singapore, South Africa, Argentina, Indonesia.

**Топ-30 destination countries** (по объёму inbound tourism + IDP-required):
Thailand, Italy, Spain, France, Greece, Turkey, Mexico, UAE, Egypt, Indonesia, Vietnam, Portugal, Croatia, Morocco, Cyprus, Malta, Costa Rica, Dominican Republic, South Africa, Australia, New Zealand, Iceland, Ireland, UK, Germany, Switzerland, Austria, Norway, Japan, Sri Lanka.

**Combinatorics:** 25 × 30 = 750 пар, отбираем топ-500 по реальному search volume и логичности (например, Mexicans → Mexico исключаем).

### Tier 1: Flagship 50 (приоритет — делать первыми)

Эти 50 пар покрывают ~70% реального трафика по country-pair запросам. Делать руками или с моей помощью в чате (Tier 1 quality).

```
US drivers:
  /idp-for-us-drivers-in-italy/
  /idp-for-us-drivers-in-thailand/
  /idp-for-us-drivers-in-mexico/
  /idp-for-us-drivers-in-greece/
  /idp-for-us-drivers-in-japan/
  /idp-for-us-drivers-in-spain/
  /idp-for-us-drivers-in-france/
  /idp-for-us-drivers-in-uae/
  /idp-for-us-drivers-in-costa-rica/
  /idp-for-us-drivers-in-iceland/

UK drivers:
  /idp-for-uk-drivers-in-thailand/
  /idp-for-uk-drivers-in-spain/
  /idp-for-uk-drivers-in-greece/
  /idp-for-uk-drivers-in-cyprus/
  /idp-for-uk-drivers-in-uae/
  /idp-for-uk-drivers-in-australia/
  /idp-for-uk-drivers-in-portugal/
  /idp-for-uk-drivers-in-morocco/

Russian drivers (важно — non-Latin alphabet, реальный pain):
  /idp-for-russian-drivers-in-thailand/
  /idp-for-russian-drivers-in-turkey/
  /idp-for-russian-drivers-in-uae/
  /idp-for-russian-drivers-in-egypt/
  /idp-for-russian-drivers-in-indonesia/
  /idp-for-russian-drivers-in-greece/
  /idp-for-russian-drivers-in-cyprus/
  /idp-for-russian-drivers-in-italy/

Indian drivers (огромный outbound, большой ICP):
  /idp-for-indian-drivers-in-uae/
  /idp-for-indian-drivers-in-thailand/
  /idp-for-indian-drivers-in-singapore/
  /idp-for-indian-drivers-in-australia/
  /idp-for-indian-drivers-in-italy/
  /idp-for-indian-drivers-in-greece/

German drivers:
  /idp-for-german-drivers-in-thailand/
  /idp-for-german-drivers-in-egypt/
  /idp-for-german-drivers-in-morocco/
  /idp-for-german-drivers-in-indonesia/
  /idp-for-german-drivers-in-sri-lanka/

Brazilian drivers:
  /idp-for-brazilian-drivers-in-italy/
  /idp-for-brazilian-drivers-in-portugal/
  /idp-for-brazilian-drivers-in-spain/

Chinese drivers:
  /idp-for-chinese-drivers-in-thailand/
  /idp-for-chinese-drivers-in-indonesia/
  /idp-for-chinese-drivers-in-japan/

Mixed (high-value combinations):
  /idp-for-canadian-drivers-in-mexico/
  /idp-for-canadian-drivers-in-italy/
  /idp-for-australian-drivers-in-thailand/
  /idp-for-australian-drivers-in-bali/
  /idp-for-japanese-drivers-in-italy/
  /idp-for-french-drivers-in-morocco/
  /idp-for-italian-drivers-in-greece/
  /idp-for-spanish-drivers-in-portugal/
  /idp-for-dutch-drivers-in-greece/
  /idp-for-saudi-drivers-in-uae/
  /idp-for-uae-drivers-in-georgia/
  /idp-for-singaporean-drivers-in-thailand/
```

### Tier 2: Programmatic 450

Все остальные комбинации. Распишу по матрице (origin × destination) — полный список будет сгенерирован скриптом из data.json.

**Matrix-based generation:**
```typescript
// scripts/generate-pairs.ts
const origins = [...25 countries]
const destinations = [...30 countries]

const pairs = []
for (const origin of origins) {
  for (const dest of destinations) {
    if (origin.slug === dest.slug) continue // skip same country
    if (excluded.has(`${origin.slug}-${dest.slug}`)) continue

    pairs.push({
      origin: origin.slug,
      destination: dest.slug,
      tier: tier1.includes(`${origin.slug}-${dest.slug}`) ? 1 : 2,
      url: `/idp-for-${origin.slug}-drivers-in-${dest.slug}/`,
      // ...
    })
  }
}
// Output: pairs.json
```

**Excluded comрозиции (where IDP not needed):**
- EU → EU (within Schengen)
- US → Canada, US → Mexico (no IDP required for short stays)
- Australia → New Zealand
- Schengen internals

**Топ-30 запасных, если основные не покрыли:**
Японцы в Корею, корейцы в Японию, аргентинцы в Бразилию и т.д.

### Tier 3: Long-form (3 страницы)

```
/guides/driving-abroad-complete-guide-2026/
  - 5000+ слов
  - Все ключевые destinations summary
  - When you need IDP / when not
  - How to apply
  - Pricing comparison (us, IDA, AAA)
  - Магнит для бэклинков

/guides/idp-vs-idl-vs-license/
  - 3000+ слов
  - Юридическая разница
  - 1949 vs 1968 conventions
  - Что требуют разные страны
  - Why "international driver's license" не существует юридически

/guides/driving-without-idp-real-cases/
  - 3000+ слов
  - Реальные кейсы из новостей
  - Штрафы, аресты, страховка void
  - Country-by-country
```

---

## 8. Внутренняя перелинковка

### Принципы

1. **Каждая country-pair ссылается на:**
   - 3 других destinations с того же origin (`/idp-for-russian-drivers-in-thailand/` → ссылка на UAE, Egypt, Turkey)
   - 2 других origins с того же destination (`/idp-for-russian-drivers-in-thailand/` → US drivers in Thailand, German drivers in Thailand)
   - 1 long-form guide

2. **Long-form guides ссылаются на топ-20 country-pairs** в качестве примеров

3. **Главная и /pricing** ссылаются на топ-10 country-pairs как featured

4. **Auto-generation:** через семантическую близость (countries в похожих регионах) или topic clustering

### Implementation

```typescript
// composables/useRelatedPages.ts
export function getRelatedPages(currentPair: string) {
  const [origin, destination] = currentPair.split('-')

  return [
    // Same origin, different destinations
    ...getTopDestinations(origin, 3, exclude: destination),
    // Same destination, different origins
    ...getTopOrigins(destination, 2, exclude: origin),
    // Featured guide
    getRelevantGuide(origin, destination),
  ]
}
```

---

## 9. Команда — кто что делает

### Распределение задач (рекомендую vs не рекомендую)

#### ❌ НЕ РЕКОМЕНДУЮ: раздать 125 страниц на каждого из 4-х

**Проблемы:**
- 4 разных Claude инстанса → 4 разных стиля
- Координация дороже работы
- QA становится узким местом
- Безопасность данных (доступы, API ключи)

#### ✅ РЕКОМЕНДУЮ: разделение по компетенциям

**Пётр (ты):**
- Phase 0 техническая инфраструктура (через Claude Code)
- 50 Tier-1 страниц через Claude Code + ручная финальная правка
- 3 long-form гайда (через Claude в чате со мной)
- Лендинг копирайтинг
- Запуск pSEO pipeline для Tier 2
- ~120ч за 6 месяцев

**Брат:**
- RankRocket подключение
- Мониторинг GSC, индексации
- Data sources для уникальности pages (если идём в Tier 4 — реальные API штрафов, погоды, цен аренды)
- Если Tier 4 — расширение data pipeline под real-time данные
- ~60ч

**Рома (frontend senior):**
- Vue/Nuxt компоненты для шаблона страницы
- Schema.org integration
- Performance optimization
- Если занят — делегировать инфру боту RankRocket
- ~40ч

**Саня (sales, native English):**
- Финальный review всех 50 Tier-1 страниц на грамматику и legal accuracy
- Affiliate outreach (TravelPayouts, DiscoverCars, AwinNetwork)
- Guest post pitching на travel-блогах
- ~30ч

**Итого по команде:** ~250ч за 6 мес. Это укладывается в общий бюджет.

### Альтернативный сценарий — если хотите параллелить генерацию

**Только для Tier 2:**
- Разделить 450 страниц на 3 batches (по 150)
- Каждый человек делает batch через Claude Code с **одним общим промптом**
- ОБЯЗАТЕЛЬНО: один человек на финальный merge + QA
- Финальный QA — обязательно один человек, иначе стиль разъедется

---

## 10. Claude Code vs Claude в чате — финальный workflow

### Claude Code (инфра + Tier 2 batch генерация)

```
Что делать в Claude Code:
├── Phase 0 tasks (роутинг, sitemap, schema, OG)
├── Шаблон CountryPairPage.vue + sub-components
├── Data pipeline: countries/data.json + scripts/generate-pairs.ts
├── Batch генерация Tier 2 (450 страниц через промпт из секции 6)
├── Internal linking автоматизация
├── Affiliate block integration
├── PostHog setup
├── GSC API integration (мониторинг impressions)
```

### Claude в чате со мной (стратегия + Tier 1/3)

```
Что делать со мной:
├── 50 Tier-1 страниц (по 1–2 на сессию, я пишу контент, ты правишь)
├── 3 long-form гайда (extended sessions)
├── Лендинг копирайтинг — value prop, headlines, CTA
├── Pricing page копирайтинг
├── FAQ для главного flow
├── Email шаблоны (transactional + marketing)
├── Reddit / social posts
├── Стратегические решения когда что-то ломается
```

### Workflow для Tier 2 batch

```
Шаг 1 (тебе):
- В Claude Code запустить: claude code generate-tier2 --batch 1-50
- Скрипт читает pairs.json[0:50]
- Для каждого вызывает API Claude с промптом из секции 6
- Сохраняет в content/pages/{slug}.md

Шаг 2 (тебе):
- Spot-check 5 случайных страниц из batch
- Если квалити OK → следующий batch
- Если плохо → tweak промпта → re-run

Шаг 3 (Саня):
- Review топ-20 страниц на грамматику
- Flag common issues
- Ты обновляешь промпт под фидбек

Шаг 4 (Claude Code):
- Build → prerender → deploy
- Submit sitemap в GSC

Шаг 5 (постоянный):
- Раз в неделю — GSC мониторинг
- Какие страницы получают impressions, какие нет
- Перегенерация underperformers с новым промптом
```

---

## 11. Бюджет часов и таймлайн

### По фазам

| Фаза | Часы | Календарных недель | Кто |
|---|---|---|---|
| Phase 0: Tech foundation | 20ч | 1–2 | Пётр + Рома |
| Phase 1: Authority (50 + 3 long-form) | 80ч | 4–6 | Пётр + Саня (review) |
| Phase 2: Programmatic 450 | 100ч | 8–10 | Пётр + Claude Code + Саня (review) |
| Phase 3: Link building | 80ч | 12–24 (parallel) | Пётр + Саня |
| Conversion audit & lendings | 30ч | 1–2 (parallel) | Пётр (со мной) |
| Buffer (10% на непредвиденное) | 30ч | — | — |
| **ИТОГО** | **340ч** | **6 месяцев** | |

При 10ч/неделя на Петра + 5ч/неделя на других → реально.

### Месяц по месяцу

**Месяц 1 (Май 2026):**
- Phase 0 ✓
- Conversion audit ✓
- Запуск $300 Google Ads (validate funnel)
- Setup PostHog
- Начать первые 10 Tier-1 страниц

**Месяц 2 (Июнь):**
- Завершить 50 Tier-1
- Начать long-form #1
- Built data.json для 50 стран

**Месяц 3 (Июль):**
- Long-form #1 finished
- Запуск Tier 2 pipeline
- Первые 100 страниц через Claude Code
- Affiliate setup начат

**Месяц 4 (Август):**
- 250 Tier 2 страниц готовы
- Long-form #2
- Первые guest posts pitched

**Месяц 5 (Сентябрь):**
- 450 Tier 2 готовы
- Long-form #3
- Reddit / Quora активность
- HARO/Qwoted
- Первый significant traffic spike (300–500/день)

**Месяц 6 (Октябрь):**
- Optimization underperformers
- Опционально: Phase 3 expansion до 1000+
- Multi-language прототип (RU)
- Trajectory должна быть видна — продолжаем или пивотируем

---

## 12. Ожидания по результатам (КПИ по месяцам)

| Месяц | Pages indexed | Org. visits/day | Sales/month | Notes |
|---|---|---|---|---|
| 1 | 5–10 | 0–10 | 0–2 | Sandbox |
| 2 | 30–50 | 10–30 | 1–5 | First impressions in GSC |
| 3 | 100–150 | 30–80 | 5–15 | Long-tail starts |
| 4 | 250–350 | 80–200 | 15–40 | First decent month |
| 5 | 450–500 | 200–500 | 40–100 | Momentum |
| 6 | 500+ | 500–1500 | 100–300 | Trajectory |
| 9 | 600+ | 1500–3000 | 300–800 | Steady state |
| 12 | 700+ | 2000–5000 | 800–2500 | Target |

### Honesty checks

**Если месяц 3 трафик <50/день** — что-то не так. Проверь: индексация, Schema, content quality.

**Если месяц 6 трафик <300/день** — pivot needed. Возможные причины:
- Контент thin (Google deindex)
- Конкуренты сильнее ожидаемого
- Технические проблемы (CWV, mobile UX)

**Если конверсия <1%** — проблема не в SEO, а в воронке/продукте. Останавливать SEO бессмысленно — больше трафика не решит проблему.

---

## 13. Риски и mitigation

### Риск 1: Платёжный процессор отвалится
- **Вероятность:** высокая (Gumroad нестабилен на масштабе travel-products)
- **Mitigation:** до месяца 4 настроить NOWPayments (crypto) + Lemon Squeezy backup. Один не работает — переключаем DNS / config за 30 мин.

### Риск 2: Google Helpful Content Update
- **Вероятность:** ~80% за 6 месяцев (минимум 1 update)
- **Mitigation:** Tier 2 страницы должны иметь unique data per page (fines из country JSON). НЕ полагаться на 100% LLM-generated text. Human review на 10% выборке. После update — wait 2 weeks, не суетиться.

### Риск 3: Сезонность
- **Вероятность:** 100%
- **Mitigation:** Не пугаться спада в феврале–марте. Готовиться к пиковому маю–июню (запасы контента, ads budget, support capacity).

### Риск 4: Конкуренты-клоны при successful launch
- **Вероятность:** средняя при $500k+/год
- **Mitigation:** Brand building, product moat (better UX, faster delivery, trust signals)

### Риск 5: Scaled content ban
- **Вероятность:** низкая если делаем по плану (50 + 450 quality)
- **Risk если** идём в Tier 4 (1500+) без real data sources
- **Mitigation:** Перед Tier 4 — обязательно проверить trajectory Tier 1+2, и подключить real APIs (rental cars, weather, fines)

---

## 14. Trust signals & conversion (что добавить на лендинг до запуска SEO)

> SEO без конверсии = сливать трафик. Эти fixes делать **параллельно** с Phase 0.

### Must-have на лендинге

1. **Hero value prop** — "Get your IDP Companion in 5 minutes — accepted alongside your license in 150+ countries — $35"
2. **Above-the-fold CTA** — большая, контрастная, говорящая
3. **Trust signals row** под hero:
   - "🔒 Stripe-grade security" (или какой процессор)
   - "⚡ Instant download"
   - "✅ Money-back guarantee"
   - "📱 Apple/Google Wallet ready" (если будет)
4. **Pricing transparency** — 3 тарифа visible выше folder, no "starting from..."
5. **Social proof** — даже 3–5 отзывов лучше чем 0. Запросить у первых клиентов / друзей.
6. **Sample PDF preview** — показать как выглядит финальный документ
7. **FAQ block** — 5–8 главных страхов: "Is it legal?", "Will it be accepted at Hertz?", "Can I get refund?", "What's the difference vs AAA?"
8. **Refund policy link** — visible в footer + checkout
9. **Live chat / contact** — даже email достаточно на старте
10. **Honest disclaimer** — "IDP Companion is a translation document, not a government-issued IDP. Use alongside your original license." — upfront, не мелким шрифтом

### Анти-патерны (что НЕ делать)

- ❌ "Save up to 70%!" без сравнения цен
- ❌ Псевдо-сертификаты "100% Legal" без объяснения
- ❌ Импликация что мы AAA / government (юридически опасно)
- ❌ Pop-ups через 3 секунды после захода
- ❌ Множественные конкурирующие CTA в hero
- ❌ Лжи про сроки ("8 minutes guaranteed!" если технически не всегда)

---

## 15. Affiliate strategy (Phase 2+)

### Target программы

1. **TravelPayouts** — агрегатор. Включает Booking, Hotels, Cars, Flights. ~5–8% commission.
2. **DiscoverCars affiliate** — direct, 65% revenue share. Лучше для conversion на rental.
3. **Rentalcars.com** — Booking Group. ~5%.
4. **Airalo eSIM** — для мобильного интернета за границей. Cross-sell.
5. **Booking.com partner** — отели. ~25–40% от их комиссии.

### Implementation на country-pair страницах

Блок "Renting a car in {destination}?" с:
- Brand logos (Hertz, Avis, Sixt — affiliate links)
- "Compare prices on DiscoverCars" CTA
- Country-specific tip (e.g., "In Thailand, automatic transmission is recommended for tourists")

### Revenue projection

При 1000 visits/день (месяц 5–6):
- ~10% кликают affiliate → 100 clicks/day
- ~3% от них рентуют → 3 conversions/day
- ~$25 commission per booking → $75/day → ~$2.2k/мес дополнительно

---

## 16. Чеклист первых 14 дней

### Неделя 1 (Phase 0)

- [ ] Починить ssr / routeRules + prerender (4ч)
- [ ] Sitemap.xml + robots.txt (4ч)
- [ ] Schema.org Organization + Product (4ч)
- [ ] OpenGraph + Twitter Cards (2ч)
- [ ] GSC + Bing Webmaster Tools verification (1ч)
- [ ] PostHog setup на лендинг + checkout (2ч)
- [ ] Conversion audit лендинга (список 10 проблем) (4ч)

### Неделя 2 (Conversion + start Tier 1)

- [ ] Починить топ-3 conversion issues (CTA, value prop, social proof) (8ч)
- [ ] Запустить $300 Google Ads на 2 недели (1ч setup)
- [ ] Подготовить data.json для топ-15 стран (вручную, 6ч)
- [ ] Создать шаблон CountryPairPage.vue + sub-components (8ч)
- [ ] Сгенерировать первые 5 Tier-1 страниц через шаблон + ручной review (10ч)
- [ ] Submit первый mini-sitemap в GSC

---

## 17. Вопросы к себе (revision points)

Возвращаемся каждые 4 недели и проверяем:

1. **Trajectory check:** Текущий трафик соответствует прогнозу для этого месяца?
2. **Conversion check:** % visit → sale остаётся стабильным?
3. **Quality check:** Bounce rate Tier 2 страниц < 75%?
4. **Tech check:** Core Web Vitals не деградировали?
5. **Index check:** Все опубликованные страницы в индексе?
6. **Risk check:** Платёжный backup готов? GSC errors = 0?

Если 2+ ответа "нет" → пересматриваем план.

---

## 18. Контактные точки и инструменты

### Tools

- **Code:** Claude Code (главный driver)
- **Content review:** Claude Sonnet API для grammar/style check
- **Analytics:** PostHog Cloud EU + Google Search Console
- **SEO research:** Ahrefs (если нет — бесплатные альтернативы: Google Trends, AnswerThePublic, Ubersuggest)
- **Schema validation:** Google Rich Results Test
- **Performance:** Vercel Analytics + Unlighthouse
- **Outreach (Phase 3):** HARO/Qwoted (free tier), Hunter.io (email finder)

### Content pipeline

```
data.json (countries) →
  generate-pairs.ts (Claude Code) →
    Claude API (per page) →
      content/pages/*.md →
        Nuxt build (prerender) →
          Vercel deploy →
            sitemap submit →
              GSC monitoring
```

---

## 19. Definition of Done

Эта SEO стратегия считается ВЫПОЛНЕННОЙ когда:

- [ ] Phase 0 закрыта на 100%
- [ ] 50 Tier-1 страниц опубликованы и проиндексированы
- [ ] 450 Tier-2 страниц опубликованы и проиндексированы (минимум 80%)
- [ ] 3 long-form гайда опубликованы
- [ ] Лендинг конвертит 2%+ на cold paid traffic
- [ ] Hier 10+ backlinks с DR 30+
- [ ] Месячный органический трафик стабильно >300/день
- [ ] PostHog показывает session replay данные о реальных пользователях
- [ ] Платёжная инфраструктура с минимум 1 backup провайдером

После этих условий — переходим к scale phase или к следующему продукту в фабрике.

---

*Стратегия составлена 25.04.2026. Ревизия каждые 4 недели по факту данных из GSC и PostHog.*
