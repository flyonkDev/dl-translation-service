/**
 * Country-pair content: United States → New Zealand.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: same destination as uk-new-zealand but ANGLE deliberately
 * differentiated. UK drivers face NO side-of-the-road adjustment to NZ
 * (both drive on the left); US drivers face the full left-side switch
 * as the day-one adjustment, on top of the same speed-camera + South
 * Island route-planning realities UK drivers face. The killer angle for
 * US drivers is "side-of-the-road switch on day one + NZTA 12-month
 * rule settles licensing + Queenstown peak-season rental pattern + the
 * deceptive 100 km/h open-road feel for drivers from a 65–75 mph
 * Interstate culture".
 *
 * Distinctive content: side-of-the-road first-day adjustment with quiet-
 * area practice recommendation; NZTA 12-month visitor rule on English-
 * language licences (US licences in English so they meet the rule);
 * 65–75 mph US Interstate culture vs NZ 100 km/h open-road comparison
 * (≈62 mph — feels LOW to US drivers, escalates fast on cameras); three
 * North Island toll roads only (Northern Gateway, Tauranga Eastern Link,
 * Takitimu Drive); diesel Road User Charge math for long South Island
 * routes; ACC (Accident Compensation Corporation) personal-injury cover
 * for visitors without fault.
 *
 * CROSS-NZ ANTI-CLUSTER (binding): uk-new-zealand.ts already shipped
 * with contrarian-led hero ("Most UK travel articles tell you to grab
 * an IDP... NZTA disagrees"). This file MUST use a different shape.
 * Chosen shape: side-of-the-road-switch led — the genuine UK/US
 * differentiator. Plus different honesty/outcomes/howTo/related opening
 * shapes than uk-NZ canonicals.
 *
 * MIDDLE-PIVOT COMPLIANCE: clean — AAA and AATA (US Geneva 1949 IDP
 * issuers) mentioned ONLY in legal disclaimer. Honesty.isNot focuses on
 * "not a government IDP, not a replacement for physical licence, not
 * CDW" — no competitor pointers.
 *
 * PDF LANGUAGE COMPLIANCE: All 12 verified languages enumerated in TLDR
 * row and final CTA. English IS on the template (verified) — US licence
 * data presents in English on the document, which is the working-language
 * route at every NZ Police stop, rental counter and post-incident
 * interaction. NZ is fully English-speaking; no Maori translation claim
 * is made (Maori is not on the template and is not an operational
 * requirement at any tourist-driving touchpoint).
 *
 * SEO add-ons present: tldr, howTo, lastReviewed. NO phrases (NZ runs
 * in English at every touchpoint, no rental-counter language barrier).
 * NO lez (NZ has no Low Emission Zone framework). NO alphabet (Latin
 * script). NO rejects (NZ recognises US licence alone under the
 * 12-month visitor rule).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in New Zealand: 2026 Guide',
		description:
			'Driving the South Island? Your US license works for 12 months under NZTA Waka Kotahi — but NZ drives on the LEFT (your day-one adjustment), peak-season Queenstown desks ask for IDP, and the 100 km/h open-road limit feels low coming from 70 mph Interstates. Honest 2026 guide.',
		ogTitleShort: 'US Drivers in NZ: Left-Side Switch + NZTA Rule',
		ogSubtitle: 'Day-one side-switch for US drivers, 12-month NZTA rule, deceptive 100 km/h cameras.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → New Zealand',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-05-21',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'US → New Zealand · 2026 Guide',
		title: 'Driving NZ on a US License: Side-Switch + NZTA 12-Month Rule',
		lead: "The single day-one item for US drivers in New Zealand is the side-of-the-road switch — NZ drives on the LEFT, steering wheel on the right, and the first hour of muscle memory is reversed from every prior US driving experience. NZTA (Waka Kotahi) accepts a US licence in English for the first 12 months of any visit, so the licensing layer is settled — Statens-style 90-day windows do not apply here. What sits underneath is two operational realities: the 100 km/h open-road limit feels deceptively low to US drivers from a 65–75 mph Interstate culture, and the NZ Police tiered speed-camera schedule escalates fast on the deceptive empty South Island stretches (Crown Range, Lindis Pass, the Christchurch–Tekapo corridor are the usual mobile-van locations). Plus peak-season Queenstown rental desks during December–March southern summer default to asking for IDP paperwork to clear high-volume queues, even though NZTA does not require it.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — NZTA gives US licence holders 12 months on home licence',
		text: 'New Zealand Transport Agency (NZTA, also called Waka Kotahi) allows visitors to drive on a valid overseas driver\'s licence for up to 12 months from the date of arrival. US licences are issued in English and accepted without translation. New Zealand is party to both the 1949 Geneva and 1968 Vienna Conventions. The substantive items for a US trip are the day-one side-of-the-road switch from US right-side habits to NZ left-side driving (the rare adjustment US drivers face that UK drivers do not), the peak December–March Queenstown rental-desk pattern, the deceptive 100 km/h open-road limit vs US Interstate norms, and the South Island route-planning realities (single-lane bridges, alpine pass seasonality, sparse mobile coverage).',
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in New Zealand',
		lead: 'NZTA\'s 12-month rule on English-language licences settles licensing for US visitors cleanly. The trade IDP Companion makes is at the peak-season Queenstown counter where desk agents working through hundreds of pickups default to asking for IDP paperwork to keep the queue moving — the multilingual standardised layout shortens the verification of a state-specific US licence format that varies California-to-Texas-to-New-York.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in New Zealand',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Legally accepted by NZTA (Waka Kotahi) for tourist driving for up to 12 months from arrival. Issued in English, so no translation is required by law. Accepted by all major NZ rental chains (Hertz NZ, Avis NZ, Apex Car Rentals, JUCY, GoRentals, Britz) at Auckland, Wellington, Christchurch and Queenstown airports.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. The English version is the working-language route at every NZ Police stop, rental counter and post-incident interaction; the standardised layout speeds verification of a state-specific US licence format at peak summer Queenstown / Christchurch queues. Re-printable from any hotel.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry in NZ: original physical US license + US passport + rental contract + Collision Damage Waiver (CDW from rental — US auto cover does not extend internationally). Most rentals carry transponders for the three North Island toll roads by default. ACC (Accident Compensation Corporation) provides personal-injury cover for visitors without fault — vehicle damage is on your insurance / rental contract.',
	},

	whyNotEnough: {
		heading: 'Where the NZ driving experience creates friction for US drivers specifically',
		lead: 'For US drivers in NZ the licensing layer is short — Waka Kotahi recognises any English-language licence under the 12-month visitor rule. Underneath that sit three things that catch the US-driver demographic specifically. The day-one left-side adjustment is uniquely a US-driver item (UK drivers do not face it). The 100 km/h open-road limit reads as low coming from a 65–75 mph Interstate culture and the NZ Police tier escalates fast. And Queenstown peak-season rental desks default to asking for IDP paperwork to clear high-volume queues even when NZTA does not require it.',
		reasons: [
			{
				icon: 'ph:steering-wheel-bold',
				title: 'The day-one side-of-the-road switch (US-specific)',
				text: 'NZ drives on the left, steering wheel on the right — the full reversal from every prior US driving experience. The mental load is heaviest in the first hour: roundabout direction is reversed, indicator and wiper stalks are swapped on most vehicles, parking lot circulation, looking-right-first at intersections. Most US drivers adjust within a day if they plan a short low-stress first drive (a quiet rural loop, not a Queenstown downtown push). The most common US-driver first-day incident is a roundabout misread or a wrong-side return after a fuel stop — slow down deliberately at intersections for the first 24 hours.',
			},
			{
				icon: 'mdi:speedometer-medium',
				title: 'The deceptive 100 km/h open-road feel from Interstate culture',
				text: 'NZ\'s open-road limit is 100 km/h — roughly 62 mph, lower than the 65–75 mph US Interstate norm most US drivers default to. On empty South Island stretches (Crown Range, Lindis Pass, the Christchurch–Tekapo corridor) the 100 km/h reads as a slow cap rather than a high cap. The NZ Police tier escalates fast: NZD $30 at 1–10 km/h over, $80 at 11–15, $120 at 16–20, $230 at 26–30, $300+ at 31–35, and court appearance + licence suspension equivalent at 40+ km/h over. Mobile camera vans rotate widely on the South Island tourist corridor. Rental companies forward camera tickets to your US card on file plus a typical NZD $50 processing fee, 4–8 weeks after the trip ends.',
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The peak-season Queenstown rental-counter pattern',
				text: 'Hertz NZ, Avis NZ, Apex Car Rentals, JUCY, GoRentals and Britz process the largest concentration of overseas pickups at Queenstown — the South Island ski + summer hub — during the December–March peak. Desk agents working through high-volume queues sometimes default to asking for IDP paperwork even when NZTA does not require it from English-language licence holders. Internal branch policy varies; the IDP question shows up most often at Queenstown specifically because the rental hub concentrates the whole South Island tourist season into one airport.',
			},
		],
	},

	rules: {
		heading: 'NZ driving rules US drivers should know',
		lead: 'Left-side driving — the day-one reversal from US right-side habits and the biggest single operational adjustment for US drivers. Below the directional switch sit the metric speeds (km/h not mph), no-turn-on-red (different from US right-on-red states), and the one-lane-bridge convention on rural South Island routes.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'OPPOSITE to US — the single biggest day-one adjustment; practise in a quiet area before any city pickup' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h default (NOT mph)', note: 'Some 30 km/h zones around schools and town centres; NZ is metric — speeds in km/h not mph' },
			{ icon: 'mdi:road-variant', label: 'Open-road speed', value: '100 km/h on rural sealed (~62 mph)', note: 'Lower than US Interstate norm of 65–75 mph — feels deceptively low; tier escalates fast on cameras' },
			{ icon: 'mdi:speedometer-medium', label: 'Selected expressways', value: '110 km/h where signed', note: 'Tauranga Eastern Link, Northern Gateway, parts of Waikato Expressway only' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% for 20+ / 0.00% under 20', note: 'Random breath testing routine; stricter than the 0.08% US federal threshold' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'NZD $150 + 20 demerit points; routinely enforced' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'NOT permitted', note: 'Different from US right-on-red states — all red lights are full stops in all directions' },
			{ icon: 'ph:bridge-bold', label: 'One-lane bridges', value: 'Common on rural roads', note: 'Posted signs show which direction has right of way — read before entering' },
		],
	},

	fines: {
		heading: '2026 NZ Police fines for common violations',
		lead: 'The relevant tier for US drivers in NZ is the 26–30 km/h-over band at NZD $230 — the band most commonly hit when US drivers from a 65–75 mph Interstate culture treat the 100 km/h open-road limit as a soft cap. The schedule runs NZD $30 at the bottom through NZD $300+ at 31–35 km/h over and into court summons + licence-suspension equivalent at 40+ km/h over. Mobile camera vans on the Christchurch–Tekapo corridor and the Crown Range Road catch most of these.',
		colViolation: 'Violation',
		colAmount: 'Fine (NZD)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (1–10 km/h over, 50 km/h zone)', amount: 'NZD $30', note: 'Camera-enforced nationwide; mobile vans operate widely on South Island tourist routes', severity: 'low' },
			{ icon: 'mdi:speedometer', label: 'Speeding (11–15 km/h over)', amount: 'NZD $80', note: '', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (16–20 km/h over)', amount: 'NZD $120', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (21–25 km/h over)', amount: 'NZD $170', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding (26–30 km/h over)', amount: 'NZD $230', note: 'Common US-driver tier when defaulting to 70+ mph Interstate habits', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding (31–35 km/h over)', amount: 'NZD $300+', note: '', severity: 'high' },
			{ icon: 'ph:siren-bold', label: 'Speeding (40+ km/h over)', amount: 'Court summons + licence suspension equivalent', note: 'Visitors face rental contract termination', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'NZD $150 + 20 demerit points', note: 'Routinely enforced', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'Failure to wear seatbelt', amount: 'NZD $150 per occupant', note: 'Driver liable for unbelted passengers', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'Drink driving (50–80 mg/100 ml, first offence)', amount: 'NZD $200–700+', note: 'Police breath-test stops common, especially after weekend evenings near Queenstown and Wanaka', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'Drink driving (over 80 mg/100 ml)', amount: 'Court appearance, licence disqualification, possible imprisonment', note: 'Visitors lose driving privileges for remainder of stay; criminal record applies internationally', severity: 'high' },
		],
		caption: 'Sources: NZTA Waka Kotahi speeding-fine schedule (nzta.govt.nz); NZ Police road policing publications (police.govt.nz).',
	},

	honesty: {
		heading: 'How IDP Companion fits for US drivers in New Zealand — honestly',
		lead: 'IDP Companion is the standardised multilingual layout that clears a state-specific US licence (Texas, California, New York all look different) at peak-season Queenstown desks in under two minutes — and the English translation block that serves as the on-the-page document at any NZ Police stop. The side-of-the-road switch from US right-side habits, the engine-brake habit on Crown Range descent, the Cook Strait ferry timing if the itinerary crosses islands — those are operational items that no paperwork document can address.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your US licence data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In New Zealand, the English version on the document is the working-language route at every NZ Police stop, rental counter and post-incident interaction (NZ is fully English-speaking); the standardised layout speeds verification of a state-specific US licence format at peak-season Queenstown / Christchurch queues',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by NZTA (Waka Kotahi) for tourist driving on a US licence within the 12-month visitor window',
				'Not valid by itself — must be carried alongside your physical US licence',
				'Not a Collision Damage Waiver — CDW is purchased separately at the rental counter (US auto insurance does not extend to NZ)',
				'Not the side-of-the-road switch practice — that\'s muscle memory, best built in a quiet area on day one before any urban pickup or busy motorway leg',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in New Zealand',
			items: [
				'At Christchurch, Auckland, Queenstown and Wellington rental queues during peak December–March southern-summer turnover when staff process state-specific US licence formats more slowly than standardised translation paperwork',
				'At NZ Police stops on the South Island tourist corridor (especially around Queenstown, Wanaka and the West Coast) where the standardised translation block shortens the stop',
				'For insurance and accident-report paperwork after any incident — multilingual translation simplifies the rental insurer claim conversation',
				'As a re-printable backup from any hotel if your physical licence is lost on a multi-island trip (North Island ↔ Cook Strait ferry ↔ South Island itineraries cross several rental-pickup points)',
				'For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers NZ plus Australia, UK, Asian and European destinations on the same plan',
			],
		},
		needOfficial: {
			title: 'Documents NZ law actually cares about at a checkpoint or rental counter',
			items: [
				'Your physical US driver\'s licence — the actual permission to drive (NZTA-recognised for the 12-month visitor window)',
				'US passport — required at every document check and rental pickup; officers may verify identity especially for under-25 drivers',
				'Rental agreement and proof of valid CDW or comprehensive insurance — provided at pickup',
				'For specific situations: motorcycle endorsement on the US licence if renting a campervan above standard car-licence class',
			],
		},
		pattern:
			'What prepared US travellers in NZ actually carry: physical US licence + US passport + rental contract + CDW certificate + IDP Companion. The substantive trip preparation is the side-of-the-road switch (plan a short low-stress first drive in a quiet area before any urban pickup), the speed-camera discipline on the 100 km/h open-road limit (it reads as low coming from US Interstates but escalates fast on cameras), the engine-brake habit on Crown Range / Lindis Pass descents, and the offline-map prep for inland routes where mobile coverage is patchy outside the four main rental hubs.',
	},

	renting: {
		heading: 'Renting a car in New Zealand as a US driver',
		lead: 'New Zealand\'s rental market mixes international chains with strong NZ-owned operators in the campervan and budget segments. The four main hubs (Auckland, Wellington, Christchurch, Queenstown) cover most itinerary structures; the South Island peak (December–March) runs significantly higher than the shoulder seasons (October–November or April–May, typically 40–60% below peak).',
		chains: [
			{ name: 'Hertz New Zealand', policy: 'Operates at Auckland, Wellington, Christchurch and Queenstown airports plus regional locations. Accepts US driver\'s licences for the 12-month tourist window; some Queenstown branches request an IDP at peak fjord season.' },
			{ name: 'Avis New Zealand (incl. Budget)', policy: 'Wide network including remote South Island locations. US licences accepted; operates Budget under the same group.' },
			{ name: 'Apex Car Rentals (NZ local)', policy: 'NZ-owned, popular with US and Australian tourists for budget rentals. Strong presence at Auckland, Christchurch and Queenstown airports.' },
			{ name: 'JUCY / GoRentals / Britz (campervans)', policy: 'Campervan and motorhome rentals — popular for South Island self-drive trips. US licences accepted for car-licence-class campervans; larger motorhomes may require additional endorsement.' },
			{ name: 'Europcar New Zealand', policy: 'Strong city and airport presence. US licences accepted.' },
		],
		tipsHeading: 'Practical tips for renting and driving in New Zealand',
		tips: [
			'Plan a short low-stress first drive before any urban pickup — the side-of-the-road switch from US right-side habits is the day-one operational item, and building muscle memory in a quiet rural loop or industrial side road for 30–60 minutes pays back across the whole trip',
			'Pick up at the South Island airport you will start from — most US tourists fly into Christchurch or Queenstown for South Island loops; one-way drop-off at Auckland is possible but typically adds a fee',
			'Petrol vs diesel matters for cost — diesel rentals attract a separate Road User Charge (RUC) at refuel that adds NZD $0.08–0.10 per km. Sometimes diesel still comes out cheaper for long routes — check the math for your specific itinerary distance',
			'Single-lane bridges are common on rural South Island roads — signs show which side has priority. Slow down well in advance and look for oncoming traffic before entering',
			'Sheep on the road is genuinely common on rural South Island routes — slow to a walking pace and let them pass; it is the wildlife reality of the country',
			'Mobile coverage outside cities is patchy — download offline maps before leaving Christchurch or Queenstown for any inland route, especially West Coast and Mount Cook regions',
			'Crown Range Road and Lindis Pass have steep grades — engine-brake using lower gears on descent rather than the brake pedal; brake fade is a real problem on long downhills, especially in a fully-loaded campervan',
			'Three North Island toll roads only: Northern Gateway near Auckland, Tauranga Eastern Link and Takitimu Drive. Rental cars carry transponders by default; tolls bill automatically',
			'ACC (Accident Compensation Corporation) provides personal-injury cover for visitors without fault — but vehicle damage is on your CDW / rental contract; the no-fault personal-injury cover is unusual by US standards and simplifies a lot of post-incident paperwork',
			'Cook Strait ferry between Wellington (North Island) and Picton (South Island) — most rental companies allow inter-island travel via the Interislander or Bluebridge ferries but typically charge an additional crossing or inter-island fee; confirm in writing before booking the ferry',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for US drivers in NZ',
		lead: 'Most US-driver NZ trips end cleanly — NZTA\'s 12-month rule plus IDP Companion at the Queenstown counter handles the documentation, and the speed-camera ticket weeks after return is the most common avoidable surprise. The rarer first-day incident pattern (roundabout misread, wrong-side return from a fuel stop) is the operational consequence of the side-of-the-road switch. Six common cases ordered by frequency below.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common, all year off-peak',
				label: 'US licence accepted at rental pickup, you drive away in 15 minutes',
				text: 'NZTA tourist-window legal default. Christchurch or Auckland pickup, US licence presented, contract proceeds. Most NZ trips end this way when the side-of-the-road adjustment is handled cleanly and no speed-camera ticket surfaces.',
			},
			{
				severity: 'low',
				frequency: 'Common at Queenstown / peak summer',
				label: 'Desk agent asks for IDP at peak Queenstown pickup, you produce IDP Companion',
				text: 'Five extra minutes of paperwork verification at Queenstown during December–March peak, no further issue. The standardised English-translation block clears the question without contract delay; common when high-volume queue policy defaults to asking even when NZTA does not require.',
			},
			{
				severity: 'med',
				frequency: 'Common first-day pattern for US drivers',
				label: 'Roundabout misread or wrong-side return from a fuel stop in the first 24 hours',
				text: 'A first-day incident where day-one muscle memory from US right-side habits compounds at an unsigned junction or after a fuel stop — minor damage claim under CDW depending on contract terms. The quiet-area practice drive before any urban or motorway leg is the prevention.',
			},
			{
				severity: 'med',
				frequency: 'Common for US drivers',
				label: 'Speed-camera ticket from a rural NZ stretch',
				text: 'A mobile camera van on Crown Range Road, near Wanaka or on the Christchurch-Tekapo corridor catches a speed above the tier threshold. NZD $30–300 plus rental processing fee charged to your US card 4–8 weeks after the trip. The 100 km/h open-road limit reads as low coming from a 65–75 mph US Interstate culture and is the most common avoidable surprise.',
			},
			{
				severity: 'low',
				frequency: 'Occasional on South Island tourist routes',
				label: 'NZ Police stop near Queenstown or Wanaka with full paperwork',
				text: 'Brief 5-minute documentation review on a South Island tourist route — speed-check stop, document verification, on your way. US licence plus passport plus rental contract satisfies the standard check; IDP Companion shortens the conversation.',
			},
			{
				severity: 'high',
				frequency: 'Rare but real on alpine routes',
				label: 'Brake fade or weather event on Crown Range / Lindis Pass',
				text: 'A long descent without engine-braking causes brake fade on the Crown Range or Lindis Pass; or a winter weather event closes a high pass between June and September. Damage claim severity depends on what happens next; alpine routes require engine-brake discipline on descent and pass-status check at journeys.nzta.govt.nz before departure on any winter route.',
			},
		],
		math: '$35 IDP Companion vs the typical Queenstown peak-season same-day rebook differential (NZD $250/day same-day vs NZD $100/day shoulder-season rate) — the rental cost alone absorbs the IDP Companion many times over on a single avoidable refusal scenario. The bigger trip-cost lever for US travellers is the speed-camera discipline on the deceptive 100 km/h open-road limit, which can stack several NZD $100+ tickets across a 10-day South Island loop if the Interstate-speed default goes unchecked.',
	},

	howTo: {
		heading: 'How to prepare for driving in New Zealand (US citizens)',
		lead: 'The thing US drivers prep for in New Zealand that UK drivers do not is the day-one side-of-the-road switch from right-side habits to left-side driving — a 30–60 minute quiet-area practice drive before any urban pickup builds the muscle memory that prevents most first-day incidents. Second is the speed-camera discipline on the 100 km/h open-road limit, which reads as deceptively low coming from a 65–75 mph US Interstate culture. The licensing layer is settled by NZTA\'s 12-month visitor rule.',
		schemaName: 'How to prepare for driving in New Zealand as a US citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US driver\'s licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired licences are not accepted by NZTA or NZ rental companies. US licence valid for the first 12 months of any NZ visit under the NZTA visitor rule.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your US licence data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. The English version is the working-language route at every NZ touchpoint; the standardised layout shortens peak-season verification at Queenstown and Christchurch desks. Print at home or from any NZ hotel.',
			},
			{
				title: 'Plan a short low-stress first drive before any urban pickup',
				text: 'The day-one side-of-the-road switch from US right-side habits to NZ left-side driving is the biggest operational adjustment for US drivers. A 30–60 minute quiet rural loop or industrial side-road practice drive before any urban or motorway leg builds the muscle memory that prevents most first-day roundabout misreads or wrong-side returns from fuel stops.',
			},
			{
				title: 'Internalise the 100 km/h open-road limit vs US Interstate norms',
				text: 'NZ\'s open-road limit is 100 km/h — approximately 62 mph, lower than the 65–75 mph US Interstate norm. On empty South Island stretches the limit reads as deceptively low; the NZ Police tier escalates fast (NZD $30 at the bottom through NZD $300+ at 31–35 km/h over). Setting cruise control at 100 km/h is the single most reliable way to avoid the most common US-driver avoidable surprise.',
			},
			{
				title: 'Carry physical documents in one folder + check alpine route status',
				text: 'US licence + US passport + rental contract + CDW certificate + IDP Companion — all in one folder, in the vehicle. Hand the folder over at any NZ Police stop. For South Island alpine routes, engine-brake on Crown Range and Lindis Pass descents, read single-lane-bridge signs before entering, and check journeys.nzta.govt.nz for pass status before departure on any winter route.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in New Zealand as a US tourist?',
				answer: 'No. NZTA (Waka Kotahi) allows visitors to drive on a valid overseas licence for up to 12 months from the date of arrival. US licences are issued in English and accepted without translation. After 12 months, residents must convert to an NZ licence — tourists do not reach that threshold.',
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes — some NZ branches during peak December–March southern-summer season request an IDP at pickup even when NZTA does not require it. Queenstown is the most common location for this pattern given the volume concentration into a single South Island rental hub.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: "No. NZTA's 12-month rule covers US tourist driving without requiring an IDP. IDP Companion is the multilingual translation aid (your licence in twelve widely-read languages from the Geneva 1949 set) most useful for US travellers extending into Asia-Pacific destinations like Indonesia or Thailand where the Geneva 1949 IDP is legally needed. The official government IDP route is the printed booklet from the authorised national organisation.",
			},
			{
				id: 4,
				question: 'What side of the road do they drive on?',
				answer: 'Left — opposite to the US. The driver\'s seat is on the right side of the car. This is the single biggest day-one adjustment for US drivers and the operational item UK drivers do not face when driving in NZ. Practise in a quiet area for 30–60 minutes before navigating any urban or motorway leg.',
			},
			{
				id: 5,
				question: 'How does the 100 km/h open-road limit compare to US Interstate speeds?',
				answer: 'NZ\'s 100 km/h open-road limit is approximately 62 mph — lower than the 65–75 mph US Interstate norm. On empty South Island stretches the limit reads as deceptively low to drivers from a US Interstate culture, and the NZ Police speed-camera tier escalates fast (from NZD $30 at the bottom to NZD $300+ at 31–35 km/h over to court appearance + licence suspension equivalent at 40+ km/h over). Setting cruise control at 100 km/h is the simplest avoidance.',
			},
			{
				id: 6,
				question: 'Are mountain passes always open?',
				answer: 'No. Crown Range Road, Lindis Pass and high alpine routes can close in winter (June–September) or after major weather events. Always check journeys.nzta.govt.nz for current road conditions before planning any South Island winter route or alpine-pass itinerary.',
			},
			{
				id: 7,
				question: 'Can I take the rental between North and South Island?',
				answer: 'Most rental companies allow inter-island travel via the Cook Strait ferry (Interislander or Bluebridge from Wellington to Picton) but typically charge an additional crossing or inter-island fee. Confirm in writing before booking the ferry. Some rentals require the same vehicle to come back via ferry; others allow a North-Island-pickup / South-Island-dropoff arrangement with an extra fee.',
			},
			{
				id: 8,
				question: 'Are there many toll roads?',
				answer: 'Three only, all on the North Island: Northern Gateway near Auckland, Tauranga Eastern Link, and Takitimu Drive. Rental cars carry transponders by default; tolls bill automatically. The South Island has no toll roads.',
			},
			{
				id: 9,
				question: 'What if I have an accident?',
				answer: 'Call 111 for emergency services. Report all accidents involving injury or significant damage to the police. New Zealand\'s Accident Compensation Corporation (ACC) provides no-fault personal-injury cover for visitors — this is unusual by US standards and simplifies a lot of post-incident paperwork. Vehicle damage is on your CDW / rental contract.',
			},
			{
				id: 10,
				question: 'Will my US insurance cover me in New Zealand?',
				answer: 'Most US auto insurance policies do not extend internationally — verify with your insurer before relying on it. Rental CDW (Collision Damage Waiver) is sold at every NZ rental desk and is the standard cover for visitors; CDW deductible buy-down at pickup is the standard way to reduce risk on the first-day side-switch incident exposure or any alpine-route descent claim.',
			},
			{
				id: 11,
				question: 'Are tourist drivers really overrepresented in NZ accidents?',
				answer: 'Yes. NZTA\'s road-policing publications consistently flag overseas tourists as overrepresented in crashes — particularly in Otago, Southland and West Coast regions. Driving on the left, narrow rural roads, weather changes and single-lane bridges are the main contributors. Take the first day slow — the quiet-area practice drive is the prevention.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Pacific and English-speaking destinations where US drivers face the same left-side switch from right-side habits, plus the same NZ destination from the UK-driver perspective where the side-of-the-road switch is not an item.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'nz', label: 'UK → New Zealand', status: 'Live', href: '/idp-for-uk-drivers-in-new-zealand/' },
			{ flagFrom: 'us', flagTo: 'au', label: 'US → Australia', status: 'Live', href: '/idp-for-us-drivers-in-australia/' },
			{ flagFrom: 'us', flagTo: 'gb', label: 'US → United Kingdom', status: 'Live', href: '/idp-for-us-drivers-in-uk/' },
			{ flagFrom: 'us', flagTo: 'ie', label: 'US → Ireland', status: 'Live', href: '/idp-for-us-drivers-in-ireland/' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan/' },
			{ flagFrom: 'us', flagTo: 'za', label: 'US → South Africa', status: 'Live', href: '/idp-for-us-drivers-in-south-africa/' },
		],
	},

	finalCta: {
		heading: 'Picking up at Christchurch, Queenstown, Auckland or Wellington?',
		text: 'Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real US licence in two minutes. The English version is the working-language route at every NZ touchpoint. Valid 1–5 years and covers NZ plus Australia, UK, Asian and European destinations on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. The day-one item that UK drivers do not face is the side-of-the-road switch from US right-side habits to NZ left-side driving — plan a short quiet-area practice drive before any urban pickup. The 100 km/h open-road limit reads as low coming from a US Interstate culture but the speed-camera tier escalates fast.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			'IDP Companion is a private multilingual translation companion document and is not affiliated with NZTA Waka Kotahi (New Zealand Transport Agency), NZ Police, ACC (Accident Compensation Corporation), or any other New Zealand government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver\'s licence.',
		sourcesHeading: 'Sources',
		sources: [
			'New Zealand Transport Agency (Waka Kotahi) — Driving in NZ on an overseas licence (nzta.govt.nz)',
			'NZ Police — Speeding fines and road policing (police.govt.nz)',
			'ACC (Accident Compensation Corporation) — Visitor cover (acc.co.nz)',
			'Tourism New Zealand — Driving in NZ visitor advisory (newzealand.com/int/driving-in-new-zealand)',
			'US Embassy in Wellington — Driving advisory for US citizens (nz.usembassy.gov)',
			'journeys.nzta.govt.nz — Current NZ road and alpine-pass conditions for trip planning',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'New Zealand',
	},
};

export const usNewZealandCopy: Record<'en', CountryPairCopy> = { en };
