import { Module } from '@nestjs/common';
import { MedicalAppointmentsService } from './medical-appointments.service';
import { MedicalAppointmentsController } from './medical-appointments.controller';

@Module({
  controllers: [MedicalAppointmentsController],
  providers: [MedicalAppointmentsService],
})
export class MedicalAppointmentsModule {}
