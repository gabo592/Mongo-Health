import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MedicalAppointmentsModule } from './medical-appointments/medical-appointments.module';
import { MedicalRecordsModule } from './medical-records/medical-records.module';
import { MedicalCentersModule } from './medical-centers/medical-centers.module';
import { MedicalInsuranceModule } from './medical-insurance/medical-insurance.module';
import { ConfigModule } from '@nestjs/config';
import { MedicinesModule } from './medicines/medicines.module';
import config from './config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        MONGO_INITDB_ROOT_USERNAME: Joi.string().required(),
        MONGO_INITDB_ROOT_PASSWORD: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_CONNECTION: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    MedicalAppointmentsModule,
    MedicalRecordsModule,
    MedicalCentersModule,
    MedicalInsuranceModule,
    MedicinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
