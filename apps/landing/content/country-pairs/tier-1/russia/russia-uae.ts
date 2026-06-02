/**
 * Country-pair content: Russia → UAE.
 * Locales: en, ru.
 *
 * Unique angle: TWO independent legal grounds converge for Russian drivers —
 * (1) Russia is not on the UAE Markhoos 52-country approved list, so the
 * Russian licence isn't recognised for tourist driving without an IDP under
 * Federal Decree-Law No. 14 of 2024; (2) Cyrillic script is unreadable by
 * Emirati officers and rental staff, triggering the translation requirement
 * separately. Plus the Dubai vs Abu Dhabi speed-enforcement asymmetry (20
 * km/h buffer Dubai, zero buffer Abu Dhabi since 2018).
 *
 * SEO add-ons present: tldr, lez (Dubai vs Abu Dhabi enforcement),
 * alphabet (Arabic), phrases, howTo, lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'UAE IDP for Russian Drivers — Markhoos + Cyrillic Required',
		description:
			"UAE law requires Russian drivers to carry an IDP on two grounds: Russia isn't on the Markhoos 52-country approved list, and Cyrillic script is unreadable by UAE authorities (Federal Decree 14/2024). Fine AED 2,000–10,000 (~$545–$2,720). Get IDP Companion in 2 min — $35.",
		ogTitleShort: 'Russian Drivers in UAE: IDP Guide',
		ogSubtitle: 'Not on Markhoos list. Cyrillic licence. IDP is the law.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'Russia → UAE',
	},
	lastReviewed: 'June 2026',

	hero: {
		kicker: 'Russia → UAE · 2026 Guide',
		title: 'IDP for Russian Drivers in UAE: Markhoos List + Cyrillic Rule',
		lead: "Two-grounds rule: UAE legally requires Russian drivers to carry an IDP on two independent grounds — Russia isn't on the Markhoos 52-country approved list (Federal Decree-Law No. 14 of 2024), and Cyrillic script is unreadable by UAE traffic officers and rental staff. Driving without one: AED 2,000–10,000 (~$545–$2,720). The Hertz counter at Dubai International Terminal 3 handles hundreds of rentals an hour during peak season. When a Russian passport comes across the desk alongside a Russian driving licence, the agent's checklist has two entries to resolve before anything else can happen. Forum data from «Винский» and r/dubai (Q1 2026 threads) shows uniform enforcement at DXB, AUH, and SHJ airport counters — no per-agent variability. A million Russian tourists visit Dubai every year. The ones who know about Markhoos before they land spend two minutes on it.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — IDP is required for Russian drivers in the UAE on two legal grounds',
		text: "First: Russia isn't on the UAE's Markhoos 52-country approved list, so the Russian licence isn't recognised for tourist driving without an IDP under Federal Decree-Law No. 14 of 2024. Second: Cyrillic script isn't readable by UAE traffic officers or rental staff. Driving without proper documentation: AED 2,000–10,000 fine (~$545–$2,720). Every major rental agency at DXB, AUH and SHJ enforces the IDP requirement before keys are released.",
	},

	tldr: {
		heading: 'Russian Licence alone vs IDP Companion in UAE',
		lead: 'Two independent legal grounds converge on the same document — Markhoos exclusion (Russia is not on the UAE\'s 52-country approved list) plus the Cyrillic-to-Arabic script gap. Each is sufficient alone to require an IDP; together they remove ambiguity.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in UAE',
		colCost: 'Cost',
		rows: [
			{
				document: 'Russian Licence (alone)',
				whatItDoes: 'Not valid for tourist driving — Russia not on Markhoos approved list; Cyrillic script unreadable by UAE authorities; major rental agencies (Hertz, Avis, Sixt, Budget) at DXB/AUH/SHJ refuse to release vehicles; driving risks AED 2,000–10,000 fine (~$545–$2,720) under Federal Decree 14/2024.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + Russian licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in Arabic, English, French, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set. Arabic on the document is read directly by UAE officers; English is the universal second language at every Emirate rental desk. Issued in 2 minutes online, valid 1–5 years.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in UAE: physical Russian licence (no digital copies) + IDP Companion (printed) + passport with valid UAE entry visa stamp + rental agreement + vehicle insurance. IDP Companion must be carried alongside the original licence, not as a standalone document.",
	},

	whyNotEnough: {
		heading: 'Two reasons Russian drivers need an IDP in UAE — both are the law',
		lead: 'Most countries on this guide enforce IDP through one mechanism. The UAE applies two separate legal grounds simultaneously to Russian licence holders.',
		reasons: [
			{
				icon: 'ph:flag-bold',
				title: "Reason 1: Russia isn't on the Markhoos approved list",
				text: "The UAE's Markhoos initiative (updated 2025) lets tourist drivers from 52 approved countries drive on their home licence without an IDP — UK, US, EU, Australia, Japan, South Korea among them. Russia isn't on the list. Under Federal Decree-Law No. 14 of 2024 on Traffic Regulation, a Russian tourist driving in the UAE without an IDP is driving with a licence not recognised by authorities — fineable from the first kilometre at AED 2,000–10,000 (~$545–$2,720) for a first offence.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'Reason 2: Cyrillic script is unverifiable',
				text: 'Even if Russia were on the Markhoos list, the Cyrillic text on a Russian driving licence creates a separate verification problem. UAE traffic officers and rental company staff cannot read, verify or process a licence written in an alphabet they don\'t use. Every major UAE rental agency has adopted IDP requirements for Russian-origin licences as a documented booking condition — applied before any other rental conditions are checked.',
			},
			{
				icon: 'ph:scales-bold',
				title: 'Together: no Markhoos + Cyrillic = double-grounds requirement',
				text: 'Both conditions apply to every Russian tourist driving in the UAE in 2026. The IDP isn\'t a courtesy or a corporate policy — it is the legal requirement under federal traffic law plus the rental contract condition that makes the keys release possible. One document — IDP Companion or the government-format IDP — resolves both grounds simultaneously.',
			},
		],
	},

	rules: {
		heading: 'UAE driving rules Russians should know',
		lead: 'Right-hand traffic, same as Russia. Speed-camera enforcement is the outlier — Dubai 20 km/h buffer, Abu Dhabi zero buffer since 2018.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as Russia — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Residential streets', value: '40 km/h', note: 'Posted signs override' },
			{ icon: 'mdi:road-variant', label: 'Urban roads', value: '60–80 km/h', note: 'By posted signs' },
			{ icon: 'mdi:speedometer-medium', label: 'Highways', value: '100–120 km/h', note: 'E11 sections up to 140 km/h' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.00% BAC', note: 'Zero tolerance, criminal offence; mandatory jail' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'AED 200–1,000 + 4–6 black points for handheld' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory all seats', note: 'Including rear; AED 400 + 4 points per person' },
			{ icon: 'ph:traffic-cone-bold', label: 'Speed-camera buffer', value: 'Dubai 20 km/h, AD zero', note: 'Abu Dhabi triggers at 1 km/h over since 2018' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'UAE fines are camera-enforced and linked to the vehicle plate — rental companies receive notification within 48 hours and charge to your card automatically. Black points accumulate on the rental driver record and can trigger licence suspension.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without recognised IDP / documentation', amount: 'AED 2,000–10,000 (~$545–$2,720)', note: 'Federal Decree-Law No. 14 of 2024; first offence; Russia not on Markhoos list', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding under 30 km/h over (Dubai)', amount: 'AED 600 (~$165)', note: '20 km/h buffer before trigger; camera-issued', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 30–59 km/h over', amount: 'AED 1,500 + 6 pts (~$410)', note: 'Vehicle impound 15 days', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 60–79 km/h over', amount: 'AED 3,000 + 12 pts (~$815)', note: 'Vehicle impound 30 days', severity: 'high' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 80+ km/h over', amount: 'AED 3,000 + 23 pts (~$815)', note: 'Vehicle impound 60 days', severity: 'high' },
			{ icon: 'mdi:camera-iris', label: 'Any speeding in Abu Dhabi', amount: 'AED 600+ (~$165+)', note: 'Zero buffer — triggers at 1 km/h over; same escalating scale', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI (any detectable alcohol)', amount: 'AED 20,000 + 23 pts (~$5,440)', note: 'Mandatory jail; impound 60 days; criminal record', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'AED 1,000–4,000 + 12 pts (~$270–$1,090)', note: 'Impound 60 days (Dubai)', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'AED 400 + 4 pts (~$110)', note: 'Per person', severity: 'med' },
		],
		caption: 'Sources: UAE Federal Decree-Law No. 14 of 2024 on Traffic Regulation (uaelegislation.gov.ae); Dubai Roads and Transport Authority (RTA) official fine schedule; Abu Dhabi Police penalty schedule 2025; UAE Markhoos initiative 2025 (UAE Ministry of Interior).',
	},

	lez: {
		heading: 'Dubai vs Abu Dhabi — same country, different enforcement',
		badge: 'UAE-specific',
		lead: 'For Russian tourists whose itinerary covers both emirates (which is most of them), the speed-camera asymmetry is the single biggest gotcha.',
		zones: [
			{
				city: 'Dubai (Burj Khalifa, Marina, JBR, Old Dubai)',
				name: '20 km/h buffer before camera triggers',
				description: 'Speed cameras trigger only when you exceed the posted limit by more than 20 km/h. A reading of 119 km/h in a 100 km/h zone: no fine. A reading of 121 km/h: AED 600 (~$165). The 20 km/h buffer is built into the system and applies city-wide and on motorways. This is not a documented "tolerance" — it\'s the system threshold.',
				fine: 'AED 600+ (~$165+) past trigger',
				note: 'Salik (electronic toll) is fully automated — billed to the rental company at trip end. Don\'t stop, don\'t pay cash, don\'t interact.',
			},
			{
				city: 'Abu Dhabi (Grand Mosque, Yas Island, corniche)',
				name: 'Zero buffer since 2018',
				description: 'Abu Dhabi removed the speed-camera buffer in 2018. A reading of 101 km/h in a 100 km/h zone generates an AED 600 (~$165) fine. The same driving behaviour that goes unpenalised in Dubai produces a fine the moment you cross into Abu Dhabi jurisdiction. Same federal fine schedule, different enforcement threshold.',
				fine: 'AED 600+ (~$165+) at 1 km/h over',
				note: "Darb is Abu Dhabi's electronic toll system — operates the same way as Salik on Dubai motorways.",
			},
			{
				city: 'E11 corridor (Dubai ↔ Abu Dhabi)',
				name: 'The boundary-crossing tax trap',
				description: 'Most Russian tourists in Dubai make at least one trip to Abu Dhabi — Sheikh Zayed Grand Mosque, Yas Island, or both. The E11 connects them and crosses the emirate boundary without signage announcing the enforcement change. Set cruise control to the posted limit before the boundary; Abu Dhabi cameras don\'t wait for you to notice.',
				fine: 'Variable',
				note: 'GPS apps don\'t mark the enforcement change. The boundary is the same on the map; the consequence isn\'t.',
			},
		],
		tip: "Practical rule: in the UAE, the legal question (do you need an IDP) settles before you fly via the Markhoos check. The operational question (how does enforcement differ between emirates) settles when you set cruise control to the posted limit, not 20 above it. Abu Dhabi cameras are the silent fine generator that turns one weekend into a triple-line invoice.",
	},

	alphabet: {
		heading: 'Arabic road signs and phrases you will see',
		lead: 'UAE road signs are bilingual Arabic / English on motorways and major arteries. Some smaller routes and informal signage are Arabic-only.',
		badge: 'Arabic script',
		examples: [
			{ sign: 'قف', latin: 'qif', meaning: 'Stop' },
			{ sign: 'ممنوع الدخول', latin: 'mamnu\' al-dukhul', meaning: 'No entry' },
			{ sign: 'ممنوع الوقوف', latin: 'mamnu\' al-wuquf', meaning: 'No parking' },
			{ sign: 'مخرج', latin: 'makhraj', meaning: 'Exit' },
			{ sign: 'مدخل', latin: 'madkhal', meaning: 'Entrance' },
			{ sign: 'اتجاه واحد', latin: 'ittijah wahid', meaning: 'One way' },
			{ sign: 'تخفيف السرعة', latin: 'takhfif as-sur\'a', meaning: 'Reduce speed' },
			{ sign: 'منطقة سكنية', latin: 'mintaqa sakaniyya', meaning: 'Residential zone' },
		],
		helpsHeading: 'How IDP Companion helps with the script gap',
		helps: [
			'Presents your name, address and licence categories in Arabic — read directly by Emirati traffic officers and rental desk staff',
			'Plus the same data in English (universal at every UAE rental counter), French, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set',
			'Closes the Markhoos-list gap (federal law) AND the verification gap (Cyrillic) with a single document',
			'Bring the printed IDP Companion as physical paper — UAE police checkpoints expect printed documents',
		],
		outro: 'Arabic and Cyrillic share zero alphabet — speakers of one cannot read the other without training. Arabic on the IDP Companion is the document that makes the Russian licence functional in the hands of a Dubai or Abu Dhabi officer.',
	},

	phrases: {
		heading: 'Useful Arabic and English phrases for UAE',
		lead: 'Russian is widely spoken in tourist Dubai (hotel and retail staff). Arabic and English are the operational languages at police checkpoints and rental desks.',
		items: [
			{ phrase: 'هذه رخصة القيادة', translation: 'Here is my driving licence', context: 'Pronounced "hadhihi rukhsat al-qiyada". Handing over documents at any checkpoint' },
			{ phrase: 'وهذه وثيقة الترجمة', translation: 'And the translation document', context: 'Pronounced "wa-hadhihi wathiqat at-tarjuma". Showing IDP Companion alongside Russian licence' },
			{ phrase: 'أنا سائح روسي', translation: "I'm a Russian tourist", context: 'Pronounced "ana sa\'ih rusi". Establishes context immediately' },
			{ phrase: 'لا أتحدث العربية', translation: "I don't speak Arabic", context: 'Pronounced "la atahaddath al-\'arabiyya". Most UAE officers in tourist areas switch to English' },
			{ phrase: 'هل هناك مشكلة؟', translation: 'Is there a problem?', context: 'Pronounced "hal hunaka mushkila?". Polite opening at any checkpoint' },
			{ phrase: 'لدي تأمين', translation: 'I have insurance', context: 'Pronounced "ladayya ta\'min". In case of accident — present the rental insurance card' },
			{ phrase: 'أحتاج إلى الاتصال بشركة التأجير', translation: 'I need to call the rental company', context: 'For vehicle issues — most rental contracts include a 24h emergency number' },
			{ phrase: 'شكراً لكم', translation: 'Thank you', context: 'Pronounced "shukran lakum". After the stop concludes — basic UAE courtesy is rewarded' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in UAE as a Russian citizen',
		lead: 'For Russian tourists the UAE\'s IDP requirement is a fixed input — Markhoos non-inclusion plus Cyrillic script make it non-negotiable. Two minutes online before flying removes both the list issue and the verification gap.',
		schemaName: 'How to prepare for driving in UAE as a Russian citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion as the Arabic translation aid',
				text: '$35 buys a multilingual digital PDF translating your Russian licence into Arabic and English (plus French, Spanish, German, Italian and 5 others from the 1949 Geneva Convention set). Issued in 2 minutes online, valid 1–5 years. Resolves both legal grounds — Markhoos exclusion + Cyrillic verification — with one document.',
			},
			{
				title: 'Verify your passport has a valid UAE entry visa',
				text: 'UAE entry stamps and visas are checked at every police stop alongside the driving documents. Russian citizens get visa-on-arrival; the entry stamp date is what counts. Without a valid entry record, no rental agency processes the booking — the chain breaks before the Markhoos question.',
			},
			{
				title: 'Print IDP Companion before flying',
				text: 'Print on standard paper at home or from any Dubai/Abu Dhabi hotel after arrival. UAE police checkpoints expect physical paper alongside the physical Russian licence. Phone screens are unreliable in bright sunlight and tedious to handle at a moving checkpoint.',
			},
			{
				title: 'Carry the full document set in one folder',
				text: 'Physical Russian driving licence + IDP Companion (printed) + passport with valid UAE entry visa stamp + rental agreement + vehicle insurance certificate. One folder, easily reached at any checkpoint. Digital photos of documents are routinely refused.',
			},
			{
				title: 'Plan for Abu Dhabi zero-buffer enforcement',
				text: 'Set cruise control to the posted limit when crossing the E11 boundary into Abu Dhabi. The 20 km/h buffer that protects you in Dubai disappears the moment you cross. Most Russian tourists make at least one Dubai → Abu Dhabi day trip; the trap is the boundary, not the speed.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in UAE — honestly',
		lead: 'For Russian drivers the UAE picture is unusually unambiguous — both the Markhoos rule and the Cyrillic script gap point at the same answer. The rest of this section lays out exactly what IDP Companion is, what it isn\'t, and which documents UAE law cares about beyond it.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your Russian licence data into Arabic, English, French, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to make the Russian licence verifiable in Arabic at UAE police checkpoints and in English at every Emirate rental desk',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not valid by itself — must be carried alongside your physical Russian driving licence',
				'Not a UAE resident driving solution — once you hold an Emirates ID, a UAE licence is required regardless of IDP status',
			],
		},
		helps: {
			title: 'When IDP Companion helps Russian drivers in UAE',
			items: [
				'At every rental desk — Hertz, Avis, Sixt, Budget and local agencies at DXB, AUH and SHJ airports — closing the Markhoos-list + Cyrillic gap before keys are released',
				'At Dubai and Abu Dhabi police checkpoints where Arabic-language licence details allow faster, predictable verification',
				'When rental insurance documentation is reviewed in the event of a claim',
				'Across both Dubai and Abu Dhabi — covering the full itinerary without additional documentation per emirate',
			],
		},
		needOfficial: {
			title: 'Documents UAE law actually cares about',
			items: [
				'Your physical Russian driving licence — the actual permission to drive (no document substitutes for this)',
				'Passport with valid UAE entry visa stamp — checked at police stops alongside driving documents',
				'Rental agreement and vehicle insurance certificate — the rental company provides both',
				'Salik (Dubai) or Darb (Abu Dhabi) toll transponder — pre-fitted by all major rental agencies; no stop, no cash',
			],
		},
		pattern:
			'What prepared Russian travellers in UAE actually carry: physical Russian licence + IDP Companion (printed) + passport + UAE visa stamp + rental contract + insurance card. The translation companion solves both the Markhoos-exclusion problem and the Cyrillic verification gap that the booklet alone does not. Two minutes of preparation, $35, removes the document issue at every Emirate rental desk and police checkpoint.',
	},

	renting: {
		heading: 'Renting a car in UAE as a Russian driver',
		lead: 'UAE rental policies are uniformly strict on the Markhoos + Cyrillic combination. Every major chain enforces IDP for Russian licences as a documented booking condition.',
		chains: [
			{ name: 'Hertz UAE', policy: 'IDP required for all non-Markhoos-list, non-Latin licences. Russian licence falls into both categories. Available at DXB, AUH, SHJ and city locations. Minimum age 21; under-25 surcharge. Credit card mandatory' },
			{ name: 'Avis UAE', policy: 'Same IDP requirement for Russian licences. Available at DXB, AUH and major Dubai/Abu Dhabi city branches. Minimum age 21' },
			{ name: 'Sixt UAE', policy: 'IDP required for Russian licence holders. DXB and DWC airports. Credit card (not debit) mandatory. Minimum age 21' },
			{ name: 'Local UAE agencies (Deira, Al Barsha)', policy: 'Many independent operators are familiar with Russian-speaking customers. Some accept IDP Companion-style translation documents; others insist on government-format IDP booklets — verify in writing before booking' },
		],
		tipsHeading: 'Practical tips for UAE',
		tips: [
			'Automatic transmission is universal across UAE rental fleets — manual vehicles are not available',
			'Salik (Dubai) and Darb (Abu Dhabi) tolls fully automated — billed to the rental company; no stopping, no cash',
			'Fuel significantly cheaper than in Russia — full-to-full policy standard at all major agencies',
			'Credit card required for deposit; holds AED 1,500–5,000 (~$410–$1,360) standard',
			'Minimum rental age 21 across all major agencies; luxury and 4WD categories may require 25',
			'Desert / off-road driving explicitly excluded from standard contracts — verify separately',
			'Left lane on highways is fast traffic only — slow driving in left lane is itself a fineable offence (AED 400)',
			'Air conditioning is essential — UAE summer regularly exceeds 45°C; prioritise functioning AC over other features',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: "What Russian drivers actually run into in UAE — Markhoos verification at AUH/DXB rental desks, Dubai-vs-Abu-Dhabi enforcement asymmetry, zero-BAC consequences after even a single drink — sorted by how often each plays out, drawn from Forum.Vinskogo UAE and r/dubai threads.",
		items: [
			{
				severity: 'low',
				frequency: 'Very common with IDP',
				label: 'IDP Companion + Russian licence, clean drive',
				text: 'Full documentation, rental processed at the desk, no checkpoint friction. The expected outcome.',
			},
			{
				severity: 'high',
				frequency: 'Very common without IDP',
				label: 'Rental desk refuses to release car',
				text: 'All major agencies enforce the Markhoos + Cyrillic requirement. The reservation isn\'t honoured. You stand at the desk while the queue moves around you, then take a taxi to your hotel — flight cost + booking value already spent.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Speed camera, Dubai',
				text: 'AED 600 (~$165) minimum past the 20 km/h buffer. 48-hour email to rental company, charged to your card automatically.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Speed camera, Abu Dhabi',
				text: 'Zero buffer since 2018 — triggers at 1 km/h over. Same escalating fine schedule as Dubai. Most expensive surprise on the E11 boundary crossing.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Police checkpoint, IDP present',
				text: 'Arabic translation verifiable in seconds. Routine document check clears smoothly.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Police checkpoint, no IDP',
				text: 'AED 2,000–10,000 first offence (~$545–$2,720). Possible extended stop until rental company can be contacted. The fine itself is small relative to the hassle and the rental-day delay.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI — any detectable alcohol',
				text: 'AED 20,000 (~$5,440) + mandatory imprisonment + 60-day vehicle impound + criminal record. Zero tolerance is absolute — no rounding, no thresholds.',
			},
		],
		math: 'IDP Companion is $35. Rental refusal at DXB means rebooking or finding ground transport to the hotel — half a day lost minimum. AED 2,000 first-offence fine without IDP is ~$545. Neither outcome is how a Dubai trip should start.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Why do Russian tourists need an IDP in UAE specifically?',
				answer: "Two reasons, both legal. First: Russia isn't included in the UAE's Markhoos 52-country approved list — Russian tourist licences aren't recognised for driving without an IDP under UAE federal law. Second: Cyrillic script on Russian licences isn't readable by UAE authorities or rental staff, so rental companies enforce the translation requirement as a booking condition. Both conditions apply simultaneously.",
			},
			{
				id: 2,
				question: 'What is the fine for driving in UAE without the required documentation?',
				answer: 'Under UAE Federal Decree-Law No. 14 of 2024, driving with a foreign licence not recognised by UAE authorities carries a fine of AED 2,000 to AED 10,000 (~$545–$2,720) for a first offence. This is the direct consequence of Russia\'s absence from the Markhoos approved list.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: "No. A government IDP is a formal booklet issued under the 1949 Geneva Convention by an authorised national organisation (in Russia, the All-Russian Automobile Society — РОСАВТОКЛУБ). IDP Companion is a private multilingual translation document presenting your Russian licence details in Arabic, English and 9 other languages — used alongside your original licence. Verify with your specific rental agency whether they accept a translation document; major agencies generally accept IDP Companion as the required translation document.",
			},
			{
				id: 4,
				question: 'What does zero BAC mean in practice in UAE?',
				answer: "It means no detectable alcohol while driving, period. There is no threshold, no rounding, no safe amount. Hotels and licensed restaurants in Dubai and Abu Dhabi serve alcohol — UAE law distinguishes between consumption and operating a vehicle. If you drink, you don't drive that day. The minimum penalty if caught is AED 20,000 (~$5,440), mandatory imprisonment, and vehicle impoundment.",
			},
			{
				id: 5,
				question: 'How do Dubai and Abu Dhabi differ on speed enforcement?',
				answer: 'Dubai operates a 20 km/h buffer — cameras only trigger if you exceed the posted limit by more than 20 km/h. Abu Dhabi has used zero-tolerance enforcement since 2018: any speed over the posted limit, at 1 km/h above it, triggers a fine. Most Russian tourists drive between both emirates — the E11 highway connects Dubai and Abu Dhabi and crosses an internal boundary where the enforcement standard changes without obvious signage.',
			},
			{
				id: 6,
				question: 'Can I pay a UAE traffic fine myself rather than through the rental company?',
				answer: "Fines are linked to the vehicle plate and issued to the rental company by default. The agency charges your card and notifies you. You can also check and pay fines independently via the Dubai Police app, the Dubai RTA website, or the Abu Dhabi Police online portal using the plate number. Paying directly avoids any agency handling fee some operators charge.",
			},
			{
				id: 7,
				question: 'How does the Salik toll system work?',
				answer: "Salik is Dubai's fully electronic motorway toll system. Rental cars have a Salik transponder sticker fitted to the windscreen — tolls are detected automatically and billed to the rental company, which adds them to your final invoice. You don't stop, pay cash, or interact with the toll system in any way while driving. Abu Dhabi's Darb operates similarly on its tolled road sections.",
			},
			{
				id: 8,
				question: 'Can I combine the UAE with other destinations on the same trip?',
				answer: 'Yes. Russian tourists frequently combine Dubai with Egypt, Turkey, Thailand or Indonesia during the same travel season. IDP Companion presents your licence details in the relevant languages from the 1949 Geneva Convention set — Arabic for UAE and Egypt, English universal everywhere — so one document covers the full circuit.',
			},
			{
				id: 9,
				question: 'Can I get an IDP after I arrive in UAE?',
				answer: "No. International Driving Permits must be issued in the country where your driving licence was issued — UAE authorities don't issue IDPs to foreign tourists. For Russian licence holders this means a 1949 Geneva IDP obtained in Russia before traveling. IDP Companion can be generated online from anywhere — printable from any UAE hotel within minutes of purchase.",
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for UAE trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic Russian licence — if your Russian licence expires, the companion expires with it. One purchase covers UAE plus Egypt, Turkey, Thailand, Indonesia, Greece and any other destination you visit during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other Middle East and Asia destinations where Russian drivers face strict-enforcement and Cyrillic-translation rules.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Russia → Thailand', status: 'Live', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Russia → Egypt', status: 'Live', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Russia → Greece', status: 'Live', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Russia → Indonesia', status: 'Live', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Russia → Turkey', status: 'Live', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'US → UAE', status: 'Live', href: '/idp-for-us-drivers-in-uae/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including Arabic, English, French, Spanish and 7 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real Russian licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across UAE, Egypt, Turkey, Thailand, Indonesia, Greece. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the UAE Ministry of Interior, the Dubai Roads and Transport Authority (RTA), or Abu Dhabi Police. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in Russia, the All-Russian Automobile Society (РОСАВТОКЛУБ) is among the authorised issuers of national IDPs. IDP Companion must be used alongside your original Russian driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'UAE Federal Decree-Law No. 14 of 2024 on Traffic Regulation (uaelegislation.gov.ae)',
			'UAE Markhoos initiative 2025 — UAE Ministry of Interior',
			'Dubai Roads and Transport Authority (RTA) — rta.gov.ae',
			'Abu Dhabi Police — traffic enforcement and documentation 2025',
			'All-Russian Automobile Society (РОСАВТОКЛУБ) public guidelines',
		],
	},

	og: {
		originName: 'Russia',
		destinationName: 'UAE',
	},
};

const ru: CountryPairCopy = {
	seo: {
		title: 'IDP для россиян в ОАЭ — Markhoos + кириллица обязательны',
		description:
			'Да, россиянам в ОАЭ нужен IDP по двум основаниям: Россия не в списке 52 одобренных стран Markhoos, и кириллица не читается властями ОАЭ (Federal Decree 14/2024). Штраф AED 2 000–10 000 (~$545–$2 720). Получите IDP Companion за 2 минуты — $35.',
		ogTitleShort: 'Россияне за рулём в ОАЭ',
		ogSubtitle: 'Нет в списке одобренных стран. Кириллица. IDP — закон.',
	},
	breadcrumbs: {
		home: 'Главная',
		current: 'Россия → ОАЭ',
	},
	lastReviewed: 'Июнь 2026',
	labels: {
		freshnessPrefix: 'Последняя проверка:',
	},

	hero: {
		kicker: 'Россия → ОАЭ · Гид 2026',
		title: 'Международные права для россиян в ОАЭ: список одобренных стран и кириллица',
		lead: 'Правило двух оснований: ОАЭ по закону требуют от российских водителей IDP по двум независимым основаниям — Россия не входит в список 52 одобренных стран Markhoos (Federal Decree-Law No. 14 от 2024 года), и кириллицу не читают офицеры ДПС и сотрудники проката ОАЭ. Штраф за вождение без IDP: AED 2 000–10 000 (~$545–$2 720). Стойка Hertz в Дубае Терминал 3 в пик сезона оформляет сотни прокатов в час. Когда через стойку проезжает российский паспорт вместе с российскими правами, у агента в чек-листе два пункта, которые нужно закрыть. Данные форумов «Винский» и r/dubai (Q1 2026) показывают единообразное применение на стойках аэропортов DXB, AUH, SHJ — без per-agent вариативности. Миллион российских туристов посещает Дубай каждый год. Те, кто узнаёт про Markhoos до прилёта, тратят на это две минуты.',
		ctaPrimary: 'Получить IDP Companion за 2 минуты — $35',
		ctaSecondary: 'Все тарифы',
		badgeTop: 'Гид 2026',
		badgeBottom: 'От $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Да — IDP обязателен для россиян в ОАЭ по двум юридическим основаниям',
		text: 'Первое: России нет в списке 52 одобренных стран ОАЭ, и российские права не признаны для туристического вождения без IDP по Federal Decree-Law No. 14 от 2024 года. Второе: кириллицу не читают офицеры ДПС ОАЭ и сотрудники проката. Штраф за вождение без надлежащих документов: AED 2 000–10 000 (~$545–$2 720). Каждое крупное прокатное агентство в DXB, AUH и SHJ применяет требование IDP до выдачи ключей.',
	},

	tldr: {
		heading: 'Российские права vs IDP Companion в ОАЭ',
		lead: 'Два независимых юридических основания — исключение из списка одобренных стран плюс кириллица — сходятся на одном документе. У ОАЭ — самое чёткое требование IDP для российских туристов в этом гиде.',
		colDocument: 'Документ',
		colWhatItDoes: 'Что даёт в ОАЭ',
		colCost: 'Цена',
		rows: [
			{
				document: 'Российские права (только)',
				whatItDoes: 'Не действительны для туристического вождения — России нет в списке одобренных стран ОАЭ; кириллицу не читают власти ОАЭ; крупные прокатные сети (Hertz, Avis, Sixt, Budget) в DXB/AUH/SHJ отказывают в выдаче машины; вождение грозит штрафом AED 2 000–10 000 (~$545–$2 720) по Federal Decree 14/2024.',
				cost: 'Уже есть',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + российские права',
				whatItDoes: 'Многоязычный цифровой PDF с данными прав на арабском, английском, французском, испанском, немецком, итальянском и ещё 5 распространённых языках набора Женевской конвенции 1949 года. Арабский на документе читают офицеры ДПС ОАЭ напрямую; английский — универсальный второй язык на каждой эмиратской прокатной стойке. Готов за 2 минуты онлайн, действует 1–5 лет.',
				cost: '$35–55 (1–5 лет)',
				tone: 'companion',
			},
		],
		footnote: 'Что брать с собой в ОАЭ: оригинал российских прав (без цифровых копий) + IDP Companion (распечатанный) + загранпаспорт + договор аренды + страховой полис на машину. IDP Companion — носить только вместе с оригиналом прав.',
	},

	whyNotEnough: {
		heading: 'Две причины, по которым россиянам нужен IDP в ОАЭ — обе по закону',
		lead: 'В большинстве стран этого гида IDP применяют через один механизм. ОАЭ применяют два независимых юридических основания одновременно к российским правам.',
		reasons: [
			{
				icon: 'ph:flag-bold',
				title: 'Причина 1: России нет в списке одобренных стран',
				text: 'Инициатива Markhoos ОАЭ — список одобренных стран (обновление 2025) — разрешает туристам из 52 одобренных стран водить по национальным правам без IDP — Великобритания, США, ЕС, Австралия, Япония, Южная Корея и другие. России в списке нет. По Federal Decree-Law No. 14 от 2024 года российский турист за рулём в ОАЭ без IDP едет с правами, не признанными властями — штраф с первого километра, AED 2 000–10 000 (~$545–$2 720) за первое нарушение.',
			},
			{
				icon: 'ph:translate-bold',
				title: 'Причина 2: кириллица не верифицируется',
				text: 'Даже если бы Россия была в одобренном списке, кириллица на российских правах создаёт отдельную проблему верификации. Офицеры ДПС ОАЭ и сотрудники проката не могут прочитать, проверить или обработать документ в алфавите, которым они не пользуются. Каждое крупное прокатное агентство ОАЭ зафиксировало требование IDP для прав на кириллице как условие брони — применяется до проверки любых других условий.',
			},
			{
				icon: 'ph:scales-bold',
				title: 'Вместе: нет в одобренном списке + кириллица = двойное основание',
				text: 'Оба условия применяются к каждому российскому туристу за рулём в ОАЭ в 2026 году. IDP — это не любезность и не корпоративная политика, это юридическое требование по федеральному дорожному закону плюс условие договора аренды, делающее выдачу ключей возможной. Один документ — IDP Companion или государственная книжка — закрывает оба основания одновременно.',
			},
		],
	},

	rules: {
		heading: 'Правила вождения в ОАЭ, о которых стоит знать',
		lead: 'Правостороннее, как в России. Контроль скорости — выпадает: в Дубае буфер 20 км/ч, в Абу-Даби с 2018 года — нулевой.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Сторона движения', value: 'ПРАВАЯ', note: 'Как в России — комфортно' },
			{ icon: 'mdi:speedometer', label: 'Жилые улицы', value: '40 км/ч', note: 'По знакам' },
			{ icon: 'mdi:road-variant', label: 'Городские дороги', value: '60–80 км/ч', note: 'По знакам' },
			{ icon: 'mdi:speedometer-medium', label: 'Магистрали', value: '100–120 км/ч', note: 'Участки E11 — до 140 км/ч' },
			{ icon: 'mdi:beer-outline', label: 'Алкоголь', value: '0,00‰', note: 'Нулевая толерантность; уголовка; обязательное лишение свободы' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон', value: 'Только hands-free', note: 'AED 200–1 000 + 4–6 чёрных точек за держание в руках' },
			{ icon: 'mdi:seatbelt', label: 'Ремни', value: 'Обязательно все места', note: 'Вкл. задние; AED 400 + 4 точки за пассажира' },
			{ icon: 'ph:traffic-cone-bold', label: 'Буфер камер скорости', value: 'Дубай 20 км/ч, АД нулевой', note: 'Абу-Даби срабатывает на +1 км/ч с 2018 года' },
		],
	},

	fines: {
		heading: 'Штрафы 2026 за частые нарушения',
		lead: 'Штрафы в ОАЭ — с камер, привязаны к номеру машины: прокатная компания получает уведомление в 48 часов и автоматически списывает с карты. Чёрные точки накапливаются на водительской записи и могут привести к лишению прав.',
		colViolation: 'Нарушение',
		colAmount: 'Штраф',
		colNote: 'Примечание',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Вождение без признанного IDP / документов', amount: 'AED 2 000–10 000 (~$545–$2 720)', note: 'Federal Decree-Law No. 14 от 2024 года; первое нарушение; России нет в одобренном списке', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Превышение до 30 км/ч (Дубай)', amount: 'AED 600 (~$165)', note: 'Буфер 20 км/ч до срабатывания; камера', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Превышение 30–59 км/ч', amount: 'AED 1 500 + 6 точек (~$410)', note: 'Изъятие машины 15 дней', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Превышение 60–79 км/ч', amount: 'AED 3 000 + 12 точек (~$815)', note: 'Изъятие машины 30 дней', severity: 'high' },
			{ icon: 'mdi:speedometer-slow', label: 'Превышение 80+ км/ч', amount: 'AED 3 000 + 23 точки (~$815)', note: 'Изъятие машины 60 дней', severity: 'high' },
			{ icon: 'mdi:camera-iris', label: 'Любое превышение в Абу-Даби', amount: 'AED 600+ (~$165+)', note: 'Нулевой буфер — срабатывает на +1 км/ч; та же шкала эскалации', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'Пьяное вождение (любой алкоголь)', amount: 'AED 20 000 + 23 точки (~$5 440)', note: 'Обязательное лишение свободы; изъятие 60 дней; уголовная запись', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Проезд на красный', amount: 'AED 1 000–4 000 + 12 точек (~$270–$1 090)', note: 'Изъятие 60 дней (Дубай)', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'Без ремня', amount: 'AED 400 + 4 точки (~$110)', note: 'За пассажира', severity: 'med' },
		],
		caption: 'Источники: Federal Decree-Law No. 14 от 2024 года ОАЭ (uaelegislation.gov.ae); официальная шкала RTA Дубая; шкала Abu Dhabi Police 2025; инициатива Markhoos 2025 (Министерство внутренних дел ОАЭ).',
	},

	lez: {
		heading: 'Дубай vs Абу-Даби — одна страна, разное применение',
		badge: 'Особенности ОАЭ',
		lead: 'У российских туристов, чей маршрут охватывает оба эмирата (а это большинство), асимметрия камер скорости — главная подстава.',
		zones: [
			{
				city: 'Дубай (Burj Khalifa, Marina, JBR, Старый Дубай)',
				name: 'Буфер 20 км/ч до срабатывания камер',
				description: 'Камеры срабатывают только при превышении посчитанного лимита более чем на 20 км/ч. Показания 119 км/ч в зоне 100 км/ч — без штрафа. 121 км/ч — AED 600 (~$165). Буфер 20 км/ч встроен в систему и применяется по всему городу и на магистралях. Это не задокументированная «толерантность» — это системный порог.',
				fine: 'AED 600+ (~$165+) после порога',
				note: 'Salik (электронные платные дороги) — полностью автоматический; списывается с прокатной компании в конце поездки. Не останавливаться, не платить наличными.',
			},
			{
				city: 'Абу-Даби (Большая мечеть, Yas Island, корниш)',
				name: 'Нулевой буфер с 2018 года',
				description: 'Абу-Даби убрал буфер камер в 2018 году. Показания 101 км/ч в зоне 100 км/ч генерируют штраф AED 600 (~$165). То же поведение, что в Дубае проходит без штрафа, в Абу-Даби даёт штраф в момент пересечения границы юрисдикции. Та же федеральная шкала, другой порог применения.',
				fine: 'AED 600+ (~$165+) при +1 км/ч',
				note: 'Darb — система платных дорог Абу-Даби, работает аналогично Salik в Дубае.',
			},
			{
				city: 'Коридор E11 (Дубай ↔ Абу-Даби)',
				name: 'Налоговая ловушка на границе',
				description: 'Большинство российских туристов в Дубае делают как минимум одну поездку в Абу-Даби — Большая мечеть Шейха Заида, Yas Island или то и другое. E11 их соединяет и пересекает границу эмиратов без знаков, объявляющих смену порога применения. Установите круиз-контроль на лимит до границы; камеры Абу-Даби не ждут, пока вы заметите.',
				fine: 'Варьируется',
				note: 'GPS-приложения границу применения не отмечают. На карте граница та же; последствие — нет.',
			},
		],
		tip: 'Практическое правило: в ОАЭ юридический вопрос (нужен ли IDP) решается до вылета через проверку одобренного списка ОАЭ. Операционный вопрос (как отличается применение между эмиратами) решается тем, что вы ставите круиз-контроль на лимит, а не на +20. Камеры Абу-Даби — тихий генератор штрафов, превращающий один уикенд в трёхстрочный счёт.',
	},

	alphabet: {
		heading: 'Арабские дорожные знаки и фразы, которые встретятся',
		lead: 'Знаки в ОАЭ двуязычные арабский/английский на магистралях и крупных артериях. Часть мелких маршрутов и неформальных указателей — только на арабском.',
		badge: 'Арабская графика',
		examples: [
			{ sign: 'قف', latin: 'qif', meaning: 'Стоп' },
			{ sign: 'ممنوع الدخول', latin: 'mamnu\' al-dukhul', meaning: 'Въезд запрещён' },
			{ sign: 'ممنوع الوقوف', latin: 'mamnu\' al-wuquf', meaning: 'Стоянка запрещена' },
			{ sign: 'مخرج', latin: 'makhraj', meaning: 'Выезд' },
			{ sign: 'مدخل', latin: 'madkhal', meaning: 'Въезд' },
			{ sign: 'اتجاه واحد', latin: 'ittijah wahid', meaning: 'Одностороннее движение' },
			{ sign: 'تخفيف السرعة', latin: 'takhfif as-sur\'a', meaning: 'Снизить скорость' },
			{ sign: 'منطقة سكنية', latin: 'mintaqa sakaniyya', meaning: 'Жилая зона' },
		],
		helpsHeading: 'Чем IDP Companion помогает с алфавитным разрывом',
		helps: [
			'Показывает ваши ФИО, адрес и категории прав на арабском — читают офицеры ДПС ОАЭ и сотрудники прокатных стоек напрямую',
			'Плюс те же данные на английском (универсальный на каждой стойке проката), французском, испанском, немецком, итальянском и ещё 5 распространённых языках набора Женевской конвенции 1949 года',
			'Закрывает разрыв по одобренному списку ОАЭ (федеральный закон) И разрыв верификации (кириллица) одним документом',
			'Возите распечатанный IDP Companion как физическую бумагу — на проверках полиции ОАЭ ожидают именно её',
		],
		outro: 'Арабский и кириллица не пересекаются по алфавиту — носитель одного без подготовки другой не прочитает. Арабский на IDP Companion — документ, который делает российские права работоспособными в руках офицера в Дубае или Абу-Даби.',
	},

	phrases: {
		heading: 'Полезные арабские и английские фразы для ОАЭ',
		lead: 'Русский широко распространён в туристическом Дубае (отели, ритейл). Арабский и английский — рабочие языки на проверках полиции и стойках проката.',
		items: [
			{ phrase: 'هذه رخصة القيادة', translation: 'Вот мои водительские права', context: 'Произносится «hadhihi rukhsat al-qiyada». Передача документов на любом контроле' },
			{ phrase: 'وهذه وثيقة الترجمة', translation: 'А вот переводной документ', context: 'Произносится «wa-hadhihi wathiqat at-tarjuma». Показ IDP Companion рядом с российскими правами' },
			{ phrase: 'أنا سائح روسي', translation: 'Я российский турист', context: 'Произносится «ana sa\'ih rusi». Сразу обозначает контекст' },
			{ phrase: 'لا أتحدث العربية', translation: 'Я не говорю по-арабски', context: 'Произносится «la atahaddath al-\'arabiyya». Большинство офицеров ОАЭ в туристических зонах перейдёт на английский' },
			{ phrase: 'هل هناك مشكلة؟', translation: 'Есть какая-то проблема?', context: 'Произносится «hal hunaka mushkila?». Вежливое начало диалога на любом контроле' },
			{ phrase: 'لدي تأمين', translation: 'У меня есть страховка', context: 'Произносится «ladayya ta\'min». При ДТП — предъявите карточку страховки рентала' },
			{ phrase: 'أحتاج إلى الاتصال بشركة التأجير', translation: 'Мне нужно позвонить в прокатную компанию', context: 'При проблемах с машиной — в большинстве договоров есть круглосуточный номер' },
			{ phrase: 'شكراً لكم', translation: 'Спасибо', context: 'Произносится «shukran lakum». После окончания остановки — базовая вежливость в ОАЭ окупается' },
		],
	},

	howTo: {
		heading: 'Как подготовиться к вождению в ОАЭ россиянину',
		lead: 'У ОАЭ — самое чёткое требование IDP в этом гиде для российских туристов. Две минуты онлайн до вылета снимают и проблему одобренного списка ОАЭ, и разрыв верификации кириллицы.',
		schemaName: 'Как подготовиться к вождению в ОАЭ россиянину',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Получите IDP Companion как арабский переводной документ',
				text: '$35 — многоязычный цифровой PDF с переводом российских прав на арабский и английский (плюс французский, испанский, немецкий, итальянский и ещё 5 из набора Женевской конвенции 1949 года). Готов за 2 минуты онлайн, действует 1–5 лет. Закрывает оба основания — исключение из одобренного списка + верификация кириллицы — одним документом.',
			},
			{
				title: 'Проверьте, что в загранпаспорте действующая виза ОАЭ',
				text: 'Въездные штампы и визы ОАЭ проверяют на каждом стопе полиции вместе с водительскими документами. Россиянам — visa-on-arrival; считается дата въездного штампа. Без действующей записи о въезде ни одно прокатное агентство не оформит бронь — цепочка ломается до вопроса про одобренный список.',
			},
			{
				title: 'Распечатайте IDP Companion перед вылетом',
				text: 'На обычной бумаге дома или в любой гостинице в Дубае/Абу-Даби после прилёта. На проверках полиции ОАЭ ожидают физическую бумагу рядом с физическими российскими правами. Экраны телефонов ненадёжны под ярким солнцем и неудобны при подвижном контроле.',
			},
			{
				title: 'Носите весь набор в одной папке',
				text: 'Физические российские права + IDP Companion (распечатанный) + загранпаспорт с действующей визой ОАЭ + договор аренды + страховой полис. Одна папка, легко достаётся на любом контроле. Цифровые фото документов регулярно отказываются принимать.',
			},
			{
				title: 'Планируйте под нулевой буфер Абу-Даби',
				text: 'Установите круиз-контроль на посчитанный лимит при пересечении границы E11 в Абу-Даби. Буфер 20 км/ч, защищающий вас в Дубае, исчезает в момент пересечения. Большинство российских туристов делает хотя бы одну поездку Дубай → Абу-Даби; ловушка — на границе, не в скорости.',
			},
		],
	},

	honesty: {
		heading: 'Где IDP Companion помогает в ОАЭ — без преувеличений',
		lead: 'Для россиян ситуация в ОАЭ необычно однозначная — и правило Markhoos, и алфавитный разрыв с арабским ведут к одному ответу. Дальше — без приукрашиваний: что именно делает IDP Companion, чем не является и какие документы требует местный закон сверх него.',
		is: {
			title: 'Что такое IDP Companion',
			items: [
				'Многоязычный цифровой PDF с переводом данных российских прав на арабский, английский, французский, испанский, немецкий, итальянский и ещё 5 распространённых языков набора Женевской конвенции 1949 года',
				'Сделан, чтобы российские права становились читаемыми по-арабски на проверках полиции ОАЭ и по-английски на каждой эмиратской прокатной стойке',
				'Готов за минуты после загрузки прав и автоматической верификации',
				'Цена: $35 (1 год), $45 (3 года), $55 (5 лет) — разовая оплата, без подписок',
			],
		},
		isNot: {
			title: 'Чем IDP Companion НЕ является',
			items: [
				'Не государственный IDP по Женевской конвенции 1949 года',
				'Сам по себе не действителен — носить только вместе с физическими российскими правами',
				'Не решение для резидентов ОАЭ — после оформления Emirates ID нужны эмиратские права независимо от статуса IDP',
			],
		},
		helps: {
			title: 'Когда IDP Companion помогает россиянам в ОАЭ',
			items: [
				'На каждой стойке проката — Hertz, Avis, Sixt, Budget и местные конторы в DXB, AUH и SHJ — закрывая разрыв «одобренный список + кириллица» до выдачи ключей',
				'На проверках полиции в Дубае и Абу-Даби, где арабоязычные данные прав ускоряют верификацию',
				'При страховом разбирательстве после ДТП',
				'И в Дубае, и в Абу-Даби — покрывает весь маршрут одним документом, без отдельной документации на каждый эмират',
			],
		},
		needOfficial: {
			title: 'Документы, которые волнуют закон ОАЭ',
			items: [
				'Физические российские права — собственно разрешение на вождение (это ничем не заменяется)',
				'Загранпаспорт с действующей въездной визой ОАЭ — проверяют на стопах вместе с водительскими',
				'Договор аренды и страховой полис — выдаются прокатной компанией',
				'Транспондер Salik (Дубай) или Darb (Абу-Даби) — установлены заранее во всех крупных арендных машинах; не останавливаться, не платить наличными',
			],
		},
		pattern:
			'Что реально берут с собой подготовленные российские туристы в ОАЭ: физические российские права + IDP Companion (распечатанный) + загранпаспорт + виза ОАЭ + договор аренды + страховой полис. Переводной компаньон закрывает и проблему исключения из одобренного списка, и разрыв верификации кириллицы, которые сама книжка IDP не закрывает. Две минуты подготовки, $35 — и снят документальный вопрос на каждой эмиратской прокатной стойке и проверке полиции.',
	},

	renting: {
		heading: 'Аренда машины в ОАЭ с российскими правами',
		lead: 'Прокатные политики ОАЭ единообразно строги к комбинации «одобренный список + кириллица». Каждая крупная сеть применяет требование IDP для российских прав как зафиксированное условие брони.',
		chains: [
			{ name: 'Hertz UAE', policy: 'IDP обязателен для всех прав не из списка одобренных стран ОАЭ и не на латинице. Российские права попадают в обе категории. Доступен в DXB, AUH, SHJ и городских отделениях. С 21 года; доплата для младше 25. Карта обязательна' },
			{ name: 'Avis UAE', policy: 'Та же политика IDP для российских прав. Доступен в DXB, AUH и крупных городских отделениях Дубая/Абу-Даби. С 21 года' },
			{ name: 'Sixt UAE', policy: 'IDP обязателен для российских прав. Аэропорты DXB и DWC. Карта (не дебетовая) обязательна. С 21 года' },
			{ name: 'Местные конторы ОАЭ (Дейра, Аль-Барша)', policy: 'Многие независимые операторы привычны к русскоязычным клиентам. Часть принимает переводные компаньоны IDP Companion-стиля; часть требует именно государственную книжку IDP — уточняйте письменно до брони' },
		],
		tipsHeading: 'Практические советы для ОАЭ',
		tips: [
			'Автомат — стандарт по всему парку аренды ОАЭ; механика не предлагается',
			'Salik (Дубай) и Darb (Абу-Даби) полностью автоматические — списываются с прокатной компании; без остановок и наличных',
			'Топливо значительно дешевле, чем в России — стандарт full-to-full во всех крупных сетях',
			'Карта обязательна для депозита; холды AED 1 500–5 000 (~$410–$1 360) — стандарт',
			'Минимальный возраст 21 во всех крупных сетях; премиум и 4WD могут требовать 25',
			'Пустыня / off-road — явно исключено из стандартных договоров; уточняйте отдельно',
			'Левая полоса на магистралях — только для быстрого трафика; медленная езда в левой — отдельный штраф (AED 400)',
			'Кондиционер обязателен — летом регулярно за 45°C; рабочий кондиционер важнее других опций',
		],
	},

	outcomes: {
		heading: 'Что бывает, если ехать без IDP — реальные сценарии',
		lead: 'Реалистичные сценарии для российских водителей в ОАЭ, по убыванию частоты.',
		items: [
			{
				severity: 'low',
				frequency: 'Очень часто с IDP',
				label: 'IDP Companion + российские права, чистая поездка',
				text: 'Полный набор документов, аренда оформляется на стойке, на контроле без вопросов. Ожидаемый исход.',
			},
			{
				severity: 'high',
				frequency: 'Очень часто без IDP',
				label: 'Стойка проката отказывает в выдаче',
				text: 'Все крупные сети применяют требование «одобренный список + кириллица». Бронь не действует. Вы стоите у стойки, пока очередь обходит вас, потом такси до отеля — стоимость перелёта + брони уже потрачена.',
			},
			{
				severity: 'low',
				frequency: 'Иногда',
				label: 'Камера скорости, Дубай',
				text: 'AED 600 (~$165) минимум за порогом 20 км/ч. 48-часовое письмо в прокатную компанию, автосписание с карты.',
			},
			{
				severity: 'med',
				frequency: 'Иногда',
				label: 'Камера скорости, Абу-Даби',
				text: 'Нулевой буфер с 2018 года — срабатывает на +1 км/ч. Та же шкала эскалации, что в Дубае. Самый дорогой сюрприз на пересечении границы E11.',
			},
			{
				severity: 'low',
				frequency: 'Иногда',
				label: 'Проверка полиции, IDP есть',
				text: 'Арабский перевод верифицируется за секунды. Рутинная проверка проходит гладко.',
			},
			{
				severity: 'high',
				frequency: 'Реже',
				label: 'Проверка полиции, IDP нет',
				text: 'AED 2 000–10 000 за первое нарушение (~$545–$2 720). Возможен затянутый стоп до связи с прокатной компанией. Сам штраф маленький относительно потерянного времени и задержки в день аренды.',
			},
			{
				severity: 'high',
				frequency: 'Редко при подготовке',
				label: 'Любой алкоголь за рулём',
				text: 'AED 20 000 (~$5 440) + обязательное лишение свободы + изъятие машины 60 дней + уголовная запись. Нулевая толерантность абсолютна — без округлений и порогов.',
			},
		],
		math: 'IDP Companion — $35. Отказ в выдаче в DXB означает переброню или поиск наземного транспорта до отеля — минимум полдня потеряно. Штраф за первое нарушение AED 2 000 без IDP — ~$545. Ни один из этих исходов — не то, как должна начаться поездка в Дубай.',
	},

	faq: {
		heading: 'Частые вопросы',
		items: [
			{
				id: 1,
				question: 'Почему именно россиянам нужен IDP в ОАЭ?',
				answer: 'Две причины, обе юридические. Первая: России нет в списке 52 одобренных стран ОАЭ (инициатива Markhoos) — российские туристические права не признаны для вождения без IDP по федеральному закону ОАЭ. Вторая: кириллицу не читают власти ОАЭ и сотрудники проката, поэтому прокатные компании применяют требование перевода как условие брони. Оба условия применяются одновременно.',
			},
			{
				id: 2,
				question: 'Какой штраф за вождение в ОАЭ без необходимых документов?',
				answer: 'По Federal Decree-Law No. 14 от 2024 года ОАЭ вождение с правами, не признанными властями ОАЭ, влечёт штраф от AED 2 000 до AED 10 000 (~$545–$2 720) за первое нарушение. Это прямое следствие отсутствия России в списке одобренных стран ОАЭ.',
			},
			{
				id: 3,
				question: 'IDP Companion — это то же, что государственный IDP?',
				answer: 'Нет. Государственный IDP — официальная книжка по Женевской конвенции 1949 года, выданная уполномоченным национальным органом (в России — Всероссийский Автомобильный Клуб, РОСАВТОКЛУБ). IDP Companion — частный многоязычный переводной документ с данными ваших российских прав на арабском, английском и ещё 9 языках — используется вместе с оригиналом прав. Уточняйте у конкретного прокатного агентства, принимают ли они переводной документ; крупные агентства, как правило, принимают IDP Companion как требуемый перевод.',
			},
			{
				id: 4,
				question: 'Что значит нулевой алкоголь в ОАЭ на практике?',
				answer: 'Это значит ноль обнаруживаемого алкоголя за рулём, точка. Никаких порогов, округлений, безопасных доз. Отели и лицензированные рестораны Дубая и Абу-Даби продают алкоголь — закон ОАЭ различает потребление и управление машиной. Если выпиваете — в этот день не за рулём. Минимальное наказание — AED 20 000 (~$5 440), обязательное лишение свободы, изъятие машины.',
			},
			{
				id: 5,
				question: 'Чем Дубай и Абу-Даби отличаются по контролю скорости?',
				answer: 'В Дубае буфер 20 км/ч — камеры срабатывают только при превышении лимита более чем на 20 км/ч. В Абу-Даби с 2018 года применяется нулевая толерантность: любое превышение, начиная с +1 км/ч, генерирует штраф. Большинство российских туристов ездит между обоими эмиратами — магистраль E11 связывает Дубай и Абу-Даби и пересекает внутреннюю границу, где порог применения меняется без очевидных знаков.',
			},
			{
				id: 6,
				question: 'Можно ли оплатить штраф ОАЭ самому, минуя прокатную компанию?',
				answer: 'Штрафы привязаны к номеру машины и по умолчанию выписываются прокатной компании. Контора списывает с карты и уведомляет вас. Можно проверить и оплатить штрафы напрямую через приложение Dubai Police, сайт RTA Дубая или онлайн-портал Abu Dhabi Police по номеру. Прямая оплата избегает комиссии за обработку, которую часть операторов добавляет.',
			},
			{
				id: 7,
				question: 'Как работает Salik?',
				answer: 'Salik — полностью электронная система платных дорог Дубая. У арендных машин транспондер Salik установлен на лобовое стекло — оплата считывается автоматически и списывается с прокатной компании, которая включает её в финальный счёт. Не останавливаться, не платить наличными, никак не взаимодействовать с системой во время езды. Darb в Абу-Даби работает аналогично на платных участках.',
			},
			{
				id: 8,
				question: 'Можно ли совмещать ОАЭ с другими направлениями в одной поездке?',
				answer: 'Да. Российские туристы часто совмещают Дубай с Египтом, Турцией, Таиландом или Индонезией в одном сезоне. IDP Companion даёт данные прав на нужных языках набора Женевской конвенции 1949 года — арабский для ОАЭ и Египта, английский универсально везде — так что одного документа хватает на весь круг.',
			},
			{
				id: 9,
				question: 'Можно ли получить IDP уже в ОАЭ?',
				answer: 'Нет. International Driving Permit выдаётся только в стране, где выданы национальные права — власти ОАЭ не выдают IDP иностранным туристам. Для российских прав это значит IDP по Женевской 1949 в России до отъезда. IDP Companion можно сгенерировать онлайн откуда угодно — печатается в любой гостинице ОАЭ за минуты после оплаты.',
			},
			{
				id: 10,
				question: 'Сколько действует IDP Companion для поездок в ОАЭ?',
				answer: 'На выбор: 1 год ($35), 3 года ($45), 5 лет ($55). Срок привязан к вашим российским правам — если они истекают, истекает и компаньон. Одна покупка покрывает ОАЭ плюс Египет, Турцию, Таиланд, Индонезию, Грецию и любые другие направления, которые вы посетите за выбранный период.',
			},
		],
	},

	related: {
		heading: 'Похожие гиды',
		lead: 'Соседние направления Ближнего Востока и Азии, где российские права упираются в строгие правила и потребность в арабской/латинской транслитерации.',
		comingSoonLabel: 'Скоро',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Россия → Таиланд', status: 'В эфире', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Россия → Египет', status: 'В эфире', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Россия → Греция', status: 'В эфире', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Россия → Индонезия', status: 'В эфире', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Россия → Турция', status: 'В эфире', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'США → ОАЭ', status: 'В эфире', href: '/idp-for-us-drivers-in-uae/' },
		],
	},

	finalCta: {
		heading: 'Готовы оформить IDP Companion?',
		text: 'Многоязычный PDF с арабским, английским, французским, испанским и ещё 7 распространёнными языками набора Женевской конвенции 1949 года — готов за 2 минуты по вашим реальным российским правам. Печатайте дома или из любой гостиницы. Действует 1–5 лет — покроет эту поездку и следующие в ОАЭ, Египет, Турцию, Таиланд, Индонезию, Грецию. $35 / 1 год · $45 / 3 года · $55 / 5 лет. Разовый платёж, без подписок.',
		button: 'Начать оформление',
	},

	legal: {
		disclaimerHeading: 'Дисклеймер',
		disclaimer:
			'IDP Companion — это частный многоязычный переводной документ. Мы не аффилированы с Министерством внутренних дел ОАЭ, Дубайским управлением дорог и транспорта (RTA) или Abu Dhabi Police. IDP Companion не является государственным International Driving Permit по Женевской конвенции 1949 года или Венской конвенции 1968 года; в России к уполномоченным эмитентам национальных IDP относится в том числе Всероссийский Автомобильный Клуб (РОСАВТОКЛУБ). IDP Companion используется только вместе с оригиналом ваших российских прав.',
		sourcesHeading: 'Источники',
		sources: [
			'Federal Decree-Law No. 14 от 2024 года ОАЭ о дорожном движении (uaelegislation.gov.ae)',
			'Инициатива Markhoos 2025 — Министерство внутренних дел ОАЭ',
			'Дубайское управление дорог и транспорта (RTA) — rta.gov.ae',
			'Abu Dhabi Police — применение и документация 2025',
			'Публичные руководства РОСАВТОКЛУБа',
		],
	},

	og: {
		originName: 'Россия',
		destinationName: 'ОАЭ',
	},
};

export const russiaUaeCopy: Record<'en' | 'ru', CountryPairCopy> = { en, ru };
