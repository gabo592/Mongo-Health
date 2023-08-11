import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Medicine extends Document {
  @Prop()
  scientificName: string;

  @Prop()
  tradeName: string;

  @Prop()
  dose: string;

  @Prop()
  instructions: string;

  @Prop()
  sideEffects: string;
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);
