/**
 * Build-time discovery of every country-pair page in `apps/landing/pages/tier-*`.
 *
 * Uses Vite's `import.meta.glob` with raw-source loading so we can parse each page
 * wrapper's `definePageMeta({ path })` + `defineI18nRoute({ locales })` without
 * eagerly loading the (much heavier) content modules.
 *
 * Output is a static manifest the /sitemap-page/ consumes — when a new pair ships,
 * it appears automatically on the next build with no manual list to update.
 */

interface RawPageModules {
	[absPath: string]: string;
}

// Path is relative to this file. Vite's `import.meta.glob` accepts both relative
// (`./...`, `../...`) and project-root-absolute (`/...`) forms. Relative is the
// safest under Nuxt where the effective root can vary by build mode.
const pageSources = import.meta.glob('../pages/tier-*/**/idp-for-*.vue', {
	query: '?raw',
	import: 'default',
	eager: true,
}) as RawPageModules;

export interface DiscoveredPair {
	/** Tier 1 or Tier 2 (taken from path segment) */
	tier: 1 | 2;
	/** Origin slug from path segment: 'us' | 'uk' | 'russia' (matches ORIGIN_DISPLAY key) */
	origin: string;
	/** Destination slug from URL: 'italy', 'thailand', 'south-africa', ... */
	destination: string;
	/** Canonical URL path with trailing slash: `/idp-for-us-drivers-in-italy/` */
	url: string;
	/** Locales the page is enabled for: ['en'] | ['en', 'ru'] | ['en', 'es'] | ... */
	locales: string[];
}

const PATH_PATTERN = /definePageMeta\(\s*\{\s*path:\s*['"]([^'"]+)['"]/;
const LOCALES_PATTERN = /defineI18nRoute\(\s*\{\s*locales:\s*\[([^\]]+)\]/;
const TIER_PATTERN = /\/pages\/tier-(\d+)\//;
const ORIGIN_PATTERN = /\/pages\/tier-\d+\/([^/]+)\//;

function parseLocales(raw: string): string[] {
	const match = raw.match(LOCALES_PATTERN);
	if (!match) return ['en']; // safe default
	return match[1]
		.split(',')
		.map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
		.filter(Boolean);
}

function parseTier(absPath: string): 1 | 2 {
	const m = absPath.match(TIER_PATTERN);
	const n = m ? Number(m[1]) : 1;
	return n === 2 ? 2 : 1;
}

function parseOrigin(absPath: string): string {
	const m = absPath.match(ORIGIN_PATTERN);
	return m ? m[1] : '';
}

function parseUrl(source: string): string | null {
	const m = source.match(PATH_PATTERN);
	if (!m) return null;
	const raw = m[1];
	return raw.endsWith('/') ? raw : `${raw}/`;
}

function parseDestination(url: string): string {
	// '/idp-for-us-drivers-in-italy/' -> 'italy'
	// '/idp-for-russian-drivers-in-thailand/' -> 'thailand'
	const m = url.match(/-in-([^/]+)\/?$/);
	return m ? m[1] : '';
}

function buildManifest(): DiscoveredPair[] {
	const pairs: DiscoveredPair[] = [];
	for (const [absPath, source] of Object.entries(pageSources)) {
		const url = parseUrl(source);
		if (!url) continue; // skip files without definePageMeta path
		const tier = parseTier(absPath);
		const origin = parseOrigin(absPath);
		const destination = parseDestination(url);
		if (!origin || !destination) continue;
		const locales = parseLocales(source);
		pairs.push({ tier, origin, destination, url, locales });
	}
	return pairs;
}

const MANIFEST = buildManifest();

/** All discovered pairs, sorted by tier then origin then destination. */
export function allPairs(): DiscoveredPair[] {
	return [...MANIFEST].sort((a, b) => {
		if (a.tier !== b.tier) return a.tier - b.tier;
		if (a.origin !== b.origin) return a.origin.localeCompare(b.origin);
		return a.destination.localeCompare(b.destination);
	});
}

/** Pairs grouped by origin code, each group sorted by destination slug. */
export function pairsByOrigin(): { origin: string; pairs: DiscoveredPair[] }[] {
	const groups = new Map<string, DiscoveredPair[]>();
	for (const p of MANIFEST) {
		const arr = groups.get(p.origin) ?? [];
		arr.push(p);
		groups.set(p.origin, arr);
	}
	const out: { origin: string; pairs: DiscoveredPair[] }[] = [];
	// Deterministic origin order: us, uk, russia (matches our content strategy priority)
	const ORDER = ['us', 'uk', 'russia'];
	for (const o of ORDER) {
		const arr = groups.get(o);
		if (arr && arr.length) {
			out.push({ origin: o, pairs: arr.sort((a, b) => a.destination.localeCompare(b.destination)) });
			groups.delete(o);
		}
	}
	// Append any unexpected origins alphabetically (defensive)
	for (const [origin, pairs] of [...groups.entries()].sort()) {
		out.push({ origin, pairs: pairs.sort((a, b) => a.destination.localeCompare(b.destination)) });
	}
	return out;
}

/** Total live page count — useful for sitemap heading/sub-copy. */
export function totalPairCount(): number {
	return MANIFEST.length;
}
