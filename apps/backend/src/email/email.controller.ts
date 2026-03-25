import { Controller, Get, Query, BadRequestException, Header, NotFoundException } from '@nestjs/common';
import { ResendEmailService } from './resend-email.service';
import path from 'node:path';
import fs from 'node:fs';

@Controller('email')
export class EmailController {
  constructor(private readonly email: ResendEmailService) {}

  @Get('test')
  async test(
    @Query('to') to?: string,
    @Query('subject') subject?: string,
  ) {
    if (process.env.NODE_ENV === 'production') {
      throw new BadRequestException('Not available in production');
    }
    if (!to) {
      throw new BadRequestException('Query param "to" is required');
    }

    const result = await this.email.sendEmail({
      to,
      subject: subject ?? 'Test email — IDP Companion',
      html: `<div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">Test email from IDP Companion.</div>`,
      text: 'Test email from IDP Companion.',
      tags: [{ name: 'event', value: 'test' }],
    });

    return result;
  }

  @Get('logo.svg')
  @Header('Content-Type', 'image/svg+xml; charset=utf-8')
  @Header('Cache-Control', 'public, max-age=3600')
  logoSvg() {
    const rel =
      process.env.EMAIL_LOGO_ASSET_PATH?.trim() ||
      '../../packages/ui-kit/assets/branding/logo_1_black.svg';
    const abs = path.resolve(process.cwd(), rel);
    try {
      return fs.readFileSync(abs, 'utf8');
    } catch {
      throw new NotFoundException('logo not found');
    }
  }
}

