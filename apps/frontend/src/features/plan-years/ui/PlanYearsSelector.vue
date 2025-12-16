<template>
  <div class="mt-[18px]">
    <div class="mb-2 text-[13px] font-bold text-slate-900">
      Choose duration
    </div>

    <div class="plan-tabs" role="tablist" aria-label="Plan duration">
      <button
        v-for="opt in options"
        :key="opt.years"
        type="button"
        class="plan-tab"
        :class="{ 'is-active': modelValue === opt.years }"
        role="tab"
        :aria-selected="modelValue === opt.years"
        @click="update(opt.years)"
      >
        <div class="mb-1 flex items-center justify-between gap-2">
          <span class="text-[13px] font-extrabold text-slate-900">
            {{ opt.title }}
          </span>

          <span
            v-if="opt.badge"
            class="rounded-full bg-[#dcfce7] px-1.5 py-0.5 text-[11px] font-bold text-[#166534]"
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
type PlanYears = 1 | 2 | 3;

defineProps<{
  modelValue: PlanYears;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: PlanYears): void;
}>();

const options: Array<{
  years: PlanYears;
  title: string;
  sub: string;
  badge?: string;
}> = [
  { years: 3, title: '3-year plan', sub: 'Best value', badge: 'Recommended' },
  { years: 2, title: '2-year plan', sub: 'Extended access' },
  { years: 1, title: '1-year plan', sub: 'Basic' },
];

function update(v: PlanYears) {
  emit('update:modelValue', v);
}
</script>

<style scoped lang="scss">
.plan-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.plan-tab {
  border: 1px solid rgb(var(--c-slate-200));
  background: rgb(var(--c-white));
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.06s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}

.plan-tab:hover {
  transform: translateY(-1px);
}

.plan-tab.is-active {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

@media (max-width: $bp-tablet) {
  .plan-tabs {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
