import { apiGet } from '@/shared/api/apiClient';
import type { PricingResponse } from './types';

export async function fetchPricing(): Promise<PricingResponse> {
	return apiGet<PricingResponse>('/pricing');
}
