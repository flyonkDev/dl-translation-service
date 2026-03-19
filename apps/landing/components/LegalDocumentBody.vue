<script setup lang="ts">
import type { LegalBullet, LegalDoc } from '~/content/legal/types';

defineProps<{
	doc: LegalDoc;
}>();

const { t } = useI18n();
const localePath = useLocalePath();
const injectEmail = useInjectSupportEmail();
const supportEmail = useSupportEmail();

function isLinkBullet(b: LegalBullet): b is Extract<LegalBullet, { kind: 'link' }> {
	return typeof b === 'object' && b !== null && 'kind' in b && b.kind === 'link';
}
</script>

<template>
	<div class="legal-document-body">
		<section
			v-for="(sec, idx) in doc.sections"
			:key="sec.id ?? idx"
			class="legal-section mb-8"
		>
			<div
				v-if="sec.notice"
				class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3 p-3 rounded-lg bg-slate-50 border border-slate-200"
			>
				<p class="m-0">
					<strong>{{ t(sec.notice.labelKey) }}</strong>
					{{ ' ' }}{{ injectEmail(sec.notice.body) }}
				</p>
			</div>

			<h2
				v-if="sec.heading"
				class="legal-section__heading text-lg font-bold text-slate-900 mb-3"
			>
				{{ sec.heading }}
			</h2>

			<p
				v-for="(p, pi) in sec.paragraphs ?? []"
				:key="'p' + pi"
				class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3"
			>
				{{ injectEmail(p) }}
			</p>

			<p
				v-if="sec.listIntro"
				class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3"
			>
				{{ injectEmail(sec.listIntro) }}
			</p>

			<ul
				v-if="sec.bullets?.length"
				class="legal-section__list list-disc pl-5 space-y-1.5 mb-3 text-sm text-slate-700"
			>
				<li v-for="(b, j) in sec.bullets" :key="j">
					<template v-if="isLinkBullet(b)">
						{{ injectEmail(b.before)
						}}<NuxtLink
							:to="localePath(b.path)"
							class="legal-section__link text-sea underline hover:text-sea-300"
							>{{ t(b.linkLabelKey) }}</NuxtLink
						>{{ injectEmail(b.after) }}
					</template>
					<template v-else>
						{{ injectEmail(b) }}
					</template>
				</li>
			</ul>

			<p
				v-if="sec.closingWithLink"
				class="legal-section__p text-sm leading-relaxed text-slate-700"
			>
				{{ injectEmail(sec.closingWithLink.before)
				}}<NuxtLink
					:to="localePath(sec.closingWithLink.path)"
					class="legal-section__link text-sea underline hover:text-sea-300"
					>{{ t(sec.closingWithLink.linkLabelKey) }}</NuxtLink
				>{{ injectEmail(sec.closingWithLink.after) }}
			</p>

			<p
				v-for="(tp, ti) in sec.trailingParagraphs ?? []"
				:key="'tp' + ti"
				class="legal-section__p text-sm leading-relaxed text-slate-700 mb-3"
			>
				{{ injectEmail(tp) }}
			</p>

			<template v-if="sec.addressLines?.length">
				<p class="legal-section__p text-sm leading-relaxed text-slate-700 mb-2">
					<template v-for="(line, li) in sec.addressLines" :key="li">
						{{ injectEmail(line) }}<br v-if="li < sec.addressLines!.length - 1" />
					</template>
				</p>
			</template>

			<p
				v-if="sec.contactWithEmail"
				class="legal-section__p text-sm leading-relaxed text-slate-700"
			>
				{{ t(sec.contactWithEmail.beforeKey)
				}}<a
					:href="`mailto:${supportEmail}`"
					class="legal-section__link text-sea underline hover:text-sea-300"
					>{{ supportEmail }}</a
				>{{ t(sec.contactWithEmail.afterKey) }}
			</p>
		</section>
	</div>
</template>
