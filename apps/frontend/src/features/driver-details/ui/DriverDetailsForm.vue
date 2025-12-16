<template>
  <section class="driver-details-form">
    <h1 class="text-lg mb-4 font-extrabold text-slate-900">
      Driver details
    </h1>

    <p class="mb-4 text-sm leading-relaxed text-slate-500">
      Please enter the exact data shown on your driver’s license.
      All required fields must be filled so we can generate a correct translation
      and run basic verification on your document.
    </p>

    <div class="form-grid form-grid--2 mb-3 gap-4">
      <BaseInput
        id="email"
        label="Email"
        required
        type="email"
        :model-value="email"
        @update:model-value="emit('update:email', $event)"
        :error="errors.email"
        autocomplete="email"
      />
      <BaseInput
        id="phone"
        label="Mobile phone (optional)"
        :model-value="phone"
        @update:model-value="emit('update:phone', $event)"
        :error="errors.phone"
        autocomplete="tel"
      />
    </div>

    <div class="form-grid form-grid--2 mb-3 gap-4">
      <BaseInput
        id="firstName"
        label="First name"
        required
        :model-value="firstName"
        @update:model-value="emit('update:firstName', $event)"
        :error="errors.firstName"
        autocomplete="given-name"
      />
      <BaseInput
        id="lastName"
        label="Last name"
        required
        :model-value="lastName"
        @update:model-value="emit('update:lastName', $event)"
        :error="errors.lastName"
        autocomplete="family-name"
      />
    </div>

    <div class="mb-3 grid grid-cols-1 gap-4">
      <BaseSelect
        id="licenseCountry"
        label="Where was your license issued?"
        required
        placeholder="Select country"
        :model-value="licenseCountry"
        @update:model-value="emit('update:licenseCountry', $event)"
        :options="countryOptions"
        :error="errors.licenseCountry"
      />
    </div>

    <div class="mb-3">
      <div class="mb-1 text-[13px] font-bold text-slate-900">
        Date of birth
      </div>

      <div class="form-grid form-grid--3 gap-3">
        <BaseSelect
          id="dobDay"
          label="Day"
          required
          placeholder="Day"
          :model-value="dobDay"
          @update:model-value="emit('update:dobDay', $event)"
          :options="dayOptions"
          :error="errors.dobDay"
        />
        <BaseSelect
          id="dobMonth"
          label="Month"
          required
          placeholder="Month"
          :model-value="dobMonth"
          @update:model-value="emit('update:dobMonth', $event)"
          :options="monthOptions"
          :error="errors.dobMonth"
        />
        <BaseSelect
          id="dobYear"
          label="Year"
          required
          placeholder="Year"
          :model-value="dobYear"
          @update:model-value="emit('update:dobYear', $event)"
          :options="yearOptions"
          :error="errors.dobYear"
        />
      </div>
    </div>

    <div class="mt-2">
      <div class="mb-1 text-[13px] font-bold text-slate-900">
        Sex
      </div>

      <SexToggle
        :model-value="sex"
        @update:model-value="emit('update:sex', $event)"
        :error="errors.sex"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/inputs/BaseInput.vue';
import BaseSelect from '@/shared/ui/inputs/BaseSelect.vue';
import SexToggle from './SexToggle.vue';
import type { Sex } from '@/entities/driver-application';

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

defineProps<{
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
