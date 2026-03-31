import { BadRequestException, ForbiddenException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import type { Express } from 'express';

import { PrismaService } from '../../prisma/prisma.service';
import { FaceVerificationService } from '../face-verification/face-verification.service';
import { VerificationStore } from '../verify/verify.store';
import { ApplicationsPdfService } from './applications-pdf.service';
import { ResendEmailService } from '../email/resend-email.service';
import { buildThankYouEmail } from '../email/email.templates';
import { resolveEmailLogoDataUri } from '../email/email.branding';

import type { ApplicationSnapshot } from './types/index';
import { CreateApplicationDto } from './dto/create-application.dto';
import type { LicenseCategory } from './dto/create-application.dto';

export const HEADSHOT_MISMATCH_CODE = 'HEADSHOT_MISMATCH';

@Injectable()
export class ApplicationsService {
  private readonly logger = new Logger(ApplicationsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly verificationStore: VerificationStore,
    private readonly pdf: ApplicationsPdfService,
    private readonly faceVerification: FaceVerificationService,
    private readonly email: ResendEmailService,
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

    try {
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
    } catch (e) {
      if (e instanceof BadRequestException) throw e;
      this.logger.error('create application: face verification or later failed', e);
      throw e;
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

    const shouldSendEmail =
      process.env.EMAIL_SEND_ON_APPLICATION_CREATE === '1' ||
      process.env.EMAIL_SEND_ON_APPLICATION_CREATE === 'true';

    if (shouldSendEmail) {
      const brand = resolveEmailLogoDataUri();
      const { subject, html, text } = buildThankYouEmail({
        customerEmail: dto.email,
        applicationId: created.id,
        dto: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          planYears: dto.planYears,
          issueCountry: dto.issueCountry,
        },
        brand,
      });

      try {
        const pdfBuf = await this.getPdf(created.id);
        const result = await this.email.sendEmail({
          to: dto.email,
          subject,
          html,
          text,
          attachments: [
            {
              filename: `idp-companion-${created.id}.pdf`,
              contentType: 'application/pdf',
              contentBase64: pdfBuf.toString('base64'),
            },
          ],
          tags: [
            { name: 'event', value: 'application_created' },
            { name: 'applicationId', value: created.id },
          ],
        });
        if (!result.ok) {
          this.logger.warn(
            `application created but email not sent: kind=${result.error.kind} status=${result.error.status ?? 'n/a'}`,
          );
        }
      } catch (e) {
        this.logger.error('application created but email send threw', e as any);
      }
    } else {
      this.logger.debug('application created: email send skipped (EMAIL_SEND_ON_APPLICATION_CREATE is disabled)');
    }

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

    const requirePayment =
      process.env.REQUIRE_PAYMENT_FOR_PDF === '1' ||
      process.env.REQUIRE_PAYMENT_FOR_PDF === 'true';
    if (requirePayment && row.status !== 'paid' && row.status !== 'pdf_ready') {
      throw new ForbiddenException('payment required');
    }

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
      planYears: row.planYears as 1 | 3 | 5,

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
