import type { LegalDoc } from './types';

const doc: LegalDoc = {
	updated: 'February 2025',
	sections: [
		{
			id: 'overview',
			heading: 'Overview',
			paragraphs: [
				`IDP Companion provides a digital driver license translation document in PDF format. This is not a government-issued International Driving Permit (IDP). Our document is designed as a translation companion to help car rental agencies and others understand your license when traveling abroad.`,
				`We stand behind our product. If we fail to deliver or if the document is not accepted by a car rental company in the circumstances described below, we will refund you. All refund requests must be submitted with supporting documentation where required.`,
			],
		},
		{
			id: 'rental',
			heading: '1. Car Rental Refusal — Full Refund',
			paragraphs: [
				`If a car rental company refuses to accept your IDP Companion document when you present it together with your original driver license, we will issue a full refund.`,
			],
			listIntro: 'Requirements:',
			bullets: [
				'Written proof of refusal from the rental company (e.g. email, letter, or signed statement on company letterhead)',
				'The refusal must have occurred within the validity period of your purchased plan',
				'You must have presented both the IDP Companion document and your original driver license',
			],
			trailingParagraphs: [
				`Contact us at {{EMAIL}} with your order details and supporting documents. Refunds are processed within 5–10 business days.`,
			],
		},
		{
			id: 'download',
			heading: '2. Document Not Available for Download — Full Refund',
			paragraphs: [
				`Your document is available for download on our website immediately after payment. There is no physical delivery or email delivery at this stage — you download the PDF directly from the site.`,
				`If your PDF document is not available for download within 2 hours of completing payment (due to our error), you are entitled to a full refund. This applies when your application included complete and approved documents and information.`,
				`Contact us at {{EMAIL}} with your order details. We will investigate and refund you in full if the delay was on our side.`,
			],
		},
		{
			id: 'changeOfMind',
			heading: '3. Change of Mind — 12-Hour Window',
			paragraphs: [
				`If you change your mind within twelve (12) hours of completing your purchase, you may request a full refund.`,
				`You must contact us at {{EMAIL}} within this window. Include in your email:`,
			],
			bullets: [
				'Your order ID or the email used at purchase',
				'A brief explanation of why you are requesting a refund',
			],
			trailingParagraphs: [
				`Refund requests for change of mind after 12 hours are not guaranteed and will be considered on a case-by-case basis.`,
			],
		},
		{
			id: 'notRefunded',
			heading: '4. What We Do Not Refund',
			bullets: [
				`Law enforcement or police acceptance — We do not guarantee that our document will be accepted by police or other authorities. Our document is a translation companion for car rental and similar purposes. Refunds are not granted solely on the basis of law enforcement refusal.`,
				`Refusal without documentation — Refund requests for car rental refusal must include written proof from the rental company. Requests without supporting documentation cannot be processed.`,
				`Lost or misplaced documents — If you lose your PDF, contact us and we can help you retrieve it. This is not a refund scenario.`,
			],
		},
		{
			id: 'howTo',
			heading: '5. How to Request a Refund',
			listIntro: 'Send an email to {{EMAIL}} with:',
			bullets: [
				'Your order ID or the email used at purchase',
				'Reason for the refund request',
				'Supporting documents (for car rental refusal: proof from the rental company)',
			],
			trailingParagraphs: [
				`We will respond within 2 business days and process eligible refunds within 5–10 business days. Refunds are issued to the original payment method.`,
			],
		},
		{
			id: 'contact',
			heading: '6. Contact',
			paragraphs: [
				`IDP Companion is operated by SKYFOM (Pty) Ltd, 301 Long Street, Cape Town, South Africa.`,
			],
			contactWithEmail: {
				beforeKey: 'legal.refundClosingBefore',
				afterKey: 'legal.refundClosingAfter',
			},
		},
	],
};

export default doc;
