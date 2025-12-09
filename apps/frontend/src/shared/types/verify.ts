export type VerifyStatus = 'passed' | 'review' | 'failed';

export interface VerifyCheck {
	passed: boolean;
	info?: string;
}

export interface VerifyExtractedFields {
	text?: string;
	fields?: Record<string, string>;
}

/**
 * Answer from/verify/license
 */
export interface VerifyLicenseResponse {
	status: VerifyStatus;
	checks: Record<string, VerifyCheck>;
	extracted?: VerifyExtractedFields;
	hints?: string[];
}

export interface VerifyLicensePayload {
	licenseCountry?: string;
	licenseNumber?: string;
}

export interface VerifyLicenseError {
	message?: string;
	statusCode?: number;
	error?: string;
}
