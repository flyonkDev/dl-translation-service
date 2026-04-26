/**
 * Country-pair content: Russia → Thailand.
 * Locales: en, ru. (es intentionally skipped — irrelevant audience.)
 *
 * Pattern for future country-pair pages — copy this file's structure.
 */

export type Severity = 'low' | 'med' | 'high';

export interface FineRow {
	icon: string;
	label: string;
	amount: string;
	note: string;
	severity: Severity;
}

export interface RuleCard {
	icon: string;
	label: string;
	value: string;
	note: string;
}

export interface ReasonCard {
	icon: string;
	title: string;
	text: string;
}

export interface OutcomeRow {
	severity: Severity;
	frequency: string;
	label: string;
	text: string;
}

export interface FaqItem {
	id: number;
	question: string;
	answer: string;
}

export interface RentingChain {
	name: string;
	policy: string;
}

export interface RelatedCard {
	flagFrom: string;
	flagTo: string;
	label: string;
	status: string;
	/** Internal href if the pair is live. Omit/empty for "coming soon" stubs. */
	href?: string;
}

/**
 * Optional rich blocks — country-specific add-ons to lift SEO depth and conversion.
 * Pages render these only when present. Russia-Thailand currently doesn't use them;
 * US-Italy uses all of them.
 */
export interface TldrRow {
	label: string;
	domestic: string;
	officialIdp: string;
	companion: string;
}

export interface LezZone {
	city: string;
	name: string;
	description: string;
	fine: string;
	note: string;
}

export interface PhraseItem {
	phrase: string;
	translation: string;
	context: string;
}

export interface HowToStep {
	title: string;
	text: string;
}

export interface AlphabetExample {
	sign: string;
	latin: string;
	meaning: string;
}

export interface RejectItem {
	icon: string;
	title: string;
	text: string;
}

export interface CountryPairCopy {
	seo: {
		title: string;
		description: string;
		ogTitleShort: string;
		ogSubtitle: string;
	};
	breadcrumbs: {
		home: string;
		current: string;
	};
	hero: {
		kicker: string;
		title: string;
		lead: string;
		ctaPrimary: string;
		ctaSecondary: string;
		badgeTop: string;
		badgeBottom: string;
	};
	quickAnswer: {
		required: boolean;
		verdict: string;
		text: string;
	};
	whyNotEnough: {
		heading: string;
		lead: string;
		reasons: ReasonCard[];
	};
	rules: {
		heading: string;
		lead: string;
		items: RuleCard[];
	};
	fines: {
		heading: string;
		lead: string;
		colViolation: string;
		colAmount: string;
		colNote: string;
		items: FineRow[];
		caption: string;
	};
	honesty: {
		heading: string;
		lead: string;
		is: { title: string; items: string[] };
		isNot: { title: string; items: string[] };
		helps: { title: string; items: string[] };
		needOfficial: { title: string; items: string[] };
		pattern: string;
	};
	renting: {
		heading: string;
		lead: string;
		chains: RentingChain[];
		tipsHeading: string;
		tips: string[];
	};
	outcomes: {
		heading: string;
		lead: string;
		items: OutcomeRow[];
		math: string;
	};
	faq: {
		heading: string;
		items: FaqItem[];
	};
	related: {
		heading: string;
		lead: string;
		comingSoonLabel: string;
		items: RelatedCard[];
	};
	finalCta: {
		heading: string;
		text: string;
		button: string;
	};
	legal: {
		disclaimerHeading: string;
		disclaimer: string;
		sourcesHeading: string;
		sources: string[];
	};
	og: {
		originName: string;
		destinationName: string;
	};

	/* --- optional blocks --- */
	lastReviewed?: string;

	tldr?: {
		heading: string;
		lead: string;
		colDocument: string;
		colWhatItDoes: string;
		colCost: string;
		rows: Array<{
			document: string;
			whatItDoes: string;
			cost: string;
			tone: 'neutral' | 'official' | 'companion';
		}>;
		footnote: string;
	};

	lez?: {
		heading: string;
		lead: string;
		badge?: string;
		zones: LezZone[];
		tip: string;
	};

	rejects?: {
		heading: string;
		lead: string;
		badge?: string;
		items: RejectItem[];
	};

	labels?: {
		freshnessPrefix?: string;
	};

	phrases?: {
		heading: string;
		lead: string;
		items: PhraseItem[];
	};

	howTo?: {
		heading: string;
		lead: string;
		steps: HowToStep[];
		duration: string;
		cost: string;
		schemaName: string;
	};

	alphabet?: {
		heading: string;
		lead: string;
		badge: string;
		examples: AlphabetExample[];
		helpsHeading: string;
		helps: string[];
		outro: string;
	};
}

const en: CountryPairCopy = {
	seo: {
		title: 'IDP for Russian Drivers in Thailand: 2026 Guide',
		description:
			'Driving in Thailand with a Russian license? Cyrillic licenses get rejected at rental desks. Honest guide to fines, rules, and how IDP Companion helps. From $35.',
		ogTitleShort: 'IDP for Russian Drivers in Thailand',
		ogSubtitle: '2026 Guide — fines, rules, what works',
	},
	breadcrumbs: {
		home: 'Home',
		current: 'Russia → Thailand',
	},
	hero: {
		kicker: 'Russia → Thailand · 2026 Guide',
		title: 'IDP for Russian Drivers in Thailand: 2026 Guide',
		lead: "You've booked Bangkok or Phuket. Your Russian license is in your wallet. But here's what most travelers don't realize until they arrive at the rental desk: a Russian license alone is not accepted in Thailand — and the 2024-2025 enforcement amendments made this expensive to get wrong. This guide covers what documents you need, what happens without them, and how IDP Companion fits in honestly.",
		ctaPrimary: 'Get IDP Companion in 2 min — $35',
		ctaSecondary: 'See all plans',
		badgeTop: '2026 Guide',
		badgeBottom: 'From $35',
	},
	quickAnswer: {
		required: true,
		verdict: 'Yes — you need an IDP in Thailand',
		text: 'Thailand is a signatory to the 1949 Geneva Convention and legally requires foreign drivers to carry their original license + a 1949 Geneva IDP. Without it: 500–2,000 THB on-the-spot fines, voided rental insurance, and refusal at most major rental counters.',
	},
	whyNotEnough: {
		heading: 'Why your Russian license alone is not enough',
		lead: 'Even if Thai police occasionally wave through tourists, rental car companies are stricter than the law — and the rules tightened across the industry over the past two years.',
		reasons: [
			{
				icon: 'ph:translate-bold',
				title: 'The Cyrillic problem',
				text: "Sixt and other major rental chains require an International Driving Permit for licenses printed in non-Roman alphabets (Arabic, Chinese, Cyrillic). Hertz, Avis, Budget, and most local Thai shops in tourist areas apply similar policies. Your license has your name and address in Cyrillic — the rental agent at Phuket airport doesn't read Russian, the underwriter behind that agent doesn't either.",
			},
			{
				icon: 'ph:scales-bold',
				title: 'The convention mismatch',
				text: 'Russia issues IDPs under the 1968 Vienna Convention. Thailand only recognizes the 1949 Geneva Convention. This is a real legal gap. The practical solution is to get a 1949 Geneva IDP from the All-Russian Automobile Society (РОСАВТОКЛУБ) before traveling, or convert to a Thai license if staying long-term.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'Reality on the ground',
				text: 'In Phuket, Pattaya, and Koh Samui, police checkpoints have intensified since the recent Royal Thai Police amendments to the Land Traffic Act in 2024-2025. Officers now stop vehicles at random and request driving license, IDP, insurance proof, and ID documents. Russian tourists without IDP routinely report on-the-spot fines and rental shops calling them mid-day to bring back the vehicle.',
			},
		],
	},
	rules: {
		heading: 'Thailand driving rules Russians should know',
		lead: 'A few of these surprise drivers from Russia. Take your first hour slow.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Driving side', value: 'LEFT', note: 'Roundabouts, lane changes, parking — all flip' },
			{ icon: 'mdi:speedometer', label: 'Urban speed', value: '50 km/h', note: '' },
			{ icon: 'mdi:road-variant', label: 'Rural / Highway', value: '90 / 120 km/h', note: 'Tollways and motorways' },
			{ icon: 'mdi:beer-outline', label: 'Alcohol limit', value: '0.05% BAC', note: "Russia's 0.0% standard means recalibrate" },
			{ icon: 'mdi:cellphone-off', label: 'Phone use', value: 'Banned', note: 'Including at red lights' },
			{ icon: 'mdi:seatbelt', label: 'Seatbelts', value: 'Mandatory', note: 'Driver and front passenger' },
			{ icon: 'mdi:helmet', label: 'Helmets', value: 'Mandatory', note: 'Driver AND passenger on bikes/scooters' },
			{ icon: 'ph:traffic-sign-bold', label: 'Right turn on red', value: 'Not allowed', note: 'Standard rule, no exceptions' },
		],
	},
	fines: {
		heading: '2026 fines for common violations',
		lead: 'These must be paid in cash at the nearest police station. After payment, you have a 24-hour grace period before the same violation can be ticketed again. DUI and reckless driving have no grace period.',
		colViolation: 'Violation',
		colAmount: 'Maximum fine',
		colNote: 'Notes',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Driving without IDP', amount: '500–2,000 THB (~$15–60)', note: '24-hour grace after first ticket', severity: 'low' },
			{ icon: 'mdi:speedometer', label: 'Speeding', amount: '4,000 THB (~$120)', note: 'Maximum increased ~4x in 2025', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Red light violation', amount: '4,000 THB (~$120)', note: 'Camera-enforced in Bangkok', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Mobile phone while driving', amount: '4,000 THB (~$120)', note: 'Including at red lights', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'No seatbelt / helmet', amount: '2,000 THB (~$60)', note: 'Per person', severity: 'low' },
			{ icon: 'mdi:beer-outline', label: 'DUI (above 0.05% BAC)', amount: 'Up to 20,000 THB (~$600)', note: 'Plus possible imprisonment', severity: 'high' },
			{ icon: 'mdi:license', label: 'Driving without valid license', amount: 'Up to 1,000 THB', note: 'Plus vehicle impoundment risk', severity: 'low' },
		],
		caption: 'Amounts are statutory maximums; on-the-spot fines are often lower. All values approximate USD at 2026 exchange rates.',
	},
	honesty: {
		heading: 'How IDP Companion fits — honestly',
		lead: "We're going to be straight with you because there's a lot of misleading marketing in this space.",
		is: {
			title: 'What IDP Companion is',
			items: [
				'A multilingual digital PDF that translates your Russian license data into English and other widely-read languages',
				'Designed to be presented at car rental desks, hotel check-ins, and informal verification',
				'Generated in minutes after you upload your license and pass our verification step',
				'Available for $35 (1 year), $45 (3 years), or $55 (5 years) — paid once, no subscription',
			],
		},
		isNot: {
			title: 'What IDP Companion is not',
			items: [
				'Not a government-issued IDP under the 1949 Geneva or 1968 Vienna Convention',
				"Not a replacement for an official IDP from РОСАВТОКЛУБ or your country's authorized issuer",
				'Not valid by itself — must be carried alongside your original Russian license',
			],
		},
		helps: {
			title: 'When IDP Companion helps Russian drivers',
			items: [
				'At rental desks where the agent needs to read license details quickly',
				"As an English-language translation reducing friction during ID verification",
				"In hotels, banks, or other situations where you're asked for English-language ID",
				'As a backup if your printed government IDP is lost or damaged during the trip',
			],
		},
		needOfficial: {
			title: 'When you need an official government IDP',
			items: [
				'Thai police checkpoints requiring legally compliant 1949 Geneva IDP',
				'Insurance claims after an accident — insurers often require official IDP for full coverage',
				'Long-term driving in Thailand approaching the 90-day limit',
				'In Phuket and similar provinces where authorities specifically require printed 1949 Geneva booklets',
			],
		},
		pattern:
			'The honest pattern most Russian travelers follow: get the official РОСАВТОКЛУБ IDP for legal compliance, and add IDP Companion as a faster, multilingual translation aid for rental desks and informal checks. They cost roughly the same money, and they solve different problems.',
	},
	renting: {
		heading: 'Renting a car in Thailand as a Russian driver',
		lead: 'Most major chains operate at Suvarnabhumi (Bangkok), Don Mueang (Bangkok domestic), Phuket International, and Chiang Mai International airports. The most common ones Russians rent from:',
		chains: [
			{ name: 'Sixt', policy: 'Strict on documentation, requires IDP for non-Roman alphabet licenses (explicit policy)' },
			{ name: 'Hertz', policy: 'Similar policy, requires IDP for Russian licenses' },
			{ name: 'Avis / Budget', policy: 'Generally requires IDP, especially for premium vehicles' },
			{ name: 'Local Thai shops', policy: 'Vary widely; some accept just a Russian license + passport — but doing this voids any insurance you have' },
		],
		tipsHeading: 'Practical tips',
		tips: [
			'Always book online in advance with a major chain. Walk-in rentals at Phuket airport are notorious for last-minute price surges',
			'Pay deposits in cash if possible. Some shops still try to hold passports as deposit, which is a security risk',
			'Photograph the vehicle on pickup — every scratch, dent, mileage reading. Email to yourself so timestamps are preserved',
			'Always select the highest insurance level offered. Voided coverage from missing IDP can mean tens of thousands of dollars in liability after a single accident',
		],
	},
	outcomes: {
		heading: 'What happens if you drive without an IDP — real outcomes',
		lead: 'Russian travelers ask this most often. Here are realistic outcomes ranked by frequency.',
		items: [
			{
				severity: 'low',
				frequency: '90%+ of trips',
				label: "Nothing happens because you weren't stopped",
				text: 'Most short trips end without any document check. This is the false sense of security that bites hard when the 10% scenario hits.',
			},
			{
				severity: 'med',
				frequency: '5–10% of trips in Phuket / Pattaya',
				label: 'Stopped at a police checkpoint',
				text: 'On-the-spot fine of 500–2,000 THB, paid in cash at the nearest police station. You get a receipt and a 24-hour grace period. Annoying, expensive, but not catastrophic.',
			},
			{
				severity: 'high',
				frequency: '1–2% of trips',
				label: 'Minor accident',
				text: "Insurance company opens a claim. They check whether you had valid IDP. If not, coverage is void. You're personally liable for repairs, the other party's damages, and any medical costs. In Thailand, hospitals require payment upfront, often in cash, before treatment.",
			},
			{
				severity: 'high',
				frequency: 'Rare but real',
				label: 'Serious accident',
				text: 'Combined effects of voided insurance, hospital bills paid in cash, potential criminal liability, and travel delays measured in weeks rather than days. Russian embassies in Thailand handle these cases regularly and they always start with: "did you have an IDP?"',
			},
		],
		math: 'The math is simple: a $35–55 document protects against five-figure liability scenarios. The decision should be obvious.',
	},
	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				id: 1,
				question: "Do I really need an IDP if I'm only renting for a day in Phuket?",
				answer: 'Yes. Police checkpoints in Phuket are among the most active in Thailand, especially around Patong, Karon, and Kata. A one-day rental still requires both your Russian license and an IDP. Insurance is void without IDP regardless of trip length.',
			},
			{
				id: 2,
				question: 'Can I get an IDP after I arrive in Thailand?',
				answer: "No. International Driving Permits must be issued in the country where your driver's license was issued. For Russian license holders, that means РОСАВТОКЛУБ before traveling. IDP Companion can be generated remotely as a translation aid, but it is not a substitute for a government IDP.",
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as the official Russian government IDP?',
				answer: 'No. IDP Companion is a multilingual translation document — it helps rental desks and informal checks read your license details in English. It is not issued under the Geneva or Vienna Conventions and is not a legal substitute for the official IDP from РОСАВТОКЛУБ. Many travelers use both: the official IDP for legal compliance, IDP Companion for faster rental desk experiences.',
			},
			{
				id: 4,
				question: 'What if my Russian license is in Cyrillic only?',
				answer: 'This is exactly the situation IDP Companion was designed for. Cyrillic-only licenses create real friction at rental desks worldwide, not just in Thailand. The companion document presents your license data in multiple languages — English first — so verification takes minutes instead of awkward back-and-forth with Google Translate.',
			},
			{
				id: 5,
				question: 'How long is IDP Companion valid?',
				answer: 'Choose between 1 year ($35), 3 years ($45), or 5 years ($55). Validity is tied to your domestic Russian license — if your Russian license expires, the companion expires with it.',
			},
			{
				id: 6,
				question: 'What happens if I drive without IDP and get stopped in Thailand?',
				answer: "You'll receive a fine of 500–2,000 THB (around $15–60) payable in cash at the nearest police station. You'll get a 24-hour grace period after paying. The bigger concern: if you have an accident in this period, your rental insurance is void, leaving you personally liable for all damages.",
			},
			{
				id: 7,
				question: 'Does Thailand accept the digital IDP Companion at police checkpoints?',
				answer: 'The 1949 Geneva Convention specifies a printed document, and the Royal Thai Police generally expect a physical IDP booklet. IDP Companion is a digital companion document. For police checkpoints requiring strict legal compliance, carry the official РОСАВТОКЛУБ IDP. The companion document is most useful at rental desks and informal verification situations.',
			},
			{
				id: 8,
				question: 'Can I drive a motorbike or scooter with IDP Companion?',
				answer: 'Same logic as cars. IDP Companion is a translation aid, not a license. To drive a motorbike legally in Thailand, you need (1) a Russian license with motorcycle endorsement, (2) an official IDP with the motorcycle category stamped, and (3) we recommend IDP Companion as a translation companion for rental shops. Driving a scooter without proper documentation in Phuket or Bangkok is the most common cause of fines for tourists — and the riskiest, because hospital bills after motorbike accidents in Thailand routinely exceed $10,000.',
			},
			{
				id: 9,
				question: 'I have an old Russian "pink" paper license. Does that work?',
				answer: 'Old paper-style Russian licenses without a plastic card are increasingly rejected at rental desks worldwide. If you still have one, renew it to the current laminated card before traveling. IDP Companion will translate either format, but rental shops are stricter about old paper formats.',
			},
			{
				id: 10,
				question: "What if I'm staying longer than 90 days?",
				answer: 'After 90 days from your entry date, your IDP no longer covers you legally in Thailand. Long-term residents must convert to a Thai driving license through the Department of Land Transport (DLT). The process requires a passport, valid visa, residence certificate, medical certificate, and proof of vision. Your Russian license can sometimes be converted directly without a written test, depending on the regional DLT office.',
			},
		],
	},
	related: {
		heading: 'Related guides',
		lead: 'More country-pair guides for Russian drivers and Thailand-bound travelers — coming soon.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Russia → Turkey', status: 'Coming soon' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Russia → UAE', status: 'Coming soon' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Russia → Indonesia', status: 'Coming soon' },
			{ flagFrom: 'us', flagTo: 'th', label: 'US → Thailand', status: 'Coming soon' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Coming soon' },
			{ flagFrom: 'de', flagTo: 'th', label: 'Germany → Thailand', status: 'Coming soon' },
		],
	},
	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: 'Multilingual PDF, generated in minutes from your real Russian license. Pair it with the official РОСАВТОКЛУБ IDP for full coverage at Thai checkpoints.',
		button: 'Start application',
	},
	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			'IDP Companion is a multilingual translation document and is not affiliated with the All-Russian Automobile Society (РОСАВТОКЛУБ), the Royal Thai Police, the Department of Land Transport (DLT) of Thailand, the American Automobile Association (AAA), or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention. It must be used alongside your original Russian driver license and, where required by local law, alongside an official IDP issued by your country\'s authorized issuer.',
		sourcesHeading: 'Sources',
		sources: [
			'Royal Thai Police amendments to the Land Traffic Act, 2024-2025',
			'Department of Land Transport (DLT), Thailand',
			'1949 Geneva Convention on Road Traffic, UN Treaty Collection',
			'Major rental chain policies on non-Roman alphabet licenses',
			'All-Russian Automobile Society (РОСАВТОКЛУБ) public guidelines',
		],
	},
	og: {
		originName: 'Russia',
		destinationName: 'Thailand',
	},
};

const ru: CountryPairCopy = {
	seo: {
		title: 'Международные права для россиян в Таиланде: гид 2026',
		description:
			'Едете в Таиланд с российскими правами? Кириллицу не принимают на стойке аренды. Честный гид: штрафы, правила, как помогает IDP Companion. От $35.',
		ogTitleShort: 'Россияне за рулём в Таиланде',
		ogSubtitle: 'Гид 2026 — штрафы, правила, что работает',
	},
	breadcrumbs: {
		home: 'Главная',
		current: 'Россия → Таиланд',
	},
	hero: {
		kicker: 'Россия → Таиланд · Гид 2026',
		title: 'Международные права для россиян в Таиланде: гид 2026',
		lead:
			'Билеты в Бангкок или на Пхукет уже куплены. Российские права в кошельке. Но вот что многие узнают только на стойке аренды: одних российских прав в Таиланде недостаточно — а ужесточения 2024–2025 годов сделали ошибку дорогой. В этом гиде — какие документы нужны, что бывает без них, и как сюда точно вписывается IDP Companion.',
		ctaPrimary: 'Получить IDP Companion за 2 минуты — $35',
		ctaSecondary: 'Все тарифы',
		badgeTop: 'Гид 2026',
		badgeBottom: 'От $35',
	},
	quickAnswer: {
		required: true,
		verdict: 'Да — IDP в Таиланде обязателен',
		text:
			'Таиланд — участник Женевской конвенции 1949 года и по закону требует от иностранных водителей оригинал прав плюс IDP по конвенции 1949 года. Без него: штрафы 500–2 000 батов на месте, аннулирование страховки аренды и отказы на стойках всех крупных прокатных сетей.',
	},
	whyNotEnough: {
		heading: 'Почему российских прав в одиночку недостаточно',
		lead:
			'Даже если тайская полиция иногда машет туристам — мол, проезжай, прокатные компании строже закона. И за последние два года правила в индустрии заметно ужесточились.',
		reasons: [
			{
				icon: 'ph:translate-bold',
				title: 'Проблема кириллицы',
				text:
					'Sixt и другие крупные прокатные сети требуют International Driving Permit для прав, напечатанных не на латинице (арабский, китайский, кириллица). Hertz, Avis, Budget и большинство местных таиландских контор в туристических зонах применяют ту же политику. У вас в правах ФИО и адрес кириллицей — агент в аэропорту Пхукета не читает по-русски, страховой андеррайтер за этим агентом — тоже.',
			},
			{
				icon: 'ph:scales-bold',
				title: 'Несовпадение конвенций',
				text:
					'Россия выдаёт IDP по Венской конвенции 1968 года. Таиланд признаёт только Женевскую конвенцию 1949 года. Это реальная юридическая дыра. На практике — нужно получить IDP по Женевской 1949 в РОСАВТОКЛУБе до отъезда, либо при долгом пребывании оформить тайские права на месте.',
			},
			{
				icon: 'ph:shield-warning-bold',
				title: 'Реальность на дорогах',
				text:
					'В Пхукете, Паттайе и на Самуи проверки на дорогах участились после поправок Королевской полиции к Закону о дорожном движении в 2024–2025. Полицейские останавливают машины случайно и проверяют права, IDP, страховку и удостоверение личности. Российские туристы без IDP регулярно сообщают о штрафах на месте и звонках из проката с требованием вернуть машину среди дня.',
			},
		],
	},
	rules: {
		heading: 'Правила вождения в Таиланде, о которых стоит знать',
		lead: 'Несколько вещей удивляют водителей из России. Первый час за рулём — медленно.',
		items: [
			{ icon: 'ph:steering-wheel-bold', label: 'Сторона движения', value: 'ЛЕВАЯ', note: 'Кольцевые, перестроения, парковка — всё зеркально' },
			{ icon: 'mdi:speedometer', label: 'В городе', value: '50 км/ч', note: '' },
			{ icon: 'mdi:road-variant', label: 'Загород / трасса', value: '90 / 120 км/ч', note: 'Платные и скоростные дороги' },
			{ icon: 'mdi:beer-outline', label: 'Алкоголь', value: '0,05‰', note: 'Российские 0,0‰ — пересчитайте привычки' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон в руках', value: 'Нельзя', note: 'Включая стоянку на красном' },
			{ icon: 'mdi:seatbelt', label: 'Ремни', value: 'Обязательно', note: 'Водитель и передний пассажир' },
			{ icon: 'mdi:helmet', label: 'Шлемы', value: 'Обязательно', note: 'Водитель И пассажир на байке/скутере' },
			{ icon: 'ph:traffic-sign-bold', label: 'Поворот направо на красный', value: 'Запрещён', note: 'По умолчанию, без исключений' },
		],
	},
	fines: {
		heading: 'Штрафы 2026 за частые нарушения',
		lead:
			'Платить наличными в ближайшем отделении полиции. После оплаты — 24-часовая отсрочка от повторного штрафа за то же нарушение. У DUI и опасного вождения отсрочки нет.',
		colViolation: 'Нарушение',
		colAmount: 'Максимум',
		colNote: 'Примечание',
		items: [
			{ icon: 'mdi:card-account-details-outline', label: 'Вождение без IDP', amount: '500–2 000 ฿ (~$15–60)', note: '24 часа отсрочки после первого штрафа', severity: 'low' },
			{ icon: 'mdi:speedometer', label: 'Превышение скорости', amount: '4 000 ฿ (~$120)', note: 'Максимум вырос ~в 4 раза в 2025', severity: 'med' },
			{ icon: 'mdi:traffic-light', label: 'Проезд на красный', amount: '4 000 ฿ (~$120)', note: 'В Бангкоке — фотофиксация', severity: 'med' },
			{ icon: 'mdi:cellphone-off', label: 'Телефон за рулём', amount: '4 000 ฿ (~$120)', note: 'Включая стоянку на красном', severity: 'med' },
			{ icon: 'mdi:seatbelt', label: 'Без ремня / шлема', amount: '2 000 ฿ (~$60)', note: 'За каждого', severity: 'low' },
			{ icon: 'mdi:beer-outline', label: 'Пьяное вождение (>0,05‰)', amount: 'до 20 000 ฿ (~$600)', note: 'Плюс возможный арест', severity: 'high' },
			{ icon: 'mdi:license', label: 'Вождение без действующих прав', amount: 'до 1 000 ฿', note: 'Плюс риск изъятия машины', severity: 'low' },
		],
		caption: 'Указаны установленные законом максимумы; реальные штрафы на месте часто ниже. Курс USD приблизительный, на 2026 год.',
	},
	honesty: {
		heading: 'Где IDP Companion помогает — без преувеличений',
		lead: 'Скажем прямо: в этой нише много вводящего в заблуждение маркетинга.',
		is: {
			title: 'Что такое IDP Companion',
			items: [
				'Многоязычный цифровой PDF, который переводит данные ваших российских прав на английский и другие распространённые языки',
				'Создан для предъявления на стойках аренды, регистрациях в отелях и в ситуациях неформальной проверки документов',
				'Готов за минуты после загрузки прав и прохождения автоматической верификации',
				'Стоимость: $35 (1 год), $45 (3 года), $55 (5 лет) — разовая оплата, без подписок',
			],
		},
		isNot: {
			title: 'Чем IDP Companion НЕ является',
			items: [
				'Не государственное IDP по Женевской 1949 или Венской 1968 конвенции',
				'Не замена официального IDP из РОСАВТОКЛУБа или другого уполномоченного эмитента в вашей стране',
				'Не действителен сам по себе — носить только вместе с оригиналом российских прав',
			],
		},
		helps: {
			title: 'Когда IDP Companion помогает россиянам',
			items: [
				'На стойках аренды, где агент должен быстро прочитать данные прав',
				'Как англоязычный перевод, снижающий трение при проверке документов',
				'В отелях, банках и других местах, где просят документ на английском',
				'Как запасной вариант, если бумажный официальный IDP потерялся или повредился в поездке',
			],
		},
		needOfficial: {
			title: 'Когда нужен официальный государственный IDP',
			items: [
				'Полицейские проверки в Таиланде, требующие соответствия Женевской конвенции 1949',
				'Страховые случаи после ДТП — страховщики часто требуют официальный IDP для полного покрытия',
				'Длительное вождение в Таиланде с приближением 90-дневного лимита',
				'Пхукет и подобные провинции, где власти требуют именно бумажную книжку IDP по конвенции 1949',
			],
		},
		pattern:
			'Честный паттерн, по которому идёт большинство российских туристов: получают официальный IDP в РОСАВТОКЛУБе для законности, и добавляют IDP Companion как быстрый многоязычный перевод для прокатных стоек и неформальных проверок. Стоят примерно одинаково, решают разные задачи.',
	},
	renting: {
		heading: 'Аренда машины в Таиланде с российскими правами',
		lead:
			'Все крупные сети работают в аэропортах Суварнабхуми (Бангкок), Дон Мыанг (внутренние рейсы Бангкок), Пхукет и Чиангмай. Самые популярные у россиян:',
		chains: [
			{ name: 'Sixt', policy: 'Строго к документам, требует IDP для прав на нелатинских алфавитах (явная политика)' },
			{ name: 'Hertz', policy: 'Аналогичная политика, IDP для российских прав обязателен' },
			{ name: 'Avis / Budget', policy: 'Как правило, требует IDP — особенно для премиальных автомобилей' },
			{ name: 'Местные таиландские конторы', policy: 'По-разному; некоторые принимают только российские права + загранпаспорт — но это аннулирует вашу страховку' },
		],
		tipsHeading: 'Практические советы',
		tips: [
			'Бронируйте онлайн заранее в крупной сети. Walk-in аренда в аэропорту Пхукета известна неприятными скачками цен в последний момент',
			'По возможности оставляйте депозит наличными. Некоторые конторы ещё пытаются взять под залог загранпаспорт — это риск безопасности',
			'Сфотографируйте машину при получении: каждую царапину, вмятину, показания одометра. Отправьте письмом самому себе — таймстамп сохранится',
			'Всегда выбирайте максимальный уровень страховки. Аннулированная страховка из-за отсутствия IDP может вылиться в десятки тысяч долларов личной ответственности после одного ДТП',
		],
	},
	outcomes: {
		heading: 'Что бывает, если ехать без IDP — реальные сценарии',
		lead: 'Россияне спрашивают это чаще всего. Вот реалистичные сценарии в порядке частоты.',
		items: [
			{
				severity: 'low',
				frequency: '90%+ поездок',
				label: 'Ничего не происходит, потому что вас не остановили',
				text:
					'Большинство коротких поездок проходит без проверки документов. Это иллюзия безопасности, которая болезненно бьёт, когда срабатывает оставшаяся доля.',
			},
			{
				severity: 'med',
				frequency: '5–10% поездок в Пхукете / Паттайе',
				label: 'Остановили на полицейском посту',
				text:
					'Штраф 500–2 000 батов на месте, наличными в ближайшем отделении полиции. Получаете квитанцию и 24-часовую отсрочку. Неприятно, дорого, но не катастрофа.',
			},
			{
				severity: 'high',
				frequency: '1–2% поездок',
				label: 'Мелкое ДТП',
				text:
					'Страховая открывает дело и проверяет, был ли действительный IDP. Если нет — покрытие аннулируется. Вы лично платите за ремонт, ущерб второй стороне и медицинские расходы. В Таиланде больницы требуют оплату вперёд, часто наличными, до начала лечения.',
			},
			{
				severity: 'high',
				frequency: 'Редко, но случается',
				label: 'Серьёзное ДТП',
				text:
					'В сумме: аннулированная страховка, оплата больницы наличными, потенциальная уголовная ответственность и задержки в поездке, измеряемые неделями, а не днями. Российские посольства в Таиланде регулярно ведут такие дела — и всегда начинают с вопроса: «у вас был IDP?»',
			},
		],
		math: 'Арифметика простая: документ за $35–55 закрывает риски на пять цифр. Решение очевидно.',
	},
	faq: {
		heading: 'Частые вопросы',
		items: [
			{
				id: 1,
				question: 'Мне правда нужен IDP, если я арендую машину на Пхукете всего на день?',
				answer:
					'Да. Полицейские посты на Пхукете — одни из самых активных в Таиланде, особенно в районах Патонг, Карон и Ката. Аренда даже на сутки требует и российских прав, и IDP. Страховка аннулируется при отсутствии IDP независимо от длительности поездки.',
			},
			{
				id: 2,
				question: 'Можно ли получить IDP уже в Таиланде?',
				answer:
					'Нет. International Driving Permit выдаётся только в той стране, где выданы ваши национальные права. Для россиян это РОСАВТОКЛУБ — оформлять до отъезда. IDP Companion можно получить дистанционно как переводной документ, но он не заменяет государственный IDP.',
			},
			{
				id: 3,
				question: 'IDP Companion — это то же самое, что официальный российский IDP?',
				answer:
					'Нет. IDP Companion — это многоязычный переводной документ: помогает прокатным стойкам и неформальным проверкам прочитать данные ваших прав на английском. Он не выдаётся по Женевской или Венской конвенции и юридически не заменяет официальный IDP из РОСАВТОКЛУБа. Многие используют оба: официальный IDP — для законности, IDP Companion — чтобы быстрее проходить стойки.',
			},
			{
				id: 4,
				question: 'Что если мои российские права только на кириллице?',
				answer:
					'Это ровно та ситуация, под которую IDP Companion и был сделан. Чисто кириллические права создают реальное трение на стойках аренды по всему миру, не только в Таиланде. Companion-документ показывает данные ваших прав на нескольких языках — английский первым — и проверка занимает минуты вместо неловкого общения через Google Translate.',
			},
			{
				id: 5,
				question: 'Сколько действует IDP Companion?',
				answer:
					'На выбор: 1 год ($35), 3 года ($45), 5 лет ($55). Срок привязан к вашим российским правам — если они истекают, истекает и companion-документ.',
			},
			{
				id: 6,
				question: 'Что будет, если ехать без IDP и попасть под проверку в Таиланде?',
				answer:
					'Получите штраф 500–2 000 батов (примерно $15–60) — оплата наличными в ближайшем отделении полиции. После оплаты — 24-часовая отсрочка. Главное беспокойство: если в этот период попадёте в ДТП, страховка аренды аннулируется, и весь ущерб ляжет на вас лично.',
			},
			{
				id: 7,
				question: 'Принимает ли Таиланд цифровой IDP Companion на полицейских постах?',
				answer:
					'Женевская конвенция 1949 года требует именно бумажный документ, и Королевская полиция Таиланда обычно ожидает физическую книжку IDP. IDP Companion — цифровой companion-документ. Для полицейских постов с требованиями строгого юридического соответствия носите официальный IDP из РОСАВТОКЛУБа. Companion полезнее всего на прокатных стойках и в неформальных проверках.',
			},
			{
				id: 8,
				question: 'Можно ли с IDP Companion ехать на байке или скутере?',
				answer:
					'Логика та же, что и с машинами. IDP Companion — переводное пособие, а не лицензия. Чтобы законно ехать на мотоцикле в Таиланде, нужны: (1) российские права с категорией мотоцикла, (2) официальный IDP с проставленной мотоциклетной категорией и (3) рекомендуем IDP Companion как языковое подспорье для проката. Езда на скутере без надлежащих документов в Пхукете или Бангкоке — самая частая причина штрафов у туристов и самый рискованный вариант: счета за лечение после мото-ДТП в Таиланде регулярно превышают $10 000.',
			},
			{
				id: 9,
				question: 'У меня старые «розовые» бумажные российские права. Они подойдут?',
				answer:
					'Старые бумажные российские права без пластиковой карточки всё чаще отказываются принимать на стойках аренды по всему миру. Если такие ещё на руках — обновите до текущего ламинированного образца перед поездкой. IDP Companion переведёт оба формата, но прокатные конторы строже относятся к старым бумажным.',
			},
			{
				id: 10,
				question: 'Что если я остаюсь дольше 90 дней?',
				answer:
					'Через 90 дней с момента въезда IDP юридически вас уже не покрывает. Долгосрочные резиденты обязаны оформить тайские права через Department of Land Transport (DLT). Процесс требует загранпаспорт, действующую визу, справку о месте жительства, медсправку и подтверждение зрения. Российские права в некоторых случаях можно конвертировать без сдачи теории — зависит от конкретного отделения DLT.',
			},
		],
	},
	related: {
		heading: 'Похожие гиды',
		lead: 'Больше гидов по парам стран для российских водителей и для путешественников в Таиланд — скоро появятся.',
		comingSoonLabel: 'Скоро',
		items: [
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Россия → Турция', status: 'Скоро' },
			{ flagFrom: 'ru', flagTo: 'ae', label: 'Россия → ОАЭ', status: 'Скоро' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Россия → Индонезия', status: 'Скоро' },
			{ flagFrom: 'us', flagTo: 'th', label: 'США → Таиланд', status: 'Скоро' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'Великобритания → Таиланд', status: 'Скоро' },
			{ flagFrom: 'de', flagTo: 'th', label: 'Германия → Таиланд', status: 'Скоро' },
		],
	},
	finalCta: {
		heading: 'Готовы оформить IDP Companion?',
		text:
			'Многоязычный PDF, готов за минуты по вашим реальным российским правам. Сочетайте с официальным IDP из РОСАВТОКЛУБа для полного покрытия на тайских постах.',
		button: 'Начать оформление',
	},
	legal: {
		disclaimerHeading: 'Дисклеймер',
		disclaimer:
			'IDP Companion — это многоязычный переводной документ. Мы не аффилированы с РОСАВТОКЛУБом, Королевской полицией Таиланда, Department of Land Transport (DLT) Таиланда, American Automobile Association (AAA) или какими-либо государственными органами. IDP Companion не является государственным International Driving Permit по Женевской конвенции 1949 года или Венской конвенции 1968 года. Используется только вместе с оригиналом российских прав, а где этого требует местный закон — вместе с официальным IDP, выданным уполномоченным органом вашей страны.',
		sourcesHeading: 'Источники',
		sources: [
			'Поправки Королевской полиции Таиланда к Закону о дорожном движении, 2024–2025',
			'Department of Land Transport (DLT), Таиланд',
			'Женевская конвенция о дорожном движении 1949 года, Архив договоров ООН',
			'Политики крупных прокатных сетей по правам на нелатинских алфавитах',
			'Публичные руководства РОСАВТОКЛУБа',
		],
	},
	og: {
		originName: 'Россия',
		destinationName: 'Таиланд',
	},
};

export const russiaThailandCopy: Record<'en' | 'ru', CountryPairCopy> = { en, ru };
