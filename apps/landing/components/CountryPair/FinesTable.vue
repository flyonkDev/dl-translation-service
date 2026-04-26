<template>
	<div class="cp-fines">
		<!-- Desktop / tablet: classic table -->
		<div class="cp-fines__table-wrap" role="presentation">
			<table class="cp-fines__table">
				<thead>
					<tr>
						<th>{{ colViolation }}</th>
						<th>{{ colAmount }}</th>
						<th class="cp-fines__notes-col">{{ colNote }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="f in items" :key="f.label">
						<td>
							<div class="cp-fines__violation">
								<span class="cp-fines__icon" :class="severityClass(f.severity)">
									<Icon :icon="f.icon" width="20" />
								</span>
								<span>{{ f.label }}</span>
							</div>
						</td>
						<td class="cp-fines__amount" :class="severityClass(f.severity)">{{ f.amount }}</td>
						<td class="cp-fines__notes">{{ f.note }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Mobile: card list (each violation = card) -->
		<ul class="cp-fines__cards" role="list">
			<li
				v-for="f in items"
				:key="f.label"
				class="cp-fines__card"
				:class="severityClass(f.severity)"
			>
				<div class="cp-fines__card-head">
					<span class="cp-fines__icon" :class="severityClass(f.severity)">
						<Icon :icon="f.icon" width="22" />
					</span>
					<span class="cp-fines__card-label">{{ f.label }}</span>
				</div>
				<div class="cp-fines__card-amount" :class="severityClass(f.severity)">
					{{ f.amount }}
				</div>
				<div v-if="f.note" class="cp-fines__card-note">{{ f.note }}</div>
			</li>
		</ul>

		<p v-if="caption" class="cp-fines__caption">{{ caption }}</p>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { FineRow } from '~/content/country-pairs/russia-thailand';

defineProps<{
	items: FineRow[];
	colViolation: string;
	colAmount: string;
	colNote: string;
	caption?: string;
}>();

function severityClass(severity: 'low' | 'med' | 'high'): string {
	return `is-${severity}`;
}
</script>

<style scoped lang="scss">
@use '@ui-kit/variables' as *;

.cp-fines {
	width: 100%;
}

/* === Desktop table === */

.cp-fines__table-wrap {
	display: none;
	overflow: hidden;
	border: 1px solid rgb(var(--c-slate-200));
	border-radius: $radius-2xl;
	background: white;

	@include up($bp-tablet) {
		display: block;
	}
}

.cp-fines__table {
	width: 100%;
	border-collapse: collapse;
	font-size: 13px;

	th {
		text-align: left;
		padding: 14px 18px;
		background: rgb(var(--c-slate-50));
		font-size: 11px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: rgb(var(--c-slate-500));
		border-bottom: 1px solid rgb(var(--c-slate-200));
	}

	td {
		padding: 14px 18px;
		border-bottom: 1px solid rgb(var(--c-slate-100));
		color: rgb(var(--c-slate-700));
		vertical-align: middle;
	}

	tr:last-child td {
		border-bottom: 0;
	}
}

.cp-fines__violation {
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: 600;
	color: rgb(var(--c-slate-900));
}

.cp-fines__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 8px;
	flex-shrink: 0;

	&.is-low {
		background: rgba(var(--c-mint), 0.55);
		color: rgb(var(--c-sea));
	}

	&.is-med {
		background: rgba(255, 159, 28, 0.18);
		color: #b45309;
	}

	&.is-high {
		background: rgba(220, 38, 38, 0.12);
		color: #b91c1c;
	}
}

.cp-fines__amount {
	font-weight: 800;
	white-space: nowrap;

	&.is-low {
		color: rgb(var(--c-slate-900));
	}

	&.is-med {
		color: #b45309;
	}

	&.is-high {
		color: #b91c1c;
	}
}

.cp-fines__notes {
	color: rgb(var(--c-slate-500));
	font-size: 12px;
}

/* === Mobile card list === */

.cp-fines__cards {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin: 0;
	padding: 0;
	list-style: none;

	@include up($bp-tablet) {
		display: none;
	}
}

.cp-fines__card {
	padding: 16px 18px;
	background: white;
	border: 1px solid rgb(var(--c-slate-200));
	border-left-width: 4px;
	border-radius: $radius-xl;
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 4px 16px;
	align-items: start;

	&.is-low {
		border-left-color: rgb(var(--c-sea));
	}

	&.is-med {
		border-left-color: #f59e0b;
	}

	&.is-high {
		border-left-color: #dc2626;
	}
}

.cp-fines__card-head {
	display: flex;
	align-items: center;
	gap: 12px;
	min-width: 0;
	grid-column: 1 / 2;
}

.cp-fines__card-label {
	font-size: 14px;
	font-weight: 700;
	color: rgb(var(--c-slate-900));
	line-height: 1.3;
}

.cp-fines__card-amount {
	font-size: 14px;
	font-weight: 800;
	white-space: nowrap;
	grid-column: 2 / 3;
	align-self: center;

	&.is-low {
		color: rgb(var(--c-slate-900));
	}

	&.is-med {
		color: #b45309;
	}

	&.is-high {
		color: #b91c1c;
	}
}

.cp-fines__card-note {
	font-size: 12px;
	color: rgb(var(--c-slate-500));
	line-height: 1.5;
	grid-column: 1 / 3;
	margin-top: 2px;
}

/* === Caption (both views) === */

.cp-fines__caption {
	margin-top: 12px;
	font-size: 12px;
	color: rgb(var(--c-slate-500));
}
</style>
