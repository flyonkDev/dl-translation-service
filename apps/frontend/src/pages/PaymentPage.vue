<template>
	<div class="apply-page">
		<div class="apply-shell">
			<header class="apply-progress">
				<div class="apply-progress__steps">
					<div class="apply-progress__step is-done">
						<span class="index">01</span>
						<span>{{ t('steps.information') }}</span>
					</div>
					<div class="apply-progress__step is-active">
						<span class="index">02</span>
						<span>{{ t('steps.payment') }}</span>
					</div>
				</div>

				<div class="apply-progress__bar">
					<div class="apply-progress__bar-fill" style="width: 100%" />
				</div>
			</header>

			<main class="apply-main">
				<section class="apply-form">
					<!-- Verification status -->
					<div
						class="verify-badge"
						:class="{
							'verify-badge--passed': verifyStatus === 'passed',
							'verify-badge--review': verifyStatus === 'review',
							'verify-badge--missing': verifyStatus === null,
						}"
					>
						<span class="verify-badge__icon">{{ verifyIcon }}</span>
						<span>{{ verifyText }}</span>
					</div>

					<!-- Order summary -->
					<div class="order-card">
						<h2 class="order-card__title">{{ t('payment.orderTitle') }}</h2>

						<div class="order-card__row">
							<span class="order-card__label">{{ t('payment.orderProduct') }}</span>
							<span class="order-card__value">{{ t('payment.orderProductValue') }}</span>
						</div>
						<div class="order-card__row">
							<span class="order-card__label">{{ t('payment.orderPlan') }}</span>
							<span class="order-card__value">{{ planLabel }}</span>
						</div>
						<div class="order-card__divider" />
						<div class="order-card__row order-card__row--total">
							<span>{{ t('payment.orderTotal') }}</span>
							<span class="order-card__total-price">{{ priceLabel }}</span>
						</div>
					</div>

					<!-- Checkout section (before payment) -->
					<div v-if="!isPaid" class="checkout-section">
						<div
							class="pay-methods"
							role="radiogroup"
							:aria-label="t('payment.methodLabel')"
						>
							<button
								type="button"
								class="pay-method"
								:class="{ 'is-selected': selectedMethod === 'gumroad' }"
								role="radio"
								:aria-checked="selectedMethod === 'gumroad'"
								@click="selectedMethod = 'gumroad'"
							>
								<span class="pay-method__icon" aria-hidden="true">💳</span>
								<span class="pay-method__body">
									<span class="pay-method__title">{{ t('payment.methodCard') }}</span>
									<span class="pay-method__sub">{{ t('payment.methodCardSub') }}</span>
								</span>
							</button>
							<button
								type="button"
								class="pay-method"
								:class="{ 'is-selected': selectedMethod === 'nowpayments' }"
								role="radio"
								:aria-checked="selectedMethod === 'nowpayments'"
								@click="selectedMethod = 'nowpayments'"
							>
								<span class="pay-method__icon" aria-hidden="true">₿</span>
								<span class="pay-method__body">
									<span class="pay-method__title">{{ t('payment.methodCrypto') }}</span>
									<span class="pay-method__sub">{{ t('payment.methodCryptoSub') }}</span>
								</span>
							</button>
						</div>

						<!-- Gumroad: keep hosted overlay link for instant callback. -->
						<a
							v-if="selectedMethod === 'gumroad'"
							:href="gumroadUrl"
							data-gumroad-ignore="true"
							class="checkout-link"
							@click="onGumroadCheckoutClick"
						>
							<BaseButton class="checkout-btn" variant="primary" type="button">
								<span class="checkout-btn__lock">🔒</span>
								{{ t('payment.payButton', { price: priceLabel }) }}
							</BaseButton>
						</a>

						<!-- Crypto: server-side invoice, then redirect. -->
						<BaseButton
							v-else
							class="checkout-btn"
							variant="primary"
							type="button"
							:loading="isCreatingCheckout"
							:disabled="isCreatingCheckout || !applicationId"
							@click="onCryptoCheckoutClick"
						>
							<span class="checkout-btn__lock">🔒</span>
							{{ t('payment.payCryptoButton', { price: priceLabel }) }}
						</BaseButton>

						<p class="checkout-note">{{ checkoutNote }}</p>
					</div>

					<!-- Download section (after payment confirmed) -->
					<div v-else class="download-section">
						<div class="paid-badge">
							<span>✓</span>
							{{ t('payment.paymentConfirmed') }}
						</div>
						<BaseButton
							variant="primary"
							:loading="isDownloading"
							:disabled="!applicationId || isDownloading"
							@click="onDownload"
						>
							{{ t('payment.downloadPdf') }}
						</BaseButton>
					</div>

					<!-- Dev tools -->
					<template v-if="isDev">
						<div class="dev-panel">
							<p class="dev-panel__label">Dev only</p>
							<div class="dev-panel__buttons">
								<BaseButton
									variant="secondary"
									:disabled="!applicationId || isDownloading"
									@click="onPreview"
								>
									{{ t('payment.previewBrowser') }}
								</BaseButton>
								<BaseButton
									variant="secondary"
									:loading="isDownloading"
									:disabled="!applicationId || isDownloading"
									@click="onDownload"
								>
									{{ t('payment.downloadPdf') }}
								</BaseButton>
								<BaseButton variant="secondary" @click="simulatePaid">
									Simulate paid
								</BaseButton>
							</div>
						</div>
					</template>

					<div class="section-footer">
						<BaseButton variant="secondary" @click="goBack">
							{{ t('payment.backToDetails') }}
						</BaseButton>
					</div>

					<!-- applicationId is internal; don't show to users -->
				</section>
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, onMounted, onUnmounted, ref } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { useI18n } from 'vue-i18n';
	import { toast } from 'vue-sonner';

	import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
	import { useDriverApplicationStore } from '@/entities/driver-application';
	import { captureProductEvent } from '@/shared/lib/posthog';
	import { apiGetBlob } from '@/shared/api/apiClient';
	import { API_BASE_URL } from '@/shared/api/httpClient';
	import type { PlanYears } from '@/entities/driver-application/model/types';
	import {
		createCheckout,
		getApplicationStatus,
		type PaymentProviderId,
	} from '@/features/payment';

	const GUMROAD_URLS: Record<PlanYears, string> = {
		1: 'https://companion5.gumroad.com/l/irwbas',
		3: 'https://companion5.gumroad.com/l/iexiii',
		5: 'https://companion5.gumroad.com/l/nprol',
	};

	const PLAN_PRICES: Record<PlanYears, number> = {
		1: 35,
		3: 45,
		5: 55,
	};

	const isDev = import.meta.env.DEV;

	const route = useRoute();
	const router = useRouter();
	const { t } = useI18n();
	const store = useDriverApplicationStore();

	const isDownloading = ref(false);
	const isPaid = ref(false);
	const isCreatingCheckout = ref(false);
	const selectedMethod = ref<PaymentProviderId>('gumroad');
	let statusPollTimer: ReturnType<typeof setInterval> | null = null;

	const checkoutNote = computed(() => {
		return selectedMethod.value === 'nowpayments'
			? t('payment.checkoutNoteCrypto')
			: t('payment.checkoutNote');
	});

	const verifyStatus = computed(() => store.verify?.verification?.status ?? null);

	const verifyIcon = computed(() => {
		if (verifyStatus.value === 'passed') return '✅';
		if (verifyStatus.value === 'review') return '⚠️';
		return 'ℹ️';
	});

	const verifyText = computed(() => {
		if (verifyStatus.value === 'passed') return t('payment.verifiedPassed');
		if (verifyStatus.value === 'review') return t('payment.verifiedReview');
		return t('payment.verifiedMissing');
	});

	const planYears = computed(() => store.selectedYears as PlanYears);

	const planLabel = computed(() => {
		const y = planYears.value;
		return y === 1 ? t('payment.plan1y') : t('payment.planNy', { n: y });
	});

	const priceLabel = computed(() => {
		const price = PLAN_PRICES[planYears.value] ?? 35;
		return `$${price}`;
	});

	const gumroadUrl = computed(() => {
		const u = new URL(GUMROAD_URLS[planYears.value]);
		u.searchParams.set('wanted', 'true');
		u.searchParams.set('quantity', '1');
		u.searchParams.set('referrer', window.location.href);
		return u.toString();
	});

	function pickParam(v: unknown): string | null {
		if (typeof v === 'string') return v;
		if (Array.isArray(v) && typeof v[0] === 'string') return v[0];
		return null;
	}

	const applicationId = ref<string | null>(pickParam(route.params.applicationId));

	function emitPaymentPageViewed() {
		const id = applicationId.value;
		if (!id) return;
		captureProductEvent('payment_page_viewed', {
			application_id: id,
			plan_years: planYears.value,
		});
	}

	function onGumroadCheckoutClick() {
		captureProductEvent('checkout_started', {
			payment_provider: 'gumroad',
			plan_years: planYears.value,
			application_id: applicationId.value ?? undefined,
		});
	}

	async function onCryptoCheckoutClick() {
		const id = applicationId.value;
		if (!id || isCreatingCheckout.value) return;

		try {
			isCreatingCheckout.value = true;
			captureProductEvent('checkout_started', {
				payment_provider: 'nowpayments',
				plan_years: planYears.value,
				application_id: id,
			});
			const { redirectUrl } = await createCheckout(id, 'nowpayments');
			window.location.href = redirectUrl;
		} catch {
			toast.error(t('payment.cryptoCheckoutFailed'));
			isCreatingCheckout.value = false;
		}
	}

	async function refreshStatus() {
		const id = applicationId.value;
		if (!id) return;
		try {
			const { status } = await getApplicationStatus(id);
			if (status === 'paid' || status === 'pdf_ready') {
				if (!isPaid.value) {
					isPaid.value = true;
					captureProductEvent('purchase_completed', {
						payment_provider: selectedMethod.value,
						plan_years: planYears.value,
						application_id: id,
					});
					toast.success(t('payment.paymentConfirmed'));
				}
				stopStatusPolling();
			}
		} catch {
			// keep polling — network blips are fine
		}
	}

	function startStatusPolling() {
		if (statusPollTimer) return;
		statusPollTimer = setInterval(refreshStatus, 5000);
	}

	function stopStatusPolling() {
		if (statusPollTimer) {
			clearInterval(statusPollTimer);
			statusPollTimer = null;
		}
	}

	function onGumroadPurchaseComplete(_data: unknown) {
		isPaid.value = true;
		captureProductEvent('purchase_completed', {
			payment_provider: 'gumroad',
			plan_years: planYears.value,
			application_id: applicationId.value ?? undefined,
		});
		toast.success(t('payment.paymentConfirmed'));
	}

	declare global {
		interface Window {
			onGumroadPurchaseComplete?: (data: unknown) => void;
		}
	}

	onMounted(async () => {
		// Register Gumroad purchase callback
		window.onGumroadPurchaseComplete = onGumroadPurchaseComplete;

		const resolvedId = applicationId.value ?? sessionStorage.getItem('driverApp.applicationId');
		if (!resolvedId) {
			toast.error(t('payment.applicationNotFound'));
			await router.replace({ name: 'apply' });
			return;
		}

		if (!applicationId.value) {
			applicationId.value = resolvedId;
			await router.replace({ name: 'payment', params: { applicationId: resolvedId } });
		}
		store.setApplicationId(resolvedId);
		sessionStorage.setItem('driverApp.applicationId', resolvedId);
		emitPaymentPageViewed();

		// If we came back from a crypto provider's success redirect, expect status=paid soon.
		// Even without ?paid=1, polling gives us Gumroad-completion feedback without UX regressions.
		if (route.query.paid != null) {
			selectedMethod.value = 'nowpayments';
		}
		await refreshStatus();
		if (!isPaid.value) startStatusPolling();
	});

	onUnmounted(() => {
		delete window.onGumroadPurchaseComplete;
		stopStatusPolling();
	});

	function goBack() {
		router.push({ name: 'apply' });
	}

	function simulatePaid() {
		isPaid.value = true;
		captureProductEvent('purchase_completed', {
			payment_provider: 'gumroad',
			plan_years: planYears.value,
			application_id: applicationId.value ?? undefined,
			dev_simulate: true,
		});
	}

	function makePdfUrl(disposition: 'inline' | 'attachment') {
		const id = applicationId.value;
		if (!id) return null;
		const ts = Date.now();
		return `${API_BASE_URL}/applications/${id}/pdf?disposition=${disposition}&t=${ts}`;
	}

	function onPreview() {
		const url = makePdfUrl('inline');
		if (!url) return;
		window.open(url, '_blank');
	}

	async function onDownload() {
		const id = applicationId.value;
		if (!id) return;

		const url = `/applications/${id}/pdf?disposition=attachment&t=${Date.now()}`;

		try {
			isDownloading.value = true;
			const blob = await apiGetBlob(url);

			const objectUrl = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = objectUrl;
			a.download = `idp-companion-${id}.pdf`;
			document.body.appendChild(a);
			a.click();
			a.remove();
			URL.revokeObjectURL(objectUrl);

			captureProductEvent('companion_pdf_downloaded', {
				application_id: id,
			});
			toast.success(t('payment.pdfDownloaded'));
		} catch {
			toast.error(t('payment.pdfDownloadFailed'));
		} finally {
			isDownloading.value = false;
		}
	}
</script>

<style scoped lang="scss">
	.apply-page {
		background: #f3f4f6;
		padding: 24px 16px 40px;
		min-height: calc(100vh - 350px);
	}

	.apply-shell {
		max-width: 1280px;
		margin: 0 auto;
		background: $white;
		border-radius: $radius-2xl;
		box-shadow: $shadow-soft;
		padding: 20px 20px 24px;
	}

	.apply-progress {
		margin-bottom: 16px;
	}

	.apply-progress__steps {
		display: flex;
		gap: 16px;
		margin-bottom: 8px;
	}

	.apply-progress__step {
		width: 50%;
		display: flex;
		align-items: center;
		gap: 8px;
		@include text-sm;
		color: $slate-500;

		.index {
			width: 24px;
			height: 24px;
			border-radius: 999px;
			border: 1px solid $slate-200;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 11px;
			font-weight: 700;
			color: $slate-700;
		}

		&.is-active {
			color: $slate-900;

			.index {
				border-color: #2563eb;
				background: #2563eb;
				color: $white;
			}
		}

		&.is-done {
			color: #16a34a;

			.index {
				border-color: #16a34a;
				background: #bbf7d0;
				color: #16a34a;
			}
		}
	}

	.apply-progress__bar {
		height: 4px;
		background: $slate-200;
		border-radius: 999px;
		overflow: hidden;
	}

	.apply-progress__bar-fill {
		height: 100%;
		background: #2563eb;
	}

	.apply-main {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
	}

	// Verification badge
	.verify-badge {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px 14px;
		border-radius: 10px;
		@include text-sm;
		border: 1px solid $slate-200;
		background: #f9fafb;
		margin-bottom: 16px;

		&--passed {
			background: #f0fdf4;
			border-color: #bbf7d0;
			color: #15803d;
		}

		&--review {
			background: #fffbeb;
			border-color: #fde68a;
			color: #92400e;
		}

		&--missing {
			background: #f8fafc;
			border-color: $slate-200;
			color: $slate-500;
		}
	}

	// Order summary card
	.order-card {
		border: 1px solid $slate-200;
		border-radius: 14px;
		padding: 18px 20px;
		margin-bottom: 20px;
	}

	.order-card__title {
		font-size: 15px;
		font-weight: 700;
		color: $slate-900;
		margin-bottom: 14px;
	}

	.order-card__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 6px 0;
		@include text-sm;
		color: $slate-500;

		&--total {
			font-weight: 700;
			color: $slate-900;
			@include text-md;
		}
	}

	.order-card__label {
		color: $slate-500;
	}

	.order-card__value {
		font-weight: 500;
		color: $slate-700;
	}

	.order-card__divider {
		height: 1px;
		background: $slate-100;
		margin: 10px 0;
	}

	.order-card__total-price {
		font-size: 20px;
		font-weight: 800;
		color: $slate-900;
	}

	// Checkout
	.checkout-section {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 10px;
		margin-bottom: 16px;
	}

	.pay-methods {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		margin-bottom: 6px;
	}

	.pay-method {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 12px 14px;
		border: 1px solid $slate-200;
		border-radius: 12px;
		background: #fff;
		cursor: pointer;
		text-align: left;
		transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;

		&:hover {
			border-color: $slate-400;
		}

		&.is-selected {
			border-color: #2563eb;
			background: #eff6ff;
			box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
		}
	}

	.pay-method__icon {
		font-size: 20px;
		line-height: 1;
		width: 28px;
		text-align: center;
	}

	.pay-method__body {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}

	.pay-method__title {
		@include text-sm;
		font-weight: 600;
		color: $slate-900;
	}

	.pay-method__sub {
		@include text-xs;
		color: $slate-500;
	}

	@media (max-width: 480px) {
		.pay-methods {
			grid-template-columns: 1fr;
		}
	}

	.checkout-link {
		display: block;
		text-decoration: none;
	}

	.checkout-btn {
		width: 100%;
		font-size: 16px;
		font-weight: 700;
		padding: 14px 20px;
	}

	.checkout-btn__lock {
		margin-right: 6px;
		font-size: 14px;
	}

	.checkout-note {
		text-align: center;
		@include text-xs;
		color: $slate-400;
	}

	// Download section (after payment)
	.download-section {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 16px;
	}

	.paid-badge {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 12px 16px;
		border-radius: 10px;
		background: #f0fdf4;
		border: 1px solid #bbf7d0;
		color: #15803d;
		font-weight: 600;
		@include text-sm;
	}

	// Dev panel
	.dev-panel {
		margin-top: 16px;
		padding: 12px 14px;
		border-radius: 10px;
		background: #fefce8;
		border: 1px dashed #fde047;
	}

	.dev-panel__label {
		@include text-xs;
		font-weight: 700;
		color: #854d0e;
		margin-bottom: 8px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.dev-panel__buttons {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	.section-footer {
		display: flex;
		gap: 10px;
		margin-top: 18px;
		flex-wrap: wrap;
	}

	.hint {
		margin-top: 12px;
		@include text-xs;
		color: $slate-500;
	}
</style>
