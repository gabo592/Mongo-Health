import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Doctor } from 'src/users/entities/doctor.entity';
import { Patient } from 'src/users/entities/patient.entity';

@Schema()
export class MedicalTest extends Document {
  @Prop({ type: Types.ObjectId, ref: Patient.name })
  patient: Patient | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Doctor.name })
  doctor: Doctor | Types.ObjectId;

  @Prop()
  date: Date;

  @Prop()
  resume: string;

  @Prop()
  results: string;
}

export const MedicalTestSchema = SchemaFactory.createForClass(MedicalTest);
