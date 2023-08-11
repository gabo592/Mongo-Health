import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMedicineDto {
  @IsNotEmpty()
  @IsString()
  scientificName: string;

  @IsNotEmpty()
  @IsString()
  tradeName: string;

  @IsNotEmpty()
  @IsString()
  dose: string;

  @IsNotEmpty()
  @IsString()
  instructions: string;

  @IsNotEmpty()
  @IsString()
  sideEffects: string;
}
