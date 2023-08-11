import { Module } from '@nestjs/common';
import { MedicalAppointmentsService } from './medical-appointments.service';
import { MedicalAppointmentsController } from './medical-appointments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalAppointment,
  MedicalAppointmentSchema,
} from './entities/medical-appointment.entity';
import { PrescriptionsModule } from './prescriptions.module';
import { MedicalTestsModule } from './medical-tests.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MedicalAppointment.name,
        schema: MedicalAppointmentSchema,
      },
    ]),
    PrescriptionsModule,
    MedicalTestsModule,
  ],
  controllers: [MedicalAppointmentsController],
  providers: [MedicalAppointmentsService],
})
export class MedicalAppointmentsModule {}
