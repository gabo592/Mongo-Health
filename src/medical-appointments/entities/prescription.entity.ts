import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Patient } from 'src/users/entities/patient.entity';
import { Doctor } from 'src/users/entities/doctor.entity';
import { Medicine } from 'src/medicines/entities/medicine.entity';

@Schema()
export class Prescription extends Document {
  @Prop()
  date: Date;

  @Prop({ type: Types.ObjectId, ref: Medicine.name })
  medicine: Medicine | Types.ObjectId;

  @Prop()
  doce: string;

  @Prop({ type: Types.ObjectId, ref: Doctor.name })
  doctor: Doctor | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Patient.name })
  patient: Patient | Types.ObjectId;
}

export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);
