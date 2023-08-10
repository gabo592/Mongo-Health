import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMedicalSpecialityDto } from './dto/create-medical-speciality.dto';
import { UpdateMedicalSpecialityDto } from './dto/update-medical-speciality.dto';
import { Model } from 'mongoose';
import { MedicalSpeciality } from './entities/medical-speciality.entity';

@Injectable()
export class MedicalSpecialtiesService {
  constructor(
    @InjectModel(MedicalSpeciality.name)
    private model: Model<MedicalSpeciality>,
  ) {}

  async create(createMedicalSpecialityDto: CreateMedicalSpecialityDto) {
    const newMedicalSpeciality = new this.model(createMedicalSpecialityDto);
    return await newMedicalSpeciality.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    const medicalSpeciality = await this.model.findById(id);

    if (!medicalSpeciality) {
      throw new NotFoundException(`Medical Speciality #${id} not found.`);
    }

    return medicalSpeciality;
  }

  async update(
    id: string,
    updateMedicalSpecialityDto: UpdateMedicalSpecialityDto,
  ) {
    const medicalSpeciality = await this.model.findByIdAndUpdate(
      id,
      { $set: updateMedicalSpecialityDto },
      { new: true },
    );

    if (!medicalSpeciality) {
      throw new NotFoundException(`Medical Speciality #${id} not found.`);
    }

    return medicalSpeciality;
  }

  async remove(id: string) {
    const medicalSpeciality = await this.model.findByIdAndRemove(id);

    if (!medicalSpeciality) {
      throw new NotFoundException(`Medical Speciality #${id} not found.`);
    }

    return medicalSpeciality;
  }
}
