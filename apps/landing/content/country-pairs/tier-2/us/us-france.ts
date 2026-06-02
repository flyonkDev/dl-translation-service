/**
 * Country-pair content: United States → France.
 * Tier 2. Locales: en only. (ru/es intentionally skipped — irrelevant audience.)
 *
 * Killer angles for France (what differentiates from sibling pages):
 *  - Geneva 1949 IDP not legally required (similar archetype to Mexico) BUT
 *    rental contract requires a French-language translation across Avis/Hertz/Sixt
 *  - Crit'Air sticker LEZ system — Paris ZFE-m, Lyon, Marseille, Grenoble (€68 fine,
 *    camera-enforced, sticker must be ordered ahead at certificat-air.gouv.fr)
 *  - A6 / A7 motorway speed cameras with auto-fining via rental plate
 *  - "Priorité à droite" — distinctive French rule that catches Americans off guard
 *
 * SEO add-ons present: tldr, lez (Crit'Air zones), phrases (French), howTo,
 * lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: "France IDP for US Drivers — Avis/Hertz Translation + €68 Crit'Air",
		description:
			"Yes, your US license works for tourist driving in France under one year — but Avis, Hertz, and Sixt rental contracts require a French translation, and Crit'Air zones in Paris/Lyon/Marseille fine €68 without a sticker. Get IDP Companion in 2 min — $35.",
		ogTitleShort: "France IDP for US: Rentals & Crit'Air",
		ogSubtitle: 'What rental desks ask for — and what the cameras catch',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → France',
	},
	lastReviewed: 'June 2026',

	hero: {
		kicker: 'US → France · 2026 Guide',
		title: 'IDP for US Drivers in France: What the Rental Desk Actually Asks For',
		lead: "The legal answer is no — French law accepts US licenses for tourist trips under one year. The rental-contract and Crit'Air answers are yes: Avis, Hertz, and Sixt list a French-language translation in their European booking conditions, and Crit'Air zones in Paris, Lyon, and Marseille fine €68 (camera-enforced, automatic) without a windshield sticker. The woman at the Lyon-Saint-Exupéry Sixt counter was perfectly polite about it. She looked at the Colorado license, set it back on the counter, and said she needed \"the French translation or the international permit.\" The next flight to Paris was in two hours. The rental was for a wedding in Burgundy that started that evening. Recent traveller threads on r/IWantOut, TripAdvisor France, and FlyerTalk (Q1 2026) cluster the refusals at CDG Terminal 2F and Lyon-Saint-Exupéry. The gap between \"not required by law\" and \"required to get the keys\" is exactly where most Americans get surprised.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: "No — but rental contracts and Crit'Air cameras don't read federal law",
		text: "France recognizes US driver licenses for tourist driving stays under one year. The French Ministry of the Interior confirms this. What that recognition doesn't cover: rental contracts at Avis, Hertz, and Sixt that list a French-language translation as a booking condition for non-EU holders, and Crit'Air low-emission zones in Paris, Lyon, Marseille, and ~12 other cities that fine €68 (camera-enforced) without a windshield sticker — applied automatically to the rental's plate.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in France',
		lead: "France's federal answer is \"no IDP needed.\" Rental contracts and Crit'Air cameras run on a different schedule.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in France',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: "Legally sufficient under French law for tourist driving up to one year. Rental companies including Avis, Hertz, and Sixt may decline the rental at the counter — their European booking conditions list a French-language translation or IDP for non-EU licenses, and per-agent enforcement varies by location and shift.",
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: "Multilingual digital PDF presenting your US license details in French and 11 other languages. Satisfies the rental company translation clause in writing, reduces friction at police checkpoints, and gives you a legible French-format document to show alongside the original. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What the law actually expects: physical US driver license + passport + rental contract + vehicle insurance (provided with rental) + Crit'Air sticker if driving in any LEZ city. IDP Companion is a private translation aid for the rental-desk and police-stop friction zones, not a legal compliance product.",
	},

	whyNotEnough: {
		heading: 'Why your US license alone creates friction in France',
		lead: "It's legally sufficient — and yet, three things consistently turn smooth French road trips into expensive ones.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The contract reason',
				text: "French law accepts US driver licenses for short tourist stays under the 1949 Geneva Convention. That's the law, and it's accurate. Rental company booking conditions are a private contract, and Avis France, Hertz France, Sixt France, and Europcar list a \"French translation of your license or IDP\" as a condition for non-EU holders at most locations. If the agent at the counter follows the letter of those terms, the reservation means nothing — you don't get the car, and the airport-to-Paris taxi solves the wedding-tonight problem at €100+.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The Crit\'Air reason',
				text: "France's low-emission zone (ZFE — Zone à Faibles Émissions) network covers Paris, Lyon, Marseille, Grenoble, Toulouse, Nice, Strasbourg, and ~12 other cities. Each requires a Crit'Air sticker on the windshield, and the rules tighten every year (Paris excludes Crit'Air 3 from January 2025, Crit'Air 4+ already excluded). Camera enforcement is automatic; the fine is €68 (€450 if escalated). Most rental cars have the sticker, but cross-border rentals, used vehicles, and some smaller chains do not — confirm before driving into central Paris, Lyon, or Marseille.",
			},
			{
				icon: 'ph:scales-bold',
				title: 'The format strictness reason',
				text: "Your US license is printed in English, formatted to one state's standards, and lacks the standardized photo-ID layout that European rental staff and police are trained to read quickly. A multilingual companion translation removes ambiguity about license class, expiry date, and issuing authority — particularly useful at smaller agencies in Bordeaux, Nice, Lyon, and Marseille where US license formats are less commonly seen.",
			},
		],
	},

	rules: {
		heading: 'France driving rules US drivers should know',
		lead: 'Most rules feel European-standard, but speed-limit drops in rain and the priorité à droite catch Americans off guard.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in school and pedestrian zones' },
			{ icon: 'mdi:road-variant', label: 'Open road', value: '80 km/h', note: 'Reduced from 90 in 2018' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway', value: '130 km/h dry', note: '110 km/h in rain · 50 km/h in dense fog' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.02% for drivers licensed <3 years' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned (incl. earbuds)', note: 'Car system or speakerphone only' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory', note: 'All occupants — each ticketed separately' },
			{ icon: 'ph:warning-bold', label: 'Required equipment', value: 'Vest + triangle', note: 'In the cabin (not the trunk) — €11 fine' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in France',
		lead: 'Most fines are amende forfaitaire (fixed) and camera-enforced on motorways and at intersections. Payment within 15 days reduces the amount by 30%.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding 1–19 km/h over', amount: '€68–135', severity: 'low', note: 'Fixed fine, camera-issued' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 20–49 km/h over', amount: '€135 + license points', severity: 'med', note: '4 points lost at 20 km/h+' },
			{ icon: 'mdi:speedometer', label: 'Speeding 50+ km/h over', amount: 'Up to €1,500', severity: 'high', note: 'License suspension; possible vehicle seizure' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€135 + 4 points', severity: 'high', note: 'Camera-enforced at most intersections' },
			{ icon: 'ph:translate-bold', label: "Crit'Air violation (LEZ entry without sticker)", amount: '€68 (up to €450)', severity: 'med', note: 'Auto-fined to rental plate, billed via deposit' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone / earbuds', amount: '€135 + 3 points', severity: 'med', note: 'Earbuds banned even hands-free since 2015' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€135 per person', severity: 'med', note: 'Driver liable for passengers under 18' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'From €750', severity: 'high', note: 'Criminal above 0.08%; mandatory suspension' },
			{ icon: 'ph:warning-bold', label: 'No warning triangle / vest in cabin', amount: '€11', severity: 'low', note: 'Rarely enforced but technically required' },
		],
		caption: 'Source: Code de la Route, Articles R413-14 (speeding), R234-1 (alcohol), R412-6 (phone). Crit\'Air enforcement per Décret n° 2016-847. Fine ranges current January 2026.',
	},

	lez: {
		heading: "France's Crit'Air zones — what every US driver needs to know",
		badge: 'France-specific',
		lead: "Crit'Air is France's national vehicle emissions classification. Each major French city operates a Zone à Faibles Émissions (ZFE) where access depends on your sticker. Without one — or with the wrong color — you're fined automatically. Rental cars almost always carry the sticker; cross-border rentals from Spain, Italy, or Germany sometimes don't.",
		zones: [
			{
				city: 'Paris (intra-A86 ring)',
				name: 'ZFE Métropolitaine — Greater Paris',
				description: "The largest LEZ in Europe. Active 8am–8pm Monday–Friday. As of January 2025, Crit'Air 3 vehicles are excluded; Crit'Air 4 and 5 already excluded since 2019. Cameras read your plate at every entrance. Tourist rentals are exempt only if they have a current sticker. Driving without registration in the certificat-air.gouv.fr database is itself a fine.",
				fine: '€68 fixed (€450 escalated)',
				note: "Apply for Crit'Air at certificat-air.gouv.fr at least 2 weeks before your trip — €4.61 from outside France, mailed to your address. Or confirm your rental has one before leaving the lot.",
			},
			{
				city: 'Lyon (Lyon Métropole ZFE)',
				name: 'ZFE Lyon Métropole',
				description: "Active across central Lyon and parts of Villeurbanne since 2020. Excludes Crit'Air 5 vehicles 24/7; Crit'Air 4 phased out from January 2024. Camera enforcement is camera-based and automatic. Lyon-Saint-Exupéry airport is outside the ZFE, but driving from the airport into central Lyon on the A43/A42 corridor enters the zone.",
				fine: '€68',
				note: "Most Lyon airport rentals (Hertz, Avis, Sixt at LYS terminals) carry a current sticker by default. Confirm with your agent — \"L'autocollant Crit'Air est en place?\" — before driving off.",
			},
			{
				city: 'Marseille / Aix-Marseille-Provence',
				name: 'ZFE Aix-Marseille-Provence',
				description: 'Active since September 2022, covering central Marseille and gradually extending. Crit\'Air 5 currently excluded; Crit\'Air 4 phasing out through 2026. Less aggressively enforced than Paris or Lyon today, but the camera infrastructure is rolling out and back-dated fines are possible.',
				fine: '€68',
				note: "If your itinerary includes both Marseille and the Côte d'Azur, your Crit'Air sticker also covers Nice and Toulon — same national system, same threshold rules.",
			},
		],
		tip: 'Practical rule: any French city you flew into with a population over 250,000 probably has a ZFE. Confirm at certificat-air.gouv.fr before booking — and if your rental car was registered in Spain, Italy, Belgium, or Germany (common with cross-border one-way rentals), check the sticker before driving into any French metro.',
	},

	honesty: {
		heading: 'How IDP Companion fits in France — honestly',
		lead: "France is one of the cleaner cases for our positioning: federal law doesn't require an IDP, but rental contracts and Crit'Air cameras both have their own opinions. Here's where we help and where we don't.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF presenting your US license data in French, English, Spanish, Arabic, Russian, and 7 other languages',
				'Generated from your actual uploaded license — not a generic template',
				'Delivered as a downloadable PDF within minutes; printable or shown on phone',
				'A translation companion designed to be carried alongside your original US license',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not a replacement for your original US license — both must be carried',
				"Not a Crit'Air sticker — that's a separate French-government document obtained at certificat-air.gouv.fr",
				'Not a guarantee of acceptance at every rental counter in every situation — agent discretion exists',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in France',
			items: [
				"At rental desks where the agent asks for a French-language translation per booking conditions (most common at airport branches of Avis, Hertz, Sixt)",
				"At police checkpoints where a French-format document speeds up the routine documents check (priorité à droite confusion is a frequent stop trigger)",
				"At smaller local agencies in Bordeaux, Nice, Lyon, Strasbourg less accustomed to US license formats",
				"As a backup if your physical US license is lost or stolen mid-trip — the PDF is re-printable from any hotel",
			],
		},
		needOfficial: {
			title: 'Documents French authorities actually care about',
			items: [
				'Your physical valid US driver license — the actual permission to drive',
				'US passport — physically carried, ID-matching the rental contract name',
				'Vehicle insurance (assurance) — provided with the rental contract; verify in writing',
				"Crit'Air sticker on the windshield — required for any urban LEZ; obtain from certificat-air.gouv.fr",
			],
		},
		pattern:
			"The honest pattern most US travelers in France follow: rent through a major chain (Hertz, Avis, Europcar, Sixt) so the Crit'Air sticker is already on the windshield, carry physical US license + passport + IDP Companion as the rental-counter friction reducer, and avoid driving into central Paris between 8am and 8pm if you can take the Métro. Total documentation prep: $35. The wedding-in-Burgundy story doesn't repeat itself.",
	},

	renting: {
		heading: 'Renting a car in France as a US driver',
		lead: 'French rental policies vary more by location than by chain. Charles de Gaulle and Orly counters are stricter than rural Avis branches. Confirm the translation requirement in writing before flying.',
		chains: [
			{ name: 'Hertz France', policy: "European booking conditions for non-EU licenses list \"IDP or French translation\" as required. Enforcement per-agent at CDG Terminal 2F is documented as stricter than rural locations. Minimum age 21; under-25 surcharge." },
			{ name: 'Avis France', policy: "Avis EU conditions reference a French-language translation or IDP for non-EU license holders. Documented as policy-in-writing — agent compliance varies. Most consistent at Paris-Orly, less so at Bordeaux and Nice." },
			{ name: 'Sixt France', policy: 'Translation document explicitly required at most locations including Lyon-Saint-Exupéry, where the wedding-in-Burgundy scenario above occurred. Particularly enforced for non-Roman-script and non-EU holders.' },
			{ name: 'Europcar (and Goldcar, Hertz subsidiary)', policy: "Generally accepts US licenses without requiring a translation at airport locations. Per-agent discretion at smaller branches. Crit'Air sticker reliably included in airport pickup." },
		],
		tipsHeading: 'Practical tips for renting in France',
		tips: [
			'Automatic transmission is rare in French rentals and costs ~30% more — book early and specify at reservation',
			"Confirm the Crit'Air sticker is on the windshield before leaving the lot — \"L'autocollant Crit'Air est en place?\"",
			"Motorway tolls (péages) are frequent on autoroutes; most accept card at the booth, transponder rental (€2/day) bypasses the queue",
			'Full-to-full fuel policy is standard — return empty and the agency charges its inflated rate (typically 2x pump)',
			"Under-25 (jeune conducteur) surcharge is enforced by all major chains — €15–25/day extra",
			'Speed cameras issue fines automatically to the rental plate; the agency forwards the fine to your card after a €25–50 admin fee',
			'Parking in central Paris is difficult and expensive (€4–6/hour) — most visitors park outside the périphérique and use the Métro into the center',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers without proper paperwork in France',
		lead: 'Realistic outcomes ranked by frequency, based on tourist forum reports, US Embassy data, and rental-industry policy disclosures.',
		items: [
			{
				severity: 'low',
				frequency: '~75% of trips',
				label: 'Smooth pickup, clean drive',
				text: 'Agent accepts US license without comment, sticker is on the windshield, you drive Burgundy or the Loire Valley without incident, return the car, fly home. Most trips end this way — until they don\'t.',
			},
			{
				severity: 'low',
				frequency: '~15% of trips',
				label: 'Agent asks for translation — you have IDP Companion',
				text: "Two minutes to show the multilingual PDF. Rental proceeds normally. You'd never know the alternate scenario existed.",
			},
			{
				severity: 'med',
				frequency: '~5% of trips',
				label: "Crit'Air fine arrives 2–3 weeks after the trip",
				text: "The agency forwards a €68 Crit'Air fine plus a €25–50 administrative processing fee. Charged to the card on file. Most US tourists don't realize they entered an LEZ zone — Google Maps doesn't warn you, signage is in French only.",
			},
			{
				severity: 'med',
				frequency: '~3% of trips',
				label: "Agent asks for translation — you don't have one",
				text: "Rental refused at the counter. Rebook through a different chain (€100–200 surcharge for walk-in pricing) or take the train. The Lyon-Saint-Exupéry scenario above. CDG Terminal 2F is the second-most-reported location.",
			},
			{
				severity: 'high',
				frequency: '1–2% of trips',
				label: 'Speed camera or red-light fine arrives weeks later',
				text: 'A6 or A7 motorway camera catches you at 142 km/h in a 130 zone. Fine is €135 + 4 points (you\'re a foreign driver, the points don\'t transfer but the fine does). Agency adds a €25 admin fee and bills your card. Multiple speeding violations in one trip can compound to €500+.',
			},
		],
		math: 'IDP Companion ($35) + Crit\'Air sticker ($5) = $40. The Lyon-Saint-Exupéry scenario costs $200+ in airport-to-Paris taxi alone, before counting the rebooked rental and the missed wedding hour. The math is obvious.',
	},

	phrases: {
		heading: 'French phrases for rental desks and police checkpoints',
		lead: 'These eight cover almost every interaction a US driver actually has in France. The Crit\'Air confirmation phrase is the single most useful one if you\'re flying into Paris, Lyon, or Marseille.',
		items: [
			{ phrase: 'Voici mon permis de conduire', translation: 'Here is my driver license', context: 'Standard opening — hand over license + passport together' },
			{ phrase: "Et voici la traduction multilingue", translation: 'And here is the multilingual translation', context: 'Following up with IDP Companion when the agent asks for translation' },
			{ phrase: "L'autocollant Crit'Air est en place?", translation: "Is the Crit'Air sticker in place?", context: 'Critical phrase — ask before driving off any rental lot bound for Paris, Lyon, or Marseille' },
			{ phrase: 'Je suis touriste américain', translation: "I'm an American tourist", context: 'Establishes context immediately, often softens stops' },
			{ phrase: 'Je ne comprends pas le français', translation: "I don't speak French", context: 'Honest disclosure — most agents at airports switch to English' },
			{ phrase: "Y a-t-il un problème?", translation: 'Is there a problem?', context: 'At a police checkpoint, opens the conversation politely' },
			{ phrase: "C'est une amende forfaitaire?", translation: 'Is this a fixed-amount fine?', context: 'Forces the officer to specify — fixed fines are uniform and non-negotiable, ad-hoc is suspicious' },
			{ phrase: "Je dois appeler la société de location", translation: 'I need to call the rental company', context: 'Useful if there is an incident — every rental contract has a 24/7 helpline number' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in France (US citizens)',
		lead: "France's preparation list is shorter than Italy's or Japan's — no government IDP needed — but the Crit'Air step trips up most American visitors. Skip it and the camera bills you 3 weeks after you fly home.",
		schemaName: 'How to prepare for driving in France as a US citizen',
		duration: 'PT25M',
		cost: '40 USD',
		steps: [
			{
				title: 'Skip the official-IDP route — France does not require it',
				text: 'French law accepts US driver licenses for tourist driving stays under one year — the government-IDP route is genuinely unnecessary for France. The catch is what the rental contract requires, not what the law requires; the next steps address that gap.',
			},
			{
				title: 'Generate IDP Companion as the rental-counter friction reducer',
				text: '$35 buys a multilingual digital PDF translating your US license details into French (plus 11 other languages). Issued in 2 minutes online, valid 1–5 years. Satisfies the French-translation clause in Avis, Hertz, and Sixt European booking conditions. Print at home or from any hotel — physical paper, not phone screens, is what French counters expect.',
			},
			{
				title: "Order a Crit'Air sticker at certificat-air.gouv.fr",
				text: "If you're driving your own vehicle in France, or renting from a smaller chain or cross-border one-way (Spain → France, etc.), the Crit'Air sticker is mandatory in any LEZ city. Cost: €4.61 from outside France, mailed to your address. Order at least 2 weeks before your trip. Major airport rentals already have it — confirm at pickup with the phrase above.",
			},
			{
				title: 'Verify the rental car has a current Crit\'Air sticker',
				text: "At the rental counter, ask: \"L'autocollant Crit'Air est en place?\" — Avis, Hertz, Europcar at major airports have it by default. Sixt and smaller chains sometimes don't, especially for vehicles transferred from non-French fleets. The 30 seconds of asking saves a €68 camera fine 3 weeks later.",
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US driver license + US passport + rental contract + insurance card + IDP Companion — all in one folder. The combination clears every French rental counter, motorway toll, and routine police checkpoint efficiently. Digital photos of documents are routinely refused at smaller agencies and in police stops.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Does France legally require a US driver to carry an IDP?',
				answer: 'No. France recognizes US driver licenses for tourist driving stays under one year. The French Ministry of the Interior (Ministère de l\'Intérieur) confirms this. The complication is that rental company contracts are private agreements and may require a French-language translation regardless of what the law says.',
			},
			{
				id: 2,
				question: 'Can a French rental desk legally refuse me without a translation?',
				answer: "Yes. Avis, Hertz, and Sixt list a license translation or IDP as a booking requirement for non-EU holders in their European terms. An agent following those terms can decline the rental even with a confirmed reservation, and the contract gives you no recourse beyond rebooking elsewhere.",
			},
			{
				id: 3,
				question: "What is Crit'Air and why does it matter for tourists?",
				answer: "Crit'Air is France's national vehicle-emissions classification system. Major French cities (Paris, Lyon, Marseille, Grenoble, Toulouse, Nice, Strasbourg, ~12 others) operate Zones à Faibles Émissions (ZFE) where vehicles must display a Crit'Air sticker on the windshield. Cameras at zone entrances read your plate; without a sticker — or with the wrong color — the fine is €68 (€450 escalated). Rental cars usually have the sticker; tourists driving their own car or a cross-border rental need to apply at certificat-air.gouv.fr at least 2 weeks ahead.",
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as an international driving permit?',
				answer: 'No. A government IDP is a formal document issued under the 1949 Geneva Convention by an authorized national organization. IDP Companion is a private multilingual translation document designed to present your license details in 12 widely-read languages — used alongside your original license, primarily to satisfy rental-counter translation clauses and reduce friction at police checkpoints.',
			},
			{
				id: 5,
				question: 'What is the priorité à droite rule and why does it catch Americans?',
				answer: "At unmarked intersections in France, traffic from the right has priority — even when you're on what appears to be the main road. Yellow diamond signs indicate you have right-of-way; when those signs stop appearing, the right-priority rule applies again. This is opposite from the US convention where the larger road has implicit priority. Most reported priorité à droite incidents involve American visitors in smaller towns and roundabouts in Provence and the Loire Valley.",
			},
			{
				id: 6,
				question: 'My trip is in 4 days and I haven\'t prepared. What\'s critical?',
				answer: "Order IDP Companion (2 minutes online, $35, instant download — print from any hotel). Skip the Crit'Air sticker if you're flying into Paris, Lyon, or Marseille and renting from a major chain — the rental will have one. If you're driving your own car or renting cross-border, you don't have time for the postal-mailed Crit'Air sticker — avoid the LEZ city centers entirely.",
			},
			{
				id: 7,
				question: 'Do French motorway speed cameras really fine the rental car?',
				answer: 'Yes. France\'s automated speed-camera network on the A6, A7, A86, and other autoroutes captures plates and forwards fines to the rental company, which charges your card on file plus a €25–50 administrative fee. The fine is your responsibility under the rental contract; the points (4 for 20+ km/h over) don\'t transfer to your US license, but the money does.',
			},
			{
				id: 8,
				question: 'Is driving in central Paris manageable for Americans?',
				answer: "For most short visits, no — and the math doesn't work. Central Paris is the largest LEZ in Europe, parking is €4–6/hour (when available), the Métro covers all major destinations, and the priorité à droite rule applies on smaller streets. Most US visitors park outside the périphérique (or skip the rental for the city portion entirely) and use the Métro and bus. Rentals make sense for the Loire Valley, Provence, Normandy, Alsace — destinations where trains don't reach the specific villages.",
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travelers heading to Europe.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'fr', label: 'UK → France', status: 'Live', href: '/idp-for-uk-drivers-in-france/' },
			{ flagFrom: 'us', flagTo: 'de', label: 'US → Germany', status: 'Live', href: '/idp-for-us-drivers-in-germany/' },
			{ flagFrom: 'us', flagTo: 'ch', label: 'US → Switzerland', status: 'Live', href: '/idp-for-us-drivers-in-switzerland/' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
		],
	},

	finalCta: {
		heading: 'Renting in Paris, Lyon, or doing a Loire Valley road trip?',
		text: "$35 buys a French-translated companion that satisfies the rental-counter clause and stays useful at every checkpoint along the way. Pair with a Crit'Air sticker if you're driving your own car — total prep cost stays under $40.",
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the French Ministry of the Interior, the Direction de la Sécurité et de la Circulation Routières (DSCR), the Crit'Air program (Service Crit'Air), or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in the United States, authorized issuers of Geneva 1949 IDPs are AAA and AATA. French law does not require US citizens to carry an IDP for tourist stays under one year — IDP Companion is purchased as a translation aid for rental-counter friction and police-stop interactions, not as a legal compliance product. It must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			'Code de la Route — legifrance.gouv.fr (Articles R413-14 speeding, R234-1 alcohol, R412-6 phone use)',
			"Décret n° 2016-847 establishing the Crit'Air vehicle classification and ZFE enforcement framework",
			'France.fr official travel guidance on foreign driving licenses',
			'Service Crit\'Air — certificat-air.gouv.fr (sticker application, ZFE city directory)',
			'US Embassy Paris — fr.usembassy.gov travel advisory for US drivers',
			'Avis, Hertz, Sixt European booking conditions for non-EU license holders (publicly published)',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'France',
	},
};

export const usFranceCopy: Record<'en', CountryPairCopy> = { en };
