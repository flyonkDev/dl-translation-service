// apps/backend/src/verify/verify.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import type { Express } from 'express';
import { VerifyService } from './verify.service';
import type {
  VerifyLicenseResponseDto,
  VerifyLicenseBodyDto,
} from './verify.dto';

function filenameGenerator(_req: any, file: Express.Multer.File, cb: any) {
  const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
  cb(null, unique + extname(file.originalname));
}

@Controller('verify')
export class VerifyController {
  private readonly logger = new Logger(VerifyController.name);

  constructor(private readonly verify: VerifyService) {}

  @Post('license')
  @UseInterceptors(
    FileInterceptor('license', {
      storage: diskStorage({
        destination: process.env.UPLOAD_DIR || './uploads',
        filename: filenameGenerator,
      }),
      limits: { fileSize: 15 * 1024 * 1024 },
      fileFilter: (_req, file, cb) => {
        const ok = /image\/(jpe?g|png|webp)/i.test(file.mimetype);
        if (!ok) {
          return cb(
            new BadRequestException('Only image files are allowed'),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  async license(
    @UploadedFile() license: Express.Multer.File,
    @Body() body: VerifyLicenseBodyDto,
  ): Promise<VerifyLicenseResponseDto> {
    if (!license) {
      throw new BadRequestException('license file is required');
    }

    this.logger.log(
      `[verify] file=${license.originalname} mime=${license.mimetype} size=${license.size} body=${JSON.stringify(
        body,
      )}`,
    );

    return this.verify.verifyLicense(license, body);
  }
}
