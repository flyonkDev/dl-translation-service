<template>
  <section class="driver-details-form">
    <h1 class="text-4xl mb-4 font-extrabold text-slate-900">
      {{ t('form.driver.title') }}
    </h1>

    <p class="mb-4 text-sm leading-relaxed text-slate-500">
      {{ t('form.driver.lead') }}
    </p>

    <div class="form-grid form-grid--2 mb-3 gap-4">
      <BaseInput
        id="email"
        :label="t('form.driver.email')"
        required
        type="email"
        :model-value="email"
        @update:model-value="emit('update:email', $event)"
        :error="errors.email"
        autocomplete="email"
      />
      <BaseInput
        id="phone"
        :label="t('form.driver.phone')"
        :model-value="phone"
        @update:model-value="emit('update:phone', $event)"
        :error="errors.phone"
        autocomplete="tel"
      />
    </div>

    <div class="form-grid form-grid--2 mb-3 gap-4">
      <BaseInput
        id="firstName"
        :label="t('form.driver.firstName')"
        required
        :model-value="firstName"
        @update:model-value="emit('update:firstName', $event)"
        :error="errors.firstName"
        autocomplete="given-name"
      />
      <BaseInput
        id="lastName"
        :label="t('form.driver.lastName')"
        required
        :model-value="lastName"
        @update:model-value="emit('update:lastName', $event)"
        :error="errors.lastName"
        autocomplete="family-name"
      />
    </div>

    <div class="mb-3 grid grid-cols-1 gap-4">
      <BaseCountrySelect
        id="licenseCountry"
        :label="t('form.driver.licenseCountryLabel')"
        required
        :placeholder="t('form.driver.licenseCountryPlaceholder')"
        :model-value="licenseCountry"
        @update:model-value="emit('update:licenseCountry', $event)"
        :options="uiCountryOptions"
        :error="errors.licenseCountry"
        searchable
      />
    </div>

    <div class="mb-3">
      <div class="mb-1 text-[13px] font-bold text-slate-900">
        {{ t('form.driver.dob') }}
      </div>

      <div class="form-grid form-grid--3 gap-3">
        <BaseSelect
          id="dobDay"
          :label="t('form.driver.day')"
          required
          :placeholder="t('form.driver.dayPh')"
          :model-value="dobDay"
          @update:model-value="emit('update:dobDay', $event)"
          :options="dayOptions"
          :error="errors.dobDay"
        />
        <BaseSelect
          id="dobMonth"
          :label="t('form.driver.month')"
          required
          :placeholder="t('form.driver.monthPh')"
          :model-value="dobMonth"
          @update:model-value="emit('update:dobMonth', $event)"
          :options="monthOptions"
          :error="errors.dobMonth"
        />
        <BaseSelect
          id="dobYear"
          :label="t('form.driver.year')"
          required
          :placeholder="t('form.driver.yearPh')"
          :model-value="dobYear"
          @update:model-value="emit('update:dobYear', $event)"
          :options="yearOptions"
          :error="errors.dobYear"
        />
      </div>
    </div>

    <div class="mt-2">
      <div class="mb-1 text-[13px] font-bold text-slate-900">
        {{ t('form.driver.sex') }}
      </div>

      <SexToggle
        :model-value="sex"
        @update:model-value="emit('update:sex', $event)"
        :error="errors.sex"
        :male-label="t('form.driver.sexMale')"
        :female-label="t('form.driver.sexFemale')"
        :group-aria-label="t('form.driver.sexAria')"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseInput from '@ui-kit/components/inputs/BaseInput.vue';
import BaseSelect from '@ui-kit/components/inputs/BaseSelect.vue';
import BaseCountrySelect, { type CountrySelectOption } from '@ui-kit/components/inputs/BaseCountrySelect.vue';
import SexToggle from './SexToggle.vue';
import type { Sex } from '@/shared/types/domain';

export type { Sex } from '@/shared/types/domain';

const { t } = useI18n();

export type SelectOption = { value: string; label: string };

export type DriverDetailsFormErrors = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  licenseCountry: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  sex: string;
};

const props = defineProps<{
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  licenseCountry: string;

  dobDay: string;
  dobMonth: string;
  dobYear: string;

  sex: Sex | '';

  countryOptions: SelectOption[];
  dayOptions: SelectOption[];
  monthOptions: SelectOption[];
  yearOptions: SelectOption[];

  errors: DriverDetailsFormErrors;
}>();

const emit = defineEmits<{
  (e: 'update:firstName', v: string): void;
  (e: 'update:lastName', v: string): void;
  (e: 'update:email', v: string): void;
  (e: 'update:phone', v: string): void;

  (e: 'update:licenseCountry', v: string): void;

  (e: 'update:dobDay', v: string): void;
  (e: 'update:dobMonth', v: string): void;
  (e: 'update:dobYear', v: string): void;

  (e: 'update:sex', v: Sex): void;
}>();

const uiCountryOptions = computed<CountrySelectOption[]>(() => {
  return props.countryOptions.map((o) => ({
    value: o.value,
    label: o.label,
    flagCode: o.value,
  }));
});
</script>

<style scoped lang="scss">
.form-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.form-grid--2 {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.form-grid--3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: $bp-tablet) {
  .form-grid--2,
  .form-grid--3 {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
