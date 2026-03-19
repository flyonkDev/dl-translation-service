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
					</ul>
				</div>

				<div class="col">
					<h5 class="col-title text-sm font-bold mb-2">{{ companyTitle }}</h5>
					<ul class="list">
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
					{{ copyrightLine }}
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
	    linkPricing?: string;
	    linkHowItWorks?: string;
	    linkFaq?: string;
	    linkPrivacy?: string;
	    linkTerms?: string;
	    linkRefund?: string;
	    linkContact?: string;
	    /** Full copyright line, e.g. "© 2025 Name. All rights reserved." */
	    copyrightLine?: string;

	    links?: Partial<{
	      pricing: string;
	      howItWorks: string;
	      faq: string;

	      privacy: string;
	      terms: string;
	      refund: string;

	      contact: string;
	    }>;
	  }>(),
	  {
	    brandName: 'IDP Companion',
	    supportEmail: 'petr.shchepetin@gmail.com',
	    year: new Date().getFullYear(),
	    popularTitle: 'Popular destinations',
	    productTitle: 'Product',
	    companyTitle: 'Company',
	    supportTitle: 'Support',
	    linkPricing: 'Pricing',
	    linkHowItWorks: 'How it works',
	    linkFaq: 'FAQ',
	    linkPrivacy: 'Privacy Policy',
	    linkTerms: 'Terms & Conditions',
	    linkRefund: 'Refund Policy',
	    linkContact: 'Contact form',
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

	  privacy: props.links?.privacy ?? '#',
	  terms: props.links?.terms ?? '#',
	  refund: props.links?.refund ?? '#',

	  contact: props.links?.contact ?? '#',
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
