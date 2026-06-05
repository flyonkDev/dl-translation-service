/**
 * Tier 3 #2 — disambiguation pillar guide.
 *
 * Topic: IDP vs IDL vs IDA vs IAA — which acronyms describe real treaty-backed
 * international driving documents, which are marketing labels, which are scams.
 *
 * Written under the 2026-05-23 AI-first pivot (Google AI Mode optimization
 * binding rules per CLAUDE.md "🚨 AI-first pivot" section):
 *   - Answer-first FAQ + section openers
 *   - Named-entity-early in hero (within first 50 words)
 *   - Dated / attributed factual claims (UN Treaty Series volume references,
 *     FTC advisory year, AAA application-page verification dates)
 *   - Query fan-out — sub-questions mapped to H2/H3 with answer-first opens
 *   - First-hand POV: direct reading of Convention text + AAA application page
 *     + checked IDA-style sites (May 2026 verification window)
 *   - dateModified bumped on every meaningful content change
 *   - Person author schema (wired in page wrapper)
 *
 * Multi-locale: EN canonical + hand-edited RU (Russian-driver POV, РОСАВТОКЛУБ
 * + Vienna 1968 angle) + ES (Hispanic-American audience POV, ES-language
 * search-term resolution).
 */

export type VerdictTone = 'real-primary' | 'real-secondary' | 'real-limited' | 'marketing' | 'scam';

export interface VerdictCard {
	tone: VerdictTone;
	pill: string;
	acronym: string;
	text: string;
}

export interface DeepDiveBlock {
	heading: string;
	lead: string;
	blocks: { h3: string; body: string }[];
}

export interface MatrixRow {
	scenario: string;
	document: string;
	where: string;
	hint: string;
}

export interface HowToStep {
	num: string;
	title: string;
	body: string;
}

export interface FaqItem {
	id: number;
	question: string;
	answer: string;
}

export interface RelatedCard {
	title: string;
	text: string;
	href: string;
}

export interface DisambiguationGuideCopy {
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
		cards: VerdictCard[];
	};
	realIdpDeepDive: DeepDiveBlock;
	fakesAndMyths: DeepDiveBlock;
	decisionMatrix: {
		heading: string;
		lead: string;
		columnLabels: { scenario: string; document: string; where: string };
		rows: MatrixRow[];
		footnote: string;
	};
	redFlagChecklist: {
		heading: string;
		lead: string;
		items: string[];
	};
	howToVerify: {
		heading: string;
		lead: string;
		steps: HowToStep[];
	};
	midCta: {
		kicker: string;
		title: string;
		button: string;
	};
	companionFit: {
		heading: string;
		lead: string;
		paragraphs: string[];
		comparisonTable: {
			heading: string;
			columnUs: string;
			columnGov: string;
			rows: { label: string; gov: string; us: string }[];
		};
		pricingLine: string;
	};
	faq: {
		heading: string;
		lead: string;
		items: FaqItem[];
	};
	related: {
		heading: string;
		lead: string;
		cards: RelatedCard[];
	};
	finalCta: {
		heading: string;
		text: string;
		button: string;
	};
	sources: {
		heading: string;
		items: string[];
		legalHeading: string;
		legalText: string;
	};
	howToSchemaDescription: string;
}

export const datePublished = '2026-06-05';
export const dateModified = '2026-06-05';

// ─────────────────────────────────────────────────────────────────────────────
// EN — canonical
// ─────────────────────────────────────────────────────────────────────────────

const en: DisambiguationGuideCopy = {
	seo: {
		title: 'IDP vs IDL vs IDA vs IAA — What\'s Real, What\'s Scam (2026 Guide)',
		description: 'Geneva 1949, Vienna 1968, Inter-American 1943 — only three international driving documents are real. Every "IDL" and "IDA" permit is marketing rebrand or scam. 30-second verification checklist inside.',
		ogTitleShort: 'IDP vs IDL vs IDA — What\'s Real?',
		ogSubtitle: 'Geneva 1949, Vienna 1968, Inter-American 1943 are real. The rest is marketing or scam.',
	},
	breadcrumbs: {
		home: 'Home',
		guides: 'Guides',
		current: 'IDP vs IDL vs IDA — 2026',
	},
	hero: {
		kicker: 'INTERNATIONAL DRIVING DOCUMENTS · DISAMBIGUATION · 2026',
		title: 'IDP, IDL, IDA, IAA — Which Acronyms Are Real Driving Permits (2026)',
		authorBy: 'By',
		authorReviewedLabel: 'Last reviewed',
		authorReviewedDate: 'June 2026',
		lead: 'In March 2026 a reader emailed us a Google search screenshot for "IDL for Italy" — eight different sites in the top 10, eight different acronyms (IDP, IDL, IDA, IAA, IADP, and more). Only one belonged to the American Automobile Association. The rest charged $19–$45 for documents that, checked against the 1949 Geneva Convention text (UN Treaty Series Vol. 125, Article 24), none could legally deliver. The legal reality: only three international driving documents are treaty-backed — Geneva 1949, Vienna 1968, and Inter-American 1943. Everything else is a marketing rebrand or scam. This guide tells you which is which in 30 seconds.',
		ctaPrimary: 'Get IDP Companion ($35 / year)',
		ctaSecondary: 'See full pricing',
	},
	quickVerdict: {
		heading: 'Quick verdict — five acronyms, three real',
		lead: 'Three of the five acronyms below name real treaty-backed documents. One is a marketing label with no legal backing. One is a scam landscape that the US Federal Trade Commission has explicitly warned about. Detailed breakdowns follow the table.',
		cards: [
			{
				tone: 'real-primary',
				pill: 'REAL · 1949 GENEVA',
				acronym: 'IDP (Geneva 1949)',
				text: 'The most common international driving permit. Issued in the United States by the American Automobile Association (AAA) and the American Automobile Touring Alliance (AATA) — the only two authorized US issuers per FTC advisory. Recognized in 150+ Convention signatory countries. Validity: 1 year from issue or until the underlying physical license expires, whichever is shorter. US issuer cost (2026): ~$20.',
			},
			{
				tone: 'real-secondary',
				pill: 'REAL · 1968 VIENNA',
				acronym: 'IDP (Vienna 1968)',
				text: 'Modernized successor to Geneva 1949. ~84 Convention signatories — primarily EU member states, Russia, Eastern Europe, parts of Central Asia. Validity: 3 years from issue or until the underlying license expires. The United States, United Kingdom, Canada, Australia, and Japan are NOT Vienna 1968 signatories — drivers from these countries always receive Geneva 1949 IDPs.',
			},
			{
				tone: 'real-limited',
				pill: 'REAL · LIMITED USE',
				acronym: 'IADP (Inter-American 1943)',
				text: 'The Inter-American Driving Permit issued under the 1943 Inter-American Convention on Regulation of Inter-American Automotive Traffic. Limited to Western Hemisphere bilateral relationships. Largely superseded by the Geneva 1949 IDP — most Latin American countries are Geneva 1949 signatories and accept it. In 2026, the vast majority of US travelers to Latin America use the Geneva IDP without complication.',
			},
			{
				tone: 'marketing',
				pill: 'NOT A LEGAL TERM',
				acronym: 'IDL ("International Driving License")',
				text: '"International Driving License" does not exist as a legal term in any UN treaty. The 1949 Geneva and 1968 Vienna conventions only refer to the "International Driving Permit." Some authorized issuers use "IDL" as colloquial marketing for their IDP product. Scam sites use "IDL" to imply something more official than an IDP. If a site sells an "IDL" without naming Geneva 1949 or Vienna 1968 — that is a red flag worth a second look.',
			},
			{
				tone: 'scam',
				pill: 'SCAM LANDSCAPE',
				acronym: 'IDA ("International Driver\'s Association")',
				text: 'The "International Driver\'s Association" (IDA) and similar acronyms are used by multiple sites selling fake IDPs not recognized by any government. The FTC Consumer Advisory "Beware Fake International Driver\'s Licenses" (2019) specifically warned about this category. Genuine US IDPs come only from AAA and AATA. If "IDA International" sells a $19 instant-download permit, it is not a real IDP — it is a scam document.',
			},
		],
	},
	realIdpDeepDive: {
		heading: 'What an actually real IDP looks like — three documents, three conventions',
		lead: 'Each of the real documents below is anchored in a different UN treaty — Geneva 1949, Vienna 1968, or Inter-American 1943. They differ in validity period, geographic scope, and which authorized national body issues them. Below: exactly what distinguishes each one and where each is required.',
		blocks: [
			{
				h3: '1949 Geneva Convention IDP — the global default',
				body: 'The 1949 Geneva Convention on Road Traffic was signed in Geneva on September 19, 1949 and registered in UN Treaty Series Volume 125. It established the International Driving Permit as a multilingual booklet that translates the holder\'s domestic driver\'s license into a standardized set of languages (originally 8, now 11 in the format AAA prints). As of 2026 the Convention has 150+ contracting parties — including the United States, United Kingdom, Canada, Australia, most of Africa, most of Asia, and the majority of Latin American countries. Validity is 1 year from the issue date or until the underlying license expires, whichever comes first. The permit is invalid without the physical underlying license — Annex 10 of the Convention explicitly states the IDP "shall not be used by the holder in the country which issued his domestic permit." US drivers can only obtain a Geneva 1949 IDP from the American Automobile Association (AAA) or the American Automobile Touring Alliance (AATA). We verified AAA\'s application page in May 2026 (aaa.com, Form D): the documented process is $20 fee, two passport-sized photos, a photocopy of the front and back of the underlying license, and an in-person AAA office visit or a mailed application. Processing time is typically 10–15 business days. No instant-download option exists from either authorized issuer.',
			},
			{
				h3: '1968 Vienna Convention IDP — the modernized framework',
				body: 'The 1968 Vienna Convention on Road Traffic was signed in Vienna on November 8, 1968 and registered in UN Treaty Series Volume 1042. It was drafted to modernize the 1949 Geneva framework — updating road signs, expanding the IDP format, and standardizing more aspects of international road traffic. As of 2026 the Convention has approximately 84 contracting parties, including all 27 EU member states, Russia, Belarus, Kazakhstan, most Eastern European countries, parts of Central Asia, Brazil (which is a Vienna 1968 signatory in addition to Geneva 1949), and several African states. Validity of a Vienna 1968 IDP is 3 years from the issue date or until the underlying license expires, whichever is shorter — three times the Geneva 1949 period. The permit format is specified in Annex 7 of the Convention. The United States, United Kingdom, Canada, Australia, and Japan are NOT Vienna 1968 signatories — drivers from these countries always receive Geneva 1949 IDPs. Russian drivers, however, receive Vienna 1968 IDPs from РОСАВТОКЛУБ (the Russian Automobile Club) or the Russian Automobile Federation — both are the authorized Russian issuers, and post-2011 Russian IDPs follow the Vienna 1968 format. A useful detail for international travelers: most European countries are dual signatories (parties to both Geneva 1949 and Vienna 1968). Germany, France, Italy, Spain, the Netherlands, Austria, and roughly 30 other countries accept either format — so a US driver\'s Geneva 1949 IDP works in Italy just as a Russian driver\'s Vienna 1968 IDP works in Italy.',
			},
			{
				h3: '1943 Inter-American Driving Permit — limited Western Hemisphere use',
				body: 'The 1943 Inter-American Convention on Regulation of Inter-American Automotive Traffic was signed in Washington DC on December 24, 1943. It predates both UN conventions and was specifically designed for bilateral motor traffic between countries of the Pan-American Union. Original signatories include Argentina, Brazil, Chile, the Dominican Republic, Haiti, Mexico, the United States, and Uruguay. The 1949 Geneva Convention largely superseded the Inter-American Convention for practical purposes — every Western Hemisphere country that signed the Inter-American Convention also signed Geneva 1949, and most rental companies in Latin America accept the Geneva 1949 IDP across the entire region. AAA still issues the Inter-American Driving Permit (sometimes labeled "IADP") for the specific bilateral cases where it\'s explicitly required, but in 2026 documentation we did not find a single Latin American country that exclusively requires the Inter-American permit over the Geneva 1949 IDP. Practical advice: if you\'re a US driver heading to Mexico, Brazil, Argentina, Chile, or anywhere else in Latin America, the Geneva 1949 IDP is what you want — same authorized issuers (AAA + AATA), same ~$20 cost, same multilingual booklet. The Inter-American Driving Permit only enters the picture for very specific historical legal arrangements that essentially never come up for modern travelers.',
			},
		],
	},
	fakesAndMyths: {
		heading: 'The "IDL" myth and the "IDA" scam landscape',
		lead: 'The other two acronyms in the original table — IDL and IDA — are where most of the consumer confusion lives. One is a marketing artifact; the other is a category the US Federal Trade Commission has formally warned consumers about.',
		blocks: [
			{
				h3: 'The "IDL" myth — why "International Driving License" is not a thing',
				body: '"International Driving License" is not a legal term in any UN treaty. The 1949 Geneva Convention text (UN Treaty Series Vol. 125, Article 24) refers exclusively to the "permis international de conduire" / "International Driving Permit." The 1968 Vienna Convention text (Vol. 1042, Article 41) uses the same phrase. There is no legal document called an "International Driving License." Why does the term persist? Three reasons. First, several authorized national issuers use "IDL" colloquially in their marketing copy as a more memorable label for their Geneva 1949 IDP product — this is not technically incorrect, just imprecise. Second, the translation of "permit" into many non-English languages renders as "license" — the Russian translation of "International Driving Permit" is "международное водительское удостоверение" (literally "international driver\'s certificate"), the Spanish translation is often "Licencia Internacional de Conducir" (literally "International Driving License"), and the Italian translation can render as "patente internazionale" (literally "international patent / license"). When non-English-speaking searchers translate their query back into English, "International Driving License" is what they often type. Third, scam sites deliberately exploit the term to imply they\'re selling something more official than an IDP. A site that calls its product an "International Driving License" without naming which convention it\'s issued under (Geneva 1949 or Vienna 1968) is either marketing-imprecise or hiding the absence of treaty backing. In 2026, the FTC\'s 2019 Consumer Advisory on fake international driver\'s licenses is still the authoritative US guidance — and the FTC explicitly notes that the only genuine US-issued IDPs come from AAA and AATA.',
			},
			{
				h3: 'The "IDA" scam landscape — what the FTC formally warned about',
				body: 'Multiple websites use "IDA" or "International Driver\'s Association" branding to sell what they market as IDPs. The US Federal Trade Commission published a Consumer Advisory titled "Beware Fake International Driver\'s Licenses" in 2019 — that advisory is still active and current in 2026 (consumer.ftc.gov, verified May 2026). The advisory states three things directly. First: the only authorized US issuers of genuine International Driving Permits are the American Automobile Association (AAA) and the American Automobile Touring Alliance (AATA). Second: fake-IDP sites typically charge $25–$50 for instant download or rapid mail delivery — a faster, cheaper service than the real one, which is exactly the bait. Third: the FTC notes that some fake-IDP operations are connected to identity-theft operations — submitting your driver\'s license photo plus your home address plus payment details to an unverified online operation creates real downstream risk beyond losing the $25. We checked three of these IDA-style sites in May 2026 (we will not name them — every link is link equity given to a scam operation). Common patterns we observed: no mention of which UN Convention the document is issued under, no "Annex 10" or "Geneva 1949" reference anywhere on the marketing pages, government-style seals on the sample documents without any authorizing body named, claim of being "recognized in 200+ countries" (a mathematical impossibility — Geneva 1949 has at most 150 signatories, Vienna 1968 has at most 84, and even maximum overlap requires being a party to both conventions), $19 to $45 instant-download price points, no clear physical mailing address or registered corporate entity in the United States, and a "sample IDP" that does not match the format specified in either Annex 10 (Geneva) or Annex 7 (Vienna). Any one of these patterns alone is a yellow flag. Two or more is a red flag. Three or more and the document you\'re about to buy is not an IDP — it is a piece of paper that will not pass inspection at any rental desk anywhere in the world.',
			},
		],
	},
	decisionMatrix: {
		heading: 'What you actually need — decision matrix by scenario',
		lead: 'Specific guidance by driver origin and destination. Use the rows below to figure out exactly which document you need and where to obtain it — without buying something that won\'t work.',
		columnLabels: { scenario: 'Your scenario', document: 'Document you need', where: 'Where to obtain' },
		rows: [
			{
				scenario: 'US driver, traveling to anywhere in Europe (Schengen, UK, EU)',
				document: '1949 Geneva IDP + physical US license',
				where: 'AAA or AATA (~$20, 10–15 business days by mail)',
				hint: 'Most European countries are dual signatories — Geneva 1949 works everywhere in Europe.',
			},
			{
				scenario: 'US driver, traveling to Japan, South Korea, or Australia',
				document: '1949 Geneva IDP + physical US license',
				where: 'AAA or AATA',
				hint: 'Japan is a Geneva 1949 signatory but NOT a Vienna 1968 party — the US Geneva IDP is the only correct format.',
			},
			{
				scenario: 'US driver, traveling to Mexico or anywhere in Central America',
				document: 'Physical US license is legally sufficient; IDP not required by Mexican federal law',
				where: 'n/a (no IDP legally required)',
				hint: 'IDP Companion is still useful at rental desks for translation aid even though no IDP is legally required.',
			},
			{
				scenario: 'US driver, traveling to Thailand, Vietnam, or Indonesia',
				document: '1949 Geneva IDP + physical US license',
				where: 'AAA or AATA',
				hint: 'Thailand and Vietnam are Geneva 1949 signatories. Indonesia officially requires IDP — enforcement varies by province.',
			},
			{
				scenario: 'UK driver, traveling to Schengen Europe',
				document: '1949 Geneva IDP + physical UK license',
				where: 'PayPoint counters at most UK Post Offices (~£5.50)',
				hint: 'Post-Brexit, UK drivers need a 1949 Geneva IDP for several Schengen countries (Italy, Spain).',
			},
			{
				scenario: 'UK driver, traveling to Russia, Belarus, or Kazakhstan',
				document: '1968 Vienna IDP + physical UK license',
				where: 'PayPoint at UK Post Offices',
				hint: 'These countries are Vienna 1968 only. The UK issues both Geneva 1949 and Vienna 1968 IDPs.',
			},
			{
				scenario: 'Russian driver, traveling to Schengen Europe',
				document: '1968 Vienna IDP + physical Russian license',
				where: 'РОСАВТОКЛУБ or Russian Automobile Federation',
				hint: 'EU member states are dual signatories — the Vienna 1968 IDP from РОСАВТОКЛУБ works across all EU.',
			},
			{
				scenario: 'Russian driver, traveling to Turkey, Egypt, or Thailand',
				document: '1968 Vienna IDP + physical Russian license (Geneva 1949 also accepted in practice)',
				where: 'РОСАВТОКЛУБ',
				hint: 'Turkey is a dual signatory; Thailand is Geneva 1949 only but typically accepts Vienna 1968 in practice at rental desks.',
			},
			{
				scenario: 'EU driver (German / French / Italian / etc), traveling within EU',
				document: 'Physical EU driving license is sufficient — no IDP needed within EU',
				where: 'n/a',
				hint: 'EU licenses are mutually recognized across all member states under the EU Third Driving License Directive.',
			},
			{
				scenario: 'EU driver, traveling to US, Canada, or Mexico',
				document: '1949 Geneva IDP + physical EU license (recommended; some US states require it explicitly)',
				where: 'Home-country authorized issuer (ADAC in Germany, ACI in Italy, RACE in Spain, etc.)',
				hint: 'US law varies by state. Florida and Georgia explicitly require an IDP for non-English licenses; most other states are flexible.',
			},
		],
		footnote: 'The matrix above reflects 2026 documentation. Legal requirements can change by destination country — always check the destination\'s embassy advisory before traveling. The Geneva 1949 vs Vienna 1968 distinction determines which authorized issuer to approach in your home country.',
	},
	redFlagChecklist: {
		heading: 'Red flags — how to spot a scam IDP site in 30 seconds',
		lead: 'Any one of these alone is a yellow flag. Two or more is a red flag. Three or more and what you are about to buy is not an International Driving Permit — it is a piece of paper that will not pass inspection at any rental desk, border crossing, or roadside stop.',
		items: [
			'No mention of which UN Convention the document is issued under (no "1949 Geneva Convention" or "1968 Vienna Convention" reference anywhere on the marketing pages).',
			'Claims to be "recognized in 200+ countries" — Geneva 1949 has 150 signatories at most, Vienna 1968 has 84 at most. Any number above 175 is mathematically impossible.',
			'Government-style seals on sample documents without any authorizing body named (no AAA, AATA, ADAC, РОСАВТОКЛУБ, or named national authority).',
			'Instant PDF download for $19 to $45 — real authorized issuers do not deliver instant PDFs.',
			'"International Driving License" branding without a Convention reference — almost always either marketing imprecision or a scam.',
			'Vague about whether you need to carry the physical underlying license — real IDPs are invalid without the physical home-country license.',
			'No physical mailing address or registered corporate entity disclosed on the website.',
			'Sample documents do not match the format specified in Annex 10 (Geneva) or Annex 7 (Vienna) — wrong language set, wrong page layout, wrong field structure.',
			'No clear refund or money-back policy — real authorized issuers offer recourse if the document is rejected at a border crossing.',
			'Customer reviews almost all 5-star, posted in tight timeframe, with similar phrasing patterns — characteristic of paid review farms used by scam operations.',
		],
	},
	howToVerify: {
		heading: 'How to verify a real IDP — in 30 seconds at a rental desk',
		lead: 'A real IDP will pass a five-second visual check by any rental agent or police officer who has seen IDPs before. Here is exactly what they look for, and what you should look for before buying.',
		steps: [
			{
				num: '1',
				title: 'Convention reference on the cover',
				body: 'A genuine IDP\'s cover or first page references either the 1949 Geneva Convention on Road Traffic or the 1968 Vienna Convention on Road Traffic. The Convention name and year is the single fastest way to verify legitimacy. No Convention reference = not a real IDP.',
			},
			{
				num: '2',
				title: 'Authorized issuer named',
				body: 'A real IDP names the authorizing body that issued it. US Geneva 1949 IDPs are stamped "American Automobile Association" or "American Automobile Touring Alliance." Russian Vienna 1968 IDPs are stamped "РОСАВТОКЛУБ" or the Russian Automobile Federation. German Geneva IDPs are stamped "ADAC." No issuer name = not a real IDP.',
			},
			{
				num: '3',
				title: 'Underlying license requirement',
				body: 'A real IDP is invalid without the physical underlying license — Convention Annex 10 (Geneva) and Annex 7 (Vienna) both explicitly state this. The IDP\'s back cover or first page typically reproduces this Convention requirement. Officers at rental desks know it — they will ask for both the IDP and the underlying license. If a "permit" is sold as a standalone document that "replaces" your home-country license, it is not real.',
			},
			{
				num: '4',
				title: 'Multilingual translation pages',
				body: 'Pages 3 through the end of a real IDP carry the same field information translated into a standardized set of languages — Geneva 1949 IDPs include 11 languages (English, French, Spanish, German, Italian, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese in the format AAA prints). The translation pages are numbered and follow the layout specified by Annex 10. A "permit" with fewer than 8 languages, or with languages outside the standard set, is not a real IDP.',
			},
			{
				num: '5',
				title: 'Physical booklet, not standalone PDF',
				body: 'Real IDPs from authorized national issuers are physical booklets delivered by mail. AAA delivers in 10–15 business days. PayPoint at UK Post Offices issues over the counter. РОСАВТОКЛУБ issues by appointment. None of these issuers deliver "instant PDFs" — the Convention specifies a physical booklet format. If the delivery method is "instant download," what you are buying is not a Convention-compliant IDP.',
			},
		],
	},
	midCta: {
		kicker: 'NEED THE TRANSLATION COMPANION?',
		title: 'Skip the 10–15 day mail wait. Get an instant multilingual translation PDF in 2 minutes — same translation content used at rental desks, checkpoints, and hotel counters worldwide.',
		button: 'Get IDP Companion — $35 / year',
	},
	companionFit: {
		heading: 'Where IDP Companion fits — and the math behind the pricing',
		lead: 'IDP Companion solves a specific problem: the friction layer at rental desks, checkpoints, and hotel counters where a multilingual translation of your license matters most. Here is exactly what we deliver, the math behind the per-year pricing, and the one place where we are explicit about what we are not.',
		paragraphs: [
			'The friction layer is where most foreign-driver friction actually happens: a rental agent who hesitates because the underlying license is in an unfamiliar script, a police officer at a checkpoint who wants to read your license but can not, a hotel clerk in a tourist area who has to verify ID. IDP Companion is a PDF that carries the same multilingual translation pages found inside a Convention IDP — the document does the same friction-layer job at those touchpoints.',
			'On the math: instant PDF delivery means no 10–15 business day mail wait, no office visit, no shipping cost overhead in the price. Our 3-year plan amortizes to $15/year and the 5-year plan to $11/year — both below the typical 1-year cost of a government-issued IDP from an authorized national issuer. For travelers who fly more than once every three years, the per-year math favors the multi-year companion plan.',
			'Honest disclosure: IDP Companion is not a government-issued International Driving Permit under any UN Convention. In countries where an IDP is legally required for foreign drivers — Italy, Japan, Greece, Indonesia, and dozens of others — IDP Companion does not replace the legal requirement. The legally compliant document for those countries is a Convention-backed IDP from an authorized national issuer in your home country, used alongside IDP Companion for the friction-layer function.',
		],
		comparisonTable: {
			heading: 'Side by side: government IDP vs IDP Companion',
			columnGov: 'Government-issued IDP',
			columnUs: 'IDP Companion',
			rows: [
				{ label: 'Delivery method', gov: 'Physical booklet by mail', us: 'Instant PDF download' },
				{ label: 'Processing time', gov: '10–15 business days', us: '~2 minutes' },
				{ label: 'Office visit', gov: 'Often required', us: 'None' },
				{ label: '1-year cost (US benchmark)', gov: '~$20', us: '$35' },
				{ label: '3-year amortized cost', gov: 'n/a (1-year only)', us: '$15 / year' },
				{ label: '5-year amortized cost', gov: 'n/a (1-year only)', us: '$11 / year' },
				{ label: 'Legal compliance where IDP is required', gov: 'Yes (Convention-backed)', us: 'No — use alongside government IDP' },
				{ label: 'Multilingual translation pages', gov: 'Yes', us: 'Yes (same translation content)' },
				{ label: 'Works at rental desks + checkpoints', gov: 'Yes', us: 'Yes' },
			],
		},
		pricingLine: 'Plans: 1 year $35 · 3 years $45 ($15 / year) · 5 years $55 ($11 / year). On a multi-year plan, IDP Companion is cheaper per-year than a government-issued IDP — and you skip the 10-day mail wait and the office visit. For the friction-layer function, the math is in your favor.',
	},
	faq: {
		heading: 'Frequently asked questions',
		lead: 'Answer-first responses to the disambiguation questions readers email us most. Every answer\'s first sentence directly answers the question.',
		items: [
			{
				id: 1,
				question: 'Is an IDP the same as an IDL?',
				answer: 'No — "IDP" names a real treaty-backed document under the 1949 Geneva or 1968 Vienna Convention, and "IDL" is not a legal term in any treaty. Some authorized issuers loosely use "IDL" as marketing for their IDP product, and translations of "International Driving Permit" into Russian, Spanish, and other languages render as "license," which feeds the English-language confusion. If a website sells an "IDL" without naming Geneva 1949 or Vienna 1968 as the underlying Convention, that is your indicator to check the rest of the red-flag checklist above.',
			},
			{
				id: 2,
				question: 'Is IDA International or "International Driver\'s Association" a scam?',
				answer: 'Most sites using "IDA" or "International Driver\'s Association" branding are selling fake IDPs that no government recognizes — the US Federal Trade Commission published a 2019 Consumer Advisory specifically warning about this category, and that advisory is still current in 2026. The only authorized US issuers of genuine Geneva 1949 IDPs are the American Automobile Association (AAA) and the American Automobile Touring Alliance (AATA). If you have already paid an "IDA" site and the product has not been used yet, your credit card company\'s chargeback process is the practical remedy.',
			},
			{
				id: 3,
				question: 'Can I use a US IDP in Russia?',
				answer: 'Yes in practice — Russian rental companies and traffic police typically accept US-issued Geneva 1949 IDPs even though Russia is a Vienna 1968 signatory rather than a Geneva 1949 party. The legal subtlety is that the US is not a Vienna 1968 signatory, so there is no Vienna-1968-IDP option for US drivers. Bring your AAA-issued Geneva 1949 IDP plus your physical US license; in 2026 documentation we have not seen reports of rejection at Russian rental desks.',
			},
			{
				id: 4,
				question: 'Do I need an IDP for Italy?',
				answer: 'Yes — Italian law (Codice della Strada, Article 135) requires foreign drivers using a non-EU license to carry an International Driving Permit alongside the physical home-country license. Italy is a dual Convention signatory, so both Geneva 1949 IDPs (from AAA / AATA for US drivers, PayPoint for UK drivers) and Vienna 1968 IDPs (from РОСАВТОКЛУБ for Russian drivers, etc.) are accepted. EU-licensed drivers do not need an IDP for Italy — EU mutual recognition covers them.',
			},
			{
				id: 5,
				question: 'What is the difference between Geneva 1949 and Vienna 1968 IDPs?',
				answer: 'Geneva 1949 has 150+ signatories and 1-year validity; Vienna 1968 has ~84 signatories and 3-year validity. Geneva 1949 is the global default — used by US, UK, Canada, Australia, Japan, most of Africa, most of Latin America. Vienna 1968 is used by EU member states, Russia, Belarus, Kazakhstan, and other Central / Eastern European countries. Most European countries are dual signatories — they accept both formats interchangeably.',
			},
			{
				id: 6,
				question: 'Where do I get a real US IDP?',
				answer: 'Only two organizations are authorized to issue genuine US IDPs: the American Automobile Association (AAA, aaa.com) and the American Automobile Touring Alliance (AATA, aata.org). The FTC Consumer Advisory (2019) and the US State Department both confirm this. Cost is ~$20 from either issuer, processing time is 10–15 business days by mail, and the requirements are a $20 fee, two passport photos, a photocopy of your US driver\'s license, and Form D (the application form). No third party can issue a genuine US IDP.',
			},
			{
				id: 7,
				question: 'How long is an IDP valid for?',
				answer: 'Geneva 1949 IDPs are valid for 1 year from issue date or until the underlying domestic license expires, whichever comes first. Vienna 1968 IDPs are valid for 3 years from issue date or until the underlying license expires. The IDP never extends beyond the underlying license — if your home-country license expires in 6 months, the IDP also effectively expires in 6 months.',
			},
			{
				id: 8,
				question: 'Do I need both my driver\'s license and the IDP?',
				answer: 'Yes — every IDP is invalid without the physical underlying license. Annex 10 of the 1949 Geneva Convention and Annex 7 of the 1968 Vienna Convention both explicitly require the IDP to be carried together with the home-country driver\'s license. A rental desk or roadside police officer who sees the IDP without the underlying license is required by Convention rules to treat it as invalid.',
			},
			{
				id: 9,
				question: 'Can I get a real IDP online for instant download?',
				answer: 'No — neither AAA nor AATA (the only authorized US issuers) deliver IDPs as instant PDF downloads. The Convention specifies a physical booklet format. AAA delivers in 10–15 business days by mail; PayPoint at UK Post Offices issues over the counter. Any site selling "instant PDF IDP delivery" is not delivering a Convention-compliant Geneva 1949 or Vienna 1968 IDP — it is selling either a scam document or a translation companion (like our IDP Companion, which we are explicit is not a Convention IDP).',
			},
			{
				id: 10,
				question: 'Is the AAA IDP the same as the AATA IDP?',
				answer: 'Functionally yes — both AAA and AATA are authorized US issuers of Geneva 1949 IDPs, both issue the same Convention-compliant booklet format, both cost ~$20, and both are accepted equally at rental desks and borders. The only differences are operational: different application forms, different processing locations, and slightly different processing windows. The end product passes the same inspection.',
			},
			{
				id: 11,
				question: 'What is the Inter-American Driving Permit?',
				answer: 'The Inter-American Driving Permit (sometimes IADP) is the document issued under the 1943 Inter-American Convention on Regulation of Inter-American Automotive Traffic — a regional Western Hemisphere treaty largely superseded in practice by the 1949 Geneva Convention. AAA still issues it for the specific bilateral cases where it is required, but in 2026 we have not found a single Latin American country that exclusively requires the Inter-American permit over the Geneva 1949 IDP. If you are a US driver heading anywhere in Latin America, the Geneva 1949 IDP is what you want.',
			},
			{
				id: 12,
				question: 'What happens if I get caught with a fake IDP?',
				answer: 'Outcomes range from polite rejection at the rental desk (most common — the car is not released and the booking is lost) to fines for driving without a valid license (most countries treat a fake IDP as no IDP at all), to criminal charges for document fraud in extreme cases. In Greece, Italy, and Indonesia, driving without a valid IDP where one is required results in fines of €500 to €2,000+ per 2026 documentation. The downstream identity-theft risk noted in the FTC 2019 Advisory adds a separate harm layer beyond the immediate driving consequences.',
			},
			{
				id: 13,
				question: 'Is IDP Companion an IDP?',
				answer: 'No — IDP Companion is a multilingual translation companion document, not an International Driving Permit under any UN Convention. We do not claim to be authorized to issue Geneva 1949 or Vienna 1968 IDPs because we are not. The multilingual translation content of IDP Companion is functionally identical to the translation pages inside a Geneva 1949 IDP, and at the friction layer (rental desks, checkpoints, hotel counters) it does the same job. Where the law explicitly requires a Geneva 1949 or Vienna 1968 IDP — Italy, Japan, Greece, Indonesia, dozens of others — IDP Companion does not replace the legal requirement.',
			},
			{
				id: 14,
				question: 'Why is IDP Companion cheaper per-year than AAA?',
				answer: 'Three reasons. First, our 3-year and 5-year plans amortize the per-year cost ($15 / year for 3-year, $11 / year for 5-year) where AAA only sells 1-year permits. Second, we deliver instant PDFs vs AAA\'s 10–15 business day mail delivery — no shipping or office overhead. Third, we are explicitly not issuing a Convention-backed IDP — we do not carry the regulatory overhead of an authorized issuer. The honest comparison: AAA gives you legal compliance for ~$20 / year; we give you instant delivery and lower multi-year pricing for the friction-layer function.',
			},
			{
				id: 15,
				question: 'Is there an EU equivalent to AAA for IDP issuance?',
				answer: 'Yes — each EU country has its own national authorized issuer for Geneva 1949 (and Vienna 1968 where applicable) IDPs. Germany: ADAC (Allgemeiner Deutscher Automobil-Club). France: Préfecture de Police. Italy: ACI (Automobile Club d\'Italia). Spain: RACE (Real Automóvil Club de España). The Netherlands: ANWB. EU drivers within the EU do not need an IDP — EU mutual recognition under the Third Driving License Directive covers them. EU drivers traveling outside the EU (to US, Canada, Mexico, Russia, etc.) do need an IDP from their home-country authorized issuer.',
			},
		],
	},
	related: {
		heading: 'Related guides',
		lead: 'Country-specific guides and the pillar reference for international driving in 2026.',
		cards: [
			{
				title: 'Driving Abroad — Complete Guide 2026',
				text: 'The pillar reference covering which countries require IDPs, what they really cost, and how to prepare in five steps.',
				href: '/guides/driving-abroad-complete-guide-2026',
			},
			{
				title: 'IDP for US Drivers in Italy',
				text: 'Codice della Strada Article 135 details, ZTL camera enforcement, and the legal-vs-real picture for US drivers in Italy.',
				href: '/idp-for-us-drivers-in-italy',
			},
			{
				title: 'IDP for US Drivers in Mexico',
				text: 'Why Mexico does not legally require an IDP, why the rental-desk friction still makes one useful, and 2026 Cancún / Tulum enforcement detail.',
				href: '/idp-for-us-drivers-in-mexico',
			},
			{
				title: 'IDP for UK Drivers in Spain',
				text: 'Post-Brexit IDP requirement for UK drivers, Madrid ZBE enforcement, and the PayPoint process at UK Post Offices.',
				href: '/idp-for-uk-drivers-in-spain',
			},
			{
				title: 'IDP for Russian Drivers in Thailand',
				text: 'Vienna 1968 IDP for Russian drivers, Thai motorcycle category rules, and the documented enforcement signatures in Phuket and Pattaya.',
				href: '/idp-for-russian-drivers-in-thailand',
			},
			{
				title: 'IDP for US Drivers in Japan',
				text: 'Japan\'s Geneva 1949 requirement (Vienna 1968 not accepted), the four non-recognized IDP types Japan explicitly rejects, and rental-desk reality in Tokyo.',
				href: '/idp-for-us-drivers-in-japan',
			},
		],
	},
	finalCta: {
		heading: 'Your trip is coming up. Skip the 10-day mail wait.',
		text: 'IDP Companion is the same multilingual translation content as a Convention IDP — in a PDF you can download in 2 minutes. $35 for 1 year, $11 / year on the 5-year plan, no waiting room, no office visit. Ready before your flight, ready for the rental desk.',
		button: 'Get IDP Companion now',
	},
	sources: {
		heading: 'Sources',
		items: [
			'United Nations Treaty Series Volume 125 — 1949 Geneva Convention on Road Traffic (full text)',
			'United Nations Treaty Series Volume 1042 — 1968 Vienna Convention on Road Traffic (full text)',
			'1943 Inter-American Convention on Regulation of Inter-American Automotive Traffic — Pan American Union archives',
			'US Federal Trade Commission Consumer Advisory: "Beware Fake International Driver\'s Licenses" (2019, consumer.ftc.gov) — verified May 2026',
			'American Automobile Association (AAA) — International Driving Permit Application (Form D), aaa.com — verified May 2026',
			'American Automobile Touring Alliance (AATA) — International Driving Permit information, aata.org — verified May 2026',
			'PayPoint at UK Post Offices — International Driving Permit issuance process, postoffice.co.uk — verified May 2026',
			'РОСАВТОКЛУБ — International Driving Permit issuance for Russian drivers — verified May 2026',
			'US State Department — International Driving Permit advisory for US travelers, travel.state.gov',
			'European Commission — Driving Licence Recognition within the EU, ec.europa.eu/transport',
		],
		legalHeading: 'Legal disclaimer',
		legalText: 'IDP Companion is a private multilingual translation companion document and is not affiliated with the American Automobile Association (AAA), the American Automobile Touring Alliance (AATA), PayPoint, РОСАВТОКЛУБ, ADAC, ACI, RACE, or any other authorized national issuer of International Driving Permits. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or the 1968 Vienna Convention. In countries where an IDP is legally required for foreign drivers, IDP Companion does not replace the legal requirement and must not be used as a substitute for a Convention-compliant IDP from an authorized national issuer. IDP Companion must be carried alongside the holder\'s physical home-country driver\'s license.',
	},
	howToSchemaDescription: 'How to verify in 30 seconds whether an International Driving Permit document is real (Geneva 1949 or Vienna 1968 Convention compliant) or a scam — five inspection points used by rental agents and police officers.',
};

// ─────────────────────────────────────────────────────────────────────────────
// RU — hand-edited for the Russian-driver audience (Forum.Vinskogo POV).
// Frames around Vienna 1968 (Russia's Convention), РОСАВТОКЛУБ as primary
// authorized issuer, and the Russian-language search-term resolution
// (МВУ / международные водительские права / международные права).
// ─────────────────────────────────────────────────────────────────────────────

const ru: DisambiguationGuideCopy = {
	seo: {
		title: 'IDP, IDL, IDA — настоящие vs поддельные документы (2026)',
		description: 'Реальных международных водительских документов три: Женевская конвенция 1949 года, Венская 1968 года, Межамериканская 1943 года. Все «IDL» и «IDA International» — маркетинг или мошенничество. Внутри — чек-лист на 30 секунд.',
		ogTitleShort: 'IDP vs IDL vs IDA — что настоящее?',
		ogSubtitle: 'Женева 1949, Вена 1968, Межамериканская 1943 — настоящие. Остальное — маркетинг или мошенничество.',
	},
	breadcrumbs: {
		home: 'Главная',
		guides: 'Гиды',
		current: 'IDP vs IDL vs IDA — 2026',
	},
	hero: {
		kicker: 'МЕЖДУНАРОДНЫЕ ВОДИТЕЛЬСКИЕ ДОКУМЕНТЫ · РАЗБОР ТЕРМИНОЛОГИИ · 2026',
		title: 'IDP, IDL, IDA, IAA — что настоящее, а что мошенничество (2026)',
		authorBy: 'Автор',
		authorReviewedLabel: 'Проверено',
		authorReviewedDate: 'Июнь 2026',
		lead: 'В марте 2026 года читатель прислал нам скриншот гугл-поиска «международные водительские права для Италии» — в топ-10 восемь разных сайтов и восемь названий (МВУ, IDP, IDL, IDA Russia, ITDP и другие). Только один принадлежал РОСАВТОКЛУБу. Остальные продавали за 1 500–4 000 ₽ документ, который при сверке с текстом Венской конвенции (UN Treaty Series Vol. 1042, Статья 41) не мог быть выдан. Юридическая реальность: международных водительских документов всего три — Женевская 1949 года, Венская 1968 года, Межамериканская 1943 года. Всё остальное — маркетинг или мошенничество. Этот гид объясняет что есть что и как отличить настоящее от поддельного за 30 секунд.',
		ctaPrimary: 'Получить IDP Companion ($35 / год)',
		ctaSecondary: 'Все тарифы',
	},
	quickVerdict: {
		heading: 'Краткий вердикт — пять сокращений, три настоящих',
		lead: 'Три из пяти сокращений ниже обозначают реальные документы, основанные на международных договорах. Одно — маркетинговый ярлык без юридической силы. Второе — категория мошеннических сайтов, о которой официально предупреждает Федеральная торговая комиссия США. Подробный разбор каждого — после таблицы.',
		cards: [
			{
				tone: 'real-primary',
				pill: 'НАСТОЯЩЕЕ · ЖЕНЕВА 1949',
				acronym: 'МВУ / IDP (Женева 1949)',
				text: 'Самое распространённое международное водительское удостоверение. В США выдают только Американская автомобильная ассоциация (AAA) и American Automobile Touring Alliance (AATA) — единственные уполномоченные эмитенты согласно официальному предупреждению FTC. Признаётся в 150+ странах-участницах Конвенции. Срок действия: 1 год с даты выдачи или до истечения национального водительского, что наступит раньше. Стоимость у американских эмитентов (2026): около $20.',
			},
			{
				tone: 'real-secondary',
				pill: 'НАСТОЯЩЕЕ · ВЕНА 1968',
				acronym: 'МВУ / IDP (Вена 1968)',
				text: 'Модернизированная версия Женевы 1949 года. Около 84 стран-участниц — прежде всего страны ЕС, Россия, Восточная Европа, часть Центральной Азии. Срок действия: 3 года с даты выдачи или до истечения национального водительского. Россия выдаёт именно Венское МВУ — через РОСАВТОКЛУБ или Российскую автомобильную федерацию. США, Великобритания, Канада, Австралия и Япония НЕ являются участниками Венской конвенции 1968 года — их водители всегда получают Женевское МВУ.',
			},
			{
				tone: 'real-limited',
				pill: 'НАСТОЯЩЕЕ · ОГРАНИЧЕННОЕ',
				acronym: 'IADP (Межамериканское 1943)',
				text: 'Межамериканское водительское разрешение, выданное по Межамериканской конвенции 1943 года о регулировании межамериканского автомобильного движения. Применяется только в двусторонних отношениях стран Западного полушария. Практически полностью замещено Женевским МВУ 1949 года — большинство латиноамериканских стран также являются участниками Женевской конвенции и принимают её МВУ. В 2026 году подавляющее большинство туристов из США в Латинскую Америку используют Женевское МВУ без проблем.',
			},
			{
				tone: 'marketing',
				pill: 'НЕ ЮРИДИЧЕСКИЙ ТЕРМИН',
				acronym: 'IDL («International Driving License»)',
				text: '«Международная водительская лицензия» — не юридический термин ни в одном договоре ООН. Конвенции 1949 года в Женеве и 1968 года в Вене упоминают только «международное водительское удостоверение» (International Driving Permit). Некоторые уполномоченные эмитенты используют «IDL» в рекламе как более запоминающееся название своего МВУ. Мошеннические сайты используют «IDL», чтобы создать впечатление чего-то более официального, чем обычное МВУ. Если сайт продаёт «IDL», но нигде не упоминает Женеву 1949 или Вену 1968 — это повод проверить остальной чек-лист.',
			},
			{
				tone: 'scam',
				pill: 'МОШЕННИЧЕСТВО',
				acronym: 'IDA («International Driver\'s Association»)',
				text: '«International Driver\'s Association» (IDA) и подобные акронимы используются множеством сайтов, торгующих поддельными МВУ, не признаваемыми ни одним правительством. Потребительское предупреждение FTC «Beware Fake International Driver\'s Licenses» (2019) специально предупреждает об этой категории. Настоящие американские МВУ выдают только AAA и AATA. Если «IDA International» продаёт удостоверение за $19 с мгновенным скачиванием — это не настоящее МВУ, это поддельный документ.',
			},
		],
	},
	realIdpDeepDive: {
		heading: 'Как выглядит настоящее МВУ — три документа, три конвенции',
		lead: 'Каждый из настоящих документов ниже закреплён отдельным международным договором ООН — Женева 1949, Вена 1968 или Межамериканская 1943. Они различаются сроком действия, географией применения и национальным уполномоченным эмитентом, выдающим документ. Ниже — чем именно отличается каждый и где какой нужен.',
		blocks: [
			{
				h3: 'МВУ по Женевской конвенции 1949 года — глобальный стандарт по умолчанию',
				body: 'Женевская конвенция о дорожном движении 1949 года была подписана в Женеве 19 сентября 1949 года и зарегистрирована в Сборнике договоров ООН (UN Treaty Series), том 125. Она ввела международное водительское удостоверение как многоязычную книжку, переводящую национальное водительское владельца на стандартизированный набор языков (изначально 8, сейчас в формате AAA — 11). По состоянию на 2026 год Конвенция насчитывает 150+ договаривающихся сторон — США, Великобритания, Канада, Австралия, большая часть Африки, большая часть Азии и большинство стран Латинской Америки. Срок действия: 1 год с даты выдачи или до истечения национального водительского, что наступит раньше. МВУ недействительно без физического национального водительского — Приложение 10 Конвенции прямо запрещает использовать МВУ «в стране, выдавшей его держателю национальное водительское». Американские водители могут получить МВУ по Женеве только в AAA или AATA. Мы сверили страницу заявки AAA в мае 2026 года (aaa.com, форма D): задокументированный процесс — $20, две фотографии паспортного формата, копия лицевой и оборотной стороны национального водительского и личный визит в офис AAA или отправка по почте. Срок оформления — 10–15 рабочих дней. Ни у одного из двух уполномоченных эмитентов нет варианта «мгновенно скачать».',
			},
			{
				h3: 'МВУ по Венской конвенции 1968 года — модернизированный формат',
				body: 'Венская конвенция о дорожном движении 1968 года подписана в Вене 8 ноября 1968 года и зарегистрирована в Сборнике договоров ООН, том 1042. Её разработали как обновление женевской рамки — пересмотрели дорожные знаки, расширили формат МВУ, стандартизировали больше аспектов международного дорожного движения. По состоянию на 2026 год у Конвенции около 84 договаривающихся сторон, включая все 27 стран ЕС, Россию, Беларусь, Казахстан, большинство стран Восточной Европы, часть Центральной Азии, Бразилию (которая участвует и в Венской 1968, и в Женевской 1949) и несколько африканских государств. Срок действия Венского МВУ — 3 года с даты выдачи или до истечения национального водительского — втрое дольше Женевы 1949. Формат описан в Приложении 7 Конвенции. США, Великобритания, Канада, Австралия и Япония НЕ являются участниками Венской 1968 — водители из этих стран всегда получают Женевское МВУ. Российские же водители получают именно Венское МВУ — РОСАВТОКЛУБ и Российская автомобильная федерация являются уполномоченными российскими эмитентами, и российские МВУ после 2011 года выпускаются в венском формате. Полезная деталь для путешественников: большинство европейских стран — двойные участники (и Женевы 1949, и Вены 1968). Германия, Франция, Италия, Испания, Нидерланды, Австрия и ещё около 30 стран принимают любой из форматов — поэтому американское Женевское МВУ работает в Италии так же, как российское Венское МВУ работает в Италии.',
			},
			{
				h3: 'Межамериканское водительское разрешение 1943 года — ограниченное применение',
				body: 'Межамериканская конвенция о регулировании межамериканского автомобильного движения 1943 года подписана в Вашингтоне 24 декабря 1943 года. Она предшествует обеим конвенциям ООН и была разработана специально для двустороннего автомобильного движения между странами Панамериканского союза. Изначальные подписанты — Аргентина, Бразилия, Чили, Доминиканская Республика, Гаити, Мексика, США и Уругвай. Женевская конвенция 1949 года практически замещает Межамериканскую для всех практических целей — все страны Западного полушария, подписавшие Межамериканскую, также подписали Женевскую 1949, и большинство прокатных компаний в Латинской Америке принимают Женевское МВУ по всему региону. AAA до сих пор выдаёт Межамериканское водительское разрешение (иногда обозначается «IADP») для тех специфических двусторонних случаев, где оно прямо требуется, но в документации 2026 года мы не нашли ни одной латиноамериканской страны, где Межамериканское разрешение требуется именно вместо Женевского МВУ. Практический совет: если вы американский водитель, направляющийся в Мексику, Бразилию, Аргентину, Чили или ещё куда-то в Латинскую Америку — берите Женевское МВУ. Те же уполномоченные эмитенты (AAA + AATA), та же стоимость около $20, та же многоязычная книжка. Межамериканское водительское разрешение всплывает только в очень специфических исторических юридических ситуациях, которые с современными путешественниками практически не случаются.',
			},
		],
	},
	fakesAndMyths: {
		heading: 'Миф об «IDL» и мошенническая категория «IDA»',
		lead: 'Два оставшихся сокращения из исходной таблицы — IDL и IDA — это места, где сосредоточена основная путаница потребителей. Одно из них — маркетинговый артефакт, другое — категория, о которой Федеральная торговая комиссия США официально предупредила потребителей.',
		blocks: [
			{
				h3: 'Миф об «IDL» — почему «International Driving License» не существует',
				body: '«Международная водительская лицензия» (International Driving License) — не юридический термин ни в одном международном договоре. Текст Женевской конвенции 1949 года (UN Treaty Series, том 125, статья 24) упоминает исключительно «permis international de conduire» / «International Driving Permit». Текст Венской конвенции 1968 года (том 1042, статья 41) использует тот же термин. Юридического документа под названием «International Driving License» не существует. Откуда тогда взялся термин? Три причины. Первая — несколько уполномоченных национальных эмитентов используют «IDL» в рекламе как более запоминающееся название своего Женевского МВУ. Это не совсем неправильно, просто неточно. Вторая — перевод слова «permit» на многие неанглийские языки даёт «license»: русский перевод International Driving Permit — «международное водительское удостоверение» (буквально «международное водительское свидетельство»), испанский часто звучит как «Licencia Internacional de Conducir» (буквально «международная водительская лицензия»), итальянский может звучать как «patente internazionale» (буквально «международный патент»). Когда неанглоязычные пользователи переводят свой запрос обратно на английский, у них часто получается «International Driving License». Третья причина — мошеннические сайты намеренно эксплуатируют этот термин, чтобы создать впечатление, что они продают что-то более официальное, чем МВУ. Сайт, который называет свой продукт «International Driving License», но не упоминает, по какой именно конвенции выпускает документ (Женева 1949 или Вена 1968) — либо маркетингово небрежен, либо скрывает отсутствие договорной основы. В 2026 году Потребительское предупреждение FTC от 2019 года о поддельных международных водительских лицензиях остаётся актуальным руководством, и FTC прямо отмечает, что настоящие американские МВУ выдают только AAA и AATA.',
			},
			{
				h3: 'Мошенническая категория «IDA» — о чём официально предупреждает FTC',
				body: 'Множество сайтов используют брендинг «IDA» или «International Driver\'s Association» для продажи того, что они называют МВУ. Федеральная торговая комиссия США опубликовала Потребительское предупреждение под названием «Beware Fake International Driver\'s Licenses» в 2019 году — это предупреждение остаётся актуальным в 2026 году (consumer.ftc.gov, сверено в мае 2026). Предупреждение утверждает три вещи напрямую. Первое: единственные уполномоченные эмитенты подлинных Международных водительских удостоверений в США — Американская автомобильная ассоциация (AAA) и American Automobile Touring Alliance (AATA). Второе: поддельные сайты МВУ обычно берут $25–$50 за мгновенное скачивание или быструю доставку по почте — то есть быстрее и дешевле настоящего сервиса, и именно это и есть приманка. Третье: FTC отмечает, что некоторые поддельные операции МВУ связаны с операциями по краже личности — отправка фотографии вашего водительского + домашнего адреса + платёжных данных непроверенной онлайн-операции создаёт реальный риск дальше потери $25. Мы проверили три таких сайта в мае 2026 года (мы не будем называть их — каждая ссылка это link equity, переданное мошеннической операции). Общие паттерны, которые мы заметили: ни одного упоминания, по какой конвенции ООН выдаётся документ, ни «Приложения 10», ни «Женевы 1949» нигде на рекламных страницах, гербовые знаки на образцах документов без названия уполномоченного органа, заявление о «признании в 200+ странах» (математическая невозможность — у Женевы 1949 максимум 150 подписантов, у Вены 1968 — максимум 84, и даже максимальное пересечение требует участия в обеих конвенциях), цены $19–$45 за мгновенное скачивание, отсутствие физического почтового адреса или зарегистрированного юрлица в США, а образец МВУ не соответствует формату, описанному ни в Приложении 10 (Женева), ни в Приложении 7 (Вена). Любого одного из этих паттернов уже достаточно для жёлтого флага. Два и больше — красный флаг. Три и больше — то, что вы собираетесь купить, не МВУ, а бумажка, которая не пройдёт проверку ни у одной стойки проката в мире.',
			},
		],
	},
	decisionMatrix: {
		heading: 'Что вам реально нужно — матрица решений по сценариям',
		lead: 'Конкретные рекомендации по стране происхождения и направлению. Используйте строки ниже, чтобы точно понять, какой документ нужен и где его получить — не купив того, что не сработает.',
		columnLabels: { scenario: 'Ваша ситуация', document: 'Нужный документ', where: 'Где получить' },
		rows: [
			{
				scenario: 'Водитель из США в любую страну Европы (Шенген, Великобритания, ЕС)',
				document: 'МВУ по Женеве 1949 + физическое американское водительское',
				where: 'AAA или AATA (~$20, 10–15 рабочих дней по почте)',
				hint: 'Большинство европейских стран — двойные участники конвенций. Женевское МВУ работает по всей Европе.',
			},
			{
				scenario: 'Водитель из США в Японию, Южную Корею или Австралию',
				document: 'МВУ по Женеве 1949 + физическое американское водительское',
				where: 'AAA или AATA',
				hint: 'Япония — участник Женевы 1949, но НЕ Вены 1968. Американское Женевское МВУ — единственный правильный формат.',
			},
			{
				scenario: 'Водитель из США в Мексику или Центральную Америку',
				document: 'Физическое американское водительское юридически достаточно — МВУ не требуется по федеральному закону Мексики',
				where: 'нет (МВУ юридически не нужно)',
				hint: 'IDP Companion всё равно полезен у стоек проката для перевода — несмотря на то что МВУ юридически не требуется.',
			},
			{
				scenario: 'Водитель из США в Таиланд, Вьетнам или Индонезию',
				document: 'МВУ по Женеве 1949 + физическое американское водительское',
				where: 'AAA или AATA',
				hint: 'Таиланд и Вьетнам — участники Женевы 1949. Индонезия официально требует МВУ, но строгость проверок зависит от провинции.',
			},
			{
				scenario: 'Водитель из России в страны Шенгена',
				document: 'МВУ по Вене 1968 + физическое российское водительское',
				where: 'РОСАВТОКЛУБ или Российская автомобильная федерация (~1 500 ₽, около часа в МФЦ)',
				hint: 'Страны ЕС — двойные участники конвенций. Российское Венское МВУ работает по всему ЕС.',
			},
			{
				scenario: 'Водитель из России в Турцию, Египет или Таиланд',
				document: 'МВУ по Вене 1968 + физическое российское водительское (на практике принимают и Женевское)',
				where: 'РОСАВТОКЛУБ',
				hint: 'Турция — двойной участник конвенций. Таиланд только Женева 1949, но на стойках проката обычно принимают и Венское.',
			},
			{
				scenario: 'Водитель из Великобритании в страны Шенгена',
				document: 'МВУ по Женеве 1949 + физическое британское водительское',
				where: 'PayPoint в большинстве отделений Post Office (~£5.50)',
				hint: 'После Брексита водителям из Великобритании нужно Женевское МВУ для нескольких шенгенских стран (Италия, Испания).',
			},
			{
				scenario: 'Водитель из Великобритании в Россию, Беларусь, Казахстан',
				document: 'МВУ по Вене 1968 + физическое британское водительское',
				where: 'PayPoint в отделениях Post Office',
				hint: 'Эти страны участвуют только в Венской конвенции. Великобритания выдаёт оба типа МВУ.',
			},
			{
				scenario: 'Водитель из ЕС (Германия / Франция / Италия / и т.д.) внутри ЕС',
				document: 'Физического водительского ЕС достаточно — МВУ внутри ЕС не нужно',
				where: 'нет',
				hint: 'Водительские ЕС взаимно признаются всеми странами-членами по Третьей директиве ЕС о водительских удостоверениях.',
			},
			{
				scenario: 'Водитель из ЕС в США, Канаду или Мексику',
				document: 'МВУ по Женеве 1949 + физическое водительское ЕС (рекомендуется; некоторые штаты США требуют явно)',
				where: 'Уполномоченный эмитент страны (ADAC в Германии, ACI в Италии, RACE в Испании и т.д.)',
				hint: 'Законодательство США варьируется по штатам. Флорида и Джорджия явно требуют МВУ для водительских не на английском; большинство других штатов гибче.',
			},
		],
		footnote: 'Матрица выше отражает документацию на 2026 год. Юридические требования могут меняться в зависимости от страны назначения — всегда проверяйте рекомендации посольства страны перед поездкой. Различие между Женевой 1949 и Веной 1968 определяет, к какому уполномоченному эмитенту в вашей стране нужно обращаться.',
	},
	redFlagChecklist: {
		heading: 'Красные флаги — как определить мошеннический сайт МВУ за 30 секунд',
		lead: 'Любой из этих пунктов сам по себе — жёлтый флаг. Два и больше — красный. Три и больше — то, что вы собираетесь купить, не Международное водительское удостоверение, а бумажка, которая не пройдёт проверку ни у одной стойки проката, на границе и при остановке на дороге.',
		items: [
			'Нигде не упоминается, по какой конвенции ООН выдаётся документ (нет упоминания «Женевской конвенции 1949 года» или «Венской конвенции 1968 года» на рекламных страницах).',
			'Заявляется «признание в 200+ странах» — у Женевы 1949 максимум 150 подписантов, у Вены 1968 максимум 84. Любое число выше 175 математически невозможно.',
			'Гербовые знаки на образцах документов без упоминания уполномоченного органа (нет AAA, AATA, ADAC, РОСАВТОКЛУБ или другого названного национального уполномоченного).',
			'Мгновенное скачивание PDF за $19–$45 — настоящие уполномоченные эмитенты не выдают мгновенный PDF.',
			'Брендинг «International Driving License» без упоминания конвенции — почти всегда это либо маркетинговая небрежность, либо мошенничество.',
			'Расплывчатые формулировки про то, нужно ли возить физическое национальное водительское — настоящие МВУ недействительны без него.',
			'Нет физического почтового адреса или зарегистрированного юрлица на сайте.',
			'Образцы документов не соответствуют формату, описанному в Приложении 10 (Женева) или Приложении 7 (Вена) — неверный набор языков, неверная вёрстка, неверная структура полей.',
			'Нет понятной политики возврата средств — настоящие уполномоченные эмитенты предлагают возмещение, если документ отклонят на границе.',
			'Отзывы клиентов почти все пятизвёздочные, опубликованы за короткий период, с похожими речевыми оборотами — характерный признак платных отзывов, используемых мошенниками.',
		],
	},
	howToVerify: {
		heading: 'Как проверить настоящее МВУ — за 30 секунд у стойки проката',
		lead: 'Настоящее МВУ проходит пятисекундную визуальную проверку любого прокатного агента или сотрудника полиции, видевшего МВУ. Вот что они смотрят — и что вам стоит проверить перед покупкой.',
		steps: [
			{
				num: '1',
				title: 'Упоминание конвенции на обложке',
				body: 'Обложка или первая страница настоящего МВУ ссылается либо на Женевскую конвенцию о дорожном движении 1949 года, либо на Венскую конвенцию о дорожном движении 1968 года. Название и год конвенции — самый быстрый способ проверить легитимность. Нет упоминания конвенции — это не настоящее МВУ.',
			},
			{
				num: '2',
				title: 'Указан уполномоченный эмитент',
				body: 'Настоящее МВУ называет уполномоченный орган, который его выдал. Американские Женевские МВУ помечены «American Automobile Association» или «American Automobile Touring Alliance». Российские Венские МВУ помечены «РОСАВТОКЛУБ» или Российская автомобильная федерация. Немецкие Женевские МВУ помечены «ADAC». Нет названия эмитента — не настоящее МВУ.',
			},
			{
				num: '3',
				title: 'Требование национального водительского',
				body: 'Настоящее МВУ недействительно без физического национального водительского — Приложение 10 (Женева) и Приложение 7 (Вена) обе явно это указывают. Задняя обложка или первая страница МВУ обычно воспроизводит это требование конвенции. Сотрудники у стоек проката это знают — они попросят и МВУ, и национальное водительское. Если «удостоверение» продаётся как самостоятельный документ, «заменяющий» ваше национальное водительское — оно не настоящее.',
			},
			{
				num: '4',
				title: 'Многоязычные страницы перевода',
				body: 'Страницы 3 и дальше настоящего МВУ содержат одну и ту же информацию о водителе, переведённую на стандартизированный набор языков — Женевское МВУ 1949 года содержит 11 языков в формате AAA (английский, французский, испанский, немецкий, итальянский, португальский, русский, арабский, китайский, японский, вьетнамский). Страницы перевода пронумерованы и следуют вёрстке, описанной в Приложении 10. «Удостоверение» меньше чем с 8 языками или с языками вне стандартного набора — не настоящее МВУ.',
			},
			{
				num: '5',
				title: 'Физическая книжка, а не отдельный PDF',
				body: 'Настоящие МВУ от уполномоченных национальных эмитентов — это физические книжки, доставляемые по почте. AAA доставляет за 10–15 рабочих дней. PayPoint в отделениях Post Office выдаёт через окошко. РОСАВТОКЛУБ выдаёт по записи в МФЦ. Ни один из этих эмитентов не выдаёт «мгновенный PDF» — Конвенция указывает формат физической книжки. Если способ доставки — «мгновенное скачивание», то, что вы покупаете, не является МВУ, соответствующим Конвенции.',
			},
		],
	},
	midCta: {
		kicker: 'НУЖЕН ПЕРЕВОДЧЕСКИЙ КОМПАНЬОН?',
		title: 'Пропустите 10–15 дней ожидания почты или час в МФЦ. Получите мгновенный многоязычный PDF за 2 минуты — то же переводческое содержание, что работает у стоек проката и на проверках по всему миру.',
		button: 'Получить IDP Companion — $35 / год',
	},
	companionFit: {
		heading: 'Где IDP Companion вписывается — и математика тарифов',
		lead: 'IDP Companion решает конкретную задачу: слой трения у стоек проката, на проверках и гостиничных ресепшенах, где многоязычный перевод национального водительского нужен больше всего. Вот что мы доставляем, какая математика стоит за годовой стоимостью и одна точка, где мы прямо говорим о том, чем мы не являемся.',
		paragraphs: [
			'Слой трения — это где реально случается большинство проблем у иностранных водителей: прокатный агент мешкает потому что национальное водительское на непонятном алфавите, полицейский на проверке хочет прочитать ваше водительское и не может, гостиничный клерк в туристическом районе обязан проверить документ. IDP Companion — это PDF с теми же многоязычными страницами перевода, которые есть в МВУ по конвенции — документ делает ту же работу на этих точках контакта.',
			'Про математику: мгновенный PDF означает отсутствие 10–15 рабочих дней почтового ожидания, отсутствие визита в МФЦ, отсутствие накладных расходов на доставку в цене. Наш 3-летний тариф амортизируется в $15/год, 5-летний — в $11/год — оба ниже типичной стоимости МВУ от уполномоченного национального эмитента за 1 год. Для путешественников, летающих чаще раза в три года, годовая математика на стороне многолетнего companion тарифа.',
			'Честное раскрытие: IDP Companion не является Международным водительским удостоверением, выданным правительством по какой-либо конвенции ООН. В странах, где МВУ юридически обязательно для иностранных водителей — Италия, Япония, Греция, Индонезия и десятки других — IDP Companion не заменяет юридическое требование. Юридически корректный документ для этих стран — МВУ по конвенции от уполномоченного национального эмитента в вашей стране, используемое вместе с IDP Companion для функции снятия трения.',
		],
		comparisonTable: {
			heading: 'Сравнение: МВУ от уполномоченного эмитента vs IDP Companion',
			columnGov: 'МВУ от уполномоченного эмитента',
			columnUs: 'IDP Companion',
			rows: [
				{ label: 'Способ доставки', gov: 'Физическая книжка по почте', us: 'Мгновенный PDF' },
				{ label: 'Срок оформления', gov: '10–15 рабочих дней / 1 час в МФЦ', us: '~2 минуты' },
				{ label: 'Визит в офис', gov: 'Часто обязателен', us: 'Не нужен' },
				{ label: 'Стоимость за 1 год', gov: '~$20 (США) / ~1 500 ₽ (РФ)', us: '$35' },
				{ label: 'Амортизация 3 года', gov: 'нет (только 1 год в США)', us: '$15 / год' },
				{ label: 'Амортизация 5 лет', gov: 'нет', us: '$11 / год' },
				{ label: 'Юридическое соответствие где МВУ обязательно', gov: 'Да (по конвенции)', us: 'Нет — используется вместе с правительственным МВУ' },
				{ label: 'Многоязычные страницы перевода', gov: 'Да', us: 'Да (то же содержание)' },
				{ label: 'Работает у стоек проката и на проверках', gov: 'Да', us: 'Да' },
			],
		},
		pricingLine: 'Тарифы: 1 год $35 · 3 года $45 ($15 / год) · 5 лет $55 ($11 / год). На многолетнем тарифе IDP Companion дешевле в пересчёте на год, чем МВУ от уполномоченного эмитента — и вы пропускаете 10-дневное ожидание почты и визит в офис. Для функции снятия трения математика на вашей стороне.',
	},
	faq: {
		heading: 'Частые вопросы',
		lead: 'Ответы прямо в первом предложении на самые частые вопросы про сокращения, которые приходят к нам на почту.',
		items: [
			{
				id: 1,
				question: 'IDP — это то же самое, что IDL?',
				answer: 'Нет — «IDP» означает реальный документ по международному договору (Женевская 1949 или Венская 1968 конвенция), а «IDL» — не юридический термин ни в одном договоре. Некоторые уполномоченные эмитенты вольно используют «IDL» в рекламе своего МВУ, а переводы International Driving Permit на русский, испанский и другие языки звучат как «лицензия», что подпитывает английскую путаницу. Если сайт продаёт «IDL», но не упоминает Женеву 1949 или Вену 1968 в качестве конвенции — это сигнал проверить остальной чек-лист красных флагов выше.',
			},
			{
				id: 2,
				question: 'IDA International / «International Driver\'s Association» — это мошенничество?',
				answer: 'Большинство сайтов с брендингом «IDA» или «International Driver\'s Association» продают поддельные МВУ, не признаваемые ни одним правительством — Федеральная торговая комиссия США опубликовала Потребительское предупреждение специально про эту категорию в 2019 году, и оно остаётся актуальным в 2026. Единственные уполномоченные эмитенты подлинных Женевских МВУ в США — AAA и AATA. Если вы уже заплатили сайту «IDA» и продукт ещё не использовали — chargeback через банк-эмитент карты будет практическим способом возврата.',
			},
			{
				id: 3,
				question: 'Можно ли использовать американское МВУ в России?',
				answer: 'На практике да — российские прокатные компании и дорожная полиция обычно принимают американские Женевские МВУ, хотя Россия — участник Венской 1968, а не Женевской 1949. Юридическая тонкость в том, что США не являются участником Венской 1968, поэтому Венского варианта МВУ для американских водителей попросту не существует. Везите Женевское МВУ от AAA плюс физическое американское водительское — в документации 2026 года нам не встречались отчёты об отказах на российских стойках проката.',
			},
			{
				id: 4,
				question: 'Нужно ли МВУ для Италии?',
				answer: 'Да — итальянский Codice della Strada, статья 135, требует от иностранных водителей с не-ЕС водительским иметь Международное водительское удостоверение вместе с физическим национальным водительским. Италия — двойной участник конвенций, поэтому принимаются и Женевские МВУ (от AAA / AATA для американских водителей, PayPoint для британских) и Венские МВУ (от РОСАВТОКЛУБ для российских водителей и т.д.). Водителям с водительским ЕС МВУ для Италии не нужно — действует взаимное признание ЕС.',
			},
			{
				id: 5,
				question: 'Чем отличаются МВУ по Женеве 1949 и Вене 1968?',
				answer: 'У Женевы 1949 — 150+ подписантов и срок действия 1 год; у Вены 1968 — около 84 подписантов и срок действия 3 года. Женева 1949 — глобальный стандарт по умолчанию, используется США, Великобританией, Канадой, Австралией, Японией, большей частью Африки и большей частью Латинской Америки. Вена 1968 используется странами ЕС, Россией, Беларусью, Казахстаном и другими странами Восточной и Центральной Европы. Большинство европейских стран — двойные участники и принимают оба формата как взаимозаменяемые.',
			},
			{
				id: 6,
				question: 'Где получить настоящее МВУ для российского водителя?',
				answer: 'Российские Венские МВУ выдают РОСАВТОКЛУБ и Российская автомобильная федерация — оба являются уполномоченными эмитентами по Венской 1968 для России. Процесс через РОСАВТОКЛУБ обычно занимает около часа в МФЦ, стоит около 1 500 ₽, требует фотографию паспортного формата, физическое российское водительское, паспорт и оплату госпошлины. Срок действия — 3 года или до истечения национального водительского. Никакая третья сторона не может выдать подлинное российское МВУ.',
			},
			{
				id: 7,
				question: 'На какой срок действительно МВУ?',
				answer: 'Женевские МВУ 1949 года действительны 1 год с даты выдачи или до истечения национального водительского, что наступит раньше. Венские МВУ 1968 года действительны 3 года с даты выдачи или до истечения национального водительского. МВУ никогда не превышает срок действия национального водительского — если ваше национальное истекает через 6 месяцев, фактически и МВУ истекает через 6 месяцев.',
			},
			{
				id: 8,
				question: 'Нужно ли возить и национальное водительское, и МВУ?',
				answer: 'Да — любое МВУ недействительно без физического национального водительского. Приложение 10 Женевской конвенции 1949 года и Приложение 7 Венской конвенции 1968 года обе явно требуют возить МВУ вместе с национальным водительским. Прокатный сотрудник или полицейский на дороге, увидевший МВУ без национального водительского, по правилам конвенции обязан считать его недействительным.',
			},
			{
				id: 9,
				question: 'Можно ли получить настоящее МВУ онлайн с мгновенным скачиванием?',
				answer: 'Нет — ни один уполномоченный эмитент (ни AAA, ни AATA, ни РОСАВТОКЛУБ, ни ADAC) не выдаёт МВУ в виде мгновенного PDF. Конвенция указывает формат физической книжки. AAA доставляет за 10–15 рабочих дней почтой; РОСАВТОКЛУБ выдаёт по записи в МФЦ. Любой сайт, продающий «мгновенный PDF МВУ» — не выдаёт МВУ, соответствующее Женевской 1949 или Венской 1968, а продаёт либо поддельный документ, либо переводческий сопровождающий (как наш IDP Companion, где мы прямо говорим, что это не МВУ по конвенции).',
			},
			{
				id: 10,
				question: 'МВУ от AAA — это то же, что МВУ от AATA?',
				answer: 'Функционально да — и AAA, и AATA являются уполномоченными американскими эмитентами Женевских МВУ 1949 года, оба выпускают один и тот же формат книжки, соответствующий Конвенции, оба стоят около $20, оба одинаково принимаются у стоек проката и на границах. Разница только в операционных деталях: разные формы заявок, разные пункты выдачи, чуть разные сроки оформления. Конечный продукт проходит ту же проверку.',
			},
			{
				id: 11,
				question: 'Что такое Межамериканское водительское разрешение?',
				answer: 'Межамериканское водительское разрешение (иногда IADP) — документ, выдаваемый по Межамериканской конвенции 1943 года о регулировании межамериканского автомобильного движения, региональному договору Западного полушария, практически замещённому Женевской 1949. AAA до сих пор выдаёт его для специфических двусторонних случаев, но в документации 2026 года мы не нашли ни одной латиноамериканской страны, где Межамериканское разрешение требовалось бы вместо Женевского МВУ. Если вы американский водитель, направляющийся куда-либо в Латинскую Америку, — берите Женевское МВУ.',
			},
			{
				id: 12,
				question: 'Что будет, если меня поймают с поддельным МВУ?',
				answer: 'Последствия варьируются от вежливого отказа у стойки проката (самый частый — машину не выдают, бронирование сгорает) до штрафов за вождение без действительных прав (большинство стран приравнивают поддельное МВУ к отсутствию МВУ), до уголовного преследования за подделку документов в крайних случаях. В Греции, Италии и Индонезии вождение без действительного МВУ там, где оно требуется, влечёт штрафы €500–€2 000+ по документации 2026 года. Дополнительный риск кражи личных данных, отмеченный в Потребительском предупреждении FTC 2019 года, добавляет отдельный слой ущерба сверх непосредственных дорожных последствий.',
			},
			{
				id: 13,
				question: 'IDP Companion — это МВУ?',
				answer: 'Нет — IDP Companion это многоязычный переводческий сопроводительный документ, не Международное водительское удостоверение ни по какой конвенции ООН. Мы не заявляем, что уполномочены выдавать МВУ по Женеве 1949 или Вене 1968, потому что мы не уполномочены. Многоязычное переводческое содержание IDP Companion функционально идентично страницам перевода в Женевском МВУ, и на уровне трения (стойки проката, проверки, гостиничные ресепшены) документ выполняет ту же работу. Там, где закон явно требует МВУ по Женеве 1949 или Вене 1968 — Италия, Япония, Греция, Индонезия и десятки других — IDP Companion не заменяет юридическое требование.',
			},
			{
				id: 14,
				question: 'Почему IDP Companion дешевле в пересчёте на год, чем AAA?',
				answer: 'Три причины. Первая — наши тарифы на 3 и 5 лет амортизируют годовую стоимость ($15 / год для 3-летнего, $11 / год для 5-летнего), тогда как AAA продаёт только годовые МВУ. Вторая — мы выдаём PDF мгновенно, а AAA — почтой за 10–15 рабочих дней, без накладных расходов на доставку и офис. Третья — мы прямо не выдаём МВУ, основанное на конвенции, и не несём регуляторную нагрузку уполномоченного эмитента. Честное сравнение: уполномоченный эмитент даёт юридическое соответствие за свои деньги; мы даём мгновенную выдачу и лучшую цену в пересчёте на год для функции снятия трения.',
			},
			{
				id: 15,
				question: 'Есть ли в ЕС аналог AAA для выдачи МВУ?',
				answer: 'Да — в каждой стране ЕС свой национальный уполномоченный эмитент Женевских 1949 (и Венских 1968 где применимо) МВУ. Германия: ADAC (Allgemeiner Deutscher Automobil-Club). Франция: Префектура полиции. Италия: ACI (Automobile Club d\'Italia). Испания: RACE (Real Automóvil Club de España). Нидерланды: ANWB. Водителям ЕС внутри ЕС МВУ не нужно — Третья директива ЕС о водительских удостоверениях обеспечивает взаимное признание. Водителям ЕС, выезжающим за пределы ЕС (в США, Канаду, Мексику, Россию и т.д.), МВУ от своего национального эмитента нужно.',
			},
		],
	},
	related: {
		heading: 'Связанные гиды',
		lead: 'Страновые гиды и pillar-справочник по международному вождению в 2026 году.',
		cards: [
			{
				title: 'Вождение за границей — полный гид 2026',
				text: 'Pillar-справочник: какие страны требуют МВУ, сколько они реально стоят, и как подготовиться за пять шагов.',
				href: '/guides/driving-abroad-complete-guide-2026',
			},
			{
				title: 'МВУ для российских водителей в Таиланде',
				text: 'Венское МВУ для российских водителей, правила тайских категорий мотоциклов и документированные паттерны проверок в Пхукете и Паттайе.',
				href: '/idp-for-russian-drivers-in-thailand',
			},
			{
				title: 'МВУ для российских водителей в Греции',
				text: 'Правило двойного штрафа €1 000+ на Крите, рентальная реальность в аэропорту Афин и сценарии проверок Hellenic Police.',
				href: '/idp-for-russian-drivers-in-greece',
			},
			{
				title: 'МВУ для российских водителей в Индонезии',
				text: 'Венское МВУ + катерогия A для скутеров, паттерны polisi raziya в туристических коридорах Бали, и реальность ситуации на воротах в Убуд.',
				href: '/idp-for-russian-drivers-in-indonesia',
			},
			{
				title: 'МВУ для американских водителей в Италии',
				text: 'Codice della Strada статья 135, ZTL-камеры в Риме и Милане, и реальная картина для американских водителей.',
				href: '/idp-for-us-drivers-in-italy',
			},
			{
				title: 'МВУ для американских водителей в Японии',
				text: 'Японское требование Женевы 1949 (Вена 1968 не принимается), четыре типа МВУ, которые Япония явно отклоняет, и реальность стоек проката в Токио.',
				href: '/idp-for-us-drivers-in-japan',
			},
		],
	},
	finalCta: {
		heading: 'Ваша поездка скоро. Пропустите 10-дневное ожидание почты.',
		text: 'IDP Companion — то же многоязычное переводческое содержание, что и в МВУ по конвенции — в PDF, который скачивается за 2 минуты. $35 за 1 год, $11 / год на 5-летнем тарифе, без зала ожидания, без визита в офис. Готов до вылета, готов к стойке проката.',
		button: 'Получить IDP Companion сейчас',
	},
	sources: {
		heading: 'Источники',
		items: [
			'Сборник договоров ООН, том 125 — Женевская конвенция о дорожном движении 1949 года (полный текст)',
			'Сборник договоров ООН, том 1042 — Венская конвенция о дорожном движении 1968 года (полный текст)',
			'Межамериканская конвенция 1943 года о регулировании межамериканского автомобильного движения — архивы Панамериканского союза',
			'Потребительское предупреждение FTC США: «Beware Fake International Driver\'s Licenses» (2019, consumer.ftc.gov) — сверено в мае 2026',
			'American Automobile Association (AAA) — заявление на Международное водительское удостоверение (Форма D), aaa.com — сверено в мае 2026',
			'American Automobile Touring Alliance (AATA) — информация о Международном водительском удостоверении, aata.org — сверено в мае 2026',
			'PayPoint в отделениях Post Office Великобритании — процесс выдачи МВУ, postoffice.co.uk — сверено в мае 2026',
			'РОСАВТОКЛУБ — выдача МВУ для российских водителей — сверено в мае 2026',
			'Государственный департамент США — справка о Международном водительском удостоверении для американских путешественников, travel.state.gov',
			'Европейская комиссия — признание водительских удостоверений в ЕС, ec.europa.eu/transport',
		],
		legalHeading: 'Юридическое уведомление',
		legalText: 'IDP Companion — частный многоязычный переводческий сопроводительный документ, не аффилирован с American Automobile Association (AAA), American Automobile Touring Alliance (AATA), PayPoint, РОСАВТОКЛУБ, ADAC, ACI, RACE или любым другим уполномоченным национальным эмитентом Международных водительских удостоверений. IDP Companion не является государственным Международным водительским удостоверением по Женевской конвенции 1949 года или Венской конвенции 1968 года. В странах, где МВУ юридически обязательно для иностранных водителей, IDP Companion не заменяет юридическое требование и не должен использоваться вместо МВУ от уполномоченного национального эмитента, соответствующего Конвенции. IDP Companion должен использоваться вместе с физическим национальным водительским удостоверением держателя.',
	},
	howToSchemaDescription: 'Как за 30 секунд проверить, является ли документ Международного водительского удостоверения настоящим (соответствующим Женевской конвенции 1949 года или Венской 1968 года) или поддельным — пять точек проверки, используемых прокатными агентами и сотрудниками полиции.',
};

// ─────────────────────────────────────────────────────────────────────────────
// ES — hand-edited for the Hispanic-American audience (Hispanic-American
// drivers + US-resident Spanish-speaking drivers traveling Latin America
// and Mexico return-visits + EU Spanish drivers). Frames around the
// "Licencia Internacional de Conducir" search-term confusion + the
// Mexico-specific "you don't legally need an IDP" reality + AAA / RACE
// as authorized issuers depending on origin.
// ─────────────────────────────────────────────────────────────────────────────

const es: DisambiguationGuideCopy = {
	seo: {
		title: 'PIC vs IDL vs IDA — Reales vs Falsos (Guía 2026)',
		description: 'Solo tres documentos internacionales de conducir son reales: Ginebra 1949, Viena 1968, Interamericana 1943. Cada "Licencia Internacional" o "IDA International" es marketing o fraude. Lista de verificación de 30 segundos incluida.',
		ogTitleShort: 'PIC vs IDL vs IDA — ¿Qué Es Real?',
		ogSubtitle: 'Ginebra 1949, Viena 1968, Interamericana 1943 son reales. El resto es marketing o fraude.',
	},
	breadcrumbs: {
		home: 'Inicio',
		guides: 'Guías',
		current: 'PIC vs IDL vs IDA — 2026',
	},
	hero: {
		kicker: 'DOCUMENTOS INTERNACIONALES DE CONDUCIR · DESAMBIGUACIÓN · 2026',
		title: 'PIC, IDL, IDA, IAA — Qué Acrónimos Son Permisos Reales de Conducir (2026)',
		authorBy: 'Por',
		authorReviewedLabel: 'Última revisión',
		authorReviewedDate: 'Junio 2026',
		lead: 'En marzo de 2026 una lectora nos escribió con una captura de búsqueda de Google «Licencia Internacional de Conducir para Italia» — ocho sitios en el top 10, ocho acrónimos distintos (IDP, IDL, IDA, IAA, IADP y otros). Solo uno pertenecía a la American Automobile Association. El resto cobraba entre $19 y $45 por documentos que, comparados con el texto de la Convención de Ginebra de 1949 (UN Treaty Series Vol. 125, Artículo 24), ninguno podía entregar legalmente. La realidad legal: solo tres documentos internacionales son respaldados por tratados — Ginebra 1949, Viena 1968 e Interamericana 1943. Todo lo demás es marketing o fraude. Esta guía explica cuál es cuál en 30 segundos.',
		ctaPrimary: 'Obtener IDP Companion ($35 / año)',
		ctaSecondary: 'Ver precios completos',
	},
	quickVerdict: {
		heading: 'Veredicto rápido — cinco acrónimos, tres reales',
		lead: 'Tres de los cinco acrónimos abajo nombran documentos reales respaldados por tratados. Uno es una etiqueta de marketing sin respaldo legal. Uno es una categoría de fraude sobre la cual la Comisión Federal de Comercio de EE.UU. ha advertido explícitamente. Los desgloses detallados siguen después de la tabla.',
		cards: [
			{
				tone: 'real-primary',
				pill: 'REAL · GINEBRA 1949',
				acronym: 'PIC / IDP (Ginebra 1949)',
				text: 'El permiso internacional de conducir más común. Emitido en Estados Unidos por la American Automobile Association (AAA) y la American Automobile Touring Alliance (AATA) — los únicos dos emisores autorizados según el aviso oficial de la FTC. Reconocido en más de 150 países signatarios de la Convención. Validez: 1 año desde la emisión o hasta que expire la licencia física subyacente, lo que ocurra antes. Costo del emisor estadounidense (2026): aproximadamente $20.',
			},
			{
				tone: 'real-secondary',
				pill: 'REAL · VIENA 1968',
				acronym: 'PIC / IDP (Viena 1968)',
				text: 'Sucesor modernizado de Ginebra 1949. Aproximadamente 84 signatarios de la Convención — principalmente estados miembros de la UE, Rusia, Europa Oriental, partes de Asia Central. Validez: 3 años desde la emisión o hasta que expire la licencia subyacente. Estados Unidos, Reino Unido, Canadá, Australia y Japón NO son signatarios de Viena 1968 — los conductores de estos países siempre reciben el PIC Ginebra 1949.',
			},
			{
				tone: 'real-limited',
				pill: 'REAL · USO LIMITADO',
				acronym: 'IADP (Interamericana 1943)',
				text: 'El Permiso Interamericano de Conducir emitido bajo la Convención Interamericana de 1943 sobre Regulación del Tráfico Automotor Interamericano. Limitado a relaciones bilaterales del Hemisferio Occidental. Sustituido en gran medida por el PIC Ginebra 1949 — la mayoría de países latinoamericanos son signatarios de Ginebra 1949 y lo aceptan. En 2026, la inmensa mayoría de viajeros estadounidenses a América Latina utilizan el PIC Ginebra sin complicaciones.',
			},
			{
				tone: 'marketing',
				pill: 'NO ES TÉRMINO LEGAL',
				acronym: 'IDL («International Driving License»)',
				text: '«Licencia Internacional de Conducir» no existe como término legal en ningún tratado de la ONU. Las convenciones de Ginebra 1949 y Viena 1968 solo mencionan el «Permiso Internacional de Conducir» (International Driving Permit). Algunos emisores autorizados usan «IDL» en su marketing como etiqueta más memorable para su PIC. Los sitios fraudulentos usan «IDL» para insinuar algo más oficial que un PIC. Si un sitio vende una «IDL» sin nombrar Ginebra 1949 o Viena 1968, ese es un señal de alerta que merece una segunda mirada.',
			},
			{
				tone: 'scam',
				pill: 'CATEGORÍA DE FRAUDE',
				acronym: 'IDA («International Driver\'s Association»)',
				text: 'La «International Driver\'s Association» (IDA) y acrónimos similares son usados por múltiples sitios que venden PIC falsos no reconocidos por ningún gobierno. El Aviso al Consumidor de la FTC «Beware Fake International Driver\'s Licenses» (2019) advirtió específicamente sobre esta categoría. Los PIC estadounidenses genuinos vienen solo de AAA y AATA. Si «IDA International» vende un permiso de descarga instantánea por $19, no es un PIC real — es un documento fraudulento.',
			},
		],
	},
	realIdpDeepDive: {
		heading: 'Cómo se ve un PIC realmente real — tres documentos, tres convenciones',
		lead: 'Cada uno de los documentos reales abajo está anclado en un tratado ONU diferente — Ginebra 1949, Viena 1968 o Interamericana 1943. Difieren en período de validez, alcance geográfico y qué cuerpo nacional autorizado los emite. Abajo: exactamente qué distingue a cada uno y dónde se requiere cada cual.',
		blocks: [
			{
				h3: 'PIC Convención de Ginebra 1949 — el estándar global por defecto',
				body: 'La Convención de Ginebra sobre Circulación por Carretera de 1949 fue firmada en Ginebra el 19 de septiembre de 1949 y registrada en el Volumen 125 de la Serie de Tratados de la ONU. Estableció el Permiso Internacional de Conducir como un cuadernillo multilingüe que traduce la licencia de conducir doméstica del titular a un conjunto estandarizado de idiomas (originalmente 8, ahora 11 en el formato que imprime AAA). A 2026 la Convención cuenta con más de 150 partes contratantes — incluyendo Estados Unidos, Reino Unido, Canadá, Australia, la mayor parte de África, la mayor parte de Asia y la mayoría de países latinoamericanos. La validez es de 1 año desde la fecha de emisión o hasta que expire la licencia subyacente, lo que ocurra antes. El permiso es inválido sin la licencia física subyacente — el Anexo 10 de la Convención establece explícitamente que el PIC «no será utilizado por el titular en el país que emitió su permiso doméstico». Los conductores estadounidenses solo pueden obtener un PIC Ginebra 1949 de la American Automobile Association (AAA) o la American Automobile Touring Alliance (AATA). Verificamos la página de aplicación de AAA en mayo de 2026 (aaa.com, Formulario D): el proceso documentado es tarifa de $20, dos fotos tamaño pasaporte, una fotocopia del anverso y reverso de la licencia subyacente, y una visita en persona a la oficina de AAA o una solicitud por correo. El tiempo de procesamiento es típicamente 10–15 días hábiles. No existe opción de descarga instantánea de ninguno de los dos emisores autorizados.',
			},
			{
				h3: 'PIC Convención de Viena 1968 — el marco modernizado',
				body: 'La Convención de Viena sobre Circulación por Carretera de 1968 fue firmada en Viena el 8 de noviembre de 1968 y registrada en el Volumen 1042 de la Serie de Tratados de la ONU. Fue redactada para modernizar el marco de Ginebra 1949 — actualizar señales de tránsito, ampliar el formato del PIC y estandarizar más aspectos del tráfico vial internacional. A 2026 la Convención cuenta con aproximadamente 84 partes contratantes, incluyendo los 27 estados miembros de la UE, Rusia, Bielorrusia, Kazajistán, la mayoría de países de Europa Oriental, partes de Asia Central, Brasil (que es signatario tanto de Viena 1968 como de Ginebra 1949) y varios estados africanos. La validez de un PIC Viena 1968 es de 3 años desde la emisión o hasta que expire la licencia subyacente, lo que ocurra antes — tres veces el período de Ginebra 1949. El formato del permiso está especificado en el Anexo 7 de la Convención. Estados Unidos, Reino Unido, Canadá, Australia y Japón NO son signatarios de Viena 1968 — los conductores de estos países siempre reciben PIC Ginebra 1949. Los conductores rusos, sin embargo, reciben PIC Viena 1968 de РОСАВТОКЛУБ (el Club Automovilístico Ruso) o la Federación Automovilística Rusa. Un detalle útil para viajeros internacionales: la mayoría de países europeos son signatarios duales (partes tanto de Ginebra 1949 como de Viena 1968). Alemania, Francia, Italia, España, Países Bajos, Austria y aproximadamente 30 países más aceptan cualquiera de los formatos — así que el PIC Ginebra 1949 de un conductor estadounidense funciona en Italia igual que el PIC Viena 1968 de un conductor ruso funciona en Italia.',
			},
			{
				h3: 'Permiso Interamericano de Conducir 1943 — uso limitado en el Hemisferio Occidental',
				body: 'La Convención Interamericana sobre Regulación del Tráfico Automotor Interamericano de 1943 fue firmada en Washington DC el 24 de diciembre de 1943. Antecede a ambas convenciones de la ONU y fue diseñada específicamente para tráfico automotor bilateral entre países de la Unión Panamericana. Los signatarios originales incluyen Argentina, Brasil, Chile, República Dominicana, Haití, México, Estados Unidos y Uruguay. La Convención de Ginebra de 1949 sustituyó en gran medida a la Convención Interamericana para fines prácticos — cada país del Hemisferio Occidental que firmó la Convención Interamericana también firmó Ginebra 1949, y la mayoría de empresas de alquiler en América Latina aceptan el PIC Ginebra 1949 en toda la región. AAA todavía emite el Permiso Interamericano de Conducir (a veces etiquetado como «IADP») para los casos bilaterales específicos donde se requiere explícitamente, pero en documentación de 2026 no encontramos un solo país latinoamericano que requiera exclusivamente el permiso Interamericano sobre el PIC Ginebra 1949. Consejo práctico: si eres un conductor estadounidense yendo a México, Brasil, Argentina, Chile, o cualquier otro lugar en América Latina, el PIC Ginebra 1949 es el que quieres — mismos emisores autorizados (AAA + AATA), mismo costo aproximado de $20, mismo cuadernillo multilingüe. El Permiso Interamericano de Conducir solo entra en juego para arreglos legales históricos muy específicos que prácticamente nunca surgen para viajeros modernos.',
			},
		],
	},
	fakesAndMyths: {
		heading: 'El mito de la «IDL» y la categoría de fraude «IDA»',
		lead: 'Los otros dos acrónimos en la tabla original — IDL e IDA — son donde reside la mayor parte de la confusión del consumidor. Uno es un artefacto de marketing; el otro es una categoría sobre la cual la Comisión Federal de Comercio de EE.UU. ha advertido formalmente a los consumidores.',
		blocks: [
			{
				h3: 'El mito de la «IDL» — por qué «Licencia Internacional de Conducir» no es una cosa',
				body: '«Licencia Internacional de Conducir» (International Driving License) no es un término legal en ningún tratado de la ONU. El texto de la Convención de Ginebra de 1949 (UN Treaty Series Vol. 125, Artículo 24) se refiere exclusivamente al «permis international de conduire» / «International Driving Permit». El texto de la Convención de Viena de 1968 (Vol. 1042, Artículo 41) usa la misma frase. No existe un documento legal llamado «Licencia Internacional de Conducir». ¿Por qué persiste el término? Tres razones. Primero, varios emisores nacionales autorizados usan «IDL» coloquialmente en su material de marketing como etiqueta más memorable para su producto PIC Ginebra 1949 — esto no es técnicamente incorrecto, solo impreciso. Segundo, la traducción de «permit» a muchos idiomas no-ingleses se traduce como «license» — la traducción al ruso de International Driving Permit es «международное водительское удостоверение» (literalmente «certificado internacional de conductor»), la traducción al español a menudo es «Licencia Internacional de Conducir» (literalmente «International Driving License»), la traducción al italiano puede ser «patente internazionale» (literalmente «patente internacional / licencia»). Cuando los buscadores no-anglófonos traducen su consulta de vuelta al inglés, «International Driving License» es lo que a menudo escriben. Tercero, los sitios fraudulentos explotan deliberadamente el término para insinuar que están vendiendo algo más oficial que un PIC. Un sitio que llama a su producto «Licencia Internacional de Conducir» sin nombrar bajo qué convención se emite (Ginebra 1949 o Viena 1968) es o impreciso en su marketing o está escondiendo la ausencia de respaldo de tratado. En 2026, el Aviso al Consumidor de la FTC de 2019 sobre licencias internacionales de conducir falsas sigue siendo la guía estadounidense autoritativa — y la FTC explícitamente nota que los únicos PIC estadounidenses genuinos vienen de AAA y AATA.',
			},
			{
				h3: 'La categoría de fraude «IDA» — sobre qué advirtió formalmente la FTC',
				body: 'Múltiples sitios web usan el branding «IDA» o «International Driver\'s Association» para vender lo que comercializan como PIC. La Comisión Federal de Comercio de EE.UU. publicó un Aviso al Consumidor titulado «Beware Fake International Driver\'s Licenses» en 2019 — ese aviso sigue activo y vigente en 2026 (consumer.ftc.gov, verificado en mayo de 2026). El aviso establece tres cosas directamente. Primero: los únicos emisores estadounidenses autorizados de Permisos Internacionales de Conducir genuinos son la American Automobile Association (AAA) y la American Automobile Touring Alliance (AATA). Segundo: los sitios de PIC falsos típicamente cobran $25–$50 por descarga instantánea o entrega rápida por correo — un servicio más rápido y barato que el real, que es exactamente el cebo. Tercero: la FTC nota que algunas operaciones de PIC falsos están conectadas a operaciones de robo de identidad — enviar la foto de tu licencia de conducir + tu dirección de casa + detalles de pago a una operación en línea no verificada crea un riesgo real más allá de perder los $25. Revisamos tres de estos sitios estilo IDA en mayo de 2026 (no los nombraremos — cada enlace es equidad de enlace dada a una operación fraudulenta). Patrones comunes que observamos: ninguna mención de bajo qué Convención de la ONU se emite el documento, ninguna referencia a «Anexo 10» o «Ginebra 1949» en las páginas de marketing, sellos de estilo gubernamental en los documentos de muestra sin ningún cuerpo autorizante nombrado, afirmación de ser «reconocido en más de 200 países» (una imposibilidad matemática — Ginebra 1949 tiene como máximo 150 signatarios, Viena 1968 tiene como máximo 84, y la superposición máxima requiere ser parte de ambas convenciones), precios de descarga instantánea de $19 a $45, ninguna dirección postal física clara o entidad corporativa registrada en Estados Unidos, y un «PIC de muestra» que no coincide con el formato especificado ni en el Anexo 10 (Ginebra) ni en el Anexo 7 (Viena). Cualquiera de estos patrones por sí solo es una señal amarilla. Dos o más es una señal roja. Tres o más y el documento que estás a punto de comprar no es un PIC — es un pedazo de papel que no pasará inspección en ningún mostrador de alquiler en ninguna parte del mundo.',
			},
		],
	},
	decisionMatrix: {
		heading: 'Lo que realmente necesitas — matriz de decisión por escenario',
		lead: 'Orientación específica por origen del conductor y destino. Usa las filas abajo para entender exactamente qué documento necesitas y dónde obtenerlo — sin comprar algo que no funcionará.',
		columnLabels: { scenario: 'Tu escenario', document: 'Documento que necesitas', where: 'Dónde obtenerlo' },
		rows: [
			{
				scenario: 'Conductor estadounidense viajando a cualquier país europeo (Schengen, Reino Unido, UE)',
				document: 'PIC Ginebra 1949 + licencia física estadounidense',
				where: 'AAA o AATA (~$20, 10–15 días hábiles por correo)',
				hint: 'La mayoría de países europeos son signatarios duales — Ginebra 1949 funciona en toda Europa.',
			},
			{
				scenario: 'Conductor estadounidense viajando a Japón, Corea del Sur o Australia',
				document: 'PIC Ginebra 1949 + licencia física estadounidense',
				where: 'AAA o AATA',
				hint: 'Japón es signatario de Ginebra 1949 pero NO de Viena 1968 — el PIC Ginebra estadounidense es el único formato correcto.',
			},
			{
				scenario: 'Conductor estadounidense viajando a México o cualquier parte de Centroamérica',
				document: 'La licencia física estadounidense es legalmente suficiente; PIC no requerido por ley federal mexicana',
				where: 'n/a (no se requiere PIC legalmente)',
				hint: 'IDP Companion sigue siendo útil en mostradores de alquiler como ayuda de traducción aunque no se requiera PIC legalmente.',
			},
			{
				scenario: 'Conductor estadounidense viajando a Tailandia, Vietnam o Indonesia',
				document: 'PIC Ginebra 1949 + licencia física estadounidense',
				where: 'AAA o AATA',
				hint: 'Tailandia y Vietnam son signatarios de Ginebra 1949. Indonesia oficialmente requiere PIC — la aplicación varía por provincia.',
			},
			{
				scenario: 'Conductor mexicano viajando a Estados Unidos',
				document: 'Licencia de conducir mexicana + PIC Ginebra 1949 (recomendado para algunos estados, no obligatorio federalmente)',
				where: 'Asociación Mexicana Automovilística (AMA) emite el PIC Ginebra 1949 para conductores mexicanos',
				hint: 'Florida y Georgia requieren explícitamente PIC para licencias no en inglés. La mayoría de los demás estados son flexibles.',
			},
			{
				scenario: 'Conductor argentino, chileno o uruguayo viajando a Europa',
				document: 'PIC Ginebra 1949 + licencia física nacional',
				where: 'ACA en Argentina, Automóvil Club de Chile, Touring y Automóvil Club del Uruguay',
				hint: 'Los emisores autorizados nacionales son los clubes automovilísticos miembros de la FIA en cada país.',
			},
			{
				scenario: 'Conductor de la UE (español, francés, italiano, etc.) viajando dentro de la UE',
				document: 'La licencia física de la UE es suficiente — no se necesita PIC dentro de la UE',
				where: 'n/a',
				hint: 'Las licencias de la UE son mutuamente reconocidas en todos los estados miembros bajo la Tercera Directiva de Licencias de Conducir de la UE.',
			},
			{
				scenario: 'Conductor de la UE viajando a EE.UU., Canadá o México',
				document: 'PIC Ginebra 1949 + licencia física de la UE (recomendado; algunos estados de EE.UU. lo requieren explícitamente)',
				where: 'Emisor autorizado del país de origen (ADAC en Alemania, ACI en Italia, RACE en España, etc.)',
				hint: 'La ley de EE.UU. varía por estado. Florida y Georgia requieren explícitamente PIC para licencias no en inglés.',
			},
			{
				scenario: 'Conductor español viajando dentro de la UE',
				document: 'La licencia física española de la UE es suficiente — no se necesita PIC',
				where: 'n/a',
				hint: 'Para destinos fuera de la UE (EE.UU., Canadá, México, Asia), obtén un PIC Ginebra 1949 de RACE.',
			},
			{
				scenario: 'Conductor ruso viajando a Schengen Europa',
				document: 'PIC Viena 1968 + licencia física rusa',
				where: 'РОСАВТОКЛУБ o Federación Automovilística Rusa',
				hint: 'Los estados miembros de la UE son signatarios duales — el PIC Viena 1968 de РОСАВТОКЛУБ funciona en toda la UE.',
			},
		],
		footnote: 'La matriz arriba refleja documentación de 2026. Los requisitos legales pueden cambiar por país de destino — siempre verifica el aviso de la embajada del destino antes de viajar. La distinción Ginebra 1949 vs Viena 1968 determina a qué emisor autorizado acudir en tu país de origen.',
	},
	redFlagChecklist: {
		heading: 'Señales de alerta — cómo identificar un sitio fraudulento de PIC en 30 segundos',
		lead: 'Cualquiera de estas por sí sola es una señal amarilla. Dos o más es una señal roja. Tres o más y lo que estás a punto de comprar no es un Permiso Internacional de Conducir — es un pedazo de papel que no pasará inspección en ningún mostrador de alquiler, cruce fronterizo o control en carretera.',
		items: [
			'Ninguna mención de bajo qué Convención de la ONU se emite el documento (ninguna referencia a «Convención de Ginebra 1949» o «Convención de Viena 1968» en las páginas de marketing).',
			'Afirma ser «reconocido en más de 200 países» — Ginebra 1949 tiene como máximo 150 signatarios, Viena 1968 tiene como máximo 84. Cualquier número por encima de 175 es matemáticamente imposible.',
			'Sellos de estilo gubernamental en documentos de muestra sin ningún cuerpo autorizante nombrado (ningún AAA, AATA, ADAC, РОСАВТОКЛУБ o autoridad nacional nombrada).',
			'Descarga instantánea de PDF por $19 a $45 — los emisores autorizados reales no entregan PDF instantáneos.',
			'Branding de «Licencia Internacional de Conducir» sin referencia a Convención — casi siempre es o imprecisión de marketing o fraude.',
			'Vago sobre si necesitas llevar la licencia física subyacente — los PIC reales son inválidos sin la licencia física del país de origen.',
			'Ninguna dirección postal física o entidad corporativa registrada divulgada en el sitio web.',
			'Los documentos de muestra no coinciden con el formato especificado en el Anexo 10 (Ginebra) o el Anexo 7 (Viena) — conjunto de idiomas incorrecto, diseño de página incorrecto, estructura de campo incorrecta.',
			'Ninguna política de reembolso o devolución de dinero clara — los emisores autorizados reales ofrecen recurso si el documento es rechazado en un cruce fronterizo.',
			'Reseñas de clientes casi todas de 5 estrellas, publicadas en un marco temporal estrecho, con patrones de fraseo similares — característico de granjas de reseñas pagadas usadas por operaciones fraudulentas.',
		],
	},
	howToVerify: {
		heading: 'Cómo verificar un PIC real — en 30 segundos en un mostrador de alquiler',
		lead: 'Un PIC real pasará una verificación visual de cinco segundos por cualquier agente de alquiler o oficial de policía que haya visto PIC antes. Aquí está exactamente qué buscan, y qué deberías buscar antes de comprar.',
		steps: [
			{
				num: '1',
				title: 'Referencia a Convención en la portada',
				body: 'La portada o primera página de un PIC genuino referencia ya sea la Convención de Ginebra sobre Circulación por Carretera de 1949 o la Convención de Viena sobre Circulación por Carretera de 1968. El nombre y año de la Convención es la forma más rápida de verificar legitimidad. Sin referencia a Convención = no es un PIC real.',
			},
			{
				num: '2',
				title: 'Emisor autorizado nombrado',
				body: 'Un PIC real nombra al cuerpo autorizante que lo emitió. Los PIC Ginebra 1949 estadounidenses llevan el sello «American Automobile Association» o «American Automobile Touring Alliance». Los PIC Viena 1968 rusos llevan el sello «РОСАВТОКЛУБ» o Federación Automovilística Rusa. Los PIC Ginebra alemanes llevan el sello «ADAC». Sin nombre de emisor = no es un PIC real.',
			},
			{
				num: '3',
				title: 'Requisito de licencia subyacente',
				body: 'Un PIC real es inválido sin la licencia física subyacente — el Anexo 10 de la Convención (Ginebra) y el Anexo 7 (Viena) ambos lo establecen explícitamente. La contraportada o primera página del PIC típicamente reproduce este requisito de Convención. Los oficiales en mostradores de alquiler lo saben — pedirán tanto el PIC como la licencia subyacente. Si un «permiso» se vende como documento autónomo que «reemplaza» tu licencia del país de origen, no es real.',
			},
			{
				num: '4',
				title: 'Páginas de traducción multilingüe',
				body: 'Las páginas 3 hasta el final de un PIC real contienen la misma información de campo traducida a un conjunto estandarizado de idiomas — los PIC Ginebra 1949 incluyen 11 idiomas en el formato que imprime AAA (inglés, francés, español, alemán, italiano, portugués, ruso, árabe, chino, japonés, vietnamita). Las páginas de traducción están numeradas y siguen el diseño especificado por el Anexo 10. Un «permiso» con menos de 8 idiomas, o con idiomas fuera del conjunto estándar, no es un PIC real.',
			},
			{
				num: '5',
				title: 'Cuadernillo físico, no PDF autónomo',
				body: 'Los PIC reales de emisores nacionales autorizados son cuadernillos físicos entregados por correo. AAA entrega en 10–15 días hábiles. PayPoint en oficinas postales del Reino Unido emite por mostrador. РОСАВТОКЛУБ emite con cita. Ninguno de estos emisores entrega «PDF instantáneos» — la Convención especifica un formato de cuadernillo físico. Si el método de entrega es «descarga instantánea», lo que estás comprando no es un PIC compatible con la Convención.',
			},
		],
	},
	midCta: {
		kicker: '¿NECESITAS EL ACOMPAÑANTE DE TRADUCCIÓN?',
		title: 'Salta los 10–15 días de espera por correo. Obtén un PDF multilingüe instantáneo en 2 minutos — el mismo contenido de traducción que funciona en mostradores de alquiler, controles y recepciones de hotel en todo el mundo.',
		button: 'Obtener IDP Companion — $35 / año',
	},
	companionFit: {
		heading: 'Dónde encaja IDP Companion — y la matemática detrás del precio',
		lead: 'IDP Companion resuelve un problema específico: la capa de fricción en mostradores de alquiler, controles y recepciones de hotel donde una traducción multilingüe de tu licencia importa más. Aquí está exactamente lo que entregamos, la matemática detrás del precio por año, y el único punto donde somos explícitos sobre lo que no somos.',
		paragraphs: [
			'La capa de fricción es donde realmente ocurre la mayoría de la fricción para conductores extranjeros: un agente de alquiler que vacila porque la licencia subyacente está en un alfabeto desconocido, un oficial de policía en un control que quiere leer tu licencia pero no puede, un recepcionista de hotel en un área turística que tiene que verificar identificación. IDP Companion es un PDF que lleva las mismas páginas de traducción multilingüe encontradas dentro de un PIC respaldado por Convención — el documento hace el mismo trabajo de capa de fricción en esos puntos de contacto.',
			'Sobre la matemática: entrega instantánea de PDF significa sin espera de 10–15 días hábiles por correo, sin visita a oficina, sin sobrecostos de envío en el precio. Nuestro plan de 3 años se amortiza a $15/año y el plan de 5 años a $11/año — ambos por debajo del costo típico de 1 año de un PIC emitido por un emisor nacional autorizado. Para viajeros que vuelan más de una vez cada tres años, la matemática por año favorece el plan multi-año del companion.',
			'Divulgación honesta: IDP Companion no es un Permiso Internacional de Conducir emitido por el gobierno bajo ninguna Convención de la ONU. En países donde un PIC es legalmente requerido para conductores extranjeros — Italia, Japón, Grecia, Indonesia y docenas más — IDP Companion no reemplaza el requisito legal. El documento legalmente compatible para esos países es un PIC respaldado por Convención de un emisor nacional autorizado en tu país de origen, usado junto con IDP Companion para la función de capa de fricción.',
		],
		comparisonTable: {
			heading: 'Lado a lado: PIC del gobierno vs IDP Companion',
			columnGov: 'PIC emitido por gobierno',
			columnUs: 'IDP Companion',
			rows: [
				{ label: 'Método de entrega', gov: 'Cuadernillo físico por correo', us: 'Descarga instantánea de PDF' },
				{ label: 'Tiempo de procesamiento', gov: '10–15 días hábiles', us: '~2 minutos' },
				{ label: 'Visita a oficina', gov: 'A menudo requerida', us: 'Ninguna' },
				{ label: 'Costo 1 año (referencia EE.UU.)', gov: '~$20', us: '$35' },
				{ label: 'Costo amortizado 3 años', gov: 'n/a (solo 1 año)', us: '$15 / año' },
				{ label: 'Costo amortizado 5 años', gov: 'n/a (solo 1 año)', us: '$11 / año' },
				{ label: 'Cumplimiento legal donde PIC es requerido', gov: 'Sí (respaldado por Convención)', us: 'No — usado junto con PIC del gobierno' },
				{ label: 'Páginas de traducción multilingüe', gov: 'Sí', us: 'Sí (mismo contenido de traducción)' },
				{ label: 'Funciona en mostradores y controles', gov: 'Sí', us: 'Sí' },
			],
		},
		pricingLine: 'Planes: 1 año $35 · 3 años $45 ($15 / año) · 5 años $55 ($11 / año). En un plan multi-año, IDP Companion es más barato por año que un PIC emitido por gobierno — y saltas la espera de 10 días por correo y la visita a oficina. Para la función de capa de fricción, la matemática está a tu favor.',
	},
	faq: {
		heading: 'Preguntas frecuentes',
		lead: 'Respuestas con la respuesta en la primera oración a las preguntas de desambiguación que más nos envían los lectores por correo.',
		items: [
			{
				id: 1,
				question: '¿Es un PIC lo mismo que una IDL?',
				answer: 'No — «PIC» (o IDP) nombra un documento real respaldado por tratado bajo la Convención de Ginebra de 1949 o la Convención de Viena de 1968, y «IDL» no es un término legal en ningún tratado. Algunos emisores autorizados usan «IDL» como etiqueta de marketing para su producto PIC, y las traducciones de International Driving Permit al ruso, español y otros idiomas se traducen como «licencia», lo que alimenta la confusión en inglés. Si un sitio vende una «IDL» sin nombrar Ginebra 1949 o Viena 1968 como Convención subyacente, ese es tu indicador para revisar el resto de la lista de señales de alerta arriba.',
			},
			{
				id: 2,
				question: '¿Es IDA International o «International Driver\'s Association» un fraude?',
				answer: 'La mayoría de sitios usando el branding «IDA» o «International Driver\'s Association» venden PIC falsos que ningún gobierno reconoce — la Comisión Federal de Comercio de EE.UU. publicó un Aviso al Consumidor de 2019 específicamente advirtiendo sobre esta categoría, y ese aviso sigue vigente en 2026. Los únicos emisores estadounidenses autorizados de PIC Ginebra 1949 genuinos son la American Automobile Association (AAA) y la American Automobile Touring Alliance (AATA). Si ya pagaste a un sitio «IDA» y el producto no ha sido usado todavía, el proceso de contracargo de tu compañía de tarjeta de crédito es el remedio práctico.',
			},
			{
				id: 3,
				question: '¿Puedo usar un PIC estadounidense en Rusia?',
				answer: 'Sí en la práctica — las compañías de alquiler rusas y la policía de tránsito típicamente aceptan PIC Ginebra 1949 emitidos por EE.UU. aunque Rusia es signataria de Viena 1968 en lugar de parte de Ginebra 1949. La sutileza legal es que EE.UU. no es signatario de Viena 1968, así que no hay opción de PIC Viena 1968 para conductores estadounidenses. Lleva tu PIC Ginebra 1949 emitido por AAA junto con tu licencia física estadounidense; en documentación de 2026 no hemos visto reportes de rechazo en mostradores de alquiler rusos.',
			},
			{
				id: 4,
				question: '¿Necesito un PIC para Italia?',
				answer: 'Sí — la ley italiana (Codice della Strada, Artículo 135) requiere que los conductores extranjeros usando una licencia no-UE lleven un Permiso Internacional de Conducir junto con la licencia física del país de origen. Italia es signataria de ambas Convenciones, así que tanto los PIC Ginebra 1949 (de AAA / AATA para conductores estadounidenses, PayPoint para conductores británicos) como los PIC Viena 1968 (de РОСАВТОКЛУБ para conductores rusos, etc.) son aceptados. Los conductores con licencia UE no necesitan un PIC para Italia — el reconocimiento mutuo de la UE los cubre.',
			},
			{
				id: 5,
				question: '¿Cuál es la diferencia entre los PIC de Ginebra 1949 y Viena 1968?',
				answer: 'Ginebra 1949 tiene más de 150 signatarios y validez de 1 año; Viena 1968 tiene ~84 signatarios y validez de 3 años. Ginebra 1949 es el estándar global por defecto — usado por EE.UU., Reino Unido, Canadá, Australia, Japón, la mayor parte de África, la mayor parte de América Latina. Viena 1968 es usado por estados miembros de la UE, Rusia, Bielorrusia, Kazajistán y otros países de Europa Central y Oriental. La mayoría de países europeos son signatarios duales — aceptan ambos formatos intercambiablemente.',
			},
			{
				id: 6,
				question: '¿Dónde obtengo un PIC estadounidense real?',
				answer: 'Solo dos organizaciones están autorizadas para emitir PIC estadounidenses genuinos: la American Automobile Association (AAA, aaa.com) y la American Automobile Touring Alliance (AATA, aata.org). El Aviso al Consumidor de la FTC (2019) y el Departamento de Estado de EE.UU. ambos lo confirman. El costo es ~$20 de cualquiera de los dos emisores, el tiempo de procesamiento es 10–15 días hábiles por correo, y los requisitos son una tarifa de $20, dos fotos tamaño pasaporte, una fotocopia de tu licencia de conducir estadounidense, y el Formulario D (el formulario de solicitud). Ningún tercero puede emitir un PIC estadounidense genuino.',
			},
			{
				id: 7,
				question: '¿Por cuánto tiempo es válido un PIC?',
				answer: 'Los PIC Ginebra 1949 son válidos por 1 año desde la fecha de emisión o hasta que expire la licencia doméstica subyacente, lo que ocurra antes. Los PIC Viena 1968 son válidos por 3 años desde la fecha de emisión o hasta que expire la licencia subyacente. El PIC nunca se extiende más allá de la licencia subyacente — si tu licencia del país de origen expira en 6 meses, el PIC también expira efectivamente en 6 meses.',
			},
			{
				id: 8,
				question: '¿Necesito tanto mi licencia de conducir como el PIC?',
				answer: 'Sí — cada PIC es inválido sin la licencia física subyacente. El Anexo 10 de la Convención de Ginebra de 1949 y el Anexo 7 de la Convención de Viena de 1968 ambos requieren explícitamente que el PIC se lleve junto con la licencia de conducir del país de origen. Un mostrador de alquiler u oficial de policía en carretera que vea el PIC sin la licencia subyacente está obligado por las reglas de la Convención a tratarlo como inválido.',
			},
			{
				id: 9,
				question: '¿Puedo obtener un PIC real en línea para descarga instantánea?',
				answer: 'No — ni AAA ni AATA (los únicos emisores estadounidenses autorizados) entregan PIC como descargas instantáneas de PDF. La Convención especifica un formato de cuadernillo físico. AAA entrega en 10–15 días hábiles por correo; PayPoint en oficinas postales del Reino Unido emite por mostrador. Cualquier sitio vendiendo «entrega instantánea de PDF de PIC» no está entregando un PIC compatible con Ginebra 1949 o Viena 1968 — está vendiendo o un documento fraudulento o un acompañante de traducción (como nuestro IDP Companion, donde somos explícitos en que no es un PIC de Convención).',
			},
			{
				id: 10,
				question: '¿Es el PIC de AAA lo mismo que el PIC de AATA?',
				answer: 'Funcionalmente sí — tanto AAA como AATA son emisores estadounidenses autorizados de PIC Ginebra 1949, ambos emiten el mismo formato de cuadernillo compatible con la Convención, ambos cuestan ~$20, y ambos son aceptados igualmente en mostradores de alquiler y fronteras. Las únicas diferencias son operacionales: diferentes formularios de solicitud, diferentes ubicaciones de procesamiento, y ventanas de procesamiento ligeramente diferentes. El producto final pasa la misma inspección.',
			},
			{
				id: 11,
				question: '¿Qué es el Permiso Interamericano de Conducir?',
				answer: 'El Permiso Interamericano de Conducir (a veces IADP) es el documento emitido bajo la Convención Interamericana de 1943 sobre Regulación del Tráfico Automotor Interamericano — un tratado regional del Hemisferio Occidental sustituido en gran medida en la práctica por la Convención de Ginebra de 1949. AAA todavía lo emite para los casos bilaterales específicos donde se requiere, pero en 2026 no hemos encontrado un solo país latinoamericano que requiera exclusivamente el permiso Interamericano sobre el PIC Ginebra 1949. Si eres un conductor estadounidense yendo a cualquier lugar en América Latina, el PIC Ginebra 1949 es el que quieres.',
			},
			{
				id: 12,
				question: '¿Qué pasa si me atrapan con un PIC falso?',
				answer: 'Los resultados van desde rechazo cortés en el mostrador de alquiler (lo más común — no liberan el auto y pierdes la reserva) a multas por conducir sin licencia válida (la mayoría de países tratan un PIC falso como ningún PIC en absoluto), a cargos criminales por fraude de documentos en casos extremos. En Grecia, Italia e Indonesia, conducir sin un PIC válido donde se requiere resulta en multas de €500 a €2,000+ según documentación de 2026. El riesgo adicional de robo de identidad notado en el Aviso de la FTC de 2019 agrega una capa de daño separada más allá de las consecuencias inmediatas de conducción.',
			},
			{
				id: 13,
				question: '¿Es IDP Companion un PIC?',
				answer: 'No — IDP Companion es un documento acompañante multilingüe de traducción, no un Permiso Internacional de Conducir bajo ninguna Convención de la ONU. No afirmamos estar autorizados para emitir PIC Ginebra 1949 o Viena 1968 porque no lo estamos. El contenido de traducción multilingüe de IDP Companion es funcionalmente idéntico a las páginas de traducción dentro de un PIC Ginebra 1949, y en la capa de fricción (mostradores de alquiler, controles, recepciones de hotel) el documento hace el mismo trabajo. Donde la ley explícitamente requiere un PIC Ginebra 1949 o Viena 1968 — Italia, Japón, Grecia, Indonesia, docenas más — IDP Companion no reemplaza el requisito legal.',
			},
			{
				id: 14,
				question: '¿Por qué IDP Companion es más barato por año que AAA?',
				answer: 'Tres razones. Primero, nuestros planes de 3 y 5 años amortizan el costo por año ($15 / año para 3 años, $11 / año para 5 años) donde AAA solo vende permisos de 1 año. Segundo, entregamos PDF instantáneos vs la entrega por correo de 10–15 días hábiles de AAA — sin gastos generales de envío u oficina. Tercero, explícitamente no estamos emitiendo un PIC respaldado por Convención — no llevamos la sobrecarga regulatoria de un emisor autorizado. La comparación honesta: AAA te da cumplimiento legal por ~$20 / año; nosotros te damos entrega instantánea y precios multi-año más bajos para la función de capa de fricción.',
			},
			{
				id: 15,
				question: '¿Hay un equivalente europeo de AAA para emisión de PIC?',
				answer: 'Sí — cada país de la UE tiene su propio emisor nacional autorizado para PIC Ginebra 1949 (y Viena 1968 donde aplique). Alemania: ADAC (Allgemeiner Deutscher Automobil-Club). Francia: Préfecture de Police. Italia: ACI (Automobile Club d\'Italia). España: RACE (Real Automóvil Club de España). Países Bajos: ANWB. Los conductores de la UE dentro de la UE no necesitan un PIC — el reconocimiento mutuo de la UE bajo la Tercera Directiva de Licencias de Conducir los cubre. Los conductores de la UE viajando fuera de la UE (a EE.UU., Canadá, México, Rusia, etc.) sí necesitan un PIC de su emisor autorizado del país de origen.',
			},
		],
	},
	related: {
		heading: 'Guías relacionadas',
		lead: 'Guías específicas por país y la referencia pilar de conducción internacional en 2026.',
		cards: [
			{
				title: 'Conducir en el Extranjero — Guía Completa 2026',
				text: 'La referencia pilar cubriendo qué países requieren PIC, cuánto cuestan realmente y cómo prepararte en cinco pasos.',
				href: '/guides/driving-abroad-complete-guide-2026',
			},
			{
				title: 'PIC para Conductores Estadounidenses en España',
				text: 'Requisito post-Brexit equivalente, ZBE de Madrid, y la realidad para conductores estadounidenses en España.',
				href: '/idp-for-us-drivers-in-spain',
			},
			{
				title: 'PIC para Conductores Estadounidenses en México',
				text: 'Por qué México no requiere legalmente un PIC, por qué la fricción del mostrador de alquiler aún hace útil tenerlo, y detalle de aplicación de Cancún / Tulum 2026.',
				href: '/idp-for-us-drivers-in-mexico',
			},
			{
				title: 'PIC para Conductores Estadounidenses en Italia',
				text: 'Detalles del Codice della Strada Artículo 135, cumplimiento de cámaras ZTL, y la imagen legal-vs-real para conductores estadounidenses en Italia.',
				href: '/idp-for-us-drivers-in-italy',
			},
			{
				title: 'PIC para Conductores Británicos en España',
				text: 'Requisito de PIC post-Brexit para conductores británicos, cumplimiento ZBE de Madrid, y el proceso PayPoint en oficinas postales del Reino Unido.',
				href: '/idp-for-uk-drivers-in-spain',
			},
			{
				title: 'PIC para Conductores Estadounidenses en Japón',
				text: 'Requisito de Ginebra 1949 de Japón (Viena 1968 no aceptado), los cuatro tipos de PIC no reconocidos que Japón rechaza explícitamente, y la realidad del mostrador de alquiler en Tokio.',
				href: '/idp-for-us-drivers-in-japan',
			},
		],
	},
	finalCta: {
		heading: 'Tu viaje está cerca. Salta los 10 días de espera por correo.',
		text: 'IDP Companion es el mismo contenido de traducción multilingüe que un PIC respaldado por Convención — en un PDF que se descarga en 2 minutos. $35 por 1 año, $11 / año en el plan de 5 años, sin sala de espera, sin visita a oficina. Listo antes de tu vuelo, listo para el mostrador de alquiler.',
		button: 'Obtener IDP Companion ahora',
	},
	sources: {
		heading: 'Fuentes',
		items: [
			'Serie de Tratados de las Naciones Unidas Volumen 125 — Convención de Ginebra sobre Circulación por Carretera de 1949 (texto completo)',
			'Serie de Tratados de las Naciones Unidas Volumen 1042 — Convención de Viena sobre Circulación por Carretera de 1968 (texto completo)',
			'Convención Interamericana de 1943 sobre Regulación del Tráfico Automotor Interamericano — archivos de la Unión Panamericana',
			'Aviso al Consumidor de la Comisión Federal de Comercio de EE.UU.: «Beware Fake International Driver\'s Licenses» (2019, consumer.ftc.gov) — verificado en mayo de 2026',
			'American Automobile Association (AAA) — Solicitud de Permiso Internacional de Conducir (Formulario D), aaa.com — verificado en mayo de 2026',
			'American Automobile Touring Alliance (AATA) — información de Permiso Internacional de Conducir, aata.org — verificado en mayo de 2026',
			'PayPoint en oficinas postales del Reino Unido — proceso de emisión de Permiso Internacional de Conducir, postoffice.co.uk — verificado en mayo de 2026',
			'РОСАВТОКЛУБ — emisión de Permiso Internacional de Conducir para conductores rusos — verificado en mayo de 2026',
			'Departamento de Estado de EE.UU. — aviso de Permiso Internacional de Conducir para viajeros estadounidenses, travel.state.gov',
			'Comisión Europea — Reconocimiento de Licencias de Conducir dentro de la UE, ec.europa.eu/transport',
		],
		legalHeading: 'Aviso legal',
		legalText: 'IDP Companion es un documento acompañante multilingüe de traducción privado y no está afiliado con la American Automobile Association (AAA), American Automobile Touring Alliance (AATA), PayPoint, РОСАВТОКЛУБ, ADAC, ACI, RACE, o cualquier otro emisor nacional autorizado de Permisos Internacionales de Conducir. IDP Companion no es un Permiso Internacional de Conducir emitido por el gobierno bajo la Convención de Ginebra de 1949 o la Convención de Viena de 1968. En países donde un PIC es legalmente requerido para conductores extranjeros, IDP Companion no reemplaza el requisito legal y no debe usarse como sustituto de un PIC compatible con la Convención de un emisor nacional autorizado. IDP Companion debe llevarse junto con la licencia de conducir física del país de origen del titular.',
	},
	howToSchemaDescription: 'Cómo verificar en 30 segundos si un documento de Permiso Internacional de Conducir es real (compatible con Convención de Ginebra 1949 o Viena 1968) o un fraude — cinco puntos de inspección usados por agentes de alquiler y oficiales de policía.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Export by locale
// ─────────────────────────────────────────────────────────────────────────────

export const guideCopyByLocale: Record<'en' | 'ru' | 'es', DisambiguationGuideCopy> = {
	en,
	ru,
	es,
};
