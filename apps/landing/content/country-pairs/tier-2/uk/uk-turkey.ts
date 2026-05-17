/**
 * Country-pair content: United Kingdom → Turkey.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: Karayolları Genel Müdürlüğü (KGM) accepts UK photocard for
 * tourist visits up to 6 months — no IDP legally required. The page's
 * distinctive content is the HGS (Hızlı Geçiş Sistemi) automatic toll
 * system, which bills the rental for every otoyol bridge and Bosphorus
 * crossing weeks after the trip; the post-2024 Turkish lira inflation
 * making fine schedules a moving target; and Istanbul's traffic
 * intensity that pushes many UK tourists to pick up the rental only on
 * departure for the Aegean / Mediterranean coast.
 *
 * PDF LANGUAGE COMPLIANCE (binding per CLAUDE.md):
 * Turkish is NOT on the IDP Companion template. Verified PDF set is
 * EN, FR, ES, DE, IT, PT, VI, RU, AR, ZH, JA, TH = 12 languages.
 * Approved framing: reframe through English. UK photocard is in English
 * (KGM accepts it directly) and every major Turkish rental chain
 * (Hertz, Avis, Sixt, Garenta) plus Trafik Polisi tourist-area
 * interactions operate in working English with foreign tourists.
 * Do NOT claim "Turkish" anywhere as a PDF language.
 *
 * Middle-pivot: clean — no AA / RAC / PayPoint recommendations anywhere
 * except the single legal disclaimer line. PayPoint replaces Post Office
 * per March 2024 change.
 *
 * SEO add-ons present: tldr, phrases (8 Turkish items for cultural value
 * — teaches the user, not the PDF), howTo, lastReviewed.
 * NO lez block — Turkey doesn't have ZTL/ZFE equivalents in the same
 * structural sense; HGS distinctive content lives in whyNotEnough +
 * renting tips. NO alphabet block (Turkish Latin extended, signs readable).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Turkey: 2026 HGS & Istanbul Guide',
		description:
			"UK photocard accepted in Turkey — no IDP needed for tourist visits. But HGS automatic tolls bill the rental weeks later and lira-indexed fines move every quarter. Honest 2026 guide.",
		ogTitleShort: 'UK Drivers in Turkey: HGS & Istanbul',
		ogSubtitle: 'Photocard works. HGS tolls and Istanbul traffic are the real story.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Turkey',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Turkey · 2026 Guide',
		title: 'IDP for UK Drivers in Turkey: HGS Tolls & Istanbul Traffic',
		lead: "You're picking up a Renault Mégane at Antalya Airport in early May for an 11-day Mediterranean loop through Side, Kaş, Fethiye and back via the Lycian Way. Your UK photocard is in English, the Karayolları Genel Müdürlüğü (Turkey's General Directorate of Highways) accepts it for tourist visits up to 6 months, and the legal answer is clean. What the rental confirmation didn't mention: every Turkish bridge, otoyol (motorway) and Bosphorus crossing runs on the HGS (Hızlı Geçiş Sistemi) automatic toll system — your rental carries the transponder by default and the company forwards every toll plus a typical TL 500 processing fee to your UK card weeks after you've flown home. Turkish lira inflation means the fine schedule published last spring is no longer the figure you'll pay this spring; Istanbul speed-camera enforcement on the E5 and TEM is the visible end of that. None of it is the IDP question — the IDP question lands at the rental counter, where some Antalya, Istanbul and Bodrum desk agents during peak season still default to asking for one.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — KGM accepts UK photocards for tourist visits up to 6 months',
		text: "Turkish road traffic law administered by the Karayolları Genel Müdürlüğü accepts foreign driving licences for tourist visits up to 6 months from entry. UK photocard licences are issued in English and meet this rule directly. After 6 months, long-term residents must convert to a Turkish licence. Turkey is party to the 1968 Vienna Convention; foreign IDPs are honoured but not required for tourists. Tourists almost never reach the 6-month threshold. The bigger questions for a Turkey trip are HGS toll billing on every otoyol stretch you cross, lira-indexed fines that move with inflation, and Istanbul traffic density.",
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Turkey',
		lead: "For a UK tourist driving in Turkey, your original UK photocard licence is the legally required document. IDP Companion is a multilingual translation companion — useful at the rental counter during peak season and at Trafik Polisi tourist-area stops where English-language standardised paperwork shortens the conversation.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Turkey',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Legally accepted by KGM for tourist visits up to 6 months from entry. Issued in English, accepted without translation by major Turkish rental chains (Hertz, Avis, Sixt, Budget) and by the Trafik Polisi at standard tourist-area stops on the D400 coastal route and Cappadocia loops.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: "Multilingual digital PDF presenting your UK licence data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Every major Turkish rental chain and Trafik Polisi tourist-area interaction operates in working English with foreign tourists, so the English version is the working-language route at Antalya, Istanbul SAW/IST, Bodrum-Milas, Dalaman and Izmir airports. Re-printable from any hotel.",
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Turkey: original UK photocard + UK passport with Turkish e-Visa + rental contract + proof of valid Turkish insurance + an active HGS transponder for any otoyol or Bosphorus crossing (verify at pickup; most rentals carry one by default).",
	},

	whyNotEnough: {
		heading: 'Why your UK licence creates rental-desk and HGS-billing friction in Turkey',
		lead: "Legally your photocard is enough — KGM confirms. Practically, peak-season counter-policy variance and the HGS automatic-toll system create the two friction points UK tourists meet on Turkish trips.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The rental-contract reason',
				text: "Hertz, Avis, Europcar, Sixt, Budget and Turkish-local operators (Garenta / Borusan, DRD Rent A Car) each set internal verification policy at branch level. Antalya, Istanbul SAW and IST, Bodrum-Milas, Dalaman and Izmir airports process the highest concentrations of UK tourist rentals — and desk agents during peak May–October Mediterranean season sometimes default to asking for an IDP at pickup even though Turkish road law doesn't require one. The translation companion clears the question in writing in five extra minutes.",
			},
			{
				icon: 'ph:road-horizon-bold',
				title: 'The HGS automatic-toll reason',
				text: "HGS (Hızlı Geçiş Sistemi) is Turkey's plate-and-transponder automatic toll system. Every otoyol section, both Bosphorus bridges in Istanbul, the Osman Gazi Bridge across the İzmit Gulf and most major bridge crossings bill HGS at speed — there are no manned toll booths to pay cash. Rental cars carry an active HGS transponder by default; the rental company forwards every toll to your UK card plus a typical TL 500 admin fee weeks after the trip. Without a working transponder, the system reads the plate and bills 4× the toll. Verify the transponder is active at pickup; ask the agent to test it on the way out.",
			},
			{
				icon: 'ph:warning-bold',
				title: 'The Istanbul traffic reason',
				text: "Istanbul traffic density on the E5 and TEM is among Europe's heaviest. Lane discipline is informal; minibüs and dolmuş drivers swerve aggressively; speed differentials between vehicles on the same stretch can be large. Lira inflation means the fine schedule published last spring (handheld phone use ~TL 1,000+, red-light ~TL 2,000+) is no longer the figure you'll pay this spring — verify against current KGM publications. Many UK travellers conclude that taxi, metro or Bosphorus ferry is the better option for Istanbul itself, and pick up the rental only on departure to the Aegean or Mediterranean coast.",
			},
		],
	},

	rules: {
		heading: 'Turkey driving rules UK drivers should know',
		lead: 'Right-hand traffic is the day-one adjustment from UK left-hand habit. The substantive operational rules are the lira-indexed fine schedule, zero-tolerance BAC for professional drivers and trailer towing, and turn-on-red being prohibited by default.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; deliberate attention required, especially at roundabouts' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: 'Built-up areas in Istanbul, Antalya, Bodrum, Izmir' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '90 km/h', note: 'Some dual carriageways 110 km/h where signed' },
			{ icon: 'mdi:speedometer-medium', label: 'Otoyol (motorway)', value: '120 km/h', note: 'Section-control cameras on Istanbul–Ankara–Antalya stretches' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (general)', value: '0.05% BAC', note: 'Severe penalties for any positive reading; random breath testing routine' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit (professional / trailer)', value: '0.00% BAC', note: 'Zero tolerance for professional drivers and trailer-towing vehicles' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Fines indexed annually with lira inflation — ~TL 1,000+ as of early 2026' },
			{ icon: 'mdi:traffic-light', label: 'Turn on red', value: 'Prohibited by default', note: 'Only allowed where explicitly signed; signed exceptions are rare' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Turkey',
		lead: 'Turkish traffic fines are set under the Karayolları Trafik Kanunu and indexed annually for inflation. The TL figure printed in last spring\'s guide is not the figure you\'ll pay this spring — confirm against current KGM publications at time of travel. Camera-issued tickets are forwarded by the rental company to your UK card plus a typical TL 500 admin fee.',
		colViolation: 'Violation',
		colAmount: 'Fine (TRY, 2026 indicative)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding less than 10 km/h over', amount: '~TL 1,000+', note: 'Camera-enforced on otoyol; mobile vans on rural routes', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 10–30 km/h over', amount: 'Escalating tier', note: 'Section-control cameras on Istanbul–Ankara–Antalya otoyol stretches', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding above 30 km/h over', amount: 'Top tier + possible suspension-equivalent', note: 'Aggressive enforcement; criminal escalation possible at extreme readings', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '~TL 2,000+', note: 'Camera-enforced in Istanbul, Ankara, Izmir', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '~TL 1,000+', note: 'Routinely enforced; indexed annually', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '~TL 500+', note: 'Per occupant; mandatory front and rear', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI 0.05–0.10%', amount: '~TL 3,000+ and 6-month licence suspension', note: 'Random breath testing routine; tougher on rental drivers', severity: 'high' },
			{ icon: 'mdi:gavel', label: 'DUI above 0.10%', amount: 'Criminal proceedings', note: 'Possible imprisonment; international record', severity: 'high' },
			{ icon: 'ph:road-horizon-bold', label: 'HGS toll evasion (no transponder, no plate-pay)', amount: 'Original toll + 4× admin penalty', note: 'Most rentals carry an active transponder by default; verify at pickup', severity: 'med' },
		],
		caption: 'Sources: Karayolları Trafik Kanunu (mevzuat.gov.tr); Karayolları Genel Müdürlüğü (kgm.gov.tr); Trafik Polisi (trafik.gov.tr); HGS portal (hgs.gov.tr); UK gov.uk Turkey travel advice. TL figures indexed annually for inflation — verify current.',
	},

	honesty: {
		heading: 'How IDP Companion fits in Turkey — honestly',
		lead: "Turkey is clean for UK photocard holders: KGM accepts it for tourist visits up to 6 months. The page's job is the HGS toll budget reality, the lira-indexed fine schedule and the Istanbul traffic disclosure — the IDP question is the smallest item.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Turkey, the English version is the working-language route — every major Turkish rental chain (Hertz, Avis, Sixt, Budget, Garenta) and every Trafik Polisi tourist-area interaction operates in working English with foreign tourists',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by Turkish law for tourist driving on a UK photocard for visits up to 6 months',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not an HGS transponder or a Bosphorus-bridge prepaid pass — the transponder lives on the rental vehicle and bills your UK card via the rental company',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Turkey',
			items: [
				'At Antalya, Istanbul SAW/IST, Bodrum-Milas, Dalaman and Izmir rental counters during peak May–October Mediterranean season when desk agents default to asking for translation',
				'At Trafik Polisi and Jandarma stops on the D400 coastal route or rural Anatolian roads where English-language standardised paperwork speeds the document check',
				'For insurance and accident-report paperwork after a covered incident',
				'As a re-printable backup from any hotel if your physical photocard is lost mid-trip on a multi-region itinerary',
				"For travellers stacking multiple European trips over 1–5 years — one $55 purchase covers Turkey plus Spain, Italy, Greece, Portugal, Morocco on the same plan",
			],
		},
		needOfficial: {
			title: 'Documents Turkish law actually cares about',
			items: [
				'Your physical UK photocard licence — the actual permission to drive',
				'UK passport with Turkish entry stamp or e-Visa — required at every checkpoint and rental pickup',
				'Rental agreement and proof of valid Turkish motor insurance — provided by the rental company at pickup',
				'An active HGS transponder on the vehicle — required for every otoyol section and Bosphorus crossing; verify at pickup',
				'Small TL notes for parking, unavoidable on-the-spot interactions and tolls where HGS fails',
			],
		},
		pattern:
			"What prepared UK travellers in Turkey actually carry: photocard + passport + e-Visa + rental contract + insurance + verified HGS transponder + IDP Companion. The bigger preparation is the HGS billing expectation (every otoyol and bridge bills your card weeks after the trip), the Istanbul-driving go/no-go decision, and the lira-fine inflation reality. Total documentation prep: $35. HGS tolls and Istanbul stress are separate budget and route-planning items.",
	},

	renting: {
		heading: 'Renting a car in Turkey as a UK driver',
		lead: "Turkey's rental market is large with strong domestic chains competing aggressively against international brands during peak season. Counter policy varies more by branch than by chain; HGS transponder verification at pickup is the single most-skipped step.",
		chains: [
			{ name: 'Hertz Turkey', policy: 'Major presence at all major airports plus city locations in Istanbul, Antalya, Bodrum, Izmir, Ankara. Accepts UK photocard licences. International-chain pricing typical.' },
			{ name: 'Avis Turkey (incl. Budget)', policy: 'Wide network including secondary cities. UK licences accepted. Operates Budget under the same corporate group.' },
			{ name: 'Sixt Turkey', policy: 'Premium fleet, strong at Istanbul (SAW/IST), Antalya and Bodrum airports. UK licences accepted.' },
			{ name: 'Garenta / Borusan Otomotiv (Turkish local)', policy: 'Turkish-owned, often cheaper and more flexible than international chains on longer rentals. UK licences accepted; documentation policy lighter at city locations.' },
			{ name: 'DRD Rent A Car (Turkish local)', policy: 'Strong Mediterranean-coast presence (Antalya, Bodrum, Dalaman). Competitive on multi-day rentals.' },
		],
		tipsHeading: 'Practical tips for renting in Turkey',
		tips: [
			'Verify the HGS transponder is active at pickup. Ask the agent to test it on the first otoyol toll on the way out. Without an active transponder the system reads the plate and bills 4× the toll plus admin penalty — and you only find out weeks after returning home',
			"Istanbul driving is the main stress test. Traffic density on the E5 and TEM is among Europe's heaviest; lane discipline is informal. Many UK drivers conclude that taxi, metro or Bosphorus ferry is the better option for Istanbul itself and only pick up the rental on departure to the Aegean or Mediterranean coast",
			'The D400 coastal route (Antalya–Kaş–Fethiye–Bodrum) is well-paved but winds heavily through the Lycian coast. Speed cameras and Jandarma enforcement operate on busier sections; slow buses and minibüs/dolmuş overtake aggressively',
			'Cappadocia region (Nevşehir, Göreme, Üçhisar). Rural roads are narrow with occasional tractor and animal traffic. Pre-dawn balloon-spotting drives are common; navigate with offline maps as mobile coverage is patchy',
			'Diesel and petrol both widely available on main routes. Rural stations close earlier — fuel up in towns',
			'Switch back to right-side driving — practise in a quiet area before motorway traffic. Roundabouts are the highest-risk point of UK left-side reflex',
			'Manual transmission is the default at lower price tiers; automatics cost ~30% more. Book early in peak season',
			'Carry small TL notes for parking attendants, occasional tolls if HGS fails, and roadside purchases. Larger fines should be issued with proper paperwork and paid through official channels — refuse cash-only demands',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers',
		lead: 'Realistic outcomes ranked by frequency, based on KGM advisories, gov.uk Turkey travel guidance and UK-tourist forum reports.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'Photocard accepted, HGS active, clean trip',
				text: "Standard tourist experience — pick up at Antalya, drive the D400 to Kaş and Fethiye, return the car, HGS tolls bill your UK card 3–6 weeks later for the expected amount plus admin fee. Most Turkey trips end this way.",
			},
			{
				severity: 'low',
				frequency: 'Occasional at peak season',
				label: 'Agent asks for translation, you produce IDP Companion',
				text: 'Five extra minutes at the Antalya, Istanbul or Bodrum counter during May–October peak season, no further issue. Common when desk agents default to asking for translation even when KGM rules accept the UK photocard alone.',
			},
			{
				severity: 'med',
				frequency: 'Universal on otoyol routes',
				label: 'HGS tolls billed to your UK card weeks after return',
				text: 'Every otoyol section, both Bosphorus bridges and the Osman Gazi Bridge bill HGS automatically. Expect a single rental-company invoice 3–6 weeks after the trip covering all tolls plus a typical TL 500 admin fee. Budget this into the trip cost upfront.',
			},
			{
				severity: 'med',
				frequency: 'Common',
				label: 'Speed-camera ticket on otoyol or Istanbul arterial',
				text: 'A section-control camera on the Istanbul–Ankara or Istanbul–Antalya otoyol catches you above the threshold. TL fine plus rental admin fee charged to your UK card on file. Lira inflation means the figure may differ from any pre-trip guide.',
			},
			{
				severity: 'low',
				frequency: 'Uncommon',
				label: 'Trafik Polisi or Jandarma stop, brief document check',
				text: "Standard document check on the D400 coastal route or a rural Anatolian section. UK photocard accepted, IDP Companion's English version shortens the conversation. Standard process, no further action.",
			},
			{
				severity: 'high',
				frequency: 'Rare but expensive',
				label: 'HGS transponder not active at pickup, plate-billing penalties stack',
				text: 'You drove the otoyol assuming the transponder worked. Without an active transponder the system reads the plate and bills 4× the toll plus admin penalty for every crossing. Verify and test at pickup — this is the single most-reported avoidable Turkey rental issue.',
			},
		],
		math: "$35 IDP Companion vs the difference between a peak-season same-day rebook in Antalya at premium prices and an advance booking with HGS-verified pickup. HGS tolls themselves are universal on otoyol routes — budget for them. The IDP question is the smallest line item; HGS, Istanbul-driving decisions and lira-fine variability are the bigger ones.",
	},

	phrases: {
		heading: 'Turkish phrases for police stops, rental desks and rural fuel stations',
		lead: "Turkey's tourist infrastructure runs in English at major rental chains and at Trafik Polisi tourist-area stops, so phrases aren't strictly needed — but eight Turkish items add cultural color and help in rural Anatolian or coastal villages where English is less dominant.",
		items: [
			{ phrase: 'Ehliyetim bu', translation: 'Here is my licence', context: 'Standard opening — hand the UK photocard and passport together at a Trafik Polisi stop' },
			{ phrase: 'Ve burada da çoklu dilde çevirisi var', translation: 'And here is the multilingual translation', context: 'Follow-up at a rental counter if the agent asks for translation alongside the UK photocard' },
			{ phrase: 'İngiliz turistim', translation: "I'm a British tourist", context: 'Establishes context immediately at any document check' },
			{ phrase: 'İngilizce konuşuyor musunuz?', translation: 'Do you speak English?', context: 'Almost universally answered yes in tourist-facing roles; rarely needed but courteous' },
			{ phrase: 'En yakın benzin istasyonu nerede?', translation: 'Where is the nearest petrol station?', context: 'Useful in rural Anatolia or on the Cappadocia loops where stations are sparse' },
			{ phrase: 'HGS aktif mi?', translation: 'Is HGS active?', context: 'Verify the transponder at pickup or at the first toll — the single most useful Turkish phrase a UK driver can carry' },
			{ phrase: 'Yardım edebilir misiniz?', translation: 'Can you help me?', context: 'Universal at any incident or breakdown' },
			{ phrase: 'Teşekkür ederim', translation: 'Thank you', context: 'Universal courtesy; "teşekkürler" works equally well in casual contexts' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Turkey (UK citizens)',
		lead: "Turkey's preparation list for UK photocard holders is short on the documentation side — no government IDP needed — but the HGS verification step at pickup and the Istanbul-driving decision are the items that distinguish a clean trip from a frustrating one.",
		schemaName: 'How to prepare for driving in Turkey as a UK citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard is valid and physical',
				text: "The plastic photocard alone is sufficient post-2015 — no paper counterpart needed. If you still hold an older paper licence, update to photocard format before flying. KGM expects a single physical document at any tourist-area stop.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. Turkey operates in working English at every major rental chain and tourist-area Trafik Polisi stop — the English version is the working-language route. Print at home or from any Turkish hotel.',
			},
			{
				title: 'Verify the rental car has an active HGS transponder before driving any otoyol or Bosphorus crossing',
				text: 'Ask the agent to test the transponder at pickup, ideally on the first toll on the way out of the airport. Without an active transponder the HGS system reads the plate and bills 4× the toll plus admin penalty — and you find out weeks after returning home when the rental forwards the charges to your UK card.',
			},
			{
				title: 'Decide whether to drive in Istanbul itself or pick up the rental on departure',
				text: "Istanbul traffic density on the E5 and TEM is among Europe's heaviest; parking is scarce and expensive; lane discipline is informal. Many UK travellers pick up the rental only on departure to the Aegean or Mediterranean coast and use taxi, metro and Bosphorus ferry inside Istanbul itself. This is the single highest-leverage planning decision for a Turkey trip.",
			},
			{
				title: 'Carry physical documents in one folder + small TL cash for incidentals',
				text: 'Physical UK photocard + UK passport with Turkish e-Visa + rental contract + insurance documentation + IDP Companion — all in one folder. Hand the folder over at any Trafik Polisi stop. Carry small TL notes for parking, occasional tolls if HGS fails, and roadside purchases. Refuse cash-only fine demands and ask for an official receipt.',
			},
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Turkey as a UK tourist post-Brexit?',
				answer: "No. The Karayolları Genel Müdürlüğü (KGM) accepts UK photocard driving licences for tourist visits up to 6 months from entry. UK gov.uk Turkey travel advice confirms. Tourists almost never reach the 6-month threshold — that's the long-stay-resident conversion point.",
			},
			{
				id: 2,
				question: 'Can a rental company refuse me without an IDP?',
				answer: 'Yes — some Turkish branches during peak May–October Mediterranean season request an IDP at pickup even when KGM rules accept the UK photocard alone. The translation companion clears the question in writing in five extra minutes.',
			},
			{
				id: 3,
				question: 'What is HGS and how does it bill me?',
				answer: "HGS (Hızlı Geçiş Sistemi) is Turkey's automatic motorway and bridge toll system. Every otoyol section, both Istanbul Bosphorus bridges, the Osman Gazi Bridge across the İzmit Gulf and most major bridge crossings bill HGS at speed — no manned cash booths. Rental cars carry an active transponder by default; the rental company forwards every toll to your UK card 3–6 weeks after the trip plus a typical TL 500 admin fee.",
			},
			{
				id: 4,
				question: 'Should I drive in Istanbul itself?',
				answer: "Most UK travellers don't. Traffic density on the E5 and TEM is among Europe's heaviest, lane discipline is informal, and parking is scarce and expensive. Many tourists pick up the rental only on departure to the Aegean or Mediterranean coast and use taxi, metro and Bosphorus ferry inside Istanbul.",
			},
			{
				id: 5,
				question: 'What side of the road do they drive on?',
				answer: 'Right. Switch from UK left-side driving requires deliberate attention, especially at roundabouts and during the first few city-traffic exposures. Practise in a quiet area before motorway traffic.',
			},
			{
				id: 6,
				question: 'Will my UK insurance cover me in Turkey?',
				answer: 'Turkey is outside the EU and EEA; most UK motor insurance does not extend automatically. Rental insurance sold at the counter is the standard fallback. Verify with your insurer for your specific policy version and travel dates before flying.',
			},
			{
				id: 7,
				question: 'Are Turkish lira fines a moving target?',
				answer: "Yes. Inflation in Turkey is high; published fine ranges are indexed annually. The TL figure printed in last spring's guide is not the figure you'll pay this spring. Verify current fines against KGM and Trafik Polisi publications at time of travel.",
			},
			{
				id: 8,
				question: 'Can I cross from a Turkish rental into Greece, Bulgaria, Georgia or Iran?',
				answer: 'Greece, Bulgaria and Georgia — usually yes, subject to contract terms and additional cross-border insurance from the rental company. Iran, Syria and Iraq — almost universally prohibited by rental contracts. Verify before pickup if cross-border driving is part of the plan.',
			},
			{
				id: 9,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government IDP is a formal document issued under the 1949 Geneva Convention or 1968 Vienna Convention by an authorised UK issuer. IDP Companion is a private multilingual translation companion document presenting your photocard details in twelve widely-read languages from the 1949 Geneva Convention set — used alongside your physical UK photocard, not as a substitute for a government IDP where one is legally required.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Turkey trips?',
				answer: 'Choose 1 year ($35), 3 years ($45) or 5 years ($55). Validity is tied to your physical UK photocard — if your photocard expires, IDP Companion expires with it. One purchase covers Turkey plus Spain, Italy, Greece, Portugal, Morocco and other destinations on the same plan during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Turkey-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece' },
			{ flagFrom: 'gb', flagTo: 'cy', label: 'UK → Cyprus', status: 'Live', href: '/idp-for-uk-drivers-in-cyprus' },
			{ flagFrom: 'gb', flagTo: 'ae', label: 'UK → UAE', status: 'Live', href: '/idp-for-uk-drivers-in-uae' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Russia → Turkey', status: 'Live', href: '/idp-for-russian-drivers-in-turkey' },
			{ flagFrom: 'gb', flagTo: 'eg', label: 'UK → Egypt', status: 'Live', href: '/idp-for-uk-drivers-in-egypt' },
		],
	},

	finalCta: {
		heading: 'Driving the D400 coast, Cappadocia or Bosphorus bridges?',
		text: "Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Turkey's working language for tourists is English, which is what the IDP Companion's English version delivers at every rental counter and Trafik Polisi stop. Valid 1–5 years and covers Turkey plus Spain, Italy, Greece, Portugal, Morocco on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Karayolları Genel Müdürlüğü (KGM), the Trafik Polisi, the Jandarma Genel Komutanlığı, HGS (Hızlı Geçiş Sistemi) or any Turkish government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office), the AA and the RAC. IDP Companion must be used alongside your original UK photocard driving licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Karayolları Trafik Kanunu — Turkish road traffic law (mevzuat.gov.tr)',
			'Karayolları Genel Müdürlüğü (KGM) — Foreign driver guidance (kgm.gov.tr)',
			'UK Foreign, Commonwealth & Development Office — Driving in Turkey (gov.uk/foreign-travel-advice/turkey)',
			'HGS — Hızlı Geçiş Sistemi automatic toll portal (hgs.gov.tr)',
			'Trafik Polisi — Traffic enforcement (trafik.gov.tr)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Turkey',
	},
};

export const ukTurkeyCopy: Record<'en', CountryPairCopy> = { en };
