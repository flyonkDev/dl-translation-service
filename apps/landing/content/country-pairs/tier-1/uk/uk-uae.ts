/**
 * Country-pair content: United Kingdom → UAE.
 * Locales: en only.
 *
 * Unique angle: federal vs emirate-level enforcement asymmetry. The UAE's
 * Markhoos initiative (2025 update covering 52 countries including UK)
 * formally recognises English-language UK licences without IDP at the
 * federal level — Dubai applies this consistently. Abu Dhabi has historically
 * required IDP regardless, with multiple rental agencies listing it as a
 * hard booking condition. Most UK itineraries cover both emirates (DXB
 * pickup, Grand Mosque/Yas Island/E11 driving, Sheikh Zayed Road) so the
 * documentation question carries weight even though Markhoos technically
 * resolves it.
 *
 * Plus: zero BAC tolerance (any detectable alcohol = criminal offence),
 * Dubai 20 km/h speed-camera buffer vs Abu Dhabi zero buffer (since 2018),
 * and AED 20,000 + jail for any DUI.
 *
 * PDF language compliance: claims Arabic/English/French/Spanish/Russian +
 * others — all in template (verified per CLAUDE.md). Arabic leads naturally
 * given UAE's official-language status.
 *
 * MIDDLE PIVOT — special caution: source markdown FAQ #3 named "Post Office
 * or PayPoint" as "authorised UK body" — that specific phrasing is forbidden
 * outside legal disclaimer per CLAUDE.md. Rewritten to describe IDP Companion
 * vs government IDP without naming competitor issuers.
 *
 * SEO add-ons present: tldr (3-row exception), lez (Dubai vs Abu Dhabi
 * enforcement asymmetry — the page's main thesis), howTo, lastReviewed.
 * NO phrases block (English near-universal at every UAE rental desk and
 * police checkpoint; Arabic phrases would be performative).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in UAE: 2026 Dubai vs Abu Dhabi Guide',
		description:
			"UK photocard accepted in Dubai under Markhoos 2025 — no IDP needed there. Abu Dhabi operates differently: many agencies and Police require IDP regardless. Zero BAC tolerance. AED 20,000 + jail for DUI. Honest 2026 guide.",
		ogTitleShort: 'UK Drivers in UAE: IDP Guide 2026',
		ogSubtitle: 'Dubai says fine. Abu Dhabi says bring one anyway.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → UAE',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'UK → UAE · 2026 Guide',
		title: 'IDP for UK Drivers in UAE: The Dubai vs Abu Dhabi Split',
		lead: "The Budget counter at Abu Dhabi International has a card on the desk listing countries whose licence holders must present an IDP. The UK is not on that list — and then, in the same conversation, the agent asks for it anyway. This is the Abu Dhabi rental situation in miniature: the UAE's Markhoos initiative, updated in 2025 to cover 52 countries including the UK, means that tourists with valid English-language licences don't technically need an IDP to drive legally in the UAE. Dubai operates largely on that basis. Abu Dhabi Police have historically required one regardless of what the federal framework says, and a meaningful number of rental agencies in the emirate include it as a hard booking condition. The distinction between Dubai and Abu Dhabi matters because most UK visitors drive between both — picking up at DXB, heading to the Grand Mosque or Yas Island, returning via Sheikh Zayed Road. That route crosses an internal emirate boundary that carries different enforcement weight than the journey itself.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'Federal: no. Abu Dhabi in practice: yes. If your trip touches both — carry it',
		text: "UAE federal law via the Markhoos initiative (52-country approved list updated 2025) recognises UK licences without an IDP. Dubai applies this consistently — UK photocard alone works at most desks. Abu Dhabi Police have historically required an IDP for foreign visitors regardless, and Budget, Hertz, and several other agencies' Abu Dhabi operations list translation documentation as a hard booking condition. Most UK itineraries cover both emirates: carry a translation document for the entire trip.",
	},

	tldr: {
		heading: 'UK Licence alone vs IDP Companion in UAE',
		lead: 'The split here is by emirate, not by country. Federal recognition is clean; Abu Dhabi enforcement runs alongside it.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in UAE',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Licence in Dubai',
				whatItDoes: 'Sufficient under Markhoos 2025 federal recognition. Accepted at most Dubai rental agencies — Hertz, Avis, Sixt, Budget at DXB and DWC — without supplementary documentation. Police interactions in tourist areas resolve quickly with photocard alone.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'UK Photocard Licence in Abu Dhabi',
				whatItDoes: 'Technically covered federally — but Abu Dhabi Police and many rental agencies there require an IDP or translation document regardless of the Markhoos position. Budget Abu Dhabi explicitly lists this requirement; Hertz Abu Dhabi has applied it at desk level in documented traveller reports.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in Arabic, English, French, Spanish, German, Italian, Portuguese, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set. Arabic and English are both widely used at every UAE rental desk and Police checkpoint — Arabic for formal documentation, English for spoken interaction. Satisfies Abu Dhabi rental requirements and provides Arabic reference at any emirate checkpoint. Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in UAE: original physical UK photocard licence (digital copies and photocopies not accepted), passport with valid UAE entry visa stamp, rental agreement, vehicle insurance certificate. UAE does not accept digital licences — physical original required at every rental desk and police interaction. IDP Companion is a translation companion alongside the licence, not a standalone document.",
	},

	whyNotEnough: {
		heading: 'Why the Dubai–Abu Dhabi split exists',
		lead: 'The UAE is one country with seven emirates, but the documentation rules don\'t always travel cleanly between them. Three layers create the asymmetry.',
		reasons: [
			{
				icon: 'mdi:scale-balance',
				title: 'The federal position vs Abu Dhabi divergence',
				text: "The UAE's Markhoos initiative, expanded to 52 countries in 2025, formally recognises tourist drivers from approved countries — including the UK — as eligible to drive on their home English-language licence without an IDP for the duration of their tourist visa. This is the national framework. In Dubai it is applied consistently at major rental agencies. Abu Dhabi has operated its own enforcement practices around foreign licences that predate and run alongside the federal framework — Abu Dhabi Police communications have historically stated that visitors must carry an IDP alongside their national licence.",
			},
			{
				icon: 'mdi:speedometer',
				title: 'The speed-camera buffer asymmetry',
				text: 'A speed camera on Sheikh Zayed Road in Dubai photographs your plate at 121 km/h in a 100 km/h zone and does nothing — Dubai\'s radar triggers at 20 km/h over the posted limit. The same camera in Abu Dhabi triggers at 101 km/h. Abu Dhabi has run zero-buffer enforcement since 2018: identical road behaviour (105 km/h in a 100 km/h zone) is unpunished in Dubai and fined in Abu Dhabi. The fines themselves — AED 600 to AED 3,000 depending on severity — arrive via the rental company\'s email within 48 hours and are charged to your card.',
			},
			{
				icon: 'mdi:alert-octagon',
				title: 'Zero BAC tolerance is absolute',
				text: 'Zero tolerance — 0.00% BAC across all seven emirates without exception. Any detectable blood alcohol while driving is a criminal offence with mandatory jail time. No threshold, no rounding, no margin. AED 20,000 fine + 23 black points + impound 60 days + criminal record. Alcohol is served in licensed hotel venues across Dubai and Abu Dhabi — UAE law distinguishes between consumption and driving. If you drink at dinner, do not drive that night.',
			},
		],
	},

	rules: {
		heading: 'UAE driving rules UK drivers should know',
		lead: 'Right-hand traffic is the day-one adjustment. The lane-discipline rules, zero BAC tolerance, and emirate-level speed-camera asymmetry are where UK driving habits genuinely require recalibration.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; requires adjustment, particularly at first junctions after pickup' },
			{ icon: 'mdi:speedometer', label: 'Residential streets', value: '40 km/h', note: 'Smaller urban areas' },
			{ icon: 'mdi:road-variant', label: 'Main urban roads', value: '60–80 km/h', note: 'Per posted signs' },
			{ icon: 'mdi:speedometer-medium', label: 'Highways', value: '100–140 km/h', note: 'Standard 100–120; select Abu Dhabi highways (E11) up to 140 km/h' },
			{ icon: 'mdi:speedometer-slow', label: 'Speed camera buffer', value: 'Dubai 20 km/h / Abu Dhabi 0', note: 'Dubai cameras trigger only above 20 km/h over; Abu Dhabi triggers at 1 km/h over' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.00% BAC — zero', note: 'Any detectable alcohol is a criminal offence; mandatory jail; AED 20,000 + 23 pts' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'AED 200–1,000 + 4–6 black points for handheld' },
			{ icon: 'mdi:car-multiple', label: 'Left lane', value: 'Fast traffic only', note: 'Slow driving in left lane is a fineable offence — AED 400; minimum 3-second following gap required by law' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Fines are camera-enforced and linked to the vehicle plate. Rental companies receive notification within ~48 hours and charge the amount to your card. Black points accumulate on the driver\'s record. Vehicle impound applies to serious offences.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without recognised documentation (Abu Dhabi)', amount: 'AED 2,000–10,000 (~£440–£2,200)', note: 'Federal Decree-Law No. 14 of 2024; applies despite Markhoos federal position', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding under 30 km/h over (Dubai)', amount: 'AED 600 (~£130)', note: '20 km/h buffer before camera triggers in Dubai', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 30–59 km/h over', amount: 'AED 1,500 + 6 pts (~£330)', note: 'Vehicle impound 15 days', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 60+ km/h over', amount: 'AED 3,000 + 12–23 pts (~£660)', note: 'Impound 30–60 days; escalating penalties', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Any speeding in Abu Dhabi', amount: 'AED 600+ (~£130+)', note: 'Zero-buffer enforcement since 2018; triggers at 1 km/h over', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI (any detectable alcohol)', amount: 'AED 20,000 + 23 pts (~£4,400)', note: 'Mandatory jail; impound 60 days; criminal record. Zero tolerance is absolute', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'AED 1,000–4,000 + 12 pts (~£220–£880)', note: 'Impound 60 days (Dubai)', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: 'AED 400 + 4 pts (~£88)', note: 'Per person; rear seats included', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone', amount: 'AED 200–1,000 + 4–6 pts (~£44–£220)', note: '', severity: 'med' },
			{ icon: 'mdi:car-multiple', label: 'Slow driving in left lane', amount: 'AED 400 (~£88)', note: 'Lane discipline actively enforced on UAE highways', severity: 'med' },
		],
		caption: 'Sources: UAE Federal Decree-Law No. 14 of 2024 on Traffic Regulation (uaelegislation.gov.ae); Dubai Roads and Transport Authority (rta.gov.ae); Abu Dhabi Police penalty schedule 2025; Gulf News tourist driving licence rules UAE (gulfnews.com, December 2025); GOV.UK Driving in UAE (gov.uk/foreign-travel-advice/united-arab-emirates).',
	},

	lez: {
		heading: 'Where the friction concentrates — Dubai vs Abu Dhabi vs the road between',
		badge: 'UAE-specific',
		lead: 'The UAE federal framework is clean. The emirate-level enforcement is what UK drivers actually encounter. Three zones map the asymmetry.',
		zones: [
			{
				city: 'Dubai (DXB, DWC, Sheikh Zayed Road)',
				name: 'Markhoos 2025 — UK photocard works alone',
				description: 'Major Dubai rental agencies (Hertz, Avis, Sixt, Budget at DXB and DWC airports, plus city branches) process UK photocards without IDP under Markhoos federal recognition. Police checkpoints in tourist areas resolve quickly with photocard + passport. Speed-camera buffer is 20 km/h before triggering — practical implication: don\'t exceed posted limit by more than 20 km/h, and most UK driving habits remain unpunished.',
				fine: 'AED 600+ (~£130+) speeding entry-level',
				note: "Dubai's left-lane-for-fast-traffic discipline on highways is the biggest behavioural shift from UK driving habits. Move right after overtaking; staying left at the speed limit is itself a fineable offence (AED 400).",
			},
			{
				city: 'Abu Dhabi (AUH, Yas Island, Grand Mosque)',
				name: 'Stricter enforcement, zero camera buffer',
				description: "Abu Dhabi Police and many rental agencies in the emirate require IDP or translation documentation regardless of the Markhoos federal position. Budget Abu Dhabi lists this in their booking conditions; Hertz Abu Dhabi has applied it at desk level. Speed cameras run zero-buffer enforcement (since 2018) — triggers at 1 km/h over the posted limit. The same road behaviour that's free in Dubai is fined here.",
				fine: 'AED 600+ (~£130+) speeding; AED 2,000–10,000 (~£440–£2,200) documentation',
				note: 'Practical rule: if your itinerary touches Abu Dhabi at any point — Grand Mosque visit, Yas Island, Al Ain, or driving the E11 highway — carry translation documentation regardless of what Dubai allows.',
			},
			{
				city: 'E11 Sheikh Zayed Road (Dubai → Abu Dhabi)',
				name: 'The 140-km bridge between two enforcement regimes',
				description: 'The drive from Dubai to Abu Dhabi takes ~90 minutes on the E11. The road itself is excellent — wide, modern, well-signed in English and Arabic. The journey crosses an internal emirate boundary that doesn\'t exist on a map but carries different enforcement weight. Speed cameras change behaviour mid-route. A documentation question that won\'t arise in Dubai may arise at any AD-side rental return or police interaction.',
				fine: 'Variable — depends on emirate of stop',
				note: "If picking up in Dubai and driving to Abu Dhabi: carry IDP Companion before you turn onto the E11. The cost — $35 — is less than the Salik tolls on that same journey, and removes the documentation question from every interaction on the AD side.",
			},
		],
		tip: "Practical rule for UAE: Dubai-only trip → UK photocard alone is practically sufficient. Any itinerary that includes Abu Dhabi → carry a translation document before crossing the emirate boundary. The UAE is one country; the documentation rules don't always travel cleanly between Dubai and Abu Dhabi.",
	},

	howTo: {
		heading: 'How to prepare for driving in UAE as a UK citizen',
		lead: "The legal answer at the federal level is simple. The preparation that matters is matching documentation to the emirate where each part of your trip happens.",
		schemaName: 'How to prepare for driving in UAE as a UK citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Check whether your itinerary touches Abu Dhabi',
				text: 'Dubai-only trip (DXB pickup, Dubai-side hotels, Burj Khalifa / Mall of the Emirates / Dubai Marina): Markhoos federal recognition covers you, photocard alone is sufficient. Any itinerary including Abu Dhabi (Grand Mosque, Yas Island/Ferrari World, Saadiyat Island, Al Ain, or driving the E11): carry translation documentation. Most UK trips touch both — default to carrying.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your UK licence into Arabic (the UAE official language and dominant on formal documentation), plus English, French, Spanish, German, Italian, Portuguese, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set. Satisfies Abu Dhabi rental desk requirements that override federal Markhoos recognition.',
			},
			{
				title: 'Carry the physical original UK licence — no digital copies accepted',
				text: 'UAE rental agencies and police do not accept digital licences, smartphone licence images, or photocopies. The physical photocard must be in your wallet at every rental pickup and police interaction. UAE drivers who store their licence on their phone as a backup should ensure the physical card is present before any drive.',
			},
			{
				title: "Internalise zero BAC tolerance before any drink-and-drive scenario",
				text: 'Zero tolerance — 0.00% BAC across all seven emirates without exception. Any detectable blood alcohol is a criminal offence with mandatory jail. AED 20,000 + 23 black points + impound + criminal record. Alcohol is served in licensed hotel venues; UAE law distinguishes consumption from driving. If you drink at dinner, take a taxi or rideshare. There is no margin.',
			},
			{
				title: 'Set the lane-discipline rule before merging onto Sheikh Zayed Road',
				text: "UAE highway lane discipline is actively enforced: left lane is for fast traffic only — move right after overtaking. Staying in the left lane at the posted limit is itself a fineable offence (AED 400). Tailgating is fined AED 400 + 4 black points; minimum 3-second following gap required by law. Camera enforcement applies to both.",
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in UAE — honestly',
		lead: 'The UAE federal position is generous; the Abu Dhabi reality is stricter. We\'ll be direct about where IDP Companion adds value.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your UK licence data into Arabic (the UAE official language) plus English, French, Spanish, German, Italian, Portuguese, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to satisfy Abu Dhabi rental desk requirements that override federal Markhoos recognition, provide formal documentation at any emirate Police checkpoint, and cover insurance claim documentation if needed',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention — though UAE federal Markhoos recognition means a government IDP isn\'t legally required for UK photocard holders at the national level',
				'Not valid by itself — must be carried alongside your physical UK licence (digital images and photocopies not accepted by UAE authorities; physical original required)',
				'Not a UAE resident driving solution — once you hold an Emirates ID, a UAE driving licence is required regardless of any translation document',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in UAE',
			items: [
				'At Abu Dhabi rental desks (Hertz, Budget, Avis Abu Dhabi operations) that list translation documentation as a hard booking condition regardless of federal Markhoos recognition',
				'At Abu Dhabi Police checkpoints where emirate-level IDP enforcement applies independently of federal rules',
				'When insurance documentation is requested during a claims process — particularly for incidents in Abu Dhabi where insurers prefer IDP documentation on file',
				'In Dubai, in the rare case where an individual rental agent applies stricter requirements than the Markhoos standard',
			],
		},
		needOfficial: {
			title: 'Documents UAE law actually cares about',
			items: [
				'Original physical UK photocard licence (no digital copies, smartphone images, or photocopies accepted)',
				'UK passport with valid UAE entry visa stamp — required at any document review',
				'IDP or translation document — required in Abu Dhabi practice; recommended for any itinerary touching the emirate',
				'Rental agreement and vehicle insurance certificate — provided by rental company at pickup',
			],
		},
		pattern:
			"What prepared UK travellers in UAE actually carry: physical UK photocard + passport with UAE visa stamp + IDP Companion (printed) + rental agreement + insurance card. Phone goes in the cradle — not because of camera enforcement (that applies but is mostly avoided by UK drivers anyway) but because lane discipline matters more here than at home. The zero-BAC rule resolves with one decision per dinner. The Dubai-vs-Abu Dhabi documentation question resolves with $35 of preparation before the airport pickup.",
	},

	renting: {
		heading: 'Renting a car in UAE as a UK driver',
		lead: 'Major Dubai operations follow Markhoos federal recognition. Major Abu Dhabi operations frequently apply stricter emirate-level requirements. Plan documentation to the emirate that has the stricter rule.',
		chains: [
			{ name: 'Hertz UAE (Dubai)', policy: 'UK photocard accepted without IDP under Markhoos. Available at DXB, DWC, and city branches. Minimum age 21; young driver surcharge under 25. Credit card mandatory for deposit.' },
			{ name: 'Hertz UAE (Abu Dhabi)', policy: 'Same licence, different requirements — Hertz Abu Dhabi operations have applied IDP requirements to non-GCC holders at desk level in documented traveller reports.' },
			{ name: 'Avis UAE', policy: 'Dubai operations generally accept UK licence alone; Abu Dhabi operations more likely to request IDP alongside. Minimum age 21.' },
			{ name: 'Budget UAE', policy: "Dubai — UK accepted. Abu Dhabi — Budget's documented booking conditions list IDP as a requirement for all non-GCC named drivers at Abu Dhabi locations." },
			{ name: 'Sixt UAE', policy: 'Available at DXB and DWC. UK photocard accepted in Dubai. Credit card (not debit) mandatory. Minimum age 21.' },
		],
		tipsHeading: 'Practical tips for renting in UAE',
		tips: [
			'Automatic transmission is standard across the UAE rental fleet — manual vehicles not available',
			'Salik (Dubai electronic toll system) fully automated — tolls tracked to plate and billed to your card after the trip; no stopping or cash required',
			'Fuel substantially cheaper than UK; full-to-full fuel policy at all major agencies',
			'Credit card with sufficient available credit required — deposit holds AED 1,500–5,000 (~£330–£1,100) standard',
			'Minimum age 21 across all major agencies; luxury and 4WD vehicles may require 25+',
			'Desert driving: standard rental agreements explicitly exclude off-road and desert-surface driving; verify if planning to go off tarmac',
			'Left lane on UAE highways for fast traffic only — move right after overtaking; staying left at the speed limit is itself a fineable offence',
			'Navigation: Google Maps and Waze work reliably throughout UAE; speed-camera alert features are legal in all emirates',
			'No digital licences or photocopies accepted — physical original required at every pickup',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes',
		lead: 'Realistic outcomes for UK drivers across Dubai and Abu Dhabi.',
		items: [
			{
				severity: 'low',
				frequency: 'Common',
				label: 'Dubai pickup, UK licence alone, clean drive',
				text: 'Markhoos recognition applied; no friction. Most Dubai-only trips end this way.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Abu Dhabi rental desk, UK licence alone',
				text: 'Many AD agencies require IDP regardless of federal rules. Without it: rebooking conversation, delay, sometimes rental refusal. IDP Companion handles this.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Speed camera, Dubai (20 km/h buffer)',
				text: 'AED 600 minimum; 48hr notification to rental company; charged to your card. 20 km/h buffer before trigger — most UK driving habits remain unpunished.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Speed camera, Abu Dhabi (zero buffer)',
				text: 'Triggers at 1 km/h over since 2018. Same escalating fine structure as Dubai. Identical road behaviour fined here, free in Dubai.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Abu Dhabi Police checkpoint, no IDP',
				text: 'Emirate-level enforcement; potential fine AED 2,000–10,000 + delay. Abu Dhabi Police communications have historically required IDP regardless of federal Markhoos.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Insurance claim without IDP in Abu Dhabi',
				text: 'Insurers may complicate or delay claim settlement; documentation dispute. UAE insurers underwriting rental fleets historically prefer IDP documentation on file.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI stop, any detectable alcohol',
				text: 'AED 20,000 + 23 black points + mandatory jail + impound 60 days + criminal record. Zero tolerance is absolute across all emirates.',
			},
		],
		math: 'IDP Companion is $35 (~£28). A rental refusal in Abu Dhabi means rebooking or negotiating with the agent while the queue builds behind you. A disputed insurance claim means dealing with it from home. The DUI penalty is AED 20,000 (~£4,400) plus criminal record. One translation document covers the rental and police interactions; the alcohol decision is a separate conversation.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I need an IDP to drive in the UAE with a UK photocard licence?',
				answer: "At the federal level, no. The UAE's Markhoos initiative covers UK licence holders as tourists — a valid English-language UK photocard is sufficient without an IDP in Dubai and under federal law generally. Abu Dhabi applies stricter emirate-level enforcement; many rental agencies there and Abu Dhabi Police have historically required IDP documentation regardless of the federal position.",
			},
			{
				id: 2,
				question: "What's the practical rule if my trip covers Dubai and Abu Dhabi?",
				answer: 'Carry an IDP or translation document. The journey between the two takes under 2 hours and crosses an internal boundary with different enforcement expectations. IDP Companion costs less than the Salik tolls on that same journey.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government IDP is a formal printed booklet issued under the 1949 Geneva Convention. IDP Companion is a private multilingual translation document presenting your UK licence details in Arabic, English, French, Spanish, Russian and 7 other widely-spoken languages from the 1949 Geneva Convention set — used alongside your original licence as a translation aid. For Abu Dhabi specifically, verify with your rental agency at booking whether they accept a translation document or insist on the government-format IDP booklet.',
			},
			{
				id: 4,
				question: 'What does zero BAC tolerance actually mean in UAE?',
				answer: 'It means any detectable alcohol in your blood while driving is a criminal offence. There is no minimum threshold, no rounding, no margin. Alcohol is served in licensed hotel venues across Dubai and Abu Dhabi — UAE law distinguishes between consumption and driving. If you drink at dinner, do not drive that night. The penalty is AED 20,000 (~£4,400) + mandatory jail + impound 60 days + criminal record.',
			},
			{
				id: 5,
				question: 'How do speed cameras work differently in Dubai vs Abu Dhabi?',
				answer: "Dubai's cameras trigger only when you exceed the posted limit by more than 20 km/h — a tolerance buffer built into the system. Abu Dhabi has run zero-tolerance enforcement since 2018: the camera triggers at 1 km/h over the posted limit. Identical road behaviour — 105 km/h in a 100 km/h zone — is unpunished in Dubai and fined in Abu Dhabi. Same fine structure once triggered (AED 600+ entry-level, escalating).",
			},
			{
				id: 6,
				question: 'How do I pay a UAE speed camera fine?',
				answer: 'Fines are linked to the vehicle plate and issued to the rental company within ~48 hours. The agency charges the amount to your card and sends a notification. You can also check and pay directly via the Dubai Police app or the Abu Dhabi Police website using the plate number.',
			},
			{
				id: 7,
				question: 'Can I use my UK licence to pick up in Dubai and drive to Abu Dhabi?',
				answer: 'Yes — the road is open and the route is straightforward. The documentation recommendation changes when you cross into Abu Dhabi\'s jurisdiction. Pick up in Dubai with your UK licence; carry IDP Companion before you turn onto the E11 toward Abu Dhabi.',
			},
			{
				id: 8,
				question: 'Is driving in Dubai manageable for UK drivers?',
				answer: 'Yes, with the right-hand traffic adjustment. Roads are wide, well-signed in English and Arabic, and navigation apps work reliably. The left-lane-for-fast-traffic convention on highways is the biggest behavioural shift from UK driving habits. Traffic in central Dubai during peak hours (7–9am, 5–8pm Sunday–Thursday) is heavy; off-peak and outside the city it\'s straightforward.',
			},
			{
				id: 9,
				question: 'Can I combine UAE with other destinations on the same trip?',
				answer: 'Yes — UK travellers regularly combine UAE with Thailand, Egypt, India, or stopover routes through Cyprus or Greece. Thailand legally requires an IDP for foreign tourist drivers under the 1949 Geneva Convention. Egypt also legally requires IDP. IDP Companion covers all of these on one purchase. Validity tied to your UK domestic licence — choose 1, 3, or 5 years.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for UAE trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic UK licence — if your UK licence expires, the companion expires with it. One purchase covers UAE plus Thailand, Egypt, Morocco, Turkey, Cyprus and any other destination during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and UAE-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'cy', label: 'UK → Cyprus', status: 'Live', href: '/idp-for-uk-drivers-in-cyprus' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'US → UAE', status: 'Live', href: '/idp-for-us-drivers-in-uae' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Russia → UAE', status: 'Live', href: '/idp-for-russian-drivers-in-uae' },
			{ flagFrom: 'gb', flagTo: 'eg', label: 'UK → Egypt', status: 'Live', href: '/idp-for-uk-drivers-in-egypt' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including Arabic, English, French, Spanish, Russian and 6 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real UK licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers UAE plus Thailand, Egypt, Morocco, Turkey, Cyprus and any other destination during the chosen period. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the UAE Ministry of Interior, the Dubai Roads and Transport Authority (RTA), or Abu Dhabi Police. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office). IDP Companion must be used alongside your original UK driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'UAE Federal Decree-Law No. 14 of 2024 on Traffic Regulation — uaelegislation.gov.ae',
			'UAE Markhoos initiative 2025 — UAE Ministry of Interior',
			'Dubai Roads and Transport Authority (RTA) fine schedule — rta.gov.ae',
			'Abu Dhabi Police — traffic enforcement and visitor documentation requirements 2025',
			'Gulf News — tourist driving licence rules UAE (December 2025)',
			'GOV.UK — Driving in UAE (gov.uk/foreign-travel-advice/united-arab-emirates, last updated 2025)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'United Arab Emirates',
	},
};

export const ukUaeCopy: Record<'en', CountryPairCopy> = { en };
