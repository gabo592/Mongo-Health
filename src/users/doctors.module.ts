import { Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from './entities/doctor.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Doctor.name,
        schema: DoctorSchema,
      },
    ]),
  ],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
