import { IsNotEmpty, IsDate, IsString, IsArray } from 'class-validator';

export class CreateMedicalRecordDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  patient: string;

  @IsNotEmpty()
  @IsArray()
  allergies: string[];

  @IsNotEmpty()
  @IsArray()
  tests: string[];
}
