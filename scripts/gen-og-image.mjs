import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const repoRoot = process.cwd()
const logoPath = path.join(
  repoRoot,
  'packages',
  'ui-kit',
  'assets',
  'branding',
  'idp-logo-header.svg',
)

const svg = fs.readFileSync(logoPath, 'utf8')
const viewBoxMatch = svg.match(/viewBox="([^"]+)"/)
const viewBox = viewBoxMatch?.[1] ?? '0 0 260 44'
const inner = svg
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')

const W = 1200
const H = 630
const bg = '#F7FBFA'
const sub = '#7a8aaa'

const wrapper = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`,
  `<rect width="${W}" height="${H}" fill="${bg}"/>`,
  `<g opacity="0.08">`,
  `<path d="M80 120 C 260 60, 520 60, 700 120 S 1040 180, 1120 120" fill="none" stroke="${sub}" stroke-width="6"/>`,
  `<path d="M80 220 C 300 160, 560 160, 760 220 S 1040 300, 1120 220" fill="none" stroke="${sub}" stroke-width="4"/>`,
  `</g>`,
  `<g transform="translate(150 255) scale(3.0)">`,
  `<svg width="260" height="44" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`,
  `</g>`,
  `</svg>`,
].join('\n')

const outPath = path.join(repoRoot, 'apps', 'landing', 'public', 'og-image.png')
await sharp(Buffer.from(wrapper)).png({ quality: 100 }).toFile(outPath)
console.log(`Generated ${outPath}`)

