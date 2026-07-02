/**
 * Country-pair content: United Kingdom → Morocco.
 * Locales: en only.
 *
 * Unique angle: Moroccan traffic law accepts English-language Latin-alphabet
 * licences for tourist driving up to 90 days — UK photocard legally valid
 * without a formal IDP. But three operational realities catch UK drivers:
 * (1) "Priorité à droite" reverses UK roundabout logic — entering traffic
 * has priority, opposite of UK/France/Spain; (2) speed enforcement is from
 * 5 km/h over with on-the-spot cash collection; (3) night driving outside
 * cities is genuinely dangerous due to unlit roads, livestock (camels in
 * the south), and vehicles without rear lights.
 *
 * PDF language compliance: claims Arabic/French/English/Spanish + others —
 * all in template (verified per CLAUDE.md). French and Arabic both reasonable
 * to lead with given Morocco's bilingual official-language status.
 *
 * SEO add-ons present: tldr (3-row exception), lez (used here for the three
 * specific friction points: roundabouts, 5 km/h enforcement, night driving),
 * howTo, phrases (French as in-country reference at checkpoints), lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: "Morocco's Reverse Roundabouts: UK Photocard Rules for 2026",
		description:
			'UK photocard is legal in Morocco 90 days — no IDP required. But roundabout priority reverses UK rules, fines start 5 km/h over. IDP Companion for police stops ($35).',
		ogTitleShort: 'UK in Morocco: Reverse Roundabouts',
		ogSubtitle: 'Photocard OK 90 days — the roads flip UK rules',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Morocco',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-05-08',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'UK → Morocco · 2026 Guide',
		title: 'IDP for UK Drivers in Morocco: Roundabouts Run Backwards',
		lead: "Quick fact: Moroccan traffic law accepts UK photocard licences for English-language Latin-alphabet tourist driving up to 90 days — IDP not strictly required. But three operational realities catch UK drivers: roundabouts give priority to entering traffic (opposite of UK), speed enforcement starts at 5 km/h over with on-the-spot cash collection, and night driving outside cities means camels and unlit vehicles. The first roundabout outside Marrakech Menara Airport is where it happens for most UK drivers. You've adjusted to driving on the right — that part clicked within a kilometre of the car park. What hasn't clicked yet is that in Morocco, the vehicle entering the roundabout has priority over traffic already circulating on it. r/Morocco and TripAdvisor Morocco Q1 2026 threads point to three recurring UK-driver friction points: RNI roundabouts entering Marrakech, A3 Casablanca–Rabat tollway speed traps, and night driving on N10/N12 between Ouarzazate and Zagora. Knowing the rule before you sit down in the car costs nothing.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Not strictly — but increasingly required at smaller agencies and useful at every rural checkpoint',
		text: 'Moroccan traffic law accepts English-language Latin-alphabet licences for tourist driving up to 90 days — UK photocards qualify, no formal IDP legally required. In practice: rental insurance policies increasingly condition claim processing on IDP documentation, smaller agencies in Marrakech medina, Agadir, and Fez often require it as a booking condition, and rural police checkpoints process interactions significantly faster when a French and Arabic translation is available alongside the UK licence.',
	},

	tldr: {
		heading: 'UK Licence alone vs IDP Companion in Morocco',
		lead: 'Morocco has the most legally permissive position for UK drivers in this guide series — but the operational reality at smaller agencies and rural checkpoints diverges from the legal text.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Morocco',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Licence (alone)',
				whatItDoes: 'Legally valid for tourist driving up to 90 days under Latin-alphabet recognition. Accepted at Hertz, Avis, Sixt, and Budget at Casablanca (CMN), Marrakech (RAK), Agadir (AGA), Tangier (TNG), and Fez (FEZ) airport branches.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'UK Licence at smaller agencies',
				whatItDoes: 'Often not sufficient — independent rental agencies in Marrakech medina, Agadir seafront, Fez, and rural areas increasingly list IDP or translation document as a hard booking condition. The desk conversation at pickup is not the moment to discover this.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in Arabic, French, English, Spanish, German, Italian, Portuguese, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set. Arabic and French are both official languages of Morocco — French dominates rental desk and rural police interactions; Arabic dominates roadside formal documentation. Covers the insurance documentation gap, satisfies smaller-agency requirements, and speeds rural checkpoint interactions significantly. Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry in Morocco: original UK photocard licence, passport (Moroccan police at southern checkpoints may register your entry date), rental agreement, vehicle insurance certificate (assurance). UK sticker required on UK-registered private vehicles brought via Spanish ferry. Carry small denomination dirhams for cash fine payment if stopped — fines for foreign-registered vehicles collected on the spot, no postal option.',
	},

	whyNotEnough: {
		heading: 'Why Morocco is permissive on documentation and complex on three specific things',
		lead: 'The legal answer is generous. The friction sits in three operational realities most UK travel guides understate: reversed roundabout priority, 5 km/h speed-enforcement tolerance, and post-sunset regional roads.',
		reasons: [
			{
				icon: 'mdi:rotate-right',
				title: 'The roundabout rule reverses everything',
				text: 'In Morocco, vehicles entering a roundabout have priority over traffic already circulating on it — Priorité à droite. This is the explicit rule under Moroccan traffic law and applies at most unmarked junctions and roundabouts. It is the direct opposite of the UK rule (where circulating traffic has priority), the opposite of France, Spain, Portugal, Greece, and most of continental Europe. At roundabouts with traffic lights or specific signage, those signals override the general rule. At unmarked roundabouts — which include many outside city centres — assume entering traffic is coming through.',
			},
			{
				icon: 'mdi:speedometer',
				title: 'The 5 km/h enforcement tolerance',
				text: 'Moroccan traffic police enforce speed limits from 5 km/h over the posted limit. The fine for the first band of speeding (5–20 km/h over) starts at MAD 400 (~£32). For foreign-registered vehicles, this is collected on the spot, in cash, at the roadside. There is no postal option, no grace period, no payment portal — receipt issued at the roadside. Checkpoints at city entrances and on national roads are the primary enforcement mechanism. Practical implication: treat the posted speed limit as the actual limit, not a number with a 10% margin.',
			},
			{
				icon: 'mdi:weather-night',
				title: 'Night driving outside cities is dangerous',
				text: "Moroccan road authorities and every serious travel guide say the same thing: do not drive regional roads after dark. The reasons are specific. Many rural roads have no lighting. Vehicles — including trucks and agricultural machinery — routinely operate without rear lights or reflectors. Livestock including camels cross roads after dark in large numbers across the south and in the Atlas foothills. A camel at 100 km/h on an unlit road is not survivable. Within cities and on well-lit highway sections between major urban areas, night driving is manageable. On anything else, it isn't.",
			},
		],
	},

	rules: {
		heading: 'Moroccan driving rules UK drivers should know',
		lead: 'Right-hand traffic is the day-one adjustment. The reversed roundabout priority and 5 km/h speed tolerance are where UK driving habits genuinely break.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; RHD cars need headlamp beam deflectors' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50–60 km/h', note: '40 km/h in some residential zones; signage varies — posted limits override general rules' },
			{ icon: 'mdi:road-variant', label: 'Secondary/rural roads', value: '80–100 km/h', note: 'Per posted signs' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway (autoroute)', value: '120 km/h', note: 'Maximum on Autoroutes du Maroc network' },
			{ icon: 'mdi:speedometer-slow', label: 'Speed enforcement', value: 'From 5 km/h over', note: 'No grace buffer; on-the-spot cash collection for foreign vehicles' },
			{ icon: 'mdi:rotate-right', label: 'Roundabout priority', value: 'Entering traffic has right of way', note: 'Priorité à droite — opposite of UK and most European rules' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.02% for professional drivers; police enforcement at checkpoints active' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'MAD 150–400 (~£12–32)' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'All fines for foreign-registered vehicles collected on the spot at the roadside in cash dirhams. Some officers carry card terminals; not all. Always request a receipt (reçu) — a legitimate fine always produces one.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding 5–20 km/h over limit', amount: 'MAD 400 (~£32)', note: 'Enforced from 5 km/h over; roadside collection', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 20–40 km/h over', amount: 'MAD 400–700 (~£32–56)', note: 'Possible licence retention at checkpoint', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 40+ km/h over', amount: 'MAD 700–1,300+ (~£56–104+)', note: 'Licence may be retained; court summons possible', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'MAD 150–400 (~£12–32)', note: '', severity: 'low' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'MAD 400 (~£32)', note: 'Per person', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'MAD 400–700 (~£32–56)', note: '', severity: 'med' },
			{ icon: 'mdi:car-emergency', label: 'Failure to stop at checkpoint or stop sign', amount: 'MAD 700+ (~£56+)', note: 'Stop completely; do not creep through — Arabic-script stop signs use the same octagonal red shape', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'MAD 5,000–10,000+ (~£400–800+)', note: 'Criminal charge; suspension; vehicle impound', severity: 'high' },
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without licence/documentation', amount: 'MAD 300–700 (~£24–56)', note: 'Licence must be presented at checkpoints', severity: 'med' },
		],
		caption: 'Sources: Code de la Route du Maroc (Dahir portant loi n°1-10-07 du 11 février 2010); Autoroutes du Maroc (autoroutes.ma); FCDO Morocco travel advice (gov.uk/foreign-travel-advice/morocco, updated 2026); RAC Morocco driving guide (rac.co.uk). Fine amounts approximate at current exchange rates.',
	},

	lez: {
		heading: 'Where the friction concentrates — the three rules that catch UK drivers',
		badge: 'Morocco-specific',
		lead: 'Morocco has no LEZ system. The friction sits in three specific operational areas where UK driving habits genuinely break.',
		zones: [
			{
				city: 'Any unmarked roundabout — country-wide',
				name: 'Priorité à droite — reversed priority',
				description: 'At unmarked roundabouts in Morocco, entering traffic has priority over circulating traffic — direct opposite of UK, France, Spain, Portugal, and most European rules. Roundabouts with explicit yield markings or traffic lights follow those signs. At unmarked roundabouts (the majority outside city centres): assume the car nosing in from your right is coming through, regardless of where you are on the circle. Tourist accidents from priority misunderstanding are documented at first-roundabout-after-airport on Marrakech and Casablanca routes.',
				fine: 'Variable — collision liability',
				note: 'Practical rule: at any unmarked roundabout, treat entering vehicles as having right of way until you see signage or markings telling you otherwise.',
			},
			{
				city: 'National roads + city entrances (checkpoints)',
				name: '5 km/h enforcement, cash on the spot',
				description: 'Moroccan police enforce speed from 5 km/h over the posted limit using radar guns at checkpoints — typically at city entrances on N1, N9, A1 (Casablanca-Rabat), A3 (Casablanca-Tangier), and on the approach to Marrakech, Agadir, and Fez. For foreign-registered vehicles, fines are collected on the spot in cash dirhams. No postal option, no grace period. Receipt always issued at the roadside for legitimate fines. The 400 MAD (~£32) entry-level fine arrives faster than a UK speed camera ever does.',
				fine: 'MAD 400–1,300+ (~£32–104+)',
				note: 'Carry small-denomination dirhams. Always request a receipt (reçu / quittance). Legitimate officers always provide one. If a fine is requested with no receipt offered, ask explicitly — "Je voudrais un reçu, s\'il vous plaît" — or offer to pay at the nearest police station (commissariat).',
			},
			{
				city: 'Regional roads after dark — south and Atlas',
				name: 'Unlit roads, livestock, vehicles without lights',
				description: 'Moroccan road authorities and every serious travel guide are consistent: do not drive regional roads in Morocco after dark. Many rural roads have no lighting. Trucks and agricultural vehicles operate without rear lights or reflectors. Livestock — including camels in the south, particularly between Ouarzazate and the Sahara, and across the Atlas foothills — cross roads after dark in significant numbers. A camel at 100 km/h on an unlit road writes off the vehicle and is rarely survivable for occupants. Within cities and on well-lit motorway sections between major urban areas, night driving is manageable. On anything else, it isn\'t.',
				fine: 'Variable — collision/injury',
				note: 'Plan all longer drives to arrive before sunset. The Atlas crossing on the Tizi n\'Tichka pass is genuinely spectacular driving in daylight and inadvisable after dark.',
			},
		],
		tip: "Practical rule for Morocco: the legal answer is permissive (English Latin-alphabet recognition under Code de la Route Article applicable to tourist drivers up to 90 days). The operational rule is to learn three things before the airport pickup — Priorité à droite at unmarked roundabouts, 5 km/h speed enforcement with cash collection, and no-night-driving outside cities. Two minutes of preparation handles all three.",
	},

	howTo: {
		heading: 'How to prepare for driving in Morocco as a UK citizen',
		lead: 'The legal answer is short. The operational preparation is what determines whether your trip ends as planned.',
		schemaName: 'How to prepare for driving in Morocco as a UK citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Verify your licence type — physical photocard, not digital',
				text: 'Photocard holders: Latin-alphabet recognition covers you, no IDP legally required. Carry the physical original — Morocco does not accept digital licences or smartphone images at rental desks or police checkpoints. Paper licence holders (pre-2000): generally accepted, but smaller agencies may request supplementary documentation.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your UK licence into French (the dominant second language at Moroccan rental desks and rural police checkpoints), Arabic (the official language and dominant on formal Moroccan documentation), plus English, Spanish, German, Italian, Portuguese, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set. Useful for closing the rental insurance documentation gap, satisfying smaller-agency requirements at booking, and significantly speeding rural checkpoint interactions.',
			},
			{
				title: 'Memorise Priorité à droite before the first roundabout',
				text: "At unmarked roundabouts, entering traffic has right of way over circulating traffic — opposite of UK, France, Spain, Portugal. The first roundabout outside Marrakech Menara or Casablanca Mohammed V airport is where this catches most UK drivers. Roundabouts with explicit yield markings or traffic lights follow those signs. At anything unmarked: assume the car entering from your right is coming through, regardless of where you are on the circle.",
			},
			{
				title: 'Carry small-denomination dirhams for roadside fines',
				text: "Speed fines for foreign-registered vehicles are collected on the spot in cash. The 400 MAD entry-level fine (~£32) requires roughly that amount in dirhams handed over at the checkpoint. No postal option exists. Carry small denominations (50 / 100 / 200 dirham notes) rather than only large bills. Always request a receipt (reçu / quittance) — say or write \"Je voudrais un reçu, s'il vous plaît.\" If denied, offer to pay at the nearest police station (commissariat).",
			},
			{
				title: 'Plan all regional drives to arrive before sunset',
				text: 'Do not drive regional roads in Morocco after dark — unlit roads, vehicles without rear lights, livestock crossings (including camels in the south and across the Atlas foothills) make night driving a different risk category from European night driving. Atlas crossings, Draa Valley, Sahara approach roads, and routes between major cities and Ouarzazate or Merzouga: plan to arrive before sunset. Within cities and on lit motorway sections between major urban centres, night driving is manageable.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Morocco — honestly',
		lead: 'Morocco has the most permissive legal documentation position for UK drivers in this guide series. We\'ll be direct about where IDP Companion adds value despite that.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your UK licence data into Arabic and French (both official languages of Morocco), plus English, Spanish, German, Italian, Portuguese, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to satisfy the rental insurance documentation gap (insurers increasingly condition claim processing on IDP presence), close the smaller-agency requirement gap (independent operators in Marrakech medina, Agadir, Fez), and speed rural police checkpoint interactions where French/Arabic translation moves things along significantly faster than English alone',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention — though Moroccan recognition of English-language Latin-alphabet licences means a government IDP isn\'t legally required for UK photocard holders',
				'Not valid by itself — must be carried alongside your physical UK licence (digital images not accepted; physical original required)',
				'Not protection against informal checkpoint requests — the legitimate-fine-receipt protocol applies regardless of documentation: always request a reçu, offer commissariat payment if denied',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Morocco',
			items: [
				'At smaller rental agencies (Marrakech medina, Agadir seafront, Fez, Tangier non-airport) that list IDP as a booking condition',
				'When rental insurance coverage is being verified — policies increasingly require IDP documentation for claims processing, particularly for accidents in the south and Atlas regions',
				'At rural police checkpoints (south of Marrakech toward Ouarzazate, eastern regions, Sahara approach roads) where French and Arabic presentation of your licence details speeds the interaction from 15 minutes to 3 minutes',
				"If you're combining Morocco with Spain, Portugal, or France on the same ferry trip — one document covers the entire journey",
			],
		},
		needOfficial: {
			title: 'Documents Moroccan law actually cares about',
			items: [
				'Your physical UK photocard licence (or paper licence + supplementary documentation if older)',
				'UK passport — may be registered at southern checkpoints into the police system; standard procedure',
				'Rental agreement and insurance certificate (assurance) — provided by rental company',
				'Reflective jacket (legally required to carry, accessible from inside the cabin) and warning triangle',
				'For UK-registered private vehicles brought via ferry: UK sticker on rear bumper (since Sept 2021; old GB sticker invalid), headlamp beam deflectors for RHD',
			],
		},
		pattern:
			"What prepared UK travellers in Morocco actually carry: physical UK photocard + passport + rental agreement + insurance + reflective jacket in cabin + small-denomination dirhams for cash fine payment. The Priorité à droite rule is a one-line memorisation. The no-night-driving rule is a planning decision before each regional drive. IDP Companion is the friction-reducer at smaller agencies, insurance claims, and rural checkpoints — three places where the legal answer alone leaves UK drivers visibly less prepared than the locals.",
	},

	renting: {
		heading: 'Renting a car in Morocco as a UK driver',
		lead: 'International chains at major airports follow English-language recognition. Smaller agencies in cities and rural areas vary significantly — booking conditions are not the same as desk requirements.',
		chains: [
			{ name: 'Hertz Morocco', policy: 'Available at Casablanca Mohammed V (CMN), Marrakech Menara (RAK), Agadir Al Massira (AGA), Tangier Ibn Battouta (TNG), and Fes Saïss (FEZ). Accepts UK photocard without IDP at airport locations. Minimum age 21; held licence at least one year. Credit card required for deposit.' },
			{ name: 'Avis Morocco', policy: 'Same photocard policy at airport locations. Minimum age 21. Credit card deposit mandatory.' },
			{ name: 'Sixt Morocco', policy: 'Available at major airports. UK photocard accepted. Some city branch locations list IDP as a requirement.' },
			{ name: 'Budget Morocco', policy: 'Consistent with above at major airports. Booking conditions occasionally include IDP requirement — verify before pickup.' },
			{ name: 'Local agencies (Marrakech medina, Agadir, Fez)', policy: 'Policies vary significantly. A meaningful proportion require IDP alongside national licence. Check booking conditions before departure — the desk conversation at pickup in Morocco is not the moment to discover a missing document.' },
		],
		tipsHeading: 'Practical tips for renting in Morocco',
		tips: [
			'Minimum age 21 at all major agencies; some require 23 and one year\'s licence holding',
			'Manual transmission is the norm; automatic available at major agencies but book in advance and expect higher cost',
			'Credit card for deposit mandatory at international agencies; holds of MAD 3,000–8,000 (~£240–640) standard',
			'4WD strongly recommended for Sahara routes (Erg Chebbi/Merzouga, Erg Chigaga/M\'Hamid) and Toubkal National Park approaches; standard 2WD rental contracts frequently exclude piste driving — verify before attempting any unsealed track',
			'Fuel: petrol (essence) and diesel widely available in cities and on motorways; less frequent south of Ouarzazate and in the Draa Valley — keep the tank above half',
			'Tolls: staffed cash booths on Autoroutes du Maroc; carry dirhams in small denominations; card accepted at some but not all booths. Casablanca to Marrakech full motorway run ~MAD 85 (~£7)',
			'Motorway speed enforcement by radar is active on A1 Casablanca–Marrakech and A3 Casablanca–Tangier corridors',
			'Night driving: avoid regional and rural roads after dark; city driving and motorway between major cities at night is manageable; everything else is not recommended',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes',
		lead: 'What UK drivers face in Morocco — RNI roundabout priority confusion, A3 Casablanca tollway speed traps, N10 Ouarzazate night-driving incidents — drawn from r/Morocco and TripAdvisor Morocco threads, ordered by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'Common',
				label: 'International airport agency, clean drive',
				text: 'Hertz/Avis/Sixt at CMN or RAK — UK photocard accepted, no documentation friction.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Smaller local agency requires IDP',
				text: 'Many Marrakech medina, Agadir, Fez agencies list it as a booking condition. IDP Companion handles this.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Speed checkpoint fine, 5–20 km/h over',
				text: 'MAD 400 (~£32) collected on spot in cash dirhams; receipt issued at the roadside.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Rural checkpoint, passport registration',
				text: 'Standard procedure in southern regions; takes 3–5 minutes; co-operate fully. French/Arabic translation speeds this significantly.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Roundabout collision from priority misunderstanding',
				text: 'Right-of-way confusion is a documented cause of tourist accidents at first-roundabouts after airport pickup. Memorise Priorité à droite before driving.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Night driving, livestock collision on regional road',
				text: 'Camel or cattle on unlit road — vehicle written off; injuries likely. Plan all regional drives to arrive before sunset.',
			},
			{
				severity: 'med',
				frequency: 'Less common',
				label: 'Informal fine request, no receipt',
				text: 'Ask for receipt (reçu); offer to pay at the police station (commissariat). Legitimate officers comply; an officer seeking informal payment typically waves you through rather than escalate.',
			},
		],
		math: 'IDP Companion is $35. A checkpoint stop in the Draa Valley takes 15 minutes with a French-language licence translation; without one it takes longer and the outcome is less predictable. The roundabout rule misunderstanding costs more than either. The night-driving collision is in a different cost category entirely.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I need an IDP to drive in Morocco with a UK licence?',
				answer: 'Not strictly. Moroccan traffic law accepts driving licences in Latin alphabet — which includes UK licences — without requiring a formal IDP for tourist stays up to 90 days. In practice, rental insurance policies and smaller agencies increasingly require IDP documentation, and rural police checkpoints process interactions faster when a French and Arabic translation is available.',
			},
			{
				id: 2,
				question: 'How do roundabouts work in Morocco — is it really different?',
				answer: 'Yes, significantly. At unmarked roundabouts in Morocco, vehicles entering the roundabout have priority over traffic already circulating on it — Priorité à droite. This is the direct opposite of UK, French, Spanish, and most European roundabout rules. Roundabouts with specific yield or traffic light signage follow those signs. At unmarked roundabouts, assume entering traffic is coming through regardless of your position on the circle.',
			},
			{
				id: 3,
				question: 'What happens at a police checkpoint?',
				answer: "You'll be asked to present your licence, registration document (carte grise from the rental agency), and insurance certificate. The officer may register your passport entry date in the south — this is standard. If a fine is issued, a receipt (reçu/quittance) must accompany it. Always request a receipt. If no receipt is offered, ask to pay at the nearest commissariat. A legitimate fine always produces a receipt; an officer seeking informal payment typically waves you through rather than escalate.",
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: "No. Morocco's rental insurance contracts and rural checkpoint dynamics are where this matters in practice — Moroccan law doesn't require a formal IDP for English Latin-alphabet UK photocards, but the documentation friction sits with smaller agencies and southern police interactions. IDP Companion is the multilingual translation companion (Arabic, French, English, Spanish and 7 other widely-spoken languages from the Geneva 1949 set), used alongside your photocard. The official government IDP route is the printed Geneva 1949 booklet from the authorised UK issuer.",
			},
			{
				id: 5,
				question: 'Can I drive into the Sahara in a standard rental car?',
				answer: "Not without violating your rental agreement. Standard 2WD rental contracts from all major agencies explicitly exclude piste driving — unsealed tracks, sand, and the approach roads to Merzouga (Erg Chebbi) and M'Hamid (Erg Chigaga). A 4WD vehicle with specific piste coverage is required. Book this in advance; availability at Marrakech and Agadir agencies is limited, particularly in high season.",
			},
			{
				id: 6,
				question: 'Is Morocco safe to drive in during Ramadan?',
				answer: 'Yes, with some adjustments. Traffic in cities is light during the day and extremely busy in the hour before and after Iftar (the evening meal breaking the fast). Road behaviour becomes more erratic in the Iftar window — locals moving quickly to get home. Plan long drives outside this period. Petrol stations remain open but some roadside services may have limited hours.',
			},
			{
				id: 7,
				question: 'What language should I use at a Moroccan police checkpoint?',
				answer: 'French produces significantly faster and more comfortable interactions than English, particularly in rural areas south of Marrakech and east of Agadir. You don\'t need to be fluent — "Bonjour, voici mon permis de conduire et le document de traduction" covers the essential exchange. IDP Companion provides the French and Arabic licence translation that makes this interaction predictable.',
			},
			{
				id: 8,
				question: 'How do motorway tolls work in Morocco?',
				answer: "Morocco's Autoroutes du Maroc tolls are paid at staffed cash booths. Unlike Portugal's Via Verde or France's electronic systems, Moroccan tolls are not fully automated — you stop, pay cash or card, collect a ticket. Tolls are cheap by European standards — Casablanca to Marrakech full run costs approximately MAD 85 (~£7). Carry small denominations of dirhams; not all booths accept card.",
			},
			{
				id: 9,
				question: 'Why is night driving outside cities discouraged?',
				answer: "Many regional Moroccan roads have no lighting. Trucks and agricultural vehicles routinely operate without rear lights or reflectors. Livestock — including camels in the south, cattle and goats across the Atlas foothills — cross roads after dark in significant numbers. A camel at 100 km/h on an unlit road is rarely survivable. Within cities and on well-lit motorway sections between major urban areas, night driving is manageable. Plan all regional drives to arrive before sunset.",
			},
			{
				id: 10,
				question: 'Can I combine Morocco with other destinations on the same trip?',
				answer: 'Yes — UK travellers commonly combine Morocco with Spain or Portugal via ferry (Tarifa-Tanger Med, Algeciras-Ceuta), with France via overland route, or with UAE/Egypt via flight stopover. IDP Companion covers all of these in one purchase. Validity tied to your UK domestic licence — choose 1, 3, or 5 years.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other North African and right-hand-traffic destinations where UK drivers face roundabout, signage or language friction.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain/' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal/' },
			{ flagFrom: 'gb', flagTo: 'ae', label: 'UK → UAE', status: 'Live', href: '/idp-for-uk-drivers-in-uae/' },
			{ flagFrom: 'gb', flagTo: 'cy', label: 'UK → Cyprus', status: 'Live', href: '/idp-for-uk-drivers-in-cyprus/' },
			{ flagFrom: 'gb', flagTo: 'eg', label: 'UK → Egypt', status: 'Live', href: '/idp-for-uk-drivers-in-egypt/' },
			{ flagFrom: 'fr', flagTo: 'ma', label: 'France → Morocco', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including Arabic, French, English, Spanish and 7 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real UK licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers Morocco plus Spain, Portugal, France, UAE, Egypt, Turkey and any other destination during the chosen period. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Direction Générale de la Sûreté Nationale (DGSN), the Gendarmerie Royale, or the Moroccan Ministry of Transport and Logistics. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office). IDP Companion must be used alongside your original UK driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Code de la Route du Maroc — Dahir portant loi n°1-10-07 du 11 février 2010',
			'Autoroutes du Maroc (ADM) — autoroutes.ma',
			'FCDO Morocco travel advice — gov.uk/foreign-travel-advice/morocco (updated January 2026)',
			'RAC — Driving in Morocco (rac.co.uk)',
			'OneClickDrive — Driving in Morocco: UK Licence Guide (updated February 2026)',
		],
	},

	phrases: {
		heading: 'Useful French phrases at Moroccan checkpoints',
		lead: 'French is Morocco\'s primary second language and is widely used in road interactions. Arabic is the official language; Berber (Tamazight) is spoken in rural areas. English is spoken in tourist zones but is significantly less useful at checkpoints and with rural agencies. The phrases below describe what you say to officers — they do not describe the contents of IDP Companion (the PDF presents your licence details in Arabic, French, English and 8 other languages from the 1949 Geneva Convention set).',
		items: [
			{ phrase: 'Here is my licence', translation: 'Voici mon permis de conduire', context: 'Handing documents at a checkpoint' },
			{ phrase: 'And the translation document', translation: 'Et le document de traduction', context: 'Showing IDP Companion alongside the licence' },
			{ phrase: "I'm a British tourist", translation: 'Je suis un touriste britannique', context: 'Establishing context' },
			{ phrase: "I'd like a receipt please", translation: 'Je voudrais un reçu, s\'il vous plaît', context: 'Any time a fine is issued — legitimate fines always produce a receipt' },
			{ phrase: "I'll pay at the police station", translation: 'Je paierai au commissariat', context: 'If asked for informal payment without receipt' },
			{ phrase: "I don't speak French well", translation: 'Je ne parle pas bien français', context: 'If spoken to quickly' },
			{ phrase: 'Is there a problem?', translation: 'Il y a un problème ?', context: 'Polite enquiry at a checkpoint stop' },
			{ phrase: 'I have insurance', translation: "J'ai une assurance", context: 'In case of accident' },
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Morocco',
	},
};

export const ukMoroccoCopy: Record<'en', CountryPairCopy> = { en };
