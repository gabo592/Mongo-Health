import { PartialType } from '@nestjs/swagger';
import { CreateMedicalSpecialityDto } from './create-medical-speciality.dto';

export class UpdateMedicalSpecialityDto extends PartialType(
  CreateMedicalSpecialityDto,
) {}
