<template>
  <LayoutDefault>
    <RouterView />
    <Toaster rich-colors position="top-right" />
  </LayoutDefault>
</template>

<script setup lang="ts">
import 'vue-sonner/style.css'
import { Toaster } from 'vue-sonner'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
</script>