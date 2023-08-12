import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMedicalCenterDto } from './dto/create-medical-center.dto';
import { UpdateMedicalCenterDto } from './dto/update-medical-center.dto';
import { MedicalCenter } from './entities/medical-center.entity';
import { Model } from 'mongoose';

@Injectable()
export class MedicalCentersService {
  constructor(
    @InjectModel(MedicalCenter.name) private model: Model<MedicalCenter>,
  ) {}

  async create(createMedicalCenterDto: CreateMedicalCenterDto) {
    const newMedicalCenter = new this.model(createMedicalCenterDto);
    return await newMedicalCenter.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    const medicalCenter = await this.model.findById(id);

    if (!medicalCenter) {
      throw new NotFoundException(`Medical Center #${id} not found.`);
    }

    return medicalCenter;
  }

  async update(id: string, updateMedicalCenterDto: UpdateMedicalCenterDto) {
    const medicalCenter = await this.model.findByIdAndUpdate(
      id,
      { $set: updateMedicalCenterDto },
      { new: true },
    );

    if (!medicalCenter) {
      throw new NotFoundException(`Medical Center #${id} not found.`);
    }

    return medicalCenter;
  }

  async remove(id: string) {
    const medicalCenter = await this.model.findByIdAndRemove(id);

    if (!medicalCenter) {
      throw new NotFoundException(`Medical Center #${id} not found.`);
    }

    return medicalCenter;
  }
}
