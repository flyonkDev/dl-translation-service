const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const path = require('path');
const Prerender = require('vite-plugin-prerender');

module.exports = defineConfig({
	plugins: [
		vue(),
		Prerender({
			staticDir: path.resolve(__dirname, 'dist'),
			routes: ['/', '/checkout', '/success'],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
			},
		},
	},
});
