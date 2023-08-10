import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalInsuranceService } from './medical-insurance.service';
import { CreateMedicalInsuranceDto } from './dto/create-medical-insurance.dto';
import { UpdateMedicalInsuranceDto } from './dto/update-medical-insurance.dto';

@Controller('medical-insurance')
export class MedicalInsuranceController {
  constructor(private readonly medicalInsuranceService: MedicalInsuranceService) {}

  @Post()
  create(@Body() createMedicalInsuranceDto: CreateMedicalInsuranceDto) {
    return this.medicalInsuranceService.create(createMedicalInsuranceDto);
  }

  @Get()
  findAll() {
    return this.medicalInsuranceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalInsuranceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalInsuranceDto: UpdateMedicalInsuranceDto) {
    return this.medicalInsuranceService.update(+id, updateMedicalInsuranceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalInsuranceService.remove(+id);
  }
}
