/**
 * VerifyStorageService — временное хранение файла прав на диске (TTL 1 час).
 *
 * Зачем отдельный сервис:
 * - Один класс отвечает за "где и как лежат файлы верификации" (Single Responsibility).
 * - Легко тестировать и менять (например, потом хранить в S3) без трогания VerifyService/Store.
 *
 * Поведение:
 * 1. save(file) — переносит загруженный Multer'ом файл в папку uploads/verify/<uuid>.<ext>,
 *    возвращает абсолютный путь. Вызываем только при status passed/review.
 * 2. deleteByPath(path) — удаляет файл по пути; только если путь внутри нашей verify-папки (безопасность).
 * 3. cleanupStaleFilesOlderThan(ttlMs) — при старте приложения удаляет файлы старше ttlMs
 *    (чтобы после рестарта сервера "забытые" файлы не копились).
 */

import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import type { Express } from 'express';

const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
const VERIFY_SUBDIR = 'verify';

@Injectable()
export class VerifyStorageService implements OnModuleInit {
  private readonly logger = new Logger(VerifyStorageService.name);

  /** Абсолютный путь к папке, где лежат файлы прав (uploads/verify). */
  private readonly verifyDir: string;

  constructor() {
    this.verifyDir = path.resolve(UPLOAD_DIR, VERIFY_SUBDIR);
  }

  /**
   * Вызывается Nest при старте приложения (после создания всех зависимостей).
   * Удаляем файлы старше TTL, чтобы после падения/рестарта сервера не копился мусор.
   */
  onModuleInit(): void {
    const ttlMs = Number(process.env.VERIFY_TTL_MS ?? 60 * 60 * 1000);
    this.cleanupStaleFilesOlderThan(ttlMs);
  }

  /**
   * Сохраняем файл прав в папку verify с уникальным именем.
   * Multer уже положил файл во временное место (file.path) — мы его переносим (move),
   * чтобы не дублировать и не оставлять файл в общей папке uploads.
   *
   * @returns Абсолютный путь к сохранённому файлу (его будем класть в snapshot и потом читать при face match).
   */
  async save(file: Express.Multer.File): Promise<string> {
    if (!fs.existsSync(this.verifyDir)) {
      fs.mkdirSync(this.verifyDir, { recursive: true });
    }

    const ext = path.extname(file.originalname) || '.jpg';
    const filename = `${randomUUID()}${ext}`;
    const destPath = path.join(this.verifyDir, filename);

    await fs.promises.rename(file.path, destPath);

    return path.resolve(destPath);
  }

  /**
   * Удаляем файл по пути. Разрешено только если путь лежит внутри нашей verify-папки,
   * иначе кто-то мог бы передать путь типа /etc/passwd (path traversal).
   */
  deleteByPath(filePath: string | undefined): void {
    if (!filePath) return;

    const resolved = path.resolve(filePath);
    const base = path.resolve(this.verifyDir);
    if (!resolved.startsWith(base)) {
      this.logger.warn(`deleteByPath rejected path outside verify dir: ${filePath}`);
      return;
    }

    try {
      if (fs.existsSync(resolved)) fs.unlinkSync(resolved);
    } catch (err) {
      this.logger.warn(`deleteByPath failed path=${resolved} err=${err}`);
    }
  }

  /**
   * Удаляем все файлы в папке verify, которые старше ttlMs (по времени модификации).
   * Вызывается при старте приложения — так мы чистим файлы после рестарта сервера,
   * когда in-memory store уже пустой и cleanupExpired по ним не отработал.
   */
  cleanupStaleFilesOlderThan(ttlMs: number): void {
    if (!fs.existsSync(this.verifyDir)) return;

    const now = Date.now();
    let removed = 0;

    const entries = fs.readdirSync(this.verifyDir, { withFileTypes: true });
    for (const ent of entries) {
      if (!ent.isFile()) continue;
      const fullPath = path.join(this.verifyDir, ent.name);
      try {
        const stat = fs.statSync(fullPath);
        if (now - stat.mtimeMs > ttlMs) {
          fs.unlinkSync(fullPath);
          removed += 1;
        }
      } catch (err) {
        this.logger.warn(`cleanupStale: skip ${ent.name} err=${err}`);
      }
    }

    if (removed > 0) {
      this.logger.log(`cleanupStaleFilesOlderThan removed=${removed} dir=${this.verifyDir}`);
    }
  }
}
