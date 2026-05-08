/**
 * Country-pair content: United Kingdom → Cyprus.
 * Locales: en only.
 *
 * Unique angle: easiest documentation situation in Europe for UK drivers
 * (left-hand traffic, post-colonial driving culture, bilingual road signs).
 * What catches them is operational: red rental plates that flag tourists
 * to police, a 15-day fine payment window that escalates 50% if missed,
 * BAC limit expressed in breath units (22 µg/100ml ≈ 0.05% BAC), and the
 * Northern Cyprus insurance gap at the Green Line.
 *
 * PDF language compliance (binding per CLAUDE.md): Greek is NOT in the
 * IDP Companion PDF template. All Greek-as-PDF-language claims removed.
 * Verification reframed through English — which IS in the PDF template
 * AND is widely spoken in Cyprus (post-colonial heritage; bilingual road
 * signs; English universal at all rental desks and tourist-area police
 * stops). The phrases block keeps Greek as in-country reference (what UK
 * driver might say to officers in Greek), NOT as PDF content claim.
 *
 * SEO add-ons present: tldr (3-row exception — photocard/paper informational),
 * lez (red plates / 15-day fine / Northern Cyprus zones), howTo, phrases
 * (Greek as in-country reference only), lastReviewed.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Cyprus: 2026 Fine Rule & Red Plates Guide',
		description:
			"UK photocard valid in Cyprus — no IDP legally required. Left-hand traffic same as home. But red rental plates flag you to police, fines escalate 50% after 15 days unpaid, and crossing into Northern Cyprus voids your insurance. Honest 2026 guide.",
		ogTitleShort: 'UK Drivers in Cyprus: IDP Guide 2026',
		ogSubtitle: 'Easy licence. The 15-day fine rule isn\'t.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Cyprus',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'UK → Cyprus · 2026 Guide',
		title: 'IDP for UK Drivers in Cyprus: The 15-Day Fine Rule & Red Plates',
		lead: "The first thing you notice driving out of Paphos Airport in a rental is that nothing feels wrong. Left-hand traffic, right-hand steering wheel, roundabouts that work exactly as they do on the A303. Cyprus drove on the left because the British built its roads, and forty years of colonial administration left a driving culture that feels more familiar to a UK visitor than driving in France or Spain ever does. The second thing you notice — if you're paying attention — is that your car has bright red number plates. Not white. Not yellow. Red, which in Cyprus means rental vehicle, which means every police officer on the Limassol coastal road can identify you from two hundred metres as a tourist who may not know the rules. The fines here are modest by European standards. But if you don't pay within fifteen days, they increase by fifty percent. And if you cross the Green Line checkpoint into Northern Cyprus in that rental car, you've just voided the insurance — most Cypriot rental agreements don't cover the north. The documentation for driving in Cyprus is the simplest UK travellers encounter anywhere. The rules around what you do with the car after you've picked it up are less simple.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: "No — UK photocard recognised. But the 15-day fine rule, breath-unit BAC limit, and Northern Cyprus insurance gap all matter",
		text: 'UK photocard licence holders can drive in the Republic of Cyprus for tourist visits without an IDP — confirmed by Cypriot transport authorities. UK paper licences are accepted but less consistently — some agencies request supplementary documentation. The three operational issues that actually catch UK drivers: fines must be paid via jccsmart.com within 15 days or escalate 50%, the BAC limit is expressed in breath units (22 µg/100ml for experienced drivers), and crossing the UN Buffer Zone into Northern Cyprus voids most rental insurance.',
	},

	tldr: {
		heading: 'UK Licence alone vs IDP Companion in Cyprus',
		lead: "Cyprus is the cleanest legal documentation case for UK photocard holders in Europe. The friction sits elsewhere — in fines, insurance boundaries, and what your rental car's red plates announce to police.",
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Cyprus',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Licence (alone)',
				whatItDoes: 'Valid for tourist driving in the Republic of Cyprus — no IDP legally required. Accepted at Hertz, Avis, Sixt, Europcar at Larnaca (LCA) and Paphos (PFO) airports. Most local agencies follow the same. NOT valid for driving north of the UN Buffer Zone in standard rental cars.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'UK Paper Licence (alone)',
				whatItDoes: 'Generally accepted, but some agencies prefer photocard. Older paper licence holders sometimes asked for supplementary documentation. Carry IDP or translation document as a precaution if holding pre-2000 paper licence.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in English, French, Spanish, German, Italian, Portuguese, Arabic and 4 other widely-spoken languages from the 1949 Geneva Convention set. English is the universal second language at every Cypriot rental desk and Police checkpoint in tourist areas. Useful for paper licence holders and trip-extenders combining Cyprus with UAE, Egypt, or Turkey where translation documentation is legally required. Issued in 2 minutes online.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry in Cyprus: original UK photocard licence, passport, rental agreement, vehicle insurance certificate, reflective jacket (legally required to carry, accessible from inside the cabin), warning triangle. UK sticker required on rear of UK-registered private vehicles. Do NOT cross into Northern Cyprus without verifying your rental insurance coverage in writing — most policies exclude the territory north of the UN Buffer Zone.',
	},

	whyNotEnough: {
		heading: 'Why Cyprus is simple on documentation and complex on three specific things',
		lead: 'Major chains follow the legal recognition uniformly. The friction sits in three operational realities that have no documentation fix.',
		reasons: [
			{
				icon: 'mdi:car-side',
				title: "The red plates situation",
				text: "Rental cars in Cyprus carry bright red number plates instead of the standard white-and-yellow used by private vehicles. This is a nationally standardised system that makes tourist rental cars immediately identifiable to police and other road users. It doesn't mean you'll be treated worse — Cypriot police are generally described as more lenient with tourists at minor infractions. It does mean you're visible in a way you're not when driving your own car at home. Drive accordingly.",
			},
			{
				icon: 'mdi:calendar-clock',
				title: 'The 15-day fine rule',
				text: 'Speed camera and other traffic fines in Cyprus must be paid within 15 days. The official payment portal is jccsmart.com — payment also accepted at local banks and police stations. If unpaid after 15 days, the fine increases by 50%. After a further 14 days, the case is referred to court. The rental company receives the fine notice and is legally required to provide your details to police — you receive correspondence at your UK home address. By the time it arrives, the 15-day window may already have closed.',
			},
			{
				icon: 'mdi:map-marker-off',
				title: 'The Northern Cyprus insurance gap',
				text: 'The island of Cyprus is divided by a UN Buffer Zone — the Green Line — separating the Republic of Cyprus (south) from the Turkish Republic of Northern Cyprus (north). Crossing between the two is possible at designated checkpoints. The problem: most car rental agreements in the Republic of Cyprus explicitly exclude coverage north of the Green Line. Driving a rental car into Northern Cyprus without specific authorisation voids your policy entirely. Some specialist insurers and a small number of rental companies offer cross-line coverage; verify in writing before crossing — not at the rental desk on collection day.',
			},
		],
	},

	rules: {
		heading: 'Cyprus driving rules UK drivers should know',
		lead: 'Left-hand traffic identical to UK. The BAC limit in breath units, radar detector ban, and intersection priority rules are the operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Same as UK; right-hand drive cars; roundabouts work identically' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '30 km/h in marked school and pedestrian zones' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '80 km/h', note: 'Standard non-motorway' },
			{ icon: 'mdi:speedometer-medium', label: 'Motorway (A1, A2)', value: '100 km/h', note: 'Maximum; 65 km/h minimum on motorways' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '22 µg/100ml breath', note: '~0.05% BAC for experienced drivers; 9 µg/100ml (~near zero) for <3 yrs experience and motorcyclists' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: '€150 + 1 point — including stationary at red lights with engine on' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: '€85 per person', note: 'Children <12 or <150 cm need appropriate child seats' },
			{ icon: 'mdi:radar', label: 'Radar detectors', value: 'Prohibited', note: 'Possession itself is an offence regardless of whether active' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Fines must be paid via jccsmart.com (online), at a local bank, or at a Cyprus Police station within 15 days. Unpaid after 15 days: fine increases 50%. Unpaid after a further 14 days: case referred to court. Speed camera tolerance: 10% above limit + 2 km/h before fine triggers in urban areas; 20% above limit on motorways.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (minor, up to 10% over urban limit)', amount: '€50–100', note: 'Camera-enforced; increases 50% if unpaid in 15 days', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (significant over limit)', amount: '€200–400+', note: 'Points accrued; court for serious cases', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone while driving', amount: '€150 + 1 point', note: 'Enforced including stationary at red lights with engine on', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '€85 per person', note: 'Driver liable for all passengers', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 22 µg/100ml breath (experienced)', amount: 'From €200', note: 'Suspension; criminal charges for serious cases', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 71 µg/100ml breath', amount: 'Court — up to €4,000', note: 'Up to 1 yr imprisonment; suspension; 4–8 points', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '€150–300', note: '', severity: 'med' },
			{ icon: 'mdi:parking', label: 'Parking on yellow lines', amount: '€100', note: 'Vehicle may be towed in urban areas', severity: 'low' },
			{ icon: 'mdi:radar', label: 'Radar detector possession', amount: 'Fine + confiscation', note: 'Zero tolerance — possession is itself an offence', severity: 'med' },
		],
		caption: 'Sources: Cyprus Police Traffic Department; Republic of Cyprus Ministry of Transport, Communications and Works; Secrental Cyprus fine guide (updated February 2026); jccsmart.com (official fine payment portal); FCDO Cyprus travel advice (last updated 2025).',
	},

	lez: {
		heading: 'Where the friction concentrates — red plates, fines, Green Line',
		badge: 'Cyprus-specific',
		lead: 'Cyprus has no LEZ system. The friction sits in three specific places that have no documentation fix.',
		zones: [
			{
				city: 'Anywhere on the road — red plates',
				name: 'Tourist visibility',
				description: 'Cypriot law requires rental vehicles to carry distinctive red licence plates instead of standard white/yellow plates. Police can identify rental cars from a distance. Most Cypriot officers extend more patience to tourists at minor infractions, but the visibility means you\'re more likely to be noticed if something is wrong — minor speed infraction, slow lane discipline, or a documentation question.',
				fine: 'No specific fine — visibility only',
				note: 'Practical implication: drive within posted limits, signal cleanly, and treat motorway lane discipline like a UK driving test. The plates make you findable — but they also mark you as a visitor who deserves slightly more patience.',
			},
			{
				city: 'Speed cameras (Limassol, Nicosia, motorways)',
				name: 'The 15-day payment window',
				description: 'Camera-issued fines go to the rental company, which provides your details to Cyprus Police. You receive correspondence at your UK home address — by which point the 15-day discount window may have closed. Pay via jccsmart.com (online), at a local Cypriot bank, or at a police station. After 15 days: fine increases 50%. After a further 14 days: court referral.',
				fine: '€50–400 (escalating)',
				note: 'Practical rule: if you receive correspondence at your UK address, log into jccsmart.com immediately and pay before the timestamp on the original notice + 15 days expires. Don\'t wait for "I\'ll deal with it later."',
			},
			{
				city: 'Green Line checkpoints (UN Buffer Zone)',
				name: 'Northern Cyprus insurance gap',
				description: 'Crossing into Northern Cyprus (Turkish Republic of Northern Cyprus) is possible at designated checkpoints. Most standard rental agreements in the Republic of Cyprus explicitly exclude coverage north of the Green Line. Driving a rental car there without specific authorisation voids your insurance entirely — accident, breakdown, or theft becomes personal liability. Some specialist insurers and a small number of rental companies offer cross-line coverage; verify in writing before crossing.',
				fine: 'No specific fine — insurance void',
				note: 'Practical rule: if you want to visit Northern Cyprus, take a tour bus or hire a separate Northern Cyprus rental on the other side of the checkpoint. Don\'t take your Republic of Cyprus rental across.',
			},
		],
		tip: 'Practical rule for Cyprus: photocard-holder UK drivers get the cleanest legal documentation position in Europe. The friction sits in three places that resolve before you arrive — verify rental insurance Northern Cyprus exclusion in writing, set a calendar reminder for the 15-day fine window if a notice arrives, and remember that the BAC limit in breath units (22 µg/100ml) is roughly equivalent to 0.05% BAC, stricter than England and Wales.',
	},

	howTo: {
		heading: 'How to prepare for driving in Cyprus as a UK citizen',
		lead: "The legal answer for photocard holders is short. The preparation that matters is everything else — fine-payment awareness, BAC limit conversion, and the Northern Cyprus boundary.",
		schemaName: 'How to prepare for driving in Cyprus as a UK citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Verify your licence type — photocard vs paper',
				text: "Photocard holders: Cyprus recognition covers you, no IDP legally required. Paper licence holders (old green or pink, pre-2000): generally accepted, but agencies sometimes prefer supplementary documentation. Carry an IDP or translation document as a precaution if you hold an older paper licence.",
			},
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your UK licence into English (the universal second language at every Cypriot rental desk and Police checkpoint in tourist areas — Cyprus has bilingual Greek-English road signage), plus French, Spanish, German, Italian, Portuguese, Arabic and 4 other widely-spoken languages from the 1949 Geneva Convention set. Useful for paper-licence holders and trip-extenders combining Cyprus with UAE, Egypt, or Turkey where translation documentation is legally required.',
			},
			{
				title: 'Verify Northern Cyprus insurance exclusion in writing',
				text: 'If your itinerary includes Northern Cyprus (Famagusta, Kyrenia, Karpaz peninsula): contact your rental agency before departure and request written confirmation of cross-Green Line coverage. Most standard policies explicitly exclude it. If denied, plan to either (a) not cross with the rental car or (b) hire a separate Northern Cyprus-side rental on arrival at the checkpoint.',
			},
			{
				title: 'Set a 15-day calendar reminder when fines arrive',
				text: 'If you receive Cypriot fine correspondence at your UK address after returning home: pay immediately via jccsmart.com. The 15-day window starts from the original notice date — not the date your UK postal arrival. After 15 days the fine increases 50%; after a further 14 days the case goes to court.',
			},
			{
				title: 'Convert BAC mentally before any drink-and-drive scenario',
				text: 'Cyprus expresses its limit in breath units: 22 µg/100ml ≈ 0.05% BAC for experienced drivers, stricter than England and Wales (0.08%) and equal to Scotland (0.05%). For drivers with <3 years experience or motorcyclists: 9 µg/100ml — effectively near-zero. Practical rule: one glass of wine is enough to approach 0.05% for most adults, particularly on an empty stomach. If you drank at dinner, take a taxi.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Cyprus — honestly',
		lead: 'Cyprus is the cleanest legal documentation case in Europe for UK photocard holders. We\'ll be direct about where IDP Companion adds value.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your UK licence data into English, French, Spanish, German, Italian, Portuguese, Arabic and 4 other widely-spoken languages from the 1949 Geneva Convention set',
				"English is the universal second language at every Cypriot rental desk and Police checkpoint in tourist areas — Cyprus's bilingual Greek-English signage culture means English-language documentation is read fluently across the island",
				'Designed to cover paper-licence holders (where supplementary documentation is sometimes requested) and trip-extenders combining Cyprus with UAE, Egypt, or Turkey',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention — not legally required for UK photocard holders in the Republic of Cyprus',
				'Not valid by itself — must be carried alongside your physical UK licence',
				'Not a substitute for the safety equipment Cypriot law requires (reflective jacket accessible from cabin, warning triangle)',
				'Not an insurance solution for Northern Cyprus — the Green Line crossing requires a separate written confirmation from your rental agency',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Cyprus',
			items: [
				'Paper licence holders: provides supplementary translation alongside the licence — handles the agencies that prefer additional documentation',
				'At Cypriot Police checkpoints in tourist areas: English on the IDP Companion is universally readable by officers across Larnaca, Limassol, Paphos, Ayia Napa, and Nicosia',
				'Trip extenders combining Cyprus with UAE, Egypt, or Turkey on the same itinerary — one purchase covers all of them',
				'As backup identification if your physical UK licence is lost or damaged mid-trip',
			],
		},
		needOfficial: {
			title: 'Documents Cypriot law actually cares about',
			items: [
				'Your physical UK photocard licence (or paper licence + supplementary documentation if older)',
				'UK passport — checked at any document review',
				'Rental agreement and insurance certificate — provided by rental company',
				'Reflective jacket (legally required to carry in vehicle, accessible from cabin — not from the boot) and warning triangle',
				'For Northern Cyprus crossing: written confirmation from your rental agency that cross-Green Line coverage is included — this requires a separate conversation, not a documentation fix',
			],
		},
		pattern:
			"What prepared UK travellers in Cyprus actually carry: photocard licence + passport + rental agreement + insurance card + reflective jacket in cabin. The Northern Cyprus question is a written-confirmation conversation with the rental company, not a document. The 15-day fine window is a calendar reminder. The BAC in breath units is a one-line mental conversion. IDP Companion is a friction-reducer for paper-licence holders and trip-extenders — not a legal necessity for photocard holders.",
	},

	renting: {
		heading: 'Renting a car in Cyprus as a UK driver',
		lead: 'Major chains process UK photocards uniformly. Local agencies in tourist areas (Paphos, Limassol, Ayia Napa) follow the same. The Northern Cyprus exclusion is the universal sticking point.',
		chains: [
			{ name: 'Hertz Cyprus', policy: 'Accepts UK photocard licence without IDP. Operates at Larnaca (LCA) and Paphos (PFO) airports. Minimum age 21; young driver surcharge under 25 at some categories. Credit card required for deposit. Northern Cyprus excluded from standard policy.' },
			{ name: 'Avis Cyprus', policy: 'Same photocard policy. Available at LCA and PFO. Minimum age 23 for standard vehicles at some locations. Northern Cyprus excluded.' },
			{ name: 'Sixt Cyprus', policy: 'Photocard accepted. Minimum age 21. Northern Cyprus coverage excluded from standard rental — verify before crossing.' },
			{ name: 'Europcar Cyprus', policy: 'Consistent policy. Photocard accepted; older paper licences may be questioned at some branches.' },
			{ name: 'Local agencies (Paphos, Limassol, Nicosia, Ayia Napa)', policy: 'Generally accept UK photocard without IDP. Some smaller operators request additional documentation for paper licences. Pricing competitive with international chains. Northern Cyprus exclusion universal.' },
		],
		tipsHeading: 'Practical tips for renting in Cyprus',
		tips: [
			'Automatic transmission widely available; no more expensive than manual at most agencies; book preference in advance for peak summer',
			'Credit card mandatory for deposit; holds of €500–€1,500 standard',
			'Northern Cyprus: standard rental agreements explicitly exclude coverage north of the Green Line — request written confirmation of coverage from agency before crossing if your itinerary includes Famagusta, Kyrenia, or the Karpaz peninsula',
			'Fuel: unleaded (95 and 98 octane) and diesel available; most stations accept card; rural Troodos mountain stations may be cash-only with limited hours',
			'Summer temperatures regularly exceed 40°C — check tyre condition, carry water, take rest breaks on longer journeys; AC significantly increases fuel consumption',
			'Animals on rural roads: stray dogs, cats, and goats appear without warning — particularly in Troodos foothills and villages in the Paphos district',
			'Mountain roads (Troodos, Kyrenia range): hairpin switchbacks and steep gradients require patience; main coastal roads and motorways between cities are unchallenging',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes',
		lead: 'Realistic outcomes for UK drivers in Cyprus, ranked by likelihood.',
		items: [
			{
				severity: 'low',
				frequency: 'Very common',
				label: 'Photocard, smooth rental, clean drive',
				text: "Standard tourist experience — left-hand traffic familiar, no documentation friction. Most Cyprus trips end this way.",
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Police stop at checkpoint (red plates visible)',
				text: 'Generally lenient for tourists; minor documentation check; resolves in 2–5 minutes with photocard + passport.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Speed camera fine, paid within 15 days',
				text: 'Camera-issued via rental company; pay via jccsmart.com before window closes. Small to moderate fine.',
			},
			{
				severity: 'med',
				frequency: 'Less common',
				label: 'Speed camera fine, NOT paid within 15 days',
				text: 'Fine increases 50%; court referral after a further 14 days. Correspondence reaches UK address after window closes — log in to jccsmart.com immediately.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Phone use at red light — stopped or camera-detected',
				text: '€150 + 1 demerit point regardless of whether car was moving. Cyprus enforces the stationary-at-lights rule actively.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Crossing into Northern Cyprus in rental car',
				text: 'Insurance voided; all liability falls to driver. Accident, breakdown, or theft becomes personal cost. No documentation fix — only written rental-company authorisation prevents this.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI over 22 µg/100ml breath (~0.05% BAC)',
				text: 'Suspension, fine €200+, criminal proceedings for serious cases. Limit in breath units catches some UK drivers off guard — convert before any drink-and-drive scenario.',
			},
		],
		math: 'IDP Companion is $35. A speed camera fine unpaid past the 15-day window becomes 50% larger and generates court correspondence to your UK address. The Northern Cyprus insurance situation has no documentation fix — it requires a written conversation with the rental agency before you cross. Cyprus is the cleanest documentation case in Europe; the preparation that pays off is operational, not paperwork.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I need an IDP to drive in Cyprus with a UK photocard licence?',
				answer: 'No. The Republic of Cyprus recognises valid UK driving licences for tourist use. An IDP is not a legal requirement for UK photocard holders. This is the cleanest legal documentation position for UK drivers anywhere in Europe.',
			},
			{
				id: 2,
				question: 'What about UK paper licences?',
				answer: 'Paper licences (old green or pink, pre-2000) are generally accepted but less consistently than photocards. Some rental agencies request supplementary documentation alongside an older paper licence. Carry an IDP or translation document as a precaution if you hold a paper licence.',
			},
			{
				id: 3,
				question: 'How does the alcohol limit work — is it the same as the UK?',
				answer: "Cyprus expresses its limit in breath units: 22 µg per 100ml of breath for experienced drivers. This is approximately equivalent to 0.05% BAC — stricter than England and Wales (0.08%) and equal to Scotland (0.05%). For drivers with fewer than three years' experience, the limit is 9 µg/100ml — effectively near-zero. The conversion from UK percentage to breath units catches some drivers off guard.",
			},
			{
				id: 4,
				question: 'What happens if I get a speed camera fine?',
				answer: 'The notice goes to the rental company, which provides your details to Cyprus Police. You receive correspondence at your UK address. You have 15 days from the original notice date to pay via jccsmart.com or at a local bank. After 15 days, the fine increases by 50%. After a further 14 days, the case is referred to court. Pay immediately when correspondence arrives — the window doesn\'t restart with UK postal delivery.',
			},
			{
				id: 5,
				question: 'Can I drive into Northern Cyprus in my rental car?',
				answer: 'Crossing into Northern Cyprus is possible at designated Green Line checkpoints. However, most standard rental agreements from Republic of Cyprus agencies explicitly exclude coverage north of the Green Line. Driving there in a standard rental voids your insurance entirely. If you want to visit Northern Cyprus by car, request written confirmation from the agency that cross-line coverage is included — this usually requires a separate insurance product. The simpler alternative is to take a tour bus or hire a separate Northern Cyprus-side rental on the other side of the checkpoint.',
			},
			{
				id: 6,
				question: 'Is driving in Cyprus genuinely easy for UK drivers?',
				answer: 'Yes — probably the most straightforward driving environment for UK visitors anywhere in Europe. Left-hand traffic, right-hand drive vehicles, roundabout rules identical to the UK, bilingual Greek-English signage, and roads generally well-maintained on main tourist routes. The Troodos Mountains involve hairpin switchbacks and steep gradients that require patience; the main coastal roads and motorways between cities are unchallenging.',
			},
			{
				id: 7,
				question: 'Why do rental cars have red number plates?',
				answer: "Cypriot law requires rental vehicles to carry distinctive red licence plates instead of the standard white/yellow plates used on private vehicles. This makes rental cars immediately visible to police as tourist vehicles. Most Cypriot officers extend more patience to tourists at minor infractions — but the visibility also means you're more likely to be noticed if something is wrong.",
			},
			{
				id: 8,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a private multilingual translation document presenting your UK licence details in English, French, Spanish, German, Italian, Portuguese, Arabic and 4 other widely-spoken languages from the 1949 Geneva Convention set — used alongside your licence, not as a government-format permit booklet. For Cyprus itself, the legal requirement is straightforward — UK photocard holders don\'t need a government IDP. IDP Companion is most useful for trip-extenders combining Cyprus with UAE, Egypt, Turkey, or Morocco where translation documentation is legally required.',
			},
			{
				id: 9,
				question: 'Can I combine Cyprus with other destinations on the same trip?',
				answer: 'Yes — UK travellers commonly combine Cyprus with UAE (Dubai or Abu Dhabi stopover), Egypt (Sharm el-Sheikh, Cairo, Hurghada), or Turkey via Mediterranean ferry routes. UAE Abu Dhabi rentals frequently require translation documentation; Egypt and Turkey legally require IDP under the 1949 Geneva Convention. IDP Companion covers all of these on one purchase. Validity tied to your domestic UK licence.',
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Cyprus trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic UK licence — if your UK licence expires, the companion expires with it. One purchase covers Cyprus plus Spain, Portugal, Greece, Turkey, UAE, Egypt, Morocco and any other destination during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for UK drivers and Cyprus-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'gr', label: 'UK → Greece', status: 'Live', href: '/idp-for-uk-drivers-in-greece' },
			{ flagFrom: 'gb', flagTo: 'ae', label: 'UK → UAE', status: 'Live', href: '/idp-for-uk-drivers-in-uae' },
			{ flagFrom: 'gb', flagTo: 'ma', label: 'UK → Morocco', status: 'Live', href: '/idp-for-uk-drivers-in-morocco' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece' },
			{ flagFrom: 'us', flagTo: 'ae', label: 'US → UAE', status: 'Live', href: '/idp-for-us-drivers-in-uae' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including English, French, Spanish, Arabic and 7 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real UK licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers Cyprus plus Spain, Portugal, Greece, Turkey, UAE, Egypt, Morocco and any other destination during the chosen period. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Cyprus Police (Αστυνομία Κύπρου) or the Republic of Cyprus Ministry of Transport, Communications and Works. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin IDPs are PayPoint outlets (since March 2024, replacing the Post Office). IDP Companion must be used alongside your original UK driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Cyprus Police Traffic Department — police.gov.cy',
			'Republic of Cyprus Ministry of Transport, Communications and Works — mcw.gov.cy',
			'Larnaca Car Hire — traffic laws guide (updated April 2026)',
			'Secrental Cyprus — fines and traffic rules guide (February 2026)',
			'GOV.UK — Driving in Cyprus (gov.uk/foreign-travel-advice/cyprus, last updated 2025)',
			'jccsmart.com — official fine payment portal',
		],
	},

	phrases: {
		heading: 'Useful Greek phrases at Cypriot police checkpoints',
		lead: 'Cyprus uses standard Modern Greek. Road signs are bilingual Greek-English; most rental and police interactions in tourist areas can be conducted in English. A few words of Greek go a long way at any non-tourist-area stop. The phrases below describe what you might SAY to officers — they do not describe the contents of IDP Companion (the PDF presents your licence details in English plus 10 other languages from the 1949 Geneva Convention set).',
		items: [
			{ phrase: 'Here is my licence', translation: 'Ορίστε η άδεια οδήγησής μου', context: 'Handing over the photocard at a checkpoint' },
			{ phrase: 'And the translation document', translation: 'Και το έγγραφο μετάφρασης', context: 'Showing IDP Companion alongside the licence' },
			{ phrase: "I'm a tourist from the UK", translation: 'Είμαι τουρίστας από το Ηνωμένο Βασίλειο', context: 'Establishing context at a checkpoint' },
			{ phrase: "I don't understand Greek", translation: 'Δεν καταλαβαίνω ελληνικά', context: 'If spoken to quickly' },
			{ phrase: 'Is there a problem?', translation: 'Υπάρχει κάποιο πρόβλημα;', context: 'Polite enquiry at a stop' },
			{ phrase: 'I need to call the rental company', translation: 'Πρέπει να καλέσω την εταιρεία ενοικίασης', context: 'If there\'s an incident' },
			{ phrase: 'Do you speak English?', translation: 'Μιλάτε αγγλικά;', context: 'Most Cypriot officers in tourist areas do — confirms the conversation can shift to English' },
			{ phrase: 'Where is the nearest police station?', translation: 'Πού είναι το πλησιέστερο αστυνομικό τμήμα;', context: 'Asking for directions to pay a fine' },
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Cyprus',
	},
};

export const ukCyprusCopy: Record<'en', CountryPairCopy> = { en };
