/**
 * Country-pair content: United States → South Africa.
 * Tier 2. Locales: en only.
 *
 * Killer angles for South Africa:
 *  - LEFT-HAND TRAFFIC complete reversal for US drivers (legacy of British
 *    colonial infrastructure). Wide SA roads make this more manageable
 *    than narrow Malta or Bali, but the first hour is still deliberate.
 *  - "ROBOT" = traffic light. Universal South African English term used
 *    by all 11 language communities. Direction-giving requires knowing it.
 *  - BUMP-AND-ROB protocol: stay in the car at low-speed rear bumps on
 *    quiet roads; drive to filling station before stopping. Documented
 *    pattern.
 *  - Speed traps at town-exit limit transitions (100 → 60 km/h) with
 *    radar guns positioned at the transition.
 *  - Distances dramatically underestimated by US tourists — Cape Town to
 *    Johannesburg = 1,400 km (~14 hours).
 *
 * PDF language note: Zulu and Afrikaans are NOT on the IDP Companion
 * template. South Africa has 11 official languages but tourism, signage,
 * SAPS officer interactions, and rental-desk operations run in English.
 * English IS on the PDF — that's the verification path.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in South Africa: 2026 Guide',
		description:
			'Left-hand traffic. Traffic lights called \'robots.\' Bump-and-rob protocol: don\'t stop if hit from behind. US licence technically valid in English — but most rental companies require IDP. The Garden Route is worth every minute of prep. IDP Companion in 2 min — $35.',
		ogTitleShort: 'US Drivers in South Africa: 2026 Guide',
		ogSubtitle: 'Left-hand traffic. Robots. Bump-and-rob. The Garden Route.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → South Africa',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → South Africa · 2026 Guide',
		title: 'IDP for US Drivers in South Africa: Robots, Bump-and-Rob, Garden Route',
		lead: "The first time a Cape Town local gives you directions, they say \"turn left at the robot.\" In South Africa, traffic lights are called robots — universally, by every language community, not slang. The second adjustment: South Africa drives on the left. Steering wheel on the right, left lane is normal, overtaking goes to the right. The third: if a car bumps your rear at low speed on a quiet road, do NOT get out to inspect — keep doors locked and drive to the nearest filling station. The bump-and-rob protocol is standard advice from every South African tourism authority. Documentation: US English-language licence with photo is technically valid under the National Road Traffic Act, but most rental companies require an IDP or translation document as a booking condition. Two minutes for the document. The robots are the traffic lights. The Garden Route delivers on its reputation.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Technically optional — but rental companies require it as a booking condition',
		text: "South Africa's National Road Traffic Act accepts foreign licences that are valid, in English, and carry a photo. US licences meet all three criteria — legally you don't need an IDP. In practice, most rental companies — Hertz, Avis, Budget, Europcar — apply their own booking conditions requiring an IDP or translation document alongside any foreign licence. The bigger preparation items for US drivers are directional (left-hand traffic), safety-protocol-related (bump-and-rob awareness, doors locked at robots), and geographic (distances are much longer than they look on a map).",
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in South Africa',
		lead: 'Your US English-language licence is legally accepted under the National Road Traffic Act. The IDP requirement comes from rental contracts, not state law.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in South Africa',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Technically valid — SA National Road Traffic Act 93 of 1996 accepts English-language licences with photos. Likely creates friction at rental desks that apply IDP requirements to all foreign licences as a booking condition (Hertz, Avis, Europcar all do this for non-EU holders).',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in 12 languages — including English (the working language at every South African rental desk, SAPS roadblock, and tourist-area interaction across all 11 official languages). Satisfies most rental-company IDP booking requirements; provides standardised reference at police roadblocks; works as backup at any tourist-area interaction.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry alongside IDP Companion: original physical US driver licence, US passport (entry stamp), rental agreement, vehicle insurance. Keep doors locked and windows up at robots (traffic lights). South Africa drives on the LEFT — steering wheel on the right.',
	},

	whyNotEnough: {
		heading: 'Why preparation matters more in South Africa than the documentation',
		lead: 'For most US tourists, the rental-desk gap is the smaller preparation. The three larger items are directional, behavioural-safety, and geographic.',
		reasons: [
			{
				icon: 'ph:steering-wheel-bold',
				title: 'Left-hand traffic — complete directional reversal',
				text: 'South Africa drives on the left, legacy of British colonial road infrastructure. Steering wheel on the right, left lane is normal, overtaking happens on the right. Every directional reflex built by US driving is inverted: which lane to take, where to look first at junctions, how to position for an overtake. Wide South African roads make this more manageable than Malta or Bali, but the first hour after rental pickup is still deliberate and slow. Most drivers adapt within 30–60 minutes.',
			},
			{
				icon: 'mdi:shield-half',
				title: 'The bump-and-rob protocol — stay in the car',
				text: 'A documented vehicle crime pattern in South Africa involves a car deliberately bumping the rear of your vehicle at low speed on a quiet road. When you get out to inspect, occupants of the other car rob you. The correct protocol: do NOT get out. Drive to the nearest filling station, shopping centre, or police station before stopping. This sounds excessive until you\'ve read accounts of it — the AA of South Africa, every reputable tourism authority, and every experienced self-drive guide mentions it. The habit costs nothing.',
			},
			{
				icon: 'mdi:speedometer-medium',
				title: 'Speed traps at town-exit transitions',
				text: 'Speed traps operate at the outskirts of towns specifically — where the limit drops from 100 km/h to 60 km/h as you enter the built-up area. Police with radar guns position themselves at exactly these transition points. Fines are issued to the rental company and charged to your card with an admin fee. The pattern is consistent across the country: when you see the town-name sign, the limit has already dropped — adjust speed before the sign, not after.',
			},
		],
	},

	rules: {
		heading: 'South African driving rules US drivers should know',
		lead: 'Left-hand traffic and the 0.05% BAC limit (stricter than US 0.08%) are the two regulatory items that catch Americans. Wide roads make the directional adjustment more forgiving than narrow-island destinations.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Complete reversal from the US; steering wheel on the right' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '60 km/h', note: 'Speed traps positioned at town-entry transitions where limit drops from 100' },
			{ icon: 'mdi:road-variant', label: 'Open road / rural', value: '100 km/h', note: 'Drops to 60 km/h at every town — adjust before the sign' },
			{ icon: 'mdi:speedometer-medium', label: 'Freeway / highway', value: '120 km/h', note: 'N1, N2, N3 between major cities' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter than US 0.08%; ZAR 120,000 fine + up to 6 years imprisonment; breathalyser after any accident' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Hands-free permitted' },
			{ icon: 'mdi:traffic-light', label: 'Robot', value: 'Traffic light', note: 'Universal SA English term — used by all 11 language communities for direction-giving' },
			{ icon: 'mdi:car-arrow-right', label: 'Four-way stops', value: 'First to arrive goes first', note: 'Simultaneous arrival: vehicle on the right goes; eye contact + sequence works in practice' },
		],
	},

	fines: {
		heading: '2026 fines in South Africa',
		lead: 'Camera fines and speed-trap fines from rental cars are billed to the rental company, which charges them to your card with an admin fee. On-the-spot fines at roadblocks are documented but receipts should always be requested.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (minor, up to 20 km/h over)', amount: 'ZAR 500–1,500 (~$27–82)', severity: 'low', note: 'Speed trap at town exits; fine to rental company + admin fee' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (significant, 20–30 km/h over)', amount: 'ZAR 1,500–3,000 (~$82–163)', severity: 'med', note: '' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (severe, 30+ km/h over)', amount: 'ZAR 3,000+ (~$163+)', severity: 'high', note: 'Criminal summons possible' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'Up to ZAR 120,000 (~$6,500)', severity: 'high', note: 'Up to 6 years imprisonment; breathalyser mandatory after accidents' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'ZAR 500–1,000 (~$27–55)', severity: 'med', note: 'Per person' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'ZAR 500–1,500 (~$27–82)', severity: 'med', note: '' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light (robot)', amount: 'ZAR 1,000–3,000 (~$55–163)', severity: 'high', note: '' },
			{ icon: 'mdi:car-multiple', label: 'Toll road (N1, N3) — booth/transponder', amount: 'ZAR 50–200', severity: 'low', note: 'Confirm at rental pickup whether your car has an e-tag transponder' },
		],
		caption: 'Sources: South African National Road Traffic Act 93 of 1996; AARTO (Administrative Adjudication of Road Traffic Offences) fine schedule 2026; AA of South Africa traffic enforcement summary. ZAR/USD approximated at 18.4:1 May 2026.',
	},

	honesty: {
		heading: 'How IDP Companion fits in South Africa — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages including English — the universal working language at every South African rental desk, SAPS roadblock, and tourist-area interaction across the country\'s 11 official languages',
				'A standardised layout that\'s easier for a South African rental agent or SAPS officer to read than a US state-specific licence format',
				'An instant digital download — print before departure; printed copy preferred at roadblocks over phone screens',
				'Designed to be carried alongside your physical US licence, not as a replacement',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a legal requirement for US drivers with English-language licences and photos — SA National Road Traffic Act technically accepts these directly',
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — your physical US driver\'s licence must be carried alongside it at all times',
				'Not a safety protocol for bump-and-rob situations — that requires staying in the car and driving to a filling station, not presenting a document',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in South Africa',
			items: [
				'At rental desks at OR Tambo (JNB), Cape Town International (CPT), Durban King Shaka (DUR), and elsewhere where IDP is required as a booking condition for foreign licences',
				'At SAPS roadblocks (which are routine and not cause for alarm) where a standardised English-language document supports your US state licence',
				'For any agency that requires a formal translation alongside the national licence',
				'If your trip continues to Namibia, Botswana, or Zimbabwe — IDP Companion covers those destinations on the same purchase',
			],
		},
		needOfficial: {
			title: 'What SA authorities and rental companies actually expect',
			items: [
				'Original physical US driver licence — valid, in English, with photo (SA Act requirements)',
				'US passport with South African entry stamp — US citizens enter visa-free for 90 days',
				'IDP or translation document — legally optional for English licences, practically required by most rental contracts',
				'Rental agreement and vehicle insurance',
				'Awareness of the bump-and-rob protocol on quiet roads',
			],
		},
		pattern: "The pattern: your US licence is legally fine under the National Road Traffic Act. The translation companion covers the rental-desk booking condition. The safety protocols cover the road. The directional reversal covers itself within the first hour.",
	},

	renting: {
		heading: 'Renting a car in South Africa as a US driver',
		lead: 'Major chains operate at OR Tambo (JNB), Cape Town International (CPT), King Shaka (DUR), and city locations. All apply IDP booking conditions to foreign licences regardless of English-language status.',
		chains: [
			{ name: 'Hertz South Africa', policy: 'Available at JNB, CPT, DUR, and major cities. IDP required for all foreign licences as booking condition. Minimum age 23; held licence at least 2 years. Credit card for deposit.' },
			{ name: 'Avis South Africa', policy: 'Same IDP policy. Available nationwide. Minimum age 23 at most locations. Credit card required.' },
			{ name: 'Budget South Africa', policy: 'T&Cs require IDP "if applicable" — specifically required for non-Roman-alphabet licences. US English licences technically exempt under SA Act, but most Budget agents enforce IDP requirement universally. Minimum age 23.' },
			{ name: 'Europcar South Africa', policy: 'IDP required. Available at major airports and cities. Minimum age 23.' },
		],
		tipsHeading: 'Practical tips for US drivers in South Africa',
		tips: [
			'Minimum age 23 at most major agencies; some require 25 for premium or 4WD vehicles; held licence for minimum 2 years',
			'Credit card mandatory; deposit holds of ZAR 3,000–15,000 (~$163–815) standard depending on vehicle category',
			'Automatic transmission widely available; manual also available and often cheaper',
			'4WD: NOT required for most tourist routes including Kruger National Park main roads and Garden Route; needed only for off-road game reserves and dirt tracks',
			'Toll roads (N1, N3): confirm whether the rental car has an e-tag transponder; if not, carry cash (ZAR) for booth payment',
			'Fuel: always fill up before entering the Karoo, the Northern Cape, or rural Limpopo — stations can be 100+ km apart',
			'Kruger National Park: self-drive is excellent and recommended; 2WD sufficient for all main camps and roads; keep windows up inside the park (game rules, not crime rules)',
			'Doors locked, windows up at robots (traffic lights) in urban areas — Johannesburg, Cape Town, Durban particularly; smash-and-grab is a documented pattern at city intersections',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in South Africa',
		lead: 'The realistic range of outcomes for US tourists — ranked by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'common',
				label: 'Smooth rental with IDP Companion, left-hand adjustment',
				text: 'Standard experience. Documentation accepted at the desk in standard time. Wide SA roads make the directional adjustment more forgiving than narrow-island destinations.',
			},
			{
				severity: 'low',
				frequency: 'every US visitor',
				label: 'Left-hand traffic adjustment, first hour',
				text: 'Deliberate slow start. Most US drivers adapt within 30–60 minutes. SA\'s wide roads give more margin for the recalibration than Malta or Bali.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Rental desk, US licence alone, IDP requested',
				text: 'Many agencies require IDP as a booking condition for any foreign licence regardless of English-language status. IDP Companion resolves on the spot.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Speed trap at town exit (100 → 60 km/h transition)',
				text: 'Police with radar at the limit-change point. Fine ZAR 500–1,500 to the rental company + admin fee charged to your card.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Police roadblock',
				text: 'Routine. Present documents. Professional interaction. Not cause for alarm.',
			},
			{
				severity: 'med',
				frequency: 'less common',
				label: 'Bump at traffic light or quiet road, suspicious circumstances',
				text: 'Stay in the car. Doors locked. Drive to the nearest filling station, shopping centre, or police station before stopping. Standard advice from every SA tourism authority.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'DUI over 0.05% BAC',
				text: 'Stricter than US 0.08%. Fine up to ZAR 120,000 (~$6,500). Up to 6 years imprisonment. Breathalyser compulsory after any accident.',
			},
			{
				severity: 'med',
				frequency: 'less common',
				label: 'Running out of fuel in rural Karoo',
				text: 'Fill up before any rural route. Plan for 100+ km between stations on Northern Cape, rural Limpopo, and Karoo routes.',
			},
		],
		math: 'IDP Companion is $35. A Garden Route self-drive takes 5–7 days and covers ~800 km. The speed trap at the Swellendam exit starts at ZAR 500 (~$27). The DUI fine starts at ZAR 120,000 (~$6,500). The preparation is proportionate to the route and the legal exposure.',
	},

	phrases: {
		heading: 'South African English distinctions US drivers should recognise',
		lead: 'South Africa has 11 official languages but English is universal at rental desks, on road signs, and in any tourist-area interaction. A few vocabulary differences from US English catch Americans specifically — particularly when receiving directions:',
		items: [
			{ phrase: 'Robot', translation: 'Traffic light', context: 'Universal SA English — "turn left at the robot" means turn left at the traffic light. Used by all language communities. Not slang.' },
			{ phrase: 'Pavement', translation: 'Sidewalk', context: 'Directions: "the shop is on the pavement" = the shop is on the sidewalk' },
			{ phrase: 'Bakkie', translation: 'Pickup truck', context: 'What you see on every rural road and at every braai' },
			{ phrase: 'Filling station / Garage', translation: 'Gas station', context: 'Where to fuel up; the safe place to drive to after a bump-and-rob situation' },
			{ phrase: 'Boot', translation: 'Car trunk', context: 'When asking about cargo space at the rental desk' },
			{ phrase: 'Bonnet', translation: 'Car hood', context: 'In case of breakdown — pop the bonnet' },
			{ phrase: 'Tarred road', translation: 'Paved road', context: 'Directions and rental agreements — opposite of "gravel road"' },
			{ phrase: 'Now now / Just now', translation: 'Soon (now now) / Sometime later (just now)', context: '"Now now" is sooner than "just now" — both mean "not right this second"' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in South Africa (US citizens)',
		lead: 'South Africa rewards preparation in five places: documentation, directional adjustment, safety protocols, distance honesty, and fuel planning.',
		schemaName: 'How to prepare for driving in South Africa as a US citizen',
		duration: 'PT25M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card. Photocopies are not accepted at South African rental desks or SAPS roadblocks. National Road Traffic Act requires valid licence + English language + photograph — your US state licence meets all three.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. English is on the document — the universal working language across South Africa\'s 11 official-language communities. Covers the rental-desk booking-condition formality (Hertz, Avis, Budget, Europcar all require this for foreign licences).',
			},
			{
				title: 'Mental rehearsal for left-hand traffic + 4-way stops',
				text: 'Steering wheel on the right. Normal driving lane is the LEFT lane. Overtake on the right. At 4-way stops: first to arrive goes first; simultaneous arrival yields to the vehicle on the right; eye contact establishes the sequence. Most US drivers adapt within 30–60 minutes.',
			},
			{
				title: 'Learn the bump-and-rob protocol before you fly',
				text: 'If a car bumps your rear at low speed on a quiet road and the situation feels off: do NOT get out. Keep doors locked, windows up, and drive to the nearest filling station, shopping centre, or police station before stopping. Standard advice from every South African tourism authority including the AA of South Africa.',
			},
			{
				title: 'Plan distances honestly + carry fuel reserves',
				text: 'South Africa is larger than Texas + California + Montana + Arizona combined. Cape Town to Johannesburg = 1,400 km (~14 hours). Cape Town to Kruger = 1,600 km. The Garden Route (Cape Town to Port Elizabeth) needs 5–7 days minimum to do honestly. Fill up before any rural route in the Karoo, Northern Cape, or rural Limpopo — stations can be 100+ km apart.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do US tourists legally need an IDP to drive in South Africa?',
				answer: 'Not strictly. South Africa\'s National Road Traffic Act 93 of 1996 accepts foreign licences that are valid, in English, and carry the holder\'s photograph and signature. US licences meet all three criteria. Most rental companies, however, apply their own booking conditions requiring an IDP or translation document alongside any foreign licence. IDP Companion satisfies this rental-desk requirement.',
			},
			{
				id: 2,
				question: 'What are robots and why does everyone keep saying that?',
				answer: '"Robot" is the standard South African English term for a traffic light. It is used universally by all 11 language communities in South Africa and is not slang. When receiving directions, "at the robot" means "at the traffic light." Derived from early automatic signal lights which South Africans thought resembled robots. You will hear it in Cape Town, Johannesburg, Durban, and at a roadside tuck shop in Limpopo.',
			},
			{
				id: 3,
				question: 'What is the bump-and-rob situation?',
				answer: 'A documented vehicle crime pattern involves a car deliberately bumping the rear of your vehicle at low speed, then robbing you when you get out to inspect the damage. The correct response: stay in the car, keep doors locked, and drive to the nearest filling station, shopping centre, or police station before stopping. This is standard advice from every South African tourism authority including the AA of South Africa and is widely documented in self-drive guides.',
			},
			{
				id: 4,
				question: 'Is South Africa safe to drive in?',
				answer: 'Self-driving in South Africa is common and generally safe with appropriate awareness. The major tourist routes — Garden Route, Cape Winelands, Kruger Park roads, N1 Cape Town–Johannesburg — are well-travelled and manageable. Urban driving requires awareness (doors locked at robots, nothing visible in parked cars). Night driving on unfamiliar rural roads is not recommended. Follow accommodation hosts\' advice about areas to avoid locally — they have specific knowledge that general guidebooks don\'t.',
			},
			{
				id: 5,
				question: 'What\'s the alcohol limit compared to the US?',
				answer: 'South Africa applies 0.05% BAC for private drivers — stricter than most US states (0.08%). One to two drinks puts many adults near this limit. The fine is up to ZAR 120,000 (~$6,500) and carries up to six years\' imprisonment. Breathalyser tests are compulsory after any accident.',
			},
			{
				id: 6,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document. It is not a government IDP under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your physical US licence as the English-language translation aid that satisfies most South African rental-desk booking conditions and provides a standardised reference at any SAPS roadblock.',
			},
			{
				id: 7,
				question: 'Do I need 4WD in South Africa?',
				answer: 'For most tourist routes — Garden Route, Cape Winelands, Kruger Park main roads, major N-roads — no. A standard 2WD saloon or hatchback is sufficient. A 4WD or high-clearance vehicle is needed only for off-road game reserves, private bush camps accessed via gravel tracks, and some remote national park sections. Kruger\'s main camp roads are fully accessible in 2WD.',
			},
			{
				id: 8,
				question: 'How do four-way stops work in South Africa?',
				answer: 'The first vehicle to arrive goes first. If two arrive simultaneously, the vehicle on the right goes first. All drivers make eye contact, proceed in the established sequence, and wave acknowledgement. The system is orderly once you understand the eye-contact element. It is used widely throughout South Africa in place of traffic lights at secondary intersections.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to long-haul self-drive destinations.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'au', label: 'US → Australia', status: 'Live', href: '/idp-for-us-drivers-in-australia/' },
			{ flagFrom: 'us', flagTo: 'is', label: 'US → Iceland', status: 'Live', href: '/idp-for-us-drivers-in-iceland/' },
			{ flagFrom: 'gb', flagTo: 'za', label: 'UK → South Africa', status: 'Live', href: '/idp-for-uk-drivers-in-south-africa/' },
			{ flagFrom: 'us', flagTo: 'cr', label: 'US → Costa Rica', status: 'Live', href: '/idp-for-us-drivers-in-costa-rica/' },
			{ flagFrom: 'us', flagTo: 'ma', label: 'US → Morocco', status: 'Live', href: '/idp-for-us-drivers-in-morocco/' },
			{ flagFrom: 'de', flagTo: 'za', label: 'Germany → South Africa', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Robots, bump-and-rob, Garden Route — preparation in proportion to the route',
		text: 'South Africa rewards preparation. Left-hand traffic takes the first hour. The robots are the traffic lights. The bump-and-rob protocol is stay in the car. The Garden Route delivers on its reputation for everyone who plans the distance honestly. IDP Companion takes two minutes, has English physically on the document (the universal working language across all 11 official-language communities), and covers the rental-desk booking condition at every airport from Cape Town to OR Tambo.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the South African Police Service (SAPS), the Road Traffic Management Corporation (RTMC), the South African Department of Transport, or the AA of South Africa. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention (South Africa acceded to both). Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'South African National Road Traffic Act 93 of 1996 — foreign licence validity requirements',
			'AARTO — Administrative Adjudication of Road Traffic Offences fine schedule 2026 — aarto.gov.za',
			'AA of South Africa — driving and IDP guidance — aa.co.za',
			'Road Traffic Management Corporation (RTMC) — rtmc.co.za',
			'US Embassy Pretoria — driving advisory — za.usembassy.gov',
			'South African Tourism — driving guidance — southafrica.net',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'South Africa',
	},
};

export const usSouthAfricaCopy: Record<'en', CountryPairCopy> = { en };
