/**
 * Country-pair content: United Kingdom → Mexico.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Mexican Secretaría de Comunicaciones y Transportes (SCT)
 * accepts UK photocard for tourist driving — no IDP legally required.
 * The page's distinctive content is the categorical UK-insurance gap
 * (UK motor insurance does not extend to Mexico, period — not a
 * small-print exclusion), the documented 2025 Quintana Roo checkpoint
 * incidents on Highway 307 ($1,094.50 Italian tourist Tulum + $2,566
 * Cancún area), the cuota (toll) vs libre (free) road safety
 * differential, and Mexico City's Hoy No Circula emissions programme.
 *
 * PDF LANGUAGE COMPLIANCE: Spanish IS on the IDP Companion template
 * (verified Geneva 1949 set: EN, FR, ES, DE, IT, PT, VI, RU, AR, ZH,
 * JA, TH). Spanish claims here are honest.
 *
 * Middle-pivot: clean — no AA / RAC / PayPoint recommendations anywhere
 * except the single legal disclaimer line.
 *
 * SEO add-ons present: tldr, phrases (8 Mexican Spanish items),
 * howTo, lastReviewed.
 * NO lez block — Mexico City's Hoy No Circula is covered in FAQ;
 * structurally different from EU ZTL/ZBE zones and typically exempts
 * rental cars. NO alphabet block (Spanish Latin, all signs readable).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Mexico: 2026 Insurance & Tulum Guide',
		description:
			"UK photocard accepted in Mexico — no IDP needed. The catch: UK motor insurance doesn't extend, Quintana Roo checkpoints reportedly cost foreign tourists $1,094–$2,566 in 2025 incidents. Honest 2026 guide for British drivers in Cancún, Mexico City and beyond.",
		ogTitleShort: 'UK Drivers in Mexico: Insurance Reality',
		ogSubtitle: 'Photocard works. UK insurance does not. Tulum checkpoints are documented.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Mexico',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-05-17',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'UK → Mexico · 2026 Guide',
		title: 'IDP for UK Drivers in Mexico: Insurance Gap & Quintana Roo Checkpoints',
		lead: "The legal answer is the easy part: your UK photocard is in English and Mexican Secretaría de Comunicaciones y Transportes (SCT) rules accept it for tourist driving without translation or an IDP. The hard parts come after. UK motor insurance — including fully-comprehensive policies — does not extend to Mexico (this is a categorical exclusion, not a small-print one), so Mexican auto insurance is a separate mandatory purchase before pickup or at the rental counter. Police checkpoints on Highway 307 between Cancún and Tulum reportedly cost foreign tourists $1,094.50 (Italian tourist, Tulum, spring 2025) and $2,566 (Cancún area, 2025) in resolved fines and roadside fees when paperwork was incomplete. Night driving on libre (free) roads outside cities is the single most-reported UK-tourist incident pattern. The IDP question itself is the smallest line item — it lands at the Cancún Airport rental counter when a peak-season agent during December–April winter-escape season defaults to asking for one even though SCT rules accept the photocard alone.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — SCT accepts UK photocards for tourist driving',
		text: "Mexican road traffic law accepts foreign driving licences issued in English for tourist visits without translation or an IDP. UK photocard licences meet this rule. Mexico is party to the 1949 Geneva Convention. The substantive questions for UK drivers in Mexico are: (1) Mexican auto insurance, which UK motor policies categorically do not cover — it must be purchased separately; (2) documentation completeness at Quintana Roo and federal police checkpoints, where reported 2025 incidents on Highway 307 cost foreign tourists $1,094.50 and $2,566 respectively; (3) cuota vs libre road choice for safety and time.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Mexico',
		lead: "For a UK tourist driving in Mexico, your original UK photocard is the legally required document. IDP Companion is a multilingual translation companion — useful at rental counters and Quintana Roo checkpoint stops where Spanish-and-English on the same document speeds the paperwork review. The Mexican insurance certificate is a separate purchase and is the document most-asked-for at police stops.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Mexico',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Legally accepted for tourist driving — SCT rules accept English-language foreign photocards without translation or IDP. Accepted by all major Mexican rental chains (Hertz, Avis, Europcar, Alamo, Sixt) at Cancún, Mexico City, Mérida, Puerto Vallarta and Cabo airports. Does not include Mexican auto insurance — separate mandatory purchase.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: "Multilingual digital PDF presenting your UK licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Spanish on the document is the working-language route at Quintana Roo, Mexico City and Puerto Vallarta checkpoint stops where paperwork review benefits from your licence data in Spanish alongside English. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Mexico: original UK photocard + UK passport with Mexican FMM tourist visa stamp + rental contract + a valid Mexican auto insurance certificate (separately purchased — not included in UK motor cover) + small MXN cash. The Mexican insurance certificate is the single most-asked-for document at police checkpoints.",
	},

	whyNotEnough: {
		heading: "Why your UK photocard isn't the whole picture in Mexico",
		lead: "The licensing question takes a single document in Mexico — SCT rules accept your UK photocard for tourist driving without translation. The substantive friction sits elsewhere: in the categorical Mexican-insurance gap (UK motor cover does not extend), in Quintana Roo checkpoint documentation enforcement, and in peak-season rental-desk variance at Cancún and Mexico City.",
		reasons: [
			{
				icon: 'ph:shield-warning-bold',
				title: 'The Mexican-insurance reason (this is the big one)',
				text: "UK motor insurance — including fully-comprehensive annual policies — does not extend to Mexico. This is a categorical exclusion, not a small-print one. Mexican auto insurance must be purchased separately, either through the rental at the counter ($15–30/day, often heavy) or via a dedicated Mexican insurer online before pickup (cheaper for longer trips: Mexpro, Sanborn's and BajaBound are commonly used by UK and US travellers). Driving in Mexico without valid Mexican insurance is a serious legal issue — an accident without insurance can result in detention until liability is settled.",
			},
			{
				icon: 'ph:police-car-bold',
				title: 'The Quintana Roo checkpoint reality',
				text: "Mexican federal and state police operate checkpoints on tourist corridors — particularly Highway 307 (Cancún → Tulum → Belize border), the Mexico City–Puebla cuota and Oaxaca tourist routes. Standard check: original photocard, passport, rental documentation and Mexican insurance certificate. Two documented 2025 incidents on the Tulum corridor reportedly cost foreign tourists $1,094.50 (Italian tourist, spring 2025) and $2,566 (Cancún area, 2025) in resolved fines and roadside fees when paperwork was incomplete. Standardised multilingual paperwork reduces the conversational surface area at the roadside.",
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Europcar, Sixt, Alamo and a range of local operators each set their own internal verification policy at Mexican branches. Cancún, Mexico City, Mérida, Puerto Vallarta and Cabo airports process the highest concentrations of UK tourist rentals — and some desk agents during peak December–April winter-escape season still default to asking for an IDP even though SCT rules accept the UK photocard alone. The translation companion clears the question in writing in five extra minutes.",
			},
		],
	},

	rules: {
		heading: 'Mexico driving rules UK drivers should know',
		lead: 'The right-hand reversal from UK habit takes deliberate attention at CDMX traffic circles and on the Cancún-area Highway 307 — same adjustment whether you\'re driving central Mexico City or the Yucatán cuotas. Beyond the directional switch, the substantive operational rules vary by state — Quintana Roo runs stricter alcohol enforcement than the federal floor, turn-on-red is state-dependent and night driving outside cities is the single biggest safety variable.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; deliberate attention required, especially at roundabouts' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '40–60 km/h', note: 'Varies by state; CDMX, Cancún, Puerto Vallarta typically 40–50 km/h centre' },
			{ icon: 'mdi:road-variant', label: 'Libre (free) road', value: '80–90 km/h', note: 'Less maintained; higher incident risk; avoid at night' },
			{ icon: 'mdi:speedometer-medium', label: 'Cuota (toll motorway)', value: '100–110 km/h', note: 'Well-maintained; safer than libres; budget for tolls (Cancún–Mérida ~$40 one-way)' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.04% (federal); 0.04% Quintana Roo; 0.08% varies', note: 'Random breath testing operates in CDMX and major tourist areas' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned (most states)', note: 'Enforcement variable; standard documentation at any stop expected' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'State-dependent', note: 'Permitted in CDMX and some states after a full stop; verify per state' },
			{ icon: 'ph:warning-bold', label: 'Night driving (libres)', value: 'Strongly discouraged', note: 'Animal hazards, unannounced potholes and reduced visibility make libre night driving genuinely dangerous' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Mexico',
		lead: "Mexican fines are set by state, with significant regional variation. USD-equivalent figures below reflect recent observed levels on tourist corridors — verify against current state-level publications. Camera-issued tickets are forwarded by the rental company to your UK card plus a typical admin fee.",
		colViolation: 'Violation',
		colAmount: 'Fine (USD equivalent)',
		colNote: 'Notes',
		items: [
			{ icon: 'ph:shield-slash-bold', label: 'Driving without Mexican auto insurance', amount: 'Vehicle detention; court resolution required', note: 'Most serious roadside issue for UK tourists; UK motor cover does not extend to Mexico', severity: 'high' },
			{ icon: 'ph:police-car-bold', label: 'Roadside paperwork-stop resolution (2025 documented)', amount: 'Reportedly $1,094–$2,566 in 2025 Tulum/Cancún incidents', note: 'Highway 307 corridor; carry full documentation to minimise stop duration', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding (camera-enforced)', amount: '$30–100+', note: 'Camera enforcement growing in CDMX and Quintana Roo', severity: 'med' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (manual stop)', amount: 'Variable', note: 'Officer discretion within published range', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '$80+', note: '', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '$40–80', note: 'Enforcement variable across states', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '$30+', note: 'Mandatory front and rear', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI (above state threshold)', amount: '$200+ and vehicle detention', note: 'CDMX and Quintana Roo aggressive enforcement; criminal escalation possible', severity: 'high' },
			{ icon: 'ph:road-horizon-bold', label: 'Cuota (toll) evasion', amount: 'Original toll + penalty', note: 'Most cuotas have manned booths; pay cash or card', severity: 'med' },
		],
		caption: 'Sources: Federal Ley de Vías Generales de Comunicación (dof.gob.mx); state-level traffic codes; documented 2025 tourist roadside incident reports (Tulum, Cancún area); UK gov.uk Mexico travel advice.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Mexico — honestly',
		lead: "Mexico's IDP question is small and the SCT rules settle it — UK photocards are accepted for tourist driving without translation. What this section is actually about: the Mexican-insurance gap (UK motor cover does not extend), the Quintana Roo checkpoint documentation reality and the cuota vs libre road choice that drives most UK-tourist incident outcomes.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Mexico, Spanish on the document is the working-language route at Quintana Roo checkpoint stops, Mexico City rental desks and Puerto Vallarta tourist-area interactions',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by Mexican law for tourist driving on a UK photocard',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not Mexican auto insurance — that is the separate categorical mandatory purchase, since UK motor cover does not extend to Mexico',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Mexico',
			items: [
				'At Cancún, Mexico City, Mérida, Puerto Vallarta and Cabo rental counters during peak December–April winter-escape season when desk agents default to asking for translation',
				'At Highway 307 (Cancún → Tulum) federal and state police checkpoints where Spanish-and-English standardised paperwork speeds the document review',
				'For insurance and accident-report paperwork after a covered incident where Spanish translation simplifies the claim',
				'As a re-printable backup from any hotel if your physical photocard is lost during a multi-region Mexican trip',
				"For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Mexico plus Spain, Portugal, Costa Rica, Dominican Republic and other Spanish-speaking destinations on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Mexican law actually cares about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive',
				'UK passport with the Mexican FMM tourist visa stamp (Forma Migratoria Múltiple, issued at airport entry) — required at every checkpoint',
				'Rental agreement and vehicle registration — provided by the rental company at pickup',
				'A valid Mexican auto insurance certificate — separately purchased before pickup or at the rental counter; the single most-asked-for document at police checkpoints',
				'Small MXN cash for tolls (some cuotas card-only, some cash), parking attendants and tip-based interactions at Pemex',
			],
		},
		pattern:
			"What prepared UK travellers in Mexico actually carry: photocard + passport with FMM + rental contract + Mexican insurance certificate + IDP Companion. The bigger preparation is the Mexican insurance comparison (online insurers like Mexpro / Sanborn's / BajaBound usually beat counter rates for longer trips) and the libre / cuota / night-driving route plan. Total documentation prep: $35. Mexican insurance: $150–360 for a typical 12-day trip. The IDP question is the smallest item; insurance, checkpoint documentation and night-driving discipline are the bigger ones.",
	},

	renting: {
		heading: 'Renting a car in Mexico as a UK driver',
		lead: "Mexico's rental market is large and heavily oriented to US and Canadian tourists, with growing UK traffic in Cancún and Mexico City. Counter policy varies more by branch than by chain.",
		chains: [
			{ name: 'Hertz Mexico', policy: 'Major presence at Cancún, Mexico City, Cabo, Mérida and Puerto Vallarta airports. Accepts UK photocard licences; insurance offered at counter at typical $15–30/day.' },
			{ name: 'Avis Mexico (incl. Budget)', policy: 'Wide network. UK licences accepted; same insurance structure as Hertz.' },
			{ name: 'Europcar Mexico', policy: 'Strong domestic network including secondary cities. UK licences accepted.' },
			{ name: 'Alamo Mexico', policy: 'Popular with North American visitors, growing UK traffic. UK licences accepted; competitive on weekly rentals.' },
			{ name: 'Sixt Mexico', policy: 'Premium fleet, growing presence at Cancún and CDMX. UK licences accepted.' },
		],
		tipsHeading: 'Practical tips for renting and driving in Mexico',
		tips: [
			"Buy Mexican auto insurance separately and in advance where possible. Counter rates at the rental are typically $15–30/day and often heavy on lower-cost rentals. Better-value alternatives for longer trips: Mexpro, Sanborn's, BajaBound (online before pickup). The insurance certificate must be carried in the vehicle — it's the single most-asked-for document at police stops",
			'Cuota (toll) vs libre (free) roads. Cuotas are well-maintained motorways with manned toll booths — typical Cancún–Mérida cuota toll is around $40 one-way. Libres are slower, less maintained and considered higher-risk for accidents and roadside stops. Most tourists pay for the cuota for the time and safety differential',
			'Do not drive at night outside cities. This is the single most common UK-tourist incident pattern in Mexico. Animals on roads, unannounced potholes and reduced visibility make night libre driving genuinely dangerous. Plan day-time driving and overnight stops',
			'Highway 307 (Cancún → Tulum → Belize border) is well-paved but heavily policed. Carry the complete document set; expect checkpoint stops; keep speed conservatively below the posted limit. The 2025 documented incidents (Italian tourist $1,094.50 Tulum, Cancún area $2,566) are a function of incomplete paperwork at these stops',
			'Petrol vs diesel. Petrol (Magna or Premium) is the default; diesel widely available. Pemex stations have human attendants who pump for you — tip 5–10 pesos',
			'Switch back to right-side driving — practise in a quiet area before highway traffic. Roundabouts are the highest-risk point of UK left-side reflex',
			'Manual transmission is the default at lower price tiers; automatics cost ~30% more',
			'Cash in pesos for small interactions. Carry small MXN notes for tolls (some accept card, some don\'t), parking attendants and tip-based Pemex interactions. Refuse cash-only fine demands; request an official receipt and pay through the rental company or official channels',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'What actually happens at SCT-recognised rental desks, Quintana Roo checkpoints and Mexican police stops — six outcomes from most common to most expensive, cross-referenced against gov.uk Mexico advice and documented 2025 incident reporting.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'Photocard accepted, Mexican insurance in place, clean trip',
				text: 'Standard tourist experience — pick up at Cancún or CDMX, drive the Yucatán cuotas, return the car, no further interactions. Most Mexico trips end this way when documentation is in order from the start.',
			},
			{
				severity: 'low',
				frequency: 'Occasional at peak season',
				label: 'Desk agent asks for IDP, you produce IDP Companion',
				text: 'Five extra minutes at the Cancún or CDMX counter during December–April peak season, no further issue. Common when desk agents default to asking for translation even when SCT rules accept the UK photocard alone.',
			},
			{
				severity: 'low',
				frequency: 'Very common in Quintana Roo',
				label: 'Highway 307 checkpoint, full paperwork present, brief stop',
				text: '5-minute roadside review and onward — photocard, FMM, insurance certificate, IDP Companion. The Spanish-and-English translation shortens the conversation.',
			},
			{
				severity: 'high',
				frequency: 'Real risk',
				label: 'Highway 307 checkpoint, paperwork incomplete, longer stop',
				text: 'Reportedly $1,094–$2,566 in 2025 documented Tulum and Cancún incidents. The Mexican insurance certificate is the most-asked-for document; missing it is the most common escalation trigger.',
			},
			{
				severity: 'high',
				frequency: 'Rare but catastrophic',
				label: 'Accident without Mexican auto insurance',
				text: 'Possible detention until liability is resolved; rental contract issues; UK motor cover does not extend. This is the single most expensive UK-tourist incident category in Mexico — and the easiest to prevent.',
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Night-driving incident on a libre road',
				text: 'Pothole, animal strike or reduced-visibility collision. The single most-reported UK-tourist incident pattern in Mexico. Plan day-time driving and overnight stops to avoid.',
			},
		],
		math: "$35 IDP Companion + Mexican auto insurance ($150–360 for a typical 12-day trip via online insurer) vs the difference between Cancún counter insurance ($300+) and online-purchased insurance ($150). The insurance question is the bigger budget line; the IDP question is the smaller. The 2025 documented incident range ($1,094–$2,566) is what incomplete documentation at a Highway 307 checkpoint costs.",
	},

	phrases: {
		heading: 'Spanish phrases for police stops, rental desks and Pemex interactions',
		lead: "Mexico's tourist infrastructure runs in working English at major rental chains and Cancún / Cabo / Puerto Vallarta hotels, but Spanish becomes the default fast at checkpoints, smaller Pemex stations and rural roadside interactions. Eight Mexican-Spanish items cover the standard tourist contact points.",
		items: [
			{ phrase: 'Aquí está mi licencia', translation: 'Here is my licence', context: 'Standard opening — hand UK photocard and passport with FMM together at a checkpoint' },
			{ phrase: 'Y aquí está mi seguro mexicano', translation: 'And here is my Mexican insurance', context: 'Critical follow-up — the insurance certificate is the most-asked-for document on Highway 307' },
			{ phrase: 'Soy turista británico / británica', translation: "I'm a British tourist (m/f)", context: 'Establishes context immediately; useful at any document check' },
			{ phrase: '¿Habla inglés?', translation: 'Do you speak English?', context: 'Universally answered yes in tourist-facing roles; rarely needed at major hotel chains but courteous' },
			{ phrase: '¿Dónde está la gasolinera más cercana?', translation: 'Where is the nearest petrol station?', context: 'Useful on rural cuotas and libre stretches between cities' },
			{ phrase: 'Por favor, un recibo oficial', translation: 'Please, an official receipt', context: 'Polite firm phrase at any fine interaction — paid fines should be issued with documentation, not cash-only' },
			{ phrase: 'Lleno, por favor', translation: 'Fill it up, please', context: 'Standard Pemex interaction — attendant pumps for you; tip 5–10 pesos' },
			{ phrase: 'Gracias', translation: 'Thank you', context: 'Universal courtesy; pairs with "muchas gracias" for "thanks very much"' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Mexico (UK citizens)',
		lead: "Mexico's preparation list is short on the documentation side — no government IDP needed — but the Mexican insurance comparison and the cuota / libre / night-driving route plan are the items that distinguish a clean trip from an expensive one.",
		schemaName: 'How to prepare for driving in Mexico as a UK citizen',
		duration: 'PT45M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: "The plastic photocard alone is sufficient post-2015 — no paper counterpart needed. If you still hold an older paper licence, update to photocard format before flying.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. Spanish on the document is the working-language route at Quintana Roo checkpoints and Mexican rental desks. Print at home or from any Mexican hotel.',
			},
			{
				title: "Purchase Mexican auto insurance — separately and in advance",
				text: "UK motor insurance does not extend to Mexico. Mexican auto insurance is a categorical separate purchase. Compare Mexpro, Sanborn's and BajaBound (online before pickup, typically $150–360 for a 12-day trip) against rental-counter rates (typically $15–30/day). Carry the certificate in the vehicle — it's the most-asked-for document at police stops.",
			},
			{
				title: 'Plan your route around cuotas (tolls), not libres — and avoid night driving',
				text: "Cuotas are well-maintained motorways with manned toll booths and significantly lower incident rates than libres. Budget tolls into trip cost (Cancún–Mérida cuota ~$40 one-way). Avoid night driving on libres entirely — the single most-reported UK-tourist incident pattern in Mexico is night libre incidents (animals, potholes, reduced visibility). Plan day-time driving and overnight stops.",
			},
			{
				title: 'Carry physical documents in one folder + small MXN cash',
				text: 'Physical UK photocard + UK passport with Mexican FMM tourist visa stamp + rental contract + Mexican insurance certificate + IDP Companion — all in one folder. Hand the folder over at any checkpoint. Carry small MXN notes for tolls, Pemex tips and incidentals.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Mexico as a UK tourist?',
				answer: 'No. Mexican SCT rules accept a UK photocard driving licence for tourist visits without translation or an IDP.',
			},
			{
				id: 2,
				question: 'Will my UK motor insurance cover me in Mexico?',
				answer: 'No. This is the single most important fact for UK drivers in Mexico. UK motor insurance — including fully-comprehensive annual policies — does not extend to Mexico. Mexican auto insurance must be purchased separately, either through the rental at the counter or via a dedicated Mexican insurer online before pickup.',
			},
			{
				id: 3,
				question: 'How do I get Mexican auto insurance?',
				answer: "Two options: (1) at the rental counter at pickup, typically $15–30/day and often heavy on lower-cost rentals; (2) via a dedicated Mexican insurer online before pickup — Mexpro, Sanborn's and BajaBound are commonly used by UK and US travellers. Compare quotes before flying; online insurers typically beat counter rates for trips longer than 4–5 days.",
			},
			{
				id: 4,
				question: 'What are cuotas and libres?',
				answer: 'Cuota = toll road (motorway). Libre = free road. Cuotas are well-maintained, faster and generally safer for tourists. Libres are slower, less maintained and where most roadside incidents happen. The Cancún–Mérida cuota toll runs around $40 one-way.',
			},
			{
				id: 5,
				question: 'Is the Tulum / Cancún checkpoint situation real?',
				answer: 'Yes. Documented 2025 incidents reportedly cost foreign tourists $1,094.50 (Italian tourist, Tulum, spring 2025) and $2,566 (Cancún area, 2025). The pattern is incomplete documentation at Highway 307 stops. Carry the complete document set: UK photocard, UK passport with FMM, rental contract, Mexican insurance certificate, IDP Companion. Reduce stop duration by having every document ready.',
			},
			{
				id: 6,
				question: 'Should I drive at night in Mexico?',
				answer: 'No, outside cities. Animal hazards, unannounced potholes and reduced visibility make night libre driving genuinely dangerous and account for the single biggest UK-tourist incident pattern. Plan day-time driving and overnight stops.',
			},
			{
				id: 7,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion fills a different role: your photocard presented in twelve widely-read languages from the Geneva 1949 set, designed to reduce friction at Mexican rental desks and tourist-area checks. The UK government IDP is the printed Geneva 1949 booklet from the authorised UK issuer. Mexico does not legally require an IDP for tourist driving on a UK photocard, which is why most UK visitors find IDP Companion the practical document for actual rental-desk and FMM-stamp verification scenarios.',
			},
			{
				id: 8,
				question: 'Can I drive into the US or Belize with my Mexican rental?',
				answer: 'Almost never. Mexican rental contracts typically prohibit cross-border use. Verify before you book if cross-border driving is part of the plan.',
			},
			{
				id: 9,
				question: 'What about driving in Mexico City itself?',
				answer: 'Mexico City has a Hoy No Circula programme that restricts certain vehicles by emissions sticker and licence-plate digit on certain days. Rental cars are usually exempt for short-term tourist use; verify with the rental at pickup. CDMX traffic is dense but more disciplined than Cairo or Istanbul; many UK travellers find Uber/Cabify easier for inner-city movement.',
			},
			{
				id: 10,
				question: 'Are speed cameras really used in Mexico?',
				answer: 'Growing — Mexico City and Quintana Roo are the main camera-enforcement regions. Most fines are still officer-issued with significant regional variation in enforcement style. Camera tickets follow the rental car to your UK card on file 3–6 weeks after the trip via the rental company plus an admin fee.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Mexico-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand/' },
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain/' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal/' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco/' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'gb', flagTo: 'cr', label: 'UK → Costa Rica', status: 'Live', href: '/idp-for-uk-drivers-in-costa-rica/' },
		],
	},

	finalCta: {
		heading: 'Driving the Riviera Maya, the Yucatán cuotas or Mexico City?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Spanish on the document is the working-language route at Quintana Roo checkpoints and Mexican rental desks. Valid 1–5 years and covers Mexico plus Spain, Portugal, Costa Rica, Dominican Republic on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. Mexican auto insurance is the separate mandatory purchase — UK motor cover does not extend to Mexico.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Secretaría de Comunicaciones y Transportes (SCT), the Policía Federal, state police forces or any other Mexican government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion must be used alongside your original UK photocard driving licence and a valid Mexican auto insurance certificate.",
		sourcesHeading: 'Sources',
		sources: [
			'Ley de Vías Generales de Comunicación — Mexican federal road traffic law (dof.gob.mx)',
			'UK Foreign, Commonwealth & Development Office — Driving in Mexico (gov.uk/foreign-travel-advice/mexico)',
			'AMIS (Asociación Mexicana de Instituciones de Seguros) — Mexican auto insurance overview (amis.com.mx)',
			'Documented 2025 tourist roadside incident reports (Tulum, Cancún area)',
			'Mexican online insurers (independent, not endorsed): Mexpro, Sanborn\'s, BajaBound',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Mexico',
	},
};

export const ukMexicoCopy: Record<'en', CountryPairCopy> = { en };
