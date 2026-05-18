/**
 * Country-pair content: United States → Germany.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: §29 Fahrerlaubnis-Verordnung (FeV) requires non-German-
 * language driving licence holders to carry either a Geneva 1949 IDP or
 * an officially certified German translation alongside the original. The
 * US is not on Annex 11 of exempted countries. Pragmatic Bundespolizei
 * enforcement vs strict legal reading is the core tension.
 *
 * Middle-pivot positioning: per CLAUDE.md binding rule, IDP Companion is
 * the multilingual translation companion + rental-desk friction reducer.
 * §29 FeV is disclosed factually. We do NOT recommend AAA / AATA Geneva
 * 1949 IDPs anywhere except the single legal disclaimer line. The reader
 * makes their own due-diligence decision about whether to also obtain a
 * government IDP — the page's job is to convert on IDP Companion + close
 * the rental-desk and police-stop friction gaps.
 *
 * Killer destination-specific angles: autobahn no-limit sections +
 * Richtgeschwindigkeit 130 fault-assessment rule, Blitzer (speed cameras)
 * everywhere, Umweltzone + Umweltplakette sticker required in Berlin/
 * Munich/Stuttgart/Cologne, left-lane discipline + tailgating fines,
 * Winterreifen seasonal requirement.
 *
 * SEO add-ons present: tldr, lez (Umweltzone Berlin + Munich + Stuttgart),
 * phrases (German 8 items), howTo, lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Germany: §29 FeV & Autobahn 2026',
		description:
			'German §29 FeV requires non-German-language licence holders to carry IDP or certified translation. Plus Blitzer cameras, Umweltzone stickers, and autobahn Richtgeschwindigkeit. Honest 2026 guide.',
		ogTitleShort: 'US in Germany: §29 FeV & Autobahn',
		ogSubtitle: 'What the law says — and what the Bundespolizei does',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Germany',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'US → Germany · 2026 Guide',
		title: 'IDP for US Drivers in Germany: §29 FeV & Autobahn 2026',
		lead: "You've reserved a BMW X1 at Munich Airport in late September for a ten-day Bavaria–Black Forest loop through Rothenburg, Heidelberg and the Romantic Road. Your Illinois licence is in English. German law — §29 of the Fahrerlaubnis-Verordnung — requires holders of non-German-language driving licences to carry either a Geneva 1949 International Driving Permit or an officially certified German translation alongside the original. A US licence alone, strictly read, is incomplete paperwork. The Bundespolizei is often pragmatic with short-term visitors at autobahn checks — pragmatic is not a legal status. The €60 fine for missing translation is the smaller consequence; an insurance claim after an autobahn incident at 180 km/h that hinges on whether you were properly authorised to drive is the larger one. IDP Companion is the multilingual translation companion that smooths rental counters and police stops — not a Geneva 1949 IDP.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — §29 FeV requires translation or IDP alongside a non-German-language licence',
		text: "Under §29 of the German Fahrerlaubnis-Verordnung (FeV), drivers from non-EU/EEA countries whose driving licence is not issued in German must carry an officially certified translation or a Geneva 1949 International Driving Permit alongside the original. The US is not on the Annex 11 list of countries exempted from this requirement. Foreign licences are recognised for the first six months from entry; residents must convert to a German licence after that. Tourist stays almost never reach six months. Bundespolizei enforcement at short-term tourist checks is often pragmatic — but pragmatic enforcement is not a legal status, and insurance claims after autobahn incidents can hinge on the strict reading.",
	},

	tldr: {
		heading: 'US Licence alone vs IDP Companion in Germany',
		lead: "§29 FeV calls for additional translation paperwork alongside a US licence. IDP Companion is a multilingual translation companion document — useful at rental counters and Bundespolizei stops as supplemental translation, not a substitute for a government Geneva 1949 IDP.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Germany',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: "Recognised by German authorities for the first six months from entry — but §29 FeV requires accompanying translation or Geneva 1949 IDP for non-German-language licences. Alone, strictly read, the documentation is incomplete. Major chains (Hertz, Avis, Sixt, Europcar, Enterprise) at Frankfurt FRA, Munich MUC, Berlin BER and Hamburg vary on whether they request the additional paperwork at pickup — branch policy is inconsistent.",
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US licence',
				whatItDoes: "Multilingual digital PDF presenting your US licence data in German, English, French, Spanish, Italian, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Helpful at rental counters where the agent wants quick German-language verification, and at Bundespolizei autobahn stops as supplemental translation. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Germany: original physical US licence + US passport + rental contract + insurance documentation + Umweltplakette sticker on the windshield if entering low-emission zones (Berlin, Munich, Stuttgart, Cologne and ~70 other cities). Whether IDP Companion satisfies §29 FeV's reference to an 'officially certified translation' depends on the individual officer's reading — the term, strictly applied, refers to a sworn translator's product. That nuance is between you and the law; IDP Companion's job on this page is the rental-desk and police-stop friction reduction.",
	},

	whyNotEnough: {
		heading: 'Why your US licence alone creates §29 FeV exposure in Germany',
		lead: 'For US tourists in Germany this is a statement about the law, not rental policy. Three Germany-specific realities catch US visitors.',
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The legal reason',
				text: "§29 of the Fahrerlaubnis-Verordnung sets out what foreign drivers must carry. Para 3 requires holders of foreign licences not in German to carry an officially certified translation, unless the licence is also accompanied by an International Driving Permit, or unless the issuing country is listed in Annex 11. The US is not on Annex 11. The legal default for US licence holders is: original licence + translation or IDP. A US licence alone is incomplete paperwork in the eyes of German law — even if many Bundespolizei officers don't enforce strictly at short-term tourist checks.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Sixt (German-headquartered), Europcar and Enterprise each handle §29 FeV in their own way at the counter. Some branches at Frankfurt, Munich and Berlin airports explicitly request the IDP or translation at pickup; others accept a US licence alone with a verbal confirmation. Sixt is the most consistently strict given its German legal seat. The policy varies by branch, by agent, and by season — peak summer and Oktoberfest weeks see the strictest enforcement.",
			},
			{
				icon: 'ph:scales-bold',
				title: 'The insurance reason',
				text: "Most US auto insurance doesn't extend to Germany. Rental-included insurance (Vollkasko comprehensive or partial Teilkasko) covers most damage scenarios — but the policy assumes the named driver was properly authorised under local law. After an autobahn incident at 180 km/h, the question of whether you carried the §29 FeV paperwork can re-enter the conversation. The €60 fixed-charge fine for missing translation is the small consequence; the €5,000+ deductible argument after a major claim is the larger one.",
			},
		],
	},

	rules: {
		heading: 'Germany driving rules US drivers should know',
		lead: 'Autobahn discipline, left-lane culture and Blitzer (speed cameras) are the operational outliers. Right-hand traffic is familiar to US drivers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as the US' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in residential and school zones' },
			{ icon: 'mdi:road-variant', label: 'Rural road', value: '100 km/h', note: 'Single carriageway' },
			{ icon: 'mdi:speedometer-medium', label: 'Autobahn — limited', value: '100–130 km/h', note: 'Posted limits enforced by Blitzer' },
			{ icon: 'mdi:speedometer-slow', label: 'Autobahn — no limit', value: 'Richtgeschwindigkeit 130', note: 'Above 130 affects fault assessment in accidents' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.00% for novice drivers (<2 yrs) and drivers under 21' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Hands-free OK; €100 + 1 Flensburg point for handheld' },
			{ icon: 'mdi:car-light-high', label: 'Left lane discipline', value: 'Overtaking only', note: 'Linksfahrgebot — cruising left is finable and culturally aggressive' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Germany',
		lead: 'German fines are set in the Bundeskatalog der Verkehrsordnungswidrigkeiten and updated periodically. Camera-issued tickets are forwarded by the rental company to your US card on file plus a typical €30–50 admin fee.',
		colViolation: 'Violation',
		colAmount: 'Fine (EUR)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:file-document-alert-outline', label: '§29 FeV translation missing', amount: '€10–60 fixed', note: 'Small fine on its own — but the insurance and accident-liability secondary consequences are larger', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Speeding <10 km/h over (urban)', amount: '€30+', note: 'Camera-enforced; Blitzer are everywhere on autobahns and urban streets', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 21–25 km/h over', amount: '€115 + 1 Flensburg point', note: 'Flensburg point system applies to residents; non-residents pay the fine', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 31–40 km/h over', amount: '€260 + 1-month ban', note: 'Driving ban applies even to visitors during the period of stay', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€90–360', note: 'Higher fines if light was red >1 second', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€100 + 1 point', note: 'Aggressively enforced including at red lights', severity: 'med' },
			{ icon: 'mdi:car-multiple', label: 'Tailgating on autobahn', amount: '€40–400+', note: 'Camera-enforced on heavily used stretches; A8/A9/A3 hot zones', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.109% BAC', amount: '€500 + 1-month ban', note: 'First-offence administrative penalty', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI 0.11%+ or impaired', amount: 'Criminal court', note: 'Possible imprisonment; international criminal record', severity: 'high' },
			{ icon: 'mdi:speedometer-medium', label: 'Cruising in left lane (Linksfahrgebot)', amount: '€80', note: 'Cultural offence as well as legal one', severity: 'low' },
		],
		caption: "Sources: Bundeskatalog der Verkehrsordnungswidrigkeiten 2026; Kraftfahrt-Bundesamt Flensburg point register; gesetze-im-internet.de/fev (§29 Fahrerlaubnis-Verordnung); de.usembassy.gov driving advisory.",
	},

	lez: {
		heading: 'Germany Umweltzonen — the green-sticker zone you need to verify',
		badge: 'Germany-specific',
		lead: "Germany operates a national Umweltzone (low-emission zone) network covering the centres of ~70 cities including Berlin, Munich, Stuttgart, Cologne, Frankfurt, Hannover and Düsseldorf. Each requires a green Umweltplakette sticker on the windshield. Without one — or with a yellow or red sticker that's no longer valid — you're fined.",
		zones: [
			{
				city: 'Berlin',
				name: 'Umweltzone Berlin — central S-Bahn ring',
				description: "Active 24/7 since 2008. Covers the area inside the Berlin S-Bahn Ring (S-Bahnring) — the central tourist area including Mitte, Friedrichshain, Kreuzberg, Prenzlauer Berg and Charlottenburg. Only vehicles with a green Umweltplakette may enter. Most rental cars from major chains have the green sticker already; cross-border rentals from Poland, Czech Republic or Austria sometimes don't. Cameras and police enforce.",
				fine: '€80 + 1 Flensburg point',
				note: 'Most Berlin Tegel-replacement BER airport rentals carry the green sticker by default. Confirm at pickup — "Hat das Auto die grüne Umweltplakette?"',
			},
			{
				city: 'Munich (München)',
				name: 'Umweltzone München + Diesel-Fahrverbot',
				description: "Active 24/7. Covers the area inside the Mittlerer Ring — central Munich including the Altstadt, Maxvorstadt, Schwabing and Haidhausen. Green Umweltplakette required. Additionally, Munich has a Diesel-Fahrverbot banning older diesel vehicles (Euro 4 and below) from the same zone since February 2023. Modern rental diesels (Euro 6) are allowed; older one-way cross-border rentals may not be.",
				fine: '€80–100',
				note: 'Munich MUC airport rentals carry the correct sticker by default. If your trip includes the Glyptothek, Pinakothek or Englischer Garten area, confirm at pickup.',
			},
			{
				city: 'Stuttgart + Cologne + Frankfurt + ~70 others',
				name: 'National Umweltzone network',
				description: "Stuttgart's Umweltzone is the largest in Germany by area and the strictest on diesel — older Euro 4 and below diesel vehicles excluded from a wide central zone. Cologne and Frankfurt operate similar Umweltzonen covering the central tourist quarters. The network keeps expanding — verify at umweltbundesamt.de or with your rental agent before driving into any German city centre.",
				fine: '€80 per zone',
				note: 'Rule of thumb: any German city with population over 100,000 likely has an Umweltzone. The green Umweltplakette is universally accepted across all of them — one sticker covers all zones.',
			},
		],
		tip: "Practical rule for Germany: every major German city has an Umweltzone, and the green Umweltplakette is the universal pass. Rental cars from major chains carry one by default — but cross-border rentals from Poland, Czech Republic, Austria or France sometimes don't. The 30 seconds of asking at pickup — \"Hat das Auto die grüne Umweltplakette?\" — saves an €80 fine plus rental admin a few weeks later.",
	},

	honesty: {
		heading: 'How IDP Companion fits in Germany — honestly',
		lead: "Germany is the page where our honest positioning matters most. §29 FeV creates a real legal-compliance question that we won't paper over.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your US licence data into German, English, French, Spanish, Italian, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'A standardised layout that\'s faster for a Bundespolizei officer or rental agent to read than a US state-specific licence format',
				'An instant digital download — typically under two minutes from order to delivered PDF',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not, on its own, guaranteed to satisfy the strict §29 FeV requirement for an "officially certified translation" — that term, read narrowly, refers to a sworn translator\'s product, and individual officer interpretation varies',
				'Not valid by itself — must be carried alongside your physical US driver\'s licence',
				'Not an Umweltplakette emissions sticker, not a Vignette substitute when crossing into Switzerland or Austria, and not a substitute for rental insurance (Vollkasko)',
			],
		},
		helps: {
			title: 'When IDP Companion helps US drivers in Germany',
			items: [
				'At Frankfurt, Munich, Berlin and Hamburg rental counters where the agent wants to see translated licence data quickly — even where the chain\'s formal §29 FeV policy is inconsistent',
				'At Bundespolizei stops on the autobahn or in border regions (Czech, Polish, Swiss frontiers) where a standardised translation speeds the routine document check',
				'At Polizei stops in major cities after a minor incident or parking issue, where multilingual translation simplifies the interaction',
				'For insurance and accident-report paperwork where multilingual translation simplifies the claim',
				'As a re-printable backup from any hotel if your physical licence is lost or temporarily separated from you',
			],
		},
		needOfficial: {
			title: 'Documents German law actually expects of US drivers',
			items: [
				'Your physical US driver\'s licence — the actual permission to drive',
				'US passport — physically carried, ID-matching the rental contract',
				'Rental contract and proof of valid German rental insurance (Vollkasko / Teilkasko) — provided by the rental company',
				'Umweltplakette green sticker on the windshield if entering any Umweltzone — virtually all major rental fleets carry it; verify at pickup',
				'A translation document satisfying §29 FeV — either a sworn-translator certified translation or a Geneva 1949 IDP. IDP Companion is a multilingual translation companion that helps in practice; whether it satisfies §29 strictly depends on the officer\'s reading',
			],
		},
		pattern:
			"What prepared US travellers in Germany actually carry: physical US licence + passport + rental contract + insurance card + IDP Companion in one folder + Umweltplakette confirmed on the windshield. The §29 FeV strict-translation question is a separate due-diligence call between you and the law — IDP Companion's job on this page is the rental-desk smoother and the multilingual translation aid at police stops. The €60 fine for missing translation is the small risk; the autobahn-incident insurance question is the larger one. Decide for yourself how strictly you want to comply.",
	},

	renting: {
		heading: 'Renting a car in Germany as a US driver',
		lead: "Germany's rental market is large and well-regulated. The §29 FeV requirement is the main difference from US, UK or Irish rental experiences. Counter policy varies more by branch than by chain — major airports are stricter than regional cities.",
		chains: [
			{ name: 'Sixt (German-headquartered)', policy: 'The most consistently strict on documentation at German branches given its legal seat. Premium fleet often comes with additional verification. Strong at Frankfurt FRA, Munich MUC and Berlin BER.' },
			{ name: 'Hertz Germany', policy: 'Major presence at every German airport plus city locations. Some branches at Frankfurt and Munich request the IDP or translation at pickup; others accept the US licence with verbal acknowledgement. Inconsistent by agent and season.' },
			{ name: 'Avis Germany (incl. Budget)', policy: 'Wide network including city locations. US licences accepted; documentation request depends on branch and season. Budget operates under the same group with identical policy.' },
			{ name: 'Europcar / Enterprise', policy: 'Strong networks including border regions. US licences accepted; per-agent discretion on the §29 FeV question. Both reliably include the Umweltplakette green sticker on airport rentals.' },
		],
		tipsHeading: 'Practical tips for renting in Germany',
		tips: [
			'Autobahn discipline: left lane is for overtaking only (Linksfahrgebot). Move right immediately after passing. Use mirrors before changing lanes — cars in the left lane may be approaching at 200+ km/h',
			'Blitzer (speed cameras) are everywhere — fixed on autobahn bridges, mobile camera vans in towns, average-speed cameras on construction-zone stretches. Radar detectors and jamming devices are illegal',
			"Confirm the rental has the green Umweltplakette before driving — \"Hat das Auto die grüne Umweltplakette?\" — required for Berlin, Munich, Stuttgart, Cologne and ~70 other Umweltzonen",
			'Manual transmission is the default — automatics cost more and are limited; book early if needed',
			'Winterreifen (winter tyres) are required by road condition, not calendar date. Rental cars are typically equipped November–March, but verify at pickup if your trip includes alpine routes',
			'Petrol stations close on Sundays in many rural areas. Autobahn-side stations (Autohof and Raststätte) stay open 24/7',
			'Cross-border driving into Switzerland requires the motorway vignette (CHF 40/year); Austria requires its own vignette (~€10/10-day). Confirm in the rental contract that crossing is permitted',
			'Photograph the vehicle at pickup — every scratch, dent, mileage. German rental agencies are notably strict on return damage assessment',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for US drivers',
		lead: 'Realistic outcomes ranked by frequency, based on US Embassy advisories, German rental-industry policy disclosures and forum reports.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'Desk agent accepts US licence, IDP Companion shown, smooth pickup',
				text: 'Standard tourist experience at major airport branches — pragmatic counter policy, no escalation. Most Germany trips end this way.',
			},
			{
				severity: 'low',
				frequency: 'Common at peak season',
				label: 'Agent asks for translation, you produce IDP Companion',
				text: 'Five extra minutes of paperwork verification, contract proceeds. Particularly common at Sixt branches given the German legal seat, and at Frankfurt FRA and Munich MUC during Oktoberfest and summer peak.',
			},
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Bundespolizei autobahn check, US licence + IDP Companion accepted',
				text: 'Officer reads the standardised translation, no further action. Most US-tourist roadside checks end at the document review without escalation.',
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Camera speeding ticket arrives 4–8 weeks later',
				text: 'Blitzer enforcement is everywhere. €30–260+ plus the rental company\'s €30–50 admin fee charged to your US card on file. Multiple violations from a single trip stack.',
			},
			{
				severity: 'high',
				frequency: 'Rare but consequential',
				label: 'Insurance claim after autobahn incident — §29 FeV paperwork questioned',
				text: 'After a significant incident at 180+ km/h, the insurance claim handler asks whether the named driver was properly authorised under §29 FeV. The €60 fine for missing translation can become a €5,000+ deductible argument or a coverage-exclusion debate.',
			},
		],
		math: "IDP Companion is $35. The Sixt-Munich rental-refused scenario costs €100+ in S-Bahn-to-hotel taxi alone, before the rebooked rental walk-in surcharge. The Umweltzone fine pattern is €80 per zone per entry. The autobahn-insurance scenario is small-probability/large-magnitude. Total documentation prep that covers all of these is under $40.",
	},

	phrases: {
		heading: 'German phrases for rental desks and police checkpoints',
		lead: 'Eight phrases that cover almost every interaction a US driver has in Germany. The Umweltplakette confirmation phrase is the single most useful one if you\'re renting in any major German city.',
		items: [
			{ phrase: 'Hier ist mein Führerschein', translation: 'Here is my driving licence', context: 'Standard opening — hand US licence + passport together' },
			{ phrase: 'Und hier ist die mehrsprachige Übersetzung', translation: 'And here is the multilingual translation', context: 'Follow-up if the desk agent or officer asks for §29 FeV translation' },
			{ phrase: 'Hat das Auto die grüne Umweltplakette?', translation: 'Does the car have the green Umweltplakette?', context: 'Critical phrase at pickup — required for all major German city centres' },
			{ phrase: 'Ich bin US-amerikanischer Tourist', translation: "I'm a US tourist", context: 'Establishes context immediately at any document check' },
			{ phrase: 'Ich spreche kein Deutsch, sprechen Sie Englisch?', translation: "I don't speak German, do you speak English?", context: 'Most Bundespolizei officers and rental agents switch to basic English when asked' },
			{ phrase: "Gibt es ein Problem?", translation: 'Is there a problem?', context: 'At a roadside check, opens the conversation politely' },
			{ phrase: 'Kann ich die Geldbuße sofort bezahlen?', translation: 'Can I pay the fine immediately?', context: 'Some on-the-spot fines (Verwarnungsgeld) under €60 can be paid in cash at the stop' },
			{ phrase: "Ich muss die Autovermietung anrufen", translation: 'I need to call the rental company', context: 'Useful at any incident — every rental contract carries a 24/7 helpline number' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Germany (US citizens)',
		lead: "Germany's §29 FeV requirement makes documentation more important than in most Western European destinations. The Umweltplakette and Blitzer reality round out the prep list.",
		schemaName: 'How to prepare for driving in Germany as a US citizen',
		duration: 'PT25M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your US licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired licences are not accepted. German authorities expect a physical document at every rental counter and police check.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your US licence into German (plus 11 other widely-read languages from the 1949 Geneva Convention set). Issued in two minutes online, valid 1–5 years. Helpful at rental counters and at Bundespolizei autobahn checks where a standardised translation speeds the document review. Print at home or from any German hotel — German rental and police staff expect physical paper, not phone screens.',
			},
			{
				title: 'Verify the rental car has the green Umweltplakette',
				text: 'At the rental counter, ask the German phrase above. Virtually all major rental fleets carry one by default; cross-border one-way rentals from Poland, Czech Republic or Austria sometimes don\'t. Required for Berlin, Munich, Stuttgart, Cologne, Frankfurt, Hannover, Düsseldorf and ~70 other Umweltzonen. €80 fine per entry without it.',
			},
			{
				title: 'Confirm rental insurance — Vollkasko or Teilkasko',
				text: "German rental contracts require comprehensive rental insurance. US credit-card rental coverage often does not extend to Germany or has restrictions — verify in writing before declining the in-rental coverage. German repair costs are high and the §29 FeV question can complicate a claim after a major incident.",
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US licence + US passport + rental contract + insurance card + IDP Companion — all in one folder. Hand the folder over at any rental counter or Bundespolizei check. German rental and police staff are trained to read paper documents efficiently; phone-screen images slow every interaction.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Germany as a US tourist?',
				answer: '§29 of the Fahrerlaubnis-Verordnung requires holders of non-German-language driving licences to carry either a Geneva 1949 International Driving Permit or an officially certified German translation alongside the original. The US is not on the Annex 11 list of exempted countries. In practice, Bundespolizei is often pragmatic with short-term tourist checks — but pragmatic enforcement is not a legal status, and the rental-insurance and accident-liability consequences hinge on the strict reading.',
			},
			{
				id: 2,
				question: 'Does IDP Companion satisfy the §29 FeV translation requirement?',
				answer: 'IDP Companion is a multilingual translation companion document. The §29 FeV phrase "officially certified translation" refers, read strictly, to a sworn-translator product. Whether IDP Companion satisfies that bar depends on the individual officer\'s reading and is between you and the law. IDP Companion is positioned as the rental-desk friction reducer and the multilingual translation aid at police stops — what it definitely does well, not what it strictly settles.',
			},
			{
				id: 3,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes — some rental branches at Frankfurt, Munich and Berlin airports require the IDP or certified translation at pickup. Branch policy varies; §29 FeV gives the rental company a clear legal basis to ask. Sixt is the most consistently strict given its German legal seat.',
			},
			{
				id: 4,
				question: 'How long can I drive in Germany on my US licence?',
				answer: 'Foreign driving licences are recognised for the first six months from your date of entry. After six months, residents must convert to a German licence (the process varies by US state of issue — some states have reciprocity agreements). Tourists almost never reach the six-month threshold.',
			},
			{
				id: 5,
				question: 'What is the deal with the autobahn — really no speed limit?',
				answer: 'Some autobahn sections have no general speed limit. The recommended speed (Richtgeschwindigkeit) is 130 km/h. Many sections do have posted limits — Blitzer cameras enforce them. Driving above 130 km/h affects fault assessment in any accident regardless of whether a posted limit was exceeded — German civil-liability case law treats Richtgeschwindigkeit as a behavioural baseline.',
			},
			{
				id: 6,
				question: 'What is the Umweltplakette and do I need one?',
				answer: 'A green emissions sticker (Umweltplakette) is required to drive in any Umweltzone (low-emission zone). Berlin, Munich, Stuttgart, Cologne, Frankfurt and ~70 other German cities operate Umweltzonen. Most rental cars from major chains have one fitted by default — verify before driving into city centres. Fine for entry without it: €80 per zone.',
			},
			{
				id: 7,
				question: 'Are radar detectors legal in Germany?',
				answer: 'No. Radar detectors and jamming devices are illegal in Germany and can be confiscated. Blitzer speed cameras are everywhere — drive accordingly. Some navigation apps include speed-camera alerts that are technically illegal to use while driving; disable the alert layer before driving in Germany.',
			},
			{
				id: 8,
				question: 'Can I drink alcohol and drive?',
				answer: 'Below 0.05% (0.5 ‰) BAC for general drivers. 0.00% for novice drivers (first two years of holding a licence) and drivers under 21. Random breath testing is routine at rural festivals (Volksfest) and during high-enforcement periods like Oktoberfest weekends.',
			},
			{
				id: 9,
				question: 'Can speed-camera fines from Germany follow me back to the US?',
				answer: 'The rental company is contractually required to forward driver information to German authorities and to charge the fine plus a typical €30–50 admin fee to your card on file. Unpaid German fines do not create a US legal record but can complicate future Schengen entry if escalated. Most camera tickets are paid via the rental admin process before you notice.',
			},
			{
				id: 10,
				question: 'Can I cross into Switzerland, Austria, Czech Republic or Poland with my German rental?',
				answer: "Usually yes, subject to contract terms — confirm in writing before crossing. Switzerland requires the motorway vignette (CHF 40/year) at the border; Austria requires its own vignette (~€10/10-day); Czech Republic has lower BAC (0.0%) and a different fines schedule. One IDP Companion plan covers all of them on the same purchase.",
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travellers heading to Europe and neighbouring destinations.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'ch', label: 'US → Switzerland', status: 'Live', href: '/idp-for-us-drivers-in-switzerland' },
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain' },
			{ flagFrom: 'gb', flagTo: 'de', label: 'UK → Germany', status: 'Coming soon' },
			{ flagFrom: 'us', flagTo: 'gb', label: 'US → United Kingdom', status: 'Live', href: '/idp-for-us-drivers-in-uk' },
		],
	},

	finalCta: {
		heading: 'Driving the Bavarian autobahn or the Black Forest?',
		text: "Multilingual PDF including German, English, French, Spanish, Italian, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real US licence in two minutes. Print at home or from any German hotel. Valid 1–5 years and covers Germany plus Switzerland, Austria, France, Italy, Spain on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Bundesministerium für Digitales und Verkehr, the Kraftfahrt-Bundesamt, the Bundespolizei or any German federal or state agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention, and does not, on its own, guarantee satisfaction of the §29 Fahrerlaubnis-Verordnung translation requirement for non-German-language driving licences. In the United States, authorised issuers of Geneva 1949 IDPs are AAA and AATA. IDP Companion must be used alongside your original US driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'§29 Fahrerlaubnis-Verordnung (FeV) — Recognition of foreign driving licences (gesetze-im-internet.de/fev)',
			'Bundesministerium für Digitales und Verkehr — Driving in Germany with a foreign licence (bmdv.bund.de)',
			'Bundeskatalog der Verkehrsordnungswidrigkeiten — Fine schedule (bussgeldkatalog.org)',
			'Kraftfahrt-Bundesamt (Flensburg) — Point system register (kba.de)',
			'Umweltbundesamt — Umweltzone city directory and Plakette regulations (umweltbundesamt.de)',
			'US Embassy in Berlin — Driving advisory for US citizens (de.usembassy.gov)',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Germany',
	},
};

export const usGermanyCopy: Record<'en', CountryPairCopy> = { en };
