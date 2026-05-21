/**
 * Country-pair content: Russia → Indonesia (Bali focus).
 * Locales: en, ru.
 *
 * Unique angle: Three things Russian tourists consistently don't know — Indonesia
 * drives on the LEFT (full reversal from Russia), a car-only Russian licence does
 * not legally cover scooters, and Bali police run weekly razzia checkpoints in
 * Canggu / Kuta / Seminyak / Ubud specifically targeting foreigners without IDP.
 * No alphabet block (Bahasa Indonesia is Latin script).
 *
 * SEO add-ons present: tldr, lez (razzia checkpoint corridors), phrases, howTo,
 * lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for Russian Drivers in Indonesia: 2026 Bali Razzia Guide',
		description:
			"IDP is required by Indonesian law and Bali police run weekly razzia checkpoints in Canggu and Kuta targeting foreigners without it. Cyrillic is unreadable. Indonesia drives on the LEFT. Honest 2026 guide for Russians.",
		ogTitleShort: 'Russian Drivers in Indonesia: Bali Guide 2026',
		ogSubtitle: 'Left-hand traffic. Weekly razzia. Scooter needs Category A.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'Russia → Indonesia',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'Russia → Indonesia · Bali · 2026 Guide',
		title: 'IDP for Russian Drivers in Indonesia: Bali Razzia & Scooter Category A',
		lead: 'The razzia checkpoint in Canggu appears on a Tuesday morning without announcement — a barrier across Jalan Batu Bolong, three officers in fluorescent vests, a queue of scooters building behind it. The fine for a foreign tourist without an IDP is IDR 1,000,000 (~$60) — small enough that some travellers budget for it as a risk. The second consequence is the rental insurance: it stops covering the moment the officer confirms the document is missing. Every accident from that point lands directly on the driver. Indonesian Traffic Law No. 22 of 2009 requires IDP for all foreign tourists who drive. Russian licences are Cyrillic — Indonesian officers and rental staff cannot read them. And Indonesia drives on the left, the complete reversal of Russia. Three things to know before the scooter key is handed over in Seminyak.',
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — IDP is required for every foreign tourist driving in Indonesia',
		text: 'Indonesian Traffic Law No. 22 of 2009 requires all foreign tourists driving any motorised vehicle — car, scooter, motorbike — to carry both their national licence and a valid IDP. There are no nationality exceptions and no tourist-visa exemptions. For Russians the friction triples: Cyrillic is unreadable to Indonesian officers, a car-only Russian licence does not legally cover scooters (Category A required), and Indonesia drives on the left.',
	},

	tldr: {
		heading: 'Russian Licence alone vs IDP Companion in Indonesia',
		lead: 'Indonesia is one of the highest-friction destinations for Russian drivers — IDP is required by law, the razzia enforces it weekly in Bali tourist corridors, and the rental insurance void on confirmation of the missing document is the real cost.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Indonesia',
		colCost: 'Cost',
		rows: [
			{
				document: 'Russian Licence (alone)',
				whatItDoes: 'Not sufficient — IDP required by Indonesian Traffic Law No. 22 of 2009 for all foreign tourists. Cyrillic is unreadable by Indonesian officers and rental staff. Car-only Russian licence does not legally cover scooters — Category A is required. Razzia checkpoint fine IDR 1,000,000 (~$60) and rental insurance voids simultaneously.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + Russian licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in English, French, Arabic, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set. Reflects exactly the categories on your Russian licence. English on the document is the operational fallback at car rental desks at Ngurah Rai Airport (DPS), at Bali scooter rental shops, and at razzia checkpoints in Canggu, Kuta, Seminyak and Ubud — Indonesian officers in tourist corridors switch to basic English when foreign tourists are involved.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Bali: physical Russian licence + IDP Companion (printed) + passport with Indonesian entry stamp + rental agreement. Confirm Category A is on your Russian licence before booking a scooter. IDP Companion reflects what's on your licence — it cannot create a category that isn't there.",
	},

	whyNotEnough: {
		heading: 'Three things Russian tourists consistently don\'t know before they arrive',
		lead: 'These three details account for the overwhelming majority of expensive surprises Russians have driving in Bali. All resolve before the flight.',
		reasons: [
			{
				icon: 'ph:steering-wheel-bold',
				title: 'Indonesia drives on the left',
				text: "Russia drives on the right. Indonesia drives on the left, with steering wheels on the right. Every reflex built at home — where to look at a junction, which side oncoming traffic comes from, how to position for an overtake — needs deliberate reversal. In a car with a driver, this is invisible. On a scooter you're operating yourself, it hits at the first junction after leaving the rental shop. The critical period is the first 15 minutes. Start slowly, stay left, and don't let speed build until the reversal feels automatic.",
			},
			{
				icon: 'mdi:motorbike',
				title: 'A car licence does not legally cover a scooter',
				text: "Indonesian traffic law and IDP regulations require that the vehicle category on your IDP matches the vehicle you're riding. Category B covers cars. Category A covers motorcycles and scooters. A Russian licence that only carries a car category does not legally authorise riding a 125cc Honda Vario in Bali — regardless of what the rental shop accepts from you. Check which categories appear on your Russian licence; the letter codes are on the reverse. If Category A is there, IDP Companion reflects it. If it isn't, the scooter rental is technically illegal from the first metre.",
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The razzia system',
				text: 'Bali police run planned operational roadblocks — *razzia* — specifically targeting foreign tourists without valid driving documentation. They appear weekly in the main tourist corridors: Jalan Batu Bolong in Canggu, Jalan Legian in Kuta, the Seminyak main strip, and central Ubud. The fine is collectible on the spot in cash. The insurance void follows simultaneously. This is not informal — it is enforcement of an actual legal requirement, applied where non-compliance is most concentrated.',
			},
		],
	},

	rules: {
		heading: 'Indonesia driving rules — Bali focus',
		lead: 'Left-hand traffic is the single biggest adjustment for Russians. The rest is mostly familiar — alcohol limit is 0.05% (Russia is zero) and helmet is non-negotiable.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Complete reversal from Russia — first 15 min is critical' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h near schools and residential zones' },
			{ icon: 'mdi:road-variant', label: 'Open road', value: '80–100 km/h', note: 'Posted signs govern' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Russia is 0.00% — slightly more lenient here' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'Active enforcement; fine IDR 750,000' },
			{ icon: 'mdi:helmet', label: 'Helmet', value: 'Mandatory + fastened', note: 'Driver and passenger; enforced at every razzia' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts (cars)', value: 'Mandatory', note: 'Less consistently enforced in rural areas' },
			{ icon: 'ph:traffic-cone-bold', label: 'Razzia checkpoints', value: 'Weekly', note: 'Canggu, Kuta, Seminyak, Ubud — main tourist corridors' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Indonesian fines are low in absolute terms. The insurance consequence of no IDP vastly exceeds the fine amount in any accident scenario.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP', amount: 'IDR 250,000–1,000,000 (~$15–60)', note: 'Cash on the spot; insurance voids simultaneously', severity: 'med' },
			{ icon: 'mdi:motorbike', label: 'Scooter on car-only licence', amount: 'IDR 250,000–1,000,000 (~$15–60)', note: 'Same consequence; specific razzia target', severity: 'med' },
			{ icon: 'mdi:helmet', label: 'No helmet (or unfastened)', amount: 'IDR 250,000 (~$15)', note: 'Enforced alongside IDP at every razzia', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Speeding', amount: 'IDR 500,000 (~$30)', note: 'Camera enforcement increasing on intercity routes', severity: 'low' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'IDR 500,000 (~$30)', note: '', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'IDR 750,000 (~$45)', note: 'Active enforcement in tourist corridors', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt (cars)', amount: 'IDR 250,000 (~$15)', note: 'Inconsistently enforced outside cities', severity: 'low' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'IDR 15,000,000+ (~$900+)', note: 'Criminal charge; detention; vehicle impound', severity: 'high' },
			{ icon: 'mdi:car-emergency', label: 'Accident without valid IDP — no insurance', amount: 'Full damage cost', note: 'Not a fine; all costs fall directly to driver', severity: 'high' },
		],
		caption: 'Sources: Indonesian Traffic Law No. 22 of 2009 (Undang-Undang No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan); Bali Police enforcement records 2025; Online Visa Indonesia driving guide (March 2025); Wikipedia — Driving licence in Indonesia (October 2025).',
	},

	lez: {
		heading: 'Bali enforcement zones — the razzia corridors',
		badge: 'Bali-specific',
		lead: 'Four corridors account for the overwhelming majority of foreign-tourist police checks in Bali. GPS routes you straight through them.',
		zones: [
			{
				city: 'Canggu (Jalan Batu Bolong, Pererenan)',
				name: 'Highest-frequency razzia zone',
				description: "The most reliably documented checkpoint zone in Bali — barriers appear midweek mornings on Jalan Batu Bolong and the Pererenan exit roads. Officers ask for national licence, IDP, and helmet on properly fastened. Foreign tourists are the specific target. Most stops conclude in under five minutes when documentation is in order; in under fifteen minutes with the IDR 1,000,000 fine collected when it isn't.",
				fine: 'IDR 1,000,000 (~$60) + insurance void',
				note: 'The Canggu corridor is where digital-nomad rental volume is highest, which is why enforcement concentrates here. Carry IDP Companion printed; phone screens are unreliable in tropical light.',
			},
			{
				city: 'Kuta / Legian (Jalan Legian)',
				name: 'Tourist beach corridor checkpoint',
				description: 'Jalan Legian sees regular morning roadblocks targeting the high concentration of short-stay tourist scooter rentals between Kuta Beach and Seminyak. The pattern is identical to Canggu — IDP and helmet are the focus.',
				fine: 'IDR 1,000,000 (~$60) + insurance void',
				note: 'The Kuta corridor also sees scooter accident-rate concentration — combined with the insurance-void mechanism, this is the most expensive zone to be undocumented in.',
			},
			{
				city: 'Seminyak (main strip)',
				name: 'Evening checkpoint corridor',
				description: 'Seminyak\'s main strip sees evening checkpoints concentrated on Friday and Saturday — partly tied to the higher alcohol-related-incident rate at that time. Combined IDP, helmet, and 0.05% BAC checks are routine.',
				fine: 'IDR 1,000,000 (~$60) + DUI fines if applicable',
				note: 'If you drink at a beach club, take a Grab back. Indonesian DUI penalties (IDR 15,000,000+) dwarf the rental-day cost.',
			},
			{
				city: 'Ubud (central + Monkey Forest road)',
				name: 'Cultural-corridor enforcement',
				description: 'Less frequent than the South Bali corridors but documented. Central Ubud and the Monkey Forest road see midday checkpoints, particularly during peak tourist seasons. Higher rate of car rentals (versus scooters) than the South Bali corridors.',
				fine: 'IDR 1,000,000 (~$60)',
				note: 'Ubud rentals trend toward longer-stay digital-nomad bookings — the IDP question often arises during the contract phase rather than at a checkpoint.',
			},
		],
		tip: "Practical rule: Bali razzia checkpoints aren't an enforcement quirk — they are the operational consequence of Indonesian traffic law colliding with high foreign-rental volume. Two minutes of preparation before flying removes both the document issue and the insurance-void exposure. The scooter you save is your own.",
	},

	phrases: {
		heading: 'Useful Bahasa Indonesia phrases for checkpoints and rentals',
		lead: 'English is functional in South Bali tourist areas. Bahasa reaches further — particularly at razzia checkpoints in Canggu and Kuta where the operational language is Bahasa.',
		items: [
			{ phrase: 'Ini SIM saya', translation: 'Here is my driving licence', context: 'Pronounced "ee-nee SIM sah-yah". Handing over documents at any checkpoint' },
			{ phrase: 'Dan dokumen terjemahan', translation: 'And the translation document', context: 'Pronounced "dahn doh-koo-men ter-jeh-mah-han". Showing IDP Companion alongside Russian licence' },
			{ phrase: 'Saya turis Rusia', translation: "I'm a Russian tourist", context: 'Pronounced "sah-yah too-rees ROO-see-ah". Establishes context immediately' },
			{ phrase: 'Saya tidak mengerti bahasa Indonesia', translation: "I don't understand Indonesian", context: 'Pronounced "sah-yah tee-dahk meng-air-tee bah-ha-sah in-doh-NEE-see-ah". Most officers in tourist areas switch to basic English' },
			{ phrase: 'Ada masalah?', translation: 'Is there a problem?', context: 'Pronounced "ah-dah mah-SAH-lah?". Polite opening at any checkpoint stop' },
			{ phrase: 'Saya punya asuransi', translation: 'I have insurance', context: 'Pronounced "sah-yah POON-yah ah-soo-RAHN-see". In case of accident — present the rental insurance card' },
			{ phrase: 'Saya perlu menghubungi perusahaan sewa', translation: 'I need to call the rental company', context: 'For vehicle issues — most rental contracts include a 24h emergency number' },
			{ phrase: 'Terima kasih', translation: 'Thank you', context: 'Pronounced "te-REE-mah KAH-see". After the stop concludes — Indonesian courtesy norms reward this universally' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Bali as a Russian citizen',
		lead: 'Indonesia\'s IDP requirement is real, the razzia checkpoints are weekly, and left-hand traffic needs deliberate adaptation. All three resolve cleanly with a short checklist before flying.',
		schemaName: 'How to prepare for driving in Bali as a Russian citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your Russian licence into English (the operational fallback at every Bali rental desk and razzia checkpoint when foreign tourists are involved), plus French, Arabic, Spanish, German, Italian and 5 other widely-spoken languages. Issued in 2 minutes online, valid 1–5 years. Resolves the Cyrillic problem before you reach the rental desk.',
			},
			{
				title: 'Verify Category A on your Russian licence (for scooters)',
				text: 'Indonesian traffic law requires Category A to ride a scooter or motorbike. Check the reverse of your Russian licence card for the category letters. If only B is listed, scooter rental in Bali is technically illegal from the first metre — IDP Companion reflects what\'s on your licence, it cannot create a category that isn\'t there.',
			},
			{
				title: 'Print IDP Companion before flying',
				text: 'Print on standard paper at home or from any hotel after arrival. Phone screens at razzia checkpoints are less reliable than printed paper in tropical light and patchy data coverage. A printed copy alongside the physical Russian licence is what officers expect.',
			},
			{
				title: 'Carry the full document set in one folder',
				text: 'Physical Russian driving licence + IDP Companion (printed) + passport with Indonesian entry stamp + rental contract + helmet (worn and fastened on scooter). Digital photos of documents are routinely refused at roadside checkpoints.',
			},
			{
				title: 'First 15 minutes on the road — slow and conscious',
				text: 'Indonesia drives on the left; Russia drives on the right. Every junction reflex needs deliberate reversal. Start slow on a quiet street, stay left at every junction, and don\'t let speed build until the reversal feels automatic. The critical period is the first 15 minutes after leaving the rental shop.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Indonesia — honestly',
		lead: 'Bali\'s razzia checkpoints are real and documented. We\'re going to be direct about what IDP Companion does and doesn\'t do.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your Russian licence data into English, French, Arabic, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to make the Russian licence verifiable in English at razzia checkpoints and at rental staff desks at Ngurah Rai Airport (DPS) — Indonesian officers and rental agents in tourist corridors handle foreign documents in basic English',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not valid by itself — must be carried alongside your physical Russian driving licence',
				'Not a Category A endorsement that doesn\'t exist on your Russian licence — IDP Companion reflects what\'s on your licence, not what isn\'t',
			],
		},
		helps: {
			title: 'When IDP Companion helps Russian drivers in Bali',
			items: [
				'At razzia checkpoints in Canggu, Kuta, Seminyak and Ubud — English on the IDP Companion is read by officers in tourist corridors and resolves the Cyrillic problem in seconds',
				'At rental desks for both cars (DPS airport chains) and scooters (local Bali shops)',
				'When insurance documentation is reviewed after an accident — English translation establishes licence validity',
				'When an English presentation of the Cyrillic licence is the difference between a two-minute stop and a longer one',
			],
		},
		needOfficial: {
			title: 'Documents Indonesian law actually requires',
			items: [
				'Your physical Russian driving licence — the actual permission to drive (no document substitutes for this)',
				'Passport with Indonesian entry stamp — checked at every roadside stop',
				'Helmet (for scooters) — fastened and worn properly; the helmet placed on handlebars does not satisfy the checkpoint requirement',
				'For scooters: a Russian licence that already carries Category A — IDP Companion reflects it but cannot create it',
			],
		},
		pattern:
			'What prepared Russian travellers in Bali actually carry: physical Russian licence + IDP Companion (printed) + passport + Indonesian entry stamp + rental contract + helmet (worn). The translation companion solves the Cyrillic problem the booklet alone does not. Two minutes of preparation, $35, removes the razzia document issue and the insurance-void exposure that follows it.',
	},

	renting: {
		heading: 'Renting a scooter or car in Bali as a Russian driver',
		lead: 'Bali rental policies vary widely between airport chains and local scooter shops. The checkpoint is where documentation actually becomes relevant.',
		chains: [
			{ name: 'Hertz / Avis (Ngurah Rai Airport, DPS)', policy: 'IDP required for non-English, non-Indonesian licences. Russian Cyrillic licence specifically requires a translation document. Minimum age 21' },
			{ name: 'Local airport car operators (DPS)', policy: 'Mixed policies. Some accept translation companions; some require government-format IDP. Verify before booking' },
			{ name: 'Local scooter shops (Canggu, Seminyak, Ubud)', policy: 'Standard rate IDR 80,000–150,000/day (~$5–10). Most ask only for a passport as deposit and will not check IDP at the counter. The checkpoint after you leave is where documentation becomes relevant' },
			{ name: 'Grab / Gojek / Bluebird', policy: 'Ride-hailing apps — for central Kuta, Seminyak, and airport transfers, this is often the practical choice. Inexpensive, no documentation question' },
		],
		tipsHeading: 'Practical tips for Bali',
		tips: [
			'Confirm Category A is on your Russian licence before booking a scooter — listed on the back of the licence card',
			'Print IDP Companion — phone screens at roadside checkpoints are less reliable than printed paper',
			'Helmet must be fastened and worn properly; placing it on the handlebars does not satisfy the checkpoint requirement',
			'Fuel: Pertalite or Pertamax at petrol stations; small warungs sell bottled fuel in rural areas for IDR 15,000–20,000 per 1.5L bottle',
			'Road surfaces vary — smooth in tourist South Bali, potholed in inner Ubud and North Bali; reduce speed accordingly',
			'Sarong for temples: required for entry at most Balinese temples; available to borrow at the entrance for small donations',
			'Private driver hire (IDR 450,000–700,000 ~$30–45 for 8–10 hours) is often better value than independent scooter travel for Russians unfamiliar with Balinese road culture',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: 'Realistic outcomes for Russian tourists driving in Bali, ranked by likelihood.',
		items: [
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Resort area, no independent driving',
				text: 'Grab/Gojek app or private driver covers everything. No IDP question.',
			},
			{
				severity: 'low',
				frequency: 'Common with IDP',
				label: 'Scooter with IDP Companion + Category A, clean ride',
				text: 'Full documentation, razzia clears in two minutes, no insurance issue if there\'s an accident.',
			},
			{
				severity: 'med',
				frequency: 'Common without IDP',
				label: 'Razzia checkpoint, no IDP',
				text: 'IDR 1,000,000 (~$60) cash on the spot. Insurance voids simultaneously. Specific weekly enforcement target.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Scooter on car-only licence (no Category A)',
				text: 'Same fine and insurance consequence as no-IDP. The car licence does not legally cover scooters under Indonesian traffic law.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Minor accident, no IDP',
				text: 'No insurance coverage. Full costs directly to the driver. Roadside negotiation in Bahasa, on a street where traffic is moving the wrong direction from every Russian reflex. Hospital costs in Bali for scooter accidents start at figures bearing no relationship to the rental-day cost.',
			},
			{
				severity: 'med',
				frequency: 'Less common',
				label: 'Night riding, dog on road',
				text: 'Bali dogs are unpredictable at road crossings after dark. Slow down when any appear near the road surface. This is one of the more common scooter-accident causes among tourists.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI over 0.05% BAC',
				text: 'Criminal charge, IDR 15,000,000+ (~$900+) fine, possible detention.',
			},
		],
		math: 'IDP Companion is $35. Razzia fine is ~$60 cash with insurance void attached. A scooter accident without insurance coverage in Bali, with hospital costs, starts at figures bearing no relationship to either number. Preparation costs less.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Is an IDP legally required for Russian tourists in Indonesia?',
				answer: 'Yes. Indonesian Traffic Law No. 22 of 2009 requires all foreign tourists driving any motorised vehicle to carry both their national licence and a valid IDP. There are no nationality exceptions and no tourist-visa exemptions. This applies to cars, scooters and motorbikes equally.',
			},
			{
				id: 2,
				question: 'Why is the IDP especially important for Russian drivers?',
				answer: 'Russian licences are written in Cyrillic. Indonesian police and rental staff work in Bahasa and (in tourist corridors) basic English — they cannot read Cyrillic. Without a multilingual translation, the licence is unverifiable. IDP Companion provides the English presentation of your Russian licence data that makes checkpoint verification possible — English is the operational fallback at every Bali rental desk and razzia stop where foreign tourists are involved.',
			},
			{
				id: 3,
				question: 'Indonesia drives on the left — how significant is this?',
				answer: 'Very significant, especially on a scooter. Russia drives on the right; Indonesia on the left. Every instinct at junctions, overtakes and approaching traffic needs deliberate reversal. Adaptation takes 30–60 minutes of slow, conscious riding. The critical period is the first 15 minutes after leaving the rental shop. Take it slowly.',
			},
			{
				id: 4,
				question: 'My Russian licence is car category only. Can I ride a scooter?',
				answer: 'Not legally. Category B covers cars; Category A covers motorcycles and scooters. Check the reverse of your Russian licence for the category letters. If Category A is present, IDP Companion reflects it and scooter riding is legal. If only Category B is listed, scooter rental is technically illegal under Indonesian traffic law — and the razzia checkpoints specifically target this.',
			},
			{
				id: 5,
				question: 'What exactly are the razzia checkpoints?',
				answer: 'Planned police roadblocks, appearing weekly in main tourist corridors — Canggu, Kuta, Seminyak, Ubud. Officers ask for national licence and IDP. Foreign tourists without IDP are fined IDR 1,000,000 (~$60) on the spot, and rental insurance voids simultaneously. This is enforcement of Indonesian traffic law, applied where tourist non-compliance is concentrated.',
			},
			{
				id: 6,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: "No. A government IDP is a formal booklet issued under the 1949 Geneva Convention by an authorised national body (in Russia, the All-Russian Automobile Society — РОСАВТОКЛУБ). IDP Companion is a private multilingual translation document presenting your Russian licence details in English, French, Arabic, Spanish and 7 other widely-spoken languages from the 1949 Geneva Convention set — used alongside your original licence. Most Bali agencies accept translation companions; some request the government-format booklet. Verify with your specific rental agency before arriving.",
			},
			{
				id: 7,
				question: 'Can I get an IDP after I arrive in Bali?',
				answer: "Russian-origin government IDPs can only be issued in Russia. Once you've landed at Denpasar Airport, a government-format IDP is not obtainable locally. IDP Companion is a digital download — available from your hotel in Seminyak via any internet connection, printable within minutes of purchase.",
			},
			{
				id: 8,
				question: 'Is driving in central Kuta and Seminyak worth it independently?',
				answer: 'Honest answer: usually not. Traffic density in peak hours makes it frustrating even for experienced riders. Grab and Gojek are cheap and eliminate parking, checkpoint, and navigation stress in that corridor. Independent scooter travel is most rewarding for escaping the tourist belt — toward Ubud, Uluwatu, the Bukit Peninsula, or East and North Bali. That\'s where the preparation pays off.',
			},
			{
				id: 9,
				question: 'What about driving in Java or Lombok?',
				answer: 'Indonesian Traffic Law No. 22 of 2009 applies nationally — IDP is required throughout the country, not only in Bali. Java\'s urban traffic (Jakarta, Yogyakarta) is more challenging than Bali for unfamiliar drivers. Lombok\'s roads are quieter and the routes from the airport to the Gilis are scenic. The same documentation rules apply on every Indonesian island.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Indonesia trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic Russian licence — if your Russian licence expires, the companion expires with it. One purchase covers Indonesia plus Thailand, Egypt, UAE, Greece and any other destination you visit during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for Russian drivers and Indonesia-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Russia → Thailand', status: 'Live', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Russia → Egypt', status: 'Live', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Russia → Greece', status: 'Live', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Russia → UAE', status: 'Live', href: '/idp-for-russian-drivers-in-uae/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Russia → Turkey', status: 'Live', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'us', flagTo: 'th', label: 'US → Thailand', status: 'Live', href: '/idp-for-us-drivers-in-thailand/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including English, French, Arabic, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real Russian licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Indonesia, Thailand, Egypt, UAE, Greece. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Indonesian National Police (Polri), the Bali Provincial Police, or the Indonesian Ministry of Transportation. IDP Companion is not a government-issued International Driving Permit; in Russia, the All-Russian Automobile Society (РОСАВТОКЛУБ) is among the authorised issuers of national IDPs. IDP Companion must be used alongside your original Russian driving licence and reflects only the licence categories present on that licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Indonesian Traffic Law No. 22 of 2009 (Undang-Undang No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan)',
			'Bali Police enforcement records, 2025',
			'Online Visa Indonesia — Driving in Bali: IDP Rules & Traffic Mistakes (March 2025) — onlinevisaindonesia.com',
			'Wikipedia — Driving licence in Indonesia (October 2025) — en.wikipedia.org',
			'All-Russian Automobile Society (РОСАВТОКЛУБ) public guidelines',
		],
	},

	og: {
		originName: 'Russia',
		destinationName: 'Indonesia',
	},
};

const ru: CountryPairCopy = {
	seo: {
		title: 'Международные права для россиян в Индонезии: гид 2026',
		description:
			'IDP обязателен по индонезийскому закону, а полиция Бали еженедельно устраивает облавы (razzia) в Чангу и Куте на иностранцев без IDP. Кириллицу не читают. В Индонезии левостороннее движение. Честный гид 2026.',
		ogTitleShort: 'Россияне за рулём в Индонезии',
		ogSubtitle: 'Левостороннее. Еженедельные облавы. Скутеру нужна категория A.',
	},
	breadcrumbs: {
		home: 'Главная',
		current: 'Россия → Индонезия',
	},
	lastReviewed: 'Апрель 2026',
	labels: {
		freshnessPrefix: 'Последняя проверка:',
	},

	hero: {
		kicker: 'Россия → Индонезия · Бали · Гид 2026',
		title: 'Международные права для россиян в Индонезии: облавы Бали и категория A',
		lead: 'Контрольный пост razzia в Чангу появляется во вторник утром без объявления — шлагбаум поперёк Jalan Batu Bolong, трое офицеров в светоотражающих жилетах, очередь скутеров за барьером. Штраф иностранному туристу без IDP — IDR 1 000 000 (~$60), достаточно мало, чтобы кто-то закладывал его как риск. Второе последствие — страховка аренды: она перестаёт покрывать в момент, когда офицер фиксирует отсутствие документа. Любое ДТП с этой минуты ложится напрямую на водителя. Закон Индонезии о дорожном движении № 22 от 2009 года требует IDP от каждого иностранца за рулём. Российские права — на кириллице, индонезийские офицеры и сотрудники проката их не читают. И в Индонезии левостороннее движение — полная зеркаловка относительно России. Три вещи, которые надо знать ещё до того, как ключ от скутера окажется у вас в Семиньяке.',
		ctaPrimary: 'Получить IDP Companion за 2 минуты — $35',
		ctaSecondary: 'Все тарифы',
		badgeTop: 'Гид 2026',
		badgeBottom: 'От $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Да — IDP обязателен для каждого иностранца за рулём в Индонезии',
		text: 'Закон Индонезии о дорожном движении № 22 от 2009 года требует от всех иностранных туристов на любом моторизованном транспорте — машина, скутер, мотоцикл — иметь и национальные права, и действующий IDP. Никаких исключений по гражданству и никаких туристических послаблений. У россиян трение утраивается: кириллицу не читают индонезийские офицеры, российские права только с категорией B юридически не покрывают скутер (нужна категория A), и Индонезия едет по левой стороне.',
	},

	tldr: {
		heading: 'Российские права vs IDP Companion в Индонезии',
		lead: 'Индонезия — одно из самых популярных туристических направлений для российских водителей: IDP обязателен по закону, облавы в Бали еженедельно проверяют это в туристических коридорах, и аннулирование страховки в момент фиксации отсутствия документа — реальная цена.',
		colDocument: 'Документ',
		colWhatItDoes: 'Что даёт в Индонезии',
		colCost: 'Цена',
		rows: [
			{
				document: 'Российские права (только)',
				whatItDoes: 'Недостаточно — IDP обязателен по индонезийскому закону № 22 от 2009 года для всех иностранных туристов. Кириллицу не читают индонезийские офицеры и сотрудники проката. Российские права с одной категорией B юридически не покрывают скутер — нужна категория A. На облаве — IDR 1 000 000 (~$60) и одновременная аннуляция страховки.',
				cost: 'Уже есть',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + российские права',
				whatItDoes: 'Многоязычный цифровой PDF с данными прав на английском, французском, арабском, испанском, немецком, итальянском и ещё 5 распространённых языках набора Женевской конвенции 1949 года. Отражает ровно те категории, что в ваших российских правах. Английский на документе — рабочий fallback на стойках проката в аэропорту Нгурах-Рай (DPS), в скутерных конторах Бали и на облавах в Чангу, Куте, Семиньяке и Убуде: индонезийские офицеры в туристических коридорах переходят на базовый английский с иностранцами.',
				cost: '$35–55 (1–5 лет)',
				tone: 'companion',
			},
		],
		footnote: 'Что брать с собой в Бали: оригинал российских прав + IDP Companion (распечатанный) + загранпаспорт со штампом Индонезии + договор аренды. До брони скутера убедитесь, что в правах есть категория A. IDP Companion отражает то, что в правах есть — он не создаёт категорию, которой нет.',
	},

	whyNotEnough: {
		heading: 'Три вещи, о которых россияне регулярно не знают до прилёта',
		lead: 'Эти три детали дают подавляющее большинство дорогих сюрпризов у россиян за рулём в Бали. Все закрываются до вылета.',
		reasons: [
			{
				icon: 'ph:steering-wheel-bold',
				title: 'В Индонезии левостороннее движение',
				text: 'В России — правостороннее. В Индонезии — левостороннее, руль справа. Каждый рефлекс, наработанный дома — куда смотреть на перекрёстке, с какой стороны идёт встречка, как становиться на обгон, — нужно сознательно обратить. В машине с водителем это не видно. На своём скутере — упирается уже на первом перекрёстке после выезда из проката. Критический отрезок — первые 15 минут. Едьте медленно, держитесь левее, не разгоняйтесь, пока разворот рефлекса не станет автоматическим.',
			},
			{
				icon: 'mdi:motorbike',
				title: 'Категория B не покрывает скутер юридически',
				text: 'Индонезийский Дорожный закон и нормы IDP требуют, чтобы категория транспорта в IDP совпадала с категорией того, на чём вы едете. B покрывает машины. A покрывает мотоциклы и скутеры. Российские права только с категорией B юридически не разрешают ездить на 125-кубовой Honda Vario в Бали — независимо от того, что прокатная контора у вас принимает. Проверьте обратную сторону карточки прав: буквы категорий там. Если A есть — IDP Companion её отражает. Если нет — аренда скутера нелегальна с первого метра.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'Система razzia',
				text: 'Полиция Бали проводит плановые операционные облавы — *razzia* — целенаправленно по иностранным туристам без действующих документов. Они появляются еженедельно в основных туристических коридорах: Jalan Batu Bolong в Чангу, Jalan Legian в Куте, главная улица Семиньяка и центр Убуда. Штраф собирают на месте наличными. Аннуляция страховки идёт одновременно. Это не неформальщина — это применение реального юридического требования там, где несоблюдение концентрируется.',
			},
		],
	},

	rules: {
		heading: 'Правила вождения в Индонезии — Бали',
		lead: 'Левостороннее — главное переключение для россиян. Остальное в основном привычно. Алкоголь 0,05‰ (в России 0,00‰), и шлем — без обсуждения.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Сторона движения', value: 'ЛЕВАЯ', note: 'Полная зеркаловка от России — критичны первые 15 минут' },
			{ icon: 'mdi:speedometer', label: 'В городе', value: '50 км/ч', note: '30 км/ч у школ и в жилых зонах' },
			{ icon: 'mdi:road-variant', label: 'Загородные дороги', value: '80–100 км/ч', note: 'По знакам' },
			{ icon: 'mdi:beer-outline', label: 'Алкоголь', value: '0,05‰', note: 'В России 0,00‰ — здесь чуть мягче' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон', value: 'Только hands-free', note: 'Активный контроль; штраф IDR 750 000' },
			{ icon: 'mdi:helmet', label: 'Шлем', value: 'Обязателен и застёгнут', note: 'Водитель и пассажир; проверяют на каждой облаве' },
			{ icon: 'mdi:seatbelt', label: 'Ремни (машины)', value: 'Обязательно', note: 'Менее последовательно применяется в сельской местности' },
			{ icon: 'ph:traffic-cone-bold', label: 'Облавы razzia', value: 'Еженедельно', note: 'Чангу, Кута, Семиньяк, Убуд — основные туристические коридоры' },
		],
	},

	fines: {
		heading: 'Штрафы 2026 за частые нарушения',
		lead: 'В абсолютных долларах штрафы небольшие. Последствие в виде аннулированной страховки при ДТП без IDP сильно превышает сам штраф.',
		colViolation: 'Нарушение',
		colAmount: 'Штраф',
		colNote: 'Примечание',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Вождение без IDP', amount: 'IDR 250 000–1 000 000 (~$15–60)', note: 'Наличными на месте; страховка аннулируется одновременно', severity: 'med' },
			{ icon: 'mdi:motorbike', label: 'Скутер на правах только с категорией B', amount: 'IDR 250 000–1 000 000 (~$15–60)', note: 'То же последствие; целевая мишень облав', severity: 'med' },
			{ icon: 'mdi:helmet', label: 'Без шлема (или незастёгнутого)', amount: 'IDR 250 000 (~$15)', note: 'Проверяют вместе с IDP на каждой облаве', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Превышение скорости', amount: 'IDR 500 000 (~$30)', note: 'Камеры на трассах появляются всё чаще', severity: 'low' },
			{ icon: 'mdi:traffic-light', label: 'Проезд на красный', amount: 'IDR 500 000 (~$30)', note: '', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон в руках за рулём', amount: 'IDR 750 000 (~$45)', note: 'Активный контроль в туристических коридорах', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'Без ремня (машины)', amount: 'IDR 250 000 (~$15)', note: 'Применяется неравномерно вне городов', severity: 'low' },
			{ icon: 'mdi:beer-outline', label: 'Пьяное вождение свыше 0,05‰', amount: 'IDR 15 000 000+ (~$900+)', note: 'Уголовка; задержание; изъятие машины', severity: 'high' },
			{ icon: 'mdi:car-emergency', label: 'ДТП без действующего IDP — без страховки', amount: 'Полная стоимость ущерба', note: 'Это не штраф; всё ложится напрямую на водителя', severity: 'high' },
		],
		caption: 'Источники: Закон Индонезии о дорожном движении № 22 от 2009 года; данные правоприменения полиции Бали 2025; Online Visa Indonesia driving guide (март 2025); Wikipedia — Driving licence in Indonesia (октябрь 2025).',
	},

	lez: {
		heading: 'Зоны контроля на Бали — коридоры razzia',
		badge: 'Особенности Бали',
		lead: 'Четыре коридора дают подавляющее большинство проверок документов у иностранных туристов на Бали. GPS ведёт прямо через них.',
		zones: [
			{
				city: 'Чангу (Jalan Batu Bolong, Перерененан)',
				name: 'Зона с самой высокой частотой облав',
				description: 'Самая стабильно задокументированная контрольная зона на Бали — шлагбаумы появляются на Jalan Batu Bolong и выездах из Перерененан утром в будни. Офицеры проверяют национальные права, IDP и правильно застёгнутый шлем. Иностранные туристы — конкретная мишень. Большинство остановок занимает менее пяти минут с документами в порядке; менее пятнадцати — с собранным IDR 1 000 000 штрафом, когда документов нет.',
				fine: 'IDR 1 000 000 (~$60) + аннуляция страховки',
				note: 'В коридоре Чангу самый плотный поток арендных скутеров диджитал-номадов — поэтому концентрация контроля. Возите IDP Companion распечатанным; экраны телефонов ненадёжны в тропическом свете.',
			},
			{
				city: 'Кута / Легиан (Jalan Legian)',
				name: 'Туристический пляжный коридор',
				description: 'Jalan Legian регулярно видит утренние шлагбаумы по высокой концентрации краткосрочной аренды скутеров между Кута-Бичем и Семиньяком. Паттерн идентичен Чангу — фокус на IDP и шлеме.',
				fine: 'IDR 1 000 000 (~$60) + аннуляция страховки',
				note: 'В коридоре Куты также концентрируется аварийность скутеров — в сочетании с механизмом аннуляции страховки это самая дорогая зона быть без документов.',
			},
			{
				city: 'Семиньяк (главная улица)',
				name: 'Вечерний контрольный коридор',
				description: 'Главная улица Семиньяка видит вечерние шлагбаумы, концентрирующиеся в пятницу и субботу — частично связано с более высокой алкогольной аварийностью в это время. Совмещённые проверки IDP, шлема и 0,05‰ — рутина.',
				fine: 'IDR 1 000 000 (~$60) + штрафы за DUI, если применимо',
				note: 'Если выпиваете в пляжном клубе — обратно на Grab. Индонезийские штрафы за DUI (IDR 15 000 000+) перекрывают стоимость дня аренды.',
			},
			{
				city: 'Убуд (центр + Monkey Forest road)',
				name: 'Контроль в культурном коридоре',
				description: 'Реже, чем коридоры Южного Бали, но задокументировано. Центр Убуда и дорога Monkey Forest видят полуденные шлагбаумы, особенно в пик сезона. Доля аренды машин (vs скутеров) выше, чем в Южном Бали.',
				fine: 'IDR 1 000 000 (~$60)',
				note: 'Аренды в Убуде тяготеют к более длинным брони у диджитал-номадов — вопрос IDP часто всплывает на этапе договора, а не на контроле.',
			},
		],
		tip: 'Практическое правило: облавы razzia в Бали — это не причуда правоприменения, это операционное следствие столкновения индонезийского дорожного закона с высоким объёмом аренды иностранцами. Две минуты подготовки до вылета снимают и вопрос документов, и риск аннуляции страховки. Скутер, который вы спасаете — ваш собственный.',
	},

	phrases: {
		heading: 'Полезные фразы на бахаса для контролей и проката',
		lead: 'В туристическом Южном Бали английский работает. Бахаса достаёт глубже — особенно на облавах в Чангу и Куте, где рабочий язык — бахаса.',
		items: [
			{ phrase: 'Ini SIM saya', translation: 'Вот мои водительские права', context: 'Произносится «и-ни СИМ са-я». Передача документов на любом контроле' },
			{ phrase: 'Dan dokumen terjemahan', translation: 'А вот переводной документ', context: 'Произносится «дан до-ку-мен тер-дже-ма-хан». Показ IDP Companion рядом с российскими правами' },
			{ phrase: 'Saya turis Rusia', translation: 'Я российский турист', context: 'Произносится «са-я ту-рис РУ-си-а». Сразу обозначает контекст' },
			{ phrase: 'Saya tidak mengerti bahasa Indonesia', translation: 'Я не понимаю по-индонезийски', context: 'Произносится «са-я ти-дак мен-ге-ти ба-ха-са ин-до-НЕ-зи-я». В туристических зонах большинство офицеров переходит на базовый английский' },
			{ phrase: 'Ada masalah?', translation: 'Есть какая-то проблема?', context: 'Произносится «а-да ма-СА-лах?». Вежливое начало диалога на любой остановке' },
			{ phrase: 'Saya punya asuransi', translation: 'У меня есть страховка', context: 'Произносится «са-я ПУН-я а-су-РАН-си». При ДТП — предъявите карточку страховки рентала' },
			{ phrase: 'Saya perlu menghubungi perusahaan sewa', translation: 'Мне нужно позвонить в прокатную компанию', context: 'При проблемах с машиной — в большинстве договоров аренды есть круглосуточный номер' },
			{ phrase: 'Terima kasih', translation: 'Спасибо', context: 'Произносится «те-РИ-ма КА-си». После окончания остановки — индонезийские нормы вежливости это везде вознаграждают' },
		],
	},

	howTo: {
		heading: 'Как подготовиться к вождению в Бали россиянину',
		lead: 'Требование IDP в Индонезии реальное, облавы — еженедельные, а левостороннее — требует сознательной адаптации. Все три закрываются короткой проверкой до вылета.',
		schemaName: 'Как подготовиться к вождению в Бали россиянину',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Получите IDP Companion как многоязычный переводной документ',
				text: '$35 — многоязычный цифровой PDF с переводом российских прав на английский (рабочий fallback на каждой балийской прокатной стойке и на облавах razzia с иностранцами), плюс французский, арабский, испанский, немецкий, итальянский и ещё 5 распространённых языков. Готов за 2 минуты онлайн, действует 1–5 лет. Закрывает проблему кириллицы ещё до подхода к стойке.',
			},
			{
				title: 'Проверьте категорию A в российских правах (для скутера)',
				text: 'Индонезийский Дорожный закон требует категорию A для скутера или мотоцикла. Проверьте обратную сторону карточки российских прав. Если только B — аренда скутера в Бали юридически нелегальна с первого метра. IDP Companion отражает то, что в правах есть — он не создаёт категорию, которой нет.',
			},
			{
				title: 'Распечатайте IDP Companion перед вылетом',
				text: 'На обычной бумаге дома или в любой гостинице после прилёта. Экраны телефонов на облавах ненадёжны в тропическом свете и пятнистом покрытии данных. Распечатанная копия рядом с физическими правами — то, что ожидают офицеры.',
			},
			{
				title: 'Носите весь набор в одной папке',
				text: 'Физические российские права + IDP Companion (распечатанный) + загранпаспорт со штампом Индонезии + договор аренды + шлем (надетый и застёгнутый на скутере). Цифровые фото документов на придорожных контролях регулярно отказываются принимать.',
			},
			{
				title: 'Первые 15 минут на дороге — медленно и сознательно',
				text: 'В Индонезии левостороннее, в России — правостороннее. Каждый рефлекс на перекрёстке требует сознательного обращения. Начните на тихой улице, держитесь левее на каждом перекрёстке, не разгоняйтесь, пока разворот рефлекса не станет автоматическим. Критический отрезок — первые 15 минут после выезда из проката.',
			},
		],
	},

	honesty: {
		heading: 'Где IDP Companion помогает в Индонезии — без преувеличений',
		lead: 'Облавы razzia в Бали реальны и задокументированы. Скажем прямо, что IDP Companion делает и чего не делает.',
		is: {
			title: 'Что такое IDP Companion',
			items: [
				'Многоязычный цифровой PDF с переводом данных российских прав на английский, французский, арабский, испанский, немецкий, итальянский и ещё 5 распространённых языков набора Женевской конвенции 1949 года',
				'Сделан, чтобы российские права становились читаемыми по-английски на облавах razzia и на стойках проката в аэропорту Нгурах-Рай (DPS) — индонезийские офицеры и прокатные агенты в туристических коридорах ведут диалог с иностранцами на базовом английском',
				'Готов за минуты после загрузки прав и автоматической верификации',
				'Цена: $35 (1 год), $45 (3 года), $55 (5 лет) — разовая оплата, без подписок',
			],
		},
		isNot: {
			title: 'Чем IDP Companion НЕ является',
			items: [
				'Не государственный IDP по Женевской конвенции 1949 года',
				'Сам по себе не действителен — носить только вместе с физическими российскими правами',
				'Не создаёт категорию A, которой нет на ваших правах — IDP Companion отражает то, что в правах есть, а не то, чего нет',
			],
		},
		helps: {
			title: 'Когда IDP Companion помогает россиянам в Бали',
			items: [
				'На облавах в Чангу, Куте, Семиньяке и Убуде — английский на IDP Companion читают офицеры в туристических коридорах и снимают проблему кириллицы за секунды',
				'На стойках проката и для машин (сети в DPS), и для скутеров (местные конторы Бали)',
				'При страховом разбирательстве после ДТП — английский перевод подтверждает действительность прав',
				'Когда английская версия кириллических прав — это разница между двухминутной остановкой и долгой',
			],
		},
		needOfficial: {
			title: 'Документы, которые требует индонезийский закон',
			items: [
				'Физические российские права — собственно разрешение на вождение (это ничем не заменяется)',
				'Загранпаспорт со штампом Индонезии — проверяют на каждой остановке',
				'Шлем (для скутеров) — застёгнутый и правильно надетый; шлем на руле требование контроля не закрывает',
				'Для скутеров: российские права, на которых уже стоит категория A — IDP Companion её отражает, но создать не может',
			],
		},
		pattern:
			'Что реально берут с собой подготовленные российские туристы в Бали: физические российские права + IDP Companion (распечатанный) + загранпаспорт + штамп Индонезии + договор аренды + шлем (надетый). Переводной компаньон закрывает проблему кириллицы, которую сама книжка IDP не закрывает. Две минуты подготовки, $35 — и снят и вопрос документов на облаве, и риск аннуляции страховки.',
	},

	renting: {
		heading: 'Аренда скутера или машины в Бали с российскими правами',
		lead: 'Прокатные политики на Бали сильно различаются между сетями в аэропорту и местными скутерными конторами. Контроль razzia — место, где документы реально становятся релевантными.',
		chains: [
			{ name: 'Hertz / Avis (аэропорт Нгурах-Рай, DPS)', policy: 'IDP обязателен для прав не на английском и не на индонезийском. Российская кириллица требует переводной документ. С 21 года' },
			{ name: 'Местные автоконторы (DPS)', policy: 'Смешанные политики. Часть принимает переводные компаньоны; часть требует государственный IDP. Уточняйте до брони' },
			{ name: 'Местные скутерные конторы (Чангу, Семиньяк, Убуд)', policy: 'Стандартная цена IDR 80 000–150 000/день (~$5–10). Большинство просит только загранпаспорт в залог и не проверяет IDP на стойке. Контроль после выезда — место, где документы становятся релевантными' },
			{ name: 'Grab / Gojek / Bluebird', policy: 'Райдхейл-приложения — для центральной Куты, Семиньяка и трансферов до аэропорта это часто практичный выбор. Недорого, без вопросов о документах' },
		],
		tipsHeading: 'Практические советы для Бали',
		tips: [
			'До брони скутера убедитесь, что в российских правах есть категория A — указано на обороте карточки',
			'Распечатайте IDP Companion — экраны телефонов на придорожных контролях менее надёжны, чем бумага',
			'Шлем должен быть застёгнут и надет правильно; шлем на руле требование контроля не закрывает',
			'Топливо: Pertalite или Pertamax на заправках; маленькие варунги в сельской местности продают бутылочное топливо за IDR 15 000–20 000 за 1,5 л',
			'Покрытие дорог разное — гладко в туристическом Южном Бали, ямы в глубинке Убуда и Северном Бали; снижайте скорость',
			'Саронг для храмов: обязателен для входа в большинство балийских храмов; на входе одалживают за небольшое пожертвование',
			'Личный водитель (IDR 450 000–700 000 ~$30–45 за 8–10 часов) часто выгоднее, чем самостоятельный скутер, для россиян, не знакомых с балийской дорожной культурой',
		],
	},

	outcomes: {
		heading: 'Что бывает, если ехать без IDP — реальные сценарии',
		lead: 'Реалистичные сценарии для российских туристов в Бали, по убыванию частоты.',
		items: [
			{
				severity: 'low',
				frequency: 'Очень часто',
				label: 'Курортная зона, без самостоятельного вождения',
				text: 'Grab/Gojek или личный водитель закрывает всё. Вопрос IDP не возникает.',
			},
			{
				severity: 'low',
				frequency: 'Часто с IDP',
				label: 'Скутер с IDP Companion + категорией A, чистая поездка',
				text: 'Полный набор документов, облава проходит за две минуты, страховка цела при ДТП.',
			},
			{
				severity: 'med',
				frequency: 'Часто без IDP',
				label: 'Облава, IDP нет',
				text: 'IDR 1 000 000 (~$60) наличными на месте. Страховка аннулируется одновременно. Целевая мишень еженедельного контроля.',
			},
			{
				severity: 'med',
				frequency: 'Иногда',
				label: 'Скутер на правах только с категорией B (нет A)',
				text: 'То же последствие штрафа и аннуляции страховки, что без IDP. Категория B юридически не покрывает скутер по индонезийскому Дорожному закону.',
			},
			{
				severity: 'high',
				frequency: 'Реже',
				label: 'Мелкое ДТП без IDP',
				text: 'Страховка не покрывает. Все расходы напрямую водителю. Придорожные переговоры на бахаса, на улице с движением «не туда» относительно каждого российского рефлекса. Расходы на больницу в Бали при скутерных ДТП начинаются с цифр, не имеющих отношения к стоимости дня аренды.',
			},
			{
				severity: 'med',
				frequency: 'Реже',
				label: 'Ночная езда, собака на дороге',
				text: 'Балийские собаки непредсказуемо переходят дорогу после темноты. Снижайте скорость, как только видите их у обочины. Это одна из частых причин скутерных ДТП у туристов.',
			},
			{
				severity: 'high',
				frequency: 'Редко при подготовке',
				label: 'Пьяное вождение свыше 0,05‰',
				text: 'Уголовное обвинение, штраф IDR 15 000 000+ (~$900+), возможно задержание.',
			},
		],
		math: 'IDP Companion — $35. Штраф razzia — ~$60 наличными с одновременной аннуляцией страховки. ДТП на скутере без страхового покрытия в Бали, с расходами на больницу, начинается с цифр, не имеющих отношения ни к одному из этих чисел. Подготовка стоит меньше.',
	},

	faq: {
		heading: 'Частые вопросы',
		items: [
			{
				id: 1,
				question: 'IDP действительно нужен россиянам в Индонезии?',
				answer: 'Да. Закон Индонезии о дорожном движении № 22 от 2009 года требует от всех иностранных туристов на любом моторизованном транспорте иметь и национальные права, и действующий IDP. Никаких исключений по гражданству и никаких туристических послаблений. Это касается машин, скутеров и мотоциклов в равной мере.',
			},
			{
				id: 2,
				question: 'Почему именно россиянам это особенно важно?',
				answer: 'Российские права — на кириллице. Индонезийская полиция и сотрудники проката работают на бахаса и (в туристических коридорах) на базовом английском — кириллицу не читают. Без многоязычного перевода права непроверяемы. IDP Companion даёт английскую версию данных российских прав, благодаря которой проверка на контроле вообще возможна — английский это рабочий fallback на каждой балийской прокатной стойке и облаве с участием иностранцев.',
			},
			{
				id: 3,
				question: 'В Индонезии левостороннее — насколько это серьёзно?',
				answer: 'Очень серьёзно, особенно на скутере. В России правостороннее; в Индонезии — левостороннее. Каждый инстинкт на перекрёстках, обгонах и встречке требует сознательного обращения. Адаптация занимает 30–60 минут медленной, сознательной езды. Критический отрезок — первые 15 минут после выезда из проката. Едьте медленно.',
			},
			{
				id: 4,
				question: 'У меня в правах только категория B. Можно ездить на скутере?',
				answer: 'Юридически — нет. Категория B покрывает машины; категория A — мотоциклы и скутеры. Проверьте обратную сторону российских прав на буквы категорий. Если A есть — IDP Companion её отражает, и скутер легален. Если только B — аренда скутера юридически нелегальна по индонезийскому Дорожному закону, и облавы razzia это конкретно ловят.',
			},
			{
				id: 5,
				question: 'Что такое контрольные посты razzia?',
				answer: 'Плановые полицейские шлагбаумы, появляющиеся еженедельно в основных туристических коридорах — Чангу, Кута, Семиньяк, Убуд. Офицеры проверяют национальные права и IDP. Иностранцев без IDP штрафуют на IDR 1 000 000 (~$60) на месте, и страховка аренды аннулируется одновременно. Это применение индонезийского Дорожного закона там, где туристическое несоблюдение концентрируется.',
			},
			{
				id: 6,
				question: 'IDP Companion — это то же, что государственный IDP?',
				answer: 'Нет. Государственный IDP — официальная книжка по Женевской конвенции 1949 года, выданная уполномоченным национальным органом (в России — РОСАВТОКЛУБ). IDP Companion — частный многоязычный переводной документ с данными ваших российских прав на английском, французском, арабском, испанском и ещё 7 распространённых языках набора Женевской конвенции 1949 года — используется вместе с оригиналом прав. Большинство балийских контор принимают переводные компаньоны; часть требует государственную книжку. Уточняйте у конкретной до прилёта.',
			},
			{
				id: 7,
				question: 'Можно ли получить IDP уже в Бали?',
				answer: 'Государственные IDP по российским правам выдаются только в России. После приземления в аэропорту Денпасар государственная книжка локально не оформляется. IDP Companion — цифровой документ, доступен из вашего отеля в Семиньяке через любое подключение, печатается за минуты после оплаты.',
			},
			{
				id: 8,
				question: 'Стоит ли ездить по центральной Куте и Семиньяку самостоятельно?',
				answer: 'Честно: обычно нет. Плотность трафика в пик неприятна даже опытным райдерам. Grab и Gojek недороги и убирают и парковку, и контроль, и навигацию в этом коридоре. Самостоятельный скутер выгоден для выходов из туристического пояса — в Убуд, Улувату, на Букит или в Восточный и Северный Бали. Там подготовка окупается.',
			},
			{
				id: 9,
				question: 'А что насчёт Явы или Ломбока?',
				answer: 'Закон Индонезии № 22 от 2009 года действует по всей стране — IDP обязателен везде, не только в Бали. Городской трафик Явы (Джакарта, Джокьякарта) — сложнее Бали для незнакомого водителя. Дороги Ломбока тише, маршруты от аэропорта до Гили — живописные. Те же документальные правила работают на каждом индонезийском острове.',
			},
			{
				id: 10,
				question: 'Сколько действует IDP Companion для поездок в Индонезию?',
				answer: 'На выбор: 1 год ($35), 3 года ($45), 5 лет ($55). Срок привязан к вашим российским правам — если они истекают, истекает и компаньон. Одна покупка покрывает Индонезию плюс Таиланд, Египет, ОАЭ, Грецию и любые другие направления, которые вы посетите за выбранный период.',
			},
		],
	},

	related: {
		heading: 'Похожие гиды',
		lead: 'Больше гидов по парам стран для российских водителей и туристов, едущих в Индонезию.',
		comingSoonLabel: 'Скоро',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Россия → Таиланд', status: 'В эфире', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Россия → Египет', status: 'В эфире', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Россия → Греция', status: 'В эфире', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Россия → ОАЭ', status: 'В эфире', href: '/idp-for-russian-drivers-in-uae/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Россия → Турция', status: 'В эфире', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'us', flagTo: 'th', label: 'США → Таиланд', status: 'В эфире', href: '/idp-for-us-drivers-in-thailand/' },
		],
	},

	finalCta: {
		heading: 'Готовы оформить IDP Companion?',
		text: 'Многоязычный PDF с английским, французским, арабским, испанским, немецким, итальянским и ещё 5 распространёнными языками набора Женевской конвенции 1949 года — готов за 2 минуты по вашим реальным российским правам. Печатайте дома или из любой гостиницы. Действует 1–5 лет — покроет эту поездку и следующие в Индонезию, Таиланд, Египет, ОАЭ, Грецию. $35 / 1 год · $45 / 3 года · $55 / 5 лет. Разовый платёж, без подписок.',
		button: 'Начать оформление',
	},

	legal: {
		disclaimerHeading: 'Дисклеймер',
		disclaimer:
			'IDP Companion — это частный многоязычный переводной документ. Мы не аффилированы с Национальной полицией Индонезии (Polri), полицией провинции Бали или Министерством транспорта Индонезии. IDP Companion не является государственным International Driving Permit; в России к уполномоченным эмитентам национальных IDP относится в том числе Всероссийский Автомобильный Клуб (РОСАВТОКЛУБ). IDP Companion используется только вместе с оригиналом ваших российских прав и отражает только те категории, что на правах есть.',
		sourcesHeading: 'Источники',
		sources: [
			'Закон Индонезии о дорожном движении № 22 от 2009 года (Undang-Undang No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan)',
			'Данные правоприменения полиции Бали, 2025',
			'Online Visa Indonesia — Driving in Bali: IDP Rules & Traffic Mistakes (март 2025) — onlinevisaindonesia.com',
			'Wikipedia — Driving licence in Indonesia (октябрь 2025) — en.wikipedia.org',
			'Публичные руководства РОСАВТОКЛУБа',
		],
	},

	og: {
		originName: 'Россия',
		destinationName: 'Индонезия',
	},
};

export const russiaIndonesiaCopy: Record<'en' | 'ru', CountryPairCopy> = { en, ru };
