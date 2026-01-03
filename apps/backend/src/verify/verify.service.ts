// apps/backend/src/verify/verify.service.ts
import { Injectable, Logger } from '@nestjs/common'
import type { Express } from 'express'
import * as TesseractNS from 'tesseract.js'
import { getKeywordsForCountry } from './verify.keywords'
import {
  type VerifyLicenseResponseDto,
  type VerifyLicenseBodyDto,
  type VerifyCheck,
} from './verify.dto'

function resolveTesseractRecognize(): (path: string, lang: string) => Promise<any> {
  const ns: any = TesseractNS as any
  const fn = ns?.recognize ?? ns?.default?.recognize
  if (typeof fn === 'function') return fn

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

type VerifyStatus = VerifyLicenseResponseDto['status']

function normalizeText(raw: string) {
  return raw.toLowerCase().replace(/\s+/g, ' ').trim()
}

function detectCyrillic(raw: string) {
  return /[а-яё]/i.test(raw)
}

function pickOcrLang(country: string) {
  const c = country.toUpperCase().trim()
  if (c === 'RU' || c === 'RUS' || c === 'RUSSIA') return 'rus+eng'
  return 'eng'
}

/** keyword hits: считаем сколько “сильных” фраз нашли */
function countKeywordHits(text: string, keywords: string[]) {
  let hits = 0
  const hitList: string[] = []
  for (const kw of keywords) {
    if (text.includes(kw)) {
      hits += 1
      hitList.push(kw)
    }
  }
  return { hits, hitList }
}

/** Поля 1.,2.,3.,4a/4b/4c — очень характерно для DL/ID карточек */
function hasFieldNumbers(text: string) {
  // 1. 2. 3. или 4a 4b 4c
  const has123 = /\b1\.\s|\b2\.\s|\b3\.\s/.test(text)
  const has4abc = /\b4a\b|\b4b\b|\b4c\b/.test(text)
  return has123 || has4abc
}

/** Категории прав: B, B1, C, CE, M, A... */
function hasCategories(text: string) {
  return /\b(a1|a|b1|b|c1|c|d1|d|be|ce|de|m)\b/i.test(text)
}

@Injectable()
export class VerifyService {
  private readonly logger = new Logger(VerifyService.name)

  

  async verifyLicense(
    file: Express.Multer.File,
    body: VerifyLicenseBodyDto,
  ): Promise<VerifyLicenseResponseDto> {
    const checks: Record<string, VerifyCheck> = {}

    try {
      
      const mimetype = file?.mimetype ?? ''
      const size = file?.size ?? 0
      checks['mime'] = { passed: /image\/(jpe?g|png|webp)/i.test(mimetype), info: mimetype }
      checks['size'] = { passed: size <= 15 * 1024 * 1024, info: String(size) }

      if (!checks['mime'].passed || !checks['size'].passed) {
        return { status: 'failed', checks, hints: ['Upload a clear JPG/PNG/WebP up to 15MB'] }
      }

      const country = (body?.licenseCountry ?? '').toUpperCase().trim()
      const keywords = getKeywordsForCountry(country)
      const preferRus = pickOcrLang(country) === 'rus+eng'

      let rawText = ''
      let usedLang = pickOcrLang(country)

      const runOcr = async (lang: string) => {
        const { data } = await tesseractRecognize(file.path, lang)
        return String(data?.text ?? '')
      }

      try {
        rawText = await runOcr(usedLang)
      } catch (e: any) {
        this.logger.error(`tesseract error (${usedLang}): ${e?.message || e}`)
        checks['ocr_text'] = { passed: false, info: e?.message || 'tesseract failed' }
      }

      if (!preferRus && rawText) {
        const normalizedEng = normalizeText(rawText)
        const { hits } = countKeywordHits(normalizedEng, keywords)
        const cyr = detectCyrillic(rawText)

        const tooShort = normalizedEng.length < 60
        const weakSignal = hits === 0 && (cyr || tooShort)

        if (weakSignal) {
          try {
            const raw2 = await runOcr('rus+eng')
            // берём “лучший” текст: чаще всего он просто длиннее и чище
            if (raw2 && raw2.length > rawText.length) {
              rawText = raw2
              usedLang = 'rus+eng'
            }
          } catch (e: any) {
            this.logger.warn(`tesseract fallback failed (rus+eng): ${e?.message || e}`)
          }
        }
      }

      const text = normalizeText(rawText)

      if (!checks['ocr_text']) {
        checks['ocr_text'] = { passed: text.length > 20, info: `len=${text.length}, lang=${usedLang}` }
      } else {
        checks['ocr_text'].info = `${checks['ocr_text'].info ?? ''} lang=${usedLang}`.trim()
      }

      if (!checks['ocr_text'].passed) {
        return {
          status: 'failed',
          checks,
          hints: ['Use higher resolution and good lighting', 'Place the card flat, no glare'],
        }
      }

      const { hits: keywordHits, hitList } = countKeywordHits(text, keywords)

      const dateRegex =
        /\b(0?[1-9]|[12]\d|3[01])[-/.](0?[1-9]|1[0-2])[-/.](19|20)\d{2}\b|\b(19|20)\d{2}[-/.](0?[1-9]|1[0-2])[-/.](0?[1-9]|[12]\d|3[01])\b/g

      // ID — делаем адекватнее:
      // 1) длинная группа цифр (6+)
      const digitIdRegex = /\b\d{6,12}\b/g
      // 2) алфанумерик 6..15, но ОБЯЗАТЕЛЬНО с цифрой (иначе имена капсом попадают как “id”)
      const alnumWithDigitRegex = /\b(?=[a-z0-9]{6,15}\b)(?=.*\d)[a-z0-9]+\b/gi
      // 3) RU серия+номер: "59 12 007870" (с пробелами)
      const ruSeriesNumberRegex = /\b\d{2}\s?\d{2}\s?\d{6}\b/g

      const dateMatch = text.match(dateRegex)
      const hasDate = Boolean(dateMatch?.length)

      const digitIdMatch = text.match(digitIdRegex)
      const alnumIdMatch = text.match(alnumWithDigitRegex)
      const ruSeriesMatch = text.match(ruSeriesNumberRegex)

      const hasIdLike = Boolean(
        (digitIdMatch && digitIdMatch.length) ||
        (alnumIdMatch && alnumIdMatch.length) ||
        (ruSeriesMatch && ruSeriesMatch.length),
      )

      const fieldNums = hasFieldNumbers(text)
      const categories = hasCategories(text)
      const cyrillic = detectCyrillic(rawText)

      checks['keywords'] = {
        passed: keywordHits > 0,
        info: keywordHits > 0 ? `hits=${keywordHits} (${hitList.slice(0, 5).join(', ')})` : 'hits=0',
      }
      checks['has_date'] = { passed: hasDate }
      checks['has_id'] = { passed: hasIdLike }
      checks['field_numbers'] = { passed: fieldNums }
      checks['has_categories'] = { passed: categories }
      checks['has_cyrillic'] = { passed: cyrillic }

      // --- L3: скоринг (главное изменение)
      // Идея:
      // - keywords теперь НЕ обязателен
      // - для passed хотим минимум 2 “якоря”: date + id
      // - плюс хотя бы один “форматный” сигнал (field numbers / categories / keywords)
      let score = 0
      if (keywordHits > 0) score += 2
      if (hasDate) score += 2
      if (hasIdLike) score += 2
      if (fieldNums) score += 1
      if (categories) score += 1
      if (cyrillic) score += 0.5 // слабый бонус, просто намёк

      checks['score'] = { passed: score >= 5, info: String(score) }

      let status: VerifyStatus = 'failed'

      const hasTwoAnchors = hasDate && hasIdLike
      const hasFormatSignal = fieldNums || categories || keywordHits > 0

      // PASSED: якоря + форматный сигнал + нормальный score
      if (hasTwoAnchors && hasFormatSignal && score >= 5) {
        status = 'passed'
      } else if (score >= 3) {
        status = 'review'
      } else {
        status = 'failed'
      }

      const fields: Record<string, string> = {}

      if (ruSeriesMatch?.[0]) fields['probable_id'] = ruSeriesMatch[0].replace(/\s+/g, ' ')
      else if (digitIdMatch?.[0]) fields['probable_id'] = digitIdMatch[0]
      else if (alnumIdMatch?.[0]) fields['probable_id'] = alnumIdMatch[0]

      if (dateMatch?.[0]) fields['any_date'] = dateMatch[0]
      fields['ocr_lang'] = usedLang
      fields['keyword_hits'] = String(keywordHits)

      const hints =
        status === 'passed'
          ? []
          : [
              'Place the whole card flat, no glare',
              'Make sure all edges are visible',
              'Use higher resolution and good lighting',
            ]

      this.logger.log(
        `[verify] status=${status} score=${score} lang=${usedLang} hits=${keywordHits} date=${hasDate} id=${hasIdLike} fields=${fieldNums} cat=${categories}`,
      )

      return {
        status,
        checks,
        extracted: { text: text.slice(0, 5000), fields },
        hints,
      }
    } catch (e: any) {
      this.logger.error('verifyLicense fatal', e)
      return { status: 'failed', checks, hints: ['Server error while processing file'] }
    }
  }
}
