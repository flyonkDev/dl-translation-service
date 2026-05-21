/**
 * Country-pair content: United States → Sri Lanka.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Sri Lanka is one of the few destinations in the catalogue
 * where IDP Companion plus a US licence plus even a home-issued Geneva
 * 1949 IDP is still not sufficient to drive legally. Sri Lankan road
 * traffic law administered by the Department of Motor Traffic requires
 * foreign drivers to hold either a DMT Temporary Driving Permit issued
 * locally in Werahera (south of Colombo) OR a Geneva 1949 IDP that has
 * been endorsed by the Automobile Association of Ceylon (AAC) at their
 * Colombo 3 office. Either process takes a morning and costs a modest
 * LKR fee. This is the unusual "legal recognition is conditional on
 * local endorsement" pattern that catches almost every US tourist who
 * arrived planning to self-drive on a home-issued IDP alone.
 *
 * Distinctive content: AAC endorsement vs DMT permit decision (AAC if
 * you brought a Geneva 1949 IDP from home, DMT if you did not);
 * driver-with-car alternative at $50–80/day that removes the licensing
 * question entirely and often costs less end-to-end than self-drive
 * with insurance; left-side driving (UK colonial inheritance) — the
 * day-one adjustment for US drivers from right-side habits; hill country
 * route timing (Kandy → Nuwara Eliya → Ella is 200 km but takes 6–8
 * hours); SW monsoon (May–September) affects west / south / hill country;
 * NE monsoon (October–January) affects east / north; tuk-tuks, buses,
 * cattle, dogs, occasionally elephants on rural roads.
 *
 * MIDDLE-PIVOT COMPLIANCE: AAA and AATA mentioned ONLY in legal
 * disclaimer (single-sentence factual disclosure of US Geneva 1949 IDP
 * issuers, with the additional binding context that any such IDP must
 * be separately endorsed by the AAC in Colombo before use in Sri Lanka
 * — this is honest legal disclosure of Sri Lankan law, not a competitor
 * recommendation). The AAC and DMT are Sri Lankan government and
 * Sri Lankan motoring-association bodies respectively, not IDP-issuer
 * competitors to IDP Companion — naming them is factual disclosure of
 * Sri Lankan legal requirements, the same way naming Statens vegvesen
 * in us-norway is factual disclosure of Norwegian licensing authority.
 *
 * PDF LANGUAGE COMPLIANCE: All 12 verified languages enumerated in TLDR
 * row and final CTA. English IS on the template (verified). Sinhala and
 * Tamil (Sri Lanka's two official languages) are NOT on the template —
 * but English is the working-language route at every tourist-corridor
 * interaction (Bandaranaike airport, AAC office in Colombo 3, DMT
 * Werahera, hotel concierges and most rental counters in Colombo).
 * Rural-route Sinhala / Tamil signage exists but does not gate any
 * tourist-driving documentation interaction.
 *
 * HONESTY ABOUT NARROWEST-FIT: Sri Lanka is the narrowest fit for IDP
 * Companion in the whole catalogue — the legal floor is the AAC stamp
 * or DMT permit, not any home-issued document. IDP Companion sits as
 * supplemental multilingual translation on top of the locally-required
 * paperwork; it does not substitute for it. The original brief opened
 * honesty.lead with "We want to be direct about that." — that phrasing
 * is BANNED per CLAUDE.md anti-AI rule. Rewritten without banned phrasing.
 * Same fix for "in this guide" self-reference in original hero.
 *
 * SEO add-ons present: tldr, howTo, phrases (Sri Lankan English /
 * Sinhala 8 items — light contextual), lastReviewed. NO lez (no LEZ
 * framework). NO alphabet (mixed Sinhala/Tamil/English on signs — but
 * does not gate any tourist-driving documentation). NO rejects (Sri
 * Lanka accepts Geneva 1949 IDPs subject to AAC endorsement — no
 * convention-mismatch rejection).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Sri Lanka: 2026 AAC/DMT Guide',
		description:
			'Driving the cultural triangle or hill country? Sri Lanka requires foreign drivers to hold a DMT Temporary Driving Permit or an AAC-endorsed Geneva 1949 IDP. A US license alone is not accepted. Honest 2026 guide including the driver-with-car alternative.',
		ogTitleShort: 'US Drivers in Sri Lanka: AAC or DMT First',
		ogSubtitle: 'AAC endorsement or DMT permit required; driver-with-car often the better call.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Sri Lanka',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Sri Lanka · 2026 Guide',
		title: 'Driving Sri Lanka on a US License: The AAC Stamp or DMT Permit First',
		lead: 'Sri Lanka is one of the unusual destinations where a US licence plus a home-issued Geneva 1949 IDP plus IDP Companion is still not sufficient to drive legally. The Department of Motor Traffic requires foreign drivers to either obtain a Temporary Driving Permit at their Werahera office south of Colombo (~LKR 2,500–3,500, a morning of bureaucracy) or have a Geneva 1949 IDP endorsed at the Automobile Association of Ceylon office in Colombo 3 (~LKR 1,500–2,500, also a morning). Without one of those two local stamps, the rental contract you signed at Bandaranaike is not enforceable, your insurance is void, and a Kandy-district police stop can become a real problem. For many US travellers, hiring a driver-with-car at $50–80/day removes the entire licensing question and often costs less end-to-end than self-drive with full insurance — worth running the numbers before flying.',
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — and conditional on local AAC endorsement or DMT permit',
		text: 'Sri Lankan road traffic law requires foreign drivers to hold either a Department of Motor Traffic (DMT) Temporary Driving Permit issued in Werahera south of Colombo, OR a Geneva 1949 International Driving Permit endorsed by the Automobile Association of Ceylon (AAC) at their Colombo 3 office. Both processes typically take a morning and cost a modest LKR fee. Sri Lanka is party to the 1949 Geneva Convention, but recognition is conditional on the local endorsement step — a bare Geneva 1949 IDP from a US issuer, without the AAC stamp, is not sufficient. For many US travellers, hiring a driver-with-car at $50–80/day is the simpler and often cheaper alternative to self-drive with mandatory local insurance.',
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Sri Lanka',
		lead: 'Sri Lanka has the narrowest IDP Companion fit in the catalogue: the legal floor is the DMT Temporary Driving Permit or the AAC-endorsed Geneva 1949 IDP, both of which are locally-issued Sri Lankan documents that IDP Companion does not substitute for. IDP Companion serves as supplemental multilingual translation on top of the locally-required paperwork — useful at police stops and rental counters once the AAC stamp or DMT permit is in hand.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Sri Lanka',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Not accepted for driving in Sri Lanka without local endorsement. Insufficient even alongside a Geneva 1949 IDP from a US issuer if the IDP has not been AAC-endorsed in Colombo. The rental contract requires "valid Sri Lankan-recognised licence," which a bare US licence is not.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license + AAC stamp or DMT permit',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. In Sri Lanka, the English version is the working-language route at every Bandaranaike airport interaction, AAC and DMT office staff conversation, hotel concierge and tourist-corridor police stop. IDP Companion is the translation layer; the AAC stamp or DMT permit is the legal layer.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'The legal floor in Sri Lanka is the DMT Temporary Driving Permit OR an AAC-endorsed Geneva 1949 IDP — both are locally-issued Sri Lankan documents obtained in Colombo after arrival. IDP Companion sits as supplemental translation on top, not in place of. Many US travellers find that hiring a driver-with-car ($50–80/day, often inclusive of driver accommodation and meals) is the simpler and often cheaper end-to-end alternative to self-drive with full insurance.',
	},

	whyNotEnough: {
		heading: 'Why a US licence alone is a legal problem in Sri Lanka, not just a friction problem',
		lead: 'For Sri Lanka the question is not "the law is settled but rental desks add friction" — the question is the law itself. Sri Lankan road traffic law administered by the Department of Motor Traffic requires foreign drivers to hold local authorisation. The two paths and the operational reality below.',
		reasons: [
			{
				icon: 'mdi:scale-balance',
				title: 'The DMT Temporary Driving Permit path',
				text: 'Issued directly to visitors at the DMT main office in Werahera, south of Colombo. Cost is approximately LKR 2,500–3,500. Process takes a morning. Required documents: passport, original US licence, two passport photos, fee. The permit is issued the same day and is valid for the duration of a short-term tourist stay. This is the direct route for US visitors who arrive in Sri Lanka without a Geneva 1949 IDP from home.',
			},
			{
				icon: 'ph:certificate-bold',
				title: 'The AAC endorsement of a home-issued Geneva 1949 IDP path',
				text: 'For US visitors who arrive with a Geneva 1949 IDP issued in the US. The Automobile Association of Ceylon at Sir Mohamed Macan Markar Mawatha in Colombo 3 endorses the IDP for use in Sri Lanka. Cost is approximately LKR 1,500–2,500. Process takes a morning. Required documents: passport, original IDP, two passport photos, fee. This route is faster only if you already brought a Geneva 1949 IDP from home; if you did not, the DMT permit route at Werahera is the direct path.',
			},
			{
				icon: 'ph:car-bold',
				title: 'The driver-with-car alternative that removes the licensing question',
				text: 'Many US travellers conclude that hiring a driver-with-car at $50–80/day USD is the simpler and often cheaper end-to-end alternative to self-drive with mandatory local insurance. Daily rates often include the driver\'s accommodation and meals. The driver handles tuk-tuk behaviour, bus overtakes, hill-country switchbacks (Kandy → Nuwara Eliya → Ella), monsoon flood patterns and police interactions. Available through hotels or established providers (Mahaweli Tours, Lotus Tours, Galle Road operators). For most cultural-triangle and hill-country itineraries this is the path that produces the cleanest trip.',
			},
		],
	},

	rules: {
		heading: 'Sri Lankan driving rules US drivers should know',
		lead: 'Left-side driving — inherited from the British colonial period and the full reversal from US right-side habits, the day-one adjustment that compounds with the unfamiliar AAC / DMT documentation process. The framework is administered by the Department of Motor Traffic and enforced by Sri Lanka Police; tuk-tuks, buses and informal lane discipline define what defensive driving means in country.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'OPPOSITE to US — inherited from British colonial period; the day-one adjustment that compounds with AAC / DMT process' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h (NOT mph)', note: 'Sri Lanka is metric — speed signs in km/h not mph' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '70 km/h', note: 'Hill country (Kandy → Nuwara Eliya → Ella) effective speed much lower due to switchbacks' },
			{ icon: 'mdi:speedometer-medium', label: 'Expressways', value: '100 km/h on E01 / E02 / E03', note: 'The new motorway network; camera-enforced' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.08% BAC', note: 'Random breath testing operates, especially on tourist corridors and weekend evenings' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Enforcement varies by district; Colombo central enforces it' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Front mandatory', note: 'Rear-seat enforcement variable; carry the discipline anyway' },
			{ icon: 'ph:warning-bold', label: 'Tuk-tuks, buses, rural animals', value: 'Defensive driving essential', note: 'Tuk-tuks weave; buses overtake aggressively on blind corners; cattle, dogs, occasionally elephants on rural roads' },
		],
	},

	fines: {
		heading: '2026 Sri Lankan fines for common violations',
		lead: 'The single highest-stake fines item for US visitors in Sri Lanka is the AAC / DMT documentation check — driving without one of the two locally-required permits is treated as driving without authorisation and triggers vehicle detention plus rental contract termination on top of any cash fine. The Motor Traffic Act schedule below covers the rest at officer discretion within published ranges; speed-camera enforcement on the new E01 / E02 / E03 expressway network is the second-most-relevant exposure for tourist routes.',
		colViolation: 'Violation',
		colAmount: 'Fine (LKR)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:scale-balance', label: 'Driving without DMT permit or AAC-endorsed IDP', amount: 'LKR 5,000+ and possible vehicle detention + rental contract termination', note: 'The central enforcement question for foreign drivers; rental insurance void at any incident', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding (over posted limit)', amount: 'LKR 3,000+', note: 'Camera enforcement on expressways; manual enforcement on rural routes', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'LKR 3,000+', note: 'More common in Colombo central', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'LKR 1,000+', note: 'Variable enforcement', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'Failure to wear seatbelt (front)', amount: 'LKR 1,000+', note: 'Driver liable', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'Drink driving (above 0.08% BAC)', amount: 'LKR 25,000+ and possible imprisonment', note: 'Criminal offence; foreign drivers face deportation in serious cases', severity: 'high' },
			{ icon: 'ph:siren-bold', label: 'Reckless driving', amount: 'LKR 5,000–25,000 + possible court summons', note: 'Discretionary; often invoked at fatal-accident scenes', severity: 'high' },
		],
		caption: 'Sources: Department of Motor Traffic (DMT) Sri Lanka publications (dmt.gov.lk); Sri Lanka Police road traffic enforcement notices (police.lk); UK FCDO and US Department of State Sri Lanka travel advisories.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Sri Lanka — narrowest fit in the catalogue',
		lead: 'IDP Companion does not substitute for the AAC stamp or the DMT permit — those are the legal floor for self-driving in Sri Lanka and they are locally-issued Sri Lankan documents that no home-side paperwork (a US licence, a US-issued Geneva 1949 IDP, or IDP Companion) replaces. What IDP Companion does is supplemental multilingual English translation that sits on top of the locally-required paperwork; the work it does is at police stops in Kandy district and rental counters in Colombo once the AAC stamp or DMT permit is already in hand.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your US licence data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Sri Lanka, the English version on the document is the working-language route at every tourist-corridor interaction (Bandaranaike airport, AAC office in Colombo 3, DMT Werahera, hotel concierges, most rental counters in Colombo)',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not an AAC-endorsed IDP — the AAC endorsement is a separate, local process completed in Colombo 3 at the Automobile Association of Ceylon office',
				'Not a DMT Temporary Driving Permit — the DMT permit is issued directly by the Sri Lankan government at the Werahera office south of Colombo',
				'Not a replacement for your original US driver\'s licence',
				'Not, on its own, sufficient to drive legally in Sri Lanka — the AAC stamp or DMT permit is the legal floor',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Sri Lanka (once the legal floor is in place)',
			items: [
				'At police stops where multilingual English translation of licence data speeds up the document check alongside the AAC-endorsed IDP or DMT permit',
				'At rental counters in Colombo as supplemental translation alongside the legally-required local paperwork',
				'For accident-report and insurance paperwork where multilingual translation simplifies the cross-border claim conversation',
				'As a re-printable backup from any hotel if your physical licence is lost during a multi-stop trip through the cultural triangle or south coast',
				'For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Sri Lanka plus Asian and European destinations on the same plan',
			],
		},
		needOfficial: {
			title: 'Documents Sri Lankan law actually cares about at a checkpoint or rental counter',
			items: [
				'Your physical US driver\'s licence — required as the underlying licence for AAC endorsement or DMT permit',
				'Either a DMT Temporary Driving Permit (from Werahera) OR a Geneva 1949 IDP endorsed by the AAC (from Colombo 3) — the legal floor for foreign self-drivers',
				'Your US passport with valid Sri Lankan visa or Electronic Travel Authorisation (ETA) — verifies tourist status',
				'Your rental agreement and proof of valid local insurance',
				'For specific situations: any motorcycle endorsement on the US licence if renting a scooter for short coastal trips',
			],
		},
		pattern:
			'Sri Lanka is one of the few destinations where IDP Companion alone, even alongside a US licence and a home-issued Geneva 1949 IDP, is not enough to drive legally. The AAC stamp or DMT permit comes first and is the gate; IDP Companion is the translation layer that sits on top after the gate has been passed. The honest alternative for many US travellers is the driver-with-car path at $50–80/day, which removes the licensing question entirely and often costs less end-to-end than self-drive with mandatory local insurance.',
	},

	renting: {
		heading: 'Renting a car in Sri Lanka — plus the driver-with-car alternative most US travellers should consider',
		lead: 'Sri Lanka\'s self-drive rental market is small compared to international tourist destinations, and the AAC / DMT documentation gate plus the operational reality of tuk-tuk + bus + cattle + occasional-elephant traffic leads many US travellers to conclude that hiring a driver-with-car is the better option. Both paths are valid; the math below makes the comparison concrete.',
		chains: [
			{ name: 'Casons Rent A Car', policy: 'Established Sri Lankan operator with a national network. Requires AAC-endorsed IDP or DMT permit at pickup. Tends to be more reliable on contract clarity.' },
			{ name: 'Malkey Rent A Car', policy: 'Popular Sri Lankan-local operator. Same AAC / DMT documentation requirements at pickup.' },
			{ name: 'Avis Sri Lanka', policy: 'International chain presence smaller than in other markets. AAC-endorsed IDP or DMT permit required at pickup.' },
			{ name: 'Hertz Sri Lanka', policy: 'Limited Sri Lankan presence; check availability for your specific route and pickup location before booking.' },
			{ name: 'Mahaweli / Lotus / Galle Road driver-with-car providers', policy: 'Established Sri Lankan driver-with-car providers operating at $50–80/day USD inclusive of driver and often driver accommodation. Removes the AAC / DMT gate entirely; preferred path for many US travellers on cultural-triangle and hill-country itineraries.' },
		],
		tipsHeading: 'Practical tips for self-driving or driver-hire in Sri Lanka',
		tips: [
			'Get the AAC stamp or DMT permit first — this is the gate. Plan a full morning in Colombo for the process. The AAC office at Sir Mohamed Macan Markar Mawatha is faster if you already have a Geneva 1949 IDP from home; otherwise the DMT route at Werahera is the direct path. Bring two passport photos for whichever path you choose',
			'Run the driver-with-car math before flying — $50–80/day inclusive of driver and often accommodation; for a 10-day cultural-triangle trip that is $500–800 total, often cheaper end-to-end than self-drive with full Sri Lankan rental insurance ($40/day + $30/day insurance × 10 = $700)',
			'Defensive driving is the default if you self-drive — tuk-tuks weave through traffic; buses pass on blind corners; pedestrians cross without looking; cattle and dogs share rural roads; occasionally elephants in specific corridors (Yala, Udawalawe)',
			'Hill country is slow — Kandy to Nuwara Eliya to Ella is roughly 200 km but takes 6–8 hours by car. Plan accommodation around the route, not around mileage. Many travellers prefer the scenic Kandy–Ella train for the central stretch and drive only the connecting segments',
			'Monsoon awareness — Southwest monsoon (May–September) affects the west and south coasts and hill country; Northeast monsoon (October–January) affects the east and north. Flooding closes roads regularly during peak monsoon weeks',
			'Animal hazards beyond the obvious — cows, dogs, monkeys on rural roads; elephants in specific corridors (Yala, Udawalawe); slow down at dawn and dusk when animal movement is highest',
			'Petrol vs diesel — both available at major-town stations. Petrol stations sparse outside major towns — fill up in town before any rural leg',
			'Currency in small notes for fines — some discretionary on-the-spot fines may be requested in cash; carry small LKR notes for unavoidable interactions. Larger fines should be issued with proper documentation',
			'Yala / Udawalawe National Park interiors require a registered safari jeep and guide — self-driving is not permitted in park interiors. Park access roads are open to private vehicles but the wildlife-viewing routes themselves require local guide engagement',
			'No international overland driving from Sri Lanka — Sri Lanka is an island and there is no land border with India or any other country; ferry services to India are intermittent and do not cover passenger vehicles for tourist use',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for US drivers in Sri Lanka',
		lead: 'Outcomes for US travellers arriving with self-drive plans in Sri Lanka split into "the right path was taken" (AAC endorsement or DMT permit completed, or driver-with-car hired) and "the gate was skipped" (rental released on a US licence alone, contract clause voids insurance after any incident, police stop in Kandy district creates a real problem). The five most common cases below.',
		items: [
			{
				severity: 'low',
				frequency: 'The correct path',
				label: 'You complete AAC endorsement or DMT permit in one morning, drive away legally',
				text: 'Standard documented path. Morning in Colombo for the AAC office (if you brought a Geneva 1949 IDP from home) or the DMT Werahera office (if you did not). Rental pickup proceeds cleanly with the local permit; police stops on tourist routes verify the documentation in a few minutes and you continue.',
			},
			{
				severity: 'low',
				frequency: 'Very common for US travellers',
				label: 'You hire a driver-with-car instead, AAC / DMT step skipped entirely',
				text: 'Driver-with-car at $50–80/day USD; the driver handles licensing-side documentation, route navigation, tuk-tuk + bus dynamics, hill-country switchbacks, monsoon flood patterns and police interactions. Often cheaper end-to-end than self-drive with full insurance and removes the entire licensing question from the trip.',
			},
			{
				severity: 'med',
				frequency: 'Possible at less reputable operators',
				label: 'Rental company releases vehicle on a US licence alone, no AAC / DMT',
				text: 'A less reputable rental operator releases the vehicle on a bare US licence. The rental contract clause typically requires "valid Sri Lankan-recognised licence," which a bare US licence is not — after any incident the rental insurer voids damage cover and the full deductible falls on the renter. This is the silent risk path that many US travellers do not realise they are on.',
			},
			{
				severity: 'high',
				frequency: 'Real risk on tourist routes',
				label: 'Police stop in Kandy district or south coast with no AAC / DMT documentation',
				text: 'A Sri Lanka Police stop on a tourist corridor — Kandy district, the south coast around Galle / Mirissa / Tangalle, or the cultural-triangle access roads. Vehicle detention, fine LKR 5,000+, rental contract termination, possible morning at the local police station. The enforcement is real and increasing on tourist-route corridors.',
			},
			{
				severity: 'high',
				frequency: 'Rare but consequential',
				label: 'At-fault accident with missing AAC / DMT documentation, insurance claim challenged',
				text: 'An at-fault incident where the rental insurer reviews the documentation that was carried at the time. Missing AAC stamp or DMT permit means the rental contract clause voids the cover; full damage liability falls to the renter personally. Foreign deportation in serious DUI or fatal-incident cases is documented.',
			},
		],
		math: 'AAC endorsement (~LKR 2,000 / ~$6) plus IDP Companion ($35) is the documented-and-translated self-drive path — $41 total upfront for the documentation layer. Driver-with-car ($60/day × 10 days = $600) often costs less than self-drive with full mandatory local insurance ($40/day vehicle + $30/day insurance × 10 days = $700) AND removes the AAC / DMT gate entirely. Run the comparison for your specific itinerary before deciding.',
	},

	howTo: {
		heading: 'How to prepare for driving in Sri Lanka (US citizens)',
		lead: 'A US-to-Sri Lanka trip has one decision before any other operational preparation: self-drive (requiring AAC endorsement or DMT permit) vs driver-with-car (removing the licensing gate entirely). The five steps below assume self-drive but flag the driver-with-car alternative at the decision point — many US travellers conclude the driver path is the cleaner end-to-end choice.',
		schemaName: 'How to prepare for driving in Sri Lanka as a US citizen',
		duration: 'PT1H',
		cost: '35 USD',
		steps: [
			{
				title: 'Decide self-drive vs driver-with-car before flying',
				text: 'Self-drive requires AAC endorsement or DMT permit (a morning in Colombo) plus mandatory local rental insurance. Driver-with-car at $50–80/day USD removes both. For a 10-day cultural-triangle or hill-country trip, driver-with-car typically costs $500–800 total including the driver — often less than self-drive with full insurance, and removes the AAC / DMT gate entirely. Run the math for your specific itinerary before deciding.',
			},
			{
				title: 'If self-driving: decide AAC vs DMT path before arrival',
				text: 'AAC path requires bringing a Geneva 1949 IDP from a US issuer first — the AAC office at Sir Mohamed Macan Markar Mawatha in Colombo 3 endorses it for use in Sri Lanka (~LKR 1,500–2,500, a morning, plus two passport photos). DMT path is direct at the Department of Motor Traffic Werahera office south of Colombo (~LKR 2,500–3,500, a morning, plus two passport photos). Both produce the legally-required Sri Lankan-recognised authorisation.',
			},
			{
				title: 'Confirm your US driver\'s licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Required for both the AAC endorsement and the DMT permit process. Expired licences are not accepted for either path or by Sri Lankan rental companies.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your US licence data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. The English version is the working-language route at every Sri Lankan tourist-corridor interaction; useful at police stops and rental counters as supplemental translation alongside the locally-required AAC-endorsed IDP or DMT permit.',
			},
			{
				title: 'Carry the full documentation set in one folder',
				text: 'US passport with valid Sri Lankan visa or ETA + US licence + AAC-endorsed Geneva 1949 IDP OR DMT Temporary Driving Permit + rental contract + IDP Companion — all in one folder, in the vehicle. Sri Lanka is paperwork-dense at police stops on tourist corridors; having every document in the same folder makes the typical 5-minute check stay a 5-minute check.',
			},
		],
	},

	phrases: {
		heading: 'Useful Sri Lankan English and Sinhala phrases at the rental counter and roadside',
		lead: 'Colombo runs in English at every documentation interaction (AAC office, DMT office, major hotels, most rental counters) — but rural interactions in the hill country and the cultural triangle have lighter English coverage. The eight phrases below mix English-language opener templates for the documentation offices with a handful of Sinhala phrases for rural stops where the cultural respect signal pays back.',
		items: [
			{ phrase: 'Good morning, I am here for the AAC endorsement / DMT permit.', translation: '(English — works at both offices.)', context: 'Standard opener at AAC Colombo 3 or DMT Werahera; the document staff process foreign drivers regularly and English is the working language at both.' },
			{ phrase: 'Here are my US licence, my passport, my IDP and the photos.', translation: '(English.)', context: 'Standard document presentation at AAC / DMT or at any subsequent rental counter or police stop.' },
			{ phrase: 'Ayubowan.', translation: '(Sinhala: "Long life" — a respectful greeting.)', context: 'A respectful Sinhala opener at rural interactions; widely used and signals cultural respect.' },
			{ phrase: 'Bohoma stuti.', translation: '(Sinhala: "Thank you very much.")', context: 'Useful at petrol attendants, AAC / DMT clerks, and any roadside interaction.' },
			{ phrase: 'How much is the fare to Kandy?', translation: '(English — works for tuk-tuk and driver-with-car negotiations.)', context: 'Tuk-tuks and driver-with-car operators negotiate in English at tourist routes; agree the fare before departure.' },
			{ phrase: 'Is the road open after the monsoon flood?', translation: '(English — useful during May–September or October–January monsoon windows.)', context: 'At hotels or rental counters during monsoon seasons — flooding closes specific routes regularly and local knowledge is the best source for current status.' },
			{ phrase: 'I need a doctor / a hospital.', translation: '(English — universally understood at tourist-corridor health facilities.)', context: 'In any incident or medical situation — the most important phrase to know at any rural location.' },
			{ phrase: 'Where is the nearest petrol station?', translation: '(English.)', context: 'Useful on rural and hill-country routes where stations can be sparse.' },
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Sri Lanka as a US tourist?',
				answer: 'Yes — and more specifically you need either a Department of Motor Traffic (DMT) Temporary Driving Permit issued in Werahera south of Colombo, OR a Geneva 1949 International Driving Permit issued by a US issuer and then endorsed by the Automobile Association of Ceylon (AAC) at their Colombo 3 office. A bare Geneva 1949 IDP from a US issuer, without the AAC stamp, is not sufficient.',
			},
			{
				id: 2,
				question: 'Where is the AAC office and how does the endorsement work?',
				answer: 'The Automobile Association of Ceylon is at Sir Mohamed Macan Markar Mawatha, Colombo 3. The endorsement process for a foreign Geneva 1949 IDP typically takes a morning. Bring your passport, original IDP, two passport photos, and the fee (~LKR 1,500–2,500). Office hours are weekday mornings.',
			},
			{
				id: 3,
				question: 'What if I arrive without an IDP from home?',
				answer: 'Apply for the DMT Temporary Driving Permit instead. The Department of Motor Traffic main office is in Werahera, south of Colombo. Bring your passport, US licence, two passport photos, and the fee (~LKR 2,500–3,500). The permit is issued the same day and is valid for the duration of a short-term tourist stay.',
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as an AAC endorsement or DMT permit?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document. It is not issued under the 1949 Geneva Convention, not endorsed by the AAC, and not issued by the DMT. It does not satisfy Sri Lankan licensing requirements on its own. It serves as supplemental translation at police stops and rental counters once the AAC stamp or DMT permit is in hand.',
			},
			{
				id: 5,
				question: 'Should I hire a driver-with-car instead of self-driving?',
				answer: 'For most US travellers in Sri Lanka, yes. Daily rates of $50–80 USD typically include the driver and often the driver\'s accommodation. The driver handles tuk-tuk behaviour, hill-country switchbacks, monsoon flood patterns and police interactions. End-to-end cost is often lower than self-drive with mandatory local insurance, and the entire AAC / DMT gate is removed from the trip.',
			},
			{
				id: 6,
				question: 'What side of the road do they drive on?',
				answer: 'Left — opposite to the US. The driver\'s seat is on the right side of the car. Inherited from the British colonial period. This is the day-one adjustment for US drivers and compounds with the unfamiliar AAC / DMT documentation process — another reason many US travellers choose the driver-with-car path.',
			},
			{
				id: 7,
				question: 'How dangerous are Sri Lankan roads really?',
				answer: 'More chaotic than dangerous for an attentive driver, but the cumulative stress is high. Tuk-tuks weave; buses overtake aggressively on blind corners; rural roads share with cattle, dogs and occasionally elephants. The accident rate per kilometre is higher than US averages. The defensive-driving load is one of the reasons the driver-with-car path appeals to many US travellers.',
			},
			{
				id: 8,
				question: 'Can I drive in the hill country (Kandy to Nuwara Eliya to Ella)?',
				answer: 'Yes, with the legal documentation (AAC-endorsed IDP or DMT permit). The route is narrow, winding and slow — plan 6–8 hours for what looks like 200 km on a map. Many travellers prefer the scenic Kandy–Ella train for the central stretch and drive (or hire a driver) only the connecting segments to the trailheads and viewpoints.',
			},
			{
				id: 9,
				question: 'What about driving in Yala or Udawalawe National Park?',
				answer: 'National park interiors require a registered safari jeep and guide — self-driving is not permitted in park interiors. Park access roads are open to private vehicles, but wildlife-viewing routes themselves require booking through a registered local safari operator.',
			},
			{
				id: 10,
				question: 'When are the monsoon seasons and which routes are affected?',
				answer: 'Southwest monsoon May–September affects the west coast, south coast and central hill country (the most popular tourist routes); Northeast monsoon October–January affects the east coast and the north (Trincomalee, Jaffna). Flooding closes specific routes regularly during peak monsoon weeks — local hotel and driver knowledge is the best source for current status.',
			},
			{
				id: 11,
				question: 'Can I drive into India or Maldives from Sri Lanka?',
				answer: 'No — Sri Lanka is an island and there is no land border with India or any other country. Ferry services to India are intermittent and do not cover passenger vehicles for tourist use.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Adjacent Asian and English-speaking destinations where US drivers face their own combinations of IDP requirements, local endorsement steps, left-side driving and tuk-tuk-equivalent road dynamics.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'th', label: 'US → Thailand', status: 'Live', href: '/idp-for-us-drivers-in-thailand' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan' },
			{ flagFrom: 'us', flagTo: 'vn', label: 'US → Vietnam', status: 'Live', href: '/idp-for-us-drivers-in-vietnam' },
			{ flagFrom: 'us', flagTo: 'id', label: 'US → Indonesia', status: 'Live', href: '/idp-for-us-drivers-in-indonesia' },
			{ flagFrom: 'us', flagTo: 'nz', label: 'US → New Zealand', status: 'Live', href: '/idp-for-us-drivers-in-new-zealand' },
			{ flagFrom: 'us', flagTo: 'gb', label: 'US → United Kingdom', status: 'Live', href: '/idp-for-us-drivers-in-uk' },
		],
	},

	finalCta: {
		heading: 'Planning a cultural-triangle or hill-country trip from the US?',
		text: 'IDP Companion is a multilingual translation PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real US licence in two minutes. The English version is the working-language route at every Sri Lankan tourist-corridor interaction. For Sri Lanka specifically: the legal floor is the AAC stamp or DMT permit (both locally-issued in Colombo, both a morning), and many US travellers conclude that hiring a driver-with-car at $50–80/day USD removes the entire licensing question and often costs less end-to-end than self-drive with mandatory local insurance. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			'IDP Companion is a private multilingual translation companion document and is not affiliated with the Department of Motor Traffic (DMT) of Sri Lanka, the Automobile Association of Ceylon (AAC), Sri Lanka Police, or any other Sri Lankan government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention, and does not, on its own, satisfy the Sri Lankan licensing requirement for foreign drivers — which requires either a DMT Temporary Driving Permit issued in Werahera or a Geneva 1949 IDP endorsed by the AAC in Colombo. Authorised issuers of US-origin Geneva 1949 IDPs are AAA and AATA; any such home-issued IDP must be separately endorsed by the AAC in Colombo before use in Sri Lanka as a matter of Sri Lankan law, not as a recommendation by IDP Companion. IDP Companion must be used alongside your original US driver\'s licence and the locally-required Sri Lankan authorisation.',
		sourcesHeading: 'Sources',
		sources: [
			'Department of Motor Traffic (DMT) Sri Lanka — Foreign drivers and temporary permits (dmt.gov.lk)',
			'Automobile Association of Ceylon (AAC) — IDP endorsement service (aaceylon.com)',
			'Sri Lanka Police — Road traffic enforcement (police.lk)',
			'Sri Lanka Tourism Development Authority — Visitor driving guidance (srilanka.travel)',
			'US Embassy in Colombo — Driving advisory for US citizens (lk.usembassy.gov)',
			'Mahaweli Tours / Lotus Tours — Established Sri Lankan driver-with-car providers for cultural-triangle and hill-country itineraries',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Sri Lanka',
	},
};

export const usSriLankaCopy: Record<'en', CountryPairCopy> = { en };
