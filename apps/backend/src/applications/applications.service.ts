import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import type { Express } from 'express';

import { PrismaService } from '../../prisma/prisma.service';
import { FaceVerificationService } from '../face-verification/face-verification.service';
import { VerificationStore } from '../verify/verify.store';
import { ApplicationsPdfService } from './applications-pdf.service';

import type { ApplicationSnapshot } from './types/index';
import { CreateApplicationDto } from './dto/create-application.dto';
import type { LicenseCategory } from './dto/create-application.dto';

/** Код ошибки для фронта: лицо на headshot не совпадает с лицом на правах. */
export const HEADSHOT_MISMATCH_CODE = 'HEADSHOT_MISMATCH';

@Injectable()
export class ApplicationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly verificationStore: VerificationStore,
    private readonly pdf: ApplicationsPdfService,
    private readonly faceVerification: FaceVerificationService,
  ) {}

  async create(dto: CreateApplicationDto, headshot: Express.Multer.File) {
    const verification = this.verificationStore.get(dto.verificationId);
    if (!verification) {
      throw new BadRequestException('verificationId is invalid or expired');
    }
    if (verification.status === 'failed') {
      throw new BadRequestException('verification must be passed or review');
    }

    const licenseImagePath = verification.licenseImagePath;
    if (!licenseImagePath) {
      throw new BadRequestException(
        'verification data incomplete; please re-upload your license',
      );
    }

    const faceResult = await this.faceVerification.compare(
      licenseImagePath,
      headshot.path,
    );
    if (!faceResult.samePerson) {
      throw new BadRequestException({
        code: HEADSHOT_MISMATCH_CODE,
        message:
          "Photo does not match the person on the driver's license. Please use a clear photo of your face.",
      });
    }

    const created = await this.prisma.application.create({
      data: {
        email: dto.email,
        phone: dto.phone,

        firstName: dto.firstName,
        lastName: dto.lastName,
        issueCountry: dto.issueCountry,

        dobDay: dto.dobDay,
        dobMonth: dto.dobMonth,
        dobYear: dto.dobYear,

        sex: dto.sex,
        planYears: dto.planYears,

        licenseNumber: dto.licenseNumber,
        licenseCategories: dto.licenseCategories,

        signatureDataUrl: dto.signatureDataUrl,
        verificationId: dto.verificationId,

        headshotPath: headshot.path,
        headshotOriginalName: headshot.originalname,
        headshotMimeType: headshot.mimetype,
        headshotSize: headshot.size,

        status: 'created',
      },
      select: { id: true },
    });

    return {
      applicationId: created.id,
      nextAction: 'payment' as const,
    };
  }

  async getPdf(applicationId: string, opts?: { debug?: boolean }) {
    const row = await this.prisma.application.findUnique({
      where: { id: applicationId },
    });
    if (!row) throw new NotFoundException('application not found');

    const snap: ApplicationSnapshot = {
      applicationId: row.id,
      createdAtMs: row.createdAt.getTime(),

      email: row.email,
      phone: row.phone ?? undefined,

      firstName: row.firstName,
      lastName: row.lastName,
      issueCountry: row.issueCountry,

      dobDay: row.dobDay,
      dobMonth: row.dobMonth,
      dobYear: row.dobYear,

      sex: row.sex,
      planYears: row.planYears as 1 | 2 | 3,

      licenseNumber: row.licenseNumber ?? undefined,
      licenseCategories: row.licenseCategories as LicenseCategory[],

      signatureDataUrl: row.signatureDataUrl,
      verificationId: row.verificationId,

      headshotMeta: {
        path: row.headshotPath,
        originalName: row.headshotOriginalName,
        mimetype: row.headshotMimeType,
        size: row.headshotSize,
      },
    };

    return this.pdf.buildPdf(snap, { debug: opts?.debug });
  }
}
