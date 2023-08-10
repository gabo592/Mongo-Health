import { Module } from '@nestjs/common';
import { MedicalCentersService } from './medical-centers.service';
import { MedicalCentersController } from './medical-centers.controller';
import { MedicalSpecialtiesModule } from './medical-specialties.module';

@Module({
  controllers: [MedicalCentersController],
  providers: [MedicalCentersService],
  imports: [MedicalSpecialtiesModule],
})
export class MedicalCentersModule {}
