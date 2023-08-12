import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Patient } from 'src/users/entities/patient.entity';

@Schema()
export class MedicalRecord extends Document {
  date: Date;
  patient: Patient | Types.ObjectId;
}

export const MedicalRecordSchema = SchemaFactory.createForClass(MedicalRecord);
