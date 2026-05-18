/**
 * Country-pair content: United Kingdom → Ireland.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: The Common Travel Area (CTA) between the UK and Ireland
 * predates the EU by 50+ years (established 1922, formally reaffirmed
 * 2019 ahead of Brexit) and continues post-Brexit untouched. UK photo-
 * card licences are recognised in Ireland not because of EU rules but
 * because of the CTA itself. Ireland is the only foreign destination
 * where a UK driver gets full domestic-equivalent licence recognition.
 * Most UK motor insurance policies extend to Ireland by default — the
 * only foreign-driving destination where this is the standard, not
 * the exception. Ireland drives on the left, same as the UK. This
 * combination makes Ireland the lightest-touch foreign-driving destin-
 * ation of any UK trip.
 *
 * Distinctive content: Irish rental Collision Damage Waiver at €25–40/
 * day — among Europe's highest, driven by Irish insurance regulation
 * not rental-company opportunism; M50 Dublin orbital barrier-free
 * toll requires payment via eFlow.ie by 8pm next day or escalates;
 * km/h (since 2005) vs Northern Ireland mph cross-border switch;
 * Northern Ireland border is seamless (no checkpoint), with currency
 * switching from EUR to GBP at the line.
 *
 * MIDDLE-PIVOT COMPLIANCE: clean — Sanya's brief had no AA / RAC /
 * PayPoint mentions outside legal disclaimer. PayPoint replaces Post
 * Office per March 2024 change in disclaimer.
 *
 * PDF LANGUAGE COMPLIANCE (binding per CLAUDE.md):
 * Irish (Gaeilge) is NOT on the IDP Companion template. Verified PDF
 * set is EN, FR, ES, DE, IT, PT, VI, RU, AR, ZH, JA, TH = 12 languages.
 * Approved framing: reframe through English. Ireland is officially
 * bilingual (Irish + English) under the Constitution, but English is
 * the dominant working language at every tourist-facing interaction
 * — Dublin, Shannon, Cork airport rental chains (Hertz/Avis/Enterprise/
 * Dan Dooley), An Garda Síochána officers in tourist areas, the Road
 * Safety Authority and Transport Infrastructure Ireland tourist
 * portals. Irish appears on bilingual road signs and in cultural/
 * official contexts (Gaeltacht regions) but does not gate any tourist
 * driving interaction. Do NOT claim "Irish" anywhere as a PDF language.
 *
 * SEO add-ons present: tldr, howTo, lastReviewed.
 * NO phrases block — Ireland is English-to-English for UK visitors;
 * Irish-language cultural notes (sláinte, fáilte) live in renting tips
 * naturally if at all. NO lez block — Ireland has no ZTL equivalent;
 * M50 toll is structurally different and covered in fines + renting
 * tips. NO alphabet block.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Ireland: 2026 Common Travel Area Guide',
		description:
			"Driving the Wild Atlantic Way? UK photocard fully accepted in Ireland under the Common Travel Area (predates EU, survived Brexit). Same-side driving as home. Most UK motor insurance covers Ireland too. Honest 2026 guide for British drivers in Dublin, Shannon and Cork.",
		ogTitleShort: 'UK Drivers in Ireland: Common Travel Area',
		ogSubtitle: 'CTA recognition. Left-side driving. UK insurance often covers.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Ireland',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Ireland · 2026 Guide',
		title: 'IDP for UK Drivers in Ireland: The Common Travel Area Advantage',
		lead: "The Common Travel Area between the UK and Ireland predates the EU by 50+ years (established 1922, formally reaffirmed 2019 ahead of Brexit) and continues post-Brexit untouched — UK photocard licences are recognised in Ireland not because of EU rules but because of the CTA itself. Ireland is the only foreign destination where a UK driver gets full domestic-equivalent licence recognition. Most UK motor insurance policies extend to Ireland automatically (the only foreign-driving destination where this is the default), and Ireland drives on the left, same as the UK. The friction that does exist on an Irish trip is the rental Collision Damage Waiver at €25–40/day — among Europe's highest, driven by Irish insurance regulation rather than rental-company opportunism — plus the M50 Dublin orbital barrier-free toll that catches first-time UK tourists out with escalating penalties when they forget to pay via eFlow.ie by 8pm the day after travel. IDP Companion smooths peak-season Shannon and Dublin counter queues, but Ireland is the lightest-touch foreign-driving destination of any UK trip in this entire guide.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — UK photocards fully recognised in Ireland under the Common Travel Area',
		text: "Your UK photocard driving licence is fully accepted in Ireland under the Common Travel Area (CTA) framework. The CTA is a UK-Ireland free-movement and licence-recognition arrangement established in 1922, formally reaffirmed in May 2019 ahead of Brexit, and unaffected by EU membership changes. It guarantees UK photocard licence recognition in Ireland independent of any EU rule. UK gov.uk Ireland advice confirms no IDP is required. Ireland is also party to the 1949 Geneva Convention. Most UK motor insurance policies extend to Ireland by default — a positive contrast with most foreign destinations. Ireland is the lightest-friction UK foreign-driving destination in licensing terms; the bigger budget item is the rental Collision Damage Waiver.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Ireland',
		lead: "Ireland is the easiest licensing-paperwork destination for UK drivers anywhere — Common Travel Area recognition is fuller than EU recognition because it pre-dates the EU and pre-dates Brexit. Honest framing: of all UK foreign-driving destinations, Ireland is the smallest IDP Companion case. The €25–40/day Irish CDW and the unpaid-M50 toll are the budget items that matter, not paperwork; what IDP Companion adds is a peak-season counter shortcut at Shannon and Dublin July–August queues.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Ireland',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Fully accepted under the Common Travel Area for any length of tourist stay. The CTA predates the EU and is unaffected by Brexit. UK gov.uk Ireland advice confirms no IDP required. Accepted by all major Irish rental chains (Hertz, Avis, Enterprise, Europcar, Budget, Dan Dooley) at Dublin, Shannon, Cork and regional airports.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: "Multilingual digital PDF presenting your UK licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Ireland is officially bilingual (Irish + English) but English is the working language at every tourist-facing interaction — Dublin/Shannon/Cork airport rental chains, An Garda Síochána officers in tourist areas, RSA and TII tourist portals — so the English version is the working-language route. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Ireland: original UK photocard + UK passport (or other acceptable photo ID for CTA travel) + rental contract + proof of valid Irish-extended UK motor insurance (most UK policies include Ireland by default — verify). M50 Dublin orbital toll requires online payment via eFlow.ie by 8pm next day — this is the single most-common UK-tourist Ireland miss.",
	},

	whyNotEnough: {
		heading: "Why your UK photocard is the easiest paperwork of any foreign destination — and where the friction actually is in Ireland",
		lead: "For UK drivers in Ireland, the friction list is short and well-bounded: €25–40/day CDW driven by Irish insurance regulation (among Europe's highest), the M50 barrier-free Dublin orbital toll most rentals don't auto-pay (€3 → €100+ if unpaid via eFlow.ie by 8pm next day), and an occasional Shannon or Dublin peak-July counter agent asking for an IDP out of habit. CTA recognition handles the licence side without complication or time-window worry.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz Ireland, Avis Ireland, Enterprise Ireland, Dan Dooley (Irish-local), Europcar and Budget each set their own internal verification policy at branch level. Dublin Airport, Shannon and Cork process the largest concentration of UK tourist rentals — and desk agents during peak July–August Atlantic Way season sometimes default to asking for an IDP even though Irish law doesn't require it and the CTA explicitly recognises UK licences. The translation companion clears the question in writing in five extra minutes. Less common at Irish counters than at most other peak-EU destinations because the CTA recognition is well-understood by Irish rental staff.",
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The CDW insurance reason (this is the friction, not the licence)',
				text: "Irish rental Collision Damage Waiver is among the most expensive in Europe at €25–40 per day, driven by Irish insurance regulation. Irish accident rates on narrow rural roads (hedgerows, stone walls, single-track passing-place sections) plus regulatory requirements push CDW pricing high. Over a 10-day Wild Atlantic Way trip that's €250–400 of CDW on top of the rental base rate. **Positive note for UK drivers**: most UK motor insurance policies include Ireland (Republic) by default — different from most foreign-driving destinations. Verify with your insurer for your specific dates and policy version; default Irish coverage is one of the few positive UK-driver-abroad arrangements and may reduce CDW need.",
			},
			{
				icon: 'ph:road-horizon-bold',
				title: 'The M50 barrier-free toll reason',
				text: "Dublin's M50 orbital motorway is a barrier-free toll — drive across, the camera reads your plate, you must pay around €3 online via eFlow.ie by 8pm the day after travel or face escalating penalties (up to ~€100+). Most rental cars don't auto-pay the M50; the rental company will forward the unpaid-toll penalty to your UK card on file plus a typical €40 processing fee weeks after the trip. This is the single most-common UK-tourist Ireland miss — the M50 is unavoidable for many Dublin-airport-to-anywhere routes and looks identical to a normal motorway from the driver's seat.",
			},
		],
	},

	rules: {
		heading: 'Ireland driving rules UK drivers should know',
		lead: 'Left-side driving — same as the UK, no directional adjustment. The substantive operational rules are the km/h speeds (Ireland is metric since 2005, Northern Ireland still uses mph — same trip can cross both unit systems at the seamless border), the stricter alcohol limit (0.05% vs UK 0.08%), and the M50 barrier-free toll payment rhythm.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Same as the UK — no directional adjustment' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h (NOT mph)', note: 'Some 30 km/h school zones during posted hours; Ireland metric since 2005 unlike UK' },
			{ icon: 'mdi:road-variant', label: 'Regional (R-) road', value: '80 km/h', note: 'Narrow, hedgerows / stone walls; many single-lane passing-place sections' },
			{ icon: 'mdi:speedometer-medium', label: 'National (N-) road / Motorway (M-)', value: '100 / 120 km/h', note: 'Average-speed cameras on some motorway sections; M50 Dublin orbital is barrier-free toll' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (general)', value: '0.05% BAC', note: 'Stricter than UK 0.08%; random breath testing routine' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (novice / professional)', value: '0.02% BAC', note: 'First-2-years and professional drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: '€120 + 3 penalty points (points don\'t transfer to UK licences but fine does)' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'NOT permitted', note: 'Same as UK — all red lights are full stops in all directions' },
		],
	},

	fines: {
		heading: '2026 fixed-charge notices for common violations in Ireland',
		lead: 'Two things about Irish fines worth noting upfront. First: penalty points are issued under the Irish system but don\'t transfer to UK licences — the EUR fine attached to each notice does, forwarded by the rental company to your UK card plus a typical €40 admin fee 4–8 weeks after the trip. Second: the single most-common UK-tourist fine isn\'t speeding, it\'s the unpaid M50 toll (€3 → €100+ if missed via eFlow.ie by 8pm next day).',
		colViolation: 'Violation',
		colAmount: 'Fine (EUR)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding less than 10 km/h over', amount: '€80 + 3 penalty points', note: 'Camera-enforced on motorways and key urban arteries', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 10–20 km/h over', amount: '€80–160 + penalty points', note: 'Mobile speed-camera vans operate', severity: 'med' },
			{ icon: 'ph:siren-bold', label: 'Speeding above 30 km/h over', amount: 'Court appearance', note: 'Possible disqualification equivalent', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€60 + 3 penalty points', note: '', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€120 + 3 penalty points', note: 'Aggressively enforced', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€60 + 3 penalty points', note: 'Per occupant', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 50–100 mg/100 ml (first offence)', amount: '€200 + 3-month ban equivalent', note: 'Random breath testing routine, especially weekends; Ireland 0.05% stricter than UK 0.08%', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI above 100 mg/100 ml', amount: 'Court appearance + extended ban; possible imprisonment', note: 'Criminal record applies internationally', severity: 'high' },
			{ icon: 'ph:road-horizon-bold', label: 'Unpaid M50 toll (eFlow.ie)', amount: 'Escalating penalty (€3 toll → ~€100+ if unpaid)', note: "Dublin's M50 is barrier-free; toll must be paid online via eFlow.ie by 8pm the day after travel. Single most-common UK-tourist Ireland miss", severity: 'med' },
		],
		caption: 'Sources: Road Safety Authority RSA (rsa.ie); An Garda Síochána (garda.ie); Transport Infrastructure Ireland TII (tii.ie); eFlow M50 portal (eflow.ie); UK gov.uk Ireland travel advice.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Ireland — honestly',
		lead: "Honest scope for UK drivers in Ireland: of any foreign-driving destination UK travellers visit, Ireland is the genuinely smallest IDP Companion case — CTA recognition is fuller than EU recognition, no IDP needed, no time-window worry. The value IDP Companion adds is the peak July–August Shannon and Dublin counter-queue shortcut where staff working high summer volume default to asking for translation. The bigger Irish trip decisions live elsewhere — verify your M50 eFlow toll payment habit, your Irish CDW budget, and your UK motor insurance Ireland extension (most UK policies include Ireland by default, verify yours).",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Ireland, English on the document is the working-language route — Ireland is officially bilingual (Irish + English) but English is universal at every tourist-facing interaction at Dublin / Shannon / Cork airport rental chains and An Garda Síochána tourist-area stops',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by Irish law for UK photocard holders — Ireland recognises UK licences under the Common Travel Area, fully and without time limit, unaffected by Brexit',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not an M50 eFlow toll account, not Irish rental CDW, and not your UK motor insurance extension to Ireland (which most UK policies include by default — verify)',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Ireland',
			items: [
				'At Shannon, Dublin and Cork airport rental counters during peak July–August Atlantic Way season when desk agents default to asking for translation',
				'At An Garda Síochána checkpoints (uncommon for UK drivers but possible on rural Western routes) where standardised English-language paperwork speeds the document review',
				'For insurance and accident-report paperwork after a covered incident',
				'As a re-printable backup from any hotel if your physical photocard is lost during a multi-stop Atlantic Way or Wild Atlantic Way trip',
				"For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Ireland plus Spain, Italy, Greece, Portugal, France, Iceland and other European destinations on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Irish law actually cares about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive (CTA-recognised fully)',
				'UK passport or other acceptable photo ID for CTA travel — required at airport entry to Ireland for non-CTA passport holders',
				'Rental agreement and proof of valid Irish-extended UK motor insurance (most UK policies include Ireland by default — verify in writing for your dates and policy version)',
				'Active M50 eFlow account or willingness to pay the M50 toll online via eFlow.ie by 8pm the day after travel',
				'Small EUR cash for parking attendants, rural pubs, occasional roadside purchases — most Irish transactions are contactless card',
			],
		},
		pattern:
			"What prepared UK travellers in Ireland actually carry: photocard + passport + rental contract + Irish-extended UK insurance certificate + IDP Companion + a reminder to pay the M50 toll. The bigger preparation is the CDW comparison (UK-domiciled rental brokers like Holiday Autos or Auto Europe sometimes have better Ireland packages than direct chain rates) and the Northern Ireland border crossing planning if your route includes both jurisdictions (seamless border, km/h to mph signage switch, EUR to GBP currency switch).",
	},

	renting: {
		heading: 'Renting a car in Ireland as a UK driver',
		lead: "Hertz, Avis, Enterprise, Europcar, Budget and Irish-local Dan Dooley all accept UK photocards under CTA recognition without complication — the documentation conversation at the counter is brief. The longer conversation is CDW: €25–40/day driven by Irish insurance regulation, not rental-company opportunism. Compare UK-domiciled brokers (Holiday Autos, Auto Europe) against direct chain rates before booking.",
		chains: [
			{ name: 'Hertz Ireland', policy: 'Major presence at Dublin, Shannon and Cork airports plus city locations. Accepts UK photocard licences fully under CTA. International-chain CDW pricing typical.' },
			{ name: 'Avis Ireland (incl. Budget)', policy: 'Wide network including regional locations and ferry ports. UK licences accepted; operates Budget under same group.' },
			{ name: 'Enterprise Ireland', policy: 'Strong network including downtown Dublin and regional cities. UK licences accepted.' },
			{ name: 'Dan Dooley (Irish local)', policy: 'Irish-owned, often more flexible on terms than international chains. Strong Shannon and Dublin presence; competitive on multi-day rentals.' },
			{ name: 'Europcar Ireland', policy: 'Wide network including ferry ports and regional cities. UK licences accepted.' },
		],
		tipsHeading: 'Practical tips for renting and driving in Ireland',
		tips: [
			"Check your UK motor insurance for Ireland (Republic) cover — most UK policies include Ireland by default. Verify with your insurer for your specific dates and policy version. This is a positive contrast with most foreign destinations and may reduce your need for additional CDW",
			'Collision Damage Waiver in Ireland is among Europe\'s highest at €25–40 per day. The Irish insurance regulation framework drives this — it\'s not rental-company markup. Compare UK-domiciled rental brokers (Holiday Autos, Auto Europe) against direct chain rates — sometimes a meaningful difference',
			'M50 motorway toll is barrier-free — Dublin\'s orbital motorway charges the toll automatically by number plate. Pay by 8pm the day after travel via eFlow.ie or accept escalating penalties. Most rental cars don\'t auto-pay this; it\'s the single most-common UK-tourist Ireland mistake',
			'Other tolls (M3, M4, M7, M8) operate manned booths and electronic tags — cash and card accepted',
			"Switch to driving in km/h — Ireland is metric since 2005, UK is still mph. Speed-limit signage uses different units; pay attention at airport pickup and during the first 30 minutes on Irish roads",
			'Rural R-roads are narrow. Hedgerows, stone walls, single-track passing-place sections. Get the smallest practical car — a Fiat 500 or Volkswagen Polo is more useful than a mid-size SUV on Connemara or Wild Atlantic Way roads',
			'Petrol vs diesel — diesel common in Irish rentals; often cheaper per kilometre on long routes',
			'Cross-border to Northern Ireland — seamless border, no checkpoint, no passport check. Speed-limit signs switch from km/h (Republic) to mph (NI). Currency switches from EUR to GBP. Insurance terms may differ — verify with the rental company before crossing',
			'Same left-side driving as the UK — genuinely no adjustment',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'Of all UK foreign-driving destinations, Ireland produces the lightest outcome distribution: most trips end with the unremarkable CTA-recognised pickup-and-drive. The one outcome to plan around isn\'t paperwork or police — it\'s the unpaid M50 toll bill that arrives 4–8 weeks later because most rentals don\'t auto-pay it. Six scenarios below in order of frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'Overwhelmingly most common',
				label: 'Photocard accepted, you drive away in 15 minutes',
				text: 'CTA recognition default. No IDP needed; no additional paperwork beyond the standard rental forms. Most Ireland trips end this way — the lightest-friction destination of any foreign UK drive.',
			},
			{
				severity: 'low',
				frequency: 'Rare for UK drivers in Ireland',
				label: 'Desk agent asks for IDP, you produce IDP Companion',
				text: 'Five extra minutes at the Shannon or Dublin counter during peak July–August season, no further issue. Less common at Irish counters than at most other EU destinations because the CTA recognition is well-understood by Irish rental staff.',
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Speeding fixed-charge notice on motorway',
				text: 'A camera on M1, M7 or M50 catches you above the threshold. €80+ fixed-charge notice plus rental admin fee charged to your UK card 4–8 weeks after the trip. Penalty points don\'t transfer to UK licence but the EUR fine does.',
			},
			{
				severity: 'med',
				frequency: 'Very common UK-tourist mistake',
				label: 'Unpaid M50 toll, escalating penalty',
				text: 'M50 Dublin orbital is barrier-free — you drove across without paying via eFlow.ie by 8pm the next day. €3 toll → €100+ penalty plus rental admin fee 4–8 weeks after the trip. The single most-common UK-tourist Ireland miss.',
			},
			{
				severity: 'low',
				frequency: 'Uncommon',
				label: 'Garda checkpoint, UK photocard accepted, brief check',
				text: "Standard tourist-area document review on a rural Western route. UK photocard accepted under CTA, IDP Companion's English version shortens the conversation. Standard process, no further action.",
			},
			{
				severity: 'low',
				frequency: 'Possible on cross-border itineraries',
				label: 'Cross-border to Northern Ireland, speed-unit switch confusion',
				text: 'Drove from Republic into Northern Ireland — seamless border, no checkpoint, but km/h to mph signage switch and EUR to GBP currency switch. Brief mental adjustment; rare cause of actual speeding ticket because the speed numbers go down (60 mph = 96 km/h, so 60 mph in NI is similar to 100 km/h in Republic).',
			},
		],
		math: "$35 IDP Companion vs the difference between a €150/day same-day rebook at Dublin Airport in August and a €80/day advance rate. CDW pricing (€25–40/day × trip days) is the bigger budget line for Ireland trips. UK motor insurance extension to Ireland is the positive offsetting factor — verify your policy covers and consider whether CDW buy-down is still needed.",
	},

	howTo: {
		heading: 'How to prepare for driving in Ireland (UK citizens)',
		lead: "Ireland is the easiest foreign-driving destination for UK travellers to prepare for — CTA recognition handles the licensing layer, most UK insurance extends to Ireland automatically, same-side driving means no relearning. The pre-trip work is mostly about CDW comparison and M50 toll payment habit.",
		schemaName: 'How to prepare for driving in Ireland as a UK citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: "The plastic photocard alone is sufficient post-2015 — no paper counterpart needed. CTA recognition applies for any length of tourist visit.",
			},
			{
				title: 'Verify your UK motor insurance covers Ireland (Republic)',
				text: "Most UK motor insurance policies include Ireland by default — this is the positive UK-Ireland exception compared to most foreign destinations. Verify with your insurer for your specific dates and policy version. If covered, you may reduce or skip rental CDW buy-down (verify rental contract permits this).",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: "$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. English on the document is the working-language route at every Irish rental counter and Garda interaction. Ireland is the smallest case for IDP Companion of any destination — useful at peak-season Shannon and Dublin counters where agents default to asking for translation.",
			},
			{
				title: 'Plan for the M50 toll if entering Dublin orbital',
				text: "Dublin's M50 is barrier-free — drive across, the camera reads your plate, you must pay around €3 online via eFlow.ie by 8pm the day after travel. Most rental cars don't auto-pay. Set a calendar reminder for the day after your M50 crossing and pay via eflow.ie — single most-common UK-tourist Ireland miss avoided.",
			},
			{
				title: 'Carry physical documents in one folder + plan for km/h speeds',
				text: 'Physical UK photocard + UK passport + rental contract + UK motor insurance certificate (with Irish extension verified) + IDP Companion — all in one folder. Hand the folder over at any Garda checkpoint. Ireland is metric since 2005 — pay attention to km/h signage during the first 30 minutes after pickup.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Ireland as a UK tourist post-Brexit?',
				answer: 'No. UK photocard licences are recognised in Ireland under the Common Travel Area — a UK-Ireland framework established in 1922, formally reaffirmed in May 2019 ahead of Brexit, and unaffected by EU membership changes. UK gov.uk Ireland advice confirms no IDP is required.',
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: "Very rarely in Ireland specifically — the CTA recognition is well-understood at Irish rental counters. Some peak-season Shannon or Dublin branches may still ask out of internal habit. The translation companion clears the question in writing in five extra minutes.",
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a private multilingual translation companion document presenting your photocard details in twelve widely-read languages from the 1949 Geneva Convention set. It works alongside your UK photocard, not in place of a government IDP where one is legally required (Ireland does not require one — CTA recognises UK photocards fully).',
			},
			{
				id: 4,
				question: 'What is the Common Travel Area?',
				answer: "A UK-Ireland free-movement and licence-recognition arrangement established in 1922 (with origins in earlier passport-free travel between the two), formally reaffirmed in May 2019 ahead of Brexit. It guarantees UK citizens in Ireland and Irish citizens in the UK essentially the same rights as domestic residents in many respects, including driving-licence recognition. It predates the EU by over 50 years and is not dependent on EU membership.",
			},
			{
				id: 5,
				question: 'Will my UK motor insurance cover me in Ireland?',
				answer: 'Usually yes — most UK motor insurance policies include Ireland (Republic) by default. This is different from most foreign-driving destinations where UK motor insurance does not extend. Verify with your insurer for your specific dates and policy version. Renting a car in Ireland still typically requires Irish rental CDW for damage to the rental vehicle itself.',
			},
			{
				id: 6,
				question: 'What side of the road do they drive on?',
				answer: 'Left — same as the UK. No side-of-the-road adjustment needed.',
			},
			{
				id: 7,
				question: "What's the M50 toll situation?",
				answer: "Dublin's M50 motorway is barrier-free; the toll (around €3) is charged automatically by number plate. You must pay online via eFlow.ie by 8pm the day after travel — otherwise the penalty escalates to ~€100+ plus rental admin fee forwarded to your UK card. Most rental cars don't auto-pay. This is the single most-common UK-tourist Ireland mistake — set a calendar reminder.",
			},
			{
				id: 8,
				question: 'Can I cross into Northern Ireland with my Irish rental?',
				answer: 'Usually yes (subject to rental contract terms) — the border crossing is seamless with no checkpoint. The currency switches from EUR to GBP, speed-limit signs switch from km/h to mph, and insurance terms may differ. UK photocard licence remains valid in both jurisdictions.',
			},
			{
				id: 9,
				question: 'Why is Irish rental CDW so expensive?',
				answer: 'Irish insurance regulation requires renters to have valid Irish-domiciled insurance, and Ireland has historically high accident rates on narrow rural roads. CDW from the desk typically runs €25–40 per day. This is a regulatory phenomenon, not rental-company opportunism. UK-domiciled rental brokers (Holiday Autos, Auto Europe) sometimes have better Ireland packages — worth comparing.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Ireland trips?',
				answer: 'Choose 1 year ($35), 3 years ($45) or 5 years ($55). Validity is tied to your physical UK photocard — if your photocard expires, IDP Companion expires with it. One purchase covers Ireland plus Spain, Italy, Greece, Portugal, France, Iceland and other European destinations on the same plan.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other UK foreign-driving pairs worth reviewing — Ireland sits at the lightest-friction end of the distribution; these range from similar (Cyprus, Malta) to substantially different (Australia).',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'fr', label: 'UK → France', status: 'Live', href: '/idp-for-uk-drivers-in-france' },
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain' },
			{ flagFrom: 'gb', flagTo: 'cy', label: 'UK → Cyprus', status: 'Live', href: '/idp-for-uk-drivers-in-cyprus' },
			{ flagFrom: 'gb', flagTo: 'au', label: 'UK → Australia', status: 'Live', href: '/idp-for-uk-drivers-in-australia' },
			{ flagFrom: 'us', flagTo: 'ie', label: 'US → Ireland', status: 'Live', href: '/idp-for-us-drivers-in-ireland' },
			{ flagFrom: 'gb', flagTo: 'mt', label: 'UK → Malta', status: 'Live', href: '/idp-for-uk-drivers-in-malta' },
		],
	},

	finalCta: {
		heading: 'Driving the Wild Atlantic Way, Ring of Kerry or Connemara?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Ireland is officially bilingual but English is universal at every tourist-facing interaction; the English version is the working-language route. Valid 1–5 years and covers Ireland plus Spain, Italy, Greece, Portugal, France, Iceland on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. Ireland is the lightest-touch foreign-driving destination a UK driver gets anywhere — the bigger budget items are CDW (compare UK-domiciled rental brokers) and remembering to pay the M50 toll via eFlow.ie by 8pm the day after travel.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Road Safety Authority of Ireland (RSA), An Garda Síochána, Transport Infrastructure Ireland (TII), eFlow or any other Irish government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion must be used alongside your original UK photocard driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Common Travel Area Memorandum of Understanding 2019 (gov.uk)',
			'UK Foreign, Commonwealth & Development Office — Driving in Ireland (gov.uk/foreign-travel-advice/ireland)',
			'Road Safety Authority of Ireland — Foreign driving licences (rsa.ie)',
			'An Garda Síochána — Fixed-charge notices (garda.ie)',
			'Transport Infrastructure Ireland — M50 eFlow and motorway tolls (tii.ie)',
			'eFlow — M50 toll payment portal (eflow.ie)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Ireland',
	},
};

export const ukIrelandCopy: Record<'en', CountryPairCopy> = { en };
