import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MedicalSpeciality } from './medical-speciality.entity';

@Schema()
export class MedicalCenter extends Document {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  schedules: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: MedicalSpeciality.name }] })
  specialties: Types.Array<MedicalSpeciality>;
}

export const MedicalCenterSchema = SchemaFactory.createForClass(MedicalCenter);
