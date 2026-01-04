import type { PricingResponse, PricingPlanDTO } from '~/types/reference';

export function usePricing() {
	return useAsyncData<PricingPlanDTO[]>(
		'ref:pricing',
		async () => {
			const baseURL = process.server ? useRequestURL().origin : undefined;

			const res = await $fetch<PricingResponse>('/api/pricing', {
				baseURL,
			});
      
			return res.items;
		},
		{
			default: () => [],
		}
	);
}
