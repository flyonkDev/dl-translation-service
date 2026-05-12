/**
 * Country-pair content: United States → Australia.
 * Tier 2. Locales: en only (US-origin default).
 *
 * Killer angles for Australia (what differentiates from sibling pages):
 *  - LEGAL FLOOR vs RENTAL FLOOR mismatch: US license is legally sufficient
 *    everywhere in Australia for tourist driving (typically up to 3 months),
 *    but rental-counter policy at peak Wet-Season Cairns / Darwin / Alice
 *    Springs can still ask for an IDP — refusal = peak-rate rebook.
 *  - NSW handheld-phone enforcement at AUD $410 + 5 demerit points is one of
 *    the most aggressively camera-enforced offences globally.
 *  - Left-hand traffic + roundabouts + 5pm-dawn kangaroo strike risk = the
 *    three non-paperwork things US drivers actually need to prepare for.
 *
 * SEO add-ons present: tldr, phrases (UK/Aussie English distinctions),
 * howTo, lastReviewed.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Australia: 2026 Guide',
		description:
			'Renting in Sydney or Cairns? Your US license is legal for tourists — but rental desks at Cairns and Darwin still ask for an IDP at peak season. IDP Companion in 2 min, $35.',
		ogTitleShort: 'US → Australia: IDP Companion 2026',
		ogSubtitle: 'The law says one thing — the Cairns Hertz desk asks for another',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Australia',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Australia · 2026 Guide',
		title: 'IDP for US Drivers in Australia: The Cairns Wet-Season Rental Gap',
		lead: "You've booked a 4WD pickup at Cairns Airport in January for a two-week loop up to Cape Tribulation. Your New Jersey license is in English and you'll be in Queensland under 90 days — that meets the state's tourist-driving rules cleanly. What the reservation page leaves out: peak Wet-Season rental-counter policy at Cairns, Darwin, and Alice Springs can still ask for an International Driving Permit. A refused pickup means a same-day rebook at peak rates (AUD $400+ vs your AUD $200 advance) and an awkward call back to the US. NSW separately enforces AUD $410 for handheld phone use, Queensland is in the same range, and the cameras don't care that you're a tourist. The legal floor in Australia and the rental-counter floor at Cairns are not the same floor.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — but rental counters in remote-area airports still ask',
		text: "Every Australian state and territory recognises a valid US driver's license for short-term visitors because the license is issued in English. Queensland's Department of Transport and Main Roads, Transport for NSW, VicRoads, and the equivalent agencies each allow tourist driving for the first 3 months of your stay. After that, residents must convert. Tourists do not need to. The friction isn't the law — it's the rental contract.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Australia',
		lead: "For a US tourist in Australia, the legally required document is your original US license. IDP Companion is a separate multilingual translation companion — useful where rental policy at remote airports or peak-season turnaround favours a second document.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Australia',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Legally accepted for tourist driving in every Australian state and territory, typically up to 3 months. Issued in English, so no translation is required by Australian law. Smooth at most major-city airport pickups.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual digital PDF presenting your US license data in 12 languages including English, French, Spanish, German, Italian, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese, and Thai. Hands rental-desk agents at Cairns, Darwin, and Alice Springs a familiar second document. Backup for remote police checks and insurance claims.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What you should carry alongside IDP Companion in the vehicle: your original physical US driver's license, your US passport, your rental contract, and proof of insurance. IDP Companion sits with these, not in place of any of them.",
	},

	whyNotEnough: {
		heading: 'Why your US license alone is sometimes not enough',
		lead: "For most US tourists in Australia, your license alone is enough legally. The friction shows up at the rental counter and at remote-area police checks.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Sixt, Europcar, Budget, and Apex each set their own internal pickup-verification policy. Several international-chain branches in Australia — particularly at Cairns, Darwin, and Alice Springs during peak Wet-Season turnaround — list an IDP as a recommended document for non-Australian renters even when state law doesn't require one. A desk agent following internal policy can put a hold on the pickup, ask for additional ID, or in worst cases refuse the contract. The legal answer (yes, drive) and the desk answer (where's your IDP) come from two different authorities.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The translation reason',
				text: "Your US license is in English, which Australia accepts. But it's also in a US state format — small print, state seals, abbreviations — that an outback police officer near Tennant Creek or a remote Tasmanian roadhouse cashier may not have seen before. IDP Companion presents your license data in a standardised multilingual layout that doesn't require parsing a New Jersey or Texas format. It's not a legal document — it's a translation aid that saves five minutes of explaining.",
			},
			{
				icon: 'ph:steering-wheel-bold',
				title: 'The reality reason',
				text: "Australia is enormous and the cars are not the cars you know. Picking up a Toyota HiLux 4WD in Cairns, you're expected to know which side of the road you're on (left), how roundabouts work (give way to vehicles already on the roundabout), what the speed limit defaults to on an unsigned rural sealed road (100 km/h in most states), and whether your insurance covers an unsealed track to Cape York (it usually doesn't). Clean, legible paperwork is one of the signals an agent uses to decide you're prepared.",
			},
		],
	},

	rules: {
		heading: 'Australian driving rules US drivers should know',
		lead: 'Australia drives on the LEFT — the single biggest adjustment for US visitors. Roundabouts and phone enforcement are the other two things that catch Americans.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Steering wheel on the right; reversal from the US' },
			{ icon: 'mdi:speedometer', label: 'Urban speed limit', value: '50 km/h', note: 'Default; school zones drop to 40 km/h during posted hours' },
			{ icon: 'mdi:road-variant', label: 'Rural sealed roads', value: '100 km/h', note: 'Most states; signed motorways 110 km/h; NT Stuart Hwy 130 km/h sections' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Fully licensed; 0.00% for learners and provisional (P-plate) drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Hands-free / cradle-mounted only; cameras enforce in NSW & VIC' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'All seats mandatory', note: 'Driver liable for unbelted passengers; child seats required' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'Not permitted', note: 'Different from US — treat all reds as full stops in all directions' },
			{ icon: 'ph:arrow-clockwise-bold', label: 'Roundabouts', value: 'Give way to right', note: 'Yield to vehicles already on the roundabout; always indicate when exiting' },
		],
	},

	fines: {
		heading: '2026 fines and camera-enforced penalties in Australia',
		lead: "State fines are reviewed annually and published by each state government. Figures below reflect recent NSW, VIC, and QLD published schedules — confirm against the current Transport for NSW, VicRoads, or Queensland Department of Transport and Main Roads schedules at time of travel.",
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (less than 10 km/h over)', amount: 'AUD ~$130+', severity: 'low', note: 'Camera-enforced, especially around Sydney, Melbourne, and the Pacific Highway' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (20–30 km/h over)', amount: 'AUD ~$700+ + 4 demerits', severity: 'med', note: 'Loss-of-license risk on demerit-equivalent schemes' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'AUD ~$450+ + 3 demerits', severity: 'med', note: 'Camera-enforced in all capital cities' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'AUD ~$410 + 5 demerits (NSW)', severity: 'high', note: 'One of the most aggressively camera-enforced offences in Australia' },
			{ icon: 'mdi:seatbelt', label: 'Failure to wear seatbelt', amount: 'AUD ~$350+ per occupant', severity: 'med', note: 'Driver liable for all unbelted passengers' },
			{ icon: 'mdi:beer-outline', label: 'Drink driving (mid-range 0.08–0.149%)', amount: 'AUD ~$2,200+', severity: 'high', note: 'Immediate disqualification; random breath testing is routine' },
			{ icon: 'ph:warning-bold', label: 'Unsealed-road damage on standard rental', amount: 'Full damage liability', severity: 'high', note: 'Most standard contracts exclude unsealed-road damage from cover' },
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP (US tourist, in-window)', amount: 'Not applicable', severity: 'low', note: "Australia doesn't require IDP from English-language license holders for short-term tourism" },
		],
		caption: 'Sources: Transport for NSW penalty schedules; Queensland Department of Transport and Main Roads; VicRoads. Verify the current figure before travel.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Australia — honestly',
		lead: "We don't pretend to be something we're not. Here's the breakdown.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A privately-issued multilingual PDF that translates your US license data into 12 languages used at rental desks and checkpoints worldwide',
				'A standardised layout that\'s easier for a non-US agent to read than a state-specific license format',
				'An instant digital download — typically under 2 minutes from order to delivered PDF',
				'Available in 1-year, 3-year, and 5-year plans at $35 / $45 / $55',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical US driver\'s license',
				'Not required by Australian law for tourist driving on a US English-language license',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Australia',
			items: [
				'At rental desks where internal policy asks for an IDP even when state law doesn\'t require one (notably Cairns, Darwin, Alice Springs, and some Perth branches during peak season)',
				'At remote-area police checkpoints where an officer wants a clearer reference document than a US state license format',
				'For insurance and accident-report paperwork where a multilingual translation simplifies the claim',
				'As a backup if your physical license is lost or temporarily separated from you',
			],
		},
		needOfficial: {
			title: 'What Australian law actually expects',
			items: [
				'Your original physical US driver\'s license — the legal authority to drive',
				'Your US passport — officers may ask to verify identity',
				'Your rental agreement and proof of insurance — in the vehicle, not in the hotel safe',
				'For specific vehicles: relevant condition or endorsement (truck, motorcycle, towed trailer over 750 kg)',
			],
		},
		pattern: "The pattern: in Australia, your US license is the legal floor. IDP Companion is the rental-desk smoother on top — most useful at Cairns, Darwin, and Alice Springs at peak Wet-Season turnaround, where a refused pickup can mean a same-day rebook at AUD $400+ vs your AUD $200 advance rate.",
	},

	renting: {
		heading: 'Renting a car in Australia as a US driver',
		lead: "Australia's rental market is dominated by international chains plus a few strong local players. Policies for US tourists are similar but not identical across branches.",
		chains: [
			{ name: 'Hertz Australia', policy: 'Operates at every major airport and many city locations. Accepts US driver\'s licenses for tourist rentals. Internal policy at some Far North Queensland and Northern Territory branches recommends an IDP for non-resident renters — not a hard requirement at most locations but a friction point at peak season.' },
			{ name: 'Avis Australia', policy: 'Wide network including remote and regional locations. Accepts a US license in English. Some branches request an IDP at pickup as a verification document. Avis Australia also operates Budget under the same corporate group.' },
			{ name: 'Sixt Australia', policy: 'Premium and 4WD-heavy fleet, strong presence at Sydney, Melbourne, Brisbane, and Cairns airports. Generally accepts US licenses. Documentation requirements are tighter for premium-class vehicles.' },
			{ name: 'Apex Car Rentals', policy: 'Australian-owned, popular for budget rentals and longer self-drive trips, especially in Queensland and Tasmania. Accepts US licenses. Independent operator — terms vary by branch.' },
		],
		tipsHeading: 'Practical tips for renting in Australia',
		tips: [
			'Pick up at the airport, not in the city — airport branches handle international tourists daily and turn over faster',
			'4WD if your route includes any unsealed roads — Cape Tribulation, Fraser Island ferry crossings, Outback tracks all exclude standard insurance',
			'Tolls are automatic in Sydney, Melbourne, and Brisbane — rental cars carry e-tags and bill your card with a processing fee',
			'Wildlife is a real risk at dawn and dusk — kangaroos and wombats cause serious crashes; avoid rural roads between 5pm and dawn where possible',
			'Distances are huge — Sydney to Melbourne is 9 hours, Adelaide to Perth is 28 hours; plan fuel and rest stops the day before',
			'Australia uses petrol (ULP91/95/98) and diesel — no "regular/premium" naming; diesel pumps are usually black',
			'Insurance excess can be high (AUD $3,000–5,000); excess-reduction add-ons are commonly offered',
		],
	},

	outcomes: {
		heading: 'What actually happens to US drivers in Australia',
		lead: 'Possible outcomes when you arrive at the rental desk or are stopped on the road — from best to worst, by rough frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'most common',
				label: 'Desk agent accepts US license, you drive away in 15 minutes',
				text: 'The legal default at all major airports. No IDP discussion. This is the typical Sydney, Melbourne, Brisbane airport pickup.',
			},
			{
				severity: 'low',
				frequency: 'common at Cairns / NT / remote branches',
				label: 'Desk agent asks for IDP, you produce IDP Companion, contract proceeds',
				text: 'Five extra minutes of paperwork verification, no further issue. Especially common at peak Wet-Season turnaround at Cairns.',
			},
			{
				severity: 'med',
				frequency: 'occasional',
				label: "Desk asks for an IDP, you don't have one — manager approves with surcharge",
				text: 'Pickup proceeds but at a higher rate or with a larger card hold. Walk-in alternative pricing typically runs 30–50% over reserved rates.',
			},
			{
				severity: 'high',
				frequency: 'rare',
				label: 'Desk refuses pickup, you rebook with a competitor at peak rates',
				text: 'A bad outcome at peak season — competing branches at the same airport may also ask for an IDP. Same-day rebook at AUD $400+ vs your AUD $200 advance rate.',
			},
			{
				severity: 'high',
				frequency: 'very rare',
				label: 'Police stop in remote area, paperwork unclear, escalates',
				text: 'Outback and remote-Tasmania officers may detain you for paperwork verification. Rare but real — a multilingual translation document shortens the conversation.',
			},
		],
		math: 'IDP Companion is $35. The difference between a $400 same-day rebook at Cairns in January and a $200 advance rate is the math even if the friction case happens 1 in 10 pickups.',
	},

	phrases: {
		heading: 'Aussie English distinctions US drivers should recognise',
		lead: 'You won\'t need translation — Australians speak English. But several driving-specific terms differ from US English, and getting them wrong slows down rental and roadside interactions.',
		items: [
			{ phrase: 'Petrol', translation: 'Gas / gasoline', context: 'Service stations sell petrol and diesel. "Gas" in Australia means LPG cooking gas.' },
			{ phrase: 'Servo', translation: 'Gas station / convenience store', context: 'Common colloquial — "the next servo is 80 ks up the road"' },
			{ phrase: 'Bonnet', translation: 'Hood', context: 'The thing that opens to reveal the engine. "Pop the bonnet."' },
			{ phrase: 'Boot', translation: 'Trunk', context: 'The cargo compartment. Rental agent will ask you to "check the boot."' },
			{ phrase: 'Indicator', translation: 'Turn signal / blinker', context: '"Indicate before you exit the roundabout" — common roundabout instruction.' },
			{ phrase: 'Give way', translation: 'Yield', context: 'On signs and at junctions. Triangular yellow-and-white sign = give way to traffic on the priority road.' },
			{ phrase: 'Roo', translation: 'Kangaroo', context: '"Roo strike" is a documented insurance claim category. Avoid dusk-to-dawn rural driving.' },
			{ phrase: 'Esky / Eskie', translation: 'Cooler / ice chest', context: 'The thing you put in the boot for a road trip. Common Aussie loanword.' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Australia (US citizens)',
		lead: 'Australia is one of the easier major destinations for US drivers — same general legal framework, English everywhere, well-marked roads. The preparation is short.',
		schemaName: 'How to prepare for driving in Australia as a US citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US license is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired licenses are not accepted at Australian rental desks. Australian state law accepts any valid US state license written in English for tourist driving up to 3 months.',
			},
			{
				title: 'Order IDP Companion',
				text: 'Two minutes online, PDF delivered to your email. $35 for 1 year. Covers the rental-counter friction at Cairns, Darwin, Alice Springs, and remote Tasmanian branches where internal policy asks for an IDP even when state law doesn\'t require one.',
			},
			{
				title: "Check your destination state's tourist driving window",
				text: 'All Australian states and territories allow at least 3 months of tourist driving on a foreign English-language license, but the precise rules differ slightly between NSW, VIC, QLD, WA, SA, TAS, NT, and ACT. Confirm via Transport for NSW or your destination state\'s transport agency website.',
			},
			{
				title: 'Download offline maps for your route',
				text: 'Google Maps offline or Maps.me. Mobile coverage is patchy outside cities — particularly in the Northern Territory, outback South Australia, and remote Tasmania. Print a paper backup for the longest legs.',
			},
			{
				title: 'Carry your passport and rental contract in the vehicle',
				text: 'Original US license + US passport + rental contract + IDP Companion = full documentation for every Australian checkpoint and rental-desk scenario.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Australia as a US tourist?',
				answer: 'No. Every Australian state and territory accepts a valid US driver\'s license issued in English for tourist driving, typically for up to 3 months of your stay. Australia is party to the 1949 Geneva Convention, which provides for an IDP — but the IDP is not legally required from US license holders because the US license is already in English.',
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes. Rental companies set their own internal verification policy, separate from state law. Some branches — especially in Far North Queensland, the Northern Territory, and remote Tasmania at peak season — have internal policies that ask for an IDP at pickup. If a branch refuses, you may need to rebook with another company at last-minute peak rates.',
			},
			{
				id: 3,
				question: 'How long can I drive in Australia on my US license?',
				answer: 'Tourist time-windows vary by state — most allow 3 months of driving from the date you enter Australia. If you become a resident or stay longer (work visa, student visa, holiday-extension), you must convert to a state-issued license. The 3-month rule applies to short-term visitors only.',
			},
			{
				id: 4,
				question: 'What side of the road do they drive on?',
				answer: 'Left. The driver\'s seat is on the right side of the car. This is the single biggest adjustment for US drivers — practice in a quiet car park area before taking the highway. Most drivers adapt within the first hour.',
			},
			{
				id: 5,
				question: 'Can I drive on unsealed roads with my rental?',
				answer: 'Depends on the rental company and vehicle class. Most standard rentals exclude unsealed-road damage from insurance — including Cape Tribulation, Fraser Island, and many Outback tracks. If your route includes any unsealed sections, hire a 4WD with appropriate insurance, or check the contract carefully.',
			},
			{
				id: 6,
				question: 'Are speed cameras everywhere?',
				answer: 'Yes — particularly around Sydney, Melbourne, and the Pacific Highway. NSW also operates mobile speed-camera vehicles in unmarked positions. Speeding fines start around AUD $130 for the lightest tier (less than 10 km/h over) and escalate quickly. Phone-use cameras are the other heavily-enforced category.',
			},
			{
				id: 7,
				question: 'What if I drive into the Outback or remote areas?',
				answer: 'Have a paper map as a backup, carry extra water and fuel, and let someone know your route. Mobile coverage in remote Australia is patchy — sometimes hundreds of kilometres between coverage zones. Police checkpoints in remote areas may verify paperwork more thoroughly, which is where a multilingual translation document shortens the conversation.',
			},
			{
				id: 8,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document. It is not issued under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your original US license to make rental-desk and remote-area checkpoint friction easier — not as a replacement for the legal authority your US license already carries.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to destinations where the IDP question varies.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico' },
			{ flagFrom: 'gb', flagTo: 'au', label: 'UK → Australia', status: 'Live', href: '/idp-for-uk-drivers-in-australia' },
			{ flagFrom: 'us', flagTo: 'nz', label: 'US → New Zealand', status: 'Coming soon' },
			{ flagFrom: 'us', flagTo: 'gb', label: 'US → United Kingdom', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Cover the rental-desk gap before you fly',
		text: "If your Australia trip includes a rental pickup at Cairns, Darwin, or Alice Springs at peak season, the cost of a refused contract is far higher than the cost of having IDP Companion ready in your inbox. Two minutes online, $35, covers every Australian rental desk where internal policy asks for a second document.",
		button: 'Get IDP Companion',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with Transport for NSW, the Department of Transport and Main Roads (Queensland), VicRoads, the Department of Transport (WA), or any other Australian state or territory transport agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorized issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's license.",
		sourcesHeading: 'Sources',
		sources: [
			'Transport for NSW — Driving in NSW on a foreign licence — nsw.gov.au/driving-boating-and-transport',
			'Queensland Department of Transport and Main Roads — Visitors driving in Queensland — tmr.qld.gov.au',
			'VicRoads — Driving on an overseas licence — vicroads.vic.gov.au',
			'Austroads — National framework for foreign licence recognition — austroads.com.au',
			'US Embassy in Canberra — Driving in Australia advisory — au.usembassy.gov',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Australia',
	},
};

export const usAustraliaCopy: Record<'en', CountryPairCopy> = { en };
