/**
 * Country-pair content: United Kingdom → France.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: UK photocard accepted post-Brexit — gov.uk confirms no IDP
 * needed for tourist visits to France. Killer angle: Crit'Air clean-air
 * vignette mandatory for any city ZFE (Zone à Faibles Émissions) — Paris,
 * Lyon, Grenoble, Strasbourg, Marseille and a dozen more. €3.70 sticker
 * vs €68–135 fine. Plus priorité à droite — the unsigned-junction
 * right-priority rule that is the single most common UK-tourist crash cause
 * in France. Plus autoroute Tutor-style section-speed cameras.
 *
 * SEO add-ons present: tldr, lez (Paris/Lyon/Marseille ZFE), phrases
 * (French 8 items), howTo, lastReviewed.
 * NO alphabet block (French is Latin). NO rejects block.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: "IDP for UK Drivers in France: 2026 Crit'Air & ZFE Guide",
		description:
			"UK photocard accepted in France — no IDP needed post-Brexit. But Paris/Lyon ZFE Crit'Air fines run €68–135 without the €3.70 sticker, and priorité à droite catches UK drivers daily. Honest 2026 guide.",
		ogTitleShort: "UK Drivers in France: Crit'Air 2026",
		ogSubtitle: 'Photocard works. ZFE cameras still bill the rental.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → France',
	},
	lastReviewed: 'June 2026',
	datePublished: '2026-05-16',
	dateModified: '2026-06-16',

	hero: {
		kicker: 'UK → France · 2026 Guide',
		title: "IDP for UK Drivers in France: 2026 Crit'Air & Priorité à Droite",
		lead: "You're driving onto the Eurotunnel shuttle at Folkestone in late August for a twelve-day Provence loop through Avignon, the Luberon and the Côte d'Azur. Your UK photocard is in English, post-Brexit French driving rules accept it for tourist visits, and gov.uk confirms no IDP needed. What the booking didn't mention: France requires a Crit'Air clean-air vignette (€3.70) on the windscreen of any vehicle entering Paris's Zone à Faibles Émissions (ZFE) and similar zones in Lyon, Grenoble, Strasbourg, Rouen and Aix-Marseille. The fine for driving in a ZFE without it is €68–135. Add the priorité à droite rule — France's right-hand-priority convention at unsigned junctions, the most common UK-tourist crash cause in older town centres. None of that has to do with an IDP. The rental contract's documentation clause can still ask for one.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — UK photocard is accepted in France post-Brexit',
		text: "France accepts UK photocard driving licences for tourist visits without translation or an International Driving Permit. The post-Brexit recognition framework operates through the EU-UK Trade and Cooperation Agreement, and UK gov.uk explicitly states that no IDP is required to drive in France on a UK photocard. Residents must convert to a French licence after one year — tourist stays almost never reach that threshold. France is party to both the 1949 Geneva and 1968 Vienna Conventions. A multilingual translation companion stays useful at peak-season rental desks and at gendarmerie roadside stops, not as a legal requirement.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in France',
		lead: 'For a UK tourist driving in France, your original UK photocard licence is the legally required document. IDP Companion is a separate multilingual translation companion — useful at the rental desk during peak season and as a re-printable backup, not a legal substitute.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in France',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Legally accepted under the post-Brexit recognition framework for tourist visits without translation or IDP. Confirmed by gov.uk. Major chains (Hertz, Avis, Sixt, Europcar) accept it at Paris CDG and Orly, Nice Côte d\'Azur, Marseille Provence and Lyon-Saint Exupéry without supplementary documentation.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: "Multilingual digital PDF presenting your UK photocard in French, English, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Smooths peak July–August rental pickups at Paris CDG and Nice, and reduces friction at Gendarmerie stops on the autoroute. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in France: original UK photocard + UK passport + rental contract + insurance documentation (provided by the rental company). Crit'Air vignette on the windscreen if your route includes any city ZFE. UK sticker mandatory on UK-registered private vehicles since Sept 2021 (the old GB sticker is invalid). Right-hand-drive vehicles need headlamp beam deflectors. Reflective jacket and warning triangle in the cabin (not the boot).",
	},

	whyNotEnough: {
		heading: 'Why your UK photocard creates ZFE and rental-desk friction in France',
		lead: 'Legally your photocard is enough. Practically, three France-specific realities catch UK tourists off guard.',
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Sixt, Europcar and ADA (French local) set their own internal verification policies at French branches. Paris CDG and Orly, Nice Côte d'Azur, Marseille Provence and Lyon-Saint Exupéry process the highest concentrations of UK tourist rentals — and desk agents during peak July–August season sometimes default to asking for an IDP, even though French law doesn't require one. The post-Brexit recognition of UK licences is well-established but branch policy varies, particularly at premium-class desks.",
			},
			{
				icon: 'ph:translate-bold',
				title: "The Crit'Air ZFE reason",
				text: "France operates a growing network of Zones à Faibles Émissions (ZFE) — clean-air zones — in Paris, Lyon, Grenoble, Strasbourg, Rouen, Reims, Aix-Marseille and a dozen smaller cities. Each requires a Crit'Air vignette (€3.70) on the windscreen. Cameras and police enforce. Driving a vehicle into a ZFE without a valid vignette costs €68 for private vehicles, €135 escalated. Rental cars typically carry the vignette — but cross-border rentals from Belgium, Italy or Germany sometimes don't.",
			},
			{
				icon: 'ph:scales-bold',
				title: 'The priorité à droite reason',
				text: "At unsigned junctions in France — particularly in older town centres in Provence, Alsace and Brittany — vehicles approaching from your right have priority. There's no give-way sign because the rule is the default. This is opposite to the UK convention where unsigned junctions are rare and give-way markings are explicit. Priorité à droite is the most-cited cause of UK-tourist incidents in France, ahead of speed cameras and ahead of ZFE fines.",
			},
		],
	},

	rules: {
		heading: 'France driving rules UK drivers should know',
		lead: 'Right-hand traffic is the day-one adjustment for UK drivers. Speed-limit downgrades in rain and priorité à droite at unsigned junctions are the operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; first roundabout is the moment it clicks' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in residential zones; some 20 km/h shared zones' },
			{ icon: 'mdi:road-variant', label: 'Rural road', value: '80 km/h', note: '90 km/h on rural roads with central separator' },
			{ icon: 'mdi:speedometer-medium', label: 'Dual carriageway', value: '110 km/h', note: '100 km/h in rain' },
			{ icon: 'mdi:speedometer-slow', label: 'Autoroute', value: '130 km/h', note: '110 km/h in rain; 50 km/h dense fog' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.02% for novice drivers (<3 yrs) and professional drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned (incl. earbuds)', note: '€135 + 3 points; car system or speakerphone only since 2015' },
			{ icon: 'ph:warning-bold', label: 'Required equipment', value: 'Vest + triangle', note: 'In the cabin (not the boot); reflective jacket per occupant' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in France',
		lead: 'Most French fines are amende forfaitaire (fixed) and camera-enforced on autoroutes and at intersections. Payment within 15 days reduces the amount by 30%. Camera-issued tickets are forwarded by the rental company to your UK card on file plus a typical €25–50 processing fee.',
		colViolation: 'Violation',
		colAmount: 'Fine (EUR)',
		colNote: 'Notes',
		items: [
			{ icon: 'ph:translate-bold', label: "ZFE entry without Crit'Air vignette", amount: '€68–135', note: 'Private vehicles €68; €135 escalated. Camera + police enforced in Paris, Lyon, Grenoble', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Speeding <20 km/h over', amount: '€68 urban / €135 extra-urban', note: 'Camera-issued; -30% if paid within 15 days', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 20–49 km/h over', amount: '€135 + 4 licence points', note: 'Section-control cameras on long autoroute stretches', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 50+ km/h over', amount: 'Up to €1,500', note: 'Court summons; licence withdrawal possible; vehicle seizure', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€135 + 4 points', note: 'Camera-enforced at most intersections', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone / earbuds', amount: '€135 + 3 points', note: 'Earbuds banned even hands-free since 2015', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€135 per person', note: 'Driver liable for passengers under 18', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.08% BAC', amount: '€135–750 + suspension', note: 'Random breath testing routine on tourist autoroute stretches', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI 0.08%+ BAC', amount: 'Criminal court', note: 'Possible imprisonment; international record', severity: 'high' },
			{ icon: 'ph:warning-bold', label: 'Priorité à droite violation', amount: '€90+', note: 'At unsigned junctions; most-cited UK-tourist mistake in France', severity: 'med' },
		],
		caption: 'Sources: Code de la Route (Articles R413-14 speeding, R234-1 alcohol, R412-6 phone); Décret Crit\'Air N° 2016-847; Sécurité Routière 2026 schedule; gov.uk/foreign-travel-advice/france.',
	},

	lez: {
		heading: "France's Crit'Air ZFE network — what every UK driver needs to know",
		badge: 'France-specific',
		lead: "Crit'Air is France's national vehicle-emissions classification. Each major French city operates a Zone à Faibles Émissions (ZFE) where access depends on your sticker. Without one — or with the wrong colour — you're fined automatically. Rental cars almost always carry the sticker; cross-border rentals from Spain, Italy, Belgium or Germany sometimes don't.",
		zones: [
			{
				city: 'Paris (intra-A86 ring)',
				name: 'ZFE Métropolitaine — Greater Paris',
				description: "The largest LEZ in Europe. Active 8am–8pm Monday–Friday. As of January 2025, Crit'Air 3 vehicles are excluded; Crit'Air 4 and 5 already excluded since 2019. Cameras read your plate at every entrance. Tourist rentals are exempt only if they have a current sticker. Driving without registration in the certificat-air.gouv.fr database is itself an offence.",
				fine: '€68 fixed (€135 escalated)',
				note: "Apply for Crit'Air at certificat-air.gouv.fr at least 2 weeks before travel — €3.70 from outside France, mailed to your address. Or confirm your rental has one before leaving the lot.",
			},
			{
				city: 'Lyon (Lyon Métropole)',
				name: 'ZFE Lyon Métropole',
				description: "Active across central Lyon and parts of Villeurbanne since 2020. Excludes Crit'Air 5 vehicles 24/7; Crit'Air 4 phased out from January 2024. Lyon-Saint Exupéry airport is outside the ZFE, but driving from the airport into central Lyon on the A43/A42 corridor enters the zone.",
				fine: '€68 fixed',
				note: "Most Lyon airport rentals (Hertz, Avis, Sixt) carry a current sticker by default. Confirm at pickup with the phrase: \"L'autocollant Crit'Air est en place?\"",
			},
			{
				city: 'Marseille / Aix-Marseille-Provence + Grenoble',
				name: 'ZFE Aix-Marseille-Provence + Grenoble Alpes Métropole',
				description: "Marseille's ZFE has been active since September 2022, covering central Marseille and gradually extending. Crit'Air 5 currently excluded; Crit'Air 4 phasing out through 2026. Grenoble's ZFE operates similarly with stricter winter enforcement during pollution-alert windows. Less aggressively enforced than Paris or Lyon today, but the camera infrastructure is rolling out and back-dated fines are possible.",
				fine: '€68 each',
				note: "If your itinerary includes both Marseille and the Côte d'Azur, your Crit'Air vignette also covers Nice and Toulon — same national system, same threshold rules.",
			},
		],
		tip: "Practical rule for France: any French city you flew into with a population over 250,000 probably has a ZFE. Confirm at certificat-air.gouv.fr before booking — and if your rental was registered in Spain, Italy, Belgium or Germany (common with cross-border one-way rentals), check the windscreen sticker before driving into any French metro.",
	},

	honesty: {
		heading: 'How IDP Companion fits in France — honestly',
		lead: "France post-Brexit is clean for UK photocard holders: gov.uk confirms no IDP needed for tourist visits. Where IDP Companion adds value is the peak-summer rental desk and the gendarmerie roadside stop where multilingual paperwork speeds the interaction.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into French, English, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'Designed to reduce friction at rental desks during peak July–August season and at Gendarmerie or Police Nationale roadside stops',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention',
				'Not legally required for UK photocard holders in France on tourist visits (gov.uk confirms)',
				'Not valid by itself — must be carried alongside your physical UK photocard licence',
				"Not a Crit'Air vignette, a Liber-t autoroute transponder, or a substitute for the required reflective vest and warning triangle in the cabin",
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in France',
			items: [
				'At Paris CDG, Nice, Marseille and Lyon rental counters during peak July–August season when desk agents default to asking for translation',
				'At Gendarmerie stops on autoroute or in tourist corridors where multilingual paperwork speeds the document check (priorité à droite incidents are a frequent stop trigger)',
				"At smaller independent agencies in Avignon, Bordeaux, Nice and Strasbourg where UK photocard formats are less commonly seen",
				"As a re-printable backup from any hotel if your physical photocard is lost mid-trip on a multi-region itinerary",
				"For travellers stacking multiple European trips over 1–5 years — one $55 purchase covers France plus Italy, Spain, Portugal, Greece and others on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents French authorities actually care about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive',
				'UK passport — physical, ID-matching the rental contract',
				"Crit'Air vignette on the windscreen if your route includes any city ZFE",
				'Rental agreement and insurance (assurance) — provided by the rental company',
				'For UK-registered private vehicles: UK sticker on rear bumper (post-Sept 2021), headlamp beam deflectors for RHD, reflective jacket per occupant in cabin, warning triangle',
			],
		},
		pattern:
			"What prepared UK travellers in France actually carry: photocard + passport + rental contract + insurance — in one folder. For ZFE: confirm Crit'Air vignette at pickup with \"L'autocollant Crit'Air est en place?\". For peak season: a $35 multilingual PDF clears the rental-desk-asking-for-translation problem in two minutes. Total documentation prep: $35 + €3.70 if buying the vignette directly. The wedding-in-Provence story doesn't repeat itself.",
	},

	renting: {
		heading: 'Renting a car in France as a UK driver',
		lead: "France's rental market is large and competitive. Counter policy varies more by location than by chain — Paris CDG and Orly are stricter than rural Avis branches. Confirm the translation requirement in writing before flying.",
		chains: [
			{ name: 'Hertz France', policy: "Major presence at every French airport plus city locations. Accepts UK photocard for tourist rentals. Most consistent at Paris CDG Terminal 2 and Orly; rural locations more flexible." },
			{ name: 'Avis France (incl. Budget)', policy: "Wide network including airports, city centres and ferry ports. UK photocards accepted; Budget operates under the same group with identical documentation policy." },
			{ name: 'Sixt France', policy: 'Premium fleet, strong at Paris CDG, Nice and Marseille. Translation document explicitly requested at some locations including Lyon-Saint Exupéry during peak summer.' },
			{ name: 'Europcar (and Goldcar)', policy: "French-origin company, largest domestic network. Generally accepts UK photocards at airport locations. Per-agent discretion at smaller branches. Crit'Air vignette reliably included in airport pickup." },
		],
		tipsHeading: 'Practical tips for renting in France',
		tips: [
			"Apply for the Crit'Air vignette online at certificat-air.gouv.fr at least 2 weeks before travel — €3.70 from outside France, mailed to your address. Or rely on the rental car carrying one (most do; verify with the agent before driving into Paris)",
			"Confirm the Crit'Air vignette is on the windscreen before leaving the lot — \"L'autocollant Crit'Air est en place?\"",
			'Watch for priorité à droite at unsigned junctions in older town centres — this is the most-cited UK-tourist mistake in France',
			"Autoroute tolls (péages) are frequent — most rentals carry a Liber-t transponder; otherwise pay at the booth with card (rare cash-only plazas remain)",
			'Speed-limit downgrades in rain are mandatory — 110 km/h on autoroute (vs 130 dry), 100 km/h on dual carriageway (vs 110 dry). Section-control cameras enforce average speed across long stretches',
			'Reflective jacket and warning triangle must be in the cabin, not the boot — €135 fine if checked',
			'Manual transmission is the default — automatics cost ~30% more and are limited; book early',
			'Under-25 (jeune conducteur) surcharge is enforced by all major chains — €15–25/day extra',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'Realistic outcomes ranked by frequency, based on UK traveller forum reports, gov.uk advisories and rental-industry policy disclosures.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'Photocard accepted, Crit\'Air present, smooth drive',
				text: 'Standard tourist experience — post-Brexit recognition works, ZFE sticker present, drive the Loire or Provence loop without incident. Most France trips end this way.',
			},
			{
				severity: 'low',
				frequency: 'Occasional at peak season',
				label: 'Agent asks for translation, you produce IDP Companion',
				text: 'Five extra minutes at the counter, no further issue. Common at Paris CDG Terminal 2F and Lyon-Saint Exupéry during July–August summer peak.',
			},
			{
				severity: 'med',
				frequency: 'Very common if Crit\'Air missing',
				label: 'ZFE ticket arrives at UK address 2–3 weeks after the trip',
				text: "A €68 Crit'Air fine plus the rental company's typical €25–50 admin fee charged to your UK card on file. Most UK tourists don't realise they entered an LEZ — Google Maps doesn't consistently warn, signage is in French only.",
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Autoroute speed-camera ticket arrives weeks later',
				text: 'A6 or A7 motorway camera catches you at 142 km/h in a 130 zone. Fine €135 + 4 points (points don\'t transfer but money does). Agency adds €25–50 admin fee and bills your UK card. Multiple speeding violations can compound to €500+.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Priorité à droite incident in a town centre',
				text: 'A driver emerging from an unsigned right-hand street has priority; UK driver brakes late or proceeds. Minor collision; rental insurance handles it but the deductible (franchise) is yours. Most reported cause of UK-tourist incidents in France.',
			},
		],
		math: "IDP Companion ($35) + Crit'Air vignette (€3.70) = under $40 total prep cost. The Lyon-Saint Exupéry rental-refused scenario costs €100+ in airport-to-Lyon taxi alone, before the rebooked rental walk-in surcharge. Priorité à droite collision deductibles start around €700. Preparation costs less.",
	},

	phrases: {
		heading: 'French phrases for rental desks and police checkpoints',
		lead: "Eight phrases that cover almost every interaction a UK driver actually has in France. The Crit'Air confirmation phrase is the single most useful one if you're flying into Paris, Lyon or Marseille.",
		items: [
			{ phrase: 'Voici mon permis de conduire', translation: 'Here is my driving licence', context: 'Standard opening — hand over photocard + passport together' },
			{ phrase: 'Et voici la traduction multilingue', translation: 'And here is the multilingual translation', context: 'Following up with IDP Companion when the agent asks for translation' },
			{ phrase: "L'autocollant Crit'Air est en place?", translation: "Is the Crit'Air sticker in place?", context: 'Critical phrase — ask before driving off any rental lot bound for Paris, Lyon, Grenoble or Marseille' },
			{ phrase: 'Je suis touriste britannique', translation: "I'm a British tourist", context: 'Establishes context at any document check; often softens the stop' },
			{ phrase: 'Je ne comprends pas le français', translation: "I don't speak French", context: 'Honest disclosure — most agents at airports switch to basic English' },
			{ phrase: "Y a-t-il un problème?", translation: 'Is there a problem?', context: 'At a Gendarmerie checkpoint, opens the conversation politely' },
			{ phrase: "C'est une amende forfaitaire?", translation: 'Is this a fixed-amount fine?', context: 'Forces the officer to specify — fixed fines are uniform and non-negotiable, ad-hoc requests are suspicious' },
			{ phrase: 'Je dois appeler la société de location', translation: 'I need to call the rental company', context: 'Useful at any incident — every rental contract carries a 24/7 helpline number' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in France (UK citizens)',
		lead: "France's preparation list for UK photocard holders is short — no government IDP needed. The Crit'Air vignette and priorité à droite step trip up most UK visitors. Skip them and either the camera bills you weeks later or you misjudge an unsigned junction.",
		schemaName: 'How to prepare for driving in France as a UK citizen',
		duration: 'PT25M',
		cost: '40 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: 'The plastic photocard is sufficient — no paper counterpart needed since 2015. Modern photocard is what French authorities accept under the post-Brexit recognition framework. If you still hold a pre-1998 paper licence, update to photocard before flying or carry an IDP alongside.',
			},
			{
				title: 'Generate IDP Companion as the peak-season rental-counter friction reducer',
				text: '$35 buys a multilingual digital PDF translating your UK photocard data into French (plus 11 other widely-read languages). Issued in two minutes online, valid 1–5 years. Satisfies the French-translation clause some branches default to asking for at peak season. Print at home or from any hotel — French counters expect physical paper, not phone screens.',
			},
			{
				title: "Order a Crit'Air vignette at certificat-air.gouv.fr",
				text: "If you're driving your own UK vehicle in France, or renting from a smaller chain or cross-border one-way, the Crit'Air sticker is mandatory in any ZFE city. Cost: €3.70 from outside France, mailed to your address. Order at least 2 weeks before travel. Major airport rentals already have it — confirm at pickup with the French phrase above.",
			},
			{
				title: "Verify the rental has a current Crit'Air vignette",
				text: 'At the rental counter, ask the French phrase above. Hertz, Avis, Europcar at major airports have it by default. Sixt and smaller chains sometimes don\'t, especially for vehicles transferred from non-French fleets. The 30 seconds of asking saves a €68 camera fine three weeks later.',
			},
			{
				title: 'Read up on priorité à droite + carry physical documents in one folder',
				text: 'Priorité à droite — the right-hand-priority rule at unsigned junctions — is the most-cited UK-tourist mistake in France. Watch for the warning sign and absence of give-way markings, particularly in older town centres in Provence, Alsace and Brittany. Carry UK photocard + passport + rental contract + insurance + IDP Companion in one folder for every gendarmerie check.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in France with a UK photocard licence?',
				answer: 'No. UK gov.uk advice confirms that no IDP is required to drive in France on a UK photocard licence for tourist visits. The post-Brexit recognition operates through the EU-UK Trade and Cooperation Agreement and remains in force as of 2026.',
			},
			{
				id: 2,
				question: 'What about an older paper UK licence?',
				answer: 'Paper licences (pre-1998 green or pink) are not always treated identically to photocards by French rental companies and aren\'t guaranteed acceptance at every desk. If you still hold a paper licence, update it to the photocard format before flying or carry an IDP alongside.',
			},
			{
				id: 3,
				question: 'My licence was issued in Guernsey/Jersey/Isle of Man — does that change things?',
				answer: 'Yes. Crown Dependency and Gibraltar licences aren\'t treated identically to mainland UK licences under French post-Brexit recognition at every branch. Carry an IDP or translation document and avoid the desk conversation. The post-Brexit framework is mainland-UK specific.',
			},
			{
				id: 4,
				question: "What is Crit'Air and do I need one?",
				answer: "Crit'Air is France's national vehicle-emissions classification system. Each major French city (Paris, Lyon, Grenoble, Strasbourg, Marseille, Rouen and ~12 others) operates a Zone à Faibles Émissions (ZFE) where vehicles must display a Crit'Air vignette (€3.70) on the windscreen. Cameras and police enforce. Fine for entry without the sticker: €68 (private vehicles), €135 escalated. Rental cars usually have it; UK private vehicles need to apply at certificat-air.gouv.fr at least 2 weeks ahead.",
			},
			{
				id: 5,
				question: 'What is priorité à droite and why does it catch UK drivers?',
				answer: "At unsigned junctions in France — particularly in older town centres and rural areas — vehicles approaching from your right have priority. There's no give-way sign because the rule is the default. This is opposite to the UK convention where unsigned junctions are rare and give-way markings explicit. Priorité à droite is the most-cited cause of UK-tourist incidents in France.",
			},
			{
				id: 6,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. French enforcement is unusual: Préfecture de Police roadside checks request the physical Geneva 1949 or Vienna 1968 booklet, while rental counter clauses (Avis, Hertz, Sixt) accept a translation document. IDP Companion is the translation document — your photocard presented in twelve widely-read languages from the Geneva 1949 set, used to satisfy the rental clause without obtaining the government booklet first. The government booklet comes from the authorised UK issuer for cases where a roadside police check is the primary concern.',
			},
			{
				id: 7,
				question: 'Can a rental company refuse me without an IDP even though French law doesn\'t require it?',
				answer: "Yes — at peak season some French branches default to asking for an IDP or translation at pickup. The Code de la Route is the law; the rental contract is a private agreement. Hertz, Avis, Sixt and Europcar French branches have all been reported asking for IDPs at Paris CDG Terminal 2F and Lyon-Saint Exupéry during summer. Branch policy varies even within the same chain.",
			},
			{
				id: 8,
				question: 'Will my UK motor insurance cover me in France?',
				answer: 'Most UK motor insurance provides minimum third-party cover in EU countries by default — but verify with your insurer for your specific policy version and travel dates. Rental insurance (Kasko / collision damage waiver / franchise reduction) sold at the counter is the standard fallback. Many UK credit cards offer secondary rental coverage in Europe.',
			},
			{
				id: 9,
				question: 'Can speed camera fines from France follow me back to the UK?',
				answer: 'Yes. France-UK enforcement cooperation has tightened post-Brexit and the rental company is contractually required to forward driver information to French authorities when requested. Fines issued to the rental company are charged to your UK card on file plus a typical €25–50 admin fee.',
			},
			{
				id: 10,
				question: 'Can I cross into Belgium, Switzerland, Italy or Spain with my French rental?',
				answer: "Usually yes, subject to contract terms — confirm in writing before driving across. Switzerland requires a separate motorway vignette (CHF 40/year) at the border; Italy has ZTL rules in historic centres; Spain has its own ZBE network. Speed limits, equipment requirements (reflective vest, headlamp beam deflectors) change at each border. One IDP Companion plan covers all of them on the same purchase.",
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and France-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'it', label: 'UK → Italy', status: 'Live', href: '/idp-for-uk-drivers-in-italy/' },
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain/' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal/' },
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco/' },
		],
	},

	finalCta: {
		heading: 'Driving Paris, Provence or the Loire Valley?',
		text: "Multilingual PDF including French, English, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Print at home or from any French hotel. Valid 1–5 years and covers France plus Italy, Spain, Portugal, Greece, Morocco on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Gendarmerie Nationale, the Police Nationale, the Ministère de l'Intérieur, Sécurité Routière, or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion must be used alongside your original UK photocard driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Code de la Route — legifrance.gouv.fr (Articles R413-14 speeding, R234-1 alcohol, R412-6 phone use, R411-25 priorité à droite)',
			"Décret n° 2016-847 establishing the Crit'Air vehicle classification and ZFE enforcement framework",
			'UK Foreign, Commonwealth & Development Office — Driving in France (gov.uk/foreign-travel-advice/france)',
			'Sécurité Routière — Tourist driving guide (securite-routiere.gouv.fr)',
			"Service Crit'Air — certificat-air.gouv.fr (vignette application, ZFE city directory)",
			'Avis, Hertz, Sixt European booking conditions for non-EU and post-Brexit UK licence holders (publicly published)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'France',
	},
};

export const ukFranceCopy: Record<'en', CountryPairCopy> = { en };
