import { Test, TestingModule } from '@nestjs/testing';
import { MedicalTestsController } from './medical-tests.controller';

describe('MedicalTestsController', () => {
  let controller: MedicalTestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalTestsController],
    }).compile();

    controller = module.get<MedicalTestsController>(MedicalTestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
