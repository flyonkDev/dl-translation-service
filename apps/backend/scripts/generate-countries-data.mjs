import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../..');
const flagsDir = path.join(repoRoot, 'node_modules/flag-icons/flags/4x3');
const outFile = path.join(
  repoRoot,
  'apps/backend/src/reference/countries/countries.data.ts',
);

const files = fs.readdirSync(flagsDir).filter((f) => f.endsWith('.svg'));
const codes = new Set();
for (const f of files) {
  const base = f.replace('.svg', '');
  if (/^[a-z]{2}$/i.test(base)) codes.add(base.toUpperCase());
}

for (const c of ['UN', 'EU', 'XX']) codes.delete(c);
// Uninhabited, military, or not a practical license-issuing jurisdiction
for (const c of ['AQ', 'BV', 'HM', 'IO', 'TF', 'GS', 'UM', 'CP', 'DG']) codes.delete(c);

/** @type {string[]} */
const featured = [
  'US',
  'CA',
  'GB',
  'AU',
  'DE',
  'FR',
  'ES',
  'IT',
  'NL',
  'CH',
  'PL',
  'SE',
  'NO',
  'FI',
  'AT',
  'BE',
  'IE',
  'PT',
  'CZ',
  'RU',
  'UA',
  'TR',
  'CN',
  'JP',
  'KR',
  'IN',
  'BR',
  'MX',
  'AR',
  'ZA',
];

const featOrder = new Map(featured.map((c, i) => [c, i + 1]));
const BULK_PRIORITY = 100;

const dn = new Intl.DisplayNames(['en'], { type: 'region' });

const overrides = {
  CZ: 'Czechia',
  CD: 'DR Congo',
  CG: 'Congo',
  FM: 'Micronesia',
  MD: 'Moldova',
  KR: 'South Korea',
  KP: 'North Korea',
  LA: 'Laos',
  RU: 'Russia',
  GB: 'United Kingdom',
  US: 'United States',
  AE: 'United Arab Emirates',
  BO: 'Bolivia',
  TZ: 'Tanzania',
  VE: 'Venezuela',
  VN: 'Vietnam',
  MK: 'North Macedonia',
  PS: 'Palestine',
  CI: "Côte d'Ivoire",
};

const rows = [];
for (const code of codes) {
  let name = overrides[code] ?? dn.of(code);
  if (!name || /^[A-Z]{2}$/.test(name)) name = code;
  const priority = featOrder.get(code) ?? BULK_PRIORITY;
  rows.push({ code, name, priority });
}

rows.sort((a, b) => {
  if (a.priority !== b.priority) return a.priority - b.priority;
  return a.name.localeCompare(b.name, 'en');
});

function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

let ts = `import type { CountryDTO } from './dto/country.dto';

/**
 * Issuing countries and territories whose flags exist in flag-icons (ISO 3166-1 alpha-2).
 * Dropped: uninhabited / non-issuer (AQ, BV, HM, IO, TF, GS, UM, CP, DG) and org placeholders (UN, EU, XX).
 *
 * Priority model:
 * - 1–30: featured travel / rental markets (shown first).
 * - 100: everyone else, ordered A–Z by English name after the featured block.
 */

export const COUNTRIES_MVP: CountryDTO[] = [
`;

for (const r of rows) {
  ts += `  { code: '${r.code}', name: '${esc(r.name)}', priority: ${r.priority} },\n`;
}

ts += `];
`;

fs.writeFileSync(outFile, ts, 'utf8');
console.log(`Wrote ${rows.length} countries to ${path.relative(repoRoot, outFile)}`);
