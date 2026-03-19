import type { LegalDoc } from './types';

const doc: LegalDoc = {
	updated: 'February 2025',
	sections: [
		{
			id: 'notice',
			notice: {
				labelKey: 'legal.privacyNoticeLabel',
				body:
					'IDP Companion is not affiliated with any government or the American Automobile Association (AAA). You are purchasing a translation document that accompanies your driver\'s license; it is not a replacement for your license and is not a government-issued International Driving Permit.',
			},
		},
		{
			id: 'intro',
			heading: '1. Introduction',
			paragraphs: [
				`This Privacy Policy applies to the IDP Companion website and service, operated by SKYFOM (Pty) Ltd (registration number 2024/855156/07), a company registered in South Africa. Protecting your personal information is our priority. This policy explains how we collect, use, store and protect your data.`,
				`Please read this policy carefully. By using our Website or Service, you agree to the practices described here. Our policy is designed to comply with applicable data protection laws, including South Africa's Protection of Personal Information Act (POPIA) and, where relevant, the EU General Data Protection Regulation (GDPR) for users in the European Economic Area.`,
				`If you have concerns about whether this policy meets the requirements of your jurisdiction, please contact us.`,
			],
		},
		{
			id: 'eligibility',
			heading: '2. Eligibility',
			paragraphs: [
				`By using this Website and agreeing to this Privacy Policy, you confirm that you are at least the legal age in your jurisdiction and have the right to use our services.`,
			],
		},
		{
			id: 'collect',
			heading: '3. Information We Collect',
			listIntro: 'We collect personal information that you provide when applying for an IDP Companion document:',
			bullets: [
				'Name (first and last)',
				'Email address',
				'Phone number',
				'Date of birth',
				'Sex',
				'Country of license issuance',
				'License categories',
				"Driver's license number",
				"Photo of your driver's license",
				'Headshot photograph',
				'Signature',
			],
			trailingParagraphs: [
				`Payment information: Payment is processed by our payment provider (Paddle). We do not store your credit card, debit card or bank account details. Paddle's own privacy policy applies to payment data.`,
				`We may also collect information automatically when you use our Website, such as your IP address, device type, browser, pages visited and time spent on the site. We use cookies and similar technologies for this purpose (see section 8).`,
			],
		},
		{
			id: 'use',
			heading: '4. How We Use Your Information',
			listIntro: 'We use your personal information to:',
			bullets: [
				"Verify your identity and driver's license",
				'Generate your IDP Companion document',
				'Process your order and communicate with you about it',
				'Comply with legal obligations and respond to lawful requests',
				'Improve our service and website',
			],
			trailingParagraphs: [
				`We do not sell your personal information. We do not use your data for marketing purposes unrelated to your order unless you have given separate consent.`,
			],
		},
		{
			id: 'sharing',
			heading: '5. Sharing and Disclosure',
			listIntro: 'We may share your information with:',
			bullets: [
				`Payment processor (Paddle) — to process your payment. Paddle has its own privacy policy.`,
				`Service providers — who assist us (e.g. hosting). They are bound to protect your data.`,
				`Legal authorities — when required by law, court order or to protect our rights and safety.`,
			],
			trailingParagraphs: [
				`In the event of a business sale, merger or restructuring, your information may be transferred to the new owner. We will notify you of any such change where required by law.`,
			],
		},
		{
			id: 'retention',
			heading: '6. Data Retention',
			paragraphs: [
				`We retain your personal information only for as long as necessary to provide our services, comply with legal obligations (including tax and accounting requirements), and resolve disputes. You may request deletion of your data by contacting us. We will process such requests in accordance with applicable law. Anonymised usage data may be retained for improving our product.`,
			],
		},
		{
			id: 'rights',
			heading: '7. Your Rights',
			listIntro: 'Depending on your location, you may have the right to:',
			bullets: [
				`Access — request a copy of the personal data we hold about you`,
				`Correction — request correction of inaccurate or outdated information`,
				`Deletion — request deletion of your personal data`,
				`Object or restrict — object to or restrict certain processing (where applicable)`,
			],
			trailingParagraphs: [
				`EEA and UK users: If you are in the European Economic Area or United Kingdom, you have additional rights under GDPR, including the right to data portability and to lodge a complaint with a supervisory authority.`,
			],
			contactWithEmail: {
				beforeKey: 'legal.privacyRightsBefore',
				afterKey: 'legal.privacyRightsAfter',
			},
		},
		{
			id: 'cookies',
			heading: '8. Cookies and Similar Technologies',
			paragraphs: [
				`Like many websites, we use cookies and server logs to collect information about how our site is used. This may include the date and time of visits, pages viewed, time spent on the site, and your IP address.`,
				`Cookies are small files stored on your device. You can refuse cookies by adjusting your browser settings; however, some features of the website may not work properly without them.`,
				`We use cookies to enable core site functionality, understand usage patterns and improve our service. We do not use cookies for behavioural or targeted advertising.`,
			],
		},
		{
			id: 'security',
			heading: '9. Security',
			paragraphs: [
				`We take the protection of your personal information seriously. We use industry-standard measures including SSL (Secure Sockets Layer) encryption for data transmitted between you and our servers. You can verify this by checking for the lock icon or "https" in your browser's address bar.`,
				`We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss or misuse. However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.`,
				`If we become aware of a security breach affecting your personal information, we will endeavour to notify you and the relevant authorities as required by law.`,
			],
		},
		{
			id: 'international',
			heading: '10. International Transfers',
			paragraphs: [
				`Our servers and operations may be located in jurisdictions outside South Africa. By using our Service, you consent to the transfer and processing of your information in such locations. We ensure appropriate safeguards are in place where required by applicable law.`,
			],
		},
		{
			id: 'changes',
			heading: '11. Changes to This Policy',
			paragraphs: [
				`We may update this Privacy Policy from time to time. The "Last updated" date at the top indicates when the policy was last revised. We encourage you to review this page periodically. Your continued use of the Website and Service after changes are posted constitutes acceptance of the updated policy.`,
			],
		},
		{
			id: 'contact',
			heading: '12. Contact',
			addressLines: [
				'SKYFOM (Pty) Ltd',
				'301 Long Street, Cape Town, South Africa',
				'Registration number: 2024/855156/07',
			],
			contactWithEmail: {
				beforeKey: 'legal.privacyContactBefore',
				afterKey: 'legal.privacyContactAfter',
			},
		},
	],
};

export default doc;
