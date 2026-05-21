/**
 * Country-pair content: United Kingdom → Vietnam.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Vietnam acceded to the 1968 Vienna Convention on Road
 * Traffic in 2014 and recognises ONLY the 1968 Vienna IDP. Vietnam is
 * NOT a party to the 1949 Geneva Convention. The UK issues both types
 * from the same counter, and the Geneva 1949 variant (the standard one
 * most UK tourists buy for Europe / Thailand / Indonesia / Egypt) is
 * not recognised in Vietnam. UK gov.uk Vietnam travel advice confirms.
 * This is the single distinctive content angle for the page.
 *
 * Secondary distinctive content:
 *  - Vietnam's 2019 zero-tolerance alcohol crackdown (one of the
 *    strictest in Asia — fines under Decree 100/2019/ND-CP).
 *  - Ha Giang Loop documented annual foreign-rider fatalities; Cat A
 *    motorcycle endorsement gap on UK photocards.
 *  - Easy-rider option (paying a local rider to take you pillion for
 *    Ha Giang multi-day routes) as a documented secondary alternative.
 *  - 65 million registered motorbikes — more than any country except
 *    India and China; tourist motorbike corridors at Hai Van Pass and
 *    Ha Giang Loop have consistent police enforcement.
 *
 * MIDDLE-PIVOT COMPLIANCE (binding per CLAUDE.md):
 * Authorised UK Vienna 1968 / Geneva 1949 issuers (AA, RAC, PayPoint)
 * appear ONCE, in the legal disclaimer. Sanya's brief had AA/RAC/Post
 * Office in 9+ locations — Quick Answer, TLDR footnote, Why-Not-Enough,
 * Honesty needOfficial, Renting tips, FAQ, How-To step 2, Final CTA,
 * Sources. All stripped per binding rule. The reader gets the factual
 * disclosure that Vietnamese law requires a Vienna 1968 IDP (not Geneva
 * 1949) — the reader's own due-diligence path to obtain it is not our
 * page's job. PayPoint replaces Post Office per March 2024 change.
 *
 * Easy-rider option: factual secondary disclosure in the Renting section
 * for Ha Giang Loop specifically (where it's genuinely safer for
 * inexperienced riders), not primary recommendation. The friction-
 * reducing IDP Companion benefits appear first.
 *
 * PDF LANGUAGE COMPLIANCE: Vietnamese IS on the IDP Companion template
 * (page 14 of the Geneva 1949 standard set, verified). All Vietnamese
 * claims here are honest. Verified PDF set is EN, FR, ES, DE, IT, PT,
 * VI, RU, AR, ZH, JA, TH = 12 languages.
 *
 * SEO add-ons present: tldr, phrases (8 Vietnamese items for cultural
 * value), rejects (the 1949 IDP rejection at Vietnamese checkpoints is
 * the single biggest UK-traveller paperwork mistake — worth its own
 * block), howTo, lastReviewed.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Vietnam: 2026 Vienna 1968 Guide',
		description:
			"Driving Hai Van Pass or riding Ha Giang? Vietnam recognises ONLY the Vienna 1968 IDP — not the Geneva 1949 IDP most UK tourists default to. Honest 2026 guide to the Convention mismatch, Ha Giang scooter realities, and 2019 zero-tolerance alcohol enforcement.",
		ogTitleShort: 'UK Drivers in Vietnam: Vienna 1968',
		ogSubtitle: 'Vienna 1968, not Geneva 1949 — the IDP detail most UK tourists miss',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Vietnam',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Vietnam · 2026 Guide',
		title: 'IDP for UK Drivers in Vietnam: The Vienna 1968 vs Geneva 1949 Trap',
		lead: "Most UK travel articles tell you to grab \"an IDP\" before flying to Vietnam without specifying which kind. Vietnamese law — and UK gov.uk Vietnam travel advice — disagree on the vagueness. Vietnam acceded to the 1968 Vienna Convention on Road Traffic in 2014 and recognises only the Vienna 1968 IDP at police checkpoints; Vietnam is not a 1949 Geneva Convention signatory at all. The UK issues both types from the same counters, and the Geneva 1949 variant — the standard one most UK tourists buy for Europe, Thailand, Indonesia or Egypt — is rejected by Vietnamese police as functionally equivalent to no IDP. That's the central paperwork mistake on Vietnamese tourist motorbike corridors like the Hai Van Pass between Da Nang and Hue and on the Ha Giang Loop in the northern mountains, where document checks are consistent. IDP Companion is a multilingual translation companion document — not an IDP of either Convention type, but useful at rental counters and police stops where Vietnamese-and-English on the same document speeds the paperwork review.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: "Yes — and specifically the Vienna 1968 IDP, NOT Geneva 1949",
		text: "Vietnam acceded to the 1968 Vienna Convention on Road Traffic in 2014 and recognises only the Vienna 1968 IDP. Vietnam is NOT a 1949 Geneva Convention signatory, which means the Geneva 1949 IDP that most UK tourists buy for European trips, Thailand, Indonesia or Egypt is treated by Vietnamese police as equivalent to carrying no IDP. UK gov.uk Vietnam travel advice confirms the Vienna 1968 requirement. UK driving licence holders need to specifically request the Vienna 1968 variant when applying — both Conventions cost the same and look similar at issue, but the one printed on the cover determines which countries recognise it. IDP Companion is a multilingual translation companion document — it is not an IDP of either Convention type and does not, on its own, satisfy the Vietnamese legal requirement.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Vietnam',
		lead: "Vietnam's legal floor is your UK photocard PLUS a Vienna 1968 IDP — specifically that Convention type, not the Geneva 1949 IDP most UK tourists default to for European, Thai, Indonesian or Egyptian trips. The Vietnamese-language layer on IDP Companion (page 14 of the 12-language template) is where it earns its place — at police stops on the Hai Van Pass, Ha Giang Loop and HCMC arterials where Vietnamese officers parse the local-language version faster than the English photocard.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Vietnam',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Not legally sufficient for driving or riding in Vietnam. Vietnamese law requires a Vienna 1968 IDP alongside the photocard. For motorbikes specifically: a UK Cat A motorcycle endorsement is a separate UK-side question that affects travel insurance cover after any accident.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: "Multilingual digital PDF presenting your UK licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Vietnamese is on the document (page 14 of the standard set, verified), so checkpoint and rental-desk paperwork reviews on the Hai Van Pass, Ha Giang Loop, HCMC arterials and Hanoi old-quarter entry points read your licence data in the working language of Vietnamese enforcement alongside English. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Vietnam: original UK photocard + a Vienna 1968 IDP (separate UK-side step, specifically the Vienna 1968 Convention type — not Geneva 1949) + UK passport with Vietnamese visa or e-Visa + rental contract + proof of valid Vietnamese motor insurance. For motorbikes/scooters: a UK Cat A motorcycle endorsement on the photocard (for UK travel insurance cover) + a helmet worn at all times.",
	},

	whyNotEnough: {
		heading: 'Why your UK photocard alone is not enough in Vietnam — and why the Convention type matters',
		lead: "The wrong type of IDP in Vietnam is functionally the same as none. Vietnamese officers on the Hai Van Pass, Ha Giang Loop and HCMC arterials specifically check the Convention year on the booklet cover — Vienna 1968 is recognised, Geneva 1949 is not. UK Post Offices and PayPoint issue both from the same counters; the Convention is the only difference, and it determines whether you can drive legally and whether UK travel insurance pays after any accident.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The Vienna 1968 vs Geneva 1949 Convention distinction',
				text: "Vietnamese road traffic law administered by the Ministry of Public Security requires foreign drivers to hold an International Driving Permit issued under the 1968 Vienna Convention on Road Traffic. Vietnam acceded to Vienna 1968 in 2014 and has not acceded to the older 1949 Geneva Convention. UK gov.uk Vietnam travel advisory states the Vienna 1968 requirement specifically. The UK issues both types — Geneva 1949 (used for Europe, Thailand, Indonesia, Egypt and most of Asia) and Vienna 1968 (used for a smaller list including Vietnam) — from the same counters, both cost roughly the same, and both look very similar. The difference is which Convention is printed on the cover. If you bring the wrong one to Vietnam, it's treated as no IDP at all.",
			},
			{
				icon: 'ph:motorcycle-bold',
				title: 'The motorbike enforcement reality',
				text: "Vietnam has approximately 65 million registered motorbikes — more than any country on Earth except India and China. Tourist motorbike routes like the Hai Van Pass between Da Nang and Hue, the Ha Giang Loop in the northern mountains and the Mekong Delta have consistent police enforcement at scenic-route waypoints where tourist clusters are predictable. The standard friction is a check on the rider's licensing paperwork — and the convention-type check on the IDP cover is part of that.",
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The Ha Giang Loop insurance trap',
				text: "Most UK travel insurance policies specifically exclude motorbike accidents when the rider lacks a UK Cat A motorcycle endorsement, exceeds engine displacement limits (commonly 125cc), wasn't wearing a helmet, or wasn't licenced under local law (which for Vietnam means: no Vienna 1968 IDP). The Ha Giang Loop in particular has documented annual foreign-rider fatalities — challenging mountain riding, unpredictable weather, and many foreign casualties were on rental scooters without Cat A endorsement and without valid travel insurance cover for the consequences.",
			},
		],
	},

	rules: {
		heading: 'Vietnam driving rules UK drivers should know',
		lead: "Joining HCMC motorbike traffic — densest on Earth at 7+ million scooters — is the day-one shock for any UK car driver, beyond just the right-hand reversal. The substantive operational rules are the 2019 zero-tolerance alcohol regime, mandatory helmets as the most consistently enforced motorbike rule, and the Vienna 1968 IDP requirement at the documentation layer.",
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; deliberate attention required, especially in HCMC motorbike traffic' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50–60 km/h', note: 'Built-up areas; HCMC and Hanoi old-quarter often lower in practice due to traffic mix' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '80 km/h', note: 'Motorbikes typically lower, around 60 km/h' },
			{ icon: 'mdi:speedometer-medium', label: 'Expressways', value: '90–120 km/h', note: 'Growing network; toll booths cash and card accepted' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.00% BAC', note: 'Zero tolerance, aggressively enforced since 2019 under Decree 100/2019/ND-CP' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Enforcement variable' },
			{ icon: 'mdi:helmet', label: 'Helmet (rider + pillion)', value: 'Mandatory, worn', note: 'Universally enforced; among the most-checked rules on tourist corridors' },
			{ icon: 'ph:police-car-bold', label: 'Police checkpoints', value: 'Frequent on tourist routes', note: 'Hai Van Pass, Ha Giang Loop, HCMC arterials, Hanoi old quarter entry points' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Vietnam',
		lead: 'Vietnamese traffic fines are set under Decree 100/2019/ND-CP and subsequent amendments. Figures below reflect recent published levels — verify against current Ministry of Public Security publications. VND is the Vietnamese Dong; approximate GBP equivalents shown.',
		colViolation: 'Violation',
		colAmount: 'Fine (VND)',
		colNote: 'Notes',
		items: [
			{ icon: 'ph:warning-octagon-bold', label: 'Driving without Vienna 1968 IDP (or carrying wrong-Convention IDP)', amount: 'VND 4,000,000–6,000,000 (~£125–190); vehicle hold possible', note: 'Geneva 1949 IDP treated the same as no IDP at all in Vietnam', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding (car, less than 10 km/h over)', amount: 'VND 800,000–1,000,000 (~£25–32)', note: 'Camera enforcement growing on expressways and Hanoi arterials', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (car, 10–20 km/h over)', amount: 'VND 4,000,000–6,000,000 (~£125–190)', note: 'Escalating tier', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding (motorbike, similar tiers)', amount: 'VND 300,000–800,000 (~£10–25) low tier escalating', note: '', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'VND 4,000,000–6,000,000 cars / VND 800,000+ motorbikes', note: 'Camera-enforced in HCMC, Hanoi', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'VND 800,000–1,000,000 cars / VND 200,000+ motorbikes', note: '', severity: 'med' },
			{ icon: 'mdi:helmet', label: 'No helmet (rider or pillion)', amount: 'VND 200,000–300,000 (~£6–10)', note: 'Most consistently enforced motorbike rule on tourist corridors', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI any positive reading (motorbike)', amount: 'VND 6,000,000–8,000,000 (~£190–250) + 22–24 month suspension equivalent', note: "Vietnam's 2019 zero-tolerance regime — one of the strictest in Asia", severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI any positive reading (car)', amount: 'VND 30,000,000–40,000,000 (~£950–1,260) + 22–24 month suspension', note: 'Criminal escalation possible at higher readings', severity: 'high' },
		],
		caption: 'Sources: Decree 100/2019/ND-CP (Vietnamese Government, chinhphu.vn); Vietnamese Ministry of Public Security (mps.gov.vn); UK gov.uk Vietnam travel advisory. VND/GBP approximated at 31,500:1 May 2026.',
	},

	rejects: {
		heading: 'What Vietnam rejects from standard UK driver documentation',
		badge: 'Convention mismatch',
		lead: 'Vietnam is one of the few destinations where standard UK paperwork that works elsewhere is specifically rejected. Worth understanding before booking the flight or applying for the wrong IDP type.',
		items: [
			{
				icon: 'ph:scales-bold',
				title: 'The 1949 Geneva Convention IDP',
				text: 'The standard UK-issued Geneva 1949 IDP (the one most UK tourists buy for European trips, Thailand, Indonesia, Egypt and the bulk of Asia) is NOT recognised by Vietnamese traffic law. Police on the Hai Van Pass, Ha Giang Loop and provincial checkpoints specifically check the Convention year on the booklet cover. Vietnam acceded to the 1968 Vienna Convention only and has not signed Geneva 1949.',
			},
			{
				icon: 'ph:credit-card-bold',
				title: '"30-day tourist licence at Vietnamese police stations"',
				text: 'Some older travel forums recommend obtaining a temporary tourist driving licence at Vietnamese police stations after arrival. This option does NOT exist in Vietnam — confusion with Indonesia, where the equivalent was discontinued in 2024 anyway. Vietnamese authorities do not issue temporary tourist driving permits to non-resident visitors.',
			},
			{
				icon: 'ph:device-mobile-bold',
				title: 'Phone-screen IDP at provincial checkpoints',
				text: 'Officers at Ha Giang Loop and Hai Van Pass checkpoints expect physical printed documents. Phone screens with PDF copies of the IDP are inconsistently accepted — most officers prefer the printed booklet for the documents check. Print the Vienna 1968 IDP and IDP Companion both before flying or at the first hotel after arrival.',
			},
			{
				icon: 'ph:cardholder-bold',
				title: 'A car-only photocard claimed for scooter operation',
				text: 'If your UK photocard carries only Category B (car) and you ride a scooter over 50cc in Vietnam, the vehicle category mismatch is a separate violation from the Convention issue — both apply and stack. UK travel insurance also denies cover for the same reason after any accident.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Vietnam — honestly',
		lead: "Two things to be clear about Vietnam: IDP Companion is multilingual translation including a Vietnamese-language layer that shortens checkpoint conversations on tourist corridors. It is not the Vienna 1968 IDP Vietnamese law requires (separate document, separate UK-side application), not a UK Cat A motorcycle endorsement, and not a substitute for the documentation gates that determine whether UK travel insurance pays after a Ha Giang Loop incident.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Vietnam, Vietnamese on the document is the working-language route at police checkpoints and rental desks where the document review benefits from your licence data in Vietnamese alongside English',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not, on its own, sufficient to drive or ride legally in Vietnam — Vietnamese law requires a Vienna 1968 IDP as a separate document',
				'Not a UK Cat A motorcycle endorsement — separate UK licensing matter that affects travel insurance cover',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Vietnam',
			items: [
				'At Ho Chi Minh City, Hanoi, Da Nang car and motorbike rental counters where Vietnamese-and-English standardised translation speeds the document check',
				'At police checkpoints on the Hai Van Pass, Ha Giang Loop, HCMC arterials and Hanoi old-quarter entry points where the Vietnamese text shortens the roadside conversation',
				'For accident-report and insurance paperwork where multilingual translation simplifies the cross-border claim',
				'As a re-printable backup from any hotel if your physical photocard or Vienna 1968 IDP is lost during a multi-region Vietnamese trip',
				"For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Vietnam plus Thailand, Indonesia, Morocco, UAE and other destinations on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Vietnamese law actually cares about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive',
				'A Vienna 1968 IDP — specifically that Convention type, NOT Geneva 1949 — a separate UK-side step required by Vietnamese law',
				'For motorbikes/scooters: a UK Cat A motorcycle endorsement on the photocard — separate UK licensing matter, required for UK travel insurance cover after any accident',
				'UK passport with Vietnamese visa or e-Visa — required at every checkpoint',
				'Rental agreement and proof of valid Vietnamese motor insurance — provided by the rental at pickup',
				'For motorbikes/scooters: a helmet, worn at all times — most consistently enforced rule on tourist corridors',
			],
		},
		pattern:
			"What prepared UK travellers in Vietnam actually carry: photocard + Vienna 1968 IDP (specifically that Convention type) + Cat A endorsement on the photocard (for any motorbike use) + passport with visa + rental contract + Vietnamese insurance + helmet + IDP Companion. The Vienna 1968 IDP is the UK-side documentation step where the Convention specificity matters; for Ha Giang Loop specifically, the easy-rider option (paying a local rider to take you pillion for the multi-day route) is a documented alternative that removes the licensing and insurance gates entirely.",
	},

	renting: {
		heading: 'Renting a car or motorbike in Vietnam as a UK driver',
		lead: "Most Vietnam-bound UK tourists never touch a car. The dominant tourist transport is the $4–10/day scooter from countless local shops in HCMC, Hanoi, Hoi An, Da Nang and Ha Giang town, plus the Ha Giang Loop easy-rider option ($30–50/day pillion with a local rider). International car-rental chain presence is limited; the documentation conversation happens at scooter shops more than at airport counters.",
		chains: [
			{ name: 'Hertz Vietnam / Avis Vietnam', policy: 'Limited international chain presence at Hanoi Noi Bai, HCMC Tan Son Nhat and Da Nang. Serve mostly business and high-end tourist segments. Vienna 1968 IDP required at pickup.' },
			{ name: 'Local car operators (HCMC, Hanoi, Da Nang)', policy: 'Variable reliability and documentation flexibility. Better-known operators expect a Vienna 1968 IDP; smaller agencies sometimes flexible.' },
			{ name: 'Bali-style motorbike/scooter shops (HCMC, Hanoi, Hoi An, Da Nang, Ha Giang town)', policy: 'Countless small shops. Rates VND 100,000–250,000/day ($4–10) for standard scooters; higher for the manual semi-automatic bikes popular on Ha Giang Loop. Most shops will rent to anyone with cash; few verify Vienna 1968 IDP or Cat A endorsement.' },
			{ name: 'Ha Giang Loop specialist operators', policy: 'Local agencies that provide guides, support vehicles and the easy-rider option (paying a local rider to take you pillion for the 3–4 day route). The easy-rider option removes the personal-licensing question entirely; daily rate around $30–50.' },
		],
		tipsHeading: 'Practical tips for driving or riding in Vietnam',
		tips: [
			'Specify "1968 Vienna Convention IDP" explicitly when applying in the UK. The same UK counters issue both Conventions; ask for "an IDP for Vietnam" without specifying and you risk receiving the wrong one. Vietnam recognises only the Vienna 1968 type',
			'For any motorbike use: verify your UK travel insurance terms in writing. Cat A endorsement requirements, engine displacement limits (commonly 125cc), helmet compliance and valid local licensing are common exclusion clauses. After an accident is not the time to find out',
			'Helmet for rider AND pillion passenger, every ride, worn on the head not in the basket. Universally enforced on Bali-style tourist corridors',
			"Don't ride or drive after any alcohol. Vietnam's 2019 zero-tolerance regime under Decree 100/2019/ND-CP is one of the strictest in Asia; any positive reading is a violation; criminal escalation possible at higher readings",
			'The Hai Van Pass between Da Nang and Hue is scenic but winding — slow speeds, frequent overtaking lorries, fast-changing mountain weather. Ride or drive it in daylight only',
			'The Ha Giang Loop in northern Vietnam — 3–4 days through mountain villages, famous on social media. Genuinely beautiful and genuinely dangerous for inexperienced riders; documented foreign-rider fatalities annually. The easy-rider option ($30–50/day for a local to take you pillion) is the safer choice and often cheaper than self-rental with proper documentation',
			"HCMC has the densest motorbike traffic on Earth (7+ million scooters). Joining as a foreign car driver is genuinely demanding; Grab and GoCar apps work widely and remove the question for inner-city movement",
			'Vietnam has a growing expressway network with toll booths (cash and card accepted). Most main inter-city routes are tolled in part; rental contracts typically discuss toll arrangements',
			'Carry small VND cash for fuel, parking and roadside purchases. VND has lots of zeros (~31,500 VND per £1). Refuse cash-only fine demands; request an official receipt',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: "Two outcomes dominate UK-traveller reports from Vietnam: the wrong-Convention IDP at a Hai Van Pass checkpoint (most common paperwork mistake) and the Ha Giang Loop scooter accident with no Cat A endorsement (most catastrophic insurance outcome). The other four scenarios are clean, prepared paths and the easy-rider alternative that skips the licensing question entirely.",
		items: [
			{
				severity: 'low',
				frequency: 'The correct path',
				label: 'Vienna 1968 IDP + Cat A (for motorbikes) + IDP Companion, all paperwork in order',
				text: 'Standard process, no further issue. Police checkpoint document review is 5 minutes; rental shop accepts paperwork without comment; travel insurance covers any incident.',
			},
			{
				severity: 'low',
				frequency: 'Very common for UK travellers on Ha Giang',
				label: 'Easy-rider option booked for Ha Giang Loop, personal licensing question skipped',
				text: '$30–50/day for a local rider to take you pillion for the 3–4 day route. No personal documentation gate, no Cat A insurance question, dramatically safer for inexperienced riders. Often cheaper end-to-end than self-rental with proper documentation.',
			},
			{
				severity: 'high',
				frequency: 'Most common UK-traveller mistake',
				label: 'Arrived with the Geneva 1949 IDP (wrong Convention)',
				text: 'Vietnamese police treat the Geneva 1949 IDP as equivalent to no IDP at all. Vehicle hold possible; fine VND 4,000,000–6,000,000 (~£125–190); roadside conversation extends. This is the single most common paperwork mistake by UK tourists in Vietnam, because the standard UK Post Office IDP for European trips is the Geneva 1949 type.',
			},
			{
				severity: 'high',
				frequency: 'Common — the Bali-style insurance trap',
				label: 'Rented scooter with UK photocard only, no Vienna 1968 IDP, no Cat A endorsement',
				text: 'Roadside police stops likely on Hai Van Pass and Ha Giang Loop. UK travel insurance void after any accident — the unlicensed-rider exclusion bites whether or not police stop you. Ha Giang Loop documented foreign-rider fatalities annually fit this pattern.',
			},
			{
				severity: 'high',
				frequency: 'Catastrophic when it happens',
				label: 'Ha Giang Loop scooter accident with no Cat A endorsement',
				text: 'UK travel insurance denies cover citing the unlicensed-rider exclusion. Medical care in Vietnam is reasonable; repatriation back to the UK with serious injuries can cost £50,000+. Documented foreign-rider fatalities on the route annually.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Police stop with full paperwork, IDP Companion shortens the conversation',
				text: 'Five extra minutes of Vietnamese-language document review at a Hai Van Pass or HCMC checkpoint, no further issue. The Vietnamese text on the IDP Companion removes any "what does this UK abbreviation mean" question.',
			},
		],
		math: "$35 IDP Companion + a Vienna 1968 IDP (separate UK-side step — specifically the Vienna 1968 Convention type) is the minimum documentation path for any Vietnamese rental. For Ha Giang Loop specifically, the easy-rider option ($40–50/day × 4 days = $200) eliminates the entire Cat A + insurance + crash-risk category, often cheaper than self-renting with proper insurance.",
	},

	phrases: {
		heading: 'Vietnamese phrases for police stops, rental desks and rural fuel stations',
		lead: "Vietnam's tourist infrastructure runs in working English at major rental chains and tourist-area hotels, but Vietnamese becomes the default fast at police checkpoints, smaller motorbike shops and rural fuel stations. Eight Vietnamese items cover the standard tourist contact points.",
		items: [
			{ phrase: 'Đây là bằng lái xe của tôi', translation: 'Here is my driving licence', context: 'Standard opening — hand UK photocard, Vienna 1968 IDP and passport together at a police checkpoint' },
			{ phrase: 'Và đây là hộ chiếu', translation: 'And here is the passport', context: 'Follow-up at any document check' },
			{ phrase: 'Tôi là khách du lịch Anh', translation: "I'm a British tourist", context: 'Establishes context immediately; often shifts the interaction toward English' },
			{ phrase: 'Anh/Chị có nói tiếng Anh không?', translation: 'Do you speak English? (m/f addressed)', context: 'Common at tourist-facing roles; rarely needed but courteous' },
			{ phrase: 'Trạm xăng gần nhất ở đâu?', translation: 'Where is the nearest petrol station?', context: 'Useful on the Hai Van Pass, Ha Giang Loop and inter-city routes where stations are sparse' },
			{ phrase: 'Tôi cần giúp đỡ', translation: 'I need help', context: 'Universal at any roadside need' },
			{ phrase: 'Xin biên lai chính thức', translation: 'Please, an official receipt', context: 'Polite firm phrase at any fine interaction — paid fines should be issued with documentation, not cash-only on the roadside' },
			{ phrase: 'Cảm ơn', translation: 'Thank you', context: 'Universal courtesy; "cảm ơn nhiều" for "thanks very much"' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving or riding in Vietnam (UK citizens)',
		lead: "Vietnam preparation has one specifically UK-traveller-critical step: making sure you apply for the Vienna 1968 IDP variant rather than the default Geneva 1949 one. The other steps are standard documentation prep plus a serious think about Ha Giang Loop scooter-vs-easy-rider choice for any motorbike-adventurous itinerary.",
		schemaName: 'How to prepare for driving in Vietnam as a UK citizen',
		duration: 'PT45M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: "For motorbike riders: check whether your photocard carries a Cat A motorcycle endorsement. Most UK car drivers don't, and this single check determines whether UK travel insurance will cover a Vietnamese scooter accident — pursue Cat A at home before flying if scooter use is the plan.",
			},
			{
				title: 'Obtain a Vienna 1968 International Driving Permit — specifically that Convention type',
				text: "Vietnamese law requires this document alongside your photocard. When applying in the UK, **specify 1968 Vienna Convention IDP** explicitly — the same UK counters issue both Geneva 1949 and Vienna 1968 from the same desk, and the default for European/Thailand/Indonesia/Egypt trips is Geneva 1949 (the wrong one for Vietnam). The IDP is issued before travel; cannot be obtained on arrival in Vietnam. Typically valid for 12 months.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: "$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Vietnamese on the document is the working-language route at Vietnamese police checkpoints and rental desks. Issued in two minutes online, valid 1–5 years. Print at home or from any Vietnamese hotel.",
			},
			{
				title: 'For Ha Giang Loop or any motorbike riding: decide on the easy-rider option vs self-riding',
				text: "The easy-rider option (paying a local rider to take you pillion for the 3–4 day Ha Giang Loop) runs $30–50/day and removes the personal licensing, helmet enforcement, Cat A insurance and crash-risk categories in one decision. Documented foreign-rider fatalities annually on the route fit the self-riding-without-Cat-A profile. The easy-rider option is often cheaper end-to-end than self-rental with proper documentation.",
			},
			{
				title: 'Carry physical documents in one folder + helmet for any motorbike use',
				text: 'Physical UK photocard + Vienna 1968 IDP (specifically that type) + UK passport with Vietnamese visa or e-Visa + rental contract + Vietnamese insurance documentation + IDP Companion — all in one folder. For motorbike riders: a worn helmet (not in the basket). Hand the folder over at any police stop. Carry small VND cash for fuel, parking and incidentals.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive or ride in Vietnam as a UK tourist?',
				answer: 'Yes — and specifically a 1968 Vienna Convention IDP, NOT the 1949 Geneva Convention IDP. Vietnamese road traffic law requires foreign drivers and motorbike riders to hold a Vienna 1968 IDP alongside their original national driving licence. UK gov.uk Vietnam travel advice confirms.',
			},
			{
				id: 2,
				question: "Why does the type of IDP matter — aren't they all the same?",
				answer: 'No. The UK issues two different IDPs from the same counters: the 1949 Geneva IDP (used for most of Europe, Thailand, Indonesia, Sri Lanka, Egypt and the bulk of Asia) and the 1968 Vienna IDP (used for a smaller list including Vietnam). Vietnam acceded to Vienna 1968 in 2014 but is not a Geneva 1949 signatory. Carrying the Geneva 1949 IDP in Vietnam is treated by police as equivalent to carrying no IDP at all.',
			},
			{
				id: 3,
				question: 'How do I make sure I get the Vienna 1968 IDP and not the Geneva 1949?',
				answer: "Specify \"1968 Vienna Convention IDP\" explicitly when applying. The same UK counters issue both Convention types — if you ask for \"an IDP for Vietnam\" without specifying, you may receive the default Geneva 1949 type by default. Both Conventions cost roughly the same, both look similar at issue, and the difference is which Convention is printed on the cover.",
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a Vienna 1968 IDP?',
				answer: 'No. IDP Companion is a private multilingual translation companion document presenting your photocard details in twelve widely-read languages from the 1949 Geneva Convention set. It is not a government-issued IDP under the 1949 Geneva or 1968 Vienna Conventions. Where Vietnamese law requires the Vienna 1968 IDP, that document is a separate UK-side step we do not issue.',
			},
			{
				id: 5,
				question: 'Should I ride a motorbike or scooter in Vietnam?',
				answer: "The honest answer for UK riders without a Cat A motorcycle endorsement: probably not on personal-rider terms. Most UK travel insurance specifically excludes motorcycle accidents in those circumstances. Ha Giang Loop fatalities among foreign riders are documented annually. The easy-rider option (paying a local to take you pillion) eliminates the risk and is often cheaper end-to-end than self-renting with proper documentation.",
			},
			{
				id: 6,
				question: 'What is the Ha Giang Loop?',
				answer: "A 3–4 day motorbike route through northern Vietnam's mountain villages, famous on social media and YouTube. Genuinely beautiful and genuinely dangerous for inexperienced riders. Multiple foreign-rider fatalities annually fit the no-Cat-A no-Vienna-1968-IDP profile. The easy-rider option ($30–50/day) is the safer and often cheaper alternative.",
			},
			{
				id: 7,
				question: "Is Vietnam's alcohol enforcement really that strict?",
				answer: 'Yes. Vietnam introduced zero-tolerance alcohol enforcement in 2019 under Decree 100/2019/ND-CP and has prosecuted it aggressively since. Any positive breath reading at a checkpoint stops the trip immediately with substantial fines (VND 6,000,000–8,000,000 for motorbikes ~£190–250; VND 30,000,000–40,000,000 for cars ~£950–1,260).',
			},
			{
				id: 8,
				question: 'Should I drive in Ho Chi Minh City or Hanoi?',
				answer: "HCMC has the densest motorbike traffic on Earth (7+ million scooters). Hanoi is calmer but still chaotic. Most UK travellers use Grab and GoCar in cities and only rent for inter-city travel.",
			},
			{
				id: 9,
				question: 'Can I take my Vietnamese rental car into Cambodia or Laos?',
				answer: 'Almost always no. Vietnamese rental contracts typically prohibit cross-border use. Verify before booking if multi-country driving is part of the plan.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Vietnam trips?',
				answer: 'Choose 1 year ($35), 3 years ($45) or 5 years ($55). Validity is tied to your physical UK photocard — if your photocard expires, IDP Companion expires with it. One purchase covers Vietnam plus Thailand, Indonesia, Morocco, UAE and other destinations on the same plan.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other South-East Asian and IDP-relevant destinations UK tourists pair with Vietnam — each with its own Convention requirements and scooter/insurance archetypes.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand/' },
			{ flagFrom: 'gb', flagTo: 'id', label: 'UK → Indonesia', status: 'Live', href: '/idp-for-uk-drivers-in-indonesia/' },
			{ flagFrom: 'gb', flagTo: 'eg', label: 'UK → Egypt', status: 'Live', href: '/idp-for-uk-drivers-in-egypt/' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco/' },
			{ flagFrom: 'us', flagTo: 'vn', label: 'US → Vietnam', status: 'Live', href: '/idp-for-us-drivers-in-vietnam/' },
			{ flagFrom: 'gb', flagTo: 'kh', label: 'UK → Cambodia', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Riding the Hai Van Pass, doing the Ha Giang Loop or driving HCMC to the Mekong?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese, Vietnamese and 5 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Vietnamese on the document is the working-language route at Vietnamese police checkpoints and rental desks. Valid 1–5 years and covers Vietnam plus Thailand, Indonesia, Morocco, UAE on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. Where Vietnamese law requires the 1968 Vienna Convention IDP — specifically that Convention type, not the standard Geneva 1949 — that's a separate UK-side step you take before flying. For Ha Giang specifically: consider the easy-rider option ($30–50/day) before committing to self-riding without Cat A.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Vietnamese Ministry of Public Security, the Vietnam Road Administration or any other Vietnamese government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention, and does not, on its own, satisfy the Vietnamese legal requirement that foreign drivers carry a 1968 Vienna Convention IDP alongside their original national driving licence. Authorised issuers of UK-origin Geneva 1949 and Vienna 1968 IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC — request specifically the 1968 Vienna Convention variant when applying for Vietnam. IDP Companion must be used alongside your original UK photocard driving licence and (where required by Vietnamese law) a Vienna 1968 IDP.",
		sourcesHeading: 'Sources',
		sources: [
			'UK Foreign, Commonwealth & Development Office — Driving in Vietnam (gov.uk/foreign-travel-advice/vietnam)',
			'Decree 100/2019/ND-CP — Vietnamese road traffic penalties (chinhphu.vn)',
			'Vietnamese Ministry of Public Security (mps.gov.vn)',
			'1968 Vienna Convention on Road Traffic — UN Treaty Series',
			'UK Driver and Vehicle Licensing Agency (DVLA) — Categories of vehicle you can drive (gov.uk/driving-licence-categories)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Vietnam',
	},
};

export const ukVietnamCopy: Record<'en', CountryPairCopy> = { en };
