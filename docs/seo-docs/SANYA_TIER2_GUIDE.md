# Инструкция для Сани — Tier 2 страницы (контент + картинки)


## 0. Если коротко

Каждая страница нашего сайта по паре стран — это одна и та же структура. Например:
- «IDP for Russian drivers in Turkey»
- «IDP for German drivers in Egypt»
- «IDP for Indian drivers in Singapore»

Их всех нужно сделать ~450 штук. Руками — нереально. Поэтому ты будешь:

1. **Брать пару** из списка (origin → destination, например Russia → Turkey).
2. **Кидать промпт** (он в этом документе ниже) в свой Claude — на выходе получаешь готовый markdown с текстом всей страницы.
3. **Кидать второй промпт** — на выходе получаешь SVG-картинку (hero для страницы).
4. **Сохраняешь два файла** в папку с правильным названием.
5. Раз в неделю **скидываешь мне всю пачку** в архиве.

Я уже за один заход реализую сразу 10–20 страниц в коде. Дальше Google индексирует, начинает приходить трафик, идут продажи.

**Минимум на одну страницу:** 15–25 минут (5 минут промпт текста + 3 минуты на картинку + 5–10 минут вычитка и правки).

**Минимум в неделю:** 20 страниц. Идеально — 30–50.

---

## 1. Контекст продукта (читать один раз и забыть)

Мы продаём **IDP Companion** — цифровой PDF, который многоязычно дублирует данные с водительского удостоверения. Это не государственный International Driving Permit, не подделка ничего — это **переводной companion-документ** для использования вместе с оригинальным правами за границей.

**Зачем людям наш продукт:**
- На стойке проката авто (особенно где не латиница) сотрудник просто не читает русские/китайские/арабские права. Наш PDF — это переводная подложка.
- На полицейском чекпоинте в Таиланде / Бали / Мексике — то же самое.
- В странах, где IDP реально требуется по закону (Италия, Греция, Япония) — мы говорим честно: вам нужен ещё и оригинальный физический национальный права. Наш документ — translation aid, а не замена.

**Цены:**
- $35 — 1 год
- $45 — 3 года
- $55 — 5 лет

**Главные конкуренты:** AAA, AATA (это аккредитованные US-issuers Geneva 1949 IDP). **ВАЖНО — мы их НИКОГДА не рекомендуем на страницах.** Это правило железно. Подробнее — в правилах позиционирования ниже.

---

## 2. Что у тебя должно быть

1. **Свой Claude** (claude.ai или Claude Desktop — что используешь). Подойдёт любой Sonnet 4.6 или Opus 4.6+ - лучше Opus. Важно не использовать другие AI для генерации что бы все было однотипно - важно для SEO.
2. **Текстовый редактор** или просто блокнот — копировать markdown.
3. **Папка на компьютере**, куда складываешь готовые страницы. Например `~/IDP-Sanya-batch/`.
4. **Архиватор** (zip/rar) — раз в неделю в нём приносишь мне готовое.

Никакого кода, никакого git, никакого NPM — этого ничего тебе не нужно.

---

## 3. Что должно получиться на каждой странице

### Файл 1: текст страницы (markdown)

**Имя файла:** `{origin}-{destination}.md` — например `russia-turkey.md`, `german-egypt.md`, `indian-singapore.md`.

**Содержимое:** структурированный markdown по 14 секциям (см. Master prompt ниже). Это превратится в код страницы у меня на стороне.

### Файл 2: hero-картинка (SVG)

**Имя файла:** `{origin}-{destination}-hero.svg` — например `russia-turkey-hero.svg`.

**Что это:** иллюстрация-баннер для верха страницы. SVG-формат, нашими цветами (бирюзово-мятная палитра, оранжевые акценты), стилизованная под наш бренд. Я дам промпт ниже.

### Файлы 3+ (опционально): локализованные версии текста

**Не каждая страница нуждается в нескольких языках.** Зависит от происхождения водителя (origin) и иногда от destination. Картинка SVG — одна на пару, всегда. А вот текст может быть в EN-only, или EN+RU, или EN+ES.

**Правило простое (decision tree):**

| Origin | Что делаешь |
|---|---|
| Russia (русские права) | EN + RU (русские ищут на двух языках, и мы ловим оба) |
| Mexico, Argentina, Spain | EN + ES (испаноязычная аудитория ищет на испанском) |
| Brazil | EN-only пока (PT можно позже добавить — не критично сейчас) |
| US, UK, Canada, Australia, India, Singapore, South Africa | EN-only (англоязычные путешественники ищут только по-английски) |
| China, Japan, South Korea | EN-only (для outbound travel эти аудитории дефолт ищут на английском) |
| Saudi Arabia, UAE | EN-only (бизнес-туристы по-английски) |
| Germany, France, Italy, Netherlands, Sweden, Poland, Turkey, Indonesia | EN-only (по дефолту) |

**Особый случай — US-Hispanic audience:**
Если **origin = US** И **destination — испаноязычная страна** (Spain, Mexico, Costa Rica, Dominican Republic, Argentina) — добавляй **ES**-версию. Потому что в США 60+ миллионов латиноамериканцев которые ищут «licencia de conducir en {país}» по-испански. Я в инструкции к каждой паре буду явно отмечать локали (`EN`, `EN+RU`, `EN+ES`).

**Имя файла для локализованной версии:**
Добавляешь суффикс через дефис: `{origin}-{destination}-{locale}.md`. Например:
- `russia-turkey.md` (EN, основной)
- `russia-turkey-ru.md` (RU)
- `mexican-spain.md` (EN, основной)
- `mexican-spain-es.md` (ES)
- `us-mexico.md` (EN, основной)
- `us-mexico-es.md` (ES — Hispanic-US)

**Структура локализованной версии:**
Точно такая же как EN — те же 14 разделов, тот же Master prompt, просто скажи Claude в начале промпта «Generate this content in Russian» (или «in Spanish»). Все цифры штрафов, источники и факты — те же. Меняется только язык.

**Если у тебя нет указания на ес/ру в задаче от Пети — делай только EN.**

### Папка для одной пары

Складываешь все файлы пары в одну папку с названием пары:

```
~/IDP-Sanya-batch/
  russia-turkey/
    russia-turkey.md          ← EN (всегда)
    russia-turkey-ru.md       ← RU (если origin=Russia)
    russia-turkey-hero.svg    ← одна картинка на пару
  us-mexico/
    us-mexico.md              ← EN (всегда)
    us-mexico-es.md           ← ES (US-Hispanic audience)
    us-mexico-hero.svg
  german-egypt/
    german-egypt.md           ← EN-only
    german-egypt-hero.svg
  ...
```

В пятницу всё это архивируешь в `batch-2026-XX-XX.zip` и кидаешь мне в Telegram.

---

## 4. Правила позиционирования (ЖЕЛЕЗНО)

> Это самое важное в документе. Если эти правила нарушишь — мне придётся всё перерабатывать. **Прочитай внимательно.**

Мы пишем страницы как **воронку продаж**. Человек пришёл с поиска — должен (а) получить честный ответ на вопрос про IDP в конкретной стране, (б) убедиться что мы профи, (в) купить у нас. Не у конкурента.

### ❌ ЧТО НИКОГДА НЕ ПИШЕМ

1. **Никаких рекомендаций конкурентов в тексте страницы.** AAA, AATA, РОСАВТОКЛУБ, ADAC, RAC, RACE, ACI и им подобные **могут упоминаться ТОЛЬКО** один раз — в самом нижнем legal-блоке, в одном предложении, как «мы — не они». Всё.
2. **Никаких советов «также возьмите AAA IDP», «получите Geneva 1949 IDP в РОСАВТОКЛУБЕ», «AAA workflow занимает 2 недели — успеете».** Этого в тексте быть не должно нигде — ни в FAQ, ни в финальном CTA, ни в hero, ни в сравнительных таблицах.
3. **Никаких сравнительных таблиц «US License vs AAA vs IDP Companion»** — таблица всегда из 2 строк: оригинальные права vs IDP Companion.
4. **Никакой лжи и подделки.** Мы не выдаём себя за государственный IDP. Мы не пишем «100% legal everywhere». Мы не рисуем фейковые государственные печати.
5. **Никаких выдуманных цифр.** Если штраф или скоростной лимит не подтверждён в моих countries-data.json или официальных источниках — пишешь обтекаемо («general speeding fines»), но не выдумываешь конкретный $.

### ✅ ЧТО ВСЕГДА ПИШЕМ

1. **Честно говорим что IDP Companion — это.** «Multilingual translation companion document, used alongside your original driver's license, not a government-issued IDP under 1949 Geneva or 1968 Vienna Convention».
2. **Честно говорим где нужен ещё и государственный IDP.** Если страна по закону требует Geneva 1949 IDP (Италия, Испания, Япония, Греция, Таиланд) — мы это **называем фактом**, но **не направляем читателя за этим IDP к AAA**. Просто говорим «по местному закону тебе нужен Geneva 1949 IDP», и всё. Дальше его выбор как его получить.
3. **Позиционируем IDP Companion как уменьшение трения.** «На стойке проката, на полицейском чекпоинте, в отеле — наш переводной документ ускоряет проверку и снижает риск отказа».
4. **Цитируем источники.** Codice della Strada, Royal Thai Police 13th Amendment, Mexican State Department — это всё повышает доверие в Google.
5. **Финальный CTA — только наш.** «Get IDP Companion in 2 minutes — $35». Никаких «или AAA workflow если у вас 2 недели».

### Один разрешённый абзац про конкурентов — в legal-блоке

Внизу страницы, в блоке `legal.disclaimer`, **одно предложение** вида:

> «IDP Companion is a private multilingual translation companion document and is not affiliated with [destination country's transport agency]. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of [origin]-origin Geneva 1949 IDPs are [name 1-2 issuers]. IDP Companion must be used alongside your original [origin] driver's license.»

И всё. Конкуренты упомянуты — disclosure выполнено — двигаемся дальше.

---

## 5. MASTER PROMPT — генерация текста страницы

Скопируй этот промпт целиком в свой Claude, замени `{ORIGIN}` и `{DESTINATION}` на нужную пару. Прочитай ответ, проверь правила позиционирования (см. секция 4 выше), сохрани в `.md` файл.

```
Ты помогаешь мне писать SEO-страницы для IDP Companion — multilingual translation companion document для путешественников.

ВАЖНЫЕ ПРАВИЛА ПОЗИЦИОНИРОВАНИЯ (ЖЕЛЕЗНО):

1. AAA, AATA, РОСАВТОКЛУБ, ADAC и другие государственные IDP-issuers упоминаются ТОЛЬКО ОДИН раз — в legal disclaimer внизу. Никогда в FAQ, hero, CTA, сравнительных таблицах. Никогда в виде «также рекомендуем взять AAA IDP».
2. Сравнительная таблица — всегда 2 строки: оригинальные права vs IDP Companion. Не 3.
3. IDP Companion — это translation companion document, не government IDP. Это говорим честно, но не направляем читателя к конкуренту.
4. Если страна по закону требует Geneva 1949 IDP — называем это фактом, но не указываем читателю «вот пойди в AAA получи».
5. Финальный CTA — только наш. $35 / 2 минуты.
6. Никаких выдуманных штрафов и скоростных лимитов. Если данных нет — пишем обтекаемо.

ЗАДАЧА:
Сгенерируй контент SEO-страницы для пары:
- Origin: {ORIGIN} (страна-отправитель водителя)
- Destination: {DESTINATION} (страна-приёмник)

ВЫХОДНОЙ ФОРМАТ:
Markdown с такими разделами (точно эти заголовки и в этом порядке):

# SEO Meta
- Title (60 chars max): ...
- Description (155 chars max): ...
- OG title short (50 chars max): ...
- OG subtitle (60 chars max): ...

# Hero
- Kicker (короткая надстрока, например «{ORIGIN} → {DESTINATION} · 2026 Guide»): ...
- Title (H1): ...
- Lead (70–150 слов, должен включать конкретный сценарий + factual hook со штрафом или инцидентом + reframe legal-vs-real): ...
- CTA primary: «Get IDP Companion in 2 min — $35»
- CTA secondary: «See all plans»

# Quick Answer
- Required (true/false — нужен ли по закону Geneva 1949 IDP): ...
- Verdict (одна фраза вердикта): ...
- Text (50–80 слов — почему именно так): ...

# TLDR Comparison Table
Заголовок: «{Origin} License alone vs IDP Companion in {Destination}»
Lead (1–2 предложения)
Колонки: Document | What it does | Cost
Строка 1: «{Origin} Driver License (alone)» — что делает по факту в destination, «You already have it»
Строка 2: «IDP Companion + your {origin} license» — что делает + какие языки переводит, «$35–55 (1–5 years)»
Footnote (что реально нужно везти на руках, без рекомендации конкретного IDP-issuer)

# Why Your {Origin} License Alone Isn't Enough
Lead (1–2 предложения)
3 reason-карточки, каждая с заголовком и текстом 60–100 слов:
- The legal reason (что говорит закон destination)
- The translation/alphabet reason (если применимо) или The contract reason
- The reality reason (что происходит на стойке проката / чекпоинте)

# Driving Rules in {Destination}
Lead
8 карточек правил (driving side, urban speed, highway speed, alcohol limit, phone use, seatbelts, helmets, right-turn-on-red). Цифры — только из официальных источников (countries-data.json или government).

# Fines Table (2026)
Lead с пометкой «Cash payment / camera-enforced / etc.»
Колонки: Violation | Maximum fine | Notes
7–9 строк (driving without IDP, speeding, red light, phone, seatbelt, DUI, license-related). Каждая с severity (low/med/high) для цветовой маркировки.
Caption внизу с источником

# How IDP Companion Fits — Honestly
Заголовок «How IDP Companion fits — honestly»
Lead
4 подблока:
- What IDP Companion IS (4 пункта про переводной PDF)
- What IDP Companion is NOT (3 пункта — НЕ government IDP, НЕ замена оригинальным правам, НЕ заменяет [destination-specific local document])
- When IDP Companion HELPS (4 пункта про rental desks, чекпоинты, отели, проверки)
- Documents the local law actually cares about (4 пункта — оригинальные права, паспорт, страховка, локальные документы; БЕЗ упоминания конкурентов)
Pattern (одна вспомогательная фраза)

# Renting a Car in {Destination}
Lead
4 chain-блока (Hertz, Avis, Sixt + 1 локальный) с описанием их политики в destination
Tips heading
6+ tips про аренду в этой стране

# Outcomes Table
Lead
5 строк с severity, частотой и описанием возможного исхода (от лучшего к худшему)
Math footnote (например «$35 IDP Companion vs $200 рисков»)

# FAQ
8–10 пар Q&A. Конкретные вопросы про destination + IDP. Ни в одном ответе нет упоминания AAA/AATA/конкретного государственного issuer. Если вопрос «как мне быстро получить IDP» — ответ перерабатываем в «вот наш IDP Companion за 2 минуты» (а не «AAA берёт 2 недели, поэтому AAA не успеет»).

# Related Pages
6 карточек:
- 3–4 same-origin destinations (другие пары с теми же origin) — отметь которые «Live» (если знаешь) и «Coming Soon»
- 1 same-destination, другой origin
- 1 long-form guide стаб

# Final CTA
Heading
Text (одно предложение зачем брать сейчас)
Button «Get IDP Companion — $35»

# Legal & Sources
Disclaimer (одно длинное предложение):
«IDP Companion is a private multilingual translation companion document and is not affiliated with [name destination's transport agency, например Italian Polizia Stradale или Royal Thai Police]. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of {Origin}-origin Geneva 1949 IDPs are [1–2 issuers, например AAA and AATA для US]. IDP Companion must be used alongside your original {Origin} driver's license.»

Sources (3+ источника):
- Government source (police / ministry of transport)
- Independent third-party (новости, академический журнал, AAA-data — НЕ AAA как issuer, а как data source если используются их статистики)
- Travel-industry data (rental policies, embassy advisories)

# Optional Sections (включи если уместно)

## Phrases (если в destination не латиница ИЛИ другой язык — Spain, Greece, Japan, Thailand, Russia)
8 фраз на языке destination + перевод + контекст где применять.

## How To Prepare for Driving (5 шагов)
Шаги: подготовь документы, забронируй / оплати IDP Companion, проверь местные правила, скачай навигацию офлайн, имей с собой паспорт и страховку.
Schema name, duration (например «10–15 minutes»), cost («$35»).

## Last Reviewed
«Last reviewed: April 2026»

ПРОВЕРКА ПЕРЕД ВЫДАЧЕЙ:
- ✅ AAA / AATA / другие issuers упомянуты ТОЛЬКО в legal disclaimer? Если в FAQ или CTA есть — переписать.
- ✅ TLDR таблица — 2 строки? Если 3 — убрать строку про AAA.
- ✅ Все цифры штрафов и лимитов взяты из официальных источников или обтекаемые? Если выдуманы — переписать.
- ✅ Финальный CTA только про IDP Companion?
- ✅ Word count user-visible: 1500–2500 слов?

В конце выдай готовый markdown.
```

После генерации — пробеги глазами, особенно по правилам в самом конце промпта. Если где-то проскочил «также возьмите AAA IDP» — попроси Claude переписать этот раздел.

---

## 6. MASTER PROMPT — генерация SVG-картинки

```
Ты создаёшь hero-иллюстрацию SVG для SEO-страницы IDP Companion.

ПАРА: {ORIGIN_NAME} → {DESTINATION_NAME}

БРЕНД-ПАЛИТРА (ОБЯЗАТЕЛЬНО эти hex-коды):
- Mint: #CBF3F0 (фон, акценты)
- Sea (бирюзовый): #2EC4B6 (главный)
- Orange: #FF9F1C (акценты, CTA)
- Slate-50: #F8FAFC
- Slate-200: #E2E8F0
- Slate-700: #334155
- Slate-900: #0F172A

ТРЕБОВАНИЯ:
- Формат: SVG, viewBox 1820 × 1024
- Стиль: flat-illustration, мягкие округлые формы, без градиентов или с лёгкими градиентами в палитре
- Композиция: символ origin + символ destination + дорожный/туристический мотив (машина, паспорт, флажки, дорога)
- Никаких реальных людей с лицами, никаких фотографий
- Никаких государственных гербов или символов которые могли бы выглядеть как fake государственная печать
- Лёгкость, дружелюбие, не «scammy»

ПРИМЕР для Russia → Thailand:
- Слева — снежинка / матрёшка (символ Russia)
- Справа — пальма / храм (символ Thailand)
- В центре — машина с дорогой, на капоте паспорт с нашим logo
- Палитра — mint background, sea машина, orange акценты на флажках

ВЫДАЙ:
Готовый SVG-код, начиная с <svg ...> и заканчивая </svg>. Без объяснений, без markdown — только код.
```

После генерации:
1. Скопируй SVG в текстовый файл с расширением `.svg`
2. Открой в браузере (просто двойной клик) — посмотри что вообще рендерится и не выглядит как-то странно
3. Если выглядит криво — попроси Claude перегенерировать с уточнением «более минималистично», «убери градиенты», «сделай в стиле Material Design»

---

## 7. Workflow на неделю

### Понедельник: получаешь батч от Пети

Я тебе кидаю 10–20 пар на эту неделю. Например:
- russia-turkey
- russia-egypt
- german-thailand
- indian-uae
- ...

### Вторник–четверг: работаешь по парам

Для каждой пары:
1. Открываешь свежий чат в своём Claude (один чат на пару — не валим всё в один контекст).
2. Кидаешь Master prompt текста (раздел 5), подставив origin и destination.
3. Получаешь markdown — сохраняешь в `russia-turkey.md`.
4. Открываешь второй чат, кидаешь Master prompt SVG (раздел 6).
5. Получаешь SVG — сохраняешь в `russia-turkey-hero.svg`.
6. Складываешь оба в папку `russia-turkey/`.

**Скорость:** одна пара = 15–25 минут. 10 пар = 3–4 часа за неделю.

### Пятница: сдача

1. Архивируешь всю папку `IDP-Sanya-batch/` в `batch-2026-MM-DD.zip`.
2. Пишешь мне в Telegram, скидываешь архив.
3. Я в выходные сажаю всё на сайт — в понедельник эти страницы уже в Google.

---

## 8. QA-чеклист (пробежать перед сдачей)

Для **каждой** пары проверь:

- [ ] Файл `.md` есть и в нём все 14 разделов (см. Master prompt)
- [ ] В `.md` нет нигде «AAA», «AATA», «РОСАВТОКЛУБ», «ADAC», «RAC» **кроме** legal disclaimer
- [ ] TLDR таблица — 2 строки, не 3
- [ ] Финальный CTA — только наш, $35
- [ ] Word count в основной части 1500–2500 слов (Claude обычно показывает в конце)
- [ ] Файл `.svg` есть и в браузере открывается / выглядит нормально
- [ ] Имена файлов правильные: `{origin}-{destination}.md`, `{origin}-{destination}-hero.svg` (всё lowercase, через дефис)
- [ ] Папка одной пары содержит ровно эти 2 файла

Если хоть один пункт не сходится — лучше перегенери, чем сдай криво.

---

## 9. Где смотреть готовые примеры

Когда что-то непонятно — открой в любом текстовом редакторе уже готовые .ts файлы у меня:

```
apps/landing/content/country-pairs/
  us-italy.ts        ← эталон Tier 1, IDP-required страна
  us-mexico.ts       ← эталон Tier 1, IDP-NOT-required страна
  us-japan.ts        ← эталон с не-латинским алфавитом
  us-thailand.ts     ← эталон с серьёзными rental rules
  russia-thailand.ts ← эталон Russia-origin
```

Там увидишь структуру и стиль текста. **Копируй стиль.**

Я тебе их в понедельник кину текстовыми файлами в чат, чтобы открыть мог без VS Code.

---

## 10. Список первых пар (Batch 1, приоритет)

Это **первые 30 пар** на которые мы целимся. Когда я тебе кину батч — он будет из этого списка.

**Bucket A — Russia/Cyrillic (high pain point, без IDP реально не пускают):**
1. russia-turkey
2. russia-egypt
3. russia-uae
4. russia-indonesia
5. russia-greece
6. russia-cyprus
7. russia-italy
8. russia-spain
9. russia-portugal
10. russia-vietnam

**Bucket B — Asian outbound:**
11. chinese-thailand
12. chinese-indonesia
13. indian-uae
14. indian-thailand
15. indian-singapore
16. indian-australia
17. japanese-italy
18. south-korean-thailand

**Bucket C — UK & post-Brexit:**
19. uk-thailand
20. uk-spain
21. uk-greece
22. uk-cyprus
23. uk-uae
24. uk-portugal
25. uk-morocco

**Bucket D — Germany & Europe-non-EU-destinations:**
26. german-thailand
27. german-egypt
28. german-morocco
29. german-indonesia
30. brazilian-portugal

После этих 30 пойдёт Batch 2 — ещё 30 пар по приоритету. Полный список из 450 пар идёт в `TIER_PROGRESS.md` (трекер).

---

## 11. Что делать если…

**…Claude генерит банальную/общую воду без конкретики.**
В промпте уточни: «Дай специфические факты про {destination}: конкретные штрафы в местной валюте, конкретные города где enforcement строгий, конкретные rental policies. Если не знаешь точных цифр — пиши обтекаемо, но НЕ выдумывай».

**…Claude несмотря на правила всё-таки рекомендует AAA в FAQ.**
Скажи: «Ты нарушил правило 1 в инструкции. Перепиши FAQ Q3 без упоминания AAA — вместо этого расскажи как быстро получить IDP Companion за 2 минуты».

**…SVG получается уродский.**
Попробуй другой Claude-чат (контекст портится). Или попроси конкретный стиль: «flat illustration в стиле Stripe / Notion», «без градиентов», «упрости фон».

**…не уверен про конкретный штраф или правило в стране.**
Лучше написать обтекаемо («general speeding fines apply, see local enforcement»), чем выдумать $300. Я потом дополню точными цифрами из своего источника `countries-data.json`.

**…пара выглядит совсем безумной (например «Mexican drivers in Mexico»).**
Не делаешь её — пишешь мне в Telegram «эта пара бессмысленная, такое реально кто-то ищет?». Я перепроверю и либо исключу, либо подтвержу.

**…что-то не понятно или хочется уточнить.**
Пиши в Telegram, не молчи. Лучше час потерять на уточнении, чем неделю на 20 страниц в стиле «нам надо переделать всё».

---

## 12. Самое-самое главное

1. **Правила позиционирования** (раздел 4) — единственное что не должно нарушаться. Всё остальное правится / переделывается.
2. **Скорость + регулярность** > **идеальное качество**. 20 «нормальных» страниц в неделю > 5 «идеальных».
3. **Не молчи.** Любой вопрос — кидай в Telegram. Это быстрее чем гадать.

Удачи. Поехали 🚗

— Петя
