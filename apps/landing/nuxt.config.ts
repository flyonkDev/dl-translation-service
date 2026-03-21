import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'pathe';

const repoRoot = resolve(process.cwd(), '../..');
const uiKitPath = resolve(repoRoot, 'packages/ui-kit');
const i18nPkgPath = resolve(repoRoot, 'packages/i18n');

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	components: true,

	modules: ['@nuxtjs/i18n'],

	i18n: {
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
		locales: [
			{ code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
			{ code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
			{ code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
		],
		lazy: true,
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
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
			supportEmail:
				process.env.NUXT_PUBLIC_SUPPORT_EMAIL || 'petr.shchepetin@gmail.com',
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
		plugins: [tailwindcss()],

		resolve: {
			alias: {
				'@ui-kit': uiKitPath,
				'@i18n': i18nPkgPath,
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
