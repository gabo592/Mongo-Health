import { PartialType } from '@nestjs/swagger';
import { CreateMedicalInsuranceDto } from './create-medical-insurance.dto';

export class UpdateMedicalInsuranceDto extends PartialType(CreateMedicalInsuranceDto) {}
