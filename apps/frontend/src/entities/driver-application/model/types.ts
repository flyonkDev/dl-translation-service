// entities/driver-application/model/types.ts
import type { VerifyLicenseResponse } from '@/shared/types/verify';

export type PlanYears = 1 | 2 | 3;
export type Sex = 'male' | 'female';

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
	signatureDataUrl: string;
	termsAccepted: boolean;
	verification?: VerifyLicenseResponse | null;
};
