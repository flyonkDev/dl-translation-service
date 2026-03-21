import { Test, TestingModule } from '@nestjs/testing';
import { VerifyService } from './verify.service';
import { VerificationStore } from './verify.store';
import { VerifyStorageService } from './verify-storage.service';

describe('VerifyService', () => {
  let service: VerifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VerifyService,
        VerificationStore,
        {
          provide: VerifyStorageService,
          useValue: {
            save: jest.fn(),
            deleteByPath: jest.fn(),
            onModuleInit: jest.fn(),
            cleanupStaleFilesOlderThan: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<VerifyService>(VerifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
