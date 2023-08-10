import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalCentersService } from './medical-centers.service';
import { CreateMedicalCenterDto } from './dto/create-medical-center.dto';
import { UpdateMedicalCenterDto } from './dto/update-medical-center.dto';

@Controller('medical-centers')
export class MedicalCentersController {
  constructor(private readonly medicalCentersService: MedicalCentersService) {}

  @Post()
  create(@Body() createMedicalCenterDto: CreateMedicalCenterDto) {
    return this.medicalCentersService.create(createMedicalCenterDto);
  }

  @Get()
  findAll() {
    return this.medicalCentersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalCentersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalCenterDto: UpdateMedicalCenterDto) {
    return this.medicalCentersService.update(+id, updateMedicalCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalCentersService.remove(+id);
  }
}
