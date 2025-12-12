<template>
  <header class="apply-progress">
    <div class="apply-progress__steps">
      <div
        class="apply-progress__step"
        :class="{ 'is-active': currentStep === 1, 'is-done': currentStep > 1 }"
      >
        <span class="index">01</span>
        <span>{{ step1Label }}</span>
      </div>

      <div
        class="apply-progress__step"
        :class="{ 'is-active': currentStep === 2 }"
      >
        <span class="index">02</span>
        <span>{{ step2Label }}</span>
      </div>
    </div>

    <div class="apply-progress__bar">
      <div
        class="apply-progress__bar-fill"
        :style="{ width: currentStep === 1 ? '50%' : '100%' }"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
type StepId = 1 | 2;

withDefaults(
  defineProps<{
    currentStep: StepId;
    step1Label?: string;
    step2Label?: string;
  }>(),
  {
    step1Label: 'Information & documents',
    step2Label: 'Payment',
  },
);
</script>

<style scoped lang="scss">
.apply-progress {
  margin-bottom: 16px;
}

.apply-progress__steps {
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
}

.apply-progress__step {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;

  .index {
    width: 24px;
    height: 24px;
    border-radius: 999px;
    border: 1px solid #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
  }

  &.is-active {
    color: #111827;

    .index {
      border-color: #2563eb;
      background: #2563eb;
      color: #ffffff;
    }
  }

  &.is-done {
    color: #16a34a;

    .index {
      border-color: #16a34a;
      background: #bbf7d0;
    }
  }
}

.apply-progress__bar {
  height: 4px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
}

.apply-progress__bar-fill {
  height: 100%;
  background: #2563eb;
  width: 50%;
}
</style>
