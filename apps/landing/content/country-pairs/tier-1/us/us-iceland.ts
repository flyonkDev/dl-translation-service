/**
 * Country-pair content: United States → Iceland.
 * Locales: en only.
 *
 * Unique angle: IDP not legally required (US license accepted on Latin
 * alphabet basis), so the page reframes preparation around the THREE
 * non-documentation rules that actually catch US tourists:
 *   1. BAC 0.05% (stricter than US 0.08%)
 *   2. Off-road driving = criminal under Nature Conservation Act (insurance void)
 *   3. F-road access restricted to 4WD only
 * Plus 2026 km-based road fee. IDP Companion positioned as a backup
 * translation aid + multi-country trip companion.
 *
 * Source-correction: Sanya's draft cited 0.05%/0.02% inconsistently; the
 * accurate Icelandic limit per Samgöngustofa is 0.05% BAC for general
 * drivers. Corrected throughout.
 *
 * SEO add-ons present: tldr, lez (F-roads + off-road + Ring Road realities),
 * howTo, lastReviewed. NO alphabet block (Icelandic is Latin). NO phrases
 * block (English universally functional in Iceland).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Iceland IDP for US Drivers — License OK, F-Roads + 0.05% BAC',
		description:
			"US license works in Iceland for tourist driving — no IDP required. But 0.05% BAC (stricter than US 0.08%), F-roads restricted to 4WD, off-road driving is a criminal offense (~$370+ fines + voided insurance), and 2026 km-based road fee applies. IDP Companion as backup translation aid — $35.",
		ogTitleShort: 'US Drivers in Iceland: 2026 Guide',
		ogSubtitle: 'License is fine. The rules are stricter than you think.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Iceland',
	},
	lastReviewed: 'June 2026',

	hero: {
		kicker: 'US → Iceland · 2026 Guide',
		title: 'IDP for US Drivers in Iceland: BAC, F-Roads, Off-Road Rules',
		lead: "License-wise: US licence is legally fine in Iceland for tourist driving — no IDP required. But Iceland's BAC limit is 0.05% (stricter than US 0.08%), F-roads are legally restricted to 4WD, off-road driving is a criminal offense under the Nature Conservation Act (~$370+ fine + voided insurance), and a new 2026 km-based road fee applies to all rentals. Somewhere east of Vík on Route 1 in late September, the road surface changes from asphalt to a pale gravel track that cuts toward a black sand beach that looks, from the car, like it connects to the Ring Road. It doesn't. Costly-mistake patterns from r/VisitingIceland and TripAdvisor Iceland Q1 2026 cluster around off-road driving onto Reynisfjara-area black sand beaches and F-road 2WD attempts on F26 Sprengisandur and F35 Kjölur — both routinely void rental insurance. Your US licence covers you on every paved and marked gravel road.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — your US license is valid; the rules around driving it are what take preparation',
		text: 'Iceland accepts US driver licenses for tourist use — no formal IDP required for English-language Latin-alphabet licenses. The preparation that matters: 0.05% BAC limit (one drink for many adults), off-road driving prohibition under the Nature Conservation Act (criminal offense, all insurance void), F-road access restricted to 4WD vehicles in summer only, and speed cameras that reach genuinely remote areas. IDP Companion provides multilingual license translation as a backup and is worth carrying.',
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Iceland',
		lead: "Iceland is a 'no-IDP-required, but the rules around driving are stricter than you think' destination. The documentation question is settled by your US license — what matters is understanding the operational rules.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Iceland',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Valid for tourist driving — Iceland accepts English-language Latin-alphabet licenses without a formal IDP requirement. Sufficient for rental pickup at all major agencies (Hertz, Avis, Europcar, Budget, Firefly). Some agents have requested an IDP for non-EU licenses at discretion — minority pattern.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual digital PDF presenting your license details in English, French, Spanish, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set. Useful backup if a rental agent requests a translation, or if your license format is questioned. Particularly worth carrying if you combine Iceland with other countries on the same trip where translation is more actively required.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Iceland: physical US driver license (photocopies and digital not accepted by Icelandic police or rental agencies) + passport + rental agreement + vehicle insurance. IDP Companion is a translation companion — not a standalone document. The 2026 km-based road fee is typically bundled into the rental rate; clarify with your agency at pickup.",
	},

	whyNotEnough: {
		heading: 'Why the rules in Iceland deserve more attention than the IDP question',
		lead: 'Three operational realities catch US tourists more often than any documentation issue. None of them are about your license.',
		reasons: [
			{
				icon: 'mdi:beer-outline',
				title: 'The BAC reason',
				text: "Iceland's blood alcohol limit is 0.05% — stricter than the US 0.08% standard. For many adults, a single drink is enough to approach this threshold. Icelandic DUI law applies from the first measurable violation, with fines starting at ISK 50,000 (~$370) and scaling to ISK 1,000,000 (~$7,400), license suspension up to three years, and potential jail time. If you plan to drink at dinner in Reykjavík, plan not to drive that night.",
			},
			{
				icon: 'ph:tree-bold',
				title: 'The off-road criminal offense reason',
				text: "Iceland's landscape looks drivable in nearly every direction. The country's environmental law — and your rental contract — disagree. Driving off marked roads, on beaches, on riverbanks, or on any surface that isn't a designated route is a criminal offense under the Nature Conservation Act. It voids all rental insurance regardless of the policy you purchased. Fines start at ISK 50,000 (~$370) and can reach ISK 500,000+ (~$3,700+) for severe environmental damage. Cameras cover areas that appear remote on a map.",
			},
			{
				icon: 'mdi:car-4x4',
				title: 'The F-road reason',
				text: "Iceland's Highland routes (F-roads, marked with an F prefix on Icelandic maps) are legally accessible only to 4WD vehicles and only during summer (typically late June to mid-September, conditions permitting). Attempting an F-road in a 2WD is illegal, voids your insurance, and puts you at risk of vehicle damage in terrain that has no roadside assistance coverage. Google Maps and some navigation apps will route you onto F-roads without flagging the restriction — verify on road.is before setting off.",
			},
		],
	},

	rules: {
		heading: 'Iceland driving rules US drivers should know',
		lead: 'Right-hand traffic, same as the US. Most rules feel familiar — but BAC, headlight requirement and the 2026 km-fee are operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '~31 mph in towns and cities' },
			{ icon: 'mdi:road-variant', label: 'Paved rural / Ring Road', value: '90 km/h', note: '~56 mph' },
			{ icon: 'mdi:speedometer-medium', label: 'Gravel/unpaved roads', value: '80 km/h', note: '~50 mph' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter than US 0.08%; one drink approaches limit' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'Bluetooth and Waze speed-camera alerts legal' },
			{ icon: 'mdi:car-light-high', label: 'Headlights', value: 'Mandatory at all times', note: 'Day and night, summer and winter; ISK 20,000 (~$150)' },
			{ icon: 'mdi:no-entry', label: 'Off-road driving', value: 'Criminal offense', note: 'Nature Conservation Act; voids all insurance' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: "Iceland's fines are steep and enforced uniformly on foreign-registered vehicles through rental company plate lookups.",
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding 10–20 km/h over', amount: 'ISK 10,000–30,000 (~$70–210)', note: 'Camera-issued; 25% discount for prompt payment', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 21–30 km/h over', amount: 'ISK 30,000–65,000 (~$210–480)', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 30+ km/h over', amount: 'ISK 65,000–90,000+ (~$480–670+)', note: 'License suspension risk', severity: 'high' },
			{ icon: 'mdi:gauge-full', label: 'Speeding over 160 km/h', amount: 'ISK 240,000 (~$1,780)', note: 'Criminal threshold', severity: 'high' },
			{ icon: 'mdi:car-light-high', label: 'No headlights (day or night)', amount: 'ISK 20,000 (~$150)', note: 'Mandatory at all times', severity: 'low' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'ISK 20,000 (~$150)', note: 'Per person', severity: 'low' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone', amount: '~ISK 18,000+ (~$130+)', note: '', severity: 'med' },
			{ icon: 'mdi:no-entry', label: 'Off-road / beach driving', amount: 'ISK 50,000–500,000+ (~$370–$3,700+)', note: 'Criminal offense; insurance void', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'ISK 50,000–1,000,000 (~$370–$7,400)', note: 'License suspension up to 3 years; potential jail', severity: 'high' },
			{ icon: 'mdi:car-4x4', label: 'F-road in 2WD vehicle', amount: 'Insurance void + recovery cost', note: 'No coverage; recovery billed to driver', severity: 'high' },
		],
		caption: 'Sources: Icelandic Transport Authority (Samgöngustofa); Hertz Iceland official fines guide 2025; road.is official road conditions; Icelandic Nature Conservation Act (umhverfisstofnun.is); Guide to Iceland road regulations 2026.',
	},

	lez: {
		heading: 'Iceland enforcement zones — Ring Road, F-roads, off-road realities',
		badge: 'Iceland-specific',
		lead: 'Three zones account for most US-tourist friction in Iceland — none of them are documentation issues.',
		zones: [
			{
				city: 'Ring Road (Route 1) east of Vík',
				name: 'Where the road becomes a question',
				description: "Most popular Ring Road segment for US tourists — Vík to Höfn passes Reynisfjara black-sand beach, Skaftafell, Jökulsárlón glacier lagoon. Speed cameras throughout. The transition from asphalt to gravel near beach access points is where the off-road question arises — driving onto Reynisfjara or any black-sand beach is a criminal offense under the Nature Conservation Act, voids all insurance, ISK 50,000+ (~$370+) fine. The beach looks driveable. It isn't.",
				fine: 'ISK 50,000+ (~$370+) off-road',
				note: 'Designated parking exists at every major beach access point. Park at the lot, walk the rest. The path is the rule, not the landscape.',
			},
			{
				city: 'F-roads (Highland routes — F26, F35, F208, etc.)',
				name: 'Legal access restricted to 4WD',
				description: 'F-roads are Iceland\'s Highland routes, designated with an F prefix on Icelandic maps. Legally accessible only to 4WD vehicles and only during summer (typically late June to mid-September). Attempting an F-road in a 2WD is illegal, voids your insurance, and risks serious vehicle damage in terrain with no roadside assistance coverage. Google Maps and some navigation apps route through F-roads without flagging the restriction — verify on road.is before setting off.',
				fine: 'Insurance void + recovery cost',
				note: 'Recovery from an F-road in a 2WD costs ISK 100,000–400,000+ (~$740–$2,960+) and no insurance covers it. Pre-trip check: road.is is the authoritative status source.',
			},
			{
				city: 'Reykjavík + 2026 km-based road fee',
				name: 'New per-km tax effective Jan 1, 2026',
				description: "Iceland introduced a per-kilometer road tax of 6.95 ISK/km for passenger vehicles effective January 1, 2026. For rental cars, this fee is typically bundled into the daily rate or charged based on actual distance driven — confirm with your agency at pickup. Reykjavík city driving itself is straightforward and well-signed; parking at downtown lots is paid (Bónus, Hagkaup parking lots free for shoppers).",
				fine: 'No direct fine — fee structure varies by agency',
				note: 'Clarify with your agency whether the fee is flat-rate (bundled into daily rate) or distance-based (charged at trip end based on actual km).',
			},
		],
		tip: "Practical rule for Iceland: in the rest of Europe, the question is 'do I need an IDP?' In Iceland, the question is 'do I understand off-road law, F-road restrictions and the BAC limit?' Your US license is fine. The rules are what take preparation. Two minutes on road.is before each driving day saves the trip from the F-road accidental-routing problem.",
	},

	howTo: {
		heading: 'How to prepare for driving in Iceland as a US citizen',
		lead: "Iceland is the destination where the IDP question is the easiest part of preparation. The rest is understanding three rules that don't appear on a license check.",
		schemaName: 'How to prepare for driving in Iceland as a US citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Skip the official-IDP route — Iceland does not require it',
				text: "Iceland accepts valid US driver licenses for tourist use. No IDP legally required for English-language Latin-alphabet licenses. Save the time and the trip to AAA or AATA — Iceland is one of the destinations where this step is genuinely unnecessary.",
			},
			{
				title: 'Generate IDP Companion as a backup translation aid',
				text: "$35 buys a multilingual digital PDF presenting your US license in English, French, Spanish, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set. Useful backup if a rental agent requests an IDP at discretion, or if you're combining Iceland with other countries (UK, Norway, broader Europe) where translation is more actively required.",
			},
			{
				title: 'Bookmark road.is and check before each driving day',
				text: 'road.is is the official Icelandic road condition portal — closures, F-road accessibility, real-time conditions. Check before every driving day, especially outside summer Ring Road conditions. Google Maps and other navigation apps do not flag F-road restrictions or seasonal closures — road.is is the authoritative source.',
			},
			{
				title: 'Match your rental category to your route',
				text: 'Ring Road + Golden Circle + South Coast (Reykjavík → Vík → Höfn): 2WD sedan or compact crossover sufficient. Highland trips (Landmannalaugar, Þórsmörk, anywhere with F-prefix routes): 4WD legally required, summer-only access. Eastfjords / Westfjords / North Iceland in shoulder seasons: gravel protection + AWD strongly recommended even on Ring Road sections.',
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US driver license + IDP Companion (printed, optional) + US passport + rental agreement + insurance certificate. Photocopied or digital licenses are not accepted by Icelandic police or rental agencies — original physical only. Rental contract shows what insurance you bought; bring it to any incident discussion.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Iceland — honestly',
		lead: 'For US drivers Iceland sits firmly in the "your license is fine" camp under Icelandic Transport Authority rules. Below covers where IDP Companion still earns its $35 — insurance backup, lost-license recovery, cross-border combo trips — and where it stays quiet.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that presents your US license details in English, French, Spanish, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to serve as a backup if a rental agent requests an IDP at discretion (minority pattern in Iceland)',
				'Particularly useful if you combine Iceland with other countries (UK, Norway, broader Europe) where translation is more actively required',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP — not legally required for US drivers in Iceland',
				'Not a replacement for your original US license — Icelandic police and rental agencies require the physical original',
				'Not a solution to the F-road, BAC, or off-road restrictions — those are operational driving decisions, not documentation ones',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Iceland',
			items: [
				'If a rental agency requests a translation document alongside your US license (minority pattern)',
				'At a police stop where a multilingual presentation of your license details speeds the interaction',
				'As a backup form of license identification if your physical US license is lost or damaged mid-trip',
				"If you're combining Iceland with other countries where a translation companion is more actively required",
			],
		},
		needOfficial: {
			title: 'Documents Icelandic authorities actually require',
			items: [
				"Original physical US driver license (digital/photocopied versions not accepted)",
				'US passport — checked at any document review',
				'Rental agreement — Icelandic version is the binding one',
				'Vehicle insurance certificate — provided by rental company; verify gravel protection and sand/ash supplements',
			],
		},
		pattern:
			"The honest pattern: in Iceland, your license is fine. The rules around driving it are what take preparation. IDP Companion at $35 is a sensible backup and a multi-country trip companion, not a legal necessity. The preparation that actually moves the needle is reading road.is before each driving day, understanding the BAC and off-road rules, and matching the rental category to the route.",
	},

	renting: {
		heading: 'Renting a car in Iceland as a US driver',
		lead: 'Iceland accepts US licenses uniformly across major agencies. The differentiation between rentals is vehicle category (2WD vs 4WD) and insurance supplements (gravel, sand and ash) — not documentation.',
		chains: [
			{ name: 'Hertz Iceland', policy: 'Operates at Keflavík Airport (KEF). Accepts US licenses directly. Minimum age 20 for standard vehicles, 23–25 for 4WD/SUVs. CDW included; gravel protection and sand/ash supplements sold separately' },
			{ name: 'Avis Iceland', policy: 'Similar requirements. Minimum age 20, 23 minimum for 4WD. US license accepted. Some agents request IDP for non-EU licenses at discretion' },
			{ name: 'Europcar Iceland', policy: 'KEF and Reykjavík. Same age minimums. US license accepted. Gravel protection recommended for any route off the Ring Road' },
			{ name: 'Firefly Iceland (budget)', policy: 'KEF airport. Older fleet, lower rates, unlimited mileage. US license accepted. Popular for budget Ring Road itineraries' },
			{ name: 'Blue Car Rental', policy: 'Reykjavík-based local operator. Newer fleet, includes gravel protection in base rate. Strong reviews for transparency on the 2026 km-fee handling' },
		],
		tipsHeading: 'Practical tips for Iceland',
		tips: [
			'4WD is strongly recommended for almost all itineraries outside Reykjavík — even summer Route 1 east of Vík involves gravel sections and unpredictable weather',
			'Minimum age: 20 for standard cars, 23–25 for 4WD depending on agency',
			'Credit card with sufficient deposit funds required — holds of $1,500–$3,000 common for 4WD',
			'Gravel protection is a separate add-on — standard CDW does not cover windshield and underbody damage from gravel, common on Iceland\'s roads',
			'Sand and ash coverage worth adding if driving near volcanic areas (Vík, Landmannalaugar vicinity)',
			'Always check road.is before driving — closures, F-road accessibility, real-time conditions',
			'Fuel stations on Ring Road spaced up to 150 km apart in Eastfjords — keep tank above half',
			'2026 km-based road fee (6.95 ISK/km) typically bundled into rental rates; clarify with your agency whether flat-rate or distance-based',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without preparation — real outcomes',
		lead: 'Drawing from r/VisitingIceland threads and Icelandic Transport Authority advisories — F-road insurance voids, BAC enforcement at 0.05%, summer-vs-winter Ring Road conditions for US drivers — sorted by frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Clean pickup, no issues on route',
				text: 'US license accepted, Ring Road or Golden Circle, no problems. The expected outcome for ~85%+ of US tourist itineraries.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Rental agency requests translation',
				text: "Some agencies request an IDP or translation alongside the US license at discretion. Minority pattern — IDP Companion covers this if it arises.",
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Speed camera on paved road',
				text: 'ISK 10,000–65,000 (~$70–480); issued to rental company; charged to card. 25% discount for prompt payment.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'GPS routes onto F-road in 2WD',
				text: 'Insurance void; vehicle stuck; recovery billed to driver (ISK 100,000–400,000+, ~$740–$2,960+). Pre-trip road.is check prevents this.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Beach/off-road driving',
				text: 'Criminal offense; ISK 50,000–500,000+ (~$370–$3,700+); insurance void across all policies. Reynisfjara and other black-sand beaches the most documented incidents.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI stop over 0.05% BAC',
				text: 'ISK 50,000–1,000,000 (~$370–$7,400); license suspension up to 3 years; potential jail. One drink approaches the limit for many adults.',
			},
		],
		math: 'IDP Companion is $35. Recovery from an F-road in a 2WD costs ISK 100,000–400,000+ (~$740–$2,960+) and no insurance covers it. One evening of wine in Reykjavík followed by driving produces a fine that starts at ~$370. Off-road on a black-sand beach starts at ~$370 and escalates fast. Preparation is cheaper than all of these — and most preparation isn\'t about IDP at all.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I need an IDP to drive in Iceland with a US license?',
				answer: 'No. Iceland accepts valid US driver licenses for tourist use — no formal IDP required, as long as the license is in the Latin alphabet and English. The IDP requirement applies to licenses in non-Latin scripts (Cyrillic, Arabic, Japanese).',
			},
			{
				id: 2,
				question: "Why does IDP Companion say it's useful if Iceland doesn't require it?",
				answer: "Some rental agencies in Iceland request a translation or IDP alongside a US license at their discretion (minority pattern). IDP Companion also serves as backup identification if your physical license is lost mid-trip, and is useful if you're combining Iceland with other countries in the same trip where a translation document is more actively required (UK, Norway, parts of Europe).",
			},
			{
				id: 3,
				question: "What is Iceland's alcohol limit while driving?",
				answer: '0.05% BAC — stricter than the US 0.08% standard. One drink approaches or reaches the limit for many adults. Fines range from ISK 50,000 to ISK 1,000,000 (~$370–$7,400), with license suspension up to 3 years and potential jail time for violations.',
			},
			{
				id: 4,
				question: "Can I drive on Iceland's beaches?",
				answer: "No. Driving on beaches, riverbeds, unmarked terrain or any non-designated road surface is a criminal offense under Iceland's Nature Conservation Act. It voids all rental insurance — including supplemental policies — and carries fines starting at ISK 50,000 (~$370) with potential criminal charges. Reynisfjara black-sand beach near Vík is the most documented incident location.",
			},
			{
				id: 5,
				question: "What are F-roads and why can't I drive them in a regular car?",
				answer: "F-roads are Iceland's Highland routes, designated with an F prefix on Icelandic maps (e.g., F208, F35). They are legally accessible only to 4WD vehicles and only when open (typically late June to mid-September). Attempting an F-road in a 2WD is illegal, voids your insurance, and risks serious vehicle damage. Confirm the route on road.is before setting off — navigation apps frequently route through F-roads without flagging the restriction.",
			},
			{
				id: 6,
				question: 'How do speed cameras work in Iceland?',
				answer: 'Most are fixed installations on poles — gray or beige rectangles, often blending into the landscape. Some are mobile (police radar). Cameras photograph the plate and report to the rental company, which is required by law to provide driver information to police. The fine then reaches you by email and is charged to your rental deposit or card.',
			},
			{
				id: 7,
				question: 'Can I pay a speeding fine on the spot?',
				answer: 'If pulled over by a police officer in Iceland, yes — and paying immediately gives a 25% discount. For camera-issued fines, payment options include bank transfer, Icelandic post offices, or the official traffic management website. Prompt payment also earns the discount.',
			},
			{
				id: 8,
				question: 'What does the new 2026 km-based road fee mean for rental drivers?',
				answer: 'Iceland introduced a 6.95 ISK/km road tax for all vehicles starting January 1, 2026. For rental cars, agencies typically handle this in one of two ways: bundled into a flat daily rate, or charged at trip end based on actual kilometers driven. Clarify which approach your agency uses at pickup.',
			},
			{
				id: 9,
				question: "Are Iceland's roads driveable for someone who's never driven on snow?",
				answer: "Summer Ring Road conditions (June–August) are entirely manageable — paved, well-marked, snow rare. Shoulder season (May, September) brings unpredictable weather but Ring Road remains driveable for any reasonably experienced driver. Winter (October–April) requires winter tires (rentals provide them automatically) and demands real cold-weather driving experience or willingness to slow down significantly. F-roads are summer-only.",
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Iceland trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic US license — if your US license expires, the companion expires with it. One purchase covers Iceland plus the UK, Norway, broader Europe, Mexico, Costa Rica and any other destination during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other long-haul self-drive destinations US travelers cluster with Iceland — Norway, the Faroes, the UK.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
			{ flagFrom: 'us', flagTo: 'cr', label: 'US → Costa Rica', status: 'Live', href: '/idp-for-us-drivers-in-costa-rica/' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan/' },
			{ flagFrom: 'gb', flagTo: 'is', label: 'UK → Iceland', status: 'Live', href: '/idp-for-uk-drivers-in-iceland/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Iceland's roads are some of the most spectacular you'll drive anywhere. The rules around them are stricter than you'd expect — 0.05% BAC, off-road as a criminal offense, F-roads requiring 4WD, cameras in places that look empty. IDP Companion is two minutes and one less thing to think about when the road does something unexpected. Multilingual PDF including English, French, Spanish, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Icelandic Transport Authority (Samgöngustofa) or the Icelandic Police. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			'Icelandic Transport Authority (Samgöngustofa) — samgongustofa.is',
			'road.is — official road conditions and F-road status',
			'Hertz Iceland — official fines and driving guide (hertz.is, updated 2025)',
			'Guide to Iceland — driving regulations 2026 (guidetoiceland.is)',
			'Icelandic Nature Conservation Act — umhverfisstofnun.is',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Iceland',
	},
};

export const usIcelandCopy: Record<'en', CountryPairCopy> = { en };
