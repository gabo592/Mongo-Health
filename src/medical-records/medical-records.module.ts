import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecordsController } from './medical-records.controller';
import {
  MedicalRecord,
  MedicalRecordSchema,
} from './entities/medical-record.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MedicalRecord.name,
        schema: MedicalRecordSchema,
      },
    ]),
  ],
  controllers: [MedicalRecordsController],
  providers: [MedicalRecordsService],
})
export class MedicalRecordsModule {}
