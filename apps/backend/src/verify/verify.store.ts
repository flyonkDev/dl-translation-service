// apps/backend/src/verify/verify.store.ts
import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type { VerifyLicenseResponseDto } from './verify.dto';
import { VerifyStorageService } from './verify-storage.service';

/**
 * Snapshot — внутреннее представление результата verify.
 * ВАЖНО: не конфликтуем по именам с DTO.
 * DTO отдаёт expiresAt: string (ISO), а внутри мы храним expiresAtMs: number (epoch ms).
 *
 * licenseImagePath — абсолютный путь к файлу прав на диске (только при status passed/review).
 * Нужен для этапа 2: сравнение лица с прав с headshot через AWS Rekognition.
 */
export type VerificationSnapshot =
  Omit<VerifyLicenseResponseDto, 'expiresAt'> & {
    createdAtMs: number;
    expiresAtMs: number;
    fileMeta?: {
      originalName: string;
      mimetype: string;
      size: number;
    };
    /** Путь к сохранённому файлу прав (uploads/verify/<uuid>.<ext>). */
    licenseImagePath?: string;
  };

@Injectable()
export class VerificationStore {
  private readonly logger = new Logger(VerificationStore.name);

  private readonly ttlMs = Number(process.env.VERIFY_TTL_MS ?? 60 * 60 * 1000); // 60 min
  private readonly cleanupEveryMs = Number(process.env.VERIFY_CLEANUP_MS ?? 10 * 60 * 1000); // 10 min

  private readonly map = new Map<string, VerificationSnapshot>();
  private cleanupTimer?: NodeJS.Timeout;

  constructor(private readonly verifyStorage: VerifyStorageService) {
    this.cleanupTimer = setInterval(() => this.cleanupExpired(), this.cleanupEveryMs);
    this.cleanupTimer.unref?.();
  }

  createAndSave(
    payload: Omit<VerificationSnapshot, 'verificationId' | 'createdAtMs' | 'expiresAtMs'>,
  ): VerificationSnapshot {
    const verificationId = randomUUID();
    const createdAtMs = Date.now();
    const expiresAtMs = createdAtMs + this.ttlMs;

    const snapshot: VerificationSnapshot = {
      ...payload,
      verificationId,
      createdAtMs,
      expiresAtMs,
    };

    this.map.set(verificationId, snapshot);
    return snapshot;
  }

  get(verificationId: string): VerificationSnapshot | null {
    const s = this.map.get(verificationId);
    if (!s) return null;

    if (Date.now() > s.expiresAtMs) {
      this.verifyStorage.deleteByPath(s.licenseImagePath);
      this.map.delete(verificationId);
      return null;
    }
    return s;
  }

  /**
   * Удаляем протухшие снимки из памяти и соответствующие файлы прав с диска.
   * Вызывается по таймеру раз в cleanupEveryMs (по умолчанию 10 мин).
   */
  private cleanupExpired(): void {
    const now = Date.now();
    let removed = 0;

    for (const [id, s] of this.map) {
      if (now > s.expiresAtMs) {
        this.verifyStorage.deleteByPath(s.licenseImagePath);
        this.map.delete(id);
        removed += 1;
      }
    }

    if (removed > 0) {
      this.logger.debug(`cleanup removed=${removed}, left=${this.map.size}`);
    }
  }
}
