const MAX_SIZE_BYTES = 15 * 1024 * 1024; // 15 MB
const IMAGE_TYPES = /^image\/(jpe?g|png|webp|heic)$/i;

export type PrecheckResult =
  | { ok: true }
  | { ok: false; reason: string };

export async function runFilePrecheck(file: File): Promise<PrecheckResult> {
  const isImage = IMAGE_TYPES.test(file.type);
  const isPdf = file.type === 'application/pdf';
  const okType = isImage || isPdf;
  const okSize = file.size <= MAX_SIZE_BYTES;

  if (!okType) return { ok: false, reason: 'Unsupported file type' };
  if (!okSize) return { ok: false, reason: 'File too large' };
  return { ok: true };
}
