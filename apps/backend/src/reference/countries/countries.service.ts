import { Inject, Injectable } from '@nestjs/common';
import type { CountryDTO } from './dto/country.dto';
import type { CountriesRepository } from './countries.repository';
import { COUNTRIES_REPOSITORY } from './countries.repository';

export type CountriesQuery = {
  q?: string;
  limit?: number;
};

@Injectable()
export class CountriesService {
  constructor(
    @Inject(COUNTRIES_REPOSITORY)
    private readonly repo: CountriesRepository,
  ) {}

  async getCountries(query: CountriesQuery): Promise<CountryDTO[]> {
    const items = await this.repo.list();

    const q = (query.q ?? '').trim().toLowerCase();
    let result = items;

    if (q) {
      result = result.filter((c) => {
        const code = c.code.toLowerCase();
        const name = c.name.toLowerCase();
        const nativeName = (c.nativeName ?? '').toLowerCase();
        return code.includes(q) || name.includes(q) || nativeName.includes(q);
      });
    }

    result = [...result].sort((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return a.name.localeCompare(b.name);
    });

    const limit = Number.isFinite(query.limit) ? Number(query.limit) : undefined;
    if (limit && limit > 0) result = result.slice(0, limit);

    return result;
  }
}
