<template>
  <div class="app-field flex flex-col">
    <label
      v-if="label"
      class="app-label mb-1.5 inline-flex items-center gap-1 text-sm font-bold text-slate-900 pl-2"
    >
      <span>{{ label }}</span>
      <span v-if="required" class="text-red-600" aria-hidden="true">*</span>
    </label>

    <div class="file-wrap flex items-center gap-3">
      <label
        class="btn-file relative inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-200/30"
      >
        <input
          class="native absolute inset-0 cursor-pointer opacity-0"
          type="file"
          :accept="accept"
          @change="onChange"
        />
        {{ buttonText }}
      </label>

      <span
        class="file-name text-sm"
        :class="fileName ? 'text-slate-900' : 'text-slate-500'"
      >
        {{ fileName || 'No file chosen' }}
      </span>
    </div>

    <p v-if="hint && !error" class="app-hint mt-1.5 text-xs text-slate-500">
      {{ hint }}
    </p>

    <p v-if="error" class="app-error mt-1.5 text-xs text-[#c0392b]">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    required?: boolean;
    accept?: string;
    buttonText?: string;
    modelValue?: File | null;
    hint?: string;
    error?: string;
  }>(),
  {
    buttonText: 'Choose File',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', v: File | null): void;
}>();

const fileName = computed(() => props.modelValue?.name ?? '');

function onChange(e: Event) {
  const files = (e.target as HTMLInputElement).files;
  emit('update:modelValue', files && files.length ? files[0] : null);
}
</script>
