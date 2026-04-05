import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import type { Plugin } from 'vite';

const VIRTUAL = '\0virtual:nuxt-route-rules-stub';

/** Shared stub: `experimental.appManifest: false` may skip emitting this file, but Nuxt still imports it. */
export const ROUTE_RULES_STUB_SOURCE =
	'export default function routeRulesMatcher(_path) { return {}; }\n';

function shouldStubRouteRules(id: string): boolean {
	const pathOnly = id.split('?')[0].replace(/\\/g, '/');
	if (pathOnly === '#build/route-rules.mjs') return true;
	// CI / Vite often resolves `#build/...` to an absolute `.nuxt/route-rules.mjs` before `load()` sees the alias.
	return pathOnly.endsWith('.nuxt/route-rules.mjs');
}

/**
 * Nuxt 4.x may not emit `#build/route-rules.mjs` while `dist/app/composables/manifest.js`
 * still imports it. Aliases miss resolved absolute paths; we stub virtually and ensure the file exists on disk.
 */
export function nuxtRouteRulesStubPlugin(): Plugin {
	return {
		name: 'nuxt-route-rules-stub',
		enforce: 'pre',
		configResolved(config) {
			try {
				const out = join(config.root, '.nuxt', 'route-rules.mjs');
				mkdirSync(dirname(out), { recursive: true });
				writeFileSync(out, ROUTE_RULES_STUB_SOURCE, 'utf8');
			} catch {
				/* ignore — virtual module still covers resolution */
			}
		},
		resolveId(id) {
			if (shouldStubRouteRules(id)) {
				return VIRTUAL;
			}
			return undefined;
		},
		load(id) {
			if (id === VIRTUAL) {
				return ROUTE_RULES_STUB_SOURCE;
			}
			return undefined;
		},
	};
}
