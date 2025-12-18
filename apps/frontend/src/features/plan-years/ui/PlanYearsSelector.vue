<template>
  <div class="mt-4">
    <div class="mb-2 text-xs font-bold text-slate-900">
      Choose duration
    </div>

    <div class="grid grid-cols-1 gap-2.5 md:grid-cols-3" role="tablist" aria-label="Plan duration">
      <button
        v-for="opt in options"
        :key="opt.years"
        type="button"
        class="min-h-20 rounded-xl border bg-white p-3 text-left transition hover:-translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-activeBlue/10"
        :class="modelValue === opt.years
          ? 'border-activeBlue ring-4 ring-activeBlue/10'
          : 'border-slate-200 hover:border-slate-500/40'"
        role="tab"
        :aria-selected="modelValue === opt.years"
        @click="update(opt.years)"
      >
        <div class="mb-2 flex items-center justify-between gap-2">
          <span class="min-w-0 truncate text-[13px] font-extrabold text-slate-900">
            {{ opt.title }}
          </span>

          <span
            v-if="opt.badge"
            class="shrink-0 whitespace-nowrap rounded-full bg-sea/15 px-2 py-0.5 text-[11px] font-extrabold text-sea"
          >
            {{ opt.badge }}
          </span>
        </div>

        <div class="text-xs text-slate-500">
          {{ opt.sub }}
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
export type PlanYears = 1 | 2 | 3

defineProps<{
  modelValue: PlanYears
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: PlanYears): void
}>()

const options: Array<{
  years: PlanYears
  title: string
  sub: string
  badge?: string
}> = [
  { years: 3, title: '3 years', sub: 'Best value', badge: 'Recommended' },
  { years: 2, title: '2 years', sub: 'Extended access' },
  { years: 1, title: '1 year', sub: 'Basic' },
]

function update(v: PlanYears) {
  emit('update:modelValue', v)
}
</script>
