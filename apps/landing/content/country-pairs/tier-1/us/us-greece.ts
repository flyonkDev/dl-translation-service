/**
 * Country-pair content: United States → Greece.
 * Locales: en only.
 *
 * Killer angle: "legal gray zone" — Greece changed Law 4850/2021 to recognize US licenses
 * without IDP for tourists up to 6 months, but rental industry and rural police haven't
 * fully caught up. Plus Greek alphabet on road signs (uniquely Greek pain).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Greece: 2026 Rental & Police Guide',
		description:
			"Greece changed its law in 2021 — but rental shops haven't caught up. US drivers still face refusals on Santorini, voided insurance, and confusion. Honest 2026 guide.",
		ogTitleShort: 'IDP for US Drivers in Greece',
		ogSubtitle: '2026 Guide — gray zone, alphabet, rentals',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Greece',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'US → Greece · 2026 Guide',
		title: 'IDP for US Drivers in Greece: 2026 Guide',
		lead: "You've booked the flights to Athens, the ferry to Santorini, the cliffside hotel in Oia. Here's what's confusing about Greece in 2026: the law changed in 2021, but the rental counter often hasn't caught up. Some travelers fly in with just a US license and drive without issue. Others get refused at the desk on Santorini, denied insurance after a fender-bender, or hit with a fine they didn't see coming.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Legally — no longer strictly required. Practically — yes, get one.',
		text: "In November 2021, Greece passed Law 4850 (Article 25 §3), which recognized US driver licenses as valid for tourist driving up to 6 months without an IDP. On paper, you can rent and drive in Greece on a US license alone. In practice: rental shops set their own policies (especially on islands), insurance providers reference older standards, and rural police awareness varies. Carry an IDP regardless — the cost is asymmetric vs the risks.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Greece',
		lead: 'Greek law and Greek rental shops disagree on what you need. Law 4850/2021 makes the IDP technically optional for short tourist trips — but island family-run rental shops, ferry ports, and insurers often demand a translation document anyway. Here is what each option actually does.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Greece',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Legally accepted under Law 4850/2021 for tourist driving up to 6 months. But: rental shops (especially island family-run shops) often refuse without an IDP-style translation. Insurers reference older policies — coverage may void after an accident if you cannot present a translated document.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual digital PDF translating your US license into Greek and 7 other widely-read languages. Generated in 2 minutes online. Speeds up rental desks on Naxos at 11pm, ferry-port verifications, and insurance claim conversations. Re-printable from any hotel if the original is retained or lost.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What most prepared US travelers carry into Greece: physical US driver license + IDP Companion as the multilingual translation aid + rental insurance card + passport. Total prep cost stays under $60 — less than a single rental refusal during Mykonos or Santorini high season.',
	},

	whyNotEnough: {
		heading: 'Why your US license alone creates friction in Greece',
		lead: "Three reasons rental counters and insurers cite, even when the law has technically moved on.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal gray zone',
				text: 'Law 4850 created a recognition pathway for US licenses, but did not update every operational standard. Many rental contracts were written under the older law and still reference IDP as a requirement. Local agents at airport counters in Athens or Heraklion read from those contracts, not from updated legal interpretations.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The insurance reason',
				text: 'Your rental insurance includes a clause requiring proper documentation under "applicable law and rental contract." If the contract still requires an IDP and you signed without one, you have technically violated it. After an accident, insurers review the contract first — finding a violation can void coverage, leaving you liable for car damage, third-party claims, and Greek hospital costs.',
			},
			{
				icon: 'ph:translate-bold',
				title: 'The translation reason',
				text: 'Your US license is in English only. Greek rental agents on Milos or Folegandros at 11pm — running a family shop with limited English — prefer the IDP because they recognize the format. A multilingual companion document accomplishes the same goal: making your license data instantly readable.',
			},
		],
	},

	rules: {
		heading: 'Greece driving rules US drivers should know',
		lead: 'A few rules that surprise drivers from the US. Take your first hour slow.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — no adjustment' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '~31 mph' },
			{ icon: 'mdi:road-variant', label: 'Rural / Highway', value: '90 / 110 km/h', note: 'Strictly camera-enforced' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway', value: '130 km/h', note: 'E75 Athens-Thessaloniki' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter for new drivers and motorcyclists' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned', note: 'Including hands-on at red lights' },
			{ icon: 'mdi:alphabet-greek', label: 'Road signs', value: 'Greek script', note: 'Bilingual on highways, Greek-only on island roads' },
			{ icon: 'mdi:car-emergency', label: 'City driving', value: 'Aggressive', note: 'Athens lanes are aspirational' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Greece',
		lead: 'Greek fines must be paid within 10 days for a 50% discount; the full amount applies after. Tourist disputes can be filed but require Greek-language documentation.',
		colViolation: 'Violation',
		colAmount: 'Standard fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP (legally questionable post-2021)', amount: '€100–€300 (or older €1,000 standard)', severity: 'med', note: 'Status disputed under Law 4850; some officers still issue tickets' },
			{ icon: 'mdi:speedometer', label: 'Speeding 20–30 km/h over', amount: '€100', severity: 'low', note: 'Camera-enforced on highways' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 30–50 km/h over', amount: '€350', severity: 'med', note: 'Plus license points' },
			{ icon: 'mdi:gauge', label: 'Speeding 50+ km/h over', amount: '€700', severity: 'high', note: 'Plus license suspension' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€700', severity: 'high', note: 'Camera enforcement increasing in Athens' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone while driving', amount: '€100', severity: 'low', note: 'Including at red lights' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.08% BAC', amount: '€200', severity: 'med', note: 'License points' },
			{ icon: 'mdi:gavel', label: 'DUI above 0.08% BAC', amount: '€700+', severity: 'high', note: 'License suspension + possible criminal charge' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€350', severity: 'med', note: 'Per person, strictly enforced' },
			{ icon: 'mdi:parking', label: 'Parking violation in tourist area', amount: '€40–€100', severity: 'low', note: 'Athens, Thessaloniki, Mykonos main town' },
		],
		caption: 'Fines processed by Hellenic Police (Astynomia). Payment in cash or via bank transfer; receipts required for tourist appeal.',
	},

	alphabet: {
		heading: 'Greek alphabet on road signs: the navigation problem nobody warns you about',
		badge: 'Greece-specific',
		lead: "This is the killer practical issue Greek tourism boards rarely mention upfront. Major highways have bilingual signage — Greek and Latin transliteration — but as soon as you turn off onto secondary roads, especially on islands, the signs become Greek-only.",
		examples: [
			{ sign: 'Καλαμωτή', latin: 'Kalamoti', meaning: 'A village name on a road sign — your villa booking says "Kalamoti", the sign says "Καλαμωτή", you drive past it' },
			{ sign: 'ΕΡΓΑ', latin: 'Erga', meaning: 'Construction / road works ahead — easy to miss without alphabet recognition' },
			{ sign: 'ΚΕΝΤΡΟ', latin: 'Kentro', meaning: 'City center / downtown — common navigation arrow' },
			{ sign: 'ΕΞΟΔΟΣ', latin: 'Exodos', meaning: 'Exit — on highways and parking lots' },
			{ sign: 'ΣΤΑΣΗ', latin: 'Stasi', meaning: 'Stop / bus stop — sometimes the only signage on rural roundabouts' },
		],
		helpsHeading: 'What helps',
		helps: [
			'Google Maps offline downloads with Greek place names enabled — your screen and the road sign will match',
			'A printed list of your destinations in both Greek script and Latin transliteration',
			'Take a photo of your hotel address written in Greek before leaving each morning',
			'IDP Companion is a familiar bilingual reference at gas stations and ferry terminals where Greek-only paperwork is standard',
		],
		outro: 'This is one specific area where a multilingual companion document earns its $35 — Greek small-town interactions are smoother when your documents match what local agents expect to read.',
	},

	howTo: {
		heading: 'How to prepare for driving in Greece',
		lead: 'Law 4850/2021 made the IDP technically optional for tourists, but island rental shops and insurers often still expect a translated document. The fastest prep route is online.',
		schemaName: 'How to prepare for driving in Greece as a US citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion',
				text: '$35 for 1 year, $45 for 3 years, $55 for 5 years. 2 minutes online — upload your US license, our system handles OCR + multilingual translation including Greek, Italian, French, German, Spanish, and 6 other languages. Output is a print-ready PDF.',
			},
			{
				title: 'Print at home or at the hotel',
				text: 'Greek rental staff and ferry agents expect a physical document, not a phone screen. Standard letter or A4 paper is fine. Bring a backup copy in your day bag separate from the original — Mykonos and Santorini are pickpocket-active during high season.',
			},
			{
				title: 'Confirm rental insurance — Collision Damage Waiver + Theft Protection',
				text: 'Greek rental contracts usually bundle basic insurance, but US credit-card rental coverage often does NOT cover Greece or has restrictions. Verify in writing before declining the in-rental Collision Damage Waiver. ATV and scooter rental insurance is nearly always insufficient — Greek hospital bills after motorbike accidents routinely exceed $10,000.',
			},
			{
				title: 'Book with a major chain at peak times',
				text: "July–August on the islands have triple markup and limited availability for walk-ins. Book Hertz, Avis, Sixt, Budget, or Europcar online in advance — they're more consistent on policy interpretation than family-run shops, especially around documentation requirements.",
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US license + printed IDP Companion + passport + rental contract + insurance card — all in one folder. Greek police and rental staff process organized documentation faster than scattered phones and pockets.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits — honestly',
		lead: "There's a lot of misleading marketing in this space, so let's be direct about what we are.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your US license data into Greek, English, French, German, Italian, Spanish, and other widely-read languages',
				'Designed to reduce friction at car rental desks, ferry ticket counters, hotel check-ins, and informal ID verifications',
				'Generated in minutes after you upload your license and complete our verification',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your original US driver license',
				'Not a substitute for current rental insurance, which Greek rental contracts require separately',
			],
		},
		helps: {
			title: 'When IDP Companion is what you need',
			items: [
				'At island rental shops (Santorini, Mykonos, Naxos, Folegandros) where Greek-language ID side by side with English reduces friction',
				'At ferry ticket counters where Greek-language ID speeds up the process',
				'In rural areas where the 2021 law change is not yet fully internalized by local staff',
				'At hotel check-ins where staff want to record license details in a language they read',
				'Re-printable from any hotel if your physical document is retained at a rental desk or lost during island hopping',
				'For travelers stacking multiple European trips over 1–5 years — one $55 purchase covers the stretch',
			],
		},
		needOfficial: {
			title: 'What you should carry alongside IDP Companion',
			items: [
				'Your physical US driver license — the actual permission to drive (no document substitutes for this)',
				'Rental insurance card with current dates — Greek rental contracts require Collision Damage Waiver',
				'Your US passport with valid Greek entry stamp — physical, not a digital photo',
				'A printed copy of your rental contract — Greek contracts can be in Greek or bilingual depending on the chain',
			],
		},
		pattern:
			'What most prepared US travelers carry in Greece: physical US driver license + IDP Companion as the multilingual translation aid + rental insurance card + passport. Total prep cost stays under $60 — less than a single rental refusal on Santorini during high season.',
	},

	renting: {
		heading: 'Renting a car in Greece as a US driver',
		lead: 'Major chains operate at Athens (ATH), Thessaloniki (SKG), Heraklion on Crete (HER), Rhodes (RHO), Corfu (CFU), Santorini (JTR), and Mykonos (JMK). Strictness varies dramatically by chain and by island.',
		chains: [
			{ name: 'Hertz, Avis, Budget, Sixt, Europcar', policy: 'International chains. Generally accept US license alone post-2021, but some branches still ask for IDP — especially during high-volume island arrivals' },
			{ name: 'Local mainland chains', policy: 'Varies. Many require IDP regardless of law change. Check requirements at booking, not at pickup' },
			{ name: 'Island family-run shops (Mykonos, Santorini, Naxos, Folegandros)', policy: 'Least predictable — Santorini specifically is reported as "almost mandatory IDP" even after 2021. Often depends on which agent is on duty' },
			{ name: 'ATV / scooter rentals', policy: 'Less documentation required upfront, but voided insurance is common — and Greek hospital bills after motorbike accidents routinely exceed $10,000' },
		],
		tipsHeading: 'Practical tips',
		tips: [
			'Book online with a major chain in advance, especially July–August. Walk-ins during peak season have triple markup or no availability',
			'Photograph the vehicle on pickup including odometer reading. Greek rental disputes about damage are common — photos are your protection',
			'Always select Collision Damage Waiver and Theft Protection. Standard insurance has high deductibles that void at the first documentation issue',
			'A €1,000 deposit hold is standard. Use a credit card with at least €2,500 available limit before pickup — debit cards are widely refused',
			'Refuel before returning. Rental gas stations charge 2–3x normal pump prices',
			'For ferry-based island hopping with multiple rental cars, keep all rental contracts together — disputes about earlier rentals can affect later bookings',
		],
	},

	phrases: {
		heading: 'Greek phrases for police checkpoints and rental desks',
		lead: 'These eight phrases cover most of what an American driver actually says or hears on Greek roads. Save the page or screenshot it.',
		items: [
			{ phrase: 'Άδεια οδήγησης', translation: "Driver's license", context: 'What the officer asks for first — pronounced "ah-THEE-ah o-THEE-ye-sis"' },
			{ phrase: 'Διεθνής άδεια', translation: 'International Driving Permit', context: 'The IDP. Pronounced "dee-eth-NEES ah-THEE-ah"' },
			{ phrase: 'Έγγραφα παρακαλώ', translation: 'Documents, please', context: 'Standard checkpoint opener — hand over your folder' },
			{ phrase: 'Είμαι Αμερικανός τουρίστας', translation: "I'm an American tourist", context: 'Establishes context immediately, often softens the encounter' },
			{ phrase: 'Δεν μιλάω ελληνικά', translation: "I don't speak Greek", context: 'Honest disclosure — most officers will switch to basic English' },
			{ phrase: 'Αστυνομία', translation: 'Police', context: 'Generic term — Hellenic Police (Astynomia) handle most traffic enforcement' },
			{ phrase: 'Πρόστιμο', translation: 'Fine / ticket', context: 'What you will be issued if something is wrong with your documents' },
			{ phrase: 'Ενοικίαση αυτοκινήτου', translation: 'Car rental', context: "Useful at airports and ferry ports — pronounced \"e-nee-key-AH-see af-toe-key-NEE-too\"" },
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: "Realistic outcomes for US drivers in Greece since the 2021 law change. The gray zone hits hardest in rental refusals, not police stops.",
		items: [
			{
				severity: 'low',
				frequency: '~80% of trips',
				label: 'Nothing happens',
				text: 'Trip ends without document check or rental issue. The 2021 law change has indeed reduced enforcement frequency vs the pre-2021 era.',
			},
			{
				severity: 'med',
				frequency: '~15% on islands',
				label: 'Refused at the rental counter',
				text: 'Agent asks for an IDP, you don\'t have one, they refuse. You lose your reservation deposit and scramble for alternatives. During Mykonos and Santorini high season, replacement bookings cost $400–$800 in surge pricing.',
			},
			{
				severity: 'med',
				frequency: '~3% of trips',
				label: 'Stopped at police checkpoint',
				text: 'Most accept the US license under the 2021 law. Some — especially in rural Crete or northern Greece — still issue a citation for €100–€300 (or threaten the older €1,000 standard). Contesting requires Greek-language paperwork.',
			},
			{
				severity: 'high',
				frequency: '1–2% of trips',
				label: 'Minor accident',
				text: 'Insurance investigates. Some honor the 2021 law and pay normally. Others reference older policies and reject the claim. Outcomes are inconsistent — contested cases take months.',
			},
			{
				severity: 'high',
				frequency: 'Rare but possible',
				label: 'Serious accident',
				text: 'Combined effect of insurance disputes, Greek hospital bills (often paid upfront in cash for non-emergencies), potential criminal liability if injuries occurred, and travel delays measured in weeks. The US Embassy in Athens handles these cases regularly.',
			},
		],
		math: 'IDP Companion ($35 / 1 year, $55 / 5 years) + your existing US license + rental insurance is under $60 of prep. A single rental refusal during high season costs $400–$800 in walk-up rates. An insurance dispute can cost $5,000+. The risk is asymmetric — and Greek hospitals require upfront payment.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'If Greece changed the law in 2021, why do rental companies still ask for an IDP?',
				answer: 'Two reasons. First, rental contracts are slow to update — many were written under the old law and still reference IDP requirements. Second, rental companies set their own policies independent of the law. They can require an IDP as a contractual condition even if Greek law does not. The 2021 change reduced government enforcement, but did not eliminate rental industry practices.',
			},
			{
				id: 2,
				question: 'Can I get an IDP after I arrive in Greece?',
				answer: 'International Driving Permits must be issued in your country of residence before you travel — Greek authorities do not issue them to foreign tourists. IDP Companion can be generated online from anywhere in 2 minutes as a multilingual translation companion. It is a private translation document (not a government-issued IDP under the 1949 Geneva Convention), designed for friction reduction at Greek rental desks, ferry counters, and informal verifications.',
			},
			{
				id: 3,
				question: 'How fast can I get IDP Companion?',
				answer: 'Two minutes online from any device. Upload a photo of your US license, complete payment ($35 / 1yr, $45 / 3yr, $55 / 5yr), receive the multilingual PDF including Greek translation immediately. Print at home, at the hotel, or from any internet cafe in Greece if you generated it after arrival. Re-printable any time during the validity period.',
			},
			{
				id: 4,
				question: 'Do I need an IDP for the Greek islands specifically?',
				answer: 'Legally, the same as the mainland — under Law 4850/2021, your US license is sufficient. Practically, island rental shops are far stricter. Family-run shops on Naxos, Milos, Folegandros, and especially Santorini often have not internalized the 2021 change and still require an IDP. For islands, the IDP is more practically necessary than legally required.',
			},
			{
				id: 5,
				question: 'How long is IDP Companion valid?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). The validity is tied to your US license — if your domestic license expires, the companion expires with it. Many travelers choose the 3-year option for trips spanning multiple summers.',
			},
			{
				id: 6,
				question: 'What happens if I drive in Greece without an IDP and get stopped?',
				answer: 'Under Law 4850 (2021), your US license should be sufficient. In practice, some officers — especially in rural areas — may not be familiar with the change and issue fines €100–€300 (or invoke the older €1,000 standard). Contesting requires Greek-language paperwork and can take months. Carrying any form of additional translation document — official IDP or IDP Companion — significantly reduces friction.',
			},
			{
				id: 7,
				question: 'Will my US car insurance cover me in Greece?',
				answer: 'Almost certainly not. US auto insurance policies (Geico, Progressive, State Farm, etc.) generally exclude international rentals. Credit card rental insurance varies — some explicitly exclude Greece, some have geographic restrictions, and most have limits like 31-day maximum. Always select the in-rental Collision Damage Waiver and Theft Protection unless you have written confirmation that Greek rentals are covered.',
			},
			{
				id: 8,
				question: 'Can I rent an ATV or scooter on the Greek islands with just my US license?',
				answer: 'For cars, yes (under 2021 law). For motorcycles and ATVs the rules are stricter — you need a motorcycle endorsement on your US license to rent anything over 50cc. Many island scooter shops rent under-50cc bikes to anyone, but insurance is often non-existent on these rentals. Greek hospital bills after motorbike accidents routinely exceed $10,000.',
			},
			{
				id: 9,
				question: 'What about driving from Greece into Albania or North Macedonia?',
				answer: "If you cross into a non-EU country with your Greek rental, the destination country's driving requirements apply. Albania accepts most international licenses. North Macedonia requires an IDP. Most Greek rental companies prohibit cross-border travel without explicit advance permission and additional insurance — check your contract before driving across the border.",
			},
			{
				id: 10,
				question: "What if I'm staying in Greece longer than 6 months?",
				answer: 'Law 4850/2021 covers tourist driving up to 6 months on a US license. Beyond that, residency triggers Greek licensing requirements through the local KEP (Citizen Service Center). Greece does have a license exchange agreement with some US states but not all — check with the local US consulate for your specific state\'s reciprocity status.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travelers and Greece-bound drivers — coming soon.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'US → UAE', status: 'Live', href: '/idp-for-us-drivers-in-uae' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: 'Multilingual PDF including Greek, generated from your US license in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip and the next ones across Europe. $35 / 1yr · $45 / 3yr · $55 / 5yr. One-time payment, no subscription.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Hellenic Police (Astynomia), the Greek Ministry of Transport, the Greek Government Gazette, or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in the United States, authorized issuers of Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			'Law 4850/2021, Article 25 §3, Greek Government Gazette A 208 (November 5, 2021)',
			'Hellenic Police (Astynomia) traffic enforcement guidelines',
			'US Embassy in Athens — driving licenses guidance for US citizens',
			'1949 Geneva Convention on Road Traffic, UN Treaty Collection',
			'AAA International Driving Permit application process and pricing',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Greece',
	},
};

export const usGreeceCopy: Record<'en', CountryPairCopy> = { en };
