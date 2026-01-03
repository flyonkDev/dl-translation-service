import type { CountryDTO } from './dto/country.dto';

export interface CountriesRepository {
  list(): Promise<CountryDTO[]>;
}

export const COUNTRIES_REPOSITORY = Symbol('COUNTRIES_REPOSITORY');