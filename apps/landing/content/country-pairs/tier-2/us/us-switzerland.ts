/**
 * Country-pair content: United States → Switzerland.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: ASTRA (Bundesamt für Strassen) allows valid foreign licences
 * for 12 months from arrival — US licence is legally sufficient for tourist
 * driving. The killer angles are the Swiss-specific operational realities:
 *   - Motorway vignette mandatory (CHF 40 annual or CHF 25 3-day digital
 *     since 2024). Without it autobahn use is a CHF 200 fine.
 *   - Raserdelikt criminal-speeding law: 25 km/h over urban / 30 km/h over
 *     rural / 35 km/h over motorway is a CRIMINAL offence with fines tied
 *     to daily income. Five-figure CHF penalties for high earners.
 *   - Four official languages (German / French / Italian / Romansh) — cantonal
 *     police operate in the regional working language, so phrases block
 *     reflects all three Latin scripts.
 *   - Alpine pass seasonal closures (Grimsel/Furka/Susten/Klausen Nov–June).
 *
 * Middle-pivot: clean — no AAA / AATA recommendations anywhere except the
 * single legal disclaimer line.
 *
 * SEO add-ons present: tldr, lez (Vignette + Raserdelikt + Alpine passes),
 * phrases (German/French/Italian 8 items), howTo, lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'Driving Switzerland on a US License: 2026 Vignette & Raserdelikt',
		description:
			"US license is legal in Switzerland for 12 months — ASTRA allows it. But the CHF 40 motorway vignette is mandatory and Raserdelikt criminal-speeding kicks in 25 km/h over urban limits. Honest 2026 guide.",
		ogTitleShort: 'US in Switzerland: Vignette & Raserdelikt',
		ogSubtitle: 'ASTRA gives 12 months — the vignette and radar still bill',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Switzerland',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Switzerland · 2026 Guide',
		title: 'Driving Switzerland on a US License: 2026 Vignette & Raserdelikt',
		lead: "You're picking up an Audi Q3 at Zurich Airport in mid-June for a nine-day Alps loop through Lucerne, Interlaken and the Grimsel Pass. Your Texas license is in English, the Federal Roads Office (ASTRA) allows valid foreign licenses for up to twelve months, and the legal answer for tourists is clean. What the rental confirmation didn't mention: the Swiss motorway vignette is mandatory — CHF 40 for the annual sticker or CHF 25 for the 3-day digital pass introduced in 2024 — without it you cannot legally use any Swiss autobahn. Cantonal speed cameras are among the most aggressive in Europe, and the Raserdelikt provisions treat speeding above 25 km/h over the urban limit as a criminal offence with fines tied to your daily income. Five-figure CHF penalties for high earners are not uncommon. None of that has to do with an IDP.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — ASTRA allows foreign licenses for 12 months from arrival',
		text: "The Swiss Federal Roads Office (Bundesamt für Strassen, ASTRA) allows visitors to drive on a valid foreign driver's license for up to twelve months from the date of arrival. US licenses are issued in English and accepted by ASTRA without translation for short-term visitors. Switzerland is party to both the 1949 Geneva and 1968 Vienna Conventions. Residents must convert to a Swiss license after twelve months — tourists almost never reach that threshold. A multilingual translation companion stays useful at peak-season rental desks and at cantonal police stops, not as a legal requirement.",
	},

	tldr: {
		heading: 'US License alone vs IDP Companion in Switzerland',
		lead: "For a US tourist driving in Switzerland, your original US license is the legally required document. IDP Companion is a separate multilingual translation companion — useful where rental policy or cantonal police interaction favours a second document, not a legal substitute.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Switzerland',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Legally accepted by ASTRA for tourist driving for up to twelve months from arrival. Issued in English — no translation required by law. Major chains (Hertz, Avis, Sixt, Europcar, Enterprise) at Zurich ZRH, Geneva GVA, Basel BSL and Bern BRN airports accept it without supplementary documentation in most cases.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: "Multilingual digital PDF presenting your US license data in German, French, Italian, English, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Particularly useful in Switzerland because cantonal police forces operate in the regional working language (German in Zurich, French in Geneva/Lausanne, Italian in Lugano/Ticino, Romansh in Graubünden). Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Switzerland: original US license + US passport + rental contract + insurance documentation + motorway vignette on the windshield (or active e-vignette in the database). The vignette is mandatory for any autobahn use — most rentals include it; verify at pickup. The Raserdelikt thresholds are separate operational research before driving Alpine routes.",
	},

	whyNotEnough: {
		heading: 'Why your US license alone creates rental-desk and Raserdelikt friction in Switzerland',
		lead: "Legally your US license is enough for twelve months. Practically, three Switzerland-specific realities catch US tourists.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Sixt, Europcar and Enterprise each set their own internal verification policy at Swiss branches. Zurich, Geneva and Basel airport branches process the largest concentration of international rentals in Switzerland, and desk agents work through high-volume pickup queues by defaulting to standardised paperwork. Some branches request an IDP at pickup even when ASTRA doesn't require one. The ASTRA answer (yes, drive for 12 months) and the desk answer (where's your IDP?) can come from two different authorities.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The four-language reason',
				text: "Switzerland has four official languages — German, French, Italian and Romansh. Cantonal authorities operate in their region's working language. A US state-format license is in English; the agent reading it at a counter in Geneva (French-speaking), Lugano (Italian-speaking) or Zurich (German-speaking) may default to the document that's quickest to parse in their working language. IDP Companion presents your license data in all three Latin-script Swiss languages alongside English.",
			},
			{
				icon: 'ph:scales-bold',
				title: 'The Raserdelikt enforcement reason',
				text: "Swiss speed-camera enforcement is among the most aggressive in Europe. Cantonal police forces operate fixed cameras, average-speed cameras on mountain-pass climbs and mobile camera vans on tourist routes around Lake Geneva, the Furka Pass and the St. Gotthard approach. The Raserdelikt provisions treat speeding above 25 km/h over urban, 30 over rural or 35 over motorway as a criminal offence with fines pegged to daily income. Five-figure CHF penalties for high-earner drivers are documented. Cameras don't care about your paperwork — they generate the ticket based on plate.",
			},
		],
	},

	rules: {
		heading: 'Switzerland driving rules US drivers should know',
		lead: 'Vignette discipline, Raserdelikt thresholds and daytime running lights are the operational outliers. Right-hand traffic is familiar to US drivers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in many residential zones; 20 km/h in shared zones' },
			{ icon: 'mdi:road-variant', label: 'Rural road', value: '80 km/h', note: 'Single carriageway; lower on mountain passes' },
			{ icon: 'mdi:speedometer-medium', label: 'Autobahn', value: '120 km/h', note: 'Vignette mandatory (CHF 40 annual or CHF 25 3-day)' },
			{ icon: 'mdi:car-light-high', label: 'Daytime running lights', value: 'Mandatory always', note: 'Even in daylight, year-round; modern rentals are automatic' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.01% for novice drivers (<3 yrs) and professional drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Hands-free OK; ~CHF 100 for handheld' },
			{ icon: 'mdi:gavel', label: 'Raserdelikt threshold', value: '25 / 30 / 35 km/h over', note: 'Criminal offence; income-pegged fines; possible imprisonment' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Switzerland',
		lead: 'Swiss fines are set in the federal Ordnungsbussenverordnung and enforced by cantonal police. The Raserdelikt provisions override the standard schedule and refer severe speeding to criminal court — fines are pegged to daily income rather than a fixed amount.',
		colViolation: 'Violation',
		colAmount: 'Fine (CHF)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:tag-outline', label: 'Driving on autobahn without vignette', amount: 'CHF 200 + vignette', note: 'Cantonal patrols and the e-vignette database both enforce', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Speeding 1–10 km/h over urban', amount: 'CHF 40–120', note: 'Camera-enforced widely; mobile vans operate routinely', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 15–25 km/h over urban', amount: 'Court-charged, escalating', note: 'Standard tier escalates fast in mid-band', severity: 'med' },
			{ icon: 'mdi:gavel', label: 'Raserdelikt — 25+ urban / 30+ rural / 35+ motorway', amount: 'Income-pegged, possible imprisonment', note: 'Criminal offence. Five-figure CHF penalties documented for high earners', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '~CHF 250', note: 'Camera-enforced at major intersections', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '~CHF 100', note: 'Routinely enforced including at red lights', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '~CHF 60', note: 'Driver liable for unbelted passengers', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.08% BAC', amount: '~CHF 600 + 3-month suspension', note: 'Cantonal breath-test stops common around ski-season weekends', severity: 'high' },
			{ icon: 'mdi:tunnel', label: 'Overtaking in prohibited tunnel sections', amount: 'CHF 250+', note: 'Tunnel speed and overtaking rules strictly enforced — St. Gotthard, Lötschberg, San Bernardino', severity: 'med' },
		],
		caption: 'Sources: Bundesamt für Strassen (ASTRA); Strassenverkehrsgesetz (SVG); Ordnungsbussenverordnung; Touring Club Suisse (TCS) 2026 schedule; US Embassy Bern driving advisory (ch.usembassy.gov).',
	},

	lez: {
		heading: 'Switzerland-specific zones — Vignette, Raserdelikt, Alpine passes',
		badge: 'Switzerland-specific',
		lead: "Switzerland doesn't operate Italian-style ZTLs or French ZFE clean-air zones — its operational realities are different. Three zones-of-attention catch US tourists: the motorway vignette, the Raserdelikt criminal-speeding band, and Alpine pass seasonal closures.",
		zones: [
			{
				city: 'Every Swiss autobahn (nationwide)',
				name: 'Autobahnvignette — mandatory motorway sticker',
				description: 'A 2026 motorway vignette is mandatory for any Swiss autobahn use. The annual sticker (CHF 40) is sold at petrol stations and border crossings. The 3-day digital pass (CHF 25), introduced in 2024, is purchased online via the e-vignette portal and tied to your plate in the federal database. Driving on the autobahn without a valid vignette is enforced by cantonal patrol checks at toll plazas and by automatic plate-recognition at border crossings.',
				fine: 'CHF 200 + cost of vignette',
				note: 'Most rental cars from major chains include the annual vignette by default. Confirm at pickup — "Hat das Auto die Autobahnvignette für 2026?" or "La voiture a-t-elle la vignette autoroutière 2026?"',
			},
			{
				city: 'Nationwide enforcement (Vaud, Valais, Graubünden, Ticino are hot zones)',
				name: 'Raserdelikt criminal-speeding band',
				description: "Swiss criminal law treats extreme speeding as a criminal offence rather than an administrative infraction. The thresholds are 25 km/h over urban limits, 30 over rural, 35 over motorway. Once you cross any of these, the case is referred to criminal court. Fines are pegged to the driver's daily income (Tagessatz system) — high earners have received six-figure CHF penalties. The Furka, Grimsel and Susten Pass approaches see the highest concentration of Raserdelikt enforcement in summer.",
				fine: 'Income-pegged + possible licence withdrawal',
				note: "Keep particular attention on mountain-pass straights where the temptation to push is highest. Cantonal mobile camera vans operate routinely on these stretches. The case escalates from civil to criminal at thresholds — there is no equivalent in US state speeding law.",
			},
			{
				city: 'Alpine passes (Grimsel, Furka, Susten, Klausen, San Bernardino tunnels)',
				name: 'Seasonal pass closures + tunnel routing',
				description: "Major Alpine passes typically close from November to mid-June due to snow. Grimsel, Furka, Susten and Klausen are the most affected — check status at the Federal Roads Office before driving any of these routes outside June–October. Major road tunnels (St. Gotthard, San Bernardino, Lötschberg, Vereina) operate year-round and are included in the standard motorway vignette. The Vereina car train (Klosters to Sagliains) is a useful Engadine bypass in winter.",
				fine: 'Variable',
				note: 'For Italy or Austria-bound trips outside summer pass season, plan around tunnel routes. Routing apps will sometimes suggest a closed pass — always verify with the rental agent or astra.admin.ch.',
			},
		],
		tip: "Practical rule for Switzerland: vignette must be on the windshield (or in the e-vignette database) before driving onto any autobahn. Raserdelikt thresholds are 25 / 30 / 35 km/h over — once crossed, the case is criminal. Alpine passes close November to mid-June; use the road tunnels in winter. These three realities define US-tourist exposure in Switzerland far more than any IDP question.",
	},

	honesty: {
		heading: 'How IDP Companion fits in Switzerland — honestly',
		lead: "Switzerland is clean for US tourists on the legal side: ASTRA gives twelve months on a foreign licence. Where IDP Companion adds value is the peak-season rental desk and cantonal police interactions in the four-language reality.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your US license data into German, French, Italian, English, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'Particularly useful in Switzerland because three of those languages (German, French, Italian) are official Swiss working languages',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention',
				'Not required by ASTRA for US license holders driving in Switzerland during the 12-month tourist window',
				'Not valid by itself — must be carried alongside your physical US driver\'s licence',
				'Not a motorway vignette — that is a separate CHF 40 / CHF 25 purchase obtained from a petrol station, border crossing or the e-vignette portal',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Switzerland',
			items: [
				'At Zurich, Geneva, Bern and Basel airport rental queues during peak summer turnover',
				'At cantonal police stops, especially on tourist routes in Vaud, Valais, Ticino and Graubünden where the local working language may be French, Italian or Romansh',
				'For insurance and accident-report paperwork where multilingual translation simplifies the claim across cantonal language boundaries',
				'At smaller rental branches in Lugano (Italian-speaking) and Sion (French-speaking) where US licence formats are less commonly seen',
				'As a re-printable backup from any hotel if your physical licence is lost mid-trip on a multi-region Alpine itinerary',
			],
		},
		needOfficial: {
			title: 'Documents Swiss authorities actually care about',
			items: [
				'Your physical US driver\'s licence — the actual permission to drive (no document substitutes for this)',
				'US passport — physically carried, ID-matching the rental contract',
				'Rental agreement and proof of valid Swiss rental insurance — provided by the rental company',
				'A current 2026 motorway vignette on the windshield (or active e-vignette in the federal database) if you intend to use any autobahn',
				'Snow chains or winter tyres if driving Alpine routes November–April; required by road condition under Article 29 SVG',
			],
		},
		pattern:
			"What prepared US travellers in Switzerland actually carry: physical US licence + passport + rental contract + insurance card + IDP Companion + verified vignette on the windshield. The Raserdelikt thresholds are pre-trip awareness, not paperwork. Total documentation prep: $35 + CHF 25 (3-day vignette) if not already included in the rental — usually included. The €2,000+ exposure of a criminal-speeding Raserdelikt referral matters far more than the IDP question.",
	},

	renting: {
		heading: 'Renting a car in Switzerland as a US driver',
		lead: "Swiss rentals are reliable and well-maintained, with one specific operational gotcha (the vignette) and one specific risk (Raserdelikt criminal speeding). Counter policy varies more by branch than by chain.",
		chains: [
			{ name: 'Hertz Switzerland', policy: 'Major presence at Zurich ZRH, Geneva GVA and Basel BSL plus city locations. Accepts US licences for the 12-month tourist window. Internal policy at Zurich may recommend an IDP during peak summer turnover.' },
			{ name: 'Avis Switzerland (incl. Budget)', policy: 'Wide network including mountain-region pickup points. Accepts US licences in English. Budget operates under the same group with identical policy.' },
			{ name: 'Sixt Switzerland', policy: 'Premium fleet, strong at Zurich, Geneva, Bern and Basel airports. Generally accepts US licences; documentation requirements tighter for premium-class vehicles.' },
			{ name: 'Europcar / Enterprise', policy: 'Strong networks including border-region pickups (St. Margrethen, Chiasso, Genève-Aéroport). US licences accepted; both reliably include the motorway vignette by default.' },
		],
		tipsHeading: 'Practical tips for renting in Switzerland',
		tips: [
			'Verify the 2026 motorway vignette is on the windshield (or active in the e-vignette database for your rental plate) before driving onto any autobahn — CHF 200 fine + cost of vignette if missed',
			'The 3-day digital vignette (CHF 25) is new since 2024 and bound to the plate via the e-vignette portal; the annual sticker (CHF 40) is the standard for trips longer than 3 days. Confirm which one the rental carries',
			'Raserdelikt threshold awareness: 25 km/h over urban / 30 over rural / 35 over motorway = criminal court territory. Income-pegged fines have produced six-figure CHF penalties',
			'Mountain pass seasonal closures: Grimsel, Furka, Susten and Klausen typically open mid-June to mid-October. Use tunnels (St. Gotthard, San Bernardino, Lötschberg) outside that window',
			'Winter equipment (winter tyres or snow chains) is not a fixed-date legal requirement but driving without appropriate equipment in winter conditions is an Article 29 SVG offence. Rentals are typically equipped November–April; verify at pickup if Alpine routes planned',
			'Daytime running lights are mandatory year-round in all weather conditions — modern rentals are automatic; verify before driving off',
			'Manual transmission is the default — automatics cost more and are limited; book early if needed',
			"Diesel vs petrol: both common, diesel often cheaper for long Alpine routes. Rural-region petrol stations close earlier than US standard — fill up before driving into the mountains",
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for US drivers',
		lead: 'Realistic outcomes ranked by frequency, based on US Embassy advisories, Touring Club Suisse data and rental-industry policy disclosures.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'Desk agent accepts US licence, you drive away in 15 minutes',
				text: 'ASTRA legal default. No IDP needed, vignette already on the windshield, drive the Lucerne–Interlaken–Lauterbrunnen route without incident. Most Switzerland trips end this way.',
			},
			{
				severity: 'low',
				frequency: 'Occasional at peak season',
				label: 'Agent asks for IDP, you produce IDP Companion',
				text: 'Five extra minutes of paperwork verification, contract proceeds. Common at Zurich ZRH and Geneva GVA during July–August summer peak and at Sixt branches given premium-class vehicle policies.',
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Standard speeding camera ticket arrives weeks later',
				text: 'A cantonal mobile camera or fixed Blitzer catches you at 110 km/h in a 100 zone (or 65 in a 50). Fine CHF 40–250 plus rental processing fee of CHF 30–50. Charged to your US card on file 3–6 weeks after the trip.',
			},
			{
				severity: 'med',
				frequency: 'Uncommon for rentals',
				label: 'Driving on autobahn without vignette, cantonal patrol stops you',
				text: 'CHF 200 fine + CHF 40 vignette purchase on the spot. Rare for major-chain rentals (vignette is included by default) but documented for cross-border one-way rentals from France or Germany. Avoidable with the verification phrase above.',
			},
			{
				severity: 'high',
				frequency: 'Rare but consequential',
				label: 'Raserdelikt criminal-court summons',
				text: "Speeding above 25 km/h over urban, 30 over rural or 35 over motorway crosses into criminal-court territory. Fine pegged to daily income (Tagessatz system) plus possible licence withdrawal and imprisonment. High earners have received six-figure CHF penalties. Most reported on Grimsel, Furka and Susten Pass approaches.",
			},
		],
		math: "IDP Companion is $35. The Zurich same-day-rebook scenario costs CHF 100+ in airport-to-hotel taxi alone, before the walk-in rental surcharge. The Raserdelikt referral is small-probability/large-magnitude — six-figure CHF penalties are documented. The vignette is included in nearly every major-chain rental. Total documentation prep that covers everything: under $40.",
	},

	phrases: {
		heading: 'Swiss-language phrases for rental desks and cantonal police',
		lead: "Eight phrases covering all three Latin Swiss working languages. The vignette confirmation phrase is the most useful — translated into the regional working language of your pickup location.",
		items: [
			{ phrase: 'Hier ist mein Führerschein / Voici mon permis de conduire / Ecco la mia patente', translation: 'Here is my driving license', context: 'Standard opening in all three regions — hand US licence + passport together' },
			{ phrase: 'Und hier ist die mehrsprachige Übersetzung', translation: 'And here is the multilingual translation (German)', context: 'Follow-up at a Zurich, Bern, Basel or Lucerne rental counter' },
			{ phrase: 'Hat das Auto die Autobahnvignette für 2026?', translation: 'Does the car have the 2026 motorway vignette? (German)', context: 'Critical phrase at pickup in Zurich, Basel, Bern — required before any autobahn use' },
			{ phrase: 'La voiture a-t-elle la vignette autoroutière 2026?', translation: 'Does the car have the 2026 motorway vignette? (French)', context: 'Same phrase for Geneva, Lausanne, Sion and other French-speaking cantons' },
			{ phrase: "L'auto ha la vignetta autostradale 2026?", translation: 'Does the car have the 2026 motorway vignette? (Italian)', context: 'For Lugano, Bellinzona, Locarno and other Ticino pickups' },
			{ phrase: 'Ich bin US-amerikanischer Tourist / Je suis touriste américain', translation: "I'm a US tourist (German / French)", context: 'Establishes context at any document check' },
			{ phrase: 'Sprechen Sie Englisch? / Parlez-vous anglais? / Parla inglese?', translation: 'Do you speak English? (DE / FR / IT)', context: 'Most cantonal police and rental agents in tourist areas switch to basic English' },
			{ phrase: "Gibt es ein Problem? / Y a-t-il un problème? / C'è un problema?", translation: 'Is there a problem? (DE / FR / IT)', context: 'At a cantonal police stop, opens the conversation politely in the regional language' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Switzerland (US citizens)',
		lead: "Switzerland's preparation list for US tourists is short — no government IDP needed. The vignette and the Raserdelikt threshold trip up most US visitors. Skip them and either the cantonal patrol stops you or the criminal-court referral arrives.",
		schemaName: 'How to prepare for driving in Switzerland as a US citizen',
		duration: 'PT20M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired licences are not accepted. Swiss authorities expect a physical document at every rental counter and cantonal check.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your US licence into German, French and Italian (plus 9 other widely-read languages from the 1949 Geneva Convention set). Issued in two minutes online, valid 1–5 years. Particularly useful in Switzerland where cantonal police operate in the regional working language. Print at home or from any Swiss hotel — physical paper, not phone screens.',
			},
			{
				title: 'Verify the 2026 motorway vignette is on the rental',
				text: 'At the rental counter, use the verification phrase in the regional working language. Major chains include the annual vignette by default; cross-border one-way rentals from France or Germany sometimes don\'t. CHF 200 fine + cost of vignette if you drive autobahn without it. The 3-day digital vignette (CHF 25, since 2024) is bound to the plate in the e-vignette portal.',
			},
			{
				title: 'Note the Raserdelikt thresholds if driving Alpine routes',
				text: 'Speeding above 25 km/h over urban, 30 over rural or 35 over motorway is a criminal offence under Raserdelikt provisions. Fines are pegged to your daily income. Cantonal mobile camera vans operate on Grimsel, Furka, Susten and St. Gotthard approaches. Pre-trip awareness, not paperwork — but understanding the thresholds protects you from a five-figure CHF penalty.',
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US licence + US passport + rental contract + insurance card + IDP Companion — all in one folder. Hand the folder over at any rental counter or cantonal police stop. Swiss police are efficient when documents are organised in one place and slow when they are not.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Switzerland as a US tourist?',
				answer: 'No. The Swiss Federal Roads Office (ASTRA, Bundesamt für Strassen) allows visitors to drive on a valid foreign driver\'s licence for up to twelve months from the date of arrival. US licences are issued in English and are accepted without translation for short tourist stays.',
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes. Rental companies set their own internal verification policy separate from ASTRA. Peak-season airport branches at Zurich, Geneva and Basel sometimes have policies that request an IDP at pickup even when the law doesn\'t require one. Sixt is the most consistently strict given Switzerland\'s premium-vehicle market.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government IDP is a formal document issued under the 1949 Geneva or 1968 Vienna Convention by an authorised national organisation. IDP Companion is a private multilingual translation companion document presenting your US licence details in twelve widely-read languages — used alongside your US licence, particularly useful in Switzerland\'s four-official-language reality.',
			},
			{
				id: 4,
				question: 'What is the Swiss motorway vignette and do I need one?',
				answer: 'Yes — every vehicle using any Swiss autobahn must display a valid vignette (annual sticker CHF 40, or 3-day digital pass CHF 25 since 2024). Driving on autobahn without one is a CHF 200 fine plus the cost of the vignette. Most rental cars from major chains include it by default; verify at pickup with the regional-language phrase.',
			},
			{
				id: 5,
				question: 'What is the Raserdelikt and how does it work?',
				answer: 'The Raserdelikt provisions of Swiss criminal law treat extreme speeding as a criminal offence rather than an administrative infraction. Thresholds: above 25 km/h over the urban limit, 30 over rural, 35 over motorway. Fines are pegged to the driver\'s daily income (Tagessatz system) rather than a fixed amount, and penalties include possible licence withdrawal and imprisonment. Five-figure CHF penalties for high-earner drivers are documented.',
			},
			{
				id: 6,
				question: 'Are speed cameras really that aggressive in Switzerland?',
				answer: 'Yes — Switzerland is among the most aggressively camera-enforced jurisdictions in Europe. Cantonal police forces operate fixed Blitzer cameras, average-speed cameras on mountain stretches, and mobile camera vans on tourist routes around Lake Geneva, the Furka Pass and St. Gotthard approach. Cantonal forces compete on enforcement statistics.',
			},
			{
				id: 7,
				question: "What's the alcohol limit in Switzerland?",
				answer: '0.05% (0.5 ‰) BAC for general drivers; 0.01% for novice drivers (first three years of holding a licence) and professional drivers. Cantonal police breath-test stops are routine, especially around ski-season weekends and major events.',
			},
			{
				id: 8,
				question: 'Can I drive in all four language regions on my US licence?',
				answer: 'Yes — ASTRA\'s 12-month rule applies nationally. Cantonal police forces operate in the cantonal working language (German, French, Italian or Romansh), which is where multilingual paperwork helps speed up the stop. IDP Companion presents your licence data in three of the four Latin-script Swiss official languages.',
			},
			{
				id: 9,
				question: 'When are the Alpine passes open and what about winter tunnels?',
				answer: 'Major Alpine passes (Grimsel, Furka, Susten, Klausen) typically close November to mid-June. Major road tunnels (St. Gotthard, San Bernardino, Lötschberg, Vereina) operate year-round and are included in the standard motorway vignette. Plan around closures, especially shoulder-season trips — apps will sometimes suggest a closed pass.',
			},
			{
				id: 10,
				question: 'Can I cross into Italy, France, Germany or Austria with my Swiss rental?',
				answer: "Usually yes, subject to contract terms — confirm in writing before crossing. Italy has ZTL rules in historic centres; France requires the Crit'Air vignette in city ZFEs; Germany has §29 FeV translation requirements and Umweltzone stickers; Austria has its own vignette (~€10/10-day) at the border. One IDP Companion plan covers all of them on the same purchase.",
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to Europe and neighbouring Alpine destinations.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'de', label: 'US → Germany', status: 'Live', href: '/idp-for-us-drivers-in-germany/' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'at', label: 'US → Austria', status: 'Live', href: '/idp-for-us-drivers-in-austria/' },
			{ flagFrom: 'gb', flagTo: 'it', label: 'UK → Italy', status: 'Live', href: '/idp-for-uk-drivers-in-italy/' },
		],
	},

	finalCta: {
		heading: 'Driving the Swiss Alps or Lake Geneva loop?',
		text: "Multilingual PDF including German, French, Italian, English, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real US licence in two minutes. Print at home or from any Swiss hotel. Valid 1–5 years and covers Switzerland plus Germany, Italy, France, Austria on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Bundesamt für Strassen (ASTRA), Swiss cantonal police forces or any Swiss federal or cantonal government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. In the United States, authorised issuers of Geneva 1949 IDPs are AAA and AATA. Swiss law does not require US citizens to carry an IDP for tourist stays within the twelve-month window — IDP Companion is purchased as a translation aid for rental-counter friction and cantonal police interactions, not as a legal compliance product. It must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Bundesamt für Strassen (ASTRA) — Driving in Switzerland with a foreign licence (astra.admin.ch)',
			'Strassenverkehrsgesetz (SVG) — Swiss federal road traffic law (fedlex.admin.ch)',
			'Ordnungsbussenverordnung — Fine schedule (fedlex.admin.ch)',
			'Touring Club Suisse (TCS) — Visitor driving guide (tcs.ch)',
			'E-vignette portal — 3-day digital vignette purchase (e-vignette.ch)',
			'US Embassy in Bern — Driving advisory for US citizens (ch.usembassy.gov)',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Switzerland',
	},
};

export const usSwitzerlandCopy: Record<'en', CountryPairCopy> = { en };
