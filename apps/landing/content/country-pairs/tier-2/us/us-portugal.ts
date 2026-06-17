/**
 * Country-pair content: United States → Portugal.
 * Tier 2. Locales: en only.
 *
 * Killer angles for Portugal:
 *  - Portugal explicitly recognises US licences for tourist stays up to
 *    185 days under Decree-Law 138/2012. IDP is NOT legally required.
 *  - BUT rental companies (Hertz, Sixt, Europcar) list IDP in their
 *    booking conditions for non-EU licences regardless of English-language
 *    status. The gap between "law says no" and "rental desk says maybe".
 *  - PSP officers carry portable card readers for on-the-spot fine
 *    collection from foreign-plated vehicles — there is no postal
 *    alternative. Fines escalate 50% if unpaid within 15 days.
 *  - Radar detector devices (hardware or active phone app) carry up to
 *    €2,500 fine — possession alone is the offence.
 *  - A22 Algarve toll system is fully electronic — Via Verde transponder
 *    or pre-registered plate at portugaltolls.com required. Plus the
 *    chip-and-PIN trap for US chip-and-signature cards at older booths.
 *
 * PDF languages used here (all verified on template):
 *   - Portuguese ✓ (page 11 of template)
 *   - English ✓
 *   - French ✓
 *   - Spanish ✓
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Portugal: 2026 Guide',
		description:
			'Portuguese law doesn\'t require an IDP for US licence holders — but rental companies often do. PSP officers carry portable card readers for on-the-spot fines. A22 Algarve is electronic-only. IDP Companion in 2 min — $35.',
		ogTitleShort: 'US Drivers in Portugal: IDP Guide 2026',
		ogSubtitle: 'Law says no. Rental desk says maybe. Cards work at tolls — sometimes.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Portugal',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-05-15',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'US → Portugal · 2026 Guide',
		title: 'IDP for US Drivers in Portugal: Legally Optional, Rental Desks Ask',
		lead: "The drive from Faro Airport into the Algarve feels familiar — right-hand traffic, same as home, the Atlantic on the right. Portuguese law under Decree-Law 138/2012 explicitly recognises US licences for tourist stays up to 185 days: an IDP is NOT legally required. The friction is on a different document. Hertz Portugal, Sixt Portugal, and most international chains list a translation document or IDP as a booking condition for non-EU licences — applied as policy regardless of English-language status. PSP officers carry portable card readers for on-the-spot fines from foreign plates (€120 for 20 km/h over the limit, collected before the car pulls back onto the road). A22 Algarve tolls are fully electronic — no cash booth alternative. Two minutes for the document closes the rental-desk gap before it becomes a question at Faro Airport in August.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Not legally required — but rental desks list it as a booking condition',
		text: 'Portugal explicitly recognises valid US driver licences for tourist stays up to 185 days without requiring an IDP. This is confirmed by Portuguese law (Instituto da Mobilidade e dos Transportes — IMT) and the US Embassy in Lisbon. In practice, Hertz, Sixt, Europcar, and most international chains list a translation document or IDP in their booking conditions for non-EU licences, applied as private contract policy independent of Portuguese law. IDP Companion closes that gap in two minutes.',
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in Portugal',
		lead: 'Portugal is the friendliest documentation situation for US drivers in mainland Europe — same side of the road, legally recognised licence, right-hand traffic. The IDP is the gap between what the law requires (nothing) and what the rental desk expects (something).',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Portugal',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Legally valid for tourist driving up to 185 days — Portugal explicitly recognises US licences under IMT rules. Likely questioned at rental desks that apply non-EU translation-document booking conditions strictly (Hertz, Sixt, most international chains).',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in 12 languages — including Portuguese (physically on the document), English, French, and Spanish. Satisfies rental-desk translation requirements; provides Portuguese-language reference at PSP stops where the portable card reader is already out.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry alongside IDP Companion: original physical US driver licence, US passport, rental agreement. Required in the vehicle cabin (not the boot): reflective high-visibility jacket, warning triangle. Right-hand traffic — same as the US.',
	},

	whyNotEnough: {
		heading: 'Why your US licence alone is sometimes not enough',
		lead: 'For most US tourists in Portugal, your licence is legally fine. The friction is at the rental desk and on the Algarve speed-limit transitions where the PSP officer is waiting.',
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-desk booking condition',
				text: 'Portuguese law\'s recognition of US licences is clear. Rental companies\' booking conditions are their own private contracts. Most major international chains — Hertz, Sixt, Europcar, Avis — list a translation document or IDP in their terms for non-EU licence holders. The desk agent\'s job is to follow the contract, not arbitrate Portuguese traffic law. US Embassy guidance notes that while Portuguese law doesn\'t require an IDP, car rental companies may require one.',
			},
			{
				icon: 'mdi:speedometer-medium',
				title: 'Algarve speed-limit transitions and portable card readers',
				text: 'Portuguese secondary roads — particularly in the Algarve and on coastal-town approaches — change speed limits frequently and without much advance warning. A road that feels like it should still be 90 km/h drops to 50 km/h at a town entry, and fixed cameras are common at these transitions. PSP officers are equipped with portable card terminals for on-the-spot fine collection from foreign-plated vehicles. There is no postal alternative for foreign plates — the fine is paid before the car pulls back onto the road, with a 15-day window before a 50% surcharge.',
			},
			{
				icon: 'ph:warning-bold',
				title: 'The radar-detector and chip-and-PIN traps',
				text: 'Portuguese law prohibits any device that detects speed cameras or interferes with police equipment — fine up to €2,500, hardware confiscated. This applies to active phone apps too. Separately: older Portuguese toll booths that accept card require chip-and-PIN; many US cards are chip-and-signature, which these terminals reject. Carry euros in cash for tolls, or confirm Via Verde is fitted in your rental.',
			},
		],
	},

	rules: {
		heading: 'Portuguese driving rules US drivers should know',
		lead: 'Right-hand traffic (same as the US). The genuine adjustments are the radar-detector prohibition, the 0.05% BAC limit (stricter than US), and the speed-limit transitions where the PSP camera or officer is waiting.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — no directional adjustment' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '50 km/h', note: '30 km/h in designated residential and school zones' },
			{ icon: 'mdi:road-variant', label: 'State road / single carriageway', value: '90 km/h', note: 'Drops to 50 km/h at town entries — camera-enforced' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway (autoestrada)', value: '120 km/h', note: 'Tolled — Via Verde transponder or pre-registered plate' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter than US 0.08%; 0.02% for drivers under 3 years experience' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: '€120–300 + points; hands-free permitted' },
			{ icon: 'ph:warning-octagon-bold', label: 'Radar detector', value: 'Prohibited', note: 'Up to €2,500 fine; hardware OR active phone app; possession alone is the offence' },
			{ icon: 'mdi:traffic-light', label: 'No amber after red', value: 'Green follows red directly', note: 'Portugal has no red-amber-green sequence — stay alert at junctions' },
		],
	},

	fines: {
		heading: '2026 fines collected on the spot from foreign-plated vehicles',
		lead: 'Portuguese traffic police are authorised to collect fines from foreign-registered vehicles on the spot via portable card terminals. Cash and card both accepted; receipts always issued. Fines not paid within 15 days increase by 50%.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding 1–20 km/h over', amount: '€60–120', severity: 'low', note: 'Fixed cameras and officer-issued; on-spot collection for foreign plates' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 20–40 km/h over', amount: '€120–300', severity: 'med', note: 'Collected immediately from foreign plates' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 40–60 km/h over', amount: '€300–600 + points', severity: 'high', note: '' },
			{ icon: 'ph:warning-octagon-bold', label: 'Radar detector device (any type)', amount: 'Up to €2,500', severity: 'high', note: 'Possession alone is the offence; device impounded; applies to active phone apps' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€120–300 + points', severity: 'med', note: 'Actively enforced' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€120–600', severity: 'med', note: 'Per person; driver liable for all passengers' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€250–500 + points', severity: 'high', note: '' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: '€250–1,250', severity: 'high', note: 'Criminal threshold above 0.12% BAC; suspension mandatory' },
			{ icon: 'mdi:clock-alert-outline', label: 'Fine unpaid after 15 days', amount: '+50% surcharge', severity: 'med', note: 'Pay at ANSR (Autoridade Nacional de Segurança Rodoviária), banks, or multibanco ATMs' },
		],
		caption: 'Sources: Portugal Código da Estrada — Articles 27, 86, 100-B (dre.pt); IMT Instituto da Mobilidade e dos Transportes (imt-ip.pt); ANSR — Autoridade Nacional de Segurança Rodoviária (ansr.pt).',
	},

	honesty: {
		heading: 'How IDP Companion fits in Portugal — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages, including Portuguese (physically on the document) plus English, French, Spanish — covering Portugal\'s rental-desk and PSP officer needs',
				'A standardised layout that\'s easier for a Portuguese rental agent or PSP officer to read than a US state-specific licence format',
				'An instant digital download — print before departure; printed copy preferred at PSP stops over phone screens',
				'Designed to be carried alongside your physical US licence, not as a replacement',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a legal requirement for US drivers in Portugal — you are explicitly recognised without one under Portuguese law',
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical US driver\'s licence',
				'Not a solution for the Via Verde toll gantry — that requires the rental car\'s transponder, not a document',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Portugal',
			items: [
				'At the rental desk when booking conditions list a translation document for non-EU licences (Hertz, Sixt, most international chains)',
				'At PSP stops on Algarve state roads where the portable card reader is already out — Portuguese-language presentation speeds the interaction',
				'When rental insurance documentation is reviewed after an incident — a Portuguese translation establishes validity clearly',
				'If you\'re extending the trip into Spain — IDP Companion covers it on the same purchase',
			],
		},
		needOfficial: {
			title: 'What Portuguese authorities and rental companies actually expect',
			items: [
				'Original physical US driver licence',
				'US passport',
				'Rental agreement and vehicle insurance certificate',
				'Reflective high-visibility jacket accessible in the vehicle cabin (not the boot) — to be worn if you exit on the road',
				'Warning triangle in the vehicle',
				'Euros in cash for older toll booths that may reject US chip-and-signature cards',
			],
		},
		pattern: 'The pattern: your US licence is legally sufficient in Portugal. The translation companion is what makes the rental-desk conversation shorter and the PSP stop faster. The radar-detector rule is the trap nobody warns you about until the device is confiscated.',
	},

	renting: {
		heading: 'Renting a car in Portugal as a US driver',
		lead: 'Major chains operate at Faro (FAO), Lisbon (LIS), Porto (OPO), and Funchal (FNC, Madeira). Local agencies are dense along the Algarve coast.',
		chains: [
			{ name: 'Hertz Portugal', policy: 'Available at FAO, LIS, OPO, FNC. Lists translation document or IDP in booking conditions for non-EU licences. Minimum age 21; under-25 surcharge standard. Credit card for deposit.' },
			{ name: 'Avis Portugal', policy: 'Same conditions for non-EU licences at most locations. Via Verde transponder available as add-on. Minimum age 21.' },
			{ name: 'Sixt Portugal', policy: 'Sixt\'s global policy notes that IDP is required when the licence is in a non-Roman alphabet. US licences are in English (Roman alphabet) — Sixt generally accepts US licences at their own desks; some partner locations apply stricter conditions.' },
			{ name: 'Europcar Portugal', policy: 'Consistent with other majors. US licence accepted with variable translation document requirement depending on location and booking source.' },
		],
		tipsHeading: 'Practical tips for US drivers in Portugal',
		tips: [
			'Via Verde: confirm at pickup whether the transponder is included in your rate or available as an add-on — the A22 in the Algarve is fully electronic with no cash booth alternative',
			'Chip-and-signature US cards may be rejected at older Portuguese toll booth terminals — carry €30–50 in cash as backup for these moments',
			'Speed-limit transitions catch Americans: the road that feels like 90 km/h drops to 50 km/h at town entries with cameras stationed at the transition',
			'Take the A22 (€4.40 Faro–Lagos via Via Verde) over the N125 — the N125 saves €4 in tolls and costs more in time and speed-camera risk in summer',
			'Active speed-camera detection phone apps — disable them before driving in Portugal; the radar-detector rule applies to software, not just hardware',
			'Reflective high-visibility jacket: must be in the cabin, not the boot — required to be worn if you exit the vehicle on any road or carriageway',
			'Parking in Lisbon: paid zones marked by blue lines; white is free (often resident-restricted); EMEL parking app covers central Lisbon',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Portugal',
		lead: 'The realistic range of outcomes for US tourists — ranked by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'common',
				label: 'US licence alone, smooth rental, clean drive',
				text: 'Many Portuguese rental agencies process US licences without explicit IDP requirement at the desk. Most week-long Algarve trips end without documentation friction.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'Rental desk requests translation document',
				text: 'Hertz, Sixt, and others apply the booking-condition formality. IDP Companion resolves on the spot. Without one, possible upgrade pressure or delay.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Algarve speed-limit transition camera triggers',
				text: '90 → 50 km/h transition at town entry. Camera-issued fine €60–120; on-the-spot collection if a PSP officer is positioned at the transition.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'PSP officer stop, portable card terminal',
				text: 'Fine collected on spot; receipt issued. The 15-day window matters — unpaid fines increase 50% then go to ANSR for correspondence.',
			},
			{
				severity: 'high',
				frequency: 'less common',
				label: 'Radar-detector hardware found OR active phone app',
				text: 'Up to €2,500 plus device confiscation. Applies to hardware units and, in principle, active speed-camera-alert phone apps. Disable before driving.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Chip-and-PIN card rejected at older toll booth',
				text: 'US chip-and-signature cards are rejected by older Portuguese toll terminals. Solution: carry euros in cash, or rely on Via Verde transponder which handles all modern routes automatically.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'DUI over 0.05% BAC',
				text: 'Stricter than US 0.08%. One glass of wine approaches the limit for many adults. Criminal threshold above 0.12% BAC.',
			},
			{
				severity: 'med',
				frequency: 'less common',
				label: 'Fine unpaid past 15 days',
				text: '+50% surcharge. Correspondence sent to your US address via the rental company\'s registration of your details.',
			},
		],
		math: 'IDP Companion is $35. One Algarve speed-limit-transition fine is €120 (~$130). The A22 Faro–Lagos toll is €4.40 via Via Verde. The radar-detector fine is up to €2,500. The 15-day window on a €120 fine becomes €180 if missed.',
	},

	phrases: {
		heading: 'Useful Portuguese phrases at rental desks and PSP stops',
		lead: 'Most major rental agency staff speak English. PSP officers in tourist areas are often English-capable; on state roads further from tourist areas, Portuguese moves faster.',
		items: [
			{ phrase: 'Aqui está a minha carta de condução', translation: 'Here is my licence', context: 'Handing over the physical US licence' },
			{ phrase: 'E o documento de tradução', translation: 'And the translation document', context: 'Showing IDP Companion alongside' },
			{ phrase: 'Sou turista americano / americana', translation: "I'm an American tourist (m./f.)", context: 'At a PSP stop' },
			{ phrase: 'Não compreendo bem português', translation: "I don't understand Portuguese well", context: 'If spoken to quickly — most officers will switch to English' },
			{ phrase: 'Há algum problema?', translation: 'Is there a problem?', context: 'Polite opener at a stop' },
			{ phrase: 'Tenho seguro', translation: 'I have insurance', context: 'In case of accident or paperwork question' },
			{ phrase: 'Aceita cartão?', translation: 'Do you accept card?', context: 'At toll booths or fuel stations — chip-and-signature cards may not work at older machines' },
			{ phrase: 'Preciso de ligar para a empresa de aluguer', translation: 'I need to call the rental company', context: 'If there\'s an incident' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Portugal (US citizens)',
		lead: 'Portugal is one of the cleaner preparations in this guide for US drivers — short list, mostly around the rental-desk gap and the Via Verde toll logistics.',
		schemaName: 'How to prepare for driving in Portugal as a US citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card. Portuguese law accepts US licences for tourist driving up to 185 days. No directional adjustment needed — Portugal drives on the right, same as the US.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. Portuguese is physically on the document. Covers the rental-desk translation-document booking condition that Hertz, Sixt, and most international chains apply to non-EU licences.',
			},
			{
				title: 'Confirm Via Verde at rental pickup',
				text: 'Ask whether the Via Verde transponder is included in your rate or available as an add-on. The A22 in the Algarve is fully electronic with no cash booth alternative — you need the transponder OR a pre-registered plate at portugaltolls.com.',
			},
			{
				title: 'Disable speed-camera alert apps before driving',
				text: 'The radar-detector prohibition (€2,500 fine) applies to active phone apps with camera-alert functionality, not just hardware units. Waze and Google Maps with passive markers fall into a grey area; hardware devices and active-alert apps are clearly prohibited. Disable before driving.',
			},
			{
				title: 'Carry euros in cash + reflective jacket in the cabin',
				text: 'Older Portuguese toll booths may reject US chip-and-signature cards — €30–50 in cash backup matters. The reflective jacket must be accessible from inside the vehicle, not the boot, and must be worn if you exit on any road. Warning triangle also required.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do US tourists legally need an IDP to drive in Portugal?',
				answer: 'No. Portugal explicitly recognises valid US driver licences for tourist stays up to 185 days without requiring an IDP. This is confirmed by the Portuguese Institute for Mobility and Transport (IMT) and the US Embassy in Lisbon. An IDP is not a legal requirement for US licence holders.',
			},
			{
				id: 2,
				question: 'Why do some rental companies ask for one then?',
				answer: 'Rental companies issue their own booking conditions as private contracts. Most major chains — Hertz, Sixt, Europcar — list a translation document or IDP as a requirement for non-EU licences in their terms. This is separate from Portuguese law. A desk agent following their company\'s contract may ask for one even though Portuguese law doesn\'t require it.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. Portuguese law (Código da Estrada) accepts US licenses for tourist driving up to 6 months — no IDP is legally required from the Portuguese side. IDP Companion is the multilingual translation aid (twelve widely-read languages including Portuguese from the Geneva 1949 set) — useful at Portuguese rental desks where translation-document booking conditions apply to non-EU license holders, and at PSP roadside stops where Portuguese-language verification speeds the documentation check. The official government IDP route is the printed Geneva 1949 booklet from the authorised national organisation.',
			},
			{
				id: 4,
				question: 'What\'s the portable card-reader situation — is that normal?',
				answer: 'Yes. Portuguese traffic police are legally authorised to collect fines from foreign-registered vehicles on the spot using portable card terminals. This applies specifically to vehicles from outside Portugal — the assumption is that postal fines to foreign addresses are difficult to enforce. A receipt is always issued, the amount is fixed by the fine schedule, and the interaction is professional. It is not informal or discretionary.',
			},
			{
				id: 5,
				question: 'Why is the alcohol limit stricter than in the US?',
				answer: 'Portugal sets 0.05% BAC for experienced drivers, compared to 0.08% in most US states. The practical difference: a single glass of wine is enough to approach 0.05% for many adults, particularly on an empty stomach. For drivers with fewer than three years\' licence-holding experience, the limit is 0.02% — near zero. If you\'re driving in Portugal after drinking, the safest approach is to wait at least two hours per drink, or simply not drive that evening.',
			},
			{
				id: 6,
				question: 'What\'s the radar-detector rule?',
				answer: 'Any device that searches for speed cameras or interferes with police equipment is illegal in Portugal under Article 100-B of the Código da Estrada. Fine up to €2,500, device confiscated. This applies to hardware units and, in principle, to phone apps with active speed-camera alert functionality. Waze and Google Maps with passive markers fall into a grey area; hardware devices and active-alert apps are clearly prohibited. Disable active-alert features before driving.',
			},
			{
				id: 7,
				question: 'What\'s the Via Verde toll system and how does it work for Americans?',
				answer: 'Via Verde is Portugal\'s electronic toll transponder system. Rental cars from major agencies have a Via Verde sticker fitted — tolls are detected automatically at gantries and billed to the rental company, charged to your card at trip end. The A22 in the Algarve, many Lisbon approaches, and several other routes are fully electronic with no cash booth alternative. If your rental doesn\'t have Via Verde, register your plate at portugaltolls.com before driving those routes.',
			},
			{
				id: 8,
				question: 'What should I know about US credit cards at Portuguese toll booths?',
				answer: 'Older Portuguese toll booths that accept card payment use chip-and-PIN terminals. Many US credit cards are chip-and-signature, which these machines reject. Solutions: carry €30–50 in cash specifically for toll booths; use a US bank card that supports PIN (some do); or confirm Via Verde is fitted in your rental, which eliminates cash-booth interactions on most modern Portuguese motorways.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to European destinations where the IDP question varies.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'us', flagTo: 'mt', label: 'US → Malta', status: 'Live', href: '/idp-for-us-drivers-in-malta/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
		],
	},

	finalCta: {
		heading: 'Law says no IDP needed. Rental desk says different.',
		text: 'Portuguese law recognises US licences. The rental desk may still ask for a translation document. PSP officers carry portable card readers for on-the-spot fines. The A22 costs €4.40 and the N125 costs more in time and camera risk. IDP Companion takes two minutes, has Portuguese physically on the document, and covers every rental desk in Faro, Lisbon, and Porto.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with Portugal's Instituto da Mobilidade e dos Transportes (IMT), the GNR (Guarda Nacional Republicana), the PSP (Polícia de Segurança Pública), or ANSR (Autoridade Nacional de Segurança Rodoviária). IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Portugal Código da Estrada — Articles 27, 86, 100-B — dre.pt',
			'IMT Instituto da Mobilidade e dos Transportes — imt-ip.pt',
			'ANSR — Autoridade Nacional de Segurança Rodoviária — ansr.pt',
			'US Embassy Lisbon — driving in Portugal guidance — pt.usembassy.gov',
			'Via Verde — viaverde.pt',
			'Portugal Tolls (non-Via-Verde registration) — portugaltolls.com',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Portugal',
	},
};

export const usPortugalCopy: Record<'en', CountryPairCopy> = { en };
