/**
 * Country-pair content: United States → Spain.
 * Locales: en + es. (Spanish included to capture Hispanic-American audience
 * + Latin Americans visiting heritage Spain — distinct sub-audience with
 * commercial intent. Castilian Spanish, formal register.)
 *
 * Killer angles:
 *  - Spain ratified 1949 Geneva but NOT 1968 Vienna — AAA IDP format matches
 *    what Spain accepts (juicy SEO + legal-correctness signal).
 *  - Madrid Central + Barcelona ZBE + Sevilla ZBE (low-emission zones, the
 *    Spanish equivalent of Italian ZTL).
 *  - Digital IDPs explicitly rejected by Guardia Civil — physical AAA booklet only.
 */

import type { CountryPairCopy } from './russia-thailand';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Spain: 2026 Guide to Rental Refusals, Guardia Civil, and Madrid/Barcelona ZBEs',
		description:
			'Driving in Spain on a US license? Spanish law requires an International Driving Permit. Skip it and risk fines from Guardia Civil, refusals at Europcar/Fox, and voided insurance. Honest 2026 guide.',
		ogTitleShort: 'IDP for US Drivers in Spain',
		ogSubtitle: '2026 Guide — Guardia Civil, ZBEs, rentals',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Spain',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'US → Spain · 2026 Guide',
		title: 'IDP for US Drivers in Spain: 2026 Guide',
		lead: "You're flying to Madrid, Barcelona, Costa del Sol, or one of the Canary Islands. Your US license is in your wallet, the rental booking confirmation says the car will be ready at the airport. Here's a number most American travelers don't see until it's too late: Spanish DGT issues 20,000+ fines per year for driving with a license that isn't valid in Spain — and the vast majority go to tourists who simply forgot to bring an International Driving Permit.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — you need an IDP in Spain',
		text: "Spanish law explicitly requires US license holders to carry an International Driving Permit alongside their domestic license. Spain ratified the 1949 Geneva Convention (which the US uses) but not the 1968 Vienna Convention, so AAA-issued IDPs are the correct format. Without one: fines starting around €200 and reaching €500+ for first-time violations (DGT issues 20,000+ such fines yearly, mostly to non-EU tourists), refusals at Europcar and Fox Rent-a-Car, and voided insurance after any accident.",
	},

	tldr: {
		heading: 'US License + AAA IDP + IDP Companion: what does each one do in Spain?',
		lead: 'Spain is one of the strictest European countries on IDP enforcement. Most travelers carry all three documents — combined cost is less than half of a single Guardia Civil fine.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Spain',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Insufficient under Spanish law. Rental insurance void. Refused at Europcar and Fox Rent-a-Car. €200–€500 fine if checked by Guardia Civil.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'AAA / AATA Official IDP',
				whatItDoes: "Government-recognized printed booklet under the 1949 Geneva Convention — the format Spain accepts. Required at Guardia Civil checkpoints. Valid 1 year. Digital-only IDPs are NOT accepted by Spanish police.",
				cost: '$20',
				tone: 'official',
			},
			{
				document: 'IDP Companion (us)',
				whatItDoes: 'Multilingual digital PDF (Spanish + English + 6 other languages). Speeds up rental desks at smaller chains, hotel verifications, and informal checks. Carry alongside your US license — not a replacement for the AAA booklet at police checkpoints.',
				cost: '$35–55 (1–5 yr)',
				tone: 'companion',
			},
		],
		footnote: 'For Spain specifically, the AAA IDP is the primary legal-compliance document — Guardia Civil checkpoints are common in tourist areas. Add IDP Companion as the everyday-friction layer (rental desks, hotels, toll-booth language barriers).',
	},

	whyNotEnough: {
		heading: "Why your US license alone isn't enough in Spain",
		lead: 'Three reasons, ranked by how much trouble each causes you in practice.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal reason',
				text: "Spanish federal traffic regulations require non-EU drivers to carry both a domestic license AND a 1949 Geneva-format IDP. Spain ratified the 1949 Geneva Convention but not the 1968 Vienna Convention — which is actually convenient for US drivers, since AAA and AATA only issue 1949 Geneva IDPs. The format match is correct; the document is just legally required.",
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The insurance reason',
				text: 'Your rental insurance contract — including the Collision Damage Waiver you paid extra for — requires you to be "properly licensed under applicable law." For non-EU drivers in Spain, that means US license PLUS AAA IDP. Without the IDP, the insurer can void coverage entirely after an accident. You become personally liable for car damage (€2,000–€20,000), the other party\'s damages, and Spanish hospital costs (often paid upfront in cash for non-emergencies).',
			},
			{
				icon: 'ph:phone-x-bold',
				title: 'The digital-IDP trap',
				text: 'Several services market "instant digital IDPs" as if they replace the official AAA booklet. Spanish police explicitly reject these — Guardia Civil officers are trained to verify the physical 1949 Geneva booklet (gray paper cover, specific layout, affixed photo, AAA stamp). A PDF on your phone, even from a legitimate-looking service, will not pass this check.',
			},
		],
	},

	rules: {
		heading: 'Spain driving rules US drivers should know',
		lead: 'A few of these surprise drivers from the US. Take your first hour slow.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — no adjustment' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '~31 mph' },
			{ icon: 'mdi:road-variant', label: 'Highway / Motorway', value: '100 / 120 km/h', note: 'Point-to-point camera enforcement' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter for new drivers and pros' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned', note: '€200 + 6 license points' },
			{ icon: 'mdi:car-shift-pattern', label: 'Transmission', value: 'Manual default', note: 'Reserve automatic in advance — sells out fast' },
			{ icon: 'mdi:tshirt-v', label: 'Hi-vis vest', value: 'Mandatory', note: 'Worn when exiting on roadside; rental provides' },
			{ icon: 'mdi:lightbulb-on-outline', label: 'V-16 beacon', value: 'Required since 1 Jan 2026', note: 'Rental cars come equipped — verify on pickup' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Spain',
		lead: 'Pay within 20 days for a 50% discount; full amount applies after. Cash, credit, and debit accepted at police stations and post offices. International tourist disputes can be filed but require Spanish-language documentation and rarely succeed.',
		colViolation: 'Violation',
		colAmount: 'Standard fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP (non-EU)', amount: '€200–€500', severity: 'med', note: '€500 typical first-time. Higher for repeat offenses' },
			{ icon: 'mdi:speedometer', label: 'Speeding 20 km/h over', amount: '€100', severity: 'low', note: 'Camera-enforced' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 30+ km/h over', amount: '€300–€600', severity: 'high', note: 'Plus 2–6 license points' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€200', severity: 'med', note: '4 license points' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone while driving', amount: '€200', severity: 'med', note: '6 license points (increased 2022)' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.12% BAC', amount: '€500', severity: 'med', note: '4 license points' },
			{ icon: 'mdi:gavel', label: 'DUI above 0.12% BAC', amount: '€1,000', severity: 'high', note: '6 points + possible criminal prosecution' },
			{ icon: 'mdi:cancel', label: 'Refusing breathalyzer', amount: 'Criminal + 6 points', severity: 'high', note: 'Most serious documentation violation' },
			{ icon: 'mdi:tshirt-v', label: 'No high-visibility vest worn', amount: '€200', severity: 'low', note: 'When exiting vehicle on roadside' },
			{ icon: 'mdi:lightbulb-on-outline', label: 'No V-16 beacon (since 2026)', amount: '€80–€200', severity: 'low', note: 'Rental cars must have one — verify on pickup' },
		],
		caption: 'Statutory ranges from Dirección General de Tráfico (DGT). Camera-enforced fines arrive months later, processed through your rental company.',
	},

	lez: {
		heading: 'Madrid Central, Barcelona ZBE, Sevilla ZBE: low-emission zones US drivers stumble into',
		badge: 'Spain-specific',
		lead: 'Spanish cities have rolled out Zonas de Bajas Emisiones (ZBEs) — low-emission zones similar to Italian ZTLs. GPS routes you through them, cameras log your plate, and the bill arrives via your rental company months later. Most rental cars qualify, but you still need the right environmental sticker (etiqueta ambiental) visible on the windscreen.',
		zones: [
			{
				city: 'Madrid',
				name: 'Madrid Central / Madrid 360',
				description: 'Restricted central zone (the old Madrid Central, now Madrid 360). Active 24/7. Only vehicles with the correct DGT environmental sticker (B, C, ECO, or 0 Emissions) may enter the centre. Older vehicles without a sticker are banned outright. Cameras at every entry record license plates.',
				fine: '€90–€200 per entry',
				note: "Verify your rental's sticker (etiqueta) on pickup — most modern rentals have ECO or C labels.",
			},
			{
				city: 'Barcelona',
				name: 'Zona de Baixes Emissions (ZBE Rondes)',
				description: 'Low-emission zone covering most of Barcelona inside the Rondes ring road. Active Mon–Fri 7:00–20:00. Enforced via license-plate cameras. Older diesel and petrol vehicles without the right sticker are banned during these hours.',
				fine: '€100–€500',
				note: 'Most rental cars are sticker-compliant. Confirm with the agent before driving into central Barcelona.',
			},
			{
				city: 'Sevilla, Valencia, Málaga, Bilbao',
				name: 'Other ZBEs (under 2023 national mandate)',
				description: 'All Spanish cities of 50,000+ residents must implement a ZBE under the national Climate Change and Energy Transition Law (2021). Enforcement varies — some cities have soft launches, others (Sevilla in particular) actively fine. Coverage and hours differ by city.',
				fine: '€100–€200 typical',
				note: 'Check the specific city ZBE map before driving into its centre — Google "ZBE [city]" for current rules.',
			},
		],
		tip: 'Practical rule: in any major Spanish city, park outside the historic centre and walk in. Disable "shortest route" in your GPS — use "avoid restricted zones" if available. Multiple ZBE entries in one day = multiple separate fines, processed through your rental company with a €40–€50 admin fee on top.',
	},

	howTo: {
		heading: 'How to get an IDP for Spain',
		lead: 'For US citizens, only AAA and AATA can issue official 1949 Geneva IDPs — and the 1949 Geneva format is exactly what Spain accepts. The process is fast and inexpensive.',
		schemaName: 'How to get an International Driving Permit for Spain as a US citizen',
		duration: 'PT15M',
		cost: '20 USD',
		steps: [
			{
				title: 'Gather documents',
				text: 'Your valid US driver license, two original passport-style photos (2"×2"), and a completed AAA application form. AAA membership is not required.',
			},
			{
				title: 'Visit AAA in person or apply by mail',
				text: 'In-person at any AAA branch takes ~10–15 minutes — walk out with the IDP same-day. By mail takes 5–7 business days. AATA is the alternative organization with a similar process.',
			},
			{
				title: 'Pay the fee',
				text: '$20 for the IDP itself, plus $2 for the photos if AAA takes them on-site. Total cost: under $25.',
			},
			{
				title: 'Add IDP Companion (optional but recommended)',
				text: 'For $35 extra, generate a multilingual digital companion to handle rental desk friction quickly. Spanish translation included by default.',
			},
			{
				title: 'Carry both documents in Spain',
				text: 'AAA IDP (the physical printed booklet) + your original US license + (optional) IDP Companion + passport. Keep them together. The AAA booklet is what Guardia Civil verifies; the Companion speeds up rental desks.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits — honestly',
		lead: "There is a lot of misleading marketing in this space, especially for Spain. Here is what we are and what we are not.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your US license data into Spanish, English, French, German, Italian, and other widely-read languages',
				'Designed to reduce friction at car rental desks (especially smaller chains and walk-in counters), hotel check-ins, and informal verifications',
				'Generated in minutes after you upload your license and complete our verification',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not issued by AAA or AATA — the only US-authorized issuers',
				'Not accepted by Spanish Guardia Civil at police checkpoints (they require the physical AAA booklet)',
				'Not valid by itself — must be carried alongside your original US driver license',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Spain',
			items: [
				'At rental desks where the agent wants visual confirmation in Spanish (especially smaller chains, walk-in counters in Mallorca, the Canaries, and rural areas)',
				'At hotel check-ins and apartment rental verifications',
				'At toll-booth desks where staff prefer Spanish-language documentation',
				'As a backup if your AAA IDP is lost, damaged, or left in a previous rental',
				'When dealing with smaller businesses (boat rentals, bike tours, scooter rentals) where official IDPs are sometimes overkill',
			],
		},
		needOfficial: {
			title: 'When you need an official AAA/AATA IDP',
			items: [
				'For Guardia Civil checkpoints (this is the primary case in Spain)',
				'For Mossos d\'Esquadra (Catalan police) and Ertzaintza (Basque police) stops',
				'For insurance documentation after any accident, however minor',
				'For any rental at Europcar or Fox Rent-a-Car (they strictly enforce AAA IDP)',
				'For long stays approaching the 6-month residency threshold',
			],
		},
		pattern:
			'The recommended pattern for US travelers in Spain: get the AAA IDP for $20 to handle primary legal compliance, then add IDP Companion as a faster, multilingual translation aid for everyday situations. Together they cost less than half of a single Guardia Civil fine.',
	},

	renting: {
		heading: 'Renting a car in Spain as a US driver',
		lead: 'Major chains operate at all Spanish airports — Madrid Barajas, Barcelona El Prat, Málaga, Palma de Mallorca, Las Palmas, Tenerife, Valencia, Bilbao, Sevilla. Real-world enforcement varies dramatically by chain.',
		chains: [
			{ name: 'Europcar', policy: 'Strictly requires IDP at the desk. Will refuse rental without it. Confirmed enforced policy' },
			{ name: 'Fox Rent-a-Car', policy: 'Strictly requires IDP. Refusal common, especially at Mediterranean airports' },
			{ name: 'Hertz, Budget, Avis', policy: 'Often rent on US license alone at the desk, BUT contract still requires IDP — insurance void without it' },
			{ name: 'Sixt', policy: 'Generally requires IDP, especially for premium vehicles' },
			{ name: 'Goldcar / OK Mobility (Spanish chains)', policy: 'Strictness varies by branch and season — often request IDP' },
		],
		tipsHeading: 'Practical tips',
		tips: [
			'Book online with a major chain in advance, especially July–August. Walk-ins on Mallorca, Ibiza, and coastal areas have 3–5x markup',
			'Reserve automatic transmission specifically. Default is manual, automatic cars often sell out in summer',
			'Always select Collision Damage Waiver and Theft Protection. Spanish theft rates in Barcelona and Madrid make basic insurance insufficient',
			'Photograph the vehicle on pickup including odometer reading and every existing scratch — Spanish rental disputes about damage are common',
			'A €1,000 deposit hold is standard. Use a credit card with at least €2,500 available limit before pickup',
			'Refuel before returning. Rental gas station prices are 2–3x normal pump prices',
			'For Canary Islands rentals, carry both US license AND IDP — these are autonomous regions and enforcement can be even stricter than the mainland',
		],
	},

	phrases: {
		heading: 'Spanish phrases for police checkpoints and rental desks',
		lead: 'These eight phrases cover most of what an American driver actually says or hears on Spanish roads. Save the page or screenshot it.',
		items: [
			{ phrase: 'Permiso de conducir', translation: "Driver's license", context: 'What the officer asks for first' },
			{ phrase: 'Permiso internacional', translation: 'International Driving Permit', context: 'The IDP — pronounced "per-MEE-so in-ter-na-syo-NAL"' },
			{ phrase: 'Documentos, por favor', translation: 'Documents, please', context: 'Standard checkpoint opener — hand over your folder' },
			{ phrase: 'Soy turista americano', translation: "I'm an American tourist", context: 'Establishes context immediately, often softens the encounter' },
			{ phrase: 'No hablo español', translation: "I don't speak Spanish", context: 'Honest disclosure — most officers will switch to basic English' },
			{ phrase: 'Guardia Civil / Mossos / Ertzaintza', translation: 'Civil Guard / Catalan police / Basque police', context: 'Three different forces — Mossos handle Catalonia, Ertzaintza the Basque Country, Guardia Civil everywhere else' },
			{ phrase: 'Multa', translation: 'Fine / ticket', context: "What you'll be issued if documentation is incomplete" },
			{ phrase: 'Alquiler de coches', translation: 'Car rental', context: 'Useful at airports — pronounced "al-kee-LER de KO-ches"' },
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: 'Realistic outcomes ranked by frequency, based on US traveler reports from Spain in 2024-2026.',
		items: [
			{
				severity: 'low',
				frequency: '~75% of trips',
				label: 'Nothing happens',
				text: 'Trip ends without a document check or rental issue. This is the false sense of security that bites the other 25%.',
			},
			{
				severity: 'med',
				frequency: '~10% of attempts',
				label: 'Refused at the rental counter',
				text: "Agent at Europcar or Fox Rent-a-Car asks for IDP, you don't have one, rental is refused. You lose your reservation deposit and look for alternatives. During Mallorca high season, replacement bookings cost $400–$800 in surge pricing — or no automatic available at all.",
			},
			{
				severity: 'med',
				frequency: '~10% of trips',
				label: 'Stopped at Guardia Civil checkpoint',
				text: 'Fine of €200–€500 paid at the post office or police station within 20 days for the 50% discount. Your information is recorded in Spanish databases — subsequent visits flag you as previously sanctioned.',
			},
			{
				severity: 'high',
				frequency: '1–2% of trips',
				label: 'Minor accident',
				text: 'Insurance reviews documentation. Without IDP, coverage is voided. You become liable for car damage (€2,000–€20,000), the other party\'s damages, and Spanish hospital costs (often paid upfront in cash for non-emergencies).',
			},
			{
				severity: 'high',
				frequency: 'Rare but real',
				label: 'Serious accident',
				text: 'Combined effect of voided insurance, hospital bills paid in cash, potential criminal liability, and travel delays. The US Embassy in Madrid handles these cases regularly. The first question is usually: "did you have an IDP?"',
			},
		],
		math: 'A $20 AAA IDP plus a $35 IDP Companion = $55 total. The €500 first-time fine alone is roughly $540. Insurance void scenarios start at $2,000 and escalate. The asymmetry is overwhelming — and Spanish hospitals require upfront payment.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: "Do I really need an IDP if I'm only renting a car for one day in Mallorca?",
				answer: 'Yes. Spanish law applies to all foreign drivers regardless of trip length. Mallorca and other Balearic Islands have particularly active Guardia Civil checkpoints during summer high season. A one-day rental still requires both your US license and an IDP for legal compliance, and your insurance is voided without it.',
			},
			{
				id: 2,
				question: 'Can I get an IDP after I arrive in Spain?',
				answer: 'No. International Driving Permits must be issued in your country of residence before you travel. For US drivers, only AAA and AATA are authorized. AAA processes IDPs at most branches in 10–15 minutes for $20, or by mail in 5–7 business days. There is no Spanish equivalent issued to foreign visitors.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as the AAA International Driving Permit?',
				answer: 'No, and this distinction is especially important for Spain. The AAA IDP is a government-recognized document under the 1949 Geneva Convention, valid for 1 year, and accepted by Guardia Civil as proof of authorization. IDP Companion is a multilingual translation document that helps at rental desks and informal situations, but Spanish police explicitly require the physical AAA-issued booklet. For Spain, get both: AAA IDP for legal compliance, IDP Companion for everyday rental friction.',
			},
			{
				id: 4,
				question: 'Why do Spanish police reject digital IDPs?',
				answer: 'Spanish police are trained to verify the physical 1949 Geneva Convention booklet — gray paper cover, specific layout, affixed photograph, official AAA or AATA stamp. App-based or PDF "digital IDPs" do not match this format. This is not unique to Spain — most European police forces operate the same way. The Convention specifies a printed document.',
			},
			{
				id: 5,
				question: 'How long is IDP Companion valid?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). The validity is tied to your US license — if your domestic license expires, the companion expires with it. The 3-year option is popular among frequent travelers because it covers multiple Spain trips without renewing.',
			},
			{
				id: 6,
				question: 'What happens if I get fined by Guardia Civil for driving without IDP?',
				answer: 'Expect a fine of €200–€500 for first-time violation, paid at the police station or post office. Pay within 20 days for a 50% discount. Your information is recorded in Spanish databases — subsequent visits will flag you as previously sanctioned. Repeat violations escalate quickly and can include vehicle impoundment in extreme cases.',
			},
			{
				id: 7,
				question: 'Will my US car insurance cover me in Spain?',
				answer: 'Almost certainly not. Standard US auto insurance excludes international rentals. Credit card rental insurance (Visa, Amex) often has Spain restrictions or limited coverage. Always select the in-rental Collision Damage Waiver and Theft Protection unless you have written confirmation from your card issuer that Spanish rentals are covered. Without IDP, all coverage is voided regardless of source.',
			},
			{
				id: 8,
				question: "What's the deal with manual vs automatic transmission rentals in Spain?",
				answer: 'Spanish rental fleets are predominantly manual (stick shift). If you are not comfortable with manual transmission — common for Americans — reserve automatic specifically and book early. Automatic cars cost 30–50% more and are limited in supply. Walk-in availability for automatic in summer is essentially zero in tourist areas.',
			},
			{
				id: 9,
				question: 'What about ZBEs and city center restrictions in Spain?',
				answer: 'Several Spanish cities have implemented Low Emission Zones (Zonas de Bajas Emisiones, ZBE) — Madrid (Madrid 360), Barcelona (ZBE Rondes), Sevilla, Valencia, Málaga, and Bilbao. These require an environmental sticker (etiqueta ambiental) for entry during certain hours. Rental cars typically have these stickers, but verify before driving into central Madrid or Barcelona\'s Eixample district. Fines start at €90 and are processed through your rental company with admin fees.',
			},
			{
				id: 10,
				question: "What if I'm staying in Spain longer than 6 months?",
				answer: 'After 6 months of Spanish residency, your US license + IDP combination is no longer valid. You must obtain a Spanish driver\'s license through the local DGT office. Spain does NOT have a reciprocal license exchange with the US — you\'ll need to take both written and practical Spanish driving tests, complete a medical exam, and submit residency documentation. This catches many Americans relocating to Spain off guard.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travelers and Spain-bound drivers — coming soon.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Coming soon' },
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: 'Multilingual PDF (Spanish included), generated in minutes from your US license. For Spain specifically, pair with the official AAA IDP — Guardia Civil requires the physical booklet.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a multilingual translation document and is not affiliated with the American Automobile Association (AAA), American Automobile Touring Alliance (AATA), Spanish Dirección General de Tráfico (DGT), Guardia Civil, Mossos d'Esquadra, Ertzaintza, or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. It must be used alongside your original US driver license and, where required by Spanish law, alongside an official IDP issued by AAA or AATA.",
		sourcesHeading: 'Sources',
		sources: [
			'Dirección General de Tráfico (DGT) Spain — official guidelines for foreign drivers',
			'Spanish Federal Law on traffic, vehicle circulation, and road safety (Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial)',
			'1949 Geneva Convention on Road Traffic, UN Treaty Collection',
			'List of Contracting Parties to the 1968 Vienna Convention on Road Traffic, UNECE (confirms Spain not a ratifying state)',
			'AAA International Driving Permit application process',
			'European Road Safety Charter — Spain V-16 emergency beacon mandate (effective 1 January 2026)',
			'Madrid 360 / Barcelona ZBE Rondes — official municipal low-emission zone maps and regulations',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Spain',
	},
};

const es: CountryPairCopy = {
	seo: {
		title: 'Permiso Internacional para conductores estadounidenses en España: guía 2026',
		description:
			'¿Vas a conducir en España con licencia de EE.UU.? La ley exige llevar el Permiso Internacional de Conducción. Sin él: multas de la Guardia Civil, rechazos en Europcar/Fox y seguro anulado. Guía honesta 2026.',
		ogTitleShort: 'Permiso Internacional EE.UU. → España',
		ogSubtitle: 'Guía 2026 — Guardia Civil, ZBE, alquileres',
	},
	breadcrumbs: {
		home: 'Inicio',
		current: 'EE.UU. → España',
	},
	lastReviewed: 'Abril 2026',

	hero: {
		kicker: 'EE.UU. → España · Guía 2026',
		title: 'Permiso Internacional para conductores estadounidenses en España: guía 2026',
		lead: 'Ya tienes los vuelos a Madrid, Barcelona, la Costa del Sol o las Canarias. Tu licencia de Estados Unidos está en la cartera y la reserva del coche te espera en el aeropuerto. Esta es la cifra que la mayoría de viajeros no ve hasta que es tarde: la DGT emite más de 20.000 multas al año a conductores con permiso no válido en España, y la mayoría va a turistas que simplemente olvidaron traer su Permiso Internacional de Conducción.',
		ctaPrimary: 'Obtén IDP Companion en 2 min — $35',
		ctaSecondary: 'Ver todos los planes',
		badgeTop: 'Guía 2026',
		badgeBottom: 'Desde $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Sí — necesitas el Permiso Internacional en España',
		text: 'La normativa española exige a los conductores con licencia de EE.UU. llevar un Permiso Internacional de Conducción junto con su licencia nacional. España ratificó la Convención de Ginebra de 1949 (la que utiliza EE.UU.) pero no la de Viena de 1968, por lo que los IDP emitidos por AAA son exactamente el formato correcto. Sin él: multas desde 200 € hasta más de 500 € en primera infracción (la DGT emite 20.000+ al año, casi todas a turistas extracomunitarios), rechazos en Europcar y Fox Rent-a-Car, y seguro anulado tras cualquier accidente.',
	},

	tldr: {
		heading: 'Licencia de EE.UU. + IDP de AAA + IDP Companion: ¿qué hace cada documento en España?',
		lead: 'España es uno de los países europeos más estrictos en cuanto al Permiso Internacional. La mayoría de viajeros lleva los tres documentos — el coste combinado es menor que la mitad de una sola multa de la Guardia Civil.',
		colDocument: 'Documento',
		colWhatItDoes: 'Qué hace en España',
		colCost: 'Coste',
		rows: [
			{
				document: 'Licencia de conducir de EE.UU. (sola)',
				whatItDoes: 'Insuficiente según la normativa española. El seguro de alquiler queda anulado. Rechazada en Europcar y Fox Rent-a-Car. Multa de 200–500 € si la Guardia Civil la solicita.',
				cost: 'Ya la tienes',
				tone: 'neutral',
			},
			{
				document: 'IDP oficial de AAA / AATA',
				whatItDoes: 'Cuadernillo impreso reconocido bajo la Convención de Ginebra de 1949 — el formato que España acepta. Obligatorio en los controles de la Guardia Civil. Validez de 1 año. Los IDP digitales NO son aceptados por la policía española.',
				cost: '$20',
				tone: 'official',
			},
			{
				document: 'IDP Companion (nosotros)',
				whatItDoes: 'PDF digital multilingüe (español + inglés + 6 idiomas más). Agiliza el mostrador de alquiler en cadenas pequeñas, los registros en hoteles y las verificaciones informales. Se utiliza junto con tu licencia de EE.UU. — no sustituye al cuadernillo oficial en los controles policiales.',
				cost: '$35–55 (1–5 años)',
				tone: 'companion',
			},
		],
		footnote: 'Para España específicamente, el IDP de AAA es el documento principal de cumplimiento legal — los controles de la Guardia Civil son frecuentes en zonas turísticas. Añade IDP Companion como capa de fluidez diaria (mostradores de alquiler, hoteles, peajes con barrera idiomática).',
	},

	whyNotEnough: {
		heading: 'Por qué tu licencia de EE.UU. no es suficiente en España',
		lead: 'Tres motivos, ordenados por la cantidad de problemas que cada uno provoca en la práctica.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'El motivo legal',
				text: 'La normativa española exige a los conductores extracomunitarios llevar tanto la licencia nacional como un IDP en formato Convención de Ginebra de 1949. España ratificó la de Ginebra 1949 pero no la de Viena 1968 — algo en realidad conveniente para los conductores de EE.UU., porque AAA y AATA solo emiten IDP en formato Ginebra 1949. La coincidencia de formato es correcta; el documento simplemente es obligatorio.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'El motivo del seguro',
				text: 'El contrato de alquiler — incluida la franquicia reducida (CDW) que has pagado aparte — exige estar "debidamente habilitado conforme a la legislación aplicable". Para conductores extracomunitarios en España, eso significa licencia de EE.UU. MÁS IDP de AAA. Sin el IDP, la aseguradora puede anular la cobertura por completo tras un accidente. Pasas a ser responsable personal por los daños del coche (2.000–20.000 €), los daños a terceros y los gastos hospitalarios españoles (a menudo de pago anticipado en efectivo para no urgencias).',
			},
			{
				icon: 'ph:phone-x-bold',
				title: 'La trampa del IDP digital',
				text: 'Varios servicios comercializan "IDP digitales instantáneos" como si reemplazaran al cuadernillo oficial de AAA. La policía española los rechaza explícitamente — los agentes de la Guardia Civil están entrenados para verificar el cuadernillo físico de la Convención de Ginebra de 1949 (tapa de papel gris, maquetación específica, foto adherida, sello de AAA). Un PDF en el móvil, aunque parezca legítimo, no pasará este control.',
			},
		],
	},

	rules: {
		heading: 'Normas de circulación en España que conviene conocer',
		lead: 'Algunas normas sorprenden a los conductores acostumbrados a EE.UU. Conduce con calma la primera hora.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Lado de circulación', value: 'DERECHA', note: 'Igual que en EE.UU. — sin adaptación' },
			{ icon: 'mdi:speedometer', label: 'Velocidad urbana', value: '50 km/h', note: '~31 mph' },
			{ icon: 'mdi:road-variant', label: 'Autovía / Autopista', value: '100 / 120 km/h', note: 'Radares de tramo activos' },
			{ icon: 'mdi:beer-outline', label: 'Tasa de alcohol', value: '0,05% BAC', note: 'Más estricta para noveles y profesionales' },
			{ icon: 'mdi:cellphone-off', label: 'Uso del móvil', value: 'Prohibido', note: '200 € + 6 puntos' },
			{ icon: 'mdi:car-shift-pattern', label: 'Caja de cambios', value: 'Manual por defecto', note: 'Reserva automático con antelación — se agota' },
			{ icon: 'mdi:tshirt-v', label: 'Chaleco reflectante', value: 'Obligatorio', note: 'Al salir del vehículo en la vía; el alquiler lo incluye' },
			{ icon: 'mdi:lightbulb-on-outline', label: 'Baliza V-16', value: 'Obligatoria desde 1 ene 2026', note: 'Los coches de alquiler ya la traen — verifícalo al recoger' },
		],
	},

	fines: {
		heading: 'Multas 2026 por las infracciones más comunes en España',
		lead: 'Pago en 20 días con descuento del 50%; importe completo después. Aceptan efectivo, crédito y débito en comisarías y oficinas de Correos. Las reclamaciones de turistas internacionales son posibles pero requieren documentación en español y rara vez prosperan.',
		colViolation: 'Infracción',
		colAmount: 'Multa estándar',
		colNote: 'Notas',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Conducir sin IDP (no UE)', amount: '200–500 €', severity: 'med', note: '500 € es habitual en primera infracción. Más alta en reincidencias' },
			{ icon: 'mdi:speedometer', label: 'Exceso de velocidad +20 km/h', amount: '100 €', severity: 'low', note: 'Por radar' },
			{ icon: 'mdi:speedometer-medium', label: 'Exceso de velocidad +30 km/h', amount: '300–600 €', severity: 'high', note: '2–6 puntos del carné' },
			{ icon: 'mdi:traffic-light', label: 'Saltarse un semáforo en rojo', amount: '200 €', severity: 'med', note: '4 puntos del carné' },
			{ icon: 'mdi:cellphone-off', label: 'Uso del móvil al volante', amount: '200 €', severity: 'med', note: '6 puntos (reforma de 2022)' },
			{ icon: 'mdi:beer-outline', label: 'Alcoholemia 0,05–0,12%', amount: '500 €', severity: 'med', note: '4 puntos del carné' },
			{ icon: 'mdi:gavel', label: 'Alcoholemia superior a 0,12%', amount: '1.000 €', severity: 'high', note: '6 puntos + posible vía penal' },
			{ icon: 'mdi:cancel', label: 'Negativa a la prueba de alcoholemia', amount: 'Penal + 6 puntos', severity: 'high', note: 'La infracción documental más grave' },
			{ icon: 'mdi:tshirt-v', label: 'Sin chaleco reflectante puesto', amount: '200 €', severity: 'low', note: 'Al bajar del vehículo en la vía' },
			{ icon: 'mdi:lightbulb-on-outline', label: 'Sin baliza V-16 (desde 2026)', amount: '80–200 €', severity: 'low', note: 'Los alquileres deben llevarla — verifica al recoger' },
		],
		caption: 'Importes según la Dirección General de Tráfico (DGT). Las multas por radar llegan meses después por correo y se procesan a través de la empresa de alquiler.',
	},

	lez: {
		heading: 'Madrid Central, ZBE Barcelona y otras ZBE: trampa para turistas estadounidenses',
		badge: 'Específico de España',
		lead: 'Las ciudades españolas han implantado Zonas de Bajas Emisiones (ZBE) — el equivalente español a las ZTL italianas. El GPS suele dirigirte hacia el centro, las cámaras registran tu matrícula y la multa llega meses después a través de la empresa de alquiler. La mayoría de coches alquilados cumple, pero la pegatina ambiental (etiqueta DGT) debe estar visible en el parabrisas.',
		zones: [
			{
				city: 'Madrid',
				name: 'Madrid Central / Madrid 360',
				description: 'Zona restringida del centro (la antigua Madrid Central, ahora Madrid 360). Activa 24/7. Solo pueden circular vehículos con la etiqueta ambiental adecuada (B, C, ECO o Cero Emisiones). Los vehículos antiguos sin etiqueta tienen prohibida la entrada. Cámaras en cada acceso registran las matrículas.',
				fine: '90–200 € por entrada',
				note: 'Verifica la etiqueta de tu coche de alquiler al recogerlo — la mayoría de modelos modernos lleva ECO o C.',
			},
			{
				city: 'Barcelona',
				name: 'Zona de Baixes Emissions (ZBE Rondes)',
				description: 'Zona de bajas emisiones que cubre la mayor parte de Barcelona dentro de las Rondas. Activa lunes a viernes de 7:00 a 20:00. Vigilada por cámaras de matrícula. Los diésel y gasolina antiguos sin etiqueta tienen restringida la entrada en ese horario.',
				fine: '100–500 €',
				note: 'La mayoría de alquileres cumple. Confírmalo con el agente antes de circular por el centro de Barcelona.',
			},
			{
				city: 'Sevilla, Valencia, Málaga, Bilbao',
				name: 'Otras ZBE (mandato nacional 2023)',
				description: 'Toda ciudad española con más de 50.000 habitantes debe implantar una ZBE bajo la Ley de Cambio Climático y Transición Energética (2021). El nivel de aplicación varía — algunas ciudades tienen activación blanda, otras (Sevilla en particular) sancionan activamente. La cobertura y el horario varían según la ciudad.',
				fine: '100–200 € habitual',
				note: 'Consulta el mapa específico de la ZBE antes de entrar al centro — busca "ZBE [ciudad]" para ver normas vigentes.',
			},
		],
		tip: 'Regla práctica: en cualquier ciudad española grande, aparca fuera del centro histórico y entra a pie. Desactiva "ruta más corta" en el GPS — usa "evitar zonas restringidas" si está disponible. Múltiples entradas a la ZBE en un día = multas separadas, procesadas por la empresa de alquiler con un cargo administrativo de 40–50 €.',
	},

	howTo: {
		heading: 'Cómo obtener un IDP para España',
		lead: 'Para ciudadanos de EE.UU., solo AAA y AATA pueden emitir IDP oficiales en formato Ginebra 1949 — y ese formato es exactamente el que España acepta. El proceso es rápido y económico.',
		schemaName: 'Cómo obtener un Permiso Internacional de Conducción para España como ciudadano estadounidense',
		duration: 'PT15M',
		cost: '20 USD',
		steps: [
			{
				title: 'Reúne los documentos',
				text: 'Tu licencia de conducir estadounidense vigente, dos fotos tamaño pasaporte originales (5×5 cm) y el formulario de solicitud de AAA cumplimentado. No es necesario ser miembro de AAA.',
			},
			{
				title: 'Visita una oficina de AAA o solicítalo por correo',
				text: 'Presencialmente en cualquier sucursal de AAA tarda ~10–15 minutos — sales con el IDP el mismo día. Por correo tarda 5–7 días hábiles. AATA es la organización alternativa con un proceso similar.',
			},
			{
				title: 'Paga la tasa',
				text: '$20 por el IDP, más $2 por las fotos si AAA las hace en la oficina. Coste total: menos de $25.',
			},
			{
				title: 'Añade IDP Companion (opcional pero recomendado)',
				text: 'Por $35 adicionales, genera un documento digital multilingüe que agiliza los mostradores de alquiler. El español está incluido por defecto.',
			},
			{
				title: 'Lleva ambos documentos en España',
				text: 'IDP de AAA (cuadernillo físico impreso) + tu licencia original de EE.UU. + (opcional) IDP Companion + pasaporte. Llévalos juntos. El cuadernillo de AAA es lo que verifica la Guardia Civil; el Companion agiliza los mostradores de alquiler.',
			},
		],
	},

	honesty: {
		heading: 'Cómo encaja IDP Companion — sin engaños',
		lead: 'En este sector hay mucho marketing engañoso, especialmente para España. Esto es lo que somos y lo que no somos.',
		is: {
			title: 'Qué es IDP Companion',
			items: [
				'PDF digital multilingüe que traduce los datos de tu licencia de EE.UU. al español, inglés, francés, alemán, italiano y otros idiomas extendidos',
				'Diseñado para reducir fricción en mostradores de alquiler (especialmente en cadenas pequeñas y mostradores walk-in), registros en hoteles y verificaciones informales',
				'Generado en minutos tras subir tu licencia y completar nuestra verificación',
				'Disponible por $35 (1 año), $45 (3 años) o $55 (5 años) — pago único, sin suscripción',
			],
		},
		isNot: {
			title: 'Qué NO es IDP Companion',
			items: [
				'No es un IDP oficial bajo la Convención de Ginebra de 1949',
				'No está emitido por AAA ni AATA — los únicos organismos autorizados en EE.UU.',
				'No es aceptado por la Guardia Civil en los controles (exigen el cuadernillo físico de AAA)',
				'No es válido por sí solo — debe llevarse junto a la licencia de conducir original de EE.UU.',
			],
		},
		helps: {
			title: 'Cuándo IDP Companion ayuda a conductores estadounidenses en España',
			items: [
				'En mostradores de alquiler donde el agente quiere confirmación visual en español (especialmente cadenas pequeñas y mostradores walk-in en Mallorca, Canarias y zonas rurales)',
				'En registros en hoteles y verificaciones de alquiler de pisos',
				'En peajes y mostradores de pago donde el personal prefiere documentación en español',
				'Como respaldo si pierdes, dañas o dejas en un alquiler anterior tu IDP de AAA',
				'Al tratar con pequeños negocios (alquiler de barcos, tours en bici, alquiler de patinetes) donde un IDP oficial a veces es excesivo',
			],
		},
		needOfficial: {
			title: 'Cuándo necesitas el IDP oficial de AAA / AATA',
			items: [
				'En los controles de la Guardia Civil (este es el caso principal en España)',
				'En controles de los Mossos d\'Esquadra (policía catalana) y la Ertzaintza (policía vasca)',
				'Para documentación del seguro tras cualquier accidente, por leve que sea',
				'Para alquileres en Europcar y Fox Rent-a-Car (aplican el IDP de AAA estrictamente)',
				'Para estancias largas que se acerquen al umbral de residencia de 6 meses',
			],
		},
		pattern:
			'El patrón recomendado para viajeros estadounidenses en España: obtén el IDP de AAA por $20 para cumplir con la legalidad, y añade IDP Companion como herramienta de traducción multilingüe para situaciones cotidianas. Combinados cuestan menos de la mitad de una sola multa de la Guardia Civil.',
	},

	renting: {
		heading: 'Alquilar coche en España con licencia de EE.UU.',
		lead: 'Las grandes cadenas operan en todos los aeropuertos españoles — Madrid Barajas, Barcelona El Prat, Málaga, Palma de Mallorca, Las Palmas, Tenerife, Valencia, Bilbao, Sevilla. La aplicación real varía mucho según la cadena.',
		chains: [
			{ name: 'Europcar', policy: 'Exige el IDP estrictamente en el mostrador. Rechaza el alquiler sin él. Política confirmada' },
			{ name: 'Fox Rent-a-Car', policy: 'Exige el IDP estrictamente. Los rechazos son habituales, sobre todo en aeropuertos del Mediterráneo' },
			{ name: 'Hertz, Budget, Avis', policy: 'A menudo alquilan solo con licencia de EE.UU. en el mostrador, PERO el contrato exige el IDP — el seguro queda anulado sin él' },
			{ name: 'Sixt', policy: 'Generalmente exige el IDP, especialmente para vehículos premium' },
			{ name: 'Goldcar / OK Mobility (cadenas españolas)', policy: 'La estrictitud varía por sucursal y temporada — a menudo solicitan el IDP' },
		],
		tipsHeading: 'Consejos prácticos',
		tips: [
			'Reserva online con una gran cadena con antelación, sobre todo en julio-agosto. Los walk-ins en Mallorca, Ibiza y costa tienen recargos del 300–500%',
			'Reserva caja de cambios automática específicamente. Por defecto es manual y los automáticos se agotan en verano',
			'Selecciona siempre la franquicia reducida (CDW) y la cobertura por robo. Los índices de robo en Barcelona y Madrid hacen insuficiente el seguro básico',
			'Fotografía el vehículo al recogerlo, incluido el cuentakilómetros y cada arañazo existente — las disputas por daños son frecuentes en alquileres españoles',
			'Una preautorización de 1.000 € en la tarjeta es estándar. Usa una tarjeta con al menos 2.500 € de crédito disponible al recoger',
			'Reposta antes de devolver. La gasolina en las estaciones del alquiler cuesta 2–3x lo normal',
			'Para alquileres en Canarias, lleva tanto la licencia de EE.UU. como el IDP — son comunidades autónomas y la aplicación puede ser aún más estricta que en la península',
		],
	},

	outcomes: {
		heading: 'Qué pasa si conduces sin IDP — escenarios reales',
		lead: 'Escenarios realistas ordenados por frecuencia, basados en informes de viajeros estadounidenses en España (2024-2026).',
		items: [
			{
				severity: 'low',
				frequency: '~75% de los viajes',
				label: 'No pasa nada',
				text: 'El viaje termina sin control documental ni problema de alquiler. Esta es la falsa sensación de seguridad que penaliza al 25% restante.',
			},
			{
				severity: 'med',
				frequency: '~10% de los intentos',
				label: 'Rechazo en el mostrador de alquiler',
				text: 'El agente de Europcar o Fox Rent-a-Car pide el IDP, no lo tienes y se rechaza el alquiler. Pierdes el depósito de la reserva y buscas alternativas. En temporada alta en Mallorca, una reserva de reemplazo cuesta 400–800 $ con recargo — o no hay automático disponible.',
			},
			{
				severity: 'med',
				frequency: '~10% de los viajes',
				label: 'Control de la Guardia Civil',
				text: 'Multa de 200–500 € pagada en comisaría o Correos en 20 días con descuento del 50%. Tus datos quedan en la base de datos española — los siguientes viajes te marcan como sancionado previamente.',
			},
			{
				severity: 'high',
				frequency: '1–2% de los viajes',
				label: 'Accidente leve',
				text: 'El seguro revisa la documentación. Sin IDP, la cobertura queda anulada. Pasas a ser responsable de los daños del coche (2.000–20.000 €), los daños a terceros y los gastos hospitalarios españoles (a menudo de pago anticipado en efectivo para no urgencias).',
			},
			{
				severity: 'high',
				frequency: 'Raro pero real',
				label: 'Accidente grave',
				text: 'Efecto combinado: seguro anulado, facturas hospitalarias en efectivo, posible responsabilidad penal y retrasos del viaje. La Embajada de EE.UU. en Madrid gestiona estos casos con regularidad. La primera pregunta suele ser: "¿tenías el IDP?".',
			},
		],
		math: 'Un IDP de AAA por $20 más IDP Companion por $35 = $55 en total. Una sola multa de 500 € equivale a unos $540. Los escenarios de seguro anulado empiezan en $2.000 y suben. La asimetría es abrumadora — y los hospitales españoles cobran por adelantado.',
	},

	faq: {
		heading: 'Preguntas frecuentes',
		items: [
			{
				id: 1,
				question: '¿Realmente necesito el IDP si solo alquilo el coche un día en Mallorca?',
				answer: 'Sí. La normativa española se aplica a todos los conductores extranjeros independientemente de la duración del viaje. Mallorca y el resto de Baleares tienen controles especialmente activos de la Guardia Civil en temporada alta. Un alquiler de un día sigue requiriendo licencia de EE.UU. + IDP para cumplir la ley, y el seguro queda anulado sin él.',
			},
			{
				id: 2,
				question: '¿Puedo obtener el IDP una vez en España?',
				answer: 'No. Los Permisos Internacionales de Conducción deben emitirse en el país de residencia antes del viaje. Para conductores de EE.UU., solo AAA y AATA están autorizados. AAA tramita los IDP en la mayoría de oficinas en 10–15 minutos por $20, o por correo en 5–7 días hábiles. No existe equivalente español emitido a extranjeros.',
			},
			{
				id: 3,
				question: '¿Es IDP Companion lo mismo que el Permiso Internacional de AAA?',
				answer: 'No, y esta distinción es especialmente importante para España. El IDP de AAA es un documento reconocido oficialmente bajo la Convención de Ginebra de 1949, válido por 1 año, y aceptado por la Guardia Civil como prueba de habilitación. IDP Companion es un documento de traducción multilingüe que ayuda en mostradores de alquiler y verificaciones informales, pero la policía española exige expresamente el cuadernillo físico de AAA. Para España, lleva ambos: IDP de AAA para cumplir la ley, IDP Companion para reducir fricción cotidiana.',
			},
			{
				id: 4,
				question: '¿Por qué la policía española rechaza los IDP digitales?',
				answer: 'Los agentes están entrenados para verificar el cuadernillo físico de la Convención de Ginebra de 1949 — tapa de papel gris, maquetación específica, foto adherida, sello oficial de AAA o AATA. Las apps o PDF de "IDP digital" no coinciden con ese formato. No es exclusivo de España — la mayoría de policías europeas operan igual. La Convención exige documento impreso.',
			},
			{
				id: 5,
				question: '¿Cuánto tiempo es válido IDP Companion?',
				answer: 'Elige entre 1 año ($35), 3 años ($45) o 5 años ($55). La validez está vinculada a tu licencia de EE.UU. — si tu licencia caduca, también caduca el companion. La opción de 3 años es popular entre viajeros frecuentes porque cubre múltiples viajes a España sin renovaciones.',
			},
			{
				id: 6,
				question: '¿Qué pasa si me multa la Guardia Civil por conducir sin IDP?',
				answer: 'Cuenta con una multa de 200–500 € en primera infracción, pagada en comisaría o Correos. Pago en 20 días con descuento del 50%. Tus datos quedan registrados en bases de datos españolas — los siguientes viajes te marcan como sancionado. Las reincidencias escalan rápido y pueden incluir inmovilización del vehículo en casos extremos.',
			},
			{
				id: 7,
				question: '¿Mi seguro de coche estadounidense me cubre en España?',
				answer: 'Casi con seguridad no. Los seguros de auto estándar de EE.UU. excluyen los alquileres internacionales. El seguro de tarjetas de crédito (Visa, Amex) suele tener restricciones para España o cobertura limitada. Selecciona siempre la franquicia reducida (CDW) y la cobertura por robo dentro del alquiler, salvo que tengas confirmación por escrito del emisor de la tarjeta de que cubre alquileres en España. Sin IDP, toda la cobertura queda anulada independientemente de la fuente.',
			},
			{
				id: 8,
				question: '¿Cómo está el tema de las cajas de cambios manuales vs automáticas?',
				answer: 'Las flotas de alquiler españolas son mayoritariamente manuales. Si no manejas con cambio manual — algo común para los estadounidenses — debes reservar automático específicamente y con antelación. Los automáticos cuestan 30–50% más y son limitados. La disponibilidad walk-in para automáticos en verano en zonas turísticas es prácticamente nula.',
			},
			{
				id: 9,
				question: '¿Y las ZBE y restricciones del centro de las ciudades en España?',
				answer: 'Varias ciudades españolas han implantado Zonas de Bajas Emisiones (ZBE) — Madrid (Madrid 360), Barcelona (ZBE Rondes), Sevilla, Valencia, Málaga y Bilbao. Requieren etiqueta ambiental para entrar en horarios determinados. Los coches de alquiler suelen llevar la etiqueta, pero verifícalo antes de entrar al centro de Madrid o al Eixample de Barcelona. Las multas comienzan en 90 € y se procesan a través de la empresa de alquiler con cargos administrativos.',
			},
			{
				id: 10,
				question: '¿Y si me quedo en España más de 6 meses?',
				answer: 'A partir de 6 meses de residencia en España, tu combinación licencia de EE.UU. + IDP deja de ser válida. Tendrás que obtener una licencia de conducción española en la oficina de la DGT. España NO tiene acuerdo recíproco de canje con EE.UU. — deberás superar exámenes teórico y práctico, completar el reconocimiento médico y presentar documentación de residencia. Esto pilla por sorpresa a muchos estadounidenses que se mudan a España.',
			},
		],
	},

	related: {
		heading: 'Guías relacionadas',
		lead: 'Más guías de pares de países para viajeros estadounidenses y conductores con destino España — próximamente.',
		comingSoonLabel: 'Próximamente',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'EE.UU. → Italia', status: 'En vivo', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'EE.UU. → Grecia', status: 'En vivo', href: '/idp-for-us-drivers-in-greece' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'EE.UU. → Japón', status: 'En vivo', href: '/idp-for-us-drivers-in-japan' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'EE.UU. → México', status: 'En vivo', href: '/idp-for-us-drivers-in-mexico' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'EE.UU. → Francia', status: 'Próximamente' },
			{ flagFrom: 'gb', flagTo: 'es', label: 'Reino Unido → España', status: 'Próximamente' },
		],
	},

	finalCta: {
		heading: '¿Listo para obtener tu IDP Companion?',
		text: 'PDF multilingüe (con español incluido), generado en minutos a partir de tu licencia de EE.UU. Para España específicamente, combínalo con el IDP oficial de AAA — la Guardia Civil exige el cuadernillo físico.',
		button: 'Iniciar solicitud',
	},

	legal: {
		disclaimerHeading: 'Aviso legal',
		disclaimer:
			'IDP Companion es un documento de traducción multilingüe y no está afiliado con la American Automobile Association (AAA), American Automobile Touring Alliance (AATA), Dirección General de Tráfico (DGT) de España, Guardia Civil, Mossos d\'Esquadra, Ertzaintza ni con ningún organismo público. IDP Companion no es un Permiso Internacional de Conducción oficial bajo la Convención de Ginebra de 1949 ni la Convención de Viena de 1968. Debe utilizarse junto con la licencia original de EE.UU. y, cuando la legislación española lo exija, junto con un IDP oficial emitido por AAA o AATA.',
		sourcesHeading: 'Fuentes',
		sources: [
			'Dirección General de Tráfico (DGT) — directrices oficiales para conductores extranjeros',
			'Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial',
			'Convención de Ginebra de 1949 sobre Tráfico Vial, UN Treaty Collection',
			'Lista de Estados parte de la Convención de Viena de 1968 sobre la Circulación Vial, UNECE (confirma que España no la ha ratificado)',
			'Proceso de solicitud del Permiso Internacional de Conducción de AAA',
			'European Road Safety Charter — obligación de la baliza V-16 en España (efectiva 1 enero 2026)',
			'Madrid 360 / ZBE Rondes Barcelona — mapas y normativa oficial municipal',
		],
	},

	og: {
		originName: 'Estados Unidos',
		destinationName: 'España',
	},
};

export const usSpainCopy: Record<'en' | 'es', CountryPairCopy> = { en, es };
