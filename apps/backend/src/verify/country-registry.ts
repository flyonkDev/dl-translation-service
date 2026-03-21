/**
 * Нормализация кода страны и параметры каскада OCR.
 */

import { DEFAULT_OCR_ATTEMPTS, getOcrAttemptsForIso } from './data/ocr-languages'

const COUNTRY_ALIASES: Readonly<Record<string, string>> = {
  RUS: 'RU',
  RUSSIA: 'RU',
  RUSSIAN: 'RU',
  USA: 'US',
  US: 'US',
  UNITEDSTATES: 'US',
  UK: 'GB',
  GB: 'GB',
  UKR: 'UA',
  UKRAINE: 'UA',
  KOREA: 'KR',
  SOUTHKOREA: 'KR',
  VIETNAM: 'VN',
  UAE: 'AE',
}

/** ISO 3166-1 alpha-3 → alpha-2 (частые случаи). */
const ALPHA3_TO_ALPHA2: Readonly<Record<string, string>> = {
  RUS: 'RU',
  USA: 'US',
  GBR: 'GB',
  DEU: 'DE',
  FRA: 'FR',
  ESP: 'ES',
  ITA: 'IT',
  NLD: 'NL',
  BEL: 'BE',
  UKR: 'UA',
  CHN: 'CN',
  JPN: 'JP',
  KOR: 'KR',
  VNM: 'VN',
  AUS: 'AU',
  CAN: 'CA',
  MEX: 'MX',
  BRA: 'BR',
  IND: 'IN',
  ZAF: 'ZA',
  GEO: 'GE',
  ARE: 'AE',
  SAU: 'SA',
  TUR: 'TR',
}

function normalizeToken(raw: string): string {
  return raw.toUpperCase().trim().replace(/[^A-Z0-9]/g, '')
}

/**
 * Приводит ввод страны к ISO 3166-1 alpha-2 или undefined.
 */
export function normalizeCountryCode(input?: string): string | undefined {
  if (!input) return undefined
  const t = normalizeToken(input)
  if (t.length === 0) return undefined
  if (COUNTRY_ALIASES[t]) return COUNTRY_ALIASES[t]
  if (t.length === 2) return t
  if (t.length === 3) return ALPHA3_TO_ALPHA2[t]
  return undefined
}

function readMaxOcrAttempts(): number {
  const n = Number(process.env.VERIFY_OCR_MAX_ATTEMPTS ?? 6)
  if (!Number.isFinite(n) || n < 1) return 6
  return Math.min(12, Math.floor(n))
}

function dedupeAttempts(chains: readonly string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const c of chains) {
    if (seen.has(c)) continue
    seen.add(c)
    out.push(c)
  }
  return out
}

/**
 * Упорядоченный список строк языков Tesseract для каскада (ограничен по длине).
 */
export function getOcrLanguageAttempts(rawCountry?: string): string[] {
  const iso = normalizeCountryCode(rawCountry)
  const base = iso ? getOcrAttemptsForIso(iso) : [...DEFAULT_OCR_ATTEMPTS]
  return dedupeAttempts(base).slice(0, readMaxOcrAttempts())
}
