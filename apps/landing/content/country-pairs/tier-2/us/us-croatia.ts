/**
 * Country-pair content: United States → Croatia.
 * Tier 2. Locales: en only (US-origin default).
 *
 * Killer angles for Croatia (what differentiates from sibling pages):
 *  - Headlights mandatory 24/7 year-round on all roads — most common stop
 *    for US tourists in Croatia (€40–90 spot fine for foreign plates).
 *  - Croatian law technically requires IDP for non-EU drivers, but US
 *    Latin-script English licences are accepted in practice — relaxed.
 *  - SLOVENIA on the same itinerary IS strict: traffic police enforce IDP
 *    requirement on roads + vignette required for all motorways.
 *  - Currency note: Croatia switched HRK → EUR on 2023-01-01. Fines from
 *    older guides are HRK; in 2026 they're EUR equivalents.
 *
 * PDF language note: Croatian and Slovenian are NOT on the IDP Companion
 * template. Both rental desks and tourist-area police in Croatia/Slovenia
 * routinely operate in English — the verification path is English, which
 * IS on the PDF.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Croatia: 2026 Guide',
		description:
			'Croatian law technically requires an IDP for non-EU drivers but US English licences are accepted in practice. Slovenia on the same trip is stricter. Headlights on 24/7. IDP Companion in 2 min — $35.',
		ogTitleShort: 'US Drivers in Croatia: IDP Guide 2026',
		ogSubtitle: 'Croatia is relaxed. Slovenia next door is not.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Croatia',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Croatia · 2026 Guide',
		title: 'IDP for US Drivers in Croatia: The Headlights Rule and the Slovenia Trap',
		lead: "The road check on the coastal road south of Šibenik takes about four minutes. The officer asks for licence and IDP. The American produces an Oregon licence — clean English, Latin alphabet, recognisably a licence — and watches it handed back with a wave. This is how it usually goes for US drivers in Croatia. The law technically requires an IDP for non-EU tourists; in practice US English licences clear most rental desks and road checks. The two things Croatia actually fines tourists for are easier to miss: headlights off during the day (€40–90 on the spot, year-round requirement on every road) and the trip that crosses into Slovenia without an IDP — where traffic police on the road do apply the non-EU rule and write fines into the hundreds of euros.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Technically yes, practically rare in Croatia. Slovenia on the same trip is different.',
		text: 'Croatian traffic law requires non-EU drivers to carry an IDP alongside their national licence. In practice, US English-language licences in Latin script are consistently accepted at the vast majority of rental desks and police stops without IDP discussion. If your itinerary stays in Croatia, an IDP is a sensible precaution rather than a hard requirement. If your route crosses into Slovenia at any point — the Soča Valley, Bled, Ljubljana, or the transit route north — Slovenian traffic police do enforce the non-EU IDP rule on the road. Get one before you go.',
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion for Croatia (+ Slovenia)',
		lead: "Croatia is forgiving for US English licences. Slovenia, often on the same Adriatic itinerary, is stricter. IDP Companion covers both legal requirements on a single document.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Croatia',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Technically insufficient by Croatian law — but English/Latin script means it\'s accepted in practice by most Croatian rental companies and police. Works for Croatia-only itineraries in most cases. Does not cover Slovenia road checks.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in 12 languages — including English, which is the working second language at every Croatian and Slovenian rental desk and tourist-area police stop. Satisfies the documentation requirement most rental contracts apply to non-EU licences. Reduces friction on any Slovenia leg.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry alongside IDP Companion: original physical US driver licence, passport, rental agreement, vehicle insurance certificate. Headlights on at all times — day and night, year-round, on all Croatian roads. Right-hand traffic (same as the US).",
	},

	whyNotEnough: {
		heading: 'Why your US licence alone is sometimes not enough',
		lead: "For most US tourists driving only in Croatia, your licence is enough in practice. The friction is at the border with Slovenia and in three rule differences Americans don't expect.",
		reasons: [
			{
				icon: 'mdi:car-light-high',
				title: 'The headlights rule — most common stop',
				text: "Croatia requires headlights on at all times — day and night, year-round, on all roads. This is not a fog or low-visibility rule. It's a permanent statutory requirement. US drivers don't encounter this at home — daytime running lights are standard on US cars but full-headlight enforcement isn't. Croatian police do check, and the on-the-spot fine for foreign plates is €40–90. Turn headlights on when you sit in the rental car and leave them on.",
			},
			{
				icon: 'ph:flag-bold',
				title: 'The Slovenia trap on shared itineraries',
				text: "Slovenia and Croatia are now both in Schengen (since January 2023), so there's no border passport check — but Slovenian traffic police do enforce the non-EU IDP requirement on the road. Documented accounts from US tourists describe fines in the hundreds of euros for non-EU drivers stopped without an IDP. The drive from Dubrovnik north to Venice, the Trieste–Croatia route, and most Plitvice + Ljubljana combinations all cross into Slovenia.",
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Major Croatian agencies — Hertz, Avis, Sixt, Budget — list IDP as required for non-EU licence holders in their booking conditions, then in practice usually proceed with a US licence alone. A few branches and most local Dalmatian operators apply the booking-conditions clause strictly. Having IDP Companion ready means the conversation never stalls at pickup.",
			},
		],
	},

	rules: {
		heading: 'Croatian driving rules US drivers should know',
		lead: 'Croatia drives on the RIGHT (same as the US) but the headlights rule and the under-25 zero-tolerance alcohol limit catch Americans.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — no adjustment needed' },
			{ icon: 'mdi:car-light-high', label: 'Headlights', value: 'On at all times', note: 'Day and night, year-round, on all roads; €40–90 fine if off' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '50 km/h', note: '30 km/h in marked residential and school zones' },
			{ icon: 'mdi:road-variant', label: 'Open road limit', value: '90 km/h', note: 'State roads outside built-up areas' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway (autocesta)', value: '130 km/h', note: 'Well-maintained; toll booths cash or card; speed cameras on sections' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC (25+)', note: '0.00% for drivers under 25 — zero tolerance, actively enforced at summer checkpoints' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Including at red lights; hands-free permitted' },
			{ icon: 'ph:warning-bold', label: 'Slovenia vignette', value: 'Required for motorways', note: 'Approx €16 for 7-day passenger-car vignette; buy before or at border (e-vignette.si)' },
		],
	},

	fines: {
		heading: '2026 fines in Croatia (and key Slovenia comparisons)',
		lead: "Croatia adopted the euro on January 1, 2023 — fines are now in EUR (older guides citing HRK are out of date). Foreign-plate vehicles typically settle on the spot.",
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:car-light-high', label: 'No headlights (daytime or night)', amount: '€40–90', severity: 'low', note: 'Most common tourist infraction; mandatory 24/7' },
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP (non-EU driver, Croatia)', amount: 'Up to ~€265', severity: 'med', note: 'Technically required; inconsistently applied for Latin-script licences' },
			{ icon: 'mdi:speedometer', label: 'Speeding up to 20 km/h over', amount: '€40–130', severity: 'low', note: 'On-the-spot for foreign plates' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 20–50 km/h over', amount: '€130–400+', severity: 'high', note: 'Camera and officer-issued' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€65–130', severity: 'med', note: 'Including at red lights' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% (25+) / any alcohol under 25', amount: 'From €200', severity: 'high', note: 'Suspension; criminal threshold above higher BAC' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€130–400', severity: 'high', note: '' },
			{ icon: 'ph:flag-bold', label: 'Slovenia: driving without IDP (non-EU)', amount: 'Several hundred €', severity: 'high', note: 'Enforced by traffic police on roads; Slovenia and Croatia are both Schengen so no border check' },
			{ icon: 'ph:warning-bold', label: 'Slovenia: no motorway vignette', amount: '€300–800', severity: 'high', note: '7-day vignette ~€16 at e-vignette.si or border petrol stations' },
		],
		caption: 'Sources: Croatian MUP (Ministarstvo unutarnjih poslova) traffic fine schedule 2026; Slovenian Prometna policija; DARS (Slovenian motorway authority) vignette pricing 2026.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Croatia — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown for the Croatia-only trip and the Croatia + Slovenia combined trip.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages, including English (the working tourist-area language in both Croatia and Slovenia at rental desks and police stops)',
				'A standardised layout that\'s easier for a Croatian or Slovenian agent to read than a US state-specific licence format',
				'An instant digital download — typically under 2 minutes from order to delivered PDF',
				'Designed to be carried alongside your physical US licence, not as a replacement',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical US driver\'s licence',
				'Not a Slovenian motorway vignette — that\'s a separate purchase (approx €16 for 7 days at e-vignette.si or border petrol stations)',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Croatia (and Slovenia)',
			items: [
				'At Croatian police stops where the officer applies the technical non-EU requirement rather than the practical custom of waving US licences through',
				'At Slovenian road checks where traffic police do enforce the non-EU IDP rule and write fines into the hundreds of euros',
				'At Croatian rental desks that apply their booking conditions for non-EU licences strictly (varies branch by branch)',
				'For onward travel: Bosnia, Montenegro, Serbia all have non-EU translation-document requirements that IDP Companion satisfies',
			],
		},
		needOfficial: {
			title: 'What Croatian and Slovenian authorities actually expect',
			items: [
				'Your physical valid US driver\'s licence — the actual authority to drive',
				'Your US passport — entry stamp may be checked at random road checks',
				'Rental agreement and proof of vehicle insurance certificate (green card or equivalent)',
				'Headlights on at all times in Croatia — the rule officers actually stop tourists for',
				'A Slovenian motorway vignette if any part of your route uses Slovenian motorways',
			],
		},
		pattern: "The pattern: in Croatia, the IDP is a document the law requires and practice rarely enforces for Latin-script licences. In Slovenia next door, traffic police do enforce it on the road. If both countries are on the itinerary, IDP Companion is the lower-cost way to remove the question. The headlights rule is the thing Croatia actually fines tourists for — turn them on when you sit down.",
	},

	renting: {
		heading: 'Renting a car in Croatia as a US driver',
		lead: "Croatia's rental market mixes international chains with strong local operators along the Dalmatian coast. Both types accept US licences in practice, with branch-by-branch variation on how strictly they apply non-EU booking conditions.",
		chains: [
			{ name: 'Hertz Croatia', policy: 'Available at Zagreb (ZAG), Split (SPU), and Dubrovnik (DBV) airports. Accepts US licence for non-EU renters at most locations. Booking conditions reference IDP for non-EU holders — IDP Companion satisfies this. Minimum age 21; under-25 surcharge. Credit card required for deposit.' },
			{ name: 'Avis Croatia', policy: 'Similar position. US licence accepted at most locations. Minimum age 21. Credit card deposit standard. Operates Budget under the same corporate group.' },
			{ name: 'Sixt Croatia', policy: 'Accepts US licences. Policy notes IDP required for licences not in Latin script — US licences are in Latin script and generally processed without IDP requirement at airport branches.' },
			{ name: 'Local Dalmatian operators (Split, Dubrovnik, Trogir, Korčula)', policy: "Generally accept US licences without IDP friction. Many local operators are experienced with American visitors and don't apply the non-EU requirement to Latin-script licences. Pricing competitive with international chains." },
		],
		tipsHeading: 'Practical tips for US drivers in Croatia',
		tips: [
			'Headlights on at all times — turn on when you sit down and leave on for the whole drive in Croatia',
			'Manual transmission is the norm; automatic available but more expensive and limited — book in advance for peak summer',
			'Island driving: rental agreements typically cover Jadrolinija ferry crossings to the main Dalmatian islands; confirm specifics before booking',
			'One-way rentals available Zagreb–Split or Split–Dubrovnik with drop-off fee — convenient for Adriatic coast itineraries',
			'Dubrovnik old city is car-free; park at Pile or Gruž before 8am in peak July–August or you\'ll circle for hours',
			'A1 motorway Zagreb–Split–Ploče is tolled — booths accept cash and card; keep €10–20 cash for tolls and parking',
			'Slovenia: buy the motorway vignette online at e-vignette.si before crossing, or at the first petrol station on the Slovenian side',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Croatia',
		lead: 'The realistic range of outcomes by itinerary type — Croatia-only vs Croatia + Slovenia.',
		items: [
			{
				severity: 'low',
				frequency: 'common (Croatia-only)',
				label: 'Croatia-only, US licence, no IDP, no problems',
				text: 'Practical standard. Police and rental companies accept US Latin-script licence at the vast majority of encounters. Most week-long Dalmatian coast trips end with zero documentation friction.',
			},
			{
				severity: 'low',
				frequency: 'common for US drivers',
				label: 'Headlights off during day, on-the-spot fine',
				text: '€40–90 paid in cash on the spot for foreign plates. The most common traffic stop US tourists experience in Croatia. Cause: forgetting that "daytime running lights" and "full headlights on" are different in Croatia.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Croatia road check, IDP requested',
				text: 'Technically required; officer may or may not pursue. Producing IDP Companion resolves the conversation within a minute. Producing nothing usually still results in a wave-through for US Latin-script licences but isn\'t guaranteed.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Croatia rental desk, IDP requested',
				text: 'Some agencies — particularly smaller local operators — apply the non-EU booking condition strictly. IDP Companion clears it. Without it, you may be asked to source one before pickup.',
			},
			{
				severity: 'high',
				frequency: 'common on multi-country Adriatic trips',
				label: 'Slovenia road check, no IDP',
				text: 'Slovenian traffic police do enforce the non-EU IDP requirement. Fines into the hundreds of euros are documented. No border passport check (both are Schengen) but on-road traffic enforcement applies.',
			},
			{
				severity: 'high',
				frequency: 'less common',
				label: 'Slovenia motorway, no vignette',
				text: '€300–800 fine. Vignette cameras cover all Slovenian motorways. 7-day vignette ~€16 — paying it before crossing is dramatically cheaper than getting caught without one.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'DUI under-25 zero tolerance, or 25+ over 0.05%',
				text: 'Active enforcement at summer island checkpoints and on coastal roads. Zero tolerance under 25 means any detectable alcohol is an offence — different from US 0.08% norm.',
			},
		],
		math: 'IDP Companion is $35. The Slovenia road-check fine for a non-EU driver without an IDP starts in the hundreds of euros. The Slovenian vignette is ~€16 for 7 days. All three are worth knowing before you drive north from Dubrovnik or east from Trieste.',
	},

	phrases: {
		heading: 'Useful Croatian phrases at rental desks and road checks',
		lead: 'Croatian police in tourist areas typically speak English; older officers on rural inland roads often don\'t. A few words of Croatian go a long way at unscripted moments.',
		items: [
			{ phrase: 'Evo moja vozačka dozvola', translation: 'Here is my licence', context: 'Handing over the physical US licence first' },
			{ phrase: 'I dokument prijevoda', translation: 'And the translation document', context: 'Showing IDP Companion alongside' },
			{ phrase: 'Ja sam američki turist', translation: 'I\'m an American tourist', context: 'Establishes context at a road check' },
			{ phrase: 'Ne razumijem hrvatski', translation: 'I don\'t understand Croatian', context: 'Honest disclosure — most officers in tourist areas switch to English' },
			{ phrase: 'Ima li problema?', translation: 'Is there a problem?', context: 'Polite opener at a checkpoint' },
			{ phrase: 'Imam osiguranje', translation: 'I have insurance', context: 'In case of accident or paperwork question' },
			{ phrase: 'Trebam nazvati rent-a-car tvrtku', translation: 'I need to call the rental company', context: '24/7 helpline is on every rental contract' },
			{ phrase: 'Svjetla — upalit ću ih odmah', translation: "My headlights — I'll turn them on now", context: 'If stopped specifically for headlights off' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Croatia (US citizens)',
		lead: 'Croatia is one of the more forgiving European destinations for US drivers — right-hand traffic, good motorways, English signage in tourist areas. Five steps cover it.',
		schemaName: 'How to prepare for driving in Croatia as a US citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired or temporary paper licences are not accepted at Croatian rental desks.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. Covers Croatian rental-desk booking-condition checks and — crucially — Slovenian on-road traffic enforcement if any part of your itinerary crosses into Slovenia.',
			},
			{
				title: 'Map your itinerary against the Slovenia border',
				text: 'If you cross into Slovenia at any point — Plitvice via the north, Soča Valley, Bled, Ljubljana, Dubrovnik-to-Venice transit — buy a Slovenian motorway vignette at e-vignette.si before you cross. Approx €16 for 7 days, much cheaper than the €300–800 no-vignette fine.',
			},
			{
				title: 'Remember the headlights rule',
				text: 'Headlights on at all times in Croatia — day and night, year-round, on every road. Turn them on when you sit in the rental car and leave them on for the whole trip. This is the rule Croatian police actually stop tourists for.',
			},
			{
				title: 'Carry the documentation set',
				text: 'Physical US licence + US passport + rental contract + insurance certificate + IDP Companion in one folder. This combination clears every Croatian rental desk, every road check, and every Slovenian traffic enforcement encounter.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do US tourists legally need an IDP in Croatia?',
				answer: 'Technically yes — Croatian traffic law requires non-EU drivers to carry an IDP alongside their national licence. In practice, US English-language licences in Latin script are accepted at the vast majority of rental desks and police stops without IDP discussion. The legal requirement exists; the practical enforcement for Latin-script licences is inconsistent.',
			},
			{
				id: 2,
				question: 'What about Slovenia on the same trip?',
				answer: 'Slovenian traffic police do enforce the non-EU IDP requirement on the road. Documented accounts from US tourists describe fines in the hundreds of euros for non-EU drivers stopped without an IDP. Slovenia and Croatia are both in Schengen so there\'s no passport check at the border — but on-road traffic enforcement applies normally. If any part of your itinerary crosses into Slovenia, carry an IDP before you go.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document. It is not a government IDP under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your original US licence as the translation aid most Croatian and Slovenian rental agencies and police accept for non-EU licence verification.',
			},
			{
				id: 4,
				question: 'Do I need to buy a vignette for Slovenia?',
				answer: 'Yes if you use Slovenian motorways. As of 2026, the 7-day passenger-car vignette costs approximately €16. Buy at e-vignette.si before your trip, at border petrol stations entering Slovenia, or at the first Slovenian petrol station after crossing. Motorway cameras cover all Slovenian motorway sections — the fine for driving without one is €300–800.',
			},
			{
				id: 5,
				question: 'Why do headlights matter so much in Croatia?',
				answer: 'Croatia requires headlights on at all times — day and night, year-round, on all roads. This is a continuous statutory requirement, not a low-visibility rule. US drivers don\'t encounter this at home. The on-the-spot fine is €40–90 for foreign plates and is the most common reason US tourists are stopped in Croatia. Turn headlights on when you sit in the rental car and leave them on.',
			},
			{
				id: 6,
				question: "What's the alcohol rule for younger drivers?",
				answer: 'Croatia applies 0.05% BAC for drivers 25 and older — already stricter than most US states (0.08%). For drivers under 25, the limit is 0.00% — zero tolerance. Any detectable alcohol is an offence. Actively enforced at summer island checkpoints and on coastal roads during tourist season.',
			},
			{
				id: 7,
				question: 'Is Plitvice Lakes in Croatia or Slovenia?',
				answer: 'Plitvice Lakes National Park is in Croatia — no Slovenian border crossing is required to visit it from Zagreb or Split. You stay within Croatia the entire time. The confusion arises because Plitvice is in inland northern Croatia, geographically close to the Slovenian border, and some routing apps suggest crossing briefly into Slovenia depending on the approach route. Stay on the D1 or the A1 connection and you remain in Croatia.',
			},
			{
				id: 8,
				question: 'Can I take a Croatian rental car onto the islands?',
				answer: 'Yes — Jadrolinija ferries carry vehicles between the Croatian mainland and the main Dalmatian islands (Brač, Hvar, Korčula, Vis, etc.). Most rental agreements permit this; some restrict specific islands or require confirmation at booking. Check your rental agreement before booking a ferry crossing. The car ferry to Hvar (Stari Grad) is the most-used route in summer.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to European destinations where the IDP question varies.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain' },
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece' },
			{ flagFrom: 'us', flagTo: 'pt', label: 'US → Portugal', status: 'Coming soon' },
			{ flagFrom: 'us', flagTo: 'si', label: 'US → Slovenia', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Croatia is relaxed. Slovenia next door is not.',
		text: "Croatia accepts US English licences in practice. Slovenia, often on the same Adriatic itinerary, enforces the non-EU IDP rule on the road with fines into the hundreds of euros. IDP Companion takes two minutes, covers both legal requirements on a single document, and clears the rental-desk booking-condition check. Turn your headlights on when you sit down — that's the part Croatia will actually stop you for.",
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Croatian Ministry of the Interior (MUP), the Croatian Traffic Police, the Slovenian Prometna policija, or DARS (the Slovenian motorway authority). IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Croatian MUP (Ministarstvo unutarnjih poslova) — traffic fine schedule 2026 — gov.hr',
			'Slovenian Prometna policija — IDP enforcement for non-EU drivers — policija.si',
			'DARS — Slovenian motorway vignette pricing — dars.si',
			'Slovenia e-vignette portal — evignette.si',
			'RAC — Driving in Croatia guide (updated January 2026) — rac.co.uk',
			'Jadrolinija — vehicle ferry routes, Dalmatian islands — jadrolinija.hr',
			'US Embassy in Zagreb — driving advisory — hr.usembassy.gov',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Croatia',
	},
};

export const usCroatiaCopy: Record<'en', CountryPairCopy> = { en };
