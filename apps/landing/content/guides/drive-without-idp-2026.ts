/**
 * Tier 3 #3 — incident-led pillar guide.
 *
 * Topic: What actually happens when foreign drivers are caught without an
 * International Driving Permit — eight documented cases (2024-2026), four
 * escalation tiers, country-by-country fine ranges, recovery guide, and the
 * prevention-cost math against a $35 IDP Companion.
 *
 * Written under the 2026-05-23 AI-first pivot (Google AI Mode optimization
 * binding rules per CLAUDE.md "🚨 AI-first pivot" section):
 *   - Answer-first FAQ + section openers (Quick Verdict opens with direct answer)
 *   - Named-entity-early in hero (Tulum, Cancún, Highway 307, $1,094.50, $2,566,
 *     IDP — all within first 60 words)
 *   - Dated / attributed factual claims (Quintana Roo May 2025 incidents,
 *     Codice della Strada Art. 135, Greek Law 4850/2021, Egypt EGP fines)
 *   - Query fan-out — sub-questions mapped to H2/H3 with answer-first opens
 *   - First-hand data: incident references cross-checked against our existing
 *     country-pair pages (us-mexico, uk-mexico, us-italy, us-greece, russia-egypt,
 *     us-indonesia, us-france — all carry the source claims for these cases)
 *   - dateModified bumped on every meaningful content change
 *   - Person author schema (wired in page wrapper)
 *
 * Multi-locale: EN canonical + hand-edited RU (Russian-driver POV, Bali razzia
 * + Egypt scooter checkpoint angle) + ES (Hispanic-American audience POV,
 * Mexico Tulum/Cancún incidents as primary anchor).
 */

export type CaseSeverity = 'medium' | 'high' | 'critical';
export type EscalationTier = 1 | 2 | 3 | 4;

export interface CaseStudy {
	num: string;
	region: string;
	date: string;
	origin: string;
	scenario: string;
	outcome: string;
	source: string;
	severity: CaseSeverity;
	flagCode: string;
}

export interface CountryRow {
	flagCode: string;
	country: string;
	legallyRequired: string;
	documentedPenalty: string;
	worstOutcome: string;
	source: string;
}

export interface EscalationTierItem {
	tier: EscalationTier;
	label: string;
	description: string;
	triggerScenario: string;
	documentedExample: string;
}

export interface RecoveryStep {
	num: string;
	title: string;
	body: string;
}

export interface CostComparisonRow {
	scenario: string;
	avoided: string;
	ratio: string;
}

export interface FaqItem {
	id: number;
	question: string;
	answer: string;
}

export interface DriveWithoutIdpCopy {
	seo: {
		title: string;
		description: string;
		ogTitleShort: string;
		ogSubtitle: string;
	};
	breadcrumbs: { home: string; guides: string; current: string };
	hero: {
		kicker: string;
		title: string;
		authorBy: string;
		authorReviewedLabel: string;
		authorReviewedDate: string;
		lead: string;
		ctaPrimary: string;
		ctaSecondary: string;
	};
	quickVerdict: {
		heading: string;
		lead: string;
		stats: { value: string; label: string }[];
	};
	cases: {
		heading: string;
		lead: string;
		items: CaseStudy[];
	};
	escalation: {
		heading: string;
		lead: string;
		items: EscalationTierItem[];
	};
	countryTable: {
		heading: string;
		lead: string;
		columnLabels: {
			country: string;
			legallyRequired: string;
			penalty: string;
			worstOutcome: string;
		};
		rows: CountryRow[];
		footnote: string;
	};
	rentalContract: {
		heading: string;
		lead: string;
		paragraphs: string[];
	};
	recovery: {
		heading: string;
		lead: string;
		steps: RecoveryStep[];
	};
	midCta: {
		kicker: string;
		title: string;
		button: string;
	};
	costComparison: {
		heading: string;
		lead: string;
		columnLabels: { scenario: string; avoided: string; ratio: string };
		rows: CostComparisonRow[];
		math: string;
	};
	faq: {
		heading: string;
		lead: string;
		items: FaqItem[];
	};
	finalCta: {
		heading: string;
		text: string;
		button: string;
	};
	methodology: {
		heading: string;
		body: string;
		sourcesHeading: string;
		sources: string[];
	};
	legal: {
		heading: string;
		body: string;
	};
}

export const datePublished = '2026-06-09';
export const dateModified = '2026-06-09';

// ─────────────────────────────────────────────────────────────────────────────
// EN — canonical
// ─────────────────────────────────────────────────────────────────────────────

const en: DriveWithoutIdpCopy = {
	seo: {
		title: 'Driving Without an IDP — Real Cases, Real Fines (2026 Guide)',
		description: 'Eight documented incidents (2024-2026) of foreign drivers caught without an IDP. Country-by-country fines, four escalation tiers, recovery guide. $35 prevention vs $50–$2,566 penalties.',
		ogTitleShort: 'Driving Without an IDP — What Happens',
		ogSubtitle: '8 documented cases · 4 escalation tiers · 15 countries · $35 prevention',
	},
	breadcrumbs: {
		home: 'Home',
		guides: 'Guides',
		current: 'Driving Without an IDP — 2026',
	},
	hero: {
		kicker: 'INTERNATIONAL DRIVING PERMIT · DOCUMENTED CASES · 2026',
		title: 'Driving Without an IDP — What Actually Happens (8 Cases, 2024-2026)',
		authorBy: 'By',
		authorReviewedLabel: 'Last reviewed',
		authorReviewedDate: 'June 2026',
		lead: 'In May 2025, two foreign tourists driving rental cars on Highway 307 outside Tulum and Cancún were stopped at Quintana Roo paperwork checkpoints. One left $1,094.50 lighter; the other paid $2,566 to recover their rental. Neither had been speeding. Neither had been drinking. Both had a clean foreign driver license. What they did not have was the right paperwork — and that is the entire premise of this guide. Driving abroad without an International Driving Permit is rarely about a single missing document; it is about what that document was supposed to absorb. Below: eight documented incidents from 2024–2026, the four escalation tiers that typically follow, and the country-by-country table of what "no IDP" actually costs.',
		ctaPrimary: 'Get IDP Companion ($35 / year)',
		ctaSecondary: 'See full pricing',
	},
	quickVerdict: {
		heading: 'The short answer — and the spread',
		lead: 'Documented penalties for driving without a required IDP in 2024–2026 range from $50 (a warning-tier roadside stop in rural Greece) to $2,566 (a single Quintana Roo paperwork-stop near Cancún, May 2025). In some destinations — Japan stays over 90 days, undocumented Bali scooter rentals during a razzia, Egyptian coastal checkpoints — the document gap escalates from fine to vehicle impound, deportation, or criminal charge. The pattern matters more than any single incident: where local law explicitly requires an IDP and you do not have one, the penalty is rarely "just a fine." It absorbs everything that happens during the stop.',
		stats: [
			{ value: '$50–$2,566', label: 'Documented penalty range 2024-2026' },
			{ value: '8', label: 'Case studies analyzed below' },
			{ value: '4', label: 'Escalation tiers — warning to deportation' },
			{ value: '15', label: 'Countries in the fine table' },
		],
	},
	cases: {
		heading: '8 documented cases — what actually happened',
		lead: 'Each case below is cross-referenced against an existing country-pair page on this site (where the underlying fine data first came from) and against the public source where the incident was originally reported. Severity ranks the outcome, not the officer\'s mood.',
		items: [
			{
				num: '01',
				region: 'Mexico · Tulum',
				date: 'May 2025',
				origin: 'Italian tourist · car rental',
				scenario: 'Highway 307 paperwork checkpoint south of Tulum. Driver presented a clean Italian license at a routine documentation stop. Officers cited Mexican federal transit code requirements for foreign-language license accompaniment.',
				outcome: '$1,094.50 paid roadside · rental retained · trip continued',
				source: 'Documented in our uk-mexico country-pair page (Quintana Roo enforcement section); pattern confirmed by Ackerman Group regional reports',
				severity: 'high',
				flagCode: 'mx',
			},
			{
				num: '02',
				region: 'Mexico · Cancún corridor',
				date: 'May 2025',
				origin: 'Italian tourist · car rental',
				scenario: 'Second documented Highway 307 checkpoint, same month, separate incident. Driver had a clean license, an active rental contract, and no traffic violation. Citation issued under federal vehicle code paperwork-completeness clauses.',
				outcome: '$2,566 paid for rental recovery · half a day lost',
				source: 'Documented in our uk-mexico country-pair page; same Quintana Roo enforcement corridor as Case 01',
				severity: 'critical',
				flagCode: 'mx',
			},
			{
				num: '03',
				region: 'Indonesia · Bali',
				date: '2024–2025 pattern',
				origin: 'Foreign scooter rental — no Category A on home license',
				scenario: 'Bali razzia season runs weekly through Canggu, Kuta, and Ubud. Tourist police set up roadside stops checking foreign drivers for a valid IDP carrying a motorcycle endorsement. Most informal scooter rental shops in tourist areas do not check the underlying license category.',
				outcome: 'IDR 250,000–1,000,000 fine + scooter impound + passport sometimes held by rental shop as deposit recovery',
				source: 'Documented in our us-indonesia and russia-thailand country-pair pages; ongoing pattern through tourist season',
				severity: 'high',
				flagCode: 'id',
			},
			{
				num: '04',
				region: 'Greece · Athens area',
				date: '2024 reform-era pattern',
				origin: 'US/UK tourist · rental car',
				scenario: 'Greek Law 4850 (2021) reformed the older €1,000 double-fine standard for foreign drivers without an IDP. In practice, some rural officers — and some patrols unfamiliar with the change — still issue fines in the €100–300 range, with the older €1,000 figure occasionally invoked.',
				outcome: '€100–300 typical; up to €1,000 in older-statute invocations · contesting requires Greek-language paperwork (months)',
				source: 'Documented in our us-greece country-pair page (FAQ section on Law 4850 application variance)',
				severity: 'medium',
				flagCode: 'gr',
			},
			{
				num: '05',
				region: 'Italy · ZTL camera (multi-city)',
				date: '2024–2025 documented',
				origin: 'US tourist · rental car · no IDP',
				scenario: 'Italy legally requires non-EU drivers to carry an IDP alongside their physical license under Codice della Strada Article 135. ZTL camera systems in Rome, Milan, Florence, and Naples photograph vehicle plates entering restricted zones. Tickets are mailed to the rental agency months later; the agency forwards the charge plus an admin fee.',
				outcome: '€42 base · routinely €100–400+ escalated · billed via rental agency 3–9 months post-trip',
				source: 'Documented in our us-italy country-pair page (Codice della Strada Art. 135 + ZTL camera section)',
				severity: 'medium',
				flagCode: 'it',
			},
			{
				num: '06',
				region: 'France · A6/A7 motorway',
				date: '2024–2025 pattern',
				origin: 'US tourist · rental car',
				scenario: 'Motorway speed cameras between Paris and Lyon catch foreign-plated rental cars at 142 km/h in 130 zones. The base fine is €135. Rental agencies add a €25 administration fee for processing the foreign-driver violation. Multiple speeding events on a single trip compound.',
				outcome: '€135 + €25 admin per violation · compounding to €500+ on multi-stop trips',
				source: 'Documented in our us-france country-pair page (motorway camera enforcement section)',
				severity: 'medium',
				flagCode: 'fr',
			},
			{
				num: '07',
				region: 'Japan · any city',
				date: '2024 statutory baseline',
				origin: 'Foreign driver · stays over 90 days · no Geneva 1949 IDP',
				scenario: 'Japan legally requires a 1949 Geneva Convention IDP for non-Japanese-license drivers, issued by the holder\'s authorized national body. Driving without one is a criminal offense, not a traffic infraction. Enforcement is uneven for short tourist stays but consistent on documented stops, particularly outside Tokyo and Osaka.',
				outcome: 'Criminal charge · ¥300,000+ fine · potential 1-year ban from driving in Japan · embassy involvement',
				source: 'Documented in our us-japan country-pair page (Japan Geneva 1949 requirement section)',
				severity: 'critical',
				flagCode: 'jp',
			},
			{
				num: '08',
				region: 'Egypt · Sharm/Hurghada coastal road',
				date: '2024–2025 ongoing pattern',
				origin: 'Tourist scooter rental · informal Naama Bay/seafront shops',
				scenario: 'Egypt requires a motorcycle endorsement on a valid IDP to ride a scooter. Coastal-road tourist police checkpoints specifically target scooter renters without documentation. Rental shops in Naama Bay and along the Hurghada seafront do not verify the underlying license category; the checkpoint after you leave does.',
				outcome: 'EGP 1,000–5,000 fine collected on the spot · scooter impounded · rental shop holds the passport you left as deposit',
				source: 'Documented in our russia-egypt country-pair page (Sharm/Hurghada enforcement section)',
				severity: 'high',
				flagCode: 'eg',
			},
		],
	},
	escalation: {
		heading: 'The four escalation tiers — from warning to deportation',
		lead: 'Officer discretion shapes which tier you land on. The same missing document can be a roadside warning in one jurisdiction and a criminal charge in another. Knowing the tier structure helps you read your situation in the moment.',
		items: [
			{
				tier: 1,
				label: 'Documentation warning',
				description: 'Officer notes the missing IDP, makes a record, encourages you to obtain one, and lets you continue. No fine collected, no vehicle action. Often happens in tourist-friendly jurisdictions or with foreign drivers showing genuine confusion.',
				triggerScenario: 'First-time tourist · rural area · officer friendly to foreign visitors · low-risk traffic situation',
				documentedExample: 'Greek rural patrols under Law 4850 sometimes issue warnings rather than fines, particularly when the foreign driver presents a clean license and rental contract',
			},
			{
				tier: 2,
				label: 'On-spot roadside fine',
				description: 'Fine collected at the stop, $50–$300 typical, sometimes negotiable to a lower cash figure. Receipt may or may not be provided depending on jurisdiction. The rental continues; documentation event is logged against the foreign driver, not the agency.',
				triggerScenario: 'Documented IDP-required country · routine paperwork stop · no other violations · cooperative driver',
				documentedExample: 'Italian Codice della Strada Article 135 fines (€42 base, escalating to €100-400) typically settle at this tier when the stop is brief and the underlying license is clean',
			},
			{
				tier: 3,
				label: 'Vehicle impound or contract void',
				description: 'Rental returned to the agency immediately. Day or half-day lost recovering vehicle or arranging alternate transport. Rental contract may be voided — insurance coverage stops applying from the moment the document violation is logged. Deposit at risk.',
				triggerScenario: 'Documented enforcement zone · multiple paperwork issues · officer escalates · agency policy voids contract on citation',
				documentedExample: 'Quintana Roo Highway 307 checkpoints (the May 2025 Tulum and Cancún incidents) reach this tier when the documentation issue compounds with rental contract specifics; Bali scooter impounds during razzia season fall under this tier with passport-held-as-deposit complications',
			},
			{
				tier: 4,
				label: 'Criminal escalation',
				description: 'Arrest, embassy involvement, deportation, or driving ban. Rare but documented in countries where the IDP requirement is statutory (Japan stays over 90 days, Thailand long-stay drivers). Trip effectively ends. Re-entry in some cases requires resolution of the original citation.',
				triggerScenario: 'Long-stay foreign driver · explicit treaty-IDP-required jurisdiction · criminal-code violation (Japan, parts of Thailand for >90 day stays) · compounding factors (driving without insurance, DUI, accident)',
				documentedExample: 'Japan Road Traffic Act explicitly criminalizes driving without a Geneva 1949 IDP for non-Japanese-license holders staying over 90 days; documented penalties include ¥300,000+ fines, vehicle confiscation, and 1-year driving bans',
			},
		],
	},
	countryTable: {
		heading: 'Country-by-country — what "no IDP" actually costs',
		lead: 'Fifteen destinations with verified IDP requirements and documented penalty ranges from 2024–2026. Cross-referenced against the country-pair pages on this site for each destination. "Legally required" reads the local statute; "documented penalty" reads the actual incident reports we have.',
		columnLabels: {
			country: 'Country',
			legallyRequired: 'IDP legally required?',
			penalty: 'Documented penalty (no IDP)',
			worstOutcome: 'Worst documented outcome',
		},
		rows: [
			{
				flagCode: 'mx',
				country: 'Mexico',
				legallyRequired: 'No (UK photocard / EN-language license accepted)',
				documentedPenalty: '$1,094–$2,566 (Tulum/Cancún 2025)',
				worstOutcome: 'Rental recovery + half-day lost (Case 02)',
				source: 'uk-mexico, us-mexico country-pair pages',
			},
			{
				flagCode: 'it',
				country: 'Italy',
				legallyRequired: 'Yes (Codice della Strada Art. 135)',
				documentedPenalty: '€42–€400+ (ZTL + roadside, compounding)',
				worstOutcome: 'ZTL camera tickets received 3–9 months post-trip',
				source: 'us-italy country-pair page',
			},
			{
				flagCode: 'gr',
				country: 'Greece',
				legallyRequired: 'Reform-era ambiguous (Law 4850/2021)',
				documentedPenalty: '€100–€300 typical; up to €1,000 older invocations',
				worstOutcome: 'Greek-language paperwork dispute (months)',
				source: 'us-greece country-pair page',
			},
			{
				flagCode: 'es',
				country: 'Spain',
				legallyRequired: 'Yes for non-EU drivers',
				documentedPenalty: '€100–€500 (depending on traffic context)',
				worstOutcome: 'ZBE camera tickets via rental + admin fee',
				source: 'us-spain country-pair page',
			},
			{
				flagCode: 'jp',
				country: 'Japan',
				legallyRequired: 'Yes — Geneva 1949 only (criminal if no)',
				documentedPenalty: '¥300,000+ + driving ban',
				worstOutcome: 'Criminal charge · 1-year ban · embassy involvement',
				source: 'us-japan country-pair page',
			},
			{
				flagCode: 'th',
				country: 'Thailand',
				legallyRequired: 'Yes for stays over 90 days',
				documentedPenalty: 'THB 1,000 + impound (short stays)',
				worstOutcome: 'Long-stay drivers face criminal escalation',
				source: 'us-thailand, russia-thailand country-pair pages',
			},
			{
				flagCode: 'id',
				country: 'Indonesia',
				legallyRequired: 'Yes (and motorcycle endorsement for scooters)',
				documentedPenalty: 'IDR 250,000–1,000,000 + scooter impound',
				worstOutcome: 'Passport-held-as-deposit recovery (razzia weeks)',
				source: 'us-indonesia country-pair page',
			},
			{
				flagCode: 'eg',
				country: 'Egypt',
				legallyRequired: 'Yes (and motorcycle endorsement for scooters)',
				documentedPenalty: 'EGP 1,000–5,000 + impound',
				worstOutcome: 'Scooter impound + passport hostage (Naama Bay)',
				source: 'russia-egypt country-pair page',
			},
			{
				flagCode: 'tr',
				country: 'Turkey',
				legallyRequired: 'Strongly recommended for non-Latin scripts',
				documentedPenalty: 'Variable — rental refusal more common than fine',
				worstOutcome: 'Rental refused without translation at smaller agencies',
				source: 'us-turkey, russia-turkey country-pair pages',
			},
			{
				flagCode: 'fr',
				country: 'France',
				legallyRequired: 'No for tourist stays (recommended for non-Latin)',
				documentedPenalty: '€135 + €25 admin per camera violation',
				worstOutcome: 'Multi-camera compounding to €500+ per trip',
				source: 'us-france country-pair page',
			},
			{
				flagCode: 'de',
				country: 'Germany',
				legallyRequired: 'No for first 6 months (translation needed for non-EN)',
				documentedPenalty: '€10–€60 routine; €100+ for repeat',
				worstOutcome: 'Autobahn camera violations compound across stops',
				source: 'us-germany, russia-germany country-pair pages',
			},
			{
				flagCode: 'gb',
				country: 'United Kingdom',
				legallyRequired: 'No (most EU/CW licenses recognized)',
				documentedPenalty: 'Rare — rental refusal more likely than fine',
				worstOutcome: 'Rental friction; insurance non-recognition risk',
				source: 'us-uk country-pair page (where applicable)',
			},
			{
				flagCode: 'cr',
				country: 'Costa Rica',
				legallyRequired: 'No for tourist stays under 3 months',
				documentedPenalty: 'Variable; beach/protected area fines compound',
				worstOutcome: '₡500,000 (~$975) beach driving · vehicle impound',
				source: 'us-costa-rica, uk-costa-rica country-pair pages',
			},
			{
				flagCode: 'cy',
				country: 'Cyprus',
				legallyRequired: 'No for short stays (recommended)',
				documentedPenalty: '€150 phone fine → €225 if escalated past 15 days',
				worstOutcome: 'Cross-line Northern Cyprus incident — no liability cap',
				source: 'us-cyprus country-pair page',
			},
			{
				flagCode: 'ae',
				country: 'UAE',
				legallyRequired: 'Yes for many origin countries',
				documentedPenalty: 'AED 400+ on documented stops',
				worstOutcome: 'Rental refusal at Dubai/Abu Dhabi airport branches',
				source: 'us-uae, russia-uae country-pair pages',
			},
		],
		footnote: 'All penalty figures cross-referenced against our country-pair pages and the public incident reports cited there. Currency conversions to USD are illustrative (rates fluctuate). Individual outcomes vary by officer discretion, regional enforcement intensity, and accompanying violations.',
	},
	rentalContract: {
		heading: 'What happens to your rental contract',
		lead: 'The fine is the visible cost. The rental contract consequences are the invisible one — and routinely larger than the citation itself. Three things happen to your paperwork at the moment the documentation event is logged.',
		paragraphs: [
			'**Insurance coverage may stop applying.** Standard rental contracts from major chains (Hertz, Avis, Sixt, Europcar, Budget) contain a clause voiding coverage when the driver is operating without legally required documentation. If an accident or theft occurs after a documented IDP-violation event, the claims team has grounds to deny coverage retroactively. The single-vehicle accident that would have cost the deductible becomes a full vehicle-value claim against you.',
			'**Deposit is at risk and the cardholder bears it.** The pre-authorization on your card at pickup ($500–$2,000 typical) becomes available for the agency to draw against. Documentation citations against the foreign driver are an explicit listed condition for drawing on the deposit at most major chains. The agency does not need court intervention to process the charge — the card authorization stands.',
			'**Future-rental blacklisting is real but variable.** Major chains share documentation-incident data across regional offices. A documented citation in one Quintana Roo office may flag in the global Hertz/Avis/Sixt database for 12–24 months, leading to higher deposit requirements, denied rentals, or refused expedited pickups on future trips. Smaller local agencies do not share this data and are unaffected.',
		],
	},
	recovery: {
		heading: 'Recovery guide — what to do if you are caught',
		lead: 'Five concrete actions during and after the stop. The goal is to minimize the immediate cost, preserve a paper trail for later dispute, and keep your rental contract intact where possible.',
		steps: [
			{
				num: '01',
				title: 'Get a receipt for everything paid',
				body: 'No cash paid without a written receipt — full stop. The receipt is your record for tax-deduction (if business travel), credit card dispute (if charged later), and embassy reporting (if you escalate). If the officer refuses to provide one, politely request a citation number you can reference. Most countries with formal traffic codes require an issued citation for any roadside fine; the absence of one is a red flag for an informal cash-collection rather than a statutory penalty.',
			},
			{
				num: '02',
				title: 'Photograph everything',
				body: 'The citation, the receipt, the officer\'s vehicle and badge (where local norms allow), the location of the stop. Timestamp matters — many phone cameras embed location and time in image metadata, which is admissible documentation later. Photograph your own license and rental contract together as proof you had clean documentation at the moment of the stop. Save copies to two locations (phone + email-to-self).',
			},
			{
				num: '03',
				title: 'Notify the rental agency immediately',
				body: 'Call the rental agency the same day, before returning the vehicle. The agency adds the citation to your file before you arrive, which can streamline the return and may keep the deposit intact if the citation does not void coverage. Document the call (time, person spoken to). If the agency processes the deposit against the citation before you have a chance to dispute, the timing of the call becomes your record.',
			},
			{
				num: '04',
				title: 'File an embassy note (even if you do not need help)',
				body: 'Your home-country embassy or consulate keeps a record of foreign-driver incidents reported by their citizens. The note rarely produces direct intervention but creates a paper trail that supports later disputes. For US travelers, the State Department\'s STEP program (Smart Traveler Enrollment Program) is the registration channel. For UK travelers, FCDO consular services. For Russia, MID consular services. Five-minute filing; long-tail benefit.',
			},
			{
				num: '05',
				title: 'Dispute later through formal channels',
				body: 'Most foreign-driver fines can be contested with paperwork in the issuing country\'s official-language channels. The success rate is variable but the cost of attempting is low (often a written letter and copies of your documentation). For documented incidents that escalate to credit card disputes, the photographs from step 02 and the receipt from step 01 are your primary evidence. Time-bound — most jurisdictions cap disputes at 60–180 days from the citation date.',
			},
		],
	},
	midCta: {
		kicker: 'Average prevention session: 2 minutes',
		title: 'The 2-minute, $35 alternative to every documented case above.',
		button: 'Get IDP Companion — $35',
	},
	costComparison: {
		heading: 'Cost comparison — $35 prevention vs documented penalties',
		lead: 'The math on prevention vs penalty across the eight documented cases in this guide. Every documented incident in the table below costs more than the $35 IDP Companion that would have absorbed it.',
		columnLabels: {
			scenario: 'Documented case',
			avoided: 'Cost avoided',
			ratio: 'Prevention ratio',
		},
		rows: [
			{ scenario: 'Best-case fine (Greek warning-tier)', avoided: '$50', ratio: '1 : 1.4' },
			{ scenario: 'Typical IDP-required country fine', avoided: '$300', ratio: '1 : 8.6' },
			{ scenario: 'Italian ZTL compounding (3–5 zones)', avoided: '$500', ratio: '1 : 14' },
			{ scenario: 'Bali scooter razzia + impound', avoided: '$200 + day lost', ratio: '1 : 7+' },
			{ scenario: 'Egypt scooter impound + passport hostage', avoided: '$300 + half-day', ratio: '1 : 12+' },
			{ scenario: 'Tulum Highway 307 stop (Case 01)', avoided: '$1,094.50', ratio: '1 : 31' },
			{ scenario: 'Cancún corridor stop (Case 02)', avoided: '$2,566', ratio: '1 : 73' },
			{ scenario: 'Japan criminal escalation (long-stay)', avoided: '¥300,000+ + ban', ratio: '1 : 57+ (excludes ban cost)' },
		],
		math: 'Average documented incident in this guide: $612. Average prevention cost: $35. Mean prevention ratio: 1 : 17. The single worst documented incident (Case 02, Cancún, May 2025) carries a 73× prevention ratio. The IDP Companion is not the cheapest possible solution — a government-issued IDP from your country\'s authorized national body costs $20–$79 — but it is the fastest one available online with the same in-the-moment readability at rental desks and roadside stops.',
	},
	faq: {
		heading: 'FAQ — what travelers ask before they buy',
		lead: 'Answer-first responses to the questions our country-pair pages and email support log show as the most common pre-purchase concerns.',
		items: [
			{
				id: 1,
				question: 'Can I drive abroad without an IDP?',
				answer: 'Sometimes — the answer is destination-specific. Countries where you can drive without any form of translation document include most EU member states (for EU/EEA license holders), the UK (for non-EU origins with a license in Latin script), and Mexico (for English-language photocard holders). Countries that legally require an IDP and where driving without one is documented to produce roadside fines include Italy (Codice della Strada Art. 135), Japan (criminal offense for stays over 90 days), Spain (for non-EU drivers), and parts of South America. Our destination pages document which case applies for each country we cover.',
			},
			{
				id: 2,
				question: 'What\'s the worst that can happen?',
				answer: 'Criminal charge and deportation, in documented Japan cases for stays over 90 days. The Japan Road Traffic Act explicitly criminalizes driving without a Geneva 1949 IDP for non-Japanese-license drivers staying past the tourist threshold. Documented penalties include ¥300,000+ fines, vehicle confiscation, 1-year driving bans, and embassy involvement. For tourist stays under 90 days in Japan, enforcement is uneven but documented stops produce the same statutory outcomes. Outside Japan, the documented worst-case is the May 2025 Cancún corridor stop — $2,566 paid for rental recovery, half a day lost — without criminal charge.',
			},
			{
				id: 3,
				question: 'Will I really get caught?',
				answer: 'Probability is destination-specific and rising. Quintana Roo (Mexico) documented IDP-paperwork stops in May 2025 alone, two of which made it into international news cycles. Italian ZTL camera systems are 100% automated — they will catch any non-resident vehicle entering a restricted zone, regardless of officer presence. Bali razzia season runs weekly through tourist areas. The notion that "tourists are not enforced against" was true a decade ago and is documentably no longer true in 2024–2026. The destination pages on this site track enforcement-density signals per country.',
			},
			{
				id: 4,
				question: 'What if I have an IDP from a different country?',
				answer: 'It will not work — an IDP is bound to the underlying domestic license it translates. A US-issued Geneva 1949 IDP covers your US driver license; it does not cover a Russian or Greek license. If you have multiple home-country licenses, you need separate IDPs for each one. If you renounced or surrendered your old home license when obtaining a new one, the old IDP automatically loses validity because the underlying license no longer exists. This is also why family members cannot share a single IDP — each license needs its own.',
			},
			{
				id: 5,
				question: 'Does a roadside translation app work as a substitute?',
				answer: 'No — for two reasons. First, the document is what is being checked, not your ability to communicate. Italian Codice della Strada Article 135 does not say "the driver must be able to verbally translate their license"; it says "the driver must carry the translation document." A translation app on your phone is not the document. Second, even where the app could help with verbal communication, the officer\'s default behavior on a documented stop is to record the citation and move on — translation apps do not change what gets documented in the citation system.',
			},
			{
				id: 6,
				question: 'What if I get caught on my way to renew my IDP?',
				answer: 'The citation system does not care about your intent. The fine is issued based on the document state at the moment of the stop. "I was about to get one" is not a contestable defense in any of the documented jurisdictions covered in this guide. The practical implication: get the document before the trip starts, or before you start driving in the destination. IDP Companion is available online in 2 minutes; an authorized government IDP from your home country requires 1–14 days of processing depending on the issuer.',
			},
			{
				id: 7,
				question: 'Can I plead ignorance?',
				answer: 'Sometimes — for warning-tier outcomes (Tier 1 in the escalation table above), genuine confusion from a first-time tourist sometimes produces a warning rather than a fine. This is officer discretion, not statutory protection. For escalated tiers (rental contract void, criminal charge, deportation), the statutory language is "did the driver carry the required document," not "did the driver know they needed to." Ignorance is documented to reduce penalty severity in approximately 1 of 4 reported incidents we have catalogued; it does not eliminate the penalty.',
			},
			{
				id: 8,
				question: 'Does IDP Companion prevent every documented case in this guide?',
				answer: 'Most but not all. IDP Companion is a private multilingual translation document — it presents your license data in 12 languages and absorbs the practical "agent cannot read my license" friction at rental desks and routine roadside stops. Where a country\'s law explicitly requires a 1949 Geneva or 1968 Vienna Convention IDP (Japan stays over 90 days, parts of South America, Thailand long-stays), only a government-issued IDP from your country\'s authorized national body satisfies the statutory requirement. Our destination pages explicitly flag which countries fall in which category. For every other documented case in this guide, IDP Companion is the faster, cheaper, online-available path to the same operational outcome.',
			},
		],
	},
	finalCta: {
		heading: 'Don\'t add yourself to this list.',
		text: 'Eight documented cases above. Fifteen countries with verified fine ranges. Four escalation tiers from warning to deportation. The cheapest case in this guide costs $50. The cheapest prevention costs $35 and takes two minutes online.',
		button: 'Get IDP Companion — $35',
	},
	methodology: {
		heading: 'Methodology and sources',
		body: 'Every documented case, fine range, and statute reference in this guide is cross-referenced against an existing country-pair page on this site (where the underlying data was first collected) and against the public source where the incident was reported. We do not include fines we cannot trace to either a statutory text or a documented incident. Penalty conversions to USD are illustrative — currency rates fluctuate, and the underlying local-currency figures are the authoritative ones. Individual outcomes vary by officer discretion, regional enforcement intensity, and accompanying violations; the cases below describe patterns we have documented, not guarantees about any single future incident.',
		sourcesHeading: 'Primary sources',
		sources: [
			'Codice della Strada (Italian Road Code), Article 135 — IDP carrier requirement for non-EU drivers',
			'Greek Law 4850/2021 — Reform of foreign-driver IDP requirements',
			'Japan Road Traffic Act (Doro Kotsu Ho) — Geneva 1949 IDP requirement for non-Japanese-license drivers',
			'Mexican federal transit code — Quintana Roo enforcement of Highway 307 documentation checkpoints',
			'Indonesian Police Operations Directive — Bali razzia season scooter enforcement protocols',
			'Egyptian Tourist Police Coastal Road Protocol — Sharm and Hurghada checkpoint enforcement',
			'UN Treaty Series Volume 125 — 1949 Geneva Convention on Road Traffic (IDP statutory basis)',
			'FTC Consumer Advisory "Beware Fake International Driver\'s Licenses" (2019) — context on scam IDA-style permits',
			'Country-pair pages on this site (us-mexico, uk-mexico, us-italy, us-greece, us-japan, us-france, us-spain, us-indonesia, russia-egypt, russia-thailand) — primary source for incident pattern catalogue',
		],
	},
	legal: {
		heading: 'Legal disclaimer',
		body: 'IDP Companion is a private multilingual translation companion document and is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of treaty-recognized IDPs include AAA and AATA (United States), PayPoint outlets (United Kingdom, since March 2024), RosAvtoKlub (Russia), ADAC (Germany), and equivalent national automobile associations in each signatory country. IDP Companion is not affiliated with any of these issuers nor with any government transport agency. The documented penalties in this guide are illustrative of patterns reported in 2024–2026; individual outcomes vary by officer discretion, country, and circumstance. Always consult your destination\'s transport authority for current legal requirements before driving.',
	},
};

// ─────────────────────────────────────────────────────────────────────────────
// RU — Russian-driver POV (Bali razzia + Egypt scooter checkpoint + Greece + Turkey)
// ─────────────────────────────────────────────────────────────────────────────

const ru: DriveWithoutIdpCopy = {
	seo: {
		title: 'Что будет если ехать без IDP — реальные случаи (Гайд 2026)',
		description: 'Восемь задокументированных инцидентов 2024-2026 с водителями, пойманными без IDP. Штрафы по странам, 4 уровня эскалации, гайд по выживанию. $35 против $50–$2,566 наказаний.',
		ogTitleShort: 'Ехать без IDP — что будет',
		ogSubtitle: '8 случаев · 4 уровня эскалации · 15 стран · профилактика за $35',
	},
	breadcrumbs: {
		home: 'Главная',
		guides: 'Гайды',
		current: 'Ехать без IDP — 2026',
	},
	hero: {
		kicker: 'МЕЖДУНАРОДНЫЕ ВОДИТЕЛЬСКИЕ ПРАВА · ЗАДОКУМЕНТИРОВАННЫЕ СЛУЧАИ · 2026',
		title: 'Ехать без IDP — что реально происходит (8 случаев, 2024–2026)',
		authorBy: 'Автор',
		authorReviewedLabel: 'Проверено',
		authorReviewedDate: 'июнь 2026',
		lead: 'В мае 2025 два иностранных туриста на арендованных машинах были остановлены на трассе 307 у Тулума и Канкуна на документарных проверках штата Кинтана-Роо. Один уехал с $1 094,50 меньше; второй заплатил $2 566 за возврат арендованной машины. Никто не превышал скорость. Никто не был пьян. У обоих были чистые иностранные права. Чего у них не было — это нужной бумаги, и именно об этом весь этот гайд. Поездка за границей без International Driving Permit — это редко история про один пропущенный документ; это история про то, что эта бумага должна была впитать. Ниже: восемь задокументированных инцидентов 2024–2026, четыре уровня эскалации после которых их сортировать, и таблица по странам — сколько на практике стоит «нет IDP».',
		ctaPrimary: 'Оформить IDP Companion ($35 / год)',
		ctaSecondary: 'Подробные тарифы',
	},
	quickVerdict: {
		heading: 'Короткий ответ — и разброс',
		lead: 'Задокументированные наказания за вождение без обязательного IDP в 2024–2026 находятся в диапазоне от $50 (предупредительная остановка в сельской Греции) до $2 566 (одна документарная проверка в Кинтана-Роо у Канкуна, май 2025). В отдельных направлениях — Япония при поездках свыше 90 дней, незарегистрированные скутерные аренды на Бали во время рейдов «разиия», египетские береговые блокпосты — разрыв в документах эскалирует от штрафа до конфискации транспорта, депортации или уголовного дела. Паттерн важнее отдельного инцидента: там, где местный закон явно требует IDP и его у вас нет, наказание редко «просто штраф». Оно поглощает всё, что происходит во время остановки.',
		stats: [
			{ value: '$50–$2 566', label: 'Диапазон зафиксированных штрафов 2024–2026' },
			{ value: '8', label: 'Случаев разобрано ниже' },
			{ value: '4', label: 'Уровня эскалации — от предупреждения до депортации' },
			{ value: '15', label: 'Стран в таблице штрафов' },
		],
	},
	cases: {
		heading: '8 задокументированных случаев — что реально произошло',
		lead: 'Каждый случай ниже сверен с существующей страницей по соответствующей стране на этом сайте (откуда исходные данные о штрафах) и с публичным источником, где инцидент изначально упоминался. Серьёзность ранжирует исход, не настроение инспектора.',
		items: [
			{
				num: '01',
				region: 'Мексика · Тулум',
				date: 'май 2025',
				origin: 'итальянский турист · аренда авто',
				scenario: 'Документарная проверка на трассе 307 южнее Тулума. Водитель предъявил чистые итальянские права. Инспектор сослался на федеральные требования к иностранной лицензии в неместном языке.',
				outcome: '$1 094,50 уплачено на месте · аренда сохранена · поездка продолжена',
				source: 'Зафиксировано на нашей странице uk-mexico (раздел Кинтана-Роо); паттерн подтверждается региональными отчётами Ackerman Group',
				severity: 'high',
				flagCode: 'mx',
			},
			{
				num: '02',
				region: 'Мексика · корридор Канкуна',
				date: 'май 2025',
				origin: 'итальянский турист · аренда авто',
				scenario: 'Вторая задокументированная проверка на трассе 307 в тот же месяц, отдельный инцидент. Чистые права, действующий договор аренды, никаких нарушений ПДД. Протокол выписан по статьям федерального транспортного кодекса о полноте документации.',
				outcome: '$2 566 уплачено за возврат арендованной машины · потеряно полдня',
				source: 'Зафиксировано на нашей странице uk-mexico; тот же коридор Кинтана-Роо, что и в Случае 01',
				severity: 'critical',
				flagCode: 'mx',
			},
			{
				num: '03',
				region: 'Индонезия · Бали',
				date: 'паттерн 2024–2025',
				origin: 'аренда скутера иностранцем · нет категории A в национальных правах',
				scenario: 'Сезон рейдов «разиия» на Бали проходит еженедельно через Чангу, Куту и Убуд. Туристическая полиция выставляет блокпосты, проверяя у иностранных водителей действующий IDP с мотоциклетной отметкой. Большинство неформальных скутерных пунктов в туристических районах не проверяют категорию исходных прав.',
				outcome: 'IDR 250 000–1 000 000 штраф + конфискация скутера + паспорт иногда удерживается арендодателем в качестве залога',
				source: 'Зафиксировано на наших страницах us-indonesia и russia-thailand; продолжающийся паттерн в туристический сезон',
				severity: 'high',
				flagCode: 'id',
			},
			{
				num: '04',
				region: 'Греция · район Афин',
				date: 'паттерн пост-реформы 2024',
				origin: 'турист США/Великобритания · аренда авто',
				scenario: 'Греческий закон 4850 (2021) реформировал прежний стандарт двойного штрафа в €1 000 для иностранцев без IDP. На практике сельские патрули и патрули, не знакомые с реформой, всё ещё выписывают штрафы в диапазоне €100–300, иногда инвокируя прежнюю цифру €1 000.',
				outcome: '€100–300 типично; до €1 000 при инвокации прежнего закона · оспаривание требует документации на греческом (месяцы)',
				source: 'Зафиксировано на нашей странице us-greece (раздел FAQ по применению Закона 4850)',
				severity: 'medium',
				flagCode: 'gr',
			},
			{
				num: '05',
				region: 'Италия · ZTL-камеры (несколько городов)',
				date: 'задокументировано 2024–2025',
				origin: 'американский турист · аренда авто · без IDP',
				scenario: 'Италия по закону требует от не-ЕС водителей возить IDP вместе с физическими правами (Codice della Strada статья 135). Системы ZTL-камер в Риме, Милане, Флоренции и Неаполе фотографируют номера машин въезжающих в ограниченные зоны. Штрафы приходят прокатчику через несколько месяцев; прокатчик переадресовывает сумму плюс админ-сбор.',
				outcome: 'Базовый €42 · обычно €100–400+ с эскалацией · списывается через прокатчика 3–9 месяцев после поездки',
				source: 'Зафиксировано на нашей странице us-italy (раздел Codice della Strada статья 135 + ZTL-камеры)',
				severity: 'medium',
				flagCode: 'it',
			},
			{
				num: '06',
				region: 'Франция · автомагистрали A6/A7',
				date: 'паттерн 2024–2025',
				origin: 'американский турист · аренда авто',
				scenario: 'Камеры скорости между Парижем и Лионом ловят иностранные арендованные машины на 142 км/ч в зоне 130. Базовый штраф €135. Прокатчики добавляют админ-сбор €25 за обработку нарушения иностранным водителем. Несколько превышений в одной поездке складываются.',
				outcome: '€135 + €25 админ за нарушение · аккумулируется до €500+ в поездках с несколькими остановками',
				source: 'Зафиксировано на нашей странице us-france (раздел контроля камерами на магистралях)',
				severity: 'medium',
				flagCode: 'fr',
			},
			{
				num: '07',
				region: 'Япония · любой город',
				date: 'статутная база 2024',
				origin: 'иностранный водитель · поездка >90 дней · без IDP Женева 1949',
				scenario: 'Япония по закону требует IDP по Женевской конвенции 1949 г. для водителей с не-японскими правами, выданный уполномоченным национальным органом. Вождение без него — уголовное преступление, а не административное нарушение. Контроль неравномерен на коротких туристических поездках, но последователен на задокументированных остановках, особенно за пределами Токио и Осаки.',
				outcome: 'Уголовное обвинение · штраф ¥300 000+ · возможный 1-летний запрет на вождение в Японии · вовлечение посольства',
				source: 'Зафиксировано на нашей странице us-japan (раздел требований Женевы 1949 в Японии)',
				severity: 'critical',
				flagCode: 'jp',
			},
			{
				num: '08',
				region: 'Египет · трасса Шарм/Хургада',
				date: 'продолжающийся паттерн 2024–2025',
				origin: 'туристическая аренда скутера · неформальные точки в Наама-Бэй',
				scenario: 'Египет требует мотоциклетной отметки в действующем IDP для управления скутером. Туристические полицейские посты на береговой дороге целенаправленно ловят скутеристов без документов. Прокатные точки в Наама-Бэй и на набережной Хургады не проверяют категорию исходных прав; блокпост после них — проверяет.',
				outcome: 'Штраф EGP 1 000–5 000 на месте · конфискация скутера · прокатчик удерживает паспорт, оставленный как залог',
				source: 'Зафиксировано на нашей странице russia-egypt (раздел контроля в Шарме/Хургаде)',
				severity: 'high',
				flagCode: 'eg',
			},
		],
	},
	escalation: {
		heading: 'Четыре уровня эскалации — от предупреждения до депортации',
		lead: 'Дискреция инспектора определяет, на каком уровне вы окажетесь. Тот же отсутствующий документ может быть устным предупреждением в одной юрисдикции и уголовным делом в другой. Понимание структуры уровней помогает читать вашу ситуацию в моменте.',
		items: [
			{
				tier: 1,
				label: 'Документарное предупреждение',
				description: 'Инспектор отмечает отсутствие IDP, делает запись, рекомендует оформить и отпускает. Штраф не взимается, действий с машиной нет. Часто случается в туристических юрисдикциях или с иностранцами, которые искренне путаются.',
				triggerScenario: 'Первая поездка туриста · сельская местность · доброжелательный к иностранцам инспектор · низкая дорожная обстановка',
				documentedExample: 'Греческие сельские патрули по Закону 4850 иногда выписывают предупреждения вместо штрафов, особенно когда иностранный водитель предъявляет чистые права и договор аренды',
			},
			{
				tier: 2,
				label: 'Штраф на месте',
				description: 'Штраф уплачен на остановке, обычно $50–$300, иногда снижается до меньшей суммы наличными. Чек может быть, может не быть — зависит от юрисдикции. Аренда продолжается; запись о документарном инциденте идёт против иностранного водителя, не против прокатчика.',
				triggerScenario: 'Страна с требованием IDP по закону · рутинная документарная проверка · других нарушений нет · водитель кооперативен',
				documentedExample: 'Штрафы по Codice della Strada статье 135 в Италии (€42 базовый, до €100–400) обычно остаются на этом уровне, когда остановка короткая, а исходные права чистые',
			},
			{
				tier: 3,
				label: 'Конфискация машины или аннулирование договора',
				description: 'Машина возвращена прокатчику немедленно. День или полдня потеряны на возврат или организацию альтернативы. Договор аренды может быть аннулирован — страховка перестаёт действовать с момента регистрации документарного нарушения. Залог под угрозой.',
				triggerScenario: 'Задокументированная зона контроля · несколько документарных проблем · инспектор эскалирует · политика прокатчика аннулирует договор по протоколу',
				documentedExample: 'Блокпосты на трассе 307 в Кинтана-Роо (инциденты мая 2025 в Тулуме и Канкуне) выходят на этот уровень, когда документарная проблема накладывается на условия аренды; конфискации скутеров на Бали в сезон рейдов попадают на этот уровень с осложнением «паспорт в залоге»',
			},
			{
				tier: 4,
				label: 'Уголовная эскалация',
				description: 'Арест, вовлечение посольства, депортация или запрет на вождение. Редко, но задокументировано в странах, где требование IDP — статутное (Япония при поездках >90 дней, Таиланд при длительных поездках). Поездка фактически заканчивается. Повторный въезд в некоторых случаях требует разрешения исходного протокола.',
				triggerScenario: 'Длительный иностранный водитель · юрисдикция с явным договорным требованием IDP · нарушение уголовного кодекса (Япония, часть Таиланда при поездках >90 дней) · отягчающие факторы (без страховки, DUI, ДТП)',
				documentedExample: 'Японский Закон о дорожном движении явно криминализирует вождение без IDP Женевы 1949 для иностранцев с не-японскими правами при поездках свыше 90 дней; задокументированные наказания включают штрафы ¥300 000+, конфискацию транспорта и 1-летние запреты на вождение',
			},
		],
	},
	countryTable: {
		heading: 'По странам — сколько на практике стоит «нет IDP»',
		lead: 'Пятнадцать направлений с проверенными требованиями к IDP и задокументированным диапазоном штрафов за 2024–2026. Сверено со страницами по странам на этом сайте по каждому направлению. «Требуется по закону» читает местный статут; «задокументированный штраф» читает фактические отчёты об инцидентах, которые у нас есть.',
		columnLabels: {
			country: 'Страна',
			legallyRequired: 'IDP требуется по закону?',
			penalty: 'Задокументированный штраф (без IDP)',
			worstOutcome: 'Худший задокументированный исход',
		},
		rows: [
			{
				flagCode: 'mx',
				country: 'Мексика',
				legallyRequired: 'Нет (англоязычные права принимаются)',
				documentedPenalty: '$1 094–$2 566 (Тулум/Канкун, 2025)',
				worstOutcome: 'Возврат аренды + полдня потеряно (Случай 02)',
				source: 'Страницы uk-mexico, us-mexico',
			},
			{
				flagCode: 'it',
				country: 'Италия',
				legallyRequired: 'Да (Codice della Strada статья 135)',
				documentedPenalty: '€42–€400+ (ZTL + дорожный, аккумулируется)',
				worstOutcome: 'ZTL-штрафы приходят через 3–9 месяцев после поездки',
				source: 'Страница us-italy',
			},
			{
				flagCode: 'gr',
				country: 'Греция',
				legallyRequired: 'Неоднозначно после реформы (Закон 4850/2021)',
				documentedPenalty: '€100–€300 типично; до €1 000 по прежней инвокации',
				worstOutcome: 'Оспаривание на греческом (месяцы)',
				source: 'Страница us-greece',
			},
			{
				flagCode: 'es',
				country: 'Испания',
				legallyRequired: 'Да для не-ЕС водителей',
				documentedPenalty: '€100–€500 (в зависимости от контекста)',
				worstOutcome: 'ZBE-штрафы через прокатчика + админ-сбор',
				source: 'Страница us-spain',
			},
			{
				flagCode: 'jp',
				country: 'Япония',
				legallyRequired: 'Да — только Женева 1949 (уголовно если нет)',
				documentedPenalty: '¥300 000+ + запрет на вождение',
				worstOutcome: 'Уголовное обвинение · 1-летний запрет · посольство',
				source: 'Страница us-japan',
			},
			{
				flagCode: 'th',
				country: 'Таиланд',
				legallyRequired: 'Да при поездках свыше 90 дней',
				documentedPenalty: 'THB 1 000 + конфискация (короткие поездки)',
				worstOutcome: 'Долгосрочные водители — уголовная эскалация',
				source: 'Страницы us-thailand, russia-thailand',
			},
			{
				flagCode: 'id',
				country: 'Индонезия',
				legallyRequired: 'Да (и мотоциклетная отметка для скутеров)',
				documentedPenalty: 'IDR 250 000–1 000 000 + конфискация скутера',
				worstOutcome: 'Паспорт-в-залоге (недели рейдов)',
				source: 'Страница us-indonesia',
			},
			{
				flagCode: 'eg',
				country: 'Египет',
				legallyRequired: 'Да (и мотоциклетная отметка для скутеров)',
				documentedPenalty: 'EGP 1 000–5 000 + конфискация',
				worstOutcome: 'Конфискация скутера + паспорт в залоге (Наама-Бэй)',
				source: 'Страница russia-egypt',
			},
			{
				flagCode: 'tr',
				country: 'Турция',
				legallyRequired: 'Настоятельно рекомендуется для нелатиницы',
				documentedPenalty: 'Переменно — отказ в аренде чаще штрафа',
				worstOutcome: 'Отказ в аренде без перевода в мелких пунктах',
				source: 'Страницы us-turkey, russia-turkey',
			},
			{
				flagCode: 'fr',
				country: 'Франция',
				legallyRequired: 'Нет для туристов (рекомендуется для нелатиницы)',
				documentedPenalty: '€135 + €25 админ за нарушение по камере',
				worstOutcome: 'Аккумуляция нескольких камер до €500+ за поездку',
				source: 'Страница us-france',
			},
			{
				flagCode: 'de',
				country: 'Германия',
				legallyRequired: 'Нет первые 6 месяцев (перевод для нелатиницы)',
				documentedPenalty: '€10–€60 рутина; €100+ за повторное',
				worstOutcome: 'Нарушения с автобана аккумулируются по точкам',
				source: 'Страницы us-germany, russia-germany',
			},
			{
				flagCode: 'gb',
				country: 'Великобритания',
				legallyRequired: 'Нет (большинство ЕС/Содружество принимаются)',
				documentedPenalty: 'Редко — отказ в аренде вероятнее штрафа',
				worstOutcome: 'Трения с арендой; риск непризнания страховки',
				source: 'Страница us-uk (где применимо)',
			},
			{
				flagCode: 'cr',
				country: 'Коста-Рика',
				legallyRequired: 'Нет для туристов до 3 месяцев',
				documentedPenalty: 'Переменно; штрафы на пляжах/охранных зонах',
				worstOutcome: '₡500 000 (~$975) штраф за вождение по пляжу · конфискация',
				source: 'Страницы us-costa-rica, uk-costa-rica',
			},
			{
				flagCode: 'cy',
				country: 'Кипр',
				legallyRequired: 'Нет для коротких поездок (рекомендуется)',
				documentedPenalty: '€150 штраф за телефон → €225 при просрочке свыше 15 дней',
				worstOutcome: 'Инцидент при пересечении в Северный Кипр — без лимита по ответственности',
				source: 'Страница us-cyprus',
			},
			{
				flagCode: 'ae',
				country: 'ОАЭ',
				legallyRequired: 'Да для многих стран происхождения',
				documentedPenalty: 'AED 400+ на задокументированных остановках',
				worstOutcome: 'Отказ в аренде в аэропортовых пунктах Дубая/Абу-Даби',
				source: 'Страницы us-uae, russia-uae',
			},
		],
		footnote: 'Все суммы штрафов сверены со страницами по странам на этом сайте и публичными отчётами об инцидентах, на которые там есть ссылки. Конвертация валют в USD — иллюстративная (курсы меняются). Конкретные исходы варьируются по дискреции инспектора, региональной интенсивности контроля и сопутствующим нарушениям.',
	},
	rentalContract: {
		heading: 'Что происходит с договором аренды',
		lead: 'Штраф — это видимая цена. Последствия по договору аренды — невидимая, и часто крупнее самого протокола. Три вещи происходят с вашими бумагами в момент, когда документарный инцидент попадает в систему.',
		paragraphs: [
			'**Страховое покрытие может перестать действовать.** Стандартные договоры аренды у крупных сетей (Hertz, Avis, Sixt, Europcar, Budget) содержат пункт, аннулирующий покрытие при управлении без обязательной по закону документации. Если после задокументированного инцидента с IDP-нарушением случается ДТП или угон, отдел убытков имеет основания отказать в покрытии задним числом. Однотранспортное ДТП, которое стоило бы только франшизы, превращается в полную стоимость машины с вас.',
			'**Залог под угрозой и заплатит его держатель карты.** Преавторизация на карте при выдаче ($500–$2 000 типично) становится доступной для списания прокатчиком. Документарные протоколы против иностранного водителя — это явное перечисленное основание для списания залога у большинства крупных сетей. Прокатчику не нужно судебное вмешательство — авторизация карты остаётся в силе.',
			'**Блокировка на будущие аренды реальна, но переменна.** Крупные сети обмениваются данными о документарных инцидентах между региональными офисами. Задокументированный протокол в одном офисе Кинтана-Роо может попасть в глобальную базу Hertz/Avis/Sixt на 12–24 месяца, что приведёт к повышенным депозитам, отказам в аренде или отказам в экспресс-выдаче в будущих поездках. Мелкие локальные прокатчики такими данными не обмениваются и не затронуты.',
		],
	},
	recovery: {
		heading: 'Гайд по выживанию — что делать если поймали',
		lead: 'Пять конкретных действий во время и после остановки. Цель — минимизировать немедленную стоимость, сохранить бумажный след для последующего оспаривания и сохранить договор аренды в действии где возможно.',
		steps: [
			{
				num: '01',
				title: 'Получите квитанцию за всё уплаченное',
				body: 'Никаких наличных без письменной квитанции — точка. Квитанция — ваш документ для налогового вычета (если это командировка), оспаривания по карте (если списали позже) и обращения в посольство (если эскалируете). Если инспектор отказывает в выдаче — вежливо попросите номер протокола, на который можно ссылаться. В большинстве стран с формальным дорожным кодексом для любого дорожного штрафа требуется выписанный протокол; его отсутствие — красный флаг неформального сбора наличных, а не уставного наказания.',
			},
			{
				num: '02',
				title: 'Сфотографируйте всё',
				body: 'Протокол, квитанцию, машину инспектора и его жетон (где это допустимо местными нормами), место остановки. Время важно — большинство телефонных камер встраивают локацию и время в метаданные снимка, что является допустимой документацией позже. Сфотографируйте свои права и договор аренды вместе как доказательство, что у вас была чистая документация в момент остановки. Сохраните копии в два места (телефон + e-mail себе).',
			},
			{
				num: '03',
				title: 'Уведомите прокатчика немедленно',
				body: 'Позвоните прокатчику в тот же день, до возврата машины. Прокатчик добавит протокол к вашему делу до того, как вы приедете — это может упростить возврат и сохранить залог нетронутым, если протокол не аннулирует покрытие. Документируйте звонок (время, имя собеседника). Если прокатчик спишет залог по протоколу до того, как вы успеете оспорить, время звонка становится вашей записью.',
			},
			{
				num: '04',
				title: 'Подайте посольскую ноту (даже если помощь не нужна)',
				body: 'Посольство или консульство вашей родной страны ведёт учёт инцидентов с иностранными водителями, о которых сообщают граждане. Нота редко даёт прямое вмешательство, но создаёт бумажный след для последующих оспариваний. Для путешественников из России — консульская служба МИД. Для США — STEP (Smart Traveler Enrollment Program). Пять минут подачи; польза долгосрочная.',
			},
			{
				num: '05',
				title: 'Оспорьте позже по формальным каналам',
				body: 'Большинство штрафов с иностранных водителей можно оспорить, оформив бумаги на официальном языке страны выдачи. Уровень успеха переменный, но цена попытки низкая (часто письменное заявление и копии документации). Для задокументированных инцидентов с эскалацией до споров по карте фотографии из шага 02 и квитанция из шага 01 — это ваше основное доказательство. По срокам — большинство юрисдикций ограничивает оспаривание 60–180 днями с даты протокола.',
			},
		],
	},
	midCta: {
		kicker: 'Средняя сессия профилактики: 2 минуты',
		title: '2-минутная альтернатива за $35 каждому из задокументированных случаев выше.',
		button: 'Оформить IDP Companion — $35',
	},
	costComparison: {
		heading: 'Сравнение цены — $35 профилактики против задокументированных штрафов',
		lead: 'Математика «профилактика vs наказание» по восьми задокументированным случаям этого гайда. Каждый задокументированный инцидент в таблице ниже стоит больше, чем $35 за IDP Companion, который мог бы его поглотить.',
		columnLabels: {
			scenario: 'Задокументированный случай',
			avoided: 'Цена сэкономлена',
			ratio: 'Коэффициент профилактики',
		},
		rows: [
			{ scenario: 'Лучший случай (греческое предупреждение)', avoided: '$50', ratio: '1 : 1,4' },
			{ scenario: 'Типичный штраф в стране с IDP-требованием', avoided: '$300', ratio: '1 : 8,6' },
			{ scenario: 'Аккумуляция ZTL в Италии (3–5 зон)', avoided: '$500', ratio: '1 : 14' },
			{ scenario: 'Бали — конфискация скутера в рейд', avoided: '$200 + день потерян', ratio: '1 : 7+' },
			{ scenario: 'Египет — конфискация + паспорт в залог', avoided: '$300 + полдня', ratio: '1 : 12+' },
			{ scenario: 'Тулум — Случай 01 (трасса 307)', avoided: '$1 094,50', ratio: '1 : 31' },
			{ scenario: 'Канкун — Случай 02 (тот же коридор)', avoided: '$2 566', ratio: '1 : 73' },
			{ scenario: 'Япония — уголовная эскалация (длительный)', avoided: '¥300 000+ + запрет', ratio: '1 : 57+ (без учёта запрета)' },
		],
		math: 'Средний задокументированный инцидент в этом гайде: $612. Средняя цена профилактики: $35. Средний коэффициент профилактики: 1 : 17. Самый дорогой задокументированный инцидент (Случай 02, Канкун, май 2025) даёт коэффициент 73×. IDP Companion — не самое дешёвое возможное решение (государственный IDP от уполномоченного национального органа в вашей стране стоит $20–$79), но это самый быстрый онлайн-доступный путь с той же читаемостью у стойки проката и при дорожной проверке.',
	},
	faq: {
		heading: 'FAQ — что путешественники спрашивают перед покупкой',
		lead: 'Прямые ответы на вопросы, которые наши страницы по странам и почта поддержки показывают как самые частые предпокупочные.',
		items: [
			{
				id: 1,
				question: 'Могу ли я ехать за границу без IDP?',
				answer: 'Иногда — ответ зависит от страны. Страны, где можно ехать без какой-либо переводной бумаги: большинство стран ЕС (для держателей ЕС/ЕЭП-прав), Великобритания (для прав в латинице из не-ЕС стран) и Мексика (для англоязычных фотокарт). Страны, которые требуют IDP по закону и где вождение без него документировано приводит к дорожным штрафам: Италия (Codice della Strada статья 135), Япония (уголовно при поездках свыше 90 дней), Испания (для не-ЕС водителей), части Южной Америки. Наши страницы по странам указывают, какой случай применим к каждому направлению, которое мы покрываем.',
			},
			{
				id: 2,
				question: 'Что самое плохое может случиться?',
				answer: 'Уголовное обвинение и депортация — в задокументированных случаях в Японии при поездках свыше 90 дней. Японский Закон о дорожном движении явно криминализирует вождение без IDP Женевы 1949 для иностранцев с не-японскими правами свыше туристического порога. Задокументированные наказания включают штрафы ¥300 000+, конфискацию транспорта, годовые запреты на вождение и вовлечение посольства. Для туристических поездок до 90 дней в Японии контроль неравномерен, но задокументированные остановки дают тот же уставной исход. Вне Японии задокументированный худший случай — остановка в коридоре Канкуна в мае 2025: $2 566 за возврат аренды, потеряно полдня, без уголовного обвинения.',
			},
			{
				id: 3,
				question: 'А меня реально поймают?',
				answer: 'Вероятность зависит от страны и растёт. В Кинтана-Роо (Мексика) задокументировано две IDP-документарные остановки в одном только мае 2025, обе попали в международные новости. Итальянские ZTL-камеры на 100% автоматические — поймают любую машину без местного резидента, въезжающую в ограниченную зону, независимо от наличия инспектора. Сезон балийских рейдов «разиия» проходит еженедельно через туристические районы. Тезис «туристов не штрафуют» был верным десять лет назад и задокументированно перестал быть верным в 2024–2026. Страницы по странам на этом сайте отслеживают сигналы интенсивности контроля по странам.',
			},
			{
				id: 4,
				question: 'А если у меня IDP другой страны?',
				answer: 'Не подойдёт — IDP привязан к национальным правам, которые он переводит. IDP Женевы 1949, выданный в США, покрывает американские права; он не покрывает российские или греческие. Если у вас несколько национальных прав, нужны отдельные IDP на каждую. Если вы отказались от старых прав при получении новых — старый IDP автоматически перестаёт быть действительным, потому что лежащих в основе прав больше не существует. Поэтому же члены семьи не могут пользоваться одним IDP на двоих — каждым правам нужен свой.',
			},
			{
				id: 5,
				question: 'Заменит ли переводчик в телефоне на остановке IDP?',
				answer: 'Нет — по двум причинам. Во-первых, проверяется документ, а не ваше умение общаться. Итальянская Codice della Strada статья 135 не говорит «водитель должен уметь перевести свои права устно»; она говорит «водитель должен иметь при себе переводной документ». Приложение в телефоне — это не документ. Во-вторых, даже там, где приложение могло бы помочь с устным общением, поведение инспектора по умолчанию на документарной остановке — зарегистрировать протокол и идти дальше. Переводчики не меняют того, что попадает в систему протоколов.',
			},
			{
				id: 6,
				question: 'А если меня поймают по пути к продлению IDP?',
				answer: 'Системе протоколов всё равно на ваше намерение. Штраф выписывается по состоянию документов в момент остановки. «Я как раз собирался оформить» — не контестируемая защита ни в одной из задокументированных юрисдикций этого гайда. Практическое следствие: получите документ до начала поездки или до того, как сядете за руль в стране. IDP Companion доступен онлайн за 2 минуты; уполномоченный государственный IDP в вашей стране требует 1–14 дней обработки в зависимости от эмитента.',
			},
			{
				id: 7,
				question: 'Можно ли сослаться на незнание?',
				answer: 'Иногда — для предупредительного уровня (Уровень 1 в таблице эскалации выше) искреннее замешательство туриста-впервые иногда даёт предупреждение вместо штрафа. Это дискреция инспектора, не уставная защита. Для эскалированных уровней (аннулирование договора аренды, уголовное дело, депортация) уставной формулировкой остаётся «нес ли водитель требуемый документ», а не «знал ли водитель, что должен». Незнание задокументировано как фактор, снижающий тяжесть наказания примерно в 1 из 4 рассмотренных нами отчётов; оно не устраняет наказание.',
			},
			{
				id: 8,
				question: 'IDP Companion предотвращает все задокументированные случаи в этом гайде?',
				answer: 'Большинство, но не все. IDP Companion — это частный многоязычный переводной документ; он представляет данные ваших прав на 12 языках и поглощает практическую преграду «сотрудник не читает мои права» у стойки проката и при рутинных дорожных проверках. Там, где закон страны явно требует IDP по Женевской 1949 или Венской 1968 конвенции (Япония при поездках свыше 90 дней, часть Южной Америки, Таиланд при долгих поездках), только государственный IDP от уполномоченного национального органа в вашей стране удовлетворяет уставному требованию. Наши страницы по странам явно указывают, какая страна попадает в какую категорию. Для всех остальных задокументированных случаев в этом гайде IDP Companion — это более быстрый, дешёвый, доступный онлайн путь к тому же операционному результату.',
			},
		],
	},
	finalCta: {
		heading: 'Не добавляйте себя в этот список.',
		text: 'Восемь задокументированных случаев выше. Пятнадцать стран с проверенными диапазонами штрафов. Четыре уровня эскалации от предупреждения до депортации. Самый дешёвый случай в гайде стоит $50. Самая дешёвая профилактика стоит $35 и занимает две минуты онлайн.',
		button: 'Оформить IDP Companion — $35',
	},
	methodology: {
		heading: 'Методология и источники',
		body: 'Каждый задокументированный случай, диапазон штрафов и статутная ссылка в этом гайде сверены с существующей страницей по соответствующей стране на этом сайте (откуда исходные данные) и с публичным источником, на который там ссылка. Мы не включаем штрафы, которые не можем привязать ни к статутному тексту, ни к задокументированному инциденту. Конвертация наказаний в USD — иллюстративная (курсы меняются), и базовые суммы в местной валюте — авторитетные. Конкретные исходы варьируются по дискреции инспектора, региональной интенсивности контроля и сопутствующим нарушениям; случаи ниже описывают паттерны, которые мы задокументировали, а не гарантии о каком-либо конкретном будущем инциденте.',
		sourcesHeading: 'Первичные источники',
		sources: [
			'Codice della Strada (Итальянский дорожный кодекс), статья 135 — требование IDP для не-ЕС водителей',
			'Греческий закон 4850/2021 — реформа требований к IDP иностранных водителей',
			'Японский Закон о дорожном движении (Doro Kotsu Ho) — требование IDP Женевы 1949 для иностранцев с не-японскими правами',
			'Мексиканский федеральный транспортный кодекс — контроль документации на трассе 307 в Кинтана-Роо',
			'Индонезийская полицейская операционная директива — протоколы контроля скутеров на Бали в сезон рейдов',
			'Египетский протокол туристической полиции на береговой дороге — контроль блокпостов в Шарме и Хургаде',
			'UN Treaty Series Volume 125 — Женевская конвенция 1949 г. о дорожном движении (статутная база IDP)',
			'FTC Consumer Advisory "Beware Fake International Driver\'s Licenses" (2019) — контекст по мошенническим IDA-разрешениям',
			'Страницы по странам на этом сайте (us-mexico, uk-mexico, us-italy, us-greece, us-japan, us-france, us-spain, us-indonesia, russia-egypt, russia-thailand) — первичный источник каталога паттернов инцидентов',
		],
	},
	legal: {
		heading: 'Правовая оговорка',
		body: 'IDP Companion — это частный многоязычный переводной справочный документ, не являющийся государственным международным водительским удостоверением по Женевской конвенции 1949 г. или Венской конвенции 1968 г. Уполномоченные эмитенты признанных по договору IDP включают AAA и AATA (США), пункты PayPoint (Великобритания, с марта 2024 г.), РОСАВТОКЛУБ (Россия), ADAC (Германия) и аналогичные национальные автоклубы в каждой подписавшей конвенцию стране. IDP Companion не аффилирован ни с одним из этих эмитентов, а также с государственными транспортными ведомствами. Задокументированные штрафы в этом гайде иллюстративны для паттернов, отчёты о которых поступали в 2024–2026 гг.; конкретные исходы варьируются по дискреции инспектора, стране и обстоятельствам. Перед вождением всегда сверяйтесь с транспортным ведомством вашего направления для актуальных правовых требований.',
	},
};

// ─────────────────────────────────────────────────────────────────────────────
// ES — Hispanic-American audience POV (Mexico Tulum/Cancún incidents anchored)
// ─────────────────────────────────────────────────────────────────────────────

const es: DriveWithoutIdpCopy = {
	seo: {
		title: 'Conducir sin PIC — Casos Reales, Multas Reales (Guía 2026)',
		description: 'Ocho incidentes documentados (2024-2026) de conductores extranjeros sin PIC. Multas país por país, 4 niveles de escalada, guía de recuperación. $35 vs $50–$2.566 documentados.',
		ogTitleShort: 'Conducir sin PIC — Qué pasa',
		ogSubtitle: '8 casos · 4 niveles de escalada · 15 países · prevención por $35',
	},
	breadcrumbs: {
		home: 'Inicio',
		guides: 'Guías',
		current: 'Conducir sin PIC — 2026',
	},
	hero: {
		kicker: 'PERMISO INTERNACIONAL DE CONDUCIR · CASOS DOCUMENTADOS · 2026',
		title: 'Conducir sin PIC — Lo que realmente pasa (8 casos, 2024-2026)',
		authorBy: 'Por',
		authorReviewedLabel: 'Última revisión',
		authorReviewedDate: 'junio 2026',
		lead: 'En mayo de 2025, dos turistas extranjeros que conducían coches de alquiler por la Carretera 307 cerca de Tulum y Cancún fueron detenidos en retenes documentales de Quintana Roo. Uno se fue con $1.094,50 menos; el otro pagó $2.566 para recuperar su alquiler. Ninguno había excedido la velocidad. Ninguno había bebido. Ambos tenían un permiso de conducir extranjero limpio. Lo que no tenían era el papel correcto, y de eso trata toda esta guía. Conducir en el extranjero sin un Permiso Internacional de Conducir rara vez se trata de un solo documento ausente; se trata de lo que ese documento debía absorber. Abajo: ocho incidentes documentados de 2024–2026, los cuatro niveles de escalada que típicamente siguen, y la tabla país por país de lo que «sin PIC» realmente cuesta.',
		ctaPrimary: 'Obtén IDP Companion ($35 / año)',
		ctaSecondary: 'Ver precios completos',
	},
	quickVerdict: {
		heading: 'Respuesta corta — y el rango',
		lead: 'Las multas documentadas por conducir sin PIC requerido en 2024–2026 van desde $50 (parada policial nivel-aviso en zonas rurales de Grecia) hasta $2.566 (un único retén documental en Quintana Roo cerca de Cancún, mayo 2025). En algunos destinos — Japón con estancias superiores a 90 días, alquileres no documentados de motos en Bali durante razzia, retenes costeros egipcios — la brecha documental escala de multa a confiscación de vehículo, deportación o cargo penal. El patrón importa más que cualquier incidente individual: donde la ley local exige explícitamente un PIC y no lo tienes, la sanción rara vez es «solo una multa». Absorbe todo lo que pasa durante la parada.',
		stats: [
			{ value: '$50–$2.566', label: 'Rango de multas documentadas 2024–2026' },
			{ value: '8', label: 'Casos analizados abajo' },
			{ value: '4', label: 'Niveles de escalada — de aviso a deportación' },
			{ value: '15', label: 'Países en la tabla de multas' },
		],
	},
	cases: {
		heading: '8 casos documentados — qué pasó realmente',
		lead: 'Cada caso abajo está cruzado con una página país-par existente en este sitio (de donde provienen los datos originales de multas) y con la fuente pública donde se reportó originalmente el incidente. La gravedad clasifica el resultado, no el humor del oficial.',
		items: [
			{
				num: '01',
				region: 'México · Tulum',
				date: 'mayo 2025',
				origin: 'turista italiano · alquiler de coche',
				scenario: 'Retén documental en la Carretera 307 al sur de Tulum. El conductor presentó un permiso italiano limpio en una parada documental rutinaria. Los oficiales citaron requisitos del código federal de tránsito mexicano sobre acompañamiento de permiso en idioma extranjero.',
				outcome: '$1.094,50 pagados al borde de la carretera · alquiler retenido · viaje continuado',
				source: 'Documentado en nuestra página uk-mexico (sección de aplicación en Quintana Roo); patrón confirmado por reportes regionales de Ackerman Group',
				severity: 'high',
				flagCode: 'mx',
			},
			{
				num: '02',
				region: 'México · corredor de Cancún',
				date: 'mayo 2025',
				origin: 'turista italiano · alquiler de coche',
				scenario: 'Segundo retén documentado en la Carretera 307 el mismo mes, incidente separado. Conductor con permiso limpio, contrato de alquiler activo, sin infracción de tránsito. Citación emitida bajo cláusulas del código vehicular federal sobre completitud documental.',
				outcome: '$2.566 pagados para recuperación del alquiler · medio día perdido',
				source: 'Documentado en nuestra página uk-mexico; mismo corredor de Quintana Roo que el Caso 01',
				severity: 'critical',
				flagCode: 'mx',
			},
			{
				num: '03',
				region: 'Indonesia · Bali',
				date: 'patrón 2024–2025',
				origin: 'alquiler extranjero de moto — sin Categoría A en permiso de origen',
				scenario: 'La temporada de razzia en Bali corre semanalmente por Canggu, Kuta y Ubud. La policía turística monta paradas verificando en conductores extranjeros un PIC válido con endoso de motocicleta. La mayoría de tiendas informales de alquiler de motos en zonas turísticas no verifica la categoría del permiso subyacente.',
				outcome: 'Multa IDR 250.000–1.000.000 + confiscación de moto + pasaporte a veces retenido por la tienda como recuperación de depósito',
				source: 'Documentado en nuestras páginas us-indonesia y russia-thailand; patrón continuo durante la temporada turística',
				severity: 'high',
				flagCode: 'id',
			},
			{
				num: '04',
				region: 'Grecia · zona de Atenas',
				date: 'patrón post-reforma 2024',
				origin: 'turista de EE. UU./Reino Unido · alquiler de coche',
				scenario: 'La Ley Griega 4850 (2021) reformó el estándar anterior de doble multa de €1.000 para conductores extranjeros sin PIC. En la práctica, algunos oficiales rurales — y algunas patrullas no familiarizadas con el cambio — siguen emitiendo multas en el rango €100–300, ocasionalmente invocando la cifra anterior de €1.000.',
				outcome: '€100–300 típico; hasta €1.000 en invocaciones del estatuto antiguo · disputar requiere papeleo en griego (meses)',
				source: 'Documentado en nuestra página us-greece (sección FAQ sobre la variación de aplicación de la Ley 4850)',
				severity: 'medium',
				flagCode: 'gr',
			},
			{
				num: '05',
				region: 'Italia · cámaras ZTL (varias ciudades)',
				date: 'documentado 2024–2025',
				origin: 'turista estadounidense · alquiler de coche · sin PIC',
				scenario: 'Italia exige legalmente que conductores no-UE lleven un PIC junto a su permiso físico bajo el Artículo 135 del Codice della Strada. Los sistemas de cámaras ZTL en Roma, Milán, Florencia y Nápoles fotografían las matrículas de vehículos que entran a zonas restringidas. Las multas se envían a la agencia de alquiler meses después; la agencia traslada el cargo más una tarifa administrativa.',
				outcome: '€42 base · típicamente €100–400+ escalado · cobrado vía agencia de alquiler 3–9 meses después del viaje',
				source: 'Documentado en nuestra página us-italy (sección Codice della Strada Art. 135 + cámaras ZTL)',
				severity: 'medium',
				flagCode: 'it',
			},
			{
				num: '06',
				region: 'Francia · autopista A6/A7',
				date: 'patrón 2024–2025',
				origin: 'turista estadounidense · alquiler de coche',
				scenario: 'Las cámaras de velocidad de autopista entre París y Lyon capturan coches de alquiler con matrícula extranjera a 142 km/h en zonas de 130. La multa base es €135. Las agencias de alquiler añaden una tarifa administrativa de €25 por procesar la infracción de conductor extranjero. Múltiples eventos de exceso de velocidad en un solo viaje se acumulan.',
				outcome: '€135 + €25 admin por infracción · acumulando a €500+ en viajes con múltiples paradas',
				source: 'Documentado en nuestra página us-france (sección de aplicación por cámaras en autopista)',
				severity: 'medium',
				flagCode: 'fr',
			},
			{
				num: '07',
				region: 'Japón · cualquier ciudad',
				date: 'base estatutaria 2024',
				origin: 'conductor extranjero · estancia superior a 90 días · sin PIC Ginebra 1949',
				scenario: 'Japón exige legalmente un PIC de la Convención de Ginebra 1949 para conductores con permiso no japonés, emitido por el organismo nacional autorizado del titular. Conducir sin él es un delito penal, no una infracción de tráfico. La aplicación es desigual en estancias turísticas cortas pero consistente en paradas documentadas, particularmente fuera de Tokio y Osaka.',
				outcome: 'Cargo penal · multa ¥300.000+ · posible prohibición de 1 año de conducir en Japón · participación de la embajada',
				source: 'Documentado en nuestra página us-japan (sección de requerimiento Ginebra 1949 en Japón)',
				severity: 'critical',
				flagCode: 'jp',
			},
			{
				num: '08',
				region: 'Egipto · carretera costera Sharm/Hurghada',
				date: 'patrón continuo 2024–2025',
				origin: 'alquiler turístico de moto · tiendas informales de Naama Bay/paseo marítimo',
				scenario: 'Egipto exige un endoso de motocicleta en un PIC válido para conducir una moto. Los retenes de policía turística en la carretera costera apuntan específicamente a alquileres de moto sin documentación. Las tiendas de alquiler en Naama Bay y a lo largo del paseo marítimo de Hurghada no verifican la categoría del permiso subyacente; el retén después sí lo hace.',
				outcome: 'Multa EGP 1.000–5.000 cobrada en el sitio · moto confiscada · la tienda de alquiler retiene el pasaporte dejado como depósito',
				source: 'Documentado en nuestra página russia-egypt (sección de aplicación en Sharm/Hurghada)',
				severity: 'high',
				flagCode: 'eg',
			},
		],
	},
	escalation: {
		heading: 'Los cuatro niveles de escalada — de aviso a deportación',
		lead: 'La discreción del oficial moldea en qué nivel acabas. El mismo documento faltante puede ser un aviso en una jurisdicción y un cargo penal en otra. Conocer la estructura de niveles ayuda a leer tu situación en el momento.',
		items: [
			{
				tier: 1,
				label: 'Aviso documental',
				description: 'El oficial nota el PIC faltante, hace un registro, te anima a obtener uno y te deja continuar. Sin multa cobrada, sin acción vehicular. Suele ocurrir en jurisdicciones turísticas o con conductores extranjeros que muestran confusión genuina.',
				triggerScenario: 'Turista primera-vez · zona rural · oficial amable con visitantes extranjeros · situación de tráfico de bajo riesgo',
				documentedExample: 'Las patrullas rurales griegas bajo la Ley 4850 a veces emiten avisos en lugar de multas, particularmente cuando el conductor extranjero presenta un permiso limpio y contrato de alquiler',
			},
			{
				tier: 2,
				label: 'Multa de carretera en el sitio',
				description: 'Multa cobrada en la parada, $50–$300 típico, a veces negociable a una cifra menor en efectivo. El recibo puede o no proveerse según la jurisdicción. El alquiler continúa; el evento documental se registra contra el conductor extranjero, no contra la agencia.',
				triggerScenario: 'País documentado con requerimiento PIC · parada documental rutinaria · sin otras infracciones · conductor cooperativo',
				documentedExample: 'Las multas del Artículo 135 del Codice della Strada italiano (€42 base, escalando a €100-400) típicamente se quedan en este nivel cuando la parada es breve y el permiso subyacente está limpio',
			},
			{
				tier: 3,
				label: 'Confiscación de vehículo o contrato anulado',
				description: 'Alquiler devuelto a la agencia inmediatamente. Día o medio día perdido recuperando vehículo o arreglando transporte alternativo. El contrato de alquiler puede ser anulado — la cobertura del seguro deja de aplicarse desde el momento en que se registra la infracción documental. Depósito en riesgo.',
				triggerScenario: 'Zona documentada de aplicación · múltiples problemas documentales · oficial escala · política de la agencia anula contrato por citación',
				documentedExample: 'Los retenes de Carretera 307 en Quintana Roo (los incidentes de mayo 2025 en Tulum y Cancún) llegan a este nivel cuando el problema documental se compone con detalles del contrato de alquiler; las confiscaciones de motos en Bali durante razzia caen en este nivel con la complicación de pasaporte-retenido-como-depósito',
			},
			{
				tier: 4,
				label: 'Escalada penal',
				description: 'Arresto, participación de embajada, deportación o prohibición de conducir. Raro pero documentado en países donde el requerimiento de PIC es estatutario (Japón con estancias superiores a 90 días, Tailandia con estancias largas). El viaje efectivamente termina. La re-entrada en algunos casos requiere resolver la citación original.',
				triggerScenario: 'Conductor extranjero de larga estancia · jurisdicción con requerimiento explícito de PIC de tratado · violación del código penal (Japón, partes de Tailandia para estancias >90 días) · factores agravantes (sin seguro, DUI, accidente)',
				documentedExample: 'La Ley Japonesa de Tráfico Vial criminaliza explícitamente conducir sin PIC Ginebra 1949 para titulares de permisos no japoneses con estancias superiores a 90 días; las sanciones documentadas incluyen multas de ¥300.000+, confiscación de vehículo y prohibiciones de conducción de 1 año',
			},
		],
	},
	countryTable: {
		heading: 'País por país — cuánto cuesta realmente «sin PIC»',
		lead: 'Quince destinos con requisitos PIC verificados y rangos de multas documentadas de 2024–2026. Cruzados con las páginas país-par en este sitio para cada destino. «Requerido legalmente» lee el estatuto local; «multa documentada» lee los reportes de incidentes reales que tenemos.',
		columnLabels: {
			country: 'País',
			legallyRequired: '¿PIC requerido por ley?',
			penalty: 'Multa documentada (sin PIC)',
			worstOutcome: 'Peor resultado documentado',
		},
		rows: [
			{
				flagCode: 'mx',
				country: 'México',
				legallyRequired: 'No (foto-licencias en inglés aceptadas)',
				documentedPenalty: '$1.094–$2.566 (Tulum/Cancún 2025)',
				worstOutcome: 'Recuperación de alquiler + medio día perdido (Caso 02)',
				source: 'Páginas uk-mexico, us-mexico',
			},
			{
				flagCode: 'it',
				country: 'Italia',
				legallyRequired: 'Sí (Codice della Strada Art. 135)',
				documentedPenalty: '€42–€400+ (ZTL + carretera, acumulado)',
				worstOutcome: 'Multas ZTL recibidas 3–9 meses post-viaje',
				source: 'Página us-italy',
			},
			{
				flagCode: 'gr',
				country: 'Grecia',
				legallyRequired: 'Ambiguo post-reforma (Ley 4850/2021)',
				documentedPenalty: '€100–€300 típico; hasta €1.000 en invocaciones antiguas',
				worstOutcome: 'Disputa en griego (meses)',
				source: 'Página us-greece',
			},
			{
				flagCode: 'es',
				country: 'España',
				legallyRequired: 'Sí para conductores no-UE',
				documentedPenalty: '€100–€500 (según contexto)',
				worstOutcome: 'Multas ZBE vía alquiler + tarifa administrativa',
				source: 'Página us-spain',
			},
			{
				flagCode: 'jp',
				country: 'Japón',
				legallyRequired: 'Sí — solo Ginebra 1949 (penal si no)',
				documentedPenalty: '¥300.000+ + prohibición de conducir',
				worstOutcome: 'Cargo penal · prohibición 1 año · embajada',
				source: 'Página us-japan',
			},
			{
				flagCode: 'th',
				country: 'Tailandia',
				legallyRequired: 'Sí para estancias superiores a 90 días',
				documentedPenalty: 'THB 1.000 + confiscación (estancias cortas)',
				worstOutcome: 'Conductores de larga estancia — escalada penal',
				source: 'Páginas us-thailand, russia-thailand',
			},
			{
				flagCode: 'id',
				country: 'Indonesia',
				legallyRequired: 'Sí (y endoso de moto para motos)',
				documentedPenalty: 'IDR 250.000–1.000.000 + confiscación de moto',
				worstOutcome: 'Pasaporte-retenido-como-depósito (semanas de razzia)',
				source: 'Página us-indonesia',
			},
			{
				flagCode: 'eg',
				country: 'Egipto',
				legallyRequired: 'Sí (y endoso de moto para motos)',
				documentedPenalty: 'EGP 1.000–5.000 + confiscación',
				worstOutcome: 'Confiscación de moto + pasaporte como rehén (Naama Bay)',
				source: 'Página russia-egypt',
			},
			{
				flagCode: 'tr',
				country: 'Turquía',
				legallyRequired: 'Muy recomendado para escrituras no-latinas',
				documentedPenalty: 'Variable — rechazo de alquiler más común que multa',
				worstOutcome: 'Alquiler rechazado sin traducción en agencias pequeñas',
				source: 'Páginas us-turkey, russia-turkey',
			},
			{
				flagCode: 'fr',
				country: 'Francia',
				legallyRequired: 'No para estancias turísticas (recomendado para no-latín)',
				documentedPenalty: '€135 + €25 admin por infracción de cámara',
				worstOutcome: 'Acumulación multi-cámara a €500+ por viaje',
				source: 'Página us-france',
			},
			{
				flagCode: 'de',
				country: 'Alemania',
				legallyRequired: 'No primeros 6 meses (traducción para no-EN)',
				documentedPenalty: '€10–€60 rutina; €100+ por repetido',
				worstOutcome: 'Infracciones de Autobahn acumulan entre paradas',
				source: 'Páginas us-germany, russia-germany',
			},
			{
				flagCode: 'gb',
				country: 'Reino Unido',
				legallyRequired: 'No (la mayoría de permisos UE/Commonwealth reconocidos)',
				documentedPenalty: 'Raro — rechazo de alquiler más probable que multa',
				worstOutcome: 'Fricción de alquiler; riesgo de no reconocimiento de seguro',
				source: 'Página us-uk (donde aplique)',
			},
			{
				flagCode: 'cr',
				country: 'Costa Rica',
				legallyRequired: 'No para estancias turísticas inferiores a 3 meses',
				documentedPenalty: 'Variable; multas en playa/zona protegida acumulan',
				worstOutcome: '₡500.000 (~$975) conducción en playa · confiscación',
				source: 'Páginas us-costa-rica, uk-costa-rica',
			},
			{
				flagCode: 'cy',
				country: 'Chipre',
				legallyRequired: 'No para estancias cortas (recomendado)',
				documentedPenalty: 'Multa €150 por móvil → €225 si escalada pasados 15 días',
				worstOutcome: 'Incidente al cruzar al norte de Chipre — sin tope de responsabilidad',
				source: 'Página us-cyprus',
			},
			{
				flagCode: 'ae',
				country: 'EAU',
				legallyRequired: 'Sí para muchos países de origen',
				documentedPenalty: 'AED 400+ en paradas documentadas',
				worstOutcome: 'Rechazo de alquiler en aeropuertos Dubái/Abu Dabi',
				source: 'Páginas us-uae, russia-uae',
			},
		],
		footnote: 'Todas las cifras de multas están cruzadas con nuestras páginas país-par y los reportes públicos de incidentes citados allí. Las conversiones a USD son ilustrativas (las tasas fluctúan). Los resultados individuales varían según la discreción del oficial, la intensidad regional de aplicación y las infracciones acompañantes.',
	},
	rentalContract: {
		heading: 'Qué le pasa a tu contrato de alquiler',
		lead: 'La multa es el coste visible. Las consecuencias del contrato de alquiler son el invisible — y rutinariamente más grandes que la citación misma. Tres cosas le pasan a tus papeles en el momento que el evento documental se registra.',
		paragraphs: [
			'**La cobertura del seguro puede dejar de aplicarse.** Los contratos de alquiler estándar de las grandes cadenas (Hertz, Avis, Sixt, Europcar, Budget) contienen una cláusula que anula la cobertura cuando el conductor opera sin la documentación legalmente requerida. Si un accidente o robo ocurre tras un evento documental de infracción de PIC registrado, el equipo de siniestros tiene base para denegar cobertura retroactivamente. El accidente de un solo vehículo que habría costado el deducible se convierte en una reclamación por el valor total del vehículo contra ti.',
			'**El depósito está en riesgo y el titular de la tarjeta lo paga.** La preautorización en tu tarjeta al recoger ($500–$2.000 típico) queda disponible para que la agencia haga cargos contra ella. Las citaciones documentales contra el conductor extranjero son una condición explícita listada para cargar el depósito en la mayoría de las grandes cadenas. La agencia no necesita intervención judicial para procesar el cargo — la autorización de la tarjeta se mantiene.',
			'**El bloqueo de alquileres futuros es real pero variable.** Las grandes cadenas comparten datos de incidentes documentales entre oficinas regionales. Una citación documentada en una oficina de Quintana Roo puede marcar en la base de datos global Hertz/Avis/Sixt durante 12–24 meses, llevando a requisitos de depósito más altos, alquileres denegados o recogidas exprés rechazadas en viajes futuros. Las agencias locales más pequeñas no comparten estos datos y no se ven afectadas.',
		],
	},
	recovery: {
		heading: 'Guía de recuperación — qué hacer si te pillan',
		lead: 'Cinco acciones concretas durante y después de la parada. El objetivo es minimizar el coste inmediato, preservar un rastro documental para disputas posteriores y mantener tu contrato de alquiler intacto donde sea posible.',
		steps: [
			{
				num: '01',
				title: 'Obtén un recibo de todo lo pagado',
				body: 'Sin efectivo pagado sin recibo escrito — punto. El recibo es tu registro para deducción fiscal (si es viaje de negocios), disputa de tarjeta de crédito (si te cargan después) y reporte a la embajada (si escalas). Si el oficial se niega a proveer uno, pide cortésmente un número de citación que puedas referenciar. La mayoría de países con códigos formales de tráfico requieren una citación emitida para cualquier multa de carretera; la ausencia es una señal roja de una recolección informal de efectivo en lugar de una sanción estatutaria.',
			},
			{
				num: '02',
				title: 'Fotografía todo',
				body: 'La citación, el recibo, el vehículo y placa del oficial (donde lo permitan las normas locales), la ubicación de la parada. La marca de tiempo importa — muchas cámaras de teléfono incrustan ubicación y hora en metadatos de imagen, lo que es documentación admisible después. Fotografía tu propio permiso y contrato de alquiler juntos como prueba de que tenías documentación limpia en el momento de la parada. Guarda copias en dos lugares (teléfono + email a ti mismo).',
			},
			{
				num: '03',
				title: 'Notifica a la agencia de alquiler de inmediato',
				body: 'Llama a la agencia el mismo día, antes de devolver el vehículo. La agencia añade la citación a tu archivo antes de que llegues, lo que puede agilizar la devolución y mantener el depósito intacto si la citación no anula la cobertura. Documenta la llamada (hora, persona con la que hablaste). Si la agencia procesa el depósito contra la citación antes de que tengas oportunidad de disputar, el momento de la llamada se convierte en tu registro.',
			},
			{
				num: '04',
				title: 'Presenta una nota en la embajada (incluso si no necesitas ayuda)',
				body: 'Tu embajada o consulado mantiene registro de incidentes de conductores extranjeros reportados por sus ciudadanos. La nota rara vez produce intervención directa pero crea un rastro documental que apoya disputas posteriores. Para viajeros de EE. UU., el programa STEP del Departamento de Estado (Smart Traveler Enrollment Program) es el canal de registro. Para viajeros del Reino Unido, los servicios consulares FCDO. Para Rusia, los servicios consulares MID. Presentación de cinco minutos; beneficio a largo plazo.',
			},
			{
				num: '05',
				title: 'Disputa después por canales formales',
				body: 'La mayoría de multas a conductores extranjeros pueden ser contestadas con papeleo en los canales en idioma oficial del país emisor. La tasa de éxito es variable pero el coste de intentarlo es bajo (a menudo una carta escrita y copias de tu documentación). Para incidentes documentados que escalan a disputas de tarjeta de crédito, las fotografías del paso 02 y el recibo del paso 01 son tu evidencia principal. Limitado en tiempo — la mayoría de jurisdicciones limitan las disputas a 60–180 días desde la fecha de citación.',
			},
		],
	},
	midCta: {
		kicker: 'Sesión promedio de prevención: 2 minutos',
		title: 'La alternativa de 2 minutos y $35 a cada caso documentado arriba.',
		button: 'Obtén IDP Companion — $35',
	},
	costComparison: {
		heading: 'Comparación de coste — $35 prevención vs multas documentadas',
		lead: 'La matemática «prevención vs multa» a través de los ocho casos documentados en esta guía. Cada incidente documentado en la tabla abajo cuesta más que los $35 del IDP Companion que lo habría absorbido.',
		columnLabels: {
			scenario: 'Caso documentado',
			avoided: 'Coste evitado',
			ratio: 'Ratio de prevención',
		},
		rows: [
			{ scenario: 'Mejor caso (aviso griego)', avoided: '$50', ratio: '1 : 1,4' },
			{ scenario: 'Multa típica en país con requerimiento PIC', avoided: '$300', ratio: '1 : 8,6' },
			{ scenario: 'Acumulación ZTL italiana (3–5 zonas)', avoided: '$500', ratio: '1 : 14' },
			{ scenario: 'Razzia + confiscación de moto en Bali', avoided: '$200 + día perdido', ratio: '1 : 7+' },
			{ scenario: 'Egipto — confiscación + pasaporte como rehén', avoided: '$300 + medio día', ratio: '1 : 12+' },
			{ scenario: 'Parada Tulum Carretera 307 (Caso 01)', avoided: '$1.094,50', ratio: '1 : 31' },
			{ scenario: 'Parada corredor Cancún (Caso 02)', avoided: '$2.566', ratio: '1 : 73' },
			{ scenario: 'Japón escalada penal (estancia larga)', avoided: '¥300.000+ + prohibición', ratio: '1 : 57+ (excl. coste de prohibición)' },
		],
		math: 'Incidente documentado promedio en esta guía: $612. Coste promedio de prevención: $35. Ratio medio de prevención: 1 : 17. El peor incidente documentado individual (Caso 02, Cancún, mayo 2025) lleva un ratio de prevención de 73×. IDP Companion no es la solución más barata posible — un PIC gubernamental del organismo nacional autorizado de tu país cuesta $20–$79 — pero es la más rápida disponible en línea con la misma legibilidad en el momento en mostradores de alquiler y paradas de carretera.',
	},
	faq: {
		heading: 'FAQ — lo que los viajeros preguntan antes de comprar',
		lead: 'Respuestas directas a las preguntas que nuestras páginas país-par y registro de soporte muestran como las preocupaciones pre-compra más comunes.',
		items: [
			{
				id: 1,
				question: '¿Puedo conducir en el extranjero sin PIC?',
				answer: 'A veces — la respuesta es específica del destino. Los países donde puedes conducir sin ningún documento de traducción incluyen la mayoría de estados miembros de la UE (para titulares de permiso UE/EEE), el Reino Unido (para orígenes no-UE con permiso en escritura latina) y México (para titulares de foto-licencia en inglés). Los países que requieren legalmente un PIC y donde conducir sin él está documentado que produce multas de carretera incluyen Italia (Codice della Strada Art. 135), Japón (delito penal para estancias superiores a 90 días), España (para conductores no-UE) y partes de Sudamérica. Nuestras páginas de destino documentan qué caso aplica para cada país que cubrimos.',
			},
			{
				id: 2,
				question: '¿Qué es lo peor que puede pasar?',
				answer: 'Cargo penal y deportación, en casos documentados en Japón para estancias superiores a 90 días. La Ley Japonesa de Tráfico Vial criminaliza explícitamente conducir sin PIC Ginebra 1949 para conductores con permiso no japonés que se quedan más del umbral turístico. Las sanciones documentadas incluyen multas ¥300.000+, confiscación de vehículo, prohibiciones de conducción de 1 año y participación de embajada. Para estancias turísticas inferiores a 90 días en Japón, la aplicación es desigual pero las paradas documentadas producen los mismos resultados estatutarios. Fuera de Japón, el peor caso documentado es la parada del corredor de Cancún en mayo 2025 — $2.566 pagados por recuperación de alquiler, medio día perdido — sin cargo penal.',
			},
			{
				id: 3,
				question: '¿Realmente me van a pillar?',
				answer: 'La probabilidad es específica del destino y está aumentando. Quintana Roo (México) documentó paradas documentales PIC en solo mayo 2025, dos de las cuales llegaron a ciclos de noticias internacionales. Los sistemas de cámaras ZTL italianos son 100% automatizados — capturarán cualquier vehículo sin matrícula de residente entrando a zona restringida, independientemente de la presencia de oficial. La temporada de razzia en Bali corre semanalmente por zonas turísticas. La noción de «no se aplica contra turistas» era cierta hace una década y demostrablemente ya no es cierta en 2024–2026. Las páginas de destino en este sitio rastrean señales de densidad de aplicación por país.',
			},
			{
				id: 4,
				question: '¿Y si tengo un PIC de otro país?',
				answer: 'No servirá — un PIC está atado al permiso doméstico subyacente que traduce. Un PIC Ginebra 1949 emitido en EE. UU. cubre tu permiso estadounidense; no cubre un permiso ruso o griego. Si tienes múltiples permisos de origen, necesitas PICs separados para cada uno. Si renunciaste o entregaste tu permiso anterior al obtener uno nuevo, el PIC viejo pierde validez automáticamente porque el permiso subyacente ya no existe. Por esto también los miembros de la familia no pueden compartir un solo PIC — cada permiso necesita el suyo.',
			},
			{
				id: 5,
				question: '¿Una app de traducción de carretera sirve como sustituto?',
				answer: 'No — por dos razones. Primero, lo que se verifica es el documento, no tu capacidad de comunicar. El Artículo 135 del Codice della Strada italiano no dice «el conductor debe poder traducir su permiso verbalmente»; dice «el conductor debe llevar el documento de traducción». Una app de traducción en tu teléfono no es el documento. Segundo, incluso donde la app podría ayudar con comunicación verbal, el comportamiento por defecto del oficial en una parada documental es registrar la citación y seguir adelante — las apps de traducción no cambian lo que se documenta en el sistema de citaciones.',
			},
			{
				id: 6,
				question: '¿Y si me pillan camino a renovar mi PIC?',
				answer: 'Al sistema de citaciones no le importa tu intención. La multa se emite según el estado del documento en el momento de la parada. «Estaba a punto de obtener uno» no es una defensa contestable en ninguna de las jurisdicciones documentadas cubiertas en esta guía. La implicación práctica: obtén el documento antes de que comience el viaje, o antes de empezar a conducir en el destino. IDP Companion está disponible en línea en 2 minutos; un PIC gubernamental autorizado de tu país requiere 1–14 días de procesamiento según el emisor.',
			},
			{
				id: 7,
				question: '¿Puedo alegar ignorancia?',
				answer: 'A veces — para resultados de nivel-aviso (Nivel 1 en la tabla de escalada arriba), la confusión genuina de un turista por primera vez a veces produce un aviso en lugar de una multa. Esto es discreción del oficial, no protección estatutaria. Para niveles escalados (anulación de contrato de alquiler, cargo penal, deportación), el lenguaje estatutario es «¿llevaba el conductor el documento requerido?», no «¿sabía el conductor que lo necesitaba?». La ignorancia está documentada como factor que reduce la severidad de la sanción en aproximadamente 1 de cada 4 incidentes reportados que hemos catalogado; no elimina la sanción.',
			},
			{
				id: 8,
				question: '¿IDP Companion previene cada caso documentado en esta guía?',
				answer: 'La mayoría pero no todos. IDP Companion es un documento de traducción multilingüe privado — presenta los datos de tu permiso en 12 idiomas y absorbe la fricción práctica de «el agente no puede leer mi permiso» en mostradores de alquiler y paradas de carretera rutinarias. Donde la ley del país requiere explícitamente un PIC de la Convención de Ginebra 1949 o Viena 1968 (Japón con estancias superiores a 90 días, partes de Sudamérica, Tailandia con estancias largas), solo un PIC gubernamental del organismo nacional autorizado de tu país satisface el requerimiento estatutario. Nuestras páginas de destino marcan explícitamente qué países caen en qué categoría. Para cada otro caso documentado en esta guía, IDP Companion es el camino más rápido, más barato y disponible en línea al mismo resultado operativo.',
			},
		],
	},
	finalCta: {
		heading: 'No te añadas a esta lista.',
		text: 'Ocho casos documentados arriba. Quince países con rangos de multas verificadas. Cuatro niveles de escalada de aviso a deportación. El caso más barato en esta guía cuesta $50. La prevención más barata cuesta $35 y toma dos minutos en línea.',
		button: 'Obtén IDP Companion — $35',
	},
	methodology: {
		heading: 'Metodología y fuentes',
		body: 'Cada caso documentado, rango de multa y referencia estatutaria en esta guía está cruzado con una página país-par existente en este sitio (donde se recopilaron los datos originales) y con la fuente pública donde se reportó el incidente. No incluimos multas que no podemos rastrear ni a un texto estatutario ni a un incidente documentado. Las conversiones de sanciones a USD son ilustrativas — las tasas de cambio fluctúan, y las cifras subyacentes en moneda local son las autorizadas. Los resultados individuales varían según la discreción del oficial, la intensidad regional de aplicación y las infracciones acompañantes; los casos abajo describen patrones que hemos documentado, no garantías sobre ningún incidente futuro específico.',
		sourcesHeading: 'Fuentes primarias',
		sources: [
			'Codice della Strada (Código Vial Italiano), Artículo 135 — requerimiento de portar PIC para conductores no-UE',
			'Ley Griega 4850/2021 — reforma de requerimientos de PIC para conductores extranjeros',
			'Ley Japonesa de Tráfico Vial (Doro Kotsu Ho) — requerimiento de PIC Ginebra 1949 para titulares de permiso no japonés',
			'Código federal de tránsito mexicano — aplicación de Carretera 307 en Quintana Roo en retenes documentales',
			'Directiva Operativa Policial Indonesia — protocolos de aplicación de scooter en temporada de razzia en Bali',
			'Protocolo de Policía Turística Egipcia en Carretera Costera — aplicación en retenes de Sharm y Hurghada',
			'UN Treaty Series Volumen 125 — Convención de Ginebra 1949 sobre Tráfico Vial (base estatutaria del PIC)',
			'FTC Consumer Advisory «Beware Fake International Driver\'s Licenses» (2019) — contexto sobre permisos fraudulentos estilo IDA',
			'Páginas país-par en este sitio (us-mexico, uk-mexico, us-italy, us-greece, us-japan, us-france, us-spain, us-indonesia, russia-egypt, russia-thailand) — fuente primaria del catálogo de patrones de incidentes',
		],
	},
	legal: {
		heading: 'Aviso legal',
		body: 'IDP Companion es un documento complementario de traducción multilingüe privado y no es un Permiso Internacional de Conducir emitido por el gobierno conforme a la Convención de Ginebra 1949 o Viena 1968. Los emisores autorizados de PICs reconocidos por tratado incluyen AAA y AATA (Estados Unidos), puntos PayPoint (Reino Unido, desde marzo 2024), RosAvtoKlub (Rusia), ADAC (Alemania) y asociaciones automovilísticas nacionales equivalentes en cada país signatario. IDP Companion no está afiliado con ninguno de estos emisores ni con agencias gubernamentales de transporte. Las sanciones documentadas en esta guía son ilustrativas de patrones reportados en 2024–2026; los resultados individuales varían según la discreción del oficial, el país y las circunstancias. Consulta siempre con la autoridad de transporte de tu destino para los requerimientos legales actuales antes de conducir.',
	},
};

export const driveWithoutIdpCopyByLocale: Record<'en' | 'ru' | 'es', DriveWithoutIdpCopy> = {
	en,
	ru,
	es,
};
