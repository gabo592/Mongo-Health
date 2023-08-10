import { Injectable } from '@nestjs/common';
import { CreateMedicalAppointmentDto } from './dto/create-medical-appointment.dto';
import { UpdateMedicalAppointmentDto } from './dto/update-medical-appointment.dto';

@Injectable()
export class MedicalAppointmentsService {
  create(createMedicalAppointmentDto: CreateMedicalAppointmentDto) {
    return 'This action adds a new medicalAppointment';
  }

  findAll() {
    return `This action returns all medicalAppointments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalAppointment`;
  }

  update(id: number, updateMedicalAppointmentDto: UpdateMedicalAppointmentDto) {
    return `This action updates a #${id} medicalAppointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalAppointment`;
  }
}
