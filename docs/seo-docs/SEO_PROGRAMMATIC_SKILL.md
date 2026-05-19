# Programmatic SEO Skill

**What this skill is.** Operating rules for an AI assistant producing or auditing programmatic SEO pages at scale (10–1000 pages per cluster). Multi-project, vendor-neutral. Every rule below is binding — skipping it has a documented failure mode on a real shipment.

**When to apply.** Use this skill any time you are: researching keywords/clusters, outlining a programmatic page, writing one, auditing one, or planning the publication cadence of a batch.

**Critical sections.** §7 (Anti-AI guardrails) and §8 (Mandatory post-write audit) are the highest-leverage parts. If short on time, follow those two perfectly and the rest passably.

---

## Table of contents

1. [Research a topic before writing](#1-research-a-topic-before-writing)
2. [Architect the page](#2-architect-the-page)
3. [Writing rules](#3-writing-rules)
4. [SEO technical floor](#4-seo-technical-floor)
5. [GEO / AI Overview / LLM citation optimization](#5-geo--ai-overview--llm-citation-optimization)
6. [E-E-A-T at scale](#6-e-e-a-t-at-scale)
7. [Anti-AI guardrails — CRITICAL](#7-anti-ai-guardrails--critical)
8. [Mandatory post-write audit (Pass A + Pass B)](#8-mandatory-post-write-audit-pass-a--pass-b)
9. [Publication cadence](#9-publication-cadence)
10. [When working with AI-agent content services](#10-when-working-with-ai-agent-content-services)
11. [Appendix — checklists, regex, grep templates, prompt patterns](#11-appendix--checklists-regex-grep-templates-prompt-patterns)

---

## 1. Research a topic before writing

Never write a programmatic SEO page without doing keyword research first. The goal of research is to find a **cluster** (a group of related keywords with shared intent) that one well-built page can dominate — not a single keyword to stuff into a thin page.

### 1.1 The Ahrefs pipeline (canonical)

Execute in this order. Each step's output is the next step's input.

1. **Identify the 3–5 strongest competitors.** Ahrefs → Site Explorer → input the target domain (or a near-competitor if pre-launch) → **Competing Domains** report. Cross-check with a manual SERP scan on 5 representative seed queries. Exclude ad networks, Reddit/Quora aggregators, brand-only sites.

2. **Extract competitors' top traffic pages.** Site Explorer → **Top Pages by Traffic** → export top 100 per competitor. For each: URL, organic traffic, top-3 keywords, word count, domain rating.

3. **Pull keywords each top page ranks for.** Per page: **Organic Keywords** report → export. Capture: keyword, position, search volume, KD, parent topic, intent label. Dedupe across competitors → master keyword list.

4. **Cluster the list.** Group by parent topic + intent (see §1.3). Use Ahrefs' built-in clustering, Keyword Insights, or semantic-clustering via `text-embedding-3-large` + HDBSCAN. Output: 50–300 clusters of 5–50 keywords each.

5. **Gap analysis.** For each cluster, score:
   - Competitor coverage depth (1–10, read the top 3 ranking pages)
   - Our potential angle (what no competitor has)
   - Commercial value (does it feed the funnel?)
   - Effort score (1=simple, 5=requires data sourcing / multiple locales)

6. **Prioritize.** Sort clusters by `(commercial value × our angle) / effort`. Top 20–50 = shipping queue.

### 1.2 Manual SERP scan (mandatory per cluster, 10 minutes)

Tools tell you keywords. SERPs tell you intent. For each priority cluster, open the top 10 results manually and note:

- **Result-type mix** — informational guides? product pages? video? forum threads? News? This determines page archetype.
- **Featured snippet** — capture format (paragraph / list / table). Mirror it in your answer-first paragraph.
- **People Also Ask** — these are free H2 / FAQ candidates. Use them.
- **AI Overview present?** — note which 3–5 sources Google cites. Those are the citation pattern Google's classifier trusts for this query.
- **SERP features** — Local Pack, Image carousel, News box. If present, add corresponding schema (LocalBusiness, ImageObject, NewsArticle).

### 1.3 Intent classification

Match page archetype to dominant cluster intent. Mismatch wastes the budget.

| Intent | Page archetype | Typical patterns |
|---|---|---|
| **Informational** | Long-form guide, FAQ-rich | "what is X", "how does X work", "X vs Y" |
| **Commercial investigation** | Comparison, review, "best X for Y" | "best X for Y", "X vs Y", "X review" |
| **Transactional** | Product, pricing, booking | "buy X", "X price", "X near me" |
| **Navigational** | Brand-target | "[brand] login", "[brand] cancel" |

Common mismatches that fail:
- Targeting "what is X" with a product page → bounces, no rank
- Targeting "best X for Y" with a single-product landing → loses to listicles
- Targeting "X near me" without local schema → cedes to local SEO

### 1.4 Cluster topology (pillar → cluster → sub-page)

```
              [PILLAR — broad topic, 3,000–5,000 words]
                          │
        ┌─────────────────┼─────────────────┐
   [CLUSTER A]      [CLUSTER B]      [CLUSTER C]
   1,500–2,500w     1,500–2,500w     1,500–2,500w
        │                 │                 │
  [SUB][SUB]         [SUB][SUB]         [SUB][SUB]
  800–1,500w each    800–1,500w each    800–1,500w each
```

**Internal-linking rules (binding):**
- Every sub-page links UP to its cluster page and ACROSS to 2–3 sibling sub-pages.
- Every cluster page links UP to the pillar and DOWN to all sub-pages.
- The pillar links DOWN to all clusters.
- **Anchor text varies per link.** Never use the same anchor twice to the same target — that's footprint-grade behavior post-2024.

### 1.5 Competitor content audit (8-question scorecard)

For each top-3 competitor page in a priority cluster, score:

1. Source density — how many external sources cited?
2. Verifiable specifics — how many numbers, dates, named entities?
3. First-hand experience signal — original research / data / interviews?
4. Freshness — when last updated?
5. Structural distinctness — generic template or custom blocks?
6. Featured snippet eligibility — answer-first paragraph present?
7. Internal-linking depth — how many internal links into this page?
8. Backlinks — Ahrefs DR + referring-domain count

**Decision rule:** if you can beat them on ≥4 of 8, the cluster is winnable. If ≤2, deprioritize unless commercial value justifies long-term link-building.

---

## 2. Architect the page

### 2.1 Use the "typed content + thin wrapper + shared renderer" pattern

Never write monolithic per-page files. At 50+ pages they become impossible to maintain, refactor, or extend with new section types.

Required structure:
```
content/{cluster-name}/{page-slug}.ts      ← typed data only, no markup
pages/{cluster-name}/{page-slug}.vue       ← 10–25 line wrapper, just passes data
components/{Archetype}/Page.vue            ← shared renderer, handles all markup + SEO + schema
```

Why this pattern wins:
- Add a new section type globally by editing the shared renderer once.
- Add a new page by writing only the typed content file.
- Type system enforces every page has required blocks.
- A/B test layout variants by swapping the renderer.

### 2.2 URL contracts — never change once published

The slug `/{cluster}/{page-slug}/` is a binding contract the moment the page is indexed. Renaming costs 70–90% of accumulated authority. Even with 301 redirects, recovery takes 3–6 months.

**Rules:**
- Decide URL pattern BEFORE writing the first page in a cluster.
- Pick a trailing-slash policy (always trailing, never trailing) and enforce site-wide via sitemap + canonical + server redirects.
- Resist "let's just clean up the URL structure" refactors.

### 2.3 Locale strategy

Don't translate everything just because you can. Each locale = additional content surface to maintain + risk of generic machine-translation footprint.

| Audience signal | Strategy |
|---|---|
| Clear native-speaker target (e.g. Hispanic-US for an EN+ES page) | Ship both locales |
| Origin language only (e.g. UK-origin page for UK-only audience) | EN-only |
| Multiple equally-valid languages (e.g. Switzerland EN+DE+FR+IT) | Pick 1–2, not all 4 |
| Machine-translation only (no native review) | Don't ship the locale |

Use `prefix_except_default` routing (default locale at `/`, others at `/{locale}/`). Set `hreflang` correctly with `x-default`.

### 2.4 Build the pillar with stubs, not last

The most common topology mistake: building cluster pages first because they're easier, then never building the pillar that ties them together. Pillar pages aggregate authority — without them, the topical sub-graph never closes and Google's link-graph evaluators see disconnected pages.

Build a pillar **stub** first (1,500 words + section stubs), ship sub-pages, then iteratively expand the pillar with quotes / summaries / data points from sub-pages.

---

## 3. Writing rules

### 3.1 Required content blocks per page archetype

Each archetype has a non-negotiable block set:

**Informational (pillar / Tier 3):**
```
hero + answer-first paragraph + TL;DR list + 8–15 H2 sections +
FAQ (10–15 Qs) + related links + sources block + author byline
```

**Comparison (commercial investigation):**
```
hero + verdict paragraph + comparison table (3–7 columns) +
deep dive per option (200–400 words each) + FAQ + related links
```

**Programmatic landing (transactional / commercial):**
```
hero + quick-answer paragraph + 6–10 trust signals + product info +
FAQ (8–10 Qs targeted at top PAA) + related links + legal
```

### 3.2 Word-count targets

| Tier | Page type | Word count |
|---|---|---|
| Tier 1 | Flagship product / pillar / canonical-positioning | 2,000–3,500 |
| Tier 2 | Programmatic cluster pages | 1,500–2,500 |
| Tier 3 | Sub-pages / long-form guides | 3,000–5,000 |
| FAQ entries | each | 60–150 |

Below 800 words = thin-content territory for any commercial query. Above 3,000 without genuine depth = padding penalty.

### 3.3 Source-density requirement (binding)

Every page must cite at least 3 source categories:

| Category | Examples |
|---|---|
| Government / official | National agency, ministry, regulatory body |
| Academic / data-rich | Journal, university study, government statistics |
| Industry / commercial | Major industry player, trade publication |
| First-party (where applicable) | Your own data, user research, internal analytics |

Single-source pages are easy to dismiss. Three-source pages with sources from different category types signal independent verification — the strongest E-E-A-T signal at small scale.

**Format:** name the source in the body (`per the Smith Report 2024`), link in a Sources block at the bottom. Don't rely on footnote links only — Google's classifiers parse inline mentions, not just hyperlinks.

### 3.4 Hero / lead — hand-crafted, multi-pass

The hero is the highest-engagement zone and the loudest classifier signal — for both Google's quality models and human readers deciding whether to bounce.

**Binding rule:** treat hero as hand-crafted copy, not first-draft AI output. Draft 2–3 hero variants and pick the best one. Other blocks can be first-pass; hero gets multi-pass.

**Required hero structure (70–150 words):**
1. **Specific scene-setter** (cities, named scenarios, weeks-from-now — not "if you're planning a trip")
2. **The killer-angle hook** (specific dollar/euro amount with date + specific incident if available)
3. **The reframe** that distinguishes this page's angle from competitor and sibling pages

**Banned hero opener phrases** (see §7.2 for full list). These read as machine-translated and accumulate as classifier footprints.

**Required hero specificity (every page):**
- At least 1 dollar/euro amount with date or location anchor (not "fines can be high")
- At least 1 named entity (city / neighborhood / documented incident)
- One reframe-the-narrative line that distinguishes this page from siblings

**H1 hard length limits:**
- **English:** ≤ 70 characters
- **Non-Latin scripts** (Cyrillic, Greek, Arabic): ≤ 80 characters
- One hook, not a list of three. The killer detail belongs in the hero lead (which has 70–150 words to play with) or in the SEO title (60-char target), not the on-page H1.

---

## 4. SEO technical floor

These are floor specs. Below them, you're leaving organic traffic on the table from day one.

### 4.1 Title tag — `<title>`

- **Length: 50–60 characters.** Google truncates around 580px (~60 chars English).
- **Primary keyword in the first half.**
- **Brand at the end** via `|` or `—`: `Primary Keyword & Modifier — Brand Name`
- **Vary across sibling pages.** Identical title patterns across a cluster trigger structural-footprint detection.

### 4.2 Meta description

- **Length: 140–155 characters.** Google often rewrites but well-crafted ones survive 60–70% of the time.
- **Include the primary keyword once** (Google bolds matching words in SERP).
- **End with implicit or explicit CTA.** "Compare options →" / "See pricing." / "Get the 5-min checklist."
- **Cut filler.** No "In this article", "Welcome to", "Read on".

### 4.3 H1

- **Length: 60–80 characters (English).** Distinct from but related to the title tag.
- **One H1 per page.** Always.
- **Visual prominence.** Largest text on the page, not de-emphasized by design.

### 4.4 Headings hierarchy

```
H1 (one only)
├── H2 (4–10 per page)
│   ├── H3 (subsections as needed)
│   └── H3
└── H2
```

Never skip levels (no H2 → H4). H2s should include cluster keywords. H2 = the question/topic the section answers (mirrors PAA when possible).

### 4.5 Canonical, hreflang, OG, Twitter

| Tag | Spec | Common mistake |
|---|---|---|
| `<link rel="canonical">` | Self-referential on every page | Multiple canonicals or pointing to root |
| `<link rel="alternate" hreflang>` | One per locale + `x-default`, absolute URLs | Mixed relative/absolute, missing x-default |
| `<meta property="og:image">` | 1200×630, with `og:image:width/height/type/alt/secure_url` all set | Just `og:image` URL with nothing else |
| `<meta property="og:locale">` | `xx_XX` format (e.g. `en_US`) | Locale-only codes — breaks FB/LinkedIn previews |
| `<meta name="twitter:card">` | `summary_large_image` for content pages | `summary` only (small preview) |

### 4.6 JSON-LD schemas per page type

JSON-LD is the single highest-ROI SEO change in 2026 — primary input for AI Overview citation, rich-result eligibility, and Knowledge Graph entity association.

| Page type | Required schemas |
|---|---|
| Pillar / informational | `Article` (or `BlogPosting`) + `BreadcrumbList` + `FAQPage` |
| How-to / tutorial | `HowTo` + `BreadcrumbList` (+ `FAQPage` if FAQ present) |
| Comparison / review | `Article` + `BreadcrumbList` + `ItemList` |
| Programmatic landing | `WebPage` + `BreadcrumbList` + `FAQPage` (+ product schema if applicable) |
| Pricing / product | `Product` + `Offer` (or `AggregateOffer`) + `BreadcrumbList` |
| Local business | `LocalBusiness` (specific subtype) + `BreadcrumbList` |
| Home | `Organization` + `WebSite` (with `potentialAction` SearchAction) + `FAQPage` if applicable |

**Common JSON-LD mistakes to avoid:**
- Inserted as `<script>` instead of `<script type="application/ld+json">`
- In Vue/React: rendered as HTML attribute via `children:` instead of `innerHTML:` — silently fails. ALWAYS verify in the rendered DOM, not the source code.
- `datePublished` without `dateModified` (or both stale)
- Missing `author` on Article schema (post-2024 E-E-A-T impact)

### 4.7 Robots.txt and sitemap

- Allow all crawlers by default (`User-agent: * / Allow: /`)
- Block API endpoints, admin paths, internal staging
- Link to sitemap at the bottom (`Sitemap: https://example.com/sitemap.xml`)
- **If your CDN has a "Manage robots.txt" feature, disable it** — it silently overrides your static file
- Generate sitemap from canonical URLs (post-redirect, post-trailing-slash normalization)
- Split into `sitemap-index.xml` if >50k URLs

---

## 5. GEO / AI Overview / LLM citation optimization

This is the new layer post-2024. Google AI Overview, Perplexity, Bing Copilot, ChatGPT search all source from web content and cite differently than traditional SERPs. Optimizing for citation is **GEO (Generative Engine Optimization)**.

**Important:** virtually every GEO best practice also improves traditional SEO. Apply these without worrying about a tradeoff against rankings.

### 5.1 Answer-first paragraph structure

LLMs and AI Overview prefer to cite the first paragraph that directly answers the user's query. Restructure every FAQ answer and every section opener to:

**Bad (traditional SEO):**
> The history of X dates back to the 19th century when [...] After many developments, X today is generally defined as Y.

**Good (GEO-optimized):**
> X is Y. Specifically, X has three properties: [list]. Historically, X dates back to the 19th century when [...].

The answer is in the first sentence. Supporting context comes second. This is a 10-minute-per-page change worth 15–20% additional AI Overview citations + featured snippet eligibility lift.

### 5.2 Schema-rich = citation-rich

LLMs reading JSON-LD structured data cite at 3–5× the rate of LLMs parsing only HTML. Mark up every entity you can with schema (Person, Organization, Product, Event, Place) — each becomes a citable entity in LLM responses.

### 5.3 Brand mentions in authoritative contexts

LLMs build brand authority graphs from co-occurrence patterns. If your brand is consistently mentioned alongside established authorities (Wikipedia, .gov, .edu, major industry publications), your brand entity grows in the LLM training set.

Practical implications:
- PR work isn't separate from SEO anymore — every authoritative mention feeds the LLM authority graph.
- HARO / Help A B2B Writer submissions are higher-leverage than ever.
- Wikipedia presence (where genuinely notable) is gold.
- Guest contributions to industry publications outperform earned-link link-building purely as brand-entity signals.

### 5.4 Algorithmic Brand Authority (ABA)

The emerging metric for how LLMs perceive brand authority. Aggregates:
- Co-occurrence frequency with authoritative entities
- Sentiment in those co-occurrences
- Citation count in LLM responses across query categories
- Structured-data presence and consistency

Audit tools are early but worth checking quarterly. The metric is trending toward becoming as important as Domain Rating was for traditional SEO.

### 5.5 GEO-specific writing patterns

When writing for GEO eligibility:
- Use the **named entity early** — if a page is about "X", say "X" in the first 50 words, with full proper name, not a pronoun.
- Use **lists and tables** liberally — LLMs parse structured content more cleanly than long prose.
- Use **clear definitions** for jargon — `X is defined as Y` is more citable than `X works by doing Y`.
- Use **dated claims** — `In 2025, the regulation changed to require Z` is more citable than `The regulation now requires Z`.
- Use **named author + bio** — LLMs cite content with attributable authors at higher rates than anonymous content.

---

## 6. E-E-A-T at scale

E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) became the dominant Google quality framework after 2022. At programmatic scale, it's the differentiator between rankings that hold and rankings that decay.

### 6.1 Verifiable specifics over universals

**Weak:** "Fines can be steep in this country."

**Strong:** "€175 minimum, €700 cap under Article 122 of the Codice della Strada. Recent enforcement data from the Italian Polizia shows the average citation is €245."

Every claim a reader could fact-check should carry a number, date, named regulation, or named source. This is the strongest E-E-A-T lever a small content team has — competitor AI-generated content struggles to produce this consistently at scale.

### 6.2 Author bylines + dates (binding for all content pages post-2023)

- Author byline with real name + bio link (LinkedIn profile minimum, ideally an `/authors/{name}` page).
- `datePublished` in JSON-LD + visible on page.
- `dateModified` in JSON-LD, updated whenever content changes substantively.
- "Last reviewed: Month YYYY" pill near the title for high-stakes (YMYL) content.

### 6.3 First-hand experience signals (the "Experience" pillar)

Strong signals:
- Original photography (not stock) of the actual product/place/process
- Original screenshots of tools being used
- Data from your own analytics / user research / surveys
- Named-author byline of someone with credentials in the topic
- Direct quotes from interviews

Weak signals (don't bother):
- "We tested" claims without evidence
- "Based on years of experience" without specifics
- Generic stock imagery

---

## 7. Anti-AI guardrails — CRITICAL

This is the highest-leverage section. Most programmatic SEO failures trace back here. Read carefully.

### 7.1 Why structural footprints are the new "thin content"

Google's classifiers (Helpful Content System, SpamBrain) post-2024 do not punish AI in itself — they punish **the structural footprint**: identical section sequences across 50+ pages, identical phrasing patterns, identical block lengths, identical transition phrases.

At 5 pages, footprints are invisible. At 50 pages, measurable. At 500 pages, irreversible domain-quality signal that takes 6–12 months to recover from.

**Economic asymmetry:** AI tools make page production 10× faster. Without anti-footprint discipline, footprint accumulation is also 10× faster. Most teams ship 50–200 pages before they notice ranking decay, and by then the pattern is baked into the link graph.

### 7.2 Banned phrase list (the obvious AI tells)

These are classifier footprints. Grep for them in every shipment and rewrite every match.

```
- "Whether you're X or Y..." / "Whether you've booked..." (parallel-hypothetical opener)
- "Planning a trip to..." / "Heading to..." (generic travel-blog opener)
- "Here's everything you need to know about..."
- "In this guide, we'll walk you through..."
- "Don't worry — we've got you covered"
- "It's important to note that..."
- "When it comes to X..."
- "In conclusion, X is..."
- "Let's dive into..."
- "Stay tuned for..."
- Lists of 3 parallel hypotheticals chained with "Whether... whether... or whether..."
- "Embarking on a journey..." (and any other "embark" variants)
- "Navigate the complexities of..."
- "Unlock the secrets of..."
- "In today's fast-paced world..."
```

Update this list quarterly by running fresh LLM output through grep and adding any new template patterns.

### 7.3 Hero shape variance rule

Across sibling pages in the same cluster, the hero opening shape **must vary**. When authoring page N, scan heroes of pages N-1 and N-2 in the same cluster — the **shape** must differ:

| Shape | Example opener |
|---|---|
| Scene-setter | "It's 6 AM in Bali, and your scooter rental shop just opened..." |
| Surprising-stat lead | "37% of UK drivers who fly to Italy don't realize..." |
| Direct-verdict | "You need an IDP. Specifically, the 1949 Geneva Convention version." |
| Contrarian | "Most blog posts will tell you X. They're wrong." |
| Named-incident lead | "In May 2025, a Tulum rental driver was fined $1,094.50 for..." |
| CTA-led | "Most travel insurance excludes scooter accidents without Cat A endorsement..." |
| Temporal-shift | "Three things changed in 2023 that make this trip different from 2022..." |

Three sibling pages all opening with the same shape is a footprint. Vary across the batch.

### 7.4 Structural variance — when to introduce variant components

At small page counts, all pages can share the same component structure. At scale, structural sameness becomes a measurable ranking drag.

| Page count in cluster | Variance requirement |
|---|---|
| ≤ 20 | Standard variant only |
| 21–34 | Standard + flag in dashboard ("variance gate approaching") |
| ≥ 35 | Introduce variant components mandatory |
| ≥ 50 | 70% standard / 30% variants minimum ratio |

Variant component archetypes to build alongside the standard:

| Variant | When to use |
|---|---|
| FAQ-led | Destinations where searchers arrive with question-shaped queries |
| City-led / Region-led | Topics with strong intra-country variance |
| Calendar-led | Topics with strong seasonal differences |
| Timeline-led | Long-stay topics where the experience evolves over time |

---

## 8. Mandatory post-write audit (Pass A + Pass B)

This is the single most important rule in the entire skill. **Writing-intent is not a substitute for grep-output.** Even with anti-AI rules in mind during writing, human and LLM tendency converges on similar shapes. Only post-write grep catches it.

### 8.1 Pass A — Banned phrases

Run grep on every new/edited file against the banned-phrase list (§7.2). Treat grammatical uses (e.g. "check whether X is true") as false positives — banned pattern is the parallel-hypothetical OPENER ("Whether you're A or B..."), not the conjunction.

```bash
grep -inE "$(cat banned-phrases.regex)" new_pages/*.{ts,md,vue}
```

If any true matches, rewrite before reporting work as done.

### 8.2 Pass B — Cross-file and intra-file template-repeat audit

This is the hard one and the one most teams skip.

Extract every section opener (`lead:`, first sentence of each `<p>`, first sentence of each H2 section) from every new/edited file in the batch. Scan for:

1. **Identical opening templates with name-swap** — e.g. "Egypt is one of the destinations where..." + "Indonesia is one of the destinations where..." (same template, different country name). Footprint = footprint regardless of how natural the sentence reads in isolation.

2. **Same rhetorical pivot reused** across multiple openers — e.g. "None of [it/that/these] is the IDP question — the IDP question lands at..." across 4 heroes. Even when surrounding content differs, the pivot is the classifier signal.

3. **Same fixed-phrase formulae** in the same section type across siblings — e.g. "X is paperwork-dense" in two different how-to lead blocks.

4. **Intra-file repetition** — the same opener in two different sections of the same file.

**Rule:** each distinctive opening template, rhetorical pivot, or fixed-phrase formula appears AT MOST ONCE across the entire batch. If a pattern shows up twice, rewrite all-but-one with genuinely different shapes (not just word-swap).

**Pass B is mandatory before reporting work as done.** Running it takes 30 seconds and catches what writing-intent missed. Skipping it is the single highest cause of structural-footprint accumulation.

Empirical note from a real shipment: in an 8-page batch, post-write grep exposed 7 cross-file template footprints (4 of them in 8/8 files identically) that had survived all rounds of "writing with the rules in mind." After fixing round 1, round 2 grep exposed 13 NEW templates created during the round-1 rewrites. Lesson: anti-footprint is iterative, and only grep catches what intent doesn't.

### 8.3 Pass B template

```bash
# Extract all section openers from a batch of files
grep -nE "^\s*lead:|<p>[A-Z]" batch/*.{ts,md,vue} > batch_openers.txt

# Read batch_openers.txt and look for:
# 1. Identical opening templates with name-swap
# 2. Same rhetorical pivots repeated
# 3. Same fixed-phrase formulae in same section type
# 4. Intra-file repetition of openers

# Rule: each pattern appears MAX ONCE per batch.
# If a pattern appears ≥2 times, rewrite all-but-one with genuinely different shapes.
```

### 8.4 Cross-batch repetition (run quarterly)

Footprints accumulate not just within a batch but across consecutive batches over weeks. Run Pass B against the **last 4–8 weeks of shipments** quarterly to catch patterns like "every batch tends to use 'In conclusion' in roughly 1 of 4 pages" — undetectable within a single batch, visible across batches.

---

## 9. Publication cadence

### 9.1 Why dumping 50+ pages in a week hurts

Google's content-velocity classifier (informally documented in leaked Search API documentation 2024) discounts the authority lift from unnatural publication bursts. Sites that publish 50 pages in a week and then 0 for 3 months read as either content farms or LLM-generated, both of which the Helpful Content System penalizes.

### 9.2 Target cadence: 5–8 pages per week sustained

Matches how human editorial teams publish (1–2 per day, 5 days a week). Faster reads as automated; slower forfeits velocity.

For programmatic SEO at scale (200+ pages planned), spread the shipment across 6–12 months.

### 9.3 Stagger pushes — never bulk-merge

Even with 30 pages ready, don't merge in a single PR. Stagger:
- Daily push: 1–2 pages
- Sibling internal-link updates: rolling, as new pages ship
- Weekly batch (optional): if shipping 5–8 at once, distribute across 2–3 PRs over a Mon/Wed/Fri window

This reads to crawlers as continuous editorial activity rather than a one-time bulk import.

---

## 10. When working with AI-agent content services

Multi-agent content services (seo-agents.io and similar) wrap several LLMs into a pipeline that does research → outline → write → review. They are useful as **accelerators** for specific stages but dangerous as **single-source-of-truth writers**.

### 10.1 Safe usage

- Research acceleration (gather competitor data, identify gaps in 5 minutes vs 2 hours manual)
- Outline generation from a brief
- First-draft writing of formulaic sections (FAQ blocks, comparison tables)
- Title/meta variant generation
- Translation as a first pass

### 10.2 Risky usage at scale

A single tool with a single internal prompt pipeline produces highly consistent output. That consistency is the structural footprint problem from §7 at maximum intensity. Every page produced by the same agent pipeline shares the same template fingerprints.

Observed failure pattern at agencies using these tools at scale:
- Months 1–3: pages publish, initial rankings strong
- Months 4–6: rankings plateau or start to decay
- Months 7–12: Helpful Content System update hits, 30–60% organic traffic decline that takes 6–12 months to recover

Root cause: cross-page structural footprint identical across 200+ pages.

### 10.3 The blended workflow (probable optimum)

- **Research stage:** agent service (high ROI, low risk)
- **Outline stage:** agent service (medium ROI, low risk)
- **First-draft writing of non-hero sections:** agent service (formulaic blocks where consistency is a feature)
- **Hero + opening sections + brand-voice paragraphs:** human-skill or careful prompting (this is where differentiation lives)
- **Anti-AI Pass A + Pass B:** custom grep tooling (not LLM-based — LLMs miss cross-file patterns)
- **Final publish decision:** human review

This blend captures most of the agent-service speed gain without ceding the footprint-prevention layer.

### 10.4 If running A/B test of agent service vs human-skill production

- Pick 20 clusters of similar competitive difficulty
- Randomly assign 10 to Path A (this skill's methodology), 10 to Path B (agent service)
- Both paths use same keyword research, same word-count targets, same schema
- Measure for 6 months: indexing latency, ranking at week 4 / month 3 / month 6, organic traffic month 1/3/6, conversion rate
- Decision rule at month 6:
  - Path B ≥ Path A → agent service viable; scale up but monitor cross-batch footprint
  - Path A > Path B by >30% → agent service produces footprint-grade content; reserve for research/outline only
  - Indistinguishable → reconsider economics (cost vs human-skill time savings)

---

## 11. Appendix — checklists, regex, grep templates, prompt patterns

### 11.1 New-page shipping checklist

```
RESEARCH
[ ] Cluster identified, keywords mapped
[ ] Top-10 SERP manually scanned, intent confirmed
[ ] Competitor gap analysis complete
[ ] Specific angle / differentiator defined
[ ] 3+ source categories identified for citations

WRITING
[ ] Word count meets tier target
[ ] Hero hand-edited (not first-draft)
[ ] Hero shape varies from siblings in cluster
[ ] All required content blocks present (per archetype)
[ ] ≥3 sources cited inline by name
[ ] FAQ section targets PAA from SERP scan
[ ] Author byline + datePublished present

TECHNICAL SEO
[ ] Title 50–60 chars, primary KW in first half, brand at end
[ ] Meta description 140–155 chars with CTA
[ ] H1 ≤70 chars (English) / ≤80 (non-Latin)
[ ] One H1 only, hierarchy clean
[ ] Canonical self-referential
[ ] hreflang complete with x-default
[ ] OG image 1200×630 with all sub-tags
[ ] JSON-LD schema correct for archetype
[ ] JSON-LD verified in rendered DOM (not just source)

GEO
[ ] Answer-first paragraph in every FAQ
[ ] Named entity in first 50 words with full proper name
[ ] Dated claims where applicable
[ ] Author byline + bio link

ANTI-AI
[ ] Pass A grep: no banned phrases
[ ] Pass B grep: no template repetition vs siblings in batch
[ ] Cross-batch check (quarterly): no template repetition vs last 4–8 weeks

PUBLISH
[ ] Sibling pages' internal links updated (related sections)
[ ] Sitemap regenerated
[ ] Push staggered (not bulk-merged)
[ ] GSC URL Inspection → Request Indexing
```

### 11.2 Title / meta / H1 quick reference

| Field | Length | Rules |
|---|---|---|
| `<title>` | 50–60 chars | Primary KW first half; brand at end via `\|` or `—` |
| `<meta description>` | 140–155 chars | KW once; implicit/explicit CTA; no filler |
| `<h1>` | ≤70 (English) / ≤80 (non-Latin) | One per page; distinct from title; visually prominent |
| H2 | <100 chars typical | Match PAA / cluster keywords; question form helpful |
| FAQ question | <80 chars | Natural-language match to PAA |
| FAQ answer | 60–150 words | Answer-first sentence, then context |

### 11.3 Pass A banned-phrase regex

```regex
(?i)(whether you('re| have| ve)|planning a trip|heading to|everything you need to know|in this guide.{0,10}we'?ll|don'?t worry.{0,15}we'?ve got|it'?s important to note|when it comes to|in conclusion|let'?s dive in|stay tuned|in today'?s fast-paced|embark(ing)? on a journey|navigate the complexities|unlock the secrets)
```

Update as new AI patterns emerge.

### 11.4 Source-density template per page

```
SOURCES (minimum 3 categories required)

Government / official:
- [name + URL]

Academic / data-rich:
- [name + URL]

Industry / commercial:
- [name + URL]

First-party (where applicable):
- [name + URL]
```

### 11.5 LLM prompt patterns

**Research prompt:**
```
You are reading 5 competitor pages on [topic]. Produce a structured comparison:
1. What each competitor covers (top 3 H2s per page)
2. What none of them cover (gap analysis)
3. What contradicts between them (source disagreement worth investigating)
4. Specific numbers, dates, named entities each one cites
5. Each competitor's apparent angle / framing

Format as table. Do not include marketing language or recommendations. Pure structured comparison.
```

**Outline prompt:**
```
You are outlining a [tier-N] page on [topic] for an audience of [persona].

Target word count: [X].
Required blocks: [block list per archetype — see §3.1].
Cluster keywords to incorporate naturally: [list from research].

Produce:
- H1 (≤70 chars English, ≤80 non-Latin)
- Title tag (50–60 chars)
- Meta description (140–155 chars)
- Hero shape (pick ONE from: scene-setter / surprising-stat / direct-verdict / contrarian / named-incident / CTA-led / temporal-shift) and 1-sentence brief for the hero
- H2 list with one-sentence content brief per H2
- 8–12 FAQ questions matching top PAA for this query

Do NOT write paragraph content yet. Outline only.
```

**Writing prompt:**
```
You are writing the [section] of [page]. Constraints:

CONTENT:
- Word count: [X]
- Must include: [specific facts/numbers/sources from research]
- Must cite at least 2 sources by name in the body

ANTI-AI:
- Banned opener phrases: [paste banned list]
- This section's opener shape must differ from other section openers in this page
- No "It's important to note", "When it comes to", "In conclusion"
- Verifiable specifics over universals — every claim should have a number, date, or named source

GEO:
- First sentence answers the section's implicit question directly
- Use full proper names early
- Use dates on time-sensitive claims

VOICE:
- [Brand voice notes — direct / blunt / academic / casual]
- Write as if explaining to [persona], not to a general audience

Write the section. No meta-commentary.
```

**Pass A audit prompt:**
```
Grep this file for banned anti-AI opener phrases. Banned list: [paste].

Report only true matches (parallel-hypothetical openers, not grammatical conjunctions). Output format: file:line:matched-phrase. If clean, report "clean".
```

**Pass B audit prompt:**
```
Read these N files: [list]. Extract every section opener (`lead:` lines, first sentence of each subsection).

Identify patterns that repeat across files:
- Identical opening templates with country/topic-name swap
- Same rhetorical pivots
- Same fixed-phrase formulae

For each pattern found in ≥2 files, list: pattern, files matching, line numbers.

Do NOT consider as patterns: factual list overlaps (e.g. "Hertz, Avis, Sixt" appearing in multiple rental sections is FACTUAL not template), domain-specific terminology repetition (e.g. "Geneva 1949 IDP" is a term not a template).
```

### 11.6 What NOT to delegate to LLMs

- The final hero (multi-pass, hand-edited)
- The final fact-check (verify every cited source by opening the source URL)
- Pass B grep (use deterministic tools; LLMs miss patterns)
- Brand voice decisions
- Structural variance decisions (when to use FAQ-led vs City-led)
- Publication cadence decisions

---

**Version:** 1.0 (2026-05-18)
