import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MedicalInsurance extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const MedicalInsuranceSchema =
  SchemaFactory.createForClass(MedicalInsurance);
