// entities/driver-application/model/store.ts

import { defineStore } from 'pinia';
import type { DriverDetails, VerifyIdentity, PlanYears } from './types';

export const useDriverApplicationStore = defineStore('driverApplication', {
	state: () => ({
		selectedYears: 1 as PlanYears,
		driver: null as DriverDetails | null,
		verify: null as VerifyIdentity | null,
	}),
	actions: {
		setSelectedYears(years: PlanYears) {
			this.selectedYears = years;
		},
		setDriverDetails(payload: DriverDetails) {
			this.driver = payload;
		},
		setVerifyIdentity(payload: VerifyIdentity) {
			this.verify = payload;
		},
		reset() {
			this.selectedYears = 1;
			this.driver = null;
			this.verify = null;
		},
	},
});
