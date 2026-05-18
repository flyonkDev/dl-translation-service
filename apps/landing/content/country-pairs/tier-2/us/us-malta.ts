/**
 * Country-pair content: United States → Malta.
 * Tier 2. Locales: en only (US-origin default).
 *
 * Killer angles for Malta:
 *  - LEFT-HAND TRAFFIC on a small island (316 km², smaller than Denver) with
 *    genuinely narrow medieval streets in Valletta, Mdina, the Three Cities
 *    where two cars sometimes don't fit side by side. The directional
 *    reversal is the primary preparation, not the paperwork.
 *  - No on-the-spot fine collection — notices issued, paid before leaving
 *    Malta or correspondence sent to your US address.
 *  - VALLETTA CVA (Controlled Vehicular Access) — cameras at ancient city
 *    walls calculate time spent inside and charge via rental company.
 *    Morning weekday entry = charged; after 14:00 + weekends = typically free.
 *  - Gozo ferry requires explicit rental-agreement permission for the
 *    crossing (most majors allow; some smaller operators exclude or charge).
 *  - BAC limit 0.08% — same as most US states. One of the few Mediterranean
 *    destinations where US drivers aren't in stricter territory.
 *
 * PDF language note: Maltese is NOT on the IDP Companion template. But
 * Malta is officially bilingual English + Maltese, and English is the
 * universal working language at every rental desk and police interaction
 * in the country (legacy of British rule until 1964). Reframe through
 * English, which IS on the PDF.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Malta: 2026 Guide',
		description:
			'Malta drives on the LEFT — complete reversal for US drivers. BAC limit is 0.08% (same as home). No on-the-spot fines. Valletta charges by camera. Gozo needs rental permission. IDP Companion in 2 min — $35.',
		ogTitleShort: 'US Drivers in Malta: IDP Guide 2026',
		ogSubtitle: 'Left-hand traffic. BAC same as home. No on-the-spot fines.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Malta',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Malta · 2026 Guide',
		title: 'IDP for US Drivers in Malta: Small Island, Left-Hand Traffic',
		lead: "Malta is 316 square kilometres — smaller than the city of Denver, every road eventually connecting to every other road in a way that makes getting lost nearly impossible. What makes the first hour surprising for Americans isn't the geography. Malta drives on the left, the steering wheel is on the right, and the medieval streets of Valletta and Mdina don't offer much margin while the recalibration is happening. The IDP question is one of the cleaner ones in this guide: Malta accepts US English-language licences for tourist stays, rental agencies recommend an IDP as a booking-condition formality, and the BAC limit is 0.08% — the same as home. The cognitive load is the left-side adjustment. Two minutes for the document. Park outside Valletta's walls in the morning to avoid the camera. Check the Gozo ferry clause before you cross.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Not strictly required but commonly requested by rental agencies',
		text: 'Maltese law permits non-EU tourists with English-language licences to drive for up to 12 months. In practice, rental companies commonly require an IDP alongside the national licence as a booking condition. Having one eliminates the uncertainty before it becomes a problem at the desk. Malta is one of the cleaner IDP situations for US tourists — no convention-format mismatches, no script issues, no documentation cliff.',
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in Malta',
		lead: 'Malta is one of the smoothest documentation environments in this guide. The left-hand traffic is the genuine preparation work.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Malta',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Recognised for tourist stays — English-language licence accepted by most rental companies and Malta Police. Some agencies still require an IDP as a booking-condition formality even for English-language licences.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in 12 languages — including English (Malta\'s working official language, universal at every rental desk and police stop) and Italian (Malta\'s strong second tourist-language given its proximity to Sicily). Satisfies rental-agency booking-condition checks for an IDP.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry alongside IDP Companion: original physical US driver licence, US passport, rental agreement, vehicle insurance. No motorway tolls anywhere in Malta or Gozo. Left-hand traffic is the actual preparation work — steering wheel on the right.',
	},

	whyNotEnough: {
		heading: 'Why your US licence alone is sometimes not enough',
		lead: 'For most US tourists in Malta, the paperwork question is the smaller of the preparation items. The directional reversal and the Valletta camera system are the real items.',
		reasons: [
			{
				icon: 'ph:steering-wheel-bold',
				title: 'Left-hand traffic — the actual preparation',
				text: 'Malta drives on the left, a legacy of British rule until 1964. Steering wheel on the right, normal driving lane is the LEFT lane, overtaking happens on the right. At medieval junctions in Valletta or in the village lanes between Mdina and Mosta, the simultaneous inversions hit while the road is barely wider than the rental car. Most US drivers adapt within 30–60 minutes. Choose a small or compact vehicle for Malta — an SUV creates problems on village lanes.',
			},
			{
				icon: 'mdi:cctv',
				title: 'The Valletta CVA cameras',
				text: "Valletta operates a Controlled Vehicular Access system since 2007. Cameras at the ancient city walls photograph every plate entering and exiting, calculating time spent inside. Charges accrue based on duration and are billed to the rental company, which adds them to your final bill with an administrative fee. Entry after 14:00 on weekdays and all day on weekends is typically free. Morning weekday visits are charged. The practical fix: don't drive into Valletta in the morning — park outside and walk in.",
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-agency booking condition',
				text: 'Maltese law accepts US English-language licences for tourist driving up to 12 months. Most rental companies still list "IDP recommended" or "IDP required" as a booking condition for non-EU licence holders — applied as policy regardless of the English language. Having IDP Companion ready means the desk conversation completes in standard time instead of producing a question.',
			},
		],
	},

	rules: {
		heading: 'Maltese driving rules US drivers should know',
		lead: 'Left-hand traffic is the dominant adjustment. The Valletta camera system and the Gozo ferry rental clause are the next two specifics.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Complete reversal from the US; steering wheel on the right; overtaking to the right' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '50 km/h', note: 'In towns and built-up areas' },
			{ icon: 'mdi:road-variant', label: 'Open road limit', value: '80 km/h', note: 'Some sections 64 km/h — follow posted signs' },
			{ icon: 'mdi:car-multiple', label: 'Motorways / tolls', value: 'None', note: 'No motorway tolls anywhere in Malta or Gozo' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.08% BAC', note: 'Same as most US states; 0.02% for drivers under 2 years experience and professional drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Including stationary in traffic; €100 fine; hands-free permitted' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'All occupants', note: '€45–60 per person; children under 3 require child restraint' },
			{ icon: 'mdi:cctv', label: 'Valletta CVA', value: 'Cameras at city walls', note: 'Time-based charge for entry; after 14:00 weekdays + weekends typically free' },
		],
	},

	fines: {
		heading: '2026 fines in Malta — notice-based, not on-the-spot',
		lead: 'Malta does not collect fines on the spot the way Portugal or Morocco do. You receive a notice at the roadside and are expected to pay before leaving the country, or correspondence is sent to your home address. Rental-company camera violations (CVA, speed cameras) are billed through the agency with a processing fee.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding', amount: '€35–100+', severity: 'low', note: 'Notice issued; pay before leaving Malta or receive correspondence' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€100', severity: 'med', note: 'Including when stationary in traffic' },
			{ icon: 'ph:warning-bold', label: 'Failing to yield', amount: '€70', severity: 'med', note: 'Roundabout and junction violations' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€45–60', severity: 'low', note: 'Per person' },
			{ icon: 'mdi:cctv', label: 'Valletta CVA charge', amount: 'Variable (camera-calculated)', severity: 'low', note: 'Billed via rental company + processing fee; avoid by parking outside walls or arriving after 14:00' },
			{ icon: 'ph:parking-bold', label: 'Parking violations', amount: '€20–65', severity: 'low', note: 'Common in Valletta, Sliema, St Julian\'s; yellow lines strictly enforced' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'From €100', severity: 'high', note: '' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.08% BAC', amount: 'Heavy fine + suspension', severity: 'high', note: 'Same threshold as US but breath-test compulsory after any injury accident' },
		],
		caption: 'Sources: Transport Malta — transport.gov.mt; Malta Police Force traffic enforcement. Fines schedules reviewed annually.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Malta — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages, including English (Malta\'s official working language) and Italian (the strong second tourist-language given Malta\'s proximity to Sicily and historic ties)',
				'A standardised layout that\'s easier for a Maltese rental agent or police officer to read than a US state-specific licence format',
				'An instant digital download — available immediately if you\'re past the lead time to order any government-format IDP by post',
				'Designed to be carried alongside your physical US licence, not as a replacement',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — your physical US driver\'s licence must be carried alongside it at all times',
				'Not a Valletta CVA payment system — the camera charges are handled separately by the rental company and added to your final bill',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Malta',
			items: [
				'At rental desks that list an IDP as a booking condition for non-EU licence holders, regardless of English-language status',
				'At Malta Police traffic stops where a standardised multilingual reference of your US licence details speeds the interaction',
				'When combining Malta with other destinations — Italy, Sicily, Greece — where a translation companion is useful or required',
				'When the trip is on short notice and obtaining a government-format IDP by post before departure isn\'t logistically possible',
			],
		},
		needOfficial: {
			title: 'What Maltese authorities and rental companies actually expect',
			items: [
				'Original physical US driver\'s licence — no digital copies at roadside',
				'US passport',
				'Rental agreement and vehicle insurance certificate — in the vehicle',
				'For Gozo crossings: confirmation that your specific rental agreement permits driving onto the Gozo ferry (most majors allow; some smaller operators exclude)',
			],
		},
		pattern: 'The pattern: Malta is the smoothest documentation environment for US tourists in this guide. The IDP is a formality the agency adds as a booking condition. The left-hand traffic on medieval narrow streets is the actual preparation.',
	},

	renting: {
		heading: 'Renting a car in Malta as a US driver',
		lead: 'Major chains operate at Malta International Airport (MLA) alongside a well-developed local rental market in Sliema, St Julian\'s, and Luqa. Choose a small or compact vehicle — Malta\'s village lanes are not suitable for large vehicles.',
		chains: [
			{ name: 'Hertz Malta', policy: 'Available at MLA. Accepts US English-language licence; IDP recommended and commonly required by booking conditions. Minimum age 21; under-25 surcharge. Credit card for deposit.' },
			{ name: 'Avis Malta', policy: 'Same position. Available at MLA and central locations. IDP recommended for non-EU holders. Minimum age 21.' },
			{ name: 'Europcar Malta', policy: 'Available at MLA. Accepts US licence with IDP. Minimum age 21.' },
			{ name: 'Local agencies (Luqa, Sliema, St Julian\'s)', policy: 'Malta has a well-developed local rental market. Many smaller operators are flexible on documentation for English-language licences. Some accept US licences without IDP; others require one as a formality. Check booking conditions before departure.' },
		],
		tipsHeading: 'Practical tips for Malta',
		tips: [
			'Choose a small or compact vehicle — Malta\'s roads, particularly in Valletta, Mdina, and village centres, are not suitable for large vehicles',
			'Automatic transmission available and recommended given the left-hand traffic adjustment; book early for peak season (June–September)',
			'Credit card for deposit at international agencies; debit cards generally not accepted',
			'Fuel: unleaded petrol and diesel widely available; fuel prices are government-regulated so don\'t vary between stations',
			'No motorway tolls anywhere in Malta or Gozo',
			'Gozo day trip: verify your rental agreement covers the ferry crossing before boarding at Cirkewwa; return ticket purchased at Mġarr terminal in Gozo when you leave',
			'Valletta parking: arrive after 14:00 or park outside the walls (Floriana, City Gate car park, Marsamxett harbour) and walk in — Valletta is small enough to cover entirely on foot',
			'Maltese drivers are assertive — hold your position confidently; lanes are treated as approximate in heavy Sliema/St Julian\'s traffic',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Malta',
		lead: 'The realistic range of outcomes for US tourists in Malta — ranked by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'very common',
				label: 'US licence + IDP Companion, smooth rental, clean drive',
				text: 'Full documentation. Rental processes in standard time. The IDP Companion satisfies the booking-condition check for non-EU licence holders.',
			},
			{
				severity: 'low',
				frequency: 'common',
				label: 'US licence alone, rental desk accepts',
				text: 'English-language licence; many agencies process without explicit IDP request. Booking-condition checks vary by branch and agent.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'US licence alone, rental desk requests IDP',
				text: 'Booking-condition formality applied strictly. IDP Companion resolves on the spot. Without one, possible delay or surcharge.',
			},
			{
				severity: 'low',
				frequency: 'every US visitor',
				label: 'Left-hand traffic adjustment, first 30 minutes',
				text: 'Deliberate slow start in airport-area roads before committing to Valletta or Sliema rush hour. Settles within 30–60 minutes for most drivers.',
			},
			{
				severity: 'low',
				frequency: 'common for morning visitors',
				label: 'Valletta CVA charge',
				text: 'Camera-calculated time-based fee. Billed via the rental company with a processing fee on your final bill. Avoid by arriving after 14:00 or parking outside the walls.',
			},
			{
				severity: 'low',
				frequency: 'less common',
				label: 'Traffic violation notice issued',
				text: 'No on-the-spot cash collection. Pay before leaving Malta at the address listed on the notice, or receive correspondence at your US address.',
			},
			{
				severity: 'med',
				frequency: 'less common',
				label: 'Gozo ferry without rental permission',
				text: 'Your rental agreement may exclude Gozo. Verify before boarding the ferry at Cirkewwa. Most major agencies allow it; some smaller operators exclude or charge a fee.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'DUI over 0.08% BAC',
				text: 'Same threshold as most US states. Breath test compulsory after any accident involving injuries. Heavy fine plus suspension.',
			},
		],
		math: 'IDP Companion is $35. Valletta CVA morning charge is typically €5–15 plus a rental-agency processing fee. Gozo ferry without rental permission costs whatever the insurance void costs if an incident happens on Gozo. The left-hand-traffic adjustment costs nothing if you start slowly in the airport area before committing to medieval lanes.',
	},

	phrases: {
		heading: 'Maltese and English at rental desks and police stops',
		lead: 'Malta has two official languages — Maltese and English. English is universal across the island; every rental agency and police officer is English-capable (legacy of British rule until 1964). Maltese phrases are useful for warmth and local appreciation but rarely necessary for practical interactions.',
		items: [
			{ phrase: 'Hawn id-dokumenti tiegħi', translation: 'Here are my documents', context: 'Handing over the physical US licence — although you can simply say it in English' },
			{ phrase: 'U t-traduzzjoni', translation: 'And the translation', context: 'Showing IDP Companion alongside' },
			{ phrase: 'Jien turista Amerikan / Amerikana', translation: "I'm an American tourist (m./f.)", context: 'At a stop — though English works equally well' },
			{ phrase: 'Hemm xi problema?', translation: 'Is there a problem?', context: 'At a checkpoint — English version works fine in any tourist area' },
			{ phrase: 'Għandi assigurazzjoni', translation: 'I have insurance', context: 'In case of accident' },
			{ phrase: 'Grazzi ħafna', translation: 'Thank you very much', context: 'Universal Maltese pleasantry; appreciated even by English-speaking locals' },
			{ phrase: 'Bonġu', translation: 'Good morning (good day)', context: 'Standard greeting before noon' },
			{ phrase: 'Iva / Le', translation: 'Yes / No', context: 'Useful at any documentation interaction' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Malta (US citizens)',
		lead: "Malta is one of the cleaner preparations in this guide — short list, mostly around the directional shift and the Valletta camera system.",
		schemaName: 'How to prepare for driving in Malta as a US citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card. Digital photos are not accepted at Maltese rental desks. Maltese law accepts US English-language licences for tourist driving up to 12 months.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. Covers the rental-agency booking-condition formality that applies to non-EU licence holders regardless of English-language status.',
			},
			{
				title: 'Mental rehearsal for left-hand traffic',
				text: 'Steering wheel on the right. Normal driving lane is the LEFT lane. Overtake on the right. At medieval junctions in Valletta or village lanes between Mdina and Mosta, the simultaneous inversions hit while the road is barely wider than the rental. Start slowly in the airport area before committing to traffic.',
			},
			{
				title: 'Plan around the Valletta CVA system',
				text: 'Cameras at the ancient city walls calculate time spent inside and charge based on duration. Entry after 14:00 weekdays and all day weekends is typically free; morning visits are charged. Park at the City Gate, Floriana, or Marsamxett harbour and walk in — Valletta is small enough to cover entirely on foot (~600 m from City Gate to Lower Barrakka Gardens).',
			},
			{
				title: 'Confirm Gozo coverage if relevant',
				text: 'If your itinerary includes Gozo, verify your specific rental agreement explicitly permits driving onto the Gozo ferry at Cirkewwa. Most majors allow it; some smaller operators exclude it or charge a fee. Confirm before boarding.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do US tourists legally need an IDP to drive in Malta?',
				answer: 'Not strictly — Maltese law permits non-EU tourists with English-language licences to drive for up to 12 months. However, rental companies commonly require an IDP alongside the national licence as a booking condition. Having one eliminates uncertainty before it becomes a problem at the desk.',
			},
			{
				id: 2,
				question: 'Is left-hand traffic as disorienting as it sounds?',
				answer: "For most Americans: yes, in the first 20 minutes; manageable by the end of the first hour; close to automatic by the second day. The simultaneous inversions — steering wheel position, lane, overtaking direction — require deliberate conscious processing initially. Malta's medieval urban areas (Valletta, Mdina, the Three Cities) have streets built for a pre-car world, which amplifies the first-hour challenge specifically in old-town driving. Choose a small or compact vehicle.",
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document. It is not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your physical US licence as the translation aid that satisfies the booking-condition checks Maltese rental agencies apply to non-EU licence holders.',
			},
			{
				id: 4,
				question: 'What is the Valletta CVA and how do I avoid charges?',
				answer: "Valletta's Controlled Vehicular Access system uses cameras at the ancient city walls to charge vehicles based on time spent inside. Entry after 14:00 on weekdays and all day on weekends is typically free. Morning weekday entry is charged and processed via the rental company with an administrative fee. The practical solution: arrive at Valletta after 14:00, or park outside the walls at Floriana or the City Gate car park and walk in.",
			},
			{
				id: 5,
				question: 'Can I drive to Gozo in a rental car?',
				answer: "Usually yes, but verify your specific rental agreement permits it before boarding the ferry at Cirkewwa. Most major agencies allow Gozo; some smaller operators exclude it or charge a fee. Return ferry ticket is purchased at the Mġarr terminal in Gozo when you leave — you pay nothing on the outbound crossing.",
			},
			{
				id: 6,
				question: "What's the alcohol limit and how does it compare to the US?",
				answer: 'Malta sets 0.08% BAC — the same as most US states. For drivers with fewer than two years\' experience, the limit is 0.02%. This is one of the few destinations in this guide where American drivers aren\'t in stricter territory. A breath test is compulsory after any accident involving injuries.',
			},
			{
				id: 7,
				question: 'How do traffic fines work in Malta — can they collect on the spot?',
				answer: "Malta does NOT collect fines on the spot the way Portugal or Morocco do. If you're stopped for a violation, you receive a notice and are expected to pay before leaving the country, or the correspondence is sent to your home address. Rental-company camera violations (Valletta CVA, speed cameras) are billed to your card through the rental agency with a processing fee.",
			},
			{
				id: 8,
				question: "What's the driving culture like in Malta?",
				answer: "Assertive. Maltese drivers are confident and use lanes as approximate boundaries in heavy traffic, particularly in Sliema and St Julian's. This isn't aggression — it's the local flow. As a visitor, hold your position and don't be intimidated. Indicating is used but not always predictably. Allowing a vehicle to merge earns a brief hand wave of thanks, which is the universal Maltese driving acknowledgement.",
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to Mediterranean destinations where the IDP question varies.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece' },
			{ flagFrom: 'us', flagTo: 'cy', label: 'US → Cyprus', status: 'Live', href: '/idp-for-us-drivers-in-cyprus' },
			{ flagFrom: 'gb', flagTo: 'mt', label: 'UK → Malta', status: 'Live', href: '/idp-for-uk-drivers-in-malta' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain' },
			{ flagFrom: 'us', flagTo: 'pt', label: 'US → Portugal', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Small island. Left-hand traffic. Documentation is the easy part.',
		text: 'Malta is one of the cleanest documentation environments for US tourists — English-language licence accepted, BAC same as home, no on-the-spot fines, no motorway tolls. IDP Companion covers the rental-agency booking-condition formality. Left-hand traffic on medieval narrow streets is the real preparation. Park outside Valletta in the morning. Check the Gozo ferry clause before you cross.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with Malta Police Force, Transport Malta, or the Malta Tourism Authority. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Transport Malta — transport.gov.mt',
			'Malta Police Force — pulizija.gov.mt',
			'Valletta CVA system — Transport Malta CVA division',
			'Malta Tourism Authority — visitmalta.com',
			'US Embassy Malta — driving advisory — mt.usembassy.gov',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Malta',
	},
};

export const usMaltaCopy: Record<'en', CountryPairCopy> = { en };
