// apps/backend/src/verify/verify.dto.ts

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
  status: VerifyStatus;
  checks: Record<string, VerifyCheck>;
  extracted?: VerifyExtractedFields;
  hints?: string[];
}

export interface VerifyLicenseBodyDto {
  licenseCountry?: string;
  licenseNumber?: string;
}
