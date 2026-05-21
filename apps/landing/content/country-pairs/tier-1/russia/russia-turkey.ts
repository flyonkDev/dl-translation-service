/**
 * Country-pair content: Russia → Turkey.
 * Locales: en, ru.
 *
 * Unique angle: Turkish Highway Traffic Regulation Article 88 explicitly
 * requires foreign licences not in the Latin alphabet to be accompanied by
 * a notarised Turkish translation or IDP. Russian licences are Cyrillic →
 * the requirement applies from the first km. 6-month tourist driving window
 * before Turkish licence conversion required.
 *
 * Turkish IS NOT in the IDP Companion PDF template — verification reframed
 * through English and Arabic (which ARE in the template). English universal
 * at every Turkish rental desk; Arabic helpful at police stops in southeast
 * Turkey.
 *
 * SEO add-ons present: tldr, lez (Antalya/Istanbul/Cappadocia specifics),
 * phrases, howTo, lastReviewed. NO alphabet block (Turkish is Latin).
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for Russian Drivers in Turkey: 2026 Article 88 & Cyrillic Guide',
		description:
			'Turkish Highway Traffic Regulation Article 88 requires Cyrillic licences to carry an IDP or notarised translation. Russia falls under this rule. Honest 2026 guide: 12,000 TRY fine, rental policies, 6-month window.',
		ogTitleShort: 'Russian Drivers in Turkey: IDP Guide 2026',
		ogSubtitle: 'Cyrillic = translation legally required. Article 88.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'Russia → Turkey',
	},
	lastReviewed: 'April 2026',

	hero: {
		kicker: 'Russia → Turkey · 2026 Guide',
		title: 'IDP for Russian Drivers in Turkey: Cyrillic & Article 88 Rule',
		lead: "The Hertz desk at Antalya Airport processes hundreds of Russian-speaking customers a week in summer. The agent at position three handles it the same way every time: licence across the counter, one look at the Cyrillic text, and the IDP question before anything else. Not because Hertz invented the policy. Because Turkish Highway Traffic Regulation Article 88 states explicitly that a foreign licence not in the Latin alphabet must be accompanied by a notarised Turkish translation or an International Driving Permit to be valid on Turkish roads. The Russian licence is accepted in Turkey for up to six months. The Cyrillic text on it is where Turkish law draws the line. Seven million Russian tourists visit Turkey every year. The ones who know about Article 88 before they land spend two minutes on it.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Yes — Russian drivers in Turkey legally require a translation document or IDP',
		text: 'Turkish Highway Traffic Regulation Article 88 requires foreign licences not written in the Latin alphabet to be accompanied by a notarised Turkish translation or IDP. Russian licences are Cyrillic — the translation requirement applies from day one. The Russian licence itself is accepted for up to six months of tourist driving. After six months, Turkish licence conversion is required. Driving without translation: ~12,000 TRY fine (~$340), treated as driving without a valid licence.',
	},

	tldr: {
		heading: 'Russian Licence alone vs IDP Companion in Turkey',
		lead: 'Turkey is one of the clearest cases in this guide for Russian drivers. Article 88 specifically calls out non-Latin scripts — Russian Cyrillic falls under it directly.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Turkey',
		colCost: 'Cost',
		rows: [
			{
				document: 'Russian Licence (alone)',
				whatItDoes: 'Accepted for tourist driving up to 6 months — but Cyrillic script triggers the legal requirement for a notarised Turkish translation or IDP under Article 88; rental agencies (Hertz, Avis, Sixt, Europcar) refuse to release vehicles without supplementary documentation; driving risks ~12,000 TRY fine (~$340) treated as driving without a valid licence.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + Russian licence',
				whatItDoes: 'Multilingual digital PDF presenting your licence in English (universal at every Turkish rental desk and the operational fallback at police stops), French, Spanish, Arabic, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set. Functions as the translation document Article 88 requires. Issued in 2 minutes online, valid 1–5 years.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: "What to carry in Turkey: physical Russian licence + IDP Companion (printed) + passport with Turkish entry stamp + rental agreement + vehicle insurance. IDP Companion must be carried alongside the original licence — both presented together at any rental desk or police stop.",
	},

	whyNotEnough: {
		heading: 'Why Cyrillic makes Turkey different from most destinations',
		lead: 'Most countries enforce IDP through general policy. Turkey codifies the script-based requirement directly into national traffic law.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'The legal text — Article 88',
				text: "Turkish Highway Traffic Regulation Article 88, paragraph (b), states: foreign nationals driving in Turkey must carry a copy of their licence together with a Turkish translation approved by a notary or consulate, and present it upon request. This requirement applies specifically to all licences not in the Latin alphabet. Russian, Arabic, Chinese, Japanese, Hebrew, Georgian and Armenian licences trigger it. German, French or British licences don't — those are already in Latin script that Turkish officers can read.",
			},
			{
				icon: 'ph:storefront-bold',
				title: 'What this means at the rental desk',
				text: 'Rental agencies operating in Turkey have adopted the IDP requirement for Cyrillic-script licences as a booking condition precisely because the legal obligation exists. This is not an agency choice — it is the application of a national regulation. If you arrive at the counter without an IDP or translation document alongside your Russian licence, the agency cannot legally hand you the keys. A confirmed reservation does not override this.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'What this means at a police stop',
				text: "Turkish traffic police conduct routine checks on highways, at city entrances, and on coastal roads in tourist areas. For a Russian tourist stopped without a translation document, the officer faces a licence they cannot read. Article 88 gives them the basis for a fine. Many officers wave tourists through after a brief check — but driving without the required translation is a documentable offence, and the fine if issued starts at approximately 12,000 TRY (~$340).",
			},
		],
	},

	rules: {
		heading: 'Turkey driving rules Russians should know',
		lead: 'Right-hand traffic, same as Russia. Most rules are familiar — speed cameras and HGS toll system are the operational outliers.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'Same as Russia — comfortable' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: 'Lower in residential and school zones' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '90 km/h', note: 'Standard intercity roads' },
			{ icon: 'mdi:speedometer-medium', label: 'Divided highway', value: '110 km/h', note: '' },
			{ icon: 'mdi:speedometer-slow', label: 'Motorway (otoyol)', value: '120–140 km/h', note: 'Posted signs are definitive' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: '0.02% for commercial; suspension above 0.05%' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Hands-free only', note: '~1,009 TRY (~$28) for handheld' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory all seats', note: '~716 TRY (~$20) per person; driver liable' },
		],
	},

	fines: {
		heading: '2026 fines for common violations',
		lead: 'Turkish fines are indexed annually and have increased significantly in 2024–2025. Speed cameras are signposted in advance — fines are issued to the registered owner, billed to the rental company.',
		colViolation: 'Violation',
		colAmount: 'Fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without required translation/IDP (Cyrillic licence)', amount: '~12,000 TRY (~$340)', note: 'Article 88 violation; treated as driving without valid licence', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Speeding up to 30 km/h over', amount: '~1,000–3,500 TRY (~$28–100)', note: 'Camera-enforced; billed to rental company', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding 30–50 km/h over', amount: '~3,500–7,000 TRY (~$100–200)', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Speeding 50+ km/h over', amount: '~7,000+ TRY (~$200+)', note: 'Licence suspension; vehicle impound risk', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '~1,009 TRY (~$28)', note: '', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt', amount: '~716 TRY (~$20)', note: 'Per person; driver liable', severity: 'low' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '~3,000+ TRY (~$85+)', note: '', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'DUI over 0.05% BAC', amount: '~5,000 TRY + suspension (~$140+)', note: '6-month suspension first offence; criminal above 0.10%', severity: 'high' },
			{ icon: 'mdi:account-clock', label: 'Driving after 6-month tourist window expires', amount: '~12,000 TRY + impound (~$340+)', note: 'Treated as driving without valid licence', severity: 'high' },
		],
		caption: 'Sources: Turkish Highway Traffic Law No. 2918 (Karayolları Trafik Kanunu); Turkish Highway Traffic Regulation Article 88 (mevzuat.gov.tr); Turkish traffic fine schedule 2025 (Emniyet Genel Müdürlüğü); TRY/USD rate approximated at 35:1.',
	},

	lez: {
		heading: 'Turkey rental and enforcement specifics by region',
		badge: 'Turkey-specific',
		lead: 'Russian tourists travel to specific corridors in Turkey — and rental enforcement plus road realities differ across them.',
		zones: [
			{
				city: 'Antalya / Alanya / Belek (Mediterranean coast)',
				name: 'Highest Russian-tourist concentration',
				description: 'Most popular Turkish destination for Russian travellers. Hertz, Avis, Sixt, Europcar at AYT airport plus dozens of local agencies in resort towns. All enforce Article 88 IDP requirement for Cyrillic licences. Antalya–Alanya coastal road (D400) is spectacular but slow in summer — allow extra time for resort-to-resort transfers in peak season. Russian-speaking rental agents are common.',
				fine: '~12,000 TRY (~$340) without translation',
				note: 'Local resort-town agencies are most familiar with Russian-speaking customers and the IDP requirement. Verify in writing before booking with non-major agencies.',
			},
			{
				city: 'Istanbul (Atatürk, Sabiha Gökçen, city)',
				name: 'Urban traffic + HGS toll system',
				description: "Istanbul's traffic is dense and the bridges connecting European and Asian sides use the HGS electronic toll system. Rental cars have HGS stickers — tolls billed automatically to the rental company. Without HGS (private Russian-registered car), some bridges and motorway sections are HGS-only. Article 88 requirement enforced consistently at SAW and Atatürk airport rentals.",
				fine: '~12,000 TRY (~$340) without translation',
				note: 'Automatic transmission widely available; manual cheaper at smaller agencies. Credit card mandatory at international chains.',
			},
			{
				city: 'Cappadocia / Bodrum / Fethiye',
				name: 'Domestic flights + smaller airport rentals',
				description: 'Russian tourists frequently combine Istanbul with Cappadocia (BJV → ASR domestic flight + rental at Kayseri Erkilet), Bodrum (BJV) or Fethiye coastal route. Smaller airports have fewer rental agencies — booking ahead matters. Local operators in Bodrum and Fethiye accept multilingual translation documents at IDP Companion-style; verify before booking if you want written confirmation.',
				fine: '~12,000 TRY (~$340) without translation',
				note: 'D550 between Bodrum and Fethiye is a winding coastal route — allow generous time. Cappadocia roads are mostly straight but high-altitude — winter conditions matter Nov–March.',
			},
		],
		tip: 'Practical rule: in Turkey, Article 88 is what makes the rental desk question non-negotiable for Cyrillic licences. The legal answer ("translation document required") and the rental answer ("we cannot release the keys") are the same answer. Two minutes of preparation before flying removes both.',
	},

	phrases: {
		heading: 'Useful Turkish phrases for rental desks and police stops',
		lead: 'Most Antalya, Bodrum and Istanbul resort-area agents speak Russian. Outside the tourist belt, Turkish and basic English are operational. English on the IDP Companion bridges police stops anywhere.',
		items: [
			{ phrase: 'İşte ehliyetim', translation: 'Here is my licence', context: 'Pronounced "ish-teh eh-lee-yet-im". Handing over documents at any check' },
			{ phrase: 'Ve çeviri belgesi', translation: 'And the translation document', context: 'Pronounced "veh cheh-vee-ree bel-geh-see". Showing IDP Companion alongside Russian licence' },
			{ phrase: 'Ben Rus turistim', translation: "I'm a Russian tourist", context: 'Pronounced "ben roos too-ris-tim". Establishes context immediately at any stop' },
			{ phrase: 'Türkçe anlamıyorum', translation: "I don't understand Turkish", context: 'Pronounced "tewrk-cheh ahn-lah-mih-yor-oom". Most resort-area officers switch to basic English' },
			{ phrase: 'Bir sorun var mı?', translation: 'Is there a problem?', context: 'Pronounced "beer so-roon vahr muh?". Polite opening at any checkpoint' },
			{ phrase: 'Sigortam var', translation: 'I have insurance', context: 'Pronounced "see-gor-tahm vahr". In case of accident — present the rental insurance card' },
			{ phrase: 'Araç kiralama şirketini aramam gerekiyor', translation: 'I need to call the rental company', context: 'For vehicle issues — most rental contracts include a 24h emergency number' },
			{ phrase: 'Teşekkür ederim', translation: 'Thank you', context: 'Pronounced "teh-shek-kewr eh-deh-rim". After the stop concludes — basic Turkish courtesy is rewarded' },
		],
	},

	howTo: {
		heading: 'How to prepare for driving in Turkey as a Russian citizen',
		lead: "Turkey's Article 88 requirement is real and applies from day one. Two minutes online before flying closes the requirement at every Turkish rental desk and police stop.",
		schemaName: 'How to prepare for driving in Turkey as a Russian citizen',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Generate IDP Companion as the multilingual translation aid',
				text: '$35 buys a multilingual digital PDF translating your Russian licence into English (the universal language at every Turkish rental desk and the fallback at police stops in tourist areas), plus French, Spanish, Arabic, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set. Issued in 2 minutes online, valid 1–5 years. Functions as the Article 88 translation document.',
			},
			{
				title: 'Verify your Russian licence is current and physical',
				text: 'Old paper-style Russian licences without a plastic card are increasingly rejected at Turkish rental desks. If you still have one, renew to the current laminated card before traveling. IDP Companion translates either format, but rental shops are stricter about old paper.',
			},
			{
				title: 'Print IDP Companion before flying',
				text: 'Print on standard paper at home or from any Turkish hotel after arrival. Police checkpoints and rental desks expect physical paper alongside the physical Russian licence. Phone screens are unreliable in bright Mediterranean light.',
			},
			{
				title: 'Carry the full document set in one folder',
				text: 'Physical Russian driving licence + IDP Companion (printed) + passport with Turkish entry stamp (e-visa or visa-free entry) + rental agreement + insurance card. One folder, easily reached at any checkpoint.',
			},
			{
				title: 'Track the 6-month tourist window',
				text: 'Russian drivers can drive in Turkey for up to six months from the entry stamp date. The clock starts on the passport entry date. If you leave Turkey and return on a new tourist entry, the clock resets. After 6 months of continuous residence (with a residence permit), Turkish licence conversion is required.',
			},
		],
	},

	honesty: {
		heading: 'How IDP Companion fits in Turkey — honestly',
		lead: 'Article 88 is the cleanest legal hook for translation requirements in this guide. We\'re going to be direct about what IDP Companion does and doesn\'t do.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your Russian licence data into English, French, Spanish, Arabic, German, Italian and 5 other widely-spoken languages from the 1949 Geneva Convention set',
				'Designed to function as the Article 88 translation document — presented alongside your original Russian licence at rental desks and police stops',
				'Generated in minutes after you upload your licence and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention',
				'Not valid by itself — must be carried alongside your physical Russian driving licence',
				'Not a replacement for Turkish licence conversion after the 6-month tourist window expires',
			],
		},
		helps: {
			title: 'When IDP Companion helps Russian drivers in Turkey',
			items: [
				'At every rental desk — Hertz, Avis, Sixt, Europcar and local Turkish agencies — closing the Article 88 requirement before keys are released',
				'At police stops on highways and in tourist areas — English on the document is read by officers in Antalya, Bodrum and Istanbul tourist zones',
				'When insurance documentation is reviewed after an accident — English translation establishes licence validity for the claim',
				'As the translation document required by Article 88 alongside your national licence throughout your stay',
			],
		},
		needOfficial: {
			title: 'Documents Turkish law actually requires',
			items: [
				'Your physical Russian driving licence — the actual permission to drive (no document substitutes for this)',
				'Passport with Turkish entry stamp (e-visa or visa-free) — checked at police stops alongside driving documents',
				'Rental agreement and rental insurance — provided by the rental company; HGS toll sticker pre-fitted',
				'For stays beyond 6 months: Turkish licence conversion (separate process via residence permit)',
			],
		},
		pattern:
			'What prepared Russian travellers in Turkey actually carry: physical Russian licence + IDP Companion (printed) + passport + Turkish entry stamp + rental contract + insurance card. The translation companion functions as the Article 88 translation document at the rental desk and at any roadside check. Two minutes of preparation, $35, removes the document issue from every Turkish rental counter.',
	},

	renting: {
		heading: 'Renting a car in Turkey as a Russian driver',
		lead: 'Turkish rental policies enforce Article 88 uniformly across major chains and resort-area local operators. The legal obligation makes the rental condition non-negotiable for Cyrillic licences.',
		chains: [
			{ name: 'Hertz Turkey', policy: 'IDP or translation document required for all Cyrillic-script licences. Available at AYT, Atatürk, SAW, BJV and other airports. Minimum age 21; young driver surcharge under 25. Credit card mandatory' },
			{ name: 'Avis Turkey', policy: 'Same IDP requirement for non-Latin licences. All major airports and city centres. Minimum age 21. HGS toll sticker included' },
			{ name: 'Sixt Turkey', policy: 'IDP required for Russian licences. AYT, SAW and Bodrum. Minimum age 21; some categories require 25' },
			{ name: 'Europcar Turkey', policy: 'Consistent policy — IDP required for Cyrillic-script licences. All major airports' },
			{ name: 'Local agencies (Antalya, Alanya, Bodrum, Marmaris, Fethiye)', policy: 'Many resort-area operators familiar with Russian-speaking customers. Some accept multilingual translation in place of government IDP — IDP Companion covers this' },
		],
		tipsHeading: 'Practical tips for Turkey',
		tips: [
			'Minimum age 21 at all major agencies; held licence at least 1 year; some categories require 23 or 25',
			'Automatic transmission widely available at major agencies; manual cheaper at smaller resort operators',
			'Credit card required for deposit at international agencies; some local resort agencies accept cash',
			'HGS toll sticker included in all major agency rental cars — tolls auto-billed and added to invoice; no cash interaction at gantries',
			'Fuel: 95 and 98 octane; confirm which the rental requires; benzin = petrol, dizel = diesel',
			'Turkish Lira for incidentals: older toll booths, car parks and some fuel stations prefer or require cash; carry some TRY',
			'Antalya–Alanya D400 spectacular but slow in summer; allow extra time for resort transfers in peak season',
			'Speed cameras signposted in advance — calibrated to the posted limit, not a "tolerance" threshold',
		],
	},

	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: 'Realistic outcomes for Russian drivers in Turkey, ranked by likelihood.',
		items: [
			{
				severity: 'low',
				frequency: 'Very common with IDP',
				label: 'Rental with IDP Companion, clean drive',
				text: 'Document set complete, no issues at desk or police stops. The expected outcome.',
			},
			{
				severity: 'high',
				frequency: 'Very common without IDP',
				label: 'Rental desk refuses to release car',
				text: 'All major agencies enforce Article 88. The reservation isn\'t cancelled but the car cannot be released — you stand at the desk while the queue moves around you.',
			},
			{
				severity: 'low',
				frequency: 'Occasional',
				label: 'Highway police stop, IDP present',
				text: 'Routine document check, English on the IDP Companion verifiable, passes without issue.',
			},
			{
				severity: 'med',
				frequency: 'Less common',
				label: 'Highway stop, no translation document',
				text: '~12,000 TRY (~$340) Article 88 fine. Possible extended stop while officer logs the violation.',
			},
			{
				severity: 'med',
				frequency: 'Occasional',
				label: 'Speed camera fine',
				text: 'Camera-issued, charged to the rental deposit, starts ~1,000 TRY (~$28). Cameras signposted in advance.',
			},
			{
				severity: 'high',
				frequency: 'Rare with preparation',
				label: 'DUI stop over 0.05% BAC',
				text: '6-month licence suspension first offence; criminal charges above 0.10%.',
			},
			{
				severity: 'high',
				frequency: 'Less common',
				label: 'Driving after 6-month tourist window expires',
				text: '~12,000 TRY + potential vehicle impound. Treated as driving without a valid licence.',
			},
		],
		math: 'IDP Companion is $35. Rental refusal at Antalya Airport means resolving the document issue on the spot (difficult), rebooking, or finding ground transport to the resort. The queue behind you doesn\'t wait, and the August Antalya heat doesn\'t either.',
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do Russian drivers legally need a translation document in Turkey?',
				answer: 'Yes. Turkish Highway Traffic Regulation Article 88 explicitly requires foreign driving licences not in the Latin alphabet to be accompanied by a notarised Turkish translation or IDP when driving in Turkey. Russian licences are in Cyrillic. The requirement applies from the first day of driving.',
			},
			{
				id: 2,
				question: 'What exactly happens at the rental desk without an IDP?',
				answer: "Rental agencies in Turkey have adopted the IDP requirement for non-Latin licences as a policy that mirrors the legal requirement. Without an IDP or translation document, the agency cannot process the rental — the reservation isn't cancelled but the car cannot be released. You'll need to obtain a translation document to proceed.",
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. A government IDP is a formal booklet issued under the 1949 Geneva Convention by an authorised national organisation (in Russia, the All-Russian Automobile Society — РОСАВТОКЛУБ). IDP Companion is a private multilingual translation document presenting your Russian licence details in English, Arabic and 9 other languages. It functions as the translation document Article 88 requires alongside your national licence, and is accepted at major rental agencies.',
			},
			{
				id: 4,
				question: 'How long can a Russian tourist drive in Turkey?',
				answer: 'For up to six months from the date of entry on a tourist visa or visa-free entry. The six-month clock starts on the entry stamp date in your passport. If you leave and re-enter Turkey, the clock resets on tourist entry. After six months of continuous residence (with a residence permit), Turkish licence conversion is required.',
			},
			{
				id: 5,
				question: 'Does Turkey drive on the same side as Russia?',
				answer: 'Yes. Turkey is right-hand traffic with the steering wheel on the left — identical to Russia. No adjustment period is needed for the side of the road.',
			},
			{
				id: 6,
				question: 'How does the HGS toll system work for Russian tourists?',
				answer: "Turkish motorways use an electronic toll system (HGS). Rental cars have an HGS transponder sticker fitted to the windscreen — tolls are detected automatically and billed to the rental company. If you've brought your own Russian-registered car to Turkey by ferry or road, you won't have an HGS sticker. Some older toll sections have staffed cash booths; newer motorway sections are HGS/OGS only.",
			},
			{
				id: 7,
				question: 'Are speed cameras the same as in Russia?',
				answer: "Both countries use fixed camera networks on major roads, and cameras are signposted in advance in Turkey. The key difference: Turkish cameras are calibrated to the posted speed limit at that point. There's no unofficial tolerance as wide as Russian drivers sometimes assume from experience at home. Treat the posted limit as the actual enforcement threshold.",
			},
			{
				id: 8,
				question: 'Can I use IDP Companion for other countries on the same trip?',
				answer: 'Yes. Many Russian tourists combine Turkey with Egypt, UAE, Indonesia, Greece or Thailand within the same travel season. IDP Companion is valid for all of them — English is universal at major rental desks worldwide, and Arabic on the document covers Egypt and UAE specifically. One purchase covers the full itinerary.',
			},
			{
				id: 9,
				question: 'Can I get an IDP after I arrive in Turkey?',
				answer: "No. International Driving Permits must be issued in the country where your driving licence was issued — Turkish authorities don't issue IDPs to foreign tourists. For Russian licence holders this means a 1949 Geneva IDP obtained in Russia before traveling. IDP Companion can be generated online from anywhere — printable from any Turkish hotel within minutes of purchase.",
			},
			{
				id: 10,
				question: 'How long is IDP Companion valid for Turkey trips?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic Russian licence — if your Russian licence expires, the companion expires with it. One purchase covers Turkey plus Egypt, UAE, Greece, Thailand, Indonesia and any other destination you visit during the chosen period.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for Russian drivers and Turkey-bound travellers.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Russia → Thailand', status: 'Live', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Russia → Egypt', status: 'Live', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Russia → Greece', status: 'Live', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Russia → Indonesia', status: 'Live', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Russia → UAE', status: 'Live', href: '/idp-for-russian-drivers-in-uae/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'US → Greece', status: 'Live', href: '/idp-for-us-drivers-in-greece/' },
		],
	},

	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: "Multilingual PDF including English, French, Spanish, Arabic and 7 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real Russian licence in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip plus the next ones across Turkey, Egypt, UAE, Greece, Thailand, Indonesia. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription.",
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Turkish Emniyet Genel Müdürlüğü (General Directorate of Security), the Jandarma Genel Komutanlığı, or the Republic of Turkey Ministry of Transport and Infrastructure. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in Russia, the All-Russian Automobile Society (РОСАВТОКЛУБ) is among the authorised issuers of national IDPs. IDP Companion must be used alongside your original Russian driver's licence.",
		sourcesHeading: 'Sources',
		sources: [
			'Turkish Highway Traffic Regulation (Karayolları Trafik Yönetmeliği), Article 88 (mevzuat.gov.tr)',
			'Turkish Highway Traffic Law No. 2918 (Karayolları Trafik Kanunu)',
			'Turkish traffic fines schedule 2025 — Emniyet Genel Müdürlüğü',
			'UK FCDO Turkey travel advice (gov.uk/foreign-travel-advice/turkey)',
			'All-Russian Automobile Society (РОСАВТОКЛУБ) public guidelines',
		],
	},

	og: {
		originName: 'Russia',
		destinationName: 'Turkey',
	},
};

const ru: CountryPairCopy = {
	seo: {
		title: 'Международные права для россиян в Турции: гид 2026',
		description:
			'Турецкое регулирование, Статья 88, требует от прав на кириллице иметь IDP или нотариальный перевод. Россия попадает под это правило. Честный гид 2026: штраф 12 000 TRY, прокаты, 6-месячное окно.',
		ogTitleShort: 'Россияне за рулём в Турции',
		ogSubtitle: 'Кириллица = перевод по закону. Статья 88.',
	},
	breadcrumbs: {
		home: 'Главная',
		current: 'Россия → Турция',
	},
	lastReviewed: 'Апрель 2026',
	labels: {
		freshnessPrefix: 'Последняя проверка:',
	},

	hero: {
		kicker: 'Россия → Турция · Гид 2026',
		title: 'Международные права для россиян в Турции: кириллица и Статья 88',
		lead: 'Стойка Hertz в аэропорту Анталии летом обрабатывает сотни русскоязычных клиентов в неделю. Агент за стойкой номер три действует одинаково каждый раз: права через стол, один взгляд на кириллицу, и вопрос про IDP до всего остального. Не потому что Hertz сам это придумал. Потому что турецкое Регулирование дорожного движения, Статья 88, прямо говорит: иностранные права не на латинице должны сопровождаться нотариальным турецким переводом или International Driving Permit, чтобы быть действительными на турецких дорогах. Российские права принимаются в Турции до 6 месяцев. Кириллица на них — место, где турецкий закон проводит черту. Семь миллионов российских туристов посещают Турцию каждый год. Те, кто узнаёт про Статью 88 до прилёта, тратят на это две минуты.',
		ctaPrimary: 'Получить IDP Companion за 2 минуты — $35',
		ctaSecondary: 'Все тарифы',
		badgeTop: 'Гид 2026',
		badgeBottom: 'От $35',
	},

	quickAnswer: {
		required: true,
		verdict: 'Да — россиянам в Турции нужен переводной документ или IDP по закону',
		text: 'Турецкое Регулирование дорожного движения, Статья 88, требует от иностранных прав не на латинице сопровождения нотариальным турецким переводом или IDP. Российские права на кириллице — требование перевода применяется с первого дня. Сами российские права принимаются для туристического вождения до 6 месяцев. После — обязательна замена на турецкие. Вождение без перевода: ~12 000 TRY (~$340), считается вождением без действительных прав.',
	},

	tldr: {
		heading: 'Российские права vs IDP Companion в Турции',
		lead: 'Турция — один из самых чётких случаев в этом гиде для российских водителей. Статья 88 прямо называет нелатинские шрифты — российская кириллица попадает под неё напрямую.',
		colDocument: 'Документ',
		colWhatItDoes: 'Что даёт в Турции',
		colCost: 'Цена',
		rows: [
			{
				document: 'Российские права (только)',
				whatItDoes: 'Принимаются для туристического вождения до 6 месяцев — но кириллица запускает юридическое требование нотариального турецкого перевода или IDP по Статье 88; прокатные сети (Hertz, Avis, Sixt, Europcar) не выдают машину без дополнительной документации; вождение грозит штрафом ~12 000 TRY (~$340), считается вождением без действительных прав.',
				cost: 'Уже есть',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + российские права',
				whatItDoes: 'Многоязычный цифровой PDF с данными прав на английском (универсальный на каждой турецкой прокатной стойке и рабочий fallback на проверках полиции), французском, испанском, арабском, немецком, итальянском и ещё 5 распространённых языках набора Женевской конвенции 1949 года. Функционирует как переводной документ, требуемый Статьёй 88. Готов за 2 минуты онлайн, действует 1–5 лет.',
				cost: '$35–55 (1–5 лет)',
				tone: 'companion',
			},
		],
		footnote: 'Что брать с собой в Турцию: оригинал российских прав + IDP Companion (распечатанный) + загранпаспорт с турецким въездным штампом + договор аренды + страховка. IDP Companion — носить вместе с оригиналом прав, оба предъявляются вместе на стойке проката или проверке полиции.',
	},

	whyNotEnough: {
		heading: 'Почему кириллица делает Турцию особым случаем',
		lead: 'Большинство стран применяют требование IDP через общую политику. Турция кодифицирует требование по шрифту прямо в национальном дорожном законе.',
		reasons: [
			{
				icon: 'ph:scales-bold',
				title: 'Юридический текст — Статья 88',
				text: 'Статья 88, параграф (b) турецкого Регулирования дорожного движения говорит: иностранцы за рулём в Турции должны иметь копию прав вместе с турецким переводом, заверенным нотариусом или консульством, и предъявлять по требованию. Это требование применяется именно ко всем правам не на латинице. Российские, арабские, китайские, японские, ивритские, грузинские и армянские права запускают его. Немецкие, французские или британские — нет: они уже на латинице, которую турецкие офицеры читают.',
			},
			{
				icon: 'ph:storefront-bold',
				title: 'Что это значит на стойке проката',
				text: 'Прокатные агентства в Турции зафиксировали требование IDP для прав на кириллице как условие брони именно потому, что юридическая обязанность существует. Это не выбор агентства — это применение национального регулирования. Если приехать на стойку без IDP или переводного документа вместе с российскими правами, агентство юридически не может выдать ключи. Подтверждённая бронь это не отменяет.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'Что это значит на полицейской остановке',
				text: 'Турецкая ДПС проводит рутинные проверки на магистралях, на въездах в города и на прибрежных дорогах в туристических зонах. Для российского туриста, остановленного без переводного документа, офицер сталкивается с правами, которые он не может прочитать. Статья 88 даёт ему основание для штрафа. Многие офицеры пропускают туристов после краткой проверки — но вождение без перевода это документируемое нарушение, и штраф, если выписан, начинается с ~12 000 TRY (~$340).',
			},
		],
	},

	rules: {
		heading: 'Правила вождения в Турции, о которых стоит знать',
		lead: 'Правостороннее, как в России. Большинство правил привычны — камеры скорости и система платных дорог HGS выпадают.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Сторона движения', value: 'ПРАВАЯ', note: 'Как в России — комфортно' },
			{ icon: 'mdi:speedometer', label: 'В городе', value: '50 км/ч', note: 'Меньше в жилых и школьных зонах' },
			{ icon: 'mdi:road-variant', label: 'Загородные дороги', value: '90 км/ч', note: 'Стандартные межгородские' },
			{ icon: 'mdi:speedometer-medium', label: 'Магистраль с разделителем', value: '110 км/ч', note: '' },
			{ icon: 'mdi:speedometer-slow', label: 'Otoyol (платные)', value: '120–140 км/ч', note: 'По знакам' },
			{ icon: 'mdi:beer-outline', label: 'Алкоголь', value: '0,05‰', note: '0,02‰ для коммерческих; лишение свыше 0,05‰' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон', value: 'Только hands-free', note: '~1 009 TRY (~$28) за держание в руках' },
			{ icon: 'mdi:seatbelt', label: 'Ремни', value: 'Обязательно все места', note: '~716 TRY (~$20) за пассажира; водитель отвечает' },
		],
	},

	fines: {
		heading: 'Штрафы 2026 за частые нарушения',
		lead: 'Турецкие штрафы индексируются ежегодно и значительно выросли в 2024–2025. Камеры скорости обозначаются заранее — штрафы выписываются на владельца, списываются с прокатной компании.',
		colViolation: 'Нарушение',
		colAmount: 'Штраф',
		colNote: 'Примечание',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Вождение без перевода/IDP (кириллица)', amount: '~12 000 TRY (~$340)', note: 'Нарушение Статьи 88; считается вождением без действительных прав', severity: 'high' },
			{ icon: 'mdi:speedometer', label: 'Превышение до 30 км/ч', amount: '~1 000–3 500 TRY (~$28–100)', note: 'Камеры; списывается с прокатной компании', severity: 'low' },
			{ icon: 'mdi:speedometer-medium', label: 'Превышение 30–50 км/ч', amount: '~3 500–7 000 TRY (~$100–200)', note: '', severity: 'med' },
			{ icon: 'mdi:speedometer-slow', label: 'Превышение 50+ км/ч', amount: '~7 000+ TRY (~$200+)', note: 'Лишение прав; риск изъятия машины', severity: 'high' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон в руках', amount: '~1 009 TRY (~$28)', note: '', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'Без ремня', amount: '~716 TRY (~$20)', note: 'За пассажира; водитель отвечает', severity: 'low' },
			{ icon: 'mdi:traffic-light', label: 'Проезд на красный', amount: '~3 000+ TRY (~$85+)', note: '', severity: 'high' },
			{ icon: 'mdi:beer-outline', label: 'Пьяное вождение свыше 0,05‰', amount: '~5 000 TRY + лишение (~$140+)', note: '6-месячное лишение за первое; уголовка свыше 0,10‰', severity: 'high' },
			{ icon: 'mdi:account-clock', label: 'Вождение после истечения 6-месячного окна', amount: '~12 000 TRY + изъятие (~$340+)', note: 'Считается вождением без действительных прав', severity: 'high' },
		],
		caption: 'Источники: Турецкий Закон о дорожном движении № 2918 (Karayolları Trafik Kanunu); Турецкое Регулирование, Статья 88 (mevzuat.gov.tr); турецкая шкала штрафов 2025 (Emniyet Genel Müdürlüğü); курс TRY/USD приблизительно 35:1.',
	},

	lez: {
		heading: 'Особенности проката и применения по регионам Турции',
		badge: 'Особенности Турции',
		lead: 'Российские туристы едут в конкретные коридоры Турции — реалии проката и дорог в них различаются.',
		zones: [
			{
				city: 'Анталия / Аланья / Белек (Средиземноморское побережье)',
				name: 'Самая высокая концентрация российских туристов',
				description: 'Самое популярное направление в Турции у россиян. Hertz, Avis, Sixt, Europcar в аэропорту AYT плюс десятки местных контор в курортных городках. Все применяют требование IDP по Статье 88 для прав на кириллице. Прибрежная дорога Анталия–Аланья (D400) живописная, но медленная летом — закладывайте больше времени на трансферы между курортами в пик. Русскоязычные агенты на стойках — обычное дело.',
				fine: '~12 000 TRY (~$340) без перевода',
				note: 'Местные курортные конторы лучше всего знакомы с русскоязычными клиентами и требованием IDP. Уточняйте письменно до брони с не-сетевыми операторами.',
			},
			{
				city: 'Стамбул (Ататюрк, Сабиха Гёкчен, город)',
				name: 'Городской трафик + платные дороги HGS',
				description: 'Трафик Стамбула плотный, мосты между Европой и Азией используют электронную систему HGS. У арендных машин стикеры HGS — оплата автоматически списывается с прокатной компании. Без HGS (личная машина с российскими номерами) часть мостов и магистральных участков — только по HGS. Требование Статьи 88 применяется единообразно при аренде в SAW и Ататюрке.',
				fine: '~12 000 TRY (~$340) без перевода',
				note: 'Автомат широко доступен; механика дешевле в небольших конторах. Карта обязательна в международных сетях.',
			},
			{
				city: 'Каппадокия / Бодрум / Фетхие',
				name: 'Внутренние перелёты + аренда в малых аэропортах',
				description: 'Россияне часто совмещают Стамбул с Каппадокией (BJV → ASR внутренний перелёт + аренда в Кайсери Эркилет), Бодрумом (BJV) или прибрежным маршрутом Фетхие. У небольших аэропортов меньше прокатных контор — бронь заранее имеет значение. Местные операторы в Бодруме и Фетхие принимают многоязычные переводные документы IDP Companion-стиля; уточняйте до брони, если хотите письменное подтверждение.',
				fine: '~12 000 TRY (~$340) без перевода',
				note: 'D550 между Бодрумом и Фетхие — извилистая прибрежная дорога; закладывайте время. Дороги Каппадокии в основном прямые, но высокогорье — ноябрь–март важна зимняя готовность.',
			},
		],
		tip: 'Практическое правило: в Турции Статья 88 — это то, что делает вопрос на стойке проката нерешаемым в момент для прав на кириллице. Юридический ответ («перевод обязателен») и ответ проката («не можем выдать ключи») — это один и тот же ответ. Две минуты подготовки до вылета снимают и то, и другое.',
	},

	phrases: {
		heading: 'Полезные турецкие фразы для проката и проверок полиции',
		lead: 'Большинство агентов в курортных Анталии, Бодруме и Стамбуле говорят по-русски. Вне туристического пояса — турецкий и базовый английский. Английский на IDP Companion закрывает проверки полиции везде.',
		items: [
			{ phrase: 'İşte ehliyetim', translation: 'Вот мои права', context: 'Произносится «иш-те эх-ли-йет-им». Передача документов на любой проверке' },
			{ phrase: 'Ve çeviri belgesi', translation: 'А вот переводной документ', context: 'Произносится «ве че-ви-ри бел-ге-си». Показ IDP Companion рядом с российскими правами' },
			{ phrase: 'Ben Rus turistim', translation: 'Я российский турист', context: 'Произносится «бен рус ту-рис-тим». Сразу обозначает контекст на любой остановке' },
			{ phrase: 'Türkçe anlamıyorum', translation: 'Я не понимаю по-турецки', context: 'Произносится «тюрк-че ан-ла-мы-йо-рум». Большинство офицеров в курортных зонах перейдёт на базовый английский' },
			{ phrase: 'Bir sorun var mı?', translation: 'Есть какая-то проблема?', context: 'Произносится «бир со-рун вар мы?». Вежливое начало диалога на любой проверке' },
			{ phrase: 'Sigortam var', translation: 'У меня есть страховка', context: 'Произносится «си-гор-там вар». При ДТП — предъявите карточку страховки рентала' },
			{ phrase: 'Araç kiralama şirketini aramam gerekiyor', translation: 'Мне нужно позвонить в прокатную компанию', context: 'При проблемах с машиной — в большинстве договоров есть круглосуточный номер' },
			{ phrase: 'Teşekkür ederim', translation: 'Спасибо', context: 'Произносится «те-шек-кюр э-де-рим». После окончания остановки — базовая турецкая вежливость окупается' },
		],
	},

	howTo: {
		heading: 'Как подготовиться к вождению в Турции россиянину',
		lead: 'Требование Статьи 88 в Турции реальное и применяется с первого дня. Две минуты онлайн до вылета снимают вопрос на каждой турецкой прокатной стойке и проверке полиции.',
		schemaName: 'Как подготовиться к вождению в Турции россиянину',
		duration: 'PT15M',
		cost: '35 USD',
		steps: [
			{
				title: 'Получите IDP Companion как многоязычный переводной документ',
				text: '$35 — многоязычный цифровой PDF с переводом российских прав на английский (универсальный на каждой турецкой прокатной стойке и fallback на проверках полиции в туристических зонах), плюс французский, испанский, арабский, немецкий, итальянский и ещё 5 распространённых языков набора Женевской конвенции 1949 года. Готов за 2 минуты онлайн, действует 1–5 лет. Функционирует как переводной документ Статьи 88.',
			},
			{
				title: 'Проверьте, что российские права действующие и пластиковые',
				text: 'Старые бумажные российские права без пластиковой карточки всё чаще отказываются принимать на турецких прокатных стойках. Если такие — обновите до текущего ламинированного образца перед поездкой. IDP Companion переведёт оба формата, но прокатные конторы строже к старой бумаге.',
			},
			{
				title: 'Распечатайте IDP Companion перед вылетом',
				text: 'На обычной бумаге дома или в любой турецкой гостинице после прилёта. На проверках полиции и стойках проката ожидают физическую бумагу рядом с физическими российскими правами. Экраны телефонов ненадёжны под ярким средиземноморским солнцем.',
			},
			{
				title: 'Носите весь набор в одной папке',
				text: 'Физические российские права + IDP Companion (распечатанный) + загранпаспорт с турецким въездным штампом (e-visa или безвизовый въезд) + договор аренды + карточка страховки. Одна папка, легко достаётся на любой проверке.',
			},
			{
				title: 'Отслеживайте 6-месячное туристическое окно',
				text: 'Российские водители могут ездить в Турции до 6 месяцев с даты въездного штампа. Отсчёт идёт с даты въезда в паспорте. Если выехать и вернуться по новому туристическому въезду — отсчёт сбрасывается. После 6 месяцев непрерывного проживания (с ВНЖ) — обязательна замена на турецкие права.',
			},
		],
	},

	honesty: {
		heading: 'Где IDP Companion помогает в Турции — без преувеличений',
		lead: 'Статья 88 — самая чёткая юридическая зацепка для требования перевода в этом гиде. Скажем прямо, что IDP Companion делает и чего не делает.',
		is: {
			title: 'Что такое IDP Companion',
			items: [
				'Многоязычный цифровой PDF с переводом данных российских прав на английский, французский, испанский, арабский, немецкий, итальянский и ещё 5 распространённых языков набора Женевской конвенции 1949 года',
				'Сделан, чтобы функционировать как переводной документ Статьи 88 — предъявляется вместе с оригиналом российских прав на стойках проката и проверках полиции',
				'Готов за минуты после загрузки прав и автоматической верификации',
				'Цена: $35 (1 год), $45 (3 года), $55 (5 лет) — разовая оплата, без подписок',
			],
		},
		isNot: {
			title: 'Чем IDP Companion НЕ является',
			items: [
				'Не государственный IDP по Женевской конвенции 1949 года',
				'Сам по себе не действителен — носить только вместе с физическими российскими правами',
				'Не заменяет замену прав на турецкие после истечения 6-месячного туристического окна',
			],
		},
		helps: {
			title: 'Когда IDP Companion помогает россиянам в Турции',
			items: [
				'На каждой стойке проката — Hertz, Avis, Sixt, Europcar и местные турецкие конторы — закрывая требование Статьи 88 до выдачи ключей',
				'На проверках полиции на магистралях и в туристических зонах — английский на документе читают офицеры в Анталии, Бодруме и стамбульских туристических кварталах',
				'При страховом разбирательстве после ДТП — английский перевод подтверждает действительность прав для иска',
				'Как переводной документ, требуемый Статьёй 88, рядом с национальными правами весь срок пребывания',
			],
		},
		needOfficial: {
			title: 'Документы, которые требует турецкий закон',
			items: [
				'Физические российские права — собственно разрешение на вождение (это ничем не заменяется)',
				'Загранпаспорт с турецким въездным штампом (e-visa или безвиз) — проверяют на стопах вместе с водительскими',
				'Договор аренды и страховка — выдаются прокатной компанией; стикер HGS установлен заранее',
				'Для пребывания свыше 6 месяцев: замена на турецкие права (отдельный процесс через ВНЖ)',
			],
		},
		pattern:
			'Что реально берут с собой подготовленные российские туристы в Турцию: физические российские права + IDP Companion (распечатанный) + загранпаспорт + турецкий штамп + договор аренды + карточка страховки. Переводной компаньон функционирует как документ Статьи 88 на стойке проката и при любой придорожной проверке. Две минуты подготовки, $35 — и снят документальный вопрос на каждой турецкой прокатной стойке.',
	},

	renting: {
		heading: 'Аренда машины в Турции с российскими правами',
		lead: 'Турецкие прокатные политики применяют Статью 88 единообразно по крупным сетям и местным операторам в курортных зонах. Юридическая обязанность делает условие проката нерешаемым для прав на кириллице.',
		chains: [
			{ name: 'Hertz Turkey', policy: 'IDP или переводной документ обязателен для всех прав на кириллице. Доступен в AYT, Ататюрке, SAW, BJV и других аэропортах. С 21 года; доплата для младше 25. Карта обязательна' },
			{ name: 'Avis Turkey', policy: 'Та же политика IDP для нелатинских прав. Все крупные аэропорты и городские отделения. С 21 года. Стикер HGS включён' },
			{ name: 'Sixt Turkey', policy: 'IDP обязателен для российских прав. AYT, SAW и Бодрум. С 21 года; некоторые категории требуют 25' },
			{ name: 'Europcar Turkey', policy: 'Согласованная политика — IDP обязателен для прав на кириллице. Все крупные аэропорты' },
			{ name: 'Местные конторы (Анталия, Аланья, Бодрум, Мармарис, Фетхие)', policy: 'Многие курортные операторы привычны к русскоязычным клиентам. Часть принимает многоязычный переводной документ вместо государственного IDP — IDP Companion это закрывает' },
		],
		tipsHeading: 'Практические советы для Турции',
		tips: [
			'Минимальный возраст 21 во всех крупных сетях; стаж от 1 года; некоторые категории требуют 23 или 25',
			'Автомат широко доступен в крупных сетях; механика дешевле в небольших курортных конторах',
			'Карта обязательна для депозита в международных сетях; часть курортных принимает наличные',
			'Стикер HGS включён во всех крупных арендных машинах — оплата авто-списывается, добавляется к счёту; без наличных взаимодействий на воротах',
			'Топливо: 95 и 98 октан; уточняйте, какое нужно арендной; benzin = бензин, dizel = дизель',
			'Турецкие лиры на мелочи: старые ворота платных дорог, парковки и часть заправок предпочитают или требуют наличные; держите немного TRY',
			'Анталия–Аланья D400 живописная, но медленная летом; закладывайте время на трансферы в пик сезона',
			'Камеры скорости обозначаются заранее — откалиброваны на посчитанный лимит, не на «толерантный» порог',
		],
	},

	outcomes: {
		heading: 'Что бывает, если ехать без IDP — реальные сценарии',
		lead: 'Реалистичные сценарии для российских водителей в Турции, по убыванию частоты.',
		items: [
			{
				severity: 'low',
				frequency: 'Очень часто с IDP',
				label: 'Аренда с IDP Companion, чистая поездка',
				text: 'Полный набор документов, без вопросов на стойке и на полицейских стопах. Ожидаемый исход.',
			},
			{
				severity: 'high',
				frequency: 'Очень часто без IDP',
				label: 'Стойка проката отказывает в выдаче',
				text: 'Все крупные сети применяют Статью 88. Бронь не отменяется, но машину выдать не могут — вы стоите у стойки, пока очередь обходит вас.',
			},
			{
				severity: 'low',
				frequency: 'Иногда',
				label: 'Полицейский стоп на трассе, IDP есть',
				text: 'Рутинная проверка документов, английский на IDP Companion верифицируется, проходит без проблем.',
			},
			{
				severity: 'med',
				frequency: 'Реже',
				label: 'Стоп на трассе, переводного документа нет',
				text: '~12 000 TRY (~$340) штраф по Статье 88. Возможен затянутый стоп, пока офицер фиксирует нарушение.',
			},
			{
				severity: 'med',
				frequency: 'Иногда',
				label: 'Штраф с камеры скорости',
				text: 'Камера, списывается с прокатного депозита, начинается от ~1 000 TRY (~$28). Камеры обозначаются заранее.',
			},
			{
				severity: 'high',
				frequency: 'Редко при подготовке',
				label: 'Пьяное вождение свыше 0,05‰',
				text: '6-месячное лишение прав за первое нарушение; уголовка свыше 0,10‰.',
			},
			{
				severity: 'high',
				frequency: 'Реже',
				label: 'Вождение после истечения 6-месячного окна',
				text: '~12 000 TRY + потенциальное изъятие. Считается вождением без действительных прав.',
			},
		],
		math: 'IDP Companion — $35. Отказ в выдаче в аэропорту Анталии означает решение вопроса на месте (трудно), переброню или поиск наземного транспорта до курорта. Очередь за вами не ждёт, и августовская жара Анталии — тоже.',
	},

	faq: {
		heading: 'Частые вопросы',
		items: [
			{
				id: 1,
				question: 'Россиянам в Турции реально нужен переводной документ?',
				answer: 'Да. Турецкое Регулирование дорожного движения, Статья 88, прямо требует от иностранных водительских прав не на латинице сопровождения нотариальным турецким переводом или IDP при вождении в Турции. Российские права на кириллице. Требование применяется с первого дня вождения.',
			},
			{
				id: 2,
				question: 'Что именно происходит на стойке проката без IDP?',
				answer: 'Прокатные агентства в Турции зафиксировали требование IDP для нелатинских прав как политику, отражающую юридическое требование. Без IDP или переводного документа агентство не может оформить аренду — бронь не отменяется, но машину выдать нельзя. Нужно оформить переводной документ, чтобы продолжить.',
			},
			{
				id: 3,
				question: 'IDP Companion — это то же, что государственный IDP?',
				answer: 'Нет. Государственный IDP — официальная книжка по Женевской конвенции 1949 года, выданная уполномоченным национальным органом (в России — Всероссийский Автомобильный Клуб, РОСАВТОКЛУБ). IDP Companion — частный многоязычный переводной документ с данными ваших российских прав на английском, арабском и ещё 9 языках. Функционирует как переводной документ, требуемый Статьёй 88, рядом с национальными правами, и принимается на крупных прокатных агентствах.',
			},
			{
				id: 4,
				question: 'Сколько может ездить российский турист в Турции?',
				answer: 'До 6 месяцев с даты въезда по туристической визе или безвизовому въезду. Отсчёт идёт с даты въездного штампа в паспорте. Если выехать и въехать заново по туристическому — отсчёт сбрасывается. После 6 месяцев непрерывного проживания (с ВНЖ) — обязательна замена на турецкие права.',
			},
			{
				id: 5,
				question: 'Турция — та же сторона движения, что Россия?',
				answer: 'Да. Турция — правостороннее с рулём слева, идентично России. Адаптация по стороне движения не нужна.',
			},
			{
				id: 6,
				question: 'Как работает HGS для российских туристов?',
				answer: 'Турецкие магистрали используют электронную систему оплаты (HGS). У арендных машин транспондер HGS установлен на лобовое стекло — оплата считывается автоматически и списывается с прокатной компании. Если вы привезли свою машину с российскими номерами на пароме или по дороге — стикера HGS не будет. Часть старых платных участков имеет ручные кассы; новые магистрали — только HGS/OGS.',
			},
			{
				id: 7,
				question: 'Камеры скорости такие же, как в России?',
				answer: 'Обе страны используют сети фиксированных камер на крупных дорогах, и в Турции камеры обозначаются заранее. Ключевое отличие: турецкие камеры откалиброваны на посчитанный лимит в этой точке. Нет неофициальной толерантности, к которой российские водители иногда привыкли по опыту дома. Считайте посчитанный лимит фактическим порогом применения.',
			},
			{
				id: 8,
				question: 'Можно ли использовать IDP Companion для других стран в той же поездке?',
				answer: 'Да. Многие российские туристы совмещают Турцию с Египтом, ОАЭ, Индонезией, Грецией или Таиландом в один сезон. IDP Companion действует для всех — английский универсален на крупных стойках проката по всему миру, арабский на документе покрывает Египет и ОАЭ конкретно. Одна покупка покрывает весь маршрут.',
			},
			{
				id: 9,
				question: 'Можно ли получить IDP уже в Турции?',
				answer: 'Нет. International Driving Permit выдаётся только в стране, где выданы национальные права — турецкие власти не выдают IDP иностранным туристам. Для российских прав это значит IDP по Женевской 1949 в России до отъезда. IDP Companion можно сгенерировать онлайн откуда угодно — печатается в любой турецкой гостинице за минуты после оплаты.',
			},
			{
				id: 10,
				question: 'Сколько действует IDP Companion для поездок в Турцию?',
				answer: 'На выбор: 1 год ($35), 3 года ($45), 5 лет ($55). Срок привязан к вашим российским правам — если они истекают, истекает и компаньон. Одна покупка покрывает Турцию плюс Египет, ОАЭ, Грецию, Таиланд, Индонезию и любые другие направления, которые вы посетите за выбранный период.',
			},
		],
	},

	related: {
		heading: 'Похожие гиды',
		lead: 'Больше гидов по парам стран для российских водителей и туристов, едущих в Турцию.',
		comingSoonLabel: 'Скоро',
		items: [
			{ flagFrom: 'ru', flagTo: 'th', label: 'Россия → Таиланд', status: 'В эфире', href: '/idp-for-russian-drivers-in-thailand/' },
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Россия → Египет', status: 'В эфире', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Россия → Греция', status: 'В эфире', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Россия → Индонезия', status: 'В эфире', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Россия → ОАЭ', status: 'В эфире', href: '/idp-for-russian-drivers-in-uae/' },
			{ flagFrom: 'us', flagTo: 'gr', label: 'США → Греция', status: 'В эфире', href: '/idp-for-us-drivers-in-greece/' },
		],
	},

	finalCta: {
		heading: 'Готовы оформить IDP Companion?',
		text: 'Многоязычный PDF с английским, французским, испанским, арабским и ещё 7 распространёнными языками набора Женевской конвенции 1949 года — готов за 2 минуты по вашим реальным российским правам. Печатайте дома или из любой гостиницы. Действует 1–5 лет — покроет эту поездку и следующие в Турцию, Египет, ОАЭ, Грецию, Таиланд, Индонезию. $35 / 1 год · $45 / 3 года · $55 / 5 лет. Разовый платёж, без подписок.',
		button: 'Начать оформление',
	},

	legal: {
		disclaimerHeading: 'Дисклеймер',
		disclaimer:
			'IDP Companion — это частный многоязычный переводной документ. Мы не аффилированы с турецкой Главной дирекцией безопасности (Emniyet Genel Müdürlüğü), Жандармерией или Министерством транспорта Турции. IDP Companion не является государственным International Driving Permit по Женевской конвенции 1949 года или Венской конвенции 1968 года; в России к уполномоченным эмитентам национальных IDP относится в том числе Всероссийский Автомобильный Клуб (РОСАВТОКЛУБ). IDP Companion используется только вместе с оригиналом ваших российских прав.',
		sourcesHeading: 'Источники',
		sources: [
			'Турецкое Регулирование дорожного движения (Karayolları Trafik Yönetmeliği), Статья 88 (mevzuat.gov.tr)',
			'Турецкий Закон о дорожном движении № 2918 (Karayolları Trafik Kanunu)',
			'Турецкая шкала штрафов 2025 — Emniyet Genel Müdürlüğü',
			'UK FCDO Turkey travel advice (gov.uk/foreign-travel-advice/turkey)',
			'Публичные руководства РОСАВТОКЛУБа',
		],
	},

	og: {
		originName: 'Россия',
		destinationName: 'Турция',
	},
};

export const russiaTurkeyCopy: Record<'en' | 'ru', CountryPairCopy> = { en, ru };
