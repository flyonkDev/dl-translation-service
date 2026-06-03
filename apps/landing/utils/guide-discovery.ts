/**
 * Build-time discovery of every Tier 3 long-form guide in `apps/landing/pages/guides/`.
 *
 * Uses Vite's `import.meta.glob` with raw-source loading so we can parse each page
 * wrapper's `definePageMeta({ path })` + `defineI18nRoute({ locales })` without
 * eagerly loading the (much heavier) content modules.
 *
 * Output is a static manifest the /sitemap-page/ consumes — when a new guide ships,
 * it appears automatically on the next build with no manual list to update.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHEN ADDING A NEW GUIDE — checklist for future devs:
 *
 *   1. Create page wrapper at `apps/landing/pages/guides/<slug>.vue` with:
 *      - `definePageMeta({ path: '/guides/<slug>' })`
 *      - `defineI18nRoute({ locales: ['en', 'ru', 'es'] })` (or whichever locales apply)
 *
 *   2. Add i18n keys in `apps/landing/i18n/locales/{en,ru,es}.json`:
 *      - `sitemapPage.guides.<slug>.title` — short title shown on the sitemap card
 *      - `sitemapPage.guides.<slug>.body` — 1-2 sentence body description
 *
 *   3. (Optional) Add the guide URL to AppFooter wiring in `apps/landing/app.vue`
 *      if you want it in the footer Product column. Default: skip until we have
 *      3+ guides — single-guide footer link bloats the footer for marginal SEO.
 *
 *   4. Done — `/sitemap-page/` will auto-discover and render the new guide on
 *      next build via the manifest below. No manual edit to the sitemap-page UI
 *      or to this discovery utility required.
 *
 * Same auto-discovery pattern as country-pair-discovery.ts — see that file for
 * the original reference implementation.
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface RawPageModules {
	[absPath: string]: string;
}

// Relative path — Vite's `import.meta.glob` accepts both relative and project-root-absolute.
// Relative is safer under Nuxt where the effective root can vary by build mode.
const pageSources = import.meta.glob('../pages/guides/*.vue', {
	query: '?raw',
	import: 'default',
	eager: true,
}) as RawPageModules;

export interface DiscoveredGuide {
	/** Slug parsed from filename: e.g. 'driving-abroad-complete-guide-2026' */
	slug: string;
	/** Canonical URL path with trailing slash: `/guides/driving-abroad-complete-guide-2026/` */
	url: string;
	/** Locales the guide is enabled for: ['en'] | ['en', 'ru'] | ['en', 'ru', 'es'] | ... */
	locales: string[];
}

const PATH_PATTERN = /definePageMeta\(\s*\{\s*path:\s*['"]([^'"]+)['"]/;
const LOCALES_PATTERN = /defineI18nRoute\(\s*\{\s*locales:\s*\[([^\]]+)\]/;
const SLUG_PATTERN = /\/pages\/guides\/([^/]+)\.vue$/;

function parseLocales(raw: string): string[] {
	const match = raw.match(LOCALES_PATTERN);
	if (!match) return ['en']; // safe default
	return match[1]
		.split(',')
		.map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
		.filter(Boolean);
}

function parseSlug(absPath: string): string {
	const m = absPath.match(SLUG_PATTERN);
	return m ? m[1] : '';
}

function parseUrl(source: string): string | null {
	const m = source.match(PATH_PATTERN);
	if (!m) return null;
	const raw = m[1];
	return raw.endsWith('/') ? raw : `${raw}/`;
}

function buildManifest(): DiscoveredGuide[] {
	const guides: DiscoveredGuide[] = [];
	for (const [absPath, source] of Object.entries(pageSources)) {
		const slug = parseSlug(absPath);
		const url = parseUrl(source);
		if (!slug || !url) continue;
		const locales = parseLocales(source);
		guides.push({ slug, url, locales });
	}
	return guides;
}

const MANIFEST = buildManifest();

/** All discovered guides, sorted by slug (deterministic order). */
export function allGuides(): DiscoveredGuide[] {
	return [...MANIFEST].sort((a, b) => a.slug.localeCompare(b.slug));
}

/** Total live guide count — useful for sitemap heading/sub-copy. */
export function totalGuideCount(): number {
	return MANIFEST.length;
}
