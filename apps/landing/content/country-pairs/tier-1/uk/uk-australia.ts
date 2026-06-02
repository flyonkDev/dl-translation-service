/**
 * Country-pair content: United Kingdom → Australia.
 * Locales: en only.
 *
 * Unique angle: easiest documentation situation in the entire UK guide
 * series — UK photocard fully accepted in Australia under English-language
 * recognition (no IDP needed). What catches UK drivers is NOT documents,
 * it's three operational realities: phone-at-red-light camera fines,
 * point-to-point average-speed cameras (NSW M1, Newell Hwy), and dawn-dusk
 * wildlife on regional roads.
 *
 * PDF language compliance: claims English/French/Spanish/Arabic + others —
 * all in template (verified per CLAUDE.md). No Greek/Thai/Korean false claims.
 *
 * SEO add-ons present: tldr (3-row exception — photocard/paper is
 * informational), howTo, lastReviewed. NO lez block (Australia doesn't have
 * city-level LEZ system; phone-camera enforcement instead — handled in fines
 * + rules + a dedicated wildlife block via lez slot for state asymmetry).
 * NO alphabet block (English-language country).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Australia IDP for UK Drivers — Photocard OK, AUD 555 Phone Fines',
		description:
			"UK photocard is accepted in Australia under English-language recognition — no IDP legally required for tourist visits. UK paper licences and 90-day Working Holiday timelines change the picture. 2026 guide for SYD/MEL/BNE drivers covering phone-camera enforcement, NSW point-to-point cameras and double-demerit periods.",
		ogTitleShort: 'Australia IDP for UK Drivers',
		ogSubtitle: 'Photocard OK · AUD 555 phone fines · 90-day rule',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Australia',
	},
	lastReviewed: 'June 2026',

	hero: {
		kicker: 'UK → Australia · 2026 Guide',
		title: 'Australia IDP for UK Drivers — Photocard OK + Phone Cameras',
		lead: "The drive from Melbourne down the Great Ocean Road takes about ninety minutes before it becomes something else entirely — cliff faces dropping straight into the Southern Ocean, a road surface that demands actual concentration, and a sign at Apollo Bay warning the next fuel is 100 kilometres away. Most UK visitors handle Australian roads with less adjustment than they expect: left-hand traffic, right-hand drive, roundabouts identical to the ones at home. The recalibration that catches people isn't the road — it's the phone. In Victoria, in New South Wales, and in Queensland, touching your phone at a red light with the engine running is a fine. Not holding it to your ear while moving. Touching it. Sitting stationary. Victoria Police issued 47,000 phone-while-driving infringements in the first year of camera-based enforcement. Q1 2026 r/australia and Pomsinoz expat threads continue flagging the same shock on UK arrivals — tickets that landed on the rental in week one for behaviour considered routine back home. The UK photocard licence covers the documentation side of driving in Australia for tourist visits without needing an IDP — English language, recognised everywhere. What it doesn't cover is three months of muscle memory telling you it's fine to check a notification at the lights.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No for photocard, yes for paper licence — and Working Holiday timelines change after 90 days',
		text: 'UK photocard licence holders can drive in Australia for tourist visits without an IDP. NSW and Victoria specify a 3-month limit from entry; other states allow driving on a valid overseas English-language licence for the duration of a visitor visa. UK paper licences (old green or pink) are NOT covered alone — most rental agencies require an IDP or certified English translation alongside. A multilingual translation companion closes the paper-licence gap and provides Arabic/French reference if your trip continues to UAE, Thailand or Egypt.',
	},

	tldr: {
		heading: 'UK Licence alone vs IDP Companion in Australia',
		lead: 'The legal answer is clean for photocard holders. Paper licence holders need supplementary documentation at every major rental desk.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Australia',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Licence (alone)',
				whatItDoes: "Valid for tourist driving in all states — English-language licence accepted without IDP. Accepted at Hertz, Avis, Sixt, Budget, Europcar across SYD, MEL, BNE, PER, ADL. Valid up to 3 months in NSW/Victoria; for the duration of a visitor visa in most other states. Working Holiday Visa (subclass 417/462) timelines differ — verify per state.",
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'UK Paper Licence (alone)',
				whatItDoes: 'Not sufficient — must be accompanied by an IDP or certified English translation. Hertz, Avis, Sixt, and Budget Australia all document this requirement. Australian states do not accept digital licences, smartphone licence images, or photocopies — physical original required.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in English, French, Spanish, German, Italian, Portuguese, Arabic, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set. Covers paper licence holders at rental desks; backup reference if licence is questioned or lost; covers other destinations on the same trip — UAE, Thailand, Egypt — where translation documentation is legally required. Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry in Australia: original physical UK photocard licence (digital licences not accepted), passport with valid Australian visa, rental agreement, vehicle insurance. NSW and Victoria specify a 3-month tourist driving window from entry. After this — or if visa status converts to permanent — an Australian state licence is required.',
	},

	whyNotEnough: {
		heading: 'Why Australia is simple on documentation and complex on everything else',
		lead: 'Major chains follow English-language recognition uniformly. The friction sits elsewhere: phone laws stricter than anywhere in Europe, point-to-point speed cameras that measure average speed not instant speed, and double demerit periods that double every fine.',
		reasons: [
			{
				icon: 'mdi:cellphone-off',
				title: 'The phone-camera enforcement is unusual',
				text: "Victoria and NSW have rolled out AI camera systems that photograph vehicle interiors and automatically flag handheld phone use. The camera doesn't need a police officer present — it operates continuously and processes images at enforcement centres. Touching your phone at a red light with the engine running is the same offence as using it while moving. AUD 555 (~£280) + 5 demerit points in Victoria; AUD 356 (~£180) + 5 points in NSW.",
			},
			{
				icon: 'mdi:speedometer-medium',
				title: 'Point-to-point cameras measure average speed',
				text: "Unlike fixed-point cameras that catch you at one spot, point-to-point systems on the M1 Pacific Motorway, Newell Highway, and several NSW routes record entry time at one camera and exit time at another several kilometres later. If your average speed across that stretch exceeds the limit, you're fined regardless of what you were doing at any individual moment. Slowing for a single camera and accelerating between cameras doesn't help.",
			},
			{
				icon: 'mdi:calendar-alert',
				title: 'Double demerit periods double every fine',
				text: 'In NSW, ACT, and Queensland, demerit point values double during designated holiday periods — Easter, Christmas, school holiday long weekends. A speeding infringement that normally costs 3 demerit points costs 6 during these periods. In Queensland, double demerits apply year-round for repeat mobile phone, speeding, seatbelt, and helmet offences within 12 months. Check the dates for your driving window before you fly.',
			},
		],
	},

	rules: {
		heading: 'Australian driving rules UK drivers should know',
		lead: 'Left-hand traffic is identical to home — that part is easy. The state-level phone, speed, and lane-discipline rules are where the adjustment lives.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Same as UK; right-hand drive cars; roundabouts work identically' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '40 km/h in school zones during school hours; 10 km/h in shared zones' },
			{ icon: 'mdi:road-variant', label: 'Open road', value: '100 km/h', note: 'Default where no other sign posted' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway/freeway', value: '100–110 km/h', note: 'Victoria caps most freeways at 100; NSW and QLD allow 110 on some routes' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.00% for learner and P-plate; 0.02% heavy vehicles' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Strictly hands-free', note: 'Touching phone at red light is a fine; AI cameras enforce in NSW/VIC' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'AUD 391 + 3 pts', note: 'Per person; driver liable for under-16 passengers' },
			{ icon: 'mdi:car-multiple', label: 'Keep-left rule', value: '>80 km/h roads', note: 'On 90 km/h+ multi-lane roads, driving in right lane without overtaking is an offence' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Fines are state-level. Figures below reflect NSW and Victoria — the most-visited states for UK tourists. Camera-issued fines arrive at the rental company within ~48 hours and are charged to your card. Double demerit periods double demerit-point values, not the fine amount.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding up to 10 km/h over (NSW)', amount: 'AUD 123 (~£62)', note: 'Point-to-point on M1 and other NSW routes', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 10–20 km/h over (NSW)', amount: 'AUD 356 (~£180)', note: 'Doubles during double demerit periods', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 20–30 km/h over (NSW)', amount: 'AUD 534 + 4 pts (~£270)', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 30–45 km/h over (NSW)', amount: 'AUD 891 + 6 pts (~£450)', note: '', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone use (Victoria)', amount: 'AUD 555 + 5 pts (~£280)', note: 'Camera-detected; stationary or moving counts equally', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone use (NSW)', amount: 'AUD 356 + 5 pts (~£180)', note: 'AI cameras flag interior phone use', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt (NSW)', amount: 'AUD 391 + 3 pts (~£198)', note: 'Per person', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light (NSW)', amount: 'AUD 534 + 3 pts (~£270)', note: 'Camera-enforced at most major intersections', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC (NSW)', amount: 'From AUD 1,100 + court (~£556+)', note: 'Suspension; criminal charge; mandatory interlock for repeat', severity: 'high' },
		],
		caption: 'Sources: Transport for NSW fine schedule 2026; Fines Victoria 2026; Queensland Transport and Main Roads 2026; FCDO Australia travel advice. Fine amounts subject to annual indexation.',
	},

	lez: {
		heading: 'State-by-state phone enforcement & wildlife — where the friction concentrates',
		badge: 'Australia-specific',
		lead: 'The legal answer is the same in every state. The enforcement environment differs in two specific ways: phone-camera deployment (Victoria and NSW most aggressive) and dawn-dusk wildlife on regional roads (Northern Territory, regional Queensland, outback SA highest risk).',
		zones: [
			{
				city: 'Victoria (Melbourne, Great Ocean Road)',
				name: 'AI phone cameras + AUD 555 fine',
				description: 'Victoria runs the most aggressive AI camera system for distracted driving. Cameras photograph vehicle interiors and automatically flag handheld phone use. AUD 555 + 5 demerit points per offence — applies whether the car is moving or stationary at a red light. The Great Ocean Road is genuinely spectacular driving but the M1, M3, and city arterials all carry phone-camera coverage.',
				fine: 'AUD 555 (~£280) + 5 demerit points',
				note: "Practical rule: phone goes in the cradle or the glove box at the start of the drive. Don't pick it up at lights, don't pick it up at petrol stations with the engine running.",
			},
			{
				city: 'New South Wales (Sydney, M1, Pacific Hwy)',
				name: 'Point-to-point cameras + double demerits',
				description: "NSW operates point-to-point cameras on the M1 Pacific Motorway between Sydney and the Hunter, the Newell Highway, and several other major routes. They calculate average speed across multi-kilometre stretches — slowing for fixed cameras doesn't help. Double demerit periods double point values during Easter, Christmas, school-holiday long weekends. AI phone cameras also operational. AUD 356 + 5 pts per phone offence.",
				fine: 'AUD 356–891 (~£180–£450)',
				note: 'Check official NSW double demerit dates before driving — they shift by year. School-holiday long weekends are the predictable ones.',
			},
			{
				city: 'Regional roads (NT, outback QLD, WA)',
				name: 'Dawn-dusk wildlife — the unpriced risk',
				description: 'A large grey kangaroo can weigh 80 kg and stand 1.5m tall. A collision at 100 km/h writes off most passenger vehicles. Kangaroos, wombats, wallabies, and emus are most active in the two hours after dusk and the hour before dawn. Australian rental insurance covers wildlife collisions on standard CDW — but some budget operators exclude them or apply a higher excess for animal strikes. Verify before driving the Stuart Highway, Birdsville Track, or Gibb River Road.',
				fine: 'Variable (insurance excess)',
				note: "Brake, don't swerve — the instinct to swerve takes the vehicle off the road, which causes more harm than the collision. Local advice across QLD/NSW/VIC/SA/WA is consistent: avoid regional roads dawn and dusk if you can.",
			},
		],
		tip: "Practical rule for Australia: photocard-holder UK drivers get the cleanest legal documentation position in this entire guide. The friction sits in three places — paper-licence holders, phone habits at red lights, and dawn-dusk regional driving. The paper-licence one resolves with $35 of preparation. The phone one resolves by putting the phone in the cradle or the glove box. The wildlife one resolves by not driving regional roads in the dark.",
	},

	howTo: {
		heading: 'How to prepare for driving in Australia as a UK citizen',
		lead: 'Documentation is short. The behavioural preparation matters more — phone discipline, point-to-point camera awareness, and wildlife-window planning if you go regional.',
		schemaName: 'How to prepare for driving in Australia as a UK citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Verify your licence type — photocard vs paper',
				text: "Photocard holders: English-language recognition covers you, no IDP legally required. Paper licence holders (old green or pink, pre-2000): IDP or certified English translation legally required at every major rental agency. Carry the physical original — Australia does not accept digital licences, smartphone licence images, or photocopies.",
			},
			{
				title: 'Confirm your driving window matches your visa',
				text: "NSW and Victoria specify 3 months from entry; other states allow driving on an English-language overseas licence for the duration of a visitor visa. Working Holiday Visa (subclass 417/462) holders are temporary residents — verify state-specific timelines for the state you'll be based in.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your UK licence into English (already on the licence), plus French, Spanish, German, Italian, Portuguese, Arabic, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set. Useful for paper-licence holders (legally needed alongside the licence) and as a backup reference if combining Australia with UAE, Thailand, or Egypt where translation documentation is required at police stops.',
			},
			{
				title: 'Set the phone-discipline rule before you drive',
				text: 'Phone goes in the dashboard cradle or the glove box at the start of every drive. Do not pick it up at red lights, do not pick it up to skip a track, do not pick it up to check a notification at petrol stations with the engine running. Victoria AUD 555 + 5 points; NSW AUD 356 + 5 points; cameras enforce automatically.',
			},
			{
				title: 'Check double demerit dates if driving NSW/QLD/ACT',
				text: 'NSW and Queensland publish double-demerit dates yearly — typically Easter long weekend, Christmas/New Year period, ANZAC Day long weekend, and school-holiday long weekends. Demerit values double during these windows, so a routine speeding fine costs 6 points instead of 3. Check official transport authority pages the week of departure.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Australia — honestly',
		lead: 'Australia post-recognition is one of the cleanest legal cases in this entire UK guide series. We\'ll be direct about where IDP Companion adds value.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your UK licence data into English (already on the licence), plus French, Spanish, German, Italian, Portuguese, Arabic, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to cover paper licence holders (where supplementary documentation is legally required) and trip-extenders combining Australia with UAE, Thailand, or Egypt',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention — not legally required for UK photocard holders in Australia',
				'Not valid by itself — must be carried alongside your physical UK licence (digital images not accepted by Australian authorities; physical original required)',
				'Not a substitute for the visa-tied driving window (3 months in NSW/VIC for visitor visa holders) — once the window expires or your visa converts to permanent residency, conversion to an Australian state licence is required',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Australia',
			items: [
				'Paper licence holders: provides the supplementary translation alongside the licence — required at Hertz, Avis, Sixt, Budget Australia',
				'Trip extenders combining Australia with UAE, Thailand, Egypt, or other Geneva 1949 destinations on the same itinerary — one purchase covers the whole trip',
				'As a reference document if your physical UK licence is lost or damaged mid-trip and you need to demonstrate its contents to a rental agent or police officer while waiting for DVLA replacement',
				'At any rental agent who questions an unfamiliar UK licence format — particularly at smaller regional desks',
			],
		},
		needOfficial: {
			title: 'Documents Australian law actually cares about',
			items: [
				'Your physical UK photocard licence (or paper licence + IDP/translation if paper)',
				'UK passport with valid Australian visa stamp — checked at any document review',
				'Rental agreement and insurance certificate — provided by rental company',
				'No digital copies, smartphone licence images, or photocopies accepted — physical original only',
			],
		},
		pattern:
			"What prepared UK travellers in Australia actually carry: physical UK photocard (or paper + translation) + passport + visa + rental agreement + insurance card. The phone goes in the cradle. The dawn-dusk regional driving avoidance is a planning decision before the trip starts. IDP Companion is a friction-reducer for paper-licence holders and trip-extenders — not a legal necessity for photocard holders driving as tourists.",
	},

	renting: {
		heading: 'Renting a car in Australia as a UK driver',
		lead: 'Major chains process UK photocards uniformly across all states. Paper licence requirements are also uniform — no major agency releases the car without IDP/translation alongside.',
		chains: [
			{ name: 'Hertz Australia', policy: 'Accepts UK photocard without IDP. Paper licence requires IDP or certified English translation. Available at all major airports across all states. Minimum age 21; under-25 surcharge applies' },
			{ name: 'Avis Australia', policy: 'Same photocard policy. Minimum age 21. Credit card required for deposit (debit not accepted at some locations)' },
			{ name: 'Sixt Australia', policy: 'Photocard accepted. Paper licence requires supplementary documentation. Available at SYD, MEL, BNE, PER, ADL airports. Minimum age 21' },
			{ name: 'Budget Australia', policy: 'Consistent with above. UK photocard sufficient for all states. Paper licence holders require IDP or translation' },
			{ name: 'Europcar / Thrifty / Local', policy: 'Same uniform policy at major airports. Smaller regional and outback agencies vary — verify booking conditions if renting outside major cities' },
		],
		tipsHeading: 'Practical tips for renting in Australia',
		tips: [
			'Minimum age 21 at all major agencies; young driver surcharge under 25; some 4WD categories require 25+',
			'Credit card mandatory for deposit; holds of AUD 1,500–5,000 (~£760–£2,530) standard depending on vehicle',
			'Manual and automatic both available; 4WD vehicles for outback routes are almost exclusively automatic',
			'Campervans and motorhomes have a separate rental licence category — verify your UK licence class authorises the vehicle type',
			'One-way rentals (Sydney → Melbourne, Cairns → Brisbane) allowed at major chains with a drop-off fee; confirm in advance',
			'Outback routes (Stuart Highway, Gibb River Road, Birdsville Track): standard 2WD vehicles inappropriate for many; 4WD with specific additional coverage required; fuel planning essential — some sections 400 km+ between stations',
			'Electronic toll networks in Sydney and Melbourne — rental cars typically include e-toll transponder or as add-on; cash not accepted on most toll roads',
			"NSW and Queensland double demerit periods during school holidays and long weekends — check dates before driving",
			'Australia does not accept digital licences, smartphone licence images, or photocopies — physical original required at pickup',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes',
		lead: 'What UK drivers actually run into in Australia — Victoria phone-camera infringements, NSW M1/Newell point-to-point average-speed tickets, dawn-dusk wildlife strikes on regional roads — sorted by how often each plays out, drawn from r/australia and Pomsinoz threads.',
		items: [
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Photocard, major agency, clean drive',
				text: 'Standard tourist experience — no documentation friction. Most Australia trips end this way.',
			},
			{
				severity: 'high',
				frequency: 'Common without IDP',
				label: 'Paper licence, rental refused',
				text: "Paper licences not sufficient alone — Hertz, Avis, Sixt, Budget all require IDP or certified English translation alongside. No supplementary documentation = no rental.",
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Point-to-point camera fine, NSW motorway',
				text: 'Average speed across multi-km stretch exceeds limit; fine charged via rental company within ~48hrs. Slowing for individual cameras doesn\'t help — system measures average.',
			},
			{
				severity: 'high',
				frequency: 'Occasional',
				label: 'Phone-camera fine — touched phone at red light',
				text: 'Victoria AUD 555 + 5 pts; NSW AUD 356 + 5 pts. AI camera detection — no warning, no officer required. Stationary at lights counts the same as moving.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Wildlife collision, regional road, dawn or dusk',
				text: 'Vehicle damage significant; insurance claim depends on policy terms. Some budget operators exclude or apply higher excess for animal strikes — verify before driving NT, outback QLD, or routes west of Adelaide.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI over 0.05% BAC',
				text: 'From AUD 1,100 + court appearance; suspension; criminal charge; mandatory interlock for repeat offenders.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: '3-month tourist window expired, still driving',
				text: 'Unlicensed driving; insurance void; rental company liable. NSW and Victoria specifically enforce the 3-month entry-date limit for visitor visa holders.',
			},
		],
		math: 'IDP Companion is $35. A phone-use fine in Victoria is AUD 555 (~£280). A wildlife collision in the Northern Territory with an excluded insurance clause is whatever the vehicle damage assessment says it is. The licence question is easy. The phone discipline and dawn-dusk planning are free.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I need an IDP to drive in Australia with a UK photocard licence?',
				answer: 'No. Australian states require a valid driving licence in English or accompanied by an English translation. A UK photocard licence satisfies this requirement directly. An IDP is not legally required for UK photocard holders driving as tourists.',
			},
			{
				id: 2,
				question: 'What about UK paper licences?',
				answer: 'Paper licences — old green or pink versions issued before 2000 — must be accompanied by an IDP or certified English translation. Hertz, Avis, Sixt, and Budget Australia all list this requirement explicitly in their rental conditions. A paper licence alone will not be processed.',
			},
			{
				id: 3,
				question: 'How long is my UK licence valid in Australia?',
				answer: 'For tourist visits, NSW and Victoria specify 3 months from the date of entry. Other states allow driving on an overseas English-language licence for the duration of your visitor visa. Working Holiday Visa (subclass 417 or 462) holders are temporary residents rather than tourists — state-level conversion timelines may apply differently. If your visa status converts to permanent residency, conversion to an Australian state licence is required within 3 months.',
			},
			{
				id: 4,
				question: 'Why is the phone law so strict in Australia?',
				answer: "Victoria and NSW have introduced AI-based camera detection systems that photograph vehicle interiors and automatically flag handheld phone use. The camera doesn't require a police officer present — it operates continuously and processes images at enforcement centres. Touching the phone at a red light with the engine running is the same offence as using it while moving. Victoria AUD 555 + 5 demerit points; NSW AUD 356 + 5 points.",
			},
			{
				id: 5,
				question: 'What are point-to-point cameras?',
				answer: "Unlike fixed-point cameras that measure speed at a single location, point-to-point systems record entry time at one camera and exit time at another, several kilometres apart. If your average speed across that stretch exceeds the posted limit, a fine is issued regardless of speed at any individual point. Used extensively on the NSW M1 Pacific Motorway, the Newell Highway, and several other routes. Slowing for one camera and speeding between cameras doesn't help — system measures average.",
			},
			{
				id: 6,
				question: 'When should I avoid regional Australia driving?',
				answer: 'Dawn and dusk — specifically the 2 hours after sunset and the hour before sunrise — are when kangaroos, wombats, and other wildlife are most active on regional roads. Local advice across Queensland, NSW, Victoria, South Australia, and Western Australia is consistent: avoid regional roads during these windows if possible. If you must drive, reduce speed significantly and use high beams where there\'s no oncoming traffic. Brake, don\'t swerve — swerving takes the vehicle off the road, which causes more harm than the collision.',
			},
			{
				id: 7,
				question: 'Can I drive in Australia on a Working Holiday Visa?',
				answer: 'Yes. Working Holiday Visa (subclass 417 or 462) holders are considered temporary residents rather than tourists. The licence validity rules are the same — an English-language overseas licence is valid — but state-level rules on conversion timelines may apply differently than for short-stay tourists. Verify with the transport authority in the specific state you\'ll be based in.',
			},
			{
				id: 8,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a private multilingual translation document presenting your UK licence details in English, French, Spanish, German, Italian, Portuguese, Arabic, Russian and 3 other widely-spoken languages from the 1949 Geneva Convention set — used alongside your licence, not as a government-format permit booklet. For Australia, where English-language UK photocard licences are accepted without an IDP, IDP Companion covers paper-licence holders and trip-extenders to UAE, Thailand, or Egypt where translation documentation is legally required.',
			},
			{
				id: 9,
				question: 'Does IDP Companion help if my UK licence is lost in Australia?',
				answer: "If your physical UK licence is lost, you'll need to contact the DVLA for a replacement. IDP Companion provides a reference document showing your licence details — useful for communicating with rental agencies or police while you wait for the replacement. It is not a substitute for the physical licence as far as Australian authorities are concerned, which require the original physical document.",
			},
			{
				id: 10,
				question: 'Can I combine Australia with other destinations on the same trip?',
				answer: 'Yes — UK travellers regularly combine Australia with stopovers in UAE (Dubai, Abu Dhabi), Thailand (Bangkok), or Singapore. UAE Abu Dhabi rentals frequently require translation documentation; Thailand legally requires an IDP for foreign tourist drivers under the 1949 Geneva Convention. IDP Companion covers all these in one purchase. Validity tied to your domestic UK licence — choose 1, 3, or 5 years.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other English-language self-drive destinations UK travellers cluster with Australia — New Zealand, US road-trip states, South Africa.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand/' },
			{ flagFrom: 'gb', flagTo: 'ae', label: 'UK → UAE', status: 'Live', href: '/idp-for-uk-drivers-in-uae/' },
			{ flagFrom: 'gb', flagTo: 'cy', label: 'UK → Cyprus', status: 'Live', href: '/idp-for-uk-drivers-in-cyprus/' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco/' },
			{ flagFrom: 'au', flagTo: 'th', label: 'Australia → Thailand', status: 'Coming soon' },
			{ flagFrom: 'au', flagTo: 'id', label: 'Australia → Indonesia', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including English, French, Spanish, Arabic, Russian and 6 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real UK licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers Australia plus UAE, Thailand, Egypt, Spain, Portugal and any other destination during the chosen period. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with Transport for NSW, VicRoads, Queensland Transport and Main Roads, or the Australian Automobile Association (AAA). IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office). IDP Companion must be used alongside your original UK driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Transport for NSW — overseas licence rules 2026 (transport.nsw.gov.au)',
			'VicRoads — international licence requirements (vicroads.vic.gov.au)',
			'Queensland Transport and Main Roads (tmr.qld.gov.au)',
			'Fines Victoria — mobile phone and speeding penalties 2026',
			'NSW Roads and Maritime Services — fine schedule 2026',
			'GOV.UK — Driving in Australia (gov.uk/foreign-travel-advice/australia, last updated 2025)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Australia',
	},
};

export const ukAustraliaCopy: Record<'en', CountryPairCopy> = { en };
