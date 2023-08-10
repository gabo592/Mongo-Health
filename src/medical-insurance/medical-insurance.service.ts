import { Injectable } from '@nestjs/common';
import { CreateMedicalInsuranceDto } from './dto/create-medical-insurance.dto';
import { UpdateMedicalInsuranceDto } from './dto/update-medical-insurance.dto';

@Injectable()
export class MedicalInsuranceService {
  create(createMedicalInsuranceDto: CreateMedicalInsuranceDto) {
    return 'This action adds a new medicalInsurance';
  }

  findAll() {
    return `This action returns all medicalInsurance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalInsurance`;
  }

  update(id: number, updateMedicalInsuranceDto: UpdateMedicalInsuranceDto) {
    return `This action updates a #${id} medicalInsurance`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalInsurance`;
  }
}
