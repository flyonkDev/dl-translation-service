<template>
  <div class="plan">
    <div class="plan__label">Choose duration</div>

    <div class="plan__tabs" role="tablist" aria-label="Plan duration">
      <button
        v-for="opt in options"
        :key="opt.years"
        type="button"
        class="plan__tab"
        :class="{ 'is-active': modelValue === opt.years }"
        role="tab"
        :aria-selected="modelValue === opt.years"
        @click="update(opt.years)"
      >
        <div class="plan__top">
          <span class="plan__title">{{ opt.title }}</span>
          <span v-if="opt.badge" class="plan__badge">{{ opt.badge }}</span>
        </div>
        <div class="plan__sub">{{ opt.sub }}</div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type PlanYears = 1 | 2 | 3;

const props = defineProps<{
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
.plan {
  margin-top: 18px;
}

.plan__label {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
  color: #0b1a33;
}

.plan__tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.plan__tab {
  border: 1px solid #e5e7eb;
  background: #ffffff;
  border-radius: 12px;
  padding: 10px 10px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.06s ease, border-color 0.12s ease;
}

.plan__tab:hover {
  transform: translateY(-1px);
}

.plan__tab.is-active {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.plan__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}

.plan__title {
  font-size: 13px;
  font-weight: 800;
  color: #111827;
}

.plan__sub {
  font-size: 12px;
  color: #6b7280;
}

.plan__badge {
  font-size: 11px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 999px;
  background: #dcfce7;
  color: #166534;
}

@media (max-width: 720px) {
  .plan__tabs {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
