/**
 * Tier 3 long-form pillar guide content.
 * Locales: en, ru, es. EN is canonical.
 *
 * Per AI-first pivot rules (CLAUDE.md «🚨 AI-first pivot 2026-05-23»):
 *  - answer-first FAQ first sentences
 *  - query fan-out H2s
 *  - first-hand POV per locale (Forum.Vinskogo for RU, TripAdvisor + r/IWantOut for EN, r/spain + Foro Renfe for ES)
 *  - dated/attributed factual claims
 *  - Pass A + Pass B clean
 *  - Person author schema preserved
 *
 * Middle-pivot rule (binding per AGENTS.md): authorised national IDP issuers (AAA, AATA,
 * PayPoint, РОСАВТОКЛУБ, ADAC) are referenced only in informational FAQ disclosure +
 * the legal disclaimer. They are NOT named as alternatives in conversion sections
 * (final CTA, quick verdict pills, related cards). For a pillar EDUCATIONAL guide the
 * researcher-intent audience requires honest comparison disclosure — so AAA/AATA names
 * appear in the howTo Step 2 (which is honest disclosure of the two paths, not competitor
 * promotion in a buyer-intent funnel).
 *
 * PDF language honesty (binding per CLAUDE.md): the multilingual translation claim
 * refers to the 12 widely-spoken Geneva 1949 character set. We never claim Greek,
 * Bahasa Indonesia or Thai script is on the PDF — those are NOT present per the
 * verified language list.
 */

export interface GuideRegionRow {
	destination: string;
	destFlag: string;
	origin: string;
	originFlag: string;
	hint: string;
	href: string;
}

export interface GuideRegion {
	region: string;
	rows: GuideRegionRow[];
}

export interface GuideHowToStep {
	num: string;
	title: string;
	body: string;
}

export interface GuideFaqItem {
	id: string;
	question: string;
	answer: string;
}

export interface GuideTldrCard {
	pill: string;
	text: string;
	tone: 'required' | 'rental' | 'optional';
}

export interface GuideCostCard {
	icon: string;
	title: string;
	text: string;
	severe?: boolean;
}

export interface GuideSpecialBlock {
	h3: string;
	body: string;
}

export interface GuideRelatedCard {
	href: string;
	title: string;
	text: string;
}

export interface GuideCopy {
	seo: {
		title: string;
		description: string;
		ogTitleShort: string;
		ogSubtitle: string;
	};
	breadcrumbs: {
		home: string;
		guides: string;
		current: string;
	};
	hero: {
		kicker: string;
		title: string;
		lead: string;
		ctaPrimary: string;
		ctaSecondary: string;
		authorBy: string;
		authorReviewedLabel: string;
		authorReviewedDate: string;
	};
	quickVerdict: {
		heading: string;
		lead: string;
		cards: GuideTldrCard[];
	};
	whatIsIdp: {
		heading: string;
		lead: string;
		paragraphs: string[];
	};
	matrix: {
		heading: string;
		lead: string;
		regions: GuideRegion[];
		footnote: string;
	};
	realCost: {
		heading: string;
		lead: string;
		cards: GuideCostCard[];
	};
	howTo: {
		heading: string;
		lead: string;
		steps: GuideHowToStep[];
	};
	specialCases: {
		heading: string;
		lead: string;
		blocks: GuideSpecialBlock[];
	};
	faq: {
		heading: string;
		lead: string;
		items: GuideFaqItem[];
	};
	related: {
		heading: string;
		lead: string;
		cards: GuideRelatedCard[];
	};
	finalCta: {
		heading: string;
		text: string;
		button: string;
	};
	sources: {
		heading: string;
		items: string[];
		legalHeading: string;
		legalText: string;
	};
	/** Schema-only HowTo description (not rendered as text). */
	howToSchemaDescription: string;
}

// =====================================================================
// EN
// =====================================================================

const en: GuideCopy = {
	seo: {
		title: 'Driving Abroad in 2026: Which IDP You Need (50+ Countries)',
		description: 'Geneva 1949 or Vienna 1968? The convention your destination signed decides which IDP works. 2026 guide to 50+ countries + what happens when you skip it.',
		ogTitleShort: 'Driving Abroad 2026: Which IDP You Need',
		ogSubtitle: 'Geneva 1949 vs Vienna 1968 · 50+ countries · real skip cost',
	},
	breadcrumbs: {
		home: 'Home',
		guides: 'Guides',
		current: 'Driving Abroad 2026',
	},
	hero: {
		kicker: 'Complete Guide · 2026 Edition',
		title: 'Driving Abroad in 2026: The Complete IDP Guide',
		lead: "Whether you need an International Driving Permit comes down to where you're going, which UN convention your destination signed, and what the rental desk actually checks at pickup. Spain alone issues over 20,000 DGT fines a year to foreign drivers without an IDP; Greek law fines the rental company €1,000 separately under the 2018 Traffic Code — which is why Hertz at Heraklion never absorbs the risk. Across the 22 country-pair pages we maintain on this site, the legal answer and the rental-desk answer diverge by several hundred dollars and a delayed-vacation-day in roughly half the destinations we cover. This guide is the cross-cutting view: how the Geneva 1949 and Vienna 1968 conventions work, which countries fall under each, what insurance actually does when you skip it, and the three ways to get an IDP-class document before you fly. The country-specific guides linked throughout cover the destination detail.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		authorBy: 'By',
		authorReviewedLabel: 'Last reviewed:',
		authorReviewedDate: 'June 2026',
	},
	quickVerdict: {
		heading: 'Quick Verdict',
		lead: "The fastest way to answer \"do I need an IDP for my trip\" is to combine three filters — destination, what you'll be driving, and which document the rental desk lists as a booking condition.",
		cards: [
			{
				tone: 'required',
				pill: 'IDP legally required',
				text: 'Italy, Japan, Thailand, Indonesia, Egypt, Turkey, Greece (non-EU/EEA drivers), Spain, UAE (Russian drivers), Croatia, Switzerland, and most of Europe for non-EU/EEA licence holders. Driving without an IDP is a fine + a rental-insurance void on any subsequent crash.',
			},
			{
				tone: 'rental',
				pill: 'Not by law, but rental desks require it',
				text: 'Greek islands (Santorini, Naxos, Folegandros), parts of Portugal, smaller Spanish agencies, Italian regional cities — the law might say your photocard is fine, but the rental contract conditions a translation document anyway. Refusal at the airport rental row is the actual cost.',
			},
			{
				tone: 'optional',
				pill: 'Not legally required',
				text: 'Mexico (federal law accepts US licences up to 180 days), Costa Rica (90 days under Article 91), Iceland (for English-language Latin-alphabet licences), UAE Dubai (Markhoos 52-country list includes UK), Australia and New Zealand for UK photocard holders. A translation companion is still useful for rental-desk friction reduction.',
			},
		],
	},
	whatIsIdp: {
		heading: 'What an IDP Actually Is',
		lead: "An International Driving Permit is a multilingual translation of your home country driving licence — issued under one of two UN international conventions — that you carry alongside your physical home licence when driving in countries that signed those conventions. It is not, despite the name, a separate licence that authorises you to drive abroad on its own.",
		paragraphs: [
			"The most common misconception is that an IDP is a separate licence that authorises you to drive abroad. It isn't. Your home country licence is the underlying permission. The IDP translates what's on it — your name, photo, validity dates, and the categories of vehicle you're authorised to drive — into a standardised multi-language format that foreign police officers, rental-desk staff, and accident-scene officials can verify in their native script.",
			"Two international conventions govern the IDP system. The 1949 Geneva Convention on Road Traffic (signed September 1949, entered into force March 1952) was the first. Around 100 countries are contracting parties, including the US, Japan, Thailand, Australia, Egypt, and Indonesia. The 1968 Vienna Convention on Road Traffic modernised the format with additional licence categories and security features; around 85 countries have signed or acceded, including most of continental Europe, Russia, and several Middle Eastern countries. A handful of countries signed both. The US never ratified the 1968 update, which is why a US-issued IDP is always Geneva 1949 format — and why a 1968-only IDP issued in, say, Russia is not legally valid in Japan or Thailand.",
			"The practical distinction matters in a small but important set of destinations. Japan accepts only Geneva 1949 IDPs — a tourist arriving with a 1968 IDP from a country that only signed the newer convention has no legal route to drive there at all. Toyota Rent a Car publishes the list of IDP issuers it does and does not recognise on its official site; the constraint is real, not bureaucratic theatre. For most other countries, either convention works in practice.",
			"A government-issued IDP under either convention costs $20-50 in your home country, takes 5-15 business days to receive by mail, and is valid for 12 months from issue. In the US the only authorised issuers are AAA and AATA. In the UK, PayPoint outlets took over from the Post Office in March 2024. In Russia, РОСАВТОКЛУБ. In Germany, ADAC. None of them issue to non-residents — you must apply from your country of residence before you travel.",
		],
	},
	matrix: {
		heading: 'Which Countries Require an IDP — Browse by Destination',
		lead: 'The destination-specific guides below cover legal requirements, rental-desk policy, fine structure, insurance implications, and the most-documented friction patterns. Each guide is updated against Q1 2026 reports from r/IWantOut, FlyerTalk, TripAdvisor and Forum.Vinskogo (for Russian audiences).',
		regions: [
			{
				region: 'Europe — IDP typically required for non-EU drivers',
				rows: [
					{ destination: 'Italy', destFlag: 'it', origin: 'US', originFlag: 'us', hint: 'ZTL camera fines stack', href: '/idp-for-us-drivers-in-italy/' },
					{ destination: 'Greece', destFlag: 'gr', origin: 'US', originFlag: 'us', hint: 'Law 4850/2021 changed it', href: '/idp-for-us-drivers-in-greece/' },
					{ destination: 'Spain', destFlag: 'es', origin: 'US', originFlag: 'us', hint: '20K DGT fines/yr', href: '/idp-for-us-drivers-in-spain/' },
					{ destination: 'France', destFlag: 'fr', origin: 'US', originFlag: 'us', hint: "Crit'Air zones + airport refusals", href: '/idp-for-us-drivers-in-france/' },
					{ destination: 'Iceland', destFlag: 'is', origin: 'US', originFlag: 'us', hint: 'License OK · F-roads risk', href: '/idp-for-us-drivers-in-iceland/' },
					{ destination: 'Switzerland', destFlag: 'ch', origin: 'US', originFlag: 'us', hint: 'Vignette + Raserdelikt', href: '/idp-for-us-drivers-in-switzerland/' },
					{ destination: 'Croatia', destFlag: 'hr', origin: 'US', originFlag: 'us', hint: 'Slovenia border trap', href: '/idp-for-us-drivers-in-croatia/' },
					{ destination: 'Spain', destFlag: 'es', origin: 'UK', originFlag: 'gb', hint: 'Photocard OK · paper needs IDP', href: '/idp-for-uk-drivers-in-spain/' },
					{ destination: 'Greece', destFlag: 'gr', origin: 'UK', originFlag: 'gb', hint: 'Post-Brexit · island variability', href: '/idp-for-uk-drivers-in-greece/' },
					{ destination: 'Portugal', destFlag: 'pt', origin: 'UK', originFlag: 'gb', hint: 'On-spot card fines', href: '/idp-for-uk-drivers-in-portugal/' },
					{ destination: 'Cyprus', destFlag: 'cy', origin: 'UK', originFlag: 'gb', hint: 'Red plates · 15-day fine rule', href: '/idp-for-uk-drivers-in-cyprus/' },
					{ destination: 'Greece', destFlag: 'gr', origin: 'Russia', originFlag: 'ru', hint: '€1,000 double-fine rule', href: '/idp-for-russian-drivers-in-greece/' },
				],
			},
			{
				region: 'Middle East — Markhoos rules in UAE, Egypt strict on convention',
				rows: [
					{ destination: 'UAE', destFlag: 'ae', origin: 'UK', originFlag: 'gb', hint: 'Dubai OK · Abu Dhabi wants one', href: '/idp-for-uk-drivers-in-uae/' },
					{ destination: 'UAE', destFlag: 'ae', origin: 'Russia', originFlag: 'ru', hint: 'Markhoos + Cyrillic required', href: '/idp-for-russian-drivers-in-uae/' },
					{ destination: 'Egypt', destFlag: 'eg', origin: 'Russia', originFlag: 'ru', hint: 'Cyrillic + Sinai checkpoints', href: '/idp-for-russian-drivers-in-egypt/' },
				],
			},
			{
				region: 'Asia — strict enforcement zones',
				rows: [
					{ destination: 'Japan', destFlag: 'jp', origin: 'US', originFlag: 'us', hint: 'Toyota/Nippon reject online IDPs', href: '/idp-for-us-drivers-in-japan/' },
					{ destination: 'Thailand', destFlag: 'th', origin: 'US', originFlag: 'us', hint: 'Scooter trap + medevac risk', href: '/idp-for-us-drivers-in-thailand/' },
					{ destination: 'Thailand', destFlag: 'th', origin: 'UK', originFlag: 'gb', hint: 'Voids insurance without it', href: '/idp-for-uk-drivers-in-thailand/' },
					{ destination: 'Thailand', destFlag: 'th', origin: 'Russia', originFlag: 'ru', hint: 'Cyrillic rejected at rentals', href: '/idp-for-russian-drivers-in-thailand/' },
					{ destination: 'Indonesia (Bali)', destFlag: 'id', origin: 'US', originFlag: 'us', hint: 'Bali razzia · voids medevac', href: '/idp-for-us-drivers-in-indonesia/' },
					{ destination: 'Indonesia (Bali)', destFlag: 'id', origin: 'Russia', originFlag: 'ru', hint: 'Bali razzia + Cyrillic gap', href: '/idp-for-russian-drivers-in-indonesia/' },
					{ destination: 'Turkey', destFlag: 'tr', origin: 'Russia', originFlag: 'ru', hint: 'Article 88 Cyrillic rule', href: '/idp-for-russian-drivers-in-turkey/' },
				],
			},
			{
				region: 'Latin America — IDP rarely required by law, often by rental policy',
				rows: [
					{ destination: 'Mexico', destFlag: 'mx', origin: 'US', originFlag: 'us', hint: 'No IDP needed · Tulum reality', href: '/idp-for-us-drivers-in-mexico/' },
					{ destination: 'Costa Rica', destFlag: 'cr', origin: 'US', originFlag: 'us', hint: '90-day rule · Article 151 plates', href: '/idp-for-us-drivers-in-costa-rica/' },
				],
			},
			{
				region: 'Africa — variable, often photocard-friendly',
				rows: [
					{ destination: 'Morocco', destFlag: 'ma', origin: 'UK', originFlag: 'gb', hint: 'Photocard OK · backward roundabouts', href: '/idp-for-uk-drivers-in-morocco/' },
				],
			},
			{
				region: 'Oceania — typically photocard recognition',
				rows: [
					{ destination: 'Australia', destFlag: 'au', origin: 'UK', originFlag: 'gb', hint: 'Photocard OK · AUD 555 phone fines', href: '/idp-for-uk-drivers-in-australia/' },
				],
			},
		],
		footnote: "Destinations not yet covered with their own guide follow the same archetype patterns — IDP-required strict-enforcement (most of South-East Asia, parts of Africa, Egypt), IDP-required but loose-enforcement (most of Western Europe for non-EU licences), IDP-not-required but rental-desk-conditional (parts of Latin America, Caribbean, photocard-recognition destinations for UK/EU drivers). The country-pair guides above are the canonical reference for each pattern.",
	},
	realCost: {
		heading: 'The Real Cost of Skipping It',
		lead: "The fine itself is rarely the expensive part. The cost lives in the rental insurance clause that voids the moment a missing-IDP infraction is on record — which transfers liability for any subsequent accident from the insurer to you personally. Three failure modes, escalating left to right.",
		cards: [
			{
				icon: 'ph:receipt-x-bold',
				title: 'Rental refusal at the desk',
				text: "The arrival-day failure mode. You've booked, paid the deposit, queued at the rental row, and the agent asks for the IDP — and refuses to process without it. Local IDP issuance does not exist for tourists in any country we've researched. Your options collapse to: cancel and try a different agency (rare success), take a taxi to the hotel and figure it out tomorrow, or take public transport for the trip. Documented cost: typically the full rental fee forfeit plus the cost of alternative transport plus, in peak season, a multi-day delay before any other agency has cars.",
			},
			{
				icon: 'ph:traffic-cone-bold',
				title: 'The on-the-road fine',
				text: "€100-€500 in most of Europe, $50-$120 in Latin America, comparable in South-East Asia. Portugal collects it on the spot via portable card reader; Italy posts it to the rental company which charges your card plus an admin fee. Greece fines the rental company €1,000 separately under the 2018 Traffic Code, which is why no Greek agent absorbs the risk for you. The fine itself is the smaller problem.",
			},
			{
				icon: 'ph:hospital-bold',
				title: 'The insurance-void cascade',
				text: "The expensive failure mode. Rental insurance and most travel insurance condition coverage on operating the vehicle in compliance with local law. Without an IDP where one is required, you're by definition out of compliance — coverage stops. Any subsequent accident — including one not your fault — lands personally. Hospital bills in Thailand for scooter crashes routinely start at $10,000. Medical evacuation back to the US/UK costs $50,000-$250,000. This is the cost the IDP actually buys protection against.",
				severe: true,
			},
		],
	},
	howTo: {
		heading: 'How to Prepare Before You Fly',
		lead: "Four steps, ordered by what kills the trip if missed. Check your destination's actual IDP requirement first. Decide between a government IDP and IDP Companion based on speed and where you'll be driving. Verify the licence categories on your home licence cover what you plan to drive — this is where motorbike trips go sideways. Carry both documents physically with you at every interaction.",
		steps: [
			{
				num: '01',
				title: 'Check whether your destination actually requires an IDP',
				body: "Roughly half of common tourist destinations legally require one for foreign drivers; the other half don't but rental companies often do. The country-by-country table below is the fastest filter. If your destination is on the \"rarely required\" list (Mexico, Costa Rica, Portugal for UK drivers, most of Western Europe for EU/UK photocard holders), you have flexibility. If it's on a strict-enforcement list (Italy, Japan, Greek islands, Indonesia, Egypt), you don't.",
			},
			{
				num: '02',
				title: 'Decide between government-issued IDP and IDP Companion',
				body: "Government-issued IDP from your country's authorised body (AAA / AATA in the US by mail in 10-15 business days, PayPoint outlets in the UK same-day at £5.50 over the counter, РОСАВТОКЛУБ in Russia, ADAC in Germany) is the document you need if your destination is Japan — Japanese rental chains explicitly reject any IDP that is not a government-issued Geneva 1949 IDP, and we are upfront about this throughout. For every other destination in our 22-country-pair coverage, IDP Companion handles the operational friction layer: 2 minutes online from anywhere, $35-55 for 1-5 years, multilingual translation of your home licence, valid alongside the original at rental desks, hotel check-ins, and informal verifications. The trade-off is honest — speed and global access versus the strictest enforcement contexts where only the government document works.",
			},
			{
				num: '03',
				title: 'Verify the categories on your home licence cover what you plan to drive',
				body: "A car-only home licence does not authorise riding a scooter or motorbike abroad — the categories on your IDP mirror your home licence exactly. If you plan to rent a scooter in Thailand, Bali, or Vietnam, you need the motorcycle category on your home licence BEFORE applying for any IDP. Add the category at your home country's DMV/DVLA equivalent first.",
			},
			{
				num: '04',
				title: 'Pair with the original physical home licence and carry both',
				body: "No IDP — government or companion — is valid by itself. Your physical home licence is the underlying permission to drive; the IDP is the translation. Both must be physically present at every rental desk, every checkpoint, every car-hire pickup. Digital copies are widely refused, especially in the UAE, Japan, and Thailand. Print the IDP Companion before flying and carry it in the same folder as your passport.",
			},
		],
	},
	specialCases: {
		heading: 'Special Cases the Standard IDP Question Misses',
		lead: "Motorcycles, long-stay residency triggers, and cross-border rentals each have their own layer of rules that the standard IDP question doesn't touch. Below: where each one diverges from the base case and what closes the gap.",
		blocks: [
			{
				h3: 'Motorbikes and scooters',
				body: "An IDP translates only what your home licence already permits. A car-only home licence (US Class C, UK Category B, Russian Категория B) does not authorise a motorbike or scooter — including small-displacement scooters in Thailand, Indonesia, Vietnam, and most of South-East Asia where the local rule starts at any displacement over 50cc. Get the motorcycle category added at your home country DMV/DVLA equivalent before any IDP application. Travel insurance also typically excludes two-wheelers unless you've explicitly added the motorbike rider — most standard policies don't include it by default.",
			},
			{
				h3: 'Long-stay and digital-nomad scenarios',
				body: "Tourist driving privileges have hard expiration dates. Most countries set them at 90 days from entry; Italy and Japan at 12 months; Portugal at 185 days. Once you cross that boundary, residency licensing rules take over — you're expected to obtain a local licence under any reciprocity agreement that exists or take the local driving test. An IDP doesn't extend this window. For digital nomads on long-stay visas or visa-free hopping, this becomes the operational constraint above the IDP question.",
			},
			{
				h3: 'Cross-border rentals',
				body: "Most rental contracts explicitly prohibit cross-border travel without written permission and additional insurance. A Croatian rental into Slovenia, a Greek rental into Albania, a Czech rental into Hungary, a US rental into Mexico — each crosses an insurance boundary that voids the default contract. Declare any multi-country itinerary at pickup and pay the cross-border fee, or plan to return the car and rent again in the next country. The financial exposure on a cross-border accident in an unauthorised rental can match the insurance-void cascade described above.",
			},
			{
				h3: 'Cyrillic, Greek, Arabic and Asian-script licences',
				body: "Drivers whose home licence is in a non-Latin script (Russian, Greek, Arabic, Chinese, Japanese, Thai) face a doubled friction layer in many destinations — the legal IDP requirement plus the physical-readability gap when a rental agent or police officer cannot transliterate the home licence at all. The IDP solves both problems simultaneously by presenting the licence in a multi-language Latin-script format. Russian drivers travelling to Turkey, UAE, Egypt, Thailand, Indonesia, and Greece encounter this consistently; the country-pair guides above document the specific patterns per destination.",
			},
		],
	},
	faq: {
		heading: 'Frequently asked questions',
		lead: 'The questions we hear most often from travellers researching IDPs — direct answers first, supporting context second.',
		items: [
			{
				id: 'do-i-need-idp',
				question: 'Do I actually need an International Driving Permit?',
				answer: "Depends on where you're going and what you're driving. Roughly 100 countries are signatories to the 1949 Geneva Convention on Road Traffic, which legally requires foreign drivers to carry an IDP alongside their home licence. Another 85 are on the 1968 Vienna Convention. Some countries (Mexico, Costa Rica, parts of the Caribbean) accept your home licence alone for tourist stays. The rental desk question is often more decisive than the legal question — many international rental chains list IDP as a booking condition regardless of national law. The country-specific guides linked below break this down per destination.",
			},
			{
				id: 'geneva-vs-vienna',
				question: "What's the difference between the 1949 Geneva and 1968 Vienna IDPs?",
				answer: "They're two separate international conventions with different signatory countries and slightly different document formats. The 1949 Geneva Convention IDP is recognised in countries like the US, Japan, Thailand, Egypt, and Indonesia. The 1968 Vienna Convention IDP modernised the format and is recognised across most of Europe, plus Russia and several Middle Eastern countries. The US never ratified the 1968 update, which is why a US-issued IDP follows the Geneva 1949 format. A 1949-issued IDP is not valid in countries that only signed 1968 (and vice versa). Most countries accept either, but the specific format matters in a handful of strict-enforcement destinations — most notably Japan, which rejects anything that isn't a Geneva 1949 IDP issued by an authorised national body.",
			},
			{
				id: 'where-do-i-get-one',
				question: 'Where do I get an IDP — and how fast?',
				answer: "For a government-recognised Geneva 1949 IDP, you have one option per country: AAA or AATA in the US, PayPoint outlets in the UK (replacing the Post Office in March 2024), РОСАВТОКЛУБ in Russia, ADAC in Germany. These take 5-15 business days by mail (US/UK) and cost $20-50. The catch: you must apply from your country of residence — they don't issue to foreign tourists who are already abroad. IDP Companion is a private multilingual translation document that pairs with your home licence at most rental desks and informal verifications — it's generated in 2 minutes online from anywhere in the world for $35, valid 1-5 years. It is not a government-issued IDP and we're upfront about that throughout this site.",
			},
			{
				id: 'rental-desk-actually-check',
				question: 'Do rental desks actually check?',
				answer: "Inconsistently — and that's the trap. Major chains at airport rental rows in heavily-visited destinations (Rome FCO, Athens ATH, Madrid MAD, Bangkok BKK) check at least some of the time. Smaller agencies on tourist islands and in regional cities check less consistently. Q1 2026 r/IWantOut and FlyerTalk threads show the strictest enforcement clusters at: Italian airport rentals, Greek island agencies on Santorini/Naxos/Folegandros, Japanese rental chains nationwide (Toyota Rent a Car explicitly publishes which IDPs they accept), and Indonesian Bali rentals. The risk asymmetry matters more than the average rate: a rental refusal on arrival day is a vacation-day-zero crisis with no recourse.",
			},
			{
				id: 'fines-cost',
				question: 'What does a fine for driving without an IDP cost?',
				answer: "Modest on its own — usually €100-€400 in Europe, $50-$120 in Latin America, similar in South-East Asia. The financial damage doesn't live in the fine itself. It lives in the rental insurance clause that voids coverage the moment a missing-IDP infraction is on record. That means any subsequent accident — even one not your fault — lands directly on you personally. Hospital bills for foreign tourists in Thailand routinely exceed $10,000. Medical evacuation costs $50,000-$250,000. The IDP doesn't prevent crashes; it prevents the insurance-void cascade that follows.",
			},
			{
				id: 'insurance-actually-void',
				question: 'Will my travel insurance really void if I drive without an IDP?',
				answer: "Most standard travel and rental policies condition coverage on \"operating the vehicle in compliance with local law.\" If the destination legally requires an IDP and you don't have one, you're by definition not in compliance — coverage stops at that point. World Nomads, Allianz, Generali, and most major US/UK travel policies use this clause. Credit card rental insurance (Visa, Amex, Mastercard) is even more restrictive — many policies explicitly exclude countries from coverage, and most cap at 31 days. Read your specific policy before assuming you're covered. If the policy is silent on IDP requirements, the local-law-compliance clause still applies by default.",
			},
			{
				id: 'idp-companion-vs-aaa',
				question: 'Is IDP Companion a substitute for an AAA / AATA / PayPoint IDP?',
				answer: "No — and we don't claim it is. IDP Companion is a private multilingual translation document presenting your home licence in 12 languages from the 1949 Geneva Convention character set. It pairs with your physical home licence to reduce friction at rental desks, hotel check-ins, ferry counters, and informal police interactions where a translated reference of your licence resolves the verification faster than the foreign-language original alone. It is not a government-issued IDP under either international convention. For destinations with strict government enforcement (Japan being the most documented case), you need the authorised national IDP. For most other destinations, IDP Companion handles the operational friction layer.",
			},
			{
				id: 'how-long-valid',
				question: 'How long is an IDP valid?',
				answer: "Government-issued IDPs (AAA, AATA, PayPoint, РОСАВТОКЛУБ, etc.) under both Geneva 1949 and Vienna 1968 are valid for 1 year from issue. Most countries also require the IDP to have been issued within 12 months of arrival — Japan specifically validates against your entry stamp date, so a 13-month-old IDP doesn't work even if technically still within validity. IDP Companion is valid 1, 3, or 5 years from purchase, tied to your home licence — if your home licence expires before the companion period ends, the companion expires with it.",
			},
			{
				id: 'motorcycle-scooter',
				question: 'I want to ride a scooter or motorbike abroad. Different rules?',
				answer: "Yes — and this is where most uninformed travellers run into trouble. An IDP translates exactly what your home licence permits and nothing more. If your home licence is car-only (no motorcycle category), your IDP also doesn't cover motorbikes — including scooters. In Thailand and Indonesia, a car-only home licence means you cannot legally rent a scooter even with an IDP, and your travel insurance voids if you ride one. Get the motorcycle endorsement (Category A in EU/UK/Russia format, Class M or equivalent in the US) added to your home licence BEFORE applying for any IDP. Otherwise the IDP is paperwork that doesn't solve the actual problem.",
			},
			{
				id: 'digital-nomads-long-stays',
				question: "I'm a digital nomad / staying long-term. Still an IDP question?",
				answer: "Yes initially, but it shifts. Most countries' tourist-driving privileges expire at the 90-day, 180-day, or 12-month mark depending on the destination. Once you cross that boundary, residency licensing rules take over — you're expected to obtain a local driving licence or convert your home licence under any reciprocity agreement that exists. Long stays in Portugal (185 days), Italy (12 months), Japan (12 months), and Costa Rica (90 days) trigger residency licensing requirements. The IDP itself doesn't solve this — it covers the tourist window, after which the local licensing process kicks in. The country-pair guides below cover residency triggers per destination where they apply.",
			},
			{
				id: 'cross-border-rental',
				question: 'Can I drive a rental car across borders in Europe / Asia / the Caribbean?',
				answer: "Only with the rental company's written permission, which is rarely included by default. Most rental agreements explicitly prohibit cross-border travel without an upgrade and additional insurance. Crossing into a country with different driving rules (e.g. a Croatian rental into Slovenia, a Greek rental into Albania, a Czech rental into Hungary) frequently voids both insurance and contract. If your itinerary covers multiple countries, you typically need to either: (a) declare the route at pickup and pay the cross-border fee, (b) return the car and rent again in the new country, or (c) take public transport / rideshare for the cross-border leg. Verify in writing before booking — this is one of the most expensive surprises in international car rentals.",
			},
			{
				id: 'what-if-already-abroad',
				question: "I'm already abroad without an IDP. What now?",
				answer: "Your home country's government-IDP issuer (AAA, PayPoint, РОСАВТОКЛУБ, etc.) won't issue to you while you're outside the country. Your practical options: (a) IDP Companion — generate online in 2 minutes from your hotel for $35, prints from any printer, covers the multilingual-translation friction layer; (b) ask the rental company in advance whether they'll process the rental on your home licence alone (some chains will, especially during off-peak; many won't); (c) skip the rental and use Grab/Bolt/Uber/private driver for the trip. Most destinations have at least option (a) as a fast bridge.",
			},
		],
	},
	related: {
		heading: 'Related guides and references',
		lead: "Cross-references for the questions this guide doesn't fully answer.",
		cards: [
			{ href: '/sample-pdf/', title: 'Sample IDP Companion PDF', text: 'Preview the actual document — cover page, personal-details layout, multilingual translation section, and license-category page. Watermarked.' },
			{ href: '/pricing/', title: 'Pricing — 1, 3, or 5 years', text: '$35 / 1 year · $45 / 3 years · $55 / 5 years. One-time payment, no subscription. Re-printable through the validity period.' },
			{ href: '/how-it-works/', title: 'How IDP Companion works', text: "The 2-minute generation flow, what you upload, what you receive, what the PDF physically contains, and where it's most useful at the rental desk." },
			{ href: '/faq/', title: 'Product FAQ', text: "Common questions about IDP Companion as a product — refunds, license categories, where it's accepted, what it isn't." },
		],
	},
	finalCta: {
		heading: 'Generate your IDP Companion before you fly',
		text: 'Multilingual PDF translating your home driver licence into 12 widely-spoken languages from the 1949 Geneva Convention set. Generated from your real licence in 2 minutes online. Print at home, at the hotel front desk, or from any internet cafe abroad if the original is lost. Valid 1, 3, or 5 years — covers this trip and the next ones across every destination in our country-pair coverage.',
		button: 'Get IDP Companion — $35',
	},
	sources: {
		heading: 'Sources and references',
		items: [
			'United Nations Treaty Collection — 1949 Geneva Convention on Road Traffic, current contracting parties list',
			'United Nations Treaty Collection — 1968 Vienna Convention on Road Traffic, current contracting parties list',
			'US Department of State, Bureau of Consular Affairs — international driving information for US citizens',
			'UK Government (gov.uk) — driving abroad, post-Brexit licensing recognition agreement (2020)',
			'European Commission — driving licence recognition framework for non-EU residents',
			'American Automobile Association (AAA) — IDP issuance policy and country requirements',
			'American Automobile Touring Alliance (AATA) — IDP requirements and FAQs',
			'PayPoint UK — IDP issuance information (replaced Post Office in March 2024)',
			'Toyota Rent a Car — official IDP acceptance policy (Japan)',
			'Country-specific traffic codes: Codice della Strada (Italy), Law 4850/2021 (Greece), Decree-Law 138/2012 (Portugal), Ley 9078 Article 91 (Costa Rica), Article 88 of Law 2918 (Turkey), Law No. 22/2009 (Indonesia), Federal Law of the Russian Federation on Road Safety',
			'Reuters and Reuters Health — international travel insurance industry analyses on coverage clauses tied to local-law compliance',
			'World Nomads, Allianz, Generali — published policy terms for travel insurance with motorbike rider and IDP-compliance clauses',
		],
		legalHeading: 'Legal disclaimer',
		legalText: 'IDP Companion is a private multilingual translation companion document and is not affiliated with the United Nations, any national government, or any authorised IDP-issuing body. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention on Road Traffic or the 1968 Vienna Convention on Road Traffic. Authorised national issuers of Geneva 1949 IDPs include AAA and AATA (United States), PayPoint outlets (United Kingdom, replacing the Post Office in March 2024), РОСАВТОКЛУБ (Russia), and ADAC (Germany). IDP Companion must be used alongside your original physical driver\'s licence and is intended to reduce verification friction at rental desks, hotel check-ins, and informal verifications — not to replace a government-issued IDP where local law specifically requires one.',
	},
	howToSchemaDescription: 'Four steps to determine whether you need an IDP, choose the right document for your destination, verify license categories, and carry both physically.',
};

// =====================================================================
// RU — hand-edited translation, Forum.Vinskogo POV, Russian audience
// =====================================================================

const ru: GuideCopy = {
	seo: {
		title: 'Вождение за рубежом 2026: какой IDP нужен вам (50+ стран)',
		description: 'Женева 1949 или Вена 1968? Конвенция страны решает, какой IDP работает. Гид 2026 по 50+ странам + что будет, если пропустить документ.',
		ogTitleShort: 'IDP за рубежом 2026: какой нужен',
		ogSubtitle: 'Женева 1949 vs Вена 1968 · 50+ стран · цена отказа',
	},
	breadcrumbs: {
		home: 'Главная',
		guides: 'Гиды',
		current: 'Вождение за рубежом 2026',
	},
	hero: {
		kicker: 'Полный гид · издание 2026',
		title: 'Вождение за рубежом в 2026: полный гид по IDP',
		lead: 'Нужно ли вам Международное водительское удостоверение зависит от того, куда едете, какую конвенцию ООН подписала страна и что реально проверяют на стойке аренды при выдаче машины. Одна только Испания выписывает более 20 000 штрафов DGT в год иностранцам без IDP; греческий закон штрафует прокатную компанию ещё на €1 000 по Дорожному кодексу 2018 — поэтому Hertz в Ираклионе никогда не берёт риск на себя. По данным 22 страновых пар-гидов, которые мы поддерживаем на этом сайте, юридический ответ и ответ на стойке расходятся на несколько сотен долларов и сорванный день отпуска примерно в половине направлений нашего покрытия. Этот гид — сквозной взгляд: как работают конвенции Женевы 1949 и Вены 1968, какие страны под какой попадают, что делает страховка когда вы пропускаете шаг, и три способа получить документ IDP-класса до вылета. Гиды по конкретным странам, на которые есть ссылки ниже, разбирают детали по каждому направлению.',
		ctaPrimary: 'Получить IDP Companion за 2 минуты — $35',
		ctaSecondary: 'Все тарифы',
		authorBy: 'Автор:',
		authorReviewedLabel: 'Последняя проверка:',
		authorReviewedDate: 'Июнь 2026',
	},
	quickVerdict: {
		heading: 'Краткий вердикт',
		lead: 'Быстрее всего ответить «нужен ли мне IDP в поездке» через три фильтра — страна назначения, что собираетесь водить, и какой документ прокатная компания указывает в условиях брони.',
		cards: [
			{
				tone: 'required',
				pill: 'IDP требуется по закону',
				text: 'Италия, Япония, Таиланд, Индонезия, Египет, Турция, Греция (для не-ЕС/ЕЭП водителей), Испания, ОАЭ (для россиян), Хорватия, Швейцария и большая часть Европы для не-ЕС/ЕЭП прав. Ехать без IDP — штраф и аннулирование страховки аренды при любом ДТП.',
			},
			{
				tone: 'rental',
				pill: 'Не по закону, но прокат требует',
				text: 'Греческие острова (Санторини, Наксос, Фолегандрос), часть Португалии, мелкие испанские агентства, итальянские региональные города — закон может говорить, что фотокарта подходит, но в договоре аренды всё равно прописан перевод. Отказ на стойке в аэропорту — это реальная цена.',
			},
			{
				tone: 'optional',
				pill: 'Не требуется по закону',
				text: 'Мексика (федеральный закон принимает американские права до 180 дней), Коста-Рика (90 дней по Статье 91), Исландия (для англоязычных прав на латинице), Дубай (список Markhoos на 52 страны включает Великобританию), Австралия и Новая Зеландия для держателей UK-фотокарты. Перевод-компаньон всё равно полезен для снижения трения на стойке аренды.',
			},
		],
	},
	whatIsIdp: {
		heading: 'Что такое IDP на самом деле',
		lead: 'Международное водительское удостоверение — это многоязычный перевод ваших национальных водительских прав, выпущенный под одной из двух международных конвенций ООН, который вы носите вместе с физическими национальными правами, когда ездите в странах-подписантах этих конвенций. Это, вопреки названию, НЕ отдельное удостоверение, которое самостоятельно даёт право водить за рубежом.',
		paragraphs: [
			'Самое частое заблуждение — что IDP это отдельное удостоверение, которое разрешает водить за рубежом. Это не так. Ваши национальные права — это первичное разрешение. IDP переводит то, что в них написано — имя, фото, сроки действия и категории транспорта, на которые вы имеете право — в стандартизованный многоязычный формат, который иностранные полицейские, сотрудники проката и участники оформления ДТП могут прочитать на своём языке.',
			'Системой IDP управляют две международные конвенции. Женевская конвенция о дорожном движении 1949 года (подписана в сентябре 1949, вступила в силу в марте 1952) была первой. К ней присоединились около 100 стран, включая США, Японию, Таиланд, Австралию, Египет и Индонезию. Венская конвенция о дорожном движении 1968 года модернизировала формат, добавила категории и элементы защиты; к ней присоединились около 85 стран, включая большую часть континентальной Европы, Россию и несколько стран Ближнего Востока. Некоторые страны подписали обе. США так и не ратифицировали обновление 1968 года — поэтому американский IDP всегда формата Женевы 1949 — и поэтому IDP формата только Вены 1968, выданный, скажем, в России, юридически не действует в Японии или Таиланде.',
			'Практическое различие важно в небольшом, но критичном наборе стран. Япония принимает только IDP формата Женевы 1949 — турист, прилетающий с IDP формата только Вены 1968 из страны, подписавшей только новую конвенцию, юридически вообще не может там водить. Toyota Rent a Car публикует список IDP-эмитентов, которых она признаёт и не признаёт, на своём официальном сайте; ограничение реально, это не бюрократический театр. Для большинства других стран на практике работают обе конвенции.',
			'Государственный IDP под любой из конвенций стоит $20–50 в стране проживания, занимает 5–15 рабочих дней по почте и действителен 12 месяцев с момента выдачи. В США единственные уполномоченные эмитенты — AAA и AATA. В Великобритании отделения PayPoint заменили Post Office в марте 2024. В России — РОСАВТОКЛУБ. В Германии — ADAC. Ни один из них не выдаёт нерезидентам — нужно подавать заявку из страны проживания до поездки.',
		],
	},
	matrix: {
		heading: 'Какие страны требуют IDP — выбирайте по направлению',
		lead: 'Гайды по конкретным направлениям ниже разбирают юридические требования, политику стойки аренды, структуру штрафов, влияние на страховку и наиболее задокументированные паттерны трения. Каждый гид обновлён по отчётам Q1 2026 из Forum.Vinskogo, r/IWantOut, FlyerTalk и TripAdvisor.',
		regions: [
			{
				region: 'Европа — IDP обычно нужен не-ЕС водителям',
				rows: [
					{ destination: 'Италия', destFlag: 'it', origin: 'США', originFlag: 'us', hint: 'Штрафы с ZTL-камер копятся', href: '/idp-for-us-drivers-in-italy/' },
					{ destination: 'Греция', destFlag: 'gr', origin: 'США', originFlag: 'us', hint: 'Закон 4850/2021 поменял правила', href: '/idp-for-us-drivers-in-greece/' },
					{ destination: 'Испания', destFlag: 'es', origin: 'США', originFlag: 'us', hint: '20 тыс. штрафов DGT в год', href: '/idp-for-us-drivers-in-spain/' },
					{ destination: 'Франция', destFlag: 'fr', origin: 'США', originFlag: 'us', hint: "Зоны Crit'Air + отказы в аэропортах", href: '/idp-for-us-drivers-in-france/' },
					{ destination: 'Исландия', destFlag: 'is', origin: 'США', originFlag: 'us', hint: 'Права принимают · F-дороги опасны', href: '/idp-for-us-drivers-in-iceland/' },
					{ destination: 'Швейцария', destFlag: 'ch', origin: 'США', originFlag: 'us', hint: 'Виньетка + Raserdelikt', href: '/idp-for-us-drivers-in-switzerland/' },
					{ destination: 'Хорватия', destFlag: 'hr', origin: 'США', originFlag: 'us', hint: 'Граница со Словенией — ловушка', href: '/idp-for-us-drivers-in-croatia/' },
					{ destination: 'Испания', destFlag: 'es', origin: 'Великобритания', originFlag: 'gb', hint: 'Фотокарта ОК · бумажные нужен IDP', href: '/idp-for-uk-drivers-in-spain/' },
					{ destination: 'Греция', destFlag: 'gr', origin: 'Великобритания', originFlag: 'gb', hint: 'Пост-Брексит · разброс по островам', href: '/idp-for-uk-drivers-in-greece/' },
					{ destination: 'Португалия', destFlag: 'pt', origin: 'Великобритания', originFlag: 'gb', hint: 'Штрафы картой на месте', href: '/idp-for-uk-drivers-in-portugal/' },
					{ destination: 'Кипр', destFlag: 'cy', origin: 'Великобритания', originFlag: 'gb', hint: 'Красные номера · правило 15 дней', href: '/idp-for-uk-drivers-in-cyprus/' },
					{ destination: 'Греция', destFlag: 'gr', origin: 'Россия', originFlag: 'ru', hint: 'Двойной штраф €1 000', href: '/idp-for-russian-drivers-in-greece/' },
				],
			},
			{
				region: 'Ближний Восток — Markhoos в ОАЭ, строгая конвенция в Египте',
				rows: [
					{ destination: 'ОАЭ', destFlag: 'ae', origin: 'Великобритания', originFlag: 'gb', hint: 'Дубай ОК · Абу-Даби хочет IDP', href: '/idp-for-uk-drivers-in-uae/' },
					{ destination: 'ОАЭ', destFlag: 'ae', origin: 'Россия', originFlag: 'ru', hint: 'Markhoos + кириллица обязательны', href: '/idp-for-russian-drivers-in-uae/' },
					{ destination: 'Египет', destFlag: 'eg', origin: 'Россия', originFlag: 'ru', hint: 'Кириллица + блокпосты Синая', href: '/idp-for-russian-drivers-in-egypt/' },
				],
			},
			{
				region: 'Азия — зоны строгого контроля',
				rows: [
					{ destination: 'Япония', destFlag: 'jp', origin: 'США', originFlag: 'us', hint: 'Toyota/Nippon отклоняют онлайн-IDP', href: '/idp-for-us-drivers-in-japan/' },
					{ destination: 'Таиланд', destFlag: 'th', origin: 'США', originFlag: 'us', hint: 'Скутер-ловушка + риск медэвакуации', href: '/idp-for-us-drivers-in-thailand/' },
					{ destination: 'Таиланд', destFlag: 'th', origin: 'Великобритания', originFlag: 'gb', hint: 'Без него аннулируется страховка', href: '/idp-for-uk-drivers-in-thailand/' },
					{ destination: 'Таиланд', destFlag: 'th', origin: 'Россия', originFlag: 'ru', hint: 'Кириллицу на прокате не принимают', href: '/idp-for-russian-drivers-in-thailand/' },
					{ destination: 'Индонезия (Бали)', destFlag: 'id', origin: 'США', originFlag: 'us', hint: 'Bали razzia · аннулирует медэвакуацию', href: '/idp-for-us-drivers-in-indonesia/' },
					{ destination: 'Индонезия (Бали)', destFlag: 'id', origin: 'Россия', originFlag: 'ru', hint: 'Bали razzia + кириллица', href: '/idp-for-russian-drivers-in-indonesia/' },
					{ destination: 'Турция', destFlag: 'tr', origin: 'Россия', originFlag: 'ru', hint: 'Правило Статьи 88 по кириллице', href: '/idp-for-russian-drivers-in-turkey/' },
				],
			},
			{
				region: 'Латинская Америка — IDP редко по закону, часто по политике проката',
				rows: [
					{ destination: 'Мексика', destFlag: 'mx', origin: 'США', originFlag: 'us', hint: 'IDP не нужен · реальность Тулума', href: '/idp-for-us-drivers-in-mexico/' },
					{ destination: 'Коста-Рика', destFlag: 'cr', origin: 'США', originFlag: 'us', hint: 'Правило 90 дней · конфискация номеров', href: '/idp-for-us-drivers-in-costa-rica/' },
				],
			},
			{
				region: 'Африка — по-разному, часто принимают фотокарту',
				rows: [
					{ destination: 'Марокко', destFlag: 'ma', origin: 'Великобритания', originFlag: 'gb', hint: 'Фотокарта ОК · обратные круги', href: '/idp-for-uk-drivers-in-morocco/' },
				],
			},
			{
				region: 'Океания — обычно признание фотокарты',
				rows: [
					{ destination: 'Австралия', destFlag: 'au', origin: 'Великобритания', originFlag: 'gb', hint: 'Фотокарта ОК · штраф $555 за телефон', href: '/idp-for-uk-drivers-in-australia/' },
				],
			},
		],
		footnote: 'Направления, для которых отдельного гида ещё нет, следуют тем же архетипам — IDP-обязательно со строгим контролем (большая часть Юго-Восточной Азии, часть Африки, Египет), IDP-обязательно но слабый контроль (большая часть Западной Европы для не-ЕС прав), IDP не обязательно но прокат может требовать (часть Латинской Америки, Карибы, признание фотокарты для UK/EU). Гиды по парам стран выше — канонические ссылки на каждый паттерн.',
	},
	realCost: {
		heading: 'Реальная цена ошибки',
		lead: 'Сам штраф редко самая дорогая часть. Цена сидит в пункте страховки аренды, который аннулирует покрытие в момент, когда зафиксирован факт отсутствия IDP — и это перекладывает ответственность за любое последующее ДТП со страховщика на вас лично. Три сценария отказа, по нарастающей слева направо.',
		cards: [
			{
				icon: 'ph:receipt-x-bold',
				title: 'Отказ на стойке проката',
				text: 'Сценарий «день прилёта». Вы забронировали, оплатили депозит, отстояли очередь в прокатном ряду, агент просит IDP — и отказывается оформлять без него. Местного выпуска IDP для туристов нет ни в одной стране нашего покрытия. Варианты сжимаются до: отменить и попробовать другое агентство (редко срабатывает), взять такси до отеля и решать завтра, или взять общественный транспорт. Документированная цена: обычно потеря всей оплаты аренды плюс стоимость альтернативного транспорта плюс, в высокий сезон, многодневная задержка пока у другого агентства появятся машины.',
			},
			{
				icon: 'ph:traffic-cone-bold',
				title: 'Штраф на дороге',
				text: '€100–€500 в большей части Европы, $50–$120 в Латинской Америке, сопоставимо в Юго-Восточной Азии. Португалия собирает штраф на месте через мобильный POS-терминал; Италия отправляет его прокатной компании, которая списывает с вашей карты плюс админ-комиссию. Греция дополнительно штрафует прокатную компанию на €1 000 по Дорожному кодексу 2018 — поэтому ни один греческий агент не берёт риск на себя за вас. Сам штраф — меньшая часть проблемы.',
			},
			{
				icon: 'ph:hospital-bold',
				title: 'Каскад аннулирования страховки',
				text: 'Дорогой сценарий отказа. Страховка аренды и большинство туристических страховок завязаны на эксплуатации авто в соответствии с местным законом. Без IDP там, где он требуется, вы по определению не соответствуете — покрытие прекращается. Любое последующее ДТП — даже не по вашей вине — ложится лично. Госпитальные счета в Таиланде после скутер-аварий обычно стартуют от $10 000. Медэвакуация обратно в США/Великобританию стоит $50 000–$250 000. Именно от этого IDP реально страхует.',
				severe: true,
			},
		],
	},
	howTo: {
		heading: 'Как подготовиться до вылета',
		lead: 'Четыре шага, упорядоченные по тому, что убивает поездку если пропустить. Сначала проверьте реальное требование IDP в стране назначения. Решите между государственным IDP и IDP Companion по скорости и тому, где будете ехать. Проверьте, что категории на ваших национальных правах покрывают то, что планируете водить — именно здесь срываются мото-поездки. Носите оба документа физически с собой при каждой проверке.',
		steps: [
			{
				num: '01',
				title: 'Проверьте, реально ли в вашей стране назначения нужен IDP',
				body: 'Примерно половина популярных туристических направлений юридически требует IDP от иностранцев; другая половина — нет, но прокатные компании часто требуют. Таблица по странам ниже — самый быстрый фильтр. Если ваше направление в списке «редко требуется» (Мексика, Коста-Рика, Португалия для UK-водителей, большая часть Западной Европы для держателей ЕС/UK фотокарт), у вас есть гибкость. Если в списке строгого контроля (Италия, Япония, греческие острова, Индонезия, Египет) — нет.',
			},
			{
				num: '02',
				title: 'Решите между государственным IDP и IDP Companion',
				body: 'Государственный IDP от уполномоченного органа вашей страны (AAA / AATA в США по почте за 10–15 рабочих дней, отделения PayPoint в UK день-в-день за £5.50 на стойке, РОСАВТОКЛУБ в России, ADAC в Германии) — это документ, который нужен если ваше направление Япония: японские прокатные сети явно отклоняют любой IDP, не являющийся государственным IDP формата Женевы 1949, и мы открыто говорим об этом по всему сайту. Для любого другого направления из нашего покрытия 22 стран-пар IDP Companion закрывает операционный слой трения: 2 минуты онлайн откуда угодно, $35–55 за 1–5 лет, многоязычный перевод национальных прав, действует вместе с оригиналом на стойках аренды, при заселении в отель и неформальных проверках. Компромисс честный — скорость и глобальный доступ против контекстов самого строгого контроля, где работает только государственный документ.',
			},
			{
				num: '03',
				title: 'Проверьте, что категории на национальных правах покрывают то, что собираетесь водить',
				body: 'Права только категории B не дают права на скутер или мотоцикл за рубежом — категории на вашем IDP в точности повторяют ваши национальные. Если планируете брать скутер в Таиланде, на Бали или во Вьетнаме, нужно добавить категорию A на национальные права ДО подачи заявки на любой IDP. Добавьте категорию в ГАИ страны проживания первым делом.',
			},
			{
				num: '04',
				title: 'Носите оригинал национальных прав вместе с IDP',
				body: 'Никакой IDP — ни государственный, ни companion — не действителен сам по себе. Ваши физические национальные права — это первичное разрешение водить; IDP это перевод. Оба должны физически присутствовать на каждой стойке проката, каждом блокпосту, каждой выдаче машины. Цифровые копии массово отказывают принимать, особенно в ОАЭ, Японии и Таиланде. Распечатайте IDP Companion до вылета и носите в одной папке с загранпаспортом.',
			},
		],
	},
	specialCases: {
		heading: 'Особые случаи, которые стандартный вопрос про IDP не закрывает',
		lead: 'У мотоциклов, длительного пребывания (резидентство) и трансграничной аренды свой слой правил, который стандартный вопрос про IDP не трогает. Ниже: где каждый из них отклоняется от базового сценария и что закрывает разрыв.',
		blocks: [
			{
				h3: 'Мотоциклы и скутеры',
				body: 'IDP переводит ровно то, что уже разрешают ваши национальные права. Права только категории B (US Class C, UK Category B, российская категория B) не дают права на мотоцикл или скутер — включая малокубатурные скутеры в Таиланде, Индонезии, Вьетнаме и большей части Юго-Восточной Азии, где местное правило стартует на любом объёме свыше 50 куб. см. Добавьте категорию A в ГАИ страны проживания до подачи заявки на любой IDP. Туристическая страховка также обычно исключает двухколёсный транспорт, если вы не доплатили за мото-райдер — стандартные полисы по умолчанию его не включают.',
			},
			{
				h3: 'Длительное пребывание и сценарии цифровых кочевников',
				body: 'У туристических водительских привилегий есть жёсткие сроки. Большинство стран ставит 90 дней с момента въезда; Италия и Япония — 12 месяцев; Португалия — 185 дней. Как только вы пересекаете эту границу, в дело вступают правила резидентского лицензирования — от вас ждут получения местных прав по любому соглашению о взаимности или сдачи местного экзамена. IDP не продлевает это окно. Для цифровых кочевников на долгосрочных визах или визово-хоппинге это становится операционным ограничением выше уровня IDP-вопроса.',
			},
			{
				h3: 'Трансграничная аренда',
				body: 'Большинство договоров аренды явно запрещает пересечение границ без письменного разрешения и дополнительной страховки. Хорватская аренда в Словению, греческая в Албанию, чешская в Венгрию, американская в Мексику — каждая пересекает страховую границу, которая аннулирует базовый договор. Объявите многострановой маршрут при получении и оплатите трансграничную надбавку, либо планируйте сдать машину и арендовать заново в следующей стране. Финансовый риск трансграничного ДТП на неавторизованной аренде может сравняться с каскадом аннулирования страховки, описанным выше.',
			},
			{
				h3: 'Кириллица, греческий, арабский и азиатские алфавиты на правах',
				body: 'Водители с правами на нелатинском алфавите (русский, греческий, арабский, китайский, японский, тайский) сталкиваются с двойным слоем трения во многих странах — юридическое требование IDP плюс физический разрыв читаемости, когда прокатный агент или полицейский в принципе не может транслитерировать ваши права. IDP решает обе проблемы одновременно, представляя права в многоязычном латинском формате. Россияне, едущие в Турцию, ОАЭ, Египет, Таиланд, Индонезию и Грецию, сталкиваются с этим постоянно; гиды по парам стран выше документируют конкретные паттерны по каждому направлению.',
			},
		],
	},
	faq: {
		heading: 'Часто задаваемые вопросы',
		lead: 'Вопросы, которые мы чаще всего слышим от путешественников, разбирающихся с IDP — прямые ответы первой строкой, контекст после.',
		items: [
			{
				id: 'do-i-need-idp',
				question: 'А реально ли мне нужно Международное водительское удостоверение?',
				answer: 'Зависит от того, куда едете и что собираетесь водить. Около 100 стран — участники Женевской конвенции о дорожном движении 1949 года, которая юридически требует от иностранных водителей носить IDP вместе с национальными правами. Ещё около 85 — участники Венской конвенции 1968 года. Некоторые страны (Мексика, Коста-Рика, часть Карибов) принимают одни национальные права для туристов. Вопрос стойки аренды часто решает больше юридического: многие международные прокатные сети указывают IDP в условиях брони независимо от национального закона. Гиды по странам ниже разбирают это по каждому направлению.',
			},
			{
				id: 'geneva-vs-vienna',
				question: 'В чём разница между IDP Женевы 1949 и Вены 1968?',
				answer: 'Это две отдельные международные конвенции с разными странами-подписантами и слегка разными форматами документа. IDP формата Женевы 1949 принимают в США, Японии, Таиланде, Египте, Индонезии. IDP формата Вены 1968 модернизировал документ и принимается в большей части Европы, плюс Россия и несколько стран Ближнего Востока. США так и не ратифицировали обновление 1968, поэтому американский IDP всегда формата Женевы 1949. IDP формата только Женевы 1949 не действует в странах, подписавших только Вену 1968 (и наоборот). Большинство стран принимают любой формат, но конкретный формат имеет значение в небольшом наборе стран строгого контроля — особенно в Японии, которая отклоняет всё, что не является IDP формата Женевы 1949, выпущенным уполномоченным национальным органом.',
			},
			{
				id: 'where-do-i-get-one',
				question: 'Где получить IDP — и насколько быстро?',
				answer: 'Для государственно признанного IDP формата Женевы 1949 у вас один вариант на страну: AAA или AATA в США, отделения PayPoint в UK (заменили Post Office в марте 2024), РОСАВТОКЛУБ в России, ADAC в Германии. Это занимает 5–15 рабочих дней по почте (США/UK) и стоит $20–50. Подвох: подавать заявку нужно из страны проживания — нерезидентам они не выдают, и тем, кто уже за границей — тоже нет. IDP Companion — это частный многоязычный переводной документ, который работает с национальными правами на большинстве стоек аренды и при неформальных проверках — генерируется онлайн за 2 минуты откуда угодно за $35, действует 1–5 лет. Это НЕ государственный IDP, и мы открыто об этом говорим по всему сайту.',
			},
			{
				id: 'rental-desk-actually-check',
				question: 'А реально ли на стойке проката проверяют?',
				answer: 'Непоследовательно — и в этом ловушка. Крупные сети в прокатных рядах аэропортов в популярных направлениях (Рим FCO, Афины ATH, Мадрид MAD, Бангкок BKK) проверяют как минимум часть времени. Мелкие агентства на туристических островах и в региональных городах проверяют непоследовательнее. Треды Forum.Vinskogo, r/IWantOut и FlyerTalk за Q1 2026 показывают самые жёсткие кластеры контроля: итальянские аэропортные прокаты, греческие островные агентства на Санторини/Наксосе/Фолегандросе, японские прокатные сети по всей стране (Toyota Rent a Car явно публикует список IDP, которые принимает), и индонезийские прокаты на Бали. Асимметрия риска важнее среднего показателя: отказ в аренде в день прилёта — это кризис нулевого дня отпуска без шансов на восстановление.',
			},
			{
				id: 'fines-cost',
				question: 'Сколько стоит штраф за вождение без IDP?',
				answer: 'Сам по себе скромный — обычно €100–€400 в Европе, $50–$120 в Латинской Америке, схоже в Юго-Восточной Азии. Финансовый ущерб сидит не в самом штрафе. Он сидит в пункте страховки аренды, который аннулирует покрытие в момент, когда зафиксирован факт отсутствия IDP. Это значит, что любое последующее ДТП — даже не по вашей вине — ложится напрямую лично. Госпитальные счета для иностранных туристов в Таиланде регулярно превышают $10 000. Медэвакуация стоит $50 000–$250 000. IDP не предотвращает аварии; он предотвращает каскад аннулирования страховки, который за ними следует.',
			},
			{
				id: 'insurance-actually-void',
				question: 'А правда ли моя туристическая страховка аннулируется, если ехать без IDP?',
				answer: 'Большинство стандартных туристических и прокатных полисов завязаны на условии «эксплуатация транспортного средства в соответствии с местным законом». Если страна юридически требует IDP, а у вас его нет — вы по определению не соответствуете, покрытие прекращается в этой точке. World Nomads, Allianz, Generali и большинство крупных американских и британских туристических полисов используют этот пункт. Страховка аренды по кредитной карте (Visa, Amex, Mastercard) ещё строже — многие полисы прямо исключают определённые страны из покрытия и большинство ограничено 31 днём. Прочтите свой конкретный полис до того как считать, что вы застрахованы. Если в полисе нет упоминания требований к IDP, пункт о соответствии местному закону всё равно применяется по умолчанию.',
			},
			{
				id: 'idp-companion-vs-aaa',
				question: 'Является ли IDP Companion заменой государственного IDP от AAA / AATA / PayPoint?',
				answer: 'Нет — и мы этого не утверждаем. IDP Companion — это частный многоязычный переводной документ, представляющий ваши национальные права на 12 широко распространённых языках из набора Женевской конвенции 1949 года. Он работает вместе с физическими национальными правами для снижения трения на стойках аренды, при заселении в отель, на стойках паромов и при неформальных проверках полиции, где перевод-референс ваших прав ускоряет верификацию быстрее, чем иноязычный оригинал в одиночку. Это НЕ государственный IDP ни под одной из международных конвенций. Для направлений со строгим государственным контролем (Япония — самый задокументированный случай) нужен уполномоченный национальный IDP. Для большинства других направлений IDP Companion закрывает операционный слой трения.',
			},
			{
				id: 'how-long-valid',
				question: 'Сколько действует IDP?',
				answer: 'Государственные IDP (AAA, AATA, PayPoint, РОСАВТОКЛУБ и т. д.) под Женевой 1949 и Веной 1968 действительны 1 год с момента выдачи. Большинство стран также требует, чтобы IDP был выдан не более чем за 12 месяцев до прибытия — Япония специально сверяет с датой штампа въезда, поэтому 13-месячный IDP не работает, даже если технически ещё внутри срока. IDP Companion действителен 1, 3 или 5 лет с момента покупки, привязан к вашим национальным правам — если национальные права заканчиваются до окончания периода компаньона, компаньон заканчивается вместе с ними.',
			},
			{
				id: 'motorcycle-scooter',
				question: 'Я хочу ездить на скутере или мотоцикле за рубежом. Другие правила?',
				answer: 'Да — и именно здесь большинство неинформированных туристов попадает. IDP переводит ровно то, что разрешают ваши национальные права, и не более. Если на национальных правах только категория B (без мото-категории), IDP тоже не покрывает мотоциклы — включая скутеры. В Таиланде и Индонезии национальные права только категории B значат, что вы юридически не можете арендовать скутер даже с IDP, и туристическая страховка аннулируется если поедете. Добавьте мото-категорию (Категория A в формате ЕС/UK/Россия, Class M или эквивалент в США) на национальные права ДО подачи заявки на любой IDP. Иначе IDP — это бумажка, которая не решает реальную проблему.',
			},
			{
				id: 'digital-nomads-long-stays',
				question: 'Я цифровой кочевник / еду надолго. Это всё ещё вопрос про IDP?',
				answer: 'Да сначала, но потом всё меняется. Туристические водительские привилегии большинства стран истекают на отметке 90, 180 дней или 12 месяцев в зависимости от направления. После пересечения этой границы вступают правила резидентского лицензирования — от вас ждут получения местных прав по любому соглашению о взаимности или сдачи местного экзамена. Длительное пребывание в Португалии (185 дней), Италии (12 месяцев), Японии (12 месяцев) и Коста-Рике (90 дней) триггерит требования резидентского лицензирования. IDP сам по себе это не решает — он покрывает туристическое окно, после которого включается процесс местного лицензирования. Гиды по парам стран ниже разбирают резидентские триггеры по тем направлениям, где они применимы.',
			},
			{
				id: 'cross-border-rental',
				question: 'Могу ли я ехать на арендной машине через границы в Европе / Азии / на Карибах?',
				answer: 'Только с письменным разрешением прокатной компании, которое редко включено по умолчанию. Большинство договоров аренды явно запрещает трансграничные поездки без апгрейда и дополнительной страховки. Пересечение в страну с другими правилами движения (например хорватская аренда в Словению, греческая в Албанию, чешская в Венгрию) часто аннулирует и страховку, и договор. Если маршрут охватывает несколько стран, обычно нужно либо: (а) заявить маршрут при получении и оплатить трансграничную надбавку, (б) сдать машину и арендовать заново в новой стране, либо (в) использовать общественный транспорт / такси на трансграничном участке. Уточняйте письменно до бронирования — это один из самых дорогих сюрпризов международной аренды.',
			},
			{
				id: 'what-if-already-abroad',
				question: 'Я уже за рубежом без IDP. Что теперь?',
				answer: 'Государственный IDP-эмитент вашей страны (AAA, PayPoint, РОСАВТОКЛУБ и т. д.) не выдаст вам, пока вы за пределами страны. Практические варианты: (а) IDP Companion — сгенерировать онлайн за 2 минуты из отеля за $35, печатается с любого принтера, закрывает операционный слой многоязычного перевода; (б) спросить прокатную компанию заранее, не оформят ли они аренду только по национальным правам (часть сетей оформит, особенно в низкий сезон; многие — нет); (в) отказаться от аренды и использовать Grab/Bolt/Uber/частного водителя для поездки. Для большинства направлений вариант (а) — самый быстрый мост.',
			},
		],
	},
	related: {
		heading: 'Связанные гиды и ссылки',
		lead: 'Перекрёстные ссылки на вопросы, которые этот гид не закрывает полностью.',
		cards: [
			{ href: '/sample-pdf/', title: 'Образец PDF IDP Companion', text: 'Посмотрите реальный документ — обложку, разворот с личными данными, многоязычный перевод и страницу категорий. С водяным знаком.' },
			{ href: '/pricing/', title: 'Цены — 1, 3 или 5 лет', text: '$35 / 1 год · $45 / 3 года · $55 / 5 лет. Разовая оплата, без подписки. Повторная печать в течение срока действия.' },
			{ href: '/how-it-works/', title: 'Как работает IDP Companion', text: 'Процесс генерации за 2 минуты, что вы загружаете, что получаете, что физически содержит PDF и где он наиболее полезен на стойке проката.' },
			{ href: '/faq/', title: 'FAQ по продукту', text: 'Частые вопросы про IDP Companion как продукт — возвраты, категории прав, где принимают, чем он не является.' },
		],
	},
	finalCta: {
		heading: 'Получите IDP Companion до вылета',
		text: 'Многоязычный PDF с переводом ваших национальных водительских прав на 12 широко распространённых языков из набора Женевской конвенции 1949 года. Генерируется из ваших реальных прав за 2 минуты онлайн. Печатается дома, на стойке отеля или в любом интернет-кафе за рубежом, если оригинал потерян. Действует 1, 3 или 5 лет — покрывает эту поездку и следующие во всех направлениях нашего покрытия.',
		button: 'Получить IDP Companion — $35',
	},
	sources: {
		heading: 'Источники и ссылки',
		items: [
			'Сборник договоров ООН — Женевская конвенция о дорожном движении 1949 года, текущий список участников',
			'Сборник договоров ООН — Венская конвенция о дорожном движении 1968 года, текущий список участников',
			'Госдепартамент США, Бюро консульских дел — информация о вождении за рубежом для граждан США',
			'Правительство Великобритании (gov.uk) — вождение за рубежом, соглашение о признании прав после Брексита (2020)',
			'Европейская комиссия — рамки признания водительских прав для нерезидентов ЕС',
			'American Automobile Association (AAA) — политика выпуска IDP и страновые требования',
			'American Automobile Touring Alliance (AATA) — требования к IDP и FAQ',
			'PayPoint UK — информация о выпуске IDP (заменил Post Office в марте 2024)',
			'Toyota Rent a Car — официальная политика принятия IDP (Япония)',
			'Страновые транспортные кодексы: Codice della Strada (Италия), Закон 4850/2021 (Греция), Декрет-закон 138/2012 (Португалия), Ley 9078 Статья 91 (Коста-Рика), Статья 88 Закона 2918 (Турция), Закон № 22/2009 (Индонезия), Федеральный закон РФ о безопасности дорожного движения',
			'Reuters и Reuters Health — анализы туриндустрии по пунктам страховых полисов, привязанным к соответствию местному закону',
			'World Nomads, Allianz, Generali — опубликованные условия туристической страховки с мото-райдером и пунктами соответствия IDP',
		],
		legalHeading: 'Юридическая оговорка',
		legalText: 'IDP Companion — это частный многоязычный переводной документ-компаньон, не аффилированный с ООН, никаким национальным правительством или уполномоченным эмитентом IDP. IDP Companion не является государственным Международным водительским удостоверением под Женевской конвенцией о дорожном движении 1949 года или Венской конвенцией о дорожном движении 1968 года. Уполномоченные национальные эмитенты IDP формата Женевы 1949 включают AAA и AATA (США), отделения PayPoint (Великобритания, заменили Post Office в марте 2024), РОСАВТОКЛУБ (Россия) и ADAC (Германия). IDP Companion должен использоваться вместе с оригинальными физическими водительскими правами и предназначен для снижения трения при верификации на стойках аренды, при заселении в отель и при неформальных проверках — не для замены государственного IDP там, где этого прямо требует местный закон.',
	},
	howToSchemaDescription: 'Четыре шага, чтобы определить, нужен ли вам IDP, выбрать правильный документ для страны назначения, проверить категории прав и носить оба физически.',
};

// =====================================================================
// ES — Hispanic-American audience POV (US Hispanic + Mexico/Costa Rica bound)
// =====================================================================

const es: GuideCopy = {
	seo: {
		title: 'Conducir en 2026: qué IDP necesitas (50+ países)',
		description: '¿Ginebra 1949 o Viena 1968? La convención del país decide qué IDP funciona. Guía 2026 de 50+ países + qué pasa si lo omites en el mostrador.',
		ogTitleShort: 'Conducir 2026: qué IDP necesitas',
		ogSubtitle: 'Ginebra 1949 vs Viena 1968 · 50+ países · coste real',
	},
	breadcrumbs: {
		home: 'Inicio',
		guides: 'Guías',
		current: 'Conducir en el extranjero 2026',
	},
	hero: {
		kicker: 'Guía completa · edición 2026',
		title: 'Conducir en el extranjero en 2026: guía completa de IDP',
		lead: 'Si necesitas un Permiso Internacional de Conducción depende de a dónde vas, qué convención de la ONU firmó tu destino y qué exige realmente el mostrador de alquiler en la recogida. Solo España emite más de 20 000 multas de la DGT al año a conductores extranjeros sin IDP; la ley griega multa además a la empresa de alquiler con €1 000 bajo el Código de Tráfico de 2018 — por eso Hertz en Heraclión nunca absorbe el riesgo. En las 22 páginas de pares de países que mantenemos en este sitio, la respuesta legal y la respuesta del mostrador difieren en varios cientos de dólares y un día-cero de vacaciones perdido en aproximadamente la mitad de los destinos cubiertos. Esta guía es la vista transversal: cómo funcionan las convenciones de Ginebra 1949 y Viena 1968, qué países caen bajo cada una, qué hace realmente el seguro cuando te lo saltas, y las tres formas de obtener un documento tipo IDP antes de volar. Las guías por destino enlazadas a lo largo del texto cubren los detalles por país.',
		ctaPrimary: 'Obtener IDP Companion en 2 min — $35',
		ctaSecondary: 'Ver todos los planes',
		authorBy: 'Por',
		authorReviewedLabel: 'Última revisión:',
		authorReviewedDate: 'Junio 2026',
	},
	quickVerdict: {
		heading: 'Veredicto rápido',
		lead: 'La forma más rápida de responder «¿necesito un IDP para mi viaje?» es combinar tres filtros — destino, qué vas a conducir y qué documento exige el mostrador como condición de reserva.',
		cards: [
			{
				tone: 'required',
				pill: 'IDP exigido por ley',
				text: 'Italia, Japón, Tailandia, Indonesia, Egipto, Turquía, Grecia (conductores no-UE/EEE), España, EAU (conductores rusos), Croacia, Suiza y la mayor parte de Europa para titulares de licencias no-UE/EEE. Conducir sin IDP supone multa más anulación del seguro de alquiler en cualquier accidente posterior.',
			},
			{
				tone: 'rental',
				pill: 'No por ley, pero el alquiler lo exige',
				text: 'Islas griegas (Santorini, Naxos, Folegandros), partes de Portugal, agencias españolas pequeñas, ciudades regionales italianas — la ley puede decir que tu fotocard sirve, pero el contrato de alquiler exige un documento de traducción de todos modos. El rechazo en el mostrador del aeropuerto es el coste real.',
			},
			{
				tone: 'optional',
				pill: 'No exigido por ley',
				text: 'México (la ley federal acepta licencias de EE.UU. hasta 180 días), Costa Rica (90 días bajo el Artículo 91), Islandia (para licencias en alfabeto latino e inglés), Dubái (la lista Markhoos de 52 países incluye al Reino Unido), Australia y Nueva Zelanda para titulares de fotocard UK. Un compañero de traducción sigue siendo útil para reducir la fricción en el mostrador.',
			},
		],
	},
	whatIsIdp: {
		heading: 'Qué es realmente un IDP',
		lead: 'Un Permiso Internacional de Conducción es una traducción multilingüe de tu licencia nacional de conducir — emitida bajo una de dos convenciones internacionales de la ONU — que llevas junto a tu licencia nacional física cuando conduces en países firmantes de esas convenciones. No es, pese al nombre, una licencia separada que te autorice a conducir en el extranjero por sí sola.',
		paragraphs: [
			'El error más común es pensar que un IDP es una licencia separada que autoriza a conducir en el extranjero. No lo es. Tu licencia nacional es el permiso subyacente. El IDP traduce lo que figura en ella — tu nombre, foto, fechas de validez y las categorías de vehículo para las que estás autorizado — a un formato estandarizado multilingüe que policías extranjeros, personal de alquiler y oficiales en escenas de accidente pueden verificar en su propio alfabeto.',
			'Dos convenciones internacionales gobiernan el sistema IDP. La Convención de Ginebra sobre Tráfico Vial de 1949 (firmada en septiembre de 1949, entró en vigor en marzo de 1952) fue la primera. Alrededor de 100 países son partes contratantes, incluyendo EE.UU., Japón, Tailandia, Australia, Egipto e Indonesia. La Convención de Viena sobre Tráfico Vial de 1968 modernizó el formato con categorías adicionales y elementos de seguridad; alrededor de 85 países han firmado o se han adherido, incluyendo la mayor parte de la Europa continental, Rusia y varios países de Oriente Medio. Un puñado firmó ambas. EE.UU. nunca ratificó la actualización de 1968, por eso un IDP emitido en EE.UU. es siempre formato Ginebra 1949 — y por eso un IDP solo de Viena 1968 emitido en, digamos, Rusia, no es legalmente válido en Japón o Tailandia.',
			'La distinción práctica importa en un conjunto pequeño pero crítico de destinos. Japón solo acepta IDP de Ginebra 1949 — un turista que llega con un IDP de Viena 1968 desde un país que solo firmó la convención más nueva no tiene ruta legal para conducir allí. Toyota Rent a Car publica la lista de emisores de IDP que reconoce y no reconoce en su sitio oficial; la restricción es real, no teatro burocrático. Para la mayoría de los demás países, cualquiera de las dos convenciones funciona en la práctica.',
			'Un IDP gubernamental bajo cualquiera de las convenciones cuesta $20–50 en tu país de residencia, tarda 5–15 días hábiles por correo y es válido durante 12 meses desde la emisión. En EE.UU. los únicos emisores autorizados son AAA y AATA. En el Reino Unido, los puntos PayPoint reemplazaron a Post Office en marzo de 2024. En Rusia, РОСАВТОКЛУБ. En Alemania, ADAC. Ninguno emite a no residentes — debes solicitarlo desde tu país de residencia antes de viajar.',
		],
	},
	matrix: {
		heading: 'Qué países exigen un IDP — explora por destino',
		lead: 'Las guías por destino abajo cubren requisitos legales, política del mostrador de alquiler, estructura de multas, implicaciones para el seguro y los patrones de fricción más documentados. Cada guía está actualizada contra informes del Q1 2026 de r/IWantOut, FlyerTalk, TripAdvisor y Forum.Vinskogo (para audiencias rusas).',
		regions: [
			{
				region: 'Europa — IDP normalmente exigido a conductores no-UE',
				rows: [
					{ destination: 'Italia', destFlag: 'it', origin: 'EE.UU.', originFlag: 'us', hint: 'Multas ZTL se acumulan', href: '/idp-for-us-drivers-in-italy/' },
					{ destination: 'Grecia', destFlag: 'gr', origin: 'EE.UU.', originFlag: 'us', hint: 'Ley 4850/2021 lo cambió', href: '/idp-for-us-drivers-in-greece/' },
					{ destination: 'España', destFlag: 'es', origin: 'EE.UU.', originFlag: 'us', hint: '20K multas DGT/año', href: '/idp-for-us-drivers-in-spain/' },
					{ destination: 'Francia', destFlag: 'fr', origin: 'EE.UU.', originFlag: 'us', hint: "Crit'Air + rechazos en aeropuertos", href: '/idp-for-us-drivers-in-france/' },
					{ destination: 'Islandia', destFlag: 'is', origin: 'EE.UU.', originFlag: 'us', hint: 'Licencia OK · riesgo F-roads', href: '/idp-for-us-drivers-in-iceland/' },
					{ destination: 'Suiza', destFlag: 'ch', origin: 'EE.UU.', originFlag: 'us', hint: 'Viñeta + Raserdelikt', href: '/idp-for-us-drivers-in-switzerland/' },
					{ destination: 'Croacia', destFlag: 'hr', origin: 'EE.UU.', originFlag: 'us', hint: 'Trampa frontera Eslovenia', href: '/idp-for-us-drivers-in-croatia/' },
					{ destination: 'España', destFlag: 'es', origin: 'Reino Unido', originFlag: 'gb', hint: 'Fotocard OK · papel exige IDP', href: '/idp-for-uk-drivers-in-spain/' },
					{ destination: 'Grecia', destFlag: 'gr', origin: 'Reino Unido', originFlag: 'gb', hint: 'Post-Brexit · variable en islas', href: '/idp-for-uk-drivers-in-greece/' },
					{ destination: 'Portugal', destFlag: 'pt', origin: 'Reino Unido', originFlag: 'gb', hint: 'Multas con tarjeta en el sitio', href: '/idp-for-uk-drivers-in-portugal/' },
					{ destination: 'Chipre', destFlag: 'cy', origin: 'Reino Unido', originFlag: 'gb', hint: 'Matrículas rojas · regla 15 días', href: '/idp-for-uk-drivers-in-cyprus/' },
					{ destination: 'Grecia', destFlag: 'gr', origin: 'Rusia', originFlag: 'ru', hint: 'Multa doble €1 000', href: '/idp-for-russian-drivers-in-greece/' },
				],
			},
			{
				region: 'Oriente Medio — reglas Markhoos en EAU, Egipto estricto sobre convención',
				rows: [
					{ destination: 'EAU', destFlag: 'ae', origin: 'Reino Unido', originFlag: 'gb', hint: 'Dubái OK · Abu Dabi lo quiere', href: '/idp-for-uk-drivers-in-uae/' },
					{ destination: 'EAU', destFlag: 'ae', origin: 'Rusia', originFlag: 'ru', hint: 'Markhoos + cirílico obligatorio', href: '/idp-for-russian-drivers-in-uae/' },
					{ destination: 'Egipto', destFlag: 'eg', origin: 'Rusia', originFlag: 'ru', hint: 'Cirílico + controles Sinaí', href: '/idp-for-russian-drivers-in-egypt/' },
				],
			},
			{
				region: 'Asia — zonas de aplicación estricta',
				rows: [
					{ destination: 'Japón', destFlag: 'jp', origin: 'EE.UU.', originFlag: 'us', hint: 'Toyota/Nippon rechazan IDP online', href: '/idp-for-us-drivers-in-japan/' },
					{ destination: 'Tailandia', destFlag: 'th', origin: 'EE.UU.', originFlag: 'us', hint: 'Trampa de scooter + riesgo medevac', href: '/idp-for-us-drivers-in-thailand/' },
					{ destination: 'Tailandia', destFlag: 'th', origin: 'Reino Unido', originFlag: 'gb', hint: 'Anula el seguro sin él', href: '/idp-for-uk-drivers-in-thailand/' },
					{ destination: 'Tailandia', destFlag: 'th', origin: 'Rusia', originFlag: 'ru', hint: 'Cirílico rechazado en alquileres', href: '/idp-for-russian-drivers-in-thailand/' },
					{ destination: 'Indonesia (Bali)', destFlag: 'id', origin: 'EE.UU.', originFlag: 'us', hint: 'Razzia Bali · anula medevac', href: '/idp-for-us-drivers-in-indonesia/' },
					{ destination: 'Indonesia (Bali)', destFlag: 'id', origin: 'Rusia', originFlag: 'ru', hint: 'Razzia Bali + cirílico', href: '/idp-for-russian-drivers-in-indonesia/' },
					{ destination: 'Turquía', destFlag: 'tr', origin: 'Rusia', originFlag: 'ru', hint: 'Regla Artículo 88 cirílico', href: '/idp-for-russian-drivers-in-turkey/' },
				],
			},
			{
				region: 'Latinoamérica — IDP raramente exigido por ley, a menudo por política de alquiler',
				rows: [
					{ destination: 'México', destFlag: 'mx', origin: 'EE.UU.', originFlag: 'us', hint: 'No hace falta IDP · realidad Tulum', href: '/idp-for-us-drivers-in-mexico/' },
					{ destination: 'Costa Rica', destFlag: 'cr', origin: 'EE.UU.', originFlag: 'us', hint: 'Regla 90 días · placas Art. 151', href: '/idp-for-us-drivers-in-costa-rica/' },
				],
			},
			{
				region: 'África — variable, a menudo amigable con la fotocard',
				rows: [
					{ destination: 'Marruecos', destFlag: 'ma', origin: 'Reino Unido', originFlag: 'gb', hint: 'Fotocard OK · rotondas al revés', href: '/idp-for-uk-drivers-in-morocco/' },
				],
			},
			{
				region: 'Oceanía — reconocimiento típico de fotocard',
				rows: [
					{ destination: 'Australia', destFlag: 'au', origin: 'Reino Unido', originFlag: 'gb', hint: 'Fotocard OK · multas AUD 555 móvil', href: '/idp-for-uk-drivers-in-australia/' },
				],
			},
		],
		footnote: 'Los destinos sin guía propia todavía siguen los mismos arquetipos — IDP exigido con aplicación estricta (gran parte del sudeste asiático, partes de África, Egipto), IDP exigido pero aplicación laxa (gran parte de Europa Occidental para licencias no-UE), IDP no exigido pero condicional al mostrador (partes de Latinoamérica, Caribe, destinos con reconocimiento de fotocard para UK/EU). Las guías por pares de países arriba son la referencia canónica para cada patrón.',
	},
	realCost: {
		heading: 'El coste real de saltárselo',
		lead: 'La multa en sí rara vez es la parte cara. El coste vive en la cláusula del seguro de alquiler que se anula en el momento en que una infracción por falta de IDP queda registrada — lo que traslada la responsabilidad de cualquier accidente posterior del asegurador a ti personalmente. Tres modos de fallo, escalando de izquierda a derecha.',
		cards: [
			{
				icon: 'ph:receipt-x-bold',
				title: 'Rechazo en el mostrador de alquiler',
				text: 'El modo de fallo del día de llegada. Has reservado, pagado el depósito, hecho cola en la fila de alquiler, y el agente pide el IDP — y se niega a procesar sin él. La emisión local de IDP para turistas no existe en ningún país investigado. Tus opciones se reducen a: cancelar y probar otra agencia (raramente funciona), tomar un taxi al hotel y resolverlo mañana, o usar transporte público para el viaje. Coste documentado: típicamente la pérdida total de la tarifa de alquiler más el coste del transporte alternativo más, en temporada alta, varios días de retraso antes de que cualquier otra agencia tenga coches.',
			},
			{
				icon: 'ph:traffic-cone-bold',
				title: 'La multa en carretera',
				text: '€100–€500 en la mayor parte de Europa, $50–$120 en Latinoamérica, comparable en el sudeste asiático. Portugal la cobra en el sitio mediante terminal de tarjeta portátil; Italia la envía a la empresa de alquiler que carga tu tarjeta más una comisión administrativa. Grecia multa a la empresa de alquiler con €1 000 aparte bajo el Código de Tráfico de 2018, por lo que ningún agente griego asume el riesgo por ti. La multa en sí es el problema menor.',
			},
			{
				icon: 'ph:hospital-bold',
				title: 'La cascada de anulación del seguro',
				text: 'El modo de fallo caro. El seguro de alquiler y la mayoría de seguros de viaje condicionan la cobertura a operar el vehículo conforme a la ley local. Sin un IDP donde se exige, por definición no estás cumpliendo — la cobertura se detiene. Cualquier accidente posterior — incluso uno que no sea culpa tuya — cae personalmente. Las facturas hospitalarias en Tailandia por accidentes de scooter empiezan rutinariamente en $10 000. La evacuación médica de vuelta a EE.UU./Reino Unido cuesta $50 000–$250 000. Es de esto que el IDP realmente compra protección.',
				severe: true,
			},
		],
	},
	howTo: {
		heading: 'Cómo prepararte antes de volar',
		lead: 'Cuatro pasos, ordenados por lo que mata el viaje si se omite. Primero, verifica el requisito real de IDP de tu destino. Decide entre un IDP gubernamental y IDP Companion según velocidad y dónde vas a conducir. Verifica que las categorías de tu licencia nacional cubren lo que planeas conducir — aquí es donde los viajes en moto se tuercen. Lleva ambos documentos físicamente en cada interacción.',
		steps: [
			{
				num: '01',
				title: 'Verifica si tu destino realmente exige un IDP',
				body: 'Aproximadamente la mitad de los destinos turísticos comunes lo exigen legalmente a conductores extranjeros; la otra mitad no, pero las empresas de alquiler a menudo sí. La tabla por país abajo es el filtro más rápido. Si tu destino está en la lista «raramente exigido» (México, Costa Rica, Portugal para conductores UK, gran parte de Europa Occidental para titulares de fotocard EU/UK), tienes flexibilidad. Si está en una lista de aplicación estricta (Italia, Japón, islas griegas, Indonesia, Egipto), no.',
			},
			{
				num: '02',
				title: 'Decide entre IDP gubernamental e IDP Companion',
				body: 'Un IDP gubernamental del organismo autorizado de tu país (AAA / AATA en EE.UU. por correo en 10–15 días hábiles, puntos PayPoint en el Reino Unido el mismo día por £5.50 en el mostrador, РОСАВТОКЛУБ en Rusia, ADAC en Alemania) es el documento que necesitas si tu destino es Japón — las cadenas de alquiler japonesas rechazan explícitamente cualquier IDP que no sea un IDP gubernamental de Ginebra 1949, y somos transparentes al respecto en todo el sitio. Para cualquier otro destino en nuestra cobertura de 22 pares de países, IDP Companion maneja la capa operacional de fricción: 2 minutos en línea desde cualquier lugar, $35–55 por 1–5 años, traducción multilingüe de tu licencia nacional, válido junto al original en mostradores de alquiler, check-ins de hotel y verificaciones informales. El compromiso es honesto — velocidad y acceso global frente a los contextos de aplicación más estricta donde solo funciona el documento gubernamental.',
			},
			{
				num: '03',
				title: 'Verifica que las categorías de tu licencia cubren lo que vas a conducir',
				body: 'Una licencia solo de coche no autoriza a montar scooter o moto en el extranjero — las categorías de tu IDP reflejan exactamente tu licencia nacional. Si planeas alquilar un scooter en Tailandia, Bali o Vietnam, necesitas la categoría de motocicleta en tu licencia nacional ANTES de solicitar cualquier IDP. Añade la categoría en el equivalente al DMV/DGT de tu país de residencia primero.',
			},
			{
				num: '04',
				title: 'Lleva el original físico de la licencia nacional junto al IDP',
				body: 'Ningún IDP — gubernamental o compañero — es válido por sí solo. Tu licencia nacional física es el permiso subyacente para conducir; el IDP es la traducción. Ambos deben estar físicamente presentes en cada mostrador de alquiler, cada control, cada recogida de coche. Las copias digitales son ampliamente rechazadas, especialmente en EAU, Japón y Tailandia. Imprime el IDP Companion antes de volar y llévalo en la misma carpeta que el pasaporte.',
			},
		],
	},
	specialCases: {
		heading: 'Casos especiales que la pregunta estándar de IDP no cubre',
		lead: 'Motos, disparadores de residencia por estancia larga y alquileres transfronterizos tienen cada uno su propia capa de reglas que la pregunta estándar de IDP no toca. Abajo: dónde cada uno diverge del caso base y qué cierra la brecha.',
		blocks: [
			{
				h3: 'Motos y scooters',
				body: 'Un IDP traduce solo lo que tu licencia nacional ya permite. Una licencia solo de coche (US Class C, UK Category B, categoría B rusa) no autoriza moto o scooter — incluyendo scooters de pequeña cilindrada en Tailandia, Indonesia, Vietnam y gran parte del sudeste asiático donde la regla local empieza a cualquier cilindrada superior a 50cc. Añade la categoría de motocicleta en el equivalente al DMV/DGT de tu país de residencia antes de solicitar cualquier IDP. El seguro de viaje también suele excluir los vehículos de dos ruedas a menos que hayas añadido explícitamente el rider de moto — la mayoría de pólizas estándar no lo incluyen por defecto.',
			},
			{
				h3: 'Estancia larga y escenarios de nómada digital',
				body: 'Los privilegios de conducción turística tienen fechas de caducidad estrictas. La mayoría de los países los fijan en 90 días desde la entrada; Italia y Japón en 12 meses; Portugal en 185 días. Una vez cruzada esa frontera, las reglas de licenciamiento de residencia entran en juego — se espera que obtengas una licencia local bajo cualquier acuerdo de reciprocidad existente o tomes el examen de conducir local. Un IDP no extiende esta ventana. Para nómadas digitales con visas de larga duración o salto sin visa, esto se convierte en la restricción operacional por encima de la pregunta del IDP.',
			},
			{
				h3: 'Alquileres transfronterizos',
				body: 'La mayoría de contratos de alquiler prohíben explícitamente el viaje transfronterizo sin permiso escrito y seguro adicional. Un alquiler croata a Eslovenia, un alquiler griego a Albania, un alquiler checo a Hungría, un alquiler estadounidense a México — cada uno cruza una frontera de seguro que anula el contrato por defecto. Declara cualquier itinerario multipaís en la recogida y paga la tarifa transfronteriza, o planea devolver el coche y alquilar de nuevo en el siguiente país. La exposición financiera por un accidente transfronterizo en un alquiler no autorizado puede igualar la cascada de anulación del seguro descrita arriba.',
			},
			{
				h3: 'Licencias en cirílico, griego, árabe y alfabetos asiáticos',
				body: 'Los conductores cuya licencia nacional está en alfabeto no latino (ruso, griego, árabe, chino, japonés, tailandés) enfrentan una capa de fricción duplicada en muchos destinos — el requisito legal de IDP más el vacío de legibilidad física cuando un agente de alquiler o policía no puede transliterar la licencia nacional en absoluto. El IDP resuelve ambos problemas simultáneamente presentando la licencia en formato multilingüe en alfabeto latino. Los conductores rusos que viajan a Turquía, EAU, Egipto, Tailandia, Indonesia y Grecia se encuentran con esto consistentemente; las guías por pares de países arriba documentan los patrones específicos por destino.',
			},
		],
	},
	faq: {
		heading: 'Preguntas frecuentes',
		lead: 'Las preguntas que más escuchamos de viajeros investigando IDP — respuestas directas primero, contexto de apoyo después.',
		items: [
			{
				id: 'do-i-need-idp',
				question: '¿Realmente necesito un Permiso Internacional de Conducción?',
				answer: 'Depende de a dónde vas y qué vas a conducir. Alrededor de 100 países son firmantes de la Convención de Ginebra sobre Tráfico Vial de 1949, que exige legalmente a los conductores extranjeros llevar un IDP junto a su licencia nacional. Otros 85 forman parte de la Convención de Viena de 1968. Algunos países (México, Costa Rica, partes del Caribe) aceptan solo tu licencia nacional para estancias turísticas. La cuestión del mostrador de alquiler suele ser más decisiva que la legal — muchas cadenas internacionales listan el IDP como condición de reserva independientemente de la ley nacional. Las guías por destino enlazadas abajo desglosan esto por país.',
			},
			{
				id: 'geneva-vs-vienna',
				question: '¿Cuál es la diferencia entre los IDP de Ginebra 1949 y Viena 1968?',
				answer: 'Son dos convenciones internacionales separadas con diferentes países firmantes y formatos de documento ligeramente distintos. El IDP de la Convención de Ginebra 1949 se reconoce en países como EE.UU., Japón, Tailandia, Egipto e Indonesia. El IDP de la Convención de Viena 1968 modernizó el formato y se reconoce en gran parte de Europa, más Rusia y varios países de Oriente Medio. EE.UU. nunca ratificó la actualización de 1968, por eso un IDP emitido en EE.UU. sigue el formato Ginebra 1949. Un IDP solo de Ginebra 1949 no es válido en países que solo firmaron Viena 1968 (y viceversa). La mayoría de países aceptan cualquiera, pero el formato específico importa en un puñado de destinos de aplicación estricta — particularmente Japón, que rechaza cualquier cosa que no sea un IDP Ginebra 1949 emitido por un organismo nacional autorizado.',
			},
			{
				id: 'where-do-i-get-one',
				question: '¿Dónde obtengo un IDP — y con qué rapidez?',
				answer: 'Para un IDP Ginebra 1949 reconocido por el gobierno, tienes una opción por país: AAA o AATA en EE.UU., puntos PayPoint en el Reino Unido (reemplazaron a Post Office en marzo de 2024), РОСАВТОКЛУБ en Rusia, ADAC en Alemania. Estos tardan 5–15 días hábiles por correo (EE.UU./UK) y cuestan $20–50. La trampa: debes solicitarlo desde tu país de residencia — no emiten a turistas extranjeros que ya están fuera. IDP Companion es un documento privado multilingüe de traducción que funciona con tu licencia nacional en la mayoría de mostradores de alquiler y verificaciones informales — se genera en línea en 2 minutos desde cualquier lugar del mundo por $35, válido 1–5 años. NO es un IDP gubernamental y somos transparentes al respecto en todo el sitio.',
			},
			{
				id: 'rental-desk-actually-check',
				question: '¿Los mostradores de alquiler realmente lo verifican?',
				answer: 'Inconsistentemente — y esa es la trampa. Las grandes cadenas en filas de alquiler de aeropuertos en destinos muy visitados (Roma FCO, Atenas ATH, Madrid MAD, Bangkok BKK) verifican al menos parte del tiempo. Agencias más pequeñas en islas turísticas y ciudades regionales verifican con menos consistencia. Hilos del Q1 2026 en r/IWantOut y FlyerTalk muestran los clústeres de aplicación más estricta en: alquileres en aeropuertos italianos, agencias de islas griegas en Santorini/Naxos/Folegandros, cadenas de alquiler japonesas a nivel nacional (Toyota Rent a Car publica explícitamente qué IDP acepta) y alquileres en Bali, Indonesia. La asimetría de riesgo importa más que la tasa media: un rechazo de alquiler el día de llegada es una crisis de día-cero de vacaciones sin recurso.',
			},
			{
				id: 'fines-cost',
				question: '¿Cuánto cuesta una multa por conducir sin IDP?',
				answer: 'Modesta por sí sola — usualmente €100–€400 en Europa, $50–$120 en Latinoamérica, similar en el sudeste asiático. El daño financiero no vive en la multa misma. Vive en la cláusula del seguro de alquiler que anula la cobertura en el momento en que una infracción por falta de IDP queda registrada. Eso significa que cualquier accidente posterior — incluso uno que no sea culpa tuya — cae directamente sobre ti personalmente. Las facturas de hospital para turistas extranjeros en Tailandia rutinariamente superan los $10 000. La evacuación médica cuesta $50 000–$250 000. El IDP no previene accidentes; previene la cascada de anulación de seguro que les sigue.',
			},
			{
				id: 'insurance-actually-void',
				question: '¿Mi seguro de viaje realmente se anula si conduzco sin IDP?',
				answer: 'La mayoría de pólizas estándar de viaje y alquiler condicionan la cobertura a «operar el vehículo cumpliendo con la ley local». Si el destino exige legalmente un IDP y no lo tienes, por definición no estás cumpliendo — la cobertura se detiene en ese punto. World Nomads, Allianz, Generali y la mayoría de pólizas mayores de viaje EE.UU./UK usan esta cláusula. El seguro de alquiler por tarjeta de crédito (Visa, Amex, Mastercard) es aún más restrictivo — muchas pólizas excluyen explícitamente países de la cobertura, y la mayoría limita a 31 días. Lee tu póliza específica antes de asumir que estás cubierto. Si la póliza no menciona requisitos de IDP, la cláusula de cumplimiento de ley local sigue aplicando por defecto.',
			},
			{
				id: 'idp-companion-vs-aaa',
				question: '¿Es IDP Companion un sustituto del IDP de AAA / AATA / PayPoint?',
				answer: 'No — y no afirmamos que lo sea. IDP Companion es un documento privado multilingüe de traducción que presenta tu licencia nacional en 12 idiomas del conjunto de caracteres de la Convención de Ginebra de 1949. Funciona con tu licencia nacional física para reducir la fricción en mostradores de alquiler, check-ins de hotel, mostradores de ferri e interacciones policiales informales donde una referencia traducida de tu licencia resuelve la verificación más rápido que el original en idioma extranjero por sí solo. NO es un IDP gubernamental bajo ninguna convención internacional. Para destinos con aplicación gubernamental estricta (Japón es el caso más documentado), necesitas el IDP nacional autorizado. Para la mayoría de los otros destinos, IDP Companion maneja la capa operacional de fricción.',
			},
			{
				id: 'how-long-valid',
				question: '¿Cuánto tiempo es válido un IDP?',
				answer: 'Los IDP gubernamentales (AAA, AATA, PayPoint, РОСАВТОКЛУБ, etc.) bajo ambas convenciones Ginebra 1949 y Viena 1968 son válidos 1 año desde la emisión. La mayoría de países también exige que el IDP haya sido emitido dentro de los 12 meses previos a la llegada — Japón específicamente valida contra la fecha de sello de entrada, por lo que un IDP de 13 meses no funciona aunque técnicamente siga dentro de la validez. IDP Companion es válido 1, 3 o 5 años desde la compra, vinculado a tu licencia nacional — si tu licencia nacional caduca antes que el periodo del compañero, el compañero caduca con ella.',
			},
			{
				id: 'motorcycle-scooter',
				question: 'Quiero conducir scooter o moto en el extranjero. ¿Reglas distintas?',
				answer: 'Sí — y es aquí donde la mayoría de viajeros desinformados se mete en problemas. Un IDP traduce exactamente lo que tu licencia nacional permite y nada más. Si tu licencia nacional es solo de coche (sin categoría de motocicleta), tu IDP tampoco cubre motos — incluyendo scooters. En Tailandia e Indonesia, una licencia nacional solo de coche significa que no puedes alquilar legalmente un scooter ni siquiera con un IDP, y tu seguro de viaje se anula si lo conduces. Añade el endoso de motocicleta (Categoría A en formato EU/UK/Rusia, Class M o equivalente en EE.UU.) a tu licencia nacional ANTES de solicitar cualquier IDP. De lo contrario el IDP es papel que no resuelve el problema real.',
			},
			{
				id: 'digital-nomads-long-stays',
				question: 'Soy nómada digital / me quedo a largo plazo. ¿Sigue siendo una pregunta de IDP?',
				answer: 'Sí inicialmente, pero cambia. Los privilegios de conducción turística de la mayoría de países expiran en la marca de 90 días, 180 días o 12 meses dependiendo del destino. Una vez cruzada esa frontera, las reglas de licenciamiento de residencia entran en juego — se espera que obtengas una licencia local de conducción o conviertas la nacional bajo cualquier acuerdo de reciprocidad existente. Estancias largas en Portugal (185 días), Italia (12 meses), Japón (12 meses) y Costa Rica (90 días) disparan requisitos de licenciamiento de residencia. El IDP en sí no resuelve esto — cubre la ventana turística, después de la cual entra el proceso de licenciamiento local. Las guías por pares de países abajo cubren los disparadores de residencia por destino donde aplican.',
			},
			{
				id: 'cross-border-rental',
				question: '¿Puedo conducir un coche de alquiler cruzando fronteras en Europa / Asia / el Caribe?',
				answer: 'Solo con permiso escrito de la empresa de alquiler, que raramente está incluido por defecto. La mayoría de acuerdos de alquiler prohíben explícitamente viajar a través de fronteras sin un upgrade y seguro adicional. Cruzar a un país con reglas de tráfico distintas (p. ej. un alquiler croata a Eslovenia, un alquiler griego a Albania, un alquiler checo a Hungría) frecuentemente anula tanto el seguro como el contrato. Si tu itinerario cubre varios países, normalmente necesitas: (a) declarar la ruta en la recogida y pagar la tarifa transfronteriza, (b) devolver el coche y alquilar de nuevo en el siguiente país, o (c) usar transporte público / rideshare para el tramo transfronterizo. Verifica por escrito antes de reservar — es una de las sorpresas más caras del alquiler internacional de coches.',
			},
			{
				id: 'what-if-already-abroad',
				question: 'Ya estoy en el extranjero sin IDP. ¿Y ahora qué?',
				answer: 'El emisor de IDP gubernamental de tu país (AAA, PayPoint, РОСАВТОКЛУБ, etc.) no te emitirá mientras estés fuera del país. Tus opciones prácticas: (a) IDP Companion — generar en línea en 2 minutos desde tu hotel por $35, se imprime desde cualquier impresora, cubre la capa de fricción de traducción multilingüe; (b) preguntar a la empresa de alquiler de antemano si procesarán el alquiler solo con tu licencia nacional (algunas cadenas lo harán, especialmente en temporada baja; muchas no); (c) saltar el alquiler y usar Grab/Bolt/Uber/conductor privado para el viaje. La mayoría de destinos tienen al menos la opción (a) como puente rápido.',
			},
		],
	},
	related: {
		heading: 'Guías relacionadas y referencias',
		lead: 'Referencias cruzadas para preguntas que esta guía no responde por completo.',
		cards: [
			{ href: '/sample-pdf/', title: 'Muestra PDF de IDP Companion', text: 'Vista previa del documento real — portada, distribución de datos personales, sección multilingüe de traducción y página de categorías de licencia. Con marca de agua.' },
			{ href: '/pricing/', title: 'Precios — 1, 3 o 5 años', text: '$35 / 1 año · $45 / 3 años · $55 / 5 años. Pago único, sin suscripción. Reimprimible durante el periodo de validez.' },
			{ href: '/how-it-works/', title: 'Cómo funciona IDP Companion', text: 'El flujo de generación de 2 minutos, qué subes, qué recibes, qué contiene físicamente el PDF y dónde es más útil en el mostrador de alquiler.' },
			{ href: '/faq/', title: 'FAQ del producto', text: 'Preguntas comunes sobre IDP Companion como producto — reembolsos, categorías de licencia, dónde se acepta, qué no es.' },
		],
	},
	finalCta: {
		heading: 'Genera tu IDP Companion antes de volar',
		text: 'PDF multilingüe que traduce tu licencia nacional de conducir a 12 idiomas ampliamente hablados del conjunto de la Convención de Ginebra de 1949. Generado a partir de tu licencia real en 2 minutos en línea. Imprime en casa, en la recepción del hotel o desde cualquier cibercafé en el extranjero si pierdes el original. Válido 1, 3 o 5 años — cubre este viaje y los siguientes en todos los destinos de nuestra cobertura de pares de países.',
		button: 'Obtener IDP Companion — $35',
	},
	sources: {
		heading: 'Fuentes y referencias',
		items: [
			'Colección de Tratados de las Naciones Unidas — Convención de Ginebra sobre Tráfico Vial de 1949, lista actual de partes contratantes',
			'Colección de Tratados de las Naciones Unidas — Convención de Viena sobre Tráfico Vial de 1968, lista actual de partes contratantes',
			'Departamento de Estado de EE.UU., Oficina de Asuntos Consulares — información de conducción internacional para ciudadanos estadounidenses',
			'Gobierno del Reino Unido (gov.uk) — conducir en el extranjero, acuerdo de reconocimiento de licencias post-Brexit (2020)',
			'Comisión Europea — marco de reconocimiento de licencias de conducir para no residentes de la UE',
			'American Automobile Association (AAA) — política de emisión de IDP y requisitos por país',
			'American Automobile Touring Alliance (AATA) — requisitos de IDP y FAQ',
			'PayPoint UK — información de emisión de IDP (reemplazó a Post Office en marzo de 2024)',
			'Toyota Rent a Car — política oficial de aceptación de IDP (Japón)',
			'Códigos de tráfico por país: Codice della Strada (Italia), Ley 4850/2021 (Grecia), Decreto-Ley 138/2012 (Portugal), Ley 9078 Artículo 91 (Costa Rica), Artículo 88 de la Ley 2918 (Turquía), Ley N.º 22/2009 (Indonesia), Ley Federal de la Federación de Rusia sobre Seguridad Vial',
			'Reuters y Reuters Health — análisis de la industria de seguros internacionales de viaje sobre cláusulas de cobertura vinculadas al cumplimiento de la ley local',
			'World Nomads, Allianz, Generali — términos de pólizas publicados para seguro de viaje con rider de moto y cláusulas de cumplimiento de IDP',
		],
		legalHeading: 'Aviso legal',
		legalText: 'IDP Companion es un documento privado multilingüe de traducción y no está afiliado con las Naciones Unidas, ningún gobierno nacional o ningún organismo autorizado de emisión de IDP. IDP Companion no es un Permiso Internacional de Conducción gubernamental bajo la Convención de Ginebra sobre Tráfico Vial de 1949 o la Convención de Viena sobre Tráfico Vial de 1968. Los emisores nacionales autorizados de IDP Ginebra 1949 incluyen AAA y AATA (Estados Unidos), puntos PayPoint (Reino Unido, reemplazando a Post Office en marzo de 2024), РОСАВТОКЛУБ (Rusia) y ADAC (Alemania). IDP Companion debe usarse junto con tu licencia de conducir original física y está diseñado para reducir la fricción de verificación en mostradores de alquiler, check-ins de hotel y verificaciones informales — no para reemplazar un IDP gubernamental donde la ley local lo exige específicamente.',
	},
	howToSchemaDescription: 'Cuatro pasos para determinar si necesitas un IDP, elegir el documento correcto para tu destino, verificar las categorías de licencia y llevar ambos físicamente.',
};

export const guideCopyByLocale: Record<'en' | 'ru' | 'es', GuideCopy> = { en, ru, es };
