import type { LegalDoc } from './types';

const doc: LegalDoc = {
	updated: 'February 2025',
	sections: [
		{
			id: 'intro',
			heading: 'Introduction',
			paragraphs: [
				`This website ("Website") is operated by SKYFOM (Pty) Ltd (registration number 2024/855156/07), a company registered in South Africa, operating the IDP Companion service. Throughout this document, "we", "us", and "our" refer to SKYFOM (Pty) Ltd. We offer this Website, including all information, tools and services available on it, to you, the user ("You", "you", "Customer"), conditioned on your acceptance of all terms, conditions, policies and notices stated here.`,
				`By visiting or using our Website or Services, you are using our "Service" and agree to be bound by the following terms and conditions ("Terms and Conditions", "Terms"), including any additional terms and policies referenced herein or available by hyperlink.`,
				`All communications, such as order confirmations and receipts, between us and the Customer will be conducted electronically.`,
				`These Terms apply to all users of the Website. Please read these Terms carefully before accessing or using our Website. If you do not agree to all terms and conditions, you may not access the Website or use any Services.`,
			],
		},
		{
			id: 'eligibility',
			heading: '1. Eligibility',
			listIntro: 'By using our Services, you confirm that:',
			bullets: [
				'You are at least 18 years old.',
				`You hold a valid government-issued driver's license that is not expired, suspended, revoked or cancelled, and remains valid for at least one (1) month from the date of application.`,
				`You acknowledge that the IDP Companion document we provide is a translation of your national driver's license and is not a standalone document. It must always be used together with your valid government-issued license.`,
				'You are fully responsible for complying with local, regional or international traffic laws.',
				`You agree not to drive using only our document and understand that it serves solely as a translation companion to your existing driver's license.`,
			],
		},
		{
			id: 'nature',
			heading: "2. Nature of the IDP Companion Document",
			listIntro: 'The IDP Companion document is:',
			bullets: [
				`A digital PDF translation document of your driver's license information.`,
				`Not a government-issued International Driving Permit (IDP). It is a privately provided translation companion designed to help car rental agencies and others understand your license when traveling abroad.`,
				`Intended for use together with your original driver's license at all times.`,
				'Delivered digitally; there is no physical delivery.',
			],
		},
		{
			id: 'responsibility',
			heading: '3. Your Responsibility for Use',
			listIntro: 'You understand and agree that you are fully responsible for:',
			bullets: [
				'Determining whether a translation document or official IDP is legally required in your destination country.',
				`Verifying whether our IDP Companion document will be accepted by a specific authority or organization (e.g. car rental agencies, law enforcement, border control) in the country where you intend to use it.`,
			],
			closingWithLink: {
				before:
					'We do not guarantee that our document will be accepted in any particular country or situation. Failure to verify acceptance in advance is not grounds for a refund, except as expressly stated in our ',
				path: '/refund-policy',
				linkLabelKey: 'legal.linkRefundPolicy',
				after: '.',
			},
		},
		{
			id: 'dataPrivacy',
			heading: '4. Data Storage and Privacy',
			listIntro:
				'By purchasing our Service, you agree to the collection and secure storage of your personal data, including your name, address, driver\'s license information and supporting documents. This information is stored:',
			bullets: [
				'Solely for the purpose of verifying and confirming the authenticity of your application and generated document.',
				'To comply with lawful requests or law enforcement when required.',
				'In accordance with applicable data protection and privacy laws.',
			],
			closingWithLink: {
				before:
					'We do not sell or transfer your data to third parties for marketing or other commercial purposes unrelated to our Services. For more details, see our ',
				path: '/privacy-policy',
				linkLabelKey: 'legal.linkPrivacyPolicy',
				after: '.',
			},
		},
		{
			id: 'acceptableUse',
			heading: '5. Acceptable Use',
			listIntro: 'You agree to use our Website and Services only for lawful purposes. Prohibited behaviour includes:',
			bullets: [
				'Violating the rights of others.',
				'Engaging in fraudulent, abusive or harmful activity.',
				'Using any part of the Website or Service for commercial gain without our prior written consent.',
			],
		},
		{
			id: 'services',
			heading: '6. Services, Pricing and Payment',
			bullets: [
				'All Services are provided exclusively online.',
				'We reserve the right to modify or discontinue any service without prior notice.',
				'Prices are displayed in the currency shown on the Website and may not include VAT, import duties or other taxes, depending on your location.',
				'Payment is processed through our authorized payment provider (Lemon Squeezy). You must provide accurate and complete payment information.',
				{
					kind: 'link',
					before: 'We offer refunds under specific conditions as described in our ',
					path: '/refund-policy',
					linkLabelKey: 'legal.linkRefundPolicy',
					after:
						'. We are not responsible if our document is not accepted due to your failure to verify its suitability or acceptance in a particular jurisdiction.',
				},
			],
		},
		{
			id: 'delivery',
			heading: '6A. Digital Delivery',
			paragraphs: [
				'Product is delivered as a digital PDF file via our payment processor immediately after purchase.',
				'No physical goods. No manual services. Fully automated digital delivery.',
			],
		},
		{
			id: 'ip',
			heading: '7. Intellectual Property',
			paragraphs: [
				`All content on our Website is protected by applicable copyright laws. You may download one copy of your generated document for personal, non-commercial use only. Distribution, modification or commercial use of our content is strictly prohibited without our prior written consent.`,
			],
		},
		{
			id: 'thirdParty',
			heading: '8. Third-Party Services and Links',
			paragraphs: [
				`We may use third-party services (such as payment processors) or provide links to external websites. You use them at your own risk. We are not responsible for their content, accuracy or privacy practices.`,
			],
		},
		{
			id: 'feedback',
			heading: '9. Feedback and Suggestions',
			paragraphs: [
				`If you send us ideas, comments or suggestions, you agree that we may use them freely without obligation. You are solely responsible for any content you submit and must not violate any laws or the rights of others.`,
			],
		},
		{
			id: 'disclaimers',
			heading: '10. Disclaimers and Limitation of Liability',
			paragraphs: [
				`Our Services are provided "as is" and "as available". We do not guarantee uninterrupted or error-free access. We disclaim all implied warranties and are not liable for any damages, including loss of data, revenue or opportunities, except as required by law.`,
			],
		},
		{
			id: 'indemnification',
			heading: '11. Indemnification',
			paragraphs: [
				`You agree to indemnify and hold harmless SKYFOM (Pty) Ltd (operating as IDP Companion) and its affiliates and representatives from any claims arising from your breach of these Terms or misuse of our Services.`,
			],
		},
		{
			id: 'governing',
			heading: '12. Governing Law',
			paragraphs: [
				`These Terms are governed by the laws of the Republic of South Africa. Any disputes shall be resolved exclusively in the courts of South Africa.`,
			],
		},
		{
			id: 'changes',
			heading: '13. Changes to Terms',
			paragraphs: [
				`We may update these Terms at any time by posting changes on this page. Your continued use of the Website and Service constitutes acceptance of the updated Terms.`,
			],
		},
		{
			id: 'contact',
			heading: '14. Contact',
			addressLines: [
				'SKYFOM (Pty) Ltd',
				'301 Long Street, Cape Town, South Africa',
				'Registration number: 2024/855156/07',
				'Tax number: 9293459260',
			],
			contactWithEmail: {
				beforeKey: 'legal.termsContactBefore',
				afterKey: 'legal.termsContactAfter',
			},
		},
	],
};

export default doc;
