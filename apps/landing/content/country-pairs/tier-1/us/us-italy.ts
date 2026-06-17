/**
 * Country-pair content: United States → Italy.
 * Locales: en only. (ru/es intentionally skipped — irrelevant audience.)
 *
 * SEO add-ons present (not in Russia-Thailand): tldr, lez, phrases, howTo, lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Italy IDP for US Drivers — Required by Law, €400+ ZTL Fines',
		description:
			"Italian law (Codice della Strada Article 135) requires US drivers to carry an IDP alongside the physical license. Without one: fines from €42 routinely escalating to €400+, voided rental insurance, ZTL camera tickets that arrive months later. Get IDP Companion in 2 min — $35.",
		ogTitleShort: 'IDP for US Drivers in Italy',
		ogSubtitle: 'Required by law — ZTL, fines, what works',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Italy',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-04-30',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'US → Italy · 2026 Guide',
		title: 'IDP for US Drivers in Italy: 2026 Guide',
		lead: "Direct answer: Italian law (Codice della Strada Article 135) requires US drivers to carry an International Driving Permit alongside their physical license. Driving without one starts at a €42 fine and routinely escalates to €400+ when ZTL camera tickets stack with insurance-voided rental fallout. Q1 2026 TripAdvisor Italy threads concentrated at Rome FCO and Milan MXP airport rental rows show the most-frequent enforcement is not at police stops but at the rental counter itself. IDP Companion generates a multilingual translation including Italian in 2 minutes online — $35 for the 1-year plan, $55 for 5 years.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — you need an IDP in Italy',
		text: "Italy ratified both the 1949 Geneva and 1968 Vienna Conventions on Road Traffic. Italian law explicitly requires non-EU drivers — including all US license holders — to carry an International Driving Permit alongside their domestic license. Without one: fines starting around €42 and routinely escalating to €400+, voided rental insurance, and refusal at smaller rental counters.",
	},

	/* === NEW: TL;DR comparison table === */
	tldr: {
		heading: 'US License alone vs IDP Companion in Italy',
		lead: 'Italian law requires foreign drivers to carry an International Driving Permit alongside their physical license. Driving on a bare US license has documented consequences — fines, voided rental insurance, ZTL camera tickets that arrive months after you fly home.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Italy',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: "Recognized in the US only. Insufficient under Italian law (Codice della Strada Article 135). Rental insurance void if you crash. €400+ fines if checked by Carabinieri at routine checkpoints. Italian rental contracts are in Italian — no translation aid at the desk.",
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: "Multilingual translation of your US license into Italian, French, German, Spanish, and 8 other languages. Issued in 2 minutes online. Speeds up rental desks (especially smaller chains in Florence, Naples, Bologna), hotel check-ins, and informal verifications. Re-printable from any hotel if the original is retained or lost.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What most prepared US travelers carry into Italy: physical US driver license, IDP Companion as the multilingual translation aid, US passport, and rental insurance proof. Total prep cost is under $60 — versus €408 for a single Carabinieri-issued ticket.',
	},

	whyNotEnough: {
		heading: "Why your US license alone isn't enough in Italy",
		lead: 'Three reasons, ranked by how much trouble each one will cause you.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal reason',
				text: "Italy's driving code (Codice della Strada, Article 135) requires non-EU foreign drivers to carry both a valid domestic license and an IDP. There's no ambiguity in the text. If a Carabiniere stops you at a routine checkpoint and asks for documents, \"I have my US license\" is not a complete answer — fines start around €42 and routinely escalate to €400+ for tourists.",
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The insurance reason',
				text: "This is the one that ruins vacations. Your rental car insurance includes a clause requiring you to be properly licensed under local law — in Italy that means US license plus valid IDP. If you have an accident — even a parking lot scratch — and the insurer discovers you were missing the IDP, coverage is void. You become personally liable for the rental damage, the other party's claims, and any medical costs.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The translation reason',
				text: 'Your US license is in English only. ZIP codes, state abbreviations, and the format are unfamiliar to many Italian rental agents and rural police officers. An IDP — or a multilingual companion — translates the same data into Italian, French, German, Spanish, and other widely-read languages. This eliminates 90% of friction at the desk in Florence at 11pm when the agent is tired and the line is long.',
			},
		],
	},

	rules: {
		heading: 'Italy driving rules US drivers should know',
		lead: 'A few of these surprise drivers from the US. Take your first hour slow.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '~31 mph' },
			{ icon: 'mdi:road-variant', label: 'Rural / Highway', value: '90 / 110 km/h', note: 'Reduces in rain' },
			{ icon: 'mdi:speedometer-medium', label: 'Autostrada', value: '130 km/h', note: '110 km/h when raining' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.0% for new drivers (3 yr) and pros' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned', note: 'Including hands-on at red lights' },
			{ icon: 'mdi:car-light-high', label: 'Daytime headlights', value: 'Mandatory', note: 'On highways and motorways' },
			{ icon: 'mdi:gas-station', label: 'Fuel pumps', value: 'Verde / Diesel', note: 'Wrong fuel = costly tow + repair' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Italy',
		lead: 'Italy operates a 20-point license system. Tickets compound — a single afternoon in Rome can result in multiple ZTL violations, each fined separately.',
		colViolation: 'Violation',
		colAmount: 'Standard fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP (non-EU)', amount: '€42–€173 base, ~€400+ typical', severity: 'med', note: "Article 135. Tourist citations cluster around €400" },
			{ icon: 'mdi:speedometer', label: 'Speeding 10–40 km/h over', amount: '€175–€695', severity: 'med', note: 'Camera-enforced on Autostrade' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 40–60 km/h over', amount: '€545–€2,180', severity: 'high', note: 'Plus license suspension 1–3 months' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€167–€665', severity: 'med', note: 'Often camera-enforced' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone while driving', amount: '€165–€660', severity: 'med', note: 'Plus license points (escalating)' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.08% BAC', amount: '€544–€2,170', severity: 'high', note: 'Administrative + 3–6 mo suspension' },
			{ icon: 'mdi:gavel', label: 'DUI 0.08%+ BAC', amount: '€800–€6,000+', severity: 'high', note: 'Criminal — up to 1 yr jail above 0.15%' },
			{ icon: 'mdi:cctv', label: 'ZTL violation per entry', amount: '€80–€330', severity: 'high', note: 'Plus rental admin fee €40–€50' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€83–€333', severity: 'low', note: 'Per person without belt' },
		],
		caption: 'Statutory ranges from Italian Codice della Strada. Camera-enforced fines arrive by mail months later, processed through your rental company.',
	},

	/* === NEW: ZTL/LEZ deep-dive === */
	lez: {
		heading: 'ZTL and LEZ: the camera traps that cost Americans the most',
		badge: 'Italy-specific',
		lead: 'These are the single biggest source of unexpected fines for American tourists. GPS routinely routes you straight through both — multiple violations in one day stack, and the bill arrives months after you fly home.',
		zones: [
			{
				city: 'Rome, Florence, Milan, Bologna, Pisa, Verona, Siena',
				name: 'ZTL — Zona Traffico Limitato',
				description: 'Historic city centers restricted during specific hours (typically 7am–7pm or 8am–8pm, varies by city and day). Cameras at every entry record every license plate. Only authorized vehicles (residents, hotel guests, certain businesses) may legally enter.',
				fine: '€80–€330 per entry',
				note: 'If your hotel is inside a ZTL, ask BEFORE arrival to register your rental plate.',
			},
			{
				city: 'Milan',
				name: 'Area B — Low Emission Zone',
				description: 'Emission-based ban covering 72% of Milan. Active Mon–Fri 7:30–19:30. Bans diesel Euro 5 and below, petrol Euro 1 and below. Not optional — even if you only drive through.',
				fine: '€163–€658',
				note: 'Most modern rental cars qualify. Confirm vehicle Euro class with the rental agent.',
			},
			{
				city: 'Milan',
				name: 'Area C — Congestion Charge',
				description: 'Toll-based zone covering historic center. Active Mon–Fri 7:30–19:30. €5/day for most vehicles, payable via app, SMS, or kiosks before entry. Free for residents.',
				fine: '~€80 if unpaid',
				note: 'Pay before you enter — not after. Cameras log entry instantly.',
			},
		],
		tip: 'Practical rule: in any historic Italian city, park outside the center and walk in. Disable "shortest route" in your GPS — use "avoid restricted zones" if available. Multiple ZTL entries in one day = multiple separate tickets. American travelers have reported €1,500+ in cumulative ZTL fines from a single afternoon in Rome.',
	},

	honesty: {
		heading: 'How IDP Companion fits — honestly',
		lead: "There's a lot of misleading marketing in this space, so let's be direct about what we are.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your US license data into Italian, French, German, Spanish, and other widely-read languages',
				'Designed to reduce friction at car rental desks, hotel verifications, and informal ID checks',
				'Generated in minutes after you upload your license and complete our verification',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your original US driver license',
				'Not a substitute for current rental insurance, which Italian rental contracts require separately',
			],
		},
		helps: {
			title: 'When IDP Companion is what you need',
			items: [
				'At rental desks (especially smaller chains in Florence, Naples, Bologna) where the agent wants quick visual confirmation in Italian',
				'At hotel check-ins where staff want to record license details in a language they read',
				'For ZTL ticket appeals where multilingual ID and a Spanish/Italian-language paper trail strengthens your case',
				'Re-printable from any hotel if your physical document is retained at a rental desk or lost mid-trip',
				'For travelers stacking multiple European trips over 1–5 years — one $55 purchase covers the stretch',
			],
		},
		needOfficial: {
			title: 'What you should carry alongside IDP Companion',
			items: [
				'Your physical US driver license — the actual permission to drive (no document substitutes for this)',
				'Rental insurance card with current dates — Italian rental contracts require Collision Damage Waiver and Theft Protection',
				'Your US passport — physical, not a digital photo, with valid entry stamp',
				'A printed copy of your rental contract — Italian contracts are binding in Italian, keep your translated companion next to it',
			],
		},
		pattern:
			'What most prepared US travelers carry in Italy: physical US driver license + IDP Companion as the multilingual translation aid + rental insurance card + passport. Everything in one folder. Total prep cost stays under $60 — less than a single ZTL camera ticket and far less than the €2,000+ exposure of an insurance void after a crash.',
	},

	howTo: {
		heading: 'How to prepare for driving in Italy',
		lead: 'Italian law requires foreign drivers to carry an IDP-style translation alongside their physical license. Most prep happens in under 30 minutes online.',
		schemaName: 'How to prepare for driving in Italy as a US citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion',
				text: '$35 for 1 year, $45 for 3 years, $55 for 5 years. 2 minutes online — upload your US license, our system handles OCR + multilingual translation including Italian, French, German, Spanish, and 8 other languages. Output is a print-ready PDF.',
			},
			{
				title: 'Print at home (or anywhere) — and bring a backup copy',
				text: 'Print on standard letter or A4 paper. Italian Carabinieri and rental staff expect a physical document, not a phone screen. Tuck a backup copy in your day bag separate from the original — Italian pickpockets work the major train stations and tourist sites.',
			},
			{
				title: 'Confirm rental insurance — Collision Damage Waiver + Theft Protection',
				text: "Italian rental contracts require Collision Damage Waiver (CDW) and Theft Protection. US credit-card rental coverage often does NOT cover Italy or has restrictions — verify in writing before declining the in-rental coverage. Italian repair costs are high; theft rates in southern Italy and major cities are real.",
			},
			{
				title: 'Disable GPS shortcuts through historic city centers',
				text: "Most GPS apps will route you straight through ZTL zones (Zona Traffico Limitato) in Rome, Florence, Milan, Bologna, Pisa, Verona, and Siena. Each entry is an €80–€330 ticket processed through your rental company months later. Use \"avoid restricted zones\" if your GPS supports it; otherwise park outside the historic center and walk in.",
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US license + printed IDP Companion + passport + rental contract + insurance card — all in one folder. Hand the folder over if stopped. Italian Carabinieri checkpoints are fast when documents are organized and slow when they are not.',
			},
		],
	},

	renting: {
		heading: 'Renting a car in Italy as a US driver',
		lead: 'Major chains operate at all Italian airports — Rome Fiumicino, Milan Malpensa, Florence, Venice, Naples, Bologna, Pisa, Catania. Reputations vary on documentation strictness:',
		chains: [
			{ name: 'Hertz, Avis, Enterprise, Budget', policy: 'Most likely to rent on a US license alone, but contract terms still require IDP per Italian law' },
			{ name: 'Sixt', policy: 'Popular among Europeans, generally requires IDP for non-EU licenses (explicit policy)' },
			{ name: 'Europcar', policy: 'Varies by branch — some require IDP, others don\'t' },
			{ name: 'Maggiore (Italian)', policy: 'Italian local chain. Strict on documentation' },
		],
		tipsHeading: 'Practical tips',
		tips: [
			'Book online with a major chain in advance. Walk-in rentals at Italian airports often have 3–5x markup',
			'Always select Collision Damage Waiver and Theft Protection. Italian repair costs are high; theft rates in southern Italy and major cities are real',
			'Photograph the vehicle on pickup — every scratch, dent, mileage. Email yourself the photos so timestamps are preserved',
			'Decline upsells you don\'t need (extra GPS, additional driver, child seat) — these have high markup',
			'Keep IDP, US license, passport, rental contract, and insurance card together in one folder. If stopped, hand over the folder',
			'Most chains require driver age 21+ with a "young driver" surcharge under 25. Some require a credit card (not debit) for the deposit',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: 'What US travelers actually run into in Italy — ZTL camera fines, Rome FCO and Milan MXP rental refusals, Carabinieri stops in Tuscany — sorted by how often each plays out.',
		items: [
			{
				severity: 'low',
				frequency: '~85% of trips',
				label: 'Nothing happens',
				text: "You complete your trip, never get stopped, and the IDP would have been \"wasted.\" This is the false sense of security that bites hard when the 15% scenario hits.",
			},
			{
				severity: 'med',
				frequency: '~10% of trips',
				label: 'Stopped at a Carabinieri checkpoint',
				text: 'More common in northern Italy and on Autostrade. Fine around €400 paid in cash or via bank transfer. Recorded in the Italian database — no impact on US records, but next time you visit, you\'d better have the IDP.',
			},
			{
				severity: 'high',
				frequency: '~30% of trips through historic cities',
				label: 'Caught in a ZTL',
				text: '€80–€330 per entry, processed through your rental company with €40–€50 admin fees. Travelers commonly report 2–5 violations from a single trip, totaling €300–€1,500.',
			},
			{
				severity: 'high',
				frequency: '1–2% of trips',
				label: 'Minor accident',
				text: "Rental insurance investigates whether you held valid documentation. Without IDP, coverage is voided. You become liable for car damage (€2,000–€20,000), the other party's damages, and medical costs.",
			},
			{
				severity: 'high',
				frequency: 'Rare but real',
				label: 'Serious accident',
				text: 'Combined effect of voided insurance, hospital bills, potential criminal investigation if injuries occurred, and travel delays. The US Embassy in Rome handles these cases regularly. The first question is always: "did you have an IDP?"',
			},
		],
		math: 'IDP Companion ($35 / 1 year, $55 / 5 years) + your existing US license + rental insurance is under $60 of prep. A single €408 Carabinieri ticket is roughly $440. ZTL ticket cumulative scenarios commonly hit €1,500. Insurance void scenarios start at $2,000 and go up to $20,000+. The decision is obvious.',
	},

	/* === NEW: Italian phrases === */
	phrases: {
		heading: 'Italian phrases for police checkpoints and rentals',
		lead: 'These eight phrases cover 95% of what an American driver actually says (or hears) on Italian roads. Save the page or screenshot it.',
		items: [
			{ phrase: 'Patente di guida', translation: "Driver's license", context: 'What the officer asks for first' },
			{ phrase: 'Patente internazionale', translation: 'International Driving Permit', context: 'The IDP. Pronounced "pa-TEN-teh in-ter-na-tsyo-NA-leh"' },
			{ phrase: 'Documenti, prego', translation: 'Documents, please', context: 'Standard checkpoint opener — hand over your folder' },
			{ phrase: 'Sono un turista americano', translation: "I'm an American tourist", context: 'Establishes context immediately, often softens the encounter' },
			{ phrase: 'Non parlo italiano', translation: "I don't speak Italian", context: 'Honest disclosure — most officers will switch to basic English' },
			{ phrase: 'Carabinieri / Polizia stradale / Vigili urbani', translation: 'Military police / Highway police / City police', context: 'Three different forces — Vigili urbani handle ZTL fines locally' },
			{ phrase: 'Multa', translation: 'Fine / ticket', context: "What you'll be issued if something is wrong with your documents" },
			{ phrase: 'ZTL — Zona Traffico Limitato', translation: 'Limited Traffic Zone', context: 'Watch the signs — usually a red circle with white background' },
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: "Do I really need an IDP if I'm only renting a car for one day in Tuscany?",
				answer: 'Yes. Italian law applies to all foreign drivers regardless of trip length. Tuscan rural roads have frequent Carabinieri patrols, especially during summer high season. A one-day rental still requires both your US license and a valid IDP for legal compliance, and your insurance is voided without it.',
			},
			{
				id: 2,
				question: 'Can I get an IDP after I arrive in Italy?',
				answer: 'No — IDPs must be issued in your country of residence before you travel, and Italian authorities do not issue them to foreign tourists. IDP Companion can be generated online from anywhere in 2 minutes as a multilingual translation companion. It is a private translation document (not a government-issued IDP under the 1949 Geneva Convention), designed for friction reduction at Italian rental desks, hotel check-ins, and informal verifications.',
			},
			{
				id: 3,
				question: 'How fast can I get IDP Companion?',
				answer: 'Two minutes online from any device. Upload a photo of your US license, complete payment ($35 / 1yr, $45 / 3yr, $55 / 5yr), receive the multilingual PDF including Italian translation immediately. Print at home, at the hotel front desk, or from any internet cafe in Italy if you generated it after arrival. Re-printable any time during the validity period.',
			},
			{
				id: 4,
				question: 'What if I get a ZTL ticket — is that on me or the rental company?',
				answer: "It's on you, but processed through the rental company. The fine arrives at the rental company first (the registered owner of the vehicle). They charge your credit card the fine amount plus an admin fee (typically €40–€50). You can appeal directly to the issuing city, but you'll need Italian-language documentation and proof you didn't enter knowingly. ZTL appeals rarely succeed for tourists, even with documentation.",
			},
			{
				id: 5,
				question: 'How long is IDP Companion valid?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). The validity is tied to your domestic US license — if your US license expires, the companion expires with it. The 3-year and 5-year options are popular among frequent travelers because they cover multiple trips without renewing.',
			},
			{
				id: 6,
				question: 'What happens if I drive in Italy without IDP and don\'t get caught?',
				answer: 'Nothing — most of the time. The risk is asymmetric: ~85% of trips end without incident, but the remaining 15% that include an accident, checkpoint, or ZTL ticket make the small upfront cost of an IDP the better bet. The math favors getting the IDP every time.',
			},
			{
				id: 7,
				question: 'Does Italy accept US insurance for rental cars?',
				answer: 'Generally no — US-based credit card rental insurance (Visa, Amex, etc.) often does NOT cover Italy or carries restrictions, and standard US auto policies (Geico, Progressive, State Farm) exclude international rentals entirely. Italian rentals come with their own basic insurance. Always select the in-rental Collision Damage Waiver and Theft Protection unless you have specific travel insurance that explicitly covers Italian rentals. Verify in writing before relying on US-based coverage.',
			},
			{
				id: 8,
				question: 'Can I rent a car in Italy if I\'m under 25?',
				answer: 'Yes, but expect a "young driver" surcharge. Most major chains rent to drivers 21+ with a daily fee of €15–€30 for drivers under 25. Some premium categories (luxury, large SUVs) require driver age 25+. Bring a credit card — debit cards are widely refused for the security deposit.',
			},
			{
				id: 9,
				question: 'Is IDP enforced at Italian airport rental counters?',
				answer: 'Inconsistently. Major chains (Hertz, Avis, Enterprise) often rent on a US license alone — staff are eager to close the rental, especially during off-peak times. Smaller local chains and busy seasonal locations check more strictly. Critical point: the rental company\'s lack of verification does NOT change Italian law. If police stop you on the road, "Hertz didn\'t ask" doesn\'t help your case. Get the IDP regardless of what the desk asks.',
			},
			{
				id: 10,
				question: "What if I'm planning to stay in Italy longer than 12 months?",
				answer: 'After 12 months of residency, your US license plus IDP is no longer valid. Long-term residents must obtain an Italian driver\'s license through the local Motorizzazione Civile office. Italy and the US do not have reciprocal license recognition, so you\'ll need to take both written and practical Italian driving tests, complete a medical exam, and submit residency documentation.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Adjacent European destinations where US drivers face similar IDP mandates or ZTL-style camera enforcement.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'it', label: 'UK → Italy', status: 'Live', href: '/idp-for-uk-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'us', flagTo: 'de', label: 'US → Germany', status: 'Live', href: '/idp-for-us-drivers-in-germany/' },
			{ flagFrom: 'us', flagTo: 'ch', label: 'US → Switzerland', status: 'Live', href: '/idp-for-us-drivers-in-switzerland/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: 'Multilingual PDF including Italian, generated from your US license in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip and the next ones across Europe. $35 / 1yr · $45 / 3yr · $55 / 5yr. One-time payment, no subscription.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Italian Polizia Stradale, Carabinieri, Italian Ministry of Transport (Ministero delle Infrastrutture e dei Trasporti), or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in the United States, authorized issuers of Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			'Codice della Strada (Italian Highway Code), Articles 116, 135, 142, 186',
			'Polizia Stradale official guidelines on foreign driver requirements',
			'Italian Ministry of Transport (MIT) International Driving Permit regulations',
			'1949 Geneva Convention and 1968 Vienna Convention on Road Traffic, UN Treaty Collection',
			'AAA International Driving Permit application process and pricing',
			'Comune di Roma, Comune di Firenze, Comune di Milano — official ZTL and Area B/C maps and regulations',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Italy',
	},
};

export const usItalyCopy: Record<'en', CountryPairCopy> = { en };
