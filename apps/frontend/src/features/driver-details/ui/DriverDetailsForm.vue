<template>
  <section>
    <h1 class="page-title">Driver details</h1>
    <p class="page-subtitle">
      Please enter the exact data shown on your driver’s license.
      All required fields must be filled so we can generate a correct translation
      and run basic verification on your document.
    </p>

    <div class="grid grid--2">
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

    <div class="grid grid--2">
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

    <div class="grid grid--1">
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

    <div class="fieldset">
      <div class="legend">Date of birth</div>
      <div class="grid grid--3">
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

    <div class="fieldset">
      <div class="legend">Sex</div>
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
.page-title {
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 4px;
}

.page-subtitle {
  margin: 0 0 16px;
  font-size: 14px;
  color: #6b7280;
}

.grid {
  display: grid;
  gap: 16px;
  margin-bottom: 14px;
}

.grid--1 {
  grid-template-columns: minmax(0, 1fr);
}

.grid--2 {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.grid--3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.fieldset {
  margin: 10px 0 12px;
}

.legend {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 6px;
  color: #0b1a33;
}

@media (max-width: 720px) {
  .grid--2,
  .grid--3 {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
