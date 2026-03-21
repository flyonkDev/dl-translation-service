<template>
  <section class="verify">
    <h2 class="section-title mb-1 text-base font-bold text-slate-900">
      {{ t('verify.title') }}
    </h2>

    <p class="section-subtitle mb-2 text-[13px] leading-relaxed text-slate-500">
      {{ t('verify.lead') }}
    </p>

    <p class="small-muted mb-3 text-xs leading-relaxed text-slate-500">
      {{ t('verify.signatureNote') }}
    </p>

    <LicenseCategoriesSelector
      required
      :model-value="licenseCategories"
      @update:model-value="emit('update:licenseCategories', $event)"
      :error="licenseCategoriesError"
    />

    <div class="verify__grid grid grid--2 grid--rows mb-3 gap-4">
      <BaseFile
        class="verify__headshot"
        :label="t('verify.headshotLabel')"
        required
        accept="image/jpeg,image/png,image/webp"
        :model-value="headshotFile"
        @update:model-value="emit('update:headshotFile', $event)"
        :error="headshotError"
      />

      <div class="stack flex flex-col">
        <BaseInput
          id="licenseNumber"
          class="verify__license-number"
          :label="t('verify.licenseNumberLabel')"
          :model-value="licenseNumber"
          @update:model-value="emit('update:licenseNumber', $event)"
        />

        <p class="hint small mt-1.5 text-xs text-slate-500/80">
          {{ t('verify.licenseNumberHint') }}
        </p>
      </div>

      <BaseFile
        class="verify__license-file"
        :label="t('verify.licenseFileLabel')"
        required
        accept="image/jpeg,image/png,image/webp,application/pdf"
        :model-value="licenseFile"
        @update:model-value="emit('update:licenseFile', $event)"
        :hint="t('verify.licenseFileHint')"
        :error="licenseError"
      />
    </div>

    <div class="signature verify__signature mt-1 flex flex-col items-start">
      <SignaturePad
        :model-value="signatureDataUrl"
        @update:model-value="emit('update:signatureDataUrl', $event)"
        :height="180"
        :error="signatureError"
      >
        <template #label>
          <span>
            {{ t('verify.signatureLabel') }} <span aria-hidden="true">*</span>
          </span>
        </template>
      </SignaturePad>
    </div>

    <label class="terms mt-2 flex items-center gap-2 text-xs text-slate-900">
      <input
        class="terms__checkbox accent-activeBlue"
        type="checkbox"
        :checked="termsAccepted"
        @change="emit('update:termsAccepted', ($event.target as HTMLInputElement).checked)"
      />
      <span class="terms__text">
        {{ t('verify.terms') }}
      </span>
    </label>

    <p v-if="showErrors && !termsAccepted" class="app-error mt-1.5 text-xs text-[#c0392b]">
      {{ messages.termsRequired }}
    </p>
    <div v-else class="app-error-placeholder" aria-hidden="true"></div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseFile from '@ui-kit/components/inputs/BaseFile.vue';
import BaseInput from '@ui-kit/components/inputs/BaseInput.vue';
import SignaturePad from '@/shared/ui/inputs/SignaturePad.vue';
import type { VerifyLicenseResponse } from '@/shared/types/verify';

import LicenseCategoriesSelector from '@/features/license-categories/ui/LicenseCategoriesSelector.vue';
import type { LicenseCategory } from '@/shared/types/applications';

const { t } = useI18n();

const messages = computed(() => ({
	headshotRequired: t('verify.validation.headshotRequired'),
	licenseFileRequired: t('verify.validation.licenseFileRequired'),
	signatureRequired: t('verify.validation.signatureRequired'),
	termsRequired: t('verify.validation.termsRequired'),
	verificationFailed: t('verify.validation.verificationFailed'),
	couldNotVerify: t('verify.validation.couldNotVerify'),
}));

const props = defineProps<{
  headshotFile: File | null;
  licenseNumber: string;
  licenseFile: File | null;
  signatureDataUrl: string;
  termsAccepted: boolean;
  licenseCategories: LicenseCategory[];
  licenseCategoriesError?: string;

  showErrors: boolean;

  verificationResult: VerifyLicenseResponse | null;
  verificationError: string | null;
}>();

const emit = defineEmits<{
  (e: 'update:headshotFile', v: File | null): void;
  (e: 'update:licenseNumber', v: string): void;
  (e: 'update:licenseFile', v: File | null): void;
  (e: 'update:signatureDataUrl', v: string): void;
  (e: 'update:termsAccepted', v: boolean): void;
  (e: 'update:licenseCategories', v: LicenseCategory[]): void;
}>();

const headshotError = computed(() =>
  props.showErrors && !props.headshotFile ? messages.value.headshotRequired : '',
);

const licenseError = computed(() => {
  if (props.showErrors && !props.licenseFile) return messages.value.licenseFileRequired;

  if (props.verificationResult?.status === 'failed') return messages.value.verificationFailed;
  if (props.verificationError) return messages.value.couldNotVerify;
  return '';
});

const signatureError = computed(() =>
  props.showErrors && !props.signatureDataUrl ? messages.value.signatureRequired : '',
);

const licenseCategoriesError = computed(() => {
  if (!props.showErrors) return '';
  return props.licenseCategoriesError ?? '';
});
</script>

<style scoped lang="scss">
.verify__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  column-gap: 18px;
  row-gap: 16px;
}

@media (max-width: $bp-tablet) {
  .verify__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
