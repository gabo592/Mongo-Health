import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
import { Model } from 'mongoose';

@Injectable()
export class DoctorsService {
  constructor(@InjectModel(Doctor.name) private model: Model<Doctor>) {}

  async create(createDoctorDto: CreateDoctorDto) {
    const newDoctor = new this.model(createDoctorDto);
    return await newDoctor.save();
  }

  async findAll() {
    return await this.model.find().populate('specialties');
  }

  async findOne(id: string) {
    const doctor = await this.model.findById(id);

    if (!doctor) {
      throw new NotFoundException(`Doctor #${id} not found.`);
    }

    return doctor;
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {
    const doctor = await this.model.findByIdAndUpdate(
      id,
      { $set: updateDoctorDto },
      { new: true },
    );

    if (!doctor) {
      throw new NotFoundException(`Doctor #${id} not found.`);
    }

    return doctor;
  }

  async remove(id: string) {
    const doctor = await this.model.findByIdAndRemove(id);

    if (!doctor) {
      throw new NotFoundException(`Doctor #${id} not found.`);
    }

    return doctor;
  }
}
