import { z } from 'zod';

const currentYear = new Date().getFullYear();

export const applicationFormSchema = z.object({
  firstName: z.string().min(2, 'Enter your first name'),
  lastName: z.string().min(2, 'Enter your last name'),
  email: z.string().email('Invalid email'),

  phone: z.string().trim().refine((v) => v === '' || v.length >= 4, 'Enter your phone number'),

  dobDay: z.string().min(1, 'Required'),
  dobMonth: z.string().min(1, 'Required'),
  dobYear: z
    .string()
    .min(1, 'Required')
    .refine((y) => currentYear - Number(y) >= 18, 'You must be 18+'),

  licenseCountry: z.string().min(1, 'Required'),
  licenseCategories: z
    .array(z.enum(['A', 'B', 'C', 'D', 'E']))
    .min(1, 'Select at least one category'),
  sex: z
    .enum(['male', 'female', ''], { message: 'Select your sex' })
    .refine((v) => v !== '', { message: 'Select your sex' }),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;
