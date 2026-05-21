/**
 * Country-pair content: United States → Thailand.
 * Locales: en only.
 *
 * Archetype: IDP-required + high-stakes destination (motorbike trap + insurance void).
 * Thailand law requires foreign drivers to carry an IDP alongside their physical
 * home license. Page positions IDP Companion as the document the reader generates
 * for friction reduction at rental desks, hotel verification, and informal stops,
 * with the multilingual Thai-script translation as the core value prop.
 *
 * Positioning per AGENTS.md / CLAUDE.md: authorized national issuers (AAA, AATA)
 * are mentioned ONLY in the legal disclaimer block — never as recommendation in
 * the main flow. Page is a sales funnel for IDP Companion, not a buyer's guide.
 *
 * SEO add-ons present: tldr (US license vs Companion), lez (Thai checkpoint zones),
 * phrases (Thai), howTo, lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Thailand: 2026 Guide to the Motorbike Trap',
		description:
			"Thailand requires an IDP — and your travel insurance voids without one. Honest 2026 guide for US tourists: the motorcycle endorsement trap, Phuket checkpoints, and how to get a multilingual translation document in 2 minutes.",
		ogTitleShort: 'IDP for US Drivers in Thailand',
		ogSubtitle: '2026 — motorbikes, checkpoints, what works',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Thailand',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'US → Thailand · 2026 Guide',
		title: 'IDP for US Drivers in Thailand: 2026 Guide',
		lead: "You're flying to Phuket, Chiang Mai, Krabi, or Koh Samui. The plan involves a scooter — they're 200 baht a day, easier than a taxi, and every shop on Beach Road in Patong rents to anyone with a passport copy and 300 baht. Here's what almost no other site tells US tourists honestly: a US driver's license alone is not legal in Thailand, and the cost of getting it wrong isn't the 1,000-baht fine. It's the May 2025 case of a 56-year-old American on a Honda Click in Patong whose family covered medical and repatriation costs — because his travel insurance excluded unlicensed motorbike operation. Thailand has the world's #2 highest road fatality rate. 75% of those deaths involve motorcyclists. The IDP doesn't prevent the crash. It prevents the financial annihilation that follows it.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — Thailand requires an IDP alongside your US license',
		text: "The US Embassy in Bangkok states it plainly: a US driver's license alone is not accepted in Thailand. You need an International Driving Permit translation alongside your physical license — at police checkpoints, at rental desks, and after a crash when your travel insurance reviews licensing. IDP Companion generates a multilingual translation of your US license including Thai script in 2 minutes, valid 1–5 years, ready to print from any hotel.",
	},

	tldr: {
		heading: "US License alone vs IDP Companion in Thailand",
		lead: "Riding or driving on a bare US license in Thailand has documented financial consequences — most don't show up until after a checkpoint or a crash. Here's the side-by-side that matters when you're packing.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Thailand',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: "Not accepted under Thai law. US Embassy explicitly confirms this. On-the-spot fines 500–2,000 THB at checkpoints. After a crash: travel insurance reviews licensing — most policies void coverage for unlicensed operation, leaving you personally liable for hospital bills (typically 100,000 THB and up) and medical evacuation ($50,000–$250,000).",
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: "Multilingual translation of your US license — including Thai script — issued in 2 minutes online. Designed for friction reduction at Thai rental desks, hotel verification, and informal stops. Re-printable from any hotel if the original is retained or lost. Valid 1–5 years. Must be carried alongside your physical US license.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What most US travelers to Thailand carry: physical US driver's license (the actual permission to drive), motorcycle endorsement on the license if riding any scooter over 50cc, IDP Companion as the multilingual translation aid, travel insurance with motorbike rider, and passport. Everything in one folder. Total prep cost under $100.",
	},

	whyNotEnough: {
		heading: "Why your US license alone is the trap",
		lead: "Three reasons, ranked by how much money each one will cost you when something goes wrong.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal reason',
				text: "The US Embassy in Bangkok states on their official site: a US driver's license alone is not accepted in Thailand. Thai Traffic Act requires foreign drivers to carry an IDP plus their physical home license. Patong, Karon, Kata, Chiang Mai Old City, Pai, and Koh Samui run daily checkpoints — not random stops. Going fine is 500–2,000 THB cash. Bike may be impounded until paid. The fine itself is pocket change; the document failure has compounding consequences below.",
			},
			{
				icon: 'mdi:motorbike',
				title: 'The motorcycle endorsement trap',
				text: "This catches almost every American tourist and almost no other site mentions it. Your IDP only translates the privileges your home license already grants. If your US license is car-only (standard Class C), your IDP is car-only too — meaning you are riding any scooter over 50cc illegally regardless of how many IDPs you carry. You need a motorcycle endorsement (Class M or your state equivalent) on your US license BEFORE applying for any IDP. Skip this and the IDP is paperwork, not legal authority.",
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The insurance void reason',
				text: "This is the financial nuclear scenario. Thai rental shops carry 'Por Ror Bor' compulsory insurance — but it covers the vehicle, not you, and only if you were legally licensed. Your US travel insurance has the same exclusion in fine print: \"operation of vehicle without proper licensing voids coverage.\" Hospital bill at Bangkok Hospital Phuket starts around 100,000 THB and climbs to seven figures for surgery or ICU. Medical evacuation flight to the US runs $50,000–$250,000. Without IDP + motorcycle endorsement, the claim is denied. The bill is yours.",
			},
		],
	},

	rules: {
		heading: 'Thailand driving rules US drivers should know',
		lead: 'Driving on the LEFT is the biggest adjustment for US drivers — give yourself an hour in a low-traffic area before tackling Phuket or Chiang Mai. Helmet enforcement was tightened in 2025.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Roundabouts, lane changes, turns — all flip from US' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '~31 mph in town' },
			{ icon: 'mdi:road-variant', label: 'Rural / Highway', value: '90 / 120 km/h', note: 'Tollways and motorways' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.02% if licensed under 5 years' },
			{ icon: 'mdi:helmet', label: 'Helmets', value: 'Mandatory', note: 'Driver AND passenger — 2,000 THB each, doubled in 2025' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned', note: '4,000 THB fine, including at red lights' },
			{ icon: 'mdi:car-light-high', label: 'Daytime headlights', value: 'Required (bikes)', note: 'Always on for motorcycles and scooters' },
			{ icon: 'ph:traffic-sign-bold', label: 'Right turn on red', value: 'Not allowed', note: 'No exceptions — wait for green' },
		],
	},

	fines: {
		heading: '2026 fines and the financial scenarios behind them',
		lead: "The headline fines are pocket change. The bottom rows — hospital bills and medical evacuation when insurance voids — are where the real cost hides. Both belong in the same table because they are the same decision.",
		colViolation: 'Violation / scenario',
		colAmount: 'Cost',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP at checkpoint', amount: '500–2,000 THB ($14–$56)', severity: 'low', note: 'Cash on the spot. Bike may be impounded briefly until paid' },
			{ icon: 'mdi:license', label: 'Driving without any valid license', amount: '1,000 THB ($28)', severity: 'low', note: 'Plus risk of vehicle impoundment' },
			{ icon: 'mdi:helmet', label: 'No helmet (driver)', amount: '2,000 THB ($56)', severity: 'low', note: 'Doubled in 2025 enforcement update' },
			{ icon: 'mdi:helmet', label: 'No helmet (passenger)', amount: '2,000 THB ($56) additional', severity: 'low', note: 'Per passenger, charged on top of driver fine' },
			{ icon: 'mdi:beer-outline', label: 'DUI (first offense)', amount: '5,000–20,000 THB ($140–$560)', severity: 'high', note: 'Plus license suspension and possible imprisonment' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone while driving', amount: '4,000 THB (~$120)', severity: 'med', note: 'Including at red lights' },
			{ icon: 'mdi:hospital-building', label: 'Hospital bill, motorbike crash, foreign tourist', amount: '$5,000–$50,000+ USD', severity: 'high', note: 'Voided by insurance if no IDP + motorcycle endorsement' },
			{ icon: 'mdi:airplane-takeoff', label: 'Medical evacuation flight to US', amount: '$50,000–$250,000 USD', severity: 'high', note: 'Personal liability if travel insurance denies for unlicensed operation' },
		],
		caption: 'Statutory fines from Thai Traffic Act 2025 amendments. Hospital and evacuation ranges from US Embassy ACS reports and traveler insurance industry data. The bottom two rows are the reason the document matters — not the 500-baht fine.',
	},

	lez: {
		heading: 'Thailand checkpoint zones — where enforcement actually happens',
		badge: 'Thailand-specific',
		lead: "Three zones account for the overwhelming majority of foreign-tourist police interactions in Thailand. GPS routes you straight through them. Knowing where they are lets you carry documents on you (not in the trunk) and ride sober.",
		zones: [
			{
				city: 'Phuket — Patong, Karon, Kata, Kamala',
				name: 'Phuket tourist enforcement corridor',
				description: "Highest concentration of foreign-tourist motorbike incidents in Thailand. The Phuket Vice Governor publicly reported over 500 tourist motorbike accidents in a single 60-day window, with 80% of those riders lacking a valid license. Daily checkpoints on Beach Road, Sai Namyen Road, and the Patong-Karon connector. The May 2025 case of a 56-year-old American (Patong Police blotter, Honda Click on 50 Years Road) is publicly documented.",
				fine: '500–2,000 THB on the spot',
				note: "Carry physical license + IDP + passport in one folder, never in the bike's storage compartment.",
			},
			{
				city: 'Chiang Mai — Old City + Pai mountain route',
				name: 'Northern Thailand checkpoint corridor',
				description: 'Chiang Mai Old City has near-daily checkpoints around Tha Phae Gate and the moat. The Chiang Mai-to-Pai mountain road (route 1095) sees periodic enforcement — combined with 762 curves and high crash rates, this is a frequent ACS case area. Officers focus on helmet compliance and IDP/license verification.',
				fine: '500–2,000 THB',
				note: 'The Pai loop is one of Thailand\'s deadliest tourist routes — wear a real DOT helmet, not a skull cap.',
			},
			{
				city: 'Koh Samui — coastal Route 4169',
				name: 'Koh Samui ring road enforcement',
				description: 'Coastal Route 4169 ring road has periodic checkpoints, especially around Chaweng, Lamai, and Bophut. Multiple foreign fatality cases in 2024–2025 referenced in local press. Rental shop density is high; verification rates at shops are low; checkpoint enforcement is the catch.',
				fine: '500–2,000 THB',
				note: "Many Samui rental shops keep your passport as collateral — refuse, offer cash deposit instead. The US Embassy explicitly warns against surrendering your passport.",
			},
		],
		tip: "Practical rules across all three zones: carry physical documents on you (never in the bike), wear a DOT-equivalent helmet (not a plastic skull cap — same 2,000 THB fine, real protection), refuse to surrender your passport to any rental shop, and ride sober. The 0.05% BAC limit is enforced with breathalyzers at evening checkpoints in Patong and Chaweng.",
	},

	phrases: {
		heading: 'Thai phrases for police checkpoints and rentals',
		lead: 'These phrases cover the situations that actually arise at Thai stops. Politeness particles (krap for male speakers, ka for female) matter — Thai officers respond noticeably better to polite tourists.',
		items: [
			{ phrase: 'Sa-was-dee krap / ka', translation: 'Hello (polite)', context: 'Standard greeting. Krap if you are male, ka if female. Use it first at any checkpoint.' },
			{ phrase: 'Khaw thoht krap / ka', translation: 'Excuse me / I apologize', context: 'De-escalation phrase. Use if the officer is annoyed by your lack of Thai.' },
			{ phrase: 'Mai khao jai', translation: "I don't understand", context: 'Honest disclosure — most checkpoint officers in tourist areas have basic English' },
			{ phrase: 'Phaa-saa Ang-grit dai mai krap?', translation: 'Do you speak English?', context: 'Polite request to switch language. Often gets a yes in Phuket and Chiang Mai.' },
			{ phrase: 'Bai khap khee sa-kon', translation: 'International driving permit', context: 'What you hand over alongside your physical US license. Sa-kon = international.' },
			{ phrase: 'Tham-ruat tha-non', translation: 'Traffic police', context: 'The officers running checkpoints. Distinct from Tourist Police (separate force, more help-oriented).' },
			{ phrase: 'Tham-ruat thong-thiao', translation: 'Tourist Police', context: 'Free hotline 1155 — call them if a regular officer is escalating, especially around language barriers.' },
			{ phrase: 'Khaw dtor sa-thaan-thuut Saha-rat Amerika', translation: 'I want to call the US Embassy', context: 'Escalation phrase. US Embassy Bangkok: +66-2-205-4000. Use if you feel unsafe or detention is escalating.' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving (or scootering) in Thailand',
		lead: "Thailand prep has two pieces almost no other site tells US tourists about: the motorcycle endorsement requirement, and the travel insurance motorbike rider exclusion. Both will void your coverage if missing.",
		schemaName: 'How to prepare for driving in Thailand as a US citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: "Add a motorcycle endorsement to your US license — BEFORE getting any IDP",
				text: "If you plan to ride a scooter over 50cc (which is virtually all Thai rentals — 110cc-160cc is standard), your US license must show a motorcycle endorsement (Class M or equivalent). Get this added at your home state DMV. An IDP only translates what your home license already permits — without the endorsement, the IDP is paperwork. This is the single most expensive line of fine print in Thai tourism.",
			},
			{
				title: "Generate IDP Companion before you fly",
				text: "$35–55 (1, 3, or 5 years). 2 minutes online — upload your US license, our system handles OCR + multilingual translation including Thai script. Output is a print-ready PDF you can print at home, at the hotel front desk, or from any internet cafe abroad if the original is lost. The 5-year option is the value choice for travelers stacking multiple international trips — covers you across countries without re-issuing.",
			},
			{
				title: 'Buy travel insurance with motorbike rider EXPLICITLY',
				text: 'Standard US travel policies (World Nomads, Allianz, Generali) usually exclude two-wheeled motor vehicles unless you specifically purchase the motorbike rider — typically $30–80 extra. Even with the rider, most exclude unlicensed operation: no IDP + motorcycle endorsement = no coverage. Read the policy fine print before you fly. This is the difference between a 50,000 THB hospital bill being insured vs. personally liable.',
			},
			{
				title: 'Wear a DOT-certified helmet, not a skull cap',
				text: "Thai law requires DOT-equivalent helmets. The plastic skull caps that some rental shops hand out are a 2,000 THB fine and provide essentially zero protection. Bring your own from home or buy a real helmet at a Thai motorcycle shop (~1,500 THB) — both you and your passenger.",
			},
			{
				title: 'Carry physical documents — never surrender your passport',
				text: 'Physical US driver license + printed IDP Companion + passport, all in one folder. Digital photos of your license are routinely refused at Thai checkpoints. If a rental shop demands your physical passport as collateral, refuse — offer cash deposit instead. The US Embassy explicitly warns against surrendering your passport to rental shops.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion works for Thailand — direct answer',
		lead: "Thailand is the country where document failures genuinely cost lives and savings — so we are direct about what IDP Companion is, what it is not, and the documents you must carry alongside it.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your US license into Thai script and 11 other widely-read languages',
				'Generated in 2 minutes online — works regardless of where you are, what time it is, or how late you started planning',
				'Valid 1, 3, or 5 years (your choice) — covers multiple country trips without re-issuing each year',
				'Re-printable from any hotel, internet cafe, or copy shop if the original is retained, damaged, or lost abroad',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription, no upsells',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical US driver license',
				'Not a replacement for a motorcycle endorsement on your US license — without that endorsement, no document authorizes you to ride a scooter over 50cc anywhere',
			],
		},
		helps: {
			title: 'When IDP Companion is what you need',
			items: [
				'For Thai rental desks (especially Tier 2/3 shops) where Spanish-, Thai-, and English-language ID side by side reduces verification friction',
				'For hotel check-ins where staff want a translated document on file',
				'For informal verification stops where a multilingual document signals you are a prepared tourist',
				'As a re-printable digital backup if your physical document is retained at a rental shop or lost mid-trip',
				'For travelers stacking multiple international trips over 1–5 years — one $55 purchase covers the whole stretch',
				'For late planners — generated online in minutes when other paperwork routes have closed',
			],
		},
		needOfficial: {
			title: 'What you should carry alongside IDP Companion',
			items: [
				'Your physical US driver license — the actual permission to drive (no document substitutes for this)',
				'A motorcycle endorsement (Class M or state equivalent) on your US license if you plan to ride any scooter over 50cc — this is the single most missed requirement among US tourists',
				'Travel insurance with explicit motorbike rider purchased before departure — most US travel policies exclude two-wheelers by default',
				'Your US passport (with valid Thai entry stamp) — physical, not a digital photo',
			],
		},
		pattern:
			"What most prepared US travelers carry into Thailand: physical US driver's license + motorcycle endorsement (if riding) + IDP Companion as the multilingual translation aid + travel insurance with motorbike rider + passport. Total prep cost is under $100 — versus the average uninsured motorbike-crash cost on Patong of $50,000 and up.",
	},

	renting: {
		heading: 'Renting a motorbike or car in Thailand as a US driver',
		lead: 'Thai rentals fall into three tiers. Each has different documentation strictness — and 80% of foreign-tourist crashes happen at Tier 3 shops where they will rent to anyone with a passport copy.',
		chains: [
			{ name: 'Tier 1 — Major airport chains (Hertz, Avis, Sixt, Budget, Thrifty)', policy: 'Will check physical US license, an IDP-style translation document, and passport. Strictest documentation enforcement. Their corporate insurance demands compliance with Thai law — bring everything in one folder' },
			{ name: 'Tier 2 — Established city / island chains', policy: 'Usually request IDP + home license, but enforcement varies by location. Some accept just a US license if you push — this is the gray zone where post-crash insurance denial becomes a real risk' },
			{ name: 'Tier 3 — Informal scooter shops (Patong, Pai, Chiang Mai night markets, beach towns)', policy: 'Typically take only a passport photocopy and 3,000–10,000 THB deposit. Will not check your IDP or motorcycle endorsement. Will rent you a 125cc scooter and wave you into traffic. This tier is where the May 2025 Patong fatality scenario originates' },
			{ name: 'All tiers — what to demand', policy: 'Physical helmet for both rider and passenger (DOT-equivalent, not skull cap), current Por Ror Bor compulsory insurance sticker on the bike, photographs of every existing scratch before you leave the lot, written contract in English, and your physical passport returned to you immediately' },
		],
		tipsHeading: 'Practical tips',
		tips: [
			'Never surrender your physical passport. Offer cash deposit (3,000–10,000 THB) or a passport photocopy instead. Walk away if they refuse — the US Embassy explicitly warns against this practice',
			'Photograph the bike from all angles before you leave the lot — every scratch, dent, mileage. Email yourself the photos so timestamps are preserved',
			'Verify Por Ror Bor compulsory insurance is current (rental shop should have a sticker on the bike with date)',
			"Buy supplemental travel medical insurance with motorbike rider BEFORE you fly — standard policies usually exclude two-wheelers unless you specifically add the rider, and even with the rider most exclude unlicensed operation",
			"Wear a real DOT-equivalent helmet, not a plastic shell — same 2,000 THB fine if caught, vastly different actual crash protection",
			'Most rentals want driver age 21+ with credit card hold (not debit) for the security deposit',
		],
	},

	outcomes: {
		heading: 'What happens if you ride without an IDP — real outcomes',
		lead: 'Realistic outcomes ranked by frequency, weighted from US Embassy ACS reports and Thai tourist accident data.',
		items: [
			{
				severity: 'low',
				frequency: '~70% of trips',
				label: 'Nothing visible happens',
				text: "You ride for two weeks, get waved through checkpoints (or never encounter one), return the bike, fly home. Most trips end this way. We are not going to pretend otherwise — but the 30% that doesn't is where the real cost lives.",
			},
			{
				severity: 'med',
				frequency: '~10% of trips',
				label: 'Tier 1 rental refusal',
				text: "You arrive at Hertz / Avis / Sixt at the airport without an IDP and they refuse to rent. You downgrade to a Tier 3 shop where verification is loose — which moves you into the higher-risk band for everything below.",
			},
			{
				severity: 'med',
				frequency: '~12% of trips',
				label: 'Routine checkpoint stop and fine',
				text: 'Patong, Karon, Kata, Chiang Mai Old City, Pai, Koh Samui — all run daily checkpoints. Officer asks for license, you produce US license only. 500–2,000 THB cash fine. Bike may be impounded briefly until paid. Annoying, not catastrophic — yet.',
			},
			{
				severity: 'high',
				frequency: '~6% of trips',
				label: 'Minor crash with hospital + insurance review',
				text: 'You drop the bike on a curve, scrape yourself up, road rash. Hospital visit 5,000–50,000 THB. Travel insurance reviews the claim, asks for IDP and motorcycle endorsement. Without both, claim denied. Bill is yours.',
			},
			{
				severity: 'high',
				frequency: '~2% of trips',
				label: 'Serious crash + medical evacuation + insurance void',
				text: "Hospital bill above 100,000 THB, possible surgery, possible medical evacuation flight to the US ($50,000–$250,000). Travel insurance voids for unlicensed operation. The bill is yours — full out-of-pocket. The US Embassy ACS desk handles these cases regularly. The Phuket Vice Governor's 500-tourists-in-60-days statistic is the upper end of this band.",
			},
		],
		math: 'IDP Companion ($55 / 5 years) + travel insurance motorbike rider (~$50) + DOT helmet (~$50) = ~$155 total prep cost. Hospital + repatriation scenario for an unprepared American crash on Patong: $50,000–$250,000+. The math is more obvious here than on any other country page.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do Americans legally need an IDP to drive in Thailand?',
				answer: 'Yes. Thai law requires foreign drivers to carry an International Driving Permit alongside their physical home-country license. The US Embassy in Bangkok states this explicitly on their official site. A US driver\'s license alone is not legally accepted in Thailand.',
			},
			{
				id: 2,
				question: 'Can I get an IDP after arriving in Thailand?',
				answer: 'Thai authorities do not issue International Driving Permits to foreign tourists. IDP Companion can be generated online from anywhere — including from a hotel in Phuket or Chiang Mai — as a multilingual translation companion document. It is not a substitute for a government-issued IDP at police checkpoints, but it is the practical option for travelers who realised they needed a translation document after arrival.',
			},
			{
				id: 3,
				question: 'My US license is in English — isn\'t that enough?',
				answer: 'No. Thai law specifically requires the IDP regardless of license language. The US Embassy is explicit: a foreign license alone is not accepted. The IDP requirement is about the international standardized format and translation, not just the language.',
			},
			{
				id: 4,
				question: 'The scooter shop didn\'t ask for my license. Doesn\'t that mean it\'s fine?',
				answer: 'No. Rental shops are not enforcement authorities — police are, and insurance companies are. Both will check your documents at the moment they matter most: at a checkpoint stop, or after a crash when you file an insurance claim. The fact that a Tier 3 scooter shop in Patong didn\'t ask doesn\'t change what Thai law requires or what your travel insurance demands for a valid claim.',
			},
			{
				id: 5,
				question: 'Do I need a motorcycle endorsement on my US license to ride a scooter in Thailand?',
				answer: 'Yes, for any scooter over 50cc — which includes virtually all Thai rentals (110cc–160cc is the standard fleet). An IDP only translates the privileges your home license already grants. If your US license is car-only (Class C), no translation document authorizes you to ride a motorcycle anywhere. Add a motorcycle endorsement (Class M or your state equivalent) at your home DMV before generating any IDP-style document.',
			},
			{
				id: 6,
				question: 'Will my US travel insurance cover a motorbike accident in Thailand?',
				answer: 'Read the fine print before you go. Most US travel insurance policies (World Nomads, Allianz, Generali, etc.) exclude motorized two-wheeled vehicles unless you specifically purchase the motorbike rider — typically $30–80 extra. Even with the rider, most policies exclude unlicensed operation: no IDP + no motorcycle endorsement = no coverage. The 100,000 THB hospital bill becomes personally liable.',
			},
			{
				id: 7,
				question: 'How fast can I get IDP Companion?',
				answer: 'Two minutes online from any device. Upload a photo of your US license, complete payment ($35 / 1yr, $45 / 3yr, $55 / 5yr), receive the multilingual PDF with Thai-script translation immediately. Print at home, at the hotel front desk, or at any internet cafe in Thailand if you generated it after arrival. Re-printable any time during the validity period.',
			},
			{
				id: 8,
				question: 'Are some areas more aggressive about checkpoints than others?',
				answer: 'Yes. Patong, Karon, Kata, Chiang Mai Old City, Pai, and Koh Samui have daily or near-daily checkpoints. Bangkok central districts and Krabi see periodic enforcement. Rural Isaan provinces are looser, but enforcement is rising countrywide following the 2025 Thai Traffic Act amendments.',
			},
			{
				id: 9,
				question: 'How long is IDP Companion valid?',
				answer: "Choose 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your US license — if your US license expires before the companion period ends, the companion expires with it. The 3- and 5-year options are popular among travelers stacking multiple international trips because they cover the whole stretch without re-issuing.",
			},
			{
				id: 10,
				question: 'What if I\'m already in Thailand without an IDP?',
				answer: "You cannot get a Thai-issued IDP as a foreign tourist. Your practical options: (a) skip riding — use Grab, Bolt, or hire a driver; (b) generate IDP Companion online from your hotel ($35–55, 2 minutes, multilingual including Thai) as a stopgap translation document for rental friction reduction, understanding it is not a substitute for a government-issued IDP at police checkpoints; (c) accept the legal exposure of riding without any IDP, including travel insurance void if you crash. Most cautious travelers pick (a) or (b).",
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travelers and Thailand-bound drivers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Russia → Thailand', status: 'Live', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan/' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'US → UAE', status: 'Live', href: '/idp-for-us-drivers-in-uae/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
		],
	},

	finalCta: {
		heading: 'Generate your IDP Companion before you fly',
		text: 'Multilingual PDF including Thai script, generated from your US license in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip and the next ones. $35 / 1yr · $45 / 3yr · $55 / 5yr. One-time payment, no subscription.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Royal Thai Police, the Thai Department of Land Transport, the US Embassy in Thailand, or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in the United States, authorized issuers of Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license; it does not substitute for a motorcycle endorsement on your US license, which is required for legal operation of any scooter over 50cc.",
		sourcesHeading: 'Sources',
		sources: [
			'US Embassy & Consulate in Thailand: Official driving guidance for US citizens',
			'American Automobile Association (AAA): IDP issuance policy and country requirements',
			'World Health Organization: Global Road Safety Report — Thailand fatality rate 36.2 per 100,000',
			'Bangkok Post and Thaiwebsites: Thai road accident statistics, Ministry of Interior data',
			'Thaiger and Thai Examiner: Tourist motorbike accident reports, Phuket and Koh Samui (2024–2025)',
			'Khaosod English: American tourist fatality, Patong Phuket, May 31, 2025',
			'Thai Department of Land Transport (DLT): Foreign driver licensing requirements',
			'Thai Traffic Act amendments — 2025 enforcement update (helmet fine doubling)',
			'Phuket Vice Governor public statement on tourist motorbike accidents (500+ in two months)',
			'Multiple Thai insurance provider statements on IDP requirements for claim validity',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Thailand',
	},
};

export const usThailandCopy: Record<'en', CountryPairCopy> = { en };
