<template>
  <div class="license-categories">
    <div class="label-row">
      <div class="label text-slate-900">
        {{ label }}
        <span v-if="required" class="req" aria-hidden="true">*</span>
      </div>

      <div v-if="selectedText" class="selected">
        {{ t('licenseCategory.selected', { list: selectedText }) }}
      </div>
    </div>

    <div class="segments" role="group" :aria-label="label">
      <button
        v-for="c in categories"
        :key="c"
        type="button"
        class="seg text-slate-900"
        :class="{ 'is-active': isSelected(c) }"
        :aria-pressed="isSelected(c)"
        @click="toggle(c)"
      >
        {{ c }}
      </button>
    </div>

    <p v-if="error" class="app-error mt-1.5 text-xs text-[#c0392b]">
      {{ error }}
    </p>
    <div v-else class="app-error-placeholder" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { LicenseCategory } from '@/shared/types/applications';

const { t } = useI18n();

const categories: LicenseCategory[] = ['A', 'B', 'C', 'D', 'E'];

const props = defineProps<{
  modelValue: LicenseCategory[];
  error?: string;
  required?: boolean;
  label?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: LicenseCategory[]): void;
}>();

const label = computed(() => props.label ?? t('verify.licenseCategory'));

function isSelected(c: LicenseCategory) {
  return props.modelValue?.includes(c) ?? false;
}

function toggle(c: LicenseCategory) {
  const current = props.modelValue ?? [];
  const next = current.includes(c) ? current.filter((x) => x !== c) : [...current, c];

  emit('update:modelValue', next);
}

const selectedText = computed(() => (props.modelValue?.length ? props.modelValue.join(', ') : ''));
</script>

<style scoped lang="scss">
.license-categories {
  margin: 10px 0 14px;
}

.label-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
}

.label {
  font-size: 13px;
  font-weight: 700;
}

.req {
  color: #ef4444;
  margin-left: 2px;
}

.selected {
  font-size: 12px;
  color: rgba(100, 116, 139, 0.95);
}

.segments {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.seg {
  height: 38px;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-weight: 800;
  transition: background 0.15s ease, color 0.15s ease;
}

.seg + .seg {
  border-left: 1px solid #e2e8f0;
}

.seg:hover {
  background: #f8fafc;
}

.seg.is-active {
  background: rgb(var(--c-active-blue));
  color: #fff;
}

@media (max-width: 520px) {
  .segments {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
