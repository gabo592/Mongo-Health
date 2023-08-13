import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medical Records')
@Controller('medical-records')
export class MedicalRecordsController {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @Post()
  create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordsService.create(createMedicalRecordDto);
  }

  @Get()
  findAll() {
    return this.medicalRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.medicalRecordsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateMedicalRecordDto: UpdateMedicalRecordDto,
  ) {
    return this.medicalRecordsService.update(id, updateMedicalRecordDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.medicalRecordsService.remove(id);
  }
}
