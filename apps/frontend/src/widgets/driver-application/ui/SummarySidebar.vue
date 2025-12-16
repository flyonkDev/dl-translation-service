<template>
  <div class="summary flex flex-col gap-4">
    <div
      class="summary-card rounded-xl border border-slate-200 bg-slate-200/30 p-4"
    >
      <h3 class="summary-title mb-1.5 text-sm font-bold text-slate-900">
        {{ title }}
      </h3>

      <p class="summary-text mb-2.5 text-sm text-slate-700">
        {{ description }}
      </p>

      <p class="summary-price mb-1 text-2xl font-extrabold text-slate-900">
        {{ currencySymbol }}{{ price }}
      </p>

      <p class="summary-note text-xs text-slate-500">
        {{ note }}
      </p>

      <p v-if="selectedYears" class="summary-note summary-note--top mt-2.5 text-xs text-slate-500">
        Selected plan: <strong class="font-semibold text-slate-900">{{ selectedYears }}</strong> year(s)
      </p>
    </div>

    <div
      class="summary-card summary-card--secondary rounded-xl border border-slate-200 bg-white p-4"
    >
      <h4 class="summary-small-title mb-1.5 text-sm font-bold text-slate-900">
        {{ benefitsTitle }}
      </h4>

      <ul class="summary-list list-disc pl-5 text-sm text-slate-700">
        <li v-for="b in benefits" :key="b">{{ b }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
    price: number;
    currencySymbol?: string;
    note: string;
    selectedYears?: number;

    benefitsTitle?: string;
    benefits: string[];
  }>(),
  {
    currencySymbol: '$',
    benefitsTitle: 'Why travelers use it',
  },
);
</script>
