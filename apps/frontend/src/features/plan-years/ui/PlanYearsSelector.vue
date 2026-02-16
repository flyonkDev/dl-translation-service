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

        <div class="flex items-end justify-between gap-3">
            <span class="text-xs text-slate-500">
              {{ opt.sub }}
            </span>

            <span class="text-lg font-extrabold text-slate-900">
              {{ formatUsd(opt.priceCents) }}
            </span>
          </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlanYears } from '@/entities/driver-application'
import type { PricingPlanDTO } from '@/shared/api/reference'

defineProps<{
  modelValue: PlanYears
  options: PricingPlanDTO[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: PlanYears): void
}>()

function update(v: PlanYears) {
  emit('update:modelValue', v)
}

function formatUsd(cents: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    .format(cents / 100)
}
</script>
