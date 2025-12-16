<template>
  <div class="inline-flex flex-col items-start gap-1.5">
    <div
      class="inline-flex h-[42px] items-stretch rounded-xl border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]"
      role="radiogroup"
      aria-label="Sex"
    >
      <button
        type="button"
        class="sex-btn"
        :class="modelValue === 'male' ? 'bg-activeBlue text-white' : 'bg-transparent text-slate-700'"
        role="radio"
        :aria-checked="modelValue === 'male'"
        :disabled="disabled"
        @click="select('male')"
      >
        {{ maleLabel }}
      </button>

      <button
        type="button"
        class="sex-btn"
        :class="modelValue === 'female' ? 'bg-activeBlue text-white' : 'bg-transparent text-slate-700'"
        role="radio"
        :aria-checked="modelValue === 'female'"
        :disabled="disabled"
        @click="select('female')"
      >
        {{ femaleLabel }}
      </button>
    </div>

    <p v-if="error" class="m-0 text-xs text-[#c0392b]">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
type Sex = 'male' | 'female';

const props = defineProps<{
  modelValue: Sex | '';
  error?: string;
  disabled?: boolean;
  maleLabel?: string;
  femaleLabel?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: Sex): void;
}>();

const maleLabel = props.maleLabel ?? 'Male';
const femaleLabel = props.femaleLabel ?? 'Female';

function select(v: Sex) {
  if (props.disabled) return;
  emit('update:modelValue', v);
}
</script>

<style scoped lang="scss">
.sex-btn {
  border: 0;
  cursor: pointer;

  padding: 8px 18px;
  min-width: 110px;
  border-radius: 10px;

  font-size: 13px;
  font-weight: 700;
  line-height: 1;

  transition: background 0.15s ease, color 0.15s ease, transform 0.06s ease;
}

.sex-btn:hover {
  transform: translateY(-1px);
}

.sex-btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
  transform: none;
}
</style>
