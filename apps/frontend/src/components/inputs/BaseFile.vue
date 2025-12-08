<template>
  <div class="app-field">
    <label v-if="label" class="app-label">
      {{ label }}<span v-if="required" aria-hidden="true">*</span>
    </label>

    <div class="file-wrap">
      <label class="btn-file">
        <input
          class="native"
          type="file"
          :accept="accept"
          @change="onChange"
        />
        {{ buttonText }}
      </label>
      <span class="file-name" :class="{ placeholder: !fileName }">
        {{ fileName || 'No file chosen' }}
      </span>
    </div>

    <p v-if="hint && !error" class="app-hint">{{ hint }}</p>
    <p v-if="error" class="app-error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{
  label?: string
  required?: boolean
  accept?: string
  buttonText?: string
  modelValue?: File | null
  hint?: string
  error?: string
}>(), {
  buttonText: 'Choose File'
})

const emit = defineEmits<{
  (e:'update:modelValue', v: File | null): void
}>()

const fileName = computed(() => props.modelValue?.name ?? '')

function onChange(e: Event) {
  const files = (e.target as HTMLInputElement).files
  emit('update:modelValue', files && files.length ? files[0] : null)
}
</script>

<style scoped lang="scss">
.app-field { width:100%; }
.app-label { display:inline-block; font-weight:700; font-size:13px; color:#0b1a33; margin-bottom:6px;
  span{color:#e32;}
}
.file-wrap { display:flex; align-items:center; gap:10px; }
.btn-file {
  position:relative; display:inline-flex; align-items:center; justify-content:center;
  padding:10px 12px; border:1px solid #e7e7ea; border-radius:10px; background:#fff; cursor:pointer; font-weight:700;
}
.btn-file .native { position:absolute; inset:0; opacity:0; cursor:pointer; }
.file-name { font-size:14px; color:#0b1a33; }
.file-name.placeholder { color:#8b929d; }
.app-hint { margin-top:6px; font-size:12px; color:#667085; }
.app-error { margin-top:6px; font-size:12px; color:#c0392b; }
</style>
