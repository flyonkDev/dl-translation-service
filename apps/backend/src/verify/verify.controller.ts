import {
  Controller, Post, UseInterceptors,
  UploadedFile, Body, BadRequestException
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import type { Express } from 'express'
import { VerifyService } from './verify.service'

function filenameGenerator(_req: any, file: Express.Multer.File, cb: any) {
  const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
  cb(null, unique + extname(file.originalname))
}

@Controller('verify')
export class VerifyController {
  constructor(private verify: VerifyService) {}

  @Post('license')
  @UseInterceptors(FileInterceptor('license', {
    storage: diskStorage({
      destination: process.env.UPLOAD_DIR || './uploads',
      filename: filenameGenerator,
    }),
    limits: { fileSize: 15 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
      const ok = /image\/(jpe?g|png|webp)/i.test(file.mimetype)
      if (!ok) return cb(new BadRequestException('Only image files are allowed'), false)
      cb(null, true)
    },
  }))
   async license(
    @UploadedFile() license: Express.Multer.File,
    @Body() body: { licenseCountry?: string; licenseNumber?: string }
  ) {
    if (!license) throw new BadRequestException('license file is required')
    console.log('[verify] file:', license.originalname, license.mimetype, license.size, body)
    return this.verify.verifyLicense(license, body)
  }
}