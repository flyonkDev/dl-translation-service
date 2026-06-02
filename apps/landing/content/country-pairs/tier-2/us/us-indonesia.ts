/**
 * Country-pair content: United States → Indonesia (Bali focus).
 * Tier 2. Locales: en only (US-origin default).
 *
 * Killer angles for Indonesia:
 *  - IDP legally REQUIRED by Indonesian Traffic Law No. 22 of 2009 for all
 *    foreign tourist drivers — and the insurance void argument is bigger
 *    than the IDR 1,000,000 fine: travel insurance excludes injuries
 *    sustained while violating local law, Bali medevac = $50k–$100k.
 *  - LEFT-HAND TRAFFIC complete reversal for US drivers.
 *  - Governor Koster Circular Letter No. 7 of 2025 — formalised stricter
 *    weekly razzia (planned police roadblock) enforcement in tourist
 *    corridors (Canggu, Kuta, Seminyak, Ubud).
 *  - Category A motorcycle endorsement requirement — US car-only licence
 *    does NOT cover scooters in Indonesia. Check before booking.
 *  - 30-day Denpasar tourist licence at police station has been
 *    DISCONTINUED — many travel forums haven't caught up.
 *
 * PDF language note: Bahasa Indonesia is NOT on the IDP Companion template.
 * Bali tourist corridors (Canggu, Kuta, Seminyak, Ubud) operate in English
 * for rental and razzia interactions with foreign tourists. Reframe
 * through English, which IS on the PDF.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Indonesia IDP for US Drivers — Bali Razzia, Voids Medevac',
		description:
			"Indonesian law requires US tourists to carry an IDP. Bali razzia checkpoints fine $65 for non-compliance — but the real risk is insurance: no IDP = voided medevac coverage, and Bali-to-US hospital evac runs $50–100k. Get IDP Companion in 2 min — $35.",
		ogTitleShort: 'US Drivers in Bali: IDP Required',
		ogSubtitle: 'Left-hand traffic. Weekly razzia. No IDP = no insurance.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Indonesia',
	},
	lastReviewed: 'June 2026',

	hero: {
		kicker: 'US → Indonesia · Bali · 2026 Guide',
		title: 'IDP for US Drivers in Bali: Why the Insurance Clause Beats the $65 Fine',
		lead: "Cut to it: Indonesia legally requires US drivers to carry an IDP. Bali razzia checkpoints fine IDR 1,000,000 (~$65) for non-compliance, but the real financial risk is insurance — travel-insurance medevac exclusion triggers from the moment an officer confirms you were riding without valid documentation, and Bali-to-US hospital evac runs $50,000–100,000. The scooter rental in Canggu costs 80,000 rupiah a day — about five dollars. The shop photographs your California licence and waves you onto Jalan Batu Bolong without mentioning an IDP. Three days clean. On the fourth morning there's a razzia at the junction near Deus Ex Machina — a police checkpoint that materialises at 9am on a road you've been riding daily. Bali razzia data from r/bali (Q1 2026 threads) clusters the highest-frequency stops at Canggu (Batu Bolong, Berawa), Seminyak (Petitenget), Ubud (Hanoman/Monkey Forest junction), and Kuta (Jl. Legian). The officer asks three things: STNK (vehicle registration), home licence, IDP. The five-dollar scooter and the missing sixty-five dollar document are not the financial story here.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — Indonesian Traffic Law No. 22 of 2009 requires it for all foreign tourists',
		text: 'Indonesian law requires foreign tourists operating any motorised vehicle to carry both their home-country licence and a valid IDP — cars, scooters, motorbikes equally, no exceptions for US citizens. The fine for non-compliance is IDR 250,000–1,000,000 collected on the spot at the razzia checkpoint. The harder consequence is your travel insurance: standard US travel-insurance policies exclude injuries sustained while violating local law. Riding without an IDP in Bali is violating local law. Medical evacuation from Bali to a US hospital runs $50,000–$100,000 — uncovered if the documentation was missing.',
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in Indonesia',
		lead: 'Indonesia is one of the few destinations where the IDP is legally required, not merely recommended. The insurance consequence makes the legal requirement the smaller of the two reasons to carry one.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Indonesia',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Not sufficient — IDP required by Indonesian law for all foreign tourists. Car licence alone does not legally cover riding a scooter (Category A motorcycle endorsement required). No IDP means your travel-insurance policy excludes coverage if you\'re injured in an accident.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in 12 languages including English — the working language at every Bali tourist-corridor rental shop and razzia checkpoint. Reflects the vehicle categories on your US licence (car / motorcycle). Satisfies Indonesian documentation expectations alongside your physical US licence.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry: original US driver licence (physical — no photocopies), passport with Indonesian entry stamp, IDP Companion, vehicle STNK (provided by the rental shop). If riding a scooter, confirm your US licence carries a motorcycle (M / MC) endorsement BEFORE you book — Indonesian law requires the vehicle category to match.',
	},

	whyNotEnough: {
		heading: 'Why your US licence alone is not enough in Indonesia',
		lead: 'Three things converge in Bali: the law requires an IDP, the razzia enforces it weekly, and your travel-insurance policy excludes coverage when the law is violated.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal floor',
				text: 'Indonesian Traffic Law No. 22 of 2009 requires foreign tourists to carry both their home-country licence and a valid IDP when operating any motorised vehicle. Governor Wayan Koster\'s Circular Letter No. 7 of 2025 formalised stricter enforcement across Bali. Standard fine: IDR 250,000–1,000,000 (~$16–65) collected on the spot. The 30-day temporary tourist driving licence previously issued at Denpasar police station has been discontinued — it no longer exists. The IDP obtained before departure is the only valid path for tourists.',
			},
			{
				icon: 'mdi:shield-off-outline',
				title: 'The insurance void',
				text: 'The financially serious consequence is not the fine. Standard US travel-insurance policies contain a clause excluding injuries sustained while the insured was violating local law. Riding without a valid IDP in Indonesia is violating Indonesian Traffic Law No. 22 of 2009. If you crash a scooter in Seminyak without an IDP, your travel-insurance claim is denied on that basis. Medevac from Bali to a US hospital costs $50,000–$100,000 — and the rental shop\'s own insurance is also conditioned on valid documentation, so it voids simultaneously.',
			},
			{
				icon: 'ph:steering-wheel-bold',
				title: 'The left-hand traffic reversal',
				text: 'Indonesia drives on the left with the steering wheel on the right side of the vehicle. Every directional reflex built by US driving is inverted: which lane, where to look at junctions, how to position for an overtake, where oncoming traffic comes from. In a car with a local driver this is invisible. On a scooter you\'re operating yourself, the reversal hits at the first junction after the rental shop. Most US visitors adapt within 30–60 minutes of slow, deliberate riding.',
			},
		],
	},

	rules: {
		heading: 'Indonesian driving rules US drivers should know — Bali focus',
		lead: 'Left-hand traffic is the dominant adjustment. The Category A scooter rule and the helmet enforcement at razzia checkpoints are the next two.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Complete reversal from the US; steering wheel on the right' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '50 km/h', note: '30 km/h near schools and in marked residential zones' },
			{ icon: 'mdi:road-variant', label: 'Open road limit', value: '80–100 km/h', note: 'Where signed on intercity routes' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter than US 0.08%; checkpoint enforcement in tourist areas, particularly after dark' },
			{ icon: 'mdi:helmet', label: 'Helmet (scooter)', value: 'Fastened, on head', note: 'Carrying on handlebars does not satisfy; checked at every razzia; fine IDR 250,000' },
			{ icon: 'ph:motorcycle-bold', label: 'Scooter licence', value: 'Category A required', note: 'US car-only licence does NOT cover scooters; check for M/MC endorsement' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Hands-free permitted; fine IDR 750,000' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts (car)', value: 'Mandatory', note: 'Fine IDR 250,000; inconsistently enforced outside cities' },
		],
	},

	fines: {
		heading: '2026 fines and the razzia enforcement system',
		lead: 'Indonesian fines are modest in absolute terms. The insurance consequence attached to any IDP violation vastly exceeds the fine amount in any accident scenario.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP', amount: 'IDR 250,000–1,000,000 (~$16–65)', severity: 'med', note: 'Cash collected at razzia; insurance void simultaneously' },
			{ icon: 'ph:motorcycle-bold', label: 'Scooter on car-only licence (no Category A)', amount: 'IDR 250,000–1,000,000 (~$16–65)', severity: 'med', note: 'Specific razzia target; same insurance consequence' },
			{ icon: 'mdi:helmet', label: 'No helmet', amount: 'IDR 250,000 (~$16)', severity: 'low', note: 'Enforced at every razzia alongside IDP check' },
			{ icon: 'mdi:speedometer', label: 'Speeding', amount: 'IDR 500,000 (~$32)', severity: 'low', note: 'Camera enforcement increasing; officer-issued on roads' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'IDR 500,000 (~$32)', severity: 'med', note: '' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'IDR 750,000 (~$49)', severity: 'med', note: '' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'IDR 15,000,000+ (~$975+)', severity: 'high', note: 'Criminal charge; detention; vehicle impound' },
			{ icon: 'mdi:shield-off-outline', label: 'Accident without IDP — insurance void', amount: 'Uncapped personal liability', severity: 'high', note: 'Not a fine. Medevac to US: $50,000–$100,000 direct cost.' },
		],
		caption: 'Sources: Indonesian Traffic Law No. 22 of 2009 (UU No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan); Governor Wayan Koster Circular Letter No. 7 of 2025; Bali Police enforcement records 2025.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Indonesia — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown for Bali specifically.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages, including English (the working language at every Bali tourist-corridor rental shop and razzia checkpoint with foreign tourists)',
				'A standardised layout that\'s easier for an Indonesian officer or rental agent to read than a US state-specific licence format',
				'An instant digital download — print before departure; printed copy is preferred over phone screens at roadside in variable light',
				'Reflects the vehicle categories present on your US licence — if your licence carries motorcycle (M/MC) endorsement, IDP Companion shows it; if it doesn\'t, IDP Companion can\'t add it',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — your physical US driver\'s licence must be carried alongside it at all times',
				'Not a motorcycle endorsement that doesn\'t exist on your US licence — if your state licence is car-only, IDP Companion cannot add an M/MC class; check your physical licence before booking a scooter',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Bali',
			items: [
				'At razzia checkpoints where the officer asks for national licence and IDP simultaneously',
				'At car and scooter rental desks throughout Bali (although most local scooter shops ask only for passport at pickup — the razzia is where documentation matters)',
				'When travel-insurance or rental-insurance documentation is reviewed following an accident',
				'As the English-language translation that makes your US licence readable by Indonesian officers',
			],
		},
		needOfficial: {
			title: 'What Indonesian authorities actually expect',
			items: [
				'Original physical US driver\'s licence — the legal authority to drive (digital photos not accepted at roadside)',
				'Passport with Indonesian entry stamp (visa-on-arrival or e-visa for US citizens)',
				'Vehicle registration (STNK) — provided by the rental shop with the vehicle, kept under the seat or in the storage compartment',
				'Helmet worn and fastened (for scooter riders) — not carried on the handlebars',
			],
		},
		pattern: "The pattern: the rental shop doesn't check. The razzia does. The insurance clause applies regardless of which one you encounter first. The five-dollar scooter doesn't change the math when the medevac bill is uncovered.",
	},

	renting: {
		heading: 'Renting a scooter or car in Bali as a US driver',
		lead: 'Three different rental categories, three different documentation realities. The rental-shop interaction is rarely where the documentation gets checked — that\'s the razzia\'s job.',
		chains: [
			{ name: 'Scooter rental (local shops, Canggu / Seminyak / Ubud)', policy: 'Standard rate 80,000–150,000 IDR per day (~$5–10). Most shops ask only for passport as deposit and will not ask for IDP at the desk. The checkpoint after you leave is where documentation becomes relevant. Confirm your US licence includes motorcycle endorsement (M/MC) before renting. Bring IDP Companion.' },
			{ name: 'Hertz / Avis (Ngurah Rai Airport, DPS)', policy: 'Airport car rental at international agencies. IDP required for all foreign licences at pickup. Minimum age 21. Credit card for deposit. Automatic transmission standard.' },
			{ name: 'Grab / Gojek (ride apps)', policy: 'For central Kuta, Seminyak, and airport transfers, ride apps are the practical choice. Traffic in South Bali during peak hours makes independent scooter riding frustrating; ride apps eliminate every documentation and parking problem in that corridor.' },
			{ name: 'Driver hire (full-day)', policy: 'IDR 450,000–700,000 (~$29–45 for 8–10 hours). For temple circuits, volcano visits, and the central highlands, this is often better value than independent riding — particularly for first-time Bali visitors who haven\'t yet calibrated to left-hand traffic.' },
		],
		tipsHeading: 'Practical tips for US drivers in Bali',
		tips: [
			'Confirm motorcycle endorsement (M/MC) on your US licence BEFORE booking a scooter — check the front and back of the card for the endorsement code',
			'Print IDP Companion — phone screens at roadside checkpoints are less reliable than printed paper, especially in variable light',
			'Helmet must be fastened properly when riding; carrying it on handlebars does not satisfy the razzia officer',
			'Fuel (Pertalite or Pertamax) at petrol stations; small warungs sell bottled fuel in rural areas for IDR 15,000–20,000 per 1.5L bottle',
			'Road surfaces vary dramatically — smooth in South Bali tourist areas, potholed on inner Ubud routes and North Bali coastal roads',
			'Temple ceremony crossings: processions cross roads throughout Bali; stop completely and wait — both a legal and a cultural requirement',
			'After dark: dogs cross roads unpredictably; slow down significantly near any dog at the road edge',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Bali',
		lead: 'The realistic range of outcomes for US tourists in Bali — ranked by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'very common',
				label: 'No independent driving — Grab / Gojek / driver hire',
				text: 'Correct choice for central Kuta and Seminyak in traffic hours. Ride apps cover the corridor cheaply and reliably. Eliminates every documentation and parking problem.',
			},
			{
				severity: 'low',
				frequency: 'common with IDP',
				label: 'Scooter with IDP Companion, correct category',
				text: 'Full documentation present. Razzia passes in two minutes — officer checks STNK, home licence, IDP, helmet. Done.',
			},
			{
				severity: 'low',
				frequency: 'every US visitor on a scooter',
				label: 'Left-hand traffic confusion, first 20 minutes',
				text: 'Deliberate slow start; settles within an hour. Critical window is the first junction, first roundabout, first time a vehicle appears from the direction muscle memory says is wrong.',
			},
			{
				severity: 'med',
				frequency: 'common without IDP',
				label: 'Razzia checkpoint, no IDP',
				text: 'IDR 1,000,000 (~$65) on the spot. Insurance void from that moment — for the rest of your trip if you continue riding, and retroactively for any documented violation.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Scooter on car-only licence, no Category A',
				text: 'Same fine; insurance void. Specific razzia enforcement target — officers know which licences carry motorcycle endorsements.',
			},
			{
				severity: 'high',
				frequency: 'less common',
				label: 'Minor accident, no IDP',
				text: 'No insurance coverage. Full liability for vehicle damage, third-party damage, third-party injury. Roadside negotiation conducted in Indonesian. Documentation gap is the central problem.',
			},
			{
				severity: 'high',
				frequency: 'rare',
				label: 'Serious accident, no IDP, evacuation needed',
				text: 'Travel insurance excluded. Medical evacuation from Bali to Singapore, Darwin, or the US runs $50,000–$100,000 direct cost to the rider. This is the financial reality the fine doesn\'t describe.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'DUI over 0.05% BAC',
				text: 'Criminal charge. IDR 15,000,000+ (~$975+). Detention. Vehicle impound. Active enforcement in tourist areas after dark and during major holidays.',
			},
		],
		math: 'IDP Companion is $35. The razzia fine is $65. Medical evacuation without coverage from Bali starts at $50,000. These are three different conversations — and only one of them can be resolved before you board the plane.',
	},

	phrases: {
		heading: 'Useful Indonesian phrases at checkpoints and rental desks',
		lead: 'English works well in South Bali tourist areas; Bahasa Indonesia reaches further and moves faster at police stops, particularly outside the main tourist corridors.',
		items: [
			{ phrase: 'Ini SIM saya', translation: 'Here is my licence', context: 'Handing over the physical US licence (SIM = Surat Izin Mengemudi, Indonesian driving licence)' },
			{ phrase: 'Dan dokumen terjemahan', translation: 'And the translation document', context: 'Showing IDP Companion alongside' },
			{ phrase: 'Saya turis Amerika', translation: "I'm an American tourist", context: 'Establishing context at a razzia' },
			{ phrase: 'Saya tidak mengerti bahasa Indonesia', translation: "I don't understand Indonesian", context: 'Honest disclosure — officers in tourist areas typically switch to English' },
			{ phrase: 'Ada masalah?', translation: 'Is there a problem?', context: 'Polite opener at a checkpoint' },
			{ phrase: 'Saya punya asuransi', translation: 'I have insurance', context: 'In case of accident — establishes baseline before discussing IDP status' },
			{ phrase: 'Saya perlu menghubungi perusahaan sewa', translation: 'I need to call the rental company', context: '24/7 helpline is on every rental contract' },
			{ phrase: 'Lurus / belok kanan / belok kiri', translation: 'Straight / turn right / turn left', context: 'Navigation with local help' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Bali (US citizens)',
		lead: 'Bali rewards preparation in three places: the documentation, the vehicle category check, and the left-hand traffic mental rehearsal.',
		schemaName: 'How to prepare for driving in Bali as a US citizen',
		duration: 'PT25M',
		cost: '35 USD',
		steps: [
			{
				title: 'Check your US licence for motorcycle endorsement',
				text: 'If you plan to ride a scooter, your US state licence must carry a motorcycle endorsement (typically marked M, MC, or Class M). Look at the front and back of the licence card. If it\'s car-only, you cannot legally ride a scooter in Indonesia — no document fixes this. Hire a driver or use Grab/Gojek instead.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. Reflects the vehicle categories present on your US licence — car only, or car + motorcycle. Print before departure.',
			},
			{
				title: 'Confirm your travel-insurance terms',
				text: 'Before flying, read the "violation of local law" exclusion in your travel-insurance policy. This is the clause that voids coverage if you\'re injured riding without an IDP. The pre-departure five minutes confirming the clause exists makes the IDP decision financially obvious.',
			},
			{
				title: 'Mental rehearsal for left-hand traffic',
				text: 'Steering wheel on the right. Normal driving lane is the LEFT lane. Overtake on the right. Roundabouts: traffic already circulating has priority. Verbalise "left side" at the first ten junctions on the road. The recalibration takes most US drivers 30–60 minutes of slow deliberate riding.',
			},
			{
				title: 'Carry the documentation set',
				text: 'Physical US licence + US passport with entry stamp + IDP Companion + helmet (worn, fastened) + STNK from the rental shop. All five elements together clear every Canggu, Kuta, Seminyak, and Ubud razzia checkpoint.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Is an IDP legally required for US tourists in Indonesia?',
				answer: 'Yes. Indonesian Traffic Law No. 22 of 2009 requires all foreign tourists operating any motorised vehicle to carry both their home-country licence and a valid IDP. This applies to cars, scooters, and motorbikes equally, with no exceptions for US citizens.',
			},
			{
				id: 2,
				question: 'Does my US driver licence cover riding a scooter in Bali?',
				answer: 'Only if it includes a motorcycle endorsement. Indonesian law requires the vehicle category on your IDP to match what you\'re operating. Category B covers cars; Category A covers motorcycles and scooters. Check your US licence for an M, MC, or motorcycle class endorsement before booking a scooter. If it\'s car-only, you cannot legally ride a scooter in Indonesia — and no document can add an endorsement you don\'t have at home.',
			},
			{
				id: 3,
				question: 'Why does the insurance argument matter more than the fine?',
				answer: 'The razzia fine is IDR 1,000,000 — about $65. Standard US travel-insurance policies exclude injuries sustained while the insured was violating local law. Riding without an IDP in Indonesia is violating local law. If you crash and you didn\'t have an IDP, your travel-insurance claim is denied on that basis before any other consideration. Medical evacuation from Bali to the US runs $50,000–$100,000 — uncovered when the documentation was missing. That is the actual financial exposure, not the fine.',
			},
			{
				id: 4,
				question: 'Can I get an IDP after arriving in Bali?',
				answer: 'The 30-day temporary tourist driving licence previously issued at Denpasar police station has been discontinued — it no longer exists. Government-format IDPs can only be obtained in your home country before departure. IDP Companion is a digital download available from anywhere with internet access — you can purchase and print it from your hotel in Seminyak before picking up the scooter the next morning, but the legal IDP itself must be obtained before you fly.',
			},
			{
				id: 5,
				question: 'What are the razzia checkpoints?',
				answer: 'Planned police roadblocks specifically targeting tourist corridors for IDP compliance. They appear weekly in Canggu (Jalan Batu Bolong), Kuta, Seminyak, and central Ubud. Governor Koster\'s Circular Letter No. 7 of 2025 formalised stricter enforcement across the island. Officers ask for your home licence, IDP, and the vehicle\'s STNK registration. Without the IDP, the fine is collected on the spot and your insurance void triggers simultaneously.',
			},
			{
				id: 6,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document. It is not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your physical US licence as the translation aid Indonesian rental shops and razzia officers can read — reducing friction at the documentation check.',
			},
			{
				id: 7,
				question: 'How do I handle the left-hand traffic adjustment?',
				answer: 'Give yourself the first 20–30 minutes as a deliberate slow-speed adjustment period. Start on a quiet residential street before hitting the main road. At every junction, verbalise "left side" before proceeding. At roundabouts, traffic already circulating has priority — give way, then join. The adjustment happens for most people within an hour. The first junction after the rental shop is not the moment to discover the reversal.',
			},
			{
				id: 8,
				question: 'Is central Kuta worth driving in independently?',
				answer: 'For most US visitors: no. Kuta and Seminyak during daylight hours have traffic density that makes independent scooter navigation frustrating and maximises exposure time before the left-hand adjustment has settled. Grab and Gojek cover this corridor cheaply and reliably. Independent scooter riding earns its value heading to Ubud, Uluwatu, the Bukit Peninsula, or North and East Bali — where the island genuinely opens up.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other tropical scooter-economy destinations where US drivers face razzia-style enforcement or insurance-void traps.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'th', label: 'US → Thailand', status: 'Live', href: '/idp-for-us-drivers-in-thailand/' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Russia → Indonesia', status: 'Live', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'au', flagTo: 'id', label: 'Australia → Indonesia', status: 'Coming soon' },
			{ flagFrom: 'in', flagTo: 'id', label: 'India → Indonesia', status: 'Coming soon' },
			{ flagFrom: 'us', flagTo: 'vn', label: 'US → Vietnam', status: 'Live', href: '/idp-for-us-drivers-in-vietnam/' },
		],
	},

	finalCta: {
		heading: 'The five-dollar scooter, the sixty-five-dollar fine, the fifty-thousand-dollar medevac',
		text: 'Indonesian law is clear, Bali\'s razzia checkpoints are consistent, and the insurance exclusion for unlicensed driving is in your travel policy right now. IDP Companion takes two minutes, reflects the categories on your US licence, and costs less than a single Grab ride from Canggu to Ubud.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Indonesian National Police (Polri), the Bali Provincial Police, or the Indonesian Ministry of Transportation. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence and reflects only the licence categories present on that licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Indonesian Traffic Law No. 22 of 2009 (Undang-Undang No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan)',
			'Governor Wayan Koster Circular Letter No. 7 of 2025 — stricter tourist driving enforcement',
			'Indonesian National Police (Polri) — polri.go.id',
			'Bali Provincial Police — bali.polri.go.id',
			'US Embassy Jakarta — driving advisory — id.usembassy.gov',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Indonesia',
	},
};

export const usIndonesiaCopy: Record<'en', CountryPairCopy> = { en };
