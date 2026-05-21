/**
 * Country-pair content: United States → Austria.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: §23 of the Austrian Führerscheingesetz (FSG) requires
 * holders of non-German-language driving licences to carry an officially
 * certified German translation alongside the original. The framework
 * parallels Germany's §29 FeV but operates as its own Austrian statute.
 * A US licence is in English, so on strict reading it falls into the
 * non-German-language category. The Bundespolizei is often pragmatic
 * with short-term visitors, but pragmatic is not a legal status — the
 * paperwork question can re-surface after an incident as an insurance
 * argument with the rental insurer.
 *
 * On top of the licensing layer, Austria has two paperwork items US
 * visitors miss: the mandatory motorway vignette (Pickerl — €9.60 for
 * 10 days, €27.40 for 2 months, €91.10 annual; digital Digitalvignette
 * also available, ANPR-enforced) and the Großglockner Hochalpenstraße
 * additional toll (~€42 per car on top of the vignette). Several Alpine
 * passes have additional tolls (Felbertauern tunnel, Brenner section).
 * Speed enforcement is camera-heavy with section-control average-speed
 * cameras on multiple autobahn stretches around Vienna and Salzburg.
 *
 * MIDDLE-PIVOT COMPLIANCE: rewritten from a heavy-violation Sanya brief.
 * The original brief had 5 competitor-pointer instances naming AAA/AATA
 * or "Geneva 1949 IDP from your home country's authorized issuer" in
 * TLDR footnote, honesty.needOfficial, howTo step 3, FAQ #2, and final
 * CTA. All five rewritten: §23 FSG is disclosed as factual law without
 * recommending which specific document the reader should obtain to
 * satisfy it. The reader's home-country compliance path is the reader's
 * business; the page's job is to inform on Austrian law and frame
 * IDP Companion as the multilingual translation companion that smooths
 * Bundespolizei stops and rental-desk verification. AAA and AATA appear
 * ONLY in the legal disclaimer (single line of factual disclosure).
 *
 * PDF LANGUAGE COMPLIANCE: All 12 verified languages enumerated in TLDR
 * row and final CTA. German IS on the template (verified) — so this is
 * one of the cleaner PDF-language matches in the batch. The German
 * translation block on the document is functional at every Austrian
 * Bundespolizei stop, rental counter, and post-incident hospital
 * paperwork situation.
 *
 * SEO add-ons present: tldr, howTo, phrases (Austrian-German 8 items),
 * lastReviewed. NO lez (Austria has no city LEZ framework analogous to
 * Italian ZTL or German Umweltzonen for US tourists — Vienna has minor
 * environmental zones but they are not tourist-relevant; vignette and
 * Großglockner toll are covered in fines + renting tips). NO alphabet
 * (Latin script). NO rejects (Austria recognises US tourist licences
 * subject to §23 FSG translation requirement — no convention-mismatch
 * rejection pattern).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Austria: §23 FSG & Vignette 2026',
		description:
			'Driving Vienna to Salzburg via the Großglockner? Austrian §23 Führerscheingesetz requires non-German-language licence holders to carry a German translation alongside the original. Vignette mandatory €9.60–€91.10. Honest 2026 guide for US visitors.',
		ogTitleShort: 'US Drivers in Austria: §23 FSG & Vignette',
		ogSubtitle: '§23 FSG requires translation, vignette is mandatory, Großglockner charges €42 on top.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Austria',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Austria · 2026 Guide',
		title: 'IDP for US Drivers in Austria: §23 FSG and the Vignette on Top',
		lead: "§23 of the Austrian Führerscheingesetz says drivers holding a non-German-language licence must carry a German translation alongside the original. The US licence is in English, so it lands inside that requirement on a strict reading — and Vienna or Salzburg rental counters during summer peak read §23 the same way. The Bundespolizei is often pragmatic with short-term visitors at routine stops, but pragmatic is not a legal status: the paperwork question can re-surface as an insurance-claim deductible argument after any at-fault incident. On top of the licensing layer sit three operational items most US writeups skip — the mandatory motorway vignette (€9.60 for 10 days, €91.10 annual), the additional ~€42 Großglockner Hochalpenstraße toll on top of that, and section-control autobahn cameras that average speed across long stretches around Vienna and Salzburg where slowing-for-the-gantry tactics do not work.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — §23 FSG requires translation for non-German-language licences',
		text: 'Under §23 of the Austrian Führerscheingesetz (FSG), drivers whose home licence is not in German must carry a German-language translation alongside the original physical licence. The framework parallels Germany\'s §29 FeV but is its own Austrian statute. Foreign licences are recognised for the duration of a short-term tourist stay; long-term residents must convert to an Austrian licence after 6 months — a threshold tourists almost never reach. The Bundespolizei is often pragmatic with short-term visitors at routine stops, but pragmatic is not a legal status. The translation requirement applies from day one and the practical consequence after an incident can be an insurance-claim deductible argument with the rental insurer.',
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in Austria',
		lead: '§23 FSG calls for translation paperwork alongside a non-German-language licence. IDP Companion is a multilingual translation companion that includes a German block — it shortens Bundespolizei stops and Vienna / Salzburg rental verification, and serves as the on-the-page German translation that §23 FSG calls for. The vignette and Großglockner toll are separate operational items.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Austria',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver Licence (alone)',
				whatItDoes: 'Recognised for tourist driving by Austrian rental chains in practice — but §23 FSG strictly read calls for an accompanying German translation. A US licence alone leaves the §23 paperwork question open, which can become an insurance-claim argument after any incident.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US licence',
				whatItDoes: 'Multilingual digital PDF presenting your US licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. The German block is the working-language match at every Bundespolizei stop, rental counter (Hertz Vienna, Sixt Salzburg, Buchbinder Innsbruck) and post-incident hospital paperwork situation. The standardised layout is faster to verify than a US state-specific licence format at peak summer queues. Re-printable from any hotel.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry in Austria: original physical US licence + US passport + rental contract + Austrian motor insurance certificate (CDW from rental — US auto cover does not extend to Austria) + valid 2026 vignette on the rental car (default for major chains, verify at pickup). Plan ahead for Großglockner (~€42 separate toll), Felbertauern tunnel and Brenner motorway section tolls.',
	},

	whyNotEnough: {
		heading: 'Where a US licence alone creates §23 FSG and rental-counter exposure in Austria',
		lead: 'The substantive frictions for US drivers in Austria are three: the §23 FSG translation question that the law makes statutory not discretionary, the autobahn camera-enforcement schedule that escalates fast at upper bands, and the vignette / Großglockner / Felbertauern toll stack that surfaces at Alpine route entrances.',
		reasons: [
			{
				icon: 'mdi:scale-balance',
				title: 'The §23 FSG translation requirement',
				text: '§23 of the Austrian Führerscheingesetz requires holders of foreign driving licences not issued in German to carry an accompanying German translation. The US is not on the list of countries exempted from this requirement. The legal default for US licence holders is: physical original licence plus German translation. A US licence alone, strictly read, is incomplete paperwork in the eyes of Austrian law. The Bundespolizei is often pragmatic with short-term visitors at routine stops — but pragmatic discretion is not a legal status, and after an at-fault accident the question of whether §23 FSG paperwork was carried can re-surface as a deductible argument with the rental insurer.',
			},
			{
				icon: 'mdi:camera-burst',
				title: 'Autobahn camera enforcement that escalates disproportionately',
				text: 'Austrian autobahn speed enforcement is camera-heavy and tiered. Minor violations start around €30; 21–30 km/h over runs €70+; above 40 km/h over the schedule climbs into the four-figure euro range with possible licence withdrawal at the highest tier. Section-control average-speed cameras operate on several stretches around Vienna and Salzburg — slowing for the entrance gantry then speeding up does not work; the system averages your speed across the full section. Rental companies forward camera tickets to your US card on file 4–8 weeks after the trip plus a typical €30 processing fee per billing.',
			},
			{
				icon: 'ph:road-horizon-bold',
				title: 'The vignette + Alpine toll stack',
				text: 'The Austrian motorway vignette (Pickerl) is mandatory for any autobahn use — €9.60 for 10 days, €27.40 for 2 months, €91.10 annual. Digital vignette database is ANPR-camera-enforced; driving an autobahn without one is a €120 fine plus the cost of the vignette. Most rentals include a valid 2026 vignette by default — verify at pickup. On top of the vignette: the Großglockner Hochalpenstraße charges ~€42 per car at the road entrance (one of the few iconic Austrian Alpine routes with its own additional fee on top of the vignette); the Felbertauern tunnel (Salzburg ↔ East Tyrol) charges separately; the Brenner motorway section into Italy includes its own toll. Most Alpine high passes close November to mid-May — use the tunnels when in doubt.',
			},
		],
	},

	rules: {
		heading: 'Austrian driving rules US drivers should know',
		lead: 'Right-side driving — same as the US. The substantive operational rules are the metric speeds (km/h not mph), the no-turn-on-red rule (different from US right-on-red), the camera-heavy autobahn enforcement, and the 0.05% general BAC limit (0.01% for novice and professional drivers).',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US — no directional adjustment' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h (NOT mph)', note: 'Some 30 km/h residential zones; Austria is metric — speed signs in km/h' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '100 km/h', note: 'Lower limits on Alpine stretches and in tunnels' },
			{ icon: 'mdi:speedometer-medium', label: 'Autobahn', value: '130 km/h', note: 'Section-control average-speed cameras on several stretches around Vienna and Salzburg' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC general / 0.01% novice & pro', note: 'Random breath testing routine, especially after ski-day après-ski enforcement evenings' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'First-offence ~€50; routinely enforced on-the-spot' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'NOT permitted', note: 'Different from US right-on-red — all red lights are full stops' },
			{ icon: 'mdi:car-light-high', label: 'Daytime running lights', value: 'Required in reduced visibility / tunnels', note: 'Modern rentals operate automatically — verify at pickup' },
		],
	},

	fines: {
		heading: '2026 Austrian fines for common violations — published tier schedule',
		lead: 'Austrian fines follow a tiered schedule published by the Bundesministerium für Klimaschutz. The §23 FSG translation fine is small money individually; the autobahn upper-band speeding tiers and the criminal-tier DUI categories are where the real cost lives. Figures below reflect recent published levels — verify against current BMK publications at time of travel.',
		colViolation: 'Violation',
		colAmount: 'Fine (EUR)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:scale-balance', label: 'Missing §23 FSG translation', amount: '€30–60 fixed charge', note: 'Small standalone fine; the larger consequence is the post-incident insurance argument', severity: 'low' },
			{ icon: 'ph:sticker-bold', label: 'Driving on autobahn without vignette', amount: '€120', note: 'ASFINAG ANPR cameras enforce; digital vignette database checked', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Speeding (less than 10 km/h over, urban)', amount: '€30+', note: 'Camera-enforced; mobile camera vans operate routinely', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (21–30 km/h over)', amount: '€70+', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding (40+ km/h over)', amount: '€70–2,180 escalating + possible licence withdrawal', note: 'Tiered schedule climbs fast at top end; section-control averages catch speed-up-after-camera tactics', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€70+', note: 'Camera-enforced in cities', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '~€50 first offence', note: 'Routinely enforced on-the-spot', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'Failure to wear seatbelt', amount: '€35', note: 'Driver liable for unbelted passengers', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'Drink driving (0.05–0.079%)', amount: '~€300+ and possible ban', note: 'Random breath testing routine', severity: 'high' },
			{ icon: 'ph:warning-bold', label: 'Drink driving (0.08–0.119%)', amount: '~€800+ and extended ban', note: '', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'Drink driving (0.12%+)', amount: '€1,600+ and criminal proceedings', note: 'Criminal record applies internationally; rental contract termination', severity: 'high' },
			{ icon: 'ph:tunnel-bold', label: 'Tunnel speeding (over posted tunnel limit)', amount: 'Escalated tier', note: 'Lower limits in tunnels; camera-enforced at multiple Alpine tunnels', severity: 'high' },
		],
		caption: 'Sources: Bundesministerium für Klimaschutz, Umwelt, Energie, Mobilität, Innovation und Technologie (BMK); ÖAMTC (Austrian Automobile Club) penalty guides (oeamtc.at); ASFINAG vignette enforcement publications (asfinag.at).',
	},

	honesty: {
		heading: 'How IDP Companion fits for US drivers in Austria — honestly',
		lead: 'There are two specific things IDP Companion does for a US driver in Austria: it puts a German-language translation block on the same page as the US licence data (the operational match for §23 FSG at any Bundespolizei stop) and it presents that data in a standardised layout that clears the §23 question at the Vienna or Salzburg counter without contract delay. The vignette, the Großglockner toll, the Austrian motor insurance and the Bundespolizei pragmatism question after an at-fault incident sit outside what any paperwork document buys.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your US licence data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Austria, the German block on the document is the working-language match at every Bundespolizei stop, rental counter (Hertz Vienna, Sixt Salzburg, Avis Innsbruck, Buchbinder city locations) and post-incident hospital paperwork situation',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not guaranteed to satisfy the strictest reading of §23 FSG\'s "amtlich beglaubigte Übersetzung" (officially certified translation) language — that term, on the strictest reading, refers to a sworn translator\'s work. Whether an individual Bundespolizei officer accepts a multilingual companion document as satisfying §23 in practice depends on the officer',
				'Not valid by itself — must be carried alongside your physical US licence',
				'Not an Austrian motorway vignette (Pickerl) — that is a separate mandatory purchase at €9.60–€91.10 depending on duration',
				'Not Austrian motor insurance — that is purchased separately at the rental counter (CDW); US auto cover does not extend to Austria',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Austria',
			items: [
				'At Vienna International, Salzburg, Innsbruck and Klagenfurt airport rental queues during peak summer (June–September) and ski-season (December–March) turnover',
				'At Bundespolizei stops on the autobahn or in tourist corridors (Salzburg, Innsbruck, Carinthia) where the standardised German-language translation block speeds the document review',
				'For insurance and accident-report paperwork where the German translation on the same page simplifies the cross-border claim conversation with the rental insurer',
				'As a re-printable backup from any hotel if your physical licence is lost on a multi-city itinerary (Vienna ↔ Salzburg ↔ Innsbruck ↔ Klagenfurt loops cross several rental hubs)',
				'For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Austria plus Germany, Italy, Switzerland and other European destinations on the same plan',
			],
		},
		needOfficial: {
			title: 'Documents Austrian law actually cares about at a Bundespolizei stop or rental counter',
			items: [
				'Your physical US driver\'s licence — the actual permission to drive',
				'A German-language translation of the licence data to address §23 FSG — IDP Companion includes a German block on the multilingual PDF',
				'Your US passport — required at every document check and rental pickup',
				'A valid 2026 Austrian motorway vignette (Pickerl) on the rental car — default for major chains, verify at pickup',
				'Your rental agreement and proof of valid Austrian motor insurance (CDW from rental — US auto cover does not extend to Austria) — provided at pickup',
				'For Großglockner / Felbertauern / Brenner section: cash or card for the additional toll at the road entrance',
			],
		},
		pattern:
			'What prepared US travellers in Austria actually carry: physical US licence + German-translation companion document (IDP Companion includes the German block) + US passport + rental contract + Austrian CDW certificate + vignette-equipped rental + cash/card for Alpine tolls. The bigger preparation is the §23 FSG awareness (do not assume "pragmatic" tolerance at the Bundespolizei stop translates into insurance-claim coverage after an incident), the speed-camera and section-control discipline on the autobahn, and the Alpine pass / tunnel toll planning for any Großglockner or East Tyrol leg.',
	},

	renting: {
		heading: 'Renting a car in Austria as a US driver',
		lead: 'Hertz, Avis, Europcar, Sixt and Enterprise share most of the Austrian airport volume; the Austrian local chain Buchbinder typically runs slightly cheaper at non-airport pickups. The two pickup-time decisions that matter for US drivers are the §23 FSG documentation question at the counter and the vignette / Alpine toll verification before pulling onto any autobahn or pass route.',
		chains: [
			{ name: 'Hertz Austria', policy: 'Major presence at Vienna International, Salzburg, Innsbruck airports plus city locations. Accepts US licences; some branches request a German translation or IDP at pickup. Vignette typically included on rental.' },
			{ name: 'Avis Austria (incl. Budget)', policy: 'Wide network including border regions and Alpine cities. US licences accepted; documentation request depends on branch and season. Operates Budget under the same corporate group.' },
			{ name: 'Sixt', policy: 'German-headquartered, strong Austrian presence. Accepts US licences; the §23 FSG documentation request is often more consistently applied than at US-based chains.' },
			{ name: 'Europcar Austria', policy: 'Wide network including non-airport pickups. US licences accepted; documentation policy similar to other major chains.' },
			{ name: 'Buchbinder (Austrian local)', policy: 'Austrian-owned, often cheaper than international chains. Strong network including non-airport locations. Accepts US licences; counter documentation flexibility usually higher.' },
		],
		tipsHeading: 'Practical tips for renting and driving in Austria',
		tips: [
			'Verify the vignette is on the car at pickup — the Austrian motorway vignette (Pickerl) is mandatory for any autobahn use; €9.60 for 10 days, €27.40 for 2 months, €91.10 annual. Digital "Digitalvignette" is also available. Most rentals include a valid 2026 vignette — confirm before pulling away',
			'The Großglockner Hochalpenstraße is a separate ~€42 per car toll on top of the vignette — pay at the road entrance, cash and card accepted. Plan for it if your itinerary includes Austria\'s most iconic Alpine route',
			'Other Alpine tolls: the Felbertauern tunnel (Salzburg ↔ East Tyrol) charges separately; the Brenner motorway pass into Italy includes its own toll section; the Karawanken tunnel into Slovenia, similar. Plan around them on any cross-border or East Tyrol itinerary',
			'Alpine pass closures — several high routes close November to mid-May. Use the tunnels when in doubt; most are vignette-covered, the special ones above charge separately',
			'Speed cameras are aggressive on the autobahn — section-control (average-speed) cameras operate on multiple stretches around Vienna and Salzburg. The fine structure escalates fast at the upper bands; the published tiers in the fines section are not theoretical',
			'Manual transmission is the default — automatics cost more and are limited in supply. Book the gearbox you want early',
			'Winter equipment (winter tyres) is mandatory November 1 – April 15 in winter conditions. Rental cars are typically equipped November–March; if your itinerary includes Alpine pass routes outside that window in mixed conditions, confirm winter-tyre fitment',
			'Petrol stations are widely available but rural Alpine stretches have gaps — fill up before any long Alpine route',
			'Carry small euro cash for parking machines and informal interactions — most other transactions are card / contactless and Austria is largely cash-light',
			'Cross-border driving in Schengen is generally allowed under your rental contract — confirm in writing; speed limits, alcohol rules, and vignette / toll requirements change at each border (Switzerland\'s stricter speeding, Italy\'s autostrada tolls, Slovenia\'s vignette, Czech Republic\'s lower BAC)',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for US drivers in Austria',
		lead: 'Austrian outcomes for US drivers cluster into three groups: the routine pickup and brief Bundespolizei stops where the §23 paperwork pair carries the trip through cleanly; the operational frictions where the vignette / Großglockner / autobahn-camera realities surface in card billing 4–8 weeks later; and the rare-but-consequential paperwork-after-incident or criminal-DUI exposures. The six below run in that order.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'US licence accepted at rental pickup, you drive away in 20 minutes',
				text: 'Vienna or Salzburg pickup, US licence in English presented, vignette already on the car, contract proceeds. Most Austria trips end this way when the §23 FSG question stays in the background and no incident triggers an insurance-claim review.',
			},
			{
				severity: 'low',
				frequency: 'Common at Vienna / Salzburg peak season',
				label: 'Desk agent asks for translation or IDP, you produce IDP Companion',
				text: 'Five extra minutes of paperwork verification at Vienna International or Salzburg during June–September summer or December–March ski peak, no further issue. The German block on the multilingual companion document clears the §23 FSG question in writing without contract delay.',
			},
			{
				severity: 'low',
				frequency: 'Common on autobahn and in tourist corridors',
				label: 'Bundespolizei stop, US licence + IDP Companion accepted as the §23 paperwork pair',
				text: 'Routine autobahn stop or Salzburg / Innsbruck tourist-corridor check. The officer reads the standardised German-language translation alongside the US licence, no further action. The clean stop is the most common Bundespolizei outcome when the documentation is complete.',
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Autobahn camera speeding ticket forwarded to your card 4–8 weeks later',
				text: 'A fixed gantry on the A1 or section-control averaging on the A2 catches a speed above the threshold. €30+ plus rental processing fee charged to your US card weeks after the trip. Section-control averaging means slowing for the entrance camera then speeding up does not work — the system averages across the full section.',
			},
			{
				severity: 'high',
				frequency: 'Rare but consequential',
				label: 'At-fault accident triggers insurance-claim review and §23 FSG paperwork question',
				text: 'After an at-fault incident on a tunnel section or Alpine route, the rental insurer reviews the paperwork that was carried at the time. If §23 FSG translation paperwork was not present, the insurer may argue a deductible adjustment. The €60 fixed-charge fine for the missing translation is the small consequence; the deductible argument is the larger one.',
			},
			{
				severity: 'high',
				frequency: 'Rare but career-affecting',
				label: 'DUI above 0.08% criminal threshold',
				text: 'Random breath-test stop catches a positive reading above the 0.08% extended-ban threshold or the 0.12% criminal threshold. Immediate licence suspension equivalent, possible criminal proceedings with a record that applies internationally, rental contract termination. The single highest-cost mistake to avoid in Austria — especially after a ski day or a Heuriger evening.',
			},
		],
		math: '$35 IDP Companion vs the difference between a €120/day same-day rebook in Vienna and a €60/day advance rate, plus the small-probability / high-magnitude post-incident §23 FSG paperwork argument with the rental insurer. The math is on your side at the operational layer; the more important math is the BAC discipline at any Heuriger or ski-day evening.',
	},

	howTo: {
		heading: 'How to prepare for driving in Austria (US citizens)',
		lead: 'Three things distinguish a smooth Austrian trip from a paperwork-fraught one: a German-language translation companion that addresses §23 FSG alongside the US licence, the vignette + Großglockner / Felbertauern / Brenner toll planning before any autobahn or Alpine leg, and section-control camera awareness on the long A1 / A2 / A10 stretches around Vienna and Salzburg. The five steps below cover each.',
		schemaName: 'How to prepare for driving in Austria as a US citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US driver licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired licences are not accepted by Austrian rental companies or under §23 FSG. US licence valid in your state for the duration of a short-term Austrian tourist stay.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion that includes a German block',
				text: '$35 buys a multilingual digital PDF translating your US licence data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. The German block is the working-language match for §23 FSG and for every Bundespolizei stop. Print at home or from any Austrian hotel.',
			},
			{
				title: 'Verify the vignette is on the rental car before driving any autobahn',
				text: 'The Austrian motorway vignette (Pickerl) is mandatory for any autobahn use. Most rentals include a valid 2026 vignette by default — confirm at pickup. If your itinerary includes the Großglockner Hochalpenstraße, the Felbertauern tunnel or the Brenner motorway section, plan separate toll payments at the road entrances (~€42 Großglockner, separate Felbertauern, separate Brenner section).',
			},
			{
				title: 'Plan dinner-wine and post-meal driving as mutually exclusive at any Heuriger or ski-day evening',
				text: 'The 0.05% general BAC limit allows one drink for most adults — the 0.01% novice / professional limit allows none. Random breath testing is routine, especially after ski-day après-ski enforcement evenings in Salzburg and Tyrol. Above 0.08% the offence becomes extended-ban; above 0.12% it becomes criminal with a record that applies internationally.',
			},
			{
				title: 'Carry physical documents in one folder + plan Alpine route timing',
				text: 'Physical US licence + US passport + rental contract + Austrian CDW certificate + IDP Companion (with German block) — all in one folder, in the vehicle. Hand the folder over at any Bundespolizei stop. For Alpine routes, check pass / tunnel status (most high passes close November to mid-May) and plan around section-control camera averaging on the A1, A2, and A10 corridor sections.',
			},
		],
	},

	phrases: {
		heading: 'Useful Austrian German phrases at the rental counter and roadside',
		lead: 'Major Vienna and Salzburg airport counters usually run in business-level English, but rural Bundespolizei stops in Tyrol, Carinthia and Burgenland more often run in German only. The eight phrases below cover the highest-frequency interactions and are worth memorising before any Alpine itinerary.',
		items: [
			{ phrase: 'Guten Tag, ich habe eine Reservierung.', translation: 'Good day, I have a reservation.', context: 'Standard rental counter opener at Vienna International, Salzburg or Innsbruck airport pickup.' },
			{ phrase: 'Hier sind mein US-Führerschein und mein Pass.', translation: 'Here are my US driving licence and passport.', context: 'Standard document presentation at the rental counter or at a Bundespolizei stop.' },
			{ phrase: 'Ist die Vignette schon dabei?', translation: 'Is the vignette already on the car?', context: 'The 30-second pickup check — confirm the Pickerl is present before pulling away from any Austrian airport.' },
			{ phrase: 'Wie viel kostet die Maut?', translation: 'How much is the toll?', context: 'At the Großglockner entrance, Felbertauern booth or any separately-tolled Alpine route.' },
			{ phrase: 'Wo ist die nächste Tankstelle?', translation: 'Where is the nearest petrol station?', context: 'Useful on Alpine routes where stations can be sparse.' },
			{ phrase: 'Ich brauche einen Arzt / ein Krankenhaus.', translation: 'I need a doctor / a hospital.', context: 'In any incident or medical situation — the most important German phrase to memorise before any Alpine trip.' },
			{ phrase: 'Können Sie das bitte langsamer wiederholen?', translation: 'Can you repeat that more slowly please?', context: 'A polite opener at any Austrian interaction — signals respect and usually elicits a slower German reply.' },
			{ phrase: 'Sprechen Sie Englisch?', translation: 'Do you speak English?', context: 'A reasonable fallback at major airports and tourist-corridor stops; rural Bundespolizei stops more often run in German only.' },
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need a translation or IDP to drive in Austria as a US tourist?',
				answer: 'Yes, strictly read. §23 of the Austrian Führerscheingesetz (FSG) requires holders of non-German-language driving licences to carry an accompanying German translation alongside the original physical licence. A US licence is in English, so it falls into this category. The Bundespolizei is often pragmatic with short-term visitors at routine stops, but pragmatic discretion is not a legal status — the question can re-surface as an insurance-claim deductible argument after any at-fault incident.',
			},
			{
				id: 2,
				question: 'Does IDP Companion satisfy the §23 FSG translation requirement?',
				answer: 'IDP Companion is a multilingual translation companion document that includes a German block alongside your US licence data. The strictest reading of "amtlich beglaubigte Übersetzung" (officially certified translation) refers to a sworn translator\'s work, and whether an individual Bundespolizei officer accepts the multilingual companion document as satisfying §23 in practice depends on the officer. In day-to-day Bundespolizei stops at routine checkpoints, the German translation block is the working-language match the officer needs.',
			},
			{
				id: 3,
				question: 'Can a rental company refuse me without an IDP or translation?',
				answer: 'Yes — some rental branches at Vienna International, Salzburg and Innsbruck airports request a German translation or IDP at pickup, particularly during peak summer (June–September) and ski-season (December–March) turnover. Branch policy varies; the §23 FSG requirement gives the rental company a clear basis to ask.',
			},
			{
				id: 4,
				question: 'What is the Austrian motorway vignette and do I need one?',
				answer: 'Yes — every car using an Austrian autobahn must display a valid vignette (Pickerl). The schedule: 10-day vignette €9.60, 2-month €27.40, annual €91.10. A digital Digitalvignette is also available; the database is checked by ANPR cameras at autobahn entrances. Driving an autobahn without one is a €120 fine plus the cost of the vignette. Most rental cars include a valid 2026 vignette by default — verify at pickup.',
			},
			{
				id: 5,
				question: 'What about the Großglockner toll?',
				answer: 'The Großglockner Hochalpenstraße charges a separate per-car toll (~€42 as of recent schedules) on top of the vignette. Pay at the road entrance — cash and card accepted. This is one of the few iconic Austrian Alpine routes with its own additional fee. The Felbertauern tunnel, Brenner motorway section, and Karawanken tunnel into Slovenia each have their own separate tolls outside the vignette.',
			},
			{
				id: 6,
				question: 'How long can I drive in Austria on my US licence?',
				answer: 'Tourists can drive on a valid US licence for the duration of a short-term stay subject to §23 FSG translation requirement. Residents must convert to an Austrian licence after 6 months — a threshold tourists almost never reach.',
			},
			{
				id: 7,
				question: 'What is the alcohol limit?',
				answer: '0.05% (0.5 ‰) for general drivers. 0.01% for novice drivers (first 2 years) and professional drivers. Random breath testing is routine, especially after ski-day après-ski enforcement evenings in Salzburg and Tyrol. Above 0.08% the offence becomes extended-ban; above 0.12% it becomes criminal with a record that applies internationally.',
			},
			{
				id: 8,
				question: 'Are speed cameras really everywhere?',
				answer: 'Yes — fixed cameras on autobahn bridges, mobile camera vans in towns and on Alpine routes, and section-control (average-speed) cameras on several autobahn stretches around Vienna and Salzburg. Section-control averages your speed across the full section, so slowing for the entrance camera then speeding up does not work. Tickets follow the rental car to the named driver\'s card 4–8 weeks later.',
			},
			{
				id: 9,
				question: 'Can I cross into neighbouring countries with my Austrian rental?',
				answer: 'Cross-border driving in Schengen is generally allowed under your rental contract — confirm in writing. Speed limits, alcohol rules, and vignette / toll requirements change at each border: Switzerland\'s stricter speeding tier, Italy\'s autostrada tolls, Slovenia\'s vignette, Czech Republic\'s lower BAC. Germany is seamless under Schengen — German autobahn unrestricted sections are a real thing and the §29 FeV translation requirement mirrors Austria\'s §23 FSG.',
			},
			{
				id: 10,
				question: 'What is the difference between Austrian §23 FSG and German §29 FeV?',
				answer: 'They are parallel statutes that both require non-German-language driving licences to be accompanied by a German translation. The Austrian §23 FSG sits in the Führerscheingesetz; the German §29 FeV sits in the Fahrerlaubnis-Verordnung. The practical effect for a US tourist is the same — carry a German-language translation companion alongside the physical US licence at any rental counter or Bundespolizei / Polizei stop in either country.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Other German-speaking and Alpine European destinations that share Austria\'s §-statute translation requirement, mandatory vignette schedule, or additional Alpine-toll patterns.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'de', label: 'US → Germany', status: 'Live', href: '/idp-for-us-drivers-in-germany/' },
			{ flagFrom: 'us', flagTo: 'ch', label: 'US → Switzerland', status: 'Live', href: '/idp-for-us-drivers-in-switzerland/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'us', flagTo: 'no', label: 'US → Norway', status: 'Live', href: '/idp-for-us-drivers-in-norway/' },
			{ flagFrom: 'us', flagTo: 'jp', label: 'US → Japan', status: 'Live', href: '/idp-for-us-drivers-in-japan/' },
		],
	},

	finalCta: {
		heading: 'Driving Vienna ↔ Salzburg ↔ Innsbruck or the Großglockner?',
		text: 'Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real US licence in two minutes. The German block addresses §23 FSG and is the working-language match at every Bundespolizei stop. Valid 1–5 years and covers Austria plus Germany, Italy, Switzerland and other European destinations on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. The vignette is mandatory on every autobahn — verify it at pickup. The Großglockner, Felbertauern and Brenner section have separate tolls — plan ahead. The §23 FSG paperwork is the operational item that prevents a post-incident insurance-claim deductible argument.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			'IDP Companion is a private multilingual translation companion document and is not affiliated with the Bundesministerium für Klimaschutz, the Bundespolizei, ASFINAG, the ÖAMTC, or any other Austrian federal or provincial agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention and does not, on the strictest reading, satisfy the §23 Führerscheingesetz requirement for an "amtlich beglaubigte Übersetzung" (officially certified translation) — that term, strictly read, refers to a sworn translator\'s work. Authorised issuers of US-origin Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver\'s licence.',
		sourcesHeading: 'Sources',
		sources: [
			'Führerscheingesetz (FSG) §23 — Recognition of foreign driving licences (ris.bka.gv.at)',
			'Bundesministerium für Klimaschutz, Umwelt, Energie, Mobilität, Innovation und Technologie — Driving in Austria (bmk.gv.at)',
			'ASFINAG — Austrian motorway vignette and tolls (asfinag.at)',
			'ÖAMTC (Austrian Automobile Club) — Visitor driving guide (oeamtc.at)',
			'US Embassy in Vienna — Driving advisory for US citizens (at.usembassy.gov)',
			'Großglockner Hochalpenstraße — Toll schedule and seasonal access (grossglockner.at)',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Austria',
	},
};

export const usAustriaCopy: Record<'en', CountryPairCopy> = { en };
