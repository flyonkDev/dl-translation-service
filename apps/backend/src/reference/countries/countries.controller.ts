import { Controller, Get, Header, Query } from '@nestjs/common';
import { CountriesService } from './countries.service';
import type { CountryDTO } from './dto/country.dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  // GET /api/countries?q=vie&limit=10
  @Get()
  @Header('Cache-Control', 'public, max-age=86400') // cached for 24 hours
  async list(
    @Query('q') q?: string,
    @Query('limit') limit?: string,
  ): Promise<{ items: CountryDTO[] }> {
    const parsedLimit = limit ? Number(limit) : undefined;

    const items = await this.countriesService.getCountries({
      q,
      limit: Number.isFinite(parsedLimit) ? parsedLimit : undefined,
    });

    return { items };
  }
}