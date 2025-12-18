export interface FaqItem {
	id: number;
	question: string;
	answer: string[];
}

export const LANDING_FAQS: FaqItem[] = [
	{
		id: 1,
		question: 'Is this an official driver’s license?',
		answer: [
			'No. We do not issue or replace any official driver’s licenses.',
			'We provide a translation PDF that explains your national driver’s license in several languages. It must be used together with your original license.',
		],
	},
	{
		id: 2,
		question: 'In which situations is a translation PDF helpful?',
		answer: [
			'When renting a car abroad in a non-English speaking country.',
			'When communicating with local authorities who may not read your original license language.',
		],
	},
	{
		id: 3,
		question: 'What do I need to apply?',
		answer: [
			'A valid national driver’s license and a clear photo/scan of it.',
			'Optionally, a passport-style photo if you want it to be shown on the PDF.',
		],
	},
	{
		id: 4,
		question: 'How fast will I receive my document?',
		answer: ['You’ll get a download link shortly after payment.'],
	},
	{
		id: 5,
		question: 'Is my data stored securely?',
		answer: [
			'We use your data only to generate the translation PDF.',
			'In production we’ll add clear retention rules and the option to delete your document.',
		],
	},
];
