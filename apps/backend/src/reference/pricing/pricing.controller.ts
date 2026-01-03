import { Controller, Get, Header } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Get()
  @Header('Cache-Control', 'public, max-age=3600') // cached for 1 hour; 
  async get() {
    return this.pricingService.getPricing();
  }
}
