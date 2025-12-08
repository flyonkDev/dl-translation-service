// apps/backend/src/verify/verify.service.ts
import { Injectable, Logger } from '@nestjs/common'
import type { Express } from 'express'
import * as TesseractNS from 'tesseract.js'

type Check = { passed: boolean; info?: string }
type Result = {
  status: 'passed' | 'review' | 'failed'
  checks: Record<string, Check>
  extracted?: { text?: string; fields?: Record<string, string> }
  hints?: string[]
}

/** Единоразово находим корректную функцию recognize для любой сборки tesseract.js */
function resolveTesseractRecognize(): (path: string, lang: string) => Promise<any> {
  const ns: any = TesseractNS as any
  const fn = ns?.recognize ?? ns?.default?.recognize
  if (typeof fn === 'function') return fn
  // Фолбэк: динамический импорт (на случай экзотической сборки)
  return async (imagePath: string, lang: string) => {
    const mod: any = await import('tesseract.js')
    const recognize = mod?.recognize ?? mod?.default?.recognize
    if (typeof recognize !== 'function') {
      throw new Error('Tesseract.recognize not available')
    }
    return recognize(imagePath, lang)
  }
}
const tesseractRecognize = resolveTesseractRecognize()

@Injectable()
export class VerifyService {
  private readonly logger = new Logger(VerifyService.name)

  private readonly keywords = [
    'driver license',
    "driver's license",
    'driving licence',
    'permiso de conducir',
    'carta de condução',
    'permis de conduire',
    'führerschein',
    'patente di guida',
    'dl',
    'licence',
    'licencia',
    'categorie',
    'class',
    'endorsements',
  ]

  async verifyLicense(file: Express.Multer.File, _body: Record<string, unknown>): Promise<Result> {
    const checks: Record<string, Check> = {}

    try {
      // --- L0: базовые проверки
      const mimetype = file?.mimetype ?? ''
      const size = file?.size ?? 0
      checks['mime'] = { passed: /image\/(jpe?g|png|webp)/i.test(mimetype), info: mimetype }
      checks['size'] = { passed: size <= 15 * 1024 * 1024, info: String(size) }
      if (!checks['mime'].passed || !checks['size'].passed) {
        return { status: 'failed', checks, hints: ['Upload a clear JPG/PNG/WebP up to 15MB'] }
      }

      // --- L1: OCR
      let rawText = ''
      try {
        const { data } = await tesseractRecognize(file.path, 'eng')
        rawText = String(data?.text ?? '')
      } catch (e: any) {
        this.logger.error(`tesseract error: ${e?.message || e}`)
        checks['ocr_text'] = { passed: false, info: e?.message || 'tesseract failed' }
      }

      const text = rawText.toLowerCase().replace(/\s+/g, ' ').trim()
      if (!checks['ocr_text']) {
        checks['ocr_text'] = { passed: text.length > 20, info: `len=${text.length}` }
      }

      // --- L2: эвристики по содержимому
      const hasKeyword = this.keywords.some((kw) => text.includes(kw))
      const dateRegex =
        /\b(0?[1-9]|[12]\d|3[01])[-/.](0?[1-9]|1[0-2])[-/.](19|20)\d{2}\b|\b(19|20)\d{2}[-/.](0?[1-9]|1[0-2])[-/.](0?[1-9]|[12]\d|3[01])\b/g
      const idRegex = /\b[A-Z0-9]{6,15}\b/g
      const hasDate = !!text.match(dateRegex)
      const hasIdLike = !!text.match(idRegex)

      checks['keywords'] = { passed: hasKeyword }
      checks['has_date'] = { passed: hasDate }
      checks['has_id'] = { passed: hasIdLike }

      // --- итоговый вердикт
      let status: Result['status'] = 'failed'
      if (checks['ocr_text'].passed && hasKeyword && (hasDate || hasIdLike)) status = 'passed'
      else if (checks['ocr_text'].passed && (hasKeyword || hasDate || hasIdLike)) status = 'review'

      // немного полезных извлечений
      const fields: Record<string, string> = {}
      const idMatch = text.match(idRegex)
      if (idMatch?.[0]) fields['probable_id'] = idMatch[0]
      const dateMatch = text.match(dateRegex)
      if (dateMatch?.[0]) fields['any_date'] = dateMatch[0]

      return {
        status,
        checks,
        extracted: { text: text.slice(0, 5000), fields },
        hints:
          status === 'passed'
            ? []
            : [
                'Place the whole card flat, no glare',
                'Make sure all edges are visible',
                'Use higher resolution and good lighting',
              ],
      }
    } catch (e: any) {
      this.logger.error('verifyLicense fatal', e)
      return { status: 'failed', checks, hints: ['Server error while processing file'] }
    }
  }
}
