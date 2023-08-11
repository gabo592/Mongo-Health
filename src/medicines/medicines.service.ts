import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Model } from 'mongoose';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class MedicinesService {
  constructor(@InjectModel(Medicine.name) private model: Model<Medicine>) {}

  async create(createMedicineDto: CreateMedicineDto) {
    const newMedicine = new this.model(createMedicineDto);
    return await newMedicine.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    const medicine = await this.model.findById(id);

    if (!medicine) {
      throw new NotFoundException(`Medicine #${id} not found.`);
    }

    return medicine;
  }

  async update(id: string, updateMedicineDto: UpdateMedicineDto) {
    const medicine = await this.model.findByIdAndUpdate(
      id,
      { $set: updateMedicineDto },
      { new: true },
    );

    if (!medicine) {
      throw new NotFoundException(`Medicine #${id} not found.`);
    }

    return medicine;
  }

  async remove(id: string) {
    const medicine = await this.model.findByIdAndRemove(id);

    if (!medicine) {
      throw new NotFoundException(`Medicine #${id} not found.`);
    }

    return medicine;
  }
}
