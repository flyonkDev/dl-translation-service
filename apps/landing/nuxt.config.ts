import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'pathe';
import { nuxtRouteRulesStubPlugin } from './vite-plugins/nuxtRouteRulesStub';

const repoRoot = resolve(process.cwd(), '../..');
const uiKitPath = resolve(repoRoot, 'packages/ui-kit');
const i18nPkgPath = resolve(repoRoot, 'packages/i18n');

/** Fallback if something resolves before the Vite plugin (disk path from config dir) */
const routeRulesStub = fileURLToPath(
	new URL('./_nuxt-build-stubs/route-rules.mjs', import.meta.url),
);

export default defineNuxtConfig({
	alias: {
		'#build/route-rules.mjs': routeRulesStub,
	},

	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	ssr: true,
	buildDir: '.nuxt',
	components: true,
	app: {
		head: {
			meta: [
				{ name: 'theme-color', content: '#ffffff' },
			],
			link: [
				{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'manifest', href: '/site.webmanifest' },
			],
		},
	},

	modules: [
		'@nuxt/fonts',
		'@nuxtjs/i18n',
		'@nuxtjs/sitemap',
		'nuxt-og-image',
	],

	// @nuxt/fonts is the canonical mechanism for OG fonts (per nuxt-og-image v6+ migration
	// note — `ogImage.fonts` is deprecated and the bundled fallback Inter is Latin-only,
	// which renders Cyrillic/Greek/Arabic as "NO GLYPH" boxes on /ru/ and other non-Latin OG previews).
	// Defaults level controls subsets for ALL families (Inter included) — per @nuxt/fonts schema.
	fonts: {
		defaults: {
			weights: [400, 600, 800],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext', 'cyrillic'],
		},
		families: [
			{ name: 'Inter', global: true },
		],
	},

	ogImage: {
		// Pin to Satori renderer — works on Cloudflare Pages without Playwright/Chromium binaries.
		// Browser renderer needs playwright-core, fails to install on Windows
		// and won't run on serverless/edge anyway.
		compatibility: {
			runtime: { browser: false },
			prerender: { browser: false },
			dev: { browser: false },
		},
		// Static site: all OGs are prerendered at build time. Disable runtime generation
		// entirely — no signing secret needed, no security concern, no surprise CF Worker hits.
		// Dev mode still generates on-demand for local preview.
		zeroRuntime: true,
	},

	site: {
		url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.idpcompanion.com',
		name: 'IDP Companion',
	},

	sitemap: {
		// Exclude legal pages from sitemap (low SEO value, no crawl budget waste)
		exclude: [
			'/privacy-policy',
			'/refund-policy',
			'/terms-of-service',
			'/ru/privacy-policy',
			'/ru/refund-policy',
			'/ru/terms-of-service',
			'/es/privacy-policy',
			'/es/refund-policy',
			'/es/terms-of-service',
		],
	},

	i18n: {
		baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.idpcompanion.com',
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
		// Cloudflare Pages serves /path/ (with trailing slash) as canonical 200 and 308-redirects /path → /path/.
		// We must align all generated URLs (canonical, hreflang, sitemap, internal links) with that form.
		// Without this Google sees a redirect-loop perception: canonical declares /path, server 308's it to /path/.
		trailingSlash: true,
		locales: [
			{ code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
			{ code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
			{ code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
		],
		langDir: 'locales',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
			alwaysRedirect: false,
			fallbackLocale: 'en',
		},
	},

	runtimeConfig: {
		public: {
			/** Product analytics (optional; omit key to disable). EU cloud default host. */
			posthogKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || '',
			posthogHost:
				process.env.NUXT_PUBLIC_POSTHOG_HOST?.trim() ||
				'https://eu.i.posthog.com',
			appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:5173',
			// Production builds must never default to localhost (mixed content on HTTPS).
			// Use same-origin `/api` (proxy on Cloudflare) or set NUXT_PUBLIC_API_BASE_URL to the Railway URL + `/api`.
			apiBaseUrl:
				process.env.NUXT_PUBLIC_API_BASE_URL?.trim() ||
				(process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api'),
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
			supportEmail:
				process.env.NUXT_PUBLIC_SUPPORT_EMAIL || 'support@idpcompanion.com',
		},
	},

	nitro: {
		devProxy: {
			'/api': {
				target: 'http://localhost:3001/api',
				changeOrigin: true,
			},
		},
	},

	css: [
		'flag-icons/css/flag-icons.min.css',
		'@ui-kit/css-vars.scss',
		'@ui-kit/layout.scss',
		'~/assets/styles/tailwind.css',
		'~/assets/styles/theme.scss',
		'~/assets/styles/main.scss',
	],

	vite: {
		plugins: [
			nuxtRouteRulesStubPlugin(),
			tailwindcss() as any,
		],

		resolve: {
			alias: {
				'@ui-kit': uiKitPath,
				'@i18n': i18nPkgPath,
				'#build/route-rules.mjs': routeRulesStub,
			},
		},

		server: {
			fs: { allow: [repoRoot, '../..', '../../..', '../../../..', '../../../../..'] },
		},

		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@ui-kit/variables.scss" as *;`,
				},
			},
		},
	},
});
