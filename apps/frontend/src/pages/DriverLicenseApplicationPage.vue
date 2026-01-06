<template>
  <div class="apply-page">
    <div class="apply-shell">
      <header class="apply-progress">
        <div class="apply-progress__steps">
          <div
            class="apply-progress__step"
            :class="{ 'is-active': currentStep === 1, 'is-done': currentStep > 1 }"
          >
            <span class="index">01</span>
            <span>Information & documents</span>
          </div>
          <div class="apply-progress__step" :class="{ 'is-active': currentStep === 2 }">
            <span class="index">02</span>
            <span>Payment</span>
          </div>
        </div>
        <div class="apply-progress__bar">
          <div
            class="apply-progress__bar-fill"
            :style="{ width: currentStep === 1 ? '50%' : '100%' }"
          />
        </div>
      </header>

      <main class="apply-main">
        <section class="apply-form">
          <form v-if="currentStep === 1" @submit.prevent="onSubmitStep1">
            <DriverDetailsForm
              v-model:firstName="firstName"
              v-model:lastName="lastName"
              v-model:email="email"
              v-model:phone="phone"
              v-model:licenseCountry="licenseCountryField"
              v-model:dobDay="dobDay"
              v-model:dobMonth="dobMonth"
              v-model:dobYear="dobYear"
              v-model:sex="sex"
              :country-options="countryOptions"
              :day-options="dayOptions"
              :month-options="monthOptions"
              :year-options="yearOptions"
              :errors="driverErrors"
            />

            <div class="divider" />

            <VerifyLicenseSection
              v-model:headshotFile="headshotFile"
              v-model:licenseNumber="licenseNumber"
              v-model:licenseFile="licenseFile"
              v-model:signatureDataUrl="signatureDataUrl"
              v-model:termsAccepted="termsAccepted"
              :show-errors="showFilesErrors"
              :verification-result="verificationResult"
              :verification-error="verificationError"
            />

            <PlanYearsSelector
              v-model="selectedYears"
              :options="planOptions"
            />

            <div class="section-footer">
              <BaseButton type="submit" variant="primary" :loading="isVerifying">
                {{ isVerifying ? 'Verifying...' : 'Continue to payment' }}
              </BaseButton>
            </div>
          </form>

          <section v-else>
            <h1 class="page-title">Payment</h1>
            <p class="page-subtitle">
              Here we will integrate Stripe or another payment provider.
              For now this is a placeholder step.
            </p>

            <div class="verification-result">
              <p v-if="storedVerification?.status === 'passed'">
                Your document has passed the automatic verification ✅
              </p>
              <p v-else-if="storedVerification?.status === 'review'">
                We’ll review this manually ⚠️
              </p>
              <p v-else>
                Verification is missing. Please go back and verify your document.
              </p>
            </div>

            <div class="section-footer">
              <BaseButton variant="secondary" @click="currentStep = 1">
                Back to details
              </BaseButton>
              <BaseButton variant="primary" :disabled="!canProceedPayment">
                Complete application
              </BaseButton>
            </div>
          </section>
        </section>

        <aside class="apply-summary">
          <div class="summary-card">
            <h3 class="summary-title">Your translation PDF</h3>
            <p class="summary-text">
              Multilingual driver’s license translation PDF based on your real
              license. Ready to print or show on your phone.
            </p>

            <p class="summary-price">
              {{ selectedPlan ? formatUsd(selectedPlan.priceCents, selectedPlan.currency) : '—' }}
            </p>

            <p class="summary-note">
              One-time payment per document. Immediate digital delivery after verification and payment.
            </p>

            <p class="summary-note" style="margin-top: 10px;">
              Selected plan:
              <strong>{{ selectedYears }}</strong> year(s)
            </p>
          </div>

          <div class="summary-card summary-card--secondary">
            <h4 class="summary-small-title">Why travelers use it</h4>
            <ul class="summary-list">
              <li>Helps car rental agencies understand your license abroad</li>
              <li>Clear translations into multiple languages</li>
              <li>Printable PDF + digital copy</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { useRoute } from 'vue-router'

import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';

import DriverDetailsForm, {
  type DriverDetailsFormErrors,
  type SelectOption,
} from '@/features/driver-details/ui/DriverDetailsForm.vue';
import PlanYearsSelector from '@/features/plan-years/ui/PlanYearsSelector.vue';
import VerifyLicenseSection from '@/features/verify-license/ui/VerifyLicenseSection.vue';

import { useDriverApplicationStore } from '@/entities/driver-application';
import type { PlanYears, Sex } from '@/entities/driver-application';
import { useUploadLicense } from '@/features/verify-license/model/useUploadLicense';

import { fetchCountries, fetchPricing, type PricingPlanDTO, type CountryDTO } from '@/shared/api/reference';

const route = useRoute()
const store = useDriverApplicationStore();
const verify = useUploadLicense();

type StepId = 1 | 2;
const currentStep = ref<StepId>(1);

const selectedYears = computed<PlanYears>({
  get: () => store.selectedYears,
  set: (v) => store.setSelectedYears(v),
})

function toPlanYears(v: unknown): PlanYears | null {
  const n = Number(Array.isArray(v) ? v[0] : v)
  return n === 1 || n === 2 || n === 3 ? (n as PlanYears) : null
}

const planFromQuery = toPlanYears(route.query.planYears)
if (planFromQuery) {
  store.setSelectedYears(planFromQuery)
}

const countries = ref<CountryDTO[]>([])
const pricing = ref<PricingPlanDTO[]>([])
const refLoading = ref(true)
const refError = ref<string | null>(null)

onMounted(async () => {
  refLoading.value = true
  refError.value = null

  try {
    const [c, p] = await Promise.all([fetchCountries(), fetchPricing()])
    countries.value = c.items
    pricing.value = p.items
  } catch (e) {
    refError.value = 'Failed to load reference data'
  } finally {
    refLoading.value = false
  }
})

const countryOptions = computed<SelectOption[]>(() => {
  return countries.value
    .slice()
    .map((c) => ({
      value: c.code,          
      label: `${c.name}`,
    }))
})

const planOptions = computed(() => {
  return pricing.value
    .slice()
    .sort((a, b) => b.years - a.years)
})

const selectedPlan = computed(() => {
  return pricing.value.find((p) => p.years === selectedYears.value) ?? null
})

function formatUsd(cents: number, currency: 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

const storedVerification = computed(() => store.verify?.verification ?? null);

const canProceedPayment = computed(() => {
  const st = storedVerification.value?.status;
  return st === 'passed' || st === 'review';
});

const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

const monthOptions = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
].map((m, i) => ({ value: String(i + 1), label: m }));

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 100 }, (_, i) => currentYear - i).map(
  (y) => ({ value: String(y), label: String(y) }),
);

// --- validation schema

const schema = z.object({
  firstName: z.string().min(2, 'Enter your first name'),
  lastName: z.string().min(2, 'Enter your last name'),
  email: z.string().email('Invalid email'),

  phone: z.string().trim().refine((v) => v === '' || v.length >= 4, 'Enter your phone number'),

  dobDay: z.string().min(1, 'Required'),
  dobMonth: z.string().min(1, 'Required'),
  dobYear: z
    .string()
    .min(1, 'Required')
    .refine((y) => currentYear - Number(y) >= 18, 'You must be 18+'),

  licenseCountry: z.string().min(1, 'Required'),
  sex: z
  .enum(['male', 'female', ''], { message: 'Select your sex' })
  .refine((v) => v !== '', { message: 'Select your sex' }),
});

const { handleSubmit, submitCount } = useForm({
  validationSchema: toTypedSchema(schema),
  initialValues: {
    firstName: store.driver?.firstName ?? '',
    lastName: store.driver?.lastName ?? '',
    email: store.driver?.email ?? '',
    phone: store.driver?.phone ?? '',
    dobDay: store.driver?.dobDay ?? '',
    dobMonth: store.driver?.dobMonth ?? '',
    dobYear: store.driver?.dobYear ?? '',
    licenseCountry: store.verify?.licenseCountry ?? '',
    sex: (store.driver?.sex ?? '') as Sex | '',
  },
});

function showError(meta: { touched: boolean }) {
  return meta.touched || submitCount.value > 0;
}

// fields

const { value: firstName, errorMessage: firstNameError, meta: firstNameMeta } =
  useField<string>('firstName');
const { value: lastName, errorMessage: lastNameError, meta: lastNameMeta } =
  useField<string>('lastName');
const { value: email, errorMessage: emailError, meta: emailMeta } =
  useField<string>('email');
const { value: phone, errorMessage: phoneError, meta: phoneMeta } =
  useField<string>('phone');

const { value: dobDay, errorMessage: dobDayError, meta: dobDayMeta } =
  useField<string>('dobDay');
const { value: dobMonth, errorMessage: dobMonthError, meta: dobMonthMeta } =
  useField<string>('dobMonth');
const { value: dobYear, errorMessage: dobYearError, meta: dobYearMeta } =
  useField<string>('dobYear');

const {
  value: licenseCountryField,
  errorMessage: licenseCountryError,
  meta: licenseCountryMeta,
} = useField<string>('licenseCountry');

const { value: sex, errorMessage: sexError, meta: sexMeta } =
  useField<Sex | ''>('sex');

const driverErrors = computed<DriverDetailsFormErrors>(() => ({
  firstName: showError(firstNameMeta) ? (firstNameError.value ?? '') : '',
  lastName: showError(lastNameMeta) ? (lastNameError.value ?? '') : '',
  email: showError(emailMeta) ? (emailError.value ?? '') : '',
  phone: showError(phoneMeta) ? (phoneError.value ?? '') : '',
  licenseCountry: showError(licenseCountryMeta) ? (licenseCountryError.value ?? '') : '',
  dobDay: showError(dobDayMeta) ? (dobDayError.value ?? '') : '',
  dobMonth: showError(dobMonthMeta) ? (dobMonthError.value ?? '') : '',
  dobYear: showError(dobYearMeta) ? (dobYearError.value ?? '') : '',
  sex: showError(sexMeta) ? (sexError.value ?? '') : '',
}));

// --- verification / files (UI state)
const headshotFile = ref<File | null>(store.verify?.headshotFile ?? null);
const licenseNumber = ref<string>(store.verify?.licenseNumber ?? '');
const licenseFile = ref<File | null>(store.verify?.licenseFile ?? null);
const signatureDataUrl = ref<string>(store.verify?.signatureDataUrl ?? '');
const termsAccepted = ref<boolean>(store.verify?.termsAccepted ?? false);

const showFilesErrors = ref(false);

// --- verification result state (from composable + friendly UI error)
const isVerifying = computed(() => verify.isLoading.value);
const verificationResult = computed(() => verify.result.value);

const verificationError = ref<string | null>(null);

function extractApiErrorMessage(err: unknown): string {
  if (!err) return 'Server error during verification';
  if (typeof err === 'string') return err;

  if (typeof err === 'object') {
    const e = err as any;
    return (
      e?.message ||
      e?.data?.message ||
      e?.data?.error ||
      'Server error during verification'
    );
  }

  return 'Server error during verification';
}

async function runLocalPrecheck(file: File) {
  const isImage = /^image\/(jpe?g|png|webp|heic)$/i.test(file.type);
  const isPdf = file.type === 'application/pdf';
  const okType = isImage || isPdf;
  const okSize = file.size <= 15 * 1024 * 1024;

  if (!okType) return { ok: false, reason: 'Unsupported file type' };
  if (!okSize) return { ok: false, reason: 'File too large' };

  return { ok: true };
}


const lastVerifiedKey = ref<string>('')

watch(
  [licenseFile, licenseCountryField],
  async ([file, country]) => {
    verificationError.value = null

    if (!file) {
      lastVerifiedKey.value = ''
      verify.reset()
      return
    }

    if (!country) {
      lastVerifiedKey.value = ''
      verify.reset()
      return
    }

    const pre = await runLocalPrecheck(file)
    if (!pre.ok) {
      lastVerifiedKey.value = ''
      verify.reset()
      verificationError.value = `License: ${pre.reason}`
      return
    }

    const key = `${file.name}:${file.size}:${file.lastModified}:${country}`
    if (key === lastVerifiedKey.value) return
    lastVerifiedKey.value = key

    try {
      verify.file.value = file
      const res = await verify.upload({
        licenseCountry: country,
        licenseNumber: licenseNumber.value || '',
      })

      if (res.status === 'failed') {
        verificationError.value =
          'Verification failed. Please re-upload clearer images or check hints.'
      } else {
        verificationError.value = null
      }
    } catch (e) {
      verificationError.value = extractApiErrorMessage(verify.error.value ?? e)
    }
  },
  { immediate: true }
)





const onSubmitStep1 = handleSubmit(async (vals) => {
  showFilesErrors.value = true;
  verificationError.value = null;

  if (!headshotFile.value || !licenseFile.value || !signatureDataUrl.value || !termsAccepted.value) {
    return;
  }

  const [ph, pl] = await Promise.all([
    runLocalPrecheck(headshotFile.value),
    runLocalPrecheck(licenseFile.value),
  ]);

  if (!ph.ok) {
    window.alert(`Headshot: ${ph.reason}`);
    return;
  }
  if (!pl.ok) {
    window.alert(`License: ${pl.reason}`);
    return;
  }

  if (!verificationResult.value && licenseFile.value) {
    try {
      verify.file.value = licenseFile.value;
      await verify.upload({
        licenseCountry: vals.licenseCountry || '',
        licenseNumber: licenseNumber.value || '',
      });
    } catch (e) {
      verificationError.value = extractApiErrorMessage(verify.error.value ?? e);
      return;
    }
  }

  const verification = verify.result.value;
  if (!verification) {
    verificationError.value = 'Verification is missing. Please upload your license again.';
    return;
  }

  store.setVerifyIdentity({
    headshotFile: headshotFile.value,
    licenseNumber: licenseNumber.value.trim() ? licenseNumber.value.trim() : undefined,
    licenseCountry: vals.licenseCountry,
    licenseFile: licenseFile.value,
    signatureDataUrl: signatureDataUrl.value,
    termsAccepted: termsAccepted.value,
    verification,
  });

  if (verification.status === 'failed') {
    verificationError.value = 'Verification failed. Please re-upload clearer images or check hints.';
    return;
  }

  const dobISO = `${vals.dobYear}-${String(vals.dobMonth).padStart(2, '0')}-${String(vals.dobDay).padStart(2, '0')}`;

  store.setDriverDetails({
    firstName: vals.firstName,
    lastName: vals.lastName,
    email: vals.email,
    phone: vals.phone?.trim() ? vals.phone.trim() : undefined,
    dobDay: vals.dobDay,
    dobMonth: vals.dobMonth,
    dobYear: vals.dobYear,
    dobISO,
    sex: vals.sex,
  });

  if (verification.status === 'passed' || verification.status === 'review') {
    currentStep.value = 2;
  }
});

</script>

<style scoped lang="scss">
.apply-page {
  background: #f3f4f6;
  padding: 24px 16px 40px;
  min-height: calc(100vh - 350px);
}

.apply-shell {
  max-width: 1120px;
  margin: 0 auto;
  background: $white;
  border-radius: $radius-2xl;
  box-shadow: $shadow-soft;
  padding: 20px 20px 24px;
}

.apply-progress {
  margin-bottom: 16px;
}

.apply-progress__steps {
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
}

.apply-progress__step {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 8px;

  @include text-sm;
  color: $slate-500;

  .index {
    width: 24px;
    height: 24px;
    border-radius: 999px;
    border: 1px solid $slate-200;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    color: $slate-700;
  }

  &.is-active {
    color: $slate-900;

    .index {
      border-color: #2563eb;
      background: #2563eb;
      color: $white;
    }
  }

  &.is-done {
    color: #16a34a;

    .index {
      border-color: #16a34a;
      background: #bbf7d0;
      color: #16a34a;
    }
  }
}

.apply-progress__bar {
  height: 4px;
  background: $slate-200;
  border-radius: 999px;
  overflow: hidden;
}

.apply-progress__bar-fill {
  height: 100%;
  background: #2563eb;
  width: 50%;
}

.apply-main {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.8fr);
  gap: 24px;
}

.divider {
  height: 1px;
  background: $slate-200;
  margin: 18px 0 10px;
}

.section-footer {
  display: flex;
  margin-top: 18px;
}

.apply-summary {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.summary-card {
  border-radius: $radius-xl;
  padding: 14px 14px 16px;
  background: #f9fafb;
  border: 1px solid $slate-200;
}

.summary-card--secondary {
  background: $white;
}

.summary-title {
  margin: 0 0 6px;
  @include title-sm;
}

.summary-small-title {
  margin: 0 0 6px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
}

.summary-text {
  margin: 0 0 10px;
  @include text-sm;
  color: $slate-700;
}

.summary-price {
  font-size: 22px;
  font-weight: 800;
  color: $slate-900;
  margin: 0 0 4px;
}

.summary-note {
  margin: 0;
  @include text-xs;
  color: $slate-500;
}

.summary-list {
  margin: 0;
  padding-left: 18px;
  @include text-sm;
  color: $slate-700;
}

.verification-result {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid $slate-200;
  @include text-sm;
}

@media (max-width: calc(#{$bp-desktop} - 1px)) {
  .apply-shell {
    padding: 16px 12px 20px;
  }

  .apply-main {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
