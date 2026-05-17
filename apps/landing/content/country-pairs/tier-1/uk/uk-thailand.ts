/**
 * Country-pair content: United Kingdom → Thailand.
 * Locales: en only.
 *
 * Unique angle: Thailand is a 1949 Geneva Convention signatory and legally
 * requires an IDP for foreign tourists driving. The fine for non-compliance
 * is small (THB 500–1,000, ~£11–23) — but the insurance-void clause is the
 * real consequence. Rental policies condition coverage on valid documentation.
 * UK drivers have a left-hand-traffic advantage that doesn't apply to US/EU
 * visitors. Plus motorcycle category requirement that catches scooter renters
 * in Chiang Mai, Phuket, Koh Samui.
 *
 * Thai IS NOT in the IDP Companion PDF template — verification reframed
 * through English (universal at every Thai rental desk and police checkpoint
 * in tourist corridors). Thai language remains in informational phrases block
 * for what the user encounters in-country, not what the PDF contains.
 *
 * SEO add-ons present: tldr, lez (Bangkok vs Chiang Mai vs scooter razzia
 * areas), howTo, lastReviewed. NO alphabet block (we don't claim Thai is on
 * PDF). Phrases block included with EN-only context.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Thailand: 2026 Geneva 1949 Guide',
		description:
			"Thailand legally requires an IDP for UK tourists driving — Geneva 1949 Convention. Fine is small but rental insurance is void without it. Honest 2026 guide: scooter category, BAC 0.05%, what works.",
		ogTitleShort: 'UK Drivers in Thailand: IDP Guide 2026',
		ogSubtitle: 'Small fine, voided insurance — that\'s the real problem.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Thailand',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'UK → Thailand · 2026 Guide',
		title: 'IDP for UK Drivers in Thailand: Small Fine, Voided Insurance',
		lead: "The scooter rental shop near Nimman Road in Chiang Mai charges 200 baht a day and asks for your passport as deposit. They'll take a photo of your UK photocard, hand you a helmet that fits, and wave you off into morning traffic without once mentioning an IDP. The shop doesn't ask. What the rental agreement covers in small print: without a valid IDP, the basic insurance bundled into 200 baht is unenforceable at the moment it matters. A minor collision in Chiang Mai without proper documentation goes two ways — the other party accepts a cash settlement, or they don't. Thai police at the checkpoint on the road to Doi Inthanon do ask for the IDP. The shop didn't. Two separate conversations.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — IDP is legally required for UK drivers in Thailand',
		text: "Thailand is a signatory to the 1949 Geneva Convention on Road Traffic and requires foreign tourists to hold a valid IDP alongside their national licence. The fine for non-compliance is THB 500–1,000 (~£11–23) — small. The insurance consequence is not: rental agreements across Thailand condition coverage on valid documentation. No IDP means no effective insurance at the moment of any accident, regardless of premium paid.",
	},

	tldr: {
		heading: 'UK Licence alone vs IDP Companion in Thailand',
		lead: "Thailand is one of the clearest IDP-required cases in this guide. The fine is the small problem. The insurance void is the expensive one.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Thailand',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Driver Licence (alone)',
				whatItDoes: 'Not sufficient to drive legally — Thai law requires an IDP alongside the national licence for foreign tourists under the 1949 Geneva Convention. Rental insurance policies condition coverage on valid documentation. UK photocard alone (without paper counterpart) often gets flagged at airport rental desks even before the IDP question.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: 'Multilingual digital PDF presenting your UK licence in English, French, Spanish, Arabic, German, Italian, Portuguese and 4 other widely-spoken languages from the 1949 Geneva Convention set. English on the document is read fluently at every Thai rental desk and police checkpoint in tourist corridors (Bangkok, Phuket, Chiang Mai, Pattaya). Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Thailand: original UK photocard licence (both photocard AND paper counterpart) + passport with Thai entry stamp + IDP Companion (printed) + rental agreement. IDP Companion is a translation companion — must be carried alongside the original licence, not as a standalone.",
	},

	whyNotEnough: {
		heading: 'Why your UK licence alone isn\'t enough in Thailand',
		lead: 'Three reasons converge on the same answer. The fine is small; the insurance void and motorcycle category gap are not.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal reason',
				text: "Thailand is a signatory to the 1949 Geneva Convention on Road Traffic. Under Thai traffic law, foreign tourists must hold a valid IDP alongside their national driving licence to drive legally. This is a statutory requirement — not a rental preference. Driving without it makes you non-compliant from the moment you leave the lot.",
			},
			{
				icon: 'mdi:shield-off-outline',
				title: 'The insurance reason — the one that actually matters',
				text: "The fine for driving without an IDP in Thailand is THB 500–1,000 (~£11–23). Small enough that some travellers dismiss it. What they don't dismiss, once it happens, is the insurance clause: rental agreements across Thailand condition coverage on valid documentation. If you're involved in an accident without a valid IDP, your rental insurance — the policy you paid for — is unenforceable. Hospital costs, vehicle damage, and third-party liability fall on you directly. Not theoretical on Thai roads.",
			},
			{
				icon: 'mdi:motorbike',
				title: 'The motorcycle category reason',
				text: "A UK car licence does NOT automatically authorise riding a motorbike in Thailand. A motorcycle endorsement (category A on your UK licence) is required, plus the IDP must be present. Many scooter rental shops in tourist areas don't verify this — police checkpoints in Phuket, Koh Samui, and Chiang Mai do. Insurance is also voided for riders without the correct category, which compounds the cost of any scooter accident.",
			},
		],
	},

	rules: {
		heading: 'Thailand driving rules UK drivers should know',
		lead: 'Left-hand traffic, same as the UK — a genuine advantage that doesn\'t apply to US/EU visitors. The differences are speed limits, BAC, and the density of motorbikes.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Same as UK — comfortable; lane logic identical' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '60 km/h', note: '~37 mph; 30–50 km/h in school zones' },
			{ icon: 'mdi:road-variant', label: 'Highway', value: '90 km/h', note: '~56 mph; up to 120 km/h on certain expressways' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Lower than England 0.08%; equal to Scotland' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: 'THB 1,000–2,000 for handheld' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory all seats', note: 'Driver liable; THB 500–2,000 per person' },
			{ icon: 'mdi:motorbike', label: 'Motorbike requirements', value: 'Category A + IDP', note: 'UK car licence alone does NOT cover scooters' },
			{ icon: 'mdi:helmet', label: 'Helmet', value: 'Mandatory + fastened', note: 'THB 200–400; enforced at every razzia checkpoint' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Thai fines are modest in isolation. The insurance void clause is what makes non-compliance costly in practice. Royal Thai Police amendments to the Land Traffic Act in 2024–2025 increased speed-camera enforcement on intercity routes.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without valid IDP', amount: 'THB 500–1,000 (~£11–23)', note: 'Fine small; insurance void is the real cost', severity: 'med' },
			{ icon: 'mdi:speedometer', label: 'Speeding under 20 km/h over', amount: 'THB 500–1,000 (~£11–23)', note: '', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 20+ km/h over', amount: 'THB 1,000–2,000 (~£23–46)', note: '', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: 'THB 1,000 (~£23)', note: '', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone while driving', amount: 'THB 1,000–2,000 (~£23–46)', note: 'Actively enforced at checkpoints', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt (driver or passenger)', amount: 'THB 500–2,000 (~£11–46)', note: 'Per person', severity: 'med' },
			{ icon: 'mdi:helmet', label: 'No helmet (motorbike)', amount: 'THB 200–400 (~£5–9)', note: 'Enforced at tourist-area checkpoints', severity: 'low' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: 'THB 2,000–50,000 (~£46–1,150)', note: 'Criminal charge; up to 1 year jail under Road Traffic Act §43', severity: 'high' },
			{ icon: 'mdi:car-emergency', label: 'Accident without valid documentation', amount: 'Insurance void', note: 'All costs fall to driver directly; no rental coverage', severity: 'high' },
		],
		caption: 'Sources: Thailand Road Traffic Act B.E. 2522 (amended B.E. 2562); Royal Thai Police enforcement schedule 2025; Thai Department of Land Transport (DLT); Hertz Thailand rental conditions; FCDO Thailand travel advice (gov.uk/foreign-travel-advice/thailand).',
	},

	lez: {
		heading: 'Thailand enforcement zones — where UK drivers actually meet checkpoints',
		badge: 'Thailand-specific',
		lead: 'Three regions account for most documentation enforcement on UK tourists. Bangkok is rarely one of them — for unrelated reasons.',
		zones: [
			{
				city: 'Phuket / Patong / Karon / Kata',
				name: 'Highest-frequency tourist-area checkpoint zone',
				description: "Phuket police run regular checkpoints on the main coastal roads connecting Patong, Karon, Kata and the airport. UK drivers without IDP are flagged routinely. Phuket also has the highest scooter accident rate in Thailand — partly because rental shops don't verify motorcycle endorsement on UK licences. Police checkpoints do. Insurance is voided in any motorbike accident without proper documentation.",
				fine: 'THB 500–1,000 + insurance void',
				note: 'If your UK licence has no Category A endorsement (motorcycle), don\'t rent a scooter in Phuket. Stick to cars. The insurance void on a motorbike accident is the most expensive scenario in this guide.',
			},
			{
				city: 'Chiang Mai (Doi Inthanon, Pai, Mae Hong Son loop)',
				name: 'Mountain-route documentation checkpoints',
				description: "Chiang Mai is the most practical Thai city for independent driving — manageable traffic, clear roads north and west. Police checkpoints on the road to Doi Inthanon (Thailand's highest peak) and on the Mae Hong Son loop verify documentation routinely. Scooter rentals on Nimman Road typically don't ask for IDP — but the road out of the city does. Most UK driver-incidents in northern Thailand occur on the Pai-Mae Hong Son route in monsoon season (May–Oct) when wet asphalt and tight switchbacks are unforgiving.",
				fine: 'THB 500–1,000 + insurance void',
				note: 'Chiang Mai north into the mountains is the most rewarding driving corridor in Thailand for UK visitors — but only with a Category A endorsement and IDP if going by scooter, or any car with valid documentation.',
			},
			{
				city: 'Bangkok (skipped) + Koh Samui (alternative)',
				name: 'When NOT to drive — and where to drive instead',
				description: "Most experienced Thailand travellers say Bangkok isn't worth driving in. Traffic density is extreme, parking limited and expensive, and Grab taxis are reliable, inexpensive, and eliminate every documentation and parking problem simultaneously. Renting makes sense outside Bangkok. Koh Samui is a viable alternative — manageable scooter loops around the island's perimeter road, scattered checkpoint enforcement, and beach-access roads where 4WD isn't required but is occasionally useful.",
				fine: 'Variable',
				note: 'For 1–2 day Bangkok stays, Grab + BTS Skytrain handles everything. Save the rental for Chiang Mai, Phuket, Koh Samui, or the Hua Hin coastal route.',
			},
		],
		tip: "Practical rule for Thailand: the fine for missing IDP is the small problem. The insurance void on a scooter accident in Phuket is the expensive one. UK drivers have a left-hand-traffic advantage but no advantage on the documentation question — Thailand requires IDP from every foreign tourist regardless of origin. Two minutes online before flying handles it.",
	},

	phrases: {
		heading: 'Useful Thai phrases for rental desks and police stops',
		lead: 'English is functional at every major rental desk and tourist-area police stop. These phrases cover the situations where Thai dominates — rural checkpoints north of Chiang Mai, smaller scooter shops, accident-scene communication.',
		items: [
			{ phrase: 'นี่คือใบขับขี่ของฉัน', translation: 'Here is my licence', context: 'Pronounced "Nêe keu bai kàp kêe kŏng chăn". Handing over documents at any checkpoint' },
			{ phrase: 'และเอกสารแปล', translation: 'And the translation document', context: 'Pronounced "Láe èk-gà-sǎan bplae". Showing IDP Companion alongside UK licence' },
			{ phrase: 'ฉันเป็นนักท่องเที่ยว', translation: "I'm a tourist", context: 'Pronounced "Chăn bpen nák tông tîao". Establishing context at any stop' },
			{ phrase: 'ฉันไม่เข้าใจภาษาไทย', translation: "I don't understand Thai", context: 'Pronounced "Chăn mâi kâo jai paa-săa tai". Most tourist-area officers switch to basic English' },
			{ phrase: 'มีปัญหาอะไรไหม', translation: 'Is there a problem?', context: 'Pronounced "Mee bpan-hăa à-rai măi". Polite opening at any checkpoint' },
			{ phrase: 'ฉันมีประกัน', translation: 'I have insurance', context: 'Pronounced "Chăn mee bprà-gan". In case of accident — present the rental insurance card' },
			{ phrase: 'ฉันต้องโทรหาบริษัทเช่ารถ', translation: 'I need to call the rental company', context: 'Pronounced "Chăn dtông toh hăa bor-rí-sàt châo rót". For vehicle issues' },
			{ phrase: 'ขอบคุณครับ / ค่ะ', translation: 'Thank you (m / f)', context: 'Pronounced "Khàwp khun kráp / khâ". After the stop concludes — basic Thai courtesy is universally rewarded' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Thailand as a UK citizen',
		lead: "Thailand's IDP requirement is real and the insurance-void clause makes the fine the smallest part of the problem. Two minutes online before flying handles the documentation; the rest is operational awareness.",
		schemaName: 'How to prepare for driving in Thailand as a UK citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your UK licence into English (the operational language at every Thai rental desk and tourist-area police stop), plus French, Spanish, Arabic, German, Italian, Portuguese and 4 other widely-spoken languages from the 1949 Geneva Convention set. Issued in 2 minutes online, valid 1–5 years. Functions as the translation document required by Thai law alongside your national licence.',
			},
			{
				title: 'Bring BOTH parts of your UK photocard licence',
				text: "The UK photocard driving licence consists of two parts: the photocard itself AND the paper counterpart. Thai rental agencies and police may ask to see both. Travelling with only the photocard is a common cause of rental desk problems for UK visitors. Pull the paper counterpart from the kitchen drawer before flying.",
			},
			{
				title: 'Verify Category A on your UK licence (for scooters)',
				text: "A UK car licence does NOT authorise riding a motorbike or scooter in Thailand. Category A endorsement (motorcycle) is required. Check the back of your photocard for the entitlement codes. If only B is listed, scooter rental in Phuket / Chiang Mai / Koh Samui is technically illegal from the first metre — and insurance is voided in any motorbike accident regardless of fault.",
			},
			{
				title: 'Print IDP Companion before flying',
				text: 'Print on standard paper at home or from any Thai hotel after arrival. Police checkpoints and rental desks expect physical paper alongside the physical UK licence. Phone screens are unreliable in Thai tropical light and patchy data coverage on rural routes.',
			},
			{
				title: 'Carry the full document set in one folder',
				text: 'Physical UK photocard + paper counterpart + IDP Companion (printed) + UK passport with Thai entry stamp + rental agreement + rental insurance card. One folder, easily reached at any checkpoint. Digital photos of documents are routinely refused at Thai roadside checkpoints.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Thailand — honestly',
		lead: 'Thailand requires an IDP by law. We\'re going to be direct about what IDP Companion does and doesn\'t do.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your UK licence data into English, French, Spanish, Arabic, German, Italian, Portuguese and 4 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to make the UK licence verifiable at Thai rental desks and Royal Thai Police checkpoints — English is the operational language in tourist corridors',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not valid by itself — must be carried alongside your physical UK driving licence (both photocard AND paper counterpart)',
				'Not a motorcycle endorsement for a UK licence that doesn\'t already carry Category A — IDP Companion reflects what\'s on your licence, not what isn\'t',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Thailand',
			items: [
				'At every rental desk — Hertz, Avis, Sixt, Budget at BKK, DMK, HKT, CNX airports, plus local agencies',
				'At Royal Thai Police checkpoints in tourist corridors (Phuket, Chiang Mai, Pattaya) — English on the IDP Companion is read fluently by officers',
				'When rental insurance documentation is reviewed after an accident — English translation establishes licence validity for the claim',
				'When a Bangkok / Chiang Mai rental agent flags the photocard-without-counterpart issue, the IDP Companion plus the licence set bridges the gap',
			],
		},
		needOfficial: {
			title: 'Documents Thai law actually requires',
			items: [
				'Your physical UK photocard licence (both photocard AND paper counterpart) — the actual permission to drive',
				'UK passport with valid Thai entry stamp (visa) — checked at police stops alongside driving documents',
				'For scooters: a UK licence that already carries Category A (motorcycle) — IDP Companion reflects it but cannot create it',
				'Rental agreement and insurance certificate — provided by rental company',
			],
		},
		pattern:
			"What prepared UK travellers in Thailand actually carry: photocard + paper counterpart + IDP Companion (printed) + passport with Thai entry stamp + rental contract + insurance card. The translation companion is the document that activates rental insurance coverage. Two minutes of preparation, $35, removes the document issue from every Thai rental desk and police checkpoint — and protects the insurance you already paid for.",
	},

	renting: {
		heading: 'Renting a car in Thailand as a UK driver',
		lead: 'Major chains uniformly enforce the IDP requirement. Local scooter shops typically don\'t — but the police checkpoint after the rental does, and insurance is voided either way without proper documentation.',
		chains: [
			{ name: 'Hertz Thailand', policy: 'Operates at Suvarnabhumi (BKK), Don Mueang (DMK), Phuket (HKT), Chiang Mai (CNX) airports. IDP required at pickup alongside UK licence. Minimum age 21; under-25 surcharge' },
			{ name: 'Avis Thailand', policy: 'Similar requirements at major airport locations. IDP and national licence required. Credit card mandatory for security deposit' },
			{ name: 'Sixt Thailand', policy: 'IDP required. Minimum age 21. Available at BKK and HKT airports' },
			{ name: 'Local agencies (Chiang Mai, Phuket, Koh Samui)', policy: 'Practices vary significantly. Many smaller agencies in tourist areas don\'t ask for IDP at the desk. This does not exempt the driver from the legal requirement or activate insurance coverage — police checkpoints on routes out of Chiang Mai, Phuket, and Koh Samui do check' },
		],
		tipsHeading: 'Practical tips for Thailand',
		tips: [
			'Minimum age 21 at major agencies; some require 23 for SUVs and larger vehicles; hold licence at least 2 years',
			'Automatic transmission standard at international agencies; manual available and cheaper at local operators',
			'Traffic in Bangkok is dense and chaotic — most visitors skip driving in the capital and use Grab',
			'Chiang Mai is the most practical city for independent driving — manageable traffic, clear roads north to Doi Inthanon and Pai',
			'Credit card deposit THB 5,000–15,000 (~£110–330) standard; debit cards not accepted at major chains',
			'Fuel: Thailand uses petrol (benzine) and LPG; E20 (20% ethanol blend) common and clearly marked — check rental agreement for approved fuel grade',
			'Driving at night outside cities carries genuine risk — unmarked road hazards, unlighted motorbikes without reflectors, and speed bumps that appear without warning',
			'UK drivers: left-hand traffic same as home — no side-of-road adjustment; the additional density of motorbikes in every lane is the change to anticipate',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: 'Realistic outcomes for UK drivers in Thailand, ranked by likelihood.',
		items: [
			{
				severity: 'low',
				frequency: 'Common with IDP',
				label: 'Smooth rental, clean drive',
				text: 'Full documentation presented at desk, rental and insurance active, no checkpoint friction. Expected outcome.',
			},
			{
				severity: 'med',
				frequency: 'Common without IDP',
				label: 'Rental refused at airport agency',
				text: 'Most BKK / HKT / CNX airport agencies enforce the IDP requirement. Reservation not honoured. Standing at the desk while the queue moves past you.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Checkpoint stop, documentation questioned',
				text: 'THB 500–1,000 fine; delay of 15–30 minutes; extended document check. The fine is small. The next item is not.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Minor accident, no valid IDP',
				text: 'Insurance void. Direct liability for vehicle damage, third-party costs, medical costs. Roadside negotiation in Thai. A scratched-bumper-equivalent in Phuket without insurance starts at figures bearing no relationship to the THB 1,000 fine.',
			},
			{
				severity: 'high',
				frequency: 'Occasional',
				label: 'Scooter rental without Category A endorsement + no IDP',
				text: 'Police checkpoints in Phuket / Koh Samui / Chiang Mai enforce category requirement. Insurance void; criminal liability if accident occurs and rider lacks endorsement.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI stop over 0.05% BAC',
				text: 'THB 2,000–50,000 fine; up to 1 year imprisonment under Road Traffic Act §43; licence confiscation. Songkran (April) is a particularly active enforcement period.',
			},
		],
		math: 'IDP Companion is $35 (~£28). Thai rental insurance costs £8–20/day. Without valid documentation, that £8–20/day premium covers nothing. A post-accident cash settlement in Chiang Mai for a minor scooter collision starts at figures that don\'t resemble any of the above. Preparation costs less.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Does Thailand legally require a UK driver to have an IDP?',
				answer: 'Yes. Thailand is a signatory to the 1949 Geneva Convention on Road Traffic and requires foreign tourists to carry a valid IDP alongside their national driving licence. Legal requirement, not a rental company policy.',
			},
			{
				id: 2,
				question: 'The fine for not having one is only THB 1,000 — why does it matter?',
				answer: 'The fine is low. The insurance consequence is not. Rental agreements across Thailand condition coverage on valid documentation. In the event of any accident — including a minor collision — insurance is void without proper documentation. All costs fall directly to the driver.',
			},
			{
				id: 3,
				question: "What's the motorcycle situation in Thailand?",
				answer: "A UK car licence does not authorise riding a motorbike in Thailand. A motorcycle endorsement (Category A on your UK licence) is required, plus the IDP must be present. Many scooter rental shops in tourist areas don't verify this — police checkpoints in Phuket, Koh Samui, and Chiang Mai do. Insurance is also voided for riders without the correct licence category.",
			},
			{
				id: 4,
				question: 'Do I need to bring both parts of my UK licence?',
				answer: "Yes. The UK photocard driving licence consists of two parts: the photocard itself AND the paper counterpart. Thai rental agencies and police may ask to see both. Travelling with only the photocard is a common cause of rental desk problems for UK visitors.",
			},
			{
				id: 5,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: "No. A government-issued IDP is a formal booklet issued under the 1949 Geneva Convention by an authorised UK issuer. IDP Companion is a private multilingual translation document presenting your UK licence details in English plus 10 other widely-spoken languages from the 1949 Geneva Convention set — used alongside your licence and government IDP where required.",
			},
			{
				id: 6,
				question: 'Can I drive a hired car from Thailand into Malaysia or Laos?',
				answer: "Cross-border driving in a rental vehicle requires explicit written permission from the rental company and additional insurance documentation. Most standard rental agreements explicitly exclude cross-border travel. Verify in writing before booking if you plan a multi-country road trip.",
			},
			{
				id: 7,
				question: 'Is Bangkok worth driving in?',
				answer: "Most experienced Thailand travellers say no. Traffic density in central Bangkok is extreme, parking is limited and expensive, and Grab taxis are reliable, inexpensive, and eliminate every documentation and parking problem simultaneously. Renting a car makes sense outside Bangkok — for Chiang Mai, the north, Khao Yai, or the coastal routes near Hua Hin and Koh Samui.",
			},
			{
				id: 8,
				question: "What's the alcohol enforcement like in Thailand?",
				answer: "Checkpoints with breathalysers are common on weekend nights and during Thai public holidays (Songkran in April is a particularly active enforcement period). The BAC limit is 0.05% — lower than England (0.08%) and equal to Scotland (0.05%). DUI carries criminal charges under Road Traffic Act §43, with fines up to THB 50,000 and up to one year imprisonment.",
			},
			{
				id: 9,
				question: 'Do UK drivers have any advantage over US/EU drivers in Thailand?',
				answer: 'Yes — left-hand traffic. Thailand drives on the left, same as the UK. The day-one adjustment that catches Americans, Germans, French, and Spanish visitors doesn\'t apply. Lane logic and roundabout direction are identical. The change to anticipate is the density of motorbikes in every lane, not the side of the road.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Thailand trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic UK licence — if your UK licence expires, the companion expires with it. One purchase covers Thailand plus Spain, Greece, Portugal, Morocco, Turkey, UAE and any other destination during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Thailand-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'es', label: 'UK → Spain', status: 'Live', href: '/idp-for-uk-drivers-in-spain' },
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal' },
			{ flagFrom: 'gb', flagTo: 'ae', label: 'UK → UAE', status: 'Live', href: '/idp-for-uk-drivers-in-uae' },
			{ flagFrom: 'us', flagTo: 'th', label: 'US → Thailand', status: 'Live', href: '/idp-for-us-drivers-in-thailand' },
			{ flagFrom: 'gb', flagTo: 'id', label: 'UK → Indonesia', status: 'Live', href: '/idp-for-uk-drivers-in-indonesia' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including English, French, Spanish, Arabic and 7 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real UK licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Thailand, Spain, Greece, Portugal, Morocco, Turkey, UAE. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Royal Thai Police, the Department of Land Transport (DLT), or the Thai Ministry of Transport. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office). IDP Companion must be used alongside your original UK driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Thailand Road Traffic Act B.E. 2522 (amended B.E. 2562) — Thai Department of Land Transport (dlt.go.th)',
			'Royal Thai Police — traffic enforcement and IDP requirements, 2025',
			'Thai Department of Land Transport (DLT) — foreign driving licence recognition policy',
			'FCDO Thailand travel advice (gov.uk/foreign-travel-advice/thailand)',
			'Hertz Thailand rental conditions (hertz.co.th, updated January 2026)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Thailand',
	},
};

export const ukThailandCopy: Record<'en', CountryPairCopy> = { en };
