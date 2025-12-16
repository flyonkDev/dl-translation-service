const preset = require('../../packages/ui-kit/tailwind-preset.cjs');

module.exports = {
	presets: [preset],
	content: ['./index.html', './src/**/*.{vue,ts,js}'],
};
