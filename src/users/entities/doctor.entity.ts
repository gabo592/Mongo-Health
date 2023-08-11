import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MedicalSpeciality } from 'src/medical-centers/entities/medical-speciality.entity';

@Schema()
export class Doctor extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: MedicalSpeciality.name }] })
  specialties: Types.Array<MedicalSpeciality>;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
