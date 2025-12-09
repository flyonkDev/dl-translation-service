// features/upload-license/model/useUploadLicense.ts
import { ref, computed, type ComputedRef } from 'vue';
import type { Ref } from 'vue';
import type { ApiError } from '@/shared/api/apiClient';
import { uploadLicense } from '../api/uploadLicenseApi';
import type {
	VerifyLicenseResponse,
	VerifyLicensePayload,
	VerifyLicenseError,
} from '@/shared/types/verify';

export interface UseUploadLicenseState {
	file: Ref<File | null>;
	isLoading: Ref<boolean>;
	result: Ref<VerifyLicenseResponse | null>;
	error: Ref<ApiError<VerifyLicenseError> | null>;
	statusLabel: ComputedRef<string>;
	upload: (payload?: VerifyLicensePayload) => Promise<void>;
	reset: () => void;
}


export function useUploadLicense(): UseUploadLicenseState {
	const file = ref<File | null>(null);
	const isLoading = ref(false);
	const result = ref<VerifyLicenseResponse | null>(null);
	const error = ref<ApiError<VerifyLicenseError> | null>(null);

	const statusLabel = computed(() => {
		const status = result.value?.status;
		if (!status) return '';
		if (status === 'passed') return 'Looks like a valid driver license ✅';
		if (status === 'review') return 'We need to review this manually ⚠️';
		return 'Failed to recognize license ❌';
	});

	const reset = () => {
		result.value = null;
		error.value = null;
	};

	const upload = async (payload?: VerifyLicensePayload) => {
		if (!file.value) return;

		isLoading.value = true;
		error.value = null;
		result.value = null;

		try {
			const response = await uploadLicense(file.value, payload);
			result.value = response;
		} catch (err) {
			error.value = err as ApiError<VerifyLicenseError>;
		} finally {
			isLoading.value = false;
		}
	};

	return {
		file,
		isLoading,
		result,
		error,
		statusLabel,
		upload,
		reset,
	};
}
