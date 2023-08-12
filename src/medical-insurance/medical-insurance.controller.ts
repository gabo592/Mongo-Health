import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicalInsuranceService } from './medical-insurance.service';
import { CreateMedicalInsuranceDto } from './dto/create-medical-insurance.dto';
import { UpdateMedicalInsuranceDto } from './dto/update-medical-insurance.dto';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medical Insurance')
@Controller('medical-insurance')
export class MedicalInsuranceController {
  constructor(
    private readonly medicalInsuranceService: MedicalInsuranceService,
  ) {}

  @Post()
  create(@Body() createMedicalInsuranceDto: CreateMedicalInsuranceDto) {
    return this.medicalInsuranceService.create(createMedicalInsuranceDto);
  }

  @Get()
  findAll() {
    return this.medicalInsuranceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.medicalInsuranceService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateMedicalInsuranceDto: UpdateMedicalInsuranceDto,
  ) {
    return this.medicalInsuranceService.update(id, updateMedicalInsuranceDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.medicalInsuranceService.remove(id);
  }
}
