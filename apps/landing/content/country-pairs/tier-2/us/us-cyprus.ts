/**
 * Country-pair content: United States → Cyprus.
 * Tier 2. Locales: en only (US-origin default).
 *
 * Killer angles for Cyprus (what differentiates from sibling pages):
 *  - LEFT-HAND TRAFFIC — complete directional reversal for US drivers.
 *    Steering wheel right, left lane normal, overtaking to the right.
 *    The single biggest preparation item.
 *  - Alcohol limit expressed in BREATH units (22 µg/100ml ≈ 0.05% BAC),
 *    stricter than US 0.08%. Number unit is the trap.
 *  - Northern Cyprus VOIDS rental insurance. Crossing the Green Line
 *    under a standard Republic of Cyprus contract = full personal
 *    liability for anything that happens north of the line.
 *  - Red rental plates make every tourist instantly identifiable.
 *
 * PDF language note: Greek is NOT on the IDP Companion template. Cyprus
 * tourist infrastructure is heavily English (British colonial heritage,
 * tourism industry) — English on the PDF is the universal language at
 * Cypriot rental desks and tourist-area police stops.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Cyprus: 2026 Guide',
		description:
			'Cyprus drives on the LEFT — complete reversal for Americans. Alcohol limit in breath units (stricter than US). Northern Cyprus voids insurance. IDP Companion in 2 min — $35.',
		ogTitleShort: 'US Drivers in Cyprus: IDP Guide 2026',
		ogSubtitle: 'Left-hand traffic. Red rental plates. Here\'s the honest picture.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Cyprus',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Cyprus · 2026 Guide',
		title: 'IDP for US Drivers in Cyprus: Left-Hand Traffic Is the Hard Part',
		lead: "The Hertz agent at Paphos Airport hands over the keys to a Volkswagen Golf — familiar shape, identical to what you'd rent in Phoenix. You open the door and the steering wheel is on the right side. Cyprus kept left-hand traffic from British colonial days and never changed. The directional reversal is the actual preparation work for Americans — not the paperwork. The €150 fine for using a handheld phone applies to every red-plated rental, and the alcohol limit is expressed in breath units (22 µg/100ml ≈ 0.05% BAC) — stricter than the US 0.08% most drivers know. Cyprus accepts US English-language licences for tourist stays. The rental desks that ask for an IDP do so as a non-EU documentation requirement, not a legal one. IDP Companion clears that in two minutes. The left-hand-traffic recalibration takes the first 30 to 60 minutes of actual driving.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Recommended for rental desks, not strictly required by Cypriot law',
		text: "Cyprus recognises US English-language licences for tourist stays. Non-EU drivers are advised to carry an IDP or translation document, and rental companies commonly request one for non-EU licence holders as a booking condition. Most major rental desks at Larnaca and Paphos airports accept a US licence with IDP Companion as the required supplementary documentation. The preparation that actually matters most for Americans is directional — left-hand traffic — not paperwork.",
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in Cyprus',
		lead: 'Cyprus is one of the more forgiving Mediterranean destinations for US drivers once left-hand traffic settles in. The documentation side is manageable with the right translation document.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Cyprus',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Recognised by Cypriot authorities for tourist stays — English-language, Latin script, accepted at most major rental desks without IDP discussion. May be questioned at agencies that apply strict non-EU booking conditions.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in 12 languages. English on the PDF is the universal working language at every Cypriot rental desk and tourist-area police stop (Cyprus has extensive English infrastructure from its British colonial period). Satisfies the non-EU booking condition most rental contracts apply.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry alongside IDP Companion: original physical US driver's licence (no digital copies accepted), passport, rental agreement, insurance certificate, reflective jacket accessible in the cabin. Do not cross into Northern Cyprus without written confirmation of cross-line insurance coverage.",
	},

	whyNotEnough: {
		heading: 'Why your US licence alone is sometimes not enough',
		lead: 'For most US tourists in Cyprus, the paperwork is the smaller of the preparation items. The three things that consistently catch American drivers are non-paperwork.',
		reasons: [
			{
				icon: 'ph:steering-wheel-bold',
				title: 'Left-hand traffic — the full reversal',
				text: "The US drives on the right. Cyprus drives on the left — a legacy of British colonial road infrastructure. The steering wheel is on the right side. The normal driving lane is the left. Overtaking goes to the right. Every directional reflex built by US driving is inverted simultaneously. Most American visitors adapt within 30–60 minutes of deliberate, slow driving. The first 20 minutes leaving the airport car park is where the attention has to be highest.",
			},
			{
				icon: 'mdi:beer-outline',
				title: 'The alcohol limit in breath units',
				text: "Cyprus expresses its alcohol limit in micrograms of alcohol per 100 millilitres of breath: 22 µg/100ml for experienced drivers. Americans use blood-alcohol percentage — 0.08% in most US states. The Cypriot limit is approximately equivalent to 0.05% BAC — stricter than the US norm. The unit difference traps drivers who read \"22\" as a higher (more permissive) number. One glass of wine at a Limassol taverna brings most adults to around the limit. If you plan to drink at dinner, don't drive that evening.",
			},
			{
				icon: 'ph:flag-bold',
				title: 'The Northern Cyprus insurance line',
				text: "The island is divided by the UN Buffer Zone (the Green Line). Crossing at designated checkpoints is possible for tourists, but standard rental agreements from Republic of Cyprus agencies explicitly exclude coverage north of the line. Driving a rental car into Northern Cyprus under a standard policy voids the insurance entirely — any accident, breakdown, or theft north of the line becomes your direct personal liability. A small number of agencies offer cross-line coverage; obtain it in writing before crossing, not as verbal assurance at the desk.",
			},
		],
	},

	rules: {
		heading: 'Cypriot driving rules US drivers should know',
		lead: 'Left-hand traffic is the dominant adjustment. The alcohol-unit conversion and the camera-enforced phone rule are the next two.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Complete reversal from the US — steering wheel on the right' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '50 km/h', note: '30 km/h in marked school and residential zones' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '80 km/h', note: 'State roads outside built-up areas' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway', value: '100 km/h', note: '65 km/h minimum on motorways; far-right lane is for overtaking only' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '22 µg/100ml', note: '≈ 0.05% BAC, stricter than US; 9 µg/100ml for drivers with under 3 years experience' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: '€150 + 1 penalty point; enforced including with engine running' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'All seats mandatory', note: '€85 per person; under-5 require car seats; under-12 in rear seats' },
			{ icon: 'ph:warning-bold', label: 'Red rental plates', value: 'Visible at distance', note: 'Rental cars carry distinctive red plates — instantly identifiable to police' },
		],
	},

	fines: {
		heading: '2026 fines and Cyprus Police enforcement',
		lead: 'Fines can be paid via jccsmart.com, at local banks, or at Cyprus Police stations. Unpaid fines increase by 50% after 15 days; the case goes to court after a further 14 days. Rental companies provide your contact details to police — correspondence reaches your US address.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone while driving', amount: '€150 + 1 point', severity: 'med', note: 'Enforced including at red lights with engine running' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€85 per person', severity: 'med', note: 'Driver liable for all passengers' },
			{ icon: 'mdi:speedometer', label: 'Speeding (minor, urban)', amount: '€50–100', severity: 'low', note: 'Camera-enforced; increases 50% if unpaid after 15 days' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (significant)', amount: '€200–400+', severity: 'high', note: 'Points accrued; court for serious cases' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 22 µg/100ml breath', amount: 'From €200', severity: 'high', note: 'Licence suspension; criminal above 71 µg/100ml' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€150–300', severity: 'high', note: '' },
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP (if specifically required)', amount: '€200–500', severity: 'med', note: 'Insurance void in accident scenario is the larger risk' },
			{ icon: 'ph:warning-bold', label: 'Northern Cyprus crossing under standard contract', amount: 'Full liability', severity: 'high', note: 'Standard rental insurance void north of the Green Line — no ceiling on personal exposure' },
		],
		caption: 'Sources: Cyprus Police Traffic Department (police.gov.cy); jccsmart.com official fine payment portal. Verify the current schedule before travel.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Cyprus — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages, including English (the universal working language at every Cypriot rental desk and tourist-area police stop)',
				'A standardised layout that\'s easier for a Cypriot agent to read than a state-specific US licence format',
				'An instant digital download — printable or shown on phone at rental desks; printed copy preferred for police interactions',
				'Designed to be carried alongside your physical US licence, not as a replacement',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical US driver\'s licence',
				'Not cross-line insurance coverage for Northern Cyprus — that requires a specific written confirmation from your rental agency before crossing the Green Line',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Cyprus',
			items: [
				'At rental desks that apply strict non-EU booking conditions for licence documentation',
				'At Cyprus Police stops where a standardised translation reference speeds the interaction beyond what a US state licence format provides',
				'As backup identification if your physical US licence is lost or damaged mid-trip — the PDF is re-printable from any hotel',
				'For trips combining Cyprus with regional destinations (Egypt, Turkey, Israel) where a translation document is actively required',
			],
		},
		needOfficial: {
			title: 'What Cypriot rental companies and police actually expect',
			items: [
				'Original US driver\'s licence (physical — no digital copies accepted in roadside interactions)',
				'US passport — for identity verification at random checks',
				'Rental agreement and vehicle insurance certificate — kept in the vehicle',
				'Reflective high-visibility jacket accessible in the cabin (required in case of breakdown)',
				'Written confirmation of cross-line insurance coverage if any Northern Cyprus crossing is planned',
			],
		},
		pattern: "The pattern: your US licence is recognised. The translation document closes the rental-desk gap and makes any police stop faster. Left-hand traffic is what actually requires preparation. The Northern Cyprus line stops where the rental agreement says it stops — no document changes that.",
	},

	renting: {
		heading: 'Renting a car in Cyprus as a US driver',
		lead: "Cyprus's rental market mixes international chains at the airports with strong local operators in the tourist towns. Both types accept US licences in practice, with branch-by-branch variation on booking-condition strictness.",
		chains: [
			{ name: 'Hertz Cyprus', policy: 'Available at Larnaca (LCA) and Paphos (PFO) airports. Non-EU licence holders advised to carry IDP or translation document. Minimum age 21; young driver surcharge under 25. Credit card required for deposit.' },
			{ name: 'Avis Cyprus', policy: 'Same non-EU documentation policy. Available at LCA and PFO. Minimum age 23 for some vehicle categories.' },
			{ name: 'Sixt Cyprus', policy: 'Accepts US licence with translation document. Minimum age 21. Some city branch locations apply stricter requirements than airport desks.' },
			{ name: 'Local operators (Paphos, Limassol, Larnaca, Ayia Napa, Protaras)', policy: "Cyprus has a large English-speaking tourism infrastructure and local agencies are experienced with American visitors. Many accept US licences without friction. Pricing competitive with international chains; cash deposits sometimes accepted." },
		],
		tipsHeading: 'Practical tips for US drivers in Cyprus',
		tips: [
			'Drive around the car park at walking speed once before exiting onto the road — feel the steering wheel position and lane instinct',
			'Say "left side" out loud at every junction for the first hour — verbalisation interrupts the automatic right-side reflex',
			'Automatic transmission widely available and not significantly more expensive than manual — book in advance for peak season (June–September)',
			'Credit card mandatory for deposit at international agencies; €500–€1,500 holds standard depending on vehicle',
			'Northern Cyprus: confirm cross-line insurance coverage in writing at pickup if you plan to cross; standard contracts exclude the north',
			'Fuel: unleaded (95/98 octane) and diesel; most stations accept card; rural Troodos mountain stations may be cash-only',
			'Heat: Cyprus exceeds 40°C in July and August — carry water, rest in shade during midday, check tyre condition before longer drives',
			'Stray animals are common near coastal villages and throughout the interior — slow down when any appear near the road',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Cyprus',
		lead: 'The realistic range of outcomes for US tourists, ranked by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'common',
				label: 'US licence alone, smooth rental, clean drive',
				text: 'Many agencies accept US licence without friction. Most drives uneventful once the first-hour directional adjustment settles in. Typical week in Paphos or Larnaca ends with zero documentation friction.',
			},
			{
				severity: 'low',
				frequency: 'every US visitor',
				label: 'Left-hand traffic adjustment, first 20 minutes',
				text: 'Deliberate, slow start; settles within 30–60 minutes for most drivers. Cyprus Police are documented to extend patience to red-plated rentals at obvious adjustment moments.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Rental desk requests IDP/translation document',
				text: 'Non-EU booking-condition application. IDP Companion clears it. Some city-branch locations apply this more strictly than airport desks.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Cyprus Police stop, red plates visible',
				text: 'Routine check. Patience extended to obvious tourists in adjustment period if no accident is involved.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Handheld phone fine',
				text: '€150 + 1 point, actively enforced including at red lights with engine running. The single most common Cypriot infraction US tourists collect.',
			},
			{
				severity: 'med',
				frequency: 'less common',
				label: 'Speed camera fine, unpaid in 15 days',
				text: 'Increases 50% after the window. Correspondence reaches your US address via the rental company\'s record of your details.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'Alcohol over 22 µg/100ml — one drink too many',
				text: 'Stricter than US 0.08% — Cypriot 22 µg/100ml ≈ 0.05% BAC. Summer checkpoints on coastal roads and at Ayia Napa actively test. Wait 24 hours after evening drinks.',
			},
			{
				severity: 'high',
				frequency: 'less common',
				label: 'Crossing into Northern Cyprus in a rental car',
				text: 'Standard insurance void; all liability direct to driver. No ceiling on financial exposure if an incident occurs north of the Green Line under a standard Republic of Cyprus contract.',
			},
		],
		math: 'IDP Companion is $35. A €150 phone fine becomes €225 if not paid within 15 days. Northern Cyprus crossing under a standard contract has no ceiling on personal liability — written cross-line confirmation matters more than any document.',
	},

	phrases: {
		heading: 'Useful Greek phrases for road interactions in Cyprus',
		lead: 'Cyprus has extensive English-language infrastructure — most rental and police interactions in tourist areas happen in English. These phrases cover situations where Greek shortcuts the conversation, especially with older officers on rural roads.',
		items: [
			{ phrase: 'Ορίστε η άδεια οδήγησής μου', translation: 'Here is my licence', context: 'Handing over the physical US licence first' },
			{ phrase: 'Και το έγγραφο μετάφρασης', translation: 'And the translation document', context: 'Showing IDP Companion alongside' },
			{ phrase: 'Είμαι Αμερικανός τουρίστας', translation: "I'm an American tourist (m.)", context: 'At a police stop' },
			{ phrase: 'Είμαι Αμερικανίδα τουρίστρια', translation: "I'm an American tourist (f.)", context: 'Gendered form for female speakers' },
			{ phrase: 'Προσαρμόζομαι στην αριστερή κυκλοφορία', translation: "I'm adjusting to driving on the left", context: 'If stopped for directional confusion in the first hour' },
			{ phrase: 'Δεν καταλαβαίνω ελληνικά', translation: "I don't understand Greek", context: 'If spoken to quickly — most officers will switch to English' },
			{ phrase: 'Υπάρχει κάποιο πρόβλημα;', translation: 'Is there a problem?', context: 'Polite opener at a checkpoint' },
			{ phrase: 'Έχω ασφάλεια', translation: 'I have insurance', context: 'In case of accident or paperwork question' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Cyprus (US citizens)',
		lead: "Cyprus is one of the more forgiving destinations for an American's first left-hand traffic experience — English signage, patient police, short distances, good roads. The preparation focuses on the directional shift, not the paperwork.",
		schemaName: 'How to prepare for driving in Cyprus as a US citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Digital copies are not accepted at Cypriot rental desks or in roadside interactions.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. Covers the non-EU booking-condition check that some Cypriot rental agencies apply strictly. Print before departure — printed copy is preferred at police stops.',
			},
			{
				title: 'Prepare mentally for left-hand traffic',
				text: 'Steering wheel on the right. Normal driving lane is the left lane. Overtaking goes to the right. Roundabouts: yield to traffic already on the roundabout, exit indicating. Most American drivers adapt within 30–60 minutes of slow, deliberate driving.',
			},
			{
				title: 'Know the alcohol limit in the local unit',
				text: '22 µg/100ml breath ≈ 0.05% BAC — stricter than US 0.08%. One glass of wine at dinner approaches the limit for most adults. If you plan to drink at dinner, don\'t drive that evening. Active summer enforcement at coastal and Ayia Napa checkpoints.',
			},
			{
				title: 'Decide on the Northern Cyprus question before pickup',
				text: 'If you plan to cross the Green Line, request written confirmation of cross-line insurance coverage at the rental desk before signing. If unavailable, cross on foot or by local taxi and hire a Northern Cypriot vehicle on the other side. Standard contracts void insurance north of the line.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do US tourists need an IDP to drive in Cyprus?',
				answer: 'Recommended, not strictly mandated for most situations. Cyprus recognises US English-language licences for tourist stays. Non-EU drivers are advised to carry an IDP or translation document, and rental agencies commonly request one as a non-EU booking condition. In practice, most major rental desks accept a US licence with IDP Companion as the required supplementary documentation.',
			},
			{
				id: 2,
				question: 'Is left-hand traffic as disorienting as it sounds?',
				answer: 'For most Americans: yes, in the first 20 minutes; manageable by the end of the first hour; close to automatic by the second day. The simultaneous inversions — steering wheel, lane, overtaking direction — require deliberate conscious processing initially. The adjustment happens faster than most visitors expect once you commit to the "left side" default at every junction.',
			},
			{
				id: 3,
				question: "What's the alcohol limit and how does it compare to the US?",
				answer: 'Cyprus uses breath units: 22 µg/100ml for experienced drivers, approximately equivalent to 0.05% BAC — stricter than most US states (0.08%) and equal to Scotland. One glass of wine brings most adults to approximately this level. If you\'re eating dinner with drinks, plan not to drive that evening.',
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document. It is not issued under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your original US licence as the translation aid Cypriot rental agencies and police accept for non-EU documentation requirements.',
			},
			{
				id: 5,
				question: 'Can I drive into Northern Cyprus in my rental car?',
				answer: "Only if your rental agreement explicitly includes cross-line coverage. Standard Republic of Cyprus rental contracts exclude Northern Cyprus. Driving across the Green Line under a standard policy voids the insurance immediately. If you want to visit Northern Cyprus by car, request written confirmation of cross-line coverage before pickup. If it's not available, cross on foot or by local taxi and hire a Northern Cypriot vehicle on the other side.",
			},
			{
				id: 6,
				question: 'How do I pay a traffic fine if I get one?',
				answer: 'Via jccsmart.com (online), at local banks, or at Cyprus Police stations. You have 15 days from the fine date. After 15 days, the fine increases by 50%. After a further 14 days without payment, the case goes to court. The rental company provides your contact details to Cypriot police and correspondence reaches your US address.',
			},
			{
				id: 7,
				question: 'Why do rental cars have red licence plates in Cyprus?',
				answer: 'Cypriot law requires all rental vehicles to carry distinctive red licence plates instead of the standard white/yellow plates on private vehicles. This makes rental cars — and their tourist drivers — immediately identifiable to police from a distance. Most officers extend patience to red-plate drivers during the obvious adjustment period for left-hand traffic.',
			},
			{
				id: 8,
				question: 'Is Cyprus a good destination for a first-time left-hand traffic experience?',
				answer: "Yes, for several reasons: English is widely spoken, road signs include English, roads in tourist areas are well-maintained, and Cyprus Police are documented to extend patience to adjustment-period drivers. It's a lower-stakes environment to learn left-hand traffic than central London or Kuala Lumpur. The island's size means distances are short, speeds are moderate, and recovery from directional errors is usually straightforward on light-traffic rural roads.",
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to Mediterranean destinations where the IDP question varies.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'gb', flagTo: 'cy', label: 'UK → Cyprus', status: 'Live', href: '/idp-for-uk-drivers-in-cyprus' },
			{ flagFrom: 'us', flagTo: 'mt', label: 'US → Malta', status: 'Live', href: '/idp-for-us-drivers-in-malta' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain' },
			{ flagFrom: 'us', flagTo: 'pt', label: 'US → Portugal', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Left-hand traffic is the real preparation',
		text: "Cyprus is one of the more forgiving Mediterranean destinations for American drivers — English signage, patient police, short distances, good roads. The documentation is manageable with IDP Companion. The left-hand-traffic recalibration takes an honest first hour. The alcohol limit is stricter than home. The Northern Cyprus insurance line stops where the rental agreement says it stops. IDP Companion takes two minutes and covers the rental-desk gap. The rest is knowing which side of the road the car goes on.",
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Cyprus Police (Αστυνομία Κύπρου) or the Republic of Cyprus Ministry of Transport, Communications and Works. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Cyprus Police Traffic Department — police.gov.cy',
			'jccsmart.com — official fine payment portal',
			'Republic of Cyprus Ministry of Transport, Communications and Works — mcw.gov.cy',
			'US Embassy in Nicosia — driving advisory — cy.usembassy.gov',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Cyprus',
	},
};

export const usCyprusCopy: Record<'en', CountryPairCopy> = { en };
