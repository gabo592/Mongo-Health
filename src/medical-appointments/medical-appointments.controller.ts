import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalAppointmentsService } from './medical-appointments.service';
import { CreateMedicalAppointmentDto } from './dto/create-medical-appointment.dto';
import { UpdateMedicalAppointmentDto } from './dto/update-medical-appointment.dto';

@Controller('medical-appointments')
export class MedicalAppointmentsController {
  constructor(private readonly medicalAppointmentsService: MedicalAppointmentsService) {}

  @Post()
  create(@Body() createMedicalAppointmentDto: CreateMedicalAppointmentDto) {
    return this.medicalAppointmentsService.create(createMedicalAppointmentDto);
  }

  @Get()
  findAll() {
    return this.medicalAppointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalAppointmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalAppointmentDto: UpdateMedicalAppointmentDto) {
    return this.medicalAppointmentsService.update(+id, updateMedicalAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalAppointmentsService.remove(+id);
  }
}
