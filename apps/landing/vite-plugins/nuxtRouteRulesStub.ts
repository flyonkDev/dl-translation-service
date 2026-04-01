import type { Plugin } from 'vite';

const VIRTUAL = '\0virtual:nuxt-route-rules-stub';

/**
 * Nuxt 4.x may not emit `#build/route-rules.mjs` while `dist/app/composables/manifest.js`
 * still imports it. Aliases and `resolveId → disk path` often fail for deps pre-bundling.
 * A virtual module with `load()` is resolved before file IO.
 */
export function nuxtRouteRulesStubPlugin(): Plugin {
	return {
		name: 'nuxt-route-rules-stub',
		enforce: 'pre',
		resolveId(id) {
			if (id === '#build/route-rules.mjs') {
				return VIRTUAL;
			}
			return undefined;
		},
		load(id) {
			if (id === VIRTUAL) {
				return 'export default function routeRulesMatcher(_path) { return {}; }\n';
			}
			return undefined;
		},
	};
}
