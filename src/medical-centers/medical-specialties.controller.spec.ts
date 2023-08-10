import { Test, TestingModule } from '@nestjs/testing';
import { MedicalSpecialtiesController } from './medical-specialties.controller';

describe('MedicalSpecialtiesController', () => {
  let controller: MedicalSpecialtiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalSpecialtiesController],
    }).compile();

    controller = module.get<MedicalSpecialtiesController>(MedicalSpecialtiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
