import { Test, TestingModule } from '@nestjs/testing';
import { MedicalInsuranceController } from './medical-insurance.controller';
import { MedicalInsuranceService } from './medical-insurance.service';

describe('MedicalInsuranceController', () => {
  let controller: MedicalInsuranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalInsuranceController],
      providers: [MedicalInsuranceService],
    }).compile();

    controller = module.get<MedicalInsuranceController>(MedicalInsuranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
