import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreatePrescriptionDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  medicine: string;

  @IsNotEmpty()
  @IsString()
  doce: string;

  @IsNotEmpty()
  @IsString()
  doctor: string;

  @IsNotEmpty()
  @IsString()
  patient: string;
}
