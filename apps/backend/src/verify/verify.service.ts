// apps/backend/src/verify/verify.service.ts
import { Injectable, Logger } from '@nestjs/common'
import type { Express } from 'express'
import { randomUUID } from 'node:crypto'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import sharp from 'sharp'
import { VerificationStore } from './verify.store'
import { VerifyStorageService } from './verify-storage.service'
import * as TesseractNS from 'tesseract.js'
import { getKeywordsForCountry } from './data/keywords-by-country'
import { getOcrLanguageAttempts, normalizeCountryCode } from './country-registry'
import {
  type VerifyLicenseResponseDto,
  type VerifyLicenseBodyDto,
  type VerifyCheck,
} from './verify.dto'

function resolveTesseractRecognize(): (
  path: string,
  lang: string,
) => Promise<{ data: { text?: string; confidence?: number } }> {
  const ns = TesseractNS as unknown as {
    recognize?: typeof import('tesseract.js').recognize
    default?: { recognize?: typeof import('tesseract.js').recognize }
  }
  const fn = ns?.recognize ?? ns?.default?.recognize
  if (typeof fn === 'function') return fn as typeof import('tesseract.js').recognize

  return async (imagePath: string, lang: string) => {
    const mod = await import('tesseract.js')
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

function hasFieldNumbers(text: string) {
  const has123 = /\b1\.\s|\b2\.\s|\b3\.\s/.test(text)
  const has4abc = /\b4a\b|\b4b\b|\b4c\b/.test(text)
  return has123 || has4abc
}

function hasCategories(text: string) {
  return /\b(a1|a|b1|b|c1|c|d1|d|be|ce|de|m)\b/i.test(text)
}

type OcrCascadeResult = {
  rawText: string
  usedLang: string
  attemptsTried: readonly string[]
  bestConfidence: number
}

@Injectable()
export class VerifyService {
  private readonly logger = new Logger(VerifyService.name)

  constructor(
    private readonly store: VerificationStore,
    private readonly verifyStorage: VerifyStorageService,
  ) {}

  private async runOcrCascade(
    imagePath: string,
    attempts: readonly string[],
  ): Promise<OcrCascadeResult> {
    let bestText = ''
    let bestLang = attempts[0] ?? 'eng'
    let bestConf = -1
    const attemptsTried: string[] = []

    for (const lang of attempts) {
      try {
        const { data } = await tesseractRecognize(imagePath, lang)
        const text = String(data?.text ?? '')
        const conf = typeof data?.confidence === 'number' ? data.confidence : 0
        attemptsTried.push(lang)
        const better =
          conf > bestConf ||
          (conf === bestConf && text.length > bestText.length)
        if (better) {
          bestText = text
          bestLang = lang
          bestConf = conf
        }
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e)
        this.logger.warn(`tesseract error (${lang}): ${msg}`)
      }
    }

    return {
      rawText: bestText,
      usedLang: bestLang,
      attemptsTried,
      bestConfidence: bestConf < 0 ? 0 : bestConf,
    }
  }

  async verifyLicense(
    file: Express.Multer.File,
    body: VerifyLicenseBodyDto,
  ): Promise<VerifyLicenseResponseDto> {
    const checks: Record<string, VerifyCheck> = {}

    const finalize = (
      payload: Omit<VerifyLicenseResponseDto, 'verificationId' | 'expiresAt'> & {
        licenseImagePath?: string
      },
    ) => {
      const snap = this.store.createAndSave({
        ...payload,
        fileMeta: {
          originalName: file.originalname,
          mimetype: file.mimetype,
          size: file.size,
        },
      })

      return {
        ...payload,
        verificationId: snap.verificationId,
        expiresAt: new Date(snap.expiresAtMs).toISOString(),
      }
    }

    let pdfRasterPath: string | undefined

    try {
      const mimetype = file?.mimetype ?? ''
      const size = file?.size ?? 0

      const isImage = /image\/(jpe?g|png|webp)/i.test(mimetype)
      const isPdf = mimetype === 'application/pdf'

      checks['mime'] = { passed: isImage || isPdf, info: mimetype }
      checks['size'] = { passed: size <= 15 * 1024 * 1024, info: String(size) }

      if (!checks['mime'].passed || !checks['size'].passed) {
        const hints: string[] = []

        if (!checks['size'].passed) {
          hints.push('File is too large. Upload up to 15MB.')
        }

        if (!checks['mime'].passed) {
          hints.push('Only JPG/PNG/WebP images or PDF are allowed.')
        }

        return finalize({ status: 'failed', checks, hints })
      }

      const countryRaw = body?.licenseCountry
      const countryIso = normalizeCountryCode(countryRaw)
      const keywords = getKeywordsForCountry(countryRaw)
      const ocrAttempts = getOcrLanguageAttempts(countryRaw)

      let ocrPath = file.path

      if (isPdf) {
        try {
          pdfRasterPath = path.join(os.tmpdir(), `verify-${randomUUID()}.png`)
          await sharp(file.path, { density: 200, page: 0 })
            .png()
            .toFile(pdfRasterPath)
          ocrPath = pdfRasterPath
        } catch (e: unknown) {
          const msg = e instanceof Error ? e.message : String(e)
          this.logger.warn(`PDF rasterize failed: ${msg}`)
          return finalize({
            status: 'failed',
            checks,
            hints: [
              'Could not read this PDF. Try a clear photo (JPG/PNG/WebP) of the license.',
              'If the file is a scan, export it as an image from your viewer.',
            ],
          })
        }
      }

      const { rawText, usedLang, attemptsTried, bestConfidence } =
        await this.runOcrCascade(ocrPath, ocrAttempts)

      const text = normalizeText(rawText)

      checks['ocr_text'] = {
        passed: text.length > 20,
        info: `len=${text.length}, lang=${usedLang}, conf=${Math.round(bestConfidence)}`,
      }

      if (!checks['ocr_text'].passed) {
        return finalize({
          status: 'failed',
          checks,
          hints: ['Use higher resolution and good lighting', 'Place the card flat, no glare'],
        })
      }

      const { hits: keywordHits, hitList } = countKeywordHits(text, keywords)

      const dateRegex =
        /\b(0?[1-9]|[12]\d|3[01])[-/.](0?[1-9]|1[0-2])[-/.](19|20)\d{2}\b|\b(19|20)\d{2}[-/.](0?[1-9]|1[0-2])[-/.](0?[1-9]|[12]\d|3[01])\b/g

      const digitIdRegex = /\b\d{6,12}\b/g
      const alnumWithDigitRegex = /\b(?=[a-z0-9]{6,15}\b)(?=.*\d)[a-z0-9]+\b/gi
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
        info:
          keywordHits > 0
            ? `hits=${keywordHits} (${hitList.slice(0, 5).join(', ')})`
            : 'hits=0',
      }
      checks['has_date'] = { passed: hasDate }
      checks['has_id'] = { passed: hasIdLike }
      checks['field_numbers'] = { passed: fieldNums }
      checks['has_categories'] = { passed: categories }
      checks['has_cyrillic'] = { passed: cyrillic }

      let score = 0
      if (keywordHits > 0) score += 2
      if (hasDate) score += 2
      if (hasIdLike) score += 2
      if (fieldNums) score += 1
      if (categories) score += 1
      if (cyrillic) score += 0.5

      checks['score'] = { passed: score >= 5, info: String(score) }

      let status: VerifyStatus = 'failed'

      const hasTwoAnchors = hasDate && hasIdLike
      const hasFormatSignal = fieldNums || categories || keywordHits > 0

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
        JSON.stringify({
          evt: 'verify_metrics',
          country: countryIso ?? null,
          ocrAttempts: ocrAttempts,
          ocrAttemptsTried: attemptsTried,
          ocrUsed: usedLang,
          ocrConfidence: Math.round(bestConfidence),
          score,
          status,
          keywordHits,
        }),
      )

      this.logger.log(
        `[verify] status=${status} score=${score} lang=${usedLang} hits=${keywordHits} date=${hasDate} id=${hasIdLike} fields=${fieldNums} cat=${categories}`,
      )

      let licenseImagePath: string | undefined
      if (status === 'passed' || status === 'review') {
        if (isPdf && pdfRasterPath) {
          licenseImagePath = await this.verifyStorage.saveCopyFromPath(
            pdfRasterPath,
            '.png',
          )
          try {
            await fs.unlink(file.path)
          } catch {
            /* multer temp PDF cleanup */
          }
        } else {
          licenseImagePath = await this.verifyStorage.save(file)
        }
      }

      return finalize({
        status,
        checks,
        extracted: { text: text.slice(0, 5000), fields },
        hints,
        licenseImagePath,
      })
    } catch (e: unknown) {
      const err = e instanceof Error ? e : new Error(String(e))
      this.logger.error('verifyLicense fatal', err)
      return finalize({
        status: 'failed',
        checks,
        hints: ['Server error while processing file'],
      })
    } finally {
      if (pdfRasterPath) {
        try {
          await fs.unlink(pdfRasterPath)
        } catch {
          /* ignore */
        }
      }
    }
  }
}
