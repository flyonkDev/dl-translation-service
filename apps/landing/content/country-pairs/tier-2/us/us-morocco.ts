/**
 * Country-pair content: United States → Morocco.
 * Tier 2. Locales: en only.
 *
 * Killer angles for Morocco:
 *  - PRIORITÉ À DROITE — at unmarked roundabouts entering traffic has
 *    right of way over circulating traffic. Direct INVERSE of US rule.
 *  - 5 km/h speed enforcement tolerance — fines collected cash on the
 *    spot from foreign-plated vehicles, starting at 400 MAD (~$40).
 *  - Military checkpoints on routes south of Marrakech (N9 to Ouarzazate,
 *    N13 to Errachidia, approaches to Algerian border) work in Arabic
 *    and French — English is NOT the operational language outside major
 *    tourist zones.
 *  - Rental insurance clause: most Moroccan rental policies condition
 *    coverage on presence of an IDP/translation document — desk may not
 *    enforce at pickup but insurance company reviews at claim time.
 *
 * PDF languages used here (all verified on template):
 *   - Arabic ✓ (Geneva 1949 standard non-Latin block)
 *   - French ✓ (page 12 of template, French is Morocco's working
 *     second language at all checkpoints)
 *   - English ✓
 *   - Spanish ✓
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Morocco: 2026 Guide',
		description:
			'US licence technically recognised in Morocco for 90 days, but rental insurance requires IDP for claims, speed fines from 5 km/h over, roundabout priority is inverted, and Marrakech-to-Merzouga checkpoints work in French. IDP Companion in 2 min — $35.',
		ogTitleShort: 'US Drivers in Morocco: IDP Guide 2026',
		ogSubtitle: 'Roundabouts backwards. Fines from 5 km/h. Insurance needs it.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Morocco',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Morocco · 2026 Guide',
		title: 'IDP for US Drivers in Morocco: Roundabouts Backwards, Fines from 5 km/h',
		lead: "The roundabout outside Marrakech Menara Airport is the first one most Americans hit in Morocco, and it works backwards. US logic: traffic on the circle has priority, entering traffic yields. Morocco logic: at unmarked roundabouts, traffic entering from the right has priority — vehicles already circulating must yield. Same circle, opposite priority. The other reality: speed fines start at 5 km/h over the posted limit, 400 MAD (~$40) cash on the spot from foreign plates, with the village limit dropping from 80 km/h to 40 km/h and a radar gun parked at the transition. A US licence is technically recognised for 90 days — but most Moroccan rental insurance policies condition coverage on having an IDP, and the military checkpoint on the N9 south of Marrakech asks for it in French. Two minutes for the document. The roundabout requires knowing the rule before the airport exit.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Technically optional — but rental insurance and southern checkpoints require it',
		text: "Moroccan law recognises US English-language licences for tourist stays up to 90 days without specifically mandating an IDP. In practice three things drive the IDP decision: (1) most rental insurance policies condition coverage on a valid IDP alongside the national licence, (2) military checkpoints on routes south of Marrakech and east of Agadir ask for the IDP and operate in Arabic and French, (3) the rental desk's booking conditions often list a translation document as required even when state law doesn't. IDP Companion is in Arabic and French (both physically on the document), which is what the operational language at most non-tourist-area interactions actually is.",
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in Morocco',
		lead: 'Your US licence covers the legal basis for 90 days. The Arabic and French translation closes the rental insurance gap and speeds up the Gendarmerie stop.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Morocco',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Technically valid for 90 days — Moroccan law recognises English-language Latin-script licences. Accepted at major international airport rental agencies. Likely questioned at smaller local agencies, at military checkpoints south of Marrakech, and in any post-accident insurance claim review.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in 12 languages — including Arabic and French (both physically on the Geneva 1949 document and Morocco\'s two operational languages at checkpoints and rental desks). Satisfies rental insurance documentation requirements; provides Arabic and French reference at Gendarmerie Royale stops and southern military checkpoints.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry alongside IDP Companion: original physical US driver licence, passport (may be registered at southern checkpoints), rental agreement, vehicle insurance certificate. Carry dirhams in cash for on-the-spot fines — card terminals are not available at all roadside stops.',
	},

	whyNotEnough: {
		heading: 'Why your US licence alone is sometimes not enough',
		lead: 'Three specific things catch US drivers in Morocco, and the documentation question is the smaller of them.',
		reasons: [
			{
				icon: 'ph:arrow-clockwise-bold',
				title: 'The roundabout priority inversion',
				text: "At unmarked Moroccan roundabouts, vehicles entering from the right have priority over traffic already circulating — the direct opposite of US roundabout logic. Roundabouts with explicit yield signage or traffic lights follow those signals; the unmarked majority follows Priorité à droite. Most American drivers have driven a few dozen roundabouts in their lives. Arriving at one where the priority logic is inverted from the version learned in driver's ed produces a specific type of confusion that plays out in the first hour after picking up a rental.",
			},
			{
				icon: 'mdi:speedometer-medium',
				title: 'The 5 km/h enforcement tolerance',
				text: 'Morocco enforces speed fines from 5 km/h over the posted limit. Not 10, not 15 — five. The posted limit is the actual enforcement threshold plus five. The fine starts at 400 MAD (~$40) and is collected in cash on the spot, with a receipt. Officers with radar guns operate at city entry and exit points and on national road stretches through villages where limits drop from 80 km/h to 40 km/h. Fixed cameras operate on autoroutes and national roads.',
			},
			{
				icon: 'mdi:shield-off-outline',
				title: 'The rental insurance clause',
				text: 'Most standard rental insurance policies from Moroccan agencies condition coverage on presentation of a valid IDP alongside the national licence. The rental desk may not enforce this strictly at pickup — but if you have an accident and the insurance company reviews documentation, an IDP that was contractually required but absent can void the claim. The $35 IDP Companion is preparation for this scenario, not the spot fine.',
			},
		],
	},

	rules: {
		heading: 'Moroccan driving rules US drivers should know',
		lead: 'Right-hand traffic (same as the US) — no directional adjustment. The reversed roundabout priority and the 5 km/h enforcement tolerance are the two real preparation items.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — no adjustment needed' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '60 km/h', note: '40 km/h in villages and built-up areas on national roads; 30 km/h in marked school zones' },
			{ icon: 'mdi:road-variant', label: 'National roads', value: '80–100 km/h', note: 'Depends on road class and posted signs' },
			{ icon: 'mdi:speedometer-medium', label: 'Autoroute', value: '120 km/h', note: 'Tolled, staffed cash booths (carry dirhams)' },
			{ icon: 'ph:arrow-clockwise-bold', label: 'Roundabout priority', value: 'Entering = right of way', note: 'INVERSE of US rule at unmarked roundabouts (Priorité à droite)' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter than US 0.08%; 0.00% for professional drivers; checkpoint enforcement' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Hands-free permitted; fine 150–400 MAD' },
			{ icon: 'mdi:shield-half', label: 'Southern checkpoints', value: 'Military, not police', note: 'N9/N13 routes south of Marrakech and east of Agadir; passport registered; 2–5 min with full docs' },
		],
	},

	fines: {
		heading: '2026 fines collected on the spot from foreign-plated vehicles',
		lead: 'Fines are issued at roadside stops and collected on the spot in cash for foreign-registered vehicles. Receipts are always issued. Request the receipt (reçu/quittance) for any payment — if not offered, ask to pay at the nearest police station (commissariat).',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding 5–20 km/h over', amount: 'MAD 400 (~$40)', severity: 'low', note: 'Cash on the spot from first 5 km/h over; receipt required' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 20–40 km/h over', amount: 'MAD 400–700 (~$40–70)', severity: 'med', note: '' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 40+ km/h over', amount: 'MAD 700–1,300+ (~$70–130+)', severity: 'high', note: 'Licence may be retained at checkpoint' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'MAD 150–400 (~$16–43)', severity: 'med', note: '' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'MAD 400 (~$43)', severity: 'med', note: 'Per person' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'MAD 400–700 (~$40–70)', severity: 'high', note: '' },
			{ icon: 'ph:octagon-bold', label: 'Failure to stop fully at stop sign', amount: 'MAD 400+ (~$40+)', severity: 'med', note: 'Stop signs enforced — partial stops fined' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'MAD 5,000–10,000+ (~$500–1,000+)', severity: 'high', note: 'Criminal charge; suspension; vehicle impound' },
			{ icon: 'mdi:shield-off-outline', label: 'Accident without IDP — rental insurance void', amount: 'Full damage cost', severity: 'high', note: 'Most policies condition coverage on IDP presence — claim may be denied' },
		],
		caption: 'Sources: Code de la Route du Maroc (Dahir n°1-10-07 du 11 février 2010); Direction Générale de la Sûreté Nationale (DGSN); Autoroutes du Maroc. USD/MAD approximated at May 2026.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Morocco — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown for the rental desk, the Gendarmerie stop, and the military checkpoint south of Marrakech.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages, including Arabic and French (both physically on the document and both operational at Moroccan checkpoints and rental desks)',
				'A standardised layout that\'s easier for a Moroccan officer or rental agent to read than a US state-specific licence format',
				'An instant digital download — print before departure; printed copy preferred at military checkpoints over phone screens in variable light',
				'Designed to be carried alongside your physical US licence, not as a replacement',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — your physical US driver\'s licence must be carried alongside it at all times',
				'Not protection from the roundabout priority rule — that requires knowing the rule (entering = right of way) before the junction, not at it',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Morocco',
			items: [
				'At rental desks where booking conditions or insurance clauses list an IDP for coverage validity',
				'At Gendarmerie Royale stops and military checkpoints on the N9 (south to Ouarzazate, Zagora), N13 (Errachidia), and routes approaching the Algerian border',
				'When a French and Arabic presentation of your US licence speeds the interaction at any non-tourist-area stop',
				'If your trip continues to Spain — IDP Companion covers it on the same purchase',
			],
		},
		needOfficial: {
			title: 'What Moroccan authorities and rental companies actually expect',
			items: [
				'Original physical US driver licence — no photocopies',
				'US passport — southern checkpoints register entry date and may note passport number',
				'IDP or translation document — required by most rental insurance contracts',
				'Rental agreement and vehicle insurance certificate — in the vehicle, not in the hotel safe',
				'Dirhams in cash for on-the-spot fines and toll booths — card terminals are not available at all roadside stops',
			],
		},
		pattern: "The pattern: your US licence is technically recognised. The Arabic and French translation makes the checkpoint faster, and the IDP is what the rental insurance contract requires for a claim to process. The roundabout rule is the one preparation no document can substitute for.",
	},

	renting: {
		heading: 'Renting a car in Morocco as a US driver',
		lead: 'Major chains operate at Casablanca (CMN), Marrakech (RAK), Agadir (AGA), Tangier (TNG), and Fes (FEZ) alongside an extensive local-operator market. Rental insurance documentation is where the IDP requirement actually bites.',
		chains: [
			{ name: 'Hertz Morocco', policy: 'Available at all major airports. Accepts US English licence at airport locations. Insurance conditions may require IDP — verify at pickup. Minimum age 21; held licence at least one year. Credit card for deposit.' },
			{ name: 'Avis Morocco', policy: 'Same policy at airport locations. Available at major airports plus Casablanca and Marrakech city offices. Minimum age 21.' },
			{ name: 'Sixt Morocco', policy: 'Accepts US licence. Some city locations apply stricter IDP requirements than airport desks. Minimum age 21.' },
			{ name: 'Local agencies (Marrakech, Agadir, Fez, Essaouira)', policy: 'Policies vary significantly. Many local operators accept US licence without IDP friction. Some require IDP as part of insurance documentation. Pricing competitive with international chains; verify requirements before arrival.' },
		],
		tipsHeading: 'Practical tips for US drivers in Morocco',
		tips: [
			'Practice the entering-has-priority roundabout logic in the airport car park at low speed before joining faster roads',
			'Manual transmission is standard; automatic available at major airport agencies but limited — book early',
			'4WD strongly recommended for Sahara routes (Merzouga, M\'Hamid El Ghizlane), High Atlas approaches, and any track marked piste — standard 2WD rentals exclude off-road and void insurance on unpaved surfaces',
			'Carry dirhams in small denominations for autoroute tolls and on-the-spot fines — not all booths take card',
			'Fuel less frequent south of Ouarzazate and in the Draa Valley — keep tank above half on desert routes',
			'Parking in medinas: park at the edge (Marrakech, Fez, Essaouira) and walk in — medina streets are not navigable by car',
			'Night driving on rural routes south of the High Atlas: avoid — camels and cattle on N9 and N13 after dark are documented hazards',
			'Marrakech to Merzouga: ~550 km, 6–7 hours via Tizi n\'Tichka pass — leave Marrakech early to complete the mountain crossing in daylight',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Morocco',
		lead: 'The realistic range of outcomes for US tourists — ranked by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'common',
				label: 'Major airport agency, US licence accepted, clean drive',
				text: 'International chains at CMN, RAK, AGA accept US licence at airport pickup. Most week-long Marrakech-focused trips end without documentation friction at the desk level.',
			},
			{
				severity: 'low',
				frequency: 'common for first-time Morocco drivers',
				label: 'Roundabout priority confusion, first hour',
				text: 'Entering traffic has right of way at unmarked roundabouts — direct inverse of US rule. Learn before the airport exit. Most drivers internalise the rule within 30–60 minutes of slow deliberate driving.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Gendarmerie stop, IDP Companion present',
				text: 'French and Arabic translation visible at first read. Two-minute stop; no further issue.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Speed fine, 5–20 km/h over limit',
				text: '400 MAD cash on the spot from foreign plates; receipt issued. Most common at village limit transitions (80 → 40 km/h).',
			},
			{
				severity: 'low',
				frequency: 'occasional on southern routes',
				label: 'Military checkpoint, southern route, full docs',
				text: 'Passport registered. Driving documents (licence + IDP) checked. 3–5 minutes with complete documentation. Routine and professional.',
			},
			{
				severity: 'med',
				frequency: 'less common',
				label: 'Smaller agency or third-party booking, IDP requested',
				text: 'Insurance booking condition applied strictly. IDP Companion resolves at pickup. Without it, possible upgrade pressure or delay.',
			},
			{
				severity: 'high',
				frequency: 'less common',
				label: 'Accident, rental insurance void (no IDP)',
				text: 'Insurance clause triggered. Full direct liability for vehicle damage and third-party claims. The financially significant scenario the $35 prevents.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'Night driving on rural southern route, livestock collision',
				text: 'Camels and cattle cross the N9 and N13 after dark. A camel at 100 km/h on an unlit road is a vehicle-ending collision. Complete desert routes before sunset.',
			},
		],
		math: 'IDP Companion is $35. The 5 km/h speed fine is 400 MAD (~$40). Rental insurance void in a collision has no ceiling. The checkpoint delay without a translation document is measured in time on a 300 km route from Marrakech to Merzouga in July.',
	},

	alphabet: {
		heading: 'Arabic road signs every US driver should recognise',
		badge: 'Morocco-specific',
		lead: 'Major Moroccan roads use bilingual Arabic + French signage. International symbols (red octagonal stop, speed limit circles, directional arrows) are standard — you don\'t need to read Arabic to understand a speed limit sign. But smaller streets in older medina edges and rural national-road villages often have Arabic-only secondary signage. Eight signs to recognise:',
		examples: [
			{ sign: 'قف', latin: 'Qif', meaning: 'STOP — red octagon, internationally standard shape' },
			{ sign: 'ممنوع الدخول', latin: 'Mamnoo\' al-dukhool', meaning: 'DO NOT ENTER — red circle with horizontal bar' },
			{ sign: 'ممنوع الوقوف', latin: 'Mamnoo\' al-wuqoof', meaning: 'NO PARKING / NO STOPPING' },
			{ sign: 'مخرج', latin: 'Makhraj', meaning: 'EXIT — common at autoroute tolls and parking lots' },
			{ sign: 'مدخل', latin: 'Madkhal', meaning: 'ENTRANCE' },
			{ sign: 'اتجاه واحد', latin: 'Ittijaah waahid', meaning: 'ONE WAY — common in medina-edge streets' },
			{ sign: 'تخفيف السرعة', latin: 'Takhfeef as-sur\'a', meaning: 'REDUCE SPEED — before village limit transitions where the radar is parked' },
			{ sign: 'منطقة مدرسية', latin: 'Mintaqa madrasiyya', meaning: 'SCHOOL ZONE — 30 km/h limit applies during hours' },
		],
		helpsHeading: 'What helps',
		helps: [
			'Google Maps offline maps with Arabic place names enabled — Moroccan place names are often spelled differently in French vs Arabic transliteration',
			'A printed list of your destinations in both Arabic and Latin script — your hotel, key parking lots, the route waypoints',
			'IDP Companion as a bilingual French/Arabic reference for gas stations, parking attendants, and any officer interaction',
			'On autoroutes: signs are bilingual Arabic + French — you can read the French version without Arabic',
		],
		outro: 'Morocco rewards a small amount of preparation. The thirty minutes spent memorising these eight signs save you from missed turns, parking violations, and the awkwardness of asking the wrong question at a checkpoint.',
	},

	phrases: {
		heading: 'Useful French phrases at checkpoints and rental desks',
		lead: 'French is Morocco\'s primary second language and the operational language at most checkpoints and rental desks outside major tourist zones. English is widely spoken in Marrakech and Agadir tourist areas; it is rarely available at rural Gendarmerie stops.',
		items: [
			{ phrase: 'Voici mon permis de conduire', translation: 'Here is my licence', context: 'Handing over the physical US licence at any stop' },
			{ phrase: 'Et le document de traduction', translation: 'And the translation document', context: 'Showing IDP Companion alongside' },
			{ phrase: 'Je suis touriste américain / américaine', translation: "I'm an American tourist (m./f.)", context: 'At a checkpoint or police stop' },
			{ phrase: 'Je voudrais un reçu, s\'il vous plaît', translation: "I'd like a receipt please", context: 'Any time a fine is issued — request the formal receipt (reçu/quittance)' },
			{ phrase: 'Je paierai au commissariat', translation: "I'll pay at the police station", context: 'If asked for informal payment without a receipt' },
			{ phrase: 'Je ne parle pas bien français', translation: "I don't speak French well", context: 'If spoken to quickly — most officers will slow down' },
			{ phrase: 'Il y a un problème ?', translation: 'Is there a problem?', context: 'Polite opener at a checkpoint stop' },
			{ phrase: 'J\'ai une assurance', translation: 'I have insurance', context: 'In case of accident or paperwork question' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Morocco (US citizens)',
		lead: 'Morocco rewards preparation in three places: the documentation, the roundabout rule, and the route timing south of the High Atlas.',
		schemaName: 'How to prepare for driving in Morocco as a US citizen',
		duration: 'PT25M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card. Photocopies are not accepted at Moroccan rental desks or military checkpoints. Moroccan law accepts US licences for tourist stays up to 90 days.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. Arabic and French are physically on the document, which is what Moroccan checkpoints and rental insurance contracts actually need. Print before departure.',
			},
			{
				title: 'Learn the roundabout rule before you fly',
				text: 'At unmarked Moroccan roundabouts, vehicles entering from the right have priority. Traffic already circulating must yield. Rehearse this once: see a car nosing in from your right while you\'re on the circle = you slow down. This is the inverse of US driver\'s ed. The roundabout outside Marrakech airport is the first one you\'ll hit.',
			},
			{
				title: 'Plan southern routes around daylight',
				text: 'The N9 south of Ouarzazate to Merzouga, the Draa Valley, and routes east of Agadir have documented livestock crossings after dark — camels and cattle. A 550 km Marrakech-to-Merzouga drive needs to be completed in daylight: leave Marrakech early, complete the Tizi n\'Tichka mountain pass before mid-afternoon, arrive in Ouarzazate or Boumalne Dades with light to spare.',
			},
			{
				title: 'Carry the documentation set + dirhams for cash payments',
				text: 'Physical US licence + US passport + IDP Companion (printed) + rental agreement + dirhams in small bills. The autoroute tolls, smaller fuel stations, and on-the-spot fines all expect cash — card terminals are not universal at roadside.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do US tourists legally need an IDP to drive in Morocco?',
				answer: 'Not strictly. Moroccan law recognises English-language licences in Latin script — which US licences are — for tourist stays up to 90 days without specifically mandating an IDP. In practice, rental insurance policies frequently require an IDP for coverage validity, military checkpoints on southern routes ask for it, and smaller rental agencies outside major airports may require it as a booking condition.',
			},
			{
				id: 2,
				question: 'How does the roundabout priority work differently in Morocco?',
				answer: 'At unmarked roundabouts in Morocco, vehicles entering from the right have priority over traffic already circulating on the roundabout. This is the direct opposite of US practice — where circulating traffic has priority and entering vehicles yield. Roundabouts with explicit yield signage or traffic lights follow those signals. At unmarked roundabouts, assume entering traffic is coming through and adjust speed accordingly before the junction.',
			},
			{
				id: 3,
				question: 'Why does the rental insurance require an IDP if it\'s not legally mandatory?',
				answer: 'Rental insurance is a private contract, not a legal document. Most standard rental insurance policies in Morocco include a clause conditioning coverage on valid IDP documentation alongside the national licence. The rental desk may not enforce this at pickup — but if an accident occurs and the insurance company reviews the documentation, the absence of a required IDP can void the claim. The $35 cost of IDP Companion is the preparation for this scenario, not the fine scenario.',
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document. It is not a government IDP under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your physical US licence as the Arabic and French translation aid that Moroccan rental insurance contracts and southern checkpoints actually need.',
			},
			{
				id: 5,
				question: 'What are the military checkpoints in southern Morocco?',
				answer: 'Checkpoints staffed by soldiers (not police) on routes south of Marrakech, east of Agadir, and in the region approaching the Algerian border. They conduct document control — passport, driving licence, IDP — and register your travel details. They are not dangerous. They are not negotiable. Slow down well before the barrier, turn off music, and have documents ready before the window goes down. With full documentation, the stop takes 2–3 minutes. The interaction is professional and routine.',
			},
			{
				id: 6,
				question: 'Should I avoid night driving on desert routes?',
				answer: 'Yes. The N9 south of Ouarzazate, the approaches to Merzouga, and routes through the Draa Valley have documented livestock crossings after dark including camels. A camel at 100 km/h on an unlit road is a vehicle-ending collision. Complete desert route driving before sunset. If you must travel after dark, reduce speed to 60 km/h or below on any unlit stretch.',
			},
			{
				id: 7,
				question: 'Does Morocco drive on the same side as the US?',
				answer: 'Yes. Morocco drives on the right with steering wheels on the left — identical to the US. There is no directional adjustment period needed for American drivers, unlike the adjustment required for British or Australian visitors.',
			},
			{
				id: 8,
				question: 'Can I drive off-road toward the Sahara dunes in a standard rental car?',
				answer: 'No. Standard 2WD rental agreements explicitly exclude off-road and piste (unpaved track) driving. Attempting piste routes — including the approach to Erg Chebbi near Merzouga on some tracks — in a standard rental voids the insurance and risks severe vehicle damage. Book a 4WD vehicle with explicit piste coverage if desert track driving is part of your itinerary.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to Mediterranean and North African destinations.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
			{ flagFrom: 'fr', flagTo: 'ma', label: 'France → Morocco', status: 'Coming soon' },
			{ flagFrom: 'us', flagTo: 'pt', label: 'US → Portugal', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Two minutes for the document. The roundabout takes longer.',
		text: 'Morocco rewards specific preparation. The IDP Companion in Arabic and French covers the rental insurance contract and speeds the Gendarmerie stop south of Marrakech. The roundabout rule requires learning it before the airport exit. The 5 km/h speed enforcement starts at the village limit. Complete the documentation now; complete the desert routes before sunset.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Direction Générale de la Sûreté Nationale (DGSN), the Gendarmerie Royale, or the Moroccan Ministry of Transport and Logistics (Ministère du Transport et de la Logistique). IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Code de la Route du Maroc — Dahir portant loi n°1-10-07 du 11 février 2010',
			'Direction Générale de la Sûreté Nationale (DGSN) — dgsn.gov.ma',
			'Gendarmerie Royale — gendarmerie.ma',
			'Autoroutes du Maroc (ADM) — autoroutes.ma',
			'US Embassy Rabat — driving advisory — ma.usembassy.gov',
			'FCDO Morocco travel advice — gov.uk/foreign-travel-advice/morocco',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Morocco',
	},
};

export const usMoroccoCopy: Record<'en', CountryPairCopy> = { en };
