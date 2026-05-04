# Backlog — IDP Companion

> **Что это.** Единое место для идей, фиксов и задач, которые не успели в текущий sprint, но не должны потеряться. Раз в неделю — проходим, переоцениваем, что-то двигаем в работу.
> **Формат.** Каждая запись: краткое название, **Why** (зачем), **What** (что конкретно сделать), приоритет (P0/P1/P2/P3), оценка времени, статус.
> **Приоритеты.**
> - **P0** — блокер релиза / правовой риск / ущерб бренду. Делать как только всплыло.
> - **P1** — следующая итерация. Не блокирует, но ощутимо двигает метрики.
> - **P2** — сделать, когда основное закрыто.
> - **P3** — идея на потом, может отвалиться.

---

## P0 — критическое (правовой риск / ущерб бренду)

### PDF-шаблон: добавить языки, на которые мы ссылаемся в SEO-копии

**Why.** В SEO-копи country-pair страниц (russia-greece, russia-indonesia, russia-thailand) мы заявляли, что PDF содержит перевод на **греческий, бахаса индонезийский, тайский** соответственно. Проверка [idp-dev-template.pdf](../apps/backend/assets/templates/idp-dev-template.pdf) через `pdftotext` 04.05.2026 показала, что этих языков в шаблоне нет — реально присутствует стандартный набор Geneva 1949: English, French, Spanish, German, Italian, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese (~11 языков, не 12, как заявлено на лендинге).

Risk: если покупатель открывает PDF и не видит обещанного перевода — chargeback по Stripe/Gumroad, потеря trust, негативный отзыв в Telegram-каналах русскоязычных туристов.

Сейчас (04.05.2026) копия по этим страницам отредактирована (path A): заявления про Greek/Bahasa/Thai заменены на правдивые формулировки про английский + арабский (которые в шаблоне есть и читаются на стойках). Это снимает immediate риск, но снижает SEO-эффективность: claim про родной язык дестинации сильнее.

**What.**
1. Дизайнерская задача: добавить страницы в [idp-dev-template.pdf](../apps/backend/assets/templates/idp-dev-template.pdf) с переводом стандартного 1949 Geneva-блока на: **греческий, тайский, бахаса индонезийский, корейский, хинди, турецкий**. Это покрывает: russia-greece, russia-thailand, russia-indonesia + uk-thailand + uk-greece + Tier-2 батчи под Indian/Korean/Turkish origins.
2. Координация с переводчиками — каждый блок ~250 слов на язык, формальный регистр, terminology aligned with national driving codes (это не machine translation — нужен профессиональный переводчик).
3. После добавления — вернуть в SEO-копи claim про родной язык (revert path A правки в 4 файлах). Параллельно поправить landing claim "12 languages" → реальное число (15-17 после добавления).
4. Backend: пересохранить `assets/templates/idp-dev-template.pdf`, проверить что координаты впечатывания (имя/страна/дата/фото/категории) не сместились — если страницы добавлены В КОНЕЦ, координаты cover/back должны остаться валидными.

**Приоритет:** P0 (но не блокер MVP-launch — короткая SEO-копия пока врать не будет). Делать в течение 1-2 месяцев после launch.
**Оценка:** 2-3 недели работы переводчиков + 1-2 дня дизайнер + 1 день backend для координат.
**Статус:** ⚪ Не начато. Path A применён 04.05.2026 (false claims removed from copy).
**Связанные файлы:**
- [apps/backend/assets/templates/idp-dev-template.pdf](../apps/backend/assets/templates/idp-dev-template.pdf)
- [apps/backend/src/applications/applications-pdf.service.ts](../apps/backend/src/applications/applications-pdf.service.ts)
- [apps/landing/content/country-pairs/tier-1/russia/russia-greece.ts](../apps/landing/content/country-pairs/tier-1/russia/russia-greece.ts)
- [apps/landing/content/country-pairs/tier-1/russia/russia-indonesia.ts](../apps/landing/content/country-pairs/tier-1/russia/russia-indonesia.ts)
- [apps/landing/content/country-pairs/tier-1/russia/russia-thailand.ts](../apps/landing/content/country-pairs/tier-1/russia/russia-thailand.ts)

### PDF-шаблон: общий аудит и исправления

**Why.** PDF — это product. Текущий шаблон [idp-dev-template.pdf](../apps/backend/assets/templates/idp-dev-template.pdf) отмечен как `-dev-` в имени файла. Перед production launch нужен формальный QA-pass: верификация всех 11 языковых блоков (terminology, перевод, верстка), правильность Geneva 1949 формата, корректность координат впечатывания, штампы категорий A-E (текущие координаты [applications-pdf.service.ts:16-22](../apps/backend/src/applications/applications-pdf.service.ts#L16-L22) — позиции из dev-шаблона, нужна валидация для production).

Также: на сайте мы пишем "12 languages" — реально в шаблоне ~11. Эту цифру нужно честно проверить и сверить.

**What.**
1. Полный аудит языковых блоков (терминология, орфография, ширина полей).
2. Production-ready PDF-template (переименовать `idp-dev-template.pdf` → `idp-template-v1.pdf`, обновить fallback в `getTemplatePath()`).
3. Сверить общее число языков → обновить landing copy и country-pair copy единым числом.
4. Финальная проверка координат впечатывания на разных длинах имён (тестовый набор 5-10 sample applications).

**Приоритет:** P1.
**Оценка:** 3-5 дней.
**Статус:** ⚪ Не начато.

---

## P1 — следующая итерация

### Аудит H1 (hero.title) на всех существующих country-pair страницах

**Why.** 04.05.2026 обнаружено: 3 новые страницы (russia-egypt, russia-greece, russia-indonesia) имели H1 длиной 100-123 символа — на russian-локали с кириллицей (которая в pixels шире) hero title растягивался на 5-6 строк и занимал почти весь viewport. Лечение: правило в [CLAUDE.md](../CLAUDE.md) о hard-limit ≤ 70 chars EN / ≤ 80 chars RU + CSS clamp на [Hero.vue:283](../apps/landing/components/CountryPair/Hero.vue#L283). Эти 3 страницы перерайтнуты сразу. Старые Live-страницы — нужно проверить.

**What.**
1. Пройти по 7 уже Live country-pair: russia-thailand, us-italy, us-greece, us-spain, us-japan, us-mexico, us-thailand + 2 Tier-2 (us-france, us-uae). Замерить длину `hero.title` в каждой локали.
2. Для тех, что > 70 EN / > 80 RU/ES — переписать на короткий single-hook формат (см. примеры в CLAUDE.md "H1 hard length limits").
3. Параллельно проверить SEO `seo.title` (для `<title>` в head) — он должен быть < 60 chars (правило Google SERP truncation). Это уже было соблюдено на Tier-2, но Tier-1 могут быть длиннее.
4. Каждое изменение `hero.title` НЕ меняет SEO-канонические URL — просто текстовая правка copy.

**Приоритет:** P1 (после launch — первые недели после индексации новых страниц чтобы не размыть свежие сигналы переписыванием уже indexed H1).
**Оценка:** 1-2 часа на 9 страниц × 1-2 локали.
**Статус:** ⚪ Не начато для старых. ✅ russia-egypt/greece/indonesia сделаны 04.05.2026 в момент введения правила.

### Hero illustrations — переделать все на Gemini-style WebP

**Why.** Russia → Indonesia 04.05.2026 переключена на Gemini-сгенерированную иллюстрацию (Bali pagoda + jeep + rice terraces, ~195 KB WebP) вместо SVG. Визуально живее и интереснее существующих flat-SVG. Solo-founder-стек: проще генерировать через Gemini, чем заказывать у дизайнера или рисовать самому. Перевод всех 6 уже-Live + всех будущих Tier 1/2 hero на этот стиль даст единый аесthетic upgrade, поднимет engagement (и потенциально CTR из соцсетей через OG).

**What.**
1. Сгенерировать Gemini-иллюстрации для всех 6 уже Live: Russia → Thailand, US → Italy, US → Greece, US → Spain, US → Japan, US → Mexico, US → Thailand. Promt-template: `[origin]-themed traveler reading a document + [destination iconic landmark] + [destination's transport vehicle] + [destination's nature], illustrated style, brand palette mint #CBF3F0 / sea #2EC4B6 / orange #FF9F1C accents`.
2. Конвертировать в WebP q=75 через `sharp` (smal CLI скрипт): `node -e "require('sharp')(src).webp({quality: 75, effort: 6}).toFile(out)"`. Целевой вес 150-300 KB.
3. Обновить prop `illustration` в page wrappers с `.svg` на `.webp`.
4. Удалить старые SVG из [public/illustrations/](../apps/landing/public/illustrations/).
5. Для Tier 2 (us-france, us-uae) — то же самое.

**Приоритет:** P1 (visual upgrade, не блокер).
**Оценка:** 1-2 часа на батч из 6 страниц (генерация + конверсия + правки prop). Generate cost — Gemini free tier хватает.
**Статус:** ⚪ Не начато для остальных. ✅ russia-indonesia сделана 04.05.2026.

### Headshot cleanup — TTL для `apps/backend/uploads/`

**Why.** [CLAUDE.md](../CLAUDE.md) файл-стораж секция: license images TTL 1h ✓, headshots — **нет cleanup**. Storage растёт неограниченно. Низкий приоритет до launch, высокий — после.

**What.** Cron job или on-application-paid trigger, который удаляет headshot file через N дней после статуса `paid`/`pdf_ready`. Хранить только если нужно для compliance (RGPD-style — обычно нет, IDP Companion не хранит биометрию в PII смысле).

**Приоритет:** P1 (после launch).
**Оценка:** полдня.
**Статус:** ⚪ Не начато.

### German locale (`de`) на лендинге

**Why.** AGENTS.md roadmap. Тривиально по объёму. Открывает German tier-1 country-pair (German → Thailand, German → Egypt, German → Morocco — все уже в TIER_PROGRESS Tier-1 plan).

**What.** Перевод `apps/landing/i18n/locales/en.json` → `de.json`. Обновить [packages/i18n/index.ts](../packages/i18n/index.ts) `SUPPORTED_LOCALES`. Wire в Nuxt config.

**Приоритет:** P1 (когда первая German tier-1 страница в работе).
**Оценка:** 1-2 дня (с переводом).
**Статус:** ⚪ Не начато.

### Crypto payment provider (NOWPayments)

**Why.** Декларированная следующая интеграция после Gumroad MVP — закрывает аудиторию, у которой нет VISA/MC (российская и часть азиатской). Согласно [CLAUDE.md](../CLAUDE.md) tech-debt section, перед добавлением второго провайдера правильный момент — refactor: `IPaymentProvider` abstraction + `Payment` table.

**What.**
1. Prisma migration: новая таблица `Payment { id, applicationId, provider, externalId, amount, currency, status, raw, createdAt }`.
2. `IPaymentProvider` interface + Gumroad implementation + NOWPayments implementation.
3. Frontend: provider-select на `/payment/:id` + branch на crypto-flow.
4. Webhook: NOWPayments HMAC verification (отказ от query-string shared secret для всех providers — апгрейд webhook auth security).

**Приоритет:** P1 (declared next step после crypto-launch).
**Оценка:** 1.5-2 недели.
**Статус:** ⚪ Не начато.

---

## P2 — после основных задач

### Webhook auth: HMAC вместо query-string shared secret

**Why.** Gumroad webhook сейчас аутентифицируется через `?token=...` в query string ([gumroad-webhook.controller.ts](../apps/backend/src/payments/providers/gumroad-webhook.controller.ts)). Это слабее HMAC — token может попасть в access-логи CDN/proxy. Стандарт для Paddle/Stripe/большинства crypto gateways — HMAC SHA256 заголовок.

**What.** Заменить query-string check на `X-Signature` HMAC валидацию. Сделать в момент crypto-провайдера (см. P1 выше).

**Приоритет:** P2 (вместе с crypto provider).
**Оценка:** 0.5 дня.
**Статус:** ⚪ Не начато.

### PDF gating: NestJS Guard вместо service-level check

**Why.** Сейчас `REQUIRE_PAYMENT_FOR_PDF` проверка inline в [applications.service.ts:157-162](../apps/backend/src/applications/applications.service.ts#L157-L162). Когда добавится auth (любая) — promote в Guard.

**What.** `PaymentRequiredGuard` поверх `GET /api/applications/:id/pdf`. Конфигурация через env остаётся.

**Приоритет:** P2 (когда коснёмся auth).
**Оценка:** полдня.
**Статус:** ⚪ Не начато.

### Sample PDF preview page (`/sample-pdf/`)

**Why.** В [TIER_PROGRESS.md](seo-docs/TIER_PROGRESS.md) Tier 1 supporting pages — `Sample PDF Preview`. Конверсия страницы с превью документа > чем без (можно показать что покупатель получит, без покупки). Дополнительно — снимает claim про "PDF на греческом/бахаса" — пользователь видит реальный шаблон до оплаты.

**What.** Static page с PNG-rendered страницами шаблона + краткое объяснение каждого языкового блока.

**Приоритет:** P2.
**Оценка:** 1 день.
**Статус:** ⚪ Не начато.

---

## P3 — идеи / могут отвалиться

### Referral program

**Why.** Из declared backlog (Petr's stated order: SEO → copy → homepage → articles → **referral program**). Travel-блогеры, тур-агенты — каналы с высоким LTV.

**What.** TBD — нужен product discovery (% commission, payout механизм, attribution через cookie/код).

**Приоритет:** P3 (post-MVP, после первых 100-200 покупок чтобы понимать unit-economics).
**Статус:** ⚪ Идея.

### `?v=N` cache-busting helper для OG previews

**Why.** Telegram preview-bot кэширует ~2 дня. Каждый раз руками добавлять `?v=N` неудобно.

**What.** Vue composable / небольшой утилитарный хелпер, который генерирует stable hash for current OG content version.

**Приоритет:** P3.
**Статус:** ⚪ Идея.

---

## Журнал

| Дата | Что | Кто |
|---|---|---|
| 04.05.2026 | Файл создан. Перенесена в P0 задача добавления языков в PDF-шаблон + общий audit. P1/P2/P3 заполнены из существующих CLAUDE.md tech-debt + AGENTS.md roadmap | Petr/Claude |
