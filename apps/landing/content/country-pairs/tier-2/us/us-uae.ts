/**
 * Country-pair content: United States → United Arab Emirates.
 * Tier 2. Locales: en only. (ru/es intentionally skipped — irrelevant audience.)
 *
 * Killer angles for UAE (what differentiates from sibling pages):
 *  - Geneva 1949 IDP IS legally required (Federal Decree-Law No. 14 of 2024,
 *    effective March 29, 2025) — fines AED 2,000–10,000 for first offense.
 *  - Speed-camera enforcement variance: Dubai uses 20 km/h buffer, Abu Dhabi
 *    has zero-tolerance since 2018. Same country, different rule.
 *  - Salik electronic toll system + automated camera infrastructure issues
 *    fines via SMS within 48 hours, billed to rental plate.
 *  - Arabic non-Latin script — companion translation document is the bridge
 *    between US license format and what UAE rental staff/police are trained
 *    to read at speed.
 *
 * SEO add-ons present: tldr, phrases (Arabic), alphabet (Arabic), howTo,
 * lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in UAE: 2026 Guide to AED 5,000 Fines',
		description:
			'Driving in the UAE with a US license? UAE law requires an IDP — AED 2,000–10,000 fine if you skip it. Honest 2026 guide to Dubai vs Abu Dhabi enforcement, Salik tolls, and what $35 fixes.',
		ogTitleShort: 'US in UAE: IDP Required 2026',
		ogSubtitle: 'AED 5,000 fine. Zero-tolerance cameras. Read first.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → UAE',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'US → UAE · 2026 Guide',
		title: 'IDP for US Drivers in the UAE: Required, Not Optional — Here\'s What That Means in Practice',
		lead: "The Hertz desk at Dubai International Terminal 3 moves fast. Long queue, efficient agents, a simple sequence: passport, credit card, license, IDP. That last item is where American travelers get stuck. Not because the agent is being difficult — it's in the contract. UAE rental companies across the board require an IDP alongside your national license, and the penalty for driving without one under Federal Decree-Law No. 14 of 2024 is AED 5,000 (~$1,360). What makes Dubai interesting is that you won't feel the speed camera until 48 hours later when the rental company emails you the fine linked to the plate. Abu Dhabi is different: no 20 km/h buffer, no grace — the radar triggers at 1 km/h over the posted limit. The IDP is the easy part of arriving prepared. It's also the part most people forget.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — UAE law requires an IDP, and every rental contract enforces it',
		text: 'Under Federal Decree-Law No. 14 of 2024 on Traffic Regulation (effective March 29, 2025), foreign visitors must carry an IDP alongside their national license. Driving with a foreign license not recognized by UAE authorities carries a fine of AED 2,000–10,000 for a first offense. Rental companies require the IDP at pickup as a hard contract condition — no IDP, no keys, regardless of reservation.',
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in the UAE',
		lead: "In the UAE, the rental desk is the checkpoint. And so is every radar camera on the E11.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in UAE',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Not sufficient — UAE law requires an IDP alongside your national license for foreign visitors. Rental companies will not process the rental without one. Police checkpoints can fine AED 2,000–10,000 for first offense under Federal Decree-Law No. 14 of 2024.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual digital PDF with Arabic translation of your license details (plus 11 other languages). Reduces friction at rental desks and police checkpoints where Arabic-format documentation speeds up the routine check. Re-printable from any hotel.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What UAE law actually expects: physical US driver license + Geneva 1949 IDP + passport with UAE entry visa stamp + rental agreement + UAE-compliant insurance (provided with rental). IDP Companion is a private translation aid for rental-counter and police-stop friction, used alongside the legally-required documents.",
	},

	whyNotEnough: {
		heading: 'Why your US license alone is not enough in the UAE',
		lead: "UAE has one of the most automated traffic enforcement systems in the world. The documentation failure and the camera infrastructure work together in a way that doesn't leave room for improvising on arrival.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal reason',
				text: "UAE Federal Decree-Law No. 14 of 2024 on Traffic Regulation (effective March 29, 2025) requires foreign visitors to carry an IDP alongside their national license. This is national legislation, not a rental-company preference. Driving without it puts you in violation of the law from the moment you leave the rental lot — and the AED 2,000–10,000 first-offense fine starts at $545 USD before you've even found your hotel.",
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The contract reason',
				text: "Every major rental agency in the UAE — Hertz, Avis, Sixt, Budget, and the large local operators — requires an IDP at pickup as a hard condition of the rental agreement. A confirmed reservation does not override this. Dubai International Terminal 3 sees thousands of these refusals per year. No document, no car, no exceptions.",
			},
			{
				icon: 'ph:gauge-bold',
				title: 'The enforcement reality',
				text: "Speed cameras issue fines via SMS within 48 hours, billed to the rental plate and charged to your card. Abu Dhabi has run zero-tolerance enforcement since 2018 — 1 km/h over the posted limit triggers a fine, no buffer at all. Dubai uses a 20 km/h buffer for most violations but enforces school zones and DUI absolutely. The Salik electronic toll system reads your plate at every gantry — no escape via cash, no manual review.",
			},
		],
	},

	rules: {
		heading: 'UAE driving rules US drivers should know',
		lead: 'Familiar in feel — wide highways, automatic transmissions, English signage on highways — but the alcohol limit and Abu Dhabi\'s zero-tolerance enforcement carry real consequences.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Residential / small streets', value: '40 km/h', note: 'Strictly enforced near schools' },
			{ icon: 'mdi:road-variant', label: 'Main urban roads', value: '60–80 km/h', note: 'Per signage' },
			{ icon: 'mdi:speedometer-medium', label: 'Highways', value: '100–120 km/h', note: 'E11 (Dubai–Abu Dhabi) sections up to 140 km/h' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.00% BAC', note: 'Zero tolerance — any detectable alcohol is criminal' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'AED 200–1,000 + 4–6 black points' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory all seats', note: 'AED 400 per person + 4 black points' },
			{ icon: 'ph:car-bold', label: 'Tailgating', value: 'AED 400 + 4 points', note: 'Minimum 3-second gap required by law' },
		],
	},

	fines: {
		heading: '2026 fines and camera-enforced penalties in UAE',
		lead: "UAE fines are camera-enforced and linked electronically to the vehicle plate. Rental agencies receive them and deduct from your security deposit automatically. SMS notification typically arrives within 48 hours.",
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving with unrecognized foreign license', amount: 'AED 2,000–10,000 (~$545–$2,720)', severity: 'high', note: 'Per Federal Decree-Law No. 14 of 2024; first offense' },
			{ icon: 'mdi:speedometer', label: 'Speeding under 30 km/h over (Dubai)', amount: 'AED 600 (~$163)', severity: 'low', note: 'Camera-enforced, 48hr notification' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 30–59 km/h over', amount: 'AED 1,500 + 6 pts (~$408)', severity: 'med', note: 'Vehicle impound 15 days' },
			{ icon: 'mdi:speedometer', label: 'Speeding 60+ km/h over', amount: 'AED 3,000 + 12–23 pts (~$817)', severity: 'high', note: 'Vehicle impound 30–60 days' },
			{ icon: 'mdi:beer-outline', label: 'DUI (any detectable alcohol) — Dubai', amount: 'AED 20,000 + 23 pts (~$5,445)', severity: 'high', note: 'Mandatory jail time + impound 60 days' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'AED 1,000–4,000 + 12 pts', severity: 'high', note: 'Camera-enforced; impound 60 days (Dubai)' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'AED 400 + 4 pts (~$109)', severity: 'med', note: 'Per person not buckled' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone', amount: 'AED 200–1,000 + 4–6 pts', severity: 'med', note: 'Bluetooth permitted' },
			{ icon: 'ph:warning-bold', label: 'Slow driving in left lane', amount: 'AED 400 (~$109)', severity: 'med', note: 'Left lane is fast-traffic only by law' },
		],
		caption: 'Sources: UAE Federal Decree-Law No. 14 of 2024; Dubai RTA official fine schedule; Abu Dhabi Police penalty schedule 2025.',
	},

	alphabet: {
		heading: 'Arabic road signs every US driver should recognize',
		badge: 'UAE-specific',
		lead: 'Major UAE highways are signposted in both Arabic and English, but smaller streets, parking signs, and commercial frontage in older Dubai districts (Bur Dubai, Deira) often appear in Arabic only. Learn these eight before you drive.',
		examples: [
			{ sign: 'قف', latin: 'Qif', meaning: 'STOP — usually red octagon, same as US' },
			{ sign: 'ممنوع الدخول', latin: 'Mamnoo\' al-dukhool', meaning: 'DO NOT ENTER — red circle with horizontal bar' },
			{ sign: 'ممنوع الوقوف', latin: 'Mamnoo\' al-wuqoof', meaning: 'NO PARKING / NO STOPPING' },
			{ sign: 'مخرج', latin: 'Makhraj', meaning: 'EXIT — common at malls and parking structures' },
			{ sign: 'مدخل', latin: 'Madkhal', meaning: 'ENTRANCE' },
			{ sign: 'اتجاه واحد', latin: 'Ittijaah waahid', meaning: 'ONE WAY — common in older Bur Dubai and Deira' },
			{ sign: 'تخفيف السرعة', latin: 'Takhfeef as-sur\'a', meaning: 'REDUCE SPEED / SLOW DOWN — before camera zones' },
			{ sign: 'منطقة سكنية', latin: 'Mintaqa sakaniyya', meaning: 'RESIDENTIAL AREA — 40 km/h limit applies' },
		],
		helpsHeading: 'What helps',
		helps: [
			'Google Maps offline downloads with Arabic place names enabled',
			'A printed list of your destinations in both Arabic and Latin script — your hotel, the airport, key parking lots',
			'Take a photo of your hotel\'s building name in Arabic before leaving each morning',
			'IDP Companion as a familiar bilingual reference for gas stations, hotel valets, and police interactions',
		],
		outro: 'UAE rewards prepared drivers. The 30 minutes spent memorizing these eight signs save you from missed turns, parking violations, and the awkwardness of asking the wrong question at a checkpoint.',
	},

	honesty: {
		heading: 'How IDP Companion fits in the UAE — honestly',
		lead: "UAE leaves less ambiguity than France or Mexico. The law and the rental contract say the same thing. Here's where IDP Companion helps and where it doesn't.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF presenting your US license details in Arabic, English, French, Russian, Chinese, and 7 other languages',
				'Generated from your actual uploaded license — not a generic template with your name pasted in',
				'Delivered as a digital download within minutes; printable or shown on phone',
				'A translation companion designed to be presented alongside your original US license — and your Geneva 1949 IDP',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention',
				"Not a standalone document — your original US license must be carried at all times alongside it",
				'Not a replacement for the legally-required IDP — UAE law requires both your national license and a Geneva 1949 IDP',
				'Not a UAE residence permit or long-term driving solution (UAE residents must obtain a local Emirates ID-linked license)',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in the UAE',
			items: [
				"At the rental desk as part of the documentation set required to process the rental — your IDP plus the multilingual translation gives the agent everything in one folder",
				'At police checkpoints where an Arabic-language presentation of your license details speeds up the routine documents check',
				'When your US license format is unfamiliar to the rental agent (state-specific layouts vary widely)',
				'As a backup if your physical IDP is lost or damaged mid-trip — the PDF is re-printable from any hotel',
			],
		},
		needOfficial: {
			title: 'Documents UAE law actually cares about',
			items: [
				'Your physical valid US driver license — the actual permission to drive (no document substitutes for this)',
				'A Geneva 1949 International Driving Permit — UAE Federal Decree-Law No. 14 of 2024 requires this for foreign drivers',
				'Passport with current UAE entry visa stamp — entry stamp determines your driving privilege window',
				'Rental agreement and UAE-compliant insurance (TPL) — provided with the rental contract',
			],
		},
		pattern:
			"The honest pattern most US travelers in the UAE follow: arrive with physical US license + Geneva 1949 IDP + passport, rent through Hertz/Avis/Sixt/Budget at Dubai or Abu Dhabi airport (Salik tag pre-installed), carry IDP Companion as the rental-counter and police-checkpoint friction reducer in Arabic. Total documentation prep: $35 for IDP Companion. The fines if you skip the legal IDP route start at AED 2,000 (~$545) and run to AED 10,000.",
	},

	renting: {
		heading: 'Renting a car in the UAE as a US driver',
		lead: 'UAE rental policies are unusually unified across chains: every major operator requires an IDP alongside the national license, every airport branch enforces it, and every rental car has a Salik toll tag pre-installed.',
		chains: [
			{ name: 'Hertz UAE', policy: 'IDP required alongside national license at all locations. Minimum age 21; under-25 surcharge applies. Credit card mandatory for security deposit. Dubai International Terminal 3 is the most consistent enforcement point.' },
			{ name: 'Avis UAE', policy: 'IDP required for all non-UAE/GCC licenses. Minimum age 21. Operates at Dubai International, Abu Dhabi Airport, and major city locations across both emirates. AED 1,500 deposit hold typical.' },
			{ name: 'Sixt UAE', policy: 'IDP required. Credit card — not debit — mandatory for deposit at most locations. Premium fleet weighted toward German marques; surcharge for under-25.' },
			{ name: 'Budget UAE', policy: 'IDP required. Operates primarily across Dubai and Abu Dhabi. Policies mirror Avis/Hertz on documentation. More aggressive on insurance upselling at airport branches.' },
		],
		tipsHeading: 'Practical tips for renting in the UAE',
		tips: [
			'Automatic transmission is standard across the fleet — manual vehicles are extremely rare in UAE car rentals',
			'Salik (Dubai toll system) is fully electronic and automatic — tolls are tracked to the plate and billed to your card after the trip; no stopping or cash required',
			'Fuel is significantly cheaper in UAE than US or Europe; full-to-full fuel policy is standard at all major agencies',
			'Document all pre-existing vehicle damage with timestamped photos before leaving the lot — UAE rental contracts are aggressive on damage charges',
			'Desert or off-road driving is explicitly excluded in standard rental agreements — verify before booking if you plan to leave paved roads',
			'The left lane on UAE highways is fast-traffic only; driving slowly in the left lane is itself a fineable offense (AED 400)',
			'Confirm your rental car has a working Salik tag before leaving the lot — every Dubai gantry without one fines you',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in the UAE',
		lead: 'The range of outcomes for US drivers in the UAE — ranked by frequency, based on rental-industry data and tourist forum reports.',
		items: [
			{
				severity: 'low',
				frequency: '~70% of trips',
				label: 'Smooth pickup, clean drive',
				text: 'Full documentation presented (US license + IDP + passport), Salik tag is functional, no traffic incidents, return the car, fly home. Most prepared trips end this way — the preparation is the difference.',
			},
			{
				severity: 'med',
				frequency: '~20% of trips without IDP',
				label: 'Rental refused at pickup',
				text: 'No IDP = no keys regardless of reservation. Rebook through a different chain or take a taxi to the hotel. Dubai International Terminal 3 sees thousands of these refusals annually. Walk-in alternative pricing runs 30–50% premium over reserved rates.',
			},
			{
				severity: 'med',
				frequency: '~15% of trips',
				label: 'Speed camera fine, Dubai',
				text: 'Issued to rental plate, charged to deposit. AED 600 minimum for under-30-over violations. SMS notification within 48 hours. Most US tourists trigger one inadvertently — Sheikh Zayed Road feels open at night and the camera doesn\'t care.',
			},
			{
				severity: 'med',
				frequency: '~5% of trips through Abu Dhabi',
				label: 'Speed camera fine, Abu Dhabi',
				text: 'Zero tolerance — any speed over the posted limit triggers immediately. Same trip can yield 2–3 separate speeding fines on the E11 corridor between Abu Dhabi and Dubai if cruise control isn\'t set carefully.',
			},
			{
				severity: 'high',
				frequency: '1–2% of trips',
				label: 'Police stop without IDP',
				text: 'AED 2,000–10,000 fine under Federal Decree-Law No. 14. Possible vehicle impound until documentation is produced. The US Embassy in Abu Dhabi handles these regularly — the conversation always starts with: "did you have an IDP?"',
			},
			{
				severity: 'high',
				frequency: 'Rare but real',
				label: 'DUI stop',
				text: 'Mandatory jail time, AED 20,000+ fine, vehicle impound 60 days. UAE has zero-tolerance — one beer at the hotel bar, two hours before driving, is enough to fail the test. No "I only had a glass" defense exists in UAE law.',
			},
		],
		math: 'IDP Companion ($35) + Geneva 1949 IDP from your home country = full legal compliance + multilingual translation backup. First-offense unrecognized-license fine in UAE: AED 2,000 (~$545). The math is obvious — and unlike France or Mexico, this is a country where the law and the rental contract speak with one voice.',
	},

	phrases: {
		heading: 'Arabic phrases for UAE rental desks and police stops',
		lead: 'Most rental and police interactions in the UAE happen in English — the staff is multinational and English is the working lingua franca. These eight phrases cover situations where Arabic shortcuts the conversation.',
		items: [
			{ phrase: 'وثائقي تفضل', translation: 'Here are my documents', context: 'Hand over license + IDP + passport together — standard opening' },
			{ phrase: 'أنا سائح من أمريكا', translation: "I'm a tourist from America", context: 'Establishes context immediately, often softens the encounter' },
			{ phrase: 'لا أتكلم العربية', translation: "I don't speak Arabic", context: 'Honest disclosure — most UAE police and rental staff switch to English' },
			{ phrase: 'هل هناك مشكلة؟', translation: 'Is there a problem?', context: 'At a police checkpoint, opens the conversation politely' },
			{ phrase: 'أحتاج إلى إيصال', translation: 'I need a receipt', context: 'Forces formal documentation. Useful if any payment is requested on the spot.' },
			{ phrase: 'أين أقرب محطة شرطة؟', translation: 'Where is the nearest police station?', context: 'For paying fines, reporting incidents, or escalating' },
			{ phrase: 'هذه رخصة دولية', translation: 'This is an international permit', context: 'When showing your IDP alongside the US license' },
			{ phrase: 'أحتاج إلى الاتصال بشركة التأجير', translation: 'I need to call the rental company', context: '24/7 helpline phone is on every rental contract — useful at incidents' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in the UAE (US citizens)',
		lead: "UAE has the strictest IDP enforcement among popular US-tourist destinations. Two preparation tracks: obtain a Geneva 1949 IDP from your home country before flying (legally required), and add IDP Companion as the multilingual translation aid for everything outside that legal compliance.",
		schemaName: 'How to prepare for driving in the UAE as a US citizen',
		duration: 'PT30M',
		cost: '40 USD',
		steps: [
			{
				title: 'Generate IDP Companion before you fly',
				text: '$35 for 1 year, $45 for 3 years, $55 for 5 years. 2 minutes online — upload your US license, our system handles OCR and multilingual translation including Arabic, French, Russian, Chinese, and 8 other languages. Output is a print-ready PDF you can show at hotels, rental desks, and police stops as the translation companion to your physical IDP.',
			},
			{
				title: 'Obtain a Geneva 1949 IDP from your home-country authorized issuer',
				text: 'UAE Federal Decree-Law No. 14 of 2024 requires an IDP under the 1949 Geneva Convention alongside your national license. This is a separate legal-compliance document; IDP Companion does not replace it. The IDP must be issued in the country where your driver license was issued, and it must be valid (typically 1 year from issue). Order it at least 2–3 weeks before your trip.',
			},
			{
				title: 'Confirm your rental booking documentation requirements',
				text: 'Hertz, Avis, Sixt, and Budget UAE all require an IDP at pickup. Confirm in writing on your booking before flying. Salik tag is pre-installed on every airport rental — verify with the agent at pickup. Insurance (TPL) is bundled or upsold; verify the contract specifies UAE-compliant coverage.',
			},
			{
				title: 'Plan for zero-tolerance enforcement zones',
				text: "Abu Dhabi has run zero-tolerance speed enforcement since 2018 — any speed over the posted limit triggers a fine immediately, no buffer. Dubai uses a 20 km/h buffer. The E11 corridor between the two emirates can yield separate fines if cruise control isn't set carefully. School zones and the alcohol limit are 0.00% absolute regardless of emirate.",
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US driver license + Geneva 1949 IDP + passport with UAE entry visa + IDP Companion + rental contract — all in one folder. Digital photos of documents are routinely refused at UAE rental counters and police checkpoints. The combination clears every Dubai International Terminal 3 pickup, Abu Dhabi airport pickup, and routine police stop efficiently.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in the UAE as a US tourist?',
				answer: 'Yes. UAE Federal Decree-Law No. 14 of 2024 on Traffic Regulation (effective March 29, 2025) requires foreign visitors to carry an IDP alongside their national license to drive legally. This applies to both privately-driven and rented vehicles — not just rentals.',
			},
			{
				id: 2,
				question: 'What is the actual fine for driving without proper documentation?',
				answer: 'Under Federal Decree-Law No. 14 of 2024, driving with a foreign license not recognized by UAE authorities carries a fine of AED 2,000 to AED 10,000 for a first offense. Repeat offenses include potential imprisonment, vehicle impoundment for up to 60 days, and ban from re-entry.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government IDP is a formal document issued under the 1949 Geneva Convention by an authorized national organization in the country where your domestic license was issued. IDP Companion is a private multilingual translation document presenting your license details in Arabic and 11 other languages — used alongside your original US license and your government IDP, not as a replacement for either.',
			},
			{
				id: 4,
				question: 'What\'s the real difference between Dubai and Abu Dhabi speed enforcement?',
				answer: 'Dubai and most other emirates apply a 20 km/h buffer — the radar typically does not trigger unless you exceed the posted limit by more than 20 km/h. Abu Dhabi has used zero-tolerance enforcement since 2018: 1 km/h over the posted limit triggers a fine with no buffer whatsoever. The E11 corridor between Dubai and Abu Dhabi crosses both regimes.',
			},
			{
				id: 5,
				question: 'Can I get an IDP after arriving in the UAE if I forgot?',
				answer: 'Government IDPs can only be issued in the country where your domestic license was issued. Once you\'ve landed in Dubai or Abu Dhabi, there is no way to obtain a US-government IDP from within the UAE. IDP Companion is a digital download — available from your hotel room, the airport lounge, or anywhere with an internet connection — but it does not replace the legally-required IDP under UAE law.',
			},
			{
				id: 6,
				question: 'Is alcohol absolutely banned while driving in the UAE?',
				answer: 'Zero tolerance. The UAE permits alcohol in licensed venues (hotel bars, restaurants), but any detectable blood alcohol while operating a vehicle is a criminal offense carrying mandatory jail time, fines starting at AED 20,000, and vehicle impoundment for 60 days. There is no legal threshold and no "morning after" defense — wait at least 24 hours after any alcohol before driving.',
			},
			{
				id: 7,
				question: 'What happens if a speed camera catches me in Dubai?',
				answer: 'The fine is issued to the rental company electronically, typically via SMS within 48 hours. The agency notifies you and deducts the amount from your security deposit plus a typical AED 50 administrative fee. You can also check and pay fines directly via the Dubai Police app or the RTA website using the rental plate number.',
			},
			{
				id: 8,
				question: 'Is navigation easy in the UAE for American drivers?',
				answer: 'Roads are well-maintained and signposted in both Arabic and English. Google Maps and Waze work well throughout the UAE. Key differences from US conventions: the left lane is for fast traffic only (slow driving is fineable), flashing headlights from behind means you\'re expected to move over, roundabouts give priority to traffic already inside the circle, and the UAE\'s automated camera infrastructure means most enforcement happens silently — you find out 48 hours later via SMS.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travelers heading to the Middle East and Asia.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'th', label: 'US → Thailand', status: 'Live', href: '/idp-for-us-drivers-in-thailand' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france' },
			{ flagFrom: 'in', flagTo: 'ae', label: 'India → UAE', status: 'Coming soon' },
			{ flagFrom: 'gb', flagTo: 'ae', label: 'UK → UAE', status: 'Live', href: '/idp-for-uk-drivers-in-uae' },
			{ flagFrom: 'us', flagTo: 'sa', label: 'US → Saudi Arabia', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Renting in Dubai or Abu Dhabi?',
		text: "The UAE doesn't leave much ambiguity — the law and the rental contract say the same thing. IDP Companion takes 2 minutes, costs $35, and works at every major rental desk in Dubai and Abu Dhabi as the multilingual translation alongside your physical IDP.",
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the UAE Ministry of Interior, the Roads and Transport Authority (RTA), Dubai Police, Abu Dhabi Police, or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. UAE Federal Decree-Law No. 14 of 2024 requires foreign visitors to carry a Geneva 1949 IDP alongside their national license; in the United States, authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion is purchased as a translation aid for friction reduction at rental desks and police checkpoints, not as a replacement for the legally-required IDP. It must be used alongside your original US driver's license and your government-issued IDP.",
		sourcesHeading: 'Sources',
		sources: [
			'UAE Federal Decree-Law No. 14 of 2024 on Traffic Regulation — uaelegislation.gov.ae',
			'Dubai Roads and Transport Authority (RTA) official fine schedule — rta.gov.ae',
			'Abu Dhabi Mobility — speed enforcement update, April 2025',
			'Gulf News — UAE Traffic Law 2025 analysis, March 2025',
			'1949 Geneva Convention on Road Traffic, UN Treaty Collection',
			'US Embassy Abu Dhabi — ae.usembassy.gov travel advisory for US drivers',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'United Arab Emirates',
	},
};

export const usUaeCopy: Record<'en', CountryPairCopy> = { en };
