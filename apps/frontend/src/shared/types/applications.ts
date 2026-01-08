
export interface CreateApplicationPayload {
	email: string;
	phone?: string;

	firstName: string;
	lastName: string;

	issueCountry: string;

	dobDay: number;
	dobMonth: number;
	dobYear: number;

	sex: Sex;

	planYears: 1 | 2 | 3;

	licenseNumber?: string;

	signatureDataUrl: string;

	verificationId: string;
}

export interface CreateApplicationResponse {
	applicationId: string;
	nextAction: 'payment';
}

export interface CreateApplicationError {
	message?: string;
	statusCode?: number;
	error?: string;
}
