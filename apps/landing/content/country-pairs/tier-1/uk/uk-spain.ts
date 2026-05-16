/**
 * Country-pair content: United Kingdom → Spain.
 * Locales: en only. (RU/ES intentionally skipped — UK origin audience.)
 *
 * Unique angle: post-Brexit recognition splits UK photocard (legally OK)
 * vs old paper licence (still requires IDP). Plus Madrid/Barcelona ZBE
 * low-emission zones, post-2021 UK sticker requirement, radar detector
 * prohibition. The legal answer is clean for photocard holders — the
 * practical friction is in independent rental agencies, ZBE stickers,
 * and the headlamp deflector requirement for right-hand-drive UK cars.
 *
 * SEO add-ons present: tldr (3-row exception — photocard/paper split is
 * informational, not competitor), lez (Madrid/Barcelona ZBE + Algarve-style
 * speed-camera transitions), howTo, lastReviewed.
 * NO alphabet block (Spanish is Latin). NO phrases block (English universal
 * at every Spanish rental desk; phrases not differentiating).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Spain: 2026 Photocard vs Paper Guide',
		description:
			"UK photocard licence accepted in Spain — no IDP legally required. But paper licences need one, ZBE stickers catch unprepared rental cars, and radar detector apps cost €500. Honest 2026 guide.",
		ogTitleShort: 'UK Drivers in Spain: IDP Guide 2026',
		ogSubtitle: 'Paper licence? You need one. Photocard? Mostly fine.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Spain',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'UK → Spain · 2026 Guide',
		title: 'IDP for UK Drivers in Spain: Photocard vs Paper Licence Rule',
		lead: "The DGT camera on the A-7 between Málaga and Marbella doesn't distinguish between a UK photocard and a paper licence. It records your plate, calculates your speed, and posts the fine to the rental company within 72 hours. Speeding above the 120 km/h motorway limit costs €100–600 with 50% off if paid in 20 days — a discount that requires actually receiving the notice (which goes to the agency, which charges your card). The licence question in Spain sits slightly differently: UK photocard holders don't legally need an IDP for tourist stays, confirmed by the post-Brexit agreement. What that agreement doesn't cover is the paper-licence holder who arrives at an Alicante desk having read the wrong forum post from 2023, or the Madrid ZBE camera that fines the rental for missing a sticker.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: "No for photocard, yes for paper licence — the post-Brexit deal split the answer",
		text: "UK photocard licence holders can drive in Spain for short tourist stays without an IDP, confirmed by the post-Brexit agreement between the UK and EU. UK paper licences (old green or pink) are NOT covered — IDP legally required. Same for Crown Dependencies (Guernsey, Jersey, Isle of Man) and Gibraltar licences. Either way, a Spanish-translated companion document removes friction at smaller rental agencies that run their own checklists and at Madrid/Barcelona ZBE entry-camera stops.",
	},

	tldr: {
		heading: 'UK Licence alone vs IDP Companion in Spain',
		lead: 'The answer splits by licence type, not by country. Photocard holders are legally fine. Paper licence holders need an IDP. A multilingual translation companion covers both at the rental desk.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Spain',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Licence (alone)',
				whatItDoes: 'Valid for tourist driving — recognised under post-Brexit agreement for stays up to six months. Accepted at major rental desks (Hertz, Avis, Sixt, Europcar) at all Spanish airports and most international chains without supplementary documentation.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'UK Paper Licence (alone)',
				whatItDoes: 'Not sufficient — paper licences (pre-1998 green or pink) are NOT covered by the post-Brexit recognition. Rental companies refuse without an IDP. Same applies to Crown Dependencies (Guernsey, Jersey, Isle of Man) and Gibraltar licences.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in Spanish, English, French, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set. Covers both photocard and paper licence holders at independent rental desks (Alicante, Benidorm, Canary Islands) where translation documents are listed in booking conditions. Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Spain: original UK licence (photocard preferred — both photocard AND paper counterpart) + passport + rental agreement + vehicle insurance. UK sticker required on rear of UK-registered vehicles since Sept 2021 (GB no longer valid). Headlamp beam deflectors required for RHD UK cars driving in Spain.",
	},

	whyNotEnough: {
		heading: 'Why your licence situation in Spain is more nuanced than you think',
		lead: "The legal position is clear. The practical position depends on which licence you're holding and where you're picking up the car.",
		reasons: [
			{
				icon: 'mdi:file-document-outline',
				title: 'The paper licence gap',
				text: "The post-Brexit arrangement confirmed in 2020 covers modern UK photocard licences. It does NOT cover old paper licences — green or pink ones issued before 1998. If you're the named driver on a rental with a paper licence, an IDP is legally required and rental companies will ask for it. This catches more travellers than forums suggest, particularly older drivers and anyone who hasn't updated their licence in years.",
			},
			{
				icon: 'ph:flag-bold',
				title: 'The Crown Dependencies / Gibraltar gap',
				text: 'Licences issued in Gibraltar, Guernsey, Jersey and the Isle of Man are NOT mainland UK licences and not always covered by the same post-Brexit recognition. Some rental companies treat them identically; others don\'t. If your licence was issued in any of these territories, carry an IDP or translation document and avoid the desk conversation.',
			},
			{
				icon: 'ph:storefront-bold',
				title: 'The independent rental agency reality',
				text: 'Even for photocard holders, some rental agencies — particularly smaller independent operators in the south and on the Canary Islands — include a translation document or IDP in their booking conditions. The legal position is clear; the agency contract is a private agreement. A Spanish-language presentation of your licence details closes that gap before it opens at the desk.',
			},
		],
	},

	rules: {
		heading: 'Spain driving rules UK drivers should know',
		lead: 'Right-hand traffic is the day-one adjustment. Required equipment (warning triangles, reflective jackets) and the new 2022 Ley de Tráfico are the operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Opposite to UK; first roundabout is the moment it clicks' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in residential streets (2022 update); 20 km/h in shared zones' },
			{ icon: 'mdi:road-variant', label: 'Open road', value: '90 km/h', note: 'Single carriageways' },
			{ icon: 'mdi:speedometer-medium', label: 'Dual carriageway', value: '100 km/h', note: '' },
			{ icon: 'mdi:speedometer-slow', label: 'Motorway (autopista/autovía)', value: '120 km/h', note: '~75 mph' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.03% for new and professional drivers' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: '€200 + 3 points for handheld; radar detector apps illegal (€500 + tow)' },
			{ icon: 'mdi:car-emergency', label: 'Required in vehicle', value: '2 triangles + jacket', note: 'Reflective jacket per occupant; must be in cabin not boot' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Most fines carry a 50% discount if paid within 20 days. Police can issue on-the-spot fines payable immediately or at a post office. Speed camera fines go to the rental company and are charged to your card via the rental agreement.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding 1–20 km/h over', amount: '€100', note: '50% discount if paid within 20 days', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 21–40 km/h over', amount: '€200–300', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 41–70 km/h over', amount: '€400–500 + points', note: '', severity: 'high' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 70+ km/h over', amount: '€600 + 6 points', note: 'Criminal threshold possible', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '€200 + 3 points', note: 'Actively enforced 2025–2026', severity: 'med' },
			{ icon: 'mdi:radar', label: 'Speed camera detector device or app', amount: '€500 + vehicle tow', note: 'Zero tolerance — possession alone', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€200', note: 'Per person; driver liable for under-16 passengers', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: '€500–1,000', note: 'Above 0.12% — criminal offense; licence suspension', severity: 'high' },
			{ icon: 'mdi:safety-goggles', label: 'No reflective jacket in cabin', amount: '€200', note: 'Must be accessible in cabin, not boot', severity: 'med' },
			{ icon: 'mdi:tag-outline', label: 'Entering ZBE without sticker', amount: '€90–500', note: 'Madrid and Barcelona; rental cars usually have it — verify', severity: 'med' },
		],
		caption: 'Sources: Spain DGT (Dirección General de Tráfico), Ley de Tráfico 18/2021 (in force from 2022); Hertz Spain rental terms; Madrid Ayuntamiento ZBE requirements; FCDO Spain travel advice (gov.uk/foreign-travel-advice/spain).',
	},

	lez: {
		heading: 'Spain enforcement zones — ZBE, speed-camera transitions, headlamp law',
		badge: 'Spain-specific',
		lead: 'Three operational realities catch UK visitors more often than the documentation question. None require complex prep — just awareness.',
		zones: [
			{
				city: 'Madrid (Zona de Bajas Emisiones) + Barcelona (Zona de Baixes Emissions)',
				name: 'ZBE low-emission zones — sticker required',
				description: 'Madrid and Barcelona restrict access for higher-emission vehicles; cars without a valid DGT environmental sticker (Distintivo Ambiental — A, B, C, ECO, ZERO) face fines for entry. Cameras at zone entries automatically detect plates. Rental cars typically have the correct sticker — but confirm with the agency at pickup. Privately brought UK cars without the sticker risk fines on every entry. The zones cover central Madrid and central Barcelona, including most tourist destinations.',
					fine: '€90–500 per entry',
					note: 'If your itinerary includes driving into central Madrid or Barcelona, ask the rental agent specifically: "Does this car have the Distintivo Ambiental sticker for the ZBE?"',
			},
			{
				city: 'A-7 / N-340 Costa del Sol approach roads',
				name: 'Speed-limit transitions on tourist routes',
				description: "Coastal routes from Málaga toward Marbella, Estepona and Algeciras transition speed limits frequently — 120 km/h motorway drops to 100, then 80, then 50 entering town centres. Fixed cameras catch UK drivers used to the UK's informal 10% tolerance. The DGT enforces calibrated to the posted limit, not a tolerance threshold.",
					fine: '€100–600 + points',
					note: '50% discount if paid within 20 days — but the discount requires receiving the notice, which goes to the rental agency, which charges your card.',
			},
			{
				city: 'Right-hand-drive UK vehicles entering Spain',
				name: 'Headlamp beam deflectors + UK sticker',
				description: 'Right-hand-drive UK cars require headlamp beam deflectors (adhesive stickers or manual beam adjustment) to avoid blinding oncoming traffic. Required by Spanish law. Plus: UK-registered vehicles need a UK sticker on the rear bumper (the old GB sticker has been invalid since Sept 2021). Both are checked at random roadside stops on the AP-7 toll motorway near the French border.',
					fine: 'Variable',
					note: 'Available at Eurotunnel/ferry terminal shops and Halfords. Cheap, simple, prevents a roadside problem.',
			},
		],
		tip: 'Practical rule for Spain: photocard-holder UK drivers get one of the cleanest legal positions in Europe post-Brexit. The friction sits in three places — paper-licence holders, ZBE stickers in Madrid/Barcelona, and the radar detector ban. None of these are about IDP. All resolve before you fly.',
	},

	howTo: {
		heading: 'How to prepare for driving in Spain as a UK citizen',
		lead: "The legal answer for photocard holders is short. The preparation that matters is everything else — vehicle equipment, ZBE stickers, paper-licence exception.",
		schemaName: 'How to prepare for driving in Spain as a UK citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Verify your licence type — photocard vs paper',
				text: "Photocard holders: post-Brexit deal covers you, no IDP legally required. Paper licence holders (old green or pink, pre-1998): IDP is legally required. If you've not updated your licence in 25+ years, get the IDP. Crown Dependencies / Gibraltar licences: also need IDP — recognition is more limited.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your UK licence into Spanish, English, French, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set. Useful for paper licence holders (legally needed alongside the licence), and for photocard holders at smaller independent agencies in Alicante, Benidorm or the Canary Islands that include a translation document in their booking terms.',
			},
			{
				title: 'Confirm ZBE sticker on rental car if visiting Madrid or Barcelona',
				text: 'Rental cars from major chains (Hertz, Avis, Sixt, Europcar) usually come with the Distintivo Ambiental DGT environmental sticker — but ask specifically at pickup. Privately brought UK cars almost never have it. Without the sticker, every entry into central Madrid or Barcelona ZBE triggers a €90–500 fine via automatic plate-recognition cameras.',
			},
			{
				title: 'Add headlamp beam deflectors + UK sticker (if RHD UK car)',
				text: "If you're bringing your own UK car (not renting), fit headlamp beam deflectors before crossing the Channel. Adhesive stickers cost £5–15 from Halfords or the Eurotunnel terminal shop. UK sticker on rear bumper is mandatory since Sept 2021 — old GB sticker is invalid. Both required by Spanish law; checked at random roadside stops.",
			},
			{
				title: 'Disable radar detector apps before driving',
				text: "Spain prohibits any device that searches for speed cameras or interferes with police equipment. This includes Waze, Google Maps and Apple Maps with active speed-camera-alert features turned on. Disable the speed-camera alert layer in your nav app before driving in Spain. Hardware radar detectors are zero-tolerance — €500 fine and vehicle tow.",
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Spain — honestly',
		lead: 'Spain post-Brexit is one of the cleanest legal cases in this guide for UK photocard holders. We\'ll be direct about where IDP Companion adds value and where it doesn\'t.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your UK licence data into Spanish, English, French, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to cover paper licence holders (where IDP is legally required) and photocard holders at smaller independent agencies that include translation requirements in their booking conditions',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention — not legally required for UK photocard holders in Spain',
				'Not valid by itself — must be carried alongside your physical UK licence',
				'Not a substitute for the ZBE sticker, headlamp deflectors, reflective jacket, or other vehicle equipment Spanish law requires',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Spain',
			items: [
				'Paper licence holders: provides Spanish translation alongside the licence — legally required',
				'Photocard holders: when a smaller independent agency in Alicante, Benidorm or Canary Islands includes a translation document in their booking conditions',
				'At Guardia Civil checkpoints where a Spanish-language presentation of your licence details speeds the interaction',
				"If your trip combines Spain with Morocco (where IDP is legally required for UK drivers crossing from Tarifa) — one purchase covers both",
			],
		},
		needOfficial: {
			title: 'Documents Spanish law actually cares about',
			items: [
				"Your physical UK photocard licence — the actual permission to drive (or paper licence + IDP if paper)",
				'UK passport — checked at any document review',
				'Rental agreement and insurance — provided by the rental company',
				'For UK-registered private vehicles: UK sticker (post-Sept 2021), headlamp beam deflectors, reflective jacket per occupant in cabin, 2 warning triangles',
			],
		},
		pattern:
			"What prepared UK travellers in Spain actually carry: photocard licence (or paper + IDP) + passport + rental agreement + insurance card. For driving into Madrid or Barcelona: confirm ZBE sticker on the rental at pickup. For bringing UK car: deflectors + UK sticker before the ferry. IDP Companion is a friction-reducer, not a legal necessity for photocard holders — but it's a no-brainer for paper-licence holders and trip-extenders to Morocco / Turkey / wider non-EU destinations.",
	},

	renting: {
		heading: 'Renting a car in Spain as a UK driver',
		lead: 'Major rental chains process UK photocards without comment. Independent agencies in tourist hotspots are where the friction concentrates.',
		chains: [
			{ name: 'Hertz Spain', policy: 'Accepts UK photocard without IDP. Paper licences require IDP. Available at all major airports (Madrid, Barcelona, Málaga, Alicante, Valencia, Bilbao, Seville, Palma). Minimum age 21; young driver surcharge under 25' },
			{ name: 'Avis Spain', policy: 'Same photocard policy. Credit card required for deposit. Minimum 1 year licence held' },
			{ name: 'Sixt Spain', policy: 'Photocard accepted. Paper licence requires IDP. Minimum age 21; some vehicles require 25' },
			{ name: 'Europcar Spain', policy: 'Consistent policy — photocard accepted, paper requires IDP' },
			{ name: 'Smaller independent agencies (Alicante, Benidorm, Canary Islands)', policy: 'Variable. Some request an IDP or translation document even from photocard holders. Check booking conditions in advance — not at the desk' },
		],
		tipsHeading: 'Practical tips for Spain',
		tips: [
			'Automatic transmission widely available but more expensive; book in advance — manual is the default',
			'Minimum age 21 across major agencies; some require 23 for SUVs and larger vehicles',
			'Credit card required for deposit; debit cards not accepted at major chains',
			'Tolls (peaje): Spain has extensive motorway tolls — confirm with agency whether transponder is included or whether you pay cash/card at booth',
			'Fuel: gasolina (petrol) and diesel clearly labelled; most service stations card-only or card-first; check if rental requires 95 or 98 octane',
			'Parking in cities: blue lines = pay-and-display; yellow = no parking; Madrid and Barcelona have paid-parking enforcement cameras',
			'DGT environmental sticker (Distintivo Ambiental): rental cars usually have it; verify if driving into central Madrid or Barcelona ZBE',
			'UK-registered vehicles brought to Spain: UK sticker on rear bumper (since Sept 2021; GB invalid), headlamp beam deflectors mandatory for RHD',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes',
		lead: 'Realistic outcomes for UK drivers in Spain, ranked by likelihood.',
		items: [
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Photocard, smooth pickup, clean drive',
				text: 'Standard tourist experience — no documentation friction, ZBE sticker present, fine-free drive. Most Spain trips end this way.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Photocard, agency requests translation',
				text: 'Some independent agencies (especially Canary Islands and rural Costa Blanca) require it as private-contract policy. IDP Companion covers this.',
			},
			{
				severity: 'high',
				frequency: 'Common without IDP',
				label: 'Paper licence, rental refused',
				text: "Paper licence holders regularly turned away — no major agency releases the car. A government IDP must be obtained back home before departure; it cannot be issued from Spain.",
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Speed camera fine',
				text: 'Charged to rental deposit, starts €100. 50% discount if paid in 20 days but practically unrecoverable for foreign drivers when the notice goes to the agency.',
			},
			{
				severity: 'med',
				frequency: 'Less common',
				label: 'ZBE entry without sticker (Madrid/Barcelona)',
				text: 'Automatic plate-recognition camera triggers fine €90–500. Per entry. Adds up fast on a multi-day Madrid stay if you don\'t notice.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI stop over 0.05% BAC',
				text: '€500–1,000 fine; criminal above 0.12% BAC. Active enforcement on weekend nights at Costa del Sol checkpoints.',
			},
		],
		math: 'IDP Companion is $35. Paper licence rental refusal at Alicante means rebooking + last-minute alternatives — minimum half-day lost, hundreds of pounds in re-arranged plans. ZBE fines stack at €90–500 per entry into central Madrid or Barcelona. The €4 toll on the AP-7 saves a €400 fine on the N-340 alternate. Preparation costs less.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I need an IDP to drive in Spain with a modern UK photocard licence?',
				answer: 'No. The post-Brexit agreement between the UK and EU recognises modern UK photocard licences for short tourist visits in Spain without requiring an IDP. Confirmed by GOV.UK and remains in force as of 2026.',
			},
			{
				id: 2,
				question: 'What about an older paper UK licence?',
				answer: 'Paper licences — the old green or pink versions — are not covered by the post-Brexit recognition arrangement. If you hold a paper licence, an IDP is legally required for driving in Spain. Rental companies will not accept a paper licence alone.',
			},
			{
				id: 3,
				question: 'My licence was issued in Guernsey/Jersey/Isle of Man — does that change things?',
				answer: 'Yes. Licences from the Crown Dependencies (and Gibraltar) are not treated identically to mainland UK licences under Spanish post-Brexit recognition. Carry an IDP or translation document if your licence was issued in any of these territories.',
			},
			{
				id: 4,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government-issued IDP is a formal document issued under the 1949 Geneva Convention by an authorised UK issuer. IDP Companion is a private multilingual translation document presenting your licence details in Spanish, English, French and 8 other widely-spoken languages from the 1949 Geneva Convention set — used alongside your licence, not as a substitute for a formal IDP where one is legally required.',
			},
			{
				id: 5,
				question: 'What is the low-emission zone (ZBE) situation in Spain?',
				answer: 'Madrid and Barcelona operate low-emission zones (Zona de Bajas Emisiones / Baixes Emissions) that restrict access for higher-emission vehicles. Vehicles without a valid DGT environmental sticker (Distintivo Ambiental — A, B, C, ECO, ZERO) face fines if they enter. Cameras at zone perimeters automatically detect plates. Rental cars should have the correct sticker — confirm with the agency at pickup if your itinerary includes central Madrid or Barcelona.',
			},
			{
				id: 6,
				question: 'Can speed camera fines from Spain follow me back to the UK?',
				answer: "Yes. An EU cross-border enforcement directive allows Spanish authorities to pursue traffic fines across EU member states. Although the UK has left the EU, rental companies are legally required to provide driver information to Spanish authorities when requested. Fines issued to the rental company are charged to your card regardless of where you are.",
			},
			{
				id: 7,
				question: 'Is right-hand driving a real adjustment for UK drivers in Spain?',
				answer: 'Yes, more than people expect. The first few junctions and roundabouts after the airport are the highest-risk moments. Most drivers recalibrate within an hour. The specific hazard for right-hand-drive UK vehicles in Spain is headlamp beams angled toward oncoming traffic — deflector stickers or manual beam adjustment are legally required.',
			},
			{
				id: 8,
				question: 'Are radar detector apps legal in Spain?',
				answer: 'No. Speed camera detector apps and radar detection hardware are illegal in Spain. Police can fine you €500 for having one active and may also tow the vehicle. Disable speed-camera alert layers in Waze, Google Maps or Apple Maps before driving in Spain. Remove or switch off any hardware devices entirely.',
			},
			{
				id: 9,
				question: 'What is the UK sticker rule and does it apply when renting a Spanish-registered car?',
				answer: "The UK sticker rule (replacing the old GB sticker since Sept 2021) applies only to UK-registered vehicles driven outside the UK. If you're renting a Spanish-registered car in Spain, no sticker question. If you're driving your own UK-registered car across to Spain via Channel ferry / Eurotunnel: UK sticker mandatory on the rear bumper.",
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Spain trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic UK licence — if your UK licence expires, the companion expires with it. One purchase covers Spain plus Greece, Portugal, Morocco, Turkey, Thailand and any other destination during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Spain-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'it', label: 'UK → Italy', status: 'Live', href: '/idp-for-uk-drivers-in-italy' },
			{ flagFrom: 'gb', flagTo: 'fr', label: 'UK → France', status: 'Live', href: '/idp-for-uk-drivers-in-france' },
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece' },
			{ flagFrom: 'gb', flagTo: 'pt', label: 'UK → Portugal', status: 'Live', href: '/idp-for-uk-drivers-in-portugal' },
			{ flagFrom: 'gb', flagTo: 'is', label: 'UK → Iceland', status: 'Live', href: '/idp-for-uk-drivers-in-iceland' },
			{ flagFrom: 'us', flagTo: 'es', label: 'US → Spain', status: 'Live', href: '/idp-for-us-drivers-in-spain' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including Spanish, English, French, German, Italian, Portuguese and 5 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real UK licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Spain, Portugal, Greece, Morocco, Turkey, Thailand. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with Spain's Dirección General de Tráfico (DGT) or the Guardia Civil. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office). IDP Companion must be used alongside your original UK driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Spain DGT — Ley de Tráfico 18/2021; fine schedule 2026 (dgt.es)',
			'GOV.UK — Driving in Spain; post-Brexit driving requirements (gov.uk/foreign-travel-advice/spain)',
			'FCDO Spain travel advice (updated January 2026)',
			'Madrid Ayuntamiento — ZBE Zona de Bajas Emisiones requirements (madrid.es)',
			'Hertz Spain rental terms (hertz.es, updated 2025)',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Spain',
	},
};

export const ukSpainCopy: Record<'en', CountryPairCopy> = { en };
