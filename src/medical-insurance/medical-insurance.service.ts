import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMedicalInsuranceDto } from './dto/create-medical-insurance.dto';
import { UpdateMedicalInsuranceDto } from './dto/update-medical-insurance.dto';
import { MedicalInsurance } from './entities/medical-insurance.entity';
import { Model } from 'mongoose';

@Injectable()
export class MedicalInsuranceService {
  constructor(
    @InjectModel(MedicalInsurance.name) private model: Model<MedicalInsurance>,
  ) {}

  async create(createMedicalInsuranceDto: CreateMedicalInsuranceDto) {
    const newMedicalInsurance = new this.model(createMedicalInsuranceDto);
    return await newMedicalInsurance.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    const medicalInsurance = await this.model.findById(id);

    if (!medicalInsurance) {
      throw new NotFoundException(`Medical Insurance #${id} not found.`);
    }

    return medicalInsurance;
  }

  async update(
    id: string,
    updateMedicalInsuranceDto: UpdateMedicalInsuranceDto,
  ) {
    const medicalInsurance = await this.model.findByIdAndUpdate(
      id,
      { $set: updateMedicalInsuranceDto },
      { new: true },
    );

    if (!medicalInsurance) {
      throw new NotFoundException(`Medical Insurance #${id} not found.`);
    }

    return medicalInsurance;
  }

  async remove(id: string) {
    const medicalInsurance = await this.model.findByIdAndRemove(id);

    if (!medicalInsurance) {
      throw new NotFoundException(`Medical Insurance #${id} not found.`);
    }

    return medicalInsurance;
  }
}
