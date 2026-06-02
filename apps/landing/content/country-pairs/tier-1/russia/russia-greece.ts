/**
 * Country-pair content: Russia → Greece.
 * Locales: en, ru.
 *
 * Unique angle: Greece is the strictest rental enforcement in Europe because of
 * the 2018 Traffic Code update — both driver AND rental company face €1,000 fines
 * if a car is handed over without IDP. Russia is not in the Greek IDP exemption
 * list under Law 4850/2021. Cyrillic-vs-Greek script gap doubles the friction.
 *
 * SEO add-ons present: tldr, lez (island enforcement specifics), alphabet (Greek),
 * phrases, howTo, lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Greece IDP for Russian Drivers — €1,000 Double-Fine Rule',
		description:
			"Greek law (2018 Traffic Code) fines the driver AND the rental company €1,000 each if a Russian-licence holder is handed keys without an IDP. Russia is not on the Law 4850/2021 exemption list. 2026 guide for Russian drivers in Heraklion, Rhodes, Mykonos and Athens.",
		ogTitleShort: 'Greece IDP for Russian Drivers',
		ogSubtitle: '€1,000 for driver AND rental company',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'Russia → Greece',
	},
	lastReviewed: 'June 2026',

	hero: {
		kicker: 'Russia → Greece · 2026 Guide',
		title: 'Greece IDP for Russian Drivers — €1,000 Double-Fine + Cyrillic',
		lead: 'The Hertz agent at Heraklion Airport in Crete has processed Russian-speaking customers for twenty years — and she knows what happens when a Cyrillic licence comes across with no IDP. The Greek Traffic Code, updated 2018, fines the driver €1,000 and the rental company another €1,000 if she hands over keys without the required IDP. Russian tourists are not in the Greek IDP exemption list under Law 4850/2021 — that exemption covers US, UK, Canada, Australia and EU/EEA only. Cyrillic on a Russian licence is additionally unreadable to Greek officers working in Greek script. Both conditions land at the desk for every Russian who arrives at Heraklion, Rhodes, Mykonos or Athens without translation. Q1 2026 Forum.Vinskogo Greece and r/greece threads continue logging refusals on these exact grounds, with island chains (Cretan car parks, Rhodes airport row, Mykonos JMK) the most consistent. The Hertz agent has the law on her side. She always has.',
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — Russian licence holders need an IDP in Greece',
		text: 'Greek Law 4850/2021 lists the countries whose nationals can drive on the national licence alone — USA, UK, Canada, Australia and EU/EEA. Russia is not on this list. Under the 2018 Traffic Code update, the rental company faces a €1,000 fine separately from the driver if it hands over a car without checking IDP. That double-fine mechanism is why every Greek rental desk enforces this without exception.',
	},

	tldr: {
		heading: 'Russian Licence alone vs IDP Companion in Greece',
		lead: 'Two structural pressures meet at every Greek rental desk for Russian drivers — Russia\'s absence from the Law 4850/2021 exemption list, and the 2018 Traffic Code\'s €1,000 fine on the rental company itself. No agent absorbs that risk; refusal is the default.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Greece',
		colCost: 'Cost',
		rows: [
			{
				document: 'Russian Licence (alone)',
				whatItDoes: 'Not sufficient — Russian tourists legally require an IDP under Greek Law 4850/2021. Cyrillic is unreadable to Greek authorities, who use a different script. Rental company faces €1,000 fine for handing over keys without checking IDP, so they refuse. No backup option on islands.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + Russian licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in English, French, Spanish, Arabic, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set. English on the document is universally readable by every Greek rental agent (Hertz, Avis, Sixt, Europcar) and by Hellenic Police officers in tourist areas. Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Greece: physical Russian licence + IDP Companion + passport with Greek (Schengen) entry stamp + rental agreement. Required in vehicle: warning triangle, fire extinguisher, first aid kit (rental cars include all three). IDP Companion must be carried alongside the original licence, not as a standalone document.",
	},

	whyNotEnough: {
		heading: 'Why Greece has the strictest rental enforcement in Europe',
		lead: 'Most countries fine the driver. Greece fines the driver and the rental company — equally. That single legal mechanism is why nothing about this is negotiable at the desk.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The double-fine mechanism',
				text: "The 2018 update to the Greek Traffic Code makes the car rental company equally liable. Under this law, both the driver and the rental agency face a fine of €1,000 each if a vehicle is handed over to a tourist who legally requires an IDP and doesn't have one. The rental company isn't enforcing a corporate policy — they're managing their own legal and financial exposure. There is no manager override, no \"we'll make an exception.\" The agent who skips the IDP check is personally implicated in the violation.",
			},
			{
				icon: 'ph:flag-bold',
				title: 'Russia is not in the exempt countries list',
				text: 'Greek Law 4850/2021 created an IDP exemption for specific countries — UK, USA, Canada, Australia, EU/EEA states. Russia is not on this list. This isn\'t a recent change or an ambiguity — it is the legal baseline. Russian tourists driving in Greece require an IDP under Greek law, in the same way that Greek tourists driving in most non-EU countries require an IDP.',
			},
			{
				icon: 'ph:translate-bold',
				title: 'The script gap',
				text: 'Greek authorities work in Greek — a language with its own distinct alphabet. Russian licences are in Cyrillic. Neither Greek nor Cyrillic is readable by speakers of the other. A Russian licence at a Hellenic Police checkpoint presents an officer with a document they cannot verify. The IDP or translation companion provides the English presentation of your licence data — and English is the universal second language at Greek rental desks and tourist-area police stops, which resolves the verification problem in seconds.',
			},
		],
	},

	rules: {
		heading: 'Greece driving rules Russians should know',
		lead: 'Right-hand traffic, same as Russia. Most rules are familiar. Seatbelt fines and 2025 speed-enforcement update are the outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as Russia — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in residential and pedestrian zones' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '90 km/h', note: 'Standard non-motorway roads' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway (Ethniki Odos)', value: '130 km/h', note: 'Some sections 110 km/h — follow signs' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.02% for drivers with <2 years\' experience' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'Active enforcement at urban checkpoints' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: '€350 per person', note: 'One of the highest seatbelt fines in Europe' },
			{ icon: 'mdi:car-emergency', label: 'Required in vehicle', value: 'Triangle + extinguisher + first aid', note: 'Rental cars include all three — verify before leaving the lot' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Greek fines cannot be paid in cash to officers on the spot — payment is made at a bank or official payment office. Camera-issued fines go to the rental company. Late-2025 enforcement update raised speed-camera coverage and tightened repeat-offender penalties.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without required IDP (Russian licence)', amount: '€200–400', note: 'Treated as driving without valid licence; insurance void', severity: 'high' },
			{ icon: 'mdi:office-building', label: 'Rental company hands car without IDP check', amount: '€1,000 (company)', note: 'Separate penalty on agency under 2018 Traffic Law update', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding 0–30 km/h over (urban)', amount: '€40–100', note: 'Updated 2025 enforcement — wider camera coverage', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 30–50 km/h over', amount: '€100–350', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 50+ km/h over (motorway)', amount: '€350–750', note: 'Repeat offender penalties tightened in 2025', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€350 per person', note: 'Driver liable for passengers under 16', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone', amount: '€100–350', note: '', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'up to €1,200', note: 'Licence suspension; criminal charge above 0.08%', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€200–400', note: '', severity: 'med' },
		],
		caption: 'Sources: Greek Highway Code (Κώδικας Οδικής Κυκλοφορίας); Greek Traffic Law update November 2025; Greek Law 4850/2021 (IDP exemption list); RAC Greece driving guide (updated 2025).',
	},

	lez: {
		heading: 'Greek island specifics — where rental enforcement bites hardest',
		badge: 'Greece-specific',
		lead: 'Mainland and islands run the same legal regime, but practical realities differ. On the islands, "we\'ll find another agency" is rarely an option.',
		zones: [
			{
				city: 'Crete (Heraklion / Chania)',
				name: 'Most-visited island for Russian tourists',
				description: "All major airport agencies (Hertz, Avis, Sixt, Europcar) enforce the IDP requirement consistently — the €1,000 company fine applies to local Heraklion town and Chania old town agencies equally. Cretan highlands roads are narrow, often without central markings, with cliff drops and no barrier on the outer edge. Posted speed limits are technically the maximum; in practice the road geometry requires significantly lower speeds.",
				fine: '€1,000 each — driver + agency',
				note: 'Verify your IDP Companion before booking. Local Cretan agencies are familiar with Russian-speaking customers but enforce the law identically to airport chains.',
			},
			{
				city: 'Santorini / Mykonos',
				name: 'Limited supply, strict enforcement',
				description: 'Limited number of rental agencies on each island. Car rental is essential to reach Oia, Akrotiri, the southern beaches from Fira, or Mykonos\'s outer beaches. All agencies require IDP for non-EU, non-exempt licences. No backup agency option if the first refuses — the island has finite rental supply.',
				fine: '€1,000 each — driver + agency',
				note: 'Santorini\'s caldera approach roads have no crash barrier on cliff edges. Treat posted limits as maximums, not targets. Night driving on these roads is hazardous for drivers unfamiliar with the layout.',
			},
			{
				city: 'Athens (mainland)',
				name: 'Hellenic Police checkpoints + Athens parking',
				description: 'Hertz, Avis, Sixt, Europcar at Athens International (ATH). All require IDP for Russian Cyrillic licences under the 2018 law obligation. Hellenic Police checkpoints in central Athens are routine — English on the IDP Companion is read fluently by officers in tourist areas. Central Athens has paid parking zones; Syntagma and Monastiraki areas have very limited spaces. Most visitors park outside the historic core.',
				fine: '€1,000 each — driver + agency',
				note: 'Bringing a car on a Greek ferry between islands and from the mainland is possible — verify booking requirements well in advance for peak summer.',
			},
		],
		tip: 'Practical rule for Greece: the IDP question is settled before you fly. Greek rental desks have €1,000 of personal exposure if they cut corners. Island agencies have no backup option to send you to. Mainland police checkpoints in Athens are routine. Two minutes online before departure removes the rental-desk dispute and the checkpoint stop.',
	},

	alphabet: {
		heading: 'Greek road signs and phrases you will see',
		lead: 'Greek road signs use the Greek alphabet alongside Latin transliteration on motorways. Off the motorways, Greek script dominates — a few common signs go a long way.',
		badge: 'Greek script',
		examples: [
			{ sign: 'ΣΤΟΠ', latin: 'STOP', meaning: 'Stop' },
			{ sign: 'ΚΕΝΤΡΟ', latin: 'KENTRO', meaning: 'City centre' },
			{ sign: 'ΕΞΟΔΟΣ', latin: 'EXODOS', meaning: 'Exit' },
			{ sign: 'ΕΘΝΙΚΗ ΟΔΟΣ', latin: 'ETHNIKI ODOS', meaning: 'National motorway' },
			{ sign: 'ΑΡΓΑ', latin: 'ARGA', meaning: 'Slow' },
			{ sign: 'ΠΡΟΣΟΧΗ', latin: 'PROSOCHI', meaning: 'Caution / attention' },
			{ sign: 'ΜΟΝΟΔΡΟΜΟΣ', latin: 'MONODROMOS', meaning: 'One way' },
			{ sign: 'ΑΠΑΓΟΡΕΥΕΤΑΙ Η ΣΤΑΘΜΕΥΣΗ', latin: 'APAGOREVETAI I STATHMEFSI', meaning: 'No parking' },
		],
		helpsHeading: 'How IDP Companion helps bridge the script gap',
		helps: [
			'Presents your name, address and licence categories in English — universally read by Greek rental agents and Hellenic Police officers in tourist areas',
			'Plus the same data in French, Spanish, Arabic, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set',
			'Removes the rental agent\'s primary objection — "we cannot verify this licence" — which is the agent\'s €1,000 problem to begin with',
			'Bring the printed IDP Companion as physical paper — Hellenic Police checkpoints expect printed documents',
		],
		outro: "Greek and Cyrillic are distinct alphabets — speakers of one cannot read the other without training. English is the practical bridge: every Greek rental agent and tourist-area officer reads it fluently, and English is on every IDP Companion document.",
	},

	phrases: {
		heading: 'Useful Greek phrases for rental desks and police checkpoints',
		lead: 'English is functional in tourist Greece — every major rental desk speaks it. These phrases cover Hellenic Police checkpoints and smaller-island situations where Greek dominates.',
		items: [
			{ phrase: 'Ορίστε η άδεια οδήγησής μου', translation: 'Here is my driving licence', context: 'Pronounced "Oriste i athia othighisis mou". Handing over documents at a checkpoint' },
			{ phrase: 'Και το έγγραφο μετάφρασης', translation: 'And the translation document', context: 'Pronounced "Ke to engrafo metafrasis". Showing IDP Companion alongside Russian licence' },
			{ phrase: 'Είμαι Ρώσος / Ρωσίδα τουρίστας', translation: "I'm a Russian tourist (m / f)", context: 'Pronounced "Ime Rosos / Rositha turistas". Establishes context at any checkpoint' },
			{ phrase: 'Δεν καταλαβαίνω ελληνικά', translation: "I don't understand Greek", context: 'Pronounced "Then katalaveno elinka". Most officers in tourist areas switch to English' },
			{ phrase: 'Υπάρχει κάποιο πρόβλημα;', translation: 'Is there a problem?', context: 'Pronounced "Iparhi kapio provlima?". Polite opening at any stop' },
			{ phrase: 'Έχω ασφάλεια', translation: 'I have insurance', context: 'Pronounced "Eho asfalia". In case of accident — present the rental insurance card' },
			{ phrase: 'Πρέπει να καλέσω την εταιρεία ενοικίασης', translation: 'I need to call the rental company', context: 'Pronounced "Prepi na kaleso tin eteria enikisis". For vehicle issues' },
			{ phrase: 'Ευχαριστώ πολύ', translation: 'Thank you very much', context: 'Pronounced "Efharisto poli". After the stop concludes — basic courtesy is universally rewarded' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Greece as a Russian citizen',
		lead: "Greek rental desks have €1,000 of personal exposure if they skip the IDP check. The smartest preparation is to remove the question entirely before you fly.",
		schemaName: 'How to prepare for driving in Greece as a Russian citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your Russian licence into English (the operational language at every major Greek rental desk and tourist-area police stop), plus French, Spanish, Arabic, German, Italian and 5 other widely-spoken languages. Issued in 2 minutes online, valid 1–5 years. Resolves the rental-desk question before you walk up to the counter.',
			},
			{
				title: 'Verify your Russian licence categories',
				text: 'For scooter and ATV rental on Mykonos, Santorini and Crete, your Russian licence must already carry Category A. Check the reverse of the licence card. IDP Companion reflects what\'s on your licence — it cannot create a category that isn\'t there.',
			},
			{
				title: 'Print IDP Companion before flying',
				text: 'Print on standard paper at home or from any hotel after arrival. Hellenic Police checkpoints expect physical paper. Rental desk staff prefer to handle a printed copy alongside the physical Russian licence.',
			},
			{
				title: 'Carry the full document set together',
				text: 'Physical Russian driving licence + IDP Companion (printed) + passport with Schengen entry stamp + rental agreement + rental insurance card. One folder, easily reached at any checkpoint.',
			},
			{
				title: 'Verify required vehicle equipment is present',
				text: 'Greek law requires a warning triangle, fire extinguisher and first aid kit in the vehicle at all times. Rental cars include all three by default — confirm they\'re actually present before leaving the lot. If any are missing on return, the agency may charge for replacement.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Greece — honestly',
		lead: 'Greek rental enforcement on translation documents is among the steadiest in Europe — island agencies on Mykonos, Santorini and Naxos run their own checklists regardless of national policy. Below: what IDP Companion solves there, and what it doesn\'t.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your Russian licence data into English, French, Spanish, Arabic, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to make the Russian licence verifiable in English at every major Greek rental desk and at Hellenic Police stops in tourist areas',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not valid by itself — must be carried alongside your physical Russian driving licence',
				'Not protection from the €350 seatbelt fine or other moving violations — those apply regardless of documentation',
			],
		},
		helps: {
			title: 'When IDP Companion helps Russian drivers in Greece',
			items: [
				'At every major rental desk — the €1,000 double-fine mechanism means agents check without exception',
				'At Hellenic Police checkpoints in tourist areas — English on the IDP Companion is read fluently by officers in central Athens, Heraklion, Rhodes',
				'At smaller island agencies in Santorini, Mykonos, Crete and Rhodes',
				'When insurance documentation is reviewed after an accident — English translation establishes licence validity for the claim',
			],
		},
		needOfficial: {
			title: 'Documents the local law cares about',
			items: [
				'Your physical Russian driving licence — the actual permission to drive (no document substitutes for this)',
				'Passport with Schengen entry stamp — Greek officers verify both at any checkpoint',
				'Rental insurance — the rental contract specifies coverage; carry the card in the vehicle',
				'Vehicle equipment: warning triangle, fire extinguisher, first aid kit (rental cars include all three)',
			],
		},
		pattern:
			"What prepared Russian travellers in Greece actually carry: physical Russian licence + IDP Companion (printed) + passport + Schengen stamp + rental contract + insurance card. The translation companion solves the script-gap problem the booklet alone does not. Two minutes of preparation, $35, removes the rental-desk dispute and the Hellenic Police verification step.",
	},

	renting: {
		heading: 'Renting a car in Greece as a Russian driver — island specifics',
		lead: 'Greek rental policies are uniformly strict because of the 2018 Traffic Code\'s €1,000 company-side penalty. Major chains and island agencies enforce identically.',
		chains: [
			{ name: 'Hertz, Avis, Sixt, Europcar (Athens, Heraklion, Rhodes)', policy: 'IDP required for Russian Cyrillic licences under the 2018 law obligation. Minimum age 21; young driver surcharge under 23 at some agencies' },
			{ name: 'Local Cretan agencies (Heraklion town, Chania old town)', policy: 'Familiar with Russian-speaking customers. €1,000 company fine applies equally — they enforce identically to airport chains' },
			{ name: 'Santorini / Mykonos agencies', policy: 'Limited supply, strict enforcement. No backup agency option — the island has finite rental capacity. Verify IDP before flying' },
			{ name: 'Rhodes (RHO)', policy: 'Large charter destination. Major and local agencies at the airport. IDP enforcement consistent across both' },
		],
		tipsHeading: 'Practical tips for Greece',
		tips: [
			'Minimum age 21 at all major agencies; 23 for some vehicle categories (large SUVs, premium cars)',
			'Manual transmission is standard; automatic available but more expensive and limited on islands',
			'Credit card required for deposit; holds of €500–€2,000 are standard',
			'Fuel: Crete and Rhodes have widespread coverage; Santorini and smaller islands have limited stations — fill up before exploring remote areas',
			'Island roads (Santorini caldera approach, Cretan highlands, Corfu north): narrow, no crash barriers on cliff edges; treat posted limits as maximums, not targets',
			'Parking in central Athens: paid zones; Syntagma and Monastiraki very limited; most visitors park outside the historic core',
			'Bringing a car on a Greek ferry between islands is possible and available on many routes; verify booking requirements well in advance for peak summer',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: "What Russian drivers face in Greece — Heraklion HER airport rental refusals, €1,000 double-fine enforcement at desks like Hertz/Avis/Sixt, Hellenic Police rural-island stops — drawn from Forum.Vinskogo Greece and r/greece threads, sorted by frequency.",
		items: [
			{
				severity: 'low',
				frequency: 'Very common with IDP',
				label: 'Rental processed without discussion',
				text: 'Full documentation, agent verifies, keys handed over. The expected outcome — and the only outcome the rental company can afford to allow.',
			},
			{
				severity: 'high',
				frequency: 'Very common without IDP',
				label: 'Rental desk refuses to release car',
				text: '€1,000 double-fine mechanism means no agent will release the keys. On islands, no backup agency to try. The booking confirmation is meaningless without the IDP — the agent will tell you that, calmly, and you stand at the desk while the queue moves around you.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Hellenic Police checkpoint, IDP present',
				text: 'English on the IDP Companion is verifiable in seconds — fluently read by officers in tourist areas. Routine stop clears smoothly.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Hellenic Police checkpoint, no IDP',
				text: 'Treated as driving without a valid licence. Driver fine €200–400, insurance void from the moment the officer confirms the document is missing.',
			},
			{
				severity: 'high',
				frequency: 'Occasional',
				label: 'Seatbelt fine — €350 per person',
				text: '€350 per person, driver liable for all passengers under 16. Enforced consistently mainland and islands. One of the highest seatbelt fines in Europe.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Speed camera fine',
				text: 'Automated, charged to the rental deposit, starts at €40. Late-2025 enforcement update widened camera coverage and tightened repeat-offender penalties.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI over 0.05% BAC',
				text: 'Up to €1,200 fine, mandatory licence suspension, criminal charge above 0.08% BAC.',
			},
		],
		math: 'IDP Companion is $35. The double-fine in Greece is €2,000 total — €1,000 driver + €1,000 company. The agent who skips the check is personally implicated. That math is why the desk agent never blinks.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do Russian drivers legally need an IDP in Greece?',
				answer: 'Yes. Greek Law 4850/2021 lists specific countries whose nationals may drive without an IDP — UK, USA, Canada, Australia and EU/EEA states. Russia is not on this list. Russian tourists must carry a valid IDP alongside the national licence under Greek law.',
			},
			{
				id: 2,
				question: 'Why is the IDP enforced so strictly at Greek rental desks?',
				answer: 'Because the rental company faces a €1,000 fine under the 2018 Greek Traffic Law update if they hand over a car to a tourist who legally requires an IDP and doesn\'t have one. Both the driver and the company are penalised simultaneously. Every rental agent has an active financial reason to check — the enforcement isn\'t discretionary.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government IDP is a formal booklet issued under the 1949 Geneva Convention by an authorised national body (in Russia, the All-Russian Automobile Society — РОСАВТОКЛУБ). IDP Companion is a private multilingual translation document presenting your Russian licence details in English, French, Spanish, Arabic and 7 other widely-spoken languages from the 1949 Geneva Convention set. Most major Greek rental agencies and all island agencies accept IDP Companion as the required translation document — verify the specific agency before booking if you want confirmation in writing.',
			},
			{
				id: 4,
				question: 'What is the fine for the driver without an IDP in Greece?',
				answer: 'Driving without the required documentation is treated as driving without a valid licence. Fines range from €200–400 for the driver, plus the insurance void consequence. The rental company\'s separate €1,000 fine is issued to the agency, not the driver.',
			},
			{
				id: 5,
				question: 'What equipment must be in the rental car?',
				answer: 'Greek law requires a warning triangle, fire extinguisher and first aid kit to be present in the vehicle at all times. Rental cars include all three. If any are missing when you return, the agency may charge for replacement. Confirm they\'re actually present before leaving the lot.',
			},
			{
				id: 6,
				question: 'Is the alcohol limit the same as in Russia?',
				answer: "No. Russia applies 0.00% BAC (zero tolerance). Greece's limit is 0.05% for experienced drivers and 0.02% for those with fewer than two years' experience. Greece's limit is therefore slightly more lenient than Russia's zero tolerance — but one glass of wine is enough to approach it, particularly for lighter drinkers.",
			},
			{
				id: 7,
				question: 'What makes island roads in Greece different from mainland driving?',
				answer: 'Island roads — particularly in the Cretan highlands, Santorini\'s caldera approach and the northern coastal routes of Corfu — are narrow, often without central markings, and frequently run alongside cliff edges without crash barriers. Posted speed limits are technically the maximum; in practice the road geometry requires significantly lower speeds on most scenic routes. Night driving on these roads is genuinely hazardous for drivers unfamiliar with the layout.',
			},
			{
				id: 8,
				question: 'Can I combine Greece with other destinations on the same trip?',
				answer: 'Yes — many Russian tourists combine Greece with Turkey, Egypt or Cyprus. IDP Companion covers all of these destinations on a single document. Greece and Turkey are sometimes combined via Aegean ferry routes. IDP Companion\'s English, Arabic, French, Spanish and other Geneva-1949-set language coverage means one document works at rental desks and police stops on the standard Russia–Greece–Turkey or Russia–Greece–Egypt circuit.',
			},
			{
				id: 9,
				question: 'Can I get an IDP after I arrive in Greece?',
				answer: 'No. International Driving Permits must be issued in the country where your driving licence was issued — Greek authorities don\'t issue them to foreign tourists. For Russian licence holders this means a 1949 Geneva IDP obtained in Russia before traveling. IDP Companion can be generated online from anywhere as a multilingual translation companion — printable from any hotel within minutes of purchase.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Greece trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic Russian licence — if your Russian licence expires, the companion expires with it. One purchase covers Greece plus Egypt, Turkey, Cyprus, Thailand and any other destination you visit during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Adjacent European Mediterranean destinations and southern resort hubs where Russian Cyrillic hits the same enforcement pattern — Turkey, Cyprus, Egypt.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Russia → Thailand', status: 'Live', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Russia → Egypt', status: 'Live', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Russia → Indonesia', status: 'Live', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Russia → Turkey', status: 'Live', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including English, French, Spanish, Arabic, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real Russian licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Greece, Egypt, Turkey, Cyprus, Thailand. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Hellenic Police (Ελληνική Αστυνομία) or the Greek Ministry of Infrastructure and Transport. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in Russia, the All-Russian Automobile Society (РОСАВТОКЛУБ) is among the authorised issuers of national IDPs. IDP Companion must be used alongside your original Russian driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Greek Law 4850/2021 — IDP exemption countries (Hellenic Republic Official Gazette)',
			'Greek Traffic Code (Κώδικας Οδικής Κυκλοφορίας) — 2018 update, double-fine for rental without IDP',
			'Greek Traffic Law update November 2025 — stricter speed enforcement provisions',
			'RAC — Driving in Greece guide (rac.co.uk, updated 2025)',
			'All-Russian Automobile Society (РОСАВТОКЛУБ) public guidelines',
		],
	},

	og: {
		originName: 'Russia',
		destinationName: 'Greece',
	},
};

const ru: CountryPairCopy = {
	seo: {
		title: 'IDP для россиян в Греции — двойной штраф €1 000 + кириллица',
		description:
			'Греческий закон (Дорожный кодекс 2018) штрафует водителя И прокатную компанию по €1 000 каждого, если россиянину выдали ключи без IDP. Россия не в списке исключений по Закону 4850/2021. Гид 2026 для россиян в Ираклионе, Родосе, Миконосе и Афинах.',
		ogTitleShort: 'IDP для россиян в Греции',
		ogSubtitle: '€1 000 водителю И прокатной компании',
	},
	breadcrumbs: {
		home: 'Главная',
		current: 'Россия → Греция',
	},
	lastReviewed: 'Июнь 2026',
	labels: {
		freshnessPrefix: 'Последняя проверка:',
	},

	hero: {
		kicker: 'Россия → Греция · Гид 2026',
		title: 'IDP для россиян в Греции — двойной штраф €1 000 + кириллица',
		lead: 'Агент Hertz в аэропорту Ираклиона на Крите оформляет русскоязычных клиентов уже двадцать лет — и точно знает, что происходит, когда через стойку проезжает кириллица без IDP. Греческий Дорожный кодекс, обновлённый в 2018 году, штрафует водителя на €1 000 и прокатную компанию ещё на €1 000, если она выдала ключи без необходимого IDP. Российские туристы не входят в список исключений по греческому Закону 4850/2021 — это исключение покрывает США, Великобританию, Канаду, Австралию и страны ЕС/ЕЭП. Кириллица на российских правах при этом нечитаема для греческих офицеров, работающих с греческим алфавитом. Оба условия приходят на стойку с каждым россиянином, прилетающим в Ираклион, на Родос, Миконос или в Афины без перевода. Треды Forum.Vinskogo по Греции и r/greece за Q1 2026 продолжают фиксировать тот же сценарий — отказы на стойках по этим двум основаниям, чаще всего на островных аэропортах (Крит, Родос, Миконос JMK). У агента Hertz закон на её стороне. Всегда был.',
		ctaPrimary: 'Получить IDP Companion за 2 минуты — $35',
		ctaSecondary: 'Все тарифы',
		badgeTop: 'Гид 2026',
		badgeBottom: 'От $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Да — россиянам в Греции нужен IDP',
		text: 'Греческий Закон 4850/2021 перечисляет страны, чьи граждане могут ездить только по национальным правам — США, Великобритания, Канада, Австралия и ЕС/ЕЭП. России в этом списке нет. По обновлению Дорожного кодекса 2018 года прокатная компания получает отдельный штраф €1 000, если выдала машину без проверки IDP. Этот двойной механизм штрафа — причина, по которой каждая греческая стойка проката это применяет без исключений.',
	},

	tldr: {
		heading: 'Российские права vs IDP Companion в Греции',
		lead: 'На стойке проката Греция давит на россиян двумя структурными факторами — отсутствием РФ в списке исключений по Закону 4850/2021 и штрафом €1 000 на саму прокатную компанию по Дорожному кодексу 2018 года. Этот риск ни один агент на себя не берёт — отказ становится дефолтом.',
		colDocument: 'Документ',
		colWhatItDoes: 'Что даёт в Греции',
		colCost: 'Цена',
		rows: [
			{
				document: 'Российские права (только)',
				whatItDoes: 'Недостаточно — россиянам нужен IDP по греческому Закону 4850/2021. Кириллицу не читают греческие власти — другой алфавит. Прокатная компания получает €1 000 штрафа за выдачу ключей без проверки IDP, поэтому отказывает. На островах нет «запасной» конторы.',
				cost: 'Уже есть',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + российские права',
				whatItDoes: 'Многоязычный цифровой PDF с данными прав на английском, французском, испанском, арабском, немецком, итальянском и ещё 5 распространённых языках набора Женевской конвенции 1949 года. Английский на документе свободно читают каждый греческий прокатный агент (Hertz, Avis, Sixt, Europcar) и офицеры греческой полиции в туристических зонах. Готов за 2 минуты онлайн.',
				cost: '$35–55 (1–5 лет)',
				tone: 'companion',
			},
		],
		footnote: 'Что брать с собой в Грецию: оригинал российских прав + IDP Companion + загранпаспорт со штампом Шенгенской зоны + договор аренды. Обязательно в машине: знак аварийной остановки, огнетушитель, аптечка (в арендной — всё уже есть). IDP Companion — носить только вместе с оригиналом прав.',
	},

	whyNotEnough: {
		heading: 'Почему Греция давит россиян двумя структурными факторами сразу',
		lead: 'Большинство стран штрафует только водителя. Греция штрафует и водителя, и прокатную компанию — поровну. Один этот юридический механизм объясняет, почему на стойке ничего не обсуждается.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'Двойной штраф',
				text: 'Обновление 2018 года к Греческому Дорожному кодексу делает прокатную компанию равно ответственной. По этой норме и водитель, и прокатная контора получают по €1 000 штрафа, если машина выдана туристу, которому по закону нужен IDP, а его нет. Контора не следует «корпоративной политике» — она управляет собственным юридическим и финансовым риском. Никаких «менеджер разрешит», никаких «сделаем исключение». Агент, который пропустил проверку, лично попадает в нарушение.',
			},
			{
				icon: 'ph:flag-bold',
				title: 'России нет в списке исключений',
				text: 'Греческий Закон 4850/2021 ввёл исключение от IDP для конкретных стран — Великобритания, США, Канада, Австралия и страны ЕС/ЕЭП. России в этом списке нет. Это не недавнее изменение и не двусмысленность — это юридическая норма. Россияне за рулём в Греции должны иметь IDP по греческому закону так же, как греки за рулём в большинстве не-ЕС стран обязаны иметь IDP.',
			},
			{
				icon: 'ph:translate-bold',
				title: 'Алфавитный разрыв',
				text: 'Греческие власти работают на греческом — со своим отдельным алфавитом. Российские права — на кириллице. Ни греческий, ни кириллица не читаются носителем другого. Российские права на проверке греческой полиции — это документ, который офицер не может верифицировать. IDP или переводной компаньон даёт англоязычное представление данных прав — а английский и есть универсальный второй язык на греческих прокатных стойках и проверках в туристических зонах, что решает вопрос верификации за секунды.',
			},
		],
	},

	rules: {
		heading: 'Правила вождения в Греции, о которых стоит знать',
		lead: 'Правостороннее движение, как в России. Большинство правил привычно. Штрафы за ремни и обновление контроля скорости 2025 — выпадают.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Сторона движения', value: 'ПРАВАЯ', note: 'Как в России — комфортно' },
			{ icon: 'mdi:speedometer', label: 'В городе', value: '50 км/ч', note: '30 км/ч в жилых и пешеходных зонах' },
			{ icon: 'mdi:road-variant', label: 'Загородные дороги', value: '90 км/ч', note: 'Стандартные не-магистрали' },
			{ icon: 'mdi:speedometer-medium', label: 'Магистраль (Ethniki Odos)', value: '130 км/ч', note: 'Некоторые участки 110 км/ч — по знакам' },
			{ icon: 'mdi:beer-outline', label: 'Алкоголь', value: '0,05‰', note: '0,02‰ для водителей со стажем менее 2 лет' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон', value: 'Только hands-free', note: 'Активный контроль на городских постах' },
			{ icon: 'mdi:seatbelt', label: 'Ремни', value: '€350 за пассажира', note: 'Один из самых высоких штрафов за ремни в Европе' },
			{ icon: 'mdi:car-emergency', label: 'Обязательно в машине', value: 'Знак + огнетушитель + аптечка', note: 'В арендной всё включено — проверьте до выезда' },
		],
	},

	fines: {
		heading: 'Штрафы 2026 за частые нарушения',
		lead: 'Греческие штрафы нельзя оплатить наличными офицеру на месте — оплата в банке или официальном пункте. Камерные штрафы уходят прокатной компании. Обновление конца 2025 расширило покрытие камер и ужесточило санкции для повторных нарушителей.',
		colViolation: 'Нарушение',
		colAmount: 'Штраф',
		colNote: 'Примечание',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Вождение без IDP (российские права)', amount: '€200–400', note: 'Считается вождением без действительных прав; страховка аннулируется', severity: 'high' },
			{ icon: 'mdi:office-building', label: 'Прокатная компания выдала без проверки IDP', amount: '€1 000 (компании)', note: 'Отдельный штраф конторе по обновлению кодекса 2018', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Превышение 0–30 км/ч (город)', amount: '€40–100', note: 'Обновление 2025 — расширенное покрытие камер', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Превышение 30–50 км/ч', amount: '€100–350', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Превышение 50+ км/ч (магистраль)', amount: '€350–750', note: 'Санкции для повторных нарушителей ужесточены в 2025', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'Без ремня', amount: '€350 за пассажира', note: 'Водитель отвечает за пассажиров до 16 лет', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон в руках', amount: '€100–350', note: '', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'Пьяное вождение свыше 0,05‰', amount: 'до €1 200', note: 'Лишение прав; уголовка свыше 0,08‰', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Проезд на красный', amount: '€200–400', note: '', severity: 'med' },
		],
		caption: 'Источники: Греческий дорожный кодекс (Κώδικας Οδικής Κυκλοφορίας); обновление Дорожного закона ноябрь 2025; греческий Закон 4850/2021 (список исключений по IDP); RAC Greece driving guide (обновление 2025).',
	},

	lez: {
		heading: 'Особенности греческих островов — где аренда применяется жёстче всего',
		badge: 'Особенности Греции',
		lead: 'Материк и острова — единый правовой режим, но реалии разные. На островах вариант «найдём другую контору» обычно не работает.',
		zones: [
			{
				city: 'Крит (Ираклион / Ханья)',
				name: 'Самый посещаемый остров для россиян',
				description: 'Все крупные сети в аэропортах (Hertz, Avis, Sixt, Europcar) применяют требование IDP единообразно — €1 000 штрафа компании касается местных контор в Ираклионе и Старом городе Ханьи в равной мере. Дороги критского нагорья узкие, часто без центральной разметки, со скальными обрывами и без барьера на внешней стороне. Указанные лимиты — формальный максимум; геометрия дороги требует значительно более низких скоростей.',
				fine: '€1 000 — водителю + €1 000 конторе',
				note: 'Сделайте IDP Companion до брони. Местные критские конторы привычны к русскоязычным клиентам, но применяют закон идентично аэропортовым сетям.',
			},
			{
				city: 'Санторини / Миконос',
				name: 'Ограниченное предложение, жёсткое применение',
				description: 'Ограниченное число прокатных контор на каждом острове. Машина по сути обязательна, чтобы доехать до Ии, Акротири, южных пляжей из Фиры или внешних пляжей Миконоса. Все конторы требуют IDP для не-ЕС, не-исключённых прав. Запасной конторы нет — у острова конечный парк машин.',
				fine: '€1 000 — водителю + €1 000 конторе',
				note: 'Подъездные дороги к кальдере Санторини — без барьеров на скальных краях. Указанные лимиты — максимум, не цель. Ночное вождение по этим дорогам опасно для тех, кто не знаком с рельефом.',
			},
			{
				city: 'Афины (материк)',
				name: 'Проверки греческой полиции + парковка в центре',
				description: 'Hertz, Avis, Sixt, Europcar в аэропорту Афин (ATH). Все требуют IDP для российской кириллицы по обязательству 2018 года. Проверки греческой полиции в центре Афин — рутинные; английский на IDP Companion свободно читают офицеры в туристических зонах. В центре Афин платные зоны парковки; у Синтагмы и Монастираки места очень мало. Большинство туристов паркуется вне исторического центра.',
				fine: '€1 000 — водителю + €1 000 конторе',
				note: 'Привезти машину на пароме между островами и с материка — возможно. Бронирование уточняйте сильно заранее на пиковое лето.',
			},
		],
		tip: 'Практическое правило для Греции: вопрос IDP закрывается до вылета. У греческих стоек проката €1 000 личного риска, если они срежут угол. У островных контор нет «запасной» конторы, куда вас отправить. Проверки полиции в Афинах — рутина. Две минуты онлайн до отлёта снимают и спор на стойке, и остановку на проверке.',
	},

	alphabet: {
		heading: 'Греческие дорожные знаки и фразы, которые встретятся',
		lead: 'Греческие знаки используют греческий алфавит вместе с латинской транслитерацией на магистралях. Вне магистралей доминирует греческое письмо — несколько распространённых знаков сильно помогают.',
		badge: 'Греческое письмо',
		examples: [
			{ sign: 'ΣΤΟΠ', latin: 'STOP', meaning: 'Стоп' },
			{ sign: 'ΚΕΝΤΡΟ', latin: 'KENTRO', meaning: 'Центр города' },
			{ sign: 'ΕΞΟΔΟΣ', latin: 'EXODOS', meaning: 'Выезд' },
			{ sign: 'ΕΘΝΙΚΗ ΟΔΟΣ', latin: 'ETHNIKI ODOS', meaning: 'Национальная магистраль' },
			{ sign: 'ΑΡΓΑ', latin: 'ARGA', meaning: 'Медленно' },
			{ sign: 'ΠΡΟΣΟΧΗ', latin: 'PROSOCHI', meaning: 'Внимание / осторожно' },
			{ sign: 'ΜΟΝΟΔΡΟΜΟΣ', latin: 'MONODROMOS', meaning: 'Одностороннее движение' },
			{ sign: 'ΑΠΑΓΟΡΕΥΕΤΑΙ Η ΣΤΑΘΜΕΥΣΗ', latin: 'APAGOREVETAI I STATHMEFSI', meaning: 'Парковка запрещена' },
		],
		helpsHeading: 'Чем IDP Companion помогает преодолеть алфавитный разрыв',
		helps: [
			'Показывает ваши ФИО, адрес и категории прав на английском — универсально читается греческими прокатными агентами и офицерами полиции в туристических зонах',
			'Плюс те же данные на французском, испанском, арабском, немецком, итальянском и ещё 5 распространённых языках набора Женевской конвенции 1949 года',
			'Снимает основное возражение прокатного агента — «мы не можем верифицировать эти права» — это проблема в €1 000 для самого агента',
			'Возите распечатанный IDP Companion как физическую бумагу — на проверках греческой полиции ожидают именно её',
		],
		outro: 'Греческий и кириллица — разные алфавиты: носитель одного без подготовки не прочитает другой. Английский — практический мост: каждый греческий прокатный агент и офицер в туристической зоне читает его свободно, и английский есть на каждом IDP Companion.',
	},

	phrases: {
		heading: 'Полезные греческие фразы для проката и проверок',
		lead: 'В туристической Греции работает английский — на каждой крупной прокатной стойке. Эти фразы покрывают проверки греческой полиции и островные ситуации, где доминирует греческий.',
		items: [
			{ phrase: 'Ορίστε η άδεια οδήγησής μου', translation: 'Вот мои водительские права', context: 'Произносится «Oriste i athia othighisis mou». Передача документов на любой проверке' },
			{ phrase: 'Και το έγγραφο μετάφρασης', translation: 'А вот переводной документ', context: 'Произносится «Ke to engrafo metafrasis». Показ IDP Companion рядом с российскими правами' },
			{ phrase: 'Είμαι Ρώσος / Ρωσίδα τουρίστας', translation: 'Я российский турист (м / ж)', context: 'Произносится «Ime Rosos / Rositha turistas». Обозначает контекст на любой проверке' },
			{ phrase: 'Δεν καταλαβαίνω ελληνικά', translation: 'Я не понимаю по-гречески', context: 'Произносится «Then katalaveno elinka». В туристических зонах большинство офицеров переходит на английский' },
			{ phrase: 'Υπάρχει κάποιο πρόβλημα;', translation: 'Есть какая-то проблема?', context: 'Произносится «Iparhi kapio provlima?». Вежливое начало диалога на любой остановке' },
			{ phrase: 'Έχω ασφάλεια', translation: 'У меня есть страховка', context: 'Произносится «Eho asfalia». При ДТП — предъявите карточку страховки рентала' },
			{ phrase: 'Πρέπει να καλέσω την εταιρεία ενοικίασης', translation: 'Мне нужно позвонить в прокатную компанию', context: 'Произносится «Prepi na kaleso tin eteria enikisis». При проблемах с машиной' },
			{ phrase: 'Ευχαριστώ πολύ', translation: 'Большое спасибо', context: 'Произносится «Efharisto poli». После окончания остановки — базовая вежливость окупается' },
		],
	},

	howTo: {
		heading: 'Как подготовиться к вождению в Греции россиянину',
		lead: 'У греческих стоек проката €1 000 личного риска, если они пропустят проверку IDP. Самая разумная подготовка — снять вопрос полностью до вылета.',
		schemaName: 'Как подготовиться к вождению в Греции россиянину',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Получите IDP Companion как многоязычный переводной документ',
				text: '$35 — многоязычный цифровой PDF с переводом российских прав на английский (рабочий язык на всех крупных греческих прокатных стойках и проверках в туристических зонах), плюс французский, испанский, арабский, немецкий, итальянский и ещё 5 распространённых языков. Готов за 2 минуты онлайн, действует 1–5 лет. Снимает вопрос на стойке проката ещё до подхода к ней.',
			},
			{
				title: 'Проверьте категории российских прав',
				text: 'Для аренды скутера и квадроцикла на Миконосе, Санторини и Крите ваши российские права должны нести категорию A. Проверьте обратную сторону карточки прав. IDP Companion отражает то, что в правах есть — он не создаёт категорию, которой нет.',
			},
			{
				title: 'Распечатайте IDP Companion перед вылетом',
				text: 'На обычной бумаге дома или в любой гостинице после прилёта. На проверках греческой полиции ожидают физическую бумагу. Сотрудники прокатной стойки предпочитают держать в руках распечатанную копию рядом с физическими правами.',
			},
			{
				title: 'Носите весь набор документов вместе',
				text: 'Физические российские права + IDP Companion (распечатанный) + загранпаспорт со штампом Шенгена + договор аренды + карточка страховки. Одна папка, легко достаётся на любой проверке.',
			},
			{
				title: 'Проверьте обязательное оборудование в машине',
				text: 'Греческий закон требует знак аварийной остановки, огнетушитель и аптечку в машине постоянно. В арендных всё включено по умолчанию — убедитесь, что фактически на месте, до выезда. Если что-то пропадёт к возврату, контора может выставить за замену.',
			},
		],
	},

	honesty: {
		heading: 'Где IDP Companion помогает в Греции — без преувеличений',
		lead: 'Греческое применение на стойках проката — самое последовательное в Европе. Скажем прямо, что IDP Companion делает и чего не делает.',
		is: {
			title: 'Что такое IDP Companion',
			items: [
				'Многоязычный цифровой PDF с переводом данных российских прав на английский, французский, испанский, арабский, немецкий, итальянский и ещё 5 распространённых языков набора Женевской конвенции 1949 года',
				'Сделан, чтобы российские права становились читаемыми по-английски для сотрудников каждой крупной греческой прокатной стойки и для офицеров полиции в туристических зонах',
				'Готов за минуты после загрузки прав и автоматической верификации',
				'Цена: $35 (1 год), $45 (3 года), $55 (5 лет) — разовая оплата, без подписок',
			],
		},
		isNot: {
			title: 'Чем IDP Companion НЕ является',
			items: [
				'Не государственный IDP по Женевской конвенции 1949 года',
				'Сам по себе не действителен — носить только вместе с физическими российскими правами',
				'Не защищает от штрафа €350 за ремни или других штрафов за нарушения движения — они применяются независимо от документов',
			],
		},
		helps: {
			title: 'Когда IDP Companion помогает россиянам в Греции',
			items: [
				'На каждой крупной стойке проката — двойной штраф €1 000 заставляет агентов проверять без исключений',
				'На проверках греческой полиции в туристических зонах — английский на IDP Companion свободно читают офицеры в центре Афин, Ираклионе, на Родосе',
				'У небольших островных контор на Санторини, Миконосе, Крите и Родосе',
				'При страховом разбирательстве после ДТП — английский перевод подтверждает действительность прав для иска',
			],
		},
		needOfficial: {
			title: 'Документы, которые волнуют местный закон',
			items: [
				'Физические российские права — собственно разрешение на вождение (это ничем не заменяется)',
				'Загранпаспорт со штампом Шенгенской зоны — греческие офицеры проверяют оба на любой остановке',
				'Страховка по аренде — покрытие указано в договоре; держите карточку в машине',
				'Оборудование в машине: знак аварийной остановки, огнетушитель, аптечка (в арендной всё включено)',
			],
		},
		pattern:
			'Что реально берут с собой подготовленные российские туристы в Грецию: физические российские права + IDP Companion (распечатанный) + загранпаспорт + штамп Шенгена + договор аренды + карточка страховки. Переводной компаньон закрывает проблему алфавитного разрыва, которую сама книжка IDP не закрывает. Две минуты подготовки, $35 — и снят и спор на прокатной стойке, и шаг верификации в полиции.',
	},

	renting: {
		heading: 'Аренда машины в Греции с российскими правами — особенности островов',
		lead: 'Греческие прокатные политики единообразно жёсткие из-за €1 000 штрафа компании по обновлению Дорожного кодекса 2018 года. Крупные сети и островные конторы применяют идентично.',
		chains: [
			{ name: 'Hertz, Avis, Sixt, Europcar (Афины, Ираклион, Родос)', policy: 'IDP обязателен для российской кириллицы по обязательству 2018 года. С 21 года; в части контор — доплата для водителей младше 23' },
			{ name: 'Местные критские конторы (Ираклион, Старый город Ханьи)', policy: 'Привычны к русскоязычным клиентам. €1 000 штрафа компании касается их в равной мере — применяют идентично аэропортовым сетям' },
			{ name: 'Конторы Санторини / Миконоса', policy: 'Ограниченное предложение, жёсткое применение. Запасной конторы нет — у острова конечный парк. Сделайте IDP до вылета' },
			{ name: 'Родос (RHO)', policy: 'Большое чартерное направление. Крупные и местные конторы в аэропорту. Применение IDP последовательное у обеих категорий' },
		],
		tipsHeading: 'Практические советы для Греции',
		tips: [
			'Минимальный возраст 21 во всех крупных сетях; 23 для отдельных категорий машин (большие SUV, премиум)',
			'Механика — стандарт; автомат дороже и реже на островах',
			'Депозит по карте обязателен; обычные холды €500–€2 000',
			'Топливо: на Крите и Родосе покрытие плотное; на Санторини и небольших островах — меньше; заправляйтесь перед вылазками в дальние районы',
			'Островные дороги (подъезд к кальдере Санторини, критское нагорье, север Корфу): узкие, без барьеров на скальных краях; указанные лимиты — максимум, не цель',
			'Парковка в центре Афин: платные зоны; у Синтагмы и Монастираки очень тесно; большинство паркуется вне исторического центра',
			'Привезти машину на пароме между островами — возможно и доступно на многих маршрутах; уточняйте бронирование сильно заранее на пиковое лето',
		],
	},

	outcomes: {
		heading: 'Что бывает, если ехать без IDP — реальные сценарии',
		lead: 'Реалистичные сценарии для российских водителей в Греции, по убыванию частоты.',
		items: [
			{
				severity: 'low',
				frequency: 'Очень часто с IDP',
				label: 'Аренда оформлена без вопросов',
				text: 'Полный набор документов, агент верифицирует, ключи на руках. Ожидаемый исход — и единственный, который контора может себе позволить.',
			},
			{
				severity: 'high',
				frequency: 'Очень часто без IDP',
				label: 'Стойка проката отказывается выдать машину',
				text: 'Двойной штраф €1 000 — ни один агент не выдаст ключи. На островах нет «запасной» конторы. Подтверждение брони ничего не значит без IDP — агент скажет вам это спокойно, и вы будете стоять у стойки, пока очередь обходит вас.',
			},
			{
				severity: 'low',
				frequency: 'Иногда',
				label: 'Проверка греческой полиции, IDP есть',
				text: 'Английский на IDP Companion верифицируется за секунды — свободно читается офицерами в туристических зонах. Рутинная остановка проходит гладко.',
			},
			{
				severity: 'high',
				frequency: 'Реже',
				label: 'Проверка греческой полиции, IDP нет',
				text: 'Считается вождением без действительных прав. Штраф водителю €200–400, страховка аннулируется в момент, когда офицер фиксирует отсутствие документа.',
			},
			{
				severity: 'high',
				frequency: 'Иногда',
				label: 'Штраф за ремни — €350 за пассажира',
				text: '€350 за пассажира, водитель отвечает за всех младше 16. Применяется единообразно на материке и островах. Один из самых высоких штрафов за ремни в Европе.',
			},
			{
				severity: 'med',
				frequency: 'Иногда',
				label: 'Штраф с камеры скорости',
				text: 'Автоматический, списывается с прокатного депозита, начинается от €40. Обновление конца 2025 расширило покрытие камер и ужесточило санкции для повторных нарушителей.',
			},
			{
				severity: 'high',
				frequency: 'Редко при подготовке',
				label: 'Пьяное вождение свыше 0,05‰',
				text: 'Штраф до €1 200, обязательное лишение прав, уголовка свыше 0,08‰.',
			},
		],
		math: 'IDP Companion — $35. Двойной штраф в Греции — €2 000 в сумме: €1 000 водителю + €1 000 конторе. Агент, пропустивший проверку, лично попадает в нарушение. Эта арифметика и есть причина, по которой агент на стойке никогда не моргает.',
	},

	faq: {
		heading: 'Частые вопросы',
		items: [
			{
				id: 1,
				question: 'Россиянам в Греции реально нужен IDP?',
				answer: 'Да. Греческий Закон 4850/2021 перечисляет страны, чьи граждане могут ездить без IDP, — Великобритания, США, Канада, Австралия и страны ЕС/ЕЭП. России в этом списке нет. Российские туристы должны иметь действующий IDP вместе с национальными правами по греческому закону.',
			},
			{
				id: 2,
				question: 'Почему IDP так строго применяют на греческих прокатных стойках?',
				answer: 'Потому что прокатная компания получает €1 000 штрафа по обновлению греческого Дорожного закона 2018 года, если выдала машину туристу, которому по закону нужен IDP, а его нет. Штрафуют и водителя, и компанию одновременно. У каждого агента есть прямая финансовая причина проверять — применение не на усмотрение.',
			},
			{
				id: 3,
				question: 'IDP Companion — это то же, что государственный IDP?',
				answer: 'Нет. Государственный IDP — официальная книжка по Женевской конвенции 1949 года, выданная уполномоченным национальным органом (в России — РОСАВТОКЛУБ). IDP Companion — частный многоязычный переводной документ с данными ваших российских прав на английском, французском, испанском, арабском и ещё 7 распространённых языках набора Женевской конвенции 1949 года. Большинство крупных греческих контор и все островные конторы принимают IDP Companion как требуемый перевод — уточняйте у конкретной до брони, если хотите подтверждение в письменном виде.',
			},
			{
				id: 4,
				question: 'Какой штраф водителю за вождение без IDP в Греции?',
				answer: 'Вождение без необходимых документов считается вождением без действительных прав. Штраф водителю €200–400 плюс аннулирование страховки. Отдельный €1 000 штрафа компании выписывается конторе, не водителю.',
			},
			{
				id: 5,
				question: 'Какое оборудование должно быть в арендной машине?',
				answer: 'Греческий закон требует знак аварийной остановки, огнетушитель и аптечку в машине постоянно. В арендных всё включено. Если что-то пропадёт к возврату, контора может выставить за замену. Убедитесь, что фактически на месте, до выезда.',
			},
			{
				id: 6,
				question: 'Алкогольный лимит такой же, как в России?',
				answer: 'Нет. В России 0,00‰ (нулевая толерантность). В Греции 0,05‰ для опытных водителей и 0,02‰ для тех, у кого стаж меньше 2 лет. Греческий лимит чуть мягче российской нулевой нормы — но один бокал вина легко подтягивает к нему, особенно у легковесных людей.',
			},
			{
				id: 7,
				question: 'Чем островные дороги в Греции отличаются от материковых?',
				answer: 'Островные дороги — особенно на критском нагорье, при подъезде к кальдере Санторини и на северных прибрежных маршрутах Корфу — узкие, часто без центральной разметки, и нередко идут вдоль скальных краёв без барьеров. Указанные лимиты технически — максимум; геометрия дороги требует значительно более низких скоростей на большинстве живописных маршрутов. Ночное вождение по ним по-настоящему опасно для тех, кто не знает рельеф.',
			},
			{
				id: 8,
				question: 'Можно ли совмещать Грецию с другими направлениями в одной поездке?',
				answer: 'Да — многие россияне совмещают Грецию с Турцией, Египтом или Кипром. IDP Companion покрывает все эти направления одним документом. Греция и Турция иногда совмещаются через эгейские паромные маршруты. Английский, арабский, французский, испанский и другие языки набора Женевской 1949 на IDP Companion означают, что одного документа хватает на стойках проката и проверках полиции на стандартном круге Россия–Греция–Турция или Россия–Греция–Египет.',
			},
			{
				id: 9,
				question: 'Можно ли получить IDP уже в Греции?',
				answer: 'Нет. International Driving Permit выдаётся только в стране, где выданы национальные права — греческие власти не выдают их иностранным туристам. Для российских прав это значит IDP по Женевской 1949 в России до отъезда. IDP Companion можно сгенерировать онлайн откуда угодно как многоязычный переводной компаньон — печатается в любой гостинице за минуты после оплаты.',
			},
			{
				id: 10,
				question: 'Сколько действует IDP Companion для поездок в Грецию?',
				answer: 'На выбор: 1 год ($35), 3 года ($45), 5 лет ($55). Срок привязан к вашим российским правам — если они истекают, истекает и компаньон. Одна покупка покрывает Грецию плюс Египет, Турцию, Кипр, Таиланд и любые другие направления, которые вы посетите за выбранный период.',
			},
		],
	},

	related: {
		heading: 'Похожие гиды',
		lead: 'Соседние европейские курорты и южные направления, где российская кириллица упирается в тот же сценарий — Турция, Кипр, Египет.',
		comingSoonLabel: 'Скоро',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Россия → Таиланд', status: 'В эфире', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Россия → Египет', status: 'В эфире', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Россия → Индонезия', status: 'В эфире', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Россия → Турция', status: 'В эфире', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'США → Греция', status: 'В эфире', href: '/idp-for-us-drivers-in-greece/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'США → Испания', status: 'В эфире', href: '/idp-for-us-drivers-in-spain/' },
		],
	},

	finalCta: {
		heading: 'Готовы оформить IDP Companion?',
		text: 'Многоязычный PDF с английским, французским, испанским, арабским, немецким, итальянским и ещё 5 распространёнными языками набора Женевской конвенции 1949 года — готов за 2 минуты по вашим реальным российским правам. Печатайте дома или из любой гостиницы. Действует 1–5 лет — покроет эту поездку и следующие в Грецию, Египет, Турцию, Кипр, Таиланд. $35 / 1 год · $45 / 3 года · $55 / 5 лет. Разовый платёж, без подписок.',
		button: 'Начать оформление',
	},

	legal: {
		disclaimerHeading: 'Дисклеймер',
		disclaimer:
			'IDP Companion — это частный многоязычный переводной документ. Мы не аффилированы с греческой полицией (Ελληνική Αστυνομία) или Министерством инфраструктуры и транспорта Греции. IDP Companion не является государственным International Driving Permit по Женевской конвенции 1949 года или Венской конвенции 1968 года; в России к уполномоченным эмитентам национальных IDP относится в том числе Всероссийский Автомобильный Клуб (РОСАВТОКЛУБ). IDP Companion используется только вместе с оригиналом ваших российских прав.',
		sourcesHeading: 'Источники',
		sources: [
			'Греческий Закон 4850/2021 — список исключений по IDP (Официальный вестник Греческой Республики)',
			'Греческий Дорожный кодекс (Κώδικας Οδικής Κυκλοφορίας) — обновление 2018, двойной штраф за аренду без IDP',
			'Обновление Дорожного закона ноябрь 2025 — ужесточённые санкции по скорости',
			'RAC — Driving in Greece guide (rac.co.uk, обновление 2025)',
			'Публичные руководства РОСАВТОКЛУБа',
		],
	},

	og: {
		originName: 'Россия',
		destinationName: 'Греция',
	},
};

export const russiaGreeceCopy: Record<'en' | 'ru', CountryPairCopy> = { en, ru };
