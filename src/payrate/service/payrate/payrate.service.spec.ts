import { Test, TestingModule } from '@nestjs/testing';
import { PayrateService } from './payrate.service';

describe('PayrateService', () => {
  let service: PayrateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayrateService],
    }).compile();

    service = module.get<PayrateService>(PayrateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
