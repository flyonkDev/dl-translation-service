import { apiGet } from '@/shared/api/apiClient';
import type { CountriesResponse } from './types';

export async function fetchCountries(): Promise<CountriesResponse> {
	return apiGet<CountriesResponse>('/countries');
}
