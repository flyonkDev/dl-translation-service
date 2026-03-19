<template>
  <div class="rounded-2xl bg-white p-5 shadow-soft">
    <div class="mb-3">
      <h2 class="text-lg font-extrabold text-slate-900">
        {{ t('widget.title') }}
      </h2>

      <p class="mt-1 text-xs leading-relaxed text-slate-500">
        {{ t('widget.introBefore') }}
        <span class="font-semibold text-slate-700">{{ t('widget.introNotGov') }}</span>{{ t('widget.introAfter') }}
      </p>
    </div>

    <!-- Error banner (temporary / useful for MVP) -->
    <div
      v-if="countriesHasError || plansHasError"
      class="mb-4 rounded-xl bg-red-50 px-4 py-3 text-xs text-red-700"
    >
      <div class="font-bold">{{ t('widget.loadErrorTitle') }}</div>
      <div class="mt-1 opacity-80">
        {{ t('widget.loadErrorCountries') }} {{ countriesHasError ? t('widget.yes') : t('widget.no') }},
        {{ t('widget.loadErrorPlans') }} {{ plansHasError ? t('widget.yes') : t('widget.no') }}.
      </div>
      <button
        type="button"
        class="mt-2 underline"
        @click="retry"
      >
        {{ t('widget.retry') }}
      </button>
    </div>

    <!-- Country -->
    <div class="mb-4">
      <BaseCountrySelect
        id="issueCountry"
        :label="t('widget.countryLabel')"
        required
        :placeholder="isLoading ? t('widget.countryLoading') : t('widget.countryPlaceholder')"
        :model-value="issueCountry"
        :disabled="isLoading"
        :options="uiCountryOptions"
        searchable
        @update:model-value="emit('update:issueCountry', $event)"
      />
    </div>

    <!-- Plan years -->
    <div class="mb-4">
      <div class="mb-2 text-xs font-bold text-slate-900">
        {{ t('widget.durationLabel') }}
      </div>

      <div
        class="grid grid-cols-1 gap-2.5 md:grid-cols-3"
        role="tablist"
        :aria-label="t('widget.durationAria')"
      >
        <button
          v-for="p in uiPlans"
          :key="p.years"
          type="button"
          class="min-h-20 rounded-xl border bg-white p-3 text-left transition hover:-translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-activeBlue/10 disabled:opacity-60 disabled:hover:translate-y-0 cursor-pointer"
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
          <span>{{ t('widget.benefit1') }}</span>
        </li>
        <li class="flex gap-2">
          <span class="text-sea">✓</span>
          <span>{{ t('widget.benefit2') }}</span>
        </li>
        <li class="flex gap-2">
          <span class="text-sea">✓</span>
          <span>{{ t('widget.benefit3') }}</span>
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
      {{ t('widget.paymentNote') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '#imports'
import { LOCALE_QUERY_PARAM } from '@i18n'
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue'
import BaseCountrySelect, { type CountrySelectOption } from '@ui-kit/components/inputs/BaseCountrySelect.vue'
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

const { locale, t } = useI18n()

const isLoading = computed(() => countriesPending.value || plansPending.value)

const countriesHasError = computed(() => Boolean(countriesError.value))
const plansHasError = computed(() => Boolean(plansError.value))

const uiPlans = computed(() => {
  void locale.value;
  return plans.value.map((p) => ({
    ...p,
    title: t(`widget.plan${p.years}Title`),
    sub: t(`widget.plan${p.years}Sub`),
    badge: p.years === 3 ? t('widget.plan3Badge') : p.badge,
  }));
})

const uiCountryOptions = computed<CountrySelectOption[]>(() => {
  return countries.value.map((c) => ({
    value: c.code,
    label: c.name,
    flagCode: c.code,
  }))
})

function retry() {
  refreshCountries()
  refreshPlans()
}

function formatUsd(cents: number) {
  const tag = locale.value === 'en' ? 'en-US' : locale.value === 'ru' ? 'ru-RU' : 'es';
  return new Intl.NumberFormat(tag, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

const canStart = computed(() => Boolean(props.issueCountry) && !isLoading.value)
const ctaText = computed(() => {
  void locale.value
  return props.ctaLabel?.trim() || t('widget.ctaDefault')
})

function normalizeBaseUrl(v: string) {
  return v.replace(/\/+$/, '')
}

const appHref = computed(() => {
  const base = normalizeBaseUrl(props.appUrl)
  const qs = new URLSearchParams({
    issueCountry: props.issueCountry,
    planYears: String(props.planYears),
    [LOCALE_QUERY_PARAM]: locale.value,
  })
  return `${base}/apply?${qs.toString()}`
})

function onStartClick() {
  if (!canStart.value) return
  window.location.href = appHref.value
}
</script>
