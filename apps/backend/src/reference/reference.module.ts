import { Module } from '@nestjs/common';

import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { COUNTRIES_REPOSITORY } from './countries/countries.repository';
import { COUNTRIES_MVP } from './countries/countries.data';

import { PricingController } from './pricing/pricing.controller';
import { PricingService } from './pricing/pricing.service';
import { PRICING_REPOSITORY } from './pricing/pricing.repository';
import { PRICING_MVP } from './pricing/pricing.data';

@Module({
  controllers: [CountriesController, PricingController],
  providers: [
    CountriesService,
    {
      provide: COUNTRIES_REPOSITORY,
      useValue: {
        list: async () => COUNTRIES_MVP,
      },
    },
    PricingService,
    {
      provide: PRICING_REPOSITORY,
      useValue: {
        listPlans: async () => PRICING_MVP,
      }
    }
  ],
  exports: [],
})
export class ReferenceModule {}
