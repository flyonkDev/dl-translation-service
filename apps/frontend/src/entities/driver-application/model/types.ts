import type { VerifyLicenseResponse } from '@/shared/types/verify';
export type { Sex, PlanYears } from '@/shared/types/domain';
import type { Sex } from '@/shared/types/domain';
import type { LicenseCategory } from '@/shared/types/applications';

export type DriverDetails = {
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	dobDay: string;
	dobMonth: string;
	dobYear: string;
	dobISO: string;
	sex: Sex;
};

export type VerifyIdentity = {
	headshotFile: File | null;
	licenseNumber?: string;
	licenseCountry: string;
	destinationCountry?: string;
	licenseFile: File | null;
	licenseCategories: LicenseCategory[];
	signatureDataUrl: string;
	termsAccepted: boolean;
	verification?: VerifyLicenseResponse | null;
};
