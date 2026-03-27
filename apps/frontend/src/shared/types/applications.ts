import type { Sex } from './domain';

export type LicenseCategory = 'A' | 'B' | 'C' | 'D' | 'E';

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

	planYears: 1 | 3 | 5;

	licenseNumber?: string;

	licenseCategories: LicenseCategory[];

	signatureDataUrl: string;

	verificationId: string;
}

export interface CreateApplicationResponse {
	applicationId: string;
	nextAction: 'payment';
}

export interface CreateApplicationError {
	message?: string | { code?: string; message?: string };
	statusCode?: number;
	error?: string;
}

export const HEADSHOT_MISMATCH_CODE = 'HEADSHOT_MISMATCH';
export const HEADSHOT_NO_FACE_CODE = 'HEADSHOT_NO_FACE';
