import { Test, TestingModule } from '@nestjs/testing';
import { MedicalInsuranceService } from './medical-insurance.service';

describe('MedicalInsuranceService', () => {
  let service: MedicalInsuranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalInsuranceService],
    }).compile();

    service = module.get<MedicalInsuranceService>(MedicalInsuranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
