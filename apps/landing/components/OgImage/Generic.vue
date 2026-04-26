<template>
	<div :style="rootStyle">
		<div :style="brandStyle">
			<div :style="brandDotStyle" />
			<span :style="brandTextStyle">IDP COMPANION</span>
		</div>

		<div :style="contentStyle">
			<div :style="titleStyle">{{ title }}</div>
			<div :style="subtitleStyle">{{ subtitle }}</div>
		</div>

		<div :style="footerStyle">
			<span :style="footerUrlStyle">idpcompanion.com</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		title?: string;
		subtitle?: string;
	}>(),
	{
		title: 'IDP Companion — Instant Multilingual PDF',
		subtitle: 'Generated from your real driver license. Use abroad with rentals and authorities.',
	},
);

const rootStyle = {
	width: '1200px',
	height: '630px',
	display: 'flex',
	flexDirection: 'column' as const,
	justifyContent: 'space-between',
	padding: '72px',
	background: 'linear-gradient(135deg, #CBF3F0 0%, #ffffff 60%, #ffffff 100%)',
	fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
	color: '#0f172a',
};

const brandStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '14px',
};

const brandDotStyle = {
	width: '16px',
	height: '16px',
	borderRadius: '999px',
	background: '#2EC4B6',
};

const brandTextStyle = {
	fontSize: '22px',
	fontWeight: '800',
	letterSpacing: '0.18em',
};

const contentStyle = {
	display: 'flex',
	flexDirection: 'column' as const,
	gap: '20px',
};

const titleStyle = computed(() => ({
	fontSize: props.title.length > 50 ? '54px' : '64px',
	fontWeight: '800',
	lineHeight: '1.06',
	color: '#0f172a',
	letterSpacing: '-0.01em',
}));

const subtitleStyle = {
	fontSize: '26px',
	fontWeight: '500',
	color: '#475569',
	lineHeight: '1.35',
	maxWidth: '900px',
};

const footerStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '12px',
	fontSize: '20px',
};

const footerUrlStyle = {
	fontWeight: '700',
	color: '#2EC4B6',
};
</script>
