import { Test, TestingModule } from '@nestjs/testing';
import { VerifyService } from './verify.service';
import { VerificationStore } from './verify.store';

describe('VerifyService', () => {
  let service: VerifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifyService, VerificationStore],
    }).compile();

    service = module.get<VerifyService>(VerifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
