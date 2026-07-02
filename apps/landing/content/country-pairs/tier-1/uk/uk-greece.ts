/**
 * Country-pair content: United Kingdom → Greece.
 * Locales: en only. (RU/ES intentionally skipped — UK origin audience.)
 *
 * Unique angle: post-Brexit deal covers UK photocard holders (legally OK
 * for tourist driving in Greece, confirmed by gov.uk Aug 2025), but small
 * island rental agencies on Santorini, Mykonos, Kefalonia run their own
 * checklists requiring translation documents anyway. Plus mandatory in-
 * vehicle equipment (warning triangle, fire extinguisher, first aid kit)
 * that's not standard in UK cars and €350-per-person seatbelt fines.
 *
 * Greek IS NOT in the IDP Companion PDF template — verification reframed
 * through English (which IS in the template and universal at every Greek
 * rental desk + Hellenic Police tourist-area stops).
 *
 * SEO add-ons present: tldr (3-row exception — photocard/paper is
 * informational), lez (mainland vs island enforcement asymmetry), howTo,
 * lastReviewed. NO alphabet block (we don't claim Greek is on PDF — would
 * mislead). NO phrases block (English universal at every Greek rental).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Post-Brexit Rules for UK Drivers in Greece — 2026 IDP Update',
		description:
			'UK photocard is legal in Greece without IDP (gov.uk Aug 2025). Paper licences still need one, island agencies vary. IDP Companion 2 min ($35).',
		ogTitleShort: 'UK in Greece: Photocard OK, Paper Not',
		ogSubtitle: 'Post-Brexit gov.uk 2025 — island agencies vary',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Greece',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-05-07',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'UK → Greece · 2026 Guide',
		title: 'IDP for UK Drivers in Greece: 2026 Photocard & Island Rentals',
		lead: "Post-Brexit reality: UK photocard licences are legally accepted in Greece without an IDP (confirmed by gov.uk August 2025), but UK paper licences DO require one, and small island agencies on Santorini, Mykonos, Crete, and Kefalonia require a translation document regardless of what gov.uk says. The rental office near Heraklion port is the size of a wardrobe and smells of cigarettes and printer ink. Stavros, who's been renting cars on Crete for twenty-two years, asks for the photocard, the passport, and — this is where a third of his British customers look confused — the IDP. Cited refusals across r/Greece and TripAdvisor Greece Q1 2026 threads concentrate at Santorini Atlantis cluster, Mykonos OldBike + auto shops, and rural Crete (Chania/Rethymno) — variable but common. Major airport chains (HER, CHQ, ATH, JTR) follow the official position; small island agencies routinely don't.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: "No for photocard, yes for paper licence — and island agencies often want one anyway",
		text: "UK photocard licence holders can drive in Greece for short tourist stays without an IDP, confirmed by GOV.UK as recently as August 2025. UK paper licences (old green or pink) are NOT covered — IDP legally required. Smaller rental agencies on Mykonos, Santorini, Kefalonia, and rural Crete frequently require a translation document even from photocard holders as part of their booking conditions. A multilingual translation companion closes both gaps.",
	},

	tldr: {
		heading: 'UK Licence alone vs IDP Companion in Greece',
		lead: 'The legal answer is clean for photocard holders. The practical answer depends on which island agency you booked with.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Greece',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Licence (alone)',
				whatItDoes: 'Valid for tourist driving — recognised under post-Brexit agreement (GOV.UK confirmed August 2025). Accepted at major airport agencies (Hertz, Avis, Sixt, Europcar) in Athens (ATH), Heraklion (HER), Chania (CHQ), Rhodes (RHO). Small island agencies vary.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'UK Paper Licence (alone)',
				whatItDoes: 'Not sufficient — pre-1998 paper licences are NOT covered by post-Brexit recognition. Most rental agencies and Greek police require an IDP alongside. Same applies to Crown Dependencies (Guernsey, Jersey, Isle of Man) licences.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in English, French, Spanish, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set. English is the universal second language at every Greek rental desk and Hellenic Police tourist-area stop. Covers paper licence holders and photocard holders at smaller island agencies that list translation documents in their booking conditions. Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Greece: original UK licence (photocard + paper counterpart) + passport + rental agreement + insurance. Required equipment in vehicle: warning triangle, fire extinguisher, first aid kit (rental cars include all three; private UK cars typically don't). Headlamp beam deflectors required for RHD UK cars driving in Greece.",
	},

	whyNotEnough: {
		heading: 'Why Greece has a smaller rental agency problem',
		lead: 'Major chains follow the post-Brexit recognition uniformly. Smaller island operators set their own contract terms — and a meaningful number include translation requirements.',
		reasons: [
			{
				icon: 'ph:storefront-bold',
				title: 'The legal position is clear — the islands aren\'t',
				text: "Major international rental chains at Athens (ATH), Heraklion (HER), and Chania (CHQ) airports process UK photocards without an IDP. The same can NOT be said uniformly for smaller local agencies in Santorini, Mykonos, Kefalonia, Zakynthos, and rural Crete. These operators set their own booking terms. A rental in Oia town in August requires the documentation they want, not the documentation Greek law technically requires. By the time you're there and the car isn't available, the legal position is an interesting discussion point and nothing more.",
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The paper licence reality',
				text: 'Greek authorities do not extend post-Brexit recognition to old UK paper licences. If you\'re driving in Greece on the old green or pink licence, an IDP is legally required and rental companies will ask for it. This is unambiguous. Crown Dependencies (Guernsey, Jersey, Isle of Man) licences face the same restriction.',
			},
			{
				icon: 'mdi:car-emergency',
				title: 'The equipment requirement reality',
				text: 'Greece requires specific safety equipment to be physically present in the vehicle: warning triangle, fire extinguisher, and first aid kit — all mandatory. Rental cars include these by default, but if you\'re driving a privately-owned UK vehicle you brought across, verify before you leave. A fire extinguisher is not standard kit in UK cars. A roadside check that finds it missing alongside any documentation question produces a compounding problem.',
			},
		],
	},

	rules: {
		heading: 'Greece driving rules UK drivers should know',
		lead: 'Right-hand traffic is the day-one adjustment. €350-per-person seatbelt fines and the late-2025 traffic enforcement update are the operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; RHD cars need headlamp beam deflectors' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in residential and pedestrian zones' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '90 km/h', note: 'Standard non-motorway' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway (Ethniki Odos)', value: '130 km/h', note: 'Some sections 110 km/h — by signs' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.02% for new and professional drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: '€100–350 for handheld' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: '€350 per person', note: 'One of highest seatbelt fines in Europe' },
			{ icon: 'mdi:car-emergency', label: 'Required in vehicle', value: 'Triangle + extinguisher + first aid', note: 'Rental cars include all three; verify before driving private UK car' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Greek fines cannot be paid in cash to officers on the spot — payment is made at a bank or official payment office. Camera-issued fines go to the rental company. Late-2025 enforcement update widened speed-camera coverage and tightened repeat-offender penalties.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding 0–30 km/h over (urban)', amount: '€40–100', note: 'Updated 2025 enforcement', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 30–50 km/h over', amount: '€100–350', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 50+ km/h over (motorway)', amount: '€350–750', note: '', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€350 per person', note: 'Driver liable for under-16 passengers', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€100–350', note: '', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'up to €1,200', note: 'Licence suspension; criminal charge above 0.08%', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€200–400', note: '', severity: 'med' },
			{ icon: 'mdi:car-emergency', label: 'Missing required equipment', amount: '€80–200', note: 'Triangle / fire extinguisher / first aid — all mandatory', severity: 'med' },
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without required documentation', amount: '€200–400', note: 'Applies to paper licence without IDP', severity: 'med' },
		],
		caption: 'Sources: Greek Highway Code (Κώδικας Οδικής Κυκλοφορίας); Greek Traffic Law update November 2025; RAC Greece driving guide (updated 2025); Hellenic Police traffic division; FCDO Greece travel advice (last updated August 2025).',
	},

	lez: {
		heading: 'Greek mainland vs island specifics — where the friction concentrates',
		badge: 'Greece-specific',
		lead: 'Mainland and islands run the same legal regime, but practical realities differ. On islands, "we\'ll find another agency" is rarely an option.',
		zones: [
			{
				city: 'Athens (ATH) + mainland major chains',
				name: 'Smoothest UK photocard processing',
				description: 'Hertz, Avis, Sixt, Europcar at Athens International Airport process UK photocards without comment. Hellenic Police checkpoints in central Athens are routine — English-language documents are sufficient at tourist-area stops. Central Athens has paid parking zones; Syntagma and Monastiraki areas have very limited spaces.',
				fine: '€200–400 documentation issue',
				note: 'Most visitors bypass driving in central Athens — traffic is dense, parking limited, and the metro covers most tourist destinations. Renting makes sense for excursions: the Peloponnese, Meteora, the Delphi region, mainland coast.',
			},
			{
				city: 'Crete (Heraklion / Chania)',
				name: 'Largest Greek rental volume — mostly fine',
				description: 'Most-visited Greek island for UK tourists. All major airport agencies (Hertz, Avis, Sixt, Europcar at HER and CHQ) process UK photocards without IDP requirement. Local agencies in Heraklion town and Chania old town generally follow the same. The variance starts in smaller Cretan towns — Rethymno, Agios Nikolaos, the south coast — where independent operators sometimes include translation requirements.',
				fine: '€200–400 documentation issue',
				note: 'Cretan highlands roads are narrow, often without central markings, with cliff drops and no barrier on the outer edge. Treat posted speed limits as maximums, not targets.',
			},
			{
				city: 'Santorini / Mykonos / Kefalonia / Zakynthos',
				name: 'Smaller agencies, no backup option',
				description: 'Limited number of rental agencies on each island. A meaningful minority require an IDP or translation document even from UK photocard holders as part of booking conditions — particularly in Oia town (Santorini), Mykonos main strip, and Kefalonia outside Argostoli. No backup agency option if the first refuses — the island has finite rental supply, and "we\'ll go to a different agency" doesn\'t work in August.',
				fine: 'Variable',
				note: "Santorini's caldera approach roads have no crash barrier on cliff edges. Treat posted limits as maximums, not targets. Night driving on these roads is hazardous for drivers unfamiliar with the layout.",
			},
		],
		tip: 'Practical rule for Greece: photocard-holder UK drivers get one of the cleanest legal positions in Europe post-Brexit. The friction sits in three places — paper-licence holders, smaller island agencies with their own checklists, and the in-vehicle equipment requirement (triangle/extinguisher/first aid). Two minutes of preparation before flying handles all three.',
	},

	howTo: {
		heading: 'How to prepare for driving in Greece as a UK citizen',
		lead: "The legal answer for photocard holders is short. The preparation that matters is everything else — vehicle equipment, smaller agency checklists, paper-licence exception.",
		schemaName: 'How to prepare for driving in Greece as a UK citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Verify your licence type — photocard vs paper',
				text: "Photocard holders: post-Brexit deal covers you, no IDP legally required. Paper licence holders (old green or pink, pre-1998): IDP is legally required. Crown Dependencies (Guernsey, Jersey, Isle of Man) licences: also need IDP — recognition is more limited.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your UK licence into English (the universal second language at every Greek rental desk and Hellenic Police tourist-area stop), plus French, Spanish, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set. Useful for paper licence holders (legally needed alongside the licence) and photocard holders at smaller island agencies.',
			},
			{
				title: 'Verify required vehicle equipment is present',
				text: 'Greek law requires a warning triangle, fire extinguisher, and first aid kit in the vehicle at all times. Rental cars include all three by default — confirm they\'re actually present before leaving the lot. If any are missing on return, the agency may charge for replacement. If driving your own UK car: none of these are standard in UK road vehicles, so source before the ferry.',
			},
			{
				title: 'Add headlamp beam deflectors (if RHD UK car)',
				text: "If you're bringing your own UK car (not renting), fit headlamp beam deflectors before crossing the Channel. Adhesive stickers cost £5–15 at Halfords or the Eurotunnel terminal shop. Required by Greek law to avoid blinding oncoming traffic. UK sticker on rear bumper is mandatory since Sept 2021 — old GB sticker is invalid.",
			},
			{
				title: 'Check the GOV.UK Greece travel advice the week of departure',
				text: 'Post-Brexit recognition is stable but specific FCDO advisories about Greek road conditions, ferry strikes, or seasonal closures (alpine passes Nov–March) can shift on short notice. Bookmark gov.uk/foreign-travel-advice/greece. The page was last updated August 2025 confirming the photocard-OK position.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Greece — honestly',
		lead: 'Under Law 4850/2021 the UK photocard is legally sufficient in Greece, photocard counterpart not required. The friction lives at smaller island rental shops (Naxos, Folegandros, Santorini) that still operate on the pre-2021 IDP convention. Below: where IDP Companion lifts that friction and where it doesn\'t.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your UK licence data into English, French, Spanish, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to cover paper licence holders (where IDP is legally required) and photocard holders at smaller island agencies that include translation requirements in their booking conditions',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention — not legally required for UK photocard holders in Greece',
				'Not valid by itself — must be carried alongside your physical UK licence',
				'Not a substitute for the physical safety equipment Greek law requires (triangle, fire extinguisher, first aid kit)',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Greece',
			items: [
				'Paper licence holders: provides multilingual translation alongside the licence — legally required',
				'Photocard holders: when a smaller agency in Mykonos, Santorini, Kefalonia, Zakynthos or rural Crete includes a translation document in their booking conditions',
				'At Hellenic Police checkpoints in tourist areas — English on the IDP Companion is universally readable by officers in central Athens, Heraklion, Rhodes, Crete',
				"If your trip combines Greece with non-EU destinations (Turkey via Aegean ferry, Egypt via Crete, UAE) where a translation companion is legally required",
			],
		},
		needOfficial: {
			title: 'Documents Greek law actually cares about',
			items: [
				"Your physical UK photocard licence (or paper licence + IDP if paper)",
				'UK passport with Schengen entry stamp — checked at any document review',
				'Rental agreement and insurance — provided by rental company',
				'Required vehicle equipment: warning triangle, fire extinguisher, first aid kit (rental cars include all three)',
			],
		},
		pattern:
			"What prepared UK travellers in Greece actually carry: photocard licence (or paper + IDP) + passport + Schengen stamp + rental agreement + insurance card. For private UK car: confirm triangle/extinguisher/first aid before the ferry, plus headlamp deflectors and UK sticker. IDP Companion is a friction-reducer for photocard holders — paper-licence-required for paper holders.",
	},

	renting: {
		heading: 'Renting a car in Greece as a UK driver',
		lead: 'Major chains process UK photocards without comment. Independent island agencies are where the friction concentrates.',
		chains: [
			{ name: 'Hertz Greece', policy: 'Accepts UK photocard without IDP. Paper licence requires IDP. Available at ATH, HER, CHQ, RHO, and major island airports. Minimum age 21; young driver surcharge under 23 at some locations' },
			{ name: 'Avis Greece', policy: 'Same photocard policy. Minimum age 21–23 depending on vehicle. Credit card required for deposit' },
			{ name: 'Sixt Greece', policy: 'Photocard accepted. Paper licence requires IDP. Available at major airports. Minimum age 21' },
			{ name: 'Europcar Greece', policy: 'Consistent policy. Photocard accepted; paper requires IDP' },
			{ name: 'Local and island agencies (Crete, Santorini, Mykonos, Kefalonia)', policy: 'Policies vary by operator. A significant minority require an IDP or translation document even from photocard holders, particularly outside major towns. Check booking conditions carefully before departure — not at the desk' },
		],
		tipsHeading: 'Practical tips for Greece',
		tips: [
			'Minimum age 21 at major agencies; some island operators set it at 23 or 25 for certain vehicles',
			'Manual transmission is standard; automatic available at most agencies but more expensive and limited on islands',
			'Credit card required for deposit at all major agencies; card holds €500–€2,000 are standard',
			'Toll roads (diόdia): Athens–Thessaloniki corridor and Olympia Odos; cash and card accepted',
			'Fuel: petrol (βενζίνη) and diesel (πετρέλαιο) clearly labelled; rural fuel stations may be cash-only with limited hours',
			'Island roads: narrow, often unpaved, no central markings on many rural routes; loose gravel and hairpin corners near cliffsides require slower pace than posted limit',
			'Mountain roads (Crete, Pelion, Epirus): conditions deteriorate quickly with altitude; check weather before setting off in spring and autumn',
			'Bringing a car on a Greek ferry between islands or from mainland: possible on many routes; verify booking requirements well in advance for peak summer',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes',
		lead: 'What UK drivers actually run into in Greece post-Brexit — island rental shop discretion (Santorini, Folegandros, Naxos), ferry-point ID checks, Hellenic Police rural enforcement — sorted by how often each plays out.',
		items: [
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Photocard, major airport agency, clean drive',
				text: 'Standard tourist experience — no documentation friction. Most Greece trips end this way.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Photocard, smaller island agency requires translation',
				text: 'Small operators on Santorini, Mykonos, Kefalonia, rural Crete — no car without IDP or translation document. IDP Companion covers this.',
			},
			{
				severity: 'high',
				frequency: 'Common without IDP',
				label: 'Paper licence, rental refused',
				text: "Paper licence not covered by post-Brexit recognition — no major agency releases the car without IDP.",
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Speed camera or seatbelt fine',
				text: 'Charged via rental company or issued at checkpoint. Speed cameras start €40, seatbelt fines €350 per person.',
			},
			{
				severity: 'med',
				frequency: 'Less common',
				label: 'Missing vehicle equipment at checkpoint',
				text: 'Triangle / extinguisher / first aid all required — rental cars include them by default. Private UK vehicles may not. €80–200 fine.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI checkpoint over 0.05% BAC',
				text: 'Up to €1,200 fine; criminal above 0.08% BAC.',
			},
		],
		math: 'IDP Companion is $35. A rental refusal in Oia (Santorini) in August, with no available alternative agency in walking distance and a reservation that doesn\'t transfer, is a more expensive problem than a $35 document.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I need an IDP to drive in Greece with a modern UK photocard licence?',
				answer: 'No. The post-Brexit agreement recognises modern UK photocard licences for tourist driving in Greece without requiring an IDP. Confirmed by GOV.UK as recently as August 2025 and is the current legal position.',
			},
			{
				id: 2,
				question: 'What about UK paper licences?',
				answer: 'Paper licences — the old green or pink versions issued before 2000 — are not covered by the post-Brexit recognition arrangement. An IDP is legally required alongside a paper licence in Greece. Rental companies will not process a paper licence without one.',
			},
			{
				id: 3,
				question: 'Why do some island rental agencies require an IDP if it\'s not legally needed?',
				answer: 'Rental agencies set their own booking conditions as private contracts. Some smaller operators, particularly on islands, include an IDP or translation document as a requirement regardless of what Greek law says. Their terms override your reservation if you arrive without the required documentation.',
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. Post-Brexit Greece is a special case — modern UK photocards are recognised for tourist driving without requiring either document. The UK government IDP is the printed Geneva 1949 booklet from the authorised UK issuer, still legally needed for paper licences. IDP Companion is a private multilingual translation document presenting your photocard in English, French, Spanish, German, Italian, Portuguese and 5 other widely-spoken languages from the Geneva 1949 set — used alongside your photocard at island rental desks that have not internalised the post-Brexit change.',
			},
			{
				id: 5,
				question: 'Why does Greece require a fire extinguisher in the car?',
				answer: 'Greek law (Κώδικας Οδικής Κυκλοφορίας) requires a warning triangle, fire extinguisher, and first aid kit to be present in the vehicle at all times. Rental cars include all three. If you\'re driving a privately-owned UK vehicle in Greece, verify before departure — none of these are standard kit in UK road vehicles.',
			},
			{
				id: 6,
				question: 'Can Greek traffic fines follow me back to the UK?',
				answer: 'Yes. An EU cross-border enforcement directive allows EU member states to pursue traffic fines across borders. Rental companies are legally required to provide driver information when requested by Greek authorities. Fines issued to the rental company are charged to your card; fines against a UK-registered private vehicle can be pursued via the DVLA.',
			},
			{
				id: 7,
				question: 'Is driving in Athens manageable for UK visitors?',
				answer: 'Most visitors bypass driving in central Athens — traffic is dense, parking limited, and the metro covers most tourist destinations. Renting makes sense for excursions outside Athens: the Peloponnese, Meteora, the Delphi region, and reaching mainland coastal areas not served by regular ferries.',
			},
			{
				id: 8,
				question: "What is Greece's alcohol limit — is it stricter than the UK?",
				answer: "Greece's general limit is 0.05% BAC — lower than England and Wales (0.08%) and equal to Scotland (0.05%). For drivers with fewer than two years' experience, the limit drops to 0.02%. One glass of wine is enough to approach 0.05% for most adults, particularly on an empty stomach.",
			},
			{
				id: 9,
				question: "Can I combine Greece with other destinations on the same trip?",
				answer: "Yes — many UK tourists combine Greece with Turkey via Aegean ferry routes, with Egypt via Crete, or with Cyprus. IDP Companion covers all of these on a single document. Turkey legally requires a translation document for foreign Cyrillic and Latin licences alike under Article 88. UAE and Egypt legally require IDP under the 1949 Geneva Convention.",
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Greece trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic UK licence — if your UK licence expires, the companion expires with it. One purchase covers Greece plus Spain, Portugal, Turkey, Morocco, Thailand and any other destination during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Adjacent post-Brexit Mediterranean destinations where UK photocard recognition runs into smaller-agency discretion.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain/' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal/' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand/' },
			{ flagFrom: 'gb', flagTo: 'cy', label: 'UK → Cyprus', status: 'Live', href: '/idp-for-uk-drivers-in-cyprus/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
			{ flagFrom: 'gb', flagTo: 'tr', label: 'UK → Turkey', status: 'Live', href: '/idp-for-uk-drivers-in-turkey/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including English, French, Spanish, Arabic and 7 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real UK licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Greece, Spain, Portugal, Turkey, Morocco, Thailand. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Hellenic Police (Ελληνική Αστυνομία) or the Greek Ministry of Infrastructure and Transport. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office). IDP Companion must be used alongside your original UK driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'GOV.UK — Driving in Greece; post-Brexit driving requirements (gov.uk/foreign-travel-advice/greece, last updated August 2025)',
			'FCDO Greece travel advice (updated January 2026)',
			'Greek Highway Code (Κώδικας Οδικής Κυκλοφορίας) — Hellenic Republic Ministry of Infrastructure',
			'RAC — Driving in Greece guide (rac.co.uk)',
			'Hertz Greece rental conditions (hertz.gr, updated 2025)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Greece',
	},
};

export const ukGreeceCopy: Record<'en', CountryPairCopy> = { en };
