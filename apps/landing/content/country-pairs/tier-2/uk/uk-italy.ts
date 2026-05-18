/**
 * Country-pair content: United Kingdom → Italy.
 * Tier 2, but built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: UK photocard accepted under §135 Codice della Strada — IDP
 * not legally required for short tourist visits. Post-Brexit gov.uk
 * advises a 1968 Vienna IDP only for stays >6 months. The killer angle is
 * Italy's automatic ZTL camera network: Florence, Rome, Milan, Bologna, Pisa
 * issue fines that land at the UK address 6–12 months after the trip via
 * the rental company plus their admin fee. Same trip can stack multiple ZTL
 * tickets in a single afternoon.
 *
 * SEO add-ons present: tldr (2-row middle-pivot-clean), lez (Florence ZTL +
 * Rome centro storico + Milan Area B/C), phrases (Italian 8 items), howTo,
 * lastReviewed.
 * NO alphabet block (Italian is Latin). NO rejects block (Italy doesn't
 * reject specific UK licence formats).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Italy: 2026 Post-Brexit ZTL Guide',
		description:
			"UK photocard accepted in Italy under §135 Codice della Strada — no IDP legally required for tourists. But Florence ZTL cameras fine €80–330 per entry, arriving at your UK address months later. Honest 2026 guide.",
		ogTitleShort: 'UK Drivers in Italy: ZTL & IDP 2026',
		ogSubtitle: 'Photocard works. ZTL cameras still do too.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Italy',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Italy · 2026 Guide',
		title: 'IDP for UK Drivers in Italy: 2026 Post-Brexit ZTL Guide',
		lead: "You've landed at Florence Peretola for a ten-day Tuscany loop — Siena, the Val d'Orcia, back via Lucca in early October. Your UK photocard licence is in English, post-Brexit driving rules let you use it for tourist stays under six months, and §135 of the Codice della Strada accepts it without translation. What the rental confirmation didn't mention: Florence operates one of Italy's most aggressively enforced Zona a Traffico Limitato networks, where automatic number-plate cameras ticket €80–330 per entry plus the rental company's €40–50 admin fee — and the notice arrives at your Manchester or London address six to twelve months after the trip. Multiple ZTL entries in a single afternoon in Rome's centro storico stack as separate tickets. None of that has to do with an IDP. The rental contract's documentation clause can still ask for one.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — UK photocard is accepted under §135 Codice della Strada for tourist visits',
		text: "Italy's Codice della Strada §135 accepts foreign driving licences for short tourist visits without requiring translation or an International Driving Permit. The UK photocard licence is in English and satisfies this rule. Post-Brexit, gov.uk recommends a 1968 Vienna IDP only for stays exceeding six months, when Italian residency rules begin to apply. Tourist visits almost never reach that threshold. Italy is party to both the 1949 Geneva and 1968 Vienna Conventions. A multilingual translation companion stays useful at peak-season rental desks and Polizia Stradale stops — not as a legal requirement.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Italy',
		lead: 'For a UK tourist driving in Italy, your original UK photocard is the legally required document. IDP Companion is a separate multilingual translation companion — useful where rental policy or police interaction favours a second document, not a legal substitute.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Italy',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Legally accepted under §135 Codice della Strada for tourist visits without translation. Issued in English, recognised by Italian authorities. Major chains (Hertz, Avis, Sixt, Europcar, Maggiore) accept it at airport branches in Rome FCO, Milan MXP, Florence FLR, Pisa PSA, Naples NAP, Venice VCE without supplementary documentation.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: "Multilingual digital PDF presenting your UK licence in Italian, English, French, German, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Smooths peak-season rental pickups at Florence and Pisa where agents sometimes default to asking for a translation, and reduces friction at Polizia Stradale stops on the autostrada. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Italy: original UK photocard licence + UK passport + rental contract + insurance documentation (provided by the rental company). UK sticker mandatory on UK-registered private vehicles since Sept 2021 (the old GB sticker is invalid). Right-hand-drive vehicles need headlamp beam deflectors for European travel. ZTL fines and autostrada tolls are separate operational questions covered below.",
	},

	whyNotEnough: {
		heading: 'Why your UK licence creates rental-desk and camera friction in Italy',
		lead: 'Legally your photocard is enough. Practically, three Italy-specific realities catch UK tourists off guard.',
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Sixt, Europcar and Maggiore set their own internal verification policies at Italian branches. Florence Peretola, Rome Fiumicino, Milan Malpensa and Naples Capodichino process the highest concentrations of UK tourist rentals — and desk agents during peak season (April–October) sometimes default to asking for an IDP, even though §135 doesn't require one. Post-Brexit recognition of UK licences is well-established, but rental policies don't always reflect the legal nuance, particularly at smaller premium-class desks.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The ZTL camera reason',
				text: "Italy operates the most aggressive ZTL (Zona a Traffico Limitato) camera network in Europe. Historical-centre limited-traffic zones in Florence, Rome, Bologna, Milan, Naples, Pisa and dozens of smaller towns automatically photograph every non-authorised vehicle entering the zone. The fine — €80–330 per entry — arrives at your UK address via the rental company six to twelve months after the trip, plus their typical €40–50 admin fee. Multiple entries in a single afternoon stack as separate tickets. UK tourists report cumulative ZTL fines exceeding €1,500 from one Rome day.",
			},
			{
				icon: 'ph:scales-bold',
				title: 'The format-recognition reason',
				text: "Your UK photocard is in English and the format is UK-specific. An Italian agent at a counter in Florence may default to the document that's quickest to parse alongside a Codice della Strada framework. IDP Companion presents your licence data in a standardised multilingual layout including Italian, which removes any \"what does this UK abbreviation mean\" question at peak-season desks where the line is long and the agent is tired.",
			},
		],
	},

	rules: {
		heading: 'Italy driving rules UK drivers should know',
		lead: 'Right-hand traffic is the day-one adjustment for UK drivers. ZTL avoidance and Tutor average-speed cameras are the operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; first roundabout is the moment it clicks' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in residential zones and around schools' },
			{ icon: 'mdi:road-variant', label: 'Rural road', value: '90 km/h', note: 'Single-carriageway roads' },
			{ icon: 'mdi:speedometer-medium', label: 'Dual carriageway', value: '110 km/h', note: 'Reduces to 90 in rain' },
			{ icon: 'mdi:speedometer-slow', label: 'Autostrada', value: '130 km/h', note: '110 km/h in rain; some sections 150 km/h where signed' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.00% for novice drivers (<3 yrs) and professional drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: '€165–660 + 5 points for residents; foreign drivers fined, points don\'t transfer' },
			{ icon: 'mdi:car-light-high', label: 'Daytime lights', value: 'Mandatory on motorways', note: 'Required outside urban areas; modern rentals are automatic' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Italy',
		lead: 'Italian fines are set in the Codice della Strada and indexed periodically. Camera-enforced tickets are forwarded by the rental company to your UK card on file weeks or months after the trip.',
		colViolation: 'Violation',
		colAmount: 'Fine (EUR)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:cctv', label: 'ZTL violation (per entry)', amount: '€80–330', note: 'Camera-enforced. Most common tourist fine in Italy. Arrives 6–12 months later via rental admin', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding <10 km/h over', amount: '€42–173', note: 'Camera-enforced (autovelox and Tutor average-speed)', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 10–40 km/h over', amount: '€173–694', note: 'Tutor sections enforce average speed across long stretches', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 40+ km/h over', amount: '€545–2,170', note: 'Plus possible licence suspension equivalent', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€167–665', note: 'Camera-enforced at major intersections', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€165–660', note: '5 licence points for Italian drivers; foreign drivers pay the fine', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€83–333', note: 'Per occupant', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.08% BAC', amount: '€544–2,170', note: '3–6 month suspension equivalent', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI 0.08%+ BAC', amount: '€800–6,000+', note: 'Criminal proceedings; imprisonment possible above 0.15%', severity: 'high' },
		],
		caption: 'Sources: Codice della Strada (Articles 7, 142, 173, 186); Ministero delle Infrastrutture e dei Trasporti; ACI (Automobile Club d\'Italia) 2026 penalty guides; gov.uk/foreign-travel-advice/italy.',
	},

	lez: {
		heading: 'Italy ZTL and LEZ — the camera traps that cost UK tourists the most',
		badge: 'Italy-specific',
		lead: "These are the single biggest source of unexpected fines for UK tourists in Italy. GPS routinely routes you straight through both — multiple violations in one day stack, and the notice arrives at your UK address six to twelve months after you fly home, processed through the rental company.",
		zones: [
			{
				city: 'Florence (Firenze)',
				name: 'ZTL Centro Storico — UNESCO World Heritage core',
				description: "Florence's ZTL covers most of the historic centre — including Piazza del Duomo, the Uffizi quarter, via Calzaiuoli and the Ponte Vecchio approaches. Active 7:30am–7:30pm Monday–Friday and 7:30am–4pm Saturdays in the inner ring; weekend evening sectors active in summer. Cameras at every entrance read every plate. The city issues hundreds of thousands of ZTL fines annually, the majority to non-resident vehicles. If your hotel is inside the ZTL, register the rental plate with the hotel reception on arrival — they file a temporary authorisation with the Comune.",
				fine: '€80–100+ per entry (+ rental admin)',
				note: 'The most-reported Italian fine in UK traveller forums. Park outside the ZTL (Parcheggio Sansovino, Lavagnini, Beccaria) and walk in — Florence centre is 1.5 km across.',
			},
			{
				city: 'Rome (Roma)',
				name: 'ZTL Centro Storico — Tridente, Trastevere, Centro',
				description: "Rome operates several overlapping ZTLs covering Tridente, Centro, Trastevere, San Lorenzo, Testaccio and the area around Termini. Active hours vary by zone — Centro Storico is 6:30am–6pm weekdays, 2pm–6pm Saturdays; Trastevere has an evening enforcement window 9:30pm–3am Friday/Saturday. UK tourists routinely stack multiple ZTL entries in a single Rome afternoon. Reported cumulative tickets exceed €1,500 from a single bad day.",
				fine: '€80–330 per entry',
				note: 'Disable "shortest route" in your GPS and use "avoid restricted zones" if available. Otherwise park at Villa Borghese garage or Stazione Termini and use the Metro/bus.',
			},
			{
				city: 'Milan (Milano)',
				name: 'Area C (congestion charge) + Area B (low-emission zone)',
				description: 'Milan operates two separate zones. Area C is a €5/day congestion charge for the historic centre (Cerchia dei Bastioni), active 7:30am–7:30pm Mon–Fri (Thu until 6pm). Area B is a much larger low-emission zone covering 72% of Milan, banning older diesel and petrol vehicles 7:30am–7:30pm Mon–Fri. Most modern rental cars qualify for Area B — confirm Euro class at pickup. Area C is payable in advance via app, SMS or kiosks; unpaid Area C entries trigger an automatic fine.',
				fine: '€80–163 Area C unpaid · €163–658 Area B violation',
				note: 'If your itinerary includes Milan, ask the rental agent: "La macchina è abilitata per Area B? Devo pagare Area C per il centro?"',
			},
		],
		tip: 'Practical rule for Italy: in any historic city, park outside the centre and walk in. Multiple ZTL entries in one day = multiple separate tickets, each €80–330. The notice arrives at your UK address six to twelve months later via the rental company plus their admin fee. Florence ZTL alone is the most-reported Italian fine in UK traveller forums.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Italy — honestly',
		lead: "Italy post-Brexit is clean for UK photocard holders: the law accepts your licence. Where IDP Companion adds value is the rental desk during peak season and the autostrada checkpoint where multilingual paperwork speeds the interaction.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into Italian, English, French, German, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'Designed to reduce friction at rental desks during peak April–October season and at Polizia Stradale checkpoints',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention',
				'Not legally required for UK photocard holders in Italy on tourist visits under §135 Codice della Strada',
				'Not valid by itself — must be carried alongside your physical UK photocard licence',
				'Not a ZTL exemption, a Telepass autostrada transponder, or a Milan Area C / Area B authorisation',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Italy',
			items: [
				'At Florence, Rome, Pisa, Milan and Naples rental counters during peak April–October season when desk agents default to asking for a translation',
				'At Polizia Stradale stops on autostrada or in tourist corridors where multilingual paperwork speeds the routine document check',
				'At Carabinieri or Polizia Locale checkpoints in smaller towns where the agent may not have read a UK photocard format before',
				'As a re-printable backup from any hotel if your physical licence is lost mid-trip on a multi-city Italian itinerary',
				"For travellers stacking multiple European trips over 1–5 years — one $55 purchase covers Italy plus Spain, Greece, Portugal, Morocco and others on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Italian law actually cares about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive (photocard preferred; if you still hold the old paper counterpart, carry both)',
				'UK passport — physical, with valid entry stamp',
				'Rental agreement and proof of Italian insurance — provided by the rental company',
				'For UK-registered private vehicles entering Italy: UK sticker on rear bumper (post-Sept 2021; GB sticker is invalid), headlamp beam deflectors for RHD, reflective jacket and warning triangle in the cabin',
			],
		},
		pattern:
			"What prepared UK travellers in Italy actually carry: physical photocard + passport + rental contract + insurance — all in one folder. For ZTL avoidance: study the city map before pickup, park outside the historic centre, register the rental plate with the hotel if booked inside the zone. IDP Companion is the rental-desk friction reducer at $35 — not a legal necessity, but a no-brainer for peak-season Florence or Rome pickups and for travellers who'll hit Morocco or Turkey on the same plan.",
	},

	renting: {
		heading: 'Renting a car in Italy as a UK driver',
		lead: "Italy's rental market is large and competitive. The two friction points for UK tourists are ZTL awareness before driving off the lot and counter-policy variation during peak season.",
		chains: [
			{ name: 'Hertz Italia', policy: 'Major presence at every Italian airport plus city locations. Accepts UK photocard for tourist rentals. Most consistent at Rome Fiumicino, Milan Malpensa and Florence Peretola.' },
			{ name: 'Avis Italia (incl. Budget)', policy: "Wide network including city centres and ferry ports. Accepts UK photocards; Budget operates under the same group with identical documentation policy." },
			{ name: 'Sixt Italia', policy: 'Premium fleet, strong at Rome, Milan and Florence airports. Documentation requirements tighter for premium-class vehicles — translation document occasionally requested at pickup.' },
			{ name: 'Europcar / Maggiore', policy: 'Generally accepts UK photocards at airport locations. Maggiore (Italian local, Avis group) often more flexible than the international chains; some city branches inside ZTLs offer guided drop-off routes.' },
		],
		tipsHeading: 'Practical tips for renting in Italy',
		tips: [
			'Manual transmission is the default — automatics are ~30% more expensive and limited in availability. Book early if you need automatic',
			"Study the ZTL map for every city on your route before pickup. Florence, Rome, Bologna, Milan, Pisa, Naples each have their own boundaries and active hours",
			'Most rentals carry a Telepass autostrada transponder — confirm at pickup. Otherwise pay at the booth with card; cash accepted at most',
			'Tutor average-speed cameras enforce on long autostrada stretches — overtaking briefly to pass is no defence; the camera measures average speed across kilometres',
			"Full-to-full fuel policy is standard — return empty and the agency charges its inflated rate (typically 2x pump). Sunday petrol stations close in many areas; autostrada Autogrill stations stay open",
			'Photograph the vehicle at pickup — every scratch, dent, mileage reading. Email yourself so timestamps are preserved before driving off',
			'For peak-season weekend pickups, arrive 30 minutes ahead of your reservation slot — Italian airport queues are long and the line moves slowly when documentation questions arise',
			'If your itinerary crosses into Switzerland or Austria, confirm in writing that the rental allows it — Swiss motorway vignette (CHF 40/year) and Austrian Autobahn vignette (~€10/10-day) are required at the border',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'Realistic outcomes ranked by frequency, based on UK traveller forum reports, gov.uk advisories and rental-industry policy disclosures.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'Photocard accepted, smooth pickup, clean drive',
				text: 'Standard tourist experience — §135 default, no documentation friction, drive the Tuscan or Amalfi route, return the car, fly home. Most Italy trips end this way.',
			},
			{
				severity: 'low',
				frequency: 'Common at peak season',
				label: 'Agent asks for IDP, you produce IDP Companion',
				text: 'Five extra minutes at the counter, no further issue. Common at Florence Peretola and Rome FCO during peak summer when desk agents default to asking for a translation document.',
			},
			{
				severity: 'high',
				frequency: 'Very common',
				label: 'ZTL camera ticket arrives 6–12 months later',
				text: 'A €80–330 ZTL fine plus the rental company\'s €40–50 admin fee lands at your UK address months after the trip. Most UK tourists don\'t realise they entered the zone — Google Maps doesn\'t consistently warn for ZTLs and signage is in Italian.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Autostrada Tutor average-speed fine',
				text: 'A6 or A1 motorway Tutor sections measure average speed over 20+ km stretches. Brief overtaking doesn\'t escape detection. Fine €173–694 plus rental admin, charged to your UK card weeks after.',
			},
			{
				severity: 'low',
				frequency: 'Uncommon',
				label: 'Polizia Stradale stop on autostrada or rural road',
				text: 'Standard document check; photocard accepted. IDP Companion smooths the interaction if the officer is unfamiliar with UK photocard layout. No further action in nearly all reported tourist cases.',
			},
		],
		math: 'IDP Companion is $35. The Florence ZTL pattern is universal in Italian tourist cities and a separate cost category — but UK tourists who study the city map before pickup and park outside the historic centre routinely avoid it entirely. The peak-season Florence Peretola desk friction is the single most-reported UK pain point, and a $35 multilingual PDF clears it in two minutes.',
	},

	phrases: {
		heading: 'Italian phrases for rental desks and police checkpoints',
		lead: 'Eight phrases that cover almost every interaction a UK driver has in Italy. The ZTL confirmation phrase is the most useful one if you\'re flying into Florence, Rome or Milan.',
		items: [
			{ phrase: 'Ecco la mia patente', translation: 'Here is my driving licence', context: 'Standard opening — hand photocard + passport together' },
			{ phrase: 'E questa è la traduzione multilingue', translation: 'And this is the multilingual translation', context: 'Follow-up if the desk agent asks for translation alongside the UK photocard' },
			{ phrase: 'La macchina è abilitata per la ZTL?', translation: 'Is the car authorised for the ZTL?', context: 'Critical phrase at pickup if your hotel or destination is inside a ZTL — agent will check the registration' },
			{ phrase: "C'è un Telepass nell'auto?", translation: 'Is there a Telepass transponder in the car?', context: 'Confirms the autostrada transponder before driving onto the motorway — saves queue time at toll booths' },
			{ phrase: 'Sono un turista britannico', translation: 'I am a British tourist', context: 'Establishes context at any document check; often softens the interaction' },
			{ phrase: 'Non parlo italiano, parla inglese?', translation: "I don't speak Italian, do you speak English?", context: "Most Italian officers and rental agents in tourist areas switch to basic English when asked" },
			{ phrase: "C'è un problema?", translation: 'Is there a problem?', context: 'At a Polizia Stradale stop, opens the conversation politely' },
			{ phrase: 'Devo chiamare la società di noleggio', translation: 'I need to call the rental company', context: 'Useful at any incident — every rental contract carries a 24/7 helpline number on the inside cover' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Italy (UK citizens)',
		lead: "The legal answer for UK photocard holders is short — no IDP needed. The preparation that matters is the ZTL map and the peak-season rental desk.",
		schemaName: 'How to prepare for driving in Italy as a UK citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your photocard is valid and physical',
				text: "The plastic photocard alone is sufficient — no paper counterpart needed since 2015. If you still hold an older paper licence (pre-1998 green or pink), the post-Brexit recognition arrangement does not cover it for some EU jurisdictions; carry an IDP. For mainland UK photocard holders the photocard is the legal document Italian authorities expect.",
			},
			{
				title: 'Generate IDP Companion as the peak-season rental-desk friction reducer',
				text: '$35 buys a multilingual digital PDF translating your UK photocard data into Italian, English, French, German, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online. Print at home or from any Italian hotel — Italian rental counters expect physical paper, not phone screens.',
			},
			{
				title: 'Study the ZTL map for every Italian city on your route',
				text: "Florence, Rome, Bologna, Milan, Pisa, Naples and Verona each have their own ZTL boundaries and active hours. The Comune website (comune.firenze.it, comune.roma.it, etc.) publishes the current map. If your hotel is inside the ZTL, ask the hotel to register your rental plate with the Comune on arrival — they have the local portal access.",
			},
			{
				title: 'Verify the rental has a Telepass transponder before driving off',
				text: 'Most rentals carry one; some smaller chains and one-way cross-border rentals don\'t. Ask: "C\'è un Telepass nell\'auto?" Telepass speeds autostrada toll booths from a 10-minute queue to a 5-second flow-through. Without it, pay at the booth with card or cash — both accepted at most plazas.',
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical UK photocard + UK passport + rental contract + insurance card + IDP Companion — all in one folder. The combination clears every Italian rental counter, motorway toll plaza, and routine Polizia Stradale checkpoint efficiently. Italian rental staff and police are trained to read paper documents, not phone screens.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Italy with a UK photocard licence?',
				answer: 'No. The Italian Codice della Strada §135 accepts UK photocard licences for tourist visits without translation or an International Driving Permit. UK gov.uk advises a 1968 Vienna IDP only for stays exceeding six months, when Italian residency rules begin to apply — almost never relevant to tourist visits.',
			},
			{
				id: 2,
				question: 'What about an older UK paper licence?',
				answer: 'Paper licences (pre-1998 green or pink) are not always treated identically to photocards by Italian rental companies and aren\'t guaranteed acceptance at every desk. If you still hold a paper licence, update it to the photocard format before flying or carry an IDP alongside. For modern photocard holders, no additional document is needed under §135.',
			},
			{
				id: 3,
				question: 'My licence was issued in Guernsey/Jersey/Isle of Man — does that change things?',
				answer: 'Yes. Crown Dependency and Gibraltar licences are not mainland UK licences and aren\'t covered by the same recognition arrangements at every Italian rental branch. Carry an IDP or translation document and avoid the desk conversation. The post-Brexit framework is mainland-UK specific.',
			},
			{
				id: 4,
				question: 'Can a rental company refuse me without an IDP even though §135 doesn\'t require it?',
				answer: "Yes — at peak season some Italian branches default to asking for an IDP at pickup. The Codice della Strada is the law; the rental contract is a private agreement. Hertz, Avis, Sixt and Europcar Italian branches have all been reported asking for IDPs at Florence, Rome, Pisa and Milan airports during summer. Branch policy varies even within the same chain.",
			},
			{
				id: 5,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government IDP is a formal document issued under the 1949 Geneva or 1968 Vienna Convention by an authorised UK issuer. IDP Companion is a private multilingual translation companion document presenting your photocard details in twelve widely-read languages — used alongside your physical UK licence, not as a substitute for a government IDP where one is legally required.',
			},
			{
				id: 6,
				question: 'What is a ZTL and how do I avoid the fine?',
				answer: 'A Zona a Traffico Limitato is a restricted-traffic zone in an Italian historical centre. Automatic number-plate cameras photograph every non-authorised vehicle entering the zone during active hours. The fine — €80–330 per entry plus the rental company\'s €40–50 admin fee — arrives at your UK address six to twelve months later. Florence, Rome, Bologna, Milan and Pisa have the most-fined ZTLs for UK tourists. Avoidance: study the city map before pickup, park outside the zone, register your rental plate with the hotel if booked inside.',
			},
			{
				id: 7,
				question: 'What about autostrada tolls?',
				answer: 'Most autostrada sections are tolled. Rental cars typically carry a Telepass transponder; otherwise pay at the booth with card or cash. The toll system bills the rental company, which forwards charges to your UK card plus a processing fee.',
			},
			{
				id: 8,
				question: 'Will my UK motor insurance cover me in Italy?',
				answer: 'Most UK motor insurance provides minimum third-party cover in EU countries by default — but verify with your insurer for your specific policy version and travel dates. Rental insurance (Kasko / collision damage waiver) sold at the counter is the standard fallback, and many UK credit cards offer secondary rental coverage in Europe.',
			},
			{
				id: 9,
				question: 'Can speed camera fines from Italy follow me back to the UK?',
				answer: 'Yes. An EU cross-border enforcement directive (CBE) allows Italian authorities to pursue traffic fines across EU and certain third countries. Although the UK has left the EU, rental companies are legally required to provide driver information to Italian authorities when requested. Fines issued to the rental company are charged to your UK card on file regardless of where you are.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Italy trips?',
				answer: 'Choose 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your physical UK photocard — if your photocard expires, IDP Companion expires with it. One purchase covers Italy plus Spain, Greece, Portugal, Morocco, Turkey, Thailand and any other destination on the same plan during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Italy-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain' },
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal' },
			{ flagFrom: 'gb', flagTo: 'fr', label: 'UK → France', status: 'Live', href: '/idp-for-uk-drivers-in-france' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'gb', flagTo: 'hr', label: 'UK → Croatia', status: 'Live', href: '/idp-for-uk-drivers-in-croatia' },
		],
	},

	finalCta: {
		heading: 'Renting in Florence, Rome, Milan or doing a Tuscany road trip?',
		text: "Multilingual PDF including Italian, English, French, German, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK licence in two minutes. Print at home or from any Italian hotel. Valid 1–5 years and covers Italy plus Spain, Greece, Portugal, Morocco, Turkey, Thailand on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with Italy's Polizia Stradale, the Ministero delle Infrastrutture e dei Trasporti, the Automobile Club d'Italia (ACI), or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion must be used alongside your original UK photocard driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Italian Codice della Strada §135 — Recognition of foreign driving licences (mit.gov.it)',
			'UK Foreign, Commonwealth & Development Office — Driving in Italy (gov.uk/foreign-travel-advice/italy)',
			'Automobile Club d\'Italia (ACI) — Visitor driving guide (aci.it)',
			'Comune di Firenze — ZTL Centro Storico boundaries and hours (comune.firenze.it)',
			'Comune di Roma — ZTL Centro Storico, Trastevere, Tridente schedules (comune.roma.it)',
			'Comune di Milano — Area B (LEZ) and Area C (congestion charge) regulations (comune.milano.it)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Italy',
	},
};

export const ukItalyCopy: Record<'en', CountryPairCopy> = { en };
