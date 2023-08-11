import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  IsPositive,
} from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  age: number;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsArray()
  specialties: string[];
}
