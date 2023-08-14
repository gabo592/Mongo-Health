import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchema } from './entities/patient.entity';
import { DoctorsModule } from './doctors.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Patient.name,
        schema: PatientSchema,
      },
    ]),
    MulterModule.register({
      dest: './uploads',
    }),
    DoctorsModule,
  ],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
