import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Patient } from 'src/users/entities/patient.entity';
import { MedicalTest } from 'src/medical-appointments/entities/medical-test.entity';

@Schema()
export class MedicalRecord extends Document {
  @Prop()
  date: Date;

  @Prop({ type: Types.ObjectId, ref: Patient.name })
  patient: Patient | Types.ObjectId;

  @Prop()
  allergies: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: MedicalTest.name }] })
  tests: Types.Array<MedicalTest>;
}

export const MedicalRecordSchema = SchemaFactory.createForClass(MedicalRecord);
