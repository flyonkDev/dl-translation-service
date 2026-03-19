<template>
  <div class="summary">
    <div class="summary-card">
      <h3 class="summary-title">{{ t('summary.title') }}</h3>

      <p class="summary-text">
        {{ t('summary.lead') }}
      </p>

      <p class="summary-price">{{ priceDisplay }}</p>

      <p class="summary-note">
        {{ t('summary.note') }}
      </p>

      <p v-if="selectedYears != null" class="summary-note summary-note--top">
        {{ t('summary.selectedPlan', { years: selectedYears }) }}
      </p>
    </div>

    <div class="summary-card summary-card--secondary">
      <h4 class="summary-small-title">{{ t('summary.whyTitle') }}</h4>

      <ul class="summary-list">
        <li>{{ t('summary.why1') }}</li>
        <li>{{ t('summary.why2') }}</li>
        <li>{{ t('summary.why3') }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps<{
  priceDisplay: string;
  selectedYears?: number;
}>();

const { t } = useI18n();
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
  margin: 0 0 8px;
  color: $slate-900;
}

.summary-note {
  margin: 0;
  @include text-xs;
  color: $slate-500;

  &--top {
    margin-top: 8px;
  }
}

.summary-list {
  margin: 0;
  padding-left: 18px;
  @include text-sm;
  color: $slate-700;

  li + li {
    margin-top: 4px;
  }
}
</style>
