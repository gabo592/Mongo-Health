import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { Medicine, MedicineSchema } from './entities/medicine.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Medicine.name,
        schema: MedicineSchema,
      },
    ]),
  ],
  controllers: [MedicinesController],
  providers: [MedicinesService],
})
export class MedicinesModule {}
