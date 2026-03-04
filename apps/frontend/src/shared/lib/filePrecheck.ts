export type PrecheckResult =
  | { ok: true }
  | { ok: false; reason: string };

/** Headshot: backend allows 10 MB, image (jpeg/png/webp) only */
const HEADSHOT_MAX_BYTES = 10 * 1024 * 1024;
const HEADSHOT_TYPES = /^image\/(jpe?g|png|webp)$/i;

/** License: backend allows 15 MB, image (jpeg/png/webp) or PDF */
const LICENSE_MAX_BYTES = 15 * 1024 * 1024;
const LICENSE_IMAGE_TYPES = /^image\/(jpe?g|png|webp)$/i;

export function runHeadshotPrecheck(file: File): PrecheckResult {
  const okType = HEADSHOT_TYPES.test(file.type);
  const okSize = file.size <= HEADSHOT_MAX_BYTES;
  if (!okType) return { ok: false, reason: 'Unsupported file type' };
  if (!okSize) return { ok: false, reason: 'File too large' };
  return { ok: true };
}

export function runFilePrecheck(file: File): PrecheckResult {
  const isImage = LICENSE_IMAGE_TYPES.test(file.type);
  const isPdf = file.type === 'application/pdf';
  const okType = isImage || isPdf;
  const okSize = file.size <= LICENSE_MAX_BYTES;
  if (!okType) return { ok: false, reason: 'Unsupported file type' };
  if (!okSize) return { ok: false, reason: 'File too large' };
  return { ok: true };
}
