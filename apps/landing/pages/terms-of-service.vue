<template>
  <section class="section">
    <div class="container">
      <article class="legal-page bg-white rounded-2xl p-8 md:p-10 shadow-soft">
        <h1 class="legal-page__title text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
          Terms of Service
        </h1>
        <p class="legal-page__updated text-sm text-slate-500 mb-8">Last updated: February 2025</p>
        <section class="legal-section mb-8">
          <p class="legal-section__p text-sm leading-relaxed text-slate-700">
            This page is being updated. Please contact us at
            <a href="mailto:petr.shchepetin@gmail.com" class="legal-section__link text-sea underline hover:text-sea-300">petr.shchepetin@gmail.com</a>
            with any questions.
          </p>
        </section>
        <div class="legal-page__back mt-10 pt-6 border-t border-slate-200">
          <NuxtLink to="/" class="back-link text-sm font-semibold text-slate-700 no-underline hover:text-slate-900">← Back to home</NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service | IDP Companion',
  description: 'Terms of Service for IDP Companion - driver license translation document service.',
});
</script>
