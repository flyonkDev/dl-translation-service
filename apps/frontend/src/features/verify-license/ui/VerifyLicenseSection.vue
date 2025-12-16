<template>
  <section class="verify">
    <h2 class="section-title mb-1 text-base font-bold text-slate-900">
      Verify your driver’s license
    </h2>

    <p class="section-subtitle mb-2 text-[13px] leading-relaxed text-slate-500">
      We run an automatic check on your uploaded license. We generate a translation PDF
      based on your real license data.
    </p>

    <p class="small-muted mb-3 text-xs leading-relaxed text-slate-500">
      By providing your signature you confirm that you understand this is a translation document
      and not a replacement of your license.
    </p>

    <div class="verify__grid grid grid--2 grid--rows mb-3 gap-4">
      <BaseFile
        class="verify__headshot"
        label="Headshot (passport-style photo)"
        required
        accept="image/*"
        :model-value="headshotFile"
        @update:model-value="emit('update:headshotFile', $event)"
        :error="headshotError"
      />

      <div class="stack flex flex-col">
        <BaseInput
          id="licenseNumber"
          class="verify__license-number"
          label="Driver’s license number (optional)"
          :model-value="licenseNumber"
          @update:model-value="emit('update:licenseNumber', $event)"
        />

        <p class="hint small mt-1.5 text-xs text-slate-500/80">
          If OCR can’t recognize the number, you can enter it manually.
        </p>
      </div>

      <BaseFile
        class="verify__license-file"
        label="Driver’s license scan"
        required
        accept="image/*,.pdf"
        :model-value="licenseFile"
        @update:model-value="emit('update:licenseFile', $event)"
        hint="Front/back or a combined image/PDF."
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
            Signature <span aria-hidden="true">*</span>
          </span>
        </template>
      </SignaturePad>
    </div>

    <div
      v-if="verificationResult"
      class="verification-result verify__result mt-3 rounded-xl border border-slate-200 bg-white p-3 text-[13px] text-slate-900"
    >
      <p class="m-0">
        Status:
        <strong class="font-extrabold">{{ verificationResult.status }}</strong>
      </p>

      <p v-if="statusLabel" class="mt-1">
        {{ statusLabel }}
      </p>

      <div v-if="verificationResult.hints?.length" class="mt-2">
        <p class="m-0 font-semibold">Hints:</p>
        <ul class="mt-1 list-disc pl-5 text-slate-700">
          <li v-for="hint in verificationResult.hints" :key="hint">
            {{ hint }}
          </li>
        </ul>
      </div>
    </div>

    <p v-if="verificationError" class="app-error mt-1.5 text-xs text-[#c0392b]">
      {{ verificationError }}
    </p>

    <label class="terms mt-2 flex items-center gap-2 text-xs text-slate-900">
      <input
        class="terms__checkbox accent-activeBlue"
        type="checkbox"
        :checked="termsAccepted"
        @change="emit('update:termsAccepted', ($event.target as HTMLInputElement).checked)"
      />
      <span class="terms__text">
        I understand that this is a translation PDF and not an official license.
      </span>
    </label>

    <p v-if="showErrors && !termsAccepted" class="app-error mt-1.5 text-xs text-[#c0392b]">
      You must accept the terms
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseFile from '@/shared/ui/inputs/BaseFile.vue';
import BaseInput from '@/shared/ui/inputs/BaseInput.vue';
import SignaturePad from '@/shared/ui/inputs/SignaturePad.vue';
import type { VerifyLicenseResponse } from '@/shared/types/verify';

const props = defineProps<{
  headshotFile: File | null;
  licenseNumber: string;
  licenseFile: File | null;
  signatureDataUrl: string;
  termsAccepted: boolean;

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
}>();

const headshotError = computed(() =>
  props.showErrors && !props.headshotFile ? 'Headshot is required' : '',
);

const licenseError = computed(() =>
  props.showErrors && !props.licenseFile ? 'Driver’s license file is required' : '',
);

const signatureError = computed(() =>
  props.showErrors && !props.signatureDataUrl ? 'Signature is required' : '',
);

const statusLabel = computed(() => {
  const status = props.verificationResult?.status;
  if (!status) return '';
  if (status === 'passed') return 'Looks like a valid driver license ✅';
  if (status === 'review') return 'We need to review this manually ⚠️';
  return 'Failed to recognize license ❌';
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
