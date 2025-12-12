<template>
  <section>
    <h2 class="section-title">Verify your driver’s license</h2>
    <p class="section-subtitle">
      We run an automatic check on your uploaded license. We generate a translation PDF
      based on your real license data.
    </p>

    <p class="small-muted">
      By providing your signature you confirm that you understand this is a translation document
      and not a replacement of your license.
    </p>

    <div class="grid grid--2 grid--rows">
      <BaseFile
        label="Headshot (passport-style photo)"
        required
        accept="image/*"
        :model-value="headshotFile"
        @update:model-value="emit('update:headshotFile', $event)"
        :error="headshotError"
      />

      <div class="stack">
        <BaseInput
          id="licenseNumber"
          label="Driver’s license number (optional)"
          :model-value="licenseNumber"
          @update:model-value="emit('update:licenseNumber', $event)"
        />
        <p class="hint small">
          If OCR can’t recognize the number, you can enter it manually.
        </p>
      </div>

      <BaseFile
        label="Driver’s license scan"
        required
        accept="image/*,.pdf"
        :model-value="licenseFile"
        @update:model-value="emit('update:licenseFile', $event)"
        hint="Front/back or a combined image/PDF."
        :error="licenseError"
      />
    </div>

    <div class="signature">
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

    <div v-if="verificationResult" class="verification-result">
      <p>
        Status:
        <strong>{{ verificationResult.status }}</strong>
      </p>
      <p v-if="statusLabel">
        {{ statusLabel }}
      </p>
      <div v-if="verificationResult.hints?.length">
        <p>Hints:</p>
        <ul>
          <li v-for="hint in verificationResult.hints" :key="hint">
            {{ hint }}
          </li>
        </ul>
      </div>
    </div>

    <p v-if="verificationError" class="app-error">
      {{ verificationError }}
    </p>

    <label class="terms">
      <input
        type="checkbox"
        :checked="termsAccepted"
        @change="emit('update:termsAccepted', ($event.target as HTMLInputElement).checked)"
      />
      <span>
        I understand that this is a translation PDF and not an official license.
      </span>
    </label>
    <p v-if="showErrors && !termsAccepted" class="app-error">
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
.section-title {
  font-size: 16px;
  font-weight: 700;
  margin: 10px 0 4px;
}

.section-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin: 0 0 8px;
}

.small-muted {
  font-size: 12px;
  color: #6b7280;
  margin: 0 0 10px;
}

.grid {
  display: grid;
  gap: 16px;
  margin-bottom: 12px;
}

.grid--2 {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.grid--rows {
  column-gap: 18px;
  row-gap: 16px;
}

.stack {
  display: flex;
  flex-direction: column;
}

.hint.small {
  margin-top: 6px;
  font-size: 12px;
  color: #8b929d;
}

.signature {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.app-error {
  margin: 6px 0 0;
  font-size: 12px;
  color: #c0392b;
}

.terms {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  font-size: 12px;
}

.verification-result {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  font-size: 13px;
}

@media (max-width: 720px) {
  .grid--2 {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
