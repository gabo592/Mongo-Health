import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMedicalTestDto } from './dto/create-medical-test.dto';
import { UpdateMedicalTestDto } from './dto/update-medical-test.dto';
import { MedicalTest } from './entities/medical-test.entity';
import { Model } from 'mongoose';

@Injectable()
export class MedicalTestsService {
  constructor(
    @InjectModel(MedicalTest.name) private model: Model<MedicalTest>,
  ) {}

  async create(createMedicalTestDto: CreateMedicalTestDto) {
    const newMedicalTest = new this.model(createMedicalTestDto);
    return await newMedicalTest.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    const medicalTest = await this.model.findById(id);

    if (!medicalTest) {
      throw new NotFoundException(`Medical Test #${id} not found.`);
    }

    return medicalTest;
  }

  async update(id: string, updateMedicalTestDto: UpdateMedicalTestDto) {
    const medicalTest = await this.model.findByIdAndUpdate(
      id,
      { $set: updateMedicalTestDto },
      { new: true },
    );

    if (!medicalTest) {
      throw new NotFoundException(`Medical Test #${id} not found.`);
    }

    return medicalTest;
  }

  async remove(id: string) {
    const medicalTest = await this.model.findByIdAndRemove(id);

    if (!medicalTest) {
      throw new NotFoundException(`Medical Test #${id} not found.`);
    }

    return medicalTest;
  }
}
