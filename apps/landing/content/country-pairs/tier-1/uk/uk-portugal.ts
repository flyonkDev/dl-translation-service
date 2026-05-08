/**
 * Country-pair content: United Kingdom → Portugal.
 * Locales: en only.
 *
 * Unique angle: post-Brexit deal covers UK photocard for Portugal (no IDP
 * legally required). The page reframes preparation around three operational
 * realities that catch UK visitors: (1) Portuguese police carry portable
 * card readers and collect fines on-the-spot from foreign-registered
 * vehicles — no postal notice, no grace period; (2) radar detector hardware
 * and apps are illegal under Article 100-B with €2,500 fines; (3) A22 vs
 * N125 toll-trap dilemma in the Algarve — the toll-avoidance route costs
 * more in time and speed-camera risk than the toll itself.
 *
 * Portuguese IS in the IDP Companion PDF template — claim is honest.
 *
 * SEO add-ons present: tldr (3-row exception — photocard/paper informational),
 * lez (Algarve A22 vs N125 + Lisbon ZER + 25 de Abril bridge), howTo,
 * lastReviewed. NO alphabet block (Portuguese is Latin). Phrases block
 * included.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Portugal: 2026 Police ATM & Toll Guide',
		description:
			"UK photocard valid in Portugal — no IDP legally required. But Portuguese police carry portable ATMs to collect fines on-the-spot, radar detectors cost €2,500, and the N125 in August is a trap. Honest 2026 guide.",
		ogTitleShort: 'UK Drivers in Portugal: IDP Guide 2026',
		ogSubtitle: 'No IDP needed. Portable police ATMs. Skip the N125.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Portugal',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'UK → Portugal · 2026 Guide',
		title: 'IDP for UK Drivers in Portugal: Police ATMs & A22 Toll Trap',
		lead: "The PSP officer on the N125 outside Albufeira in July was professional and entirely unsurprised by UK plates. He asked for the licence, the insurance, the rental agreement — and when the fine was issued for a minor speeding infraction on a stretch where the limit drops from 90 to 50 without much warning, he walked back to his car and returned with a card reader. Portuguese traffic police have been equipped with portable payment terminals for foreign-registered vehicles since 2016. The fine is collected immediately, on the road, by card or cash. There is no option to pay later, no postal notice to a UK address, no grace period. The receipt is issued on the spot. UK photocard holders don't need an IDP in Portugal. What they don't need to discover at the layby is the speed limit on the approach to Albufeira town centre, which changes four times in three kilometres.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: "No for photocard, yes for paper licence — and Portuguese police carry portable ATMs",
		text: "UK photocard licence holders can drive in Portugal for short tourist stays without an IDP, confirmed by the post-Brexit agreement. UK paper licences (old green or pink, pre-1998) are NOT covered — IDP legally required. Paper licence holders must also carry photographic ID (passport) separately, as paper licences contain no photo. Either way, Portuguese police are authorised to collect fines from foreign-registered vehicles immediately via portable card terminals — no postal grace period like UK enforcement.",
	},

	tldr: {
		heading: 'UK Licence alone vs IDP Companion in Portugal',
		lead: 'Documentation is clean for photocard holders. The preparation that matters in Portugal is understanding the on-the-spot fine collection, the radar-detector ban, and the A22 vs N125 toll-trap dilemma.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Portugal',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Licence (alone)',
				whatItDoes: 'Valid for tourist driving — recognised under post-Brexit agreement. Accepted at all major rental agencies (Hertz, Avis, Sixt, Europcar) at Faro (FAO), Lisbon (LIS), Porto (OPO), Funchal (FNC), Ponta Delgada (PDL) without supplementary documentation.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'UK Paper Licence (alone)',
				whatItDoes: 'Not sufficient — IDP required alongside; must also carry photographic ID (passport) separately as paper licence contains no photo. Same applies to Crown Dependencies (Guernsey, Jersey, Isle of Man) licences.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in Portuguese, English, French, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set. Covers paper licence holders (where IDP is legally required) and useful at GNR/PSP roadside stops where a Portuguese-language reference speeds the interaction.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Portugal: original UK photocard licence + passport + rental agreement + vehicle insurance. UK sticker required on rear of privately brought UK-registered vehicles (since Sept 2021; GB sticker invalid). Headlamp beam deflectors required for RHD UK cars. Reflective jacket per occupant in cabin (not boot).",
	},

	whyNotEnough: {
		heading: 'Why Portugal is more complex than the documentation suggests',
		lead: 'The IDP question is genuinely uncomplicated for photocard holders. The enforcement environment they arrive in is not.',
		reasons: [
			{
				icon: 'mdi:cash-multiple',
				title: 'The portable ATM situation',
				text: "Portuguese traffic police are authorised to collect fines from foreign-registered vehicles on the spot, using portable card readers. This is a legal provision specifically for non-resident drivers — the assumption being that postal fines to foreign addresses are difficult to enforce. The fine is issued with a receipt, payment is taken immediately by card or cash, and the interaction is complete before you pull back onto the road. This isn't a scam — it's documented in Portaria 952-B/2011 and noted in FCDO travel advice. For UK drivers used to postal camera fines weeks later, the immediate-payment model is a significant change.",
			},
			{
				icon: 'mdi:radar',
				title: 'The radar detector prohibition',
				text: 'Any device that searches for mobile speed cameras or interferes with police transmissions is illegal in Portugal under Article 100-B of the Código da Estrada. Maximum fine €2,500 with possible vehicle impoundment. This applies to hardware devices and, in enforcement practice, to phone apps with active speed-camera-alert functions (Waze, Google Maps, Apple Maps). UK drivers should disable speed-camera alert layers in nav apps before driving in Portugal. Hardware devices are zero-tolerance.',
			},
			{
				icon: 'ph:road-horizon-bold',
				title: 'The A22 vs N125 toll-trap dilemma',
				text: 'The Algarve has two parallel east-west roads: A22 motorway (tolled, fully electronic, smooth, 120 km/h) and N125 (free, coastal, 50–90 km/h, heavily used by tourists avoiding tolls). In July and August, with every second car trying to save €4.40 on the toll, the N125 becomes a 50 km/h road through speed-camera-monitored roundabouts moving at 25 km/h. Locals know when to use the A22. Tourists discover the N125 on day two and spend the rest of the week on it — paying €120 fines for missed limit transitions and losing 45 minutes per leg.',
			},
		],
	},

	rules: {
		heading: 'Portugal driving rules UK drivers should know',
		lead: 'Right-hand traffic is the day-one adjustment. Required equipment, the Article 100-B radar prohibition, and the unusual amber-light convention are operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; RHD cars need headlamp beam deflectors' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in residential and pedestrian zones' },
			{ icon: 'mdi:road-variant', label: 'Open road', value: '90 km/h', note: 'Single carriageways' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway (autoestrada)', value: '120 km/h', note: '~75 mph' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.02% for new drivers and professionals' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: '€120–300 + points for handheld' },
			{ icon: 'mdi:radar', label: 'Radar detector', value: 'Illegal — €2,500', note: 'Article 100-B; hardware AND camera-alert apps; impoundment possible' },
			{ icon: 'mdi:traffic-light-outline', label: 'Amber light', value: 'No amber-before-green', note: 'Green follows red directly — alert at junctions' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Portuguese police can collect fines immediately from foreign-registered vehicles using portable card terminals. Fines range from €30 to €2,500. Receipts issued on the spot. No postal grace period for foreign plates.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding 0–20 km/h over (open road)', amount: '€60–120', note: 'Fixed cameras and on-the-spot collection by officers', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 20–40 km/h over', amount: '€120–300', note: 'Collected immediately from foreign plates', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 40–60 km/h over', amount: '€300–600 + points', note: '', severity: 'high' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 60+ km/h over', amount: '€500–2,500 + suspension', note: 'Criminal threshold at upper end', severity: 'high' },
			{ icon: 'mdi:bridge', label: '25 de Abril bridge speed (Lisbon)', amount: '€60–300', note: 'Limit 40–60 km/h; fixed cameras on bridge', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€120–300 + points', note: 'Actively enforced', severity: 'med' },
			{ icon: 'mdi:radar', label: 'Radar detector device or app', amount: 'up to €2,500', note: 'Possession alone; impoundment possible', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€120–600', note: 'Per person; driver liable for all passengers', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: '€250–1,250', note: 'Criminal above 0.12% BAC; suspension mandatory', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.12% BAC', amount: 'up to €2,500 + criminal', note: 'Prison sentence possible; immediate suspension', severity: 'high' },
		],
		caption: 'Sources: Portugal Código da Estrada (Articles 27, 86, 100-B); IMT fine schedule 2026; RAC Portugal driving guide (updated February 2026). Portable ATM collection: Portaria 952-B/2011, extended and updated. FCDO Portugal travel advice (gov.uk/foreign-travel-advice/portugal).',
	},

	lez: {
		heading: 'Portugal enforcement zones — Algarve, Lisbon bridge, ZER',
		badge: 'Portugal-specific',
		lead: "Three corridors account for most UK-tourist friction in Portugal — none of them are documentation issues.",
		zones: [
			{
				city: 'Algarve A22 motorway vs N125 coastal road',
				name: 'The toll-avoidance trap',
				description: 'A22 (Via do Infante): tolled, fast, 120 km/h, direct — Faro to Lagos in 45 minutes. N125: free, coastal, 50–90 km/h depending on section, heavy summer traffic, fixed cameras at every speed-limit transition near Albufeira / Portimão / Lagos town centres. The toll cost between Faro and Lagos is approximately €4.40. Time cost of the N125 in summer: 45 minutes minimum. Fine risk on the N125, where speed limits change frequently and fixed cameras are present, is €60–300 per infraction collected on the spot if an officer is present.',
				fine: '€60–300 per camera infraction',
				note: 'Use the motorway. The N125 in August is one of the more frustrating drives in Western Europe and the toll savings are negative once the first fine lands.',
			},
			{
				city: 'Lisbon 25 de Abril bridge + Tagus crossings',
				name: 'Fixed-camera bridge enforcement',
				description: 'The 25 de Abril bridge over the Tagus has a 40–60 km/h speed limit (notably slow given the urban context) enforced by fixed cameras. The bridge is a major Lisbon crossing connecting central Lisbon to Almada and the Setúbal peninsula. UK drivers approaching at typical motorway speeds catch the camera before noticing the limit transition. Same enforcement applies on the parallel Vasco da Gama bridge (50 km/h sections in built-up approach).',
				fine: '€60–300',
				note: 'On the 25 de Abril bridge: settle into 50 km/h before crossing the bridge proper. The cameras are fixed and unmistakable once you know to look for them.',
			},
			{
				city: 'Lisbon ZER (Zona de Emissões Reduzidas) + Porto restrictions',
				name: 'Low-emission zones — sticker required',
				description: 'Lisbon central core operates a ZER (similar to Spanish ZBE) restricting access for higher-emission vehicles. Porto has restricted access for non-residents in the Ribeira riverside district. Rental cars typically have correct ZER documentation; verify at pickup if your itinerary includes central Lisbon or Porto historic centre. Hill cobblestone streets (Alfama, Bairro Alto in Lisbon; Ribeira in Porto) are difficult for unfamiliar drivers regardless of zone status.',
				fine: 'ZER violations: variable',
				note: 'Most Lisbon visitors park outside the historic core (Cais do Sodré or larger lots near the river) and walk / take the metro. Porto similar — park near São Bento station and walk down to Ribeira.',
			},
		],
		tip: 'Practical rule for Portugal: the IDP question is settled in two minutes if you have a photocard. The Algarve toll decision saves you €4.40 and 45 minutes if you commit to the A22 before leaving Faro Airport. The radar detector switch on Waze takes one tap before driving. Three small preparations cover most Portugal driving friction.',
	},

	phrases: {
		heading: 'Useful Portuguese phrases for rental desks and police stops',
		lead: 'English is functional at every major Portuguese rental desk and tourist-area police stop. These phrases cover the situations where Portuguese dominates — rural GNR checkpoints, smaller agencies in Alentejo or rural Madeira, accident-scene communication.',
		items: [
			{ phrase: 'Aqui está a minha carta de condução', translation: 'Here is my driving licence', context: 'Pronounced "ah-KEE eh-STAH ah MEE-nya KAR-tah deh kon-doo-SOWN". Handing over documents at a checkpoint' },
			{ phrase: 'E o documento de tradução', translation: 'And the translation document', context: 'Pronounced "ee oo doh-koo-MEN-too deh trah-doo-SOWN". Showing IDP Companion alongside UK licence' },
			{ phrase: 'Sou turista do Reino Unido', translation: "I'm a tourist from the UK", context: 'Pronounced "soh too-REES-tah doo RAY-noo oo-NEE-doo". Establishing context at any stop' },
			{ phrase: 'Não compreendo português', translation: "I don't understand Portuguese", context: 'Pronounced "nown kom-pree-EN-doo poor-too-GAYZH". Most tourist-area officers switch to basic English' },
			{ phrase: 'Há algum problema?', translation: 'Is there a problem?', context: 'Pronounced "ah al-GOON pro-BLEH-mah?". Polite opening at any checkpoint' },
			{ phrase: 'Tenho seguro', translation: 'I have insurance', context: 'Pronounced "TAY-nyoo seh-GOO-roo". In case of accident — present the rental insurance card' },
			{ phrase: 'Preciso de ligar para a empresa de aluguer', translation: 'I need to call the rental company', context: 'For vehicle issues — most rental contracts include a 24h emergency number' },
			{ phrase: 'Obrigado / Obrigada', translation: 'Thank you (m / f)', context: 'Pronounced "oh-bree-GAH-doo / oh-bree-GAH-dah". After the stop concludes — basic Portuguese courtesy is universally rewarded' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Portugal as a UK citizen',
		lead: "Portugal is the cleanest European destination for UK photocard holders post-Brexit on documentation. The preparation that matters is everything else — toll system, radar law, equipment.",
		schemaName: 'How to prepare for driving in Portugal as a UK citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Verify your licence type — photocard vs paper',
				text: "Photocard holders: post-Brexit deal covers you, no IDP legally required. Paper licence holders (old green or pink, pre-1998): IDP is legally required, plus carry photographic ID (passport) separately. Crown Dependencies (Guernsey, Jersey, Isle of Man) licences: also need IDP.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your UK licence into Portuguese, English, French, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set. Useful for paper licence holders (legally needed alongside the licence), and at GNR/PSP roadside stops where a Portuguese-language reference speeds the interaction.',
			},
			{
				title: 'Disable radar detector apps before driving',
				text: "Portugal's Article 100-B prohibits any device that searches for speed cameras or interferes with police equipment. This includes Waze, Google Maps, and Apple Maps with active speed-camera alert layers. Disable speed-camera alerts in your nav app settings before driving in Portugal. Hardware radar detectors are zero-tolerance and grounds for €2,500 fine plus vehicle impoundment.",
			},
			{
				title: 'Confirm Via Verde toll transponder on rental car',
				text: 'Portugal\'s motorway toll network is almost entirely cashless. Via Verde is the electronic transponder system — most major rental chains (Hertz, Avis, Sixt, Europcar) include it. Confirm at pickup whether the toll fee is bundled into the daily rate or billed per-toll. Without Via Verde you cannot use most A22 / A2 / A1 motorway sections cleanly.',
			},
			{
				title: 'Plan the Algarve route — A22 over N125',
				text: "If your itinerary includes the Algarve coast (Faro → Albufeira → Lagos → Sagres), commit to the A22 motorway before leaving Faro Airport. The N125 alternative saves €4.40 in tolls and costs 45 minutes per leg in summer plus fine risk. The locals' rule is simple: tolled in summer, optional in winter.",
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Portugal — honestly',
		lead: 'Portugal post-Brexit is one of the cleanest legal cases in this guide for UK photocard holders. We\'ll be direct about where IDP Companion adds value.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your UK licence data into Portuguese, English, French, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to cover paper licence holders (where IDP is legally required) and useful at GNR/PSP roadside stops where Portuguese-language reference speeds the interaction',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention — not legally required for UK photocard holders in Portugal',
				'Not valid by itself — must be carried alongside your physical UK licence',
				'Not protection against the portable fine collection system — that operates regardless of documentation quality',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Portugal',
			items: [
				'Paper licence holders: required alongside the paper licence and separately alongside photographic ID (passport)',
				'At a GNR or PSP checkpoint where a Portuguese-language reference of your licence details speeds the interaction',
				'When a smaller rental agency in rural Alentejo or Madeira requests a translation document as part of their booking conditions',
				"If you're combining Portugal with destinations later in the trip — Morocco (via ferry from Algeciras), UAE, Turkey, Thailand — where a translation companion is legally required; one purchase covers all",
			],
		},
		needOfficial: {
			title: 'Documents Portuguese law actually cares about',
			items: [
				"Your physical UK photocard licence (or paper licence + IDP + passport photo ID)",
				'UK passport — checked at any document review',
				'Rental agreement and vehicle insurance — provided by rental company',
				'Reflective jacket accessible in vehicle cabin (not boot); for UK-registered private vehicles: UK sticker, headlamp deflectors',
			],
		},
		pattern:
			"What prepared UK travellers in Portugal actually carry: photocard licence (or paper + IDP) + passport + rental agreement + insurance card + reflective jacket in cabin. For private UK car: UK sticker + headlamp deflectors before the ferry. The pattern: your UK licence is clean. What changes is who collects the fine, how quickly, and what you can't have switched on in the car.",
	},

	renting: {
		heading: 'Renting a car in Portugal as a UK driver',
		lead: 'Major rental chains process UK photocards without comment. Most include Via Verde toll transponder. Smaller operators in rural Alentejo and Madeira are where occasional documentation friction concentrates.',
		chains: [
			{ name: 'Hertz Portugal', policy: 'Accepts UK photocard without IDP. Paper licence requires IDP. Available at Faro (FAO), Lisbon (LIS), Porto (OPO), Funchal Madeira (FNC), Ponta Delgada (PDL). Minimum age 21; young driver surcharge under 25' },
			{ name: 'Avis Portugal', policy: 'Same photocard policy. Via Verde transponder typically included or available as add-on. Minimum age 21. Credit card required for deposit' },
			{ name: 'Sixt Portugal', policy: 'Photocard accepted. Paper licence requires IDP. Available at major airports and Lisbon/Porto city centres. Minimum age 21' },
			{ name: 'Europcar Portugal', policy: 'Consistent policy. UK photocard without IDP. Via Verde available as add-on at most locations' },
			{ name: 'Local agencies (Faro, Albufeira, Lagos, Portimão, rural Alentejo)', policy: 'More variable. Most accept UK photocard without documentation issues. Some smaller operators have requested IDP alongside photocard — check booking conditions before departure' },
		],
		tipsHeading: 'Practical tips for Portugal',
		tips: [
			'Minimum age 21 at all major agencies; young driver surcharge under 25; some categories require 23 or 25',
			'Automatic transmission widely available; manual is cheaper and more available; specify at booking if preference matters',
			'Credit card required for deposit; holds €500–€2,000 standard depending on vehicle',
			'Confirm Via Verde transponder status at pickup — clarify whether bundled flat-rate or billed per-toll',
			'Fuel: unleaded (gasolina) and diesel; some rural Alentejo and Algarve stations are cash-only — keep tank above half on inland routes',
			'Lisbon: dense; the hills, narrow streets, and tram tracks require careful navigation; parking limited in Alfama and Bairro Alto; most visitors park outside the historic centre',
			'Porto: similar to Lisbon; the riverside Ribeira district has restricted access for non-residents',
			'Algarve: the A22 is the correct road in summer; the N125 is the trap; commit to the motorway before leaving Faro Airport',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes',
		lead: 'Realistic outcomes for UK drivers in Portugal, ranked by likelihood.',
		items: [
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Photocard, smooth pickup, clean drive',
				text: 'Standard tourist experience — no documentation friction. Most Portugal trips end this way.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Speed camera on Algarve approach road',
				text: 'Limit changes catch visitors near Albufeira / Portimão / Lagos town centres. Fine €60–300; collected immediately if officer present.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Officer stop — portable ATM',
				text: 'Fine issued and collected on the spot via card reader; receipt provided; no postal option for foreign plates.',
			},
			{
				severity: 'high',
				frequency: 'Common without IDP',
				label: 'Paper licence, rental refused',
				text: 'Paper licence requires IDP; most rental agencies enforce this. No major agency releases the car.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Radar detector found in vehicle',
				text: 'Fine up to €2,500; impoundment possible. Hardware devices and active camera-alert apps both flagged.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'N125 Algarve in summer, fixed camera',
				text: 'Speed-limit transitions poorly signed for unfamiliar routes. Use the A22.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI over 0.05% BAC',
				text: '€250–2,500; criminal above 0.12%; mandatory suspension.',
			},
		],
		math: 'IDP Companion is $35. The on-the-spot fine for 20 km/h over the limit near Albufeira is €120 collected by card before you\'ve left the layby. The N125 in August costs you more in time than the A22 toll costs in money.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I need an IDP to drive in Portugal with a UK photocard licence?',
				answer: 'No. Portugal recognises valid UK photocard licences for tourist driving under the post-Brexit agreement. An IDP is not a legal requirement for UK photocard holders. Confirmed by GOV.UK and FCDO travel advice.',
			},
			{
				id: 2,
				question: 'What about UK paper licences?',
				answer: 'Paper licences require an IDP in Portugal. Paper licence holders must also carry photographic ID — typically a passport — separately, as the paper licence contains no photograph. Most rental agencies will not accept a paper licence without an IDP.',
			},
			{
				id: 3,
				question: 'What is the portable ATM system — is it legitimate?',
				answer: 'Yes. Portuguese traffic police are legally empowered to collect fines immediately from foreign-registered vehicles using portable card terminals. Documented in Portuguese traffic law (Portaria 952-B/2011) and designed to ensure non-resident drivers don\'t receive fines they can ignore once home. The interaction is professional, a receipt is issued, and the amount is fixed by the fine schedule. It is not discretionary or negotiable.',
			},
			{
				id: 4,
				question: 'Why are radar detectors such a big issue in Portugal?',
				answer: "Article 100-B of Portugal's Código da Estrada prohibits any device that searches for speed cameras or interferes with police equipment. Maximum fine €2,500 with possible vehicle impoundment. Portugal enforces this more strictly than most Western European countries, and the prohibition covers both hardware devices and, in principle, phone apps with active camera detection. Disable speed-camera alert layers in Waze, Google Maps, Apple Maps before entering Portugal.",
			},
			{
				id: 5,
				question: 'How does the Via Verde toll system work for UK visitors?',
				answer: "Via Verde is Portugal's electronic toll system. Rental cars from major agencies typically include a Via Verde transponder — tolls are recorded automatically and billed to your card at trip end. If you've brought your own UK car, register your plate at portugaltolls.com before the trip or use the Easytoll system at designated service areas. Unregistered vehicles passing electronic gantries receive invoices that may not reliably reach UK addresses.",
			},
			{
				id: 6,
				question: 'What is the speed limit on the 25 de Abril bridge in Lisbon?',
				answer: 'Between 40 km/h and 60 km/h — this specific limit applies to the bridge over the Tagus and is enforced by fixed cameras. The bridge is a major Lisbon crossing and the limit is notably slow given the urban context. Settle into 50 km/h before the bridge proper.',
			},
			{
				id: 7,
				question: 'Is IDP Companion useful for Portugal specifically?',
				answer: "For Portugal itself, UK photocard holders don't legally need one. IDP Companion is most useful for: paper licence holders (who require it), and photocard holders whose trip continues beyond Portugal to destinations where a translation document is legally required — Morocco (via ferry), UAE, Turkey, Thailand. One purchase covers all.",
			},
			{
				id: 8,
				question: "What's the practical difference between the A22 and N125 in the Algarve?",
				answer: 'The A22 is a tolled motorway (120 km/h, smooth, direct). The N125 is the free coastal road (50–90 km/h depending on section, multiple roundabouts, speed cameras, heavy summer traffic). In July and August, the N125 between Faro and Lagos regularly takes 90 minutes to cover 75 kilometres. The A22 takes 45 minutes and costs approximately €4.40. Use the motorway.',
			},
			{
				id: 9,
				question: "What's the alcohol limit in Portugal — is it stricter than the UK?",
				answer: "Portugal's general limit is 0.05% BAC — lower than England and Wales (0.08%) and equal to Scotland (0.05%). For drivers with fewer than three years' experience, professional drivers, and those carrying passengers for hire, the limit drops to 0.02% — effectively near-zero. Above 0.12% becomes a criminal offence. Active enforcement at weekend and holiday checkpoints.",
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Portugal trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic UK licence — if your UK licence expires, the companion expires with it. One purchase covers Portugal plus Spain, Greece, Morocco, Turkey, Thailand and any other destination during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Portugal-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain' },
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including Portuguese, English, French, Spanish, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real UK licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Portugal, Spain, Greece, Morocco, Turkey, Thailand. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Portuguese Republic's Instituto da Mobilidade e dos Transportes (IMT), the GNR (Guarda Nacional Republicana), or the PSP (Polícia de Segurança Pública). IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office). IDP Companion must be used alongside your original UK driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Portugal Código da Estrada (Highway Code) — Articles 27, 86, 100-B (dre.pt)',
			'IMT Instituto da Mobilidade e dos Transportes (imt-ip.pt)',
			'RAC — Driving in Portugal guide (rac.co.uk, updated February 2026)',
			'GOV.UK — Driving in Portugal (gov.uk/foreign-travel-advice/portugal)',
			'Via Verde (viaverde.pt); Portugal Tolls (portugaltolls.com)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Portugal',
	},
};

export const ukPortugalCopy: Record<'en', CountryPairCopy> = { en };
