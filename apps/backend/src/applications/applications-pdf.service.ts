import { Injectable, Logger } from '@nestjs/common';
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import type { ApplicationSnapshot } from './types/index';

type PdfOpts = {
  debug?: boolean;
};

const LICENSE_CATEGORIES = ['A', 'B', 'C', 'D', 'E'] as const;
type LicenseCategory = typeof LICENSE_CATEGORIES[number];

const CATEGORY_STAMP_CENTER: Record<LicenseCategory, { x: number; y: number }> = {
  A: { x: 60.45, y: 296.31 },
  B: { x: 60.45, y: 254.61 },
  C: { x: 60.45, y: 212.91 },
  D: { x: 60.15, y: 171.81 },
  E: { x: 60.45, y: 130.41 },
};

@Injectable()
export class ApplicationsPdfService {
  private readonly logger = new Logger(ApplicationsPdfService.name);

  async buildPdf(snapshot: ApplicationSnapshot, opts: PdfOpts = {}): Promise<Buffer> {
    const templatePath = this.getTemplatePath();
    const templateBytes = await readFile(templatePath);

    const pdfDoc = await PDFDocument.load(templateBytes);
    pdfDoc.registerFontkit(fontkit);

    const font = await this.loadFont(pdfDoc);

    // pages
    const cover = pdfDoc.getPage(0);
    const back = pdfDoc.getPage(1); // new template: back page is 2/15

    this.fillCover(cover, snapshot, font, opts);
    await this.fillBack(pdfDoc, back, snapshot, font, opts);

    const bytes = await pdfDoc.save();
    return Buffer.from(bytes);
  }

  private getTemplatePath() {
    const fromEnv = process.env.PDF_TEMPLATE_PATH?.trim();
    if (fromEnv) return path.resolve(process.cwd(), fromEnv);
    // fallback (если env нет)
    return path.resolve(process.cwd(), 'assets/templates/idp-dev-template.pdf');
  }

  private async loadFont(pdfDoc: PDFDocument) {
    const fontPath = process.env.PDF_FONT_PATH?.trim()
      ? path.resolve(process.cwd(), process.env.PDF_FONT_PATH!.trim())
      : null;

    try {
      if (fontPath) {
        const fontBytes = await readFile(fontPath);
        return await pdfDoc.embedFont(fontBytes, { subset: false });
      }
    } catch (e) {
      this.logger.warn(
        `Failed to load PDF font from PDF_FONT_PATH. Fallback to Helvetica. ${(e as Error).message}`,
      );
    }

    // Fallback (без unicode)
    return await pdfDoc.embedFont(StandardFonts.Helvetica);
  }

  private fillCover(page: any, s: ApplicationSnapshot, font: any, opts: PdfOpts) {
    const validUntil = this.formatValidUntil(s.planYears);
    const permitNo = s.applicationId.slice(0, 6).toUpperCase();

    this.coverRect(page, 110, 273, 95, 18); // around date
    page.drawText(validUntil, { x: 113.4, y: 275.9, size: 12, font });

    this.coverRect(page, 138, 38, 40, 14); // around permit number
    page.drawText(permitNo, { x: 141.9, y: 40.2, size: 9, font });

    if (opts.debug) {
      this.debugMark(page, 113.4, 275.9, 'cover.validUntil');
      this.debugMark(page, 141.9, 40.2, 'cover.permitNo');
    }
  }

  private async fillBack(pdfDoc: PDFDocument, page: any, s: ApplicationSnapshot, font: any, opts: PdfOpts) {
    const x = 45.35;

    const lastNameY = 387.05;
    const firstNameY = 374.29;
    const countryY1 = 361.53;
    const dobY = 348.78;
    const countryY2 = 336.02;

    const countryText = s.issueCountry;
    const dobText = this.formatDob(s.dobDay, s.dobMonth, s.dobYear);

    this.coverRect(page, x - 2, lastNameY - 2, 190, 16);
    this.coverRect(page, x - 2, firstNameY - 2, 190, 16);
    this.coverRect(page, x - 2, countryY1 - 2, 190, 16);
    this.coverRect(page, x - 2, dobY - 2, 190, 16);
    this.coverRect(page, x - 2, countryY2 - 2, 190, 16);

    page.drawText(s.lastName.toUpperCase(), { x, y: lastNameY, size: 13, font });
    page.drawText(s.firstName.toUpperCase(), { x, y: firstNameY, size: 13, font });
    page.drawText(countryText.toUpperCase(), { x, y: countryY1, size: 13, font });
    page.drawText(dobText, { x, y: dobY, size: 13, font });
    page.drawText(countryText.toUpperCase(), { x, y: countryY2, size: 13, font });

    // Photo
    const photoBox = { x: 133.23, y: 180.28, w: 97.8, h: 126.71 };
    const headshotImg = await this.embedImageFromFile(pdfDoc, s.headshotMeta.path, s.headshotMeta.mimetype);
    this.drawImageContain(page, headshotImg, photoBox);

    // Signature
    const signBox = { x: 127.56, y: 147.4, w: 119.06, h: 34.02 };
    const signatureImg = await this.embedImageFromDataUrl(pdfDoc, s.signatureDataUrl);
    this.drawImageContain(page, signatureImg, signBox);

    await this.fillLicenseCategories(pdfDoc, page, s, opts);

    if (opts.debug) {
      this.debugRect(page, photoBox, 'back.photo');
      this.debugRect(page, signBox, 'back.signature');

      this.debugMark(page, x, lastNameY, 'back.lastName');
      this.debugMark(page, x, firstNameY, 'back.firstName');
      this.debugMark(page, x, dobY, 'back.dob');
    }
  }

  private async fillLicenseCategories(pdfDoc: PDFDocument, page: any, s: ApplicationSnapshot, opts: PdfOpts) {
    const selected = new Set(
      (s.licenseCategories ?? [])
        .map((v) => String(v).trim().toUpperCase())
        .filter(Boolean),
    );

    const stampImg = await this.loadStampImage(pdfDoc);

    const r = 19.5;

    const size = r * 2 * 1.03;

    const dx = 0.1;
    const dy = 0.2;

    for (const cat of LICENSE_CATEGORIES) {
      const c = CATEGORY_STAMP_CENTER[cat];

      if (opts.debug) {
        this.debugMark(page, c.x, c.y, `cat.${cat}`);
      }

      if (!selected.has(cat)) continue;

      const angle = 0;
      const x = c.x - size / 2 + dx;
      const y = c.y - size / 2 + dy;

      page.drawImage(stampImg, {
        x,
        y,
        width: size,
        height: size,
        rotate: degrees(angle),
        opacity: 1,
      });
    }
  }

  private coverRect(page: any, x: number, y: number, w: number, h: number) {
    page.drawRectangle({ x, y, width: w, height: h, color: rgb(1, 1, 1) });
  }

  private debugMark(page: any, x: number, y: number, label: string) {
    page.drawCircle({ x, y, size: 2, color: rgb(1, 0, 0) });
    page.drawText(label, { x: x + 4, y: y + 2, size: 6, color: rgb(1, 0, 0) });
  }

  private debugRect(page: any, box: { x: number; y: number; w: number; h: number }, label: string) {
    page.drawRectangle({
      x: box.x,
      y: box.y,
      width: box.w,
      height: box.h,
      borderColor: rgb(1, 0, 0),
      borderWidth: 0.5,
    });
    page.drawText(label, { x: box.x, y: box.y + box.h + 2, size: 6, color: rgb(1, 0, 0) });
  }

  private drawImageContain(page: any, img: any, box: { x: number; y: number; w: number; h: number }) {
    const iw = img.width;
    const ih = img.height;

    const scale = Math.min(box.w / iw, box.h / ih);
    const w = iw * scale;
    const h = ih * scale;

    const x = box.x + (box.w - w) / 2;
    const y = box.y + (box.h - h) / 2;

    page.drawImage(img, { x, y, width: w, height: h });
  }

  private async embedImageFromFile(pdfDoc: PDFDocument, filePath: string, mime: string) {
    const abs = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
    const bytes = await readFile(abs);
    return this.embedImageBytes(pdfDoc, bytes, mime);
  }

  private async embedImageFromDataUrl(pdfDoc: PDFDocument, dataUrl: string) {
    const m = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
    if (!m) throw new Error('signatureDataUrl is not a valid data:image/* base64 string');

    const mime = m[1].toLowerCase();
    const b64 = m[2].replace(/\s/g, '');
    const bytes = Buffer.from(b64, 'base64');

    return this.embedImageBytes(pdfDoc, bytes, mime);
  }

  private async embedImageBytes(pdfDoc: PDFDocument, bytes: Buffer, mime: string) {
    const m = mime.toLowerCase();

    if (m === 'image/png') return pdfDoc.embedPng(bytes);
    if (m === 'image/jpeg' || m === 'image/jpg') return pdfDoc.embedJpg(bytes);

    if (m === 'image/webp') {
      const png = await sharp(bytes).png().toBuffer();
      return pdfDoc.embedPng(png);
    }

    const png = await sharp(bytes).png().toBuffer();
    return pdfDoc.embedPng(png);
  }

  private formatDob(day: number, month: number, year: number) {
    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month - 1] ?? 'Jan';
    const dd = String(day).padStart(2, '0');
    return `${dd}-${m}-${year}`;
  }

  private formatValidUntil(planYears: 1 | 3 | 5) {
    const now = new Date();
    const d = new Date(now);
    d.setFullYear(d.getFullYear() + planYears);

    const dd = String(d.getDate()).padStart(2, '0');
    const month = d.toLocaleString('en-US', { month: 'long' });
    const yyyy = d.getFullYear();

    return `${dd} ${month} ${yyyy}`;
  }

  private getStampPath() {
    const fromEnv = process.env.PDF_STAMP_PATH?.trim();
    if (fromEnv) return path.resolve(process.cwd(), fromEnv);
    return path.resolve(process.cwd(), 'assets/stamps/stamp1.png');
  }

  private async loadStampImage(pdfDoc: PDFDocument) {
    const stampPath = this.getStampPath();
    const bytes = await readFile(stampPath);

    const png = await sharp(bytes)
      .resize(320, 320, { fit: 'inside' })
      .png()
      .toBuffer();

    return pdfDoc.embedPng(png);
  }
}
