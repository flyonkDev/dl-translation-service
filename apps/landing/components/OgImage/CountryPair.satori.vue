<template>
	<div :style="rootStyle">
		<!-- Brand mark -->
		<div :style="brandStyle">
			<div :style="brandDotStyle" />
			<span :style="brandTextStyle">IDP COMPANION</span>
		</div>

		<!-- Flag pair with arrow -->
		<div :style="flagsRowStyle">
			<div :style="flagWrapStyle">
				<img
					:src="flagUrl(origin.code)"
					:alt="origin.name"
					:style="flagImgStyle"
				/>
				<div :style="flagLabelStyle">{{ origin.name }}</div>
			</div>

			<div :style="arrowWrapStyle">
				<svg
					width="80"
					height="80"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 12H19M19 12L13 6M19 12L13 18"
						stroke="#2EC4B6"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>

			<div :style="flagWrapStyle">
				<img
					:src="flagUrl(destination.code)"
					:alt="destination.name"
					:style="flagImgStyle"
				/>
				<div :style="flagLabelStyle">{{ destination.name }}</div>
			</div>
		</div>

		<!-- Title block -->
		<div :style="titleBlockStyle">
			<div :style="titleStyle">{{ title }}</div>
			<div :style="subtitleStyle">{{ subtitle }}</div>
		</div>

		<!-- Bottom URL/disclaimer line -->
		<div :style="footerStyle">
			<span :style="footerUrlStyle">idpcompanion.com</span>
			<span :style="footerDotStyle">·</span>
			<span :style="footerNoteStyle">Companion document — not a government IDP</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface CountryRef {
	code: string; // ISO-2 lowercase, e.g. 'ru', 'th'
	name: string;
}

const props = withDefaults(
	defineProps<{
		origin?: CountryRef;
		destination?: CountryRef;
		title?: string;
		subtitle?: string;
	}>(),
	{
		origin: () => ({ code: 'ru', name: 'Russia' }),
		destination: () => ({ code: 'th', name: 'Thailand' }),
		title: 'IDP for Russian Drivers in Thailand',
		subtitle: '2026 Guide — fines, rules, what works',
	},
);

function flagUrl(code: string): string {
	// flagcdn.com provides high-quality SVG flags at predictable URLs
	return `https://flagcdn.com/${code.toLowerCase()}.svg`;
}

const rootStyle = {
	width: '1200px',
	height: '630px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	padding: '64px',
	background: 'linear-gradient(135deg, #CBF3F0 0%, #ffffff 55%, #ffffff 100%)',
	fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
	color: '#0f172a',
	position: 'relative' as const,
};

const brandStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '12px',
};

const brandDotStyle = {
	width: '14px',
	height: '14px',
	borderRadius: '999px',
	background: '#2EC4B6',
};

const brandTextStyle = {
	fontSize: '20px',
	fontWeight: '800',
	letterSpacing: '0.18em',
	color: '#0f172a',
};

const flagsRowStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '36px',
	margin: '8px 0',
};

const flagWrapStyle = {
	display: 'flex',
	flexDirection: 'column' as const,
	alignItems: 'center',
	gap: '14px',
};

const flagImgStyle = {
	width: '180px',
	height: '120px',
	borderRadius: '14px',
	boxShadow: '0 18px 36px rgba(15, 23, 42, 0.18)',
	objectFit: 'cover' as const,
	border: '1px solid rgba(15, 23, 42, 0.08)',
};

const flagLabelStyle = {
	fontSize: '22px',
	fontWeight: '700',
	color: '#334155',
	letterSpacing: '0.02em',
};

const arrowWrapStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '80px',
	height: '120px',
};

const titleBlockStyle = {
	display: 'flex',
	flexDirection: 'column' as const,
	gap: '12px',
};

const titleStyle = computed(() => ({
	fontSize: props.title.length > 60 ? '46px' : '54px',
	fontWeight: '800',
	lineHeight: '1.08',
	color: '#0f172a',
	letterSpacing: '-0.01em',
}));

const subtitleStyle = {
	fontSize: '24px',
	fontWeight: '500',
	color: '#475569',
	lineHeight: '1.3',
};

const footerStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '12px',
	fontSize: '18px',
	color: '#64748b',
};

const footerUrlStyle = {
	fontWeight: '700',
	color: '#2EC4B6',
};

const footerDotStyle = {
	color: '#cbd5e1',
};

const footerNoteStyle = {
	fontWeight: '400',
};
</script>
