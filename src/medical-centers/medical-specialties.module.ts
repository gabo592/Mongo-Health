import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalSpeciality,
  MedicalSpecialitySchema,
} from './entities/medical-speciality.entity';
import { MedicalSpecialtiesService } from './medical-specialties.service';
import { MedicalSpecialtiesController } from './medical-specialties.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MedicalSpeciality.name,
        schema: MedicalSpecialitySchema,
      },
    ]),
  ],
  controllers: [MedicalSpecialtiesController],
  providers: [MedicalSpecialtiesService],
})
export class MedicalSpecialtiesModule {}
