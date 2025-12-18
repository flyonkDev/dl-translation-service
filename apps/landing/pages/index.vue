<template>
  <div class="min-h-screen">
    <!-- Hero + widget -->
    <section class="bg-mint/40 px-4 py-10 md:py-14">
      <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">
        <div class="lg:pr-3">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
            Driver license translation PDF
          </p>

          <h1 class="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Get your multilingual driver license translation in minutes
          </h1>

          <p class="mb-4 max-w-xl text-sm leading-relaxed text-slate-700">
            Upload your license once – we generate a clean translation PDF in several languages,
            ready to show rental agencies and authorities
            <strong class="font-semibold text-slate-900">together with your national license</strong>.
          </p>

          <ul class="mb-5 space-y-2 text-sm text-slate-900">
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Automatic text extraction and formatting</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Supports multiple languages (English, Spanish, German, French and more)</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Delivered as a printable &amp; digital PDF</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Translation document only — not a replacement for your license</span>
            </li>
          </ul>

          <a
            class="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-sea/40 underline-offset-4 hover:decoration-sea"
          >
            See pricing
            <span aria-hidden="true">→</span>
          </a>

          <p class="mt-3 text-xs text-slate-500">
            From <strong class="font-semibold text-slate-900">${{ fromPrice }}</strong> per document. No subscriptions.
          </p>
        </div>

        <StartApplicationWidget
          id="pricing"
          v-model:issueCountry="issueCountry"
          v-model:planYears="planYears"
          :app-url="appUrl"
          cta-label="Get PDF in 2 minutes"
        />
      </div>
    </section>

    <section class="bg-white px-4 py-12 md:py-14">
      <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            Who is this for?
          </h2>

          <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Travellers renting cars in non-English speaking countries</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Digital nomads who frequently cross borders</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>People with licenses in non-Latin alphabets (Cyrillic, Arabic, etc.)</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            What you receive
          </h2>

          <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>PDF with your key license details translated into several languages</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Clear layout that’s easy to show on your phone or print</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Disclaimer explaining it’s a translation, not an official document</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section id="how-it-works" class="bg-mint/15 px-4 py-12 md:py-14">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          How it works
        </h2>

        <div class="grid gap-5 md:grid-cols-3">
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              1
            </div>
            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              Upload your license
            </h3>
            <p class="text-sm leading-relaxed text-slate-700">
              Take a clear photo or scan of your driver’s license and upload it to our secure form.
            </p>
          </div>

          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              2
            </div>
            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              We parse &amp; translate
            </h3>
            <p class="text-sm leading-relaxed text-slate-700">
              Our system extracts key fields and places them into a multilingual template in several languages.
            </p>
          </div>

          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              3
            </div>
            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              Download your PDF
            </h3>
            <p class="text-sm leading-relaxed text-slate-700">
              Get a ready-to-print PDF with your details and translation blocks, to use together with your original license.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="bg-white px-4 py-12 md:py-14">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          Frequently asked questions
        </h2>

        <ul class="border-t-2 border-sea">
          <li v-for="(item, index) in faqs" :key="item.id" class="border-b border-slate-200">
            <button
              class="flex w-full items-center justify-between gap-4 py-3 text-left text-sm font-semibold text-slate-900"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${item.id}`"
              @click="toggle(index)"
            >
              <span>{{ item.question }}</span>

              <span
                class="select-none text-base transition-transform"
                :class="{ 'rotate-180': openIndex === index }"
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>

            <transition name="faq">
              <div
                v-show="openIndex === index"
                :id="`faq-panel-${item.id}`"
                role="region"
                class="overflow-hidden"
              >
                <div class="pb-4 text-sm leading-relaxed text-slate-700">
                  <p v-for="(p, i) in item.answer" :key="i" class="mb-2 last:mb-0">
                    {{ p }}
                  </p>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="bg-mint/40 px-4 py-10 md:py-12">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900">
            Ready to translate your license?
          </h2>
          <p class="max-w-xl text-sm leading-relaxed text-slate-700">
            Choose your plan and start in minutes.
          </p>
        </div>

        <BaseButton type="button" variant="primary" @click="scrollToPricing">
          <span class="font-bold">Choose plan</span>
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '#imports'
import { useRuntimeConfig } from '#imports'

import BaseButton from '@ui-kit/components/buttons/BaseButton.vue'
import StartApplicationWidget from '~/components/widgets/StartApplicationWidget.vue'
import { LANDING_FAQS } from '~/content/faqs'
import { useStartApplication } from '~/composables/useStartApplication'

const config = useRuntimeConfig()
const appUrl = computed(() => String(config.public.appUrl || '').trim())

const { issueCountry, planYears, fromPrice, scrollToPricing } = useStartApplication(appUrl)

useHead({
  title: 'Driver License Translation PDF — DL Translate',
  meta: [
    {
      name: 'description',
      content:
        'Upload your driver license and get a multilingual translation PDF in minutes. Works as a translation document together with your national license.',
    },
  ],
})

const faqs = LANDING_FAQS

const openIndex = ref<number>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<style scoped lang="scss">
.faq-enter-active,
.faq-leave-active {
  transition: all 0.15s ease;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
