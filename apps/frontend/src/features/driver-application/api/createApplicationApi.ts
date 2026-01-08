// src/features/driver-application/api/createApplicationApi.ts
import { apiPost, type ApiError } from '@/shared/api/apiClient';
import type {
	CreateApplicationPayload,
	CreateApplicationResponse,
	CreateApplicationError,
} from '@/shared/types/applications';

export async function createApplication(
	headshot: File,
	payload: CreateApplicationPayload
): Promise<CreateApplicationResponse> {
	const formData = new FormData();

	formData.append('headshot', headshot);

	formData.append('email', payload.email);
	if (payload.phone) formData.append('phone', payload.phone);

	formData.append('firstName', payload.firstName);
	formData.append('lastName', payload.lastName);
	formData.append('issueCountry', payload.issueCountry);
	formData.append('dobDay', String(payload.dobDay));
	formData.append('dobMonth', String(payload.dobMonth));
	formData.append('dobYear', String(payload.dobYear));
	formData.append('sex', payload.sex);
	formData.append('planYears', String(payload.planYears));

	if (payload.licenseNumber) formData.append('licenseNumber', payload.licenseNumber);
	formData.append('signatureDataUrl', payload.signatureDataUrl);
	formData.append('verificationId', payload.verificationId);

  for (const [k, v] of formData.entries()) console.log(k, v);

	try {
		return await apiPost<CreateApplicationResponse, FormData, CreateApplicationError>(
			'/applications',
			formData
		);
	} catch (error) {
		throw error as ApiError<CreateApplicationError>;
	}
}
