import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMedicalInsuranceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
