import { z } from 'zod';

import { applicationFormMessages } from '@/shared/config/applicationFormMessages';

const currentYear = new Date().getFullYear();
const msg = applicationFormMessages.driver;

export const applicationFormSchema = z.object({
  firstName: z.string().min(2, msg.firstName),
  lastName: z.string().min(2, msg.lastName),
  email: z.string().email(msg.email),

  phone: z.string().trim().refine((v) => v === '' || v.length >= 4, msg.phone),

  dobDay: z.string().min(1, msg.dobRequired),
  dobMonth: z.string().min(1, msg.dobRequired),
  dobYear: z
    .string()
    .min(1, msg.dobRequired)
    .refine((y) => currentYear - Number(y) >= 18, msg.dobAge),

  licenseCountry: z.string().min(1, msg.licenseCountry),
  licenseCategories: z
    .array(z.enum(['A', 'B', 'C', 'D', 'E']))
    .min(1, msg.licenseCategories),
  sex: z
    .enum(['male', 'female', ''], { message: msg.sex })
    .refine((v) => v !== '', { message: msg.sex }),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;
