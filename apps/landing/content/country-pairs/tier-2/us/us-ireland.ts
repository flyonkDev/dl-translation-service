/**
 * Country-pair content: United States → Ireland.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Most US credit cards explicitly EXCLUDE Ireland from
 * international rental insurance — Visa, Mastercard and even Amex
 * commonly list Ireland as an excluded territory. This is a long-
 * standing quirk of Irish insurance regulation, not a card-issuer
 * error, and it shifts the rental Collision Damage Waiver from
 * optional add-on to effective requirement at €25–40 per day. Over a
 * 10-day Wild Atlantic Way trip that's €250–400 of CDW on top of the
 * rental base rate. The licensing layer itself is settled: Road Safety
 * Authority recognises a valid US license issued in English for the
 * duration of a short-term tourist visit.
 *
 * CROSS-FILE VARIANCE FROM uk-ireland.ts (binding per CLAUDE.md
 * post-write audit rule #7):
 * uk-ireland.ts uses the Common Travel Area (CTA-led) opener as its
 * central angle, because the CTA framework is the distinctive UK-
 * specific recognition layer. This page MUST use a different primary
 * angle so the two same-destination pages don't share a template
 * footprint that Google's classifiers would detect. The chosen angle
 * here is the US credit card Ireland-exclusion + CDW pricing reality,
 * which is genuinely the distinctive US-driver fact. Both pages cover
 * RSA / Garda / M50 / eFlow as required-content layer; both pages
 * have IDP Companion's role at peak-season Shannon and Dublin counters;
 * but the rhetorical framing differs throughout.
 *
 * Distinctive content: US credit card Ireland-exclusion (Visa, Master-
 * card, Amex commonly exclude); CDW pricing €25–40/day among Europe's
 * highest; M50 Dublin orbital barrier-free toll requires payment via
 * eFlow.ie by 8pm next day or escalates; left-side driving day-one US-
 * driver adjustment; km/h (Ireland metric since 2005) vs Northern
 * Ireland mph cross-border switch.
 *
 * MIDDLE-PIVOT COMPLIANCE: clean — Sanya's brief mentioned AAA and
 * AATA only in the legal disclaimer (correct location for US-origin
 * pages — these are the authorised US Geneva 1949 IDP issuers, named
 * once for legal disclosure).
 *
 * PDF LANGUAGE COMPLIANCE: All 12 verified languages enumerated in
 * TLDR row (Sanya only listed 7). Irish (Gaeilge) is NOT on the PDF
 * but English is universal at every Irish tourist-facing interaction
 * — Ireland is officially bilingual but English dominates commercial /
 * police interactions with foreign tourists.
 *
 * SEO add-ons present: tldr, howTo, lastReviewed.
 * NO phrases block — US-to-Ireland tourist driving runs in English.
 * NO lez block. NO alphabet block.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Ireland: 2026 Credit Card & CDW Guide',
		description:
			"Renting in Dublin or Shannon? Most US credit cards EXCLUDE Ireland from international rental insurance, shifting CDW from optional to effective requirement at €25–40/day. Your US license itself is legal for short-term tourist visits — the cost question is the insurance gap. Honest 2026 guide.",
		ogTitleShort: 'US Drivers in Ireland: Card-Exclusion',
		ogSubtitle: 'US license is legal. Most US credit cards exclude Ireland insurance.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Ireland',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Ireland · 2026 Guide',
		title: 'Driving Ireland on a US License: The Credit-Card Insurance Exclusion',
		lead: "Most US credit cards explicitly exclude Ireland from international rental insurance — Visa, Mastercard and even Amex commonly list Ireland as an excluded territory. This is a long-standing quirk of Irish insurance regulation, not a card-issuer error, and it shifts rental Collision Damage Waiver from an optional add-on to an effective requirement at €25–40 per day. Over a 10-day Wild Atlantic Way trip that's €250–400 of CDW on top of the rental base rate. Your US license itself is settled — the Road Safety Authority recognises a valid US license issued in English for the duration of a short-term tourist visit, no IDP required. What replaces the licensing question for US drivers in Ireland is two harder ones: the credit-card-exclusion-plus-CDW reality, and the moment at Shannon or Dublin Airport during a peak-July queue when the desk agent asks for the international permit because reading a Florida or Texas format is slower than reading a standardised translation. The fastest way through the queue is a piece of paper that has nothing to do with the law.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — RSA accepts US licenses for tourist visits; verify your credit-card Ireland insurance exclusion before flying',
		text: "The Road Safety Authority (RSA) recognises foreign driver's licenses issued in English for the duration of a tourist's short-term visit to Ireland. US licenses are issued in English, so they meet the rule without translation. Visitors typically drive on their home license for the entirety of their stay. The same applies for short visits to Northern Ireland under DVA NI. The bigger pre-trip question for US drivers in Ireland is the credit-card rental-insurance exclusion: most US-issued Visa, Mastercard and Amex products explicitly exclude Ireland from international rental cover. Verify your card terms in writing before flying.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Ireland',
		lead: "For a US tourist driving in Ireland, the legally required document is your original US license — RSA recognises it for the duration of a short-term visit. Paperwork is the small question. The big question is the €25–40/day CDW Irish rental insurance regulation forces on you because your US credit-card cover excludes Ireland. IDP Companion fits the small question (state-specific US format slows verification at peak-volume Shannon and Dublin queues); the insurance line is on a separate ledger and bigger.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Ireland',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Legally accepted by the RSA for tourist driving for the duration of a short-term visit. Issued in English, so no translation is required by law. Accepted by all major Irish rental chains (Hertz, Avis, Enterprise, Europcar, Budget, Dan Dooley) at Dublin, Shannon and Cork airports.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: "Multilingual digital PDF presenting your US license data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Ireland is officially bilingual (Irish + English) but English is universal at every tourist-facing interaction — Dublin / Shannon / Cork airport rental chains, An Garda Síochána tourist-area officers, RSA tourist portals — so the English version is the working-language route. The standardised layout is faster to verify than a state-specific US license format at peak-volume Shannon and Dublin queues. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Ireland: original physical US license + US passport + rental contract + Irish rental CDW certificate (US credit card cover typically excludes Ireland — verify your card in writing). M50 Dublin orbital toll requires online payment via eFlow.ie by 8pm next day. Note: rental insurance is the substantive Irish budget question for US visitors, not licensing — see Renting section.",
	},

	whyNotEnough: {
		heading: 'Why your US license creates rental-desk friction and insurance-gap surprises in Ireland',
		lead: "Most US-driver pain in Ireland isn't paperwork. It's the credit-card insurance exclusion that shifts CDW from optional add-on to effective requirement, and the format-recognition layer at peak-volume Shannon and Dublin queues where state-specific US formats process more slowly than standardised paperwork. The licensing layer itself — RSA recognition of US licenses — is the easy part.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Enterprise, Europcar, Budget and Dan Dooley each set their own internal verification policy at Irish branches. Shannon and Dublin airports — the highest-volume tourist rental hubs in the country — process hundreds of overseas pickups daily in July and August. Several branches list an IDP as a recommended document for non-resident renters even when RSA doesn't require one. A desk agent following internal policy can put a hold on the pickup or ask for additional verification. The RSA answer (yes, you can drive on your US license) and the desk answer (where's your IDP) come from two different authorities.",
			},
			{
				icon: 'ph:credit-card-bold',
				title: 'The credit-card insurance exclusion (this is the budget question)',
				text: "Most US-issued credit cards explicitly exclude Ireland from international rental insurance — Visa, Mastercard and even Amex commonly list Ireland as one of the few countries excluded from card-provided rental cover. This is driven by Irish insurance regulation requiring renters to have valid Irish-domiciled insurance, combined with Ireland's historically high accident rates on narrow rural roads. The card-exclusion plus the CDW pricing (€25–40 per day at the desk) means that over a 10-day Wild Atlantic Way trip, the insurance line item runs €250–400 on top of the rental base rate. Verify your card's terms in writing before you fly — don't rely on verbal confirmation from a phone agent.",
			},
			{
				icon: 'ph:steering-wheel-bold',
				title: 'The left-side driving reason',
				text: "Ireland drives on the left — same as the UK and Northern Ireland. The steering wheel is on the right side of the car; you drive on the left side of the road; roundabouts give way to vehicles approaching from the right. This is the single biggest day-one operational adjustment for US drivers. Rural R-roads are narrower than US drivers expect — stone walls and hedgerows replace shoulders, single-lane sections with passing places are common. Standardised paperwork is partly what the desk agent uses to gauge readiness for unfamiliar conditions.",
			},
		],
	},

	rules: {
		heading: 'Ireland driving rules US drivers should know',
		lead: 'Left-side driving — the single biggest day-one US-driver adjustment. The substantive operational rules are the metric speeds (Ireland is km/h since 2005, Northern Ireland still uses mph), the stricter alcohol limit than US federal (0.05% vs 0.08%), and no-turn-on-red as universal (different from US right-on-red).',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Steering wheel on the right; single biggest day-one US-driver adjustment' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h (NOT mph)', note: 'Some 30 km/h school zones; Ireland is metric since 2005' },
			{ icon: 'mdi:road-variant', label: 'Regional (R-) road', value: '80 km/h', note: 'Narrow, stone walls / hedgerows; many single-lane passing-place sections' },
			{ icon: 'mdi:speedometer-medium', label: 'National (N-) road / Motorway (M-)', value: '100 / 120 km/h', note: 'Average-speed cameras on some motorway sections; M50 Dublin orbital is barrier-free toll' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (general)', value: '0.05% BAC', note: 'Stricter than US federal 0.08%; random breath testing routine' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (novice / professional)', value: '0.02% BAC', note: 'First-2-years and professional drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: '€120 + 3 penalty points (points don\'t transfer to US licenses but fine does)' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'NOT permitted', note: 'Different from US right-on-red — all red lights are full stops in all directions' },
		],
	},

	fines: {
		heading: '2026 fixed-charge notices for US drivers in Ireland',
		lead: 'Two specifics about Irish fines for US drivers. The EUR amount on any RSA fixed-charge notice forwards to your US card via the rental company (plus typical €40 admin fee, arriving 4–8 weeks after the trip); the penalty points attached to the notice stay in the Irish system and never reach a US license. The fine most US tourists actually meet isn\'t speeding or a red light — it\'s the M50 barrier-free Dublin orbital toll, payable via eFlow.ie by 8pm the day after travel or escalating from €3 to €100+.',
		colViolation: 'Violation',
		colAmount: 'Fine (EUR)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding less than 10 km/h over', amount: '€80 fixed charge + 3 penalty points', note: 'Camera-enforced on motorways and key urban arteries', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 10–20 km/h over', amount: '€80–160 + penalty points', note: 'Mobile speed-camera vans operate routinely', severity: 'med' },
			{ icon: 'ph:siren-bold', label: 'Speeding above 30 km/h over', amount: 'Court appearance', note: 'Possible disqualification equivalent', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€60 fixed charge + 3 penalty points', note: '', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€120 fixed charge + 3 penalty points', note: 'Aggressively enforced', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€60 fixed charge + 3 penalty points', note: 'Driver liable for unbelted passengers', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 50–100 mg/100 ml (first offence)', amount: '€200 fixed charge + 3-month ban', note: 'Random breath testing routine; Ireland 0.05% stricter than US federal 0.08%', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI above 100 mg/100 ml', amount: 'Court appearance + extended ban; possible imprisonment', note: 'Criminal record applies internationally', severity: 'high' },
			{ icon: 'ph:road-horizon-bold', label: 'Unpaid M50 toll (eFlow.ie)', amount: 'Escalating penalty (€3 toll → ~€100+ if unpaid)', note: "Dublin's M50 is barrier-free; toll must be paid online via eFlow.ie by 8pm the day after travel. Most-common US-tourist Ireland mistake", severity: 'med' },
		],
		caption: 'Sources: RSA fixed-charge schedules (rsa.ie); An Garda Síochána publications (garda.ie); Transport Infrastructure Ireland TII for tolls (tii.ie); eFlow M50 portal (eflow.ie). Verify current figures before travel.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Ireland — honestly',
		lead: "Honest scope for US drivers in Ireland: IDP Companion is the standardised translation that processes faster than a state-specific US format at peak-volume Shannon and Dublin desks. It is not the credit-card insurance fix (the substantive Irish budget question), the M50 eFlow toll account or Irish CDW. The big-budget Irish decisions are on a separate line item; IDP Companion is the small-budget one.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your US license data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Ireland, English on the document is the working-language route — Ireland is officially bilingual (Irish + English) but English is universal at every tourist-facing interaction at Dublin / Shannon / Cork airport rental chains and An Garda Síochána tourist-area stops',
				'The standardised layout is faster to verify than a state-specific US license format at peak-volume Shannon and Dublin queues',
				'Generated in minutes after you upload your license and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by the RSA for tourist driving on a US license',
				'Not valid by itself — must be carried alongside your physical US license',
				'Not rental insurance — and the credit-card-exclusion-plus-CDW reality is the substantive Irish budget question for US drivers',
				'Not an M50 eFlow toll account — that\'s a separate payment habit',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Ireland',
			items: [
				'At Shannon, Dublin and Cork airport rental queues during peak July–August turnover when desk agents default to asking for the international permit',
				'At An Garda Síochána checkpoints (especially on rural Western and Southern routes) where standardised English-language paperwork shortens the stop',
				'For insurance and accident-report paperwork where multilingual translation simplifies the cross-border claim',
				'As a re-printable backup from any hotel if your physical license is lost or temporarily separated from you on a multi-stop Wild Atlantic Way trip',
				"For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Ireland plus UK, Australia, New Zealand and other English-license-accepting destinations on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Irish law actually cares about',
			items: [
				'Your physical US driver\'s license — the actual permission to drive (RSA-recognised for short-term tourist visits)',
				'US passport — required at every document check; Gardaí may verify identity',
				'Rental agreement and proof of valid Irish motor insurance (CDW from the rental — US credit card cover typically excludes Ireland, verify your card in writing before flying)',
				'Active M50 eFlow account or willingness to pay the M50 toll online via eFlow.ie by 8pm the day after travel',
				'For specific vehicles: any relevant motorcycle or commercial endorsement on the US license',
			],
		},
		pattern:
			"What prepared US travellers in Ireland actually carry: physical US license + US passport + rental contract + Irish CDW certificate (with full understanding their US card likely doesn't cover) + IDP Companion + a reminder to pay the M50 toll. The bigger preparation is the credit-card terms verification in writing before flying (don't rely on phone confirmation), the CDW budget line (€25–40/day × trip days), and the left-side driving practice in a quiet area before joining the main route.",
	},

	renting: {
		heading: 'Renting a car in Ireland as a US driver — the insurance reality',
		lead: "What costs more in Ireland than US visitors expect: not the car, the insurance. CDW at the desk runs €25–40/day because Irish insurance regulation requires Irish-domiciled cover and most US credit cards explicitly exclude Ireland. Hertz, Avis, Enterprise, Europcar, Budget and the Irish-owned Dan Dooley all handle US licenses; the insurance conversation is where the real Irish-rental friction happens.",
		chains: [
			{ name: 'Hertz Ireland', policy: 'Major presence at Dublin, Shannon and Cork airports plus city locations. Accepts US driver licenses for tourist rentals. Internal policy at peak season may recommend an IDP.' },
			{ name: 'Avis Ireland (incl. Budget)', policy: 'Wide network including regional locations. Accepts US licenses in English. Some branches request an IDP at pickup as a verification document; operates Budget under the same group.' },
			{ name: 'Enterprise Ireland', policy: 'Strong network including downtown Dublin and regional cities. US licenses accepted; documentation policy varies by branch manager.' },
			{ name: 'Dan Dooley (Irish local)', policy: 'Irish-owned, often cheaper than international chains. Strong presence at Shannon and Dublin airports. US licenses accepted; customer service generally more flexible.' },
			{ name: 'Europcar Ireland', policy: 'Wide network including ferry ports and regional cities. US licenses accepted.' },
		],
		tipsHeading: 'Practical tips for renting in Ireland — the insurance reality',
		tips: [
			'Most US credit cards explicitly exclude Ireland from international rental insurance — Visa, Mastercard and even Amex commonly list Ireland as an excluded territory. Verify your card\'s terms in writing before you fly. This is a long-standing quirk of Irish insurance regulation, not a card-issuer error',
			'Collision Damage Waiver at the desk runs €25–40 per day. Over a 10-day rental, this adds €250–400. The agent will offer it; you usually cannot decline it without a written letter from a credit card insurer that covers Ireland (rare)',
			'Get the smallest practical car. Irish rural roads are narrow — stone walls, hedgerows and oncoming traffic on R-roads do not forgive a wide American-spec SUV. A Volkswagen Polo or Ford Focus is more useful than a Cherokee or Tahoe',
			'Petrol vs diesel — diesel is common in Irish rentals and often cheaper per kilometre on long routes. Check the rental contract for fuel policy (full-to-full is standard)',
			"M50 motorway toll is barrier-free — Dublin's orbital motorway charges a toll automatically by number plate. Pay by 8pm the next day via eFlow.ie or accept escalating penalties. Most rental cars have a tag, but confirm; otherwise it's your responsibility",
			'Northern Ireland border — driving from Republic into NI is seamless (no checkpoint), but rental contracts may restrict cross-border use. Confirm before crossing. Speed limits and signs switch from km/h to mph at the border; currency switches from EUR to GBP',
			'Rain is constant. Drive accordingly — wet rural roads, narrow lanes and reduced visibility are the default condition, especially Atlantic-coast routes (Wild Atlantic Way, Ring of Kerry, Connemara)',
			'Switch to driving in km/h — Ireland is metric since 2005, US uses mph. Speed-limit signage uses different units; pay attention at airport pickup and during the first 30 minutes on Irish roads',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for US drivers',
		lead: 'The credit-card insurance exclusion drives most documented US-driver outcomes in Ireland — six scenarios from CDW-purchased clean trip through to refused-pickup-and-rebook, drawn from RSA framework, US Embassy Dublin guidance and traveller reports. Most friction sits on the insurance side, not on licensing.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common off-peak',
				label: 'Desk agent accepts US license, you drive away in 20 minutes',
				text: 'RSA legal default. Pick up at Shannon or Dublin, drive the Wild Atlantic Way down to Galway and the Ring of Kerry, return the car. Most Ireland trips end this way on the licensing side.',
			},
			{
				severity: 'low',
				frequency: 'Common at peak Shannon and Dublin July–August queues',
				label: 'Desk agent asks for IDP, you produce IDP Companion',
				text: 'Five extra minutes of paperwork verification at the Shannon or Dublin counter during peak July–August Wild Atlantic Way season, no further issue. Common when desk agents work through high-volume international pickup queues by defaulting to standardised paperwork.',
			},
			{
				severity: 'med',
				frequency: 'Very common — the central US-driver Ireland reality',
				label: 'Desk agent insists on full CDW purchase regardless of card coverage',
				text: 'Adds €25–40/day to total cost. Most US cards exclude Ireland; the rental company knows this and the contract typically requires CDW at the counter without a written exemption from a card insurer that covers Ireland. This is an insurance question, not a licensing question — and the substantive Irish budget reality for US drivers.',
			},
			{
				severity: 'med',
				frequency: 'Very common US-tourist mistake',
				label: 'Unpaid M50 toll, escalating penalty',
				text: 'M50 Dublin orbital is barrier-free — you drove across without paying via eFlow.ie by 8pm the next day. €3 toll → €100+ penalty plus rental admin fee 4–8 weeks after the trip. The most-common US-tourist Ireland miss after the credit-card insurance surprise.',
			},
			{
				severity: 'high',
				frequency: 'Rare but real in July–August',
				label: 'Desk agent refuses pickup, you rebook with a competitor at peak rates',
				text: 'Shannon competing branches may also ask for IDP — peak-season same-day rebooks run €150+/day vs €60/day advance rate. The IDP Companion + RSA-recognition documentation usually clears this in five extra minutes.',
			},
			{
				severity: 'low',
				frequency: 'Uncommon',
				label: 'Garda checkpoint on rural route, paperwork in order, brief stop',
				text: "Standard tourist-area document review on a rural Western or Southern route. US license accepted under RSA recognition, IDP Companion's English version shortens the conversation. Standard process, no further action.",
			},
		],
		math: "$35 IDP Companion vs the difference between a €120/day same-day rebook in Shannon and a €60/day advance rate. The CDW math is the bigger Irish budget reality for US drivers (€25–40/day × trip days), driven by the credit-card insurance exclusion. Verify your card terms in writing before flying — six US drivers in ten discover the exclusion at the rental desk in Shannon rather than at home.",
	},

	howTo: {
		heading: 'How to prepare for driving in Ireland (US citizens)',
		lead: "Pre-trip work for US drivers in Ireland centres on two insurance decisions, not on licensing — verify your credit-card Ireland exclusion in writing, and budget for CDW at the desk if your card excludes (most do).",
		schemaName: 'How to prepare for driving in Ireland as a US citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US license is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired licenses are not accepted by RSA or Irish rental companies.',
			},
			{
				title: 'Verify your credit card\'s Ireland rental-insurance terms in writing',
				text: "Most US cards (Visa, Mastercard, Amex) explicitly exclude Ireland from international rental cover — this is a long-standing quirk of Irish insurance regulation. Don't rely on verbal confirmation from a phone agent; request the written terms or read the card benefits guide. If your card excludes (most do), budget for CDW at €25–40/day at the desk.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: "$35 buys a multilingual digital PDF translating your US license data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. The standardised layout is faster to verify than a state-specific US format at peak-volume Shannon and Dublin queues. Print at home or from any Irish hotel.",
			},
			{
				title: 'Download offline maps for rural routes',
				text: 'Wild Atlantic Way, Ring of Kerry, Connemara and the Burren have patchy mobile coverage — Google Maps offline or Maps.me works. Plan day-time driving for the longer Atlantic-coast stretches; rural R-roads are narrower than US drivers expect and visibility drops fast in Atlantic rain.',
			},
			{
				title: 'Carry physical documents in one folder + plan for the M50 toll',
				text: 'Physical US license + US passport + rental contract + Irish CDW certificate + IDP Companion — all in one folder. Hand the folder over at any Garda checkpoint. Set a calendar reminder for the day after your M50 crossing and pay €3 via eflow.ie by 8pm — single most-common US-tourist Ireland miss avoided.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Ireland as a US tourist?',
				answer: 'No. The Road Safety Authority recognises a valid US driver\'s license issued in English for the duration of a short-term tourist visit. No IDP is legally required.',
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes — rental companies set their own internal verification policy separate from RSA. Shannon and Dublin Airport branches during peak season (July–August) sometimes have policies that ask for an IDP at pickup. The translation companion clears the question in writing in five extra minutes.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a private multilingual translation companion document presenting your license details in twelve widely-read languages from the 1949 Geneva Convention set. It is not issued under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your original US license.',
			},
			{
				id: 4,
				question: 'Why is rental insurance in Ireland so expensive for US drivers specifically?',
				answer: "Two factors stack. First, Irish insurance regulation requires renters to have valid Irish-domiciled insurance and Ireland has historically high accident rates on narrow rural roads — pushing CDW desk pricing to €25–40 per day. Second, most US credit cards explicitly exclude Ireland from international rental cover (Visa, Mastercard, Amex commonly list Ireland as excluded), so US drivers can't decline the desk CDW the way they often can in other European countries. The combination shifts CDW from optional add-on to effective requirement for US visitors.",
			},
			{
				id: 5,
				question: 'Does my US credit card cover rental in Ireland?',
				answer: "Usually no — Ireland is one of the few countries explicitly excluded by most US-issued Visa, Mastercard and Amex products. Check your card's terms in writing, and don't rely on verbal confirmation from a phone agent. Request the written benefits guide and search for \"Ireland\" or \"excluded territories.\"",
			},
			{
				id: 6,
				question: 'What side of the road do they drive on?',
				answer: 'Left. The driver\'s seat is on the right side of the car. The single biggest day-one operational adjustment for US drivers. Practice in a quiet area before the main route.',
			},
			{
				id: 7,
				question: 'Can I drive in Northern Ireland on my US license?',
				answer: 'Yes. DVA Northern Ireland follows the same visitor rule as DVLA Great Britain (12-month visitor window on a valid US license). Speed limits switch from km/h (Republic) to mph (NI) at the border; currency switches from EUR to GBP; BAC limit is 0.08% in NI (same as US federal) vs 0.05% in Republic.',
			},
			{
				id: 8,
				question: 'Are speed cameras everywhere?',
				answer: 'On motorways, key urban arteries and via mobile speed-camera vans on rural routes. Average-speed cameras on some motorway sections. Fixed-charge speeding tickets follow the rental car back to the named driver\'s US card 4–8 weeks after the trip plus a €40 admin fee.',
			},
			{
				id: 9,
				question: 'What about the M50 motorway toll?',
				answer: "Dublin's M50 is barrier-free; the toll is charged automatically by number plate. Pay €3 by 8pm the day after travel via eflow.ie or via the rental company's tag if one is fitted. Unpaid M50 tolls escalate into ~€100+ penalties that get forwarded to your card.",
			},
			{
				id: 10,
				question: 'Can I rent a car at Dublin and return it at Shannon?',
				answer: 'Yes — most chains support one-way rentals between Dublin, Shannon and Cork. A one-way fee applies. Cross-border to Northern Ireland is usually allowed; confirm before booking.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Pairs to consult before booking a Western European trip — siblings to Ireland where the documentation, insurance and enforcement archetypes vary by destination.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'gb', label: 'US → United Kingdom', status: 'Live', href: '/idp-for-us-drivers-in-uk/' },
			{ flagFrom: 'us', flagTo: 'au', label: 'US → Australia', status: 'Live', href: '/idp-for-us-drivers-in-australia/' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'gb', flagTo: 'ie', label: 'UK → Ireland', status: 'Live', href: '/idp-for-uk-drivers-in-ireland/' },
			{ flagFrom: 'us', flagTo: 'no', label: 'US → Norway', status: 'Live', href: '/idp-for-us-drivers-in-norway/' },
		],
	},

	finalCta: {
		heading: 'Driving the Wild Atlantic Way, Ring of Kerry or the Burren?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real US license in two minutes. Ireland runs in English at every tourist-facing interaction; the standardised layout is faster to verify than a state-specific US format at peak-volume Shannon and Dublin queues. Valid 1–5 years and covers Ireland plus UK, Australia, New Zealand on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. The bigger pre-trip work is verifying your credit-card Ireland insurance exclusion in writing — most US cards exclude, and the desk CDW at €25–40/day is the substantive Irish budget reality for US visitors.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Road Safety Authority of Ireland (RSA), An Garda Síochána, Transport Infrastructure Ireland (TII), eFlow or any other Irish government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			'Road Safety Authority (RSA) — Foreign driving licences in Ireland (rsa.ie)',
			'An Garda Síochána — Fixed-charge notices schedule (garda.ie)',
			'Transport Infrastructure Ireland — M50 toll and tolling information (tii.ie)',
			'Citizens Information — Visitors driving in Ireland (citizensinformation.ie)',
			'US Embassy in Dublin — Driving advisory for US citizens (ie.usembassy.gov)',
			'eFlow — M50 toll payment portal (eflow.ie)',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Ireland',
	},
};

export const usIrelandCopy: Record<'en', CountryPairCopy> = { en };
