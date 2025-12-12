<template>
  <div class="apply-page">
    <div class="apply-shell">
      <slot name="header" />

      <main class="apply-main">
        <section class="apply-form">
          <slot />
        </section>

        <aside class="apply-summary">
          <slot name="sidebar" />
        </aside>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.apply-page {
  min-height: 100vh;
  background: #f3f4f6;
  padding: 24px 16px 40px;
}

.apply-shell {
  max-width: 1120px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.16);
  padding: 20px 20px 24px;
}

.apply-main {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.8fr);
  gap: 24px;
}

.apply-summary {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 900px) {
  .apply-shell {
    padding: 16px 12px 20px;
  }
  .apply-main {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
