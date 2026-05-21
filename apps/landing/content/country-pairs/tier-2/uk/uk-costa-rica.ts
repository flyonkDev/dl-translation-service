/**
 * Country-pair content: United Kingdom → Costa Rica.
 * Tier 2, built to Tier 1 quality. Locales: en only.
 *
 * Unique angle: the SLI insurance trap that turns a $30/day booking-site
 * rental rate into a $50–55/day pickup rate. Seguro Obligatorio de
 * Vehículos Automotores is mandatory under Costa Rican law for every
 * rental vehicle and the rental company is legally required to provide
 * it — foreign drivers cannot decline it regardless of credit-card
 * insurance or third-party cover. UK gov.uk CR advice confirms UK
 * photocard alone is accepted for the first 90 days, so licensing is
 * settled; the substantive trip-cost gap is the SLI plus the 4WD-vs-2WD
 * decision based on whether the itinerary includes unpaved access to
 * Monteverde, Nicoya Peninsula beaches (Nosara, Santa Teresa, Mal País)
 * or Arenal back roads where standard CDW typically excludes damage.
 *
 * Distinctive content: SLI billing math (booking-site $30 → pickup $50);
 * 4WD requirement for many of the popular nature destinations; local
 * Costa Rican operators (Vamos, Adobe) publish "all-in" rates that
 * already include SLI making like-for-like comparison fairer than
 * international chain pre-SLI rates; descriptive addresses (200m north
 * of the Catholic church); attendant-only petrol stations with small
 * tip convention; animal-hazards on rural night driving (sloths,
 * capuchin monkeys, cattle, opossums).
 *
 * MIDDLE-PIVOT COMPLIANCE: clean — AA, RAC and PayPoint (UK Geneva 1949
 * IDP issuers since March 2024) mentioned ONLY in legal disclaimer.
 * Honesty.isNot focuses on "not a government IDP, not a replacement for
 * physical photocard, not SLI insurance" — no competitor pointers.
 * HowTo step 3 frames as "compare all-in rates from Costa Rican-local
 * operators vs international chain pre-SLI rates" not "decide between
 * IDP issuers". PayPoint replaces the original brief's "Post Office"
 * reference per the March-2024 PayPoint binding rule.
 *
 * PDF LANGUAGE COMPLIANCE: All 12 verified languages enumerated in TLDR
 * row and final CTA. Spanish IS on the template (verified) — so this is
 * one of the cleaner PDF-language matches in the batch. Dominican
 * Spanish and Costa Rican Spanish are mutually intelligible at every
 * tourist touchpoint; the Spanish translation block on the document
 * functions at every Policía de Tránsito stop, rental counter and
 * post-incident clinic interaction.
 *
 * SEO add-ons present: tldr, howTo, phrases (Costa Rican Spanish 8
 * items), lastReviewed. NO lez (CR has no Low Emission Zone framework —
 * the SLI insurance trap and the unpaved-road CDW exclusion are
 * operational items not zone-restriction items, covered in fines +
 * renting tips). NO alphabet (Latin script). NO rejects (CR recognises
 * UK photocard alone under the 90-day visitor rule — no convention-
 * mismatch).
 *
 * Layout variant: standard.
 */

import type { CountryPairCopy } from '../../_types';

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for UK Drivers in Costa Rica: 2026 SLI Guide',
		description:
			'Driving to Monteverde, Nosara or Arenal? UK photocard accepted in Costa Rica for the first 90 days — but mandatory SLI insurance turns a $30/day booking rate into $50/day at pickup, and unpaved access voids standard CDW. Honest 2026 guide.',
		ogTitleShort: 'UK Drivers in CR: 90-Day Rule + SLI',
		ogSubtitle: 'UK photocard OK, mandatory SLI insurance, unpaved-CDW exclusion is the trap.',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'UK → Costa Rica',
	},
	lastReviewed: 'May 2026',

	hero: {
		kicker: 'UK → Costa Rica · 2026 Guide',
		title: 'IDP for UK Drivers in Costa Rica: SLI Insurance Eats the Booking Rate',
		lead: 'Costa Rican law requires every rental vehicle to carry Seguro Obligatorio de Vehículos Automotores — local liability insurance the rental company is legally required to provide and that foreign drivers cannot decline regardless of credit-card or third-party cover. That single rule turns a $30/day booking-site rate into a $50–55/day pickup rate before any optional CDW gets added. UK photocard licences are accepted by MOPT for the first 90 days of a tourist stay and UK gov.uk CR advice confirms no IDP is required, so the licensing layer is settled — the substantive trip-cost gap sits in the SLI math plus the 4WD-vs-2WD decision for any itinerary that includes Monteverde access, Nicoya Peninsula beach towns (Nosara, Santa Teresa, Mal País) or Arenal back roads where standard 2WD CDW typically excludes unpaved-road damage.',
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},

	quickAnswer: {
		required: false,
		verdict: 'No — UK photocard accepted by MOPT for the first 90 days',
		text: 'The Costa Rican Ministerio de Obras Públicas y Transportes (MOPT) recognises a valid UK photocard licence for tourist driving during the first 90 days of stay, matching the standard tourist-visa window. UK gov.uk Costa Rica travel advice confirms this. Costa Rica is party to the 1949 Geneva Convention. Residents staying long-term must convert to a Costa Rican licence after 90 days. The substantive friction for UK tourists is the mandatory SLI insurance pattern that the rental company is legally required to add to the contract — typically $15–25/day on top of the listed booking-site rate — plus the 4WD-vs-2WD decision based on whether the itinerary includes unpaved access to popular nature destinations.',
	},

	tldr: {
		heading: 'UK Photocard alone vs IDP Companion in Costa Rica',
		lead: 'The bigger budget gate for UK drivers in Costa Rica is not the licensing layer (UK photocard is enough for the first 90 days under MOPT) but the mandatory SLI insurance that the rental company is legally required to add at pickup — turning booking-site rates into pickup rates that often double. IDP Companion sits as the multilingual translation block (with Spanish on the same page as the UK photocard data) that smooths Liberia and San José counter verification once the SLI math is understood.',
		colDocument: 'Document',
		colWhatItDoes: 'What it does in Costa Rica',
		colCost: 'Cost',
		rows: [
			{
				document: 'UK Photocard Driving Licence (alone)',
				whatItDoes: 'Legally accepted by MOPT for tourist driving for the first 90 days of stay (matching the tourist-visa window). UK gov.uk confirms IDP not required. Accepted by all major Costa Rican rental chains (Hertz, Avis, Europcar, Budget, Vamos, Adobe) at Liberia (LIR) and San José (SJO) airports.',
				cost: 'You already have it',
				tone: 'neutral',
			},
			{
				document: 'IDP Companion + your UK photocard',
				whatItDoes: 'Multilingual digital PDF presenting your UK photocard data in English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set. Spanish is the working-language route at every Costa Rican touchpoint — Policía de Tránsito stops, rental counters, post-incident clinic paperwork. The standardised layout speeds verification at peak December–April pickup queues. Re-printable from any hotel.',
				cost: '$35–55 (1–5 years)',
				tone: 'companion',
			},
		],
		footnote: 'What to carry in CR: original UK photocard + UK passport + rental contract + mandatory SLI insurance certificate (provided at pickup as a legal requirement) + optional CDW certificate covering unpaved roads if your route requires it. Small USD and CRC cash separately — USD widely accepted in tourist zones, CRC for local interactions and petrol-attendant tips (200–500 CRC standard).',
	},

	whyNotEnough: {
		heading: 'Where the Costa Rican rental experience eats the budget for UK drivers',
		lead: 'MOPT\'s 90-day rule covers any UK visitor on a valid photocard, so licensing does not gate this trip. What does gate it operationally is two specific items the booking-site rate does not surface: the SLI insurance pattern that the rental company is legally required to add at pickup (and that foreign drivers cannot decline), and the 4WD-vs-2WD decision that determines whether standard CDW will void on unpaved access to Monteverde, Nicoya Peninsula beach towns or Arenal back roads.',
		reasons: [
			{
				icon: 'ph:shield-warning-bold',
				title: 'The SLI mandatory insurance trap',
				text: 'Seguro Obligatorio de Vehículos Automotores (SLI) is required by Costa Rican law for every rental vehicle. The rental company is legally required to provide it and to include it on the contract — foreign drivers cannot decline it regardless of credit-card cover or third-party policy. Typical cost is $15–25/day depending on vehicle class. Aggregator booking sites do not always show SLI on the listed rate, which is why a $30/day Liberia rental becomes $50–55/day at pickup. Reputable Costa Rican-local operators (Vamos Rent A Car, Adobe Rent A Car) publish "all-in" rates that already include SLI, making like-for-like comparison fairer than international-chain pre-SLI rates.',
			},
			{
				icon: 'mdi:car-pickup',
				title: 'The 4WD-or-CDW-void decision',
				text: 'Several of Costa Rica\'s most popular tourist destinations require 4WD or high-clearance vehicles: Monteverde (paved on the new road from Tilarán but several access points still require gravel), Nicoya Peninsula beach towns Nosara / Santa Teresa / Mal País (significant gravel sections between the beach communities), Arenal back roads to remote lodges (gravel plus seasonal river crossings). Standard 2WD rental contracts typically exclude unpaved-road damage from CDW cover, which means a damage claim on an unpaved stretch falls fully on the renter\'s deductible. Booking a 4WD specifically for these destinations costs more but stays within CDW protection.',
			},
			{
				icon: 'mdi:file-document-outline',
				title: 'The peak-season rental-counter pattern',
				text: 'Hertz, Avis, Europcar, Budget and Costa Rican local operators (Vamos, Adobe) each set their own internal verification policy at counters. Liberia (LIR) and San José (SJO) airports process the majority of UK tourist rentals — desk agents during peak December–April Christmas-to-Easter dry season sometimes default to asking for IDP paperwork at pickup, even when Costa Rican law does not require it. A multilingual translation companion clears the question in writing in five extra minutes.',
			},
		],
	},

	rules: {
		heading: 'Costa Rican driving rules UK drivers should know',
		lead: 'Drive on the right — a directional flip from UK habits that compounds with informal lane discipline at unsigned junctions in San José and Liberia. The framework comes from federal traffic law and is enforced by the Policía de Tránsito; rural-route enforcement concentrates on the Pan-American Highway (Ruta 1) and the Inter-American Highway. The night-driving caution outside cities is a documented safety advisory (animal hazards, unannounced potholes, gravel transitions), not a soft suggestion.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'RIGHT', note: 'OPPOSITE to UK — deliberate attention required, especially at unsigned junctions and roundabouts' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '40–60 km/h', note: 'Varies by zone; San José built-up areas at the lower end' },
			{ icon: 'mdi:road-variant', label: 'Rural roads', value: '80 km/h', note: 'Speed-camera enforcement growing on Pan-American Highway' },
			{ icon: 'mdi:speedometer-medium', label: 'Highway', value: '100 km/h', note: 'Pan-American Highway (Ruta 1) and primary inter-city routes' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: 'Stricter for novice drivers; random breath testing on weekend tourist routes' },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Handheld banned', note: 'Discretionary enforcement; San José central applies it' },
			{ icon: 'mdi:traffic-light', label: 'Right turn on red', value: 'NOT permitted (default)', note: 'Only allowed where explicitly signed — different from many UK readers\' default assumption' },
			{ icon: 'ph:warning-bold', label: 'Night driving (rural)', value: 'Strongly discouraged', note: 'Animal hazards (sloths, capuchin monkeys, opossums, cattle), unannounced potholes, gravel transitions — documented safety advisory not soft recommendation' },
		],
	},

	fines: {
		heading: '2026 Costa Rican fines for common violations',
		lead: 'MOPT and the Policía de Tránsito publish the Costa Rican fine schedule under federal traffic law, with periodic indexation. The DUI tier (₡800,000+ plus 1-year licence-suspension equivalent for visitors) and the no-insurance scenarios (vehicle impoundment possible) are the highest-stake exposures. Speed-camera enforcement is growing on the Pan-American Highway and San José arterials, but most fines outside that corridor are still officer-issued at roadside stops on tourist routes.',
		colViolation: 'Violation',
		colAmount: 'Fine (CRC / GBP approx)',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:speedometer', label: 'Speeding (minor)', amount: '₡70,000+ (~£100)', note: 'Camera enforcement growing on Pan-American Highway and San José entrances', severity: 'med' },
			{ icon: 'mdi:speedometer-medium', label: 'Speeding (over 25 km/h above limit)', amount: '₡300,000+ (~£440)', note: '', severity: 'high' },
			{ icon: 'mdi:traffic-light', label: 'Running a red light', amount: '₡100,000+ (~£145)', note: '', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Handheld phone use', amount: '₡200,000+ (~£290)', note: '', severity: 'high' },
			{ icon: 'mdi:seatbelt', label: 'Failure to wear seatbelt', amount: '₡70,000+ (~£100)', note: 'Driver liable for front passenger', severity: 'med' },
			{ icon: 'mdi:beer-outline', label: 'Drink driving (first offence)', amount: '₡800,000+ (~£1,200) + 1-year licence suspension', note: 'Severe penalties; criminal escalation at high BAC', severity: 'high' },
			{ icon: 'ph:warning-bold', label: 'Driving without SLI insurance certificate', amount: 'Vehicle impoundment possible', note: 'SLI must be active and certificate available in the vehicle', severity: 'high' },
			{ icon: 'ph:siren-bold', label: 'Reckless driving', amount: '₡600,000+ and court summons', note: 'Discretionary; often invoked at accident scenes', severity: 'high' },
		],
		caption: 'Sources: Ministerio de Obras Públicas y Transportes (MOPT) (mopt.go.cr); Policía de Tránsito (csv.go.cr); UK FCDO foreign travel advice Costa Rica (gov.uk). CRC/GBP approximated at 700:1 May 2026.',
	},

	honesty: {
		heading: 'How IDP Companion fits for UK drivers in Costa Rica — honestly',
		lead: 'IDP Companion does one specific thing on a Costa Rica trip: it provides the Spanish translation block on the same page as the UK photocard data, which shortens peak December–April Liberia and San José counter verification plus speeds Policía de Tránsito stops on the Pan-American Highway corridor. The three decisions that actually shape the trip-cost gap — SLI insurance (legally required, cannot be declined), 4WD-vs-2WD against the itinerary, day-time-only rural driving — sit operationally outside what any paperwork document buys.',
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese, Russian, Arabic, Chinese, Japanese, Vietnamese and Thai — the twelve languages physically on our template from the 1949 Geneva Convention set',
				'In Costa Rica, the Spanish version is the working-language route — every Policía de Tránsito stop, rental counter, post-incident clinic paperwork and informal interaction runs in Spanish, so having the UK photocard data in Spanish on the same page is functional',
				'Generated in minutes after you upload your photocard and pass our verification step',
				'Available for $35 (1 yr), $45 (3 yr), or $55 (5 yr) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva Convention or 1968 Vienna Convention',
				'Not required by Costa Rican law for tourist driving on a UK photocard within the 90-day MOPT window',
				'Not valid by itself — must be carried alongside your physical UK photocard',
				'Not SLI insurance — that is a separate, legally-mandated purchase at the rental counter that the rental company cannot waive',
				'Not CDW for unpaved roads — that is a separate optional purchase with specific clause language to verify before pulling away',
			],
		},
		helps: {
			title: 'When IDP Companion helps UK drivers in Costa Rica',
			items: [
				'At Liberia (LIR) and San José (SJO) rental counters during peak December–April Christmas-to-Easter dry season when staff default to standardised paperwork',
				'At Policía de Tránsito stops on the Pan-American Highway, Inter-American Highway and tourist-corridor routes where the Spanish translation block shortens the document review',
				'For insurance and accident-report paperwork — Spanish translation simplifies the SLI claim or any post-incident clinic conversation',
				'As a re-printable backup from any hotel if your physical photocard is lost on a multi-region trip (Nicoya beaches → Arenal → San José itineraries cross several rental-pickup points)',
				'For travellers stacking multiple international trips over 1–5 years — one $55 purchase covers Costa Rica plus other Latin American and Mediterranean destinations on the same plan',
			],
		},
		needOfficial: {
			title: 'Documents Costa Rican law actually cares about at a checkpoint or rental counter',
			items: [
				'Your physical UK photocard driving licence — the actual permission to drive (MOPT-recognised for the 90-day tourist window)',
				'UK passport with Costa Rican entry stamp — verifies the 90-day window has not expired',
				'Rental agreement plus the mandatory SLI insurance certificate — both documents must be in the vehicle',
				'Optional CDW certificate covering your specific route conditions (unpaved roads if applicable)',
				'For specific situations: high-clearance or 4WD vehicle if the itinerary includes Monteverde access, Nicoya beach roads or Arenal back routes — choose the vehicle class to match the road surface',
			],
		},
		pattern:
			'What prepared UK travellers in CR actually carry: UK photocard + UK passport + rental contract + SLI insurance certificate + optional unpaved-road CDW + IDP Companion. The substantive trip preparation is the SLI math (build it into the budget at $15–25/day, do not expect to decline it), the 4WD-vs-2WD decision against the itinerary (Monteverde / Nicoya / Arenal back roads = 4WD), the night-driving discipline outside cities (animal hazards and unannounced potholes make it genuinely riskier), and the all-in rental rate comparison from Costa Rican-local operators (Vamos, Adobe) vs international chain pre-SLI rates.',
	},

	renting: {
		heading: 'Renting a car in Costa Rica as a UK driver',
		lead: 'Two specific gotchas dominate Costa Rican rental contracts: the SLI insurance is a legal requirement the rental company cannot waive and that aggregator sites do not always show in the headline rate, and the unpaved-road CDW exclusion turns standard 2WD damage claims into full-deductible scenarios on Monteverde / Nicoya / Arenal back routes. Costa Rican-local operators (Vamos, Adobe) typically publish "all-in" rates that include SLI; international chains typically show the pre-SLI rate. Reading the unpaved-road clause carefully at pickup is the highest-leverage 60-second check.',
		chains: [
			{ name: 'Hertz Costa Rica', policy: 'Major presence at Liberia (LIR) and San José (SJO) airports. Accepts UK photocard licences for the 90-day tourist window. SLI added at pickup as legal requirement.' },
			{ name: 'Avis Costa Rica (incl. Budget)', policy: 'Wide network including border regions. UK photocards accepted; operates Budget under the same group. SLI added at pickup.' },
			{ name: 'Europcar Costa Rica', policy: 'Strong tourist-zone presence. UK photocards accepted. SLI added at pickup.' },
			{ name: 'Vamos Rent A Car (Costa Rican local)', policy: 'Costa Rican-owned operator with strong reputation for transparent pricing — publishes "all-in" rates that already include SLI, making like-for-like comparison fairer.' },
			{ name: 'Adobe Rent A Car (Costa Rican local)', policy: 'Another well-regarded Costa Rican-local operator with all-in rate transparency. Often more flexible on documentation at the counter.' },
		],
		tipsHeading: 'Practical tips for renting and driving in Costa Rica',
		tips: [
			'Compare all-in rates from Costa Rican-local operators (Vamos, Adobe) against international chain pre-SLI rates — the real pickup-price difference is smaller than the headline-rate difference because international chains add SLI at the counter and local operators already include it',
			'Book a 4WD or high-clearance vehicle if your route includes Monteverde, Nicoya Peninsula beaches (Nosara, Santa Teresa, Mal País), Arenal back roads or any non-mainstream nature destination — standard 2WD CDW typically excludes unpaved-road damage and a claim on a gravel stretch falls fully on the renter\'s deductible',
			'Read the CDW clause on unpaved roads carefully at pickup — some operators void all damage cover off paved roads, others have specific exclusions for particular tracks; Vamos and Adobe Rent A Car tend to be more transparent on this point than some international chain branches',
			'Do not drive at night outside cities — animal hazards (sloths, capuchin monkeys, opossums, dogs, cattle), unannounced potholes, gravel transitions on dark mountain roads — the documented safety advisory is real and night-time animal hazards on rural routes are the dominant single risk factor',
			'Addresses are descriptive — many Costa Rican addresses are given as "200 meters north of the Catholic church, then west to the yellow house" rather than by number; GPS works but confirm the route with rental staff at pickup if you have a remote destination',
			'Petrol stations have attendants who pump for you — tip 200–500 CRC per fill-up; cash in small denominations is the smoother interaction; USD widely accepted in tourist zones, CRC for local interactions',
			'Volcano-route grade discipline matters — engine-brake using lower gears on long descents (Monteverde → Pan-American, Poás Volcano roads) rather than the brake pedal; brake fade is a real problem on Costa Rica\'s steeper Volcanic Central American cordillera grades',
			'Practise the side-of-the-road switch in a quiet area before navigating urban traffic, especially around San José or Liberia where unsigned junctions compound the UK-driver directional adjustment',
			'Plan day-time driving and overnight stops — Costa Rica\'s scenic beauty is concentrated on routes that genuinely become hazardous after dark in rural areas; building the itinerary around day-time movement is the safest single planning decision',
			'Cross-border driving to Nicaragua or Panama is sometimes allowed depending on the rental company and additional paperwork — confirm in writing before booking; verifying customs paperwork at the border can add hours to any cross-border itinerary',
		],
	},

	outcomes: {
		heading: 'What happens at various points — real outcomes for UK drivers in Costa Rica',
		lead: 'The dominant pattern for UK drivers in Costa Rica is the routine pickup with SLI added at the counter, then a Pan-American Highway corridor trip that ends without incident. Where the trip-cost gap surfaces is the SLI math itself (booking-site rate becomes pickup rate at $50–55/day not $30/day), the CDW-unpaved-road exclusion if the 2WD-vs-4WD decision was wrong for the route, and the rarer night-rural animal-incident or DUI exposure. Six common cases ordered by frequency below.',
		items: [
			{
				severity: 'low',
				frequency: 'Most common',
				label: 'UK photocard accepted, SLI added at pickup, you drive away in 20 minutes',
				text: 'MOPT tourist-window legal default. Liberia or San José pickup, photocard presented, SLI added to the contract as the legal requirement, paperwork brief — out of the counter and on the road. Most Costa Rica trips end this way when the night-driving and 4WD-decision items are handled cleanly.',
			},
			{
				severity: 'low',
				frequency: 'Occasional at peak season',
				label: 'Desk agent asks for IDP at peak December–April pickup, you produce IDP Companion',
				text: 'Five extra minutes of paperwork verification at Liberia or San José during Christmas-to-Easter dry-season peak, no further issue. The standardised Spanish-translation block clears the question without contract delay.',
			},
			{
				severity: 'med',
				frequency: 'Universal at pickup',
				label: 'Booking-site rate increases by $15–25/day at counter via SLI',
				text: 'Listed booking-site rate of $30/day becomes $50–55/day at pickup once SLI is added — not a hidden fee but a Costa Rican legal requirement that aggregator sites do not always display in the headline rate. Local operators (Vamos, Adobe) usually publish the all-in number upfront.',
			},
			{
				severity: 'med',
				frequency: 'Common on Nicoya / Monteverde routes',
				label: '2WD rental on unpaved access, damage occurs, CDW voids',
				text: 'A scrape or chip on a gravel access road to Nosara, Santa Teresa or Monteverde leaves the 2WD CDW void per the unpaved-road exclusion clause. Full damage deductible to renter — typically several hundred to $1,500+ USD depending on the contract. The 4WD-vs-2WD decision at booking is the operational lever that prevents this.',
			},
			{
				severity: 'low',
				frequency: 'Common on tourist corridors',
				label: 'Policía de Tránsito checkpoint stop on Pan-American Highway',
				text: 'Brief 5-minute documentation review — UK photocard, passport, rental contract, SLI certificate satisfies the standard check; IDP Companion shortens the Spanish-side conversation. Most checkpoint stops on the Pan-American Highway tourist corridor end this way.',
			},
			{
				severity: 'high',
				frequency: 'Rare but consequential',
				label: 'After-dark rural animal-hazard incident or DUI on a tourist-route weekend',
				text: 'A nocturnal animal collision on a rural mountain road outside Monteverde or San Ramón, or a weekend Policía breath-test catching above-threshold BAC near a tourist beach town. Insurance complications increase substantially; the DUI tier escalates to ₡800,000+ plus 1-year licence suspension equivalent for visitors plus rental contract termination. Night-rural and BAC discipline are the single highest-cost decisions in CR self-driving.',
			},
		],
		math: '$35 IDP Companion vs the SLI math (build $15–25/day × trip days into the budget upfront, not as a surprise) and the 4WD-vs-2WD damage-claim math (the deductible on a CDW-void gravel-road claim can absorb the entire IDP Companion cost many times over). The bigger trip-cost lever is choosing an all-in operator like Vamos or Adobe over a booking-site rate-shopping outcome that hides SLI.',
	},

	howTo: {
		heading: 'How to prepare for driving in Costa Rica (UK citizens)',
		lead: 'Three decisions shape a Costa Rica trip beyond the licensing answer: the all-in rate comparison between Costa Rican-local operators and international chains (the SLI is mandatory either way, the question is whether it is in the headline rate or added at the counter), the 4WD-vs-2WD vehicle class against the itinerary (Monteverde / Nicoya / Arenal back roads need 4WD), and the day-time-only driving plan outside cities (animal hazards make night-rural genuinely dangerous). Five steps below.',
		schemaName: 'How to prepare for driving in Costa Rica as a UK citizen',
		duration: 'PT45M',
		cost: '35 USD',
		steps: [
			{
				title: 'Confirm your UK photocard licence is valid and physical',
				text: 'Bring the plastic card, not a phone image. Expired photocards are not accepted by MOPT or Costa Rican rental companies. UK photocard valid for the first 90 days of tourist stay under the MOPT visitor rule.',
			},
			{
				title: 'Compare all-in rental rates from Costa Rican-local operators vs international chain pre-SLI rates',
				text: 'Vamos Rent A Car and Adobe Rent A Car publish "all-in" rates that already include SLI; international chains (Hertz, Avis, Europcar, Budget) typically show the pre-SLI booking rate. The real pickup-price difference between operators is smaller than the headline-rate difference suggests. Run the comparison at all-in level not headline level.',
			},
			{
				title: 'Decide 4WD vs 2WD based on the itinerary',
				text: 'Monteverde traditional access, Nicoya Peninsula beach towns (Nosara, Santa Teresa, Mal País), Arenal back roads to remote lodges — book 4WD or high-clearance. Mainstream destinations (San José, Manuel Antonio with paved approach, La Fortuna paved) — 2WD is fine. Standard 2WD CDW typically excludes unpaved-road damage; the 4WD upgrade cost is usually less than the deductible exposure on a CDW-void gravel claim.',
			},
			{
				title: 'Generate IDP Companion as the multilingual translation companion',
				text: '$35 buys a multilingual digital PDF translating your UK photocard data into English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set. Issued in two minutes online, valid 1–5 years. The Spanish version is the working-language route at every Costa Rican touchpoint — Policía de Tránsito stops, rental counters, post-incident clinic paperwork. Print at home or from any Costa Rican hotel.',
			},
			{
				title: 'Plan day-time-only rural driving + carry physical documents in one folder',
				text: 'UK photocard + UK passport + rental contract + SLI certificate + optional CDW certificate + IDP Companion — all in one folder, kept in the vehicle. Hand the folder over at any Policía de Tránsito checkpoint. Build the itinerary around day-time movement on rural routes — animal hazards plus unannounced potholes plus gravel transitions make night-rural driving the dominant single risk factor in Costa Rica.',
			},
		],
	},

	phrases: {
		heading: 'Useful Costa Rican Spanish phrases at the rental counter and roadside',
		lead: 'Costa Rica\'s tico Spanish is mutually intelligible with the Spanish on the IDP Companion PDF and is the language at every rental counter, Policía de Tránsito stop and post-incident clinic. Even basic phrases shorten interactions; eight high-frequency cases below worth knowing before any pickup.',
		items: [
			{ phrase: 'Buenos días, tengo una reserva.', translation: 'Good morning, I have a reservation.', context: 'Standard rental counter opener at Liberia or San José airport pickup.' },
			{ phrase: '¿El seguro SLI está incluido en el precio total?', translation: 'Is the SLI insurance included in the total price?', context: 'The 30-second pickup check — confirm whether the rate you saw was the all-in number or the pre-SLI base.' },
			{ phrase: 'Mi carnet británico, mi pasaporte y el contrato.', translation: 'My British driving licence, my passport and the contract.', context: 'Standard document presentation at Policía de Tránsito checkpoint.' },
			{ phrase: '¿Hay caminos de tierra en esta ruta?', translation: 'Are there unpaved roads on this route?', context: 'At pickup before any Monteverde / Nicoya / Arenal back-road itinerary — verifies whether the 2WD will void CDW on the route.' },
			{ phrase: '¿Cuánto cuesta el peaje?', translation: 'How much is the toll?', context: 'At the small number of Costa Rican tolls (some Pan-American sections, San José ring routes).' },
			{ phrase: '¿Dónde está la gasolinera más cercana?', translation: 'Where is the nearest petrol station?', context: 'Useful on rural mountain routes where stations can be sparse.' },
			{ phrase: 'Necesito un médico / un hospital.', translation: 'I need a doctor / a hospital.', context: 'In any incident or medical situation — the most important Spanish phrase to memorise before any rural night trip.' },
			{ phrase: 'Pura vida.', translation: '(Literal: "Pure life" — used as hello, goodbye, thank you, you\'re welcome, all is well.)', context: 'The universal Costa Rican phrase; signals respect for tico culture and usually elicits a warmer interaction.' },
		],
	},

	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: 'Do I legally need an IDP to drive in Costa Rica as a UK tourist?',
				answer: 'No. The Costa Rican Ministerio de Obras Públicas y Transportes (MOPT) accepts a UK photocard driving licence for tourist visits during the first 90 days of stay — matching the tourist-entry window. UK gov.uk Costa Rica travel advice confirms this.',
			},
			{
				id: 2,
				question: 'What is SLI insurance and why can I not decline it?',
				answer: 'Seguro Obligatorio de Vehículos Automotores (SLI) is a Costa Rican legal requirement for all rental vehicles. The rental company is legally required to provide it; foreign drivers cannot decline it regardless of credit-card or third-party cover. Typical cost is $15–25/day depending on vehicle class. It is a real legal requirement, not a rental-company upsell — aggregator booking sites do not always show it on the listed rate, which is why the pickup price differs from the booking price.',
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as a government IDP?',
				answer: 'No. IDP Companion is a privately-issued multilingual translation companion document presenting your photocard details in twelve widely-read languages from the 1949 Geneva Convention set. It is not issued under the 1949 Geneva Convention or 1968 Vienna Convention. It works alongside your UK photocard, not in place of it.',
			},
			{
				id: 4,
				question: 'Do I need 4WD in Costa Rica?',
				answer: 'For mainstream destinations (San José, Manuel Antonio with paved approach, La Fortuna with paved access) — no, standard 2WD is fine. For Monteverde with traditional access, Nicoya Peninsula beach towns Nosara / Santa Teresa / Mal País, Arenal back roads, or any remote nature lodge — yes, or at least high-clearance. Standard 2WD CDW typically excludes unpaved-road damage, so a 2WD claim on a gravel access road can leave the full deductible on the renter.',
			},
			{
				id: 5,
				question: 'Why does the booking-site rate differ from the pickup rate?',
				answer: 'Because most international booking sites show the pre-SLI rate — SLI being a Costa Rican legal requirement, not an optional add-on. The all-in pickup rate is the booking-site rate plus $15–25/day SLI. Costa Rican-local operators (Vamos, Adobe) typically publish all-in rates upfront, which makes like-for-like comparison fairer than comparing international-chain pre-SLI rates to local-operator all-in rates.',
			},
			{
				id: 6,
				question: 'What side of the road do they drive on?',
				answer: 'Right side — opposite to the UK. The switch from UK left-side driving habits requires deliberate attention, especially at unsigned junctions in San José or Liberia. Practise in a quiet area before navigating urban traffic.',
			},
			{
				id: 7,
				question: 'Should I drive at night in Costa Rica?',
				answer: 'No, outside cities. Animal hazards (sloths, capuchin monkeys, opossums, dogs, cattle), unannounced potholes, gravel transitions, and reduced visibility make night driving on rural routes genuinely dangerous. Within San José or other major urban centres, lit arterials are usually safe, but the inland and mountain routes between cities are best driven in daylight.',
			},
			{
				id: 8,
				question: 'Will my UK motor insurance cover me in Costa Rica?',
				answer: 'No. UK motor insurance does not extend to Costa Rica. The mandatory SLI provides minimum local liability cover; optional CDW from the rental company adds collision and damage cover. Verify the CDW clause on unpaved roads carefully if your itinerary includes Monteverde, Nicoya beach roads or Arenal back routes — many standard CDW contracts void cover on gravel.',
			},
			{
				id: 9,
				question: 'Can I cross into Nicaragua or Panama with my Costa Rican rental?',
				answer: 'Sometimes — depends on the rental company and additional paperwork. Confirm in writing before booking the cross-border leg. Verifying customs paperwork at the border can add several hours to any cross-border itinerary and not all rental contracts permit it.',
			},
			{
				id: 10,
				question: 'Are speed cameras really used in Costa Rica?',
				answer: 'Growing — the Pan-American Highway (Ruta 1) and entrances to San José are the main camera-enforcement zones in 2026. Most fines outside that corridor are still officer-issued at roadside stops on tourist routes.',
			},
		],
	},

	related: {
		heading: 'Related guides',
		lead: 'Central American and Caribbean neighbours where UK drivers face their own licensing-acceptance windows, insurance regimes and road-condition realities.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'gb', flagTo: 'do', label: 'UK → Dominican Republic', status: 'Live', href: '/idp-for-uk-drivers-in-dominican-republic/' },
			{ flagFrom: 'gb', flagTo: 'mx', label: 'UK → Mexico', status: 'Live', href: '/idp-for-uk-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'mx', label: 'US → Mexico', status: 'Live', href: '/idp-for-us-drivers-in-mexico/' },
			{ flagFrom: 'us', flagTo: 'cr', label: 'US → Costa Rica', status: 'Live', href: '/idp-for-us-drivers-in-costa-rica/' },
			{ flagFrom: 'gb', flagTo: 'tr', label: 'UK → Turkey', status: 'Live', href: '/idp-for-uk-drivers-in-turkey/' },
			{ flagFrom: 'gb', flagTo: 'eg', label: 'UK → Egypt', status: 'Live', href: '/idp-for-uk-drivers-in-egypt/' },
		],
	},

	finalCta: {
		heading: 'Picking up at Liberia or San José for a Costa Rica trip?',
		text: 'Multilingual PDF including English, French, German, Italian, Spanish, Portuguese and 6 other widely-read languages from the 1949 Geneva Convention set — generated from your real UK photocard in two minutes. Spanish is the working-language route at every Costa Rican touchpoint. Valid 1–5 years and covers Costa Rica plus the Dominican Republic, Mexico, other Latin American and Mediterranean destinations on the same plan. $35 / 1 yr · $45 / 3 yr · $55 / 5 yr. One-time payment, no subscription. The bigger trip-cost decisions are: SLI insurance is mandatory at $15–25/day (build it into the budget upfront, not as a surprise), 4WD-vs-2WD against the itinerary (Monteverde / Nicoya / Arenal back roads = 4WD), and day-time-only rural driving outside cities (animal hazards are the dominant night-time risk).',
		button: 'Start application',
	},

	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			'IDP Companion is a private multilingual translation companion document and is not affiliated with the Costa Rican Ministerio de Obras Públicas y Transportes (MOPT), the Policía de Tránsito, the Instituto Nacional de Seguros (INS), or any other Costa Rican government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. Authorised issuers of UK-origin Geneva 1949 IDPs are the AA, the RAC and the Post Office via PayPoint (since March 2024). IDP Companion must be used alongside your original UK photocard driving licence and the mandatory SLI insurance certificate.',
		sourcesHeading: 'Sources',
		sources: [
			'Ministerio de Obras Públicas y Transportes (MOPT) — Foreign driver guidance (mopt.go.cr)',
			'Instituto Nacional de Seguros (INS) — SLI insurance framework (ins-cr.com)',
			'UK Foreign, Commonwealth & Development Office — Driving in Costa Rica (gov.uk/foreign-travel-advice/costa-rica)',
			'Policía de Tránsito — Traffic enforcement (csv.go.cr)',
			'Vamos Rent A Car / Adobe Rent A Car — All-in rate transparency for Costa Rican rental pricing comparison',
		],
	},

	og: {
		originName: 'United Kingdom',
		destinationName: 'Costa Rica',
	},
};

export const ukCostaRicaCopy: Record<'en', CountryPairCopy> = { en };
