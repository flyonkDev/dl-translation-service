<template>
  <div class="summary">
    <div class="summary-card">
      <h3 class="summary-title">{{ title }}</h3>
      <p class="summary-text">{{ description }}</p>

      <p class="summary-price">
        {{ currencySymbol }}{{ price }}
      </p>

      <p class="summary-note">{{ note }}</p>

      <p v-if="selectedYears" class="summary-note summary-note--top">
        Selected plan: <strong>{{ selectedYears }}</strong> year(s)
      </p>
    </div>

    <div class="summary-card summary-card--secondary">
      <h4 class="summary-small-title">{{ benefitsTitle }}</h4>
      <ul class="summary-list">
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

<style scoped lang="scss">
.summary {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.summary-card {
  border-radius: 16px;
  padding: 14px 14px 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
}

.summary-card--secondary {
  background: #ffffff;
}

.summary-title {
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: 700;
}

.summary-small-title {
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: 700;
}

.summary-text {
  margin: 0 0 10px;
  font-size: 13px;
  color: #4b5563;
}

.summary-price {
  font-size: 22px;
  font-weight: 800;
  color: #0b1a33;
  margin: 0 0 4px;
}

.summary-note {
  margin: 0;
  font-size: 12px;
  color: #6b7280;
}

.summary-note--top {
  margin-top: 10px;
}

.summary-list {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  color: #4b5563;
}
</style>
