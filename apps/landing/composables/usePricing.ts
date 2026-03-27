import type { PricingResponse, PricingPlanDTO } from '~/types/reference';

const STATIC_PLANS: PricingPlanDTO[] = [
	{
		id: 'plan_5y',
		years: 5,
		title: '5 years',
		sub: 'Best value',
		priceCents: 5500,
		currency: 'USD',
		badge: 'Recommended',
	},
	{
		id: 'plan_3y',
		years: 3,
		title: '3 years',
		sub: 'Extended access',
		priceCents: 4500,
		currency: 'USD',
	},
	{
		id: 'plan_1y',
		years: 1,
		title: '1 year',
		sub: 'Basic',
		priceCents: 3500,
		currency: 'USD',
	},
];

export function usePricing() {
	return useAsyncData<PricingPlanDTO[]>(
		'ref:pricing',

		async () => {
			try {
				const res = await $fetch<PricingResponse>('/api/pricing', {
					timeout: 2000,
				});

				return res.items;
			} catch (e) {
				console.warn('[usePricing] Using static fallback');

				return STATIC_PLANS;
			}
		},

		{
			default: () => STATIC_PLANS,

			server: false,

			lazy: true,
		},
	);
}
