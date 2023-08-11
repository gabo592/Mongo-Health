import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Doctor } from 'src/users/entities/doctor.entity';
import { Patient } from 'src/users/entities/patient.entity';

@Schema()
export class MedicalAppointment extends Document {
  @Prop()
  date: Date;

  @Prop()
  reason: string;

  @Prop()
  state: string;

  @Prop()
  notes: string;

  @Prop({ type: Types.ObjectId, ref: Doctor.name })
  doctor: Doctor | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Patient.name })
  patient: Patient | Types.ObjectId;
}

export const MedicalAppointmentSchema =
  SchemaFactory.createForClass(MedicalAppointment);
