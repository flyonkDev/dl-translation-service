<template>
  <div class="app-field flex flex-col">
    <label
      v-if="label"
      class="flexapp-label mb-1.5 inline-flex items-center gap-1 text-sm font-bold text-slate-900 pl-2"
      :for="id"
    >
      <span>{{ label }}</span>
      <span v-if="required" class="text-red-600" aria-hidden="true">*</span>
    </label>

    <input
      :id="id"
      class="app-input w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-activeBlue focus:ring-4 focus:ring-activeBlue/15"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :aria-invalid="!!error || undefined"
      :aria-describedby="error ? `${id}-error` : undefined"
    />

    <p v-if="hint && !error" class="app-hint mt-1.5 text-xs text-slate-500">
      {{ hint }}
    </p>

    <p v-if="error" class="app-error mt-1.5 text-xs text-[#c0392b]" :id="`${id}-error`">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id?: string;
  label?: string;
  modelValue?: string;
  type?: string;
  placeholder?: string;
  autocomplete?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}>();

defineEmits<{
  (e: 'update:modelValue', v: string): void;
}>();
</script>
