<template>
  <div class="min-h-screen">
    <!-- Hero + widget -->
    <section class="bg-mint/40 px-4 py-10 md:py-14">
      <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">

        <div class="lg:pr-3">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
            International Driving Permit Companion Document
          </p>

          <h1 class="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Get your International Driving Permit Companion Document in minutes
          </h1>

          <p class="mb-4 max-w-xl text-sm leading-relaxed text-slate-700">
            Multilingual driving document designed for international travel. Helps car rental agencies
            and authorities understand your license abroad when used together with your original driver license.
          </p>

          <ul class="mb-5 space-y-2 text-sm text-slate-900">
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Generated from your real driver license after verification</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Formatted for international use and multilingual recognition</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Instant digital delivery, ready to print or use on your phone</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Must be used together with your original driver license</span>
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

          <!-- <p class="mt-2 text-xs text-slate-400">
            Companion document only. Not a government-issued International Driving Permit.
          </p> -->
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

    <section class="trust-block bg-white px-4 py-10 md:py-14 border-t border-slate-100">
      <div class="mx-auto max-w-6xl">

        <div class="mb-8 max-w-2xl">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900">
            Why travelers use an International Driving Permit companion document
          </h2>

          <p class="text-sm leading-relaxed text-slate-700">
            Driver licenses issued in many countries are difficult for foreign authorities and car rental agencies to read,
            especially when written in non-Latin alphabets or unfamiliar formats.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">

          <!-- Problems -->
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-900">
              Common situations abroad
            </h3>

            <ul class="space-y-2 text-sm text-slate-700">

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>Car rental staff cannot read your license language</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>Your license uses Cyrillic, Arabic, Chinese, or other scripts</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>Authorities may need a clearer interpretation of your license details</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>Explaining your license abroad can be slow and stressful</span>
              </li>

            </ul>
          </div>

          <!-- Solution -->
          <div class="rounded-2xl border border-sea/20 bg-mint/30 p-5">
            <h3 class="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-900">
              Companion document solution
            </h3>

            <ul class="space-y-2 text-sm text-slate-900">

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>Presents your license details in a clear multilingual format</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>Generated from your real license after verification</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>Easy to show digitally or as a printed document</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>Designed for international travel use together with your original license</span>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>

    <section class="bg-slate-50 px-4 py-12 md:py-14">
      <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

        <!-- Who is this for -->
        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            Who needs an International Driving Permit companion document
          </h2>

          <ul class="space-y-3 text-sm text-slate-700">

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Travelers planning to drive or rent a car abroad</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Drivers whose license is not in English or uses non-Latin alphabet</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Digital nomads, expats, and frequent international travelers</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Anyone who wants a clearer, internationally understandable license format</span>
            </li>

          </ul>

          <p class="mt-4 text-sm text-slate-500">
            Used together with your original driver license for international travel.
          </p>

        </div>

        <!-- What you receive -->
        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            What you receive
          </h2>

          <ul class="space-y-3 text-sm text-slate-700">

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>International Driving Permit companion document in digital PDF format</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Multilingual presentation of your driver license information</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Clean, professional layout ready to print or show on your phone</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Generated after verification of your original driver license</span>
            </li>

          </ul>

        </div>

      </div>
    </section>

    <section id="how-it-works" class="bg-mint/15 px-4 py-12 md:py-14">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          How it works
        </h2>

        <div class="grid gap-5 md:grid-cols-3">

          <!-- Step 1 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              1
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              Submit your driver license
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              Upload a photo or scan of your valid driver license through our secure online form.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              2
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              Verification and document generation
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              We verify your license details and generate your International Driving Permit companion document in multilingual format.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              3
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              Download and use internationally
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              Receive your companion document instantly and use it together with your original license when traveling abroad.
            </p>
          </div>

        </div>

        <p class="mt-6 text-xs text-slate-400 italic">
          *Companion document only. Not a government-issued International Driving Permit.
        </p>

      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-white px-4 py-12 md:py-16 border-t border-slate-100">
      <div class="mx-auto max-w-6xl">

        <div class="mb-10 text-center">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900">
            Trusted by international travelers
          </h2>

          <p class="text-sm text-slate-600">
            Drivers worldwide use companion documents to make their licenses easier to understand abroad.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">

          <!-- Testimonial 1 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              The process was very fast and simple. I received my companion document within minutes and used it when renting a car during my trip.
            </p>

            <div class="text-xs text-slate-500">
              Daniel M. — Germany
            </div>

          </div>

          <!-- Testimonial 2 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              My original license is not in English, so having a multilingual companion document made everything easier when traveling.
            </p>

            <div class="text-xs text-slate-500">
              Alex K. — Poland
            </div>

          </div>

          <!-- Testimonial 3 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              Clean layout, easy to download, and convenient to keep on my phone. The verification process was straightforward.
            </p>

            <div class="text-xs text-slate-500">
              Marco R. — Italy
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- FAQ -->
    <section id="faq" class="bg-slate-50 px-4 py-12 md:py-14">
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
    <section class="bg-white px-4 py-12 md:py-16 border-t border-sea/10">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900">
            Get your International Driving Permit companion document today
          </h2>

          <p class="max-w-xl text-sm leading-relaxed text-slate-700">
            Apply online in minutes and receive your multilingual companion document instantly.
            Designed for international travel use together with your original driver license.
          </p>

          <p class="mt-2 text-xs text-slate-400">
            Companion document only. Not a government-issued International Driving Permit.
          </p>
        </div>

        <div>
          <BaseButton type="button" variant="primary" @click="scrollToPricing">
            <span class="font-bold">
              Get companion document
            </span>
          </BaseButton>
        </div>

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
