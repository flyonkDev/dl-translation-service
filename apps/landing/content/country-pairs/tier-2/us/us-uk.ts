/**
 * Country-pair content: United States → United Kingdom.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: The DVLA allows US visitors to drive in Great Britain
 * on a valid US licence for 12 months from date of entry. Northern
 * Ireland follows the same rule under DVA NI. End of legal story. The
 * page's distinctive content is the cluster of automated enforcement
 * costs that catch US first-timers: central London Congestion Charge
 * £15/day, ULEZ £12.50/day for non-compliant vehicles (both enforced
 * by ANPR, billed via rental company), £200 + 6 penalty points for
 * handheld phone use (2022 rule change made even glancing at a mounted
 * phone an offence), Scotland's 0.05% BAC vs England/Wales/NI 0.08%
 * (same trip, different law across the border), and the day-one LEFT-
 * SIDE driving adjustment for Americans.
 *
 * Distinctive content: Dartford Crossing barrier-free toll (must pay
 * via Dart Charge by midnight next day); Clean Air Zones in Birmingham
 * / Bristol / Bradford / Bath; Greater London ULEZ expansion; Mersey
 * Gateway and Tyne Tunnel as similar barrier-free tolls; mph (not
 * km/h) keeps speed signage familiar for US drivers; roundabout
 * give-way to right (opposite of US 4-way-stop habit); rural lane
 * width significantly narrower than US norm.
 *
 * MIDDLE-PIVOT COMPLIANCE: clean — Sanya's brief mentioned AAA and
 * AATA only in the legal disclaimer (correct location for US-origin
 * pages — these are the authorized US Geneva 1949 IDP issuers, named
 * once for legal disclosure).
 *
 * PDF LANGUAGE COMPLIANCE: All 12 verified languages enumerated in
 * TLDR row. English is the working-language route for US visitors in
 * UK — both speak English natively. No reframing needed.
 *
 * SEO add-ons present: tldr, howTo, lastReviewed.
 * NO phrases block — US → UK is English-to-English, no translation
 * phrases needed; UK-specific vocabulary (roundabout / petrol /
 * motorway / boot vs trunk) lives in renting tips naturally.
 * NO lez block — Congestion Charge + ULEZ + CAZ structurally similar
 * to but distinct from EU ZTL/ZBE; covered in fines + renting tips.
 * NO alphabet (Latin).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in the UK: 2026 ULEZ & ANPR Guide',
		description:
			"Renting at Heathrow or Edinburgh? Your US license is valid in the UK for 12 months — but the DVLA isn't the budget question. ULEZ and Congestion Charge bill £15+£12.50/day to your card via the rental, and handheld phone use is now £200 + 6 points. Honest 2026 guide.",
		ogTitleShort: 'US Drivers in UK: ULEZ & ANPR',
		ogSubtitle: 'DVLA gives 12 months. ANPR cameras quietly bill your card for weeks.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → United Kingdom',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → United Kingdom · 2026 Guide',
		title: 'Driving the UK on a US License: What ANPR Cameras Quietly Bill You For',
		lead: "The DVLA gives a US visitor 12 months on a valid home licence — that's the end of the legal story for tourist driving. What the legal story doesn't include is everything UK automated enforcement quietly charges to the rental card on file in the weeks after you fly home. Handheld phone use behind the wheel in England carries a £200 fixed penalty plus 6 penalty points; the 2022 rule change made even glancing at a mounted phone screen an offence. Central London Congestion Charge bills £15 per day, ULEZ another £12.50 per day for non-compliant vehicles, both enforced by automated number-plate recognition that bills the rental company first and forwards to your US card plus a typical £40 processing fee. Speed cameras — fixed, average-speed across motorway sections, mobile vans, red-light, bus-lane — operate at among the densest levels in Europe. Cross from England into Scotland and the alcohol limit drops from 0.08% to 0.05% on the same trip. And the steering wheel is on the right side of the car: left-side driving is the day-one adjustment most US visitors underestimate.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — DVLA gives US visitors 12 months on a valid US license',
		text: "The DVLA (Driver and Vehicle Licensing Agency) allows visitors to drive in Great Britain on a valid full overseas driver's licence for up to 12 months from their date of entry. US licences are issued in English and are accepted by the DVLA. Northern Ireland follows the same rule under DVA Northern Ireland. Residents must apply for a UK licence after the 12-month window — tourists almost never reach that threshold. The bigger budget items for a UK trip are ULEZ + Congestion Charge in London, Clean Air Zones in regional cities, the Dartford Crossing barrier-free toll, and the day-one left-side driving adjustment.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in the United Kingdom',
		lead: "For US visitors in the UK, the licensing question takes 12 months on a valid US licence — the DVLA's visitor rule settles it directly. IDP Companion is a multilingual translation companion useful where peak-season Heathrow or Edinburgh rental volume favours a second standardised document over a state-specific US license format, not a legal substitute.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in the UK',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Legally accepted by the DVLA for visitor driving for the first 12 months of stay. Issued in English, so no translation is required by law. Accepted by all major UK rental chains (Hertz, Avis, Enterprise, Europcar, Sixt, Budget) at Heathrow, Gatwick, Edinburgh, Manchester and regional airports.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: "Multilingual digital PDF presenting your US license data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. English is the working-language route at every UK rental desk and traffic-police interaction (both US visitor and UK officer speak English natively); the standardised layout is faster to verify than a state-specific US license format at peak-volume queues. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in the UK: original physical US driver's license + US passport + rental contract + proof of valid UK motor insurance (CDW from rental — US auto cover does not extend to UK). Small GBP cash for incidentals; most UK transactions are card / contactless. ULEZ + Congestion Charge are separate ANPR-billed charges, not items you carry.",
	},

	whyNotEnough: {
		heading: 'Why your US license creates rental-desk friction and ANPR-billing surprises in the UK',
		lead: "Three things your US license doesn't address: Heathrow rental desks defaulting to standardised paperwork at peak summer, the densely automated UK enforcement network that bills the rental card weeks after the trip, and the left-side driving adjustment most US visitors underestimate. The DVLA's 12-month visitor rule covers the licensing layer cleanly — friction starts above it.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Enterprise, Europcar, Sixt and Budget each set their own internal verification policy at UK branches. Heathrow alone processes the largest concentration of international tourist rentals in Europe, and desk agents work through high-volume pickup queues by defaulting to standardised paperwork. Several branches list an IDP as a recommended document for non-resident renters even when the DVLA doesn't require one. The translation companion clears the question in writing in five extra minutes. The DVLA answer (yes, drive for 12 months) and the desk answer (where's your IDP) come from two different authorities — the DVLA is the legal floor, the rental desk is internal policy.",
			},
			{
				icon: 'ph:camera-bold',
				title: 'The automated-enforcement billing reason',
				text: "The UK has among the densest automated enforcement networks in Europe. ANPR (automated number-plate recognition) cameras bill central London Congestion Charge £15/day and ULEZ £12.50/day for non-compliant vehicles, both forwarded via the rental company to your US card plus a typical £40 processing fee. Speed cameras include fixed, average-speed on motorway sections, mobile vans, red-light cameras and bus-lane cameras. Dartford Crossing on the M25 over the Thames is a barrier-free toll — drive across, pay £2.50 each way via Dart Charge online by midnight the next day or face escalating penalties. The rental company forwards every infringement notice to your US card with the standard admin fee, often arriving 4–8 weeks after you've flown home.",
			},
			{
				icon: 'ph:steering-wheel-bold',
				title: 'The left-side driving reason',
				text: "The single biggest day-one adjustment for US visitors. The steering wheel is on the right side of the car; you drive on the left side of the road; roundabouts give way to vehicles approaching from your right (opposite of the US 4-way-stop reflex). Rural lanes are significantly narrower than US norm — most UK rentals are smaller than US-spec for this reason. Manual transmission remains common at lower price tiers; book automatic explicitly if needed.",
			},
		],
	},

	rules: {
		heading: 'UK driving rules US drivers should know',
		lead: 'Left-side driving is the day-one adjustment from US right-side habit. The substantive operational rules are mph speeds (familiar for US drivers — Ireland uses km/h if your trip crosses the border), Scotland\'s tighter alcohol limit, the 2022 phone-use rule change, and no-turn-on-red as universal across the UK.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Steering wheel on the right side of the car; the single biggest US-driver adjustment' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '30 mph (some 20 mph zones)', note: '"Built-up area" signalled by street lighting; speeds in mph not km/h (same as US)' },
			{ icon: 'mdi:road-variant', label: 'Rural single carriageway', value: '60 mph', note: 'Rural lanes often significantly narrower than US norm' },
			{ icon: 'mdi:speedometer-medium', label: 'Dual carriageway / motorway', value: '70 mph', note: 'Average-speed cameras enforce across motorway sections' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (England, Wales, NI)', value: '0.08% BAC', note: 'Same as US federal limit; police breath-test stops routine' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (Scotland)', value: '0.05% BAC', note: 'Stricter than England/Wales/NI — same trip, different law across the border' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned, 2022 rule', note: '£200 + 6 penalty points; even glancing at mounted phone now an offence' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'NOT permitted', note: 'All red lights are full stops in all directions — different from US right-on-red rules' },
		],
	},

	fines: {
		heading: '2026 fines and ANPR-billed charges for US drivers in the UK',
		lead: 'What stings most US visitors isn\'t the on-the-spot ticket — it\'s the ANPR-billed charge that arrives weeks later. Congestion Charge, ULEZ, Clean Air Zone and Dartford Crossing are all camera-enforced and forwarded by the rental company to your US card with a typical £40 admin fee 4–8 weeks after the trip. Speeding and red-light penalties are set nationally by GOV.UK; zone-specific charges follow their own local schedules.',
		colViolation: 'Violation',
		colAmount: 'Fine / charge (GBP)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (low-tier, fixed penalty)', amount: '£100 + 3 penalty points', note: 'Camera-enforced; average-speed cameras on many motorway sections', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (mid-tier, court)', amount: 'Up to £1,000 regular road / £2,500 motorway', note: 'Heavier speeds escalate quickly to court', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '£100 + 3 penalty points', note: 'Camera-enforced in all major cities', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '£200 + 6 penalty points', note: '2022 rule change made even checking the phone an offence', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '£100', note: 'Driver liable for unbelted passengers', severity: 'med' },
			{ icon: 'mdi:gavel', label: 'DUI (above 0.08% / 0.05% in Scotland)', amount: 'Minimum 12-month ban + unlimited fine + up to 6 months imprisonment', note: "Scotland's 0.05% threshold is lower than England/Wales/NI", severity: 'high' },
			{ icon: 'ph:bus-bold', label: 'Bus lane / box junction violation', amount: '£130+ (London)', note: 'Camera-enforced; PCN (Penalty Charge Notice) issued to rental company', severity: 'med' },
			{ icon: 'ph:car-bold', label: 'London Congestion Charge (unpaid)', amount: '£15/day → £180 penalty if unpaid by deadline', note: 'Central London zone, enforced by ANPR; rental company forwards', severity: 'high' },
			{ icon: 'ph:wind-bold', label: 'London ULEZ (non-compliant vehicle)', amount: '£12.50/day → £180 penalty if unpaid', note: 'Greater London zone, enforced by ANPR; most modern rentals are compliant — verify at pickup', severity: 'high' },
			{ icon: 'ph:factory-bold', label: 'Clean Air Zone (Birmingham, Bristol, Bradford, Bath)', amount: '£8–9/day private cars in some zones', note: 'Check zone status before driving into city centres', severity: 'med' },
			{ icon: 'ph:bridge-bold', label: 'Dartford Crossing toll (unpaid)', amount: '£2.50 each way → escalating penalty', note: 'M25 crossing of the Thames; pay online by midnight the next day via Dart Charge', severity: 'med' },
		],
		caption: 'Sources: GOV.UK fixed-penalty schedules; Transport for London (TfL); Police Scotland; PSNI; Dart Charge portal. Verify current figures before travel.',
	},

	honesty: {
		heading: 'How IDP Companion fits in the United Kingdom — honestly',
		lead: "What IDP Companion will not solve: a non-compliant ULEZ rental, a missing Congestion Charge payment, the surprise Scotland 0.05% BAC at a Highlands pub. What it does solve: the state-specific US license format that slows verification at peak-volume Heathrow and Gatwick queues. The DVLA already settled the legal question — IDP Companion handles the operational one.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your US license data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In the UK, English on the document is the working-language route — both US visitor and UK officer/agent speak English natively; the standardised layout is faster to verify than a state-specific US license format at peak-volume Heathrow / Gatwick / Edinburgh queues',
				'Generated in minutes after you upload your license and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by the DVLA for visitor driving on a US license in the 12-month window',
				'Not valid by itself — must be carried alongside your physical US license',
				'Not a Congestion Charge or ULEZ exemption — those are separate ANPR-billed charges',
				'Not UK motor insurance — that is purchased separately at the rental counter (CDW); US auto cover does not extend to the UK',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in the UK',
			items: [
				'At Heathrow, Gatwick, Edinburgh, Manchester and regional rental counters during peak summer (June–August) and Christmas-New Year season queues',
				'At police stops, especially in Scotland where BAC enforcement is tighter (0.05% vs 0.08%) and on rural routes',
				'For insurance and accident-report paperwork where a standardised multilingual translation simplifies the cross-border claim',
				'As a re-printable backup from any hotel if your physical license is lost or temporarily separated from you on a multi-region UK trip',
				"For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers UK plus Ireland, Australia, New Zealand and other English-license-accepting destinations on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents UK law actually cares about',
			items: [
				'Your physical US driver\'s license — the actual permission to drive (DVLA-recognised for the 12-month visitor window)',
				'US passport — required at every document check; officers may ask to verify identity at police stops',
				'Rental agreement and proof of valid UK motor insurance (CDW from the rental — US auto cover does not extend) — provided at pickup',
				'For specific vehicles: any relevant motorcycle, large-vehicle or commercial endorsement on the US license',
				'Small GBP cash or contactless card for parking, incidentals; most UK transactions are card / contactless',
			],
		},
		pattern:
			"What prepared US travellers in the UK actually carry: physical US license + US passport + rental contract + UK CDW insurance certificate + IDP Companion. The bigger preparation is the ULEZ compliance check at pickup, the Congestion Charge zone strategy (most US visitors find parking outside central London and using the Tube easier than driving in), the Dartford Crossing payment via Dart Charge if your route crosses the M25 Thames bridge, and the left-side driving practice run in a quiet area before joining motorway traffic.",
	},

	renting: {
		heading: 'Renting a car in the United Kingdom as a US driver',
		lead: "Hertz, Avis, Enterprise, Sixt, Europcar and Budget dominate UK airports; documentation policy varies more by branch manager than by chain. The single contract clause US visitors most overlook is the ANPR-billed-charges section that authorises the rental company to forward Congestion Charge, ULEZ and Dartford Crossing penalties to your US card 4–8 weeks after returning home.",
		chains: [
			{ name: 'Hertz UK', policy: 'Major presence at all London airports, Edinburgh, Manchester, Birmingham plus most cities. Accepts US driver licenses for the 12-month visitor window. Internal policy at Heathrow and Gatwick may recommend an IDP during peak summer.' },
			{ name: 'Avis UK (incl. Budget)', policy: 'Wide network including regional locations. US licenses accepted; some branches request an IDP at pickup. Operates Budget under the same group.' },
			{ name: 'Enterprise UK', policy: 'Strong presence at airports, train stations and city centres. US licenses accepted; documentation policy varies by branch manager.' },
			{ name: 'Sixt UK', policy: 'Premium fleet, strong at Heathrow, Gatwick, Manchester. Generally accepts US licenses; documentation requirements tighter for premium-class vehicles.' },
			{ name: 'Europcar UK', policy: 'Wide network including secondary cities and ferry ports. US licenses accepted.' },
		],
		tipsHeading: 'Practical tips for renting and driving in the UK',
		tips: [
			'Pick the smallest practical car. UK rural lanes are narrow; UK car park bays are smaller than US standard. A US-spec SUV is unwieldy on country lanes and a parking-bay headache in town',
			"Confirm ULEZ compliance at pickup if your rental will drive in Greater London. The car must meet the ULEZ emissions standard — most rentals from 2017+ are compliant. Ask in writing; non-compliant vehicles bill £12.50/day automatically",
			'Plan around the London Congestion Charge zone if entering central London. The zone is small and well-signed; many US visitors find parking outside and using the Tube easier and cheaper than driving in (£15/day Congestion Charge + parking + traffic stress)',
			'Petrol vs diesel — diesel is common in UK rentals; petrol stations everywhere. Watch for "AdBlue" diesel cars that may require a urea-fluid top-up on long trips',
			"Dartford Crossing (M25 over Thames east of London) — barrier-free toll, must be paid online by midnight the next day via Dart Charge. Most rentals don't auto-pay; failure to pay escalates to £35+ penalty",
			'Mersey Gateway and other regional bridges (Tyne Tunnel, etc.) — similar automatic camera tolls. Read your rental contract for which the rental auto-pays and which you must handle',
			"Scotland has a lower BAC limit (0.05% vs 0.08% in England/Wales/NI), narrower Highland roads and weather conditions that can shift quickly. Plan accordingly if your itinerary crosses the border",
			"Right-hand drive cars take getting used to. Practise in a quiet area or empty car park before joining motorway traffic. Roundabouts and turning across oncoming traffic are the highest-risk points for the US right-side reflex",
			"UK uses mph — same as the US — so speed signage is familiar. Ireland uses km/h; if your trip crosses into the Republic, signage and speed signs switch units",
			"UK-specific vocabulary to know: motorway = highway, dual carriageway = divided highway, petrol = gas, boot = trunk, bonnet = hood, roundabout = traffic circle, central reservation = median, tarmac = pavement, pavement = sidewalk, pedestrian crossing = crosswalk, lorry = truck",
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for US drivers',
		lead: 'Pickup → drive → return → and then the post-trip card-statement surprise that arrives weeks later. Six outcomes US drivers actually meet in the UK, ordered by frequency — the £180 unpaid-ULEZ penalty is the most-reported post-trip shock on US-traveller forums and is preventable with a pickup-time ULEZ-compliance check.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'US license accepted, smooth pickup, clean trip',
				text: 'DVLA visitor-12-month default. Pick up at Heathrow or Edinburgh, drive the Cotswolds, Lake District or Highlands, return the car. Most UK trips end this way — the legal layer is straightforward; the planning layer is where US visitors meet UK reality.',
			},
			{
				severity: 'low',
				frequency: 'Common at peak-season Heathrow',
				label: 'Desk agent asks for IDP, you produce IDP Companion',
				text: 'Five extra minutes of paperwork verification at the Heathrow or Gatwick counter during peak summer / Christmas season, no further issue. Common when internal branch policy lists IDP as recommended even when DVLA doesn\'t require it.',
			},
			{
				severity: 'med',
				frequency: 'Very common for first-time visitors',
				label: 'Unknowingly entered ULEZ or Congestion Charge zone',
				text: '£12.50 + £15 per day forwarded to US card via rental company plus £40 processing fee, often arriving 4–8 weeks after the trip when the card-on-file has already been used for several other things. The single most-surprising post-trip US-visitor charge.',
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Speed-camera ticket from a stretch you don\'t remember',
				text: '£100 + £40 processing fee forwarded to US card 4–8 weeks later. Average-speed cameras on motorway sections catch many US drivers who slow for the visible camera then speed up — the camera-pair averages your speed across the full enforcement zone.',
			},
			{
				severity: 'med',
				frequency: 'Common on long routes',
				label: 'Dartford Crossing crossed without paying via Dart Charge',
				text: '£2.50 each way → £35+ escalating penalty if not paid by midnight the next day. Barrier-free toll bypassed many US drivers expect; pay online via gov.uk/pay-dartford-crossing-charge.',
			},
			{
				severity: 'high',
				frequency: 'Rare but real',
				label: 'Police stop, breath test, Scotland 0.05% threshold caught',
				text: 'Immediate licence suspension equivalent for Scotland, court summons, rental contract termination. Scotland\'s lower BAC limit (0.05% vs 0.08%) catches US visitors used to the federal US limit who didn\'t realise the cross-border difference.',
			},
		],
		math: "$35 IDP Companion vs the difference between a £200/day same-day rebook at Heathrow and a £80/day advance rate. The math is on your side even if rental-desk friction happens 1 in 10 pickups. The bigger budget items are ULEZ + Congestion Charge if your route touches central London (£12.50 + £15 per day × days in zone + £40 admin fee per charge) and Dartford Crossing if your route crosses the M25 Thames bridge.",
	},

	howTo: {
		heading: 'How to prepare for driving in the UK (US citizens)',
		lead: "UK preparation has one US-driver-critical step (left-side driving practice run) and otherwise standard documentation prep. The ANPR-billed charges (ULEZ, Congestion Charge, Dartford Crossing) are the post-trip budget surprise most US visitors meet — plan for them up front.",
		schemaName: 'How to prepare for driving in the UK as a US citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US driver license is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired licenses are not accepted by the DVLA or UK rental companies. US permits valid in your state for 12 months from UK entry under the DVLA visitor rule.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your US license data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. UK runs in English at every interaction; the standardised layout is faster to verify than a state-specific US license format at peak-volume Heathrow queues. Print at home or from any UK hotel.',
			},
			{
				title: 'Check ULEZ compliance of your rental car before pickup',
				text: 'If you\'re driving in Greater London at any point, the car must meet the ULEZ emissions standard. Most rentals from 2017+ are compliant — ask the agent to confirm in writing at pickup. Non-compliant vehicles bill £12.50/day automatically via ANPR, plus the £40 rental admin fee.',
			},
			{
				title: 'Review the Congestion Charge zone map and plan the Scotland BAC if crossing the border',
				text: 'London Congestion Charge zone is small and well-signed; many US visitors park outside and use the Tube. If your route crosses the M25 Thames at Dartford, pay £2.50 each way via Dart Charge online by midnight the next day. If your trip crosses into Scotland, the BAC limit drops to 0.05% — plan around it.',
			},
			{
				title: 'Practise left-side driving in a quiet area + carry documents in one folder',
				text: 'Find an empty car park or quiet residential street for the first 15 minutes after pickup. Right-hand drive cars and left-side roads are the day-one US-driver adjustment. Physical US license + US passport + rental contract + UK CDW insurance + IDP Companion in one folder. Hand the folder over at any police stop.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in the UK as a US tourist?',
				answer: 'No. The DVLA allows visitors to drive in Great Britain on a valid full overseas license for up to 12 months from date of entry. US licenses are accepted. Northern Ireland follows the same rule under DVA NI.',
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes — rental companies set their own internal verification policy separate from the DVLA. Peak-season Heathrow and Gatwick branches sometimes have policies that ask for an IDP at pickup. The translation companion clears the question in writing in five extra minutes.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a private multilingual translation companion document presenting your license details in twelve widely-read languages from the 1949 Geneva Convention set. It is not issued under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your original US license.',
			},
			{
				id: 4,
				question: 'Is the alcohol limit really different in Scotland?',
				answer: 'Yes. Scotland operates a 0.05% BAC limit; England, Wales and Northern Ireland operate at 0.08% (same as US federal). If your trip crosses the border, the lower Scotland limit applies in Scotland. Plan accordingly.',
			},
			{
				id: 5,
				question: 'What is the London Congestion Charge and how do I pay?',
				answer: '£15 per day for driving in central London during charging hours. Enforced by automated number-plate recognition. Pay online via tfl.gov.uk by midnight the day after travel. Rental companies typically don\'t auto-pay; they forward unpaid penalties to your card with a processing fee.',
			},
			{
				id: 6,
				question: 'What is ULEZ?',
				answer: 'Ultra Low Emission Zone — £12.50 per day for non-compliant vehicles driving in Greater London. Most rentals from 2017+ are compliant. Confirm in writing at pickup; non-compliant vehicles auto-bill via ANPR plus £40 rental admin fee.',
			},
			{
				id: 7,
				question: 'What about speed cameras?',
				answer: "Aggressively used everywhere — fixed cameras, average-speed cameras on motorway stretches, mobile vans, red-light cameras and bus-lane cameras. Average-speed cameras catch many US drivers who slow for the visible camera then speed up — they average your speed across the full enforcement zone. Tickets follow the rental car to the named driver's card 4–8 weeks later.",
			},
			{
				id: 8,
				question: 'Can I drive in Northern Ireland on my US license?',
				answer: 'Yes. DVA Northern Ireland follows the same 12-month visitor rule as DVLA Great Britain. Speed limits are in mph (same as GB). BAC is 0.08% (same as England/Wales — not Scotland\'s 0.05%).',
			},
			{
				id: 9,
				question: 'Are there many toll roads?',
				answer: 'Few. Dartford Crossing (M25 over the Thames) is the main barrier-free toll; pay £2.50 each way via Dart Charge by midnight next day. M6 Toll near Birmingham is a private toll road and optional. Mersey Gateway, Tyne Tunnel and a handful of regional bridges are similar barrier-free or attended tolls. Most UK roads are toll-free.',
			},
			{
				id: 10,
				question: 'Can I cross into the Republic of Ireland with my UK rental?',
				answer: 'Usually yes (subject to contract terms), but signage switches to km/h, the RSA (Road Safety Authority) replaces the DVLA, and Irish insurance regulation may add cost. Confirm with the rental company before booking if cross-border driving is part of the plan.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US drivers and UK-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'us', flagTo: 'de', label: 'US → Germany', status: 'Live', href: '/idp-for-us-drivers-in-germany/' },
			{ flagFrom: 'us', flagTo: 'is', label: 'US → Iceland', status: 'Live', href: '/idp-for-us-drivers-in-iceland/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'ie', label: 'US → Ireland', status: 'Live', href: '/idp-for-us-drivers-in-ireland/' },
		],
	},

	finalCta: {
		heading: 'Renting at Heathrow, driving the Cotswolds or doing a UK + Scotland Highland loop?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real US license in two minutes. UK runs in English at every interaction; the standardised layout is faster to verify than a state-specific US license format at peak-volume Heathrow queues. Valid 1–5 years and covers UK plus Ireland, Australia, New Zealand on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. ULEZ + Congestion Charge are the bigger budget items if your route touches central London — verify ULEZ compliance at pickup.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Driver and Vehicle Licensing Agency (DVLA), the Driver and Vehicle Agency Northern Ireland (DVA NI), Transport for London (TfL), Police Scotland, PSNI or any other UK government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			'DVLA — Driving in Great Britain on a non-GB licence (gov.uk/driving-nongb-licence)',
			'Department for Transport — The Highway Code (gov.uk/highway-code)',
			'Transport for London — Congestion Charge and ULEZ (tfl.gov.uk)',
			'Police Scotland — Drink driving limits (scotland.police.uk)',
			'US Embassy in London — Driving advisory for US citizens (uk.usembassy.gov)',
			'Dart Charge — Dartford Crossing payment portal (gov.uk/pay-dartford-crossing-charge)',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'United Kingdom',
	},
};

export const usUkCopy: Record<'en', CountryPairCopy> = { en };
