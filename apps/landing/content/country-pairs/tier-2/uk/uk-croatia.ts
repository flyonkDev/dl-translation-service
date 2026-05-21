/**
 * Country-pair content: United Kingdom → Croatia.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Three structural changes for UK drivers in Croatia in
 * three years, none of them is the IDP question:
 *  - Pelješac Bridge opened summer 2022, bypassing the famous two-
 *    border crossing through Bosnia's 9km Neum coastal corridor on the
 *    Split-to-Dubrovnik route.
 *  - Croatia joined Schengen on 1 January 2023 — borders with Slovenia
 *    and Hungary are now passport-free.
 *  - Croatia adopted the Euro on the same day (1 January 2023) — prices
 *    in EUR not HRK.
 * UK gov.uk Croatia travel advice continues to confirm no IDP needed
 * for UK photocard licence holders on tourist visits.
 *
 * Distinctive content: Croatian mandatory in-car equipment rule
 * (warning triangle, hi-vis vest, spare bulbs, first-aid kit verified
 * at roadside checks); Dubrovnik Old Town vehicle ban with paid parking
 * at Gradac / Ilijina Glavica; split BAC regime (0.05% general but
 * 0.00% for under-24 and professional drivers); autocesta speed-camera
 * enforcement on A1/A3/A7; ENC autocesta transponder.
 *
 * MIDDLE-PIVOT COMPLIANCE: clean — Sanya's brief had no AA / RAC /
 * PayPoint mentions outside legal disclaimer. Verified in audit.
 * PayPoint replaces Post Office per March 2024 change in disclaimer.
 *
 * PDF LANGUAGE COMPLIANCE (binding per CLAUDE.md):
 * Croatian is NOT on the IDP Companion template. Verified PDF set is
 * EN, FR, ES, DE, IT, PT, VI, RU, AR, ZH, JA, TH = 12 languages.
 * Approved framing: reframe through English. Croatia is in the EU and
 * a major tourist economy with very high English proficiency at major
 * Adriatic-coast rental chains (Hertz/Avis/Sixt/Europcar at Split,
 * Dubrovnik, Zadar, Pula airports), Croatian Police tourist-area
 * interactions and the Croatian Auto Club (HAK) tourist information
 * network. Italian is also widely understood on the Istrian peninsula
 * (Pula, Rovinj) due to historical Italian influence — and Italian IS
 * on our PDF, giving Croatian visitors a second working-language route
 * on the Istrian coast. Do NOT claim "Croatian" anywhere as a PDF
 * language.
 *
 * SEO add-ons present: tldr, phrases (8 Croatian items as cultural
 * value), howTo, lastReviewed.
 * NO lez block — Croatia doesn't have ZTL/ZBE equivalents in the EU
 * sense; Dubrovnik Old Town parking ban is structurally different and
 * lives in renting tips.
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Croatia: 2026 Post-Brexit Guide',
		description:
			"Driving the Dalmatian coast post-Brexit? UK photocard accepted in Croatia — no IDP needed. But Schengen entry, Euro adoption, the Pelješac Bridge and Croatia's mandatory in-car kit have all changed the trip since 2022. Honest 2026 guide for British drivers in Split, Dubrovnik and beyond.",
		ogTitleShort: 'UK Drivers in Croatia: 2026 Guide',
		ogSubtitle: 'Photocard works. Schengen, Euro and Pelješac Bridge changed everything else.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Croatia',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Croatia · 2026 Guide',
		title: 'IDP for UK Drivers in Croatia: Schengen, Euro & the Pelješac Bridge',
		lead: "Three structural changes have rewired UK driving trips to Croatia since 2022 — none of them is the IDP question. The Pelješac Bridge opened in summer 2022 and bypasses the famous two-border crossing through Bosnia's 9km Neum coastal corridor on the Split-to-Dubrovnik run. Croatia joined Schengen and adopted the Euro on the same day, 1 January 2023 — borders with Slovenia and Hungary are now passport-free and the Croatian Kuna is gone. UK gov.uk Croatia travel advice continues to confirm no IDP needed for UK photocard licence holders on tourist visits. What hasn't changed: Croatian autocesta camera enforcement on the A1 Zagreb-Split-Ploče corridor, the mandatory in-car equipment kit (warning triangle, hi-vis vest, spare bulbs, first-aid kit) verified at roadside checks, the split BAC regime (0.05% general but 0.00% for drivers under 24 and professional drivers) and Dubrovnik's Old Town vehicle ban that catches first-time visitors out every summer.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — Croatia accepts UK photocards for tourist visits, EU framework continues post-Brexit',
		text: "Croatia recognises UK photocard driving licences for tourist visits without translation or an International Driving Permit. The post-Brexit framework operates through the EU-UK Trade and Cooperation Agreement and Croatia's membership in the EU (since 2013) and Schengen (since 2023). UK gov.uk Croatia advisory confirms no IDP is required. Croatia is party to the 1949 Geneva Convention. Long-stay residents must eventually convert to a Croatian licence — tourists almost never reach the threshold. The bigger items for a Croatia trip are the mandatory in-car equipment rule, autocesta camera enforcement, and the post-2023 Schengen/Euro/Pelješac-Bridge cluster of changes.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Croatia',
		lead: "Croatia is a low-paperwork destination for UK drivers — your UK photocard does the legal work, EU recognition continues through the post-Brexit framework. The catch is the mandatory in-car equipment kit (warning triangle, hi-vis vest, bulb set, first-aid) Croatian Police actually do verify at roadside checks — verify it's complete at pickup or face a €40–130 roadside fine. IDP Companion's English-language version shortens both rental-counter and roadside conversations during peak Adriatic season.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Croatia',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Legally accepted for tourist visits without translation or IDP. UK gov.uk Croatia advice confirms. Accepted by all major Croatian rental chains (Hertz, Avis, Europcar, Sixt, Budget) at Split, Dubrovnik, Zadar, Pula and Zagreb airports.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: "Multilingual digital PDF presenting your UK licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Croatia is in the EU and a major tourist economy with very high English proficiency at every coastal-airport rental desk and Policija tourist-area interaction, so the English version is the working-language route. On the Istrian peninsula specifically (Pula, Rovinj), Italian is widely understood due to historical Italian influence — Italian is also on our PDF, giving a second working-language option. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Croatia: original UK photocard + UK passport + rental contract + proof of valid Croatian motor insurance (Casco from the rental) + the mandatory in-car equipment kit (warning triangle, hi-vis vest, spare bulb set, first-aid kit) verified at pickup. Small EUR cash for autocesta tolls if the ENC transponder fails and for Old Town parking attendants.",
	},

	whyNotEnough: {
		heading: 'Why your UK photocard creates rental-desk and equipment-check friction in Croatia',
		lead: "Post-Brexit UK photocard recognition continues in Croatia through the EU/TCA framework — that part is settled. The trip-specific work is the mandatory in-car equipment kit Croatian Police roadside checks actually verify (€40–130 fine if any item missing), the Dubrovnik Old Town hard ban on non-resident vehicles that turns peak-August parking into a 1–2 km walk-in saga, and the D8 Adriatic Highway accident statistics that demand respect for the route's pace.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz Croatia, Avis Croatia, Europcar, Sixt, Budget and Croatian-local operators (Sub Rosa, Last Minute Rent A Car) each set their own internal verification policy at branch level. Split Airport, Dubrovnik Airport, Zadar, Pula and Zagreb process the highest concentrations of UK tourist rentals — and desk agents during peak July–August Adriatic summer season sometimes default to asking for an IDP even when Croatian law doesn't require one. The translation companion clears the question in writing.",
			},
			{
				icon: 'ph:wrench-bold',
				title: 'The mandatory in-car equipment rule',
				text: "This is the Croatia-specific catch. Croatian traffic law requires every vehicle to carry a warning triangle, a high-visibility vest (at minimum one for the driver — some interpretations require one per occupant), a spare bulb set and a first-aid kit. Croatian Police roadside checks do verify equipment presence. Most rentals come with the kit in the boot but not always — verify at pickup and confirm in writing if anything is missing. Missing equipment is a roadside fine in the €40–130 range.",
			},
			{
				icon: 'ph:warning-bold',
				title: 'The Adriatic-coast driving reality',
				text: "The D8 Adriatic Highway from Trieste south to Dubrovnik is one of Europe's most scenic and most accident-prone routes — heavy summer traffic, winding mountain switchbacks, slow buses on narrow sections. Mountain interior routes around Plitvice Lakes National Park have switchback patterns that need attention. Dubrovnik in peak summer is a parking nightmare: the Old Town has a hard ban on non-resident vehicles, and finding paid parking outside the walls (Gradac, Ilijina Glavica) in July–August often means parking 1–2 km from the gates and walking in. The Pelješac Bridge has eliminated the famous Neum detour but the section approaching Dubrovnik remains slow during peak times.",
			},
		],
	},

	rules: {
		heading: 'Croatia driving rules UK drivers should know',
		lead: 'Switching to the right at Split or Zagreb roundabouts takes the first 30 minutes of attention; winding coastal D8 sections take a few hours more. The substantive operational rules are mandatory daytime headlights November through March, the split BAC regime, and the always-required in-car equipment kit verified at roadside checks.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; deliberate attention required, especially on winding Adriatic coast roads' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: 'Built-up areas in Split, Dubrovnik, Zagreb, Zadar' },
			{ icon: 'mdi:road-variant', label: 'Rural / open-road speed', value: '90 km/h', note: '110 km/h on dual carriageways' },
			{ icon: 'mdi:speedometer-medium', label: 'Autocesta (motorway)', value: '130 km/h', note: 'A1 Zagreb-Split-Ploče, A3 Slavonian highway, A7 Rijeka — section-control cameras active' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (general)', value: '0.05% BAC', note: 'Random breath testing routine, particularly weekend evenings' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (under-24 / professional)', value: '0.00% BAC', note: 'Zero tolerance for drivers under 24 and professional drivers — catches Pelješac winery-route visitors out' },
			{ icon: 'mdi:car-light-high', label: 'Daytime headlights', value: 'Required Nov–Mar (+ tunnels year-round)', note: 'Modern rentals operate automatically; verify' },
			{ icon: 'ph:wrench-bold', label: 'Mandatory in-car kit', value: 'Triangle, hi-vis, bulbs, first-aid', note: 'Croatian Police roadside checks verify; fine €40–130 if missing' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Croatia',
		lead: 'Croatia adopted the Euro on 1 January 2023 — fines that were quoted in Croatian Kuna pre-2023 now run in EUR at roughly equivalent levels. The line below worth flagging up front is the Croatia-specific one: €40–130 for missing in-car equipment (triangle, hi-vis vest, bulbs, first-aid). Roadside Policija checks do verify this kit. Speed-camera and red-light fines forward to your UK card via the rental company plus a typical €30 admin fee 4–8 weeks after the trip.',
		colViolation: 'Violation',
		colAmount: 'Fine (EUR, 2026 indicative)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding less than 10 km/h over (urban)', amount: '€30+', note: 'Camera-enforced on D8 Coast Road and main arteries', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 10–20 km/h over', amount: '€130+', note: 'Section-control cameras on autocesta', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 20–30 km/h over', amount: '€260+', note: '', severity: 'med' },
			{ icon: 'ph:siren-bold', label: 'Speeding above 30 km/h over', amount: '€700+ and possible licence-suspension equivalent', note: 'Criminal escalation possible at extreme readings', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€260+', note: 'Camera-enforced in cities', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€130+', note: 'Routinely enforced', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€130+', note: 'Per occupant; mandatory front and rear', severity: 'med' },
			{ icon: 'ph:wrench-bold', label: 'Missing mandatory in-car equipment', amount: '€40–130', note: 'Croatia-specific roadside checks verify triangle, hi-vis vest, bulbs, first-aid kit', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.08%', amount: '€260+ and 3-month suspension equivalent', note: 'Random breath testing routine', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI above 0.08%', amount: '€700+ and extended suspension; possible court', note: 'Criminal escalation possible', severity: 'high' },
			{ icon: 'ph:road-horizon-bold', label: 'Autocesta toll evasion', amount: 'Original toll + admin penalty', note: 'Most rentals carry ENC transponders; verify at pickup', severity: 'med' },
		],
		caption: 'Sources: Croatian Ministry of Interior MUP (mup.gov.hr); Croatian Police (Policija); Hrvatske Autoceste HAC (hac.hr); Croatian Auto Club HAK (hak.hr); UK gov.uk Croatia travel advice.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Croatia — honestly',
		lead: "For UK drivers in Croatia, IDP Companion shortens two conversations: peak July–August Split, Dubrovnik or Zadar counter queues where standardised translation processes faster than an EU-recognised UK photocard alone, and Pula or Rovinj interactions on the Istrian peninsula where the PDF's Italian-language layer is a working secondary route. The trip-critical items it does not replace live in the rental car (the mandatory in-car equipment kit) or in the trip-planning layer (ENC autocesta transponder, Dubrovnik Old Town parking, post-2023 Schengen-Euro-Pelješac routing).",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Croatia, English on the document is the working-language route at every coastal-airport rental desk and Policija tourist-area interaction; on the Istrian peninsula (Pula, Rovinj) Italian is also widely understood and is on our PDF, giving a second working-language option',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by Croatian law for tourist driving on a UK photocard',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not the mandatory in-car equipment kit (warning triangle, hi-vis vest, spare bulbs, first-aid kit) — that lives in the rental car and is verified at roadside checks',
				'Not an ENC autocesta transponder or a Dubrovnik Old Town parking permit',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Croatia',
			items: [
				'At Split, Dubrovnik, Zadar, Pula and Zagreb rental counters during peak July–August Adriatic summer season',
				'At Croatian Police roadside checks on coastal D8 or interior routes where standardised English-language paperwork speeds the document review',
				'For insurance and accident-report paperwork after a covered incident',
				'As a re-printable backup from any hotel if your physical photocard is lost during a multi-stop Adriatic trip',
				"For travellers stacking multiple European trips over 1–5 years — one $55 purchase covers Croatia plus Spain, Italy, Greece, Portugal, France and other destinations on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Croatian law actually cares about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive',
				'UK passport — physical, required at any document check',
				'Rental agreement and proof of valid Croatian motor insurance (Casco) — provided by the rental at pickup',
				'The mandatory in-car equipment kit — warning triangle, hi-vis vest, spare bulb set, first-aid kit; lives in the vehicle, not on your person',
				'Small EUR cash for autocesta tolls (if ENC transponder fails), Old Town parking attendants, and other roadside incidentals',
			],
		},
		pattern:
			"What prepared UK travellers in Croatia actually carry: photocard + passport + rental contract + insurance documentation + verified in-car kit + ENC autocesta transponder + IDP Companion. The bigger preparation is the route-planning around the Pelješac Bridge (modern GPS handles this automatically), the Dubrovnik Old Town parking strategy and the in-car equipment verification at pickup. Total documentation prep: $35.",
	},

	renting: {
		heading: 'Renting a car in Croatia as a UK driver',
		lead: "Hertz, Avis, Europcar, Sixt and Budget run alongside Croatian-local Sub Rosa and Last Minute Rent A Car across Split, Dubrovnik, Zagreb, Zadar and Pula airports. The single pickup-time step most UK tourists skip is the 30-second mandatory-equipment kit check (triangle, hi-vis vest, bulbs, first-aid) — most rentals have it, not all, and the roadside fine for missing items runs €40–130.",
		chains: [
			{ name: 'Hertz Croatia', policy: 'Major presence at Split, Dubrovnik, Zagreb, Zadar and Pula airports. Accepts UK photocard licences. International-chain pricing typical.' },
			{ name: 'Avis Croatia (incl. Budget)', policy: 'Wide network including coastal ferry ports. UK licences accepted; operates Budget under the same corporate group.' },
			{ name: 'Sixt Croatia', policy: 'Premium fleet at major airports. UK licences accepted.' },
			{ name: 'Europcar Croatia', policy: 'Strong domestic network including secondary cities. UK licences accepted.' },
			{ name: 'Local operators (Sub Rosa, Last Minute Rent A Car)', policy: 'Croatian-owned alternatives with reputation for transparent pricing and waiver bundling. Strong Split and Dubrovnik presence; UK licences accepted; documentation policy generally lighter than international chains.' },
		],
		tipsHeading: 'Practical tips for renting and driving in Croatia',
		tips: [
			'Verify the mandatory in-car equipment kit at pickup — warning triangle, hi-vis vest, spare bulbs, first-aid kit. Most rentals have a complete kit in the boot but not all. Missing equipment is a roadside fine of €40–130; verifying at pickup takes 30 seconds',
			'Verify the rental has an active ENC autocesta transponder. Croatian motorway tolls run on the ENC electronic system; without a transponder, pay at booth (cash and card accepted). Major tolled routes: A1 (Zagreb-Split-Ploče), A3 (Slavonian highway), A7 (Rijeka)',
			'The Pelješac Bridge (since summer 2022) eliminates the Neum detour. Pre-2022 the Split-to-Dubrovnik route required two international border crossings through Bosnia\'s 9km Neum coastal corridor. Modern GPS systems route via the bridge by default — no Bosnian border insurance extension needed',
			"Dubrovnik Old Town parking ban. Non-resident vehicles cannot enter the Old Town within the walls. Park outside (Gradac and Ilijina Glavica are the established options). In peak July–August, expect to park 1–2 km from the walls and walk in",
			'D8 Adriatic Highway is winding and accident-prone. The coastal route is one of Europe\'s most scenic but heavy summer traffic and mountain switchbacks demand attention. Plan for slower-than-expected drive times',
			'Speed cameras on Coast Road and autocesta entry points. Fixed cameras and mobile vans are most active in summer. Section-control cameras on the A1 enforce average speed across long stretches',
			'Diesel and petrol both widely available. Petrol stations cluster on autocesta service stops; rural stations sparse on islands and Plitvice-area routes',
			'Manual transmission is the default at lower price tiers; automatics cost more',
			'Switch back to right-side driving — practise in a quiet area before joining motorway traffic, especially roundabouts in Split or Zagreb where direction reverses from UK habit',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'Most Croatian-rental outcomes for UK tourists are clean once the equipment-kit check at pickup is done. Two scenarios merit planning: an A1 section-control speed-camera ticket arriving on your UK card weeks after the trip, and the peak-summer Dubrovnik Old Town parking saga that adds 30–45 minutes either side of any visit.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'Photocard accepted, in-car kit present, clean trip',
				text: 'Standard tourist experience — pick up at Split or Dubrovnik, drive the D8 coast or inland to Plitvice, return the car, no further interactions. Most Croatia trips end this way.',
			},
			{
				severity: 'low',
				frequency: 'Occasional at peak season',
				label: 'Agent asks for IDP, you produce IDP Companion',
				text: 'Five extra minutes at the Split or Dubrovnik counter during July–August peak season, no further issue. Common when desk agents default to asking for translation even when Croatian law accepts the UK photocard alone.',
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Autocesta speed-camera ticket on A1',
				text: 'A section-control camera on the A1 between Zagreb and Split catches you above the threshold. €30–260+ plus rental admin fee charged to your UK card on file 4–8 weeks after the trip.',
			},
			{
				severity: 'med',
				frequency: 'Real but avoidable',
				label: 'Roadside check, missing in-car equipment',
				text: '€40–130 fine for missing warning triangle, hi-vis vest, bulbs or first-aid kit. The most-avoidable Croatian roadside issue — verify the kit at pickup, takes 30 seconds.',
			},
			{
				severity: 'low',
				frequency: 'Uncommon',
				label: 'Croatian Police stop on D8, brief document check',
				text: "Standard tourist-area document check. UK photocard accepted, IDP Companion's English version shortens the conversation. Standard process, no further action.",
			},
			{
				severity: 'med',
				frequency: 'Peak-summer reality in Dubrovnik',
				label: 'Old Town parking saga — park 1–2 km out and walk',
				text: "Non-resident vehicles cannot enter the Old Town. Gradac and Ilijina Glavica are the established paid car parks; in July–August both fill early. Plan to park further out and walk; account for 30–45 extra minutes either side of any Old Town visit.",
			},
		],
		math: "$35 IDP Companion vs the difference between a €100/day same-day rebook at Split Airport in August and a €50/day advance rate. The bigger pre-trip preparation items are the in-car kit verification at pickup and the Old Town parking strategy.",
	},

	phrases: {
		heading: 'Croatian phrases for police stops, rental desks and rural fuel stops',
		lead: "Croatia's tourist infrastructure runs in working English at every coastal-airport rental chain and tourist-area Policija stop, so phrases aren't strictly needed — but eight Croatian items add cultural color and help in inland villages or on the islands where English is less dominant.",
		items: [
			{ phrase: 'Ovo je moja vozačka dozvola', translation: 'This is my driving licence', context: 'Standard opening — hand UK photocard and passport together at a Policija stop' },
			{ phrase: 'I evo višejezičnog prijevoda', translation: 'And here is the multilingual translation', context: 'Follow-up at a rental counter if the agent asks for translation alongside the UK photocard' },
			{ phrase: 'Ja sam britanski turist', translation: "I'm a British tourist", context: 'Establishes context immediately at any document check' },
			{ phrase: 'Govorite li engleski?', translation: 'Do you speak English?', context: 'Almost universally answered yes in tourist-facing roles; rarely needed but courteous' },
			{ phrase: 'Gdje je najbliža benzinska postaja?', translation: 'Where is the nearest petrol station?', context: 'Useful on the D8 inland stretches and Plitvice / Cetinje rural routes where stations are sparse' },
			{ phrase: 'Trebam pomoć', translation: 'I need help', context: 'Universal at any roadside need or breakdown' },
			{ phrase: 'Molim, službeni račun', translation: 'Please, an official receipt', context: 'Polite firm phrase at any fine interaction — paid fines should be issued with documentation, not cash-only on the roadside' },
			{ phrase: 'Hvala', translation: 'Thank you', context: 'Universal courtesy; "hvala lijepa" for "thank you very much"' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Croatia (UK citizens)',
		lead: "Croatia preparation has one Croatia-specific step (verify the mandatory in-car equipment kit at pickup) and otherwise standard documentation prep. The post-2023 cluster of changes (Schengen + Euro + Pelješac Bridge) is handled automatically by modern GPS routing and EU passport processing.",
		schemaName: 'How to prepare for driving in Croatia as a UK citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: "The plastic photocard alone is sufficient post-2015 — no paper counterpart needed. If you still hold an older paper licence, update to photocard format before flying.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. Croatia operates in working English at every coastal-airport rental chain and Policija tourist-area interaction — the English version is the working-language route. Print at home or from any Croatian hotel.',
			},
			{
				title: 'Verify the rental car has the mandatory equipment kit at pickup',
				text: 'Warning triangle, hi-vis vest (at minimum one for the driver), spare bulb set, first-aid kit. Most rentals come with a complete kit in the boot but not always — check before driving away. Missing equipment is a roadside fine of €40–130; verifying at pickup takes 30 seconds.',
			},
			{
				title: 'Confirm ENC autocesta transponder and plan for euros',
				text: "If your route includes the A1 (Zagreb-Split-Ploče), A3 or A7, verify the ENC electronic transponder is active. Without it, pay at toll booths (cash and card accepted). Croatia is now on the Euro since 1 January 2023 — no Croatian Kuna anywhere. Modern GPS routes via the Pelješac Bridge by default for Split-to-Dubrovnik trips, eliminating the old Neum two-border crossing.",
			},
			{
				title: 'Carry physical documents in one folder + small EUR cash',
				text: 'Physical UK photocard + UK passport + rental contract + insurance documentation + IDP Companion — all in one folder. Hand the folder over at any Policija stop. Carry small EUR notes for autocesta tolls if the ENC transponder fails, Old Town parking attendants in Dubrovnik, and occasional roadside purchases.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Croatia as a UK tourist post-Brexit?',
				answer: 'No. UK gov.uk Croatia travel advice confirms no IDP is required for UK photocard licence holders on tourist visits. The post-Brexit framework operates through the EU-UK Trade and Cooperation Agreement and Croatia\'s membership in the EU and Schengen.',
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes — some Croatian branches during peak July–August summer season request an IDP at pickup even when Croatian law accepts the UK photocard alone. Branch policy varies; the translation companion clears the question in writing in five extra minutes.',
			},
			{
				id: 3,
				question: 'What is the mandatory in-car equipment rule?',
				answer: 'Croatian traffic law requires every vehicle to carry a warning triangle, high-visibility vest (at minimum one for the driver), spare bulb set and first-aid kit. Croatian Police roadside checks do verify equipment presence. Most rentals have a complete kit in the boot — verify at pickup. Missing equipment is a fine in the €40–130 range.',
			},
			{
				id: 4,
				question: 'What changed when Croatia joined Schengen and the Eurozone in 2023?',
				answer: 'Three things, all on 1 January 2023: borders with EU neighbours (Slovenia, Hungary) became Schengen-seamless with no passport checks; the Croatian Kuna was replaced by the Euro at fixed conversion (no more Kuna anywhere); and procedurally Croatia is now treated as a full EU member for cross-border services including rental insurance and traffic-fine enforcement.',
			},
			{
				id: 5,
				question: 'What is the Pelješac Bridge and does it matter for my trip?',
				answer: "The Pelješac Bridge opened in summer 2022 and connects mainland Croatia to the Pelješac peninsula, bypassing Bosnia and Herzegovina's 9km Neum coastal corridor. Pre-2022 the Split-to-Dubrovnik drive required two international border crossings (into Bosnia at Neum, out of Bosnia further south). The bridge eliminates this — modern GPS routes via the bridge by default. No Bosnian border insurance extension is needed for the standard tourist route.",
			},
			{
				id: 6,
				question: 'What about Dubrovnik Old Town parking?',
				answer: 'Non-resident vehicles cannot enter the Old Town within the walls. Park at official car parks outside (Gradac and Ilijina Glavica are the established options). In peak July–August, expect to park 1–2 km from the walls and walk in. Plan 30–45 extra minutes either side of any Old Town visit for the walk.',
			},
			{
				id: 7,
				question: 'What side of the road do they drive on?',
				answer: 'Right. Switch from UK left-side driving requires deliberate attention, especially on the winding D8 Adriatic Highway and at roundabouts in Split or Zagreb.',
			},
			{
				id: 8,
				question: 'Will my UK insurance cover me in Croatia?',
				answer: 'Most UK motor insurance provides minimum third-party cover in EU countries by default — verify with your insurer for your specific policy version and travel dates. Rental insurance (Casco) sold at the counter is the standard fallback for fuller cover.',
			},
			{
				id: 9,
				question: 'Can I cross from Croatia into Bosnia, Slovenia, Italy, Hungary or Montenegro?',
				answer: 'Slovenia, Italy, Hungary — yes, Schengen-seamless. Bosnia and Herzegovina — separate border crossing with passport check, usually allowed under rental contract terms but verify; Green Card insurance extension may be required. Montenegro and Serbia — usually allowed; verify contract and insurance extensions before crossing.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Croatia trips?',
				answer: 'Choose 1 year ($35), 3 years ($45) or 5 years ($55). Validity is tied to your physical UK photocard — if your photocard expires, IDP Companion expires with it. One purchase covers Croatia plus Italy, Spain, Greece, Portugal, France and other European destinations on the same plan.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'For UK Adriatic and wider Mediterranean travellers — adjacent destinations where post-Brexit recognition is similar but rental-specific friction (in-car kits, coastal-road realities, parking bans, peak-summer crowding) shifts significantly.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'it', label: 'UK → Italy', status: 'Live', href: '/idp-for-uk-drivers-in-italy/' },
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece/' },
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain/' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal/' },
			{ flagFrom: 'us', flagTo: 'hr', label: 'US → Croatia', status: 'Live', href: '/idp-for-us-drivers-in-croatia/' },
			{ flagFrom: 'gb', flagTo: 'me', label: 'UK → Montenegro', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Driving the Dalmatian coast, the Istrian peninsula or doing a Plitvice Lakes loop?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Croatia operates in working English at every coastal-airport rental chain and Policija tourist-area stop; on the Istrian peninsula Italian is also widely understood and is on our PDF. Valid 1–5 years and covers Croatia plus Italy, Spain, Greece, Portugal, France on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. Verify the mandatory in-car equipment kit at pickup — that's the Croatia-specific catch.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Croatian Ministry of Interior (MUP), the Croatian Police (Policija), Hrvatske Autoceste (HAC), the Croatian Auto Club (HAK) or any other Croatian government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion must be used alongside your original UK photocard driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Croatian Ministry of Interior (MUP) — Foreign drivers (mup.gov.hr)',
			'UK Foreign, Commonwealth & Development Office — Driving in Croatia (gov.uk/foreign-travel-advice/croatia)',
			'Hrvatske Autoceste (HAC) — Autocesta toll system (hac.hr)',
			'Hrvatski Autoklub (HAK) — Croatian Auto Club, visitor driving guide (hak.hr)',
			'Croatian Roads (Hrvatske Ceste) — Road network information (hrvatske-ceste.hr)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Croatia',
	},
};

export const ukCroatiaCopy: Record<'en', CountryPairCopy> = { en };
