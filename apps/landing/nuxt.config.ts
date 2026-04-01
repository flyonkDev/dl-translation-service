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
	ssr: false,
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

	experimental: {
		appManifest: false,
	},

	modules: [
		// Nuxt 4.4.x doesn't emit route-rules.mjs when appManifest is disabled,
		// but nuxt/dist/app/composables/manifest.js still statically imports it.
		// addTemplate writes the stub before Vite resolves imports.
		async () => {
			const { addTemplate } = await import('@nuxt/kit');
			addTemplate({
				filename: 'route-rules.mjs',
				write: true,
				getContents: () =>
					'export default function routeRulesMatcher(_path) { return {}; }\n',
			});
		},
		'@nuxtjs/i18n',
	],

	i18n: {
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
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
