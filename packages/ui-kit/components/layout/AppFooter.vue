<template>
	<footer class="footer">
		<div class="footer-inner container">
			<div class="columns grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-5">
				<div class="col">
					<h5 class="col-title text-sm font-bold mb-2">{{ popularTitle }}</h5>
					<ul class="list">
						<li class="list-item flex items-center gap-2 text-sm mb-1.5">
							<span class="fi fi-us mr-2" aria-hidden="true" />
							<span>USA</span>
						</li>
						<li class="list-item flex items-center gap-2 text-sm mb-1.5">
							<span class="fi fi-ca mr-2" aria-hidden="true" />
							<span>Canada</span>
						</li>
						<li class="list-item flex items-center gap-2 text-sm mb-1.5">
							<span class="fi fi-id mr-2" aria-hidden="true" />
							<span>Indonesia</span>
						</li>
						<li class="list-item flex items-center gap-2 text-sm mb-1.5">
							<span class="fi fi-ph mr-2" aria-hidden="true" />
							<span>Philippines</span>
						</li>
						<li class="list-item flex items-center gap-2 text-sm mb-1.5">
							<span class="fi fi-au mr-2" aria-hidden="true" />
							<span>Australia</span>
						</li>
						<li class="list-item flex items-center gap-2 text-sm mb-1.5">
							<span class="fi fi-pt mr-2" aria-hidden="true" />
							<span>Portugal</span>
						</li>
					</ul>
				</div>

				<div class="col">
					<h5 class="col-title text-sm font-bold mb-2">{{ productTitle }}</h5>
					<ul class="list">
						<li class="list-link text-sm mb-1.5"><a :href="links.pricing" class="link-underline">{{ linkPricing }}</a></li>
						<li class="list-link text-sm mb-1.5">
							<a :href="links.howItWorks" class="link-underline">{{ linkHowItWorks }}</a>
						</li>
						<li class="list-link text-sm mb-1.5"><a :href="links.faq" class="link-underline">{{ linkFaq }}</a></li>
						<li v-if="links.idpValidity" class="list-link text-sm mb-1.5">
							<a :href="links.idpValidity" class="link-underline">{{ linkIdpValidity }}</a>
						</li>
						<li v-if="links.samplePdf" class="list-link text-sm mb-1.5">
							<a :href="links.samplePdf" class="link-underline">{{ linkSamplePdf }}</a>
						</li>
					</ul>
				</div>

				<div class="col">
					<h5 class="col-title text-sm font-bold mb-2">{{ companyTitle }}</h5>
					<ul class="list">
						<li class="list-link text-sm mb-1.5">
							<a :href="links.about" class="link-underline">{{ linkAbout }}</a>
						</li>
						<li class="list-link text-sm mb-1.5">
							<a :href="links.security" class="link-underline">{{ linkSecurity }}</a>
						</li>
						<li class="list-link text-sm mb-1.5">
							<a :href="links.privacy" class="link-underline">{{ linkPrivacy }}</a>
						</li>
						<li class="list-link text-sm mb-1.5">
							<a :href="links.terms" class="link-underline">{{ linkTerms }}</a>
						</li>
						<li class="list-link text-sm mb-1.5">
							<a :href="links.refund" class="link-underline">{{ linkRefund }}</a>
						</li>
					</ul>
				</div>

				<div class="col">
					<h5 class="col-title text-sm font-bold mb-2">{{ supportTitle }}</h5>
					<ul class="list">
						<li class="list-link text-sm mb-1.5">
							<a :href="`mailto:${supportEmail}`" class="link-underline">{{ supportEmail }}</a>
						</li>
						<li class="list-link text-sm mb-1.5">
							<a :href="links.contact" class="link-underline">{{ linkContact }}</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="bottom flex items-center justify-between gap-3 pt-3">
				<div class="reserved text-xs">
					<div v-if="disclaimerLine" class="mb-1">
						{{ disclaimerLine }}
					</div>
					<div class="flex flex-wrap items-center gap-x-3 gap-y-1">
						<span>{{ copyrightLine }}</span>
						<a
							v-if="links.sitemap"
							:href="links.sitemap"
							class="bottom-sitemap link-underline"
						>{{ linkSitemap }}</a>
					</div>
				</div>

				<div class="payments flex items-center gap-2">
					<Icon class="payment-icon" icon="logos:visa" width="26" height="26" />
					<Icon class="payment-icon" icon="logos:mastercard" width="26" height="26" />
					<Icon class="payment-icon" icon="logos:paypal" width="26" height="26" />
					<Icon class="payment-icon" icon="logos:discover" width="26" height="26" />
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { Icon } from '@iconify/vue';

	const props = withDefaults(
	  defineProps<{
	    brandName?: string;
	    supportEmail?: string;
	    year?: number;
	    popularTitle?: string;
	    productTitle?: string;
	    companyTitle?: string;
	    supportTitle?: string;
	    disclaimerLine?: string;
	    linkPricing?: string;
	    linkHowItWorks?: string;
	    linkFaq?: string;
	    linkAbout?: string;
	    linkPrivacy?: string;
	    linkTerms?: string;
	    linkRefund?: string;
	    linkContact?: string;
	    linkSecurity?: string;
	    linkIdpValidity?: string;
	    linkSamplePdf?: string;
	    linkSitemap?: string;
	    /** Full copyright line, e.g. "© 2025 Name. All rights reserved." */
	    copyrightLine?: string;

	    links?: Partial<{
	      pricing: string;
	      howItWorks: string;
	      faq: string;

	      about: string;
	      privacy: string;
	      terms: string;
	      refund: string;
	      security: string;

	      contact: string;

	      idpValidity: string;
	      samplePdf: string;
	      sitemap: string;
	    }>;
	  }>(),
	  {
	    brandName: 'IDP Companion',
	    supportEmail: 'support@idpcompanion.com',
	    year: new Date().getFullYear(),
	    popularTitle: 'Popular destinations',
	    productTitle: 'Product',
	    companyTitle: 'Company',
	    supportTitle: 'Support',
	    disclaimerLine: '',
	    linkPricing: 'Pricing',
	    linkHowItWorks: 'How it works',
	    linkFaq: 'FAQ',
	    linkAbout: 'About',
	    linkPrivacy: 'Privacy Policy',
	    linkTerms: 'Terms & Conditions',
	    linkRefund: 'Refund Policy',
	    linkContact: 'Contact',
	    linkSecurity: 'Security & Payments',
	    linkIdpValidity: 'IDP validity',
	    linkSamplePdf: 'Sample PDF',
	    linkSitemap: 'Sitemap',
	    copyrightLine: '',
	    links: () => ({}),
	  },
	);

	const copyrightLine = computed(() => {
		if (props.copyrightLine?.trim()) return props.copyrightLine;
		return `© ${props.year} ${props.brandName}. All rights reserved.`;
	});

	const links = computed(() => ({
	  pricing: props.links?.pricing ?? '#pricing',
	  howItWorks: props.links?.howItWorks ?? '#how-it-works',
	  faq: props.links?.faq ?? '#faq',

	  about: props.links?.about ?? '#',
	  privacy: props.links?.privacy ?? '#',
	  terms: props.links?.terms ?? '#',
	  refund: props.links?.refund ?? '#',
	  security: props.links?.security ?? '#',

	  contact: props.links?.contact ?? '#',

	  // Optional links — only rendered when consumer passes them in (no '#' fallback)
	  idpValidity: props.links?.idpValidity ?? '',
	  sitemap: props.links?.sitemap ?? '',
	}));
</script>

<style scoped>
	.footer {
	  border-top: 1px solid rgb(var(--c-slate-200) / 1);
	  background: rgb(var(--c-mint) / 0.22);
	  padding: 24px 16px 20px;
	}

	.footer-inner {
	  max-width: 1280px;
	  margin: 0 auto;
	}

	.col-title {
	  color: rgb(var(--c-slate-900) / 1);
	}

	.list {
	  list-style: none;
	  padding: 0;
	  margin: 0;
	}

	.list-item {
	  color: rgb(var(--c-slate-700) / 1);
	}

	.list-link a {
	  color: rgb(var(--c-slate-700) / 1);
	  text-decoration: none;
	}

  .list-link:hover {
    color: rgb(var(--c-slate-900) / 1);
  }

	.list-link a:hover {
	  color: rgb(var(--c-slate-900) / 1);
	}

	.bottom {
	  border-top: 1px solid rgb(var(--c-slate-200) / 1);
	  margin-top: 18px;
	}

	.reserved {
	  color: rgb(var(--c-slate-500) / 1);
	}

	.bottom-sitemap {
	  color: rgb(var(--c-slate-700) / 1);
	  text-decoration: none;
	}

	.bottom-sitemap:hover {
	  color: rgb(var(--c-slate-900) / 1);
	}

	.payment-icon {
	  display: inline-block;
	}



	@media (max-width: 600px) {
	  .bottom {
	    flex-direction: column;
	    align-items: flex-start;
	  }
	}
</style>
