/**
 * Country-pair content: United States → Japan.
 * Locales: en only.
 *
 * Killer angles (Japan is unique among destinations):
 *  - Strictest IDP enforcement in developed world (¥500,000 + up to 3 years
 *    prison under Article 117-2-2 of the Road Traffic Act)
 *  - Online "digital IDPs" explicitly rejected by Toyota Rent a Car policy
 *    (named issuers: IAA, IDL — and "those issued via the Internet")
 *  - 1949 Geneva ONLY (Japan never ratified Vienna 1968 — Vienna IDPs invalid)
 *  - Kanji-only road signs on rural / non-arterial roads
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for US Drivers in Japan: 2026 Guide to Geneva 1949 Rules',
		description:
			'Driving in Japan on a US license? Japan has the strictest IDP enforcement in the developed world — fines up to ¥500,000, up to 3 years prison, and Toyota Rent a Car explicitly rejects online IDPs. Honest 2026 guide.',
		ogTitleShort: 'IDP for US Drivers in Japan',
		ogSubtitle: '2026 Guide — strictest in the world',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'US → Japan',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'US → Japan · 2026 Guide',
		title: 'IDP for US Drivers in Japan: 2026 Guide',
		lead: "You're flying to Tokyo, planning a self-drive route through Hokkaido, or thinking about renting a car for a Mt. Fuji weekend. Maybe you've already ordered an \"instant digital IDP\" from one of those websites that promised same-day delivery. Here's what most American travelers don't realize about Japan: the country has the strictest IDP enforcement in the developed world, and driving without a valid one carries penalties of up to ¥500,000 (~$3,400) and up to 3 years in prison under Article 117-2-2 of the Road Traffic Act.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — Japan requires a 1949 Geneva Convention IDP for rental cars',
		text: "Japan is one of the strictest IDP-enforcement countries in our coverage. Japanese rental chains (Toyota, Nippon, ORIX, Times, Nissan) explicitly require a Geneva 1949 IDP issued by an authorized national body — they reject online or digital-only IDP-style documents at the counter. IDP Companion's role for Japan is supplementary: hotel verification, JR Pass desks, smaller-venue ID checks, and as a multilingual backup translation. For renting a car, you need an authorized Geneva 1949 IDP issued in your home country before you fly.",
	},

	tldr: {
		heading: 'Driving in Japan: what your US license alone gets you',
		lead: 'Japan is the country where the asymmetry between cost-of-prevention and cost-of-failure is most extreme. An authorized Geneva 1949 IDP is required for renting a car. IDP Companion is the multilingual translation aid for everything outside the rental counter — hotel check-ins, JR Pass desks, smaller-venue verifications, and as a backup if your physical IDP is lost during the trip.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Japan',
		colCost: 'Cost',
		rows: [
			{
				document: 'US Driver License (alone)',
				whatItDoes: 'Insufficient under Japanese law. Refused at every major rental chain (Toyota, Nippon, ORIX, Times, Nissan). Rental insurance void. Up to ¥500,000 fine + up to 3 years prison if stopped while driving. Foreigners are not exempt.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your US license',
				whatItDoes: 'Multilingual translation including Japanese script. Useful for hotel check-ins, JR Pass desks, smaller-venue verifications, and as a multilingual backup. Re-printable from any hotel if your physical IDP is lost mid-trip. Not accepted by Japanese rental chains or police as a substitute for an authorized Geneva 1949 IDP.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'Honest disclosure for Japan: an authorized Geneva 1949 IDP issued in your home country is what Japanese rental chains and police require. IDP Companion is a supplementary translation aid for non-rental contexts (hotels, JR Pass, tourist help desks) and as a printable backup. We are upfront about this because Japan is the country where document failures most frequently end trips before they start.',
	},

	whyNotEnough: {
		heading: "Why your US license alone isn't enough in Japan",
		lead: "Three reasons, with Japan's enforcement being unusually strict on each.",
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal reason',
				text: "Japan's Road Traffic Act requires foreign drivers to carry both a valid domestic license AND a valid 1949 Geneva IDP. Article 117-2-2 sets the penalty for driving without a valid license at up to ¥500,000 (~$3,400) and up to 3 years in prison. Toyota Rent a Car's policy explicitly lists what they reject — including IDPs from \"organizations not authorized to issue them, including those issued via the Internet.\" This level of specificity is unusual; Japan specifically targets the online-IDP industry.",
			},
			{
				icon: 'ph:translate-bold',
				title: 'The translation reason',
				text: 'Your US license is in English only. Japanese rental agents at Tokyo, Osaka, or Sapporo airports are usually English-fluent, but local rental shops in Kyoto, Hakone, or rural Hokkaido often have limited English. Japanese police checkpoints — especially in tourist regions — verify your IDP against the standardized 1949 Geneva format with Japanese-translated category labels. They check this against your actual document carefully.',
			},
			{
				icon: 'ph:lock-key-bold',
				title: 'The format strictness reason',
				text: "Japan's rental industry is unusually unified. Toyota, Nippon, ORIX, Times Car Rental, and Nissan all reject the same things in the same way. There is no \"soft\" chain in Japan that overlooks documentation like Hertz might in Italy. Every rental counter checks the IDP format, the issuing convention (specifically the date \"19 September 1949\" printed on the document), and whether the issuing organization is authorized.",
			},
		],
	},

	rejects: {
		heading: 'The 4 things Japan rejects (that US tourists try anyway)',
		badge: 'Japan-specific',
		lead: 'Japan is unusually clear about what does not work. Online sellers exploit Americans who do not realize how strict the rules are. Here is what gets you turned away at every major rental counter.',
		items: [
			{
				icon: 'ph:globe-x-bold',
				title: 'Online "digital IDPs" from unauthorized issuers',
				text: 'Companies like IDL, IAA, KIDA, IDD, IADA, and ITDL sell "International Driving Permits" online for $30–150 and claim they are accepted in Japan. They are not. Toyota Rent a Car explicitly names these as invalid in their counter requirements, as do Nippon, ORIX, and Times. Japan only accepts a Geneva 1949 IDP issued by an authorized national-level organization in the driver\'s home country.',
			},
			{
				icon: 'ph:scroll-bold',
				title: '1968 Vienna Convention IDPs',
				text: 'Japan only ratified the 1949 Geneva Convention. Russia, Germany, France, and most EU countries issue Vienna 1968 IDPs — Japan refuses them. The US is fortunate that the standard US-issued IDP format is Geneva 1949, which works in Japan automatically. European travelers visiting Japan need a JAF translation of their license instead.',
			},
			{
				icon: 'ph:clock-counter-clockwise-bold',
				title: 'Expired or near-expiration IDPs',
				text: 'Japan validates IDPs against both the issue date AND your entry date. Your IDP is valid for 1 year from issue, and your driving privileges in Japan extend 1 year from your entry stamp date — whichever ends sooner. If your IDP was issued more than a year before you arrive, you cannot drive in Japan even on day one. Plan ahead.',
			},
			{
				icon: 'ph:passport-bold',
				title: 'IDPs whose nationality does not match your license',
				text: 'If you somehow obtained an IDP from a country that is not where your license was issued, Japan will reject it. The IDP must come from the same country as your domestic driver license. For US drivers this means an authorized Geneva 1949 IDP issued in the United States.',
			},
		],
	},

	rules: {
		heading: 'Japan driving rules US drivers should know',
		lead: "Japan's road system has several major adjustments for US drivers. Take your first hour very slowly.",
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Biggest adjustment — roundabouts, intersections, parking all flip' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '40–50 km/h', note: 'Lower than US — strict camera enforcement' },
			{ icon: 'mdi:road-variant', label: 'Motorway', value: '80–100 km/h', note: 'Tomei Expressway has heavy speed cameras' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.03% BAC', note: 'Effectively zero tolerance — one beer can be over' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned', note: '¥18,000 + 3 license points' },
			{ icon: 'mdi:car-connected', label: 'Tolls (Expressways)', value: 'ETC card', note: 'Most highways are toll — get ETC at rental pickup' },
			{ icon: 'mdi:parking', label: 'Street parking', value: 'Largely banned', note: 'Use kunsei (commercial) lots — illegal parking ¥15,000–25,000' },
			{ icon: 'ph:translate-bold', label: 'Road signs', value: 'Kanji + romaji', note: 'Highways bilingual; rural and parking signs kanji-only' },
		],
	},

	fines: {
		heading: '2026 fines for common violations in Japan',
		lead: 'Japanese fines are paid through the police station within a strict timeframe. Foreigners are not exempt. Some violations carry license-point consequences that can affect your US insurance through international agreements.',
		colViolation: 'Violation',
		colAmount: 'Standard fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without valid IDP / license', amount: 'Up to ¥500,000 (~$3,400)', severity: 'high', note: 'Article 117-2-2. Plus up to 3 years prison. Most severe penalty in the developed world' },
			{ icon: 'mdi:speedometer', label: 'Speeding 25 km/h over (urban)', amount: '¥15,000–35,000', severity: 'med', note: 'Camera-enforced' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 50+ km/h over', amount: 'Up to ¥100,000', severity: 'high', note: 'Plus possible jail time' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '¥9,000', severity: 'low', note: '2 license points' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone while driving', amount: '¥18,000', severity: 'med', note: '3 license points (reformed Dec 2019)' },
			{ icon: 'mdi:beer-outline', label: 'DUI (any level above 0.03%)', amount: '¥500,000–1,000,000', severity: 'high', note: 'Plus up to 5 years prison' },
			{ icon: 'mdi:account-group', label: 'Riding with drunk driver', amount: '¥200,000 + suspension', severity: 'high', note: 'Yes, passengers are liable too' },
			{ icon: 'mdi:parking', label: 'Parking violation (urban)', amount: '¥15,000–25,000', severity: 'med', note: 'Plus possible vehicle impoundment' },
		],
		caption: 'Statutory ranges from the Road Traffic Act. Fines must typically be paid in person at a Japanese police station; tourists can be detained briefly while charges are processed in serious cases.',
	},

	alphabet: {
		heading: 'Kanji road signs: what every American driver should recognize',
		badge: 'Japan-specific',
		lead: 'Major highways have bilingual signs (kanji + romaji), but as soon as you turn off onto local roads, parking lots, or rural areas, signs become kanji-only. Learn these eight before you drive.',
		examples: [
			{ sign: '止まれ', latin: 'Tomare', meaning: 'STOP — usually red downward triangle' },
			{ sign: '駐車禁止', latin: 'Chuusha kinshi', meaning: 'NO PARKING — fines ¥15,000+' },
			{ sign: '一方通行', latin: 'Ippou tsuukou', meaning: 'ONE WAY — common in narrow Kyoto streets' },
			{ sign: '速度制限', latin: 'Sokudo seigen', meaning: 'SPEED LIMIT — followed by km/h number' },
			{ sign: '工事中', latin: 'Kouji-chuu', meaning: 'CONSTRUCTION / road works ahead' },
			{ sign: '徐行', latin: 'Jokou', meaning: 'SLOW DOWN — common before rural intersections' },
			{ sign: '進入禁止', latin: 'Shinnyuu kinshi', meaning: 'DO NOT ENTER — red circle with horizontal bar' },
			{ sign: '料金所', latin: 'Ryoukinjo', meaning: 'TOLL GATE — have ETC card or cash ready' },
		],
		helpsHeading: 'What helps',
		helps: [
			'Google Maps offline downloads with Japanese place names enabled',
			'A printed list of your destinations in both kanji and romaji — your hotel, return airport, key parking lots',
			'Take a photo of your hotel address in kanji before leaving each morning',
			'IDP Companion as a familiar bilingual reference for gas stations, toll desks, and rural rental shops',
		],
		outro: 'Japan rewards prepared drivers. The 30 minutes you spend memorising these eight signs will save you from missed turns, parking tickets, and the embarrassment of asking "STOP or GO?" at a rural intersection.',
	},

	howTo: {
		heading: 'How to prepare for driving in Japan',
		lead: 'Japan has the strictest IDP enforcement in our coverage. Two preparation tracks matter: getting an authorized Geneva 1949 IDP for the rental counter (issued in your home country before you fly), and adding IDP Companion as the multilingual translation aid for everything outside the rental counter.',
		schemaName: 'How to prepare for driving in Japan as a US citizen',
		duration: 'PT30M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion before you fly',
				text: '$35 for 1 year, $45 for 3 years, $55 for 5 years. 2 minutes online — upload your US license, our system handles OCR + multilingual translation including Japanese, French, German, Spanish, and 8 other languages. Output is a print-ready PDF you can use at hotels, JR Pass desks, tourist help points, and as a backup if your physical IDP is lost mid-trip.',
			},
			{
				title: 'Verify your IDP validity dates align with your trip',
				text: 'Japan validates IDPs against both the issue date AND your entry date. Your driving privileges in Japan extend 1 year from your entry stamp date OR 1 year from your IDP issue date — whichever ends sooner. Generate your IDP no earlier than ~3–4 months before departure to maximize the window.',
			},
			{
				title: 'Confirm your rental booking documentation requirements',
				text: 'Toyota Rent a Car, Nippon, ORIX, Times, and Nissan all require an authorized Geneva 1949 IDP at the counter — they explicitly reject digital-only or unauthorized-issuer IDPs. Confirm this in writing on your booking before you travel. There is no soft chain in Japan that overlooks documentation.',
			},
			{
				title: 'Print all documents — Japan is a paper culture',
				text: 'Print IDP Companion on standard letter or A4 paper. Japanese rental staff and police expect physical documents, not phone screens. Bring a backup copy. JR Pass desks, hotel check-ins, and prefecture tourist offices accept multilingual paper printouts faster than any digital alternative.',
			},
			{
				title: 'Carry physical documents in one folder',
				text: 'Physical US license + authorized Geneva 1949 IDP + printed IDP Companion + passport — all in one folder. The combination clears every Japanese checkpoint, hotel check-in, and JR Pass desk efficiently.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits — honestly',
		lead: 'Japan is the country where we are most explicit about what we are NOT. Skip the hype.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your US license data into Japanese, English, French, German, Spanish, and other widely-read languages',
				'Designed to reduce friction at smaller rental shops, hotel check-ins, toll booths, and informal verifications',
				'Generated in minutes after you upload your license and complete our verification',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not accepted by Japanese rental chains (Toyota, ORIX, Nippon, Times, Nissan) as a substitute for an authorized Geneva 1949 IDP at the counter — Japan is the strictest market in our coverage on this point',
				'Not valid by itself — must be carried alongside your original US driver license',
				'Will not satisfy Japanese police at a roadside checkpoint as the primary licensing document',
			],
		},
		helps: {
			title: 'When IDP Companion is what you need',
			items: [
				'At hotel check-ins in Kyoto, Hakone, or rural Hokkaido where staff prefer Japanese-script document details',
				'At JR Pass exchange counters, prefecture tourist help desks, and tourist information offices for verification',
				'At gas stations and convenience stores for ID verification',
				'As a multilingual backup printable from any hotel if your physical IDP is lost mid-trip',
				'For travelers stacking multiple country trips over 1–5 years — one $55 purchase covers Japan + Europe + everywhere else',
			],
		},
		needOfficial: {
			title: 'What you should carry alongside IDP Companion in Japan',
			items: [
				'An authorized Geneva 1949 IDP issued in your home country before you fly — required by every major Japanese rental chain at the counter',
				'Your physical US driver license — the actual permission to drive (no document substitutes for this)',
				'Your US passport with valid Japanese entry stamp — physical, not a digital photo',
				'Confirmation that your IDP issue date + your entry date give you at least the trip duration of valid driving (Japan validates whichever ends sooner)',
			],
		},
		pattern:
			"What every prepared US traveler carries into Japan for driving: physical US driver license + authorized Geneva 1949 IDP + IDP Companion as the multilingual translation aid (hotels, JR Pass desks, backup) + passport. Japan is the country where document failures most frequently end trips before they start — preparation is everything.",
	},

	renting: {
		heading: 'Renting a car in Japan as a US driver',
		lead: 'Major Japanese chains operate at every airport — Narita (NRT), Haneda (HND), Kansai (KIX), New Chitose (Sapporo), Naha (Okinawa). The industry is unusually unified — almost all rentals go through the big chains, with similar IDP requirements.',
		chains: [
			{ name: 'Toyota Rent a Car', policy: 'Largest chain, English-friendly counters at airports. Strict on IDP documentation — explicitly rejects online IDPs by name in policy text' },
			{ name: 'Nippon Rent-A-Car', policy: 'Second largest. Same enforcement standard as Toyota' },
			{ name: 'ORIX Rent a Car', policy: 'Mid-tier, occasionally cheaper, equally strict on documentation' },
			{ name: 'Times Car Rental', policy: 'Convenient for short rentals. English support varies by location' },
			{ name: 'Nissan Rent a Car', policy: 'Fewer airport counters, slightly cheaper' },
		],
		tipsHeading: 'Practical tips',
		tips: [
			'Reserve online in advance, especially for Tokyo or Sapporo airports during peak seasons. Walk-in availability is unreliable',
			'Reserve automatic transmission specifically — most Japanese rentals are automatic, but verify',
			'Always select Collision Damage Waiver and the NOC (Non-Operation Charge) waiver — without NOC you owe up to ¥50,000 even for minor scratches',
			'Photograph the vehicle on pickup including odometer. Japanese rental disputes are rare but documentation prevents misunderstandings',
			'Get an ETC card from the rental — toll roads use these and manual payment is slow and confusing',
			'Carry small bills (¥1,000) for parking and toll edge cases',
			'Refuel at least 1 km before returning. Some chains require fuel-station receipt as proof',
		],
	},

	phrases: {
		heading: 'Japanese phrases for police checkpoints and rental desks',
		lead: 'These eight phrases cover most of what an American driver actually says or hears on Japanese roads. Save the page or screenshot it.',
		items: [
			{ phrase: '免許証', translation: "Driver's license", context: 'Pronounced "menkyo-shou" — what the officer asks for first' },
			{ phrase: '国際免許', translation: 'International Driving Permit', context: 'Pronounced "kokusai menkyo" — the IDP itself' },
			{ phrase: 'パスポート', translation: 'Passport', context: '"pasupooto" — Japanese police often want passport too' },
			{ phrase: 'すみません', translation: "Excuse me / I'm sorry", context: '"sumimasen" — universal politeness opener at any checkpoint or desk' },
			{ phrase: '英語が話せますか？', translation: 'Do you speak English?', context: '"eigo ga hanasemasu ka?" — useful at rural shops' },
			{ phrase: '警察', translation: 'Police', context: '"keisatsu" — generic term; checkpoint officers may also be 交通課 (kōtsū-ka, traffic division)' },
			{ phrase: 'レンタカー', translation: 'Rental car', context: '"rentakaa" — useful at airports and gas stations' },
			{ phrase: '罰金', translation: 'Fine / penalty', context: '"bakkin" — what you will be issued if documentation is incomplete' },
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: 'Realistic outcomes ranked by frequency, based on US traveler reports from Japan.',
		items: [
			{
				severity: 'low',
				frequency: '~70% of trips',
				label: 'Nothing happens',
				text: 'You complete your trip, never get stopped, and the IDP would have been "wasted." This is the false sense of security that bites the other 30%.',
			},
			{
				severity: 'med',
				frequency: '~25% of attempts',
				label: 'Refused at the rental counter',
				text: "Japan's rental industry is unified — major chains require an authorized Geneva 1949 IDP and will refuse you without it. You lose your reservation, scramble for alternatives, miss connections. There is no \"soft\" chain in Japan that overlooks documentation.",
			},
			{
				severity: 'high',
				frequency: '~5% of trips',
				label: 'Stopped at a police checkpoint',
				text: 'Japanese police are particularly active during weekends, holidays, and on Tomei Expressway. They check both license AND IDP. Without a valid IDP: charge of "driving without a license" — up to ¥500,000 (~$3,400) and up to 3 years prison.',
			},
			{
				severity: 'high',
				frequency: '1–2% of trips',
				label: 'Minor accident',
				text: 'Japan has the most expensive accident liability in Asia. Without valid IDP, insurance is voided. Hospital bills require upfront cash payment for foreigners. Even minor accidents can run $5,000–30,000.',
			},
			{
				severity: 'high',
				frequency: 'Rare but devastating',
				label: 'Serious accident',
				text: 'Japanese hospital bills + voided insurance + criminal investigation if injuries occurred + travel delays measured in months. Driving without a license is a criminal offense, and foreigners can be detained up to 23 days before charges are filed in serious cases. The US Embassy in Tokyo handles these situations regularly.',
			},
		],
		math: 'IDP Companion ($35 / 1 year, $55 / 5 years) + an authorized Geneva 1949 IDP for the rental counter is under $60 of prep. A single fine for invalid IDP is roughly $3,400. Insurance void scenarios start at $5,000 and climb fast. Japan is the country where the asymmetry is most extreme.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: "Do I really need an IDP if I'm only renting a car for a weekend in Hakone?",
				answer: "Yes. Japan's law applies regardless of trip length. Tourist areas like Hakone, Mt. Fuji, and Kyoto have active police checkpoints. A weekend rental still requires an authorized Geneva 1949 IDP for legal compliance, and your insurance is voided without it. Japanese rental chains will refuse the rental at the desk.",
			},
			{
				id: 2,
				question: 'Can I get an IDP after I arrive in Japan?',
				answer: 'Japanese authorities do not issue IDPs to foreign tourists. International Driving Permits must be issued in your country of residence before you travel. IDP Companion can be generated online from anywhere as a multilingual translation companion (Japanese script included), useful at hotels, JR Pass desks, and as a backup — but it is not accepted by Japanese rental chains as a substitute for an authorized Geneva 1949 IDP issued in your home country.',
			},
			{
				id: 3,
				question: 'What about those "instant digital IDP" services I see advertised online?',
				answer: 'Japan explicitly rejects them. Toyota Rent a Car\'s official policy lists "International driving permits issued by organizations that are not authorized to issue such licenses (IAA, IDL, etc., including those issued via the Internet)" as invalid. Other major Japanese chains use identical language. Use only an authorized Geneva 1949 IDP issued by a national-level organization in your home country.',
			},
			{
				id: 4,
				question: 'How does IDP Companion help if Japan rentals require an authorized IDP?',
				answer: "IDP Companion is the multilingual translation aid for everything outside the rental counter. Japanese-script translation of your US license details speeds up hotel check-ins, JR Pass exchange, prefecture tourist help desks, and informal verifications. It is also a multilingual printable backup if your physical IDP is lost mid-trip. We are upfront that it is not a substitute for an authorized Geneva 1949 IDP at the rental counter — Japan is the strictest market in our coverage on this point.",
			},
			{
				id: 5,
				question: 'Why does Japan reject Vienna 1968 IDPs?',
				answer: 'Japan only ratified the 1949 Geneva Convention. The 1968 Vienna Convention modernized IDPs and is signed by most European countries (and Russia), but Japan never ratified it. Tourists from countries that issue Vienna 1968 IDPs (Germany, France, Russia) cannot use them in Japan — they need a Japanese translation of their license through JAF (Japan Automobile Federation). For US drivers this is not an issue — the standard US-issued IDP format is Geneva 1949.',
			},
			{
				id: 6,
				question: 'How long is IDP Companion valid?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). The validity is tied to your US license. The 3-year option is popular among frequent Japan travelers because it covers multiple visits without renewing.',
			},
			{
				id: 7,
				question: 'What happens if I drive in Japan without IDP and get stopped?',
				answer: 'Charge of "driving without a license" under Article 117-2-2 of the Road Traffic Act — up to ¥500,000 (~$3,400) and up to 3 years prison. Driving without a license is a criminal offense in Japan, and foreigners can be detained up to 23 days before charges are filed in serious cases. The US Embassy in Tokyo handles these situations but cannot intervene in Japanese criminal proceedings.',
			},
			{
				id: 8,
				question: "What's the deal with driving on the left side of the road in Japan?",
				answer: 'Japan drives on the left, opposite from the US. This is the biggest practical adjustment for American drivers. Take your first 30 minutes very slowly — turning, parking, intersections, and roundabouts all flip. Most rental cars have steering on the right side. Many drivers describe the first hour as exhausting; by day two it becomes natural.',
			},
			{
				id: 9,
				question: 'Are there any differences for driving in Okinawa vs the main Japanese islands?',
				answer: 'Same legal rules — physical US license + an authorized Geneva 1949 IDP is required to drive. Okinawa is more car-dependent than mainland Japan (less developed train network), so rental volume is higher. Japanese-only signage is more common on rural Okinawan roads, making IDP Companion specifically useful for hotel check-ins, gas stations, and tourist help desks there. Driving customs in Okinawa are slightly more relaxed than Tokyo, but enforcement standards are identical.',
			},
			{
				id: 10,
				question: 'What if my IDP was issued more than a year before my trip?',
				answer: 'Japan validates your IDP against both its issue date AND your entry stamp date — your driving privileges end at whichever expires first. If your IDP was issued more than 12 months before you arrive, you cannot legally drive in Japan, even on day one. Plan ahead: time your authorized Geneva 1949 IDP issuance within 12 months of your travel date.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for US travelers and Japan-bound drivers — coming soon.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'us', flagTo: 'it', label: 'US → Italy', status: 'Live', href: '/idp-for-us-drivers-in-italy/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain/' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'US → UAE', status: 'Live', href: '/idp-for-us-drivers-in-uae/' },
			{ flagFrom: 'us', flagTo: 'fr', label: 'US → France', status: 'Live', href: '/idp-for-us-drivers-in-france/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: 'Multilingual PDF including Japanese, generated from your US license in 2 minutes. Print at home or from any hotel. The translation aid for hotels, JR Pass desks, tourist offices, and as a backup. Valid 1–5 years. $35 / 1yr · $45 / 3yr · $55 / 5yr. One-time payment, no subscription.',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Japan Automobile Federation (JAF), Japanese National Police Agency, Toyota Rent a Car, ORIX Rent a Car, Nippon Rent-A-Car, or any government agency or rental company. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention; in the United States, authorized issuers of Geneva 1949 IDPs are AAA and AATA. Japan requires foreign drivers to carry an authorized Geneva 1949 IDP issued in their home country alongside their physical license — IDP Companion does not satisfy that requirement at Japanese rental counters or police checkpoints, and is intended only as a multilingual translation aid for non-rental contexts.",
		sourcesHeading: 'Sources',
		sources: [
			'Japanese Road Traffic Act, Article 117-2-2 (driving without a valid license penalties)',
			'Toyota Rent a Car — official documentation requirements (rejected issuer list)',
			'ORIX Rent a Car — international license verification policy',
			'Japan National Police Agency — driver license requirements for foreigners',
			'Japan Automobile Federation (JAF) — translation services for non-Geneva countries',
			'1949 Geneva Convention on Road Traffic, UN Treaty Collection',
			'AAA International Driving Permit application process',
			'US Embassy in Japan — driving guidance for US citizens',
		],
	},

	og: {
		originName: 'United States',
		destinationName: 'Japan',
	},
};

export const usJapanCopy: Record<'en', CountryPairCopy> = { en };
