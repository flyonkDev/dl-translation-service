<template>
  <div class="app-field">
    <label v-if="label" class="app-label" :for="id">{{ label }}<span v-if="required" aria-hidden="true">*</span></label>
    <select
      :id="id"
      class="app-select"
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      :aria-invalid="!!error || undefined"
      :aria-describedby="error ? `${id}-error` : undefined"
    >
      <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="String(opt.value)">
        {{ opt.label }}
      </option>
    </select>
    <p v-if="error" class="app-error" :id="`${id}-error`">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
  label?: string
  modelValue?: string
  options: { value: string | number; label: string }[]
  placeholder?: string
  error?: string
  required?: boolean
}>()

defineEmits<{
  (e:'update:modelValue', v: string): void
}>()
</script>

<style scoped lang="scss">
.app-field { margin-bottom: 14px; }
.app-label { display:inline-block; font-weight:700; font-size:13px; color:#0b1a33; margin-bottom:6px;
  span{color:#e32;}
}
.app-select {
  width:100%; border:1px solid #e7e7ea; border-radius:10px; padding:12px 12px; font-size:14px; background:#fff; outline:none;
}
.app-select:focus { border-color:#2f7ef4; box-shadow:0 0 0 3px rgba(47,126,244,.15); }
.app-error { margin:6px 0 0; font-size:12px; color:#c0392b; }
</style>
