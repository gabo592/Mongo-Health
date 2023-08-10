import { Module } from '@nestjs/common';
import { MedicalInsuranceService } from './medical-insurance.service';
import { MedicalInsuranceController } from './medical-insurance.controller';

@Module({
  controllers: [MedicalInsuranceController],
  providers: [MedicalInsuranceService],
})
export class MedicalInsuranceModule {}
