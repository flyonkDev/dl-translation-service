/**
 * Shared type definitions for all country-pair content files.
 *
 * Per-page content lives at tier-1/{origin}/ or tier-2/{origin}/. All those
 * files `import type { CountryPairCopy } from '../../_types'` so that moving
 * a page between tiers (or adding new origins) doesn't churn imports.
 *
 * Render contract: `apps/landing/components/CountryPair/Page.vue` consumes
 * `CountryPairCopy` directly. Required blocks have no `?` — the renderer
 * has no v-if for them. Optional blocks are conditionally rendered.
 */

export type Severity = 'low' | 'med' | 'high';

export interface FineRow {
	icon: string;
	label: string;
	amount: string;
	note: string;
	severity: Severity;
}

export interface RuleCard {
	icon: string;
	label: string;
	value: string;
	note: string;
}

export interface ReasonCard {
	icon: string;
	title: string;
	text: string;
}

export interface OutcomeRow {
	severity: Severity;
	frequency: string;
	label: string;
	text: string;
}

export interface FaqItem {
	id: number;
	question: string;
	answer: string;
}

export interface RentingChain {
	name: string;
	policy: string;
}

export interface RelatedCard {
	flagFrom: string;
	flagTo: string;
	label: string;
	status: string;
	/** Internal href if the pair is live. Omit/empty for "coming soon" stubs. */
	href?: string;
}

export interface TldrRow {
	label: string;
	domestic: string;
	officialIdp: string;
	companion: string;
}

export interface LezZone {
	city: string;
	name: string;
	description: string;
	fine: string;
	note: string;
}

export interface PhraseItem {
	phrase: string;
	translation: string;
	context: string;
}

export interface HowToStep {
	title: string;
	text: string;
}

export interface AlphabetExample {
	sign: string;
	latin: string;
	meaning: string;
}

export interface RejectItem {
	icon: string;
	title: string;
	text: string;
}

export interface CountryPairCopy {
	seo: {
		title: string;
		description: string;
		ogTitleShort: string;
		ogSubtitle: string;
	};
	breadcrumbs: {
		home: string;
		current: string;
	};
	hero: {
		kicker: string;
		title: string;
		lead: string;
		ctaPrimary: string;
		ctaSecondary: string;
		badgeTop: string;
		badgeBottom: string;
	};
	quickAnswer: {
		required: boolean;
		verdict: string;
		text: string;
	};
	whyNotEnough: {
		heading: string;
		lead: string;
		reasons: ReasonCard[];
	};
	rules: {
		heading: string;
		lead: string;
		items: RuleCard[];
	};
	fines: {
		heading: string;
		lead: string;
		colViolation: string;
		colAmount: string;
		colNote: string;
		items: FineRow[];
		caption: string;
	};
	honesty: {
		heading: string;
		lead: string;
		is: { title: string; items: string[] };
		isNot: { title: string; items: string[] };
		helps: { title: string; items: string[] };
		needOfficial: { title: string; items: string[] };
		pattern: string;
	};
	renting: {
		heading: string;
		lead: string;
		chains: RentingChain[];
		tipsHeading: string;
		tips: string[];
	};
	outcomes: {
		heading: string;
		lead: string;
		items: OutcomeRow[];
		math: string;
	};
	faq: {
		heading: string;
		items: FaqItem[];
	};
	related: {
		heading: string;
		lead: string;
		comingSoonLabel: string;
		items: RelatedCard[];
	};
	finalCta: {
		heading: string;
		text: string;
		button: string;
	};
	legal: {
		disclaimerHeading: string;
		disclaimer: string;
		sourcesHeading: string;
		sources: string[];
	};
	og: {
		originName: string;
		destinationName: string;
	};

	/* --- optional blocks --- */
	lastReviewed?: string;

	/**
	 * GEO + E-E-A-T metadata. Used for Article JSON-LD (`datePublished`/`dateModified`)
	 * and the on-page author byline. Both ISO format YYYY-MM-DD.
	 *
	 * If omitted, schema falls back to site-wide defaults in `Page.vue` (currently
	 * 2026-04-26 for both, the original Tier 1 ship date).
	 */
	datePublished?: string;
	dateModified?: string;

	tldr?: {
		heading: string;
		lead: string;
		colDocument: string;
		colWhatItDoes: string;
		colCost: string;
		rows: Array<{
			document: string;
			whatItDoes: string;
			cost: string;
			tone: 'neutral' | 'official' | 'companion';
		}>;
		footnote: string;
	};

	lez?: {
		heading: string;
		lead: string;
		badge?: string;
		zones: LezZone[];
		tip: string;
	};

	rejects?: {
		heading: string;
		lead: string;
		badge?: string;
		items: RejectItem[];
	};

	labels?: {
		freshnessPrefix?: string;
	};

	phrases?: {
		heading: string;
		lead: string;
		items: PhraseItem[];
	};

	howTo?: {
		heading: string;
		lead: string;
		steps: HowToStep[];
		duration: string;
		cost: string;
		schemaName: string;
	};

	alphabet?: {
		heading: string;
		lead: string;
		badge: string;
		examples: AlphabetExample[];
		helpsHeading: string;
		helps: string[];
		outro: string;
	};
}
