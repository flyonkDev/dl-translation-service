<template>
  <div class="apply-page">
    <div class="apply-shell">
      <slot name="header" />

      <main class="apply-main">
        <section class="apply-form">
          <slot />
        </section>

        <aside class="apply-summary flex flex-col gap-4">
          <slot name="sidebar" />
        </aside>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.apply-page {
  background: $slate-100;
  padding: 24px 16px 40px;
  min-height: calc(100vh - 350px);
}

.apply-shell {
  max-width: 1280px;
  margin: 0 auto;
  background: $white;
  border-radius: $radius-2xl;
  box-shadow: $shadow-soft;
  padding: 20px 20px 24px;
}

.apply-main {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.8fr);
  gap: 24px;
  margin-top: 16px;
}

@media (max-width: calc(#{$bp-desktop} - 1px)) {
  .apply-shell {
    padding: 16px 12px 20px;
  }

  .apply-main {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
