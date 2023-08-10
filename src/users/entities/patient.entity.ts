import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Patient extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  birthday: Date;

  @Prop()
  gender: string;

  @Prop()
  address: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
