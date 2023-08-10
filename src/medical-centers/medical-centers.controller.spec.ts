import { Test, TestingModule } from '@nestjs/testing';
import { MedicalCentersController } from './medical-centers.controller';
import { MedicalCentersService } from './medical-centers.service';

describe('MedicalCentersController', () => {
  let controller: MedicalCentersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalCentersController],
      providers: [MedicalCentersService],
    }).compile();

    controller = module.get<MedicalCentersController>(MedicalCentersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
