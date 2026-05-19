<template>
	<div :style="rootStyle">
		<!-- Brand mark -->
		<div :style="brandStyle">
			<div :style="brandDotStyle" />
			<span :style="brandTextStyle">IDP COMPANION</span>
		</div>

		<!-- Author block: avatar + name/role/tagline -->
		<div :style="authorBlockStyle">
			<img :src="avatarUrl" :alt="name" :style="avatarStyle" />

			<div :style="textColStyle">
				<div :style="byStyle">{{ byLabel }}</div>
				<div :style="nameStyle">{{ name }}</div>
				<div :style="roleStyle">{{ role }}</div>
				<div v-if="tagline" :style="taglineStyle">{{ tagline }}</div>
			</div>
		</div>

		<!-- Footer -->
		<div :style="footerStyle">
			<span :style="footerUrlStyle">idpcompanion.com</span>
			<span :style="footerDotStyle">·</span>
			<span :style="footerNoteStyle">Author profile</span>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		name?: string;
		role?: string;
		tagline?: string;
		avatarUrl?: string;
		byLabel?: string;
	}>(),
	{
		name: 'Petr Shchepetin',
		role: 'Co-founder & lead author, IDP Companion',
		tagline: 'Writes and fact-checks every country-pair driving guide',
		avatarUrl: '/authors/petr-shchepetin.jpg',
		byLabel: 'BY',
	},
);

void props;

const rootStyle = {
	width: '1200px',
	height: '630px',
	display: 'flex',
	flexDirection: 'column' as const,
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

const authorBlockStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '48px',
};

const avatarStyle = {
	width: '280px',
	height: '280px',
	borderRadius: '999px',
	objectFit: 'cover' as const,
	border: '6px solid #ffffff',
	boxShadow: '0 24px 48px rgba(15, 23, 42, 0.22)',
};

const textColStyle = {
	display: 'flex',
	flexDirection: 'column' as const,
	gap: '8px',
	maxWidth: '720px',
};

const byStyle = {
	fontSize: '18px',
	fontWeight: '700',
	letterSpacing: '0.22em',
	color: '#2EC4B6',
};

const nameStyle = {
	fontSize: '64px',
	fontWeight: '800',
	lineHeight: '1.05',
	color: '#0f172a',
	letterSpacing: '-0.01em',
};

const roleStyle = {
	fontSize: '26px',
	fontWeight: '600',
	color: '#334155',
	lineHeight: '1.3',
};

const taglineStyle = {
	fontSize: '22px',
	fontWeight: '400',
	color: '#475569',
	lineHeight: '1.4',
	marginTop: '8px',
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
