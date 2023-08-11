import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMedicalAppointmentDto } from './dto/create-medical-appointment.dto';
import { UpdateMedicalAppointmentDto } from './dto/update-medical-appointment.dto';
import { MedicalAppointment } from './entities/medical-appointment.entity';
import { Model } from 'mongoose';

@Injectable()
export class MedicalAppointmentsService {
  constructor(
    @InjectModel(MedicalAppointment.name)
    private model: Model<MedicalAppointment>,
  ) {}

  async create(createMedicalAppointmentDto: CreateMedicalAppointmentDto) {
    const newMedicalAppointment = new this.model(createMedicalAppointmentDto);
    return await newMedicalAppointment.save();
  }

  async findAll() {
    return await this.model
      .find()
      .populate({
        path: 'doctor',
        populate: {
          path: 'specialties',
          model: 'MedicalSpeciality',
        },
      })
      .populate('patient');
  }

  async findOne(id: string) {
    const medicalAppointment = await this.model
      .findById(id)
      .populate({
        path: 'doctor',
        populate: {
          path: 'specialties',
          model: 'MedicalSpeciality',
        },
      })
      .populate('patient');

    if (!medicalAppointment) {
      throw new NotFoundException(`Medical Appointment #${id} not found.`);
    }

    return medicalAppointment;
  }

  async update(
    id: string,
    updateMedicalAppointmentDto: UpdateMedicalAppointmentDto,
  ) {
    const medicalAppointment = await this.model.findByIdAndUpdate(
      id,
      { $set: updateMedicalAppointmentDto },
      { new: true },
    );

    if (!medicalAppointment) {
      throw new NotFoundException(`Medical Appointment #${id} not found.`);
    }

    return medicalAppointment;
  }

  async remove(id: string) {
    const medicalAppointment = await this.model.findByIdAndRemove(id);

    if (!medicalAppointment) {
      throw new NotFoundException(`Medical Appointment #${id} not found.`);
    }

    return medicalAppointment;
  }
}
