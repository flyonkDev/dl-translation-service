import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import type { Express } from 'express';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';

function filenameGenerator(_req: any, file: Express.Multer.File, cb: any) {
  const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
  cb(null, unique + extname(file.originalname));
}

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly service: ApplicationsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('headshot', {
      storage: diskStorage({
        destination: process.env.UPLOAD_DIR || './uploads',
        filename: filenameGenerator,
      }),
      limits: { fileSize: 10 * 1024 * 1024 },
      fileFilter: (_req, file, cb) => {
        const ok = /image\/(jpe?g|png|webp)/i.test(file.mimetype);
        if (!ok) {
          return cb(new BadRequestException('Only image files are allowed for headshot'), false);
        }
        cb(null, true);
      },
    }),
  )
  create(
    @UploadedFile() headshot: Express.Multer.File,
    @Body(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        // forbidNonWhitelisted: true, // later if needed
      }),
    )
    dto: CreateApplicationDto,
  ) {
    if (!headshot) {
      throw new BadRequestException('headshot file is required');
    }
    return this.service.create(dto, headshot);
  }
}
