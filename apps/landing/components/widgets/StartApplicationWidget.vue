<template>
  <div class="rounded-2xl bg-white p-5 shadow-soft">
    <div class="mb-3">
      <h2 class="text-sm font-extrabold text-slate-900">
        Start your application
      </h2>

      <p class="mt-1 text-xs leading-relaxed text-slate-500">
        You’ll get a multilingual translation PDF for your driver’s license —
        <span class="font-semibold text-slate-700">not an official IDP</span>.
        Designed to show together with your original license.
      </p>
    </div>

    <!-- Error banner (temporary / useful for MVP) -->
    <div
      v-if="countriesHasError || plansHasError"
      class="mb-4 rounded-xl bg-red-50 px-4 py-3 text-xs text-red-700"
    >
      <div class="font-bold">Failed to load data.</div>
      <div class="mt-1 opacity-80">
        Countries error: {{ countriesHasError ? 'yes' : 'no' }},
        Plans error: {{ plansHasError ? 'yes' : 'no' }}.
      </div>
      <button
        type="button"
        class="mt-2 underline"
        @click="retry"
      >
        Retry
      </button>
    </div>

    <!-- Country -->
    <div class="mb-4">
      <label class="mb-2 block text-xs font-bold text-slate-900">
        Where was your license issued?
      </label>

      <div class="relative">
        <select
          class="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 pr-10 text-[13px] text-slate-900 outline-none transition focus:border-activeBlue focus:ring-4 focus:ring-activeBlue/10 disabled:opacity-60"
          :value="issueCountry"
          :disabled="isLoading"
          @change="onCountryChange($event)"
        >
          <option disabled value="">
            {{ isLoading ? 'Loading...' : 'Select a country' }}
          </option>

          <option v-for="c in uiCountries" :key="c.code" :value="c.code">
            {{ c.code }} {{ c.name }}
          </option>
        </select>

        <span
          class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500"
          aria-hidden="true"
        >
          ⌄
        </span>
      </div>
    </div>

    <!-- Plan years -->
    <div class="mb-4">
      <div class="mb-2 text-xs font-bold text-slate-900">
        Choose duration
      </div>

      <div
        class="grid grid-cols-1 gap-2.5 md:grid-cols-3"
        role="tablist"
        aria-label="Plan duration"
      >
        <button
          v-for="p in uiPlans"
          :key="p.years"
          type="button"
          class="min-h-20 rounded-xl border bg-white p-3 text-left transition hover:-translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-activeBlue/10 disabled:opacity-60 disabled:hover:translate-y-0"
          :class="planYears === p.years
            ? 'border-activeBlue ring-4 ring-activeBlue/10'
            : 'border-slate-200 hover:border-slate-500/40'"
          role="tab"
          :aria-selected="planYears === p.years"
          :disabled="isLoading"
          @click="emit('update:planYears', p.years)"
        >
          <div class="mb-2 flex items-center justify-between gap-2">
            <span class="min-w-0 truncate text-[13px] font-extrabold text-slate-900">
              {{ p.title }}
            </span>

            <span
              v-if="p.badge"
              class="shrink-0 whitespace-nowrap rounded-full bg-sea/15 px-2 py-0.5 text-[9px] font-extrabold text-sea"
            >
              {{ p.badge }}
            </span>
          </div>

          <div class="flex items-end justify-between gap-3">
            <span class="text-xs text-slate-500">
              {{ p.sub }}
            </span>

            <span class="text-lg font-extrabold text-slate-900">
              {{ formatUsd(p.priceCents) }}
            </span>
          </div>
        </button>
      </div>
    </div>

    <div class="mb-4 rounded-xl bg-mint/30 px-4 py-3">
      <ul class="space-y-1 text-xs text-slate-700">
        <li class="flex gap-2">
          <span class="text-sea">✓</span>
          <span>Auto text extraction &amp; formatting</span>
        </li>
        <li class="flex gap-2">
          <span class="text-sea">✓</span>
          <span>Multiple languages in one PDF</span>
        </li>
        <li class="flex gap-2">
          <span class="text-sea">✓</span>
          <span>Ready to download after checkout</span>
        </li>
      </ul>
    </div>

    <a
      class="block"
      :href="appHref"
      :aria-disabled="!canStart"
      :tabindex="canStart ? 0 : -1"
      @click.prevent="onStartClick"
    >
      <BaseButton
        class="w-full"
        type="button"
        variant="primary"
        :disabled="!canStart"
      >
        <span class="font-bold">{{ ctaText }}</span>
      </BaseButton>
    </a>

    <p class="mt-2 text-xs text-slate-500">
      One-time payment. No subscriptions.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue'
import { useCountries } from '~/composables/useCountries'
import { usePricing } from '~/composables/usePricing'
import type { PlanYears } from '~/types/reference'

const props = defineProps<{
  issueCountry: string
  planYears: PlanYears
  appUrl: string
  ctaLabel?: string
}>()

const emit = defineEmits<{
  (e: 'update:issueCountry', v: string): void
  (e: 'update:planYears', v: PlanYears): void
}>()

const {
  data: countries,
  pending: countriesPending,
  error: countriesError,
  refresh: refreshCountries,
} = useCountries()

const {
  data: plans,
  pending: plansPending,
  error: plansError,
  refresh: refreshPlans,
} = usePricing()

const isLoading = computed(() => countriesPending.value || plansPending.value)

const countriesHasError = computed(() => Boolean(countriesError.value))
const plansHasError = computed(() => Boolean(plansError.value))


// Use API data directly
const uiCountries = computed(() => countries.value)
const uiPlans = computed(() => plans.value)


function retry() {
  refreshCountries()
  refreshPlans()
}

function formatUsd(cents: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    .format(cents / 100)
}

const canStart = computed(() => Boolean(props.issueCountry) && !isLoading.value)
const ctaText = computed(() => props.ctaLabel?.trim() || 'Get PDF in 2 minutes')

function normalizeBaseUrl(v: string) {
  return v.replace(/\/+$/, '')
}

const appHref = computed(() => {
  const base = normalizeBaseUrl(props.appUrl)
  const qs = new URLSearchParams({
    issueCountry: props.issueCountry,
    planYears: String(props.planYears),
  })
  return `${base}/apply?${qs.toString()}`
})

function onCountryChange(e: Event) {
  const el = e.target as HTMLSelectElement
  emit('update:issueCountry', el.value)
}

function onStartClick() {
  if (!canStart.value) return
  window.location.href = appHref.value
}
</script>
