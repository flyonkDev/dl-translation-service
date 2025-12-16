<template>
  <div class="apply-page min-h-screen bg-slate-200/60 px-4 pb-10 pt-6">
    <div class="apply-shell mx-auto max-w-6xl rounded-2xl bg-white p-5 shadow-soft">
      <slot name="header" />

      <main class="apply-main mt-4">
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
.apply-main {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.8fr);
  gap: 24px;
}

@media (max-width: $bp-desktop) {
  .apply-shell {
    padding: 16px 12px 20px;
  }

  .apply-main {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
