import { apiGet, apiPost } from '@/shared/api/apiClient';

export type PaymentProviderId = 'gumroad' | 'nowpayments';

export interface CreateCheckoutResponse {
	paymentId: string;
	redirectUrl: string;
	provider: PaymentProviderId;
}

export interface ApplicationStatusResponse {
	applicationId: string;
	status: 'created' | 'paid' | 'pdf_ready';
	planYears: number;
	createdAt: string;
}

export async function createCheckout(
	applicationId: string,
	provider: PaymentProviderId,
): Promise<CreateCheckoutResponse> {
	return apiPost<CreateCheckoutResponse, { applicationId: string; provider: PaymentProviderId }>(
		'/payments/checkout',
		{ applicationId, provider },
	);
}

export async function getApplicationStatus(
	applicationId: string,
): Promise<ApplicationStatusResponse> {
	return apiGet<ApplicationStatusResponse>(`/applications/${applicationId}/status`);
}
