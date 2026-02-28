<template>
  <div class="summary">
    <div class="summary-card">
      <h3 class="summary-title">Your translation PDF</h3>

      <p class="summary-text">
        Multilingual driver's license translation PDF based on your real license.
        Ready to print or show on your phone.
      </p>

      <p class="summary-price">{{ priceDisplay }}</p>

      <p class="summary-note">
        One-time payment per document. Immediate digital delivery after verification
        and payment.
      </p>

      <p v-if="selectedYears != null" class="summary-note summary-note--top">
        Selected plan: <strong>{{ selectedYears }}</strong> year(s)
      </p>
    </div>

    <div class="summary-card summary-card--secondary">
      <h4 class="summary-small-title">Why travelers use it</h4>

      <ul class="summary-list">
        <li>Helps car rental agencies understand your license abroad</li>
        <li>Clear translations into multiple languages</li>
        <li>Printable PDF + digital copy</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  priceDisplay: string;
  selectedYears?: number;
}>();
</script>

<style scoped lang="scss">
.summary {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.summary-card {
  border-radius: $radius-xl;
  padding: 14px 14px 16px;
  background: $slate-50;
  border: 1px solid $slate-200;
}

.summary-card--secondary {
  background: $white;
}

.summary-title {
  margin: 0 0 6px;
  @include title-sm;
}

.summary-small-title {
  margin: 0 0 6px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
}

.summary-text {
  margin: 0 0 10px;
  @include text-sm;
  color: $slate-700;
}

.summary-price {
  font-size: 22px;
  font-weight: 800;
  color: $slate-900;
  margin: 0 0 4px;
}

.summary-note {
  margin: 0;
  @include text-xs;
  color: $slate-500;
}

.summary-note--top {
  margin-top: 10px;
}

.summary-list {
  margin: 0;
  padding-left: 18px;
  @include text-sm;
  color: $slate-700;
}
</style>
