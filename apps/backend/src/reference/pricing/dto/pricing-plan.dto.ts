export type PricingPlanDTO = {
  id: string;
  years: 1 | 2 | 3;
  title: string;
  sub: string;
  priceCents: number;
  currency: 'USD';
  badge?: string;

  // optional for future UI
  compareAtCents?: number;
};