import type { PricingPlanDTO } from './dto/pricing-plan.dto';

export const PRICING_MVP: PricingPlanDTO[] = [
  {
    id: 'plan_3y',
    years: 3,
    title: '3 years',
    sub: 'Best value',
    priceCents: 3900,
    // compareAtCents: 4900, // discount example no needed now
    currency: 'USD',
    badge: 'Recommended',
  },
  {
    id: 'plan_2y',
    years: 2,
    title: '2 years',
    sub: 'Extended access',
    priceCents: 2900,
    currency: 'USD',
  },
  {
    id: 'plan_1y',
    years: 1,
    title: '1 year',
    sub: 'Basic',
    priceCents: 1900,
    currency: 'USD',
  },
];
