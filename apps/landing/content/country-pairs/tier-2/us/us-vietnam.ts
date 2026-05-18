/**
 * Country-pair content: United States → Vietnam.
 * Tier 2. Locales: en only.
 *
 * Killer angles for Vietnam — the trickiest case in this batch:
 *  - 1949 vs 1968 CONVENTION MISMATCH. Vietnam ratified the 1968 Vienna
 *    Convention. The US signed only the 1949 Geneva Convention. Officially,
 *    1949 IDPs are NOT recognised in Vietnam. The standard US-issued
 *    Geneva 1949 IDP is technically rejected at Ha Giang Loop checkpoints.
 *  - SUB-50cc scooters do NOT require a licence or IDP under Vietnamese
 *    law — legitimate option for casual city/beach use.
 *  - EASY RIDER guides (local motorbike guides who take tourists as
 *    passengers) — you ride pillion, no licence needed, the guide handles
 *    all checkpoints. $100-200 for multi-day Ha Giang Loop.
 *  - January 2025 traffic law update: zero BAC for motorbike riders +
 *    increased documentation fines (VND 2-4M for 50-175cc, VND 6-8M for
 *    over 175cc).
 *  - 30-day Denpasar-style local tourist licence at Vietnamese police
 *    stations is NOT available (this is Indonesia confusion).
 *
 * Middle-pivot edge case: this page's central thesis is the convention
 * mismatch. We CAN discuss "1949 IDPs issued in the US" generically
 * without naming AAA. Avoid "AAA" outside legal disclaimer per binding
 * rule, even when discussing the format gap.
 *
 * PDF language note: Vietnamese IS on the IDP Companion template (page 14
 * of the Geneva 1949 standard set) — verified. All Vietnamese-language
 * claims here are honest.
 *
 * Optional blocks: rejects (Vietnam rejects 1949), phrases (Vietnamese),
 * howTo.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Vietnam: 2026 Guide',
		description:
			'Vietnam only accepts 1968 Vienna Convention IDPs. The US issues 1949 Geneva Convention format. The standard US IDP is technically rejected at Ha Giang. Here\'s what US tourists can actually do — legally and honestly. IDP Companion in 2 min — $35.',
		ogTitleShort: 'US Drivers in Vietnam: IDP Guide 2026',
		ogSubtitle: 'US issues 1949 IDPs. Vietnam requires 1968. Honest options for US tourists.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Vietnam',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Vietnam · 2026 Guide',
		title: 'IDP for US Drivers in Vietnam: The 1949 vs 1968 Convention Problem',
		lead: "The checkpoint on the Ha Giang Loop appears past Dong Van, where the road climbs toward the Chinese border. The officer asks for licence and IDP. The American on a Honda Win pulls out a Texas licence and the standard US-issued 1949 Geneva Convention IDP booklet. The officer turns it over and says one word translated by his colleague: 1949. Vietnam ratified the 1968 Vienna Convention; the US signed only 1949. These are different international treaties with different signatory countries. Vietnamese traffic law specifies 1968. At Ha Giang specifically, officers check the convention year on the booklet cover — 1949 IDPs are rejected, treated as if no IDP were present. The fine for over-175cc without valid documentation is VND 6,000,000-8,000,000 (~$230-310) since the January 2025 update, plus possible 10-15 day vehicle impound and voided insurance. The Easy Rider guide route ($100-200 for multi-day Ha Giang as passenger) is the cleanest legal solution for committed riders.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — but the standard US-issued IDP doesn\'t legally satisfy Vietnamese law',
		text: 'Vietnamese traffic law requires a 1968 Vienna Convention IDP alongside the national licence for any motorised vehicle over 50cc. The US issues IDPs under the 1949 Geneva Convention only. At Ho Chi Minh City and Hanoi, city enforcement is inconsistent and most riders pass unchecked. At Ha Giang Loop and provincial checkpoints, officers specifically check convention year and reject 1949-format documents. Practical options for US tourists: (1) ride sub-50cc scooters which need no licence by Vietnamese law, (2) hire an Easy Rider guide and travel as passenger, (3) carry IDP Companion as the Vietnamese-language translation that resolves the readability gap at city checkpoints where the practical standard is "readable document" rather than convention year.',
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in Vietnam',
		lead: "Vietnam is the most legally nuanced destination in this guide for US drivers. The convention-format issue is real and specific — but in most of the country, day-to-day enforcement is about readable documentation rather than the year stamped on a government booklet.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Vietnam',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Not legally sufficient — Vietnamese law requires a 1968 Vienna Convention IDP alongside the national licence for any motorised vehicle over 50cc. Officially treated as undocumented driving; insurance void; fines under the January 2025 schedule (VND 2-4M for 50-175cc, VND 6-8M for over 175cc).',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + US licence',
				whatItDoes: 'Multilingual digital PDF with Vietnamese (physically on the document, page 14 of the Geneva 1949 standard set) plus English, French, Spanish. Resolves the readability gap at city rental desks and Ho Chi Minh / Hanoi / Da Nang checkpoints where the practical standard is a recognisable document. Does NOT resolve the 1968 convention requirement at Ha Giang or provincial enforcement checkpoints.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'For committed Ha Giang riders: the cleanest legal solution is hiring an Easy Rider guide ($100-200 multi-day) and travelling as passenger — no personal licence or IDP needed. Sub-50cc scooters in cities also need no documentation under Vietnamese law. Vietnam drives on the RIGHT — same as the US.',
	},

	whyNotEnough: {
		heading: 'Why the convention problem is real',
		lead: 'Two international treaties govern IDP recognition globally. The US is on one. Vietnam is on the other. This isn\'t a paperwork technicality — it\'s a documented enforcement reality at specific checkpoints.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The 1949 / 1968 distinction',
				text: 'The 1949 Geneva Convention on Road Traffic was signed by the US, Canada, Australia, and Japan. The 1968 Vienna Convention on Road Traffic was signed by most of Europe, Russia, and Vietnam. Countries that only signed 1949 cannot officially issue a 1968 IDP. The US signed 1949 only. Standard US-issued IDP booklets say "1949 Convention" on the cover. Vietnamese traffic law specifies 1968. These are different international treaties with different signatory countries — not a paperwork formality.',
			},
			{
				icon: 'ph:map-pin-bold',
				title: 'Enforcement is geographically uneven',
				text: "At Ho Chi Minh City and Hanoi city checkpoints: officers typically look for whether a document exists, not which convention year it was issued under. A translation document or any form of IDP reduces friction here. At the Ha Giang Loop, Hai Van Pass, and provincial border-area checkpoints: officers specifically trained to check the convention year on the booklet cover — 1949 IDPs are rejected. The convention gap is specific to enforcement zones, not universal.",
			},
			{
				icon: 'ph:warning-bold',
				title: 'January 2025 fine increases + zero BAC for riders',
				text: 'Vietnam updated its road rules in January 2025: documentation fines increased (VND 2-4M for 50-175cc bikes, VND 6-8M for over 175cc, plus possible 10-15 day vehicle impound), AND the alcohol limit for motorbike riders dropped to 0.00% BAC — zero tolerance. Car drivers retain 0.05%. The financial exposure if you crash on a Ha Giang corner without recognised documentation includes voided insurance and direct medical liability — your travel insurance policy excludes injuries sustained while violating local law.',
			},
		],
	},

	rules: {
		heading: 'Vietnamese driving rules US drivers should know — Bali-style preparation matters here',
		lead: 'Right-hand traffic (same as the US). The genuine adjustments are the 1968 IDP requirement, the January 2025 zero-BAC rule for motorbike riders, and the traffic flow in Ho Chi Minh City and Hanoi.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — no directional adjustment' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '40–60 km/h', note: '30 km/h in some school and residential zones' },
			{ icon: 'mdi:road-variant', label: 'Provincial roads', value: '60–90 km/h', note: 'Where signed' },
			{ icon: 'mdi:speedometer-medium', label: 'Expressways', value: '90–120 km/h', note: 'Camera enforcement increasing' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (motorbike)', value: '0.00% BAC', note: 'Zero tolerance since January 2025; any detectable alcohol = violation' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (car)', value: '0.05% BAC', note: 'Stricter than US 0.08%' },
			{ icon: 'mdi:helmet', label: 'Helmet (motorbike)', value: 'Mandatory, fastened', note: 'Must be on head, not handlebars; passengers too; VND 200-400K fine' },
			{ icon: 'ph:motorcycle-bold', label: 'Sub-50cc scooter', value: 'No licence/IDP', note: 'Vietnamese law exempts vehicles under 50cc entirely — fully legal for tourists' },
		],
	},

	fines: {
		heading: '2026 fines (updated January 2025)',
		lead: 'Vietnam updated its road rules in January 2025 — documentation penalties increased significantly. Camera enforcement is increasing on expressways. Cash collection at provincial checkpoints is documented.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Riding without valid IDP, 50–175cc', amount: 'VND 2,000,000–4,000,000 (~$80–160)', severity: 'med', note: 'January 2025 update; vehicle impound 10-15 days possible' },
			{ icon: 'mdi:card-account-details-outline', label: 'Riding without valid IDP, over 175cc', amount: 'VND 6,000,000–8,000,000 (~$230–310)', severity: 'high', note: 'Larger bike = larger fine; impound; insurance void' },
			{ icon: 'ph:warning-bold', label: '1949 IDP presented at Ha Giang checkpoint', amount: 'Same as no IDP', severity: 'high', note: 'Convention year specifically enforced; 1949 booklet rejected' },
			{ icon: 'mdi:speedometer', label: 'Speeding (provincial road)', amount: 'VND 800,000–3,000,000 (~$32–120)', severity: 'med', note: 'Speed cameras increasing on expressways' },
			{ icon: 'mdi:helmet', label: 'No helmet (or unfastened)', amount: 'VND 200,000–400,000 (~$8–16)', severity: 'low', note: 'Applies to passengers too' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'VND 1,000,000–2,000,000 (~$40–80)', severity: 'med', note: '' },
			{ icon: 'mdi:beer-outline', label: 'Zero BAC violation (any alcohol + motorbike)', amount: 'VND 2,000,000–3,000,000 (~$80–120)', severity: 'high', note: 'January 2025 rule; zero tolerance for riders only' },
			{ icon: 'mdi:shield-off-outline', label: 'Accident without valid documentation', amount: 'Uncapped personal liability', severity: 'high', note: 'Travel insurance exclusion for violating local law; medevac out of Vietnam = $50K+' },
		],
		caption: 'Sources: Vietnamese Road Traffic Law No. 23/2008/QH12 (amended); January 2025 fine schedule update; Vietnam Traffic Police (Cảnh sát giao thông). VND/USD approximated at 25,500:1 May 2026.',
	},

	rejects: {
		heading: 'What Vietnam rejects from standard US documentation',
		badge: 'Convention mismatch',
		lead: 'Vietnam is one of the few destinations where the standard US-issued IDP is officially rejected at certain checkpoints — specifically because of the 1949 vs 1968 convention distinction. Worth understanding before you board the flight:',
		items: [
			{
				icon: 'ph:scales-bold',
				title: 'The 1949 Geneva Convention IDP',
				text: 'The standard IDP booklet available in the US (issued under the 1949 Geneva Convention on Road Traffic) is NOT officially recognised by Vietnamese traffic law. Vietnamese law specifies 1968 Vienna Convention IDPs. Cities and tourist-area enforcement is inconsistent, but the Ha Giang Loop, Hai Van Pass, and provincial checkpoints specifically check convention year on the booklet cover.',
			},
			{
				icon: 'ph:credit-card-bold',
				title: '"30-day tourist licence at Vietnamese police stations"',
				text: 'Some older travel forums recommend obtaining a temporary tourist driving licence at Vietnamese police stations after arrival. This option does NOT exist for Vietnam — that\'s confusion with Indonesia (where the equivalent was also discontinued in 2024). Vietnamese authorities do not issue temporary tourist driving permits to non-resident visitors.',
			},
			{
				icon: 'ph:device-mobile-bold',
				title: 'Phone-screen documentation at provincial checkpoints',
				text: 'Officers at Ha Giang and Hai Van Pass checkpoints expect physical printed documents. Phone screens with a PDF copy of the IDP are inconsistently accepted — most officers prefer the printed booklet or printed translation document for the documents check. Print before departure.',
			},
			{
				icon: 'ph:cardholder-bold',
				title: 'A car driving licence claimed for scooter operation',
				text: 'If your US licence carries only a car class (no motorcycle endorsement) and you ride a scooter over 50cc in Vietnam, the vehicle category mismatch is a separate violation from the convention issue — both apply and stack. Sub-50cc scooters need no licence at all; over 50cc requires motorcycle-class authorisation.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Vietnam — honestly',
		lead: "Vietnam is where we are most direct about what IDP Companion does and doesn't do. The convention gap is real and we won't pretend otherwise.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF presenting your US licence data in 12 languages including Vietnamese (physically on the document, page 14 of the standard Geneva 1949 set) plus English, French, Spanish',
				'A translation companion that resolves the readability problem at Ho Chi Minh City, Hanoi, Da Nang, and other city-area checkpoints where the practical standard is "recognisable document" rather than "1968 convention year"',
				'An instant digital download — print before departure; printed copy required at provincial checkpoints where phone screens are inconsistently accepted',
				'Designed to be carried alongside your physical US licence, not as a replacement',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'NOT a 1968 Vienna Convention IDP — it does not resolve the convention requirement at Ha Giang Loop checkpoints or other convention-year-specific enforcement zones',
				'Not a government-issued International Driving Permit under any convention — it is a private multilingual translation document',
				'Not a substitute for the Easy Rider guide option if Ha Giang is the specific goal — the convention enforcement there is real',
				'Not a motorcycle endorsement that doesn\'t exist on your US licence — if your US state licence is car-only, IDP Companion cannot add an M/MC class',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Vietnam',
			items: [
				'At rental desks in Hanoi, Ho Chi Minh City, Da Nang, and beach towns — Vietnamese-language translation satisfies most rental staff requirements',
				'At city police checkpoints where the practical standard is a readable document rather than convention verification',
				'For sub-50cc scooter use — legally no IDP needed, but a translation companion adds credibility at any check',
				'For car rentals where the translation document satisfies agency requirements',
				'If combining Vietnam with Thailand, Indonesia, or Japan — IDP Companion covers those destinations on the same purchase',
			],
		},
		needOfficial: {
			title: 'What Vietnamese authorities expect — by route and vehicle',
			items: [
				'Hanoi / Ho Chi Minh City / Da Nang / Hoi An / Mui Ne: physical US licence + readable translation document + STNK (provided by rental shop) + helmet (worn, fastened)',
				'Ha Giang Loop / provincial checkpoints: 1968 Vienna Convention IDP required by law — if not held, the cleanest solution is to hire an Easy Rider guide and ride as passenger',
				'Sub-50cc scooter anywhere: no licence/IDP required by Vietnamese law',
				'Car with private driver (city-to-city): no personal licence issue — you travel as passenger',
			],
		},
		pattern: "The pattern: IDP Companion resolves the language problem. It doesn't resolve the convention problem. In most of Vietnam (cities, beaches, tourist areas), the language problem is the one being enforced day-to-day. At Ha Giang specifically, the convention is what's checked — and an Easy Rider guide is the cleanest legal route.",
	},

	renting: {
		heading: 'Renting in Vietnam — three documentation realities',
		lead: 'Vietnamese rental categories vary widely in documentation enforcement. The convention gap matters most at provincial checkpoints, not at the rental desk.',
		chains: [
			{ name: 'Tigit Motorbikes (Hanoi, Ho Chi Minh City)', policy: 'Reputable foreign-managed operator. Requires motorcycle-endorsed IDP for bikes over 150cc. Updated March 2026: 1968 online IDPs checked more carefully — printed booklet format required, not PDF on phone. Honest about convention requirements with foreign customers.' },
			{ name: 'Rentabike Vietnam (multiple cities)', policy: 'Requires 1968 convention IDP for all rentals over 50cc. Accepts IDP Companion as translation document for smaller bikes at agent discretion.' },
			{ name: 'Local rental shops (Old Quarter Hanoi, Hoi An, Mui Ne)', policy: 'Many accept passport deposit and US licence without IDP verification. Legal for under 50cc; risk-bearing for larger bikes — the rental shop doesn\'t check, the provincial checkpoint does.' },
			{ name: 'Easy Rider services (multi-day, all routes)', policy: 'Local Vietnamese motorbike guides who carry tourists as passengers. You ride pillion; zero personal documentation needed. Multi-day Ha Giang guide services run $100–$200. The cleanest legal route for Ha Giang specifically.' },
		],
		tipsHeading: 'Practical tips for US drivers in Vietnam',
		tips: [
			'Print IDP Companion before departure — provincial checkpoints (Ha Giang, Hai Van Pass) expect physical documents, not phone screens',
			'Check your US licence for motorcycle endorsement (M, MC, or motorcycle class) before booking anything over 50cc — Vietnamese law requires the vehicle category to match',
			'Sub-50cc scooter in Old Quarter Hanoi or Hoi An is fully legal with zero documentation — easy first-day option for casual exploration',
			'Helmet must be fastened on head — carrying on handlebars or unbuckled does not satisfy the check; passengers must also wear helmets',
			'Zero BAC for motorbike riders since January 2025 — even one drink is a violation if you ride afterward; ride apps (Grab) cover the urban corridor cheaply',
			'For Ha Giang Loop: Easy Rider guide ($100-200 multi-day, you as passenger) is the cleanest legal route — the guide handles all checkpoint interactions',
			'Fuel widely available; northern rural areas have small local stations; keep tank above half on mountain routes',
			'Horn use is communication, not aggression — Vietnamese traffic uses honks to signal presence at corners and during overtaking; expect constant city horn use',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Vietnam — by route',
		lead: 'The realistic range of outcomes for US tourists varies dramatically by route and documentation approach.',
		items: [
			{
				severity: 'low',
				frequency: 'very common',
				label: 'Sub-50cc scooter in cities',
				text: 'No licence required by Vietnamese law. Fully legal for all drivers regardless of nationality. The simplest option for casual Hanoi Old Quarter, Hoi An, and beach-town riding.',
			},
			{
				severity: 'low',
				frequency: 'very common',
				label: 'Easy Rider passenger, Ha Giang',
				text: 'You ride pillion behind a licensed Vietnamese guide. No personal documentation needed. The guide handles all checkpoints. Cleanest legal route for committed Ha Giang riders.',
			},
			{
				severity: 'low',
				frequency: 'very common',
				label: 'Car with private driver, city-to-city',
				text: 'Standard arrangement for Hanoi-to-Hue, Da Nang-to-Ho Chi Minh, and other business/family travel. No personal licence issue; you travel as passenger.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'City scooter 50–175cc, IDP Companion present',
				text: 'Officer reads Vietnamese translation; document is recognisable; typically proceeds without convention-year discussion. City-area enforcement focuses on readability.',
			},
			{
				severity: 'low',
				frequency: 'occasional',
				label: 'City checkpoint, no documentation at all',
				text: 'Inconsistent enforcement in city areas; many riders pass without incident. Fine risk exists if officer pursues. Not recommended as a deliberate strategy.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: 'Ha Giang Loop, 1949 IDP presented',
				text: 'Convention year specifically checked on booklet cover. 1949 IDP rejected — same outcome as having no IDP. Fine VND 2-4M (~$80-160); vehicle impound 10-15 days possible.',
			},
			{
				severity: 'high',
				frequency: 'occasional',
				label: 'Ha Giang Loop, over 175cc, no IDP at all',
				text: 'Higher fine bracket: VND 6-8M (~$230-310). Vehicle impound. Insurance void from that moment for the duration of the trip.',
			},
			{
				severity: 'high',
				frequency: 'rare with preparation',
				label: 'Accident without valid documentation',
				text: 'Travel insurance exclusion for violating local law applies. Full personal liability for vehicle damage, third-party damage, third-party injury. Medical evacuation from Vietnam to a US hospital runs $50,000+ — uncovered.',
			},
		],
		math: 'IDP Companion is $35. An Easy Rider guide for Ha Giang is $100–$200 (multi-day). A Ha Giang fine for a rejected IDP starts at $80. Medical costs without insurance from a mountain road accident have no ceiling. The three options have three different cost structures — pick by route.',
	},

	phrases: {
		heading: 'Useful Vietnamese phrases at checkpoints and rental shops',
		lead: 'Vietnamese is on the IDP Companion document (page 14 of the standard set) — your name and licence details are presented in Vietnamese. These phrases are for spoken interaction at police checkpoints and rental shops outside the main tourist corridors.',
		items: [
			{ phrase: 'Đây là bằng lái xe của tôi', translation: 'Here is my licence', context: 'Handing over the physical US licence' },
			{ phrase: 'Và tài liệu dịch thuật', translation: 'And the translation document', context: 'Showing IDP Companion alongside' },
			{ phrase: 'Tôi là khách du lịch người Mỹ', translation: "I'm an American tourist", context: 'Establishing context at any checkpoint' },
			{ phrase: 'Tôi không hiểu tiếng Việt', translation: "I don't understand Vietnamese", context: 'If spoken to quickly — officers in tourist areas often switch to basic English' },
			{ phrase: 'Có vấn đề gì không?', translation: 'Is there a problem?', context: 'Polite opener at a checkpoint stop' },
			{ phrase: 'Tôi có bảo hiểm', translation: 'I have insurance', context: 'In case of accident or paperwork question' },
			{ phrase: 'Tôi cần gọi cho công ty thuê xe', translation: 'I need to call the rental company', context: 'If there\'s an incident' },
			{ phrase: 'Xin lỗi', translation: 'Sorry / excuse me', context: 'Universal politeness — useful in any awkward moment with traffic or vendors' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Vietnam (US citizens)',
		lead: "Vietnam preparation depends on the specific route. The convention issue applies at Ha Giang and provincial checkpoints; city areas are about readable documentation. Pick your approach before booking.",
		schemaName: 'How to prepare for riding/driving in Vietnam as a US citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Decide route + vehicle approach BEFORE booking',
				text: "Cities only + casual scooter? Sub-50cc — no documentation needed at all. Cities + beaches + bigger bike? IDP Companion + US licence covers readability at city checkpoints. Ha Giang Loop committed? Easy Rider guide ($100-200 multi-day, you as passenger) — cleanest legal route. Self-rider Ha Giang? Research current 1968 IDP online providers carefully and accept that acceptance varies.",
			},
			{
				title: 'Check your US licence for motorcycle endorsement',
				text: 'If you plan to ride anything over 50cc, your US state licence must carry motorcycle endorsement (M, MC, or Class M). Look at the front and back of the card. If car-only, you cannot legally ride a scooter over 50cc in Vietnam regardless of which IDP you carry — no document can add an endorsement you don\'t have at home.',
			},
			{
				title: 'Order IDP Companion + print before departure',
				text: 'Two minutes online, PDF delivered to email. $35 for 1 year. Vietnamese is physically on the document. Print before departure — Ha Giang and Hai Van Pass checkpoints prefer printed paper over phone screens in variable lighting.',
			},
			{
				title: 'Confirm your travel-insurance terms',
				text: 'Before flying, read the "violation of local law" exclusion in your travel-insurance policy. This is the clause that voids coverage if you\'re injured in an accident while riding without recognised documentation. The pre-departure five minutes confirming the clause makes the route-and-documentation decision financially clear.',
			},
			{
				title: 'Plan around the zero BAC for riders rule',
				text: 'Since January 2025, Vietnam applies zero BAC tolerance specifically for motorbike and scooter riders. Car drivers have a 0.05% limit. If you\'ve had any alcohol, don\'t ride that day — use Grab in cities, hire a driver for longer trips. Active enforcement at tourist-area checkpoints after dark and during major holidays.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Can US tourists legally ride motorbikes in Vietnam?',
				answer: 'Under Vietnamese traffic law, foreign tourists require a 1968 Vienna Convention IDP alongside their home licence for motorised vehicles over 50cc. The US issues 1949 Geneva Convention IDPs only. Strictly, US tourists cannot obtain a legally recognised IDP for Vietnam through standard US channels. In practice: sub-50cc scooters need no documentation; cities are inconsistently enforced; Ha Giang and provincial checkpoints specifically reject 1949-format documents.',
			},
			{
				id: 2,
				question: 'Why doesn\'t the standard US-issued IDP work in Vietnam?',
				answer: 'The US signed the 1949 Geneva Convention on Road Traffic. Vietnam ratified the 1968 Vienna Convention. These are different international treaties with different signatory countries. Vietnam\'s traffic law specifies 1968 IDPs, and officers at Ha Giang checkpoints specifically check which convention year appears on the IDP booklet cover. 1949-format documents are treated as if no IDP were present.',
			},
			{
				id: 3,
				question: 'What about scooters under 50cc?',
				answer: 'Vietnamese law does not require a licence or IDP for vehicles under 50cc. This is fully legal for all drivers regardless of nationality. For casual city exploration in Hanoi\'s Old Quarter, Hoi An, beach-town riding in Mui Ne or Da Nang, a sub-50cc scooter is the simplest and entirely legal option — no documentation needed at all.',
			},
			{
				id: 4,
				question: 'What is an Easy Rider?',
				answer: 'Local Vietnamese motorbike guides who carry tourists as passengers. You ride pillion behind the guide; you need no licence or IDP. For Ha Giang specifically, hiring a local guide through a reputable Easy Rider service eliminates the documentation issue while still delivering the experience. Multi-day Ha Giang guide services run $100–$200. The guide handles checkpoints, mountain roads, and all officer interactions.',
			},
			{
				id: 5,
				question: 'Is IDP Companion useful in Vietnam?',
				answer: 'Yes — for city areas and rental desks where the practical requirement is a readable Vietnamese-language document rather than 1968 convention verification. IDP Companion has Vietnamese physically on the page (page 14 of the standard Geneva 1949 set). It does not resolve the convention issue at Ha Giang checkpoints, but it improves credential readability at most other checkpoints in Vietnam and satisfies most city-area rental shops.',
			},
			{
				id: 6,
				question: 'What\'s the zero BAC rule for motorbike riders?',
				answer: 'Since January 2025, Vietnam applies zero BAC tolerance specifically for motorbike and scooter riders. Any detectable alcohol while riding is a violation with a fine of VND 2,000,000–3,000,000. Car drivers retain a 0.05% limit. If you\'ve had any alcohol, don\'t ride — use Grab in cities, hire a driver for longer trips. Active enforcement at tourist-area checkpoints after dark.',
			},
			{
				id: 7,
				question: 'Is Ha Giang worth the documentation complexity?',
				answer: 'For riders who prepare correctly: unambiguously yes — it\'s one of the most spectacular routes in Southeast Asia. For US tourists specifically: the cleanest approach is an Easy Rider guide (multi-day, $100-200, you as passenger). For independent riders committed to self-riding Ha Giang: research current 1968 IDP online provider options carefully, ensure you get the printed booklet format (not a phone PDF), and carry IDP Companion as a supplementary translation document. Accept that acceptance varies.',
			},
			{
				id: 8,
				question: 'Can I get a Vietnamese tourist driving licence after arriving?',
				answer: 'No. Vietnamese authorities do not issue temporary tourist driving permits to non-resident visitors. The "30-day tourist licence at the police station" option referenced in some older travel forums does not exist for Vietnam — that\'s confusion with Indonesia (where Denpasar police previously issued similar permits and discontinued the practice in 2024). For Vietnam, the documentation decision needs to be made before departure: 1968 IDP from online provider, or Easy Rider guide route, or sub-50cc-only.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to Southeast Asian and IDP-relevant destinations.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'th', label: 'US → Thailand', status: 'Live', href: '/idp-for-us-drivers-in-thailand' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan' },
			{ flagFrom: 'us', flagTo: 'id', label: 'US → Indonesia', status: 'Live', href: '/idp-for-us-drivers-in-indonesia' },
			{ flagFrom: 'ru', flagTo: 'vn', label: 'Russia → Vietnam', status: 'Coming soon' },
			{ flagFrom: 'gb', flagTo: 'vn', label: 'UK → Vietnam', status: 'Live', href: '/idp-for-uk-drivers-in-vietnam' },
			{ flagFrom: 'au', flagTo: 'vn', label: 'Australia → Vietnam', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Vietnam is the most legally nuanced destination in this guide',
		text: 'The convention distinction is real, the enforcement is geographically uneven, and the right approach depends on your specific itinerary — not the average tourist\'s itinerary, yours. IDP Companion provides Vietnamese-language translation of your US licence for every city checkpoint looking for a readable document. For Ha Giang, the Easy Rider option is the cleanest legal solution. For sub-50cc scooters, no documentation is required at all. Pick by route.',
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Vietnam Road Administration, the Vietnam Traffic Police (Cảnh sát giao thông), or the Ministry of Transport of Vietnam. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin 1949 Geneva Convention IDPs are AAA and AATA — note Vietnam's 1968 Vienna Convention requirement, which the US 1949 format does not satisfy under Vietnamese law. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Vietnamese Road Traffic Law No. 23/2008/QH12 (amended); January 2025 fine schedule update',
			'Vietnam Traffic Police (Cảnh sát giao thông) — enforcement records',
			'1949 Geneva Convention on Road Traffic, UN Treaty Collection — signatories',
			'1968 Vienna Convention on Road Traffic, UN Treaty Collection — signatories',
			'US Embassy Hanoi / Consulate General Ho Chi Minh City — driving advisory — vn.usembassy.gov',
			'Tigit Motorbikes — enforcement update (March 2026) — tigitmotorbikes.com',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Vietnam',
	},
};

export const usVietnamCopy: Record<'en', CountryPairCopy> = { en };
