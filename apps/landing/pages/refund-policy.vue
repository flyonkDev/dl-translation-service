<template>
  <section class="section">
    <div class="container">
      <article class="legal-page bg-white rounded-2xl p-8 md:p-10 shadow-soft">
        <h1 class="legal-page__title text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
          Refund Policy
        </h1>

        <p class="legal-page__updated text-sm text-slate-500 mb-8">
          Last updated: {{ lastUpdated }}
        </p>

        <section class="legal-section mb-8">
          <h2 class="legal-section__heading text-lg font-bold text-slate-900 mb-3">Overview</h2>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          IDP Companion provides a digital driver license translation document in PDF format.
          This is not a government-issued International Driving Permit (IDP). Our document is
          designed as a translation companion to help car rental agencies and others understand
          your license when traveling abroad.
        </p>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          We stand behind our product. If we fail to deliver or if the document is not accepted
          by a car rental company in the circumstances described below, we will refund you.
          All refund requests must be submitted with supporting documentation where required.
        </p>
      </section>

      <section class="legal-section mb-8">
        <h2 class="legal-section__heading text-lg font-bold text-slate-900 mb-3">1. Car Rental Refusal — Full Refund</h2>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          If a car rental company refuses to accept your IDP Companion document when you present
          it together with your original driver license, we will issue a full refund.
        </p>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-2"><strong>Requirements:</strong></p>
        <ul class="legal-section__list list-disc pl-5 space-y-1.5 mb-3 text-sm text-slate-700">
          <li>Written proof of refusal from the rental company (e.g. email, letter, or signed statement on company letterhead)</li>
          <li>The refusal must have occurred within the validity period of your purchased plan</li>
          <li>You must have presented both the IDP Companion document and your original driver license</li>
        </ul>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          Contact us at <a :href="`mailto:${supportEmail}`" class="legal-section__link text-sea underline hover:text-sea-300">{{ supportEmail }}</a> with your order
          details and supporting documents. Refunds are processed within 5–10 business days.
        </p>
      </section>

      <section class="legal-section mb-8">
        <h2 class="legal-section__heading text-lg font-bold text-slate-900 mb-3">2. Document Not Available for Download — Full Refund</h2>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          Your document is available for download on our website immediately after payment.
          There is no physical delivery or email delivery at this stage — you download the PDF
          directly from the site.
        </p>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          If your PDF document is not available for download within 2 hours of completing
          payment (due to our error), you are entitled to a full refund. This applies when
          your application included complete and approved documents and information.
        </p>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          Contact us at <a :href="`mailto:${supportEmail}`" class="legal-section__link text-sea underline hover:text-sea-300">{{ supportEmail }}</a> with your
          order details. We will investigate and refund you in full if the delay was on our side.
        </p>
      </section>

      <section class="legal-section mb-8">
        <h2 class="legal-section__heading text-lg font-bold text-slate-900 mb-3">3. Change of Mind — 12-Hour Window</h2>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          If you change your mind within twelve (12) hours of completing your purchase, you
          may request a full refund.
        </p>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-2">
          You must contact us at <a :href="`mailto:${supportEmail}`" class="legal-section__link text-sea underline hover:text-sea-300">{{ supportEmail }}</a>
          within this window. Include in your email:
        </p>
        <ul class="legal-section__list list-disc pl-5 space-y-1.5 mb-3 text-sm text-slate-700">
          <li>Your order ID or the email used at purchase</li>
          <li>A brief explanation of why you are requesting a refund</li>
        </ul>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          Refund requests for change of mind after 12 hours are not guaranteed and will be
          considered on a case-by-case basis.
        </p>
      </section>

      <section class="legal-section mb-8">
        <h2 class="legal-section__heading text-lg font-bold text-slate-900 mb-3">4. What We Do Not Refund</h2>
        <ul class="legal-section__list list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>
            <strong>Law enforcement or police acceptance</strong> — We do not guarantee that
            our document will be accepted by police or other authorities. Our document is a
            translation companion for car rental and similar purposes. Refunds are not granted
            solely on the basis of law enforcement refusal.
          </li>
          <li>
            <strong>Refusal without documentation</strong> — Refund requests for car rental
            refusal must include written proof from the rental company. Requests without
            supporting documentation cannot be processed.
          </li>
          <li>
            <strong>Lost or misplaced documents</strong> — If you lose your PDF, contact us
            and we can help you retrieve it. This is not a refund scenario.
          </li>
        </ul>
      </section>

      <section class="legal-section mb-8">
        <h2 class="legal-section__heading text-lg font-bold text-slate-900 mb-3">5. How to Request a Refund</h2>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-2">Send an email to <a :href="`mailto:${supportEmail}`" class="legal-section__link text-sea underline hover:text-sea-300">{{ supportEmail }}</a> with:</p>
        <ul class="legal-section__list list-disc pl-5 space-y-1.5 mb-3 text-sm text-slate-700">
          <li>Your order ID or the email used at purchase</li>
          <li>Reason for the refund request</li>
          <li>Supporting documents (for car rental refusal: proof from the rental company)</li>
        </ul>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3">
          We will respond within 2 business days and process eligible refunds within 5–10
          business days. Refunds are issued to the original payment method.
        </p>
      </section>

      <section class="legal-section mb-8">
        <h2 class="legal-section__heading text-lg font-bold text-slate-900 mb-3">6. Contact</h2>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-2">
          IDP Companion is operated by SKYFOM (Pty) Ltd, 301 Long Street, Cape Town, South Africa.
        </p>
        <p class="legal-section__p text-sm leading-relaxed text-slate-700">
          For refund requests or questions about this policy, contact us at
          <a :href="`mailto:${supportEmail}`" class="legal-section__link text-sea underline hover:text-sea-300">{{ supportEmail }}</a>.
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
const supportEmail = 'petr.shchepetin@gmail.com';
const lastUpdated = 'February 2025';

useSeoMeta({
  title: 'Refund Policy | IDP Companion',
  description:
    'IDP Companion refund policy. Full refund for car rental refusal with proof, download availability issues, or change of mind within 12 hours. Fair and transparent.',
  ogTitle: 'Refund Policy | IDP Companion',
  ogDescription:
    'IDP Companion refund policy. Full refund for car rental refusal with proof, download issues, or change of mind within 12 hours.',
});

const config = useRuntimeConfig();
const canonicalUrl = config.public.siteUrl
  ? `${config.public.siteUrl.replace(/\/$/, '')}/refund-policy`
  : null;

useHead({
  link: canonicalUrl ? [{ rel: 'canonical', href: canonicalUrl }] : [],
});
</script>

