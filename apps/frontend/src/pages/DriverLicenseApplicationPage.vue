<template>
	<DriverApplicationLayout>
		<template #header>
			<StepProgressHeader :current-step="currentStep" />
		</template>

		<form ref="formRef" v-if="currentStep === 1" @submit.prevent="onSubmitStep1">
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
							v-model:licenseCategories="licenseCategories"
							:license-categories-error="showError(licenseCategoriesMeta) ? (licenseCategoriesError ?? '') : ''"
							:show-errors="showFilesErrors"
							:verification-result="verificationResult"
							:verification-error="verificationError"
						/>

						<PlanYearsSelector v-model="selectedYears" :options="planOptions" />

						<div class="section-footer">
							<BaseButton
								type="submit"
								variant="primary"
								:loading="isVerifying || isSubmittingApplication"
								:disabled="!formComplete || isVerifying || isSubmittingApplication || verificationResult?.status === 'failed'"
							>
								Continue to payment
							</BaseButton>
						</div>
					</form>


		<template #sidebar>
			<SummarySidebar
				:price-display="selectedPlan ? formatUsd(selectedPlan.priceCents, selectedPlan.currency) : '—'"
				:selected-years="selectedYears"
			/>

		</template>
	</DriverApplicationLayout>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import { toast } from 'vue-sonner';
import { toTypedSchema } from '@vee-validate/zod';
import { useRoute, useRouter } from 'vue-router';

import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import DriverApplicationLayout from '@/widgets/driver-application/ui/DriverApplicationLayout.vue';
import StepProgressHeader from '@/widgets/driver-application/ui/StepProgressHeader.vue';
import SummarySidebar from '@/widgets/driver-application/ui/SummarySidebar.vue';
import DriverDetailsForm, {
  type DriverDetailsFormErrors,
  type SelectOption,
} from '@/features/driver-details/ui/DriverDetailsForm.vue';
import PlanYearsSelector from '@/features/plan-years/ui/PlanYearsSelector.vue';
import VerifyLicenseSection from '@/features/verify-license/ui/VerifyLicenseSection.vue';
import { createApplication } from '@/features/driver-application/api/createApplicationApi';
import { applicationFormSchema } from '@/features/driver-application/model/applicationSchema';
import { useDriverApplicationStore } from '@/entities/driver-application';
import { useUploadLicense } from '@/features/verify-license/model/useUploadLicense';
import { useVerificationFlow } from '@/features/verify-license/model/useVerificationFlow';
import { applicationFormMessages } from '@/shared/config/applicationFormMessages';
import { fetchCountries, fetchPricing, type PricingPlanDTO, type CountryDTO } from '@/shared/api/reference';
import {
	extractApiErrorMessage,
	formatUsd,
	runFilePrecheck,
	runHeadshotPrecheck,
} from '@/shared/lib';
import type { CreateApplicationPayload, CreateApplicationError } from '@/shared/types/applications';
import { HEADSHOT_MISMATCH_CODE, HEADSHOT_NO_FACE_CODE } from '@/shared/types/applications';
import type { PlanYears, Sex } from '@/entities/driver-application';
import type { LicenseCategory } from '@/shared/types/applications';
import type { ApiError } from '@/shared/api/apiClient';

type StepId = 1 | 2;
const currentStep = ref<StepId>(1);

const route = useRoute();
const router = useRouter();

const store = useDriverApplicationStore();
const verify = useUploadLicense();

const isSubmittingApplication = ref(false);

// --- plan years from store + query
const selectedYears = computed<PlanYears>({
  get: () => store.selectedYears,
  set: (v) => store.setSelectedYears(v),
});

function toPlanYears(v: unknown): PlanYears | null {
  const n = Number(Array.isArray(v) ? v[0] : v);
  return n === 1 || n === 2 || n === 3 ? (n as PlanYears) : null;
}

const planFromQuery = toPlanYears(route.query.planYears);
if (planFromQuery) {
  store.setSelectedYears(planFromQuery);
}

// --- reference data
const countries = ref<CountryDTO[]>([]);
const pricing = ref<PricingPlanDTO[]>([]);
const refLoading = ref(true);
const refError = ref<string | null>(null);

onMounted(async () => {
  refLoading.value = true;
  refError.value = null;

  try {
    const [c, p] = await Promise.all([fetchCountries(), fetchPricing()]);
    countries.value = c.items;
    pricing.value = p.items;
  } catch (e) {
    refError.value = 'Failed to load reference data';
  } finally {
    refLoading.value = false;
  }
});

const countryOptions = computed<SelectOption[]>(() => {
  return countries.value.slice().map((c) => ({
    value: c.code,
    label: `${c.name}`,
  }));
});

const planOptions = computed(() => {
  return pricing.value.slice().sort((a, b) => b.years - a.years);
});

const selectedPlan = computed(() => {
  return pricing.value.find((p) => p.years === selectedYears.value) ?? null;
});

// --- select options
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
const { handleSubmit, submitCount } = useForm({
  validationSchema: toTypedSchema(applicationFormSchema),
  initialValues: {
    firstName: store.driver?.firstName ?? '',
    lastName: store.driver?.lastName ?? '',
    email: store.driver?.email ?? '',
    phone: store.driver?.phone ?? '',
    dobDay: store.driver?.dobDay ?? '',
    dobMonth: store.driver?.dobMonth ?? '',
    dobYear: store.driver?.dobYear ?? '',
    licenseCountry: store.verify?.licenseCountry ?? '',
    licenseCategories: store.verify?.licenseCategories ?? [],
    sex: (store.driver?.sex ?? '') as Sex | '',
  },
});

function showError(meta: { touched: boolean }) {
  return meta.touched || submitCount.value > 0;
}

// fields
const { value: firstName, errorMessage: firstNameError, meta: firstNameMeta } = useField<string>('firstName');
const { value: lastName, errorMessage: lastNameError, meta: lastNameMeta } = useField<string>('lastName');
const { value: email, errorMessage: emailError, meta: emailMeta } = useField<string>('email');
const { value: phone, errorMessage: phoneError, meta: phoneMeta } = useField<string>('phone');

const { value: dobDay, errorMessage: dobDayError, meta: dobDayMeta } = useField<string>('dobDay');
const { value: dobMonth, errorMessage: dobMonthError, meta: dobMonthMeta } = useField<string>('dobMonth');
const { value: dobYear, errorMessage: dobYearError, meta: dobYearMeta } = useField<string>('dobYear');
const {
  value: licenseCategories,
  errorMessage: licenseCategoriesError,
  meta: licenseCategoriesMeta,
} = useField<LicenseCategory[]>('licenseCategories');
const { value: licenseCountryField, errorMessage: licenseCountryError, meta: licenseCountryMeta } =
  useField<string>('licenseCountry');

const { value: sex, errorMessage: sexError, meta: sexMeta } = useField<Sex | ''>('sex');

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
const formRef = ref<HTMLFormElement | null>(null);

// --- form complete: all required fields filled (not necessarily valid)
const formComplete = computed(() => {
  const driverFilled =
    firstName.value.trim().length >= 2 &&
    lastName.value.trim().length >= 2 &&
    email.value.trim().length > 0 &&
    dobDay.value !== '' &&
    dobMonth.value !== '' &&
    dobYear.value !== '' &&
    licenseCountryField.value !== '' &&
    (licenseCategories.value?.length ?? 0) >= 1 &&
    sex.value !== '';
  const filesFilled =
    !!headshotFile.value &&
    !!licenseFile.value &&
    !!signatureDataUrl.value &&
    termsAccepted.value;
  return driverFilled && filesFilled;
});

function scrollToFirstError() {
  nextTick(() => {
    const form = formRef.value;
    if (!form) return;
    const firstInvalid = form.querySelector<HTMLInputElement | HTMLSelectElement | HTMLButtonElement>(
      'input[aria-invalid="true"], select[aria-invalid="true"], [aria-invalid="true"]',
    );
    const firstErrorEl = form.querySelector<HTMLElement>('.app-error');
    const scrollTarget = firstInvalid ?? firstErrorEl;
    scrollTarget?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    nextTick(() => {
      if (firstInvalid && typeof firstInvalid.focus === 'function') {
        firstInvalid.focus({ preventScroll: true });
      }
    });
  });
}

// --- verification flow
const { verificationError, isVerifying, verificationResult } = useVerificationFlow({
  licenseFile,
  licenseCountry: licenseCountryField,
  licenseNumber,
  verify,
});

// --- submit
const onSubmitStep1 = handleSubmit(
  async (vals) => {
    showFilesErrors.value = true;
    verificationError.value = null;

  if (!headshotFile.value || !licenseFile.value || !signatureDataUrl.value || !termsAccepted.value) {
    toast.error(applicationFormMessages.toast.incompleteFields);
    scrollToFirstError();
    return;
  }

  const [ph, pl] = await Promise.all([
    runHeadshotPrecheck(headshotFile.value),
    runFilePrecheck(licenseFile.value),
  ]);

  if (!ph.ok) {
    toast.error(applicationFormMessages.toast.headshotInvalid);
    scrollToFirstError();
    return;
  }
  if (!pl.ok) {
    toast.error(applicationFormMessages.toast.licenseInvalid);
    scrollToFirstError();
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
      verificationError.value = extractApiErrorMessage(verify.error.value ?? e, 'Server error during verification');
      return;
    }
  }

  const verification = verify.result.value;
  if (!verification) {
    verificationError.value = applicationFormMessages.toast.verificationMissing;
    toast.error(applicationFormMessages.toast.verificationMissing);
    return;
  }

  store.setVerifyIdentity({
    headshotFile: headshotFile.value,
    licenseNumber: licenseNumber.value.trim() ? licenseNumber.value.trim() : undefined,
    licenseCountry: vals.licenseCountry,
    licenseFile: licenseFile.value,
    signatureDataUrl: signatureDataUrl.value,
    termsAccepted: termsAccepted.value,
    licenseCategories: licenseCategories.value,
    verification,
  });

  if (verification.status === 'failed') {
    verificationError.value = applicationFormMessages.toast.verificationFailedSubmit;
    toast.error(applicationFormMessages.toast.verificationFailedSubmit);
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

  const verificationId = verification.verificationId as string | undefined;
  if (!verificationId) {
    toast.error(applicationFormMessages.toast.verificationIdMissing);
    return;
  }

  const payload: CreateApplicationPayload = {
    email: vals.email,
    phone: vals.phone?.trim() ? vals.phone.trim() : undefined,

    firstName: vals.firstName,
    lastName: vals.lastName,

    issueCountry: vals.licenseCountry,

    dobDay: Number(vals.dobDay),
    dobMonth: Number(vals.dobMonth),
    dobYear: Number(vals.dobYear),

    sex: vals.sex,

    planYears: selectedYears.value,

    licenseNumber: licenseNumber.value.trim() ? licenseNumber.value.trim() : undefined,
    licenseCategories: licenseCategories.value,
    signatureDataUrl: signatureDataUrl.value,
    verificationId,
  };

  try {
    isSubmittingApplication.value = true;

    const res = await createApplication(headshotFile.value!, payload);

    store.setApplicationId(res.applicationId);
    sessionStorage.setItem('driverApp.applicationId', res.applicationId);

    toast.success(applicationFormMessages.toast.applicationCreated);

    await router.push({
      name: 'payment',
      params: { applicationId: res.applicationId },
    });
  } catch (e) {
    const err = e as ApiError<CreateApplicationError>;
    const data = err.data as { code?: string; message?: unknown } | undefined;
    // Бэк может отдать code в корне тела (Nest) или внутри message
    const code =
      data?.code ??
      (typeof data?.message === 'object' &&
      data?.message !== null &&
      'code' in (data.message as object)
        ? (data.message as { code?: string }).code
        : undefined);

    const toastDuration = 7000; // 7 сек для ошибок по фото, чтобы юзер успел прочитать
    if (code === HEADSHOT_MISMATCH_CODE) {
      toast.error(applicationFormMessages.toast.headshotMismatch, {
        duration: toastDuration,
      });
    } else if (code === HEADSHOT_NO_FACE_CODE) {
      toast.error(applicationFormMessages.toast.headshotNoFace, {
        duration: toastDuration,
      });
    } else {
      toast.error(applicationFormMessages.toast.applicationSubmitError, {
        duration: toastDuration,
      });
    }
  } finally {
    isSubmittingApplication.value = false;
  }
  },
  () => {
    showFilesErrors.value = true;
    scrollToFirstError();
  },
);
</script>

<style scoped lang="scss">
.divider {
  height: 1px;
  background: $slate-200;
  margin: 18px 0 10px;
}

.section-footer {
  display: flex;
  margin-top: 18px;
}
</style>
