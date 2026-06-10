<template>
	<section class="cp-hero">
		<!-- Background decorations: blurred blobs in brand colours -->
		<div class="cp-hero__bg" aria-hidden="true">
			<span class="cp-hero__blob cp-hero__blob--sea" />
			<span class="cp-hero__blob cp-hero__blob--orange" />
			<span class="cp-hero__bg-grid" />
		</div>

		<div class="container cp-hero__grid">
			<!-- Text column -->
			<div class="cp-hero__content">
				<!-- Breadcrumbs -->
				<Breadcrumbs
					:items="[
						{ label: breadcrumbsHome, to: '/' },
						{ label: breadcrumbsCurrent },
					]"
				/>

				<!-- Flag pair pill -->
				<div class="cp-hero__flag-pill" aria-hidden="true">
					<span class="fi cp-hero__flag" :class="`fi-${originFlag}`" />
					<span class="cp-hero__flag-arrow">
						<Icon icon="ph:arrow-right-bold" width="22" />
					</span>
					<span class="fi cp-hero__flag" :class="`fi-${destinationFlag}`" />
				</div>

				<p class="cp-hero__kicker">{{ kicker }}</p>
				<h1 class="cp-hero__title">{{ title }}</h1>
				<p class="cp-hero__lead">{{ lead }}</p>

				<!-- Author byline + last-reviewed pill (E-E-A-T / GEO citation signal) -->
				<AuthorByline
					v-if="authorName"
					:author-name="authorName"
					:profile-href="authorProfileHref"
					:by-label="authorByLabel"
					:reviewed-label="authorReviewedLabel"
					:reviewed-date="authorReviewedDate"
				/>

				<!-- Quick answer card -->
				<div
					class="cp-hero__quick-answer"
					:class="{ 'cp-hero__quick-answer--yes': quickAnswer.required, 'cp-hero__quick-answer--no': !quickAnswer.required }"
				>
					<div class="cp-hero__quick-answer-head">
						<div class="cp-hero__quick-answer-icon">
							<Icon
								:icon="quickAnswer.required ? 'ph:check-circle-fill' : 'ph:x-circle-fill'"
								width="36"
							/>
						</div>
						<div class="cp-hero__quick-answer-verdict">{{ quickAnswer.verdict }}</div>
					</div>
					<p class="cp-hero__quick-answer-text">{{ quickAnswer.text }}</p>
				</div>

				<div class="cp-hero__cta">
					<a :href="ctaPrimaryHref" @click.prevent="onPrimaryClick">
						<BaseButton type="button" variant="primary">
							<span class="font-bold">{{ ctaPrimaryLabel }}</span>
						</BaseButton>
					</a>
					<NuxtLinkLocale :to="ctaSecondaryTo" class="cp-hero__cta-link">
						{{ ctaSecondaryLabel }} <Icon icon="ph:arrow-right-bold" width="14" />
					</NuxtLinkLocale>
				</div>
			</div>

			<!-- Illustration column -->
			<div class="cp-hero__illu" aria-hidden="true">
				<div class="cp-hero__illu-glow" />
				<div class="cp-hero__illu-frame">
					<img :src="illustration" :alt="illustrationAlt" loading="eager" />
				</div>
				<!-- Floating accent badges -->
				<div class="cp-hero__illu-badge cp-hero__illu-badge--top">
					<Icon icon="ph:flag-pennant-fill" width="16" />
					<span>{{ badgeTopLabel }}</span>
				</div>
				<div class="cp-hero__illu-badge cp-hero__illu-badge--bottom">
					<Icon icon="ph:lightning-fill" width="16" />
					<span>{{ badgeBottomLabel }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import AuthorByline from '~/components/AuthorByline.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';

interface QuickAnswer {
	required: boolean;
	verdict: string;
	text: string;
}

withDefaults(
	defineProps<{
		breadcrumbsHome: string;
		breadcrumbsCurrent: string;
		originFlag: string; // ISO-2 lowercase, e.g. 'ru'
		destinationFlag: string; // 'th'
		kicker: string;
		title: string;
		lead: string;
		quickAnswer: QuickAnswer;
		ctaPrimaryLabel: string;
		ctaPrimaryHref: string;
		ctaSecondaryLabel: string;
		ctaSecondaryTo: string;
		illustration: string;
		illustrationAlt?: string;
		/** Small accent label shown in the top badge (e.g. "2026 Guide") */
		badgeTopLabel: string;
		/** Small accent label shown in the bottom badge (e.g. "Instant PDF") */
		badgeBottomLabel: string;
		/** Author byline name. Omit to hide the byline entirely. */
		authorName?: string;
		/** Author profile URL (localised path), e.g. '/authors/petr-shchepetin'. */
		authorProfileHref?: string;
		/** "By" label translated per locale (e.g. "By" / "Автор:" / "Por"). */
		authorByLabel?: string;
		/** "Last reviewed:" label per locale. Omit to hide the reviewed pill. */
		authorReviewedLabel?: string;
		/** Display date next to the reviewed label (e.g. "May 2026" / "Май 2026"). */
		authorReviewedDate?: string;
	}>(),
	{
		illustrationAlt: '',
		authorName: '',
		authorProfileHref: '/authors/petr-shchepetin',
		authorByLabel: 'By',
		authorReviewedLabel: '',
		authorReviewedDate: '',
	},
);

const emit = defineEmits<{
	(e: 'primary-click'): void;
}>();

function onPrimaryClick() {
	emit('primary-click');
}
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

/* === Section + background === */

.cp-hero {
	position: relative;
	background: linear-gradient(135deg, rgba(var(--c-mint), 0.45) 0%, rgba(var(--c-mint), 0.10) 60%, white 100%);
	overflow: hidden;
	padding: 56px 0 48px;
	isolation: isolate;

	@include up($bp-tablet) {
		padding: 80px 0 72px;
	}

	@include up($bp-desktop) {
		padding: 28px 0 88px;
	}
}

.cp-hero__bg {
	position: absolute;
	inset: 0;
	pointer-events: none;
	z-index: -1;
}

.cp-hero__blob {
	position: absolute;
	border-radius: 50%;
	filter: blur(80px);
}

.cp-hero__blob--sea {
	width: 380px;
	height: 380px;
	background: rgba(var(--c-sea), 0.30);
	top: -120px;
	right: -80px;

	@include up($bp-tablet) {
		width: 520px;
		height: 520px;
		top: -140px;
		right: -100px;
	}
}

.cp-hero__blob--orange {
	width: 260px;
	height: 260px;
	background: rgba(255, 159, 28, 0.18);
	bottom: -100px;
	left: -60px;

	@include up($bp-tablet) {
		width: 360px;
		height: 360px;
		bottom: -120px;
		left: -80px;
	}
}

/* Subtle dot grid overlay for premium feel */
.cp-hero__bg-grid {
	position: absolute;
	inset: 0;
	background-image: radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px);
	background-size: 22px 22px;
	mask-image: linear-gradient(to bottom, black, transparent 70%);
	-webkit-mask-image: linear-gradient(to bottom, black, transparent 70%);
	opacity: 0.45;
}

/* === Grid === */

.cp-hero__grid {
	position: relative;
	display: grid;
	gap: 36px;
	grid-template-columns: 1fr;
	align-items: center;

	@include up($bp-desktop) {
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
		gap: 56px;
	}
}

/* === Content === */


.cp-hero__flag-pill {
	display: inline-flex;
	align-items: center;
	gap: 12px;
	padding: 8px 14px 8px 8px;
	background: white;
	border: 1px solid rgba(15, 23, 42, 0.06);
	border-radius: 999px;
	box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.10);
	margin-bottom: 18px;
}

.cp-hero__flag {
	display: block;
	flex-shrink: 0;
	width: 36px;
	height: 26px;
	border-radius: 4px;
	box-shadow: 0 2px 6px rgba(15, 23, 42, 0.10);
	border: 1px solid rgba(15, 23, 42, 0.06);
}

.cp-hero__flag-arrow {
	display: inline-flex;
	color: rgb(var(--c-sea));
}

.cp-hero__kicker {
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: rgb(var(--c-sea));
	margin-bottom: 14px;
}

.cp-hero__title {
	/* Fluid scaling 28–40px. Short titles (Mexico, Thailand) sit comfortably
	   in the upper range; long ones never overflow into 6-line walls.
	   Content rule (CLAUDE.md): keep H1 ≤ 70 chars EN / ≤ 80 chars RU. */
	font-size: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
	font-weight: 800;
	line-height: 1.06;
	color: rgb(var(--c-slate-900));
	margin-bottom: 18px;
	letter-spacing: -0.02em;
	overflow-wrap: anywhere;
	hyphens: auto;
}

.cp-hero__lead {
	font-size: 15px;
	line-height: 1.65;
	color: rgb(var(--c-slate-700));
	margin-bottom: 24px;
	max-width: 600px;

	@include up($bp-tablet) {
		font-size: 16px;
	}
}

/* Quick answer card */
.cp-hero__quick-answer {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 16px 20px;
	border-radius: $radius-xl;
	background: white;
	border: 1px solid rgba(var(--c-sea), 0.25);
	box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(var(--c-sea), 0.10);
	margin-bottom: 28px;
	max-width: 600px;
}

.cp-hero__quick-answer--no {
	border-color: rgba(220, 38, 38, 0.25);
	box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(220, 38, 38, 0.10);

	.cp-hero__quick-answer-icon {
		color: #dc2626;
	}
}

.cp-hero__quick-answer-head {
	display: flex;
	align-items: center;
	gap: 14px;
}

.cp-hero__quick-answer-icon {
	flex-shrink: 0;
	display: inline-flex;
	color: rgb(var(--c-sea));
}

.cp-hero__quick-answer-verdict {
	font-size: 16px;
	font-weight: 800;
	color: rgb(var(--c-slate-900));
	line-height: 1.3;
}

.cp-hero__quick-answer-text {
	font-size: 13px;
	line-height: 1.6;
	color: rgb(var(--c-slate-700));
	margin: 0;
}

/* CTA */
.cp-hero__cta {
	display: flex;
	align-items: center;
	gap: 20px;
	flex-wrap: wrap;
}

.cp-hero__cta-link {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 13px;
	font-weight: 700;
	color: rgb(var(--c-sea));
	text-decoration: none;
	transition: color 0.15s ease;

	&:hover {
		text-decoration: underline;
		color: rgb(var(--c-slate-900));
	}
}

/* === Illustration === */

.cp-hero__illu {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 0;

	@include up($bp-desktop) {
		padding: 0;
	}
}

.cp-hero__illu-glow {
	position: absolute;
	inset: -16px;
	background:
		radial-gradient(ellipse at 70% 40%, rgba(var(--c-sea), 0.45) 0%, transparent 55%),
		radial-gradient(ellipse at 30% 80%, rgba(255, 159, 28, 0.25) 0%, transparent 55%);
	filter: blur(32px);
	z-index: -1;
	pointer-events: none;
}

.cp-hero__illu-frame {
	position: relative;
	border-radius: 28px;
	overflow: hidden;
	background: white;
	box-shadow:
		0 30px 80px -20px rgba(15, 23, 42, 0.28),
		0 12px 32px -8px rgba(15, 23, 42, 0.14),
		0 0 0 1px rgba(15, 23, 42, 0.06);
	transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;
	width: 100%;
	max-width: 480px;

	@include up($bp-desktop) {
		max-width: 540px;
	}

	&:hover {
		transform: translateY(-6px);
		box-shadow:
			0 40px 100px -20px rgba(15, 23, 42, 0.32),
			0 18px 40px -8px rgba(15, 23, 42, 0.16),
			0 0 0 1px rgba(15, 23, 42, 0.08);
	}
}

.cp-hero__illu-frame img {
	display: block;
	width: 100%;
	height: auto;
	max-height: 320px;
	object-fit: contain;

	@include up($bp-tablet) {
		max-height: 400px;
	}

	@include up($bp-desktop) {
		max-height: 440px;
	}
}

/* Floating accent badges */
.cp-hero__illu-badge {
	position: absolute;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 8px 14px;
	background: white;
	border-radius: 999px;
	box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.18);
	font-size: 12px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	border: 1px solid rgba(15, 23, 42, 0.06);
	white-space: nowrap;
}

.cp-hero__illu-badge--top {
	top: 14px;
	left: -10px;
	color: rgb(var(--c-sea));

	@include up($bp-tablet) {
		top: 24px;
		left: -16px;
	}
}

.cp-hero__illu-badge--bottom {
	bottom: 14px;
	right: -10px;
	color: rgb(var(--c-orange-deep, var(--c-sea)));

	@include up($bp-tablet) {
		bottom: 24px;
		right: -16px;
	}
}
</style>
