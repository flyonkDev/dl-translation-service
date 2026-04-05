import { computed, ref, watch, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { toast } from 'vue-sonner';

import { extractApiErrorMessage, runFilePrecheck } from '@/shared/lib';
import { captureProductEvent } from '@/shared/lib/posthog';

import type { UseUploadLicenseState } from './useUploadLicense';

export interface UseVerificationFlowOptions {
	licenseFile: Ref<File | null>;
	licenseCountry: Ref<string>;
	licenseNumber: Ref<string>;
	verify: UseUploadLicenseState;
}

export function useVerificationFlow(options: UseVerificationFlowOptions) {
	const { licenseFile, licenseCountry, licenseNumber, verify } = options;
	const { t } = useI18n();

	const verificationError = ref<string | null>(null);
	const lastVerifiedKey = ref('');
	const lastToastKey = ref('');

	const isVerifying = computed(() => verify.isLoading.value);
	const verificationResult = computed(() => verify.result.value);

	watch(
		[licenseFile, licenseCountry],
		async ([file, country]) => {
			verificationError.value = null;

			if (!file || !country) {
				lastVerifiedKey.value = '';
				verify.reset();
				return;
			}

			const pre = runFilePrecheck(file);
			if (!pre.ok) {
				lastVerifiedKey.value = '';
				verify.reset();
				verificationError.value =
					t('file.licensePrecheckPrefix') + t(`file.${pre.reasonKey}`);
				return;
			}

			const key = `${file.name}:${file.size}:${file.lastModified}:${country}`;
			if (key === lastVerifiedKey.value) return;
			lastVerifiedKey.value = key;

			try {
				verify.file.value = file;
				const res = await verify.upload({
					licenseCountry: country,
					licenseNumber: licenseNumber.value || '',
				});

				const toastKey = `${key}:${res.status}`;
				if (toastKey !== lastToastKey.value) {
					lastToastKey.value = toastKey;

					captureProductEvent('license_verify_result', {
						status: res.status,
						license_country: country,
					});

					if (res.status === 'passed') toast.success(t('toast.licensePassed'));
					else if (res.status === 'review') toast.warning(t('toast.licenseReview'));
					else toast.error(t('toast.licenseFailed'));
				}

				verificationError.value =
					res.status === 'failed' ? t('verify.validation.verificationFailed') : null;
			} catch (e) {
				verificationError.value = extractApiErrorMessage(
					verify.error.value ?? e,
					t('errors.serverVerification'),
				);
				const toastKey = `${key}:error`;
				if (toastKey !== lastToastKey.value) {
					lastToastKey.value = toastKey;
					captureProductEvent('license_verify_result', {
						status: 'error',
						license_country: country,
					});
					toast.error(t('toast.verifyError'));
				}
			}
		},
		{ immediate: true },
	);

	return {
		verificationError,
		isVerifying,
		verificationResult,
	};
}
