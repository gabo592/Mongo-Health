import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrescriptionsService } from './prescriptions.service';
import { PrescriptionsController } from './prescriptions.controller';
import {
  Prescription,
  PrescriptionSchema,
} from './entities/prescription.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Prescription.name,
        schema: PrescriptionSchema,
      },
    ]),
  ],
  controllers: [PrescriptionsController],
  providers: [PrescriptionsService],
})
export class PrescriptionsModule {}
