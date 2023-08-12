import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalCentersService } from './medical-centers.service';
import { MedicalCentersController } from './medical-centers.controller';
import { MedicalSpecialtiesModule } from './medical-specialties.module';
import {
  MedicalCenter,
  MedicalCenterSchema,
} from './entities/medical-center.entity';

@Module({
  controllers: [MedicalCentersController],
  providers: [MedicalCentersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: MedicalCenter.name,
        schema: MedicalCenterSchema,
      },
    ]),
    MedicalSpecialtiesModule,
  ],
})
export class MedicalCentersModule {}
