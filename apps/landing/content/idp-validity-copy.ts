/**
 * Content for /idp-validity/ — Tier-1 supporting page.
 * Locale-keyed: EN + RU + ES.
 *
 * Authority claims are dated and tied to specific treaty articles (per GEO rule
 * "dated, attributed factual claims"). Authorised national issuers (AAA, AATA,
 * AA, RAC, РОСАВТОКЛУБ, ADAC, etc.) appear ONLY in the legal disclaimer per
 * middle-pivot rule.
 */

export type LocaleKey = 'en' | 'ru' | 'es';

export interface QuickRow {
	name: string;
	duration: string;
	conditions: string;
	tone: 'geneva' | 'vienna' | 'companion';
}

export interface RecognitionCluster {
	label: string;
	countries: string;
	note: string;
}

export interface PlanItem {
	name: string;
	duration: string;
	price: string;
	bestFor: string;
}

export interface ExpiryStep {
	title: string;
	body: string;
}

export interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

export interface SourceItem {
	label: string;
	org: string;
}

export interface ValidityCopy {
	datePublished: string;
	dateModified: string;
	seo: {
		title: string;
		description: string;
	};
	hero: {
		kicker: string;
		h1: string;
		lead: string;
		bylineByLabel: string;
		reviewedLabel: string;
		reviewedDate: string;
	};
	quickAnswer: {
		heading: string;
		lead: string;
		rows: QuickRow[];
		colName: string;
		colDuration: string;
		colConditions: string;
	};
	geneva: {
		heading: string;
		lead: string;
		bullets: string[];
		warning: string;
	};
	vienna: {
		heading: string;
		lead: string;
		bullets: string[];
		warning: string;
	};
	recognition: {
		heading: string;
		lead: string;
		clusters: RecognitionCluster[];
	};
	companion: {
		heading: string;
		lead: string;
		isLabel: string;
		isNotLabel: string;
		is: string[];
		isNot: string[];
	};
	plans: {
		heading: string;
		lead: string;
		items: PlanItem[];
		colName: string;
		colDuration: string;
		colPrice: string;
		colBestFor: string;
	};
	expiry: {
		heading: string;
		lead: string;
		steps: ExpiryStep[];
	};
	faq: {
		heading: string;
		items: FaqItem[];
	};
	finalCta: {
		heading: string;
		lead: string;
		primary: string;
		secondary: string;
	};
	sources: {
		heading: string;
		items: SourceItem[];
	};
	legal: string;
}

/* =========================================================================
 *  ENGLISH
 * ======================================================================= */

const en: ValidityCopy = {
	datePublished: '2026-05-19',
	dateModified: '2026-05-19',
	seo: {
		title: 'IDP Validity 2026: 1-Year (Geneva) vs 3-Year (Vienna) Rules Explained',
		description: 'How long is an International Driving Permit valid? 1 year under the 1949 Geneva Convention (Article 24), 3 years under the 1968 Vienna Convention (Article 41). The issuer cannot extend either. Treaty rules, destination acceptance, IDP Companion plan durations explained.',
	},
	hero: {
		kicker: 'IDP validity rules',
		h1: 'How long an International Driving Permit is valid',
		lead: 'An IDP does not expire when you cross a border or rent a car — it expires on the date stamped at issue. The 1949 Geneva Convention (Article 24) sets that date exactly one year out. The 1968 Vienna Convention (Article 41) sets it three years out. Which treaty applies depends on where the IDP was issued, not where you are driving — and the destination country\'s acceptance of your treaty version is the part most travellers only find out at the rental counter.',
		bylineByLabel: 'By',
		reviewedLabel: 'Last reviewed:',
		reviewedDate: 'May 2026',
	},
	quickAnswer: {
		heading: 'Quick answer — the three durations that actually exist',
		lead: 'Three different documents use the words "International Driving Permit" or close variants. Each has a different validity cap. Pick yours by where the document was issued, not by the destination.',
		colName: 'Document',
		colDuration: 'Maximum validity',
		colConditions: 'Set by',
		rows: [
			{
				name: 'IDP issued under the 1949 Geneva Convention',
				duration: '1 year',
				conditions: 'Article 24, Annex 10 of the 1949 Convention. Cannot be extended by the issuer. Also expires if the home licence expires sooner.',
				tone: 'geneva',
			},
			{
				name: 'IDP issued under the 1968 Vienna Convention',
				duration: '3 years',
				conditions: 'Article 41, Annex 7 of the 1968 Convention. Cannot be extended. Also expires if the home licence expires sooner.',
				tone: 'vienna',
			},
			{
				name: 'IDP Companion (this site)',
				duration: '1, 3, or 5 years',
				conditions: 'Plan duration you purchase. Not a government IDP under either Convention — a privately produced multilingual translation companion.',
				tone: 'companion',
			},
		],
	},
	geneva: {
		heading: 'The 1949 Geneva Convention — 1-year cap',
		lead: 'Annex 10 of the 1949 Convention on Road Traffic prescribes the IDP format, and Article 24 fixes its validity at one year from the date of issue (or until the underlying home driver licence expires, whichever happens first). The cap exists in the treaty text itself — no national issuer can change it.',
		bullets: [
			'Issued in countries that signed the 1949 Convention (full list at the UN Treaty Collection — currently 102 contracting states including the United States, United Kingdom, Australia, Canada, Japan, and most Commonwealth nations).',
			'Validity: maximum one year from the issue date stamped on the permit booklet.',
			'Not valid in the country that issued it — IDPs are only for foreign use.',
			'Vehicle categories you may drive are limited to whatever your home licence already authorises. The IDP grants no new privileges.',
			'Several common destinations (notably Japan, China, Vietnam, India) only recognise the 1949 Geneva form and reject 1968 Vienna IDPs.',
		],
		warning: 'A renewed home licence does not extend an existing IDP — the 1-year cap is dated to the IDP issue, not to the underlying licence.',
	},
	vienna: {
		heading: 'The 1968 Vienna Convention — 3-year cap',
		lead: 'The 1968 Convention on Road Traffic modernised the IDP format and lengthened the validity cap. Article 41 and Annex 7 set the maximum at three years from issue, or until the home licence expires — whichever falls first.',
		bullets: [
			'Issued in countries that signed the 1968 Convention (currently 88 contracting states including Russia, Germany, France, Brazil, Italy, Switzerland, the Netherlands, Norway, Sweden, and most of the EU).',
			'Validity: maximum three years from issue. Still cannot exceed the home licence expiry.',
			'Recognised by most countries that ratified 1968 — and accepted in many that only signed 1949 as a courtesy, but not legally guaranteed there.',
			'A small number of destinations refuse 1968 Vienna IDPs even when their drivers come from 1968 signatory countries — Japan being the most prominent example.',
			'The booklet layout is different from the 1949 form and is not interchangeable — a destination that only accepts 1949 will reject 1968 outright.',
		],
		warning: 'The 3-year validity does not automatically apply just because you bought a "new" IDP from a 1968 country. A 1949-only destination will still reject it on the spot.',
	},
	recognition: {
		heading: 'Which treaty version does the destination accept?',
		lead: 'The most common surprise at rental counters is that "I have an IDP" is not a complete answer — the destination cares about which treaty form it follows.',
		clusters: [
			{
				label: '1949 Geneva only',
				countries: 'Japan, India, Singapore, Australia, New Zealand, Hong Kong — countries that ratified the 1949 Convention but never acceded to the 1968 one.',
				note: 'Travellers carrying a 1968 Vienna IDP (issued in Russia, Germany, most of the EU) routinely have it rejected here because the destination only recognises the 1949 form.',
			},
			{
				label: '1968 Vienna — recognised in some destinations as the only valid form',
				countries: 'Vietnam (acceded to 1968 in 2014, never ratified 1949) is the cleanest example. Most other 1968 signatories also accept 1949 in practice.',
				note: 'A US- or UK-issued 1949 Geneva IDP is, strictly by treaty, not recognised in Vietnam — although in practice many rental chains accept it. Safer to carry an additional form of identification.',
			},
			{
				label: 'Both forms accepted — or neither (requires national-licence conversion)',
				countries: 'Most of the EU, Russia, Switzerland, Norway, the UAE, Turkey, Brazil, Mexico accept either treaty form. Mainland China recognises neither and requires a temporary Chinese licence; the same applies to long-term residency in several US states and Gulf countries.',
				note: 'An IDP — under either treaty — is never a substitute for a local licence in any country. Long-term stays trigger national driving-licence rules everywhere.',
			},
		],
	},
	companion: {
		heading: 'What "validity" means for IDP Companion specifically',
		lead: 'IDP Companion is a multilingual translation companion document — not a government IDP under either Convention. The validity model is therefore entirely different and the words "1-year" or "3-year" on the homepage refer to the plan duration you bought, not to a treaty cap.',
		isLabel: 'Is',
		isNotLabel: 'Is not',
		is: [
			'A privately produced PDF that presents your home-country driver licence data alongside translations into eleven languages drawn from the Geneva 1949 standard set.',
			'Useful at rental desks, hotel front desks, and informal police verifications where staff want to read the licence in a familiar script — particularly the English block, which is universally readable.',
			'Re-downloadable any time during the plan period from the link in your original purchase confirmation email. If your home licence changes (renewal, name change, address update), email support from the address you used at checkout (that\'s how we locate your order) and attach the new licence photo — regeneration is free.',
		],
		isNot: [
			'Not an IDP issued under the 1949 Geneva or 1968 Vienna Convention. It carries no treaty privileges.',
			'Not a substitute for the physical home-country driver licence — IDP Companion must always be carried alongside the original.',
			'Not legally binding on any destination authority. Whether a foreign officer or rental agent accepts it depends on local practice, not treaty law.',
		],
	},
	plans: {
		heading: 'IDP Companion plan durations',
		lead: 'Pick the plan that matches how long you actually need the document. The PDF carries a 1-, 3-, or 5-year validity stamp dated from the purchase — when that period ends, a fresh purchase generates an updated PDF in the same two-minute flow.',
		colName: 'Plan',
		colDuration: 'Active duration',
		colPrice: 'One-off price',
		colBestFor: 'Best for',
		items: [
			{
				name: '1-year IDP Companion',
				duration: '12 months from purchase',
				price: '$35',
				bestFor: 'Single trip of 2–4 weeks, or a single rental period abroad.',
			},
			{
				name: '3-year IDP Companion',
				duration: '36 months from purchase',
				price: '$45',
				bestFor: 'Frequent travellers, digital nomads on multi-country routes, expats with stable home licence.',
			},
			{
				name: '5-year IDP Companion',
				duration: '60 months from purchase',
				price: '$55',
				bestFor: 'Long-haul expats and remote workers who rent or drive abroad annually.',
			},
		],
	},
	expiry: {
		heading: 'What to do when your IDP expires (treaty IDP or IDP Companion)',
		lead: 'The expiry handling is different for a treaty-form IDP and for IDP Companion. Knowing which document you carry decides which path to take.',
		steps: [
			{
				title: 'If your government IDP (1949 or 1968) has expired',
				body: 'Apply for a fresh one through the same national issuer route used originally — the previous expiry date carries no extension rights, and the new permit starts a fresh 1- or 3-year clock from its own issue date. The old booklet can be discarded.',
			},
			{
				title: 'If your IDP Companion plan ends',
				body: 'The PDF file you previously downloaded stays technically readable, but the validity date stamped on it has passed — a rental agent or officer who checks the document will see an expired stamp. To get a freshly dated PDF, make a new IDP Companion purchase; the new plan generates the updated document in the same two minutes. We do not offer in-account renewal — each plan is a standalone one-off purchase.',
			},
			{
				title: 'If your home-country driver licence expired',
				body: 'Both treaty IDPs and IDP Companion are invalid the moment the underlying physical licence expires — the IDP is a translation overlay, not an independent permit. Renew the home licence first, then renew or reissue the IDP.',
			},
			{
				title: 'If you are not sure which document you have',
				body: 'A treaty IDP is a small grey or beige booklet with the words "International Driving Permit" and a treaty year (1949 or 1968) printed on the cover. IDP Companion is a multilingual PDF you downloaded — there is no booklet. The two are not interchangeable.',
			},
		],
	},
	faq: {
		heading: 'IDP validity — frequently asked questions',
		items: [
			{
				id: 'how-long-valid',
				question: 'How long is an International Driving Permit valid?',
				answer: 'A 1949 Geneva Convention IDP is valid for one year from issue. A 1968 Vienna Convention IDP is valid for three years from issue. Either expires sooner if the home driver licence expires first. The validity cap is set by the treaty text and cannot be extended by the issuer.',
			},
			{
				id: 'can-i-extend',
				question: 'Can I extend an IDP that is about to expire?',
				answer: 'No. An IDP cannot be extended or renewed in place. When it expires, the only path is to apply for a brand-new IDP from a national issuer — the new one starts a fresh 1- or 3-year clock from its own issue date.',
			},
			{
				id: 'renew-licence-extend-idp',
				question: 'I just renewed my home licence — does that extend my existing IDP?',
				answer: 'No. The IDP\'s validity is dated to the IDP issue date, not to the underlying licence. Renewing the home licence has no effect on an existing IDP\'s expiry. You can, however, apply for a fresh IDP that will reflect the renewed home licence.',
			},
			{
				id: 'idp-without-home-licence',
				question: 'Is the IDP valid without the physical home licence in my pocket?',
				answer: 'No. An IDP is a translation companion to your home-country driver licence and is not valid on its own. Police, rental agents, and border officers may ask for both — failing to present the physical home licence makes the IDP useless.',
			},
			{
				id: 'multiple-idps',
				question: 'Can I have a 1949 and a 1968 IDP at the same time?',
				answer: 'Generally no — most issuers will only produce the treaty form that matches your home country\'s convention membership. A few countries have signed both treaties and may offer both forms; check the local national issuer\'s rules directly.',
			},
			{
				id: 'companion-vs-government',
				question: 'How is IDP Companion different from a government IDP?',
				answer: 'IDP Companion is a privately produced multilingual PDF that helps foreign officers and rental staff read your licence — it is not issued under the 1949 or 1968 Conventions and carries no treaty privileges. The "plan duration" (1, 3, or 5 years) is the validity period stamped on the document itself — the date a rental agent or officer will read off the PDF — not a legal validity period under either Convention.',
			},
			{
				id: 'idp-valid-where',
				question: 'Where will my IDP actually be accepted?',
				answer: 'Acceptance depends on which treaty version the destination signed and how rental chains and police on the ground interpret the rules. Japan, China, India and Vietnam only accept the 1949 Geneva form. Most EU countries accept either. Some destinations require an IDP for foreign drivers; others do not require but rental agents demand one anyway.',
			},
			{
				id: 'expired-idp-driving',
				question: 'What happens if I drive abroad on an expired IDP?',
				answer: 'Depending on the destination, an expired IDP can be treated as driving without a recognised licence — fines range from small infractions to vehicle impound, depending on the country and the officer. Insurance claims are typically void if the IDP was expired at the time of the incident.',
			},
		],
	},
	finalCta: {
		heading: 'Pick a plan that matches your travel window',
		lead: 'IDP Companion in two minutes — generated from your real licence, downloadable as a multilingual PDF, plan duration of your choice.',
		primary: 'Start your application',
		secondary: 'Compare plans',
	},
	sources: {
		heading: 'Sources',
		items: [
			{ label: 'Convention on Road Traffic (1949) — full treaty text including Article 24', org: 'United Nations Treaty Collection' },
			{ label: 'Convention on Road Traffic (1968) — full treaty text including Article 41', org: 'United Nations Treaty Collection' },
			{ label: 'Contracting States to the 1949 and 1968 Conventions — current ratification lists', org: 'UNECE Sustainable Transport Division' },
			{ label: 'Driving abroad with an International Driving Permit — country-by-country acceptance notes', org: 'US Department of State, UK Government, foreign travel advisories' },
		],
	},
	legal: 'IDP Companion is a privately produced multilingual translation companion document and is not affiliated with any government authority. IDP Companion is not an International Driving Permit issued under the 1949 Geneva Convention or the 1968 Vienna Convention on Road Traffic. Authorised issuers of US-origin Geneva 1949 IDPs are AAA and AATA; UK-origin AA and the Post Office (via PayPoint); Russia-origin РОСАВТОКЛУБ; Germany-origin ADAC; and the equivalent national motoring associations in other signatory countries. IDP Companion must be carried alongside an original valid home-country driver licence.',
};

/* =========================================================================
 *  RUSSIAN
 * ======================================================================= */

const ru: ValidityCopy = {
	datePublished: '2026-05-19',
	dateModified: '2026-05-19',
	seo: {
		title: 'Срок действия IDP 2026: 1 год (Женева) или 3 года (Вена) — правила',
		description: 'Сколько действует международное водительское удостоверение? 1 год по Женевской конвенции 1949 года (статья 24), 3 года по Венской конвенции 1968 года (статья 41). Эмитент не может продлить ни тот, ни другой. Правила конвенций, признание в странах назначения и сроки тарифов IDP Companion.',
	},
	hero: {
		kicker: 'Срок действия IDP',
		h1: 'Сколько действует международное водительское удостоверение',
		lead: 'IDP не «истекает», когда вы пересекаете границу или берёте машину в аренду — он истекает в дату, проставленную при выдаче. Женевская конвенция 1949 года (статья 24) фиксирует этот срок ровно в один год. Венская конвенция 1968 года (статья 41) — в три года. Какая конвенция применяется, зависит от того, где IDP был выдан, а не куда вы едете. Какой именно вариант примут в стране назначения — большинство путешественников узнают уже у стойки проката.',
		bylineByLabel: 'Автор:',
		reviewedLabel: 'Последняя проверка:',
		reviewedDate: 'Май 2026',
	},
	quickAnswer: {
		heading: 'Короткий ответ — три срока, которые реально существуют',
		lead: 'Под фразой «международное водительское удостоверение» скрываются три разных документа. У каждого свой предельный срок. Какой вариант у вас — определяется страной выдачи, а не страной поездки.',
		colName: 'Документ',
		colDuration: 'Максимальный срок',
		colConditions: 'Чем установлено',
		rows: [
			{
				name: 'IDP по Женевской конвенции 1949 года',
				duration: '1 год',
				conditions: 'Статья 24, Приложение 10 Конвенции 1949 года. Не может быть продлён эмитентом. Также истекает, если национальные права истекают раньше.',
				tone: 'geneva',
			},
			{
				name: 'IDP по Венской конвенции 1968 года',
				duration: '3 года',
				conditions: 'Статья 41, Приложение 7 Конвенции 1968 года. Не может быть продлён. Также истекает, если национальные права истекают раньше.',
				tone: 'vienna',
			},
			{
				name: 'IDP Companion (этот сайт)',
				duration: '1, 3 или 5 лет',
				conditions: 'Срок выбранного тарифа. Не является государственным IDP ни по одной из конвенций — это частный мультиязычный компаньон-документ.',
				tone: 'companion',
			},
		],
	},
	geneva: {
		heading: 'Женевская конвенция 1949 года — предел 1 год',
		lead: 'Приложение 10 Конвенции о дорожном движении 1949 года задаёт форму IDP, а статья 24 фиксирует срок действия в один год с даты выдачи (или до окончания национальных водительских прав — что наступит раньше). Этот предел зашит в текст самой конвенции — ни один национальный эмитент не может его изменить.',
		bullets: [
			'Выдаётся в странах, подписавших Конвенцию 1949 года (полный список — в Базе договоров ООН; сейчас 102 договорные страны, включая США, Великобританию, Австралию, Канаду, Японию и большинство стран Содружества).',
			'Срок: максимум один год с даты выдачи, проставленной в книжке.',
			'Не действителен в стране выдачи — IDP создан только для использования за рубежом.',
			'Категории, которыми разрешено управлять, ограничены тем, что уже разрешает национальное удостоверение. IDP не даёт новых прав.',
			'Несколько популярных направлений (Япония, Китай, Вьетнам, Индия) признают только форму 1949 года и отказывают в обслуживании по IDP 1968 года.',
		],
		warning: 'Продление национального удостоверения не продлевает уже выданный IDP — годовой предел привязан к дате выдачи IDP, а не к национальным правам.',
	},
	vienna: {
		heading: 'Венская конвенция 1968 года — предел 3 года',
		lead: 'Конвенция о дорожном движении 1968 года обновила форму IDP и увеличила предельный срок. Статья 41 и Приложение 7 устанавливают максимум в три года с даты выдачи или до окончания национального удостоверения — что наступит раньше.',
		bullets: [
			'Выдаётся в странах, подписавших Конвенцию 1968 года (сейчас 88 договорных стран, включая Россию, Германию, Францию, Бразилию, Италию, Швейцарию, Нидерланды, Норвегию, Швецию и большую часть ЕС).',
			'Срок: максимум три года с выдачи. По-прежнему не может превышать срок национальных прав.',
			'Признаётся большинством стран, ратифицировавших Конвенцию 1968 года, и из вежливости — многими, кто подписал только 1949 год (но это не юридическая гарантия).',
			'Небольшое число направлений отказывает в признании IDP 1968 года даже водителям из стран-подписантов Конвенции 1968 года. Самый известный пример — Япония.',
			'Книжка по форме 1968 года отличается от формы 1949 года и не взаимозаменяема — направление, принимающее только 1949 год, отклонит 1968 год сразу.',
		],
		warning: 'Срок три года не применяется автоматически только потому, что у вас «новый» IDP из страны-подписанта Конвенции 1968 года. Страна, признающая только 1949 год, всё равно откажет на месте.',
	},
	recognition: {
		heading: 'Какую форму IDP принимает страна назначения',
		lead: 'Самая частая неожиданность у стойки проката: фразы «у меня есть IDP» недостаточно — страну назначения интересует, по какой именно конвенции выдан документ.',
		clusters: [
			{
				label: 'Только Женева 1949',
				countries: 'Япония, Индия, Сингапур, Австралия, Новая Зеландия, Гонконг — страны, ратифицировавшие Конвенцию 1949 года, но не присоединившиеся к Конвенции 1968 года.',
				note: 'Путешественники с IDP Венской конвенции 1968 года (выданным в России, Германии, большей части ЕС) здесь регулярно получают отказ — страна назначения признаёт только форму 1949 года.',
			},
			{
				label: 'Вена 1968 — в отдельных странах признаётся единственной валидной формой',
				countries: 'Самый чистый пример — Вьетнам (присоединился к 1968 в 2014 году, Конвенцию 1949 не ратифицировал). Большинство других подписантов 1968 года также принимают форму 1949 года на практике.',
				note: 'IDP по Конвенции 1949 года, выпущенный в США или Великобритании, формально по тексту договора во Вьетнаме не признаётся — хотя в реальности многие сети проката его принимают. Безопаснее иметь при себе дополнительный документ.',
			},
			{
				label: 'Обе формы — или ни одна (нужна замена прав)',
				countries: 'Большая часть ЕС, Россия, Швейцария, Норвегия, ОАЭ, Турция, Бразилия, Мексика принимают любую из двух форм. Континентальный Китай не признаёт ни одну и требует временные китайские права; то же касается долгосрочного проживания в ряде штатов США и в некоторых странах Залива.',
				note: 'IDP — ни по одной из конвенций — никогда не заменяет местные водительские права. Длительное пребывание во всех юрисдикциях запускает национальные правила выдачи прав.',
			},
		],
	},
	companion: {
		heading: 'Что значит «срок действия» именно для IDP Companion',
		lead: 'IDP Companion — это мультиязычный компаньон-документ, а не государственный IDP по какой-либо конвенции. Модель срока действия здесь совершенно другая, и слова «1 год» или «3 года» на главной странице означают срок купленного тарифа, а не предельный срок по конвенции.',
		isLabel: 'Что это',
		isNotLabel: 'Чем не является',
		is: [
			'Частный PDF с данными ваших национальных прав и переводом на одиннадцать языков из набора Женевской конвенции 1949 года.',
			'Полезен у стоек проката, на ресепшенах отелей и при бытовых полицейских проверках, где сотрудникам важно прочитать удостоверение в знакомом им алфавите — особенно английский блок, который читают почти везде.',
			'Скачивается повторно в любой момент срока тарифа по ссылке из письма с подтверждением покупки. Если ваши национальные права изменились (продление, смена фамилии, новый адрес) — напишите в поддержку с того адреса, который использовали при покупке (по нему мы находим заказ), и приложите фото новых прав. Перегенерация бесплатная.',
		],
		isNot: [
			'Не является IDP, выданным по Женевской конвенции 1949 года или Венской конвенции 1968 года. Никаких привилегий по конвенциям не даёт.',
			'Не заменяет физическое национальное водительское удостоверение — IDP Companion всегда нужно носить вместе с оригиналом.',
			'Не является обязательным для иностранного должностного лица или агента проката. Примут или нет — зависит от местной практики, а не от текста конвенции.',
		],
	},
	plans: {
		heading: 'Тарифы IDP Companion',
		lead: 'Выберите тариф под реальный срок поездки. На PDF проставляется срок действия 1, 3 или 5 лет от даты покупки — когда период истекает, новая покупка генерирует свежий PDF за те же две минуты.',
		colName: 'Тариф',
		colDuration: 'Активный срок',
		colPrice: 'Разовая цена',
		colBestFor: 'Кому подходит',
		items: [
			{
				name: 'IDP Companion на 1 год',
				duration: '12 месяцев с даты покупки',
				price: '$35',
				bestFor: 'Одна поездка на 2–4 недели или один период аренды за рубежом.',
			},
			{
				name: 'IDP Companion на 3 года',
				duration: '36 месяцев с даты покупки',
				price: '$45',
				bestFor: 'Частые путешественники, цифровые кочевники на маршрутах через несколько стран, экспаты со стабильными национальными правами.',
			},
			{
				name: 'IDP Companion на 5 лет',
				duration: '60 месяцев с даты покупки',
				price: '$55',
				bestFor: 'Долгосрочные экспаты и удалёнщики, которые арендуют машину или водят за рубежом каждый год.',
			},
		],
	},
	expiry: {
		heading: 'Что делать, когда IDP закончился (по конвенции или IDP Companion)',
		lead: 'Действия при истечении срока у государственного IDP и у IDP Companion разные. Какой документ у вас на руках — определяет путь.',
		steps: [
			{
				title: 'Если истёк государственный IDP (1949 или 1968)',
				body: 'Нужно подать заявление на новый IDP через тот же национальный канал выдачи. Прошлая дата истечения никаких прав на продление не даёт — новый документ стартует свежим 1- или 3-летним отсчётом с собственной даты выдачи. Старую книжку можно выбросить.',
			},
			{
				title: 'Если закончился тариф IDP Companion',
				body: 'Скачанный ранее PDF технически остаётся читаемым, но проставленная на нём дата срока действия уже прошла — агент проката или офицер увидят просроченный штамп. Чтобы получить свежий PDF, оформите новую покупку IDP Companion — новый тариф сгенерирует обновлённый документ за те же две минуты. Продления внутри аккаунта у нас нет — каждый тариф это разовая покупка.',
			},
			{
				title: 'Если истекли национальные водительские права',
				body: 'И государственный IDP, и IDP Companion становятся недействительны в момент истечения национальных прав — IDP это переводческая обёртка, а не самостоятельный документ. Сначала продлите национальные права, затем — IDP.',
			},
			{
				title: 'Если непонятно, какой из документов у вас',
				body: 'Государственный IDP — небольшая серая или бежевая книжка с надписью «International Driving Permit» и годом конвенции (1949 или 1968) на обложке. IDP Companion — мультиязычный PDF, который вы скачали; никакой книжки нет. Это два разных документа, и они не взаимозаменяемы.',
			},
		],
	},
	faq: {
		heading: 'Срок действия IDP — частые вопросы',
		items: [
			{
				id: 'how-long-valid',
				question: 'Сколько действует международное водительское удостоверение?',
				answer: 'IDP по Женевской конвенции 1949 года действует один год с момента выдачи. IDP по Венской конвенции 1968 года — три года с момента выдачи. Любой из них истекает раньше, если раньше истекают национальные права. Срок зашит в текст конвенции и эмитент его не продлевает.',
			},
			{
				id: 'can-i-extend',
				question: 'Можно ли продлить IDP, у которого скоро истекает срок?',
				answer: 'Нет. IDP не продлевается и не обновляется «на месте». Когда срок истёк, единственный путь — получить полностью новый IDP у национального эмитента. Новый документ стартует свежим 1- или 3-летним отсчётом с собственной даты выдачи.',
			},
			{
				id: 'renew-licence-extend-idp',
				question: 'Я только что продлил национальные права — это продлевает мой текущий IDP?',
				answer: 'Нет. Срок IDP привязан к дате выдачи самого IDP, а не к национальным правам. Продление национального удостоверения никак не сдвигает срок уже выпущенного IDP. Можно, однако, подать заявление на свежий IDP, который отразит продлённые национальные права.',
			},
			{
				id: 'idp-without-home-licence',
				question: 'Действителен ли IDP без физического национального удостоверения на руках?',
				answer: 'Нет. IDP — это переводческий компаньон к национальным правам и сам по себе недействителен. Полиция, агенты проката и пограничники могут спросить оба документа — без физических национальных прав IDP бесполезен.',
			},
			{
				id: 'multiple-idps',
				question: 'Можно ли иметь IDP по Конвенции 1949 года и по Конвенции 1968 года одновременно?',
				answer: 'Как правило, нет — большинство эмитентов выпускают только ту форму, которая соответствует членству вашей страны в конвенциях. Несколько стран подписали оба договора и могут выдавать обе формы; правила нужно уточнять напрямую у национального эмитента.',
			},
			{
				id: 'companion-vs-government',
				question: 'Чем IDP Companion отличается от государственного IDP?',
				answer: 'IDP Companion — это частный мультиязычный PDF, который помогает иностранным сотрудникам и агентам проката прочитать ваше удостоверение. Он не выдаётся по Женевской 1949 или Венской 1968 конвенции и никаких привилегий по конвенциям не даёт. «Срок тарифа» (1, 3 или 5 лет) — это дата срока действия, проставленная на самом документе (её увидит агент проката или офицер), а не юридический срок действия по какой-либо конвенции.',
			},
			{
				id: 'idp-valid-where',
				question: 'Где именно мой IDP будет признан?',
				answer: 'Признание зависит от того, к какой конвенции присоединилась страна назначения, и от того, как сети проката и полиция на местах трактуют правила. Япония, Китай, Индия и Вьетнам признают только форму Женевы 1949. Большая часть ЕС принимает любую. В одних странах IDP обязателен для иностранных водителей, в других необязателен по закону, но агенты проката всё равно требуют.',
			},
			{
				id: 'expired-idp-driving',
				question: 'Что будет, если ехать за рубежом с просроченным IDP?',
				answer: 'В зависимости от страны просроченный IDP может трактоваться как вождение без действующих прав — штрафы от мелкого нарушения до изъятия машины, в зависимости от юрисдикции и конкретного инспектора. Страховые выплаты, как правило, не действуют, если в момент инцидента IDP был просрочен.',
			},
		],
	},
	finalCta: {
		heading: 'Выберите тариф под окно своей поездки',
		lead: 'IDP Companion за две минуты — генерируется по вашим реальным правам, скачивается мультиязычным PDF, срок тарифа на выбор.',
		primary: 'Получить IDP Companion',
		secondary: 'Сравнить тарифы',
	},
	sources: {
		heading: 'Источники',
		items: [
			{ label: 'Convention on Road Traffic (1949) — полный текст договора, включая статью 24', org: 'United Nations Treaty Collection' },
			{ label: 'Convention on Road Traffic (1968) — полный текст договора, включая статью 41', org: 'United Nations Treaty Collection' },
			{ label: 'Договорные страны конвенций 1949 и 1968 годов — актуальные списки ратификаций', org: 'UNECE Sustainable Transport Division' },
			{ label: 'Вождение за рубежом с IDP — заметки о признании по странам', org: 'Госдеп США, Правительство Великобритании, рекомендации МИДов разных стран' },
		],
	},
	legal: 'IDP Companion — это частный мультиязычный компаньон-документ, не связанный ни с одним государственным ведомством. IDP Companion не является международным водительским удостоверением, выданным по Женевской конвенции 1949 года или Венской конвенции 1968 года. Уполномоченные эмитенты IDP по Женеве 1949 — AAA и AATA (США); AA и почтовая сеть PayPoint (Великобритания); РОСАВТОКЛУБ (Россия); ADAC (Германия); и аналогичные национальные автомобильные ассоциации в других странах-подписантах. IDP Companion следует носить вместе с действующим оригиналом национального водительского удостоверения.',
};

/* =========================================================================
 *  SPANISH
 * ======================================================================= */

const es: ValidityCopy = {
	datePublished: '2026-05-19',
	dateModified: '2026-05-19',
	seo: {
		title: 'Validez del IDP en 2026: 1 año (Ginebra) o 3 años (Viena) explicado',
		description: '¿Cuánto dura un Permiso de Conducción Internacional? 1 año según la Convención de Ginebra de 1949 (artículo 24), 3 años según la Convención de Viena de 1968 (artículo 41). El emisor no puede ampliar ninguno. Reglas de los tratados, aceptación por país de destino y duración de los planes de IDP Companion.',
	},
	hero: {
		kicker: 'Validez del IDP',
		h1: 'Cuánto dura un Permiso de Conducción Internacional',
		lead: 'Un IDP no caduca cuando cruzas una frontera ni cuando alquilas un coche — caduca en la fecha estampada al emitirse. La Convención de Ginebra de 1949 (artículo 24) fija esa fecha exactamente un año después. La Convención de Viena de 1968 (artículo 41) la fija tres años después. Qué tratado aplica depende de dónde se emitió el IDP, no de adónde conduces — y si el país de destino acepta tu versión del tratado es la parte que la mayoría de viajeros descubre solo en el mostrador del alquiler.',
		bylineByLabel: 'Por',
		reviewedLabel: 'Última revisión:',
		reviewedDate: 'Mayo 2026',
	},
	quickAnswer: {
		heading: 'Respuesta corta — las tres duraciones que existen de verdad',
		lead: 'Tres documentos distintos usan la frase «Permiso de Conducción Internacional» o variantes cercanas. Cada uno tiene un tope de validez diferente. Cuál te toca lo decide dónde se emitió el documento, no el destino.',
		colName: 'Documento',
		colDuration: 'Validez máxima',
		colConditions: 'Establecido por',
		rows: [
			{
				name: 'IDP emitido bajo la Convención de Ginebra de 1949',
				duration: '1 año',
				conditions: 'Artículo 24, Anexo 10 de la Convención de 1949. El emisor no puede ampliarlo. También caduca si el carnet nacional caduca antes.',
				tone: 'geneva',
			},
			{
				name: 'IDP emitido bajo la Convención de Viena de 1968',
				duration: '3 años',
				conditions: 'Artículo 41, Anexo 7 de la Convención de 1968. No se puede ampliar. También caduca si el carnet nacional caduca antes.',
				tone: 'vienna',
			},
			{
				name: 'IDP Companion (este sitio)',
				duration: '1, 3 o 5 años',
				conditions: 'Duración del plan que compres. No es un IDP gubernamental bajo ninguna Convención — es un documento compañero de traducción multilingüe privado.',
				tone: 'companion',
			},
		],
	},
	geneva: {
		heading: 'Convención de Ginebra de 1949 — tope de 1 año',
		lead: 'El Anexo 10 de la Convención sobre Circulación por Carretera de 1949 define el formato del IDP, y el artículo 24 fija su validez en un año desde la fecha de emisión (o hasta que caduque el carnet nacional subyacente, lo que ocurra primero). El tope está en el propio texto del tratado — ningún emisor nacional puede cambiarlo.',
		bullets: [
			'Se emite en los países que firmaron la Convención de 1949 (lista completa en la Colección de Tratados de la ONU; actualmente 102 estados contratantes, incluidos Estados Unidos, Reino Unido, Australia, Canadá, Japón y la mayoría de la Commonwealth).',
			'Validez: máximo un año desde la fecha de emisión estampada en la cartilla.',
			'No es válido en el país que lo emitió — el IDP es solo para uso en el extranjero.',
			'Las categorías que puedes conducir se limitan a las que ya autoriza tu carnet nacional. El IDP no otorga nuevos privilegios.',
			'Varios destinos populares (Japón, China, Vietnam, India) solo reconocen la forma de 1949 y rechazan los IDP de Viena 1968.',
		],
		warning: 'Renovar el carnet nacional no amplía un IDP ya emitido — el tope de un año está datado a la emisión del IDP, no al carnet subyacente.',
	},
	vienna: {
		heading: 'Convención de Viena de 1968 — tope de 3 años',
		lead: 'La Convención sobre Circulación por Carretera de 1968 modernizó el formato del IDP y amplió el tope de validez. El artículo 41 y el Anexo 7 fijan el máximo en tres años desde la emisión, o hasta que caduque el carnet nacional — lo que llegue antes.',
		bullets: [
			'Se emite en los países que firmaron la Convención de 1968 (actualmente 88 estados contratantes, incluidos Rusia, Alemania, Francia, Brasil, Italia, Suiza, Países Bajos, Noruega, Suecia y la mayor parte de la UE).',
			'Validez: máximo tres años desde la emisión. Sigue sin poder superar la caducidad del carnet nacional.',
			'Reconocido por la mayoría de los países que ratificaron la Convención de 1968 — y aceptado por cortesía en muchos que solo firmaron la de 1949, pero sin garantía legal allí.',
			'Un pequeño número de destinos rechazan los IDP de Viena 1968 aun cuando sus conductores vengan de países firmantes de la Convención de 1968. Japón es el ejemplo más visible.',
			'El diseño de la cartilla de 1968 es distinto al de la forma de 1949 y no son intercambiables — un destino que solo acepta la forma de 1949 rechazará la de 1968 de inmediato.',
		],
		warning: 'La validez de tres años no se aplica automáticamente solo porque hayas comprado un IDP «nuevo» en un país firmante de la Convención de 1968. Un destino que solo acepta 1949 te lo rechazará igualmente en el sitio.',
	},
	recognition: {
		heading: 'Qué versión del tratado acepta el país de destino',
		lead: 'La sorpresa más común en los mostradores de alquiler es que «tengo un IDP» no es una respuesta completa — al destino le importa qué forma del tratado tiene tu documento.',
		clusters: [
			{
				label: 'Solo Ginebra 1949',
				countries: 'Japón, India, Singapur, Australia, Nueva Zelanda, Hong Kong — países que ratificaron la Convención de 1949 pero nunca se adhirieron a la de 1968.',
				note: 'A los viajeros con un IDP de Viena 1968 (emitido en Rusia, Alemania, la mayor parte de la UE) se lo rechazan aquí con frecuencia porque el destino solo reconoce la forma de 1949.',
			},
			{
				label: 'Viena 1968 — reconocido en algunos destinos como única forma válida',
				countries: 'El ejemplo más claro es Vietnam (adhesión a 1968 en 2014, no ratificó 1949). La mayoría del resto de signatarios de 1968 también aceptan la forma de 1949 en la práctica.',
				note: 'Un IDP de Ginebra 1949 emitido en EE. UU. o Reino Unido no está reconocido en Vietnam por el texto del tratado — aunque en la práctica muchas cadenas de alquiler lo aceptan. Más seguro llevar un documento de identificación adicional.',
			},
			{
				label: 'Las dos formas — o ninguna (requiere conversión del carnet)',
				countries: 'La mayor parte de la UE, Rusia, Suiza, Noruega, EAU, Turquía, Brasil, México aceptan cualquiera de las dos formas. China continental no reconoce ninguna y exige un carnet chino temporal; lo mismo aplica a la residencia de larga duración en varios estados de EE. UU. y en algunos países del Golfo.',
				note: 'El IDP — bajo cualquiera de los dos tratados — nunca sustituye a un carnet local en ningún país. Las estancias largas activan reglas nacionales en todas las jurisdicciones.',
			},
		],
	},
	companion: {
		heading: 'Qué significa «validez» específicamente para IDP Companion',
		lead: 'IDP Companion es un documento compañero de traducción multilingüe — no un IDP gubernamental bajo ninguna de las dos Convenciones. Su modelo de validez es completamente distinto y las palabras «1 año» o «3 años» en la página principal se refieren a la duración del plan que compraste, no a un tope de tratado.',
		isLabel: 'Qué es',
		isNotLabel: 'Qué no es',
		is: [
			'Un PDF privado que presenta los datos de tu carnet nacional junto a traducciones en once idiomas extraídos del conjunto de la Convención de Ginebra de 1949.',
			'Útil en mostradores de alquiler, recepciones de hotel y verificaciones policiales informales donde el personal quiere leer el carnet en un alfabeto familiar — sobre todo el bloque en inglés, que se lee universalmente.',
			'Re-descargable en cualquier momento del plazo del plan desde el enlace del correo de confirmación de compra. Si tu carnet nacional cambia (renovación, cambio de nombre, nueva dirección), escribe a soporte desde la dirección que usaste al pagar (así localizamos tu pedido) y adjunta la foto del carnet nuevo — la regeneración es gratuita.',
		],
		isNot: [
			'No es un IDP emitido bajo la Convención de Ginebra de 1949 ni la de Viena de 1968. No otorga privilegios de tratado.',
			'No sustituye al carnet nacional físico — IDP Companion siempre debe llevarse junto al original.',
			'No es jurídicamente vinculante para ninguna autoridad de destino. Que un agente extranjero o de alquiler lo acepte depende de la práctica local, no del derecho convencional.',
		],
	},
	plans: {
		heading: 'Duraciones de plan de IDP Companion',
		lead: 'Elige el plan que se ajuste al tiempo real durante el cual necesitas el documento. El PDF lleva estampada una validez de 1, 3 o 5 años desde la fecha de compra — cuando ese período termina, una nueva compra genera un PDF con fecha fresca en el mismo flujo de dos minutos.',
		colName: 'Plan',
		colDuration: 'Duración activa',
		colPrice: 'Precio único',
		colBestFor: 'Ideal para',
		items: [
			{
				name: 'IDP Companion 1 año',
				duration: '12 meses desde la compra',
				price: '$35',
				bestFor: 'Un único viaje de 2–4 semanas o un único período de alquiler en el extranjero.',
			},
			{
				name: 'IDP Companion 3 años',
				duration: '36 meses desde la compra',
				price: '$45',
				bestFor: 'Viajeros frecuentes, nómadas digitales en rutas multipaís, expatriados con carnet nacional estable.',
			},
			{
				name: 'IDP Companion 5 años',
				duration: '60 meses desde la compra',
				price: '$55',
				bestFor: 'Expatriados de larga duración y trabajadores remotos que alquilan o conducen en el extranjero cada año.',
			},
		],
	},
	expiry: {
		heading: 'Qué hacer cuando tu IDP caduca (IDP de tratado o IDP Companion)',
		lead: 'El manejo de la caducidad es distinto para un IDP de tratado y para IDP Companion. Saber cuál llevas decide qué camino tomar.',
		steps: [
			{
				title: 'Si tu IDP gubernamental (1949 o 1968) caducó',
				body: 'Solicita uno nuevo por el mismo canal nacional del emisor original — la fecha de caducidad anterior no da derecho a prórroga, y el nuevo permiso arranca un reloj fresco de 1 o 3 años desde su propia fecha de emisión. La cartilla vieja se puede tirar.',
			},
			{
				title: 'Si terminó tu plan de IDP Companion',
				body: 'El PDF que descargaste antes sigue siendo técnicamente legible, pero la fecha de validez impresa en él ya pasó — un agente de alquiler o un agente que lo revise verá un sello caducado. Para obtener un PDF con fecha fresca, realiza una nueva compra de IDP Companion; el nuevo plan genera el documento actualizado en los mismos dos minutos. No ofrecemos renovación dentro de la cuenta — cada plan es una compra única e independiente.',
			},
			{
				title: 'Si caducó tu carnet de conducir nacional',
				body: 'Tanto los IDP de tratado como IDP Companion dejan de ser válidos en el momento en que caduca el carnet físico subyacente — el IDP es una capa de traducción, no un permiso independiente. Renueva primero el carnet nacional, después renueva o reemite el IDP.',
			},
			{
				title: 'Si no estás seguro de qué documento tienes',
				body: 'Un IDP de tratado es una cartilla pequeña gris o beige con las palabras «International Driving Permit» y un año de tratado (1949 o 1968) impresos en la portada. IDP Companion es un PDF multilingüe que descargaste — no hay cartilla. No son intercambiables.',
			},
		],
	},
	faq: {
		heading: 'Validez del IDP — preguntas frecuentes',
		items: [
			{
				id: 'how-long-valid',
				question: '¿Cuánto dura un Permiso de Conducción Internacional?',
				answer: 'Un IDP emitido bajo la Convención de Ginebra de 1949 dura un año desde la emisión. Un IDP emitido bajo la Convención de Viena de 1968 dura tres años desde la emisión. Cualquiera caduca antes si el carnet nacional caduca antes. El tope de validez está fijado por el texto del tratado y el emisor no puede ampliarlo.',
			},
			{
				id: 'can-i-extend',
				question: '¿Puedo ampliar un IDP a punto de caducar?',
				answer: 'No. Un IDP no se amplía ni se renueva en el sitio. Cuando caduca, la única vía es solicitar un IDP completamente nuevo a un emisor nacional — el nuevo arranca un reloj fresco de 1 o 3 años desde su propia fecha de emisión.',
			},
			{
				id: 'renew-licence-extend-idp',
				question: 'Acabo de renovar mi carnet nacional — ¿eso amplía mi IDP actual?',
				answer: 'No. La validez del IDP está datada a la fecha de emisión del IDP, no al carnet subyacente. Renovar el carnet nacional no tiene efecto sobre la caducidad de un IDP existente. Puedes, eso sí, solicitar un IDP fresco que refleje el carnet renovado.',
			},
			{
				id: 'idp-without-home-licence',
				question: '¿El IDP es válido sin el carnet nacional físico en el bolsillo?',
				answer: 'No. El IDP es un compañero de traducción del carnet nacional y por sí solo no es válido. La policía, los agentes de alquiler y los funcionarios fronterizos pueden pedir los dos — no presentar el carnet nacional físico deja al IDP inútil.',
			},
			{
				id: 'multiple-idps',
				question: '¿Puedo tener un IDP de 1949 y otro de 1968 al mismo tiempo?',
				answer: 'Por lo general no — la mayoría de emisores solo producen la forma del tratado que corresponde a la pertenencia de tu país. Algunos países han firmado ambos tratados y pueden ofrecer ambas formas; conviene consultar directamente las reglas del emisor nacional.',
			},
			{
				id: 'companion-vs-government',
				question: '¿En qué se diferencia IDP Companion de un IDP gubernamental?',
				answer: 'IDP Companion es un PDF multilingüe privado que ayuda a agentes extranjeros y personal de alquiler a leer tu carnet — no se emite bajo la Convención de 1949 ni la de 1968 y no otorga privilegios de tratado. La «duración del plan» (1, 3 o 5 años) es la fecha de validez estampada en el propio documento — la que verá un agente de alquiler o un funcionario — no un período legal de validez bajo ningún tratado.',
			},
			{
				id: 'idp-valid-where',
				question: '¿Dónde será aceptado realmente mi IDP?',
				answer: 'La aceptación depende de qué versión del tratado firmó el destino y de cómo interpretan las reglas las cadenas de alquiler y la policía locales. Japón, China, India y Vietnam solo aceptan la forma de Ginebra 1949. La mayoría de la UE acepta cualquiera. Algunos destinos exigen IDP a los conductores extranjeros; otros no lo exigen por ley pero los agentes de alquiler lo piden igual.',
			},
			{
				id: 'expired-idp-driving',
				question: '¿Qué pasa si conduzco en el extranjero con un IDP caducado?',
				answer: 'Según el destino, un IDP caducado puede tratarse como conducir sin un carnet reconocido — las multas van desde infracciones menores hasta retención del vehículo, según el país y el agente. Las reclamaciones de seguros suelen quedar anuladas si el IDP estaba caducado en el momento del incidente.',
			},
		],
	},
	finalCta: {
		heading: 'Elige un plan que se ajuste a tu ventana de viaje',
		lead: 'IDP Companion en dos minutos — generado a partir de tu carnet real, descargable como PDF multilingüe, con la duración de plan que elijas.',
		primary: 'Iniciar solicitud',
		secondary: 'Comparar planes',
	},
	sources: {
		heading: 'Fuentes',
		items: [
			{ label: 'Convención sobre la Circulación por Carretera (1949) — texto completo del tratado, artículo 24 incluido', org: 'United Nations Treaty Collection' },
			{ label: 'Convención sobre la Circulación por Carretera (1968) — texto completo del tratado, artículo 41 incluido', org: 'United Nations Treaty Collection' },
			{ label: 'Estados contratantes de las Convenciones de 1949 y 1968 — listas vigentes de ratificación', org: 'UNECE Sustainable Transport Division' },
			{ label: 'Conducir en el extranjero con un IDP — notas de aceptación país por país', org: 'Departamento de Estado de EE. UU., Gobierno del Reino Unido, recomendaciones de viaje de Asuntos Exteriores' },
		],
	},
	legal: 'IDP Companion es un documento compañero de traducción multilingüe privado y no está afiliado a ninguna autoridad gubernamental. IDP Companion no es un Permiso de Conducción Internacional emitido bajo la Convención de Ginebra de 1949 ni la Convención de Viena de 1968 sobre Circulación por Carretera. Los emisores autorizados de IDP de Ginebra 1949 son AAA y AATA (EE. UU.); AA y la red postal PayPoint (Reino Unido); РОСАВТОКЛУБ (Rusia); ADAC (Alemania); y las asociaciones automovilísticas nacionales equivalentes en otros países firmantes. IDP Companion debe llevarse junto a un carnet de conducir nacional original en vigor.',
};

export const idpValidityCopy: Record<LocaleKey, ValidityCopy> = { en, ru, es };
