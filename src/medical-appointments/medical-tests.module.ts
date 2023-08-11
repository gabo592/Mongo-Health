import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalTestsController } from './medical-tests.controller';
import { MedicalTestsService } from './medical-tests.service';
import { MedicalTest, MedicalTestSchema } from './entities/medical-test.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MedicalTest.name,
        schema: MedicalTestSchema,
      }
    ])
  ],
  controllers: [MedicalTestsController],
  providers: [MedicalTestsService],
})
export class MedicalTestsModule {}
