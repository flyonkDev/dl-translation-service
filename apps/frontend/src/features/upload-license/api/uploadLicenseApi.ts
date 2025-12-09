// features/upload-license/api/uploadLicenseApi.ts
import { apiPost, type ApiError } from '@/shared/api/apiClient';
import type {
	VerifyLicenseResponse,
	VerifyLicensePayload,
	VerifyLicenseError,
} from '@/shared/types/verify';


export async function uploadLicense(
	file: File,
	payload?: VerifyLicensePayload
): Promise<VerifyLicenseResponse> {
	const formData = new FormData();
	formData.append('license', file);

	if (payload?.licenseCountry) {
		formData.append('licenseCountry', payload.licenseCountry);
	}

	if (payload?.licenseNumber) {
		formData.append('licenseNumber', payload.licenseNumber);
	}

	try {
		const response = await apiPost<VerifyLicenseResponse, FormData, VerifyLicenseError>(
			'/verify/license',
			formData
		);
		return response;
	} catch (error) {
		throw error as ApiError<VerifyLicenseError>;
	}
}
