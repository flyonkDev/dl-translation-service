<template>
  <header class="apply-progress mb-4">
    <div class="apply-progress__steps mb-2 flex gap-4">
      <div
        class="apply-progress__step flex w-1/2 items-center gap-2 text-sm text-slate-500"
        :class="{ 'is-active': currentStep === 1, 'is-done': currentStep > 1 }"
      >
        <span
          class="index inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-[11px] font-bold text-slate-500"
        >
          01
        </span>
        <span>{{ step1Label }}</span>
      </div>

      <div
        class="apply-progress__step flex w-1/2 items-center gap-2 text-sm text-slate-500"
        :class="{ 'is-active': currentStep === 2 }"
      >
        <span
          class="index inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-[11px] font-bold text-slate-500"
        >
          02
        </span>
        <span>{{ step2Label }}</span>
      </div>
    </div>

    <div class="apply-progress__bar h-1 overflow-hidden rounded-full bg-slate-200">
      <div
        class="apply-progress__bar-fill h-full bg-activeBlue transition-[width] duration-200"
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
.apply-progress__step.is-active {
  color: rgb(var(--c-slate-900));
}

.apply-progress__step.is-active .index {
  border-color: rgb(var(--c-active-blue));
  background: rgb(var(--c-active-blue));
  color: rgb(var(--c-white));
}

.apply-progress__step.is-done {
  color: #16a34a;
}

.apply-progress__step.is-done .index {
  border-color: #16a34a;
  background: #bbf7d0;
  color: rgb(var(--c-slate-900));
}
</style>
