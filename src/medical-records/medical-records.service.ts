import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { MedicalRecord } from './entities/medical-record.entity';
import { Model } from 'mongoose';

@Injectable()
export class MedicalRecordsService {
  constructor(
    @InjectModel(MedicalRecord.name) private model: Model<MedicalRecord>,
  ) {}

  async create(createMedicalRecordDto: CreateMedicalRecordDto) {
    const newMedicalRecord = new this.model(createMedicalRecordDto);
    return await newMedicalRecord.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    const medicalRecord = await this.model.findById(id);

    if (!medicalRecord) {
      throw new NotFoundException(`Medical Record #${id} not found.`);
    }

    return medicalRecord;
  }

  async update(id: string, updateMedicalRecordDto: UpdateMedicalRecordDto) {
    const medicalRecord = await this.model.findByIdAndUpdate(
      id,
      { $set: updateMedicalRecordDto },
      { new: true },
    );

    if (!medicalRecord) {
      throw new NotFoundException(`Medical Record #${id} not found.`);
    }

    return medicalRecord;
  }

  async remove(id: string) {
    const medicalRecord = await this.model.findByIdAndRemove(id);

    if (!medicalRecord) {
      throw new NotFoundException(`Medical Record #${id} not found.`);
    }

    return medicalRecord;
  }
}
