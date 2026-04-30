/**
 * Country-pair content: United States → Spain.
 * Locales: en + es. (Spanish included to capture Hispanic-American audience
 * + Latin Americans visiting heritage Spain — distinct sub-audience with
 * commercial intent. Castilian Spanish, formal register.)
 *
 * Killer angles:
 *  - Spain ratified 1949 Geneva but NOT 1968 Vienna — the standard US Geneva
 *    1949 IDP format matches what Spain accepts (juicy SEO signal).
 *  - Madrid Central + Barcelona ZBE + Sevilla ZBE (low-emission zones, the
 *    Spanish equivalent of Italian ZTL).
 *  - Digital-only IDPs are not accepted by Guardia Civil for primary IDP
 *    verification at police checkpoints — Convention specifies a physical booklet.
 *
 * Positioning per AGENTS.md / CLAUDE.md: authorized national issuers (AAA, AATA)
 * are mentioned ONLY in the legal disclaimer block. Page is a sales funnel for
 * IDP Companion as the multilingual translation aid.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Spain: 2026 Guide to ZBEs & Rentals',
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
		text: "Spanish law explicitly requires US license holders to carry an International Driving Permit alongside their domestic license. Spain ratified the 1949 Geneva Convention (which the US format follows) but not the 1968 Vienna Convention, so the standard US-format IDP is correct. Without one: fines starting around €200 and reaching €500+ for first-time violations (DGT issues 20,000+ such fines yearly, mostly to non-EU tourists), refusals at Europcar and Fox Rent-a-Car, and voided insurance after any accident.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Spain',
		lead: 'Spain is one of the strictest European countries on IDP enforcement. Most travelers carry all three documents — combined cost is less than half of a single Guardia Civil fine.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Spain',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Insufficient under Spanish law (Spain ratified Geneva 1949 — IDP required for non-EU drivers). Rental insurance void if you crash. Refused at Europcar and Fox Rent-a-Car. €200–€500+ fine if checked by Guardia Civil. Spanish rental contracts are in Spanish — no translation aid at the desk.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual translation of your US license into Spanish, French, German, Italian, and 7 other widely-read languages. Generated in 2 minutes online. Speeds up rental desks (especially smaller chains in Andalusia, Galicia, Basque Country), hotel check-ins, and informal verifications. Re-printable from any hotel if the original is retained or lost.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What most prepared US travelers carry into Spain: physical US driver license + IDP Companion as the multilingual translation aid + rental insurance card + passport. Total prep cost stays under $60 — less than half of a single Guardia Civil €200 ticket.',
	},

	whyNotEnough: {
		heading: "Why your US license alone isn't enough in Spain",
		lead: 'Three reasons, ranked by how much trouble each causes you in practice.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal reason',
				text: "Spanish federal traffic regulations require non-EU drivers to carry both a domestic license AND a 1949 Geneva-format IDP. Spain ratified the 1949 Geneva Convention but not the 1968 Vienna Convention — which is actually convenient for US drivers, since the standard US-issued IDP format is Geneva 1949. The format match is correct; the document is just legally required.",
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The insurance reason',
				text: 'Your rental insurance contract — including the Collision Damage Waiver you paid extra for — requires you to be "properly licensed under applicable law." For non-EU drivers in Spain, that means US license PLUS a Geneva 1949 IDP. Without the IDP, the insurer can void coverage entirely after an accident. You become personally liable for car damage (€2,000–€20,000), the other party\'s damages, and Spanish hospital costs (often paid upfront in cash for non-emergencies).',
			},
			{
				icon: 'ph:phone-x-bold',
				title: 'The digital-IDP trap',
				text: 'Several services market "instant digital IDPs" as if they replace the official Geneva 1949 booklet. Spanish police reject these for primary IDP verification — Guardia Civil officers are trained to verify the physical Geneva 1949 booklet format issued by an authorized national-level organization. A PDF on your phone is not a substitute at a Guardia Civil stop.',
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
		lead: 'Spain ratified the 1949 Geneva Convention but not the 1968 Vienna Convention — Spanish law requires non-EU drivers to carry a Geneva 1949 IDP alongside their physical license. The fastest prep route is online.',
		schemaName: 'How to prepare for driving in Spain as a US citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion',
				text: '$35 for 1 year, $45 for 3 years, $55 for 5 years. 2 minutes online — upload your US license, our system handles OCR + multilingual translation including Spanish, French, German, Italian, and 7 other languages. Output is a print-ready PDF.',
			},
			{
				title: 'Print at home — bring a backup copy',
				text: 'Spanish rental staff and Guardia Civil expect physical documents, not phone screens. Standard letter or A4 paper is fine. Tuck a backup copy in your day bag separate from the original — Barcelona and Madrid pickpocketing rates are real around tourist sites.',
			},
			{
				title: 'Confirm rental insurance — Collision Damage Waiver + Theft Protection',
				text: 'Spanish rental contracts require Collision Damage Waiver. US credit-card rental coverage often does NOT cover Spain or has restrictions. Verify in writing before declining the in-rental Collision Damage Waiver. Spanish hospitals require upfront payment for non-emergency care.',
			},
			{
				title: 'Avoid LEZ / ZBE zones in Madrid, Barcelona, and major cities',
				text: 'Madrid Central, Barcelona Zona de Bajas Emisiones (ZBE), Sevilla and Valencia all operate Low Emission Zones. Most modern rentals qualify, but confirm vehicle Euro class with the rental agent. Camera-enforced; tickets arrive months later through the rental company.',
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US license + printed IDP Companion + passport + rental contract + insurance card — all in one folder. Hand the folder over if stopped. Guardia Civil checkpoints in tourist zones (Andalusia coast, Mallorca, Canaries) are quick when documents are organized.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion works for Spain — direct answer',
		lead: "There is a lot of misleading marketing in this space, especially for Spain. Here is what we are and what we are not.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your US license data into Spanish, English, French, German, Italian, and 7 other widely-read languages',
				'Designed to reduce friction at car rental desks (especially smaller chains and walk-in counters), hotel check-ins, and informal verifications',
				'Generated in 2 minutes online — works regardless of where you are or how late you started planning',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not valid by itself — must be carried alongside your original US driver license',
				'Not a substitute for current rental insurance, which Spanish rental contracts require separately',
			],
		},
		helps: {
			title: 'When IDP Companion is what you need',
			items: [
				'At rental desks where the agent wants visual confirmation in Spanish (especially smaller chains, walk-in counters in Mallorca, the Canaries, and rural areas)',
				'At hotel check-ins and apartment rental verifications',
				'At toll-booth desks where staff prefer Spanish-language documentation',
				'When dealing with smaller businesses (boat rentals, bike tours, scooter rentals) where multilingual ID speeds verification',
				'Re-printable from any hotel if your physical document is retained or lost mid-trip',
				'For travelers stacking multiple European trips over 1–5 years — one $55 purchase covers the stretch',
			],
		},
		needOfficial: {
			title: 'What you should carry alongside IDP Companion',
			items: [
				'Your physical US driver license — the actual permission to drive (no document substitutes for this)',
				'Rental insurance card with current dates — Spanish rental contracts require Collision Damage Waiver',
				'Your US passport with valid Spanish entry stamp — physical, not a digital photo',
				'A printed copy of your rental contract — Spanish contracts are binding in Spanish, keep your translated companion next to it',
			],
		},
		pattern:
			'What most prepared US travelers carry in Spain: physical US driver license + IDP Companion as the multilingual translation aid + rental insurance card + passport. Total prep cost stays under $60 — less than half of a single Guardia Civil €200 ticket and far less than the €2,000+ exposure of an insurance void after a crash.',
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
		math: 'IDP Companion ($35 / 1 year, $55 / 5 years) + your existing US license + rental insurance is under $60 of prep. The €500 first-time Guardia Civil fine alone is roughly $540. Insurance void scenarios start at $2,000 and escalate. The asymmetry is overwhelming — and Spanish hospitals require upfront payment.',
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
				answer: 'International Driving Permits must be issued in your country of residence before you travel — Spanish authorities do not issue them to foreign tourists. IDP Companion can be generated online from anywhere in 2 minutes as a multilingual translation companion. It is a private translation document (not a government-issued IDP under the 1949 Geneva Convention), designed for friction reduction at Spanish rental desks, hotel check-ins, and informal verifications.',
			},
			{
				id: 3,
				question: 'How fast can I get IDP Companion?',
				answer: 'Two minutes online from any device. Upload a photo of your US license, complete payment ($35 / 1yr, $45 / 3yr, $55 / 5yr), receive the multilingual PDF including Spanish translation immediately. Print at home, at the hotel front desk, or from any internet cafe in Spain if you generated it after arrival. Re-printable any time during the validity period.',
			},
			{
				id: 4,
				question: 'Why do Spanish police reject digital-only IDPs at checkpoints?',
				answer: 'Spanish police are trained to verify the physical Geneva 1949 Convention booklet — gray paper cover, specific layout, affixed photograph, official stamp from an authorized national-level organization. App-based or PDF documents do not match this format at a Guardia Civil stop. This is not unique to Spain — most European police forces operate the same way. The Convention specifies a printed document.',
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
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'US → UAE', status: 'Live', href: '/idp-for-us-drivers-in-uae' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: 'Multilingual PDF including Spanish, generated from your US license in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip and the next ones across Europe. $35 / 1yr · $45 / 3yr · $55 / 5yr. One-time payment, no subscription.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Spanish Dirección General de Tráfico (DGT), Guardia Civil, Mossos d'Esquadra, Ertzaintza, or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in the United States, authorized issuers of Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license.",
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
		title: 'Permiso Internacional EE.UU. en España: guía ZBE 2026',
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
		text: 'La normativa española exige a los conductores con licencia de EE.UU. llevar un Permiso Internacional de Conducción junto con su licencia nacional. España ratificó la Convención de Ginebra de 1949 (cuyo formato sigue el IDP estadounidense) pero no la de Viena de 1968, por lo que el formato estándar de IDP de EE.UU. es el correcto. Sin él: multas desde 200 € hasta más de 500 € en primera infracción (la DGT emite 20.000+ al año, casi todas a turistas extracomunitarios), rechazos en Europcar y Fox Rent-a-Car, y seguro anulado tras cualquier accidente.',
	},

	tldr: {
		heading: 'Licencia de EE.UU. sola vs IDP Companion en España',
		lead: 'España es uno de los países europeos más estrictos en cuanto al Permiso Internacional. La mayoría de viajeros lleva los tres documentos — el coste combinado es menor que la mitad de una sola multa de la Guardia Civil.',
		colDocument: 'Documento',
		colWhatItDoes: 'Qué hace en España',
		colCost: 'Coste',
		rows: [
			{
				document: 'Licencia de conducir de EE.UU. (sola)',
				whatItDoes: 'Insuficiente según la normativa española (España ratificó Ginebra 1949 — IDP obligatorio para conductores extracomunitarios). El seguro de alquiler queda anulado tras un accidente. Rechazada en Europcar y Fox Rent-a-Car. Multa de 200–500+ € si la Guardia Civil la solicita. Los contratos españoles están en español — sin apoyo de traducción en el mostrador.',
				cost: 'Ya la tienes',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + tu licencia de EE.UU.',
				whatItDoes: 'Traducción multilingüe de tu licencia al español, francés, alemán, italiano y otros 7 idiomas ampliamente leídos. Generado en 2 minutos online. Agiliza mostradores de alquiler (sobre todo cadenas pequeñas en Andalucía, Galicia, País Vasco), registros en hoteles y verificaciones informales. Se reimprime desde cualquier hotel si pierdes el original.',
				cost: '$35–55 (1–5 años)',
				tone: 'companion',
			},
		],
		footnote: 'Lo que llevan la mayoría de viajeros estadounidenses preparados a España: licencia física de EE.UU. + IDP Companion como herramienta de traducción multilingüe + tarjeta del seguro de alquiler + pasaporte. Coste total de preparación bajo $60 — menos de la mitad de una sola multa de 200 € de la Guardia Civil.',
	},

	whyNotEnough: {
		heading: 'Por qué tu licencia de EE.UU. no es suficiente en España',
		lead: 'Tres motivos, ordenados por la cantidad de problemas que cada uno provoca en la práctica.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'El motivo legal',
				text: 'La normativa española exige a los conductores extracomunitarios llevar tanto la licencia nacional como un IDP en formato Convención de Ginebra de 1949. España ratificó la de Ginebra 1949 pero no la de Viena 1968 — algo en realidad conveniente para los conductores de EE.UU., porque el formato estándar de IDP estadounidense es Ginebra 1949. La coincidencia de formato es correcta; el documento simplemente es obligatorio.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'El motivo del seguro',
				text: 'El contrato de alquiler — incluida la franquicia reducida (CDW) que has pagado aparte — exige estar "debidamente habilitado conforme a la legislación aplicable". Para conductores extracomunitarios en España, eso significa licencia de EE.UU. MÁS un IDP en formato Ginebra 1949. Sin el IDP, la aseguradora puede anular la cobertura por completo tras un accidente. Pasas a ser responsable personal por los daños del coche (2.000–20.000 €), los daños a terceros y los gastos hospitalarios españoles (a menudo de pago anticipado en efectivo para no urgencias).',
			},
			{
				icon: 'ph:phone-x-bold',
				title: 'La trampa del IDP digital',
				text: 'Varios servicios comercializan "IDP digitales instantáneos" como si reemplazaran al cuadernillo oficial Ginebra 1949. La policía española los rechaza para verificación primaria de IDP — los agentes de la Guardia Civil están entrenados para verificar el cuadernillo físico de la Convención de Ginebra de 1949 emitido por una organización nacional autorizada. Un PDF en el móvil no es sustituto en un control de la Guardia Civil.',
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
		lead: 'España ratificó la Convención de Ginebra de 1949 pero no la de Viena de 1968 — la normativa española exige a los conductores extracomunitarios llevar un IDP en formato Ginebra 1949 junto con su licencia física. La vía de preparación más rápida es online.',
		schemaName: 'Cómo prepararte para conducir en España como ciudadano estadounidense',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Genera IDP Companion',
				text: '$35 por 1 año, $45 por 3 años, $55 por 5 años. 2 minutos online — sube tu licencia de EE.UU., nuestro sistema gestiona OCR + traducción multilingüe incluyendo español, francés, alemán, italiano y otros 7 idiomas. Resultado: PDF listo para imprimir.',
			},
			{
				title: 'Imprímelo en casa — y lleva una copia de respaldo',
				text: 'El personal de alquiler español y la Guardia Civil esperan documentos físicos, no pantallas de móvil. Tamaño carta o A4 estándar. Guarda una copia de respaldo en tu mochila aparte del original — los carteristas en Barcelona y Madrid son reales en zonas turísticas.',
			},
			{
				title: 'Confirma el seguro de alquiler — CDW + protección contra robo',
				text: 'Los contratos españoles requieren franquicia reducida (CDW). La cobertura por tarjeta de crédito de EE.UU. a menudo NO cubre España o tiene restricciones. Verifícalo por escrito antes de rechazar la cobertura del alquiler. Los hospitales españoles cobran por adelantado para atención no urgente.',
			},
			{
				title: 'Evita las ZBE en Madrid, Barcelona y otras grandes ciudades',
				text: 'Madrid Central, la Zona de Bajas Emisiones (ZBE) de Barcelona, Sevilla y Valencia operan zonas restringidas. La mayoría de coches modernos de alquiler las cumplen, pero confirma la categoría Euro del vehículo con el agente. Las cámaras enforzan; las multas llegan meses después a través de la empresa de alquiler.',
			},
			{
				title: 'Lleva los documentos físicos en una sola carpeta',
				text: 'Licencia física de EE.UU. + IDP Companion impreso + pasaporte + contrato de alquiler + tarjeta del seguro — todo en una carpeta. Entrégala completa si te paran. Los controles de la Guardia Civil en zonas turísticas (costa andaluza, Mallorca, Canarias) son rápidos cuando los documentos están organizados.',
			},
		],
	},

	honesty: {
		heading: 'Cómo funciona IDP Companion para España — respuesta directa',
		lead: 'En este sector hay mucho marketing engañoso, especialmente para España. Esto es lo que somos y lo que no somos.',
		is: {
			title: 'Qué es IDP Companion',
			items: [
				'PDF digital multilingüe que traduce los datos de tu licencia de EE.UU. al español, inglés, francés, alemán, italiano y otros 7 idiomas extendidos',
				'Diseñado para reducir fricción en mostradores de alquiler (especialmente en cadenas pequeñas y mostradores walk-in), registros en hoteles y verificaciones informales',
				'Generado en 2 minutos online — funciona sin importar dónde estés ni lo tarde que hayas empezado a planificar',
				'Disponible por $35 (1 año), $45 (3 años) o $55 (5 años) — pago único, sin suscripción',
			],
		},
		isNot: {
			title: 'Qué NO es IDP Companion',
			items: [
				'No es un IDP oficial bajo la Convención de Ginebra de 1949',
				'No es válido por sí solo — debe llevarse junto a la licencia de conducir original de EE.UU.',
				'No sustituye al seguro de alquiler vigente, que los contratos españoles exigen aparte',
			],
		},
		helps: {
			title: 'Cuándo IDP Companion es lo que necesitas',
			items: [
				'En mostradores de alquiler donde el agente quiere confirmación visual en español (sobre todo cadenas pequeñas y mostradores walk-in en Mallorca, Canarias y zonas rurales)',
				'En registros en hoteles y verificaciones de alquiler de pisos',
				'En peajes y mostradores de pago donde el personal prefiere documentación en español',
				'Al tratar con pequeños negocios (alquiler de barcos, tours en bici, alquiler de patinetes) donde la documentación multilingüe agiliza la verificación',
				'Reimprimible desde cualquier hotel si pierdes el documento físico durante el viaje',
				'Para viajeros que apilan varios viajes europeos en 1–5 años — una sola compra de $55 cubre todo el periodo',
			],
		},
		needOfficial: {
			title: 'Qué deberías llevar junto a IDP Companion',
			items: [
				'Tu licencia física de conducir de EE.UU. — el permiso real para conducir (ningún documento sustituye esto)',
				'Tarjeta del seguro de alquiler con fechas vigentes — los contratos españoles exigen franquicia reducida (CDW)',
				'Tu pasaporte de EE.UU. con sello de entrada español válido — físico, no foto digital',
				'Copia impresa de tu contrato de alquiler — los contratos son vinculantes en español, ten tu acompañante traducido al lado',
			],
		},
		pattern:
			'Lo que llevan la mayoría de viajeros estadounidenses preparados a España: licencia física de EE.UU. + IDP Companion como herramienta de traducción multilingüe + tarjeta del seguro de alquiler + pasaporte. Coste total de preparación bajo $60 — menos de la mitad de una sola multa de 200 € de la Guardia Civil y muy lejos de la exposición de 2.000+ € si el seguro queda anulado tras un accidente.',
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
		math: 'IDP Companion ($35 / 1 año, $55 / 5 años) + tu licencia de EE.UU. + el seguro de alquiler son menos de $60 de preparación. Una sola multa de 500 € de la Guardia Civil equivale a unos $540. Los escenarios de seguro anulado empiezan en $2.000 y suben. La asimetría es abrumadora — y los hospitales españoles cobran por adelantado.',
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
				answer: 'Los Permisos Internacionales de Conducción deben emitirse en el país de residencia antes del viaje — las autoridades españolas no los emiten a turistas extranjeros. IDP Companion puede generarse online desde cualquier lugar en 2 minutos como un documento acompañante de traducción multilingüe. Es un documento de traducción privado (no un IDP oficial bajo la Convención de Ginebra de 1949), diseñado para reducir fricción en mostradores de alquiler españoles, registros en hoteles y verificaciones informales.',
			},
			{
				id: 3,
				question: '¿En cuánto tiempo puedo obtener IDP Companion?',
				answer: 'Dos minutos online desde cualquier dispositivo. Sube una foto de tu licencia de EE.UU., completa el pago ($35 / 1 año, $45 / 3 años, $55 / 5 años), recibe el PDF multilingüe con traducción al español al instante. Imprímelo en casa, en la recepción del hotel o en cualquier locutorio en España si lo generaste tras llegar. Se reimprime cuando quieras durante el periodo de validez.',
			},
			{
				id: 4,
				question: '¿Por qué la policía española rechaza los IDP solo digitales en los controles?',
				answer: 'Los agentes están entrenados para verificar el cuadernillo físico de la Convención de Ginebra de 1949 — tapa de papel gris, maquetación específica, foto adherida, sello oficial de una organización nacional autorizada. Las apps o PDFs no coinciden con ese formato en un control de la Guardia Civil. No es exclusivo de España — la mayoría de policías europeas operan igual. La Convención exige documento impreso.',
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
			{ flagFrom: 'us', flagTo: 'th', label: 'EE.UU. → Tailandia', status: 'En vivo', href: '/idp-for-us-drivers-in-thailand' },
			{ flagFrom: 'gb', flagTo: 'es', label: 'Reino Unido → España', status: 'Próximamente' },
		],
	},

	finalCta: {
		heading: '¿Listo para obtener tu IDP Companion?',
		text: 'PDF multilingüe con español incluido, generado a partir de tu licencia de EE.UU. en 2 minutos. Imprímelo en casa o desde cualquier hotel. Validez 1–5 años — cubre este viaje y los siguientes por Europa. $35 / 1 año · $45 / 3 años · $55 / 5 años. Pago único, sin suscripción.',
		button: 'Iniciar solicitud',
	},

	legal: {
		disclaimerHeading: 'Aviso legal',
		disclaimer:
			"IDP Companion es un documento privado de traducción multilingüe y no está afiliado con la Dirección General de Tráfico (DGT) de España, Guardia Civil, Mossos d'Esquadra, Ertzaintza ni con ningún organismo público. IDP Companion no es un Permiso Internacional de Conducción oficial bajo la Convención de Ginebra de 1949 ni la Convención de Viena de 1968; en Estados Unidos, los emisores autorizados de IDP Ginebra 1949 son AAA y AATA. IDP Companion debe utilizarse junto con la licencia original de EE.UU.",
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
