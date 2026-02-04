import type { LicenseCategory } from '../dto/create-application.dto';

export type ApplicationSnapshot = {
  applicationId: string;
  createdAtMs: number;

  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  issueCountry: string;
  dobDay: number;
  dobMonth: number;
  dobYear: number;
  sex: 'male' | 'female';
  planYears: 1 | 2 | 3;
  licenseNumber?: string;
  licenseCategories: LicenseCategory[];
  signatureDataUrl: string;

  verificationId: string;

  headshotMeta: {
    path: string;
    originalName: string;
    mimetype: string;
    size: number;
  };
};
