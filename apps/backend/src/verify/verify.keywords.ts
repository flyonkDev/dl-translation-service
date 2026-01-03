// apps/backend/src/verify/verify.keywords.ts

export type CountryCode = 'RU' | 'VN' | 'GE' | 'DE' | 'FR'

export const COMMON_KEYWORDS: string[] = [
  'driver license',
  "driver's license",
  'driving licence',
  'driving license',
  'driving licence',
  'driving license',
  'category',
  'categorie',
  'endorsements',
  'licence',
  'licencia',
]

export const KEYWORDS_BY_COUNTRY: Record<CountryCode, string[]> = {
  RU: [
    'водительское удостоверение',
    'удостоверение',
    'гибдд',
    'gibdd',
    'rus',
    // на RU карточках иногда есть:
    'permis de conduire',
    'driving licence',
  ],
  DE: [
    'führerschein',
    'fahrerlaubnis',
    'klasse',
    'bundesrepublik',
  ],
  FR: [
    'permis de conduire',
    'république française',
    'republique francaise',
    'catégorie',
    'categorie',
  ],
  VN: [
    'giấy phép lái xe',
    'giay phep lai xe',
    'driving licence',
    'driving license',
    'license',
  ],
  GE: [
    'driving licence',
    'driving license',
    'georgia',
    'geo',
  ],
}

export function getKeywordsForCountry(country?: string) {
  const c = (country ?? '').toUpperCase().trim() as CountryCode
  const local = (KEYWORDS_BY_COUNTRY as Partial<Record<string, string[]>>)[c] ?? []
  return Array.from(new Set([...COMMON_KEYWORDS, ...local]))
}
