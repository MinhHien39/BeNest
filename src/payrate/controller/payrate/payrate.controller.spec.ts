import { Test, TestingModule } from '@nestjs/testing';
import { PayrateController } from './payrate.controller';

describe('PayrateController', () => {
  let controller: PayrateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrateController],
    }).compile();

    controller = module.get<PayrateController>(PayrateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
