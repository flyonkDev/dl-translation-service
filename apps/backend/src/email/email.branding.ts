import path from 'node:path';
import fs from 'node:fs';

function getEnv(name: string): string | undefined {
  const v = process.env[name];
  if (v == null) return undefined;
  const trimmed = v.trim();
  return trimmed.length ? trimmed : undefined;
}

function readTextFileSafe(absPath: string): string | undefined {
  try {
    return fs.readFileSync(absPath, 'utf8');
  } catch {
    return undefined;
  }
}

export function resolveEmailLogoDataUri(): {
  logoDataUri?: string;
  logoUrl?: string;
  productUrl?: string;
} {
  const productUrl = getEnv('PRODUCT_URL');

  // Prefer explicit URL if provided
  const logoUrl = getEnv('EMAIL_LOGO_URL');
  if (logoUrl) return { logoUrl, productUrl };

  // Next best: serve from backend as a normal URL (best compatibility for Gmail/Outlook)
  const publicBase = getEnv('EMAIL_PUBLIC_BASE_URL') ?? getEnv('PUBLIC_API_BASE_URL');
  if (publicBase) {
    const base = publicBase.replace(/\/+$/, '');
    return { logoUrl: `${base}/api/email/logo.svg`, productUrl };
  }

  // Otherwise, optionally inline the repo SVG (works in many clients; some may strip data URIs)
  const inline = getEnv('EMAIL_LOGO_INLINE');
  const enabled = inline === '1' || inline === 'true';
  if (!enabled) return { productUrl };

  const defaultRel = path.join(
    '..',
    '..',
    'packages',
    'ui-kit',
    'assets',
    'branding',
    'idp-companion-logo-full.svg',
  );
  const rel = getEnv('EMAIL_LOGO_ASSET_PATH') ?? defaultRel;
  const abs = path.resolve(process.cwd(), rel);
  const svg = readTextFileSafe(abs);
  if (!svg) return { productUrl };

  const base64 = Buffer.from(svg, 'utf8').toString('base64');
  const logoDataUri = `data:image/svg+xml;base64,${base64}`;
  return { logoDataUri, productUrl };
}

