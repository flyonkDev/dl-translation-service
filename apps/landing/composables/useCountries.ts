import type { CountriesResponse, CountryDTO } from '~/types/reference';
import { resolveBrowserApiBase } from '~/utils/publicApiBase';
import { useRuntimeConfig } from '#imports';

/** Mirrors API featured block (priority 1–30) for offline / error fallback */
const STATIC_COUNTRIES: CountryDTO[] = [
	{ code: 'US', name: 'United States', priority: 1 },
	{ code: 'CA', name: 'Canada', priority: 2 },
	{ code: 'GB', name: 'United Kingdom', priority: 3 },
	{ code: 'AU', name: 'Australia', priority: 4 },
	{ code: 'DE', name: 'Germany', priority: 5 },
	{ code: 'FR', name: 'France', priority: 6 },
	{ code: 'ES', name: 'Spain', priority: 7 },
	{ code: 'IT', name: 'Italy', priority: 8 },
	{ code: 'NL', name: 'Netherlands', priority: 9 },
	{ code: 'CH', name: 'Switzerland', priority: 10 },
	{ code: 'PL', name: 'Poland', priority: 11 },
	{ code: 'SE', name: 'Sweden', priority: 12 },
	{ code: 'NO', name: 'Norway', priority: 13 },
	{ code: 'FI', name: 'Finland', priority: 14 },
	{ code: 'AT', name: 'Austria', priority: 15 },
	{ code: 'BE', name: 'Belgium', priority: 16 },
	{ code: 'IE', name: 'Ireland', priority: 17 },
	{ code: 'PT', name: 'Portugal', priority: 18 },
	{ code: 'CZ', name: 'Czechia', priority: 19 },
	{ code: 'RU', name: 'Russia', priority: 20 },
	{ code: 'UA', name: 'Ukraine', priority: 21 },
	{ code: 'TR', name: 'Türkiye', priority: 22 },
	{ code: 'CN', name: 'China', priority: 23 },
	{ code: 'JP', name: 'Japan', priority: 24 },
	{ code: 'KR', name: 'South Korea', priority: 25 },
	{ code: 'IN', name: 'India', priority: 26 },
	{ code: 'BR', name: 'Brazil', priority: 27 },
	{ code: 'MX', name: 'Mexico', priority: 28 },
	{ code: 'AR', name: 'Argentina', priority: 29 },
	{ code: 'ZA', name: 'South Africa', priority: 30 },
];

export function useCountries() {
	return useAsyncData<CountryDTO[]>(
		'ref:countries',

		async () => {
			try {
				const config = useRuntimeConfig();
				const baseURL = resolveBrowserApiBase(String(config.public.apiBaseUrl || ''));
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
