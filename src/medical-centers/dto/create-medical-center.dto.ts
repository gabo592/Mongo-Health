import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateMedicalCenterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsArray()
  schedules: string[];

  @IsNotEmpty()
  @IsArray()
  specialties: string[];
}
