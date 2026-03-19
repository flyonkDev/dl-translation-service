<template>
  <div class="min-h-screen">
    <!-- Hero + widget -->
    <section class="section bg-mint/40">
      <div class="container grid gap-8 lg:grid-cols-2 lg:items-start">

        <div class="lg:pr-3">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
            {{ t('home.heroKicker') }}
          </p>

          <h1 class="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            {{ t('home.heroTitle') }}
          </h1>

          <p class="mb-4 max-w-xl text-sm leading-relaxed text-slate-700">
            {{ t('home.heroLead') }}
          </p>

          <ul class="mb-5 space-y-2 text-sm text-slate-900">
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.heroBullet1') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.heroBullet2') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.heroBullet3') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.heroBullet4') }}</span>
            </li>
          </ul>

          <a
            href="#pricing"
            class="link group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-sea/40 underline-offset-4"
            @click.prevent="scrollToPricing"
          >
            {{ t('home.seePricing') }}
            <span aria-hidden="true" class="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>

          <p class="mt-3 text-xs text-slate-500">
            {{ t('home.priceNote', { price: `$${fromPrice}` }) }}
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
        />
      </div>
    </section>

    <section class="section trust-block bg-white border-t border-slate-100">
      <div class="container">

        <div class="mb-8 max-w-2xl">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900">
            {{ t('home.trustTitle') }}
          </h2>

          <p class="text-sm leading-relaxed text-slate-700">
            {{ t('home.trustLead') }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">

          <!-- Problems -->
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-900">
              {{ t('home.problemsTitle') }}
            </h3>

            <ul class="space-y-2 text-sm text-slate-700">

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>{{ t('home.problem1') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>{{ t('home.problem2') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>{{ t('home.problem3') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">•</span>
                <span>{{ t('home.problem4') }}</span>
              </li>

            </ul>
          </div>

          <!-- Solution -->
          <div class="rounded-2xl border border-sea/20 bg-mint/30 p-5">
            <h3 class="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-900">
              {{ t('home.solutionTitle') }}
            </h3>

            <ul class="space-y-2 text-sm text-slate-900">

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>{{ t('home.solution1') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>{{ t('home.solution2') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>{{ t('home.solution3') }}</span>
              </li>

              <li class="flex gap-2">
                <span class="text-sea">✓</span>
                <span>{{ t('home.solution4') }}</span>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>

    <section class="section bg-slate-50">
      <div class="container grid gap-10 md:grid-cols-2">

        <!-- Who is this for -->
        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            {{ t('home.whoTitle') }}
          </h2>

          <ul class="space-y-3 text-sm text-slate-700">

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>{{ t('home.who1') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>{{ t('home.who2') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>{{ t('home.who3') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>{{ t('home.who4') }}</span>
            </li>

          </ul>

          <p class="mt-4 text-sm text-slate-500">
            {{ t('home.whoFootnote') }}
          </p>

        </div>

        <!-- What you receive -->
        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            {{ t('home.receiveTitle') }}
          </h2>

          <ul class="space-y-3 text-sm text-slate-700">

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.receive1') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.receive2') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.receive3') }}</span>
            </li>

            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>{{ t('home.receive4') }}</span>
            </li>

          </ul>

        </div>

      </div>
    </section>

    <section id="how-it-works" class="section bg-mint/15">
      <div class="container">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          {{ t('home.howTitle') }}
        </h2>

        <div class="grid gap-5 md:grid-cols-3">

          <!-- Step 1 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              1
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              {{ t('home.step1Title') }}
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              {{ t('home.step1Text') }}
            </p>
          </div>

          <!-- Step 2 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              2
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              {{ t('home.step2Title') }}
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              {{ t('home.step2Text') }}
            </p>
          </div>

          <!-- Step 3 -->
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              3
            </div>

            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              {{ t('home.step3Title') }}
            </h3>

            <p class="text-sm leading-relaxed text-slate-700">
              {{ t('home.step3Text') }}
            </p>
          </div>

        </div>

        <p class="mt-6 text-xs text-slate-400 italic">
          {{ t('home.disclaimerShort') }}
        </p>

      </div>
    </section>

    <!-- Testimonials -->
    <section class="section bg-white border-t border-slate-100">
      <div class="container">

        <div class="mb-10 text-center">
          <h2 class="mb-3 text-2xl font-extrabold text-slate-900">
            {{ t('home.testimonialsTitle') }}
          </h2>

          <p class="text-sm text-slate-600">
            {{ t('home.testimonialsLead') }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">

          <!-- Testimonial 1 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              {{ t('home.t1Text') }}
            </p>

            <div class="text-xs text-slate-500">
              {{ t('home.t1Author') }}
            </div>

          </div>

          <!-- Testimonial 2 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              {{ t('home.t2Text') }}
            </p>

            <div class="text-xs text-slate-500">
              {{ t('home.t2Author') }}
            </div>

          </div>

          <!-- Testimonial 3 -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">

            <div class="mb-2 text-sea text-sm">
              ★★★★★
            </div>

            <p class="mb-3 text-sm text-slate-700 leading-relaxed">
              {{ t('home.t3Text') }}
            </p>

            <div class="text-xs text-slate-500">
              {{ t('home.t3Author') }}
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- FAQ -->
    <section id="faq" class="section bg-slate-50">
      <div class="container">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          {{ t('home.faqTitle') }}
        </h2>

        <ul class="border-t-2 border-sea">
          <li v-for="(item, index) in faqs" :key="item.id" class="border-b border-slate-200">
            <button
              class="flex w-full items-center justify-between gap-4 py-3 text-left text-sm font-semibold text-slate-900 cursor-pointer"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${item.id}`"
              @click="toggle(index)"
            >
              <span>{{ item.question }}</span>

              <Icon
                icon="heroicons:chevron-down-20-solid"
                class="transition-transform duration-200"
                :class="{ 'rotate-180': openIndex === index }"
                width="18"
              />
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
    <section class="section bg-white border-t border-sea/10">
      <div class="container flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900">
            {{ t('home.ctaTitle') }}
          </h2>

          <p class="max-w-xl text-sm leading-relaxed text-slate-700">
            {{ t('home.ctaLead') }}
          </p>

          <p class="mt-2 text-xs text-slate-400">
            {{ t('home.ctaDisclaimer') }}
          </p>
        </div>

        <div>
          <BaseButton type="button" variant="primary" @click="scrollToPricing">
            <span class="font-bold">
              {{ t('home.ctaButton') }}
            </span>
          </BaseButton>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead, useI18n, useRuntimeConfig } from '#imports'
import { Icon } from '@iconify/vue'
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue'
import StartApplicationWidget from '~/components/widgets/StartApplicationWidget.vue'
import { useStartApplication } from '~/composables/useStartApplication'
import { useLandingFaqs } from '~/composables/useLandingFaqs'

const config = useRuntimeConfig()
const appUrl = computed(() => String(config.public.appUrl || '').trim())

const { t } = useI18n()
const { issueCountry, planYears, fromPrice, scrollToPricing } = useStartApplication(appUrl)

useHead(() => ({
  title: t('seo.title'),
  meta: [{ name: 'description', content: t('seo.description') }],
}))

const faqs = useLandingFaqs()

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
