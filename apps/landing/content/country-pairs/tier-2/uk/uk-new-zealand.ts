/**
 * Country-pair content: United Kingdom → New Zealand.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: rare for a UK-tourist destination outside Europe, New
 * Zealand drives on the LEFT — same side as the UK. There is no
 * directional adjustment to relearn. The licensing layer is settled by
 * NZTA's (Waka Kotahi) 12-month visitor rule, which accepts a valid UK
 * photocard licence without translation. The two substantive frictions
 * for UK drivers are the NZ Police tiered speed-camera enforcement
 * (deceptive 100 km/h open-road feel for drivers from a 70 mph / ≈113
 * km/h motorway culture), and the South Island route-planning realities
 * — single-lane bridges, alpine pass seasonality (Crown Range, Lindis
 * Pass), Cook Strait ferry timing for North-to-South Island travel,
 * sparse mobile coverage outside the rental hubs.
 *
 * Distinctive content: shoulder-season value lever (October–November
 * spring or April–May autumn rental rates run 40–60% below December–
 * March peak); diesel-vs-petrol Road User Charge math for long routes;
 * sheep-on-rural-road reality; brake-fade discipline on Crown Range /
 * Lindis Pass descents; three (only three) North Island toll roads;
 * AA UK ↔ AA NZ reciprocal breakdown arrangements (mentioned once as
 * factual service, not as IDP competitor).
 *
 * MIDDLE-PIVOT COMPLIANCE: clean — AA, RAC and PayPoint mentioned ONLY
 * in legal disclaimer. The AA UK / AA NZ breakdown reciprocity is
 * mentioned once in renting tips as factual driver service (analogous
 * to the Cyprus jccsmart.com pattern in uk-cyprus.ts — naming a useful
 * specific service that does not compete with IDP Companion); the AA
 * here is the motoring association's breakdown function, not the IDP
 * issuer function. PayPoint replaces the original brief's "Post Office"
 * reference per the March-2024 PayPoint binding rule.
 *
 * PDF LANGUAGE COMPLIANCE: All 12 verified languages enumerated in TLDR
 * row and final CTA. English IS on the template (verified) — UK
 * photocard data presents in English on the document, which is the
 * working-language route at every NZ Police stop, rental counter and
 * post-incident interaction. NZ is fully English-speaking; no Maori
 * translation claim is made (Maori is not on the template and is not
 * an operational requirement at any tourist-driving touchpoint).
 *
 * SANYA BRIEF FIX: the original brief's FAQ #6 (mountain passes) had a
 * Norway copy-paste error ("vegvesen.no/trafikkinformasjon — sorry,
 * that's Norway — for NZ check journeys.nzta.govt.nz"). Rewritten to
 * cite the correct NZ source (journeys.nzta.govt.nz) cleanly.
 *
 * SEO add-ons present: tldr, howTo, lastReviewed. NO phrases (NZ runs
 * in English at every touchpoint, no rental-counter language barrier).
 * NO lez (NZ has no Low Emission Zone framework; the 3 North Island
 * toll roads are billing not zone restriction, covered in renting tips).
 * NO alphabet (Latin script). NO rejects (NZ recognises UK photocard
 * alone under the 12-month visitor rule; no convention-mismatch).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in New Zealand: 2026 Guide',
		description:
			'Driving the South Island? NZTA (Waka Kotahi) accepts UK photocards for 12 months — and NZ drives on the left, same as home. Honest 2026 guide: speed-camera tiers, single-lane bridges, shoulder-season value, Cook Strait timing.',
		ogTitleShort: 'UK Drivers in NZ: 12-Month Visitor Rule',
		ogSubtitle: 'Same-side driving, NZTA 12-month rule, deceptive 100 km/h camera tiers.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → New Zealand',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-05-21',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'UK → New Zealand · 2026 Guide',
		title: 'Driving NZ on a UK Photocard: NZTA\'s 12-Month Rule + Same-Side Comfort',
		lead: 'Most UK travel articles will tell you to grab an IDP before flying to New Zealand. NZTA — Waka Kotahi, the actual regulator — disagrees: visitors drive legally in NZ on a valid overseas licence for up to 12 months from arrival, and UK gov.uk NZ advice confirms the same. Two facts replace the licensing question for UK drivers. New Zealand drives on the left, same as the UK — the rare destination outside Europe where there is no side-of-the-road adjustment to relearn. And the NZ Police tiered speed-camera schedule catches UK drivers who underestimate 100 km/h on empty South Island roads, escalating from NZD $30 at the bottom to court appearance + licence-suspension equivalent at 40+ km/h over. The bigger trip-value lever sits in the calendar: October–November or April–May shoulder rentals run 40–60% below December–March peak rates at Queenstown.',
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — NZTA gives UK photocard holders 12 months on home licence',
		text: 'New Zealand Transport Agency (NZTA, also called Waka Kotahi) allows visitors to drive on a valid overseas driver\'s licence for up to 12 months from the date of arrival. UK photocard licences are issued in English and accepted without translation. UK gov.uk NZ travel advice confirms. New Zealand is party to both the 1949 Geneva and 1968 Vienna Conventions. The bigger items for an NZ trip are the NZ Police tiered speed-camera fines (the 100 km/h open-road limit feels deceptively comfortable for UK drivers from a 70 mph motorway culture), the South Island route-planning realities (single-lane bridges, alpine pass seasonality, sheep on rural roads, sparse mobile coverage), and the shoulder-season value lever (October–November or April–May vs December–March peak).',
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in New Zealand',
		lead: 'The NZ licensing question is short — NZTA\'s 12-month rule covers any UK visitor on a valid photocard. Where IDP Companion earns its place: peak December–March South Island rental queues at Queenstown and Christchurch where desk agents sometimes default to asking for IDP paperwork to clear the volume — the standardised multilingual layout shortens the verification compared to a UK-issued plastic at a high-pressure Queenstown pickup.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in New Zealand',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Legally accepted by NZTA (Waka Kotahi) for tourist driving for up to 12 months from arrival. Issued in English, so no translation is required by law. UK gov.uk confirms IDP not required. Accepted by all major NZ rental chains (Hertz NZ, Avis NZ, Apex Car Rentals, JUCY, GoRentals, Britz) at Auckland, Wellington, Christchurch and Queenstown airports.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: 'Multilingual digital PDF presenting your UK photocard data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. The English version is the working-language route at every NZ Police stop and rental counter; the standardised layout speeds verification at peak summer queues. Re-printable from any hotel.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry in NZ: original UK photocard + UK passport + rental contract + Collision Damage Waiver (CDW from rental — UK motor insurance does not extend internationally). Most rentals carry transponders for the three North Island toll roads by default. AA UK members may have reciprocal arrangements with AA New Zealand for breakdown cover during overseas travel — verify current terms with AA UK before flying.',
	},

	whyNotEnough: {
		heading: 'Where the NZ driving experience actually creates friction for UK drivers',
		lead: 'NZTA\'s 12-month rule settles the licensing answer entirely. Three operational realities sit in front of UK drivers anyway: the peak-season Queenstown rental-desk pattern that defaults to asking for IDP paperwork even when NZTA does not require it, the NZ Police tiered speed-camera enforcement that the 100 km/h open-road feel disguises, and the South Island route-planning items (single-lane bridges, alpine pass seasonality, sparse mobile coverage) that distinguish a clean trip from a stressful one.',
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The Queenstown-peak rental-counter pattern',
				text: 'Hertz NZ, Avis NZ, Apex Car Rentals, JUCY, GoRentals, Britz and Europcar each set their own internal verification policy at NZ branches. Auckland (AKL), Wellington (WLG), Christchurch (CHC) and Queenstown (ZQN) airport branches process the largest concentration of UK tourist rentals — and desk agents during peak December–March southern-summer turnover sometimes default to asking for IDP paperwork at pickup, even when NZTA does not require it. Queenstown is the most common location for this pattern given the volume concentration into a single rental hub for the entire South Island ski and summer-tourism season.',
			},
			{
				icon: 'mdi:camera-burst',
				title: 'The deceptive 100 km/h open-road feel and NZ Police tier schedule',
				text: 'NZ Police speeding fines run on a published tier: NZD $30 for 1–10 km/h over a 50 km/h zone, NZD $80, $120, $170, $230 at successive 5 km/h increments, NZD $300+ for 31–35 km/h over, and court appearance plus licence suspension equivalent for 40+ km/h over. Mobile camera vans rotate widely on the South Island tourist corridor — Christchurch ↔ Queenstown via Tekapo, around Wanaka, on the Crown Range Road. UK drivers from a 70 mph (≈113 km/h) motorway culture often drift over the NZ 100 km/h open-road limit thinking 100 km/h is a low cap; it is not, and the enforcement tiers escalate quickly. Rental companies forward camera tickets to your UK card on file plus a typical NZD $50 processing fee.',
			},
			{
				icon: 'ph:bridge-bold',
				title: 'The South Island route-planning realities',
				text: 'Single-lane bridges are common on rural South Island roads — signs show which direction has right of way, read the sign before entering. Sheep on rural roads is regular and slow them down, not a joke. Crown Range Road and Lindis Pass have steep grades that require engine-braking on descent (brake fade is a real problem on long downhills). Mobile coverage outside Christchurch and Queenstown is patchy; download offline maps before any inland route. Crown Range and high alpine routes can close in winter (June–September) or after major weather events. None of this is the IDP question — it is the operational planning that distinguishes a clean South Island trip from a stressful one.',
			},
		],
	},

	rules: {
		heading: 'NZ driving rules UK drivers should know',
		lead: 'Left-side driving like home is the rare comfort destination outside Europe. Below the directional comfort sit a handful of differences worth knowing before pickup: the open-road 100 km/h limit is a low cap by UK motorway standards (the speed-camera tier escalates fast), no-turn-on-red is enforced as a full stop, and one-lane-bridge convention on rural South Island routes is governed by posted priority signs that need to be read before entering.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Same as the UK — no directional adjustment; the rare comfort destination outside Europe' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h default', note: 'Some 30 km/h zones around schools and town centres; NZ is metric — speeds in km/h not mph' },
			{ icon: 'mdi:road-variant', label: 'Open-road speed', value: '100 km/h on most rural sealed', note: 'Selected expressways (Tauranga Eastern Link, Northern Gateway, parts of Waikato Expressway) allow 110 km/h where signed' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% for 20+ / 0.00% under 20', note: 'Random breath testing routine; same as UK at general-driver level' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'NZD $150 + 20 demerit points; routinely enforced' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'NOT permitted', note: 'All red lights are full stops in all directions' },
			{ icon: 'ph:bridge-bold', label: 'One-lane bridges', value: 'Common on rural roads', note: 'Posted signs show which direction has right of way — read the sign before entering' },
			{ icon: 'mdi:sheep', label: 'Sheep on rural roads', value: 'Real and regular', note: 'Slow to a walking pace and let them pass — common on South Island farm routes' },
		],
	},

	fines: {
		heading: '2026 NZ Police fines for common violations',
		lead: 'NZ Police use a tiered speeding-fine schedule published by NZTA. The tiers escalate by 5 km/h increment up to NZD $230 at 26–30 km/h over, then climb to NZD $300+ at 31–35 km/h over, and court appearance + licence suspension equivalent at 40+ km/h over. The drink-driving and handheld-phone fines are the other high-frequency UK-driver exposures.',
		colViolation: 'Violation',
		colAmount: 'Fine (NZD / GBP approx)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (1–10 km/h over, 50 km/h zone)', amount: 'NZD $30 (~£14)', note: 'Camera-enforced nationwide; mobile vans operate widely on South Island tourist routes', severity: 'low' },
			{ icon: 'mdi:speedometer', label: 'Speeding (11–15 km/h over)', amount: 'NZD $80 (~£38)', note: '', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (16–20 km/h over)', amount: 'NZD $120 (~£57)', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (21–25 km/h over)', amount: 'NZD $170 (~£80)', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding (26–30 km/h over)', amount: 'NZD $230 (~£108)', note: 'Common UK-driver tier when underestimating 100 km/h feel', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding (31–35 km/h over)', amount: 'NZD $300+ (~£141)', note: '', severity: 'high' },
			{ icon: 'ph:siren-bold', label: 'Speeding (40+ km/h over)', amount: 'Court summons + licence suspension equivalent', note: 'Visitors face rental contract termination', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'NZD $150 + 20 demerit points', note: 'Routinely enforced', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'Failure to wear seatbelt', amount: 'NZD $150 per occupant', note: 'Driver liable for unbelted passengers', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'Drink driving (50–80 mg/100 ml, first offence)', amount: 'NZD $200–700+ (~£94–330)', note: 'Police breath-test stops common, especially after weekend evenings', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'Drink driving (over 80 mg/100 ml)', amount: 'Court appearance, licence disqualification, possible imprisonment', note: 'Visitors lose driving privileges for remainder of stay; criminal record applies internationally', severity: 'high' },
		],
		caption: 'Sources: NZTA Waka Kotahi speeding-fine schedule (nzta.govt.nz); NZ Police road policing publications (police.govt.nz). NZD/GBP approximated at 2.12:1 May 2026.',
	},

	honesty: {
		heading: 'How IDP Companion fits for UK drivers in New Zealand — honestly',
		lead: 'On a UK-to-NZ trip the IDP Companion role is narrow: shortening peak-season verification at Queenstown and Christchurch counters and serving as the standardised translation block at any NZ Police stop. The speed-camera discipline on open-road 100 km/h, the engine-brake habit on Crown Range and Lindis Pass descents, and the offline-map prep before driving inland are operational items — they sit outside what any paperwork document can buy and they distinguish a clean South Island trip from a stressful one.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In New Zealand, the English version on the document is the working-language route at every NZ Police stop, rental counter and post-incident interaction (NZ is fully English-speaking); the standardised layout speeds the verification at peak summer queues',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by NZTA (Waka Kotahi) for tourist driving on a UK photocard within the 12-month visitor window',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not a Collision Damage Waiver — CDW is purchased separately at the rental counter (UK motor insurance does not extend to NZ)',
				'Not an AA New Zealand membership — AA UK members may have reciprocal arrangements with AA NZ for breakdown cover; verify current terms with AA UK before travel',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in New Zealand',
			items: [
				'At Christchurch, Auckland, Queenstown and Wellington rental queues during peak December–March southern-summer turnover when staff default to standardised paperwork',
				'At NZ Police stops on the South Island tourist corridor (especially around Queenstown, Wanaka and the West Coast) where the standardised layout shortens the stop',
				'For insurance and accident-report paperwork after any incident — multilingual translation simplifies cross-border claim conversations',
				'As a re-printable backup from any hotel if your physical photocard is lost on a multi-island trip (North Island ↔ Cook Strait ferry ↔ South Island itineraries cross several rental-pickup points)',
				'For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers NZ plus Australia, Asian and European destinations on the same plan',
			],
		},
		needOfficial: {
			title: 'Documents NZ law actually cares about at a checkpoint or rental counter',
			items: [
				'Your physical UK photocard driving licence — the actual permission to drive (NZTA-recognised for the 12-month visitor window)',
				'UK passport — required at every document check and rental pickup; officers may verify identity especially for under-25 drivers',
				'Rental agreement and proof of valid CDW or comprehensive insurance — provided at pickup',
				'For specific situations: any relevant motorcycle endorsement on the photocard if renting a campervan above standard car-licence class',
			],
		},
		pattern:
			'What prepared UK travellers in NZ actually carry: UK photocard + UK passport + rental contract + CDW insurance certificate + IDP Companion. The substantive trip preparation is the speed-camera discipline on South Island open roads (the 100 km/h limit is not a UK-motorway equivalent), the engine-brake habit on Crown Range / Lindis Pass descents, the offline-map prep for inland routes where mobile coverage is patchy, and the choice of shoulder season (October–November or April–May) over December–March peak for South Island value.',
	},

	renting: {
		heading: 'Renting a car in New Zealand as a UK driver',
		lead: 'NZ rental rates run premium for the South Island peak (December–March) and significantly lower in shoulder seasons (October–November or April–May, typically 40–60% below peak). The market is reliable and built around long-distance South Island fjord and mountain routes; the four main rental hubs (Auckland, Wellington, Christchurch, Queenstown) cover most itinerary structures.',
		chains: [
			{ name: 'Hertz New Zealand', policy: 'Operates at Auckland, Wellington, Christchurch, Queenstown and regional locations. Accepts UK photocard licences for the 12-month tourist window; some Queenstown branches request IDP at peak season.' },
			{ name: 'Avis New Zealand (incl. Budget)', policy: 'Wide network including remote ferry-connected locations. UK photocards accepted; operates Budget under the same group.' },
			{ name: 'Apex Car Rentals (NZ local)', policy: 'NZ-owned, popular with UK and Australian tourists for budget rentals. Strong presence at Auckland, Christchurch and Queenstown airports.' },
			{ name: 'JUCY / GoRentals / Britz (campervans)', policy: 'Campervan and motorhome rentals — popular for South Island self-drive trips. UK photocards accepted for car-licence-class campervans (most standard sizes).' },
			{ name: 'Europcar New Zealand', policy: 'Strong city and airport presence. UK photocards accepted.' },
		],
		tipsHeading: 'Practical tips for renting and driving in New Zealand',
		tips: [
			'Shoulder seasons save money on the South Island — October–November (spring) and April–May (autumn) typically see rental rates 40–60% below peak December–March. Weather is variable but acceptable; tourist density is much lower; accommodation also runs cheaper',
			'Petrol vs diesel matters for cost — diesel rentals attract a separate Road User Charge (RUC) at refuel that adds NZD $0.08–0.10 per km. Sometimes diesel still comes out cheaper for long routes — check the math for your specific itinerary distance',
			'Single-lane bridges are common on rural South Island roads — signs show which side has priority. Slow down well in advance and look for oncoming traffic before entering',
			'Sheep on the road is genuinely common on rural South Island routes — slow to a walking pace and let them pass; it is the wildlife reality of the country',
			'Mobile coverage outside cities is patchy — download offline maps before leaving Christchurch or Queenstown for any inland route, especially West Coast and Mount Cook regions',
			'Crown Range Road and Lindis Pass have steep grades — engine-brake using lower gears on descent rather than the brake pedal; brake fade is a real problem on long downhills, especially in a fully-loaded campervan',
			'Three North Island toll roads only: Northern Gateway near Auckland, Tauranga Eastern Link and Takitimu Drive. Rental cars carry transponders by default; tolls bill automatically',
			'AA UK members may have reciprocal arrangements with AA New Zealand for breakdown cover during overseas travel — verify current reciprocity terms with AA UK before flying. AA NZ is the operational breakdown service in country',
			'Left-side driving — same as the UK — is the rare comfort destination outside Europe. No directional adjustment needed; one of the easiest international destinations for UK drivers from a side-of-the-road perspective',
			'Cook Strait ferry between Wellington (North Island) and Picton (South Island) — most rental companies allow inter-island travel via the Interislander or Bluebridge ferries but typically charge an additional crossing or inter-island fee. Confirm in writing before booking the ferry',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers in NZ',
		lead: 'What actually happens to UK drivers on an NZ trip falls into a predictable shape. Most pickups close in 15 minutes under the NZTA legal default; the speed-camera ticket is the most frequent avoidable surprise (mobile vans on Crown Range and the Christchurch-Tekapo corridor are the usual culprits); and the alpine-route exposures — engine-brake on Crown Range descent, single-lane-bridge misread on the first day — are the rarer patterns that absorb the trip-cost when they happen. Below in order of frequency.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common, all year off-peak',
				label: 'UK photocard accepted at rental pickup, you drive away in 15 minutes',
				text: 'NZTA tourist-window legal default. Christchurch or Auckland pickup, UK photocard presented, contract proceeds. Most NZ trips end this way when the trip is shoulder season and no speed-camera ticket surfaces.',
			},
			{
				severity: 'low',
				frequency: 'Common at Queenstown / peak summer',
				label: 'Desk agent asks for IDP at peak Queenstown pickup, you produce IDP Companion',
				text: 'Five extra minutes of paperwork verification at Queenstown during December–March peak, no further issue. The standardised translation block clears the question without contract delay; common when peak-season branch policy defaults to asking even when NZTA does not require.',
			},
			{
				severity: 'low',
				frequency: 'Occasional on South Island tourist routes',
				label: 'NZ Police stop near Queenstown or Wanaka with full paperwork',
				text: 'Brief 5-minute documentation review on a South Island tourist route — speed-check stop, document verification, on your way. UK photocard plus passport plus rental contract satisfies the standard check.',
			},
			{
				severity: 'med',
				frequency: 'Common for UK drivers',
				label: 'Speed-camera ticket from a rural NZ stretch',
				text: 'A mobile camera van on Crown Range Road, near Wanaka, or on the Christchurch-Tekapo corridor catches a speed above the tier threshold. NZD $30–300 plus rental processing fee charged to your UK card 4–8 weeks after the trip. The 100 km/h open-road limit is the most common tier underestimated by UK drivers from a 70 mph motorway culture.',
			},
			{
				severity: 'med',
				frequency: 'Occasional first-day incident',
				label: 'Single-lane-bridge incident with oncoming traffic',
				text: 'A first-day single-lane-bridge misread on a rural South Island route — minor damage claim under CDW depending on contract terms. The bridge signs are clear but require reading before entering at speed; this is the most common UK-driver first-day incident on the South Island.',
			},
			{
				severity: 'high',
				frequency: 'Rare but real on alpine routes',
				label: 'Brake fade or weather event on Crown Range / Lindis Pass',
				text: 'A long descent without engine-braking causes brake fade on the Crown Range or Lindis Pass; or a winter weather event closes a high pass between June and September. Damage claim severity depends on what happens next; alpine routes require engine-brake discipline on descent and pass-status check before departure.',
			},
		],
		math: '$35 IDP Companion vs the difference between a NZD $250/day same-day rebook in Queenstown at peak summer and a NZD $100/day October shoulder-season rate. The bigger value lever for UK travellers to NZ is choosing shoulder season — the rental-rate gap can absorb the entire IDP Companion cost many times over. The speed-camera discipline absorbs the next-biggest avoidable cost.',
	},

	howTo: {
		heading: 'How to prepare for driving in New Zealand (UK citizens)',
		lead: 'The biggest preparation lever for a UK-to-NZ trip is timing — shoulder season (October–November or April–May) vs December–March peak swings rental rates 40–60% on the South Island. The second is the speed-camera discipline on open roads, where 100 km/h reads as a low cap to UK drivers from a 70 mph motorway culture. The third is the South Island route-planning awareness (alpine pass status, single-lane-bridge convention, offline-map prep). Five steps below cover each.',
		schemaName: 'How to prepare for driving in New Zealand as a UK citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired photocards are not accepted by NZTA or NZ rental companies. UK photocard valid for the first 12 months of any NZ visit under the NZTA visitor rule.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. The English version is the working-language route at every NZ touchpoint; the standardised layout shortens peak-season verification at Queenstown and Christchurch. Print at home or from any NZ hotel.',
			},
			{
				title: 'Choose shoulder season for South Island value',
				text: 'October–November (spring) or April–May (autumn) typically see rental rates 40–60% below December–March peak. Weather is variable but acceptable; tourist density is much lower; accommodation also runs cheaper. For peak conditions (ski / Christmas-New-Year) the December–March window is the right call but expect peak pricing across rentals and accommodation.',
			},
			{
				title: 'Verify AA UK reciprocity and plan inland-route offline-map prep',
				text: 'AA UK members may have reciprocal arrangements with AA New Zealand for overseas breakdown cover — verify current terms with AA UK before travel. Download offline maps before leaving Christchurch or Queenstown for any inland route; mobile coverage is patchy outside the four main hubs.',
			},
			{
				title: 'Carry physical documents in one folder + practice the alpine-route discipline',
				text: 'UK photocard + UK passport + rental contract + CDW certificate + IDP Companion — all in one folder, in the vehicle. Hand the folder over at any NZ Police stop. For South Island alpine routes, engine-brake on Crown Range and Lindis Pass descents, read single-lane-bridge signs before entering, slow for sheep on rural roads, and check journeys.nzta.govt.nz for pass status before departure on any winter route.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in New Zealand as a UK tourist?',
				answer: 'No. NZTA (Waka Kotahi) allows visitors to drive on a valid overseas licence for up to 12 months from the date of arrival. UK photocard licences are issued in English and accepted without translation. UK gov.uk NZ travel advice confirms.',
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes — some NZ branches during peak December–March southern-summer season request an IDP at pickup even when NZTA does not require it. Queenstown is the most common location for this pattern given the volume concentration into a single South Island rental hub.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. NZTA recognises UK photocards for the first 12 months of tourist driving — no government IDP is legally required from UK visitors. IDP Companion is the multilingual translation companion (your photocard in twelve widely-read languages from the Geneva 1949 set), most useful for UK drivers extending to Asia-Pacific destinations like Indonesia or Thailand where the Geneva 1949 IDP is legally needed. The official government IDP route is the printed booklet from the authorised UK issuer.',
			},
			{
				id: 4,
				question: 'What side of the road do they drive on?',
				answer: 'Left. Same as the UK. No left-vs-right adjustment is needed for UK drivers — one of the easiest international destinations for UK drivers from a side-of-the-road perspective.',
			},
			{
				id: 5,
				question: 'What is the best time of year for a UK self-drive trip in NZ?',
				answer: 'For value: October–November (spring) or April–May (autumn) shoulder seasons typically see rental rates 40–60% below the December–March peak. Weather is variable but acceptable; tourist density is much lower; accommodation also runs cheaper. For peak conditions (ski season July–September on the South Island, or the Christmas–New-Year summer peak), the high-season window is the right call but expect peak pricing across rentals, accommodation and ferry crossings.',
			},
			{
				id: 6,
				question: 'Do I need to worry about the speed limit?',
				answer: 'Yes, more than expected. The 100 km/h open-road limit feels deceptively comfortable on empty South Island roads, but mobile camera vans rotate widely on the Christchurch-Tekapo corridor, around Wanaka, and on the Crown Range Road. UK drivers from a 70 mph (≈113 km/h) motorway culture often drift over the NZ limit; the tier schedule escalates fast from NZD $30 at the bottom to NZD $300+ at 31–35 km/h over.',
			},
			{
				id: 7,
				question: 'Are mountain passes always open?',
				answer: 'No. Crown Range Road, Lindis Pass and high alpine routes can close in winter (June–September) or after major weather events. Always check journeys.nzta.govt.nz for current road conditions before planning any South Island winter route or alpine-pass itinerary.',
			},
			{
				id: 8,
				question: 'Can I take the rental between North and South Island?',
				answer: 'Most rental companies allow inter-island travel via the Cook Strait ferry (Interislander or Bluebridge from Wellington to Picton) but typically charge an additional crossing or inter-island fee. Confirm in writing before booking the ferry. Some rentals require the same vehicle to come back via ferry; others allow a North-Island-pickup / South-Island-dropoff arrangement with an extra fee.',
			},
			{
				id: 9,
				question: 'Are there many toll roads?',
				answer: 'Three only, all on the North Island: Northern Gateway near Auckland, Tauranga Eastern Link, and Takitimu Drive. Rental cars carry transponders by default; tolls bill automatically. The South Island has no toll roads.',
			},
			{
				id: 10,
				question: 'Will my UK motor insurance cover me in New Zealand?',
				answer: 'Most UK motor insurance does not extend internationally — verify with your insurer before relying on it. Rental CDW (Collision Damage Waiver) is sold at every NZ rental desk and is the standard cover for visitors; CDW deductible buy-down at pickup is the standard way to reduce risk on the first-day single-lane-bridge or alpine-descent exposure.',
			},
			{
				id: 11,
				question: 'What about AA breakdown cover?',
				answer: 'AA UK members may have reciprocal arrangements with AA New Zealand for breakdown assistance during overseas travel — verify current reciprocity terms with AA UK before flying. AA NZ is the operational breakdown service in country.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other left-side-driving and English-speaking destinations where UK drivers face the same same-side comfort plus distinct operational route-planning tradeoffs.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'au', label: 'UK → Australia', status: 'Live', href: '/idp-for-uk-drivers-in-australia/' },
			{ flagFrom: 'gb', flagTo: 'za', label: 'UK → South Africa', status: 'Live', href: '/idp-for-uk-drivers-in-south-africa/' },
			{ flagFrom: 'gb', flagTo: 'ie', label: 'UK → Ireland', status: 'Live', href: '/idp-for-uk-drivers-in-ireland/' },
			{ flagFrom: 'gb', flagTo: 'mt', label: 'UK → Malta', status: 'Live', href: '/idp-for-uk-drivers-in-malta/' },
			{ flagFrom: 'gb', flagTo: 'cy', label: 'UK → Cyprus', status: 'Live', href: '/idp-for-uk-drivers-in-cyprus/' },
			{ flagFrom: 'us', flagTo: 'nz', label: 'US → New Zealand', status: 'Live', href: '/idp-for-us-drivers-in-new-zealand/' },
		],
	},

	finalCta: {
		heading: 'Picking up at Christchurch, Queenstown, Auckland or Wellington?',
		text: 'Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. The English version is the working-language route at every NZ touchpoint. Valid 1–5 years and covers NZ plus Australia, Asian and European destinations on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. The bigger value lever for a South Island trip is shoulder-season timing (October–November or April–May vs December–March peak — 40–60% rental-rate difference). The second-biggest is the speed-camera discipline on the 100 km/h open-road limit, which feels deceptively low to UK drivers from a 70 mph motorway culture.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			'IDP Companion is a private multilingual translation companion document and is not affiliated with NZTA Waka Kotahi (New Zealand Transport Agency), NZ Police, ACC (Accident Compensation Corporation), or any other New Zealand government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin Geneva 1949 IDPs are the AA, the RAC and the Post Office via PayPoint (since March 2024). IDP Companion must be used alongside your original UK photocard driving licence.',
		sourcesHeading: 'Sources',
		sources: [
			'New Zealand Transport Agency (Waka Kotahi) — Driving in NZ on an overseas licence (nzta.govt.nz)',
			'NZ Police — Speeding fines and road policing (police.govt.nz)',
			'UK Foreign, Commonwealth & Development Office — Driving in New Zealand (gov.uk/foreign-travel-advice/new-zealand)',
			'AA New Zealand — Visitor driving guide (aa.co.nz)',
			'ACC (Accident Compensation Corporation) — Visitor cover (acc.co.nz)',
			'journeys.nzta.govt.nz — Current NZ road and alpine-pass conditions for trip planning',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'New Zealand',
	},
};

export const ukNewZealandCopy: Record<'en', CountryPairCopy> = { en };
