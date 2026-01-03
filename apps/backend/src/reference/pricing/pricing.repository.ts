import type { PricingPlanDTO } from './dto/pricing-plan.dto';

export interface PricingRepository {
  listPlans(): Promise<PricingPlanDTO[]>;
}

export const PRICING_REPOSITORY = Symbol('PRICING_REPOSITORY');