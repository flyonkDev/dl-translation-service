<template>
  <div class="app-field flex flex-col" ref="root">
    <label
      v-if="label"
      class="app-label mb-1.5 inline-flex items-center gap-1 text-sm font-bold text-slate-900 pl-2"
      :for="id"
    >
      <span>{{ label }}</span>
      <span v-if="required" class="text-red-600" aria-hidden="true">*</span>
    </label>

    <!-- Trigger -->
    <button
      :id="id"
      type="button"
      class="app-select-trigger w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-activeBlue focus:ring-4 focus:ring-activeBlue/15"
      :class="{ 'is-open': isOpen, 'is-error': !!error, 'is-disabled': disabled }"
      :disabled="disabled"
      :aria-invalid="!!error || undefined"
      :aria-describedby="error ? `${id}-error` : undefined"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggle"
      @keydown="onTriggerKeydown"
    >
      <span class="trigger-inner flex items-center gap-2 min-w-0">
        <span
          v-if="selected?.flagCode"
          class="flag fi"
          :class="flagClass(selected.flagCode)"
          aria-hidden="true"
        />
        <span class="trigger-label truncate">
          {{ selected?.label ?? placeholder ?? 'Select…' }}
        </span>
      </span>

      <span class="trigger-right flex items-center gap-2">
        <Icon
          v-if="clearable && modelValue"
          class="clear-icn"
          icon="mdi:close"
          @click.stop="clear"
        />
        <Icon class="chev-icn" icon="mdi:chevron-down" />
      </span>
    </button>

    <div
      v-if="isOpen"
      class="dropdown dropdown-panel rounded-xl border border-slate-200 bg-white shadow-soft"
    >
      <div v-if="searchable" class="dropdown-search p-2">
        <div class="search-wrap flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-2">
          <Icon class="search-icn text-slate-400" icon="mdi:magnify" />
          <input
            ref="searchInput"
            v-model="query"
            class="search-input w-full text-sm text-slate-900 outline-none"
            type="text"
            autocomplete="off"
            :placeholder="searchPlaceholder"
            @keydown="onSearchKeydown"
          />
        </div>
      </div>

      <ul
        class="options dropdown-list"
        role="listbox"
        :aria-activedescendant="activeId"
      >
        <li
          v-for="(opt, idx) in filteredOptions"
          :key="opt.value"
          :id="optionId(opt.value)"
          class="option px-3 py-2"
          :class="{
            'is-active': idx === activeIndex,
            'is-selected': opt.value === modelValue,
          }"
          role="option"
          :aria-selected="opt.value === modelValue"
          @mouseenter="activeIndex = idx"
          @mousedown.prevent="select(opt)"
        >
          <span class="flex items-center gap-2 min-w-0">
            <span
              v-if="opt.flagCode"
              class="flag fi"
              :class="flagClass(opt.flagCode)"
              aria-hidden="true"
            />
            <span class="truncate">{{ opt.label }}</span>
          </span>
        </li>

        <li v-if="filteredOptions.length === 0" class="empty px-3 py-3 text-sm text-slate-500">
          No matches
        </li>
      </ul>
    </div>

    <p v-if="error" class="app-error mt-1.5 text-xs text-[#c0392b]" :id="`${id}-error`">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

export type CountrySelectOption = {
  value: string
  label: string
  flagCode?: string
}

const props = withDefaults(
  defineProps<{
    id?: string
    label?: string
    modelValue?: string
    options: CountrySelectOption[]
    placeholder?: string
    error?: string
    required?: boolean
    disabled?: boolean
    searchable?: boolean
    searchPlaceholder?: string
    clearable?: boolean
  }>(),
  {
    searchable: true,
    searchPlaceholder: 'Search country…',
    clearable: false,
    disabled: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

const root = ref<HTMLElement | null>(null)
const searchInput = ref<HTMLInputElement | null>(null)

const isOpen = ref(false)
const query = ref('')
const activeIndex = ref(0)

const selected = computed(() => {
  if (!props.modelValue) return undefined
  return props.options.find((o) => o.value === props.modelValue)
})

const filteredOptions = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return props.options
  return props.options.filter((o) => {
    return (
      o.label.toLowerCase().includes(q) ||
      o.value.toLowerCase().includes(q)
    )
  })
})

const activeId = computed(() => {
  const opt = filteredOptions.value[activeIndex.value]
  return opt ? optionId(opt.value) : undefined
})

watch(
  () => filteredOptions.value.length,
  (len) => {
    if (len === 0) activeIndex.value = 0
    else if (activeIndex.value > len - 1) activeIndex.value = 0
  }
)

watch(isOpen, (v) => {
  if (!v) return
  nextTick(() => {
    if (props.searchable) searchInput.value?.focus()
  })
})

function flagClass(code: string) {
  return `fi-${code.toLowerCase()}`
}

function optionId(v: string) {
  return `${props.id ?? 'country'}-opt-${v}`
}

function open() {
  if (props.disabled) return
  isOpen.value = true
  query.value = ''

  const idx = filteredOptions.value.findIndex((o) => o.value === props.modelValue)
  activeIndex.value = idx >= 0 ? idx : 0
}

function close() {
  isOpen.value = false
  query.value = ''
  activeIndex.value = 0
}

function toggle() {
  if (isOpen.value) close()
  else open()
}

function select(opt: CountrySelectOption) {
  emit('update:modelValue', opt.value)
  close()
}

function clear() {
  emit('update:modelValue', '')
  close()
}

function moveActive(delta: number) {
  const len = filteredOptions.value.length
  if (len === 0) return
  const next = (activeIndex.value + delta + len) % len
  activeIndex.value = next
}

function onTriggerKeydown(e: KeyboardEvent) {
  if (props.disabled) return

  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    toggle()
    return
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (!isOpen.value) open()
    else moveActive(1)
    return
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (!isOpen.value) open()
    else moveActive(-1)
    return
  }

  if (e.key === 'Escape') {
    if (isOpen.value) {
      e.preventDefault()
      close()
    }
  }
}

function onSearchKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    moveActive(1)
    return
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault()
    moveActive(-1)
    return
  }

  if (e.key === 'Enter') {
    e.preventDefault()
    const opt = filteredOptions.value[activeIndex.value]
    if (opt) select(opt)
    return
  }

  if (e.key === 'Escape') {
    e.preventDefault()
    close()
  }
}

function onDocumentClick(e: MouseEvent) {
  const el = e.target as Node | null
  if (!root.value || !el) return
  if (!root.value.contains(el)) close()
}

onMounted(() => {
  document.addEventListener('mousedown', onDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocumentClick)
})
</script>

<style scoped lang="scss">
.app-field {
  position: relative;
}

.app-select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.is-error {
    border-color: #c0392b;
  }

  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.flag {
  width: 18px;
  height: 14px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.08);
}

.dropdown-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 8px);
  z-index: 50;
  background: $white;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
}

.dropdown-list {
  max-height: 260px;
  overflow: auto;
  padding: 6px 0;
}

.option {
  cursor: pointer;
  user-select: none;

  &:hover {
    background: rgba(2, 132, 199, 0.06);
  }

  &.is-active {
    background: rgba(2, 132, 199, 0.10);
  }

  &.is-selected {
    font-weight: 800;
  }
}

.chev-icn {
  font-size: 18px;
  color: rgba(15, 23, 42, 0.55);
}

.clear-icn {
  font-size: 16px;
  color: rgba(15, 23, 42, 0.45);

  &:hover {
    color: rgba(15, 23, 42, 0.75);
  }
}

.search-icn {
  font-size: 18px;
}
</style>
