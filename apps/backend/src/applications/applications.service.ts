import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import type { Express } from 'express';
import { ApplicationsStore } from './applications.store';
import { CreateApplicationDto } from './dto/create-application.dto';
import { VerificationStore } from '../verify/verify.store';
import { ApplicationsPdfService } from './applications-pdf.service';


@Injectable()
export class ApplicationsService {
  constructor(
    private readonly store: ApplicationsStore,
    private readonly verificationStore: VerificationStore,
    private readonly pdf: ApplicationsPdfService,
  ) {}

  create(dto: CreateApplicationDto, headshot: Express.Multer.File) {
    const verification = this.verificationStore.get(dto.verificationId);
    if (!verification) {
      throw new BadRequestException('verificationId is invalid or expired');
    }

    if (verification.status === 'failed') {
      throw new BadRequestException('verification must be passed or review');
    }

    const snap = this.store.createAndSave({
      ...dto,
      headshotMeta: {
        path: headshot.path,
        originalName: headshot.originalname,
        mimetype: headshot.mimetype,
        size: headshot.size,
      },
    });

    return {
      applicationId: snap.applicationId,
      nextAction: 'payment' as const,
    };
  }

  async getPdf(applicationId: string, opts?: { debug?: boolean }) {
    const snap = this.store.get(applicationId);
    if (!snap) throw new NotFoundException('application not found');
    return this.pdf.buildPdf(snap, { debug: opts?.debug });
  }
}