import { defineStore } from 'pinia';

export type DriverDetails = {
	firstName: string;
	lastName: string;
	email: string;
	dobDay: string;
	dobMonth: string;
	dobYear: string;
	dobISO: string;
	birthPlace: string;
};

export type VerifyIdentity = {
	headshotFile: File | null;
	licenseNumber: string;
	licenseCountry: string;
	licenseFile: File | null;
	signatureDataUrl: string; // base64 PNG
	termsAccepted: boolean;
};

export const useIdlAppStore = defineStore('idlApp', {
	state: () => ({
		selectedYears: 1 as number,
		driver: null as DriverDetails | null,
		verify: null as VerifyIdentity | null,
	}),
	actions: {
		setSelectedYears(years: number) {
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

export default useIdlAppStore;