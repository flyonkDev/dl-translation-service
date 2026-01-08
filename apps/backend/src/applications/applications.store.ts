import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

export type ApplicationSnapshot = {
  applicationId: string;
  createdAtMs: number;

  // payload
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
  signatureDataUrl: string;

  verificationId: string;

  headshotMeta: {
    path: string;
    originalName: string;
    mimetype: string;
    size: number;
  };
};

@Injectable()
export class ApplicationsStore {
  private readonly map = new Map<string, ApplicationSnapshot>();

  createAndSave(payload: Omit<ApplicationSnapshot, 'applicationId' | 'createdAtMs'>) {
    const applicationId = randomUUID();
    const createdAtMs = Date.now();

    const snapshot: ApplicationSnapshot = {
      ...payload,
      applicationId,
      createdAtMs,
    };

    this.map.set(applicationId, snapshot);
    return snapshot;
  }

  get(applicationId: string) {
    return this.map.get(applicationId) ?? null;
  }
}
