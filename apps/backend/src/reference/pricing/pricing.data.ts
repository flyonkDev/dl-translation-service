import type { PricingPlanDTO } from './dto/pricing-plan.dto';

export const PRICING_MVP: PricingPlanDTO[] = [
  {
    id: 'plan_5y',
    years: 5,
    title: '5 years',
    sub: 'Best value',
    priceCents: 5500,
    // compareAtCents: 4900, // discount example no needed now
    currency: 'USD',
    badge: 'Recommended',
  },
  {
    id: 'plan_3y',
    years: 3,
    title: '3 years',
    sub: 'Extended access',
    priceCents: 4500,
    currency: 'USD',
  },
  {
    id: 'plan_1y',
    years: 1,
    title: '1 year',
    sub: 'Basic',
    priceCents: 3500,
    currency: 'USD',
  },
];
