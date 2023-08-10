import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MedicalSpeciality extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const MedicalSpecialitySchema =
  SchemaFactory.createForClass(MedicalSpeciality);
