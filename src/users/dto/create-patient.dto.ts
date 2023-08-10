import {
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsEmail,
  IsDate,
} from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsDate()
  birthday: Date;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsPhoneNumber('NI')
  phoneNumber: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
