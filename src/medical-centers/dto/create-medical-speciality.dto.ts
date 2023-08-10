import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMedicalSpecialityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
