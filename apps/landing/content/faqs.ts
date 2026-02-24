export interface FaqItem {
	id: number;
	question: string;
	answer: string[];
}

export const LANDING_FAQS = [
	{
		id: 1,
		question: 'What is an International Driving Permit companion document?',
		answer: [
			'An International Driving Permit companion document is a multilingual document that presents your driver license information in an internationally understandable format.',
			'It is generated based on your real driver license and is designed to be used together with your original license when traveling abroad.',
			'It helps authorities and car rental agencies interpret your license details more easily.',
		],
	},

	{
		id: 2,
		question: 'Is this an official government-issued International Driving Permit?',
		answer: [
			'No. This is not a government-issued International Driving Permit.',
			'It is a companion document designed to accompany your original driver license and provide a multilingual presentation of your license information.',
			'You must always carry your original driver license when using the companion document.',
		],
	},

	{
		id: 3,
		question: 'Why is a companion document useful for international travel?',
		answer: [
			'Driver licenses issued in one country may not be easily readable in another due to language differences or unfamiliar formats.',
			'A companion document presents your license information in multiple languages, making it easier to understand abroad.',
			'This can be helpful when renting cars or presenting your license during travel.',
		],
	},

	{
		id: 4,
		question: 'Do you verify my driver license?',
		answer: [
			'Yes. Your companion document is generated based on the information from your real driver license.',
			'We require you to upload your license so we can verify and generate the document accurately.',
			'This ensures the document reflects your actual license details.',
		],
	},

	{
		id: 5,
		question: 'How long does it take to receive my companion document?',
		answer: [
			'In most cases, your companion document is generated within minutes after submission.',
			'You will receive it as a digital PDF file that you can download immediately.',
			'You can print it or keep it on your phone for convenience.',
		],
	},

	{
		id: 6,
		question: 'What format will I receive?',
		answer: [
			'You will receive your companion document as a digital PDF file.',
			'It is optimized for both printing and mobile display.',
			'You can access it anytime after download.',
		],
	},

	{
		id: 7,
		question: 'Is my personal information secure?',
		answer: [
			'Yes. Your data is processed securely and used only for generating your companion document.',
			'We do not sell or share your personal information with third parties.',
			'All document generation is handled through secure systems.',
		],
	},

	{
		id: 8,
		question: 'Do you offer refunds?',
		answer: [
			'Yes. If there is a technical issue or your document cannot be generated, you may request a refund.',
			'Please refer to our Refund Policy for full details.',
			'Our support team is available to help resolve any issues.',
		],
	},
];
