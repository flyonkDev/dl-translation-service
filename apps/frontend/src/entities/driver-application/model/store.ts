import { defineStore } from 'pinia';
import type { DriverDetails, VerifyIdentity, PlanYears } from './types';

export const useDriverApplicationStore = defineStore('driverApplication', {
	state: () => ({
		selectedYears: 1 as PlanYears,
		driver: null as DriverDetails | null,
		verify: null as VerifyIdentity | null,

		applicationId: null as string | null,
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

		setApplicationId(id: string | null) {
			this.applicationId = id;
		},

		reset() {
			this.selectedYears = 1;
			this.driver = null;
			this.verify = null;
			this.applicationId = null;
		},
	},
});
