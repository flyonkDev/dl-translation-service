/**
 * Country-pair content: United States → Costa Rica.
 * Locales: en, es (Hispanic-US audience — like us-spain).
 *
 * Unique angle: IDP not legally required (Article 91 of Ley 9078 accepts US
 * licenses for 90-day tourist driving), BUT Tránsito officers can confiscate
 * the vehicle's licence plates under Article 151 if documentation is
 * insufficient — taking the car off the road entirely. Plate-confiscation
 * is the angle that distinguishes Costa Rica from Mexico (where the
 * pressure is informal extortion). Spanish IS in the IDP Companion PDF
 * template, so claims are honest.
 *
 * SEO add-ons present: tldr, lez (Pan-American + Quepos + secondary roads),
 * phrases, howTo, lastReviewed. NO alphabet block (Spanish is Latin).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Costa Rica: 2026 Article 91 & Plate Risk',
		description:
			"US license is legally valid in Costa Rica for 90 days under Article 91 — but rental contracts and Tránsito Article 151 plate-confiscation make Spanish-language documentation quietly valuable. Honest 2026 guide.",
		ogTitleShort: 'US Drivers in Costa Rica: IDP Guide 2026',
		ogSubtitle: 'Article 91, plate confiscation, $120 fine — what actually happens.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Costa Rica',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'US → Costa Rica · 2026 Guide',
		title: 'IDP for US Drivers in Costa Rica: 90-Day Rule & Plate Risk',
		lead: "The road to Manuel Antonio in January is one of those drives where you understand immediately why rental agencies charge what they do. Narrow two-lane asphalt that drops off into green nothing on both sides, trucks taking blind corners at full confidence, speed bumps (muertos) that materialize without warning on a 90 km/h stretch. A Tránsito checkpoint near Quepos asks, in workable English, for the license and the translation document. Article 91 of Ley 9078 gives US tourists 90 days of legal driving on their home license — that part is true. What's also true: without a Spanish-language presentation of what's on that license, the paperwork stop runs longer, and Article 151 gives the officer authority to confiscate the vehicle's plates entirely. The fine alone is ₡61,470 (~$120). The plate confiscation is the consequence that grounds the car.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: "No — but Tránsito plate confiscation under Article 151 makes Spanish documentation quietly valuable",
		text: "Costa Rican federal law (Article 91 of Ley 9078) accepts US licenses for tourist driving up to 90 days — no IDP legally required. The friction points are different: rental contracts in Spanish you can't read, Tránsito checkpoints where the officer has authority under Article 151 to confiscate the vehicle's licence plates if documentation is insufficient, and a ₡61,470 (~$120) fine under Article 146(q). Spanish-translated documentation removes the verification gap that triggers the extended stop.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Costa Rica',
		lead: 'Costa Rica accepts your US license under Article 91 — but Spanish-only rental contracts plus Tránsito Article 151 plate-confiscation authority make a multilingual translation document quietly valuable.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Costa Rica',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Legally sufficient under Article 91 of Ley 9078 for tourist stays up to 90 days. English-only format raises friction at rental desks (some chains list a translation document in booking conditions) and at Tránsito checkpoints where Spanish-speaking officers verify documentation. Article 151 plate-confiscation authority grounds the car if the verification stop escalates.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual digital PDF with Spanish translation of your license details — plus English, French, Italian, German, Portuguese and 6 other languages from the 1949 Geneva Convention set. Reduces friction at rental desks (Adobe, Hertz, Avis, Economy) and at Tránsito checkpoints on the Pan-American Highway and tourist corridors. Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Costa Rica: physical US driver license + IDP Companion (printed) + passport with Costa Rica entry stamp + rental agreement + Mandatory INS liability insurance (included with all rentals). IDP Companion is a translation companion — must be presented alongside the original license.",
	},

	whyNotEnough: {
		heading: 'Why your US license alone creates friction in Costa Rica',
		lead: 'Article 91 makes your US license legally valid. Article 151 makes the friction at a Tránsito stop more expensive than a typical fine.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal-vs-real reason',
				text: 'Costa Rica\'s Tránsito Police runs documentation checks regularly, especially on the Pan-American Highway and access roads to Manuel Antonio, Tamarindo, and Monteverde. A US license is printed in English, formatted to one state\'s standards, and doesn\'t present your driving class, expiry date, or issuing authority in a format Spanish-speaking officers can verify quickly. "My license is technically valid" is the right answer to the wrong question.',
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The Article 151 plate-confiscation reason',
				text: "Article 151 of Ley 9078 grants Tránsito officers explicit authority to confiscate the vehicle's licence plates when documentation is insufficient. Plate confiscation grounds the car entirely — you cannot drive away. The rental company gets involved (their roadside assistance charges start), the ₡61,470 (~$120) fine is no longer the dominant line item, and the rental day becomes a half-day phone marathon. This is not a hypothetical authority — it's used in tourist corridors when stops escalate.",
			},
			{
				icon: 'ph:storefront-bold',
				title: 'The contract reason',
				text: "Costa Rican rental contracts are in Spanish. English versions are sometimes provided, but the binding version is always the Spanish one. Several rental agencies — Adobe, Economy, plus international chains — list a license translation document in their booking conditions. This is separate from the legal question. A rental contract is a private agreement, and an agent enforcing those conditions can decline the rental regardless of what Article 91 says.",
			},
		],
	},

	rules: {
		heading: 'Costa Rica driving rules US drivers should know',
		lead: 'Right-hand traffic, same as the US. Most rules feel familiar — but BAC, one-lane bridges, and unmarked muertos are the operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '40–60 km/h', note: '~25–37 mph; 30 km/h in school zones' },
			{ icon: 'mdi:road-variant', label: 'Highway (paved)', value: '90 km/h', note: '~56 mph' },
			{ icon: 'mdi:speedometer-medium', label: 'Unpaved roads', value: '80 km/h', note: 'Common on secondary routes' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter than US 0.08%; 0.075% = criminal' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'Handheld prohibited; ₡61,470 (~$120)' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory all seats', note: 'Driver liable for passenger compliance' },
			{ icon: 'mdi:bus-stop', label: 'Speed bumps (muertos)', value: 'Frequent + unmarked', note: 'Walking speed; suspension damage often excluded from CDW' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: "Costa Rica's fine structure uses a base wage unit (salario base). Article 151 plate-confiscation is the consequence that exceeds the headline fine in real impact.",
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Invalid/insufficient documentation', amount: '₡61,470 (~$120)', note: 'Art. 146(q); officer may also confiscate plates under Art. 151', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Speeding 21–40 km/h over', amount: '₡61,470–₡138,000 (~$120–$270)', note: 'Class B infraction', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 40+ km/h over', amount: '₡138,000+ (~$270+)', note: 'Class A infraction; license points', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.075% BAC', amount: 'Criminal', note: 'Mandatory jail, suspension, vehicle impound', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '₡61,470 (~$120)', note: '', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt (driver or passenger)', amount: '₡61,470 (~$120)', note: 'Per person', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone while driving', amount: '₡61,470 (~$120)', note: '', severity: 'med' },
			{ icon: 'mdi:beach', label: 'Driving on beach / protected area', amount: '₡500,000+ (~$975+)', note: 'Environmental offense; vehicle impound common', severity: 'high' },
			{ icon: 'mdi:car-emergency', label: 'Article 151 plate confiscation', amount: 'No direct fine', note: 'Car grounded until rental company resolves; roadside assistance charges accumulate', severity: 'high' },
		],
		caption: 'Sources: Costa Rica Ley de Tránsito No. 9078, Articles 91, 132–160, 146(q), 151; Adobe Rent a Car rental requirements 2025; CostaRicaLaw.com (Attorney Roger Petersen, driving in Costa Rica with foreign licenses); US Embassy San José travel advisory.',
	},

	lez: {
		heading: 'Costa Rica enforcement zones — where Tránsito stops happen',
		badge: 'Costa Rica-specific',
		lead: 'Three corridors account for most documentation stops on US tourists. GPS routes you straight through them.',
		zones: [
			{
				city: 'Pan-American Highway (Route 1)',
				name: 'Main Tránsito enforcement corridor',
				description: 'Route 1 connects San José to the Nicaraguan border (north) and Panamanian border (south). Tránsito conducts regular documentation checks at fixed and mobile points. Stops are matter-of-fact and bilingual — most officers in tourist-heavy stretches handle basic English. Spanish-translated documentation shortens the stop measurably.',
				fine: '₡61,470 (~$120) + Art. 151 plate risk',
				note: 'The headlight-flashing courtesy from oncoming traffic typically signals a checkpoint ahead — a common Costa Rican driver habit.',
			},
			{
				city: 'Quepos / Manuel Antonio coastal road',
				name: 'Pacific tourist corridor',
				description: 'The road from San José (Route 27 → Route 34) into Quepos and Manuel Antonio is the highest-frequency tourist driving corridor and sees consistent Tránsito presence. Documentation stops near Quepos and Jacó are documented patterns. The scenery is genuinely worth the drive — the friction is the documentation question, not the road.',
				fine: '₡61,470 (~$120) + Art. 151 plate risk',
				note: 'Allow extra time during weekend afternoons — Tránsito presence is higher at peak resort transition windows.',
			},
			{
				city: 'Nicoya Peninsula / Osa Peninsula secondary roads',
				name: 'Unpaved 4WD-required terrain',
				description: 'Secondary roads to Tamarindo, Nosara, Santa Teresa, Drake Bay and Corcovado require ground clearance. Google Maps sometimes routes onto roads that need high-clearance 4WD. Less Tránsito presence here — but more rental insurance complications when things go wrong (river crossings, unmarked tracks). Spanish documentation matters at the rental desk before keys release.',
				fine: 'Variable',
				note: 'Driving on beaches, riverbanks or non-designated tracks is an environmental offence (₡500,000+, ~$975+) and voids all rental insurance.',
			},
		],
		tip: 'Practical rule for Costa Rica: the legal answer (you don\'t need an IDP) is correct, but Article 151 plate-confiscation authority changes the math at any documentation stop. Spanish-translated documentation closes the verification gap that triggers the longer stop. Two minutes of preparation, $35, removes the variable that turns a roadside check into a half-day phone marathon.',
	},

	phrases: {
		heading: 'Spanish phrases for Costa Rican checkpoints and rentals',
		lead: 'Most San José rental agents and Tránsito officers in tourist corridors handle basic English. These phrases cover the Spanish-only situations and the courtesy expectations.',
		items: [
			{ phrase: 'Aquí está mi licencia de conducir', translation: 'Here is my driving license', context: 'Pronounced "ah-KEE es-TAH mee lee-SEN-see-ah deh kon-doo-SEER". Handing over documents at a checkpoint' },
			{ phrase: 'Y el documento de traducción', translation: 'And the translation document', context: 'Pronounced "ee el doh-koo-MEN-toh deh tra-dook-SEEON". Showing IDP Companion alongside US license' },
			{ phrase: 'Soy turista de Estados Unidos', translation: "I'm a tourist from the United States", context: 'Pronounced "soy too-REES-tah deh es-TAH-dohs oo-NEE-dohs". Establishes context immediately, often softens the encounter' },
			{ phrase: 'No entiendo español', translation: "I don't understand Spanish", context: 'Pronounced "noh en-TYEN-doh es-pa-NYOL". Honest disclosure — most tourist-corridor officers will switch to basic English' },
			{ phrase: '¿Hay algún problema?', translation: 'Is there a problem?', context: 'Pronounced "eye al-GOON pro-BLEH-mah?". Polite opening at any checkpoint stop' },
			{ phrase: 'Tengo seguro', translation: 'I have insurance', context: 'Pronounced "TEN-goh seh-GOO-roh". In case of accident — present the rental insurance card' },
			{ phrase: 'Necesito llamar a la empresa de alquiler', translation: 'I need to call the rental company', context: 'For vehicle issues — most rental contracts include a 24h emergency number' },
			{ phrase: 'Voy a [destino]', translation: "I'm going to [destination]", context: 'Pronounced "voy ah". If asked your route — common Tránsito conversational opener' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Costa Rica as a US citizen',
		lead: "Costa Rica is unique: no IDP legally required, so the preparation list is shorter than for Italy or Japan. The trade-off is everything you do bring needs to be physical and Spanish-readable. Skipping any of it is where trips go wrong.",
		schemaName: 'How to prepare for driving in Costa Rica as a US citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Skip the official-IDP route — Costa Rica does not require it',
				text: 'Costa Rican federal law (Article 91 of Ley 9078) does not require US citizens to hold an International Driving Permit for tourist stays under 90 days. Save the time and the trip to a national-level issuer. Costa Rica is one of the destinations where this step is genuinely unnecessary.',
			},
			{
				title: 'Generate IDP Companion as the Spanish translation aid',
				text: '$35 buys a multilingual digital PDF translating your US license into Spanish (plus English, French, Italian, German, Portuguese and 6 other widely-spoken languages from the 1949 Geneva Convention set). Issued in 2 minutes online, valid 1–5 years. Reduces friction at rental desks (Adobe, Economy specifically list translation requirements) and at Tránsito checkpoints.',
			},
			{
				title: 'Verify INS liability insurance is included with the rental',
				text: 'Costa Rican law requires INS (Instituto Nacional de Seguros) third-party liability coverage on every rental. All major agencies bundle it. Verify in writing before booking. Additional collision coverage (CDW + gravel + sand) is worth considering given secondary road conditions — basic CDW often excludes muerto suspension damage.',
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US driver license + IDP Companion (printed) + US passport with Costa Rica entry stamp + rental contract + INS insurance card + (optional) printed copy of the rental policy in Spanish. Digital photos of documents are routinely refused at Tránsito checkpoints.',
			},
			{
				title: 'Plan for secondary-road realities',
				text: '4WD is genuinely recommended outside San José and main highways. Secondary roads in Nicoya, Osa and Tortuguero require ground clearance. Google Maps sometimes routes onto roads that need high-clearance 4WD. Driving on beaches, riverbeds or unmarked tracks is illegal (Nature Conservation framework) and voids all rental insurance.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Costa Rica — honestly',
		lead: 'Costa Rica is a "no IDP legally required, but Spanish documentation quietly valuable" destination. We\'re going to be direct about the math.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your US license data into Spanish (plus English, French, Italian, German, Portuguese and 6 other widely-spoken languages from the 1949 Geneva Convention set)',
				'Designed to reduce friction at rental desks (Adobe, Hertz, Avis, Economy) and at Tránsito checkpoints on the Pan-American Highway and tourist corridors',
				'Issued in minutes after you upload your license and complete our verification',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not valid by itself — must be carried alongside your physical US driver license',
				'Not legally required in Costa Rica — Article 91 of Ley 9078 accepts your US license alone for 90 days',
				'Not a guarantee that every checkpoint or rental agent will process it without questions — but the verification gap is closed',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Costa Rica',
			items: [
				"At rental desks where translation documents are listed in booking conditions (Adobe, Economy specifically; some Hertz / Avis branches at SJO discretionary)",
				'At Tránsito checkpoints on the Pan-American Highway and access roads to Manuel Antonio, Quepos, Tamarindo',
				'When Article 151 plate-confiscation authority would otherwise extend a verification stop',
				'When insurance documentation is reviewed after an accident — Spanish translation establishes license validity',
			],
		},
		needOfficial: {
			title: 'Documents Costa Rican law actually cares about',
			items: [
				"Your physical US driver's license — the actual permission to drive (no document substitutes for this)",
				'INS (Instituto Nacional de Seguros) third-party liability insurance — legally required, included with every rental',
				'US passport with Costa Rica entry stamp — checked at checkpoints alongside driving documents',
				'Rental agreement — Spanish-language version is the binding one',
			],
		},
		pattern:
			"The honest pattern most US travelers in Costa Rica follow: skip the official-IDP route entirely (Costa Rica doesn't require it), get IDP Companion for $35 as the Spanish translation aid, confirm INS coverage with the rental, carry physical documents in one folder. Total documentation cost: $35. Article 151 plate-confiscation outcome on a US tourist with no Spanish documentation: a half-day phone marathon and a roadside assistance charge. The math is simple.",
	},

	renting: {
		heading: 'Renting a car in Costa Rica as a US driver',
		lead: 'Costa Rican rental policies range from frictionless (international chains at SJO airport) to documentation-strict (some local operators list translation requirements explicitly).',
		chains: [
			{ name: 'Adobe Rent a Car', policy: 'Largest independent operator. Requires license held at least 2 years prior, valid for tourist stay, minimum age 21. Lists translation document requirement for non-Spanish licenses at some locations' },
			{ name: 'Hertz Costa Rica', policy: 'Operates at SJO airport and San José city center. Standard international booking conditions reference a translation document or IDP for non-Spanish licenses. Minimum age 21; under-25 surcharge' },
			{ name: 'Avis Costa Rica', policy: 'Similar policy to Hertz. Credit card required for security deposit' },
			{ name: 'Economy Rent a Car', policy: 'Local operator. Minimum age 21. IDP or translation document listed as required in rental conditions' },
		],
		tipsHeading: 'Practical tips for Costa Rica',
		tips: [
			'4WD is genuinely recommended outside San José and main highways — Nicoya, Osa, Tortuguero secondary roads need ground clearance',
			'Minimum age 21 at most agencies; some require 23 for 4WD vehicles',
			'Credit card deposit $1,000–$1,500 standard; debit cards not accepted at major agencies',
			'INS mandatory liability included with all rentals; additional CDW + gravel + sand coverage worth considering',
			"Don't drive at night in unfamiliar areas — unmarked muertos, wildlife, road surface changes; rental contracts often explicitly prohibit night driving on rural routes",
			"Driving on beaches, unpaved areas outside designated roads, and inside national parks is illegal — rental contracts explicitly exclude coverage",
			'Headlight flashing from oncoming traffic typically signals a Tránsito checkpoint ahead — common courtesy among Costa Rican drivers',
			"Rainy season (May–November) changes road conditions significantly — verify on agency forums or with the rental company before booking remote-area itineraries",
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes',
		lead: 'Realistic outcomes for US drivers in Costa Rica, ranked by likelihood.',
		items: [
			{
				severity: 'low',
				frequency: '~70% of trips',
				label: 'Smooth rental + no checkpoint stops',
				text: 'License accepted, clean Pacific-coast or Caribbean drive, no friction. Most Costa Rica trips end this way.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Rental desk asks for translation — you have IDP Companion',
				text: 'Document shown, rental processed without further friction.',
			},
			{
				severity: 'med',
				frequency: 'Less common',
				label: 'Rental desk asks for translation — you don\'t have one',
				text: "Rental held up or refused; may need to source alternate documentation. Some agencies will accept after a manager review; others won't.",
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Tránsito checkpoint, officer asks for Spanish translation',
				text: 'Extended documentation stop. Potential ₡61,470 (~$120) fine under Article 146(q).',
			},
			{
				severity: 'high',
				frequency: 'Rare',
				label: 'Plate confiscation at checkpoint',
				text: 'Article 151 authority — car effectively grounded until resolved with rental company. Roadside assistance charges start. Phone marathon for 2–4 hours.',
			},
			{
				severity: 'high',
				frequency: 'Rare',
				label: 'Accident on secondary road without clear documentation',
				text: 'Insurance claim friction, processing delay. Spanish-translated license speeds the INS claim review.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI over 0.075% BAC',
				text: 'Criminal charge under Costa Rican law. Mandatory jail, license suspension, vehicle impound.',
			},
		],
		math: 'IDP Companion is $35. A documentation stop in Quepos takes 30–45 minutes minimum without translation; with it, 5–10 minutes. Plate confiscation under Article 151 involves the rental company\'s roadside line and waiting through the rental day. Choose accordingly.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Does Costa Rica require a US driver to have an IDP?',
				answer: "Not legally, for most cases. Article 91 of Costa Rica's Transit Law (Ley 9078) recognizes foreign driver licenses issued in the Latin alphabet for tourist stays up to 90 days. A government-issued IDP is not a legal requirement for US drivers with valid English-language licenses.",
			},
			{
				id: 2,
				question: 'Why do rental companies ask for a translation document if it\'s not legally required?',
				answer: 'Rental companies set their own terms. Their booking conditions are a private contract, and many agencies — both international chains and local operators (Adobe, Economy specifically) — list a Spanish-language license translation as a requirement. An agent following those terms can decline the rental regardless of what Costa Rican law says.',
			},
			{
				id: 3,
				question: 'What\'s the fine for a documentation problem at a checkpoint?',
				answer: 'Article 146(q) sets the fine at ₡61,470 (~$120). More significantly, Article 151 grants Tránsito officers the authority to confiscate the vehicle\'s plates, which takes the car off the road until the documentation issue is resolved with the rental company.',
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government-issued IDP is a formal document under the 1949 Geneva Convention. IDP Companion is a private multilingual translation document presenting your US license details in Spanish and 10 other widely-spoken languages from the 1949 Geneva Convention set — designed to be used alongside your original license.',
			},
			{
				id: 5,
				question: 'How bad are Costa Rica\'s roads really?',
				answer: 'Main highways (Route 1, Route 27 to Jacó, Route 2) are well-maintained and manageable. Secondary roads — particularly in the Nicoya Peninsula, Osa Peninsula and to many national parks — are often unpaved, narrow, and require ground clearance. Road conditions change significantly with the rainy season (May–November). Google Maps sometimes routes you onto roads that require high-clearance 4WD.',
			},
			{
				id: 6,
				question: 'What\'s the alcohol limit?',
				answer: '0.05% BAC — the same as France and many EU countries, but stricter than most US states. Above 0.075%, the offense becomes criminal under Costa Rica\'s traffic law with mandatory jail time and license suspension. Tránsito checkpoints on weekend nights frequently include breathalyzer checks.',
			},
			{
				id: 7,
				question: 'Can I drive to other countries from Costa Rica?',
				answer: 'Border crossing into Panama or Nicaragua in a rental car requires explicit permission from the rental company and additional insurance documentation. Most agencies require advance notice and charge an extra fee. Verify before booking if you plan a multi-country itinerary.',
			},
			{
				id: 8,
				question: 'Is it safe to drive at night?',
				answer: 'Most agencies advise against it and some explicitly prohibit it in rental contracts for rural routes. Speed bumps without reflective markers, unlighted livestock crossings and the absence of road shoulders on secondary roads make night driving genuinely hazardous outside San José and major tourist routes.',
			},
			{
				id: 9,
				question: 'What is plate confiscation under Article 151?',
				answer: "Article 151 of Ley 9078 grants Tránsito officers explicit authority to confiscate the vehicle's licence plates when documentation is insufficient. Plate confiscation grounds the car entirely — you cannot drive away. The rental company gets involved through its roadside assistance line, and the resolution typically takes 2–4 hours with rental day already partially lost.",
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Costa Rica trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic US license — if your US license expires, the companion expires with it. One purchase covers Costa Rica plus Mexico, Spain, Italy, Japan and any other destination you visit during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US drivers and Costa Rica-bound travelers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'is', label: 'US → Iceland', status: 'Live', href: '/idp-for-us-drivers-in-iceland/' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan/' },
			{ flagFrom: 'gb', flagTo: 'cr', label: 'UK → Costa Rica', status: 'Live', href: '/idp-for-uk-drivers-in-costa-rica/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including Spanish, English, French, Italian, German, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real US license in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Costa Rica, Mexico, Spain, Italy, Japan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Costa Rican Ministry of Public Works and Transport (MOPT) or the Consejo de Seguridad Vial (COSEVI). IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			'Costa Rica Ley de Tránsito No. 9078, Articles 91, 132–160, 146(q), 151 (costaricalaw.com, MOPT official publication)',
			'Adobe Rent a Car rental requirements (adobecar.com, updated April 2025)',
			'CostaRicaLaw.com — Attorney Roger Petersen, driving in Costa Rica with a foreign license',
			'US Embassy San José travel advisory (cr.usembassy.gov)',
			'AAA / AATA driving abroad reference materials',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Costa Rica',
	},
};

const es: CountryPairCopy = {
	seo: {
		title: 'IDP para conductores de EE.UU. en Costa Rica: guía 2026',
		description:
			'La licencia de EE.UU. es legalmente válida en Costa Rica por 90 días bajo el Artículo 91 — pero los contratos de alquiler y la confiscación de placas del Tránsito (Art. 151) hacen valiosa la documentación en español. Guía honesta 2026.',
		ogTitleShort: 'Conductores de EE.UU. en Costa Rica 2026',
		ogSubtitle: 'Artículo 91, confiscación de placas, multa $120 — qué pasa de verdad.',
	},
	breadcrumbs: {
		home: 'Inicio',
		current: 'EE.UU. → Costa Rica',
	},
	lastReviewed: 'Abril 2026',
	labels: {
		freshnessPrefix: 'Última revisión:',
	},

	hero: {
		kicker: 'EE.UU. → Costa Rica · Guía 2026',
		title: 'IDP para conductores de EE.UU. en Costa Rica: regla de 90 días',
		lead: 'La carretera a Manuel Antonio en enero es uno de esos manejos donde uno entiende inmediatamente por qué las agencias de alquiler cobran lo que cobran. Asfalto angosto de dos vías que cae en verde por ambos lados, camiones tomando curvas ciegas con plena confianza, muertos que aparecen sin aviso en un tramo de 90 km/h. Un punto de control del Tránsito cerca de Quepos pide, en inglés funcional, la licencia y el documento de traducción. El Artículo 91 de la Ley 9078 da a los turistas estadounidenses 90 días de manejo legal con su licencia de casa — esa parte es cierta. Lo que también es cierto: sin una presentación en español de lo que está en esa licencia, la parada de papeleo se alarga, y el Artículo 151 da al oficial autoridad para confiscar las placas del vehículo por completo. La multa sola es de ₡61.470 (~$120). La confiscación de placas es la consecuencia que deja al carro varado.',
		ctaPrimary: 'Obtener IDP Companion en 2 min — $35',
		ctaSecondary: 'Ver todos los planes',
		badgeTop: 'Guía 2026',
		badgeBottom: 'Desde $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — pero la confiscación de placas del Tránsito bajo el Artículo 151 hace valiosa la documentación en español',
		text: 'La ley federal costarricense (Artículo 91 de la Ley 9078) acepta licencias de EE.UU. para manejo turístico hasta 90 días — sin IDP legalmente requerido. Los puntos de fricción son distintos: contratos de alquiler en español que no puedes leer, puntos de control donde el oficial tiene autoridad bajo el Artículo 151 para confiscar las placas si la documentación es insuficiente, y multa de ₡61.470 (~$120) bajo el Artículo 146(q). La documentación traducida al español cierra la brecha de verificación que dispara la parada extendida.',
	},

	tldr: {
		heading: 'Licencia de EE.UU. sola vs IDP Companion en Costa Rica',
		lead: 'Costa Rica acepta tu licencia de EE.UU. bajo el Artículo 91 — pero contratos en español y la autoridad de confiscación de placas del Artículo 151 hacen valioso un documento de traducción multilingüe.',
		colDocument: 'Documento',
		colWhatItDoes: 'Qué hace en Costa Rica',
		colCost: 'Costo',
		rows: [
			{
				document: 'Licencia de conducir de EE.UU. (sola)',
				whatItDoes: 'Legalmente suficiente bajo el Artículo 91 de la Ley 9078 para estancias turísticas hasta 90 días. El formato solo en inglés genera fricción en los counters de alquiler (algunas cadenas listan documento de traducción en condiciones de reserva) y en puntos de control donde oficiales hispanohablantes verifican documentación. La autoridad de confiscación de placas del Artículo 151 deja al carro varado si la parada escala.',
				cost: 'Ya la tienes',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + tu licencia de EE.UU.',
				whatItDoes: 'PDF digital multilingüe con traducción al español de los detalles de tu licencia — más inglés, francés, italiano, alemán, portugués y otros 6 idiomas del set de la Convención de Ginebra de 1949. Reduce fricción en counters (Adobe, Hertz, Avis, Economy) y puntos de control en la Carretera Panamericana y corredores turísticos. Emitido en 2 minutos en línea.',
				cost: '$35–55 (1–5 años)',
				tone: 'companion',
			},
		],
		footnote: 'Qué llevar a Costa Rica: licencia física de EE.UU. + IDP Companion (impreso) + pasaporte con sello de entrada a Costa Rica + contrato de alquiler + seguro INS obligatorio (incluido en todos los alquileres). IDP Companion es un compañero de traducción — debe presentarse junto con la licencia original.',
	},

	whyNotEnough: {
		heading: 'Por qué tu licencia de EE.UU. sola crea fricción en Costa Rica',
		lead: 'El Artículo 91 hace tu licencia de EE.UU. legalmente válida. El Artículo 151 hace que la fricción en una parada del Tránsito sea más cara que una multa típica.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'La razón legal-vs-real',
				text: 'La Policía de Tránsito de Costa Rica realiza chequeos de documentación regularmente, especialmente en la Carretera Panamericana y vías de acceso a Manuel Antonio, Tamarindo y Monteverde. Una licencia de EE.UU. está impresa en inglés, formateada al estándar de un estado, y no presenta tu clase de manejo, fecha de vencimiento o autoridad emisora en formato que oficiales hispanohablantes puedan verificar rápido. "Mi licencia es técnicamente válida" es la respuesta correcta a la pregunta equivocada.',
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'La razón de confiscación de placas (Art. 151)',
				text: 'El Artículo 151 de la Ley 9078 otorga a oficiales del Tránsito autoridad explícita para confiscar las placas del vehículo cuando la documentación es insuficiente. La confiscación de placas deja al carro varado completamente — no puedes seguir manejando. La empresa de alquiler se involucra (sus cargos de asistencia en carretera empiezan), la multa de ₡61.470 (~$120) deja de ser el ítem dominante, y el día de alquiler se convierte en una maratón telefónica de medio día. No es una autoridad hipotética — se usa en corredores turísticos cuando las paradas escalan.',
			},
			{
				icon: 'ph:storefront-bold',
				title: 'La razón del contrato',
				text: 'Los contratos de alquiler costarricenses están en español. A veces se proveen versiones en inglés, pero la versión vinculante siempre es la española. Varias agencias — Adobe, Economy, además de cadenas internacionales — listan un documento de traducción de licencia en sus condiciones de reserva. Es separado de la pregunta legal. Un contrato de alquiler es un acuerdo privado, y un agente que aplica esas condiciones puede declinar el alquiler independientemente de lo que diga el Artículo 91.',
			},
		],
	},

	rules: {
		heading: 'Reglas de manejo en Costa Rica que conductores de EE.UU. deben saber',
		lead: 'Mano derecha, igual que EE.UU. La mayoría de reglas se sienten familiares — pero el límite de alcohol, los puentes de un solo carril y los muertos sin marcar son los outliers operacionales.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Lado de manejo', value: 'DERECHA', note: 'Igual que EE.UU. — cómodo' },
			{ icon: 'mdi:speedometer', label: 'Velocidad urbana', value: '40–60 km/h', note: '~25–37 mph; 30 km/h en zonas escolares' },
			{ icon: 'mdi:road-variant', label: 'Carretera (pavimentada)', value: '90 km/h', note: '~56 mph' },
			{ icon: 'mdi:speedometer-medium', label: 'Caminos sin pavimentar', value: '80 km/h', note: 'Común en rutas secundarias' },
			{ icon: 'mdi:beer-outline', label: 'Límite de alcohol', value: '0,05% BAC', note: 'Más estricto que EE.UU. 0,08%; 0,075% = penal' },
			{ icon: 'mdi:cellphone-off', label: 'Uso del teléfono', value: 'Solo manos libres', note: 'Manual prohibido; ₡61.470 (~$120)' },
			{ icon: 'mdi:seatbelt', label: 'Cinturones', value: 'Obligatorio todos', note: 'Conductor responsable de pasajeros' },
			{ icon: 'mdi:bus-stop', label: 'Muertos (lomos)', value: 'Frecuentes + sin marcar', note: 'Velocidad de paso; daño de suspensión a menudo excluido del CDW' },
		],
	},

	fines: {
		heading: 'Multas 2026 por infracciones comunes',
		lead: 'La estructura de multas de Costa Rica usa una unidad de salario base. La confiscación de placas del Artículo 151 es la consecuencia que excede la multa nominal en impacto real.',
		colViolation: 'Infracción',
		colAmount: 'Multa',
		colNote: 'Notas',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Documentación inválida/insuficiente', amount: '₡61.470 (~$120)', note: 'Art. 146(q); el oficial puede también confiscar placas bajo Art. 151', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Exceso de velocidad 21–40 km/h', amount: '₡61.470–₡138.000 (~$120–$270)', note: 'Infracción Clase B', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Exceso de velocidad 40+ km/h', amount: '₡138.000+ (~$270+)', note: 'Infracción Clase A; puntos en licencia', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'DUI sobre 0,075% BAC', amount: 'Penal', note: 'Cárcel obligatoria, suspensión, decomiso', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Pasarse en rojo', amount: '₡61.470 (~$120)', note: '', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'Sin cinturón (conductor o pasajero)', amount: '₡61.470 (~$120)', note: 'Por persona', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Teléfono manual al manejar', amount: '₡61.470 (~$120)', note: '', severity: 'med' },
			{ icon: 'mdi:beach', label: 'Manejar en playa / área protegida', amount: '₡500.000+ (~$975+)', note: 'Infracción ambiental; decomiso común', severity: 'high' },
			{ icon: 'mdi:car-emergency', label: 'Confiscación de placas (Art. 151)', amount: 'Sin multa directa', note: 'Carro varado hasta que la empresa de alquiler resuelva; cargos de asistencia acumulan', severity: 'high' },
		],
		caption: 'Fuentes: Costa Rica Ley de Tránsito No. 9078, Artículos 91, 132–160, 146(q), 151; requisitos de Adobe Rent a Car 2025; CostaRicaLaw.com (Abogado Roger Petersen, manejo en Costa Rica con licencias extranjeras); aviso de viaje de la Embajada de EE.UU. en San José.',
	},

	lez: {
		heading: 'Zonas de aplicación en Costa Rica — dónde ocurren paradas del Tránsito',
		badge: 'Específico de Costa Rica',
		lead: 'Tres corredores acumulan la mayoría de paradas de documentación a turistas estadounidenses. GPS te dirige justo a través de ellos.',
		zones: [
			{
				city: 'Carretera Panamericana (Ruta 1)',
				name: 'Corredor principal de aplicación del Tránsito',
				description: 'La Ruta 1 conecta San José con la frontera de Nicaragua (norte) y la frontera de Panamá (sur). El Tránsito conduce chequeos de documentación regulares en puntos fijos y móviles. Las paradas son directas y bilingües — la mayoría de oficiales en tramos turísticos manejan inglés básico. La documentación traducida al español acorta la parada de manera medible.',
				fine: '₡61.470 (~$120) + riesgo placas Art. 151',
				note: 'El parpadeo de luces de tráfico contrario típicamente señala un punto de control adelante — costumbre común entre conductores costarricenses.',
			},
			{
				city: 'Carretera costera Quepos / Manuel Antonio',
				name: 'Corredor turístico del Pacífico',
				description: 'La carretera de San José (Ruta 27 → Ruta 34) hacia Quepos y Manuel Antonio es el corredor turístico de manejo de mayor frecuencia y ve presencia consistente del Tránsito. Las paradas de documentación cerca de Quepos y Jacó son patrones documentados. El paisaje vale realmente la conducción — la fricción es la pregunta de documentación, no la carretera.',
				fine: '₡61.470 (~$120) + riesgo placas Art. 151',
				note: 'Permite tiempo extra los fines de semana en la tarde — la presencia del Tránsito es mayor en ventanas de transición de resorts.',
			},
			{
				city: 'Caminos secundarios de Nicoya / Osa',
				name: 'Terreno sin pavimentar que requiere 4WD',
				description: 'Caminos secundarios a Tamarindo, Nosara, Santa Teresa, Bahía Drake y Corcovado requieren altura libre. Google Maps a veces dirige a caminos que necesitan 4WD de altura libre. Menos presencia de Tránsito aquí — pero más complicaciones de seguro de alquiler cuando algo sale mal (cruces de río, tracks no marcados). La documentación en español importa en el counter de alquiler antes de la entrega de llaves.',
				fine: 'Variable',
				note: 'Manejar en playas, riberas o tracks no designados es ofensa ambiental (₡500.000+, ~$975+) y anula todo seguro de alquiler.',
			},
		],
		tip: 'Regla práctica para Costa Rica: la respuesta legal (no necesitas IDP) es correcta, pero la autoridad de confiscación de placas del Artículo 151 cambia las matemáticas en cualquier parada de documentación. La documentación traducida al español cierra la brecha de verificación que dispara la parada larga. Dos minutos de preparación, $35, eliminan la variable que convierte un chequeo de carretera en una maratón telefónica de medio día.',
	},

	phrases: {
		heading: 'Frases en español para puntos de control y alquileres en Costa Rica',
		lead: 'La mayoría de agentes de alquiler en San José y oficiales del Tránsito en corredores turísticos manejan inglés básico. Estas frases cubren situaciones solo en español y las expectativas de cortesía.',
		items: [
			{ phrase: 'Aquí está mi licencia de conducir', translation: 'Here is my driving license', context: 'Entregando documentos en un punto de control' },
			{ phrase: 'Y el documento de traducción', translation: 'And the translation document', context: 'Mostrando IDP Companion junto con la licencia de EE.UU.' },
			{ phrase: 'Soy turista de Estados Unidos', translation: "I'm a tourist from the United States", context: 'Establece contexto inmediatamente, frecuentemente suaviza el encuentro' },
			{ phrase: 'No entiendo español', translation: "I don't understand Spanish", context: 'Disclosure honesto — la mayoría de oficiales en corredores turísticos cambia a inglés básico' },
			{ phrase: '¿Hay algún problema?', translation: 'Is there a problem?', context: 'Apertura cortés en cualquier parada' },
			{ phrase: 'Tengo seguro', translation: 'I have insurance', context: 'En caso de accidente — presenta la tarjeta de seguro de alquiler' },
			{ phrase: 'Necesito llamar a la empresa de alquiler', translation: 'I need to call the rental company', context: 'Para problemas con el vehículo — la mayoría de contratos incluye un número de emergencia 24h' },
			{ phrase: 'Voy a [destino]', translation: "I'm going to [destination]", context: 'Si te preguntan tu ruta — apertura conversacional común del Tránsito' },
		],
	},

	howTo: {
		heading: 'Cómo prepararse para manejar en Costa Rica como ciudadano de EE.UU.',
		lead: 'Costa Rica es único: sin IDP legalmente requerido, así que la lista de preparación es más corta que para Italia o Japón. El trade-off es que todo lo que sí lleves debe ser físico y legible en español. Saltarse cualquier cosa es donde los viajes salen mal.',
		schemaName: 'Cómo prepararse para manejar en Costa Rica como ciudadano de EE.UU.',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Saltar la ruta de IDP oficial — Costa Rica no lo requiere',
				text: 'La ley federal costarricense (Artículo 91 de la Ley 9078) no requiere que ciudadanos de EE.UU. tengan un Permiso Internacional de Conducir para estancias turísticas bajo 90 días. Ahorra el tiempo y la visita a un emisor de nivel nacional. Costa Rica es uno de los destinos donde este paso es genuinamente innecesario.',
			},
			{
				title: 'Genera IDP Companion como ayuda de traducción al español',
				text: '$35 compra un PDF digital multilingüe que traduce tu licencia de EE.UU. al español (más inglés, francés, italiano, alemán, portugués y otros 6 idiomas ampliamente hablados del set de la Convención de Ginebra de 1949). Emitido en 2 minutos en línea, válido 1–5 años. Reduce fricción en counters de alquiler (Adobe, Economy específicamente listan requisitos de traducción) y puntos de control del Tránsito.',
			},
			{
				title: 'Verifica que el seguro INS de responsabilidad civil esté incluido',
				text: 'La ley costarricense requiere cobertura INS (Instituto Nacional de Seguros) de responsabilidad civil de terceros en cada alquiler. Todas las agencias mayores la incluyen. Verifica por escrito antes de reservar. La cobertura adicional de colisión (CDW + grava + arena) vale la pena considerar dado las condiciones de caminos secundarios — el CDW básico a menudo excluye daño de suspensión por muertos.',
			},
			{
				title: 'Lleva documentos físicos en una sola carpeta',
				text: 'Licencia física de EE.UU. + IDP Companion (impreso) + pasaporte de EE.UU. con sello de entrada a Costa Rica + contrato de alquiler + tarjeta de seguro INS + (opcional) copia impresa de la póliza de alquiler en español. Las fotos digitales de documentos son rutinariamente rechazadas en puntos de control del Tránsito.',
			},
			{
				title: 'Planifica para realidades de caminos secundarios',
				text: '4WD es genuinamente recomendado fuera de San José y carreteras principales. Caminos secundarios en Nicoya, Osa y Tortuguero requieren altura libre. Google Maps a veces dirige a caminos que necesitan 4WD de altura libre. Manejar en playas, riberas o tracks no marcados es ilegal (marco de Conservación de la Naturaleza) y anula todo seguro de alquiler.',
			},
		],
	},

	honesty: {
		heading: 'Cómo encaja IDP Companion en Costa Rica — honestamente',
		lead: 'Costa Rica es un destino "no-IDP-legalmente-requerido pero documentación-en-español-silenciosamente-valiosa". Vamos a ser directos sobre las matemáticas.',
		is: {
			title: 'Qué es IDP Companion',
			items: [
				'Un PDF digital multilingüe que traduce los datos de tu licencia de EE.UU. al español (más inglés, francés, italiano, alemán, portugués y otros 6 idiomas ampliamente hablados del set de la Convención de Ginebra de 1949)',
				'Diseñado para reducir fricción en counters de alquiler (Adobe, Hertz, Avis, Economy) y en puntos de control del Tránsito en la Carretera Panamericana y corredores turísticos',
				'Emitido en minutos después de subir tu licencia y completar nuestra verificación',
				'Disponible por $35 (1 año), $45 (3 años), o $55 (5 años) — pago único, sin suscripción',
			],
		},
		isNot: {
			title: 'Qué NO es IDP Companion',
			items: [
				'No es un IDP gubernamental bajo la Convención de Ginebra de 1949',
				'No es válido por sí solo — debe llevarse junto con tu licencia física de EE.UU.',
				'No es legalmente requerido en Costa Rica — el Artículo 91 de la Ley 9078 acepta tu licencia de EE.UU. sola por 90 días',
				'No es garantía de que cada punto de control o agente de alquiler lo procesará sin preguntas — pero la brecha de verificación se cierra',
			],
		},
		helps: {
			title: 'Cuándo IDP Companion ayuda a conductores de EE.UU. en Costa Rica',
			items: [
				'En counters donde documentos de traducción están listados en condiciones de reserva (Adobe, Economy específicamente; algunas sucursales de Hertz / Avis en SJO discrecional)',
				'En puntos de control del Tránsito en la Carretera Panamericana y vías de acceso a Manuel Antonio, Quepos, Tamarindo',
				'Cuando la autoridad de confiscación de placas del Artículo 151 podría extender una parada de verificación',
				'Cuando la documentación de seguro se revisa después de un accidente — la traducción al español establece validez de licencia',
			],
		},
		needOfficial: {
			title: 'Documentos que la ley costarricense realmente exige',
			items: [
				'Tu licencia física de EE.UU. — el permiso real para manejar (esto no se sustituye)',
				'Seguro de responsabilidad civil INS (Instituto Nacional de Seguros) — legalmente requerido, incluido con cada alquiler',
				'Pasaporte de EE.UU. con sello de entrada a Costa Rica — chequeado en puntos de control junto con documentos de manejo',
				'Contrato de alquiler — la versión en español es la vinculante',
			],
		},
		pattern:
			'El patrón honesto que la mayoría de viajeros estadounidenses sigue en Costa Rica: saltarse la ruta de IDP oficial completamente (Costa Rica no lo requiere), obtener IDP Companion por $35 como ayuda de traducción al español, confirmar cobertura INS con el alquiler, llevar documentos físicos en una sola carpeta. Costo total de documentación: $35. Resultado de confiscación de placas del Artículo 151 en un turista estadounidense sin documentación en español: una maratón telefónica de medio día y un cargo de asistencia en carretera. Las matemáticas son simples.',
	},

	renting: {
		heading: 'Alquilar un carro en Costa Rica como conductor de EE.UU.',
		lead: 'Las políticas de alquiler en Costa Rica varían de sin fricción (cadenas internacionales en aeropuerto SJO) a estrictas en documentación (algunos operadores locales listan requisitos de traducción explícitamente).',
		chains: [
			{ name: 'Adobe Rent a Car', policy: 'El operador independiente más grande. Requiere licencia con al menos 2 años, válida para estancia turística, edad mínima 21. Lista requisito de documento de traducción para licencias no en español en algunas ubicaciones' },
			{ name: 'Hertz Costa Rica', policy: 'Opera en aeropuerto SJO y centro de San José. Las condiciones internacionales estándar de reserva referencian un documento de traducción o IDP para licencias no en español. Edad mínima 21; recargo bajo 25' },
			{ name: 'Avis Costa Rica', policy: 'Política similar a Hertz. Tarjeta de crédito requerida para depósito de seguridad' },
			{ name: 'Economy Rent a Car', policy: 'Operador local. Edad mínima 21. IDP o documento de traducción listado como requerido en condiciones de alquiler' },
		],
		tipsHeading: 'Consejos prácticos para Costa Rica',
		tips: [
			'4WD es genuinamente recomendado fuera de San José y carreteras principales — caminos secundarios de Nicoya, Osa, Tortuguero necesitan altura libre',
			'Edad mínima 21 en la mayoría de agencias; algunas requieren 23 para vehículos 4WD',
			'Depósito con tarjeta de crédito $1.000–$1.500 estándar; tarjetas de débito no aceptadas en agencias mayores',
			'Responsabilidad civil INS obligatoria incluida con todos los alquileres; CDW adicional + cobertura de grava + arena vale considerar',
			'No manejes de noche en áreas no familiares — muertos sin marcar, animales sin iluminar, cambios de superficie; los contratos a menudo prohíben explícitamente manejar de noche en rutas rurales',
			'Manejar en playas, áreas no pavimentadas fuera de caminos designados y dentro de parques nacionales es ilegal — los contratos de alquiler excluyen explícitamente cobertura',
			'Parpadear luces de tráfico contrario típicamente señala un punto de control del Tránsito adelante — cortesía común entre conductores costarricenses',
			'La temporada lluviosa (mayo–noviembre) cambia condiciones de carretera significativamente — verifica en foros de agencia o con la empresa de alquiler antes de reservar itinerarios remotos',
		],
	},

	outcomes: {
		heading: 'Qué pasa en varios puntos — resultados reales',
		lead: 'Resultados realistas para conductores de EE.UU. en Costa Rica, ordenados por probabilidad.',
		items: [
			{
				severity: 'low',
				frequency: '~70% de viajes',
				label: 'Alquiler sin problemas + sin paradas',
				text: 'Licencia aceptada, manejo limpio en costa Pacífica o Caribe, sin fricción. La mayoría de viajes a Costa Rica termina así.',
			},
			{
				severity: 'low',
				frequency: 'Ocasional',
				label: 'Counter pide traducción — tienes IDP Companion',
				text: 'Documento mostrado, alquiler procesado sin más fricción.',
			},
			{
				severity: 'med',
				frequency: 'Menos común',
				label: 'Counter pide traducción — no tienes',
				text: 'Alquiler retrasado o rechazado; puede que necesites buscar documentación alterna. Algunas agencias aceptan después de revisión de gerente; otras no.',
			},
			{
				severity: 'med',
				frequency: 'Ocasional',
				label: 'Punto de control, oficial pide traducción al español',
				text: 'Parada extendida de documentación. Multa potencial de ₡61.470 (~$120) bajo el Artículo 146(q).',
			},
			{
				severity: 'high',
				frequency: 'Raro',
				label: 'Confiscación de placas en punto de control',
				text: 'Autoridad del Artículo 151 — carro efectivamente varado hasta resolver con la empresa de alquiler. Cargos de asistencia empiezan. Maratón telefónica de 2–4 horas.',
			},
			{
				severity: 'high',
				frequency: 'Raro',
				label: 'Accidente en camino secundario sin documentación clara',
				text: 'Fricción en reclamo de seguro, retraso de procesamiento. Licencia traducida al español acelera la revisión del reclamo INS.',
			},
			{
				severity: 'high',
				frequency: 'Raro con preparación',
				label: 'DUI sobre 0,075% BAC',
				text: 'Cargo penal bajo ley costarricense. Cárcel obligatoria, suspensión de licencia, decomiso de vehículo.',
			},
		],
		math: 'IDP Companion es $35. Una parada de documentación en Quepos toma 30–45 minutos mínimo sin traducción; con ella, 5–10 minutos. La confiscación de placas bajo el Artículo 151 involucra la línea de asistencia de la empresa de alquiler y esperar a través del día de alquiler. Elige según corresponda.',
	},

	faq: {
		heading: 'Preguntas frecuentes',
		items: [
			{
				id: 1,
				question: '¿Costa Rica requiere que un conductor de EE.UU. tenga IDP?',
				answer: 'Legalmente no, en la mayoría de casos. El Artículo 91 de la Ley de Tránsito de Costa Rica (Ley 9078) reconoce licencias extranjeras emitidas en alfabeto latino para estancias turísticas hasta 90 días. Un IDP gubernamental no es requerimiento legal para conductores de EE.UU. con licencias válidas en inglés.',
			},
			{
				id: 2,
				question: '¿Por qué las empresas de alquiler piden documento de traducción si no es legalmente requerido?',
				answer: 'Las empresas de alquiler ponen sus propios términos. Sus condiciones de reserva son contrato privado, y muchas agencias — cadenas internacionales y operadores locales (Adobe, Economy específicamente) — listan una traducción al español de la licencia como requisito. Un agente que aplica esos términos puede declinar el alquiler independientemente de lo que diga la ley costarricense.',
			},
			{
				id: 3,
				question: '¿Cuál es la multa por problema de documentación en un punto de control?',
				answer: 'El Artículo 146(q) establece la multa en ₡61.470 (~$120). Más significativamente, el Artículo 151 otorga a oficiales del Tránsito autoridad para confiscar las placas del vehículo, lo cual deja al carro fuera de la carretera hasta que el problema de documentación se resuelva con la empresa de alquiler.',
			},
			{
				id: 4,
				question: '¿Es IDP Companion lo mismo que un IDP gubernamental?',
				answer: 'No. Un IDP gubernamental es un documento formal bajo la Convención de Ginebra de 1949. IDP Companion es un documento privado multilingüe de traducción que presenta los detalles de tu licencia de EE.UU. en español y otros 10 idiomas ampliamente hablados del set de la Convención de Ginebra de 1949 — diseñado para usarse junto con tu licencia original.',
			},
			{
				id: 5,
				question: '¿Qué tan malas son las carreteras de Costa Rica realmente?',
				answer: 'Las carreteras principales (Ruta 1, Ruta 27 a Jacó, Ruta 2) están bien mantenidas y manejables. Caminos secundarios — particularmente en Nicoya, Osa y a muchos parques nacionales — a menudo no están pavimentados, son angostos y requieren altura libre. Las condiciones cambian significativamente con la temporada lluviosa (mayo–noviembre). Google Maps a veces te dirige a caminos que requieren 4WD de altura libre.',
			},
			{
				id: 6,
				question: '¿Cuál es el límite de alcohol?',
				answer: '0,05% BAC — igual que Francia y muchos países de la UE, pero más estricto que la mayoría de estados de EE.UU. Sobre 0,075%, la ofensa se vuelve penal bajo la ley de tránsito costarricense con cárcel obligatoria y suspensión de licencia. Los puntos de control del Tránsito en noches de fin de semana frecuentemente incluyen breathalyzer.',
			},
			{
				id: 7,
				question: '¿Puedo manejar a otros países desde Costa Rica?',
				answer: 'Cruzar la frontera a Panamá o Nicaragua en un carro alquilado requiere permiso explícito de la empresa de alquiler y documentación adicional de seguro. La mayoría de agencias requiere aviso anticipado y cobra una tarifa adicional. Verifica antes de reservar si planeas un itinerario multi-país.',
			},
			{
				id: 8,
				question: '¿Es seguro manejar de noche?',
				answer: 'La mayoría de agencias aconsejan no hacerlo y algunas explícitamente lo prohíben en contratos para rutas rurales. Muertos sin marcadores reflectivos, cruces de animales sin iluminar y la ausencia de hombros de carretera en caminos secundarios hacen que manejar de noche sea genuinamente peligroso fuera de San José y rutas turísticas mayores.',
			},
			{
				id: 9,
				question: '¿Qué es la confiscación de placas bajo el Artículo 151?',
				answer: 'El Artículo 151 de la Ley 9078 otorga a oficiales del Tránsito autoridad explícita para confiscar las placas del vehículo cuando la documentación es insuficiente. La confiscación de placas deja al carro varado completamente — no puedes seguir manejando. La empresa de alquiler se involucra a través de su línea de asistencia, y la resolución típicamente toma 2–4 horas con el día de alquiler ya parcialmente perdido.',
			},
			{
				id: 10,
				question: '¿Cuánto tiempo es válido IDP Companion para viajes a Costa Rica?',
				answer: 'Elige entre 1 año ($35), 3 años ($45), o 5 años ($55). La validez está atada a tu licencia de EE.UU. — si tu licencia expira, el companion expira con ella. Una compra cubre Costa Rica más México, España, Italia, Japón y cualquier otro destino que visites durante el período elegido.',
			},
		],
	},

	related: {
		heading: 'Guías relacionadas',
		lead: 'Más guías de pares de países para conductores de EE.UU. y viajeros a Costa Rica.',
		comingSoonLabel: 'Próximamente',
		items: [
			{ flagFrom: 'us', flagTo: 'mx', label: 'EE.UU. → México', status: 'En vivo', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'EE.UU. → España', status: 'En vivo', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'it', label: 'EE.UU. → Italia', status: 'En vivo', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'is', label: 'EE.UU. → Islandia', status: 'En vivo', href: '/idp-for-us-drivers-in-iceland/' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'EE.UU. → Japón', status: 'En vivo', href: '/idp-for-us-drivers-in-japan/' },
			{ flagFrom: 'gb', flagTo: 'cr', label: 'Reino Unido → Costa Rica', status: 'Próximamente' },
		],
	},

	finalCta: {
		heading: '¿Listo para obtener tu IDP Companion?',
		text: 'PDF multilingüe que incluye español, inglés, francés, italiano, alemán, portugués y otros 5 idiomas ampliamente hablados del set de la Convención de Ginebra de 1949 — generado de tu licencia real de EE.UU. en 2 minutos. Imprime en casa o desde cualquier hotel. Válido 1–5 años — cubre este viaje y los siguientes a Costa Rica, México, España, Italia, Japón. $35 / 1 año · $45 / 3 años · $55 / 5 años. Pago único, sin suscripción.',
		button: 'Iniciar solicitud',
	},

	legal: {
		disclaimerHeading: 'Aviso legal',
		disclaimer:
			'IDP Companion es un documento privado multilingüe de traducción y no está afiliado con el Ministerio de Obras Públicas y Transportes de Costa Rica (MOPT) o el Consejo de Seguridad Vial (COSEVI). IDP Companion no es un Permiso Internacional de Conducir gubernamental bajo la Convención de Ginebra de 1949. Los emisores autorizados de IDP de origen estadounidense bajo Ginebra 1949 son AAA y AATA. IDP Companion debe usarse junto con tu licencia original de EE.UU.',
		sourcesHeading: 'Fuentes',
		sources: [
			'Costa Rica Ley de Tránsito No. 9078, Artículos 91, 132–160, 146(q), 151 (costaricalaw.com, publicación oficial MOPT)',
			'Requisitos de alquiler Adobe Rent a Car (adobecar.com, actualizado abril 2025)',
			'CostaRicaLaw.com — Abogado Roger Petersen, manejo en Costa Rica con licencia extranjera',
			'Aviso de viaje de la Embajada de EE.UU. en San José (cr.usembassy.gov)',
			'Materiales de referencia AAA / AATA sobre manejo en el extranjero',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Costa Rica',
	},
};

export const usCostaRicaCopy: Record<'en' | 'es', CountryPairCopy> = { en, es };
