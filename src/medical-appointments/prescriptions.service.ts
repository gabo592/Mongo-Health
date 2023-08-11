import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { Prescription } from './entities/prescription.entity';
import { Model } from 'mongoose';

@Injectable()
export class PrescriptionsService {
  constructor(
    @InjectModel(Prescription.name) private model: Model<Prescription>,
  ) {}

  async create(createPrescriptionDto: CreatePrescriptionDto) {
    const newPrescription = new this.model(createPrescriptionDto);
    return await newPrescription.save();
  }

  async findAll() {
    return await this.model
      .find()
      .populate('medicine')
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
    const prescription = await this.model
      .findById(id)
      .populate('medicine')
      .populate({
        path: 'doctor',
        populate: {
          path: 'specialties',
          model: 'MedicalSpeciality',
        },
      })
      .populate('patient');

    if (!prescription) {
      throw new NotFoundException(`Prescription #${id} not found.`);
    }

    return prescription;
  }

  async update(id: string, updatePrescriptionDto: UpdatePrescriptionDto) {
    const prescription = await this.model.findByIdAndUpdate(
      id,
      { $set: updatePrescriptionDto },
      { new: true },
    );

    if (!prescription) {
      throw new NotFoundException(`Prescription #${id} not found.`);
    }

    return prescription;
  }

  async remove(id: string) {
    const prescription = await this.model.findByIdAndRemove(id);

    if (!prescription) {
      throw new NotFoundException(`Prescription #${id} not found.`);
    }

    return prescription;
  }
}
