export type PricingPlanDTO = {
  id: string;
  years: 1 | 3 | 5;
  title: string;
  sub: string;
  priceCents: number;
  currency: 'USD';
  badge?: string;

  // optional for future UI
  compareAtCents?: number;
};