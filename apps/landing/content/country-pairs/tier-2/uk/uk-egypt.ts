/**
 * Country-pair content: United Kingdom → Egypt.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Egyptian road traffic law requires foreign drivers to
 * carry a Geneva 1949 International Driving Permit alongside their
 * original licence. UK gov.uk Egypt advice confirms explicitly. The
 * page's distinctive content is document-heavy checkpoint enforcement
 * on the Hurghada–Luxor desert road and at South Sinai entry; the
 * post-2022 Egyptian Pound depreciation reshaping the EGP fine
 * schedule; the rental-vs-driver-with-car decision tree (driver-with-car
 * runs ~£40–60/day through Cairo and Hurghada agencies).
 *
 * MIDDLE-PIVOT COMPLIANCE (binding per CLAUDE.md):
 * Authorised UK Geneva 1949 issuers (AA, RAC, PayPoint) appear ONCE,
 * in the legal disclaimer. They do NOT appear in Quick Answer, TLDR,
 * Why-Not-Enough, Honesty, Renting, FAQ, How-To, Final CTA or anywhere
 * else in the conversion flow. The Egyptian legal requirement is
 * disclosed factually ("Egyptian law requires a Geneva 1949 IDP") —
 * the reader's own due-diligence path to obtain that IDP is not our
 * page's job. Per the binding rule: "Mention destination's legal
 * requirement factually... without then recommending which specific
 * issuer the reader should buy from."
 *
 * Driver-with-car: factual secondary disclosure in the Renting section,
 * not primary recommendation. Friction-reducing benefits of IDP Companion
 * appear first; the alternative-route data point follows.
 *
 * PDF LANGUAGE COMPLIANCE: Arabic IS on the IDP Companion template
 * (verified Geneva 1949 set: EN, FR, ES, DE, IT, PT, VI, RU, AR, ZH,
 * JA, TH). Arabic claims here are honest.
 *
 * SEO add-ons present: tldr, phrases (8 Egyptian Arabic items for
 * cultural value), howTo, lastReviewed.
 * NO lez block — Egypt doesn't have ZTL/ZFE. NO alphabet block —
 * Arabic is taught in the phrases block contextually (8 items deep
 * enough for tourist interactions).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Egypt: 2026 Guide',
		description:
			'Driving Hurghada to Luxor? UK gov.uk says a Geneva 1949 IDP is required alongside your photocard for self-drive in Egypt. Honest 2026 guide to checkpoints, Cairo traffic and the multilingual paperwork that smooths Hurghada and Sharm rental desks.',
		ogTitleShort: 'UK Drivers in Egypt: 2026 IDP Guide',
		ogSubtitle: 'Geneva 1949 IDP required by law. Multilingual paperwork helps everywhere else.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Egypt',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Egypt · 2026 Guide',
		title: 'IDP for UK Drivers in Egypt: Hurghada–Luxor Checkpoints & Cairo Traffic',
		lead: "Egyptian road traffic law treats foreign self-drive paperwork as a two-document floor: your original photocard plus a Geneva 1949 International Driving Permit, carried together. UK gov.uk Egypt travel advice puts that requirement in plain terms — an IDP is the legal floor, not a soft recommendation. The Egyptian Traffic Department enforces it at police checkpoints on the Hurghada–Luxor desert road and at South Sinai entry, where document checks are routinely thorough. For a typical 9-day Red Sea itinerary down to Marsa Alam with a cultural extension to Luxor, that means the Geneva 1949 IDP is a UK-side step you take before flying — separate from anything we issue. Where IDP Companion does work is the friction layer that sits on top: rental-desk paperwork at Hurghada, Sharm El Sheikh and Cairo where Arabic alongside English on the same document speeds the review, checkpoint document checks in the same shape, and insurance / accident reporting in a multi-language environment.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — Egyptian law requires a Geneva 1949 IDP alongside your UK photocard for self-drive',
		text: "Egyptian road traffic law administered by the Ministry of Interior requires foreign drivers to hold a Geneva 1949 International Driving Permit in addition to their original national driving licence. UK gov.uk Egypt travel advice confirms this requirement. Egypt is party to the 1949 Geneva Convention. A UK photocard licence alone is not legally sufficient for self-drive. IDP Companion is a multilingual translation companion document — it is not a Geneva 1949 IDP and does not, on its own, satisfy the Egyptian legal requirement. Where IDP Companion does work is the friction layer: rental-desk paperwork, checkpoint document checks where Arabic translation alongside English speeds the stop, and insurance / accident reporting in a multi-language environment.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Egypt',
		lead: "Egypt is one of the destinations where the legal floor includes a Geneva 1949 IDP on top of your physical UK photocard — IDP Companion sits as supplemental multilingual translation on top of that legal floor, not as a substitute for it. The friction-layer value is at rental desks and checkpoint stops where Arabic and English on the same document speed the paperwork review.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Egypt',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Not legally sufficient for self-drive in Egypt. Egyptian law requires a Geneva 1949 IDP alongside the original photocard. UK gov.uk Egypt advice confirms. The Egyptian Traffic Department enforces at checkpoints on the Hurghada–Luxor desert road and South Sinai entry.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: "Multilingual digital PDF presenting your UK licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Arabic is on the document, so checkpoint and rental-desk paperwork checks read your licence data in the working language of Egyptian enforcement alongside English. Re-printable from any hotel. IDP Companion is supplemental multilingual translation — it is not the Geneva 1949 IDP that Egyptian law requires.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Egypt for self-drive: original UK photocard + a Geneva 1949 IDP (separate UK-side step, required by Egyptian law alongside the photocard) + UK passport with Egyptian entry visa or e-Visa + rental contract + proof of valid Egyptian motor insurance + small EGP cash for parking and roadside incidentals.",
	},

	whyNotEnough: {
		heading: 'Why your UK photocard alone is not enough in Egypt',
		lead: "For Egypt the legal answer is clear: a UK photocard alone is not sufficient under Egyptian road traffic law for self-drive. The Geneva 1949 IDP is a separate document required by law alongside the photocard. IDP Companion smooths the friction layer that sits on top.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The Egyptian legal requirement',
				text: "Egyptian road traffic law administered by the Ministry of Interior requires foreign drivers to hold a Geneva 1949 IDP issued by the driver's home country before travel — the IDP must accompany the original national photocard. UK gov.uk Egypt travel advice states this requirement explicitly. The Geneva 1949 IDP cannot be obtained on arrival in Egypt; it is a UK-side step taken before flying.",
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Reputable Egyptian rental companies (Hertz Egypt, Avis Egypt, Sixt Egypt and established Sharm El Sheikh / Hurghada local operators) typically require sight of a Geneva 1949 IDP at pickup. Some local operators are more flexible; that flexibility carries a cost. The rental contract clause referencing \"valid international driving authorisation\" gives the rental company an easy basis to void damage cover after any incident — even if they released the car without checking thoroughly at pickup.",
			},
			{
				icon: 'ph:warning-bold',
				title: 'The checkpoint and Cairo-traffic reality',
				text: "Egyptian driving conditions challenge most UK drivers. Cairo traffic is among the most chaotic in Africa: lane discipline is informal, horn use is constant, scooters and tuk-tuks weave aggressively, pedestrian crossings are decorative. The Cairo–Alexandria Desert Road has high-speed lorry traffic mixed with slower local vehicles. South Sinai interior routes have security checkpoints that can change with the regional situation. Rural roads have animal hazards (donkeys, occasional camels) and unannounced potholes. Standardised multilingual paperwork at a stop reduces the conversational surface area.",
			},
		],
	},

	rules: {
		heading: 'Egypt driving rules UK drivers should know',
		lead: 'Switching to right-side driving at Cairo morning-rush roundabouts is the first reality check; the BAC and checkpoint rules are the structural ones. Zero-tolerance alcohol enforcement bites at any positive reading. Police checkpoint frequency on Hurghada–Luxor desert road and Sinai entry routes is consistent. Rural road conditions (potholes, unlit lorries at night) are unannounced.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; deliberate attention required, especially at roundabouts' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: 'Built-up areas in Cairo, Alexandria, Hurghada, Sharm centre' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '80–90 km/h', note: 'Variable; animal hazards on rural roads after dark' },
			{ icon: 'mdi:speedometer-medium', label: 'Cairo–Alexandria Desert Road', value: '100–110 km/h', note: '120 km/h on newer toll motorways where signed' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.00% BAC', note: 'Effective zero tolerance — Egyptian law treats any alcohol before driving as an offence; foreign drivers face deportation in serious cases' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Enforcement variable; standard documentation at any stop expected' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Front-seat mandatory', note: 'Rear-seat enforcement variable' },
			{ icon: 'ph:police-car-bold', label: 'Police checkpoints', value: 'Frequent', note: 'Hurghada–Luxor, Cairo–Alexandria, Sinai entry — carry all documentation' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Egypt',
		lead: 'Egyptian traffic fines are set under federal law and subject to revision by the Ministry of Interior. Egyptian Pound depreciation in 2022–2024 means EGP fine ranges have shifted significantly from earlier guides — verify against current Ministry of Interior or Traffic Department publications at time of travel.',
		colViolation: 'Violation',
		colAmount: 'Fine (EGP, 2026 indicative)',
		colNote: 'Notes',
		items: [
			{ icon: 'ph:warning-octagon-bold', label: 'Self-driving without Geneva 1949 IDP', amount: 'Possible vehicle detention + fine + document hold', note: 'Central enforcement question for UK tourists self-driving in Egypt; specifically checked at Hurghada–Luxor and South Sinai checkpoints', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding (over posted limit)', amount: 'EGP 500+', note: 'Camera enforcement growing on Cairo Ring Road and Cairo–Alexandria Desert Road', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'EGP 500+', note: 'More common in Cairo central than on tourist coastal routes', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'EGP 300+', note: 'Variable enforcement', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt (front)', amount: 'EGP 100+', note: 'Per occupant', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI (any positive reading)', amount: 'EGP 2,000+ and possible vehicle detention', note: 'Zero-tolerance regime; criminal escalation possible at higher readings; foreign drivers face deportation in serious cases', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'Reckless driving', amount: 'EGP 1,000–5,000+ + possible court summons', note: 'Discretionary; often invoked at incident scenes', severity: 'high' },
			{ icon: 'ph:road-horizon-bold', label: 'Toll evasion (newer motorways)', amount: 'Original toll + admin penalty', note: 'Newer Egyptian toll motorways operate plate-based enforcement', severity: 'med' },
		],
		caption: 'Sources: Egyptian Ministry of Interior Traffic Department (moi.gov.eg); UK gov.uk Egypt travel advisory (gov.uk/foreign-travel-advice/egypt). EGP figures subject to inflation and periodic indexation — verify current.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Egypt — honestly',
		lead: "IDP Companion's role in Egypt is narrower than in IDP-not-required destinations like Turkey or Mexico — the Geneva 1949 IDP that Egyptian law requires is a separate UK-side step we don't issue. What we do is multilingual translation that smooths everything that happens after that step: rental-desk paperwork at Hurghada and Cairo, checkpoint stops on the Hurghada–Luxor desert road, and accident reporting in Arabic and English.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Egypt, Arabic on the document is the working-language route at police checkpoints and rental desks where the document review benefits from your licence data in Arabic alongside English',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not, on its own, sufficient to drive legally in Egypt — Egyptian law requires a Geneva 1949 IDP as a separate document alongside the photocard',
				'Not Egyptian motor insurance — that is purchased separately, typically at the rental counter',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Egypt',
			items: [
				'At Hurghada, Sharm El Sheikh, Cairo and Luxor airport rental counters where Arabic-and-English translation of licence data speeds the document check',
				'At police checkpoints on the Hurghada–Luxor desert road, South Sinai entry and Cairo Ring Road as supplemental translation alongside the Geneva 1949 IDP',
				'For accident-report and insurance paperwork where multilingual translation simplifies the cross-border claim',
				'As a re-printable backup from any hotel if your physical photocard or other documentation is lost during a multi-stop trip',
				"For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Egypt plus Morocco, Turkey, UAE, Thailand and other destinations on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Egyptian law actually cares about for self-drive',
			items: [
				'Your physical UK photocard licence — the actual permission to drive',
				'A Geneva 1949 IDP — a separate UK-side step required by Egyptian law alongside the photocard; cannot be obtained on arrival in Egypt',
				'UK passport with Egyptian entry visa or e-Visa — required at every checkpoint and rental pickup',
				'Rental agreement and proof of valid Egyptian motor insurance — provided by the rental company at pickup',
				'Small EGP cash for parking, unavoidable on-the-spot incidentals and tolls on newer motorways',
			],
		},
		pattern:
			"What prepared UK self-drivers in Egypt actually carry: photocard + Geneva 1949 IDP + passport with visa + rental contract + Egyptian insurance certificate + IDP Companion. The Geneva 1949 IDP is the UK-side step that's separate from us; IDP Companion is the friction-layer document for everything that happens after that — rental desks, checkpoint stops, insurance paperwork.",
	},

	renting: {
		heading: 'Renting a car in Egypt as a UK driver',
		lead: "Egypt's rental market is smaller than its tourism numbers suggest because the document-heavy environment and Cairo traffic intensity push many UK tourists toward driver-with-car alternatives. For self-drive, the Geneva 1949 IDP is the documentation gate.",
		chains: [
			{ name: 'Hertz Egypt', policy: 'Presence at Cairo International, Hurghada, Sharm El Sheikh, Luxor airports. Requires Geneva 1949 IDP at pickup; some branches more strict than others.' },
			{ name: 'Avis Egypt', policy: 'Similar coverage to Hertz. UK photocard plus Geneva 1949 IDP expected at pickup.' },
			{ name: 'Sixt Egypt', policy: 'Limited but growing presence; documentation requirements consistent with international standards.' },
			{ name: 'Local operators (Sharm El Sheikh, Hurghada)', policy: 'Vary widely in reliability. The better-known operators expect a Geneva 1949 IDP; flexibility at less-reputable shops carries a cost — the contract clause referencing "valid international driving authorisation" voids damage cover after an incident.' },
		],
		tipsHeading: 'Practical tips for renting and driving in Egypt',
		tips: [
			'Carry the complete document set in the vehicle at all times: UK photocard, Geneva 1949 IDP, UK passport (or copy with original at hotel), rental agreement, Egyptian motor insurance certificate, IDP Companion. Egypt is paperwork-dense at police checkpoints',
			"Avoid Cairo driving where possible. Uber and Careem operate widely in Cairo, Alexandria and Hurghada and remove the parking, navigation and traffic-discipline questions for inner-city movement",
			'Don\'t drive at night between cities. Animal hazards, unlit lorries and reduced enforcement visibility make night driving on the Hurghada–Luxor and Cairo–Alexandria Desert Road routes genuinely riskier — plan day-time driving and overnight stops',
			'The South Sinai interior has security considerations; some routes are restricted or require pre-arranged permits. Check current UK gov.uk Egypt advisory before planning routes inland',
			'Petrol availability is good on main routes, sparser on rural and desert routes. Fuel up in towns; expect occasional queues at busy stations',
			'A driver-with-car is a common alternative — approximately £40–60 GBP per day for car plus driver through hotel concierge or established Cairo and Hurghada agencies, often inclusive of the driver\'s accommodation and small meal allowance. For trips weighted toward cultural extensions (Luxor, Aswan, the pyramids), many UK travellers find this routinely outperforms self-drive end-to-end on cost and stress',
			'Carry small EGP notes for parking, tolls, tips and unavoidable on-the-spot interactions. Larger fines should be issued with proper documentation and paid through official channels — refuse cash-only demands',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'Six outcomes UK self-drivers actually meet in Egypt — ranked by how often they show up in gov.uk Egypt advisory data, Ministry of Interior reporting and UK-tourist forum threads.',
		items: [
			{
				severity: 'low',
				frequency: 'The correct path',
				label: 'Geneva 1949 IDP + photocard + full paperwork, brief checkpoint stops',
				text: "Standard self-drive experience with documentation in order. Hurghada–Luxor desert road checkpoint is a 5-minute review and onward. IDP Companion shortens the conversation further at multilingual paperwork checks.",
			},
			{
				severity: 'low',
				frequency: 'Very common for UK travellers in Egypt',
				label: 'Driver-with-car arrangement, self-drive skipped entirely',
				text: '£40–60/day through hotel concierge or established Cairo / Hurghada agencies. No Geneva 1949 IDP needed; no Cairo traffic stress; the driver handles checkpoints and route knowledge. Often comparable end-to-end cost to self-drive with full insurance.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Agent asks for translation, you produce IDP Companion alongside the Geneva 1949 IDP',
				text: 'Five extra minutes at a Hurghada, Sharm or Cairo counter, no further issue. Arabic-and-English on the document removes any "what does this UK abbreviation mean" question at the desk.',
			},
			{
				severity: 'high',
				frequency: 'Real risk for self-drivers without proper documentation',
				label: 'Checkpoint stop on Hurghada–Luxor or Sinai route, no Geneva 1949 IDP',
				text: 'Vehicle hold, fine, lengthy roadside conversation, possible escort back. This is the central reason Egyptian road traffic law treats the Geneva 1949 IDP as the legal floor for foreign self-drive.',
			},
			{
				severity: 'high',
				frequency: 'Rare but consequential',
				label: 'Accident, insurance claim challenged due to missing Geneva 1949 IDP',
				text: 'Full damage liability falls to the renter personally; rental insurer denies cover citing the unlicensed-foreign-driver clause. UK motor insurance does not extend to Egypt — Egyptian auto insurance must be in place.',
			},
			{
				severity: 'med',
				frequency: 'Universal post-trip',
				label: 'Speed-camera or motorway-toll charges follow you to your UK card',
				text: 'Newer Egyptian toll motorways and Cairo–Alexandria camera-enforcement zones forward fines and tolls to the rental company, which charges them to your UK card on file 3–6 weeks after the trip plus an admin fee.',
			},
		],
		math: "$35 IDP Companion + a Geneva 1949 IDP (separate UK-side step) + Egyptian rental insurance ($15–25/day) is the documented self-drive path. Driver-with-car at £40–60/day for ~9 days is comparable end-to-end to self-drive plus full insurance, removes the documentation gate and the Cairo-traffic stress — and is what a meaningful share of UK travellers in Egypt actually choose. Run the numbers for your specific itinerary.",
	},

	phrases: {
		heading: 'Arabic phrases for police stops, rental desks and Cairo interactions',
		lead: "Tourist-facing roles in Hurghada, Sharm and Luxor mostly speak working English, so phrases aren't strictly needed — but eight Egyptian-Arabic items add cultural color and help at rural checkpoints, smaller fuel stations and Cairo street-level interactions where English fades fast.",
		items: [
			{ phrase: 'Hādhihi rukhṣatī', translation: 'Here is my licence', context: 'Standard opening — hand UK photocard, Geneva 1949 IDP and passport together at a checkpoint' },
			{ phrase: 'Wa hādha jawāz al-safar', translation: 'And here is the passport', context: 'Follow-up at any document check; pairs naturally with the licence handover' },
			{ phrase: 'Anā sāʾiḥ Brīṭānī', translation: "I'm a British tourist", context: 'Establishes context immediately; often shifts a stop toward a friendlier interaction' },
			{ phrase: 'Hal tatakallam Inglīzī?', translation: 'Do you speak English?', context: 'Almost universally answered yes in tourist-facing roles; rarely needed but courteous' },
			{ phrase: 'Ayna aqrab maḥaṭṭat banzīn?', translation: 'Where is the nearest petrol station?', context: 'Useful on the Hurghada–Luxor desert road and Cairo–Alexandria Desert Road where stations are sparse' },
			{ phrase: 'Aḥtāj musāʿada', translation: 'I need help', context: 'Universal at any incident or breakdown' },
			{ phrase: 'Min faḍlik, īṣāl rasmī', translation: 'Please, an official receipt', context: 'Polite firm phrase at any fine interaction — paid fines should be issued with documentation, not cash-only on the roadside' },
			{ phrase: 'Shukran', translation: 'Thank you', context: 'Universal courtesy; pairs with "shukran jazīlan" for "thank you very much"' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Egypt (UK citizens, self-drive)',
		lead: "Preparation for an Egyptian self-drive is short on documentation steps and long on judgement calls. The two UK-side documentation tasks — generating the multilingual companion document and obtaining the Geneva 1949 IDP — both happen before flying. The bigger decision is self-drive vs driver-with-car for the cultural-extension legs of the trip.",
		schemaName: 'How to prepare for driving in Egypt as a UK citizen',
		duration: 'PT45M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: "Required for both the Geneva 1949 IDP application and the rental pickup in Egypt. The plastic photocard alone is sufficient post-2015 — no paper counterpart needed.",
			},
			{
				title: 'Obtain a Geneva 1949 International Driving Permit before flying',
				text: "Egyptian law requires this document alongside your photocard for self-drive. The Geneva 1949 IDP is issued in the UK by authorised issuers — that's a separate UK-side step you take before flying. It cannot be obtained on arrival in Egypt. The IDP is typically valid for 12 months from issue.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: "$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Arabic on the document is the working-language route at Egyptian police checkpoints and rental desks. Issued in two minutes online, valid 1–5 years. Print at home or from any Egyptian hotel.",
			},
			{
				title: 'Decide self-drive vs driver-with-car for your itinerary',
				text: "For trips weighted toward cultural extensions (Luxor, Aswan, the pyramids), a driver-with-car at £40–60/day often comes out comparable to self-drive plus full Egyptian insurance and removes the Cairo-traffic stress, checkpoint navigation and Geneva 1949 IDP question. For Red Sea coast short loops around Hurghada or Sharm where roads are quieter, self-drive can make sense. Run the cost comparison before pickup.",
			},
			{
				title: 'Carry physical documents in one folder + small EGP cash',
				text: 'Physical UK photocard + Geneva 1949 IDP + UK passport with Egyptian visa + rental contract + Egyptian insurance certificate + IDP Companion — all in one folder. Hand the folder over at any checkpoint. Carry small EGP notes for parking, tolls, tips and incidentals. Refuse cash-only fine demands; request an official receipt.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Egypt as a UK tourist?',
				answer: 'Yes for self-drive. Egyptian road traffic law requires foreign self-drivers to hold a Geneva 1949 International Driving Permit alongside their original national driving licence. UK gov.uk Egypt travel advice confirms this explicitly. The IDP must be issued in the UK before travel — it cannot be obtained on arrival.',
			},
			{
				id: 2,
				question: 'Is IDP Companion the same as a Geneva 1949 IDP?',
				answer: 'No. IDP Companion is a private multilingual translation companion document presenting your photocard details in twelve widely-read languages from the 1949 Geneva Convention set. It is not a government-issued IDP under the 1949 Geneva Convention and does not, on its own, satisfy the Egyptian legal requirement for self-drive. Where Egyptian law requires the Geneva 1949 IDP, that document is a separate UK-side step.',
			},
			{
				id: 3,
				question: 'Should I hire a driver-with-car instead of self-driving?',
				answer: "For many UK travellers in Egypt, yes — particularly for itineraries weighted toward Luxor, Aswan and the cultural extensions. Daily rates of £40–60 typically include the driver and remove the Geneva 1949 IDP step, the Cairo-traffic stress and the checkpoint navigation question in one decision. Often comparable end-to-end cost to self-drive plus full Egyptian insurance.",
			},
			{
				id: 4,
				question: 'What about driving in Cairo itself?',
				answer: "Most UK travellers don't. Cairo traffic is among the most chaotic in Africa; lane discipline is informal; parking is scarce. Uber and Careem operate widely and remove the question. If you do drive, stick to main arteries and avoid rush hours.",
			},
			{
				id: 5,
				question: 'What side of the road do they drive on?',
				answer: 'Right. Switch from UK left-side driving requires deliberate attention, especially at roundabouts and during initial city-traffic exposures.',
			},
			{
				id: 6,
				question: 'Are the Sinai interior and South Sinai different?',
				answer: 'Yes. South Sinai (Sharm El Sheikh and the Red Sea coast resorts) is generally safer for tourists and easier to drive. The Sinai interior has security considerations that change with the regional situation — check current UK gov.uk Egypt advisory before planning routes inland.',
			},
			{
				id: 7,
				question: 'What about the Hurghada–Luxor desert road?',
				answer: 'Standard tourist route but document-heavy on checkpoints. Carry the complete document set (UK photocard, Geneva 1949 IDP, passport, rental contract, Egyptian insurance certificate, IDP Companion) and expect at least one checkpoint stop each way. Avoid night driving — animal hazards and unlit lorries make it genuinely riskier.',
			},
			{
				id: 8,
				question: 'Will my UK insurance cover me in Egypt?',
				answer: 'No. UK motor insurance does not extend to Egypt. Egyptian motor insurance must be in place — typically purchased through the rental company at pickup or via a separate Egyptian insurer for longer rentals.',
			},
			{
				id: 9,
				question: 'Are there convoy requirements like there used to be?',
				answer: 'Convoy requirements (where tourist vehicles were escorted in groups on certain routes) have largely been relaxed. Specific corridors may still have route advisories — check current UK gov.uk Egypt travel advisory.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Egypt trips?',
				answer: 'Choose 1 year ($35), 3 years ($45) or 5 years ($55). Validity is tied to your physical UK photocard — if your photocard expires, IDP Companion expires with it. One purchase covers Egypt plus Morocco, Turkey, UAE, Thailand and other destinations on the same plan.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Egypt-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco/' },
			{ flagFrom: 'gb', flagTo: 'ae', label: 'UK → UAE', status: 'Live', href: '/idp-for-uk-drivers-in-uae/' },
			{ flagFrom: 'gb', flagTo: 'tr', label: 'UK → Turkey', status: 'Live', href: '/idp-for-uk-drivers-in-turkey/' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Russia → Egypt', status: 'Live', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'gb', flagTo: 'id', label: 'UK → Indonesia', status: 'Live', href: '/idp-for-uk-drivers-in-indonesia/' },
		],
	},

	finalCta: {
		heading: 'Driving the Red Sea coast, the Hurghada–Luxor desert road or Cairo–Alexandria?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese, Arabic and 5 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Arabic on the document is the working-language route at Egyptian checkpoints and rental desks. Valid 1–5 years and covers Egypt plus Morocco, Turkey, UAE, Thailand on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. Where Egyptian law requires the Geneva 1949 IDP, that's a separate UK-side step you take before flying — IDP Companion smooths everything that happens after.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Egyptian Ministry of Interior, the Egyptian Traffic Department or any other Egyptian government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention, and does not, on its own, satisfy the Egyptian legal requirement that foreign self-drivers carry a Geneva 1949 IDP alongside their original national driving licence. Authorised issuers of UK-origin Geneva 1949 IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion must be used alongside your original UK photocard driving licence and (where required by Egyptian law) a Geneva 1949 IDP.",
		sourcesHeading: 'Sources',
		sources: [
			'UK Foreign, Commonwealth & Development Office — Driving in Egypt (gov.uk/foreign-travel-advice/egypt)',
			'Egyptian Ministry of Interior — Traffic Department (moi.gov.eg)',
			'1949 Geneva Convention on Road Traffic — UN Treaty Series',
			'UK Foreign, Commonwealth & Development Office — General travel advisory framework',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Egypt',
	},
};

export const ukEgyptCopy: Record<'en', CountryPairCopy> = { en };
