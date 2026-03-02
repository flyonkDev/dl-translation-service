export function extractApiErrorMessage(err: unknown, fallback = 'Server error'): string {
  if (!err) return fallback;
  if (typeof err === 'string') return err;

  if (typeof err === 'object') {
    const e = err as { message?: string; data?: { message?: string; error?: string } };
    return e?.message || e?.data?.message || e?.data?.error || fallback;
  }

  return fallback;
}
