import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import Prerender from 'vite-plugin-prerender';

export default defineConfig({
	plugins: [
		tailwindcss(),
		vue(),
		Prerender({
			staticDir: path.resolve(__dirname, 'dist'),
			routes: ['/', '/checkout', '/success'],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@ui-kit': path.resolve(__dirname, '../../packages/ui-kit'),
		},
	},
	server: {
		fs: { allow: [path.resolve(__dirname, '../..')] },
		proxy: {
			'/api': { target: 'http://localhost:3001', changeOrigin: true },
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@ui-kit/variables.scss" as *;`,
			},
		},
	},
});
