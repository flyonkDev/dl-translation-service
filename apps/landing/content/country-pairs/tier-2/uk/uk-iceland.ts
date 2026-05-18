/**
 * Country-pair content: United Kingdom → Iceland.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Samgöngustofa accepts UK photocard for tourist driving
 * without IDP — UK gov.uk Iceland advice confirms. The page's distinctive
 * content is Iceland's rental-insurance ecosystem: wind-damaged doors (a
 * documented insurance-excluded incident), gravel protection waiver,
 * SADW for South Coast sand+ash, F-road authorisation (4WD-only, summer
 * only), river-crossing exclusions (no insurance covers them on any
 * rental). The listed $30/day rate becomes $80–100/day all-in.
 *
 * PDF LANGUAGE COMPLIANCE (binding per CLAUDE.md):
 * Icelandic is NOT on the IDP Companion template. Verified PDF set is
 * EN, FR, ES, DE, IT, PT, VI, RU, AR, ZH, JA, TH = 12 languages.
 * Approved framing: reframe through English. Iceland has the highest
 * English proficiency outside native-English-speaking countries (EF EPI
 * Index 2024 — verifiable), so English-readable IDP Companion is
 * universally functional at Keflavik rental desks and Lögreglan stops.
 * Do NOT claim "Icelandic" anywhere as a PDF language.
 *
 * Middle-pivot: clean — no AA / RAC / PayPoint recommendations anywhere
 * except the single legal disclaimer line. PayPoint replaces Post Office
 * per March 2024 change.
 *
 * SEO add-ons present: tldr, phrases (8 Icelandic items for cultural
 * value — teaches the user, not the PDF), howTo, lastReviewed.
 * NO lez block — Iceland doesn't have ZTL/ZFE equivalents; the distinctive
 * waiver-stack content already lives in whyNotEnough + renting tips.
 * NO alphabet block (Icelandic Latin extended, all signs readable).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Iceland: 2026 Waivers & F-Roads',
		description:
			"UK photocard accepted in Iceland — no IDP needed. But wind rips car doors off, F-roads are 4WD-summer-only by law, and the rental waiver stack triples your $30/day rate. Honest 2026 guide.",
		ogTitleShort: 'UK Drivers in Iceland: Wind & Waivers',
		ogSubtitle: "Photocard works. Wind, gravel and rivers don't read paper",
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Iceland',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Iceland · 2026 Guide',
		title: 'IDP for UK Drivers in Iceland: 2026 Wind, Waivers & F-Roads',
		lead: "You've picked up a Dacia Duster at Keflavik International in early March for an eight-day winter loop along the South Coast and the Golden Circle. Your UK photocard is in English, the Icelandic Transport Authority (Samgöngustofa) accepts it for tourist driving without an IDP, and the legal answer is clean. What the rental confirmation didn't mention: Icelandic wind routinely rips car doors off their hinges at fuel stations and viewpoints — and rental contracts specifically exclude wind-damaged doors from CDW. Yes, that's a real clause. Standard rentals are also restricted from F-roads (mountain interior roads, summer-only and 4WD-only by Icelandic law), and a river crossing on any rental voids all damage cover. The listed $30/day rate becomes $80–100/day once you've added the waivers Iceland's geography actually requires. None of this is the IDP question.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — Samgöngustofa accepts UK photocards for tourist driving',
		text: "Iceland accepts UK photocard driving licences for tourist driving without translation or an International Driving Permit. Iceland is in the EEA and Schengen (though not the EU), and post-Brexit UK driving recognition continues through the EEA framework. UK gov.uk Iceland advice explicitly confirms no IDP is required. Iceland is party to the 1949 Geneva Convention. Long-stay residents must eventually exchange for an Icelandic licence — tourists almost never reach that threshold. The larger budget question for any Iceland trip is the rental-insurance waiver stack.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Iceland',
		lead: "For a UK tourist driving in Iceland, your original UK photocard licence is the legally required document. IDP Companion is a multilingual translation companion — useful at the Keflavik rental counter and at Lögreglan police interactions where English-language paperwork is the working language. The bigger budget gate is the waiver stack.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Iceland',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Legally accepted by Samgöngustofa for tourist driving without translation or IDP. UK gov.uk Iceland advice confirms. Major chains (Hertz, Avis, Europcar) and Icelandic-local operators (Blue Car Rental, Lava, Reykjavik Cars) accept it at Keflavik International (KEF) without supplementary documentation.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: "Multilingual digital PDF presenting your UK licence in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Iceland operates universally in English at every tourist-facing rental desk and Lögreglan police interaction (Iceland has the highest English proficiency outside native-English-speaking countries per the EF EPI Index) — so English on the IDP Companion is the working-language route. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Iceland: original UK photocard + UK passport + rental contract + insurance documentation (provided by the rental company; review what's covered). The waiver stack (Gravel Protection, Sand-and-Ash Damage Waiver, CDW excess buy-down, theft cover, F-road authorisation if planned) is a separate budget item routinely doubling the listed daily rate.",
	},

	whyNotEnough: {
		heading: 'Why your UK licence creates rental-waiver friction in Iceland',
		lead: "Legally your photocard is enough — Samgöngustofa confirms. Practically, Iceland's terrain and weather create rental-damage scenarios that aren't covered by standard CDW.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz Iceland, Avis Iceland, Europcar, Budget, Blue Car Rental, Lava Car Rental and Reykjavik Cars each set their own internal verification policy at Keflavik International. Some branches request an IDP at pickup during peak summer (June–August) and winter Northern Lights season (December–February) even when Icelandic law doesn't require it. The translation companion clears the question in writing.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The waiver-stack reason',
				text: "Iceland's distinctive rental-insurance ecosystem: standard CDW typically excludes wind damage (Icelandic gusts rip doors off hinges), gravel damage on partly-gravelled roads (separate Gravel Protection waiver, ~€10–15/day), sand-and-ash damage on the South Coast (separate SADW waiver, ~€10/day), F-road damage (mountain roads, summer only, 4WD-only by law, separate authorisation required), and river crossings (no insurance covers river crossings on any rental — full stop). The $30/day listed rate becomes $80–100/day with full coverage.",
			},
			{
				icon: 'ph:scales-bold',
				title: 'The environment reason',
				text: "Iceland's weather is the actor. Wind gusts of 30 m/s+ pull car doors open with such force that hinges fail at fuel stations and viewpoints. Single-lane bridges (einbreið brú) are common. Sheep cross rural roads in summer. Many F-roads close September through July. The Ring Road itself can close in winter storm conditions. Check road.is for current conditions before any longer drive. The legal-question answer is clean; the operational risk is in the geography.",
			},
		],
	},

	rules: {
		heading: 'Iceland driving rules UK drivers should know',
		lead: 'Wind discipline, F-road restrictions and always-on headlights are the operational outliers. Right-hand traffic is the day-one adjustment from UK left-hand habit.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; deliberate attention required especially at roundabouts' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in residential zones' },
			{ icon: 'mdi:road-variant', label: 'Gravel rural road', value: '80 km/h', note: 'Lower in practice; gravel kicks up at higher speed and damages paint' },
			{ icon: 'mdi:speedometer-medium', label: 'Paved rural / Ring Road', value: '90 km/h', note: 'Iceland has no motorways; Route 1 is the main paved artery' },
			{ icon: 'mdi:car-light-high', label: 'Headlights', value: 'Mandatory always', note: 'Day and night, year-round; modern rentals automatic' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Strictly enforced; severe penalties for any positive reading' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Hands-free OK; ISK 40,000+ (~£240) for handheld' },
			{ icon: 'mdi:car-multiple', label: 'F-roads', value: '4WD-only, summer only', note: 'Late June – early September; standard 2WD rentals explicitly excluded' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Iceland',
		lead: 'Icelandic fines are set under national traffic law and indexed periodically. Camera-issued tickets are forwarded by the rental company to your UK card on file plus a typical ISK 5,000 admin fee.',
		colViolation: 'Violation',
		colAmount: 'Fine (ISK / GBP)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding <10 km/h over (50 zone)', amount: 'ISK 5,000 (~£30)', note: 'Camera-enforced on Ring Road and Reykjavik arterials', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 10–20 km/h over', amount: 'ISK 15,000+ (~£90)', note: 'Mobile camera vans operate on Ring Road', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 20+ km/h over', amount: 'ISK 30,000–60,000+ (~£180–360)', note: 'Aggressive enforcement; possible licence-suspension equivalent for residents', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'ISK 20,000+ (~£120)', note: 'Camera-enforced in Reykjavik', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'ISK 40,000+ (~£240)', note: 'Aggressively enforced', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'ISK 20,000+ (~£120)', note: 'Per occupant', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.119%', amount: 'ISK 100,000+ (~£600) + 1–2 yr suspension', note: 'Aggressive enforcement; criminal escalation possible', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI 0.12%+', amount: 'Criminal proceedings', note: 'Possible imprisonment; international record', severity: 'high' },
			{ icon: 'mdi:car-emergency', label: 'Driving F-road in non-authorised rental', amount: 'Full damage liability', note: 'CDW void; engine flooding / underbody damage borne by renter', severity: 'high' },
		],
		caption: 'Sources: Samgöngustofa (Icelandic Transport Authority); Lögreglan (Icelandic Police); UK gov.uk/foreign-travel-advice/iceland; Vegagerðin road.is real-time conditions portal.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Iceland — honestly',
		lead: "Iceland is clean for UK photocard holders: Samgöngustofa accepts it for tourist driving. The page's job is the rental-waiver budget reality and the wind/F-road/river operational disclosures — the IDP question is the smallest item.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Iceland, the English version is the working-language route — Iceland has the highest English proficiency outside native-English-speaking countries (EF EPI Index), and every Keflavik rental desk and Lögreglan officer operates in English with foreign tourists',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by Icelandic law for UK photocard holders on tourist visits',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not rental insurance — Gravel Protection, SADW, F-road authorisation, theft cover and CDW excess buy-down are separate purchases that triple the listed daily rate',
				'Not a substitute for checking road.is before driving the Ring Road in winter, or the Vegagerðin pass-status portal for F-road access in summer',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Iceland',
			items: [
				'At Keflavik International rental counter during peak summer and winter Northern Lights seasons when desk agents default to asking for translation',
				'At Lögreglan stops on Ring Road or in tourist corridors where English-language standardised paperwork speeds the document check',
				'For insurance and accident-report paperwork after a covered incident where English-language translation simplifies the cross-border claim',
				'As a re-printable backup from any hotel if your physical photocard is lost mid-trip on a multi-region itinerary',
				"For travellers stacking multiple European trips over 1–5 years — one $55 purchase covers Iceland plus Spain, Italy, Greece, Portugal, Morocco on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Icelandic law actually cares about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive',
				'UK passport — physical, with valid Schengen entry stamp if entering via Iceland from outside the area',
				'Rental agreement and proof of valid Icelandic motor insurance — provided by the rental company',
				'For F-road driving: a 4WD vehicle with explicit F-road authorisation on the contract — standard 2WD rentals are excluded by Icelandic law',
				'Winter tyres or studded tyres if driving November–April — typically equipped by rental fleets seasonally; verify at pickup',
			],
		},
		pattern:
			"What prepared UK travellers in Iceland actually carry: photocard + passport + rental contract + insurance documentation + IDP Companion. The bigger preparation is the waiver-stack budget decision and route-planning around F-road authorisation. Don't open doors against the wind. Don't cross rivers. Check road.is before driving the Ring Road in winter. Total documentation prep: $35. Waiver stack: €25–35/day separate. The wind-damaged door scenario is what wrecks Iceland trips, not the IDP question.",
	},

	renting: {
		heading: 'Renting a car in Iceland as a UK driver',
		lead: "Iceland's rental market is uniquely tourism-driven — almost no other industry rents cars here — and the waiver structure reflects that. Counter policy varies more by branch than by chain.",
		chains: [
			{ name: 'Hertz Iceland', policy: 'Presence at Keflavik International. Accepts UK photocard licences. International-chain pricing typical; standard CDW excludes wind, gravel, sand-ash and F-road damage by default.' },
			{ name: 'Avis Iceland (incl. Budget)', policy: 'Wide network including Reykjavik city locations. UK photocards accepted. Same waiver structure as international chains.' },
			{ name: 'Europcar Iceland', policy: 'Strong domestic network including the Akureyri (north) airport. UK photocards accepted.' },
			{ name: 'Blue Car Rental (Icelandic local)', policy: 'Icelandic-owned with a reputation for transparent pricing and waiver bundling. Strong Keflavik presence. UK photocards accepted; documentation policy generally lighter than international chains.' },
			{ name: 'Lava Car Rental / Reykjavik Cars / SADcars (Icelandic local)', policy: 'Other well-regarded local operators. UK photocards accepted; pricing competitive on multi-day rentals.' },
		],
		tipsHeading: 'Practical tips for renting in Iceland',
		tips: [
			'The waiver stack is the real budget question. Listed $30/day rentals become $80–100/day once you have added Gravel Protection (~€10–15/day), Sand-and-Ash Damage Waiver (~€10/day), low-or-zero CDW excess buy-down, and theft cover. Compare "all-in" rates from Icelandic-local operators against international chains',
			'Do not open car doors against the wind without holding firmly with both hands. Icelandic wind ripping a door off its hinges is a documented insurance-excluded incident — Keflavik staff will brief you on this at pickup; they are not joking',
			'F-roads (F26, F35, F88 and dozens of others) require specific authorisation. If your itinerary includes Landmannalaugar, Þórsmörk, the Highlands or any F-numbered road, you need a 4WD with F-road permission on the contract — standard 2WD rentals are prohibited',
			"River crossings are at your own full risk. No insurance covers river-crossing damage on any rental. Engine flooding from a misjudged ford can be a €10,000+ liability — walk the ford first, observe other vehicles, turn back if uncertain",
			'Check road.is before any longer drive — real-time road and weather conditions. The Ring Road can close in winter storms. Vegagerðin (Icelandic Road Administration) updates throughout the day',
			'South Coast wind warnings are real. Vík, Reynisfjara and the stretches to Jökulsárlón regularly see 30 m/s+ wind days. The official advisory often says "do not stop, do not park, continue inland"',
			'Winter tyres or studded tyres are mandatory November–April; rental fleets are typically equipped seasonally — verify at pickup',
			'Manual transmission is the default — automatics cost ~30% more and are limited; book early if needed',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'Realistic outcomes ranked by frequency, based on Icelandic Transport Authority advisories, gov.uk Iceland travel guidance and tourist-forum reports.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'Photocard accepted, full waiver stack added, clean trip',
				text: 'Standard tourist experience — waivers turn $30/day listed into $80–100/day actual, drive the South Coast or Golden Circle without incident, return the car, fly home. Most Iceland trips end this way.',
			},
			{
				severity: 'low',
				frequency: 'Occasional at peak season',
				label: 'Agent asks for translation, you produce IDP Companion',
				text: 'Five extra minutes at the Keflavik counter, no further issue. Common during peak summer (June–August) and winter Northern Lights season (December–February).',
			},
			{
				severity: 'high',
				frequency: 'Documented common incident',
				label: 'Wind-damaged door at fuel station or viewpoint',
				text: 'A wind gust (30+ m/s) pulls a car door open with force that fails the hinge. CDW excludes wind damage. €500–2,000+ liability falls on the renter. The single most-reported avoidable incident in Iceland rentals.',
			},
			{
				severity: 'high',
				frequency: 'Rare but catastrophic',
				label: 'Engine flooding from F-road river crossing',
				text: "A misjudged ford submerges the engine intake. All cover voided — no insurance covers river crossings on any rental, even F-road-permitted 4WDs. €10,000+ liability is documented. Always walk the ford first.",
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Speed-camera ticket on Ring Road',
				text: 'A mobile camera van or fixed Blitzer catches you at 105 km/h in a 90 zone. Fine ISK 5,000–60,000+ plus ISK 5,000 rental admin fee. Charged to your UK card on file 3–6 weeks after the trip.',
			},
			{
				severity: 'med',
				frequency: 'Very common',
				label: 'Gravel damage on partly-gravelled rural road',
				text: 'A passing vehicle on a gravel-shoulder Ring Road section kicks up stones that crack the windshield or chip the paint. Covered by Gravel Protection waiver if purchased; otherwise renter liability for the repair.',
			},
		],
		math: "$35 IDP Companion + full waiver stack (~€25–35/day × trip days) vs the difference between a covered wind-damage incident and the €500–2,000+ exclusion liability. The waiver question dwarfs the IDP question by an order of magnitude. The wind-and-river disclosures are operational safety, not documentation.",
	},

	phrases: {
		heading: 'Icelandic phrases for police interactions and rural fuel stops',
		lead: "Iceland's tourist infrastructure runs in English, so phrases aren't strictly needed — but eight Icelandic items add cultural color and help in rural Westfjords or East Iceland where English is less dominant.",
		items: [
			{ phrase: 'Hér er ökuskírteinið mitt', translation: 'Here is my driving licence', context: 'Standard opening — hand UK photocard + passport together' },
			{ phrase: 'Og hér er fjölmála þýðingin', translation: 'And here is the multilingual translation', context: 'Follow-up at a rental counter if the agent asks for translation alongside the UK photocard' },
			{ phrase: 'Ég er breskur ferðamaður', translation: "I'm a British tourist", context: 'Establishes context immediately at any document check' },
			{ phrase: 'Talar þú ensku?', translation: 'Do you speak English?', context: 'Universally answered yes in tourist-facing roles; rarely needed but courteous' },
			{ phrase: 'Hvar er næsta bensínstöð?', translation: 'Where is the nearest petrol station?', context: 'Useful in rural Westfjords or East Iceland where fuel stations are sparse and signal is unreliable' },
			{ phrase: 'Er vegurinn opinn?', translation: 'Is the road open?', context: 'Critical in winter — check at any fuel station before driving the Ring Road in storm conditions' },
			{ phrase: 'Takk fyrir', translation: 'Thank you', context: 'Universal courtesy; "takk" alone also works' },
			{ phrase: 'Ég verð að hringja í bílaleigan', translation: 'I need to call the rental company', context: 'Useful at any incident — every rental contract carries a 24/7 helpline number' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Iceland (UK citizens)',
		lead: "Iceland's preparation list for UK photocard holders is short on the documentation side — no government IDP needed — but the waiver-stack budget decision and route-planning around F-road authorisation are the slow parts of prep.",
		schemaName: 'How to prepare for driving in Iceland as a UK citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: "The plastic photocard alone is sufficient post-2015 — no paper counterpart needed. If you still hold an older paper licence, update to photocard format before flying.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. Iceland operates universally in English at every tourist-facing rental desk and Lögreglan stop — the English version is the working-language route. Print at home or from any Icelandic hotel.',
			},
			{
				title: 'Plan the waiver stack budget',
				text: 'Gravel Protection (~€10–15/day), Sand-and-Ash Damage Waiver (~€10/day), CDW excess buy-down (variable), theft cover and (if F-roads planned) F-road authorisation. Listed daily rate × 2–3 = realistic all-in cost. Compare local Icelandic operators (Blue Car Rental, Lava, Reykjavik Cars) against international chains for waiver bundling.',
			},
			{
				title: 'Decide F-road vs Ring Road itinerary before pickup',
				text: 'F-roads require 4WD with explicit F-road authorisation on the contract; standard 2WD rentals are excluded by Icelandic law. F-roads are open late June through early September. River crossings on any rental — even F-road-permitted 4WDs — void all damage cover. Check road.is or vegagerdin.is for current pass status.',
			},
			{
				title: 'Carry physical documents in one folder + check road.is daily',
				text: 'Physical UK photocard + UK passport + rental contract + insurance card + IDP Companion — all in one folder. Hand the folder over at any Lögreglan stop. Check road.is for real-time road and weather conditions before every longer drive; the Ring Road can close in winter storms.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Iceland as a UK tourist?',
				answer: 'No. The Icelandic Transport Authority (Samgöngustofa) accepts UK photocard driving licences for tourist driving without an IDP. UK gov.uk Iceland advice explicitly confirms. Iceland is in the EEA, so post-Brexit UK driving recognition continues through the EEA framework.',
			},
			{
				id: 2,
				question: 'Why are Icelandic rentals so expensive?',
				answer: "The waiver structure. Standard CDW typically doesn't cover wind damage, gravel damage, sand-and-ash damage, or F-road / river-crossing scenarios — each is a separate add-on. The listed rate is the pre-waiver rate; the all-in rate with full coverage is typically 2–3× higher. Compare \"all-in\" pricing from Icelandic-local operators (Blue Car Rental, Lava, Reykjavik Cars) against international chains.",
			},
			{
				id: 3,
				question: 'Are wind-damaged doors really a thing?',
				answer: "Yes. Icelandic gusts (30+ m/s) can pull a car door open with such force that the hinge fails. Insurance contracts routinely exclude wind-damaged doors. Keflavik rental staff brief you on this at pickup — they are not joking. Hold doors firmly with both hands; turn the car into the wind when possible; never open a door at a fuel station or viewpoint in high winds.",
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government IDP is a formal document issued under the 1949 Geneva Convention by an authorised UK issuer. IDP Companion is a private multilingual translation companion document presenting your photocard details in twelve widely-read languages from the 1949 Geneva Convention set — used alongside your physical UK licence, not as a substitute for a government IDP where one is legally required.',
			},
			{
				id: 5,
				question: "What's the deal with F-roads?",
				answer: 'F-roads are mountain interior roads — F26, F35, F88 and dozens of others. They are 4WD-only by Icelandic law, open only in summer (typically late June through early September), and require specific F-road authorisation on the rental contract. Standard 2WD rentals are explicitly prohibited from F-roads. Driving an unauthorised vehicle on an F-road voids all damage cover.',
			},
			{
				id: 6,
				question: 'Can I cross rivers on F-roads?',
				answer: 'At your own full risk. No rental insurance covers river-crossing damage on any rental — including F-road-permitted 4WDs. Engine flooding from a misjudged ford is one of the most expensive single-incident liabilities in Icelandic rentals at €10,000+. Always walk the ford first, observe other vehicles, turn back if uncertain.',
			},
			{
				id: 7,
				question: 'Will my UK insurance cover me in Iceland?',
				answer: 'Iceland is in the EEA, so some UK motor insurance extends to Iceland by default — verify with your insurer for your specific policy version and travel dates. Rental waivers are still recommended for Iceland-specific damage scenarios (wind, gravel, sand-ash, river) that standard UK cover may not address.',
			},
			{
				id: 8,
				question: 'Is the Ring Road open in winter?',
				answer: 'Generally yes, but with frequent storm closures. Check road.is for current conditions; reroute if necessary. Winter Ring Road driving requires winter tyres (mandatory November–April; rentals are equipped seasonally). Reduced daylight in December–January means most driving happens in twilight or darkness.',
			},
			{
				id: 9,
				question: 'When can I drive the Highlands / F-roads?',
				answer: 'Late June through early September is the typical window — specific F-roads open later than others. Samgöngustofa publishes open/closed status; Vegagerðin (Icelandic Road Administration) updates road.is throughout the day. Your rental agent knows what is currently driveable on the day of pickup.',
			},
			{
				id: 10,
				question: 'Are speed cameras really used in Iceland?',
				answer: 'Yes. Fixed cameras on Route 1 (Ring Road) and Reykjavik arterials, plus mobile camera vans on tourist routes. Tickets follow the rental car to the named driver\'s UK card three to six weeks after the trip via the rental company plus an ISK 5,000 admin fee.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Iceland-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'it', label: 'UK → Italy', status: 'Live', href: '/idp-for-uk-drivers-in-italy' },
			{ flagFrom: 'gb', flagTo: 'fr', label: 'UK → France', status: 'Live', href: '/idp-for-uk-drivers-in-france' },
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain' },
			{ flagFrom: 'us', flagTo: 'is', label: 'US → Iceland', status: 'Live', href: '/idp-for-us-drivers-in-iceland' },
			{ flagFrom: 'us', flagTo: 'no', label: 'US → Norway', status: 'Live', href: '/idp-for-us-drivers-in-norway' },
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece' },
		],
	},

	finalCta: {
		heading: 'Driving the Ring Road or the South Coast in winter?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Iceland's working language for tourists is English, which is what the IDP Companion's English version delivers at every rental desk and Lögreglan stop. Valid 1–5 years and covers Iceland plus Italy, Spain, France, Greece, Portugal on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with Samgöngustofa (Icelandic Transport Authority), the Lögreglan (Icelandic Police), Vegagerðin (Icelandic Road Administration) or any Icelandic government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion must be used alongside your original UK photocard driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Samgöngustofa (Icelandic Transport Authority) — Foreign driving licences (samgongustofa.is)',
			'UK Foreign, Commonwealth & Development Office — Driving in Iceland (gov.uk/foreign-travel-advice/iceland)',
			'Vegagerðin (Icelandic Road Administration) — Real-time road conditions (road.is)',
			'Lögreglan (Icelandic Police) — Traffic enforcement (logreglan.is)',
			'Icelandic Met Office — Weather forecasts for driving (vedur.is)',
			'EF EPI Index — English Proficiency rankings (ef.com/epi)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Iceland',
	},
};

export const ukIcelandCopy: Record<'en', CountryPairCopy> = { en };
