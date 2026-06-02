/**
 * Country-pair content: United States → Mexico.
 * Locales: en only. (ru/es intentionally skipped — irrelevant audience.)
 *
 * Unique angle: Mexico is the rare country where no government IDP is legally required for US tourists.
 * The page reframes the "do I need an IDP for Mexico" question by exposing the gap between
 * federal law (no IDP needed) and on-the-ground enforcement in Quintana Roo (documented
 * extraction incidents). IDP Companion is positioned as a friction reducer at rental desks
 * and informal stops, not as a legal compliance product.
 *
 * SEO add-ons present: tldr, lez (repurposed for enforcement zones), phrases, howTo, lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Driving in Mexico with a US License: 2026 Cancún & Tulum Guide',
		description:
			"You don't legally need an IDP to drive in Mexico — but federal law and Quintana Roo's reality are two different things. Honest 2026 guide for US drivers: Article 241, Tulum checkpoints, rental desk friction, and where $35 changes the math.",
		ogTitleShort: 'US License in Mexico: 2026 Guide',
		ogSubtitle: 'Article 241, Tulum, Cancún — the honest version',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Mexico',
	},
	lastReviewed: 'June 2026',

	hero: {
		kicker: 'US → Mexico · 2026 Guide',
		title: 'Driving in Mexico with a US License: 2026 Guide',
		lead: "You're flying to Cancún, Tulum, or Cabo and the rental car is booked. Every travel blog tells you the same thing: Americans don't need an International Driving Permit for Mexico. Technically correct. In May 2025, two American tourists were stopped at a checkpoint on Kukulkan Avenue in Tulum and charged $1,094.50 through a card reader for not producing a physical license. The same week in Cancún, three traffic officers detained an Italian tourist and demanded a $2,566 bribe to release his car. Q1 2026 r/cancun and TripAdvisor Quintana Roo threads continue to log the same pattern at the Playa del Carmen tollway exit and Cancún hotel-zone perimeter. Federal law says one thing. The streets of Quintana Roo say another.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: "No — but federal law and Quintana Roo's reality are two different things",
		text: "Mexican federal law accepts US driver's licenses for tourist driving stays under 180 days. The US State Department confirms this. What the law doesn't address: rental contracts in Spanish you can't read, checkpoint stops where officers manufacture vague violations, and document retention until informal 'fines' are paid. None of that requires an IDP — but a Spanish-translated companion document removes one of the excuses available to whoever you're talking to.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Mexico',
		lead: "Mexican federal law accepts your US license for tourist driving — no IDP is legally required. But Spanish-only rental contracts, Quintana Roo checkpoint realities, and informal verification stops make a multilingual translation document quietly valuable.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Mexico',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Legally sufficient under Mexican federal law for tourist stays under 180 days. English-only format and unfamiliar layout raise friction at smaller rental chains and informal verification stops. Spanish-only rental contracts give the agent leverage in any subsequent dispute.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual digital PDF with Spanish translation of your license details — plus 11 other languages. Reduces friction at rental desks (especially smaller chains in Cancún, Tulum, CDMX, Cabo) and informal stops. Issued in 2 minutes online. Re-printable from any hotel if the original is retained or lost.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "Mexico is one of the rare destinations where no government IDP is legally required. What most US travelers actually need: physical US driver license + IDP Companion as the Spanish translation aid + Mexican third-party liability insurance (from rental, $25–65/day) + passport + Quintana Roo Tourist Mobility Pass (free, via Guest Assist app). Total prep cost stays under $60.",
	},

	whyNotEnough: {
		heading: 'Why your US license alone creates friction in Mexico',
		lead: "It's legally sufficient — and yet, three things consistently turn smooth Mexican road trips into expensive ones.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal-vs-real reason',
				text: "Mexican federal authorities recognize a valid US driver's license for tourist stays up to 180 days. No IDP required. That's the federal answer — and it's accurate. State enforcement is where the variance happens. Quintana Roo (Cancún, Tulum, Playa, Cozumel), Baja California Sur (Cabo, La Paz), and CDMX have the highest concentration of foreign drivers and the highest concentration of documented police shakedown incidents. \"My license is technically valid\" is the right answer to the wrong question.",
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The contract reason',
				text: "Mexican rental contracts are in Spanish. English versions are sometimes provided, but the binding version is always the Spanish one. If you sign $400/week of liability you can't read, you have less leverage in any subsequent dispute — \"your license doesn't match the name in the contract,\" \"this card on file doesn't authorize this charge,\" or any of the manufactured friction tactics smaller agencies are documented to use. Spanish documentation alongside your license shortens the conversation.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The Article 241 reason',
				text: 'Article 241 of the Quintana Roo Transit Regulation grants tourists a free courtesy warning (boleta de cortesía) for the first two minor infractions per vehicle — no fine. It exists, it works, and almost no tourist knows about it. The catch: the right only protects you if you can cite it. In Spanish. By article number. To an officer. A printed copy with the article quoted in Spanish, alongside Spanish-translated ID, is the difference between citing a right and asking for one.',
			},
		],
	},

	rules: {
		heading: 'Mexico driving rules US drivers should know',
		lead: "Most rules feel familiar — same side of the road, similar speeds — but the alcohol limit is stricter than the US and Mexican TPL insurance is non-negotiable.",
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '40 km/h', note: '~25 mph in town' },
			{ icon: 'mdi:road-variant', label: 'Rural / Highway', value: '80–90 km/h', note: 'Lower than US interstate equivalents' },
			{ icon: 'mdi:speedometer-medium', label: 'Toll road (cuota)', value: '110 km/h', note: 'Cuota tolls cost more but are faster + safer' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.04% BAC', note: 'Stricter than US 0.08% — recalibrate' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned', note: 'Hands-free legal in most states' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory', note: 'All passengers, all seats' },
			{ icon: 'mdi:shield-car', label: 'Mexican TPL insurance', value: 'Required', note: 'US auto policy almost never qualifies' },
		],
	},

	fines: {
		heading: '2026 fines and informal costs in Mexico',
		lead: "Statutory fines are small — the expensive outcomes are informal extractions during stops where the officer assesses how much friction you can absorb. Both columns matter.",
		colViolation: 'Violation',
		colAmount: 'Cost',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (Quintana Roo statutory)', amount: '1,200–2,010 MXN ($60–$100)', severity: 'low', note: 'State regulation. Camera + checkpoint enforced' },
			{ icon: 'mdi:card-account-details-outline', label: 'No physical license at checkpoint', amount: 'Up to $1,094 USD reported', severity: 'high', note: 'May 2025 Tulum: charged via card reader. Digital photo refused' },
			{ icon: 'ph:warning-fill', label: '"Fine to release vehicle" (informal)', amount: '$200–$2,566 USD reported', severity: 'high', note: 'Same week May 2025: Italian tourist, Cancún, $2,566 demanded' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.04%+ BAC', amount: '2,500–5,000 MXN + jail 24–36h', severity: 'high', note: 'Plus vehicle impound. Stricter than US thresholds' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone while driving', amount: '2,200–4,400 MXN ($110–$220)', severity: 'med', note: 'Heavily enforced near tourist zones' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '800–1,500 MXN per person', severity: 'low', note: 'Tourist-zone hotspots' },
			{ icon: 'mdi:traffic-cone', label: 'Hoy No Circula violation (CDMX)', amount: '2,074 MXN + 24–48h impound', severity: 'med', note: 'Plate-day restriction. Tourist plates exempt with sticker' },
			{ icon: 'mdi:shield-car', label: 'Driving without Mexican TPL insurance + accident', amount: '$5,000–$50,000+ USD exposure', severity: 'high', note: 'US policies almost never satisfy Mexican law' },
		],
		caption: 'Statutory ranges from state Reglamentos de Tránsito. Informal extraction amounts from publicly reported tourist incidents (Ackerman Group, Deviant Behavior 2023). Tourists who can read the contract and cite Article 241 report shorter, less aggressive stops on average.',
	},

	lez: {
		heading: 'Mexico checkpoint and restriction zones — what to know',
		badge: 'Mexico-specific',
		lead: "Three zones account for the overwhelming majority of foreign-tourist enforcement incidents in Mexico. GPS routes you straight through them. Knowing which is which saves money and time.",
		zones: [
			{
				city: 'Cancún, Tulum, Playa del Carmen, Cozumel',
				name: 'Quintana Roo — tourist enforcement corridor',
				description: "Highest concentration of documented foreign-tourist police stops in Latin America. Carretera Federal 307 (Cancún to Tulum) has multiple municipal and federal checkpoints. May 2025 incidents on Kukulkan Avenue (Tulum) and central Cancún are publicly reported. Article 241 of the state Reglamento de Tránsito grants tourists a courtesy warning (no fine) for the first two minor infractions per vehicle — almost no tourist knows about this.",
				fine: '$1,094 USD reported (May 2025)',
				note: 'Get the free Tourist Mobility Pass (Pase de Movilidad Turística) via the Guest Assist app before flying — launched April 2025 by the state government specifically to reduce these incidents.',
			},
			{
				city: 'Mexico City (CDMX)',
				name: 'Hoy No Circula — plate-day restriction',
				description: 'Alternate-day driving ban based on the last digit of your license plate, active across CDMX and parts of Estado de México. Schedule rotates by day of week. Tourist plates from outside the metro are technically exempt but require a Pase Turístico (sticker) obtained at the airport or at SEMOVI offices. Without the sticker, your rental can be ticketed and impounded.',
				fine: '2,074 MXN + 24–48h impound',
				note: 'Most major rental chains in CDMX issue the Pase Turístico automatically. Confirm with the agent before driving off the lot.',
			},
			{
				city: 'Cabo San Lucas, La Paz, Tijuana corridor',
				name: 'Baja California Sur / Norte — federal roadblocks',
				description: 'Federal Police (Guardia Nacional) operate roadblocks along Carretera Federal 1 between Tijuana, Ensenada, La Paz, and Los Cabos. Stops are usually quick document checks, but extended detentions for "license verification" are reported. Less aggressive than Quintana Roo on average — but still a friction zone.',
				fine: 'Variable',
				note: 'Carry physical license, US passport, and rental contract together. Digital photos of documents are routinely refused.',
			},
		],
		tip: 'Practical rule: in Quintana Roo, install the Guest Assist app and register for the free Tourist Mobility Pass before you fly. In CDMX, confirm your rental car has a current Pase Turístico sticker before leaving the lot. In Baja, carry every document on you, never in the trunk. Multiple stops in one trip are normal — preparation compounds.',
	},

	phrases: {
		heading: 'Spanish phrases for Mexican checkpoints and rentals',
		lead: 'These phrases cover the situations that actually arise during Mexican stops and rental disputes. The Article 241 phrase is the single most useful sentence on this page if you are driving anywhere in Quintana Roo.',
		items: [
			{ phrase: 'Documentos, por favor', translation: 'Documents, please', context: "What the officer asks for first — hand over license + passport + rental contract together" },
			{ phrase: 'Soy turista de Estados Unidos', translation: "I'm a US tourist", context: 'Establishes context immediately, often softens the encounter' },
			{ phrase: 'No hablo español', translation: "I don't speak Spanish", context: 'Honest disclosure — most officers in tourist zones will switch to basic English' },
			{ phrase: 'Solicito una boleta de cortesía bajo el Artículo 241', translation: 'I request a courtesy ticket under Article 241', context: 'Quintana Roo only. The single most powerful phrase here. Cite by article number.' },
			{ phrase: 'Por favor, escriba la infracción', translation: 'Please write the infraction', context: 'Forces formal documentation. Officers asking for cash on the spot rarely want a written record.' },
			{ phrase: 'Pago en la Tesorería', translation: "I'll pay at the Treasury (municipal office)", context: 'Refuses on-the-spot payment. Per US embassy guidance, real fines are paid at the Tesorería, never roadside.' },
			{ phrase: 'Quiero hablar con el consulado', translation: 'I want to speak with the consulate', context: 'Escalation phrase. Use if you feel unsafe or extraction is escalating. US Embassy: +52-55-5080-2000.' },
			{ phrase: 'Mi licencia es válida en México', translation: 'My license is valid in Mexico', context: 'Counters the manufactured "we don\'t recognize this license" pretext — true under federal law' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Mexico (US citizens)',
		lead: "Mexico is unique: no IDP is legally required, so the preparation list is shorter than for Italy or Japan. The trade-off is that everything you do bring needs to be physical and Spanish-readable. Skipping any of it is where trips go wrong.",
		schemaName: 'How to prepare for driving in Mexico as a US citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Skip the official-IDP route — Mexico does not require it',
				text: "Mexican federal law does not require US citizens to hold an International Driving Permit for tourist stays under 180 days. Save the time and the trip to a national-level issuer. Mexico is one of the few major destinations where this step is genuinely unnecessary.",
			},
			{
				title: 'Generate IDP Companion as the Spanish translation aid',
				text: "$35 buys a multilingual digital PDF translating your US license into Spanish (plus 11 other languages). Issued in 2 minutes online, valid 1–5 years. Reduces friction at rental desks, hotel check-ins, and informal stops. Print at home or from any hotel — physical paper, not phone screens, is what Mexican counters and checkpoints expect.",
			},
			{
				title: 'Get the free Tourist Mobility Pass (Quintana Roo)',
				text: "If you're flying into Cancún, Tulum, or Cozumel, install the Guest Assist app and register for the Pase de Movilidad Turística before you fly. Free. Launched April 2025 by the state government specifically to reduce tourist police incidents. It's a tacit admission the problem is real.",
			},
			{
				title: 'Buy Mexican third-party liability insurance',
				text: "US auto policies and US credit-card CDW almost never satisfy Mexican TPL requirements. Add it through your rental ($25–$65/day depending on tier) or buy a standalone Mexican policy (Sanborn's, GNP, Qualitas) before the trip. Driving without it after an accident is a $5,000–$50,000+ exposure.",
			},
			{
				title: 'Carry physical documents + print Article 241',
				text: 'Physical US driver license + US passport + rental contract + Mexican TPL proof + (optional) IDP Companion + a printed copy of Article 241 in Spanish. Keep them all in one folder. Digital photos of your license are routinely refused at checkpoints — the May 2025 Tulum case turned on exactly this point.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Mexico — honestly',
		lead: "Most other sites on this topic bury the answer in fine print. Below is the straight version, because Mexico's math (no IDP legally required) is genuinely different from Italy or Greece.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your US license data into Spanish and 11 other widely-read languages',
				'Designed to reduce friction at rental desks (especially smaller chains in Cancún, Tulum, CDMX, Cabo) and informal verification stops',
				'Issued in minutes after you upload your license and complete our verification',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical US driver license',
				'Not legally required in Mexico — Mexican federal law accepts your US license alone',
				'Not a magic shield against police extortion — nothing on paper is that',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Mexico',
			items: [
				"At smaller rental chains in Cancún, Tulum, CDMX, Cabo where Spanish documentation lowers your friction profile",
				'When the rental contract is Spanish-only and you want matching translated ID for any subsequent dispute',
				'At Quintana Roo checkpoints where documentation in Spanish removes the "I cannot read your license" pretext',
				'Pairs naturally with the printed Article 241 phrase — Spanish ID + Spanish citation = shorter stops',
			],
		},
		needOfficial: {
			title: 'Documents Mexican law actually cares about (we are not these)',
			items: [
				"Your physical US driver's license — the actual permission to drive (no document substitutes for this)",
				'Mexican third-party liability insurance — legally required, $25–$65/day from rental or standalone',
				'US passport — carry physical, ID-matching the rental contract name',
				'FMM tourist permit — issued at border or airport, required for stays beyond ~7 days',
			],
		},
		pattern:
			"The honest pattern most US travelers in Mexico follow: skip the official-IDP route entirely (Mexico does not require it), get IDP Companion for $35 as the Spanish translation aid, get the free Tourist Mobility Pass for Quintana Roo, buy Mexican TPL insurance from your rental, print Article 241. Total documentation cost: $35. May 2025 Tulum incident on a US tourist with no Spanish documentation: $1,094.50. The math is simpler here than anywhere else we cover.",
	},

	renting: {
		heading: 'Renting a car in Mexico as a US driver',
		lead: 'Mexican rental policies are some of the least standardized in Latin America. Major chains follow federal law (no IDP required). Smaller agencies can and sometimes do require additional documentation — and Sixt Cancún has a documented insurance hard-sell pattern.',
		chains: [
			{ name: 'Hertz, Avis, Enterprise, Budget', policy: "Generally rent on US license alone per Mexican federal law. Cancún and CDMX airport branches are most consistent. Mexican TPL insurance bundled or upsold at counter — required" },
			{ name: 'Sixt (Cancún Airport)', policy: 'Widely reported as aggressive on insurance upselling — $65/day mandatory coverage tacked on at counter, doubling base rental. A US license + Spanish documentation gives you more leverage in that conversation' },
			{ name: 'Europcar, smaller regional chains', policy: 'Mexico City, Guadalajara, Oaxaca, Zacatecas branches sometimes require an IDP at counter — not because law requires it, but as internal risk-management policy. Translation document satisfies most of these requests' },
			{ name: 'Local Mexican agencies (Mex Rent A Car, etc.)', policy: 'Strict on documentation in tourist hubs. Spanish-translated companion ID measurably shortens the verification step' },
		],
		tipsHeading: 'Practical tips',
		tips: [
			'Book through a comparison platform that surfaces whether Mexican TPL is included in the price (Discover Cars makes this clear)',
			'Always select Mexican third-party liability insurance unless your card explicitly covers Mexico (Visa, Amex, etc. mostly do not)',
			'Photograph the vehicle on pickup — every scratch, dent, mileage. Email yourself the photos so timestamps are preserved',
			'Decline upsells you don\'t need (expensive GPS, additional driver, child seat) — these have high markup; Sixt Cancún is the cited offender',
			'Carry physical US driver license, US passport, rental contract, Mexican TPL insurance card, and (optional) IDP Companion together in one folder. Digital photos are routinely refused',
			'Most chains require driver age 21+ with surcharge under 25. Credit card (not debit) required for the security deposit',
			'Alamo prohibits taking US rentals across the border into Mexico — book your rental from inside Mexico, not as a cross-border drive',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without preparation — real outcomes',
		lead: 'Realistic outcomes ranked by frequency, based on actual reports from US travelers in Mexico (academic literature + tourist forums).',
		items: [
			{
				severity: 'low',
				frequency: '~70% of trips',
				label: 'Nothing happens',
				text: "You drive Cancún to Tulum to Bacalar, get waved through every checkpoint, return the car, fly home. Most trips end this way. The IDP Companion would have been \"wasted\" — until it wasn't.",
			},
			{
				severity: 'med',
				frequency: '~20% of trips',
				label: 'Friction at the rental counter',
				text: "Insurance upsell pressure ($65/day mandatory coverage), \"we don't accept this card,\" \"we need a deposit hold of 40,000 pesos,\" \"your license needs additional verification.\" Spanish documentation lowers your friction profile here — the agent's leverage drops when you can read the contract back to them.",
			},
			{
				severity: 'med',
				frequency: '~8% of trips',
				label: 'Routine checkpoint stop, 10–15 min long',
				text: 'Officer pulls you over, claims a vague infraction (unsignaled lane change, "running" a yield), asks for license and rental contract. Outcome usually fine. In Quintana Roo, citing Article 241 by article number is your free hidden weapon — print it, carry it, know it.',
			},
			{
				severity: 'high',
				frequency: '~2% of trips',
				label: 'Extraction attempt (Tulum-style)',
				text: 'Officer demands a "fine" payable on the spot via card reader, threatens detention, refuses to release documents until paid. The May 2025 Tulum case ($1,094.50) and Cancún Italian-tourist case ($2,566 demanded) are both publicly documented. No translation document prevents this entirely. What it does: removes the "I cannot read your license" excuse and signals you are a prepared tourist — academic literature correlates this with shorter stops.',
			},
			{
				severity: 'high',
				frequency: '1–2% of trips',
				label: 'Accident without Mexican TPL insurance',
				text: 'Mexican law does not recognize most US auto policies for liability. After an accident, you become personally liable for vehicle damage, the other party\'s damages, and medical costs. Exposure starts at $5,000 and routinely runs to $50,000+ in cross-border cases. The US Embassy in Mexico City handles these regularly. The first question is always: "did you have Mexican TPL?"',
			},
		],
		math: 'IDP Companion ($35) + Tourist Mobility Pass (free) + Article 241 print (free) = $35. Mexican TPL insurance is a separate non-negotiable cost regardless. May 2025 Tulum incident on a US tourist with no Spanish documentation: $1,094.50. The decision is obvious — and unlike Italy or Japan, no government IDP is legally required.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Mexico as a US citizen?',
				answer: "No. US driver's licenses are valid for tourist driving in Mexico for stays up to 180 days. The US State Department confirms this. Mexico is one of the few major travel destinations where no government-issued IDP is legally required.",
			},
			{
				id: 2,
				question: 'Then why would I want a translation companion document?',
				answer: 'Three reasons: (1) smaller rental agencies in tourist hubs sometimes ask for one as internal policy; (2) Spanish-language documentation reduces friction at police stops, particularly in Quintana Roo where extraction incidents are documented; (3) rental contracts in Mexico are Spanish-only and having matching translated ID lowers dispute risk in any subsequent disagreement.',
			},
			{
				id: 3,
				question: 'Is IDP Companion an actual International Driving Permit?',
				answer: 'No. IDP Companion is a private multilingual translation companion document — your license details rendered in Spanish and 11 other languages, designed for rental desks and informal verifications. It is not a government-issued IDP under the 1949 Geneva Convention. For Mexico, this distinction does not matter for legal compliance because Mexican federal law does not require any IDP for US tourists in the first place.',
			},
			{
				id: 4,
				question: "How fast can I get IDP Companion?",
				answer: 'Two minutes online from any device. Upload a photo of your US license, complete payment ($35 / 1yr, $45 / 3yr, $55 / 5yr), receive the multilingual PDF including Spanish translation immediately. Print at home, at the hotel, or from any internet cafe in Mexico if you generated it after arrival. Re-printable any time during the validity period.',
			},
			{
				id: 5,
				question: 'What is Article 241 and why does it matter?',
				answer: 'Article 241 of the Quintana Roo Reglamento de Tránsito requires that tourists who commit minor traffic violations receive a *boleta de cortesía* — a courtesy warning with zero fine — for the first two infractions per vehicle. It applies in Cancún, Tulum, Playa del Carmen, Cozumel, and across Quintana Roo state. Almost no tourist knows about this. Print it, carry it, cite it by article number in Spanish (see our phrases section).',
			},
			{
				id: 6,
				question: 'What about the Tourist Mobility Pass that launched in April 2025?',
				answer: 'The Pase de Movilidad Turística is a free Quintana Roo state government digital permit, issued through the Guest Assist app, that documents you as a legitimate tourist driver. Launched April 2025 by the state government specifically to reduce tourist police incidents. It is not mandatory, but it is free and useful — get it before you fly into Cancún, Tulum, or Cozumel.',
			},
			{
				id: 7,
				question: 'Do I need a Temporary Import Permit (TIP) for my own car?',
				answer: 'Only if you drive your own US-registered car beyond Baja California or the northern border free zone (~20–40 km strip). For rental cars picked up inside Mexico, no TIP is needed. The TIP requires a refundable deposit ($200–$400) and must be obtained at the border or online via Banjercito before crossing.',
			},
			{
				id: 8,
				question: 'Does my US auto insurance work in Mexico?',
				answer: "Almost never for liability — Mexican law does not recognize most US policies for the legally required third-party liability coverage. You need Mexican TPL insurance from your rental ($25–$65/day depending on tier) or a standalone Mexican policy from Sanborn's, GNP, or Qualitas. Verify in writing before relying on US-based credit card CDW or your home auto policy.",
			},
			{
				id: 9,
				question: 'What should I do if a Mexican police officer asks for a bribe?',
				answer: "US embassy guidance: remain calm, request a written ticket payable at the Tesorería (municipal treasury), and note the officer's name and badge number. Use the phrase \"Pago en la Tesorería\" (see our phrases section). If safety is at risk, comply and report afterward to the US Embassy (+52-55-5080-2000). The Tourist Mobility Pass app also has an in-app reporting feature for incidents in Quintana Roo.",
			},
			{
				id: 10,
				question: 'Can I use a digital photo of my US license instead of carrying the physical card?',
				answer: 'No. The May 2025 Tulum incident directly involved officers refusing a digital copy and demanding the physical card — which the tourists could not produce, and which was the trigger for the $1,094.50 charge via card reader. Always carry the physical license. Digital photos are routinely refused at Mexican checkpoints.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travelers heading abroad.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'US → UAE', status: 'Live', href: '/idp-for-us-drivers-in-uae/' },
		],
	},

	finalCta: {
		heading: 'Renting in Cancún, Tulum, or doing a Yucatán road trip?',
		text: '$35 buys a Spanish-translated companion that quietly removes one of the excuses available to whoever you are talking to. Pair it with the free Tourist Mobility Pass and a printed Article 241 — total prep cost stays under $40.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Government of Mexico, the Government of Quintana Roo, the Mexican Federal Police (Guardia Nacional), the Mexican Tesorería, or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in the United States, authorized issuers of Geneva 1949 IDPs are AAA and AATA. Mexican federal law does not require US citizens to carry an IDP for tourist stays under 180 days — IDP Companion is purchased as a translation aid for friction reduction at rental desks and informal verifications, not for legal compliance. It must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			"US Department of State / USAGov: International Driver's License guidance for US citizens",
			'American Automobile Association (AAA): IDP issuance policy and country requirements',
			'American Automobile Touring Alliance (AATA): IDP requirements and FAQs',
			'Ackerman Group: Mexico — US Driver Reports of Police Extortion (September 2025)',
			'Deviant Behavior (Taylor & Francis, 2023): "Managing la mordida — Gringo Tourism, Police Shakedowns, and Traffic Ticket Bribery in Quintana Roo, Mexico"',
			'MexLaw: Traffic Regulations, Fines, and Bribes in Quintana Roo (August 2025)',
			'Government of Quintana Roo: Tourist Mobility Pass / Pase de Movilidad Turística announcement (April 2025)',
			'Reglamento de Tránsito del Estado de Quintana Roo, Article 241 — Boleta de Infracción de Cortesía',
			'Mexican federal guidance on FMM (Forma Migratoria Múltiple) and TIP (Temporary Import Permit) requirements',
			'AutoSlash: Can You Drive a Rental Car into Mexico? (October 2025)',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Mexico',
	},
};

export const usMexicoCopy: Record<'en', CountryPairCopy> = { en };
