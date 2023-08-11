import { PartialType } from '@nestjs/swagger';
import { CreateMedicalTestDto } from './create-medical-test.dto';

export class UpdateMedicalTestDto extends PartialType(CreateMedicalTestDto) {}
