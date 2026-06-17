/**
 * Country-pair content: United States → Dominican Republic.
 * Tier 2. Locales: en + es (Hispanic-US relevant — DR has 2M+ Dominican-American
 * diaspora plus general Hispanic-American Caribbean travel audience).
 *
 * Killer angles for Dominican Republic:
 *  - The TUMULO problem — steep, often unmarked speed bumps that damage rental
 *    cars at speed; primary speed-control mechanism on secondary roads.
 *  - Police checkpoints are Spanish-only — translation document moves the
 *    interaction from uncertain to routine.
 *  - Motorcycle/motoconcho culture follows no predictable rule pattern.
 *  - Night driving on rural roads = consistent "don't" advice from every source.
 *
 * PDF language note: Spanish IS in the IDP Companion template (Geneva 1949
 * standard set). All Spanish-language claims for DR are honest.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Dominican Republic: 2026 Guide',
		description:
			'US licence valid in DR for 90 days. IDP not legally required but rental agencies ask for Spanish translation. Tumulos (speed bumps) damage rental cars. Don\'t drive at night. IDP Companion in 2 min — $35.',
		ogTitleShort: 'US Drivers in DR: IDP Guide 2026',
		ogSubtitle: 'Spanish-only checkpoints. Unmarked speed bumps. Don\'t drive at night.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Dominican Republic',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-05-13',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'US → Dominican Republic · 2026 Guide',
		title: 'IDP for US Drivers in DR: The Tumulo Problem and the Spanish Checkpoint',
		lead: "The road from Punta Cana airport to the resort zone is smooth, well-signposted, and gives no indication of what driving in the Dominican Republic actually involves. It's a purpose-built tourist corridor. Real DR driving starts where the corridor ends. The *tumulo* — a steep, often unmarked speed bump — is the primary speed-control mechanism on secondary roads, and the most common rental-car damage claim involves a US driver who didn't slow in time. The other reality is Spanish: police checkpoint officers on inter-city routes work in Spanish, and a US English licence presents them with a document they may not read confidently. A US licence is valid for 90 days in DR. An IDP isn't legally required. But a Spanish translation moves the checkpoint interaction from uncertain to routine. Two minutes for the document. The tumulos require slowing through every settlement.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Not legally required — but Spanish translation is the practical fix',
		text: 'Dominican law recognises valid US driver licences for tourist stays up to 90 days without requiring a formal IDP. In practice, rental agencies frequently request a Spanish-language licence translation for non-Spanish licences, and police checkpoint officers at inter-city routes are typically Spanish-speaking. IDP Companion provides the Spanish translation that addresses both situations on a single document.',
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in DR',
		lead: 'Your US licence covers the legal basis. The Spanish translation covers the practical checkpoint and rental-desk friction.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Dominican Republic',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Valid for tourist driving up to 90 days — legal basis is clear. May create friction at rental desks that require Spanish-language licence documentation and at police checkpoints staffed by Spanish-speaking officers.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in 12 languages including Spanish — satisfies rental-agency requests for Spanish-language translation, provides Spanish-language reference at checkpoints, addresses the most common source of documentation friction for US tourists in DR.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry alongside IDP Companion: original physical US driver licence, passport, rental agreement, vehicle insurance confirmation. Carry Dominican pesos in small bills (RD$20, 50, 100) for toll booths — operators don\'t always have change.',
	},

	whyNotEnough: {
		heading: 'Why your US licence alone is sometimes not enough',
		lead: 'For most US tourists who stay in the Punta Cana corridor, the legal documentation is enough. Friction shows up the moment you leave the corridor.',
		reasons: [
			{
				icon: 'ph:warning-bold',
				title: 'The tumulo problem',
				text: "A *tumulo* (also *resalto*) is a speed bump — but not the gentle, marked ones US drivers know. DR uses tumulos as the primary speed-control mechanism on secondary roads. Often unpainted, frequently without advance signage, sometimes steep enough to bottom out a rental at 15 km/h. The most common rental-car damage claim from US tourists in DR is the undercarriage impact from a tumulo not slowed for. Slow through every settlement, every cluster of houses, every small business — that's where the next one is.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The Spanish checkpoint',
				text: 'Police checkpoints appear at city entrances, highway junctions, and inter-city routes throughout DR. Officers are typically Spanish-speaking. A US English licence presents them with a document they may not read confidently. The interaction can go several directions — clean wave-through, extended questions, or an informal resolution that benefits neither side. A Spanish translation of your licence resolves the first ambiguity at the document check.',
			},
			{
				icon: 'mdi:moon-waning-crescent',
				title: "The night-driving advice (don't)",
				text: 'Every source on Dominican driving reaches the same conclusion: don\'t drive at night outside resort areas and major cities if you don\'t know the roads. The reasons are consistent — rural roads have no lighting, cattle and horses cross after dark, unmarked tumulos become invisible, road-surface deterioration is invisible, other vehicles may run with poor lighting. Within the Punta Cana resort zone and lit Santo Domingo, night driving is manageable. On secondary roads, plan to be back before dark.',
			},
		],
	},

	rules: {
		heading: 'Dominican driving rules US drivers should know',
		lead: 'Right-hand traffic (same as the US) — no directional adjustment. The BAC limit is stricter than home, and tumulos do the work that speed limits do in other countries.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — no adjustment needed' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '40–60 km/h', note: '30 km/h in residential zones; tumulos enforce de facto outside towns' },
			{ icon: 'mdi:road-variant', label: 'Rural road limit', value: '40–80 km/h', note: 'Varies by road classification; tumulos common' },
			{ icon: 'mdi:speedometer-medium', label: 'Highway (autopista)', value: '120 km/h', note: 'Major inter-city routes only' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter than most US states (0.08%); breath-tested at checkpoints' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Hands-free permitted; fines apply' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'All occupants', note: 'Per-person fine; child seat requirements apply' },
			{ icon: 'mdi:cash', label: 'Toll booths', value: 'Cash (DOP) preferred', note: 'RD$50–200 per booth; carry small bills, change isn\'t always available' },
		],
	},

	fines: {
		heading: '2026 fines in Dominican Republic',
		lead: 'Formal fines are paid at INTRANT offices. Informal resolutions at roadside are documented in traveller forums but not endorsed — always request a formal receipt (recibo) for any payment.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (moderate)', amount: 'RD$1,500–5,000 (~$26–87)', severity: 'low', note: 'Camera enforcement increasing on autopistas' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (significant)', amount: 'RD$5,000–15,000+ (~$87–260+)', severity: 'high', note: 'Can include licence retention at checkpoint' },
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without proper documentation', amount: 'RD$2,000–5,000 (~$35–87)', severity: 'med', note: 'No Spanish translation at checkpoint can extend into this category' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'RD$2,000–4,000 (~$35–70)', severity: 'med', note: '' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'RD$1,000–3,000 (~$17–52)', severity: 'low', note: 'Hands-free permitted' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'RD$1,000–2,000 (~$17–35)', severity: 'low', note: 'Per person' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'RD$5,000–20,000+ (~$87–350+)', severity: 'high', note: 'Criminal charge possible; licence suspension' },
			{ icon: 'ph:warning-bold', label: 'Tumulo damage (rental excess)', amount: 'Rental damage claim', severity: 'high', note: 'Not a state fine — the undercarriage repair after hitting a tumulo at speed' },
		],
		caption: 'Sources: INTRANT (Instituto Nacional de Tránsito y Transporte Terrestre); Dominican Republic Law No. 63-17 on Mobility, Land Transport, Transit and Road Safety. Exchange rate approximate at May 2026.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Dominican Republic — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages including Spanish — the working language at every Dominican police checkpoint and rental desk outside the resort zones',
				'A standardised layout that\'s easier for a Dominican officer or rental agent to read than a US state-specific licence format',
				'An instant digital download — print before departure; printed copy is preferred at checkpoint interactions over phone screens',
				'Designed to be carried alongside your physical US licence, not as a replacement',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical US driver\'s licence',
				'Not a solution for the tumulo problem, the motoconcho traffic culture, or the night-driving reality — those require road awareness, not documentation',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in DR',
			items: [
				'At rental desks where the agency requests a Spanish-language licence translation for non-Spanish licences',
				'At police checkpoints on inter-city routes and city entrances where officers work in Spanish',
				'When rental insurance documentation is reviewed following an accident — a Spanish translation establishes driving credentials clearly',
				'For US-Hispanic readers planning a DR trip — page available in Spanish',
			],
		},
		needOfficial: {
			title: 'What Dominican authorities and rental companies actually expect',
			items: [
				'Original physical US driver licence — the legal authority to drive',
				'US passport with DR entry stamp (visa-free for 30 days with tourist card)',
				'Rental agreement and vehicle insurance confirmation — in the vehicle, not the hotel safe',
				'Dominican pesos in small bills for toll booths (RD$20/50/100)',
			],
		},
		pattern: 'The pattern: your US licence covers the legal right to drive. The Spanish translation covers the practical checkpoint and rental-desk interaction. The tumulos require slowing through every settlement — no document changes that.',
	},

	renting: {
		heading: 'Renting a car in Dominican Republic as a US driver',
		lead: 'Major chains operate at Punta Cana (PUJ) and Santo Domingo (SDQ) airports alongside an extensive local-operator market. Photograph every scratch and dent before leaving the lot — disputes at return are common.',
		chains: [
			{ name: 'Hertz DR', policy: 'Available at PUJ, SDQ, Santiago. Accepts US licence for short tourist stays; Spanish-language translation document commonly requested at pickup. Credit card required for deposit ($500–$2,000 holds standard). Minimum age 21; under-25 surcharge.' },
			{ name: 'Avis DR', policy: 'Similar policy. Operates Budget DR under same corporate group. US licence with translation document accepted at most airport locations.' },
			{ name: 'Dollar / Thrifty', policy: 'Both operate at major airports. Documentation requirements aligned with Hertz/Avis. Credit card mandatory for deposit.' },
			{ name: 'Local operators (Punta Cana, Bavaro, Santo Domingo)', policy: 'DR has a large local rental market with reviews varying significantly between operators. Some have flexible documentation; others have inconsistent practices around insurance. Photograph the vehicle thoroughly before leaving the lot regardless of agency.' },
		],
		tipsHeading: 'Practical tips for renting in DR',
		tips: [
			'Photograph every scratch, dent, and mark before departure with timestamps — disputes at return are common across all agencies',
			'Local insurance: even if your US credit card covers rental cars, many Dominican agencies still require their own coverage; confirm what your card actually covers in DR specifically before relying on it',
			'4WD or high-clearance SUV recommended for any itinerary including rural, mountain, or beach-access roads',
			'Fuel widely available in urban areas; less frequent on rural and mountain routes — fill up before leaving major towns',
			'Toll booths: carry Dominican pesos in small denominations; RD$20, 50, and 100 bills',
			'GPS: download offline maps before departure for rural areas; cell coverage drops on mountain routes',
			'Punta Cana to Santo Domingo: ~2.5 hours via Autopista del Este — well-maintained inter-city route, tumulos rare on the autopista itself',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Dominican Republic',
		lead: 'The realistic range of outcomes for US tourists — ranked by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'common (resort-zone only)',
				label: 'Resort-zone driving, no major roads, no friction',
				text: 'Punta Cana tourist corridor. Roads maintained, signs in English, speed limits low and enforced by resort security as much as police. Most week-long all-inclusive trips end here without any documentation friction.',
			},
			{
				severity: 'low',
				frequency: 'common with IDP',
				label: 'Rental desk, IDP Companion present',
				text: 'Spanish translation satisfies most agency requirements. Pickup proceeds in standard time. Photograph the vehicle thoroughly before driving off the lot.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Rental desk, US licence alone, no Spanish translation',
				text: 'Agent requests Spanish-language translation. Possible delay, surcharge, or in worst cases an offer to upgrade to a contract with on-the-spot documentation processing.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Highway checkpoint, IDP present',
				text: 'Spanish translation verifiable at first read. Routine stop clears quickly.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Highway checkpoint, English-only licence',
				text: 'Language gap. Extended interaction. Variable outcome — clean wave-through, follow-up questions, or an informal resolution that benefits neither party.',
			},
			{
				severity: 'med',
				frequency: 'common for first-day drivers',
				label: 'Tumulo — not slowed in time',
				text: 'Undercarriage impact, rental damage claim, excess charge. The single most common rental-car damage source for US tourists in DR.',
			},
			{
				severity: 'high',
				frequency: 'less common with preparation',
				label: 'Night driving on rural road',
				text: 'Poor lighting, animals on road, unmarked tumulos invisible, surface deterioration invisible. Every source advises against it outside lit urban areas.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'DUI over 0.05% BAC',
				text: '0.05% = stricter than most US states (0.08%). One to two drinks puts many adults near the limit. Breath tests at weekend-night checkpoints. Criminal charge possible.',
			},
		],
		math: 'IDP Companion is $35. A rental-car undercarriage repair from a tumulo hit costs more than the car\'s daily rate. A checkpoint extended interaction costs time. Two of these are preventable with preparation; the tumulos require slowing through every settlement.',
	},

	phrases: {
		heading: 'Useful Spanish phrases at rental desks and checkpoints',
		lead: 'Spanish is the language of every checkpoint interaction, most local rental agencies, and anywhere beyond the resort zone. English is spoken in major tourist areas; it is not available at rural police stops.',
		items: [
			{ phrase: 'Aquí está mi licencia de conducir', translation: 'Here is my licence', context: 'Handing over the physical US licence at any stop' },
			{ phrase: 'Y el documento de traducción', translation: 'And the translation document', context: 'Showing IDP Companion alongside' },
			{ phrase: 'Soy turista americano', translation: "I'm an American tourist (m.)", context: 'Establishing context at a checkpoint' },
			{ phrase: 'Soy turista americana', translation: "I'm an American tourist (f.)", context: 'Gendered form for female speakers' },
			{ phrase: 'Quisiera un recibo, por favor', translation: 'I\'d like a receipt please', context: 'Any time a fine or payment is requested — request the formal receipt' },
			{ phrase: 'No entiendo bien el español', translation: "I don't understand Spanish well", context: 'If spoken to quickly — most officers will switch to slower speech or basic English' },
			{ phrase: '¿Hay algún problema?', translation: 'Is there a problem?', context: 'Polite opener at a checkpoint' },
			{ phrase: 'Tengo seguro', translation: 'I have insurance', context: 'In case of accident or paperwork question' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Dominican Republic (US citizens)',
		lead: 'DR rewards preparation around three things — the documentation, the speed bumps, and the time of day.',
		schemaName: 'How to prepare for driving in Dominican Republic as a US citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card. Digital photos are not accepted at Dominican rental desks or in roadside interactions. Dominican law accepts US licences for tourist stays up to 90 days.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. Covers the Spanish-language translation request at rental desks and provides Spanish reference at police checkpoints.',
			},
			{
				title: 'Plan your route around daylight',
				text: "Time your secondary-road driving for daytime. Night driving on rural DR roads is the consistent \"don't\" advice across every guidebook and traveller account. Major inter-city autopistas at night are manageable; secondary roads aren't.",
			},
			{
				title: 'Carry Dominican pesos in small bills',
				text: 'Toll booths on the Autopista del Este and other inter-city routes prefer cash in small denominations. RD$20, 50, and 100 bills. Operators don\'t always have change for larger notes.',
			},
			{
				title: 'Photograph the rental thoroughly at pickup',
				text: 'Every scratch, dent, and mark with timestamps before leaving the lot. Damage disputes at return are common across all DR rental agencies — your photo evidence is the only thing that closes them.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do US tourists legally need an IDP to drive in the Dominican Republic?',
				answer: 'Not strictly. Dominican law recognises valid US driver licences for tourist stays up to 90 days without requiring a formal IDP. In practice, rental agencies frequently request a Spanish-language licence translation, and police checkpoint officers at inter-city routes are typically Spanish-speaking. IDP Companion provides the Spanish translation that addresses both situations.',
			},
			{
				id: 2,
				question: 'What is a tumulo and why does it matter?',
				answer: 'A *tumulo* is a speed bump. DR uses steep, often poorly marked speed bumps as the primary speed-control mechanism on secondary roads. They appear without consistent advance signage, are frequently unpainted or faded, and can damage a vehicle that crosses them at speed. Slowing down when entering any settlement or junction area — even when the road looks clear — is the most effective vehicle-protection strategy.',
			},
			{
				id: 3,
				question: 'Is driving in DR really as dangerous as people say?',
				answer: 'It depends entirely on where and when you drive. The major tourist highways (Autopista del Este, the Punta Cana corridor) are well-maintained and comparable to US roads. Secondary roads, mountain routes, and night driving outside cities carry genuine risks: poor road surfaces, livestock, poor lighting, unmarked obstacles, and motoconcho traffic that follows no predictable pattern. The danger is concentrated in specific situations, not uniformly distributed.',
			},
			{
				id: 4,
				question: 'What\'s the alcohol limit in DR?',
				answer: '0.05% BAC — stricter than most US states (0.08%). One to two drinks puts many adults near this limit. Breathalyser tests are conducted at checkpoints, particularly on weekend nights. If you\'ve had more than one drink, don\'t drive.',
			},
			{
				id: 5,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. INTRANT (the Dominican transport authority) recognises US licenses for tourist driving up to 3 months — no IDP is required from the DR side. IDP Companion is the multilingual translation aid (twelve widely-read languages including Spanish from the Geneva 1949 set) — useful at Punta Cana airport rental desks where Spanish-language verification speeds the process, and AMET roadside checks where translation reduces friction. The official government IDP route is the printed Geneva 1949 booklet from the authorised national organisation.',
			},
			{
				id: 6,
				question: 'Can I drive from the Dominican Republic into Haiti?',
				answer: 'Cross-border driving in a rental car requires explicit written permission from the rental agency and specific insurance coverage for Haiti. Most standard rental agreements explicitly exclude Haiti. The crossing is logistically and legally complex; verify with your agency well in advance if a Haiti visit is planned.',
			},
			{
				id: 7,
				question: 'Should I rent a car in Punta Cana at all?',
				answer: "Depends on your itinerary. If you're staying within the resort zone and using organised excursions, a rental car isn't necessary. If you want to explore beyond the resort zone — El Macao beach, Saona ferry departure points, Altos de Chavón, Samaná — a car gives freedom that tours can't match. The additional preparation is worth it for those itineraries.",
			},
			{
				id: 8,
				question: 'What insurance do I actually need?',
				answer: 'US credit-card rental coverage varies and may specifically exclude the Dominican Republic or require you to decline the agency\'s CDW — which many Dominican agencies won\'t allow. Check your specific card\'s terms for DR before relying on it. Purchasing the agency\'s local insurance, even if your card covers some portion, provides the clearest position in the event of an accident on Dominican roads.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to Caribbean and Latin American destinations.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'cr', label: 'US → Costa Rica', status: 'Live', href: '/idp-for-us-drivers-in-costa-rica/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'gb', flagTo: 'do', label: 'UK → Dominican Republic', status: 'Live', href: '/idp-for-uk-drivers-in-dominican-republic/' },
			{ flagFrom: 'ca', flagTo: 'do', label: 'Canada → Dominican Republic', status: 'Coming soon' },
			{ flagFrom: 'us', flagTo: 'jm', label: 'US → Jamaica', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Cover the Spanish-checkpoint gap before you fly',
		text: 'Your US licence covers the legal basis. IDP Companion covers the Spanish-translation request at rental desks and the language gap at inter-city checkpoints. The tumulos require slowing through every settlement — no document changes that. Two minutes for the translation. The rest is road awareness.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with INTRANT (Instituto Nacional de Tránsito y Transporte Terrestre), the Dominican Republic National Police (Policía Nacional), or the Ministry of Public Works and Communications. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Dominican Republic Law No. 63-17 on Mobility, Land Transport, Transit and Road Safety — INTRANT (intrant.gob.do)',
			'INTRANT — Instituto Nacional de Tránsito y Transporte Terrestre',
			'US Embassy Santo Domingo — driving advisory — do.usembassy.gov',
			'Dominican Republic National Police (Policía Nacional) — policianacional.gob.do',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Dominican Republic',
	},
};

const es: CountryPairCopy = {
	seo: {
		title: 'IDP para Conductores Estadounidenses en República Dominicana: Guía 2026',
		description:
			'Tu licencia estadounidense es válida en RD por 90 días. El IDP no es obligatorio por ley, pero las agencias de alquiler piden una traducción en español. Los túmulos dañan los carros. No manejes de noche. IDP Companion en 2 min — $35.',
		ogTitleShort: 'Conductores USA en RD: Guía IDP 2026',
		ogSubtitle: 'Puestos solo en español. Túmulos sin marcar. No manejes de noche.',
	},
	breadcrumbs: {
		home: 'Inicio',
		current: 'USA → República Dominicana',
	},
	lastReviewed: 'Mayo 2026',
	labels: {
		freshnessPrefix: 'Última revisión:',
	},

	hero: {
		kicker: 'USA → República Dominicana · Guía 2026',
		title: 'IDP para Conductores USA en RD: El Problema del Túmulo y el Puesto de Policía en Español',
		lead: 'La carretera del aeropuerto de Punta Cana hasta la zona de resorts es lisa, bien señalizada, y no da ninguna pista de lo que realmente implica manejar en República Dominicana. Es un corredor turístico planificado. El manejo real en RD empieza donde termina ese corredor. El *túmulo* — un policía acostado empinado, muchas veces sin pintar — es el principal mecanismo de control de velocidad en las carreteras secundarias, y el reclamo de daños más común al devolver el carro involucra a un conductor estadounidense que no bajó la velocidad a tiempo. La otra realidad es el español: los oficiales de policía en los puestos de control inter-urbanos trabajan en español, y una licencia estadounidense en inglés les presenta un documento que tal vez no leen con confianza. Una licencia USA es válida 90 días en RD. El IDP no es obligatorio por ley. Pero una traducción en español mueve el control de policía de incierto a rutinario. Dos minutos para el documento. Los túmulos exigen bajar la velocidad en cada poblado.',
		ctaPrimary: 'Obtén IDP Companion en 2 min — $35',
		ctaSecondary: 'Ver todos los planes',
		badgeTop: 'Guía 2026',
		badgeBottom: 'Desde $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No es obligatorio por ley — pero la traducción al español es la solución práctica',
		text: 'La ley dominicana reconoce las licencias estadounidenses válidas para estancias turísticas de hasta 90 días sin requerir un IDP formal. En la práctica, las agencias de alquiler frecuentemente solicitan una traducción al español de la licencia para licencias en otro idioma, y los oficiales en los puestos de control de carreteras inter-urbanas hablan español. IDP Companion entrega esa traducción al español en un solo documento que cubre ambas situaciones.',
	},

	tldr: {
		heading: 'Licencia USA sola vs IDP Companion en RD',
		lead: 'Tu licencia USA cubre la base legal. La traducción al español cubre la fricción práctica en el puesto de control y en el mostrador de alquiler.',
		colDocument: 'Documento',
		colWhatItDoes: 'Qué hace en República Dominicana',
		colCost: 'Costo',
		rows: [
			{
				document: 'Licencia de Conducir USA (sola)',
				whatItDoes: 'Válida para manejo turístico hasta 90 días — la base legal es clara. Puede crear fricción en mostradores de alquiler que requieren traducción al español y en puestos de control con oficiales hispanohablantes.',
				cost: 'Ya la tienes',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + licencia USA',
				whatItDoes: 'PDF digital multilingüe que presenta los datos de tu licencia USA en 12 idiomas incluido español — satisface las solicitudes de traducción al español de las agencias, proporciona referencia en español en los puestos de control, y resuelve la fuente más común de fricción documental para turistas estadounidenses en RD.',
				cost: '$35–55 (1–5 años)',
				tone: 'companion',
			},
		],
		footnote: 'Qué llevar junto a IDP Companion: licencia de conducir USA original física, pasaporte, contrato de alquiler, comprobante de seguro del vehículo. Lleva pesos dominicanos en billetes pequeños (RD$20, 50, 100) para los peajes — los operadores no siempre tienen cambio.',
	},

	whyNotEnough: {
		heading: 'Por qué tu licencia USA sola a veces no alcanza',
		lead: 'Para la mayoría de turistas estadounidenses que se quedan en el corredor de Punta Cana, la documentación legal es suficiente. La fricción aparece cuando sales del corredor.',
		reasons: [
			{
				icon: 'ph:warning-bold',
				title: 'El problema del túmulo',
				text: 'Un *túmulo* (también *resalto*) es un policía acostado — pero no los suaves y bien marcados que conocen los conductores estadounidenses. RD usa los túmulos como mecanismo principal de control de velocidad en carreteras secundarias. Muchas veces sin pintar, frecuentemente sin señalización previa, a veces tan empinados que rompen los bajos de un carro a 15 km/h. El reclamo de daños más común para turistas USA en RD es el golpe a los bajos por un túmulo no respetado. Baja la velocidad en cada poblado, en cada agrupación de casas, en cada negocio pequeño — ahí está el siguiente.',
			},
			{
				icon: 'ph:translate-bold',
				title: 'El puesto de control en español',
				text: 'Los puestos de control aparecen en las entradas de las ciudades, en cruces de carreteras y en rutas inter-urbanas en toda RD. Los oficiales hablan español. Una licencia USA en inglés les presenta un documento que tal vez no leen con confianza. La interacción puede ir en varias direcciones — paso limpio, preguntas extendidas, o una resolución informal que no beneficia a ninguna de las partes. Una traducción al español de tu licencia resuelve la primera ambigüedad en el chequeo del documento.',
			},
			{
				icon: 'mdi:moon-waning-crescent',
				title: 'El consejo de no manejar de noche',
				text: 'Todas las fuentes sobre manejo en RD llegan a la misma conclusión: no manejes de noche fuera de zonas de resort y ciudades principales si no conoces las carreteras. Las razones son consistentes — las carreteras rurales no tienen alumbrado, el ganado y los caballos cruzan después del anochecer, los túmulos sin marcar se vuelven invisibles, el deterioro del pavimento es invisible, otros vehículos pueden circular con luces deficientes. Dentro de la zona resort de Punta Cana y el Santo Domingo iluminado, manejar de noche es manejable. En carreteras secundarias, planifica estar de vuelta antes del anochecer.',
			},
		],
	},

	rules: {
		heading: 'Reglas de tránsito en RD que los conductores USA deben conocer',
		lead: 'Tránsito por la derecha (igual que USA) — sin ajuste direccional. El límite de alcohol es más estricto que en casa, y los túmulos hacen el trabajo que en otros países hacen los límites de velocidad.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Lado de manejo', value: 'DERECHA', note: 'Igual que USA — sin ajuste necesario' },
			{ icon: 'mdi:speedometer', label: 'Límite urbano', value: '40–60 km/h', note: '30 km/h en zonas residenciales; túmulos hacen el cumplimiento de facto fuera de los pueblos' },
			{ icon: 'mdi:road-variant', label: 'Carreteras rurales', value: '40–80 km/h', note: 'Varía por clasificación de carretera; túmulos frecuentes' },
			{ icon: 'mdi:speedometer-medium', label: 'Autopista', value: '120 km/h', note: 'Solo en las rutas inter-urbanas principales' },
			{ icon: 'mdi:beer-outline', label: 'Límite de alcohol', value: '0.05% BAC', note: 'Más estricto que la mayoría de estados USA (0.08%); con alcoholímetro en puestos de control' },
			{ icon: 'mdi:cellphone-off', label: 'Uso de celular', value: 'Prohibido en mano', note: 'Manos libres permitido; aplican multas' },
			{ icon: 'mdi:seatbelt', label: 'Cinturones', value: 'Todos los ocupantes', note: 'Multa por persona; aplican requisitos para silla de niño' },
			{ icon: 'mdi:cash', label: 'Peajes', value: 'Efectivo (DOP) preferido', note: 'RD$50–200 por caseta; lleva billetes pequeños, no siempre hay cambio' },
		],
	},

	fines: {
		heading: 'Multas en RD 2026',
		lead: 'Las multas formales se pagan en oficinas del INTRANT. Las resoluciones informales en carretera están documentadas en foros de viajeros pero no se respaldan aquí — siempre solicita un recibo formal de cualquier pago.',
		colViolation: 'Infracción',
		colAmount: 'Multa',
		colNote: 'Notas',
		items: [
			{ icon: 'mdi:speedometer', label: 'Exceso de velocidad (moderado)', amount: 'RD$1,500–5,000 (~$26–87)', severity: 'low', note: 'Crece el control por cámara en autopistas' },
			{ icon: 'mdi:speedometer-medium', label: 'Exceso de velocidad (significativo)', amount: 'RD$5,000–15,000+ (~$87–260+)', severity: 'high', note: 'Puede incluir retención de licencia en el puesto de control' },
			{ icon: 'mdi:card-account-details-outline', label: 'Manejar sin documentación adecuada', amount: 'RD$2,000–5,000 (~$35–87)', severity: 'med', note: 'Sin traducción al español en un puesto puede extenderse a esta categoría' },
			{ icon: 'mdi:traffic-light', label: 'Pasar luz roja', amount: 'RD$2,000–4,000 (~$35–70)', severity: 'med', note: '' },
			{ icon: 'mdi:cellphone-off', label: 'Celular en mano', amount: 'RD$1,000–3,000 (~$17–52)', severity: 'low', note: 'Manos libres permitido' },
			{ icon: 'mdi:seatbelt', label: 'Sin cinturón', amount: 'RD$1,000–2,000 (~$17–35)', severity: 'low', note: 'Por persona' },
			{ icon: 'mdi:beer-outline', label: 'DUI sobre 0.05% BAC', amount: 'RD$5,000–20,000+ (~$87–350+)', severity: 'high', note: 'Cargo criminal posible; suspensión de licencia' },
			{ icon: 'ph:warning-bold', label: 'Daño por túmulo (exceso de alquiler)', amount: 'Reclamo de daño', severity: 'high', note: 'No es multa estatal — es la reparación de los bajos después de pegarle a un túmulo a velocidad' },
		],
		caption: 'Fuentes: INTRANT (Instituto Nacional de Tránsito y Transporte Terrestre); Ley No. 63-17 de Movilidad, Transporte Terrestre, Tránsito y Seguridad Vial. Tipo de cambio aproximado a mayo de 2026.',
	},

	honesty: {
		heading: 'Cómo encaja IDP Companion en RD — honestamente',
		lead: 'No pretendemos ser algo que no somos. Aquí está el desglose.',
		is: {
			title: 'Qué es IDP Companion',
			items: [
				'Un PDF multilingüe privado que presenta los datos de tu licencia USA en 12 idiomas incluido español — el idioma de trabajo en todos los puestos de control de policía y mostradores de alquiler fuera de las zonas de resort',
				'Un formato estandarizado más fácil de leer para un oficial o agente dominicano que el formato específico de tu estado USA',
				'Descarga digital instantánea — imprime antes de salir; la copia impresa es preferida en puestos de control sobre la pantalla del celular',
				'Diseñado para llevarse junto a tu licencia USA física, no como reemplazo',
			],
		},
		isNot: {
			title: 'Qué NO es IDP Companion',
			items: [
				'No es un Permiso Internacional de Conducción oficial bajo la Convención de Ginebra de 1949 o de Viena de 1968',
				'No es válido por sí solo — debe llevarse junto a tu licencia física de conducir USA',
				'No es solución al problema del túmulo, a la cultura de los motoconchos, o a la realidad de manejar de noche — eso requiere atención al camino, no documentación',
			],
		},
		helps: {
			title: 'Cuándo ayuda IDP Companion a conductores USA en RD',
			items: [
				'En mostradores de alquiler donde la agencia pide una traducción al español para licencias en otro idioma',
				'En puestos de control de policía en rutas inter-urbanas y entradas de ciudades donde los oficiales trabajan en español',
				'Cuando se revisa la documentación del seguro de alquiler después de un accidente — una traducción al español establece tus credenciales de conducir con claridad',
				'Para lectores hispano-estadounidenses planeando un viaje a RD — la página está en español',
			],
		},
		needOfficial: {
			title: 'Qué necesitan realmente las autoridades dominicanas y las agencias de alquiler',
			items: [
				'Licencia de conducir USA física original — la autoridad legal para manejar',
				'Pasaporte USA con sello de entrada a RD (libre de visa por 30 días con tarjeta de turista)',
				'Contrato de alquiler y comprobante de seguro del vehículo — en el carro, no en la caja fuerte del hotel',
				'Pesos dominicanos en billetes pequeños para los peajes (RD$20/50/100)',
			],
		},
		pattern: 'El patrón: tu licencia USA cubre el derecho legal a manejar. La traducción al español cubre la interacción práctica en puestos de control y mostradores. Los túmulos exigen bajar la velocidad en cada poblado — ningún documento cambia eso.',
	},

	renting: {
		heading: 'Alquilar un carro en RD siendo conductor USA',
		lead: 'Las cadenas internacionales operan en los aeropuertos de Punta Cana (PUJ) y Santo Domingo (SDQ) junto a un amplio mercado de operadores locales. Fotografía cada rayón y abolladura antes de salir del lote — las disputas al devolver son comunes.',
		chains: [
			{ name: 'Hertz RD', policy: 'Disponible en PUJ, SDQ y Santiago. Acepta licencia USA para estancias turísticas cortas; comúnmente se solicita un documento de traducción al español. Tarjeta de crédito requerida para el depósito (retenciones de $500–$2,000 estándar). Edad mínima 21; recargo para menores de 25.' },
			{ name: 'Avis RD', policy: 'Política similar. Opera Budget RD bajo el mismo grupo corporativo. Licencia USA con documento de traducción aceptado en la mayoría de aeropuertos.' },
			{ name: 'Dollar / Thrifty', policy: 'Ambas operan en aeropuertos principales. Requisitos de documentación alineados con Hertz/Avis. Tarjeta de crédito obligatoria para depósito.' },
			{ name: 'Operadores locales (Punta Cana, Bavaro, Santo Domingo)', policy: 'RD tiene un mercado local grande con reseñas que varían significativamente entre operadores. Algunos tienen documentación flexible; otros tienen prácticas inconsistentes con los seguros. Fotografía el vehículo a fondo antes de salir del lote sin importar la agencia.' },
		],
		tipsHeading: 'Consejos prácticos para alquilar en RD',
		tips: [
			'Fotografía cada rayón, abolladura y marca antes de salir con sello de hora — las disputas al devolver son comunes en todas las agencias',
			'Seguro local: aunque tu tarjeta USA cubra alquileres, muchas agencias dominicanas igual requieren su propio seguro; confirma qué cubre tu tarjeta específicamente en RD antes de depender de ella',
			'4x4 o SUV de altura recomendado para cualquier itinerario que incluya carreteras rurales, de montaña o de acceso a playa',
			'Combustible disponible en zonas urbanas; menos frecuente en rutas rurales y de montaña — llena el tanque antes de dejar los pueblos principales',
			'Peajes: lleva pesos dominicanos en denominaciones pequeñas; RD$20, 50 y 100',
			'GPS: descarga mapas offline antes de salir para zonas rurales; la cobertura celular cae en rutas de montaña',
			'Punta Cana a Santo Domingo: ~2.5 horas vía Autopista del Este — ruta inter-urbana bien mantenida, los túmulos son raros en la autopista misma',
		],
	},

	outcomes: {
		heading: 'Qué le pasa realmente a los conductores USA en RD',
		lead: 'El rango realista de resultados para turistas estadounidenses — ordenado por frecuencia.',
		items: [
			{
				severity: 'low',
				frequency: 'común (solo zona resort)',
				label: 'Manejo en zona resort, sin carreteras principales, sin fricción',
				text: 'Corredor turístico de Punta Cana. Carreteras mantenidas, señales en inglés, límites de velocidad bajos aplicados tanto por seguridad del resort como por policía. La mayoría de viajes de una semana todo-incluido terminan aquí sin fricción documental.',
			},
			{
				severity: 'low',
				frequency: 'común con IDP',
				label: 'Mostrador de alquiler, IDP Companion presente',
				text: 'La traducción al español satisface los requisitos de la mayoría de las agencias. La entrega procede en tiempo estándar. Fotografía el vehículo a fondo antes de salir del lote.',
			},
			{
				severity: 'med',
				frequency: 'ocasional',
				label: 'Mostrador, licencia USA sola, sin traducción al español',
				text: 'El agente pide una traducción al español. Posible retraso, recargo, o en el peor caso una oferta de actualizar el contrato con procesamiento documental en el mostrador.',
			},
			{
				severity: 'low',
				frequency: 'ocasional',
				label: 'Puesto de control de carretera, IDP presente',
				text: 'La traducción al español es verificable a primera vista. El control rutinario se resuelve rápido.',
			},
			{
				severity: 'med',
				frequency: 'ocasional',
				label: 'Puesto de control, solo licencia en inglés',
				text: 'Brecha de idioma. Interacción extendida. Resultado variable — paso limpio, preguntas adicionales, o una resolución informal que no beneficia a ninguna parte.',
			},
			{
				severity: 'med',
				frequency: 'común en el primer día',
				label: 'Túmulo — no bajó la velocidad a tiempo',
				text: 'Golpe a los bajos del vehículo, reclamo de daño, cargo por exceso del seguro. La fuente más común de daño a carros de alquiler para turistas USA en RD.',
			},
			{
				severity: 'high',
				frequency: 'menos común con preparación',
				label: 'Manejo nocturno en carretera rural',
				text: 'Alumbrado deficiente, animales en la vía, túmulos sin marcar invisibles, deterioro del pavimento invisible. Todas las fuentes lo desaconsejan fuera de zonas urbanas iluminadas.',
			},
			{
				severity: 'high',
				frequency: 'raro con preparación',
				label: 'DUI sobre 0.05% BAC',
				text: '0.05% = más estricto que la mayoría de estados USA (0.08%). Una o dos copas pone a muchos adultos cerca del límite. Pruebas de alcoholímetro en los puestos de control de fin de semana. Cargo criminal posible.',
			},
		],
		math: 'IDP Companion cuesta $35. La reparación de los bajos del alquiler por un golpe contra un túmulo cuesta más que la tarifa diaria del carro. Una interacción extendida en un puesto de control cuesta tiempo. Dos de las tres se previenen con preparación; los túmulos exigen bajar la velocidad en cada poblado.',
	},

	phrases: {
		heading: 'Frases útiles en español para mostradores y puestos de control',
		lead: 'El español es el idioma de toda interacción en puestos de control, de la mayoría de las agencias locales, y de cualquier lugar más allá de la zona resort. El inglés se habla en zonas turísticas principales; no está disponible en paradas policiales rurales.',
		items: [
			{ phrase: 'Aquí está mi licencia de conducir', translation: 'Here is my licence (frase para ti si necesitas explicarle a un acompañante)', context: 'Entregando la licencia USA física en cualquier control' },
			{ phrase: 'Y el documento de traducción', translation: 'And the translation document', context: 'Mostrando IDP Companion al lado' },
			{ phrase: 'Soy turista americano / americana', translation: "I'm an American tourist (m./f.)", context: 'Estableciendo contexto en un puesto de control' },
			{ phrase: 'Quisiera un recibo, por favor', translation: "I'd like a receipt please", context: 'Siempre que se solicite cualquier multa o pago — pide el recibo formal' },
			{ phrase: 'No entiendo bien el español', translation: "I don't understand Spanish well", context: 'Si te hablan rápido — la mayoría de los oficiales bajará el ritmo o usará inglés básico' },
			{ phrase: '¿Hay algún problema?', translation: 'Is there a problem?', context: 'Apertura cortés en un puesto de control' },
			{ phrase: 'Tengo seguro', translation: 'I have insurance', context: 'En caso de accidente o pregunta documental' },
			{ phrase: 'Necesito llamar a la empresa de alquiler', translation: 'I need to call the rental company', context: 'Si hay un incidente' },
		],
	},

	howTo: {
		heading: 'Cómo prepararte para manejar en RD (ciudadanos USA)',
		lead: 'RD premia la preparación alrededor de tres cosas — la documentación, los policías acostados, y la hora del día.',
		schemaName: 'Cómo prepararse para manejar en República Dominicana siendo ciudadano USA',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirma que tu licencia USA es válida y física',
				text: 'Lleva la tarjeta plástica. Las fotos digitales no se aceptan en mostradores dominicanos ni en interacciones de carretera. La ley dominicana acepta licencias USA para estancias turísticas hasta 90 días.',
			},
			{
				title: 'Ordena IDP Companion',
				text: 'Dos minutos en línea, PDF entregado a tu correo. $35 por 1 año. Cubre la solicitud de traducción al español en mostradores de alquiler y proporciona referencia en español en puestos de control.',
			},
			{
				title: 'Planifica la ruta alrededor de la luz del día',
				text: 'Programa el manejo en carreteras secundarias para horas de luz. Manejar de noche en carreteras rurales dominicanas es el consejo consistente de no hacer en toda guía y relato de viajero. Las autopistas inter-urbanas principales de noche son manejables; las carreteras secundarias no.',
			},
			{
				title: 'Lleva pesos dominicanos en billetes pequeños',
				text: 'Los peajes en la Autopista del Este y otras rutas inter-urbanas prefieren efectivo en denominaciones pequeñas. Billetes de RD$20, 50 y 100. Los operadores no siempre tienen cambio para billetes más grandes.',
			},
			{
				title: 'Fotografía el alquiler a fondo en la entrega',
				text: 'Cada rayón, abolladura y marca con sello de hora antes de salir del lote. Las disputas de daño al devolver son comunes en todas las agencias dominicanas — la evidencia fotográfica es lo único que las cierra.',
			},
		],
	},

	faq: {
		heading: 'Preguntas frecuentes',
		items: [
			{
				id: 1,
				question: '¿Los turistas USA necesitan un IDP por ley para manejar en República Dominicana?',
				answer: 'Estrictamente no. La ley dominicana reconoce las licencias USA válidas para estancias turísticas hasta 90 días sin requerir un IDP formal. En la práctica, las agencias de alquiler frecuentemente solicitan una traducción al español, y los oficiales en puestos de control inter-urbanos son hispanohablantes. IDP Companion proporciona la traducción al español que cubre ambas situaciones.',
			},
			{
				id: 2,
				question: '¿Qué es un túmulo y por qué importa?',
				answer: 'Un *túmulo* es un policía acostado. RD usa policías acostados empinados y muchas veces sin marcar como mecanismo principal de control de velocidad en carreteras secundarias. Aparecen sin señalización previa consistente, frecuentemente sin pintar o desteñidos, y pueden dañar un vehículo que los cruce a velocidad. Bajar la velocidad al entrar en cualquier poblado o cruce — aunque la carretera se vea despejada — es la estrategia más efectiva de protección del vehículo.',
			},
			{
				id: 3,
				question: '¿Manejar en RD es realmente tan peligroso como dicen?',
				answer: 'Depende completamente de dónde y cuándo manejas. Las autopistas turísticas principales (Autopista del Este, el corredor de Punta Cana) están bien mantenidas y son comparables a carreteras USA. Las carreteras secundarias, rutas de montaña y el manejo nocturno fuera de ciudades cargan riesgos genuinos: superficies deficientes, ganado, alumbrado pobre, obstáculos sin marcar y tráfico de motoconchos que no sigue un patrón predecible. El peligro está concentrado en situaciones específicas, no distribuido uniformemente.',
			},
			{
				id: 4,
				question: '¿Cuál es el límite de alcohol en RD?',
				answer: '0.05% BAC — más estricto que la mayoría de estados USA (0.08%). Una o dos copas pone a muchos adultos cerca de este límite. Pruebas de alcoholímetro se realizan en puestos de control, particularmente en las noches de fin de semana. Si has tomado más de una copa, no manejes.',
			},
			{
				id: 5,
				question: '¿Es IDP Companion lo mismo que un IDP oficial del gobierno?',
				answer: 'No. IDP Companion es un documento privado multilingüe de traducción complementaria. No es un IDP oficial bajo la Convención de Ginebra de 1949 ni de Viena de 1968. Funciona junto a tu licencia USA original como la referencia en español que cubre solicitudes en mostradores de alquiler y chequeos documentales en puestos de control.',
			},
			{
				id: 6,
				question: '¿Puedo manejar de República Dominicana hacia Haití?',
				answer: 'El manejo transfronterizo en un carro de alquiler requiere permiso escrito explícito de la agencia y cobertura de seguro específica para Haití. La mayoría de contratos de alquiler estándar excluyen explícitamente Haití. El cruce es logística y legalmente complejo; verifica con tu agencia con anticipación si planeas una visita a Haití.',
			},
			{
				id: 7,
				question: '¿Debo alquilar un carro en Punta Cana?',
				answer: 'Depende de tu itinerario. Si te quedas dentro de la zona resort y usas excursiones organizadas, un carro no es necesario. Si quieres explorar más allá — playa El Macao, puntos de embarque a Isla Saona, Altos de Chavón, Samaná — un carro da una libertad que los tours no igualan. La preparación adicional vale la pena para esos itinerarios.',
			},
			{
				id: 8,
				question: '¿Qué seguro necesito realmente?',
				answer: 'La cobertura de alquiler de tarjeta de crédito USA varía y puede excluir específicamente República Dominicana o requerir que rechaces el CDW de la agencia — lo cual muchas agencias dominicanas no permiten. Revisa los términos de tu tarjeta específica para RD antes de depender de ella. Comprar el seguro local de la agencia, aunque tu tarjeta cubra alguna porción, proporciona la posición más clara en caso de accidente en carreteras dominicanas.',
			},
		],
	},

	related: {
		heading: 'Guías relacionadas',
		lead: 'Más guías de pares-país para viajeros USA hacia destinos del Caribe y América Latina.',
		comingSoonLabel: 'Próximamente',
		items: [
			{ flagFrom: 'us', flagTo: 'mx', label: 'USA → México', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'cr', label: 'USA → Costa Rica', status: 'Live', href: '/idp-for-us-drivers-in-costa-rica/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'USA → España', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'gb', flagTo: 'do', label: 'UK → República Dominicana', status: 'Disponible', href: '/idp-for-uk-drivers-in-dominican-republic/' },
			{ flagFrom: 'ca', flagTo: 'do', label: 'Canadá → República Dominicana', status: 'Próximamente' },
			{ flagFrom: 'us', flagTo: 'jm', label: 'USA → Jamaica', status: 'Próximamente' },
		],
	},

	finalCta: {
		heading: 'Cubre la brecha del puesto de control en español antes de volar',
		text: 'Tu licencia USA cubre la base legal. IDP Companion cubre la solicitud de traducción en mostradores de alquiler y la brecha de idioma en puestos de control inter-urbanos. Los túmulos exigen bajar la velocidad en cada poblado — ningún documento cambia eso. Dos minutos para la traducción. El resto es atención al camino.',
		button: 'Obtén IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Aviso legal',
		disclaimer:
			'IDP Companion es un documento privado multilingüe de traducción complementaria y no está afiliado al INTRANT (Instituto Nacional de Tránsito y Transporte Terrestre), a la Policía Nacional de la República Dominicana, ni al Ministerio de Obras Públicas y Comunicaciones. IDP Companion no es un Permiso Internacional de Conducción oficial emitido bajo la Convención de Ginebra de 1949 o la Convención de Viena de 1968. Los emisores autorizados de IDPs de origen estadounidense bajo Ginebra 1949 son AAA y AATA. IDP Companion debe usarse junto a tu licencia de conducir USA original.',
		sourcesHeading: 'Fuentes',
		sources: [
			'Ley No. 63-17 de Movilidad, Transporte Terrestre, Tránsito y Seguridad Vial de la República Dominicana — INTRANT (intrant.gob.do)',
			'INTRANT — Instituto Nacional de Tránsito y Transporte Terrestre',
			'Embajada de USA en Santo Domingo — aviso de viaje — do.usembassy.gov',
			'Policía Nacional de la República Dominicana — policianacional.gob.do',
		],
	},

	og: {
		originName: 'Estados Unidos',
		destinationName: 'República Dominicana',
	},
};

export const usDominicanRepublicCopy: Record<'en' | 'es', CountryPairCopy> = { en, es };
