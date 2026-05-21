/**
 * Country-pair content: Russia → Thailand.
 * Locales: en, ru. (es intentionally skipped — irrelevant audience.)
 *
 * Type definitions live in `../../_types.ts` (extracted there during the
 * tier/origin folder reorganisation; previously they were defined inline here).
 */

import type { CountryPairCopy } from '../../_types';

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
				text: 'Russia issues IDPs under the 1968 Vienna Convention. Thailand only recognizes the 1949 Geneva Convention. This is a real legal gap. The practical solution is to obtain a 1949 Geneva IDP issued in Russia before traveling, or convert to a Thai license if staying long-term.',
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
		lead: "Thai IDP marketing is full of half-truths. Here is what IDP Companion is, what it is not, and the documents Thai law actually requires alongside it.",
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
				"Not valid by itself — must be carried alongside your physical Russian driver license",
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
			'What most prepared Russian travelers carry into Thailand: physical Russian driver license + a 1949 Geneva IDP issued in Russia (Thailand requires this format) + IDP Companion as the multilingual translation aid for rental desks and informal checks + passport. The translation companion solves friction problems the booklet alone does not.',
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
		lead: 'What actually happens at Phuket and Bangkok rental desks when a Russian licence shows up alone — six outcomes from most common to rarest, plus the catastrophic motorbike-without-Cat-A scenario that dominates Russian-traveller forum threads about Thailand.',
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
				answer: "International Driving Permits must be issued in the country where your driver's license was issued — Thai authorities do not issue them to foreign tourists. For Russian license holders this means a 1949 Geneva IDP obtained in Russia before traveling. IDP Companion can be generated online from anywhere as a multilingual translation companion (English plus 10 other widely-spoken languages from the 1949 Geneva Convention set — French, Spanish, Arabic, German, Italian and others), but it is a private translation document and not a substitute for a government-issued IDP at Thai checkpoints.",
			},
			{
				id: 3,
				question: 'Is IDP Companion the same as the official Russian government IDP?',
				answer: 'IDP Companion is a multilingual translation document — it helps rental desks and informal checks read your license details in English plus 10 other widely-spoken languages from the 1949 Geneva Convention set (French, Spanish, Arabic, German, Italian and others). It is not issued under the Geneva or Vienna Conventions and is not a legal substitute for a government-issued IDP at Thai police checkpoints. It is generated online in 2 minutes, valid 1–5 years, and re-printable from any hotel.',
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
				answer: 'The 1949 Geneva Convention specifies a printed document, and the Royal Thai Police generally expect a physical IDP booklet from an authorized national-level issuer. IDP Companion is a digital multilingual translation document — print it on standard paper from any hotel. It is most useful at rental desks, hotel check-ins, and informal verification situations rather than primary IDP verification at police checkpoints.',
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
		lead: 'Southeast Asian and IDP-relevant destinations Russian travellers often pair with Thailand — coming soon.',
		comingSoonLabel: 'Coming soon',
		items: [
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Russia → Egypt', status: 'Live', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Russia → Greece', status: 'Live', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Russia → Indonesia', status: 'Live', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Russia → Turkey', status: 'Live', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'us', flagTo: 'th', label: 'US → Thailand', status: 'Live', href: '/idp-for-us-drivers-in-thailand/' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'UK → Thailand', status: 'Live', href: '/idp-for-uk-drivers-in-thailand/' },
		],
	},
	finalCta: {
		heading: 'Ready to get your IDP Companion?',
		text: 'Multilingual PDF including English, French, Spanish, Arabic and 7 other widely-spoken languages from the 1949 Geneva Convention set — generated from your real Russian license in 2 minutes. Print at home or from any hotel. Valid 1–5 years — covers this trip and the next ones. $35 / 1yr · $45 / 3yr · $55 / 5yr. One-time payment, no subscription.',
		button: 'Start application',
	},
	legal: {
		disclaimerHeading: 'Disclaimer',
		disclaimer:
			"IDP Companion is a private multilingual translation companion document and is not affiliated with the Royal Thai Police, the Department of Land Transport (DLT) of Thailand, or any government agency. IDP Companion is not a government-issued International Driving Permit under the 1949 Geneva Convention or 1968 Vienna Convention; in Russia, the All-Russian Automobile Society (РОСАВТОКЛУБ) is among the authorized issuers of national IDPs. IDP Companion must be used alongside your original Russian driver's license.",
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
					'Россия выдаёт IDP по Венской конвенции 1968 года. Таиланд признаёт только Женевскую конвенцию 1949 года. Это реальная юридическая дыра. На практике — нужно получить IDP по Женевской 1949 в России до отъезда, либо при долгом пребывании оформить тайские права на месте.',
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
				'Сам по себе не действителен — должен использоваться только вместе с оригиналом российских прав',
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
			'Что берут с собой подготовленные российские туристы в Таиланд: оригинал российских прав + IDP Женевского 1949 формата, оформленный в России (Таиланд требует именно этот формат) + IDP Companion как многоязычный переводной документ для прокатных стоек и неформальных проверок + загранпаспорт. Companion решает фрикционные задачи, которые сама книжка IDP не закрывает.',
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
					'International Driving Permit выдаётся только в той стране, где выданы ваши национальные права — тайские власти не выдают IDP иностранным туристам. Россиянам нужен IDP Женевского 1949 формата, оформленный в России до отъезда. IDP Companion можно получить онлайн откуда угодно за 2 минуты как многоязычный переводной документ (английский плюс ещё 10 распространённых языков набора Женевской конвенции 1949 — французский, испанский, арабский, немецкий, итальянский и другие), но это частный переводной документ, а не замена государственного IDP на тайских постах.',
			},
			{
				id: 3,
				question: 'IDP Companion — это то же самое, что официальный российский IDP?',
				answer:
					'IDP Companion — это многоязычный переводной документ: помогает прокатным стойкам и неформальным проверкам прочитать данные ваших прав на английском плюс ещё 10 распространённых языках набора Женевской конвенции 1949 (французский, испанский, арабский, немецкий, итальянский и другие). Он не выдаётся по Женевской или Венской конвенции и юридически не заменяет государственный IDP на тайских полицейских постах. Генерируется онлайн за 2 минуты, действует 1–5 лет, перепечатывается из любой гостиницы.',
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
					'Женевская конвенция 1949 года требует именно бумажный документ, и Королевская полиция Таиланда обычно ожидает физическую книжку IDP от уполномоченного национального органа. IDP Companion — это цифровой многоязычный переводной документ, его можно распечатать на обычной бумаге из любой гостиницы. Полезнее всего на прокатных стойках, в гостиницах и при неформальных проверках, а не для первичной проверки IDP на постах ДПС.',
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
			{ flagFrom: 'ru', flagTo: 'eg', label: 'Россия → Египет', status: 'В эфире', href: '/idp-for-russian-drivers-in-egypt/' },
			{ flagFrom: 'ru', flagTo: 'gr', label: 'Россия → Греция', status: 'В эфире', href: '/idp-for-russian-drivers-in-greece/' },
			{ flagFrom: 'ru', flagTo: 'id', label: 'Россия → Индонезия', status: 'В эфире', href: '/idp-for-russian-drivers-in-indonesia/' },
			{ flagFrom: 'ru', flagTo: 'tr', label: 'Россия → Турция', status: 'В эфире', href: '/idp-for-russian-drivers-in-turkey/' },
			{ flagFrom: 'us', flagTo: 'th', label: 'США → Таиланд', status: 'В эфире', href: '/idp-for-us-drivers-in-thailand/' },
			{ flagFrom: 'gb', flagTo: 'th', label: 'Великобритания → Таиланд', status: 'В эфире', href: '/idp-for-uk-drivers-in-thailand/' },
		],
	},
	finalCta: {
		heading: 'Готовы оформить IDP Companion?',
		text:
			'Многоязычный PDF с английским, французским, испанским, арабским и ещё 7 распространёнными языками набора Женевской конвенции 1949 года — готов за 2 минуты по вашим реальным российским правам. Печатайте дома или из любой гостиницы. Действует 1–5 лет — покроет эту поездку и следующие. $35 / 1 год · $45 / 3 года · $55 / 5 лет. Разовый платёж, без подписок.',
		button: 'Начать оформление',
	},
	legal: {
		disclaimerHeading: 'Дисклеймер',
		disclaimer:
			'IDP Companion — это частный многоязычный переводной документ. Мы не аффилированы с Королевской полицией Таиланда, Department of Land Transport (DLT) Таиланда или какими-либо государственными органами. IDP Companion не является государственным International Driving Permit по Женевской конвенции 1949 года или Венской конвенции 1968 года; в России к уполномоченным эмитентам национальных IDP относится в том числе Всероссийский Автомобильный Клуб (РОСАВТОКЛУБ). IDP Companion используется только вместе с оригиналом ваших российских прав.',
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
