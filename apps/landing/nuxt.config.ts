import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'pathe';

const repoRoot = resolve(process.cwd(), '../..');
const uiKitPath = resolve(repoRoot, 'packages/ui-kit');

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	components: true,

	runtimeConfig: {
		public: {
			appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:5173',
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
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
