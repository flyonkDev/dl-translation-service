import { z } from 'zod';

const currentYear = new Date().getFullYear();

/** Zod messages follow `form.validation.*` keys in SPA locale files. */
export function buildApplicationFormSchema(t: (key: string) => string) {
	const v = (suffix: string) => t(`form.validation.${suffix}`);

	return z.object({
		firstName: z.string().min(2, v('firstName')),
		lastName: z.string().min(2, v('lastName')),
		email: z.string().email(v('email')),

		phone: z.string().trim().refine((x) => x === '' || x.length >= 4, v('phone')),

		dobDay: z.string().min(1, v('dobRequired')),
		dobMonth: z.string().min(1, v('dobRequired')),
		dobYear: z
			.string()
			.min(1, v('dobRequired'))
			.refine((y) => currentYear - Number(y) >= 18, v('dobAge')),

		licenseCountry: z.string().min(1, v('licenseCountry')),
		licenseCategories: z.array(z.enum(['A', 'B', 'C', 'D', 'E'])).min(1, v('licenseCategories')),
		sex: z
			.enum(['male', 'female', ''], { message: v('sex') })
			.refine((x) => x !== '', { message: v('sex') }),
	});
}

export type ApplicationFormValues = z.infer<ReturnType<typeof buildApplicationFormSchema>>;
