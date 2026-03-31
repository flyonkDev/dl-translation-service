import type { CountriesResponse, CountryDTO } from '~/types/reference';
import { useRuntimeConfig } from '#imports';

const STATIC_COUNTRIES: CountryDTO[] = [
	{ code: 'US', name: 'United States', priority: 1 },
	{ code: 'CA', name: 'Canada', priority: 2 },
	{ code: 'GB', name: 'United Kingdom', priority: 3 },
	{ code: 'DE', name: 'Germany', priority: 4 },
	{ code: 'FR', name: 'France', priority: 5 },
	{ code: 'ES', name: 'Spain', priority: 6 },
	{ code: 'IT', name: 'Italy', priority: 7 },
	{ code: 'PL', name: 'Poland', priority: 8 },
	{ code: 'AU', name: 'Australia', priority: 9 },
	{ code: 'GE', name: 'Georgia', priority: 10 },
];

export function useCountries() {
	return useAsyncData<CountryDTO[]>(
		'ref:countries',

		async () => {
			try {
				const config = useRuntimeConfig();
				const baseURL = String(config.public.apiBaseUrl || '').trim().replace(/\/+$/, '');
				const res = await $fetch<CountriesResponse>('/countries', {
					baseURL,
					timeout: 2000,
				});

				return res.items;
			} catch (e) {
				console.warn('[useCountries] Using static fallback');

				return STATIC_COUNTRIES;
			}
		},

		{
			default: () => STATIC_COUNTRIES,

			server: false,

			lazy: true,
		},
	);
}
