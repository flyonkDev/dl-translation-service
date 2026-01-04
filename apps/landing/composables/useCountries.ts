import type { CountriesResponse, CountryDTO } from '~/types/reference';

export function useCountries() {
	return useAsyncData<CountryDTO[]>(
		'ref:countries',
		async () => {
			const baseURL = process.server ? useRequestURL().origin : undefined;

			const res = await $fetch<CountriesResponse>('/api/countries', {
				baseURL,
			});

			return res.items;
		},
		{
			default: () => [],
		}
	);
}
