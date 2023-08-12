import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalInsuranceService } from './medical-insurance.service';
import { MedicalInsuranceController } from './medical-insurance.controller';
import {
  MedicalInsurance,
  MedicalInsuranceSchema,
} from './entities/medical-insurance.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MedicalInsurance.name,
        schema: MedicalInsuranceSchema,
      },
    ]),
  ],
  controllers: [MedicalInsuranceController],
  providers: [MedicalInsuranceService],
})
export class MedicalInsuranceModule {}
