import { Injectable, Logger } from '@nestjs/common';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import type { ApplicationSnapshot } from './applications.store';

type PdfOpts = {
  debug?: boolean;
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
    const back = pdfDoc.getPage(pdfDoc.getPageCount() - 1);

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
        return await pdfDoc.embedFont(fontBytes, { subset: true });
      }
    } catch (e) {
      this.logger.warn(`Failed to load PDF font from PDF_FONT_PATH. Fallback to Helvetica. ${(e as Error).message}`);
    }

    // Fallback (без unicode)
    return await pdfDoc.embedFont(StandardFonts.Helvetica);
  }

  private fillCover(page: any, s: ApplicationSnapshot, font: any, opts: PdfOpts) {
    // Координаты подобраны под мой sample IDP (cover).
    // !TODO: Потом, когда будет свой template — просто поправить Layout-константы.
    const validUntil = this.formatValidUntil(s.planYears);
    const permitNo = s.applicationId.slice(0, 6).toUpperCase(); // !TODO: MVP: придумать нормальную логику номера

    // Подчищаем область и печатаем заново (на sample PDF уже есть дата/номер)
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
    // BACK page coords extracted from sample:
    // Text lines:
    // lastName at x=45.35 y=387.05
    // firstName at x=45.35 y=374.29
    // country at x=45.35 y=361.53
    // dob at x=45.35 y=348.78
    // and repeated country at x=45.35 y=336.02
    const x = 45.35;

    const lastNameY = 387.05;
    const firstNameY = 374.29;
    const countryY1 = 361.53;
    const dobY = 348.78;
    const countryY2 = 336.02;

    const countryText = s.issueCountry; // MVP: пока код. Позже подтянем название страны из reference.
    const dobText = this.formatDob(s.dobDay, s.dobMonth, s.dobYear);

    // перекрываем sample-текст
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

    // Photo box (sample image I2): x=133.23 y=180.28 w=97.8 h=126.71
    const photoBox = { x: 133.23, y: 180.28, w: 97.8, h: 126.71 };
    const headshotImg = await this.embedImageFromFile(pdfDoc, s.headshotMeta.path, s.headshotMeta.mimetype);
    this.drawImageContain(page, headshotImg, photoBox);

    // Signature placeholder (sample image I4): x=127.56 y=147.4 w=119.06 h=34.02
    const signBox = { x: 127.56, y: 147.4, w: 119.06, h: 34.02 };
    const signatureImg = await this.embedImageFromDataUrl(pdfDoc, s.signatureDataUrl);
    this.drawImageContain(page, signatureImg, signBox);

    if (opts.debug) {
      this.debugRect(page, photoBox, 'back.photo');
      this.debugRect(page, signBox, 'back.signature');

      this.debugMark(page, x, lastNameY, 'back.lastName');
      this.debugMark(page, x, firstNameY, 'back.firstName');
      this.debugMark(page, x, dobY, 'back.dob');
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

    // на всякий случай пробуем конвертнуть всё неизвестное в png
    const png = await sharp(bytes).png().toBuffer();
    return pdfDoc.embedPng(png);
  }

  private formatDob(day: number, month: number, year: number) {
    const m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][month - 1] ?? 'Jan';
    const dd = String(day).padStart(2, '0');
    return `${dd}-${m}-${year}`;
  }

  private formatValidUntil(planYears: 1 | 2 | 3) {
    const now = new Date();
    const d = new Date(now);
    d.setFullYear(d.getFullYear() + planYears);

    const dd = String(d.getDate()).padStart(2, '0');
    const month = d.toLocaleString('en-US', { month: 'long' });
    const yyyy = d.getFullYear();

    return `${dd} ${month} ${yyyy}`;
  }
}
