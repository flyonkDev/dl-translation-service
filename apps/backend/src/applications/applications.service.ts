import { BadRequestException, Injectable } from '@nestjs/common';
import type { Express } from 'express';
import { ApplicationsStore } from './applications.store';
import { CreateApplicationDto } from './dto/create-application.dto';
import { VerificationStore } from '../verify/verify.store';

@Injectable()
export class ApplicationsService {
  constructor(
    private readonly store: ApplicationsStore,
    private readonly verificationStore: VerificationStore,
  ) {}

  create(dto: CreateApplicationDto, headshot: Express.Multer.File) {
    const verification = this.verificationStore.get(dto.verificationId);
    if (!verification) {
      throw new BadRequestException('verificationId is invalid or expired');
    }

    // in MVP realisation we can submit with 'passed' | 'review'
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
}
