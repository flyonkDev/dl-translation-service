import { Inject, Injectable } from '@nestjs/common';
import type { PricingPlanDTO } from './dto/pricing-plan.dto';
import type { PricingRepository } from './pricing.repository';
import { PRICING_REPOSITORY } from './pricing.repository';

@Injectable()
export class PricingService {
  constructor(
    @Inject(PRICING_REPOSITORY)
    private readonly repo: PricingRepository,
  ) {}

  async getPricing(): Promise<{
    currency: 'USD';
    items: PricingPlanDTO[];
    defaultPlanId: string;
  }> {
    const items = await this.repo.listPlans();

    const sorted = [...items].sort((a, b) => b.years - a.years);

    // TODO: make default plan logic
    const defaultPlanId = 'plan_5y';

    return {
      currency: 'USD',
      items: sorted,
      defaultPlanId,
    };
  }
}
