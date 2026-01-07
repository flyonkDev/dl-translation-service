export type VerifyStatus = 'passed' | 'review' | 'failed';

export interface VerifyCheck {
  passed: boolean;
  info?: string;
}

export interface VerifyExtractedFields {
  text?: string;
  fields?: Record<string, string>;
}

export interface VerifyLicenseResponseDto {
  verificationId: string;
  expiresAt: string; // ISO string
  status: VerifyStatus;
  checks: Record<string, VerifyCheck>;
  extracted?: VerifyExtractedFields;
  hints?: string[];
}

export interface VerifyLicenseBodyDto {
  licenseCountry?: string;
  licenseNumber?: string;
}
