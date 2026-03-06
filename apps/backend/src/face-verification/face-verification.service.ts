/**
 * FaceVerificationService — сравнение лица на фото прав и headshot через AWS Rekognition.
 *
 * Использует CompareFaces: передаём два изображения (bytes), Rekognition находит лица
 * и возвращает массив совпадений с Similarity 0–100. Мы задаём SimilarityThreshold
 * (из env, по умолчанию 85) — в ответ попадут только пары с similarity >= порога.
 * samePerson = есть хотя бы одно совпадение выше порога.
 *
 * Credentials берутся из env: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION.
 */

import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import {
  CompareFacesCommand,
  InvalidParameterException,
  RekognitionClient,
} from '@aws-sdk/client-rekognition';
import * as fs from 'node:fs';
import * as path from 'node:path';

export interface FaceCompareResult {
  samePerson: boolean;
  similarity?: number;
}

@Injectable()
export class FaceVerificationService {
  private readonly logger = new Logger(FaceVerificationService.name);

  private readonly client: RekognitionClient;
  /** Порог 0–100. Лицо считаем «тем же», если similarity >= threshold. */
  private readonly similarityThreshold: number;

  constructor() {
    const region = process.env.AWS_REGION ?? 'eu-central-1';
    this.client = new RekognitionClient({
      region,
      // credentials подхватываются из env: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
    });
    this.similarityThreshold = Number(
      process.env.FACE_MATCH_SIMILARITY_THRESHOLD ?? 85,
    );
  }

  /**
   * Сравнивает лицо на изображении прав (source) с лицом на headshot (target).
   * Source = license, target = headshot (так Rekognition сравнивает одно лицо source с лицами в target).
   *
   * @returns samePerson: true если есть хотя бы одно совпадение >= threshold
   * @throws BadRequestException если в одном из фото не найдено лицо (Rekognition InvalidParameterException)
   */
  async compare(
    licenseImagePath: string,
    headshotPath: string,
  ): Promise<FaceCompareResult> {
    const sourceBytes = fs.readFileSync(path.resolve(licenseImagePath));
    const targetBytes = fs.readFileSync(path.resolve(headshotPath));

    const command = new CompareFacesCommand({
      SourceImage: { Bytes: sourceBytes },
      TargetImage: { Bytes: targetBytes },
      SimilarityThreshold: this.similarityThreshold,
    });

    let response;
    try {
      response = await this.client.send(command);
    } catch (err) {
      if (err instanceof InvalidParameterException) {
        this.logger.warn(`CompareFaces InvalidParameter: ${err.message}`);
        throw new BadRequestException(
          'Could not detect a face in the license photo or in your headshot. Please use clear, front-facing photos.',
        );
      }
      throw err;
    }

    const matches = response.FaceMatches ?? [];
    const best = matches[0];
    const similarity = best?.Similarity;

    const samePerson = matches.length > 0;
    if (!samePerson) {
      this.logger.debug(
        `face compare: no match above threshold=${this.similarityThreshold}`,
      );
    } else {
      this.logger.debug(`face compare: match similarity=${similarity}`);
    }

    return { samePerson, similarity };
  }
}
