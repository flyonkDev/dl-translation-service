<template>
  <div class="sex">
    <div class="sex__control" role="radiogroup" aria-label="Sex">
      <button
        type="button"
        class="sex__btn"
        :class="{ 'is-active': modelValue === 'male' }"
        role="radio"
        :aria-checked="modelValue === 'male'"
        :disabled="disabled"
        @click="select('male')"
      >
        {{ maleLabel }}
      </button>

      <button
        type="button"
        class="sex__btn"
        :class="{ 'is-active': modelValue === 'female' }"
        role="radio"
        :aria-checked="modelValue === 'female'"
        :disabled="disabled"
        @click="select('female')"
      >
        {{ femaleLabel }}
      </button>
    </div>

    <p v-if="error" class="sex__error">{{ error }}</p>
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
.sex {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.sex__control {
  height: 42px;
  display: inline-flex;
  align-items: stretch;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.04);
}

.sex__btn {
  border: 0;
  background: transparent;
  padding: 8px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  color: #374151;
  line-height: 1;
  min-width: 110px;
  transition: background 0.15s ease, color 0.15s ease, transform 0.06s ease;
}

.sex__btn:hover {
  transform: translateY(-1px);
}

.sex__btn.is-active {
  background: #2563eb;
  color: #ffffff;
}

.sex__btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.sex__error {
  margin: 0;
  font-size: 12px;
  color: #c0392b;
}
</style>