import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { Model } from 'mongoose';

@Injectable()
export class PatientsService {
  constructor(@InjectModel(Patient.name) private model: Model<Patient>) {}

  async create(createPatientDto: CreatePatientDto) {
    const newPatient = new this.model(createPatientDto);
    return await newPatient.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    const patient = await this.model.findById(id);

    if (!patient) {
      throw new NotFoundException(`Patient #${id} not found`);
    }

    return patient;
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    const patient = await this.model.findByIdAndUpdate(
      id,
      { $set: updatePatientDto },
      { new: true },
    );

    if (!patient) {
      throw new NotFoundException(`Patient #${id} not found`);
    }

    return patient;
  }

  async remove(id: string) {
    const patient = await this.model.findByIdAndRemove(id);

    if (!patient) {
      throw new NotFoundException(`Patient #${id} not found`);
    }

    return patient;
  }
}
