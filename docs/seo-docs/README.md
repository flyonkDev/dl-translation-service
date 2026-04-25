# IDP Companion SEO — README

## Файлы

- **SEO_STRATEGY.md** — главный документ. Стратегия, фазы, задачи, часы, шаблоны, промпты. **Читать первым.**
- **pairs.json** — структурированные данные: 25 origin countries, 30 destinations, 50 Tier-1 пар, стратегия Tier 2. Загружать в Claude Code.

## Как использовать в Claude Code

### Шаг 1: Phase 0 (тех. фундамент)

```bash
cd ~/projects/idpcompanion
# Скопируй SEO_STRATEGY.md в корень проекта
cp SEO_STRATEGY.md ./

# В Claude Code сессии скажи:
# "Прочитай SEO_STRATEGY.md и выполни задачи из секции 5 (Phase 0). 
#  Начни с задачи 0.1 (routeRules + prerender)."
```

Claude Code пройдёт по списку 0.1 → 0.9 и сделает технический фундамент.

### Шаг 2: Шаблон страницы

```bash
# В Claude Code:
# "Прочитай SEO_STRATEGY.md секцию 6. Создай:
#  - components/seo/CountryPairPage.vue (главный шаблон)
#  - components/seo/FinesTable.vue
#  - components/seo/LocalRules.vue
#  - components/seo/FAQAccordion.vue
#  - components/seo/RelatedPages.vue
#  - pages/idp-for-[origin]-drivers-in-[destination].vue
#  Используй наш существующий стек: Vue 3 / TS / Pinia / Tailwind / FSD."
```

### Шаг 3: Data structure

```bash
# В Claude Code:
# "Прочитай pairs.json. Создай content/countries/data.json со схемой:
#  {
#    countries: { [slug]: { name, drivingSide, speedLimits, alcoholLimit, fines, ... } }
#  }
#  Заполни данные для всех 25 origins и 30 destinations.
#  Источники: official government sites, Wikipedia, Vienna/Geneva conventions.
#  Если данных нет — пометь как 'verify-needed'."
```

### Шаг 4: Tier 2 batch generation

```bash
# Когда готов шаблон + data.json:
# В Claude Code:
# "Прочитай SEO_STRATEGY.md секцию 6 (промпт для генерации). 
#  Прочитай pairs.json. Сгенерируй первые 50 страниц из Tier 2 (Bucket A).
#  Сохраняй каждую в content/pages/{slug}.md.
#  После 50 — стоп, я проверю качество."
```

### Шаг 5: Internal linking

```bash
# В Claude Code:
# "Создай composables/useRelatedPages.ts по описанию из секции 8 SEO_STRATEGY.md.
#  Интегрируй в RelatedPages.vue."
```

## Tier 1 — делать со мной (Claude в чате)

50 флагманских страниц делаем не через Claude Code, а в интерактивных сессиях:

```
Я: "Давай сделаем страницу /idp-for-russian-drivers-in-thailand/. 
     Вот данные из data.json: {...}. 
     Напиши контент по структуре из секции 6 стратегии."

Claude в чате: [пишет 1500-2500 слов с реальными деталями]

Я: [правлю, спрашиваю где ослабить позиционирование, где добавить trust]
```

Это медленнее, но качество критично для топ-50 страниц, которые приносят 70% трафика.

## Tier 3 (long-form) — тоже со мной

3 длинных гайда — то же самое, в чате. Это магниты для бэклинков, на их качестве не экономим.

## Workflow в неделю

**Пётр (10ч/нед):**
- 4ч: 1-2 Tier-1 страницы со мной в чате (в Claude клиенте не в Claude Code)
- 3ч: Claude Code запуск Tier-2 batch
- 2ч: review результатов batch, правки промпта
- 1ч: deploy + GSC мониторинг

**Брат Иван (~5ч/нед):**
- RankRocket integration
- Data sources verification
- При необходимости — Tier 4 data pipeline

**Саня (~3ч/нед):**
- Review Tier-1 на грамматику
- Генерации Tier 2 через свой клод + общий ноушен как доку + присылание мне архива с сгенерироваными тир 2 раз в неделю
- Review случайных Tier-2
- Affiliate outreach

## Когда стоп / pivot

Если месяц 6:
- Трафик <300/день → проблема в качестве контента или техническом фундаменте
- Конверсия <1% → проблема в воронке, останавливаем SEO до фикса лендинга
- 0 backlinks → запускаем Phase 3 outreach агрессивно

## Полезные команды

```bash
# Проверить что Googlebot видит:
curl -A "Googlebot" https://idpcompanion.com/

# Проверить sitemap:
curl https://idpcompanion.com/sitemap.xml

# Проверить schema.org:
# https://search.google.com/test/rich-results?url=idpcompanion.com

# Проверить Core Web Vitals:
# https://pagespeed.web.dev/?url=idpcompanion.com
```

---

**Last updated:** 2026-04-25
**Owner:** Пётр
