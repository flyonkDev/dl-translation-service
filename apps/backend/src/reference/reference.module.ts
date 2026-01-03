import { Module } from '@nestjs/common';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { COUNTRIES_REPOSITORY } from './countries/countries.repository';
import { COUNTRIES_MVP } from './countries/countries.data';

@Module({
  controllers: [CountriesController],
  providers: [
    CountriesService,
    {
      provide: COUNTRIES_REPOSITORY,
      useValue: {
        list: async () => COUNTRIES_MVP,
      },
    },
  ],
  exports: [],
})
export class ReferenceModule {}
