export type CountryDTO = {
	code: string;
	name: string;
	nativeName?: string;
	priority: number;
};

export type CountriesResponse = {
	items: CountryDTO[];
};

export type PlanYears = 1 | 2 | 3;

export type PricingPlanDTO = {
	years: PlanYears;
	title: string;
	sub: string;
	priceCents: number;
	currency: 'USD';
	badge?: string;
	compareAtCents?: number;
};

export type PricingResponse = {
	currency: 'USD';
	items: PricingPlanDTO[];
	defaultPlanId?: string;
};
