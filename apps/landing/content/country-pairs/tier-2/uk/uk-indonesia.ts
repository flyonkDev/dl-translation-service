/**
 * Country-pair content: United Kingdom → Indonesia.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Indonesian road traffic law administered by Korlantas
 * Polri requires foreign riders (cars AND scooters) to carry a Geneva
 * 1949 International Driving Permit alongside their original licence.
 * UK gov.uk Indonesia advice confirms. For Bali scooter rentals (the
 * defining UK-tourist activity), a UK Cat A motorcycle endorsement is
 * a SEPARATE UK-side question that affects travel insurance — most UK
 * travel policies specifically exclude motorbike accidents when the
 * rider lacks Cat A, regardless of local law. Bali scooter accidents
 * are among the most expensive single-incident UK travel insurance
 * claims documented.
 *
 * Distinctive content: left-side driving (same as UK — rare for an
 * IDP-required destination); the IDR 50,000–100,000/day Canggu
 * scooter ecosystem; helmet enforcement as the most-stopped tourist
 * violation; January 2025 zero-tolerance BAC for car drivers; the
 * Sanur–Kuta corridor and Canggu shortcut as documented tourist-police
 * enforcement zones.
 *
 * MIDDLE-PIVOT COMPLIANCE (binding per CLAUDE.md):
 * Authorised UK Geneva 1949 issuers (AA, RAC, PayPoint) appear ONCE,
 * in the legal disclaimer. They do NOT appear in Quick Answer, TLDR,
 * Why-Not-Enough, Honesty, Renting, FAQ, How-To, Final CTA or anywhere
 * else in the conversion flow. The Indonesian legal requirement is
 * disclosed factually ("Indonesian law requires a Geneva 1949 IDP") —
 * the reader's own due-diligence path to obtain that IDP is not our
 * page's job.
 *
 * Driver-with-car: factual secondary disclosure in the Renting section,
 * not primary recommendation. The Cat A insurance disclosure stays —
 * it's a safety-relevant fact, not a competitor recommendation.
 *
 * PDF LANGUAGE COMPLIANCE (binding per CLAUDE.md):
 * Bahasa Indonesia is NOT on the IDP Companion template. Verified PDF
 * set is EN, FR, ES, DE, IT, PT, VI, RU, AR, ZH, JA, TH = 12 languages.
 * Approved framing: reframe through English. Bali's tourist corridors
 * (Sanur, Kuta, Seminyak, Canggu, Ubud) all run in working English at
 * major rental chains, hotel-arranged transfers and tourist-area
 * Polri interactions — even most Canggu scooter shops operate in
 * basic working English with foreign tourists. Do NOT claim "Indonesian"
 * or "Bahasa Indonesia" anywhere as a PDF language.
 *
 * SEO add-ons present: tldr, phrases (8 Bahasa Indonesia items for
 * cultural value — teaches the user, not the PDF), howTo, lastReviewed.
 * NO lez block. NO alphabet block (Latin script).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Indonesia: 2026 Bali Scooter Guide',
		description:
			"Riding a scooter in Bali on a UK photocard? Indonesia requires a Geneva 1949 IDP and most UK travel insurance excludes scooter accidents without a Cat A endorsement. Honest 2026 guide for British drivers in Bali, Jakarta and beyond.",
		ogTitleShort: 'UK Drivers in Indonesia: Bali Scooter',
		ogSubtitle: 'Geneva 1949 IDP required. Cat A is a separate insurance gate.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Indonesia',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Indonesia · 2026 Guide',
		title: 'IDP for UK Drivers in Indonesia: The Bali Scooter Insurance Trap',
		lead: "The Bali scooter is the entry-level Indonesia vehicle for most UK tourists — IDR 50,000–100,000/day ($3–7), a wave at a Canggu shop and away you go. Two facts the shop won't mention: Indonesian road traffic law administered by Korlantas Polri requires foreign riders to carry a Geneva 1949 International Driving Permit alongside their original licence, and tourist-police checkpoint enforcement around Sanur, Kuta and Canggu is consistent. The second fact bites harder than the first: most UK travel insurance policies specifically exclude motorbike accidents when the rider lacks a UK Cat A motorcycle endorsement — which a standard car photocard alone doesn't provide. After an accident, insurers routinely deny cover citing the unlicensed-rider exclusion, and Bali scooter accidents are among the most expensive single-incident UK travel insurance claims documented. The IDP Companion's role here is narrower than where IDPs aren't legally required: it sits as multilingual translation that smooths paperwork at Denpasar and Jakarta rental counters, at Polri tourist-area stops on the Sanur–Kuta corridor and at the Canggu scooter-shop sign-out where the working language is English. The Geneva 1949 IDP itself, and a Cat A endorsement for any scooter use, are UK-side steps you take before flying.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — Indonesian law requires a Geneva 1949 IDP for cars and scooters; for scooters, a UK Cat A endorsement is a separate insurance gate',
		text: "Indonesian road traffic law administered by Korlantas Polri (the Indonesian National Police Traffic Corps) requires foreign drivers to hold a Geneva 1949 International Driving Permit in addition to their original national driving licence. The IDP requirement covers cars, motorcycles AND scooters of any displacement. UK gov.uk Indonesia advisory confirms. Indonesia is party to the 1949 Geneva Convention. For scooter riders specifically: a UK motorcycle endorsement (Cat A on the photocard) is separately required to maintain valid UK travel insurance cover in the event of an accident — this is a UK insurance-policy gate, not an Indonesian-law gate, but it catches more UK riders than the IDP question does. IDP Companion is a multilingual translation companion document — it is not a Geneva 1949 IDP, not a Cat A endorsement, and does not, on its own, satisfy either gate.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Indonesia',
		lead: "Indonesia's legal floor is a two-document setup: your UK photocard plus a Geneva 1949 IDP, separately obtained in the UK before flying. For Bali scooter rentals specifically, the UK Cat A motorcycle endorsement is an additional gate that no document we issue can address. IDP Companion is the multilingual friction-reducer that sits on top of the legal documents at Denpasar rental desks and Polri tourist-area stops.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Indonesia',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Not legally sufficient for driving or riding in Indonesia. Indonesian law requires a Geneva 1949 IDP alongside the original photocard. For Bali scooter rentals: most UK travel insurance also requires a UK Cat A motorcycle endorsement on the photocard for accident cover — a standard car-only photocard does not satisfy this insurance-policy gate.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: "Multilingual digital PDF presenting your UK licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Bali's tourist corridors (Sanur, Kuta, Seminyak, Canggu, Ubud) all run in working English at major rental chains, hotel-arranged transfers and tourist-area Polri interactions, so the English version is the working-language route. Re-printable from any hotel. IDP Companion is supplemental multilingual translation — it is not the Geneva 1949 IDP that Indonesian law requires and not a UK Cat A motorcycle endorsement.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Indonesia: original UK photocard + a Geneva 1949 IDP (separate UK-side step, required by Indonesian law) + UK passport with Indonesian entry visa or Visa-on-Arrival + rental contract + proof of valid Indonesian motor insurance + small IDR cash. For motorbike/scooter riders: a UK Cat A motorcycle endorsement on the photocard (for UK travel insurance cover) + a helmet worn, not in the basket.",
	},

	whyNotEnough: {
		heading: 'Why your UK photocard alone is not enough in Indonesia',
		lead: "For Indonesia the legal answer is clear: a UK photocard alone is not sufficient under Indonesian road traffic law. The Geneva 1949 IDP is required by law alongside the photocard. For Bali scooters specifically, the UK Cat A motorcycle endorsement is a separate insurance gate that catches more UK riders than the IDP gate does.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The Indonesian legal requirement',
				text: "Indonesian road traffic law administered by Korlantas Polri requires foreign drivers and riders to hold a Geneva 1949 IDP alongside their original national driving licence. UK gov.uk Indonesia travel advisory states this requirement. The Geneva 1949 IDP cannot be obtained on arrival in Indonesia — it is a UK-side step taken before flying. The requirement covers cars, motorcycles and scooters of any displacement, including the 110–150cc rental scooters common in Bali.",
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'The Bali scooter insurance trap (this catches more UK riders than the IDP gate)',
				text: "Most UK travel insurance policies specifically exclude motorbike or scooter accidents when: the rider does not hold a UK Cat A motorcycle endorsement, or the engine displacement exceeds policy limits (commonly 125cc), or the rider was not wearing a helmet, or the rider was not licenced under local law (which for Indonesia means: no Geneva 1949 IDP). A standard UK photocard with only Category B (car) entitlement does not legally authorise motorcycle use, even on a small Bali scooter. After an accident, UK insurers regularly deny cover citing the unlicensed-rider exclusion. Bali scooter accidents are among the most expensive single-incident travel insurance claims documented in UK travel insurance reporting. After-an-accident is not the time to find out.",
			},
			{
				icon: 'ph:warning-bold',
				title: 'The Bali tourist-corridor enforcement reality',
				text: "Tourist police checkpoint enforcement along the Sanur–Kuta corridor, around Seminyak and on the Canggu shortcut routes between Berawa and Echo Beach is documented and persistent. The standard friction is a check on the rider's licensing paperwork and helmet compliance. Bali processes hundreds of thousands of foreign scooter rentals annually through small shops with light documentation policy — police checkpoints and UK travel insurers both check for paperwork the shop didn't.",
			},
		],
	},

	rules: {
		heading: 'Indonesia driving rules UK drivers should know',
		lead: "Left-hand traffic is one positive — same as the UK, no directional adjustment, inherited via the Japanese occupation period and retained after independence. The substantive operational rules are mandatory helmets (the most consistently enforced Bali rule), the January 2025 zero-tolerance BAC for car drivers, and the under-50cc exemption from documentation entirely.",
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Same as the UK — no directional adjustment, rare among IDP-required destinations' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: 'Some 25–30 km/h zones in Bali tourist enclaves and Jakarta centre' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '80 km/h', note: 'Variable; Bali rural roads often slower in practice due to traffic mix' },
			{ icon: 'mdi:speedometer-medium', label: 'Java tollway', value: '100 km/h', note: 'Jagorawi, Cipularang, Jakarta inner ring — e-Toll prepaid card system' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.00% BAC', note: 'Effective zero tolerance; enforcement variable but real; criminal escalation possible at higher readings' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Enforcement variable' },
			{ icon: 'mdi:helmet', label: 'Helmet (rider + pillion)', value: 'Mandatory, worn', note: "Most consistently enforced rule on Bali tourist corridors; passengers too; must be on head, not handlebars or basket" },
			{ icon: 'ph:police-car-bold', label: 'Police checkpoints', value: 'Frequent on Bali tourist routes', note: 'Sanur–Kuta corridor, Canggu shortcut, Jakarta arterials' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Indonesia',
		lead: 'Indonesian traffic fines are set under national law and subject to revision. IDR figures below reflect recent published levels — verify against current Korlantas Polri publications at time of travel.',
		colViolation: 'Violation',
		colAmount: 'Fine (IDR, 2026 indicative)',
		colNote: 'Notes',
		items: [
			{ icon: 'ph:warning-octagon-bold', label: 'Driving or riding without Geneva 1949 IDP', amount: 'Possible vehicle hold + fine + document hold', note: 'Most common documented stop reason for foreign riders and drivers; specifically checked on Bali tourist corridors', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding (over posted limit)', amount: 'IDR 250,000–500,000', note: 'Camera enforcement growing on Java tollways and Jakarta arterials', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'IDR 500,000+', note: '', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: 'IDR 250,000+', note: 'Enforcement variable', severity: 'med' },
			{ icon: 'mdi:helmet', label: 'No helmet (rider or pillion)', amount: 'IDR 250,000+', note: 'Most commonly enforced motorbike-specific rule on Bali tourist corridors', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt (front)', amount: 'IDR 250,000', note: 'Rear-seat enforcement variable', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI (any positive reading)', amount: 'IDR 1,000,000+ and possible vehicle detention', note: 'Zero-tolerance regime; criminal escalation possible at higher readings; deportation possible for foreign drivers', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'Reckless driving', amount: 'IDR 1,500,000+ and possible court summons', note: 'Discretionary; invoked at incident scenes', severity: 'high' },
			{ icon: 'ph:road-horizon-bold', label: 'Tollway e-Toll evasion', amount: 'Original toll + penalty', note: 'Java tollways operate prepaid e-Toll card system; rental cars typically come with one — verify', severity: 'med' },
		],
		caption: 'Sources: Korlantas Polri — Indonesian National Police Traffic Corps (korlantas.polri.go.id); UK gov.uk Indonesia travel advisory (gov.uk/foreign-travel-advice/indonesia). IDR figures subject to periodic indexation — verify current.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Indonesia — honestly',
		lead: "IDP Companion's role in Indonesia is narrower than in IDP-not-required destinations — the Geneva 1949 IDP that Indonesian law requires is a UK-side step we don't issue, and the Cat A motorcycle endorsement (the actual gate for UK travel insurance cover on Bali scooters) is a UK licensing matter we can't address either. What we do is multilingual translation that sits on top of those documents.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				"In Indonesia, the English version is the working-language route — Bali's tourist corridors (Sanur, Kuta, Seminyak, Canggu, Ubud) operate in working English at major rental chains, tourist-area Polri interactions and most Canggu scooter shops",
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not, on its own, sufficient to drive or ride legally in Indonesia — Indonesian law requires a Geneva 1949 IDP as a separate document alongside the photocard',
				'Not a UK Cat A motorcycle endorsement — that is a separate UK licensing matter that affects travel insurance cover after any scooter accident',
				'Not Indonesian motor insurance or UK travel insurance — those are separate purchases / policies',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Indonesia',
			items: [
				'At car rental counters in Denpasar (Bali Ngurah Rai), Jakarta Soekarno-Hatta, Surabaya and Yogyakarta where standardised multilingual translation of licence data speeds the document check',
				'At Bali scooter-shop sign-outs as supplemental translation alongside the Geneva 1949 IDP — most Canggu shops operate in basic working English but expect printed documentation',
				'At Polri checkpoints on the Sanur–Kuta corridor, Canggu shortcut and Jakarta arterials where the English version shortens the roadside conversation',
				'For accident-report and insurance paperwork after a covered incident where English-language standardised translation simplifies the cross-border claim',
				'As a re-printable backup from any hotel if your physical photocard is lost during a multi-island Indonesian trip',
				"For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Indonesia plus Thailand, Vietnam, UAE, Morocco and other destinations on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Indonesian law actually cares about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive',
				'A Geneva 1949 IDP — a separate UK-side step required by Indonesian law alongside the photocard; cannot be obtained on arrival in Indonesia',
				'For motorbikes / scooters: a UK Cat A motorcycle endorsement on the photocard — separate UK licensing matter, required for UK travel insurance cover after any accident even if not strictly required by Indonesian law on the day',
				'UK passport with Indonesian entry visa or Visa-on-Arrival — required at every checkpoint',
				'Rental agreement and proof of valid Indonesian motor insurance — provided by the rental at pickup',
				'For motorbikes / scooters: a helmet, worn, not in the basket — most consistently enforced Bali tourist-corridor rule',
				'Small IDR cash for parking, small scooter rentals and tolls if e-Toll fails',
			],
		},
		pattern:
			"What prepared UK travellers in Indonesia actually carry: photocard + Geneva 1949 IDP + Cat A endorsement on the photocard (if planning any scooter use) + passport with visa + rental contract + insurance documentation + helmet + IDP Companion. The Geneva 1949 IDP is the UK-side documentation step; the Cat A endorsement is the UK-side licensing step for scooters; IDP Companion is the friction-layer document for everything that happens after — rental desks, checkpoint stops, accident reporting.",
	},

	renting: {
		heading: 'Renting a car or scooter in Indonesia as a UK driver',
		lead: "Indonesia's tourist rental market is dominated by Bali, with cars secondary to the scooter ecosystem. The shop's flexibility on documentation creates an enforcement and insurance trap — police checkpoints and UK travel insurers care about the paperwork the shop didn't ask for.",
		chains: [
			{ name: 'Hertz Indonesia', policy: 'Presence at Bali Ngurah Rai (Denpasar), Jakarta Soekarno-Hatta, Surabaya and Yogyakarta airports. Requires Geneva 1949 IDP at pickup; international-standard documentation policy.' },
			{ name: 'Avis Indonesia', policy: 'Similar coverage to Hertz. UK photocard plus Geneva 1949 IDP expected at pickup.' },
			{ name: 'Bali Car Rental and similar local operators', policy: 'Established Bali-specific networks; documentation flexibility varies — better-known operators expect a Geneva 1949 IDP at pickup, smaller shops sometimes flexible.' },
			{ name: 'Bali scooter shops (Kuta, Seminyak, Canggu, Sanur, Ubud)', policy: 'Hundreds of small operators. Rates IDR 50,000–100,000/day ($3–7) for standard 110–150cc scooters. Most shops will rent to anyone with cash; few verify Geneva 1949 IDP or Cat A endorsement. The shop\'s flexibility creates the trap.' },
		],
		tipsHeading: 'Practical tips for renting and riding in Indonesia',
		tips: [
			"Verify your UK travel insurance terms in writing before any scooter use. Cat A endorsement requirements, engine displacement limits (commonly 125cc), helmet compliance and valid local licensing are common exclusion clauses. After an accident is not the time to find out — read the policy now",
			'Helmet for rider AND pillion passenger, every ride, worn on the head not in the basket. This is the most consistently enforced rule on Bali tourist corridors and the single most common stop reason after the documentation check',
			"Don't ride or drive after any alcohol. Indonesia operates a zero-tolerance regime since the January 2025 update — any positive reading is a violation; criminal escalation possible at higher readings",
			'Canggu shortcut routes (between Berawa and Echo Beach) are chaotic. Slow scooter speeds, blind corners, oncoming traffic and dogs make these routes the highest-incident-rate stretches in tourist Bali',
			'Java tollways use prepaid e-Toll cards. Rental cars typically come with one; verify and test at pickup',
			"A driver-with-car in Bali is a documented alternative — approximately $30–50 USD per day through hotel concierge or established Bali agencies, often inclusive of fuel and the driver's meals. For trips weighted toward Ubud cultural extensions, multi-temple itineraries or East Bali day trips, many UK travellers find this works end-to-end. Note: there is no driver-with-car equivalent for scooters — scooter use is a personal-rider decision",
			'Driving in Jakarta itself is not most UK travellers\' choice. Jakarta traffic is among the most chaotic in Asia; GoCar and Grab apps work widely and remove the question',
			"Carry small IDR cash for parking, scooter rentals and small interactions. Larger fines should be issued with proper paperwork and paid through official channels — refuse cash-only demands and request an official receipt",
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'Realistic outcomes ranked by frequency, based on UK gov.uk Indonesia travel guidance, Korlantas Polri advisories and UK-traveller forum reports.',
		items: [
			{
				severity: 'low',
				frequency: 'The correct path',
				label: 'Geneva 1949 IDP + Cat A (for scooters) + IDP Companion, all paperwork in order',
				text: 'Standard process, no further issue. Tourist-area Polri stop is a 5-minute document review and onward; scooter shop accepts paperwork without comment; insurance covers any incident.',
			},
			{
				severity: 'high',
				frequency: 'Extremely common — the biggest insurance trap',
				label: 'Scooter rented in Bali on UK photocard only, no IDP, no Cat A endorsement',
				text: 'Roadside police stops likely on the Sanur–Kuta corridor or Canggu shortcut. UK travel insurance void after any accident — the unlicensed-rider exclusion bites whether or not police stop you. Most expensive single tourist incident category in UK travel insurance reporting.',
			},
			{
				severity: 'high',
				frequency: 'Real risk',
				label: 'Police checkpoint on Sanur–Kuta corridor or Canggu shortcut, no Geneva 1949 IDP',
				text: 'Roadside conversation, fine, possible vehicle hold. Standardised paperwork (Geneva 1949 IDP + IDP Companion) shortens these stops to 5 minutes; missing the Geneva 1949 IDP turns them into 30–60 minute roadside resolutions.',
			},
			{
				severity: 'low',
				frequency: 'Very common for UK travellers',
				label: 'Driver-with-car arrangement for cultural day trips, scooter use skipped',
				text: '$30–50/day for car plus driver through hotel concierge or established agencies. No personal documentation gate, no helmet enforcement question. Often comparable end-to-end to self-drive with full insurance and removes the Bali-traffic stress.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Agent or Polri officer asks for translation, you produce IDP Companion alongside the Geneva 1949 IDP',
				text: 'Five extra minutes at a Denpasar counter or Sanur-corridor stop, no further issue. English on the document is the working-language route at every Bali tourist-area interaction.',
			},
			{
				severity: 'high',
				frequency: 'Most expensive single category',
				label: 'Scooter accident with no Cat A endorsement and no Geneva 1949 IDP',
				text: 'UK travel insurance denies cover citing the unlicensed-rider exclusion. Medical care in Bali is reasonable; repatriation back to the UK with serious injuries can cost £50,000+. The cost falls personally to the rider. This is the cost the cheap-scooter shop did not flag at the sign-out.',
			},
		],
		math: "$35 IDP Companion + a Geneva 1949 IDP (separate UK-side step) is the minimum documentation path for any Indonesian rental. For scooter use specifically, the UK Cat A motorcycle test (~£350–500 in UK preparation) is what unlocks UK travel insurance cover. Driver-with-car at ~$40/day × 12 days = $480 often comes out cheaper than full self-drive with proper licensing and insurance for cultural extensions — and removes the catastrophic-claim risk category entirely.",
	},

	phrases: {
		heading: 'Bahasa Indonesia phrases for Polri stops, rental desks and Bali scooter shops',
		lead: "Bali's tourist corridors mostly run in working English, so phrases aren't strictly needed — but eight Bahasa Indonesia items add cultural color and help at rural East Bali, Java tollway petrol stations and police interactions where English fades.",
		items: [
			{ phrase: 'Ini SIM saya', translation: 'Here is my licence', context: "Standard opening — hand UK photocard, Geneva 1949 IDP and passport together at a Polri stop. SIM = Surat Izin Mengemudi (driving licence)" },
			{ phrase: 'Dan ini paspor saya', translation: 'And this is my passport', context: 'Follow-up at any document check' },
			{ phrase: 'Saya turis Inggris', translation: "I'm a British tourist", context: 'Establishes context immediately; often shifts the interaction toward English' },
			{ phrase: 'Anda bisa berbahasa Inggris?', translation: 'Do you speak English?', context: 'Almost universally answered yes in Bali tourist-facing roles; rarely needed but courteous' },
			{ phrase: 'Di mana pompa bensin terdekat?', translation: 'Where is the nearest petrol station?', context: 'Useful in rural East Bali, the Bedugul mountain road or West Java tollway stretches' },
			{ phrase: 'Tolong', translation: 'Please / help me', context: 'Universal at any roadside need; standalone or paired with a request' },
			{ phrase: 'Mohon, kuitansi resmi', translation: 'Please, an official receipt', context: 'Polite firm phrase at any fine interaction — paid fines should be issued with documentation, not cash-only on the roadside' },
			{ phrase: 'Terima kasih', translation: 'Thank you', context: 'Universal courtesy; "makasih" works as casual shorthand' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving or riding in Indonesia (UK citizens)',
		lead: "The Bali scooter Cat A question is the highest-leverage decision in this whole guide for UK travellers — pursue Cat A at home well before flying if scooter use is the plan, or commit to a driver-with-car arrangement for cultural day trips and skip the personal-rider risk entirely. Generate the multilingual companion document and obtain the Geneva 1949 IDP as separate UK-side steps before flying; verify your travel insurance terms in writing before any scooter use.",
		schemaName: 'How to prepare for driving in Indonesia as a UK citizen',
		duration: 'PT45M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: "For scooter riders: check whether your photocard carries a Cat A motorcycle endorsement (most UK car drivers don't). This single check determines whether your UK travel insurance will cover a scooter accident — pursue Cat A at home well before flying if scooter use is the plan.",
			},
			{
				title: 'Obtain a Geneva 1949 International Driving Permit before flying',
				text: "Indonesian law requires this document alongside your photocard for any rental — cars and scooters. The Geneva 1949 IDP is issued in the UK by authorised issuers — that's a separate UK-side step you take before flying. It cannot be obtained on arrival in Indonesia. Typically valid for 12 months from issue.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: "$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. Bali's tourist corridors run in working English at every major interaction, so the English version is the working-language route. Print at home or from any Indonesian hotel.",
			},
			{
				title: 'For any scooter use: verify your UK travel insurance terms in writing',
				text: "Cat A endorsement requirements, engine displacement limits (commonly 125cc), helmet compliance and valid local licensing are common exclusion clauses. The exclusions clause is where Bali scooter accidents become uncovered claims. If your policy excludes scooter use without Cat A, a driver-with-car arrangement for day trips (~$30–50/day) removes the entire risk category.",
			},
			{
				title: 'Carry physical documents in one folder + helmet for any scooter use',
				text: 'Physical UK photocard + Geneva 1949 IDP + UK passport with Indonesian visa or VoA + rental contract + Indonesian insurance documentation + IDP Companion — all in one folder. For scooter riders: a worn helmet (not on the handlebars or in the basket). Hand the folder over at any Polri stop. Carry small IDR cash for parking and incidentals.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive or ride in Indonesia as a UK tourist?',
				answer: 'Yes. Indonesian road traffic law requires foreign drivers (cars AND scooters) to hold a Geneva 1949 International Driving Permit alongside their original national driving licence. UK gov.uk Indonesia travel advice confirms. The IDP must be issued in the UK before travel — it cannot be obtained on arrival in Indonesia.',
			},
			{
				id: 2,
				question: 'Can I ride a Bali scooter on my UK photocard alone?',
				answer: "Legally, no — under Indonesian law you need the Geneva 1949 IDP alongside your photocard. Practically, many small Bali scooter shops will rent to anyone with cash. The trap is twofold: tourist-police checkpoints on the Sanur–Kuta corridor and Canggu shortcut do check, and UK travel insurance excludes scooter accidents when the rider lacks a UK Cat A motorcycle endorsement — regardless of what the shop asked for at the sign-out.",
			},
			{
				id: 3,
				question: 'What is Cat A and why does it matter for Bali scooters?',
				answer: "Category A is the UK motorcycle entitlement on a driving licence. A standard UK photocard with only Category B (car) does not authorise motorcycle use under UK law. Most UK travel insurance policies specifically exclude motorcycle accidents when the rider lacks Cat A — a standard photocard alone is the most common cause of denied scooter-accident claims in Bali. Bali scooter accidents are among the most expensive single-incident UK travel insurance claims documented.",
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a Geneva 1949 IDP?',
				answer: 'No. IDP Companion is a private multilingual translation companion document presenting your photocard details in twelve widely-read languages from the 1949 Geneva Convention set. It is not a government-issued IDP under the 1949 Geneva Convention and does not, on its own, satisfy the Indonesian legal requirement. It does not address the UK Cat A motorcycle endorsement question — that is a separate UK licensing matter.',
			},
			{
				id: 5,
				question: 'Should I hire a driver-with-car instead of self-driving in Bali?',
				answer: "For many UK travellers in Bali, yes — particularly for cultural day trips (Ubud, multi-temple itineraries, East Bali). Daily rates of $30–50 typically include the driver, fuel and meals. Removes the IDP, helmet and Bali-traffic stress questions in one decision. Not available as an option for scooters specifically — if scooter use is the goal, the documentation route (IDP + Cat A) is the only safe option.",
			},
			{
				id: 6,
				question: 'What side of the road do they drive on?',
				answer: 'Left. Same as the UK. Inherited via the Japanese occupation period and retained after independence. Rare among IDP-required destinations and the single positive friction-reducer of driving in Indonesia as a UK tourist — no directional adjustment needed.',
			},
			{
				id: 7,
				question: 'How dangerous are Bali scooter accidents really?',
				answer: 'Bali scooter accidents are among the most expensive single-incident UK travel insurance claims documented in industry reporting. Medical care in Bali is reasonable; repatriation back to the UK with serious injuries is where costs escalate (£50,000+ medevac flights are documented). The standard pattern: unfamiliar traffic, chaotic Canggu shortcut routes, underestimating speed and skipping the Cat A endorsement question at home.',
			},
			{
				id: 8,
				question: 'What about driving in Jakarta itself?',
				answer: "Most UK travellers don't. Jakarta traffic is among the most chaotic in Asia; lane discipline is informal; parking is scarce. GoCar and Grab apps work widely and remove the question for inner-city movement.",
			},
			{
				id: 9,
				question: 'Can I drive between Bali and Java?',
				answer: 'Bali and Java are separate islands; the Ketapang–Gilimanuk ferry crosses the strait but car-rental contracts typically restrict inter-island use. Verify before booking if multi-island driving is part of the plan.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Indonesia trips?',
				answer: 'Choose 1 year ($35), 3 years ($45) or 5 years ($55). Validity is tied to your physical UK photocard — if your photocard expires, IDP Companion expires with it. One purchase covers Indonesia plus Thailand, Vietnam, UAE, Morocco and other destinations on the same plan.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Indonesia-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand' },
			{ flagFrom: 'gb', flagTo: 'eg', label: 'UK → Egypt', status: 'Live', href: '/idp-for-uk-drivers-in-egypt' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco' },
			{ flagFrom: 'gb', flagTo: 'ae', label: 'UK → UAE', status: 'Live', href: '/idp-for-uk-drivers-in-uae' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Russia → Indonesia', status: 'Live', href: '/idp-for-russian-drivers-in-indonesia' },
			{ flagFrom: 'gb', flagTo: 'vn', label: 'UK → Vietnam', status: 'Coming soon' },
		],
	},

	finalCta: {
		heading: 'Riding Bali, driving Java tollways or doing a multi-island Indonesian trip?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Bali's working language for tourists is English, which is what the IDP Companion's English version delivers at every rental desk, Polri stop and scooter-shop sign-out. Valid 1–5 years and covers Indonesia plus Thailand, Vietnam, UAE, Morocco on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. Where Indonesian law requires the Geneva 1949 IDP, that's a separate UK-side step; for scooter use specifically, verify your UK travel insurance Cat A terms in writing before flying.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with Korlantas Polri (Indonesian National Police Traffic Corps), the Indonesian Ministry of Transportation or any other Indonesian government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention, and does not, on its own, satisfy the Indonesian legal requirement that foreign drivers carry a Geneva 1949 IDP alongside their original national driving licence. Authorised issuers of UK-origin Geneva 1949 IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion does not constitute a UK Cat A motorcycle endorsement and does not address travel insurance exclusions related to motorcycle use. IDP Companion must be used alongside your original UK photocard driving licence and (where required by Indonesian law) a Geneva 1949 IDP.",
		sourcesHeading: 'Sources',
		sources: [
			'UK Foreign, Commonwealth & Development Office — Driving in Indonesia (gov.uk/foreign-travel-advice/indonesia)',
			'Korlantas Polri — Indonesian National Police Traffic Corps (korlantas.polri.go.id)',
			'1949 Geneva Convention on Road Traffic — UN Treaty Series',
			'UK Driver and Vehicle Licensing Agency (DVLA) — Categories of vehicle you can drive (gov.uk/driving-licence-categories)',
			'UK Association of British Insurers — Travel insurance guidance on motorcycle/scooter use abroad',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Indonesia',
	},
};

export const ukIndonesiaCopy: Record<'en', CountryPairCopy> = { en };
