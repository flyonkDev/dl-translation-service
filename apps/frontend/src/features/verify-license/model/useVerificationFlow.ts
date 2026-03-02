import { computed, ref, watch, type Ref } from 'vue';
import { toast } from 'vue-sonner';

import { extractApiErrorMessage, runFilePrecheck } from '@/shared/lib';

import type { UseUploadLicenseState } from './useUploadLicense';

export interface UseVerificationFlowOptions {
  licenseFile: Ref<File | null>;
  licenseCountry: Ref<string>;
  licenseNumber: Ref<string>;
  verify: UseUploadLicenseState;
}

export function useVerificationFlow(options: UseVerificationFlowOptions) {
  const { licenseFile, licenseCountry, licenseNumber, verify } = options;

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

      const pre = await runFilePrecheck(file);
      if (!pre.ok) {
        lastVerifiedKey.value = '';
        verify.reset();
        verificationError.value = `License: ${pre.reason}`;
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

          if (res.status === 'passed') toast.success('Driver License looks good ✅');
          else if (res.status === 'review')
            toast.warning('We can proceed, but we may need manual review ⚠️');
          else toast.error('Verification failed — please re-upload a clearer image ❌');
        }

        verificationError.value =
          res.status === 'failed'
            ? 'Verification failed. Please re-upload clearer images or check hints.'
            : null;
      } catch (e) {
        verificationError.value = extractApiErrorMessage(
          verify.error.value ?? e,
          'Server error during verification',
        );
        const toastKey = `${key}:error`;
        if (toastKey !== lastToastKey.value) {
          lastToastKey.value = toastKey;
          toast.error('Could not verify right now. Please try again.');
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
