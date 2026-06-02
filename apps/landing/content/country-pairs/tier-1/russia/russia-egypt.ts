/**
 * Country-pair content: Russia → Egypt.
 * Locales: en, ru.
 *
 * Unique angle: Egypt has the most justified IDP requirement in this guide —
 * direct consequence of signing the 1949 Geneva Convention plus military
 * checkpoints on Sinai/Upper Egypt routes where Cyrillic is genuinely unreadable.
 * Scooter-in-Naama-Bay sub-section is the high-extraction tourist trap angle.
 *
 * SEO add-ons present: tldr, lez (military checkpoint corridors), alphabet (Arabic),
 * phrases, howTo, lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Egypt IDP for Russian Drivers — Cyrillic Unreadable, Sinai Risk',
		description:
			"Egypt requires an IDP under the 1949 Geneva Convention — and Russian Cyrillic is physically unreadable at the military checkpoints between Hurghada, Luxor and the Sinai. 2026 guide: fines, Naama Bay scooter razzia, the Arabic-reframing that resolves both.",
		ogTitleShort: 'Egypt IDP for Russian Drivers',
		ogSubtitle: 'Geneva 1949 · Cyrillic unreadable · Sinai checkpoints',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'Russia → Egypt',
	},
	lastReviewed: 'June 2026',

	hero: {
		kicker: 'Russia → Egypt · 2026 Guide',
		title: 'Egypt IDP for Russian Drivers — Cyrillic & Sinai Checkpoints',
		lead: "The checkpoint between Hurghada and Luxor is a sandbagged military position with armed soldiers, a barrier across the road, and a process that runs in Arabic. The Russian licence handed across is unreadable Cyrillic — the officer turns it over and asks again in Arabic. Egypt signed the 1949 Geneva Convention, which makes an IDP a legal requirement for every foreign tourist who drives, with no nationality exception. Two-thirds of the Russians who never leave Sharm or Hurghada don't encounter this. Q1 2026 r/Egypt and Russian-language Forum.Vinskogo Egypt threads continue logging the Luxor-road and Dahab-road checkpoint pattern for those who do rent a car. Two minutes with the right document. Significantly longer without it.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — IDP is required for every foreign tourist who drives in Egypt',
		text: 'Egypt is a signatory to the 1949 Geneva Convention on Road Traffic. There are no nationality exceptions and no tourist-visa exemptions — the IDP requirement applies to all foreign drivers. For Russians the friction is doubled: Cyrillic on the licence is genuinely unreadable to Egyptian military officers and traffic police working in Arabic. Two minutes before departure resolves both problems.',
	},

	tldr: {
		heading: 'Russian Licence alone vs IDP Companion in Egypt',
		lead: "Two forces converge here — Geneva 1949 makes the IDP a legal mandate, and the Cyrillic-to-Arabic script gap makes a Russian licence physically unreadable to the officer holding it. Most Egypt destinations Russians actually rent in (Hurghada, Sharm, Luxor, Aswan) hit both at once.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Egypt',
		colCost: 'Cost',
		rows: [
			{
				document: 'Russian Licence (alone)',
				whatItDoes: 'Not sufficient — IDP is legally required under the 1949 Geneva Convention; Cyrillic text is unreadable by Egyptian military and police officers; major rental chains (Hertz, Avis, Sixt) refuse to process the rental without IDP.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + Russian licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in Arabic, English, French, Spanish and 8 other languages. Provides the Arabic-language verification that makes the licence readable at military checkpoints, tourist police stops in Sharm/Hurghada, and rental desks in Cairo, Hurghada, Sharm el-Sheikh and Luxor.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Egypt: physical Russian driving licence + IDP Companion + passport with valid Egyptian entry visa + rental contract + insurance. IDP Companion is a translation companion — must be carried alongside the original licence, not as a standalone document.",
	},

	whyNotEnough: {
		heading: 'Why Russian licences hit two walls at once in Egypt',
		lead: "Most countries on this list enforce IDP through rental policy. Egypt enforces it through international treaty plus an alphabet barrier — neither has a workaround.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The Geneva Convention basis',
				text: "Egypt signed the 1949 Geneva Convention on Road Traffic. Under it, every signatory country requires foreign tourists who drive to carry a valid IDP alongside the national licence. This isn't a domestic regulation that varies by interpretation — it is an international treaty obligation Egypt enforces. No tourist-visa exemption, no short-stay grace period, no exception for Russian licences.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The Cyrillic problem',
				text: 'Egyptian military officers and traffic police work in Arabic. Cyrillic presents zero decodable information to an Arabic reader — unlike a Latin-script licence, which can at least be partially interpreted. The IDP or translation document doesn\'t supplement the Russian licence in Egypt. It is the document that makes the licence function in the hands of an officer who reads neither Latin nor Cyrillic.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The military checkpoint structure',
				text: "Egypt operates security checkpoints — soldiers, not police — on the Hurghada–Luxor road, the Sinai routes between Sharm el-Sheikh and Dahab, and the Upper Egypt corridor toward Aswan. They appear every 40–80 km outside tourist zones. With proper documentation the stop runs two to five minutes. Without it, the car holds at the barrier until the situation resolves through whatever channel the officer decides on.",
			},
		],
	},

	rules: {
		heading: 'Egypt driving rules Russians should know',
		lead: 'Side of road is the same as Russia. Most rules feel familiar — alcohol is the strict outlier and Cairo traffic is its own category.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as Russia — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '60 km/h', note: '30 km/h in school zones' },
			{ icon: 'mdi:road-variant', label: 'Open road', value: '90 km/h', note: 'National roads' },
			{ icon: 'mdi:speedometer-medium', label: 'Highway', value: '100–120 km/h', note: 'Posted signs override the general limit' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.00% BAC', note: "Same as Russia's zero tolerance — strictly enforced" },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'Active enforcement on intercity routes' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory', note: 'Driver and front passenger' },
			{ icon: 'ph:traffic-cone-bold', label: 'Military checkpoints', value: 'Frequent', note: 'Sinai, Hurghada–Luxor, Upper Egypt routes' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Egyptian fines are low in absolute USD terms but issued and collected on the spot. Military checkpoint outcomes are about time and process, not the fine amount.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP (foreign licence)', amount: 'EGP 500–2,000 (~$10–40)', note: 'Vehicle detention at checkpoints is the real consequence', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Speeding', amount: 'EGP 500–2,000 (~$10–40)', note: 'Camera enforcement increasing on intercity routes', severity: 'low' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'EGP 1,000–3,000 (~$20–60)', note: 'Cairo enforcement uneven; cameras expanding', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'EGP 500–1,000 (~$10–20)', note: 'Front occupants; inconsistent enforcement', severity: 'low' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'EGP 500–1,500 (~$10–30)', note: '', severity: 'low' },
			{ icon: 'mdi:beer-outline', label: 'DUI (any alcohol)', amount: 'EGP 5,000–20,000+ (~$100–400+)', note: 'Criminal offence; vehicle impound; potential arrest', severity: 'high' },
			{ icon: 'mdi:motorbike', label: 'Scooter without IDP/motorcycle category', amount: 'EGP 1,000–5,000 (~$20–100)', note: 'Tourist police target this in Sharm/Hurghada', severity: 'high' },
			{ icon: 'mdi:helmet', label: 'No helmet on scooter', amount: 'EGP 300–1,000 (~$6–20)', note: 'Tourists specifically targeted at resort checkpoints', severity: 'med' },
		],
		caption: 'Sources: Egyptian Traffic Law No. 66 of 1973 (as amended); Egypt Ministry of Interior enforcement guidance 2025; UK FCDO Egypt travel advice. EGP/USD rate fluctuates significantly — figures approximate at April 2026 rates.',
	},

	lez: {
		heading: 'Egypt enforcement zones — military checkpoints and tourist police',
		badge: 'Egypt-specific',
		lead: 'Three corridors account for the overwhelming majority of foreign-tourist document checks in Egypt. None operates like a normal traffic stop.',
		zones: [
			{
				city: 'Hurghada → Luxor / Marsa Alam',
				name: 'Red Sea–Nile Valley military corridor',
				description: "Soldier-staffed checkpoints every 40–80 km along the Hurghada–Luxor desert road and the coastal Route 33 toward Marsa Alam. Stops are about security verification, not traffic enforcement. Officers ask for passport and driving documents — Arabic is the operational language. The stop runs two to five minutes with proper documentation. Without IDP, the vehicle holds at the barrier until the situation resolves through the chain of command at that post.",
				fine: 'No fixed fine — vehicle held',
				note: 'Slow down well before the barrier, turn off music, have passport + Russian licence + IDP Companion ready before the officer asks. Don\'t reach for documents while moving.',
			},
			{
				city: 'Sharm el-Sheikh / Hurghada coastal strip',
				name: 'Tourist police scooter razzia',
				description: 'Tourist police run regular checks on the main coastal road in Sharm and along the Hurghada seafront, partly targeting scooter renters without documentation. Egypt requires a motorcycle endorsement on a valid IDP to ride a scooter. Rental shops in Naama Bay don\'t check this. The checkpoint after you leave does. Fine collected on the spot, scooter impounded, rental shop holds the passport you left as deposit.',
				fine: 'EGP 1,000–5,000 + impound',
				note: 'Verify your Russian licence carries Category A (motorcycle) before adding it to IDP Companion. If it\'s car-only, stick to cars or arrange transport — the scooter route is technically illegal from the first metre.',
			},
			{
				city: 'Sinai (Sharm → Dahab → Nuweiba)',
				name: 'Sinai security checkpoints',
				description: "Multiple staffed checkpoints on Sinai routes. Sinai is a regulated travel zone — some areas require permits and certain off-road segments are restricted entirely. Tourist routes between Sharm el-Sheikh, Dahab and Nuweiba are open with standard documentation. Document checks are routine, polite, and quick when the paperwork lines up.",
				fine: 'Variable',
				note: 'Check current UK FCDO or Russian MFA Sinai travel advice the week of departure — restrictions can shift on short notice. Stick to the main coastal road; do not deviate into restricted desert zones.',
			},
		],
		tip: "Practical rule: in Egypt, the checkpoint is not a fine situation — it is a documentation situation. The fine for missing IDP is small. The time cost of resolving it 60 km from Luxor in July, in 42°C heat, is the actual cost. Two minutes of preparation before flying removes both.",
	},

	alphabet: {
		heading: 'Arabic road signs and phrases you will see',
		lead: 'Outside the resort areas, road signs and checkpoint dialogue are in Arabic. A few signs and a few phrases cover most situations.',
		badge: 'Arabic script',
		examples: [
			{ sign: 'قف', latin: 'qif', meaning: 'Stop' },
			{ sign: 'ممنوع الدخول', latin: 'mamnu\' al-dukhul', meaning: 'No entry' },
			{ sign: 'ممنوع الوقوف', latin: 'mamnu\' al-wuquf', meaning: 'No parking' },
			{ sign: 'مخرج', latin: 'makhraj', meaning: 'Exit' },
			{ sign: 'مدخل', latin: 'madkhal', meaning: 'Entrance' },
			{ sign: 'اتجاه واحد', latin: 'ittijah wahid', meaning: 'One way' },
			{ sign: 'تخفيف السرعة', latin: 'takhfif as-sur\'a', meaning: 'Reduce speed' },
			{ sign: 'منطقة عسكرية', latin: 'mintaqa \'askariyya', meaning: 'Military zone — do not enter' },
		],
		helpsHeading: 'How IDP Companion helps with the Arabic problem',
		helps: [
			'Presents your name, address and licence categories in Arabic — readable to officers at military and tourist police checkpoints',
			'Provides the same data in English as a secondary fallback for officers who prefer it',
			'Removes the "I cannot read this document" pretext that turns a two-minute stop into a longer one',
			'Pairs with the printed IDP Companion as physical paper — phones at desert checkpoints are unreliable',
		],
		outro: "The Cyrillic problem isn't theoretical in Egypt. The translation isn't a courtesy — it's the only way the document functions at all in the hands of the person checking it.",
	},

	phrases: {
		heading: 'Useful Arabic phrases for Egyptian checkpoints and rentals',
		lead: 'Resort areas have Russian-speaking staff. Sinai and Upper Egypt checkpoints don\'t. These phrases cover what actually comes up.',
		items: [
			{ phrase: 'هذه رخصة القيادة', translation: 'Here is my driving licence', context: 'Handing over documents at any checkpoint — say this as you pass the licence' },
			{ phrase: 'وهذه وثيقة الترجمة', translation: 'And this is the translation document', context: 'Showing IDP Companion alongside the Russian licence' },
			{ phrase: 'أنا سائح روسي', translation: "I'm a Russian tourist", context: 'Establishes context immediately — often softens the encounter at military stops' },
			{ phrase: 'لا أتكلم العربية', translation: "I don't speak Arabic", context: 'Honest disclosure if the officer speaks quickly — most will switch to basic English at tourist-area stops' },
			{ phrase: 'هل هناك مشكلة؟', translation: 'Is there a problem?', context: 'Polite opening at any checkpoint stop — keep tone calm and respectful' },
			{ phrase: 'لدي تأمين', translation: 'I have insurance', context: 'In case of an accident — present the rental insurance card with this phrase' },
			{ phrase: 'أحتاج الاتصال بشركة التأجير', translation: 'I need to call the rental company', context: 'If there\'s a vehicle issue — most rental contracts include a 24h emergency number' },
			{ phrase: 'شكرا لكم', translation: 'Thank you', context: 'After the stop concludes — basic courtesy is rewarded everywhere in Egypt' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Egypt as a Russian citizen',
		lead: "Egypt's IDP requirement is real and the Cyrillic problem is physical. Both resolve cleanly with two minutes of preparation before flying.",
		schemaName: 'How to prepare for driving in Egypt as a Russian citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion as the Arabic translation aid',
				text: '$35 buys a multilingual digital PDF translating your Russian licence into Arabic and English (plus French, Spanish and 8 others). Issued in 2 minutes online, valid 1–5 years. Resolves the Cyrillic problem at every Egyptian rental desk and military checkpoint.',
			},
			{
				title: 'Verify your Russian licence categories before adding scooter use',
				text: 'Egypt requires a motorcycle endorsement on a valid IDP to ride a scooter or motorbike. Check the reverse of your Russian licence for category letters — A or A1 covers scooters. If only B is listed, scooter rental in Sharm or Hurghada is technically illegal from the first metre.',
			},
			{
				title: 'Print IDP Companion before flying',
				text: 'Print on standard paper at home or from any hotel after arrival. Phones at desert checkpoints in Upper Egypt and the Sinai are unreliable in variable light and patchy data coverage. A printed copy alongside the physical Russian licence is what officers expect.',
			},
			{
				title: 'Carry the full document set in one folder',
				text: 'Physical Russian driving licence + IDP Companion (printed) + passport with valid Egyptian entry visa + rental contract + rental insurance card. Keep them together. Digital photos of documents are routinely refused at military checkpoints.',
			},
			{
				title: 'Check Sinai travel advisories the week of departure',
				text: 'Sinai is a regulated travel zone — restrictions can shift on short notice. Check current UK FCDO Egypt travel advice or the Russian MFA Sinai page in the week before flying. Stick to the main coastal road between Sharm el-Sheikh, Dahab and Nuweiba. Do not deviate into restricted desert zones.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Egypt — honestly',
		lead: "Two layers stack against a Russian licence in Egypt — the Geneva 1949 legal mandate and the Cyrillic-to-Arabic script gap. What follows lays out what IDP Companion closes and what it doesn't.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your Russian licence data into Arabic, English, French, Spanish and 8 other languages',
				'Designed to make the Russian licence verifiable to Arabic-speaking officers at military checkpoints, tourist police stops and rental desks',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not valid by itself — must be carried alongside your physical Russian driving licence',
				'Not a motorcycle endorsement for a licence that doesn\'t already carry one — IDP Companion reflects what\'s on your licence, not what isn\'t',
			],
		},
		helps: {
			title: 'When IDP Companion helps Russian drivers in Egypt',
			items: [
				'At rental desks in Cairo, Hurghada, Sharm el-Sheikh and Luxor where IDP is a documented booking condition for non-Arabic, non-English licences',
				'At military checkpoints on the Hurghada–Luxor road and Sinai routes — Arabic translation makes the licence verifiable in seconds',
				'At tourist police stops in resort areas, particularly for scooter and motorbike riders',
				'When insurance documentation is reviewed after an accident — Arabic-language translation establishes licence validity for the claim',
			],
		},
		needOfficial: {
			title: 'Documents the local law cares about',
			items: [
				'Your physical Russian driving licence — the actual permission to drive (no document substitutes for this)',
				'Passport with valid Egyptian entry visa — military checkpoints check both',
				'Rental insurance — third-party liability is standard in all Egyptian rentals; carry the card in the vehicle',
				'For scooters: a Russian licence that already carries Category A (motorcycle) — IDP Companion reflects it but cannot create it',
			],
		},
		pattern:
			"What prepared Russian travellers in Egypt actually carry: physical Russian licence + IDP Companion (printed) + passport + Egyptian visa + rental contract + insurance card, all in one folder. The translation companion solves the Cyrillic problem the booklet alone does not. Two minutes of preparation, $35, removes the document issue from every interaction with an Egyptian officer.",
	},

	renting: {
		heading: 'Renting a car in Egypt as a Russian driver',
		lead: 'Major chains operate at Cairo (CAI), Hurghada (HRG), Sharm el-Sheikh (SSH) and Luxor (LXR) airports. All require IDP for Russian Cyrillic licences — the policy is consistent across international and most local agencies.',
		chains: [
			{ name: 'Hertz Egypt', policy: 'IDP required for all non-Arabic, non-English licences. Russian licence requires IDP. Minimum age 21; credit card for deposit' },
			{ name: 'Avis Egypt', policy: 'Same policy as Hertz. IDP required for Russian Cyrillic licence. Available at major airports' },
			{ name: 'Sixt Egypt', policy: 'IDP required for Cyrillic-script licences. Available at CAI and HRG' },
			{ name: 'Local agencies (Hurghada, Sharm, Luxor)', policy: 'Familiar with Russian-speaking customers. Some accept translation documents; others insist on the government-format IDP booklet — verify before booking' },
		],
		tipsHeading: 'Practical tips for Egypt',
		tips: [
			'Minimum age 21 at all major agencies; some local operators accept 18 with a surcharge',
			'Manual transmission is standard at local agencies; automatic available but more expensive and limited at non-chain operators',
			'Credit card for deposit at international chains; local operators often accept cash deposits',
			'Fuel: Egypt has subsidised fuel — significantly cheaper than Russia or Europe; full-to-full policy standard',
			'Air conditioning is essential — summer regularly exceeds 40°C; prioritise functioning AC over other vehicle features',
			'Cairo: most Russian tourists should avoid self-driving entirely; Uber works reliably and is inexpensive',
			'Intercity routes: plan for checkpoints every 40–80 km outside tourist areas — produce documents without being asked twice',
			'Night driving outside cities: not recommended on unfamiliar routes — road surfaces deteriorate, lighting is absent, and livestock are present after dark',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: "What Russian drivers actually run into in Egypt — Sinai military checkpoints, Hurghada scooter razzia, Luxor-road tourist police stops — ordered by how often each plays out.",
		items: [
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Resort area only — no driving',
				text: "Sharm and Hurghada are walkable; most Russian tourists don't rent cars at all. The IDP question doesn't arise.",
			},
			{
				severity: 'low',
				frequency: 'Common with IDP',
				label: 'Car rental with IDP Companion, clean drive',
				text: 'Full documentation, rental processed without discussion, checkpoints clear in two to five minutes. The expected outcome.',
			},
			{
				severity: 'high',
				frequency: 'Very common without IDP',
				label: 'Rental refused at the desk',
				text: 'IDP is legally required and all major chains enforce it. The agent at Hurghada or Cairo airport doesn\'t process the rental — you stand at the desk while the rest of the queue moves around you.',
			},
			{
				severity: 'med',
				frequency: 'Occasional on intercity routes',
				label: 'Military checkpoint, no IDP',
				text: 'Vehicle holds at the barrier until the situation resolves through the chain of command at that post. The fine itself is small. The time cost — measured in hours, in heat, with no shade — is the actual consequence.',
			},
			{
				severity: 'high',
				frequency: 'Occasional in resort areas',
				label: 'Scooter without IDP/motorcycle category',
				text: 'Tourist police checkpoint on the coastal road, fine collected on the spot, scooter impounded, rental shop holds the passport you left as deposit. A documented Sharm and Hurghada pattern targeting tourists specifically.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI — any alcohol while driving',
				text: 'Egypt is 0.00% BAC. Alcohol is available in hotel bars; driving after consumption is criminal, not a fine situation. Vehicle impound, potential arrest, embassy involvement.',
			},
		],
		math: 'IDP Companion is $35. The Egypt rental refusal scenario costs the trip\'s rental day plus the rebooking. The military checkpoint scenario costs a desert afternoon. The scooter razzia scenario costs the impound fee plus the passport-return negotiation. Preparation costs $35 once.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Is an IDP legally required for Russian tourists driving in Egypt?',
				answer: 'Yes — without exception. Egypt is a signatory to the 1949 Geneva Convention on Road Traffic, which requires every foreign tourist who drives to carry a valid IDP alongside the national licence. There is no nationality exception, no tourist-visa exemption, and no short-stay grace period.',
			},
			{
				id: 2,
				question: 'Why is the IDP especially important for Russian drivers specifically?',
				answer: 'Russian licences are written in Cyrillic. Egyptian military officers and police work in Arabic and cannot read Cyrillic at all. The IDP or translation document provides the Arabic-language presentation of your licence data that makes verification possible at checkpoints. Without it, the licence is genuinely unreadable to the officer holding it — not a courtesy issue, a physical one.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: "No. A government IDP is a formal booklet issued under the 1949 Geneva Convention by an authorised national organisation (in Russia, the All-Russian Automobile Society — РОСАВТОКЛУБ). IDP Companion is a private multilingual translation document presenting your Russian licence details in Arabic, English, French, Spanish and 8 other languages. For Egypt, verify with your specific rental agency whether they accept a translation document or require the government-format booklet — major international chains generally accept IDP Companion as the required translation document.",
			},
			{
				id: 4,
				question: 'Should I drive in Cairo?',
				answer: 'Honest answer: no, if you don\'t already know the city. Cairo traffic operates on horn communication, proximity negotiation and incremental assertion that Egyptian residents describe as a skill acquired over years. For a Russian tourist on a two-week trip, it is not the place to learn. Uber and Careem operate reliably in Cairo and are inexpensive. For trips to the Pyramids, Saqqara or the Egyptian Museum, they are the correct transport.',
			},
			{
				id: 5,
				question: 'What are the military checkpoints and are they dangerous?',
				answer: 'Military checkpoints are security positions on intercity routes — particularly Hurghada–Luxor, the Sinai routes between Sharm el-Sheikh and Dahab, and the Upper Egypt corridor toward Aswan. They are staffed by soldiers, not traffic police, and exist for security reasons unrelated to traffic enforcement. With proper documentation the stop runs two to five minutes — slow down well before the barrier, turn off music, have documents ready before being asked. They are not dangerous but they are not optional either.',
			},
			{
				id: 6,
				question: 'Can I ride a scooter in Sharm el-Sheikh without an IDP?',
				answer: 'Legally, no. Egypt requires a motorcycle endorsement on a valid IDP to ride a motorised scooter. Rental shops in Naama Bay don\'t check this. Tourist police on the coastal road do — it\'s a documented enforcement pattern. The scooter is impounded, the fine is collected on the spot, and the rental shop holds your passport as deposit. Verify your Russian licence carries Category A (motorcycle) before adding it to IDP Companion. If it\'s car-only, stick to cars.',
			},
			{
				id: 7,
				question: 'How does Egypt\'s zero BAC rule work in practice?',
				answer: "Egypt's alcohol limit is 0.00% — the same standard as Russia, strictly enforced. Alcohol is sold in hotel bars and licensed venues but driving after any consumption is criminal. If you drink at the resort bar in the evening, you don't drive that night. The penalty is criminal arrest and vehicle impound, not a fine.",
			},
			{
				id: 8,
				question: "What's the best drive worth doing in Egypt as a Russian tourist?",
				answer: 'The Red Sea coastal highway south from Hurghada toward Marsa Alam — Route 33 along the coastline — is genuinely spectacular: mountains meeting the Red Sea, almost no traffic, clear road surface, occasional turnoffs to dive sites and fishing villages. Roughly 200 km with fuel available in Marsa Alam. One or two checkpoints. With documentation in order, they\'re two-minute stops on a drive worth the preparation.',
			},
			{
				id: 9,
				question: 'Can I get an IDP after I arrive in Egypt?',
				answer: 'No. International Driving Permits must be issued in the country where your driving licence was issued — Egyptian authorities don\'t issue IDPs to foreign tourists. For Russian licence holders this means a 1949 Geneva IDP obtained in Russia before traveling. IDP Companion can be generated online from anywhere as a multilingual translation companion — printable from any hotel within minutes of purchase.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Egypt trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic Russian licence — if your Russian licence expires, the companion expires with it. One purchase covers Egypt plus Thailand, UAE, Indonesia, Greece and any other destination you visit during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Where IDP Companion helps Russian travellers next — destinations with similar Cyrillic-script friction or sharper enforcement.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Russia → Thailand', status: 'Live', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Russia → Greece', status: 'Live', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Russia → Indonesia', status: 'Live', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Russia → Turkey', status: 'Live', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Russia → UAE', status: 'Live', href: '/idp-for-russian-drivers-in-uae/' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including Arabic and English, generated from your real Russian licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Egypt, Thailand, UAE, Indonesia, Greece. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Egyptian Ministry of Interior, the Egyptian Traffic Police, or the Automobile and Touring Club of Egypt (ATCE). IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention; in Russia, the All-Russian Automobile Society (РОСАВТОКЛУБ) is among the authorised issuers of national IDPs. IDP Companion must be used alongside your original Russian driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'1949 Geneva Convention on Road Traffic — Egypt signatory status (UN Treaty Collection)',
			'Egyptian Traffic Law No. 66 of 1973 (as amended)',
			'Egypt Ministry of Interior traffic enforcement guidance, 2025',
			'UK Foreign, Commonwealth & Development Office — Egypt travel advice (gov.uk/foreign-travel-advice/egypt)',
			'All-Russian Automobile Society (РОСАВТОКЛУБ) public guidelines',
		],
	},

	og: {
		originName: 'Russia',
		destinationName: 'Egypt',
	},
};

const ru: CountryPairCopy = {
	seo: {
		title: 'IDP для россиян в Египте — кириллица на блокпостах + Синай',
		description:
			'Египту нужен IDP по Женевской конвенции 1949 — а кириллицу физически не читают на военных блокпостах между Хургадой, Луксором и Синаем. Гид 2026: штрафы, скутерные облавы в Наама-Бэй, арабский перевод который закрывает обе проблемы.',
		ogTitleShort: 'IDP для россиян в Египте',
		ogSubtitle: 'Женева 1949 · кириллицу не читают · Синай',
	},
	breadcrumbs: {
		home: 'Главная',
		current: 'Россия → Египет',
	},
	lastReviewed: 'Июнь 2026',
	labels: {
		freshnessPrefix: 'Последняя проверка:',
	},

	hero: {
		kicker: 'Россия → Египет · Гид 2026',
		title: 'IDP для россиян в Египте — кириллица и блокпосты Синая',
		lead: 'Блокпост между Хургадой и Луксором — это укреплённая военная позиция: вооружённые солдаты, шлагбаум поперёк дороги и весь процесс по-арабски. Российские права, протянутые в окно, — нечитаемая кириллица. Офицер переворачивает их и снова просит документы по-арабски. Египет подписал Женевскую конвенцию 1949 года, и она требует IDP от каждого иностранца, который садится за руль, без исключений по гражданству. Две трети россиян, которые не выезжают за пределы Шарм-эш-Шейха или Хургады, с этим не сталкиваются. Треды на Forum.Vinskogo Египет и r/Egypt за Q1 2026 продолжают фиксировать тот же сценарий блокпостов на дороге в Луксор и на трассе Дахаб для тех, кто всё-таки берёт машину. Две минуты с правильным документом. И значительно дольше — без него.',
		ctaPrimary: 'Получить IDP Companion за 2 минуты — $35',
		ctaSecondary: 'Все тарифы',
		badgeTop: 'Гид 2026',
		badgeBottom: 'От $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Да — IDP обязателен для каждого иностранца за рулём в Египте',
		text: 'Египет — участник Женевской конвенции 1949 года о дорожном движении. Никаких исключений по гражданству и никаких туристических послаблений: требование действует на всех иностранных водителей. У россиян трение удваивается: кириллица на правах буквально нечитаема египетским военным и сотрудникам ДПС, работающим по-арабски. Две минуты подготовки до отлёта закрывают обе проблемы.',
	},

	tldr: {
		heading: 'Российские права vs IDP Companion в Египте',
		lead: 'Здесь сходятся две силы — Женева 1949 делает IDP юридическим требованием, а алфавитный разрыв с арабским делает российские права физически нечитаемыми у офицера в руках. Самые популярные у россиян направления (Хургада, Шарм, Луксор, Асуан) ловят оба фактора сразу.',
		colDocument: 'Документ',
		colWhatItDoes: 'Что даёт в Египте',
		colCost: 'Цена',
		rows: [
			{
				document: 'Российские права (только)',
				whatItDoes: 'Недостаточно — IDP требуется по Женевской конвенции 1949 года; кириллицу не читают египетские военные и полицейские; крупные прокатные сети (Hertz, Avis, Sixt) отказываются оформлять аренду без IDP.',
				cost: 'Уже есть',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + российские права',
				whatItDoes: 'Многоязычный цифровой PDF с данными ваших прав на арабском, английском, французском, испанском и 8 других языках. Даёт арабоязычную версию, которую можно прочитать на военных блокпостах, на проверках туристической полиции в Шарме и Хургаде, и на стойках аренды в Каире, Хургаде, Шарм-эш-Шейхе и Луксоре.',
				cost: '$35–55 (1–5 лет)',
				tone: 'companion',
			},
		],
		footnote: 'Что брать с собой в Египет: оригинал российских прав + IDP Companion + загранпаспорт с египетской визой + договор аренды + страховка. IDP Companion — переводной компаньон, носить только вместе с оригиналом прав.',
	},

	whyNotEnough: {
		heading: 'Почему Египет — самый очевидный случай IDP в этом гиде',
		lead: 'В большинстве стран из этого списка IDP проверяют через политику прокатных компаний. В Египте — через международный договор плюс алфавитный барьер. Ни то, ни другое не обходится.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'Основа — Женевская конвенция',
				text: 'Египет подписал Женевскую конвенцию 1949 года о дорожном движении. По ней каждая страна-подписант требует от иностранных туристов за рулём наличия IDP вместе с национальными правами. Это не локальное регулирование, которое можно интерпретировать по-разному — это международное обязательство, которое Египет исполняет. Туристическая виза не освобождает, короткий срок не освобождает, российские права — не исключение.',
			},
			{
				icon: 'ph:translate-bold',
				title: 'Проблема кириллицы',
				text: 'Египетские военные и сотрудники ДПС работают по-арабски. Кириллица не несёт никакой считываемой информации для арабоязычного читателя — в отличие от прав на латинице, которые хотя бы частично можно интерпретировать. IDP или переводной документ в Египте не дополняет российские права. Это документ, который вообще делает права работающими в руках офицера, не читающего ни латиницу, ни кириллицу.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'Сеть военных блокпостов',
				text: 'Египет содержит сеть охраняемых блокпостов — солдаты, не полиция — на дороге Хургада–Луксор, на синайских маршрутах между Шарм-эш-Шейхом и Дахабом и на верхнеегипетском коридоре в сторону Асуана. Они появляются каждые 40–80 км вне туристических зон. С нужными документами остановка занимает 2–5 минут. Без них машина стоит у шлагбаума, пока ситуация не разрешится по цепочке командования на этом посту.',
			},
		],
	},

	rules: {
		heading: 'Правила вождения в Египте, о которых стоит знать',
		lead: 'Сторона движения — как в России. Большинство правил привычны. Алкоголь — жёсткое исключение, а Каир — отдельная категория.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Сторона движения', value: 'ПРАВАЯ', note: 'Как в России — комфортно' },
			{ icon: 'mdi:speedometer', label: 'В городе', value: '60 км/ч', note: '30 км/ч в школьных зонах' },
			{ icon: 'mdi:road-variant', label: 'Загородные дороги', value: '90 км/ч', note: 'Национальные трассы' },
			{ icon: 'mdi:speedometer-medium', label: 'Магистрали', value: '100–120 км/ч', note: 'Знаки переопределяют общий лимит' },
			{ icon: 'mdi:beer-outline', label: 'Алкоголь', value: '0,00‰', note: 'Как в России — нулевая толерантность, строго' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон', value: 'Только hands-free', note: 'Активное преследование на трассах' },
			{ icon: 'mdi:seatbelt', label: 'Ремни', value: 'Обязательно', note: 'Водитель и передний пассажир' },
			{ icon: 'ph:traffic-cone-bold', label: 'Военные блокпосты', value: 'Часто', note: 'Синай, Хургада–Луксор, Верхний Египет' },
		],
	},

	fines: {
		heading: 'Штрафы 2026 за частые нарушения',
		lead: 'В абсолютных долларах штрафы небольшие, но выписываются и собираются на месте. Исход на военных блокпостах — это вопрос времени и процесса, а не суммы штрафа.',
		colViolation: 'Нарушение',
		colAmount: 'Штраф',
		colNote: 'Примечание',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Вождение без IDP', amount: 'EGP 500–2 000 (~$10–40)', note: 'Реальное последствие — задержание машины на блокпосту', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Превышение скорости', amount: 'EGP 500–2 000 (~$10–40)', note: 'Камеры на трассах появляются всё чаще', severity: 'low' },
			{ icon: 'mdi:traffic-light', label: 'Проезд на красный', amount: 'EGP 1 000–3 000 (~$20–60)', note: 'В Каире применение неровное; камер становится больше', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'Без ремня', amount: 'EGP 500–1 000 (~$10–20)', note: 'Передние места; применяется неравномерно', severity: 'low' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон в руках за рулём', amount: 'EGP 500–1 500 (~$10–30)', note: '', severity: 'low' },
			{ icon: 'mdi:beer-outline', label: 'Пьяное вождение (любой алкоголь)', amount: 'EGP 5 000–20 000+ (~$100–400+)', note: 'Уголовка; изъятие машины; возможен арест', severity: 'high' },
			{ icon: 'mdi:motorbike', label: 'Скутер без IDP/категории мотоцикла', amount: 'EGP 1 000–5 000 (~$20–100)', note: 'Туристическая полиция целенаправленно ловит в Шарме/Хургаде', severity: 'high' },
			{ icon: 'mdi:helmet', label: 'Без шлема на скутере', amount: 'EGP 300–1 000 (~$6–20)', note: 'Туристов специально проверяют на курортных постах', severity: 'med' },
		],
		caption: 'Источники: Закон о дорожном движении Египта № 66 от 1973 года (с поправками); Министерство внутренних дел Египта, рекомендации по применению 2025; UK FCDO Egypt travel advice. Курс EGP/USD сильно колеблется — оценки на апрель 2026.',
	},

	lez: {
		heading: 'Зоны контроля в Египте — военные блокпосты и туристическая полиция',
		badge: 'Особенности Египта',
		lead: 'Три коридора дают подавляющее большинство проверок документов у иностранных туристов. Ни один из них не работает как обычная остановка ДПС.',
		zones: [
			{
				city: 'Хургада → Луксор / Марса-Алам',
				name: 'Военный коридор Красное море–долина Нила',
				description: 'Блокпосты с солдатами каждые 40–80 км по пустынной дороге Хургада–Луксор и по прибрежной трассе Route 33 в сторону Марса-Алам. Это про проверку безопасности, а не про ДПС. Офицеры просят паспорт и водительские документы — рабочий язык арабский. С правильными документами остановка занимает 2–5 минут. Без IDP машина стоит у шлагбаума, пока вопрос не разрешится по цепочке командования на этом посту.',
				fine: 'Штраф не фиксирован — задержание машины',
				note: 'Снижайте скорость заранее, выключайте музыку, готовьте паспорт + российские права + IDP Companion до того, как офицер попросит. Не лезьте за документами на ходу.',
			},
			{
				city: 'Шарм-эш-Шейх / Хургада, прибрежная полоса',
				name: 'Скутерные облавы туристической полиции',
				description: 'Туристическая полиция регулярно проверяет основную прибрежную дорогу в Шарме и набережную Хургады, целенаправленно отлавливая скутеристов без документов. Египет требует категорию мотоцикла на действительном IDP, чтобы ездить на скутере. Прокатные конторы в Наама-Бэй это не проверяют. Блокпост после выезда — проверяет. Штраф собирают на месте, скутер забирают, прокатная контора держит ваш паспорт, оставленный в залог.',
				fine: 'EGP 1 000–5 000 + изъятие',
				note: 'Перед добавлением скутерной категории в IDP Companion проверьте, что российские права несут категорию A. Если только B — забудьте про скутер: с первого метра это нелегально.',
			},
			{
				city: 'Синай (Шарм → Дахаб → Нувейба)',
				name: 'Синайские блокпосты безопасности',
				description: 'Многочисленные блокпосты с солдатами на синайских маршрутах. Синай — регулируемая зона: некоторые районы требуют пермиты, отдельные внедорожные сегменты полностью закрыты. Туристические маршруты Шарм–Дахаб–Нувейба открыты со стандартным набором документов. Проверки рутинные, вежливые, быстрые — если документы в порядке.',
				fine: 'Варьируется',
				note: 'За неделю до вылета сверьтесь с актуальной информацией UK FCDO или МИД РФ по Синаю — ограничения могут меняться. Держитесь основной прибрежной дороги; не уходите в закрытые пустынные зоны.',
			},
		],
		tip: 'Практическое правило: в Египте блокпост — это не ситуация о штрафе, это ситуация о документах. Сам штраф за отсутствие IDP небольшой. Реальная цена — час под палящим солнцем в 60 км от Луксора в июле, в 42°C. Две минуты подготовки до вылета закрывают и то, и другое.',
	},

	alphabet: {
		heading: 'Арабские дорожные знаки и фразы, которые встретятся',
		lead: 'За пределами курортных зон знаки и диалог на блокпостах — на арабском. Несколько знаков и фраз закрывают большинство ситуаций.',
		badge: 'Арабская графика',
		examples: [
			{ sign: 'قف', latin: 'qif', meaning: 'Стоп' },
			{ sign: 'ممنوع الدخول', latin: 'mamnu\' al-dukhul', meaning: 'Въезд запрещён' },
			{ sign: 'ممنوع الوقوف', latin: 'mamnu\' al-wuquf', meaning: 'Стоянка запрещена' },
			{ sign: 'مخرج', latin: 'makhraj', meaning: 'Выезд' },
			{ sign: 'مدخل', latin: 'madkhal', meaning: 'Въезд' },
			{ sign: 'اتجاه واحد', latin: 'ittijah wahid', meaning: 'Одностороннее движение' },
			{ sign: 'تخفيف السرعة', latin: 'takhfif as-sur\'a', meaning: 'Снизить скорость' },
			{ sign: 'منطقة عسكرية', latin: 'mintaqa \'askariyya', meaning: 'Военная зона — въезд запрещён' },
		],
		helpsHeading: 'Чем IDP Companion помогает с арабским',
		helps: [
			'Показывает ваши ФИО, адрес и категории прав на арабском — читаемо для офицеров на военных и полицейских блокпостах',
			'Дублирует те же данные на английском как запасной вариант для тех, кому удобнее он',
			'Снимает отговорку «я не могу прочитать этот документ», превращающую двухминутную остановку в долгую',
			'Предъявляйте именно распечатанный IDP Companion — телефоны на пустынных блокпостах ненадёжны',
		],
		outro: 'Проблема кириллицы в Египте не теоретическая. Перевод тут не любезность — это единственный способ, которым документ вообще работает в руках того, кто его проверяет.',
	},

	phrases: {
		heading: 'Полезные арабские фразы для блокпостов и проката',
		lead: 'В курортных зонах есть русскоговорящий персонал. На синайских и верхнеегипетских блокпостах — нет. Эти фразы покрывают то, что реально возникает.',
		items: [
			{ phrase: 'هذه رخصة القيادة', translation: 'Вот мои водительские права', context: 'Передача документов на любом блокпосту — произнесите, передавая права' },
			{ phrase: 'وهذه وثيقة الترجمة', translation: 'А вот переводной документ', context: 'Показываете IDP Companion рядом с российскими правами' },
			{ phrase: 'أنا سائح روسي', translation: 'Я российский турист', context: 'Сразу обозначает контекст — часто смягчает разговор на военных постах' },
			{ phrase: 'لا أتكلم العربية', translation: 'Я не говорю по-арабски', context: 'Честно, если офицер говорит быстро — большинство в туристических зонах перейдёт на базовый английский' },
			{ phrase: 'هل هناك مشكلة؟', translation: 'Есть какая-то проблема?', context: 'Вежливое начало диалога на любом блокпосту — спокойный и уважительный тон' },
			{ phrase: 'لدي تأمين', translation: 'У меня есть страховка', context: 'При ДТП — предъявите карточку страховки рентала с этой фразой' },
			{ phrase: 'أحتاج الاتصال بشركة التأجير', translation: 'Мне нужно позвонить в прокатную компанию', context: 'При проблеме с машиной — в большинстве договоров аренды есть круглосуточный номер' },
			{ phrase: 'شكرا لكم', translation: 'Спасибо', context: 'После окончания остановки — базовая вежливость в Египте окупается везде' },
		],
	},

	howTo: {
		heading: 'Как подготовиться к вождению в Египте россиянину',
		lead: 'Требование IDP в Египте реальное, проблема кириллицы — физическая. Обе закрываются двумя минутами подготовки до вылета.',
		schemaName: 'Как подготовиться к вождению в Египте россиянину',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Получите IDP Companion как арабский переводной документ',
				text: '$35 — многоязычный цифровой PDF с переводом российских прав на арабский и английский (плюс французский, испанский и ещё 8 языков). Готов за 2 минуты онлайн, действует 1–5 лет. Закрывает проблему кириллицы на каждой египетской прокатной стойке и военном блокпосту.',
			},
			{
				title: 'Проверьте категории прав, если планируете скутер',
				text: 'Египет требует категорию мотоцикла на действительном IDP для скутера или мотоцикла. Проверьте обратную сторону российских прав на буквы категорий — A или A1 покрывают скутеры. Если только B — аренда скутера в Шарме или Хургаде нелегальна с первого метра.',
			},
			{
				title: 'Распечатайте IDP Companion перед вылетом',
				text: 'На обычной бумаге дома или в любой гостинице после прилёта. Телефоны на пустынных блокпостах в Верхнем Египте и на Синае ненадёжны при переменном свете и пятнистом покрытии данных. Распечатанная копия рядом с физическими правами — то, что ожидают офицеры.',
			},
			{
				title: 'Носите весь набор документов в одной папке',
				text: 'Физические российские права + IDP Companion (распечатанный) + загранпаспорт с египетской визой + договор аренды + карточка страховки. Всё вместе. Цифровые фото документов на военных блокпостах регулярно отказываются принимать.',
			},
			{
				title: 'Проверьте синайские предупреждения за неделю до вылета',
				text: 'Синай — регулируемая зона: ограничения могут меняться без долгого уведомления. Сверьтесь с UK FCDO Egypt advice или страницей МИД РФ по Синаю в неделю перед вылетом. Держитесь основной прибрежной трассы Шарм–Дахаб–Нувейба. Не уходите в закрытые пустынные сегменты.',
			},
		],
	},

	honesty: {
		heading: 'Где IDP Companion помогает в Египте — без преувеличений',
		lead: 'На российские права в Египте давят сразу два фактора — Женевская конвенция 1949 как юридический мандат и алфавитный разрыв с арабским. Ниже разбираем что IDP Companion закрывает, а что нет.',
		is: {
			title: 'Что такое IDP Companion',
			items: [
				'Многоязычный цифровой PDF с переводом данных российских прав на арабский, английский, французский, испанский и ещё 8 языков',
				'Сделан, чтобы российские права становились читаемыми для арабоязычных офицеров на военных блокпостах, проверках туристической полиции и стойках аренды',
				'Готов за минуты после загрузки прав и автоматической верификации',
				'Цена: $35 (1 год), $45 (3 года), $55 (5 лет) — разовая оплата, без подписок',
			],
		},
		isNot: {
			title: 'Чем IDP Companion НЕ является',
			items: [
				'Не государственный IDP по Женевской конвенции 1949 года',
				'Сам по себе не действителен — носить только вместе с физическими российскими правами',
				'Не создаёт мотоциклетную категорию, которой нет на ваших правах — IDP Companion отражает то, что в правах есть, а не то, чего нет',
			],
		},
		helps: {
			title: 'Когда IDP Companion помогает россиянам в Египте',
			items: [
				'На стойках аренды в Каире, Хургаде, Шарм-эш-Шейхе и Луксоре, где IDP — задокументированное условие брони для прав не на арабском и не на английском',
				'На военных блокпостах на трассе Хургада–Луксор и синайских маршрутах — арабский перевод делает права верифицируемыми за секунды',
				'На проверках туристической полиции в курортных зонах, особенно для скутеристов и мотоциклистов',
				'При страховом разбирательстве после ДТП — арабский перевод подтверждает действительность прав для иска',
			],
		},
		needOfficial: {
			title: 'Документы, которые волнуют местный закон',
			items: [
				'Физические российские водительские права — собственно разрешение на вождение (это ничем не заменяется)',
				'Загранпаспорт с действующей египетской визой — на военных блокпостах проверяют оба',
				'Страховка по аренде — TPL обязательна во всех египетских прокатах; держите карточку в машине',
				'Для скутеров: российские права, на которых уже стоит категория A — IDP Companion её отражает, но создать не может',
			],
		},
		pattern:
			'Что реально берут с собой подготовленные российские туристы в Египет: физические российские права + IDP Companion (распечатанный) + загранпаспорт + египетская виза + договор аренды + карточка страховки, всё в одной папке. Переводной компаньон закрывает проблему кириллицы, которую сама книжка IDP не закрывает. Две минуты подготовки, $35 — и вопрос документов снят с каждого взаимодействия с египетским офицером.',
	},

	renting: {
		heading: 'Аренда машины в Египте с российскими правами',
		lead: 'Крупные сети работают в аэропортах Каира (CAI), Хургады (HRG), Шарм-эш-Шейха (SSH) и Луксора (LXR). Все требуют IDP для российской кириллицы — политика последовательная по международным сетям и по большинству местных контор.',
		chains: [
			{ name: 'Hertz Egypt', policy: 'IDP обязателен для прав не на арабском и не на английском. Российские права требуют IDP. С 21 года; депозит по карте' },
			{ name: 'Avis Egypt', policy: 'Та же политика, что у Hertz. IDP обязателен для российской кириллицы. Доступен в крупных аэропортах' },
			{ name: 'Sixt Egypt', policy: 'IDP обязателен для прав на нелатинском алфавите. Доступен в CAI и HRG' },
			{ name: 'Местные конторы (Хургада, Шарм, Луксор)', policy: 'Привычны к русскоязычным клиентам. Часть принимает переводные документы; часть требует именно государственную книжку IDP — уточняйте до брони' },
		],
		tipsHeading: 'Практические советы для Египта',
		tips: [
			'Минимальный возраст 21 во всех крупных сетях; некоторые местные конторы принимают с 18 за доплату',
			'Механика — стандарт у местных контор; автомат дороже и реже в не-сетевых конторах',
			'Депозит по карте в международных сетях; местные часто принимают наличный депозит',
			'Топливо в Египте субсидировано — значительно дешевле, чем в России и Европе; стандарт — full-to-full',
			'Кондиционер обязателен — летом регулярно за 40°C; рабочий кондиционер важнее других опций',
			'Каир: большинству российских туристов лучше вообще не садиться за руль; Uber работает стабильно и недорого',
			'Трассы между городами: считайте, что блокпосты будут каждые 40–80 км вне курортных зон — выкладывайте документы без повторных просьб',
			'Ночное вождение вне городов: не рекомендуется на незнакомых маршрутах — покрытие хуже, освещения нет, на сельских дорогах после темноты выходит скот',
		],
	},

	outcomes: {
		heading: 'Что бывает, если ехать без IDP — реальные сценарии',
		lead: 'Реалистичные сценарии для российских водителей в Египте, по убыванию частоты.',
		items: [
			{
				severity: 'low',
				frequency: 'Очень часто',
				label: 'Только курортная зона — без вождения',
				text: 'Шарм и Хургада ходимы пешком; большинство российских туристов вообще не берёт машину. Вопрос IDP не возникает.',
			},
			{
				severity: 'low',
				frequency: 'Часто с IDP',
				label: 'Аренда с IDP Companion, чистая поездка',
				text: 'Полный набор документов, аренда оформляется без вопросов, блокпосты — 2–5 минут. Ожидаемый исход.',
			},
			{
				severity: 'high',
				frequency: 'Очень часто без IDP',
				label: 'Отказ на стойке аренды',
				text: 'IDP — требование закона, и все крупные сети это применяют. Агент в аэропорту Хургады или Каира не оформляет аренду — вы стоите у стойки, пока очередь обходит вас.',
			},
			{
				severity: 'med',
				frequency: 'Иногда на трассах',
				label: 'Военный блокпост, IDP нет',
				text: 'Машина стоит у шлагбаума, пока ситуация не разрешится по цепочке командования на этом посту. Сам штраф маленький. Реальная цена — часы под солнцем без тени.',
			},
			{
				severity: 'high',
				frequency: 'Иногда в курортных зонах',
				label: 'Скутер без IDP/категории мотоцикла',
				text: 'Туристическая полиция на прибрежной дороге, штраф на месте, скутер забирают, прокатная контора держит паспорт, оставленный в залог. Документированный паттерн в Шарме и Хургаде, целенаправленно по туристам.',
			},
			{
				severity: 'high',
				frequency: 'Редко при подготовке',
				label: 'Любой алкоголь за рулём',
				text: 'В Египте 0,00‰. Алкоголь продают в отельных барах; сесть после выпитого — уголовка, а не штраф. Изъятие машины, возможный арест, посольство.',
			},
		],
		math: 'IDP Companion — $35. Сценарий «отказа на прокате» в Египте — потеря дня аренды плюс стоимость переброни. Сценарий военного блокпоста — пустынный полдень. Сценарий скутерной облавы — фиксу плюс «выкуп» паспорта. Подготовка стоит $35 один раз.',
	},

	faq: {
		heading: 'Частые вопросы',
		items: [
			{
				id: 1,
				question: 'IDP действительно нужен россиянам, едущим в Египет?',
				answer: 'Да — без исключений. Египет — участник Женевской конвенции 1949 года о дорожном движении, по которой каждый иностранец за рулём обязан иметь действующий IDP вместе с национальными правами. Никаких исключений по гражданству, никаких послаблений по визе, никакого срока «на короткий срок».',
			},
			{
				id: 2,
				question: 'Почему именно россиянам это особенно важно?',
				answer: 'Российские права — на кириллице. Египетские военные и сотрудники ДПС работают по-арабски и кириллицу не читают вообще. IDP или переводной документ даёт арабоязычное представление данных прав, благодаря которому проверка на блокпосту вообще возможна. Без него права буквально нечитаемы для офицера в руках — это не вопрос вежливости, это физика.',
			},
			{
				id: 3,
				question: 'IDP Companion — это то же, что государственный IDP?',
				answer: 'Нет. Государственный IDP — официальная книжка, выдаваемая по Женевской конвенции 1949 года уполномоченной национальной организацией (в России — РОСАВТОКЛУБ). IDP Companion — частный многоязычный переводной документ с данными ваших российских прав на арабском, английском, французском, испанском и ещё 8 языках. Для Египта уточняйте у конкретного прокатного оператора, принимает ли он переводной документ или требует государственную книжку — крупные международные сети, как правило, принимают IDP Companion как требуемый перевод.',
			},
			{
				id: 4,
				question: 'Стоит ли садиться за руль в Каире?',
				answer: 'Честно: нет, если вы не знаете город. Каирский трафик работает на гудках, договорённости через расстояние и постепенном продавливании — это навык, который египтяне нарабатывают годами. Российскому туристу на двухнедельную поездку — не место для обучения. Uber и Careem в Каире работают стабильно и недорого. Для поездок к Пирамидам, в Саккару или Египетский музей — это правильный транспорт.',
			},
			{
				id: 5,
				question: 'Что такое военные блокпосты и опасны ли они?',
				answer: 'Военные блокпосты — это охраняемые позиции на трассах между городами, особенно Хургада–Луксор, синайские маршруты Шарм–Дахаб и верхнеегипетский коридор в сторону Асуана. Их обслуживают солдаты, не ДПС, и они существуют по соображениям безопасности, не для контроля движения. С нужными документами остановка занимает 2–5 минут — снижайте скорость заранее, выключайте музыку, готовьте документы до того, как офицер попросит. Они не опасны, но и не опциональны.',
			},
			{
				id: 6,
				question: 'Можно ли в Шарм-эш-Шейхе ездить на скутере без IDP?',
				answer: 'Юридически — нет. Египет требует категорию мотоцикла на действующем IDP, чтобы ездить на моторизованном скутере. Прокатные конторы в Наама-Бэй это не проверяют. Туристическая полиция на прибрежной дороге — проверяет, и это задокументированный паттерн. Скутер забирают, штраф собирают на месте, прокатная контора держит ваш паспорт-залог. Перед добавлением скутера в IDP Companion проверьте, что российские права несут категорию A. Если только B — забудьте про скутер.',
			},
			{
				id: 7,
				question: 'Как реально работает нулевой алкоголь?',
				answer: 'В Египте 0,00‰ — тот же стандарт, что в России, и применяется строго. Алкоголь продают в отельных барах и в лицензированных заведениях, но за руль после любого алкоголя — уголовка. Если выпиваете в баре отеля вечером — ночью не садитесь за руль. Наказание — арест и изъятие машины, не штраф.',
			},
			{
				id: 8,
				question: 'Какая поездка в Египте стоит подготовки?',
				answer: 'Прибрежная трасса от Хургады на юг к Марса-Алам — Route 33 вдоль побережья — действительно красива: горы выходят к Красному морю, почти нет трафика, ровное покрытие, эпизодические съезды к дайв-сайтам и рыбацким деревням. Около 200 км, заправка в Марса-Алам. Один-два блокпоста. С документами в порядке — это двухминутные остановки на маршруте, ради которого и стоило готовиться.',
			},
			{
				id: 9,
				question: 'Можно ли получить IDP уже в Египте?',
				answer: 'Нет. International Driving Permit выдаётся только в стране, где выданы национальные права — египетские власти не выдают IDP иностранным туристам. Для российских прав это значит IDP по Женевской 1949 в России до отъезда. IDP Companion можно сгенерировать онлайн откуда угодно — распечатывается в любой гостинице за минуты после оплаты.',
			},
			{
				id: 10,
				question: 'Сколько действует IDP Companion для поездок в Египет?',
				answer: 'На выбор: 1 год ($35), 3 года ($45), 5 лет ($55). Срок привязан к вашим российским правам — если они истекают, истекает и компаньон. Одна покупка покрывает Египет плюс Таиланд, ОАЭ, Индонезию, Грецию и любые другие направления, которые вы посетите за выбранный период.',
			},
		],
	},

	related: {
		heading: 'Похожие гиды',
		lead: 'Соседние арабоязычные и не-латинские направления, где у россиян возникает тот же сценарий с переводом — ОАЭ, Турция, Таиланд.',
		comingSoonLabel: 'Скоро',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Россия → Таиланд', status: 'В эфире', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Россия → Греция', status: 'В эфире', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Россия → Индонезия', status: 'В эфире', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Россия → Турция', status: 'В эфире', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Россия → ОАЭ', status: 'В эфире', href: '/idp-for-russian-drivers-in-uae/' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'США → Мексика', status: 'В эфире', href: '/idp-for-us-drivers-in-mexico/' },
		],
	},

	finalCta: {
		heading: 'Готовы оформить IDP Companion?',
		text: 'Многоязычный PDF с арабским и английским, готов за 2 минуты по вашим реальным российским правам. Печатайте дома или из любой гостиницы. Действует 1–5 лет — покроет эту поездку и следующие в Египет, Таиланд, ОАЭ, Индонезию, Грецию. $35 / 1 год · $45 / 3 года · $55 / 5 лет. Разовый платёж, без подписок.',
		button: 'Начать оформление',
	},

	legal: {
		disclaimerHeading: 'Дисклеймер',
		disclaimer:
			'IDP Companion — это частный многоязычный переводной документ. Мы не аффилированы с Министерством внутренних дел Египта, египетской ДПС или Автомобильным и туристическим клубом Египта (ATCE). IDP Companion не является государственным International Driving Permit по Женевской конвенции 1949 года; в России к уполномоченным эмитентам национальных IDP относится в том числе Всероссийский Автомобильный Клуб (РОСАВТОКЛУБ). IDP Companion используется только вместе с оригиналом ваших российских прав.',
		sourcesHeading: 'Источники',
		sources: [
			'Женевская конвенция о дорожном движении 1949 года — статус Египта (Архив договоров ООН)',
			'Закон о дорожном движении Египта № 66 от 1973 года (с поправками)',
			'Министерство внутренних дел Египта, рекомендации по применению, 2025',
			'UK Foreign, Commonwealth & Development Office — Egypt travel advice (gov.uk/foreign-travel-advice/egypt)',
			'Публичные руководства РОСАВТОКЛУБа',
		],
	},

	og: {
		originName: 'Россия',
		destinationName: 'Египет',
	},
};

export const russiaEgyptCopy: Record<'en' | 'ru', CountryPairCopy> = { en, ru };
