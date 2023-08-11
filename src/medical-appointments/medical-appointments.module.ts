import { Module } from '@nestjs/common';
import { MedicalAppointmentsService } from './medical-appointments.service';
import { MedicalAppointmentsController } from './medical-appointments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalAppointment,
  MedicalAppointmentSchema,
} from './entities/medical-appointment.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MedicalAppointment.name,
        schema: MedicalAppointmentSchema,
      },
    ]),
  ],
  controllers: [MedicalAppointmentsController],
  providers: [MedicalAppointmentsService],
})
export class MedicalAppointmentsModule {}
