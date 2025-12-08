<template>
  <div class="layout">
    <CHeader />

    <main class="layout-main">
      <slot />
    </main>

    <CFooter />
  </div>
</template>

<script setup lang="ts">
import CHeader from "@/components/CHeader.vue";
import CFooter from "@/components/CFooter.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-header,
.layout-footer {
  background: #f5f5f5;
  padding: 1rem;
  text-align: center;
}

.layout-main {
  background: #def7d4;
  margin-bottom: 50px;
}
</style>