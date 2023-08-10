import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicalSpecialtiesService } from './medical-specialties.service';
import { CreateMedicalSpecialityDto } from './dto/create-medical-speciality.dto';
import { UpdateMedicalSpecialityDto } from './dto/update-medical-speciality.dto';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medical Specialties')
@Controller('medical-specialties')
export class MedicalSpecialtiesController {
  constructor(private readonly service: MedicalSpecialtiesService) {}

  @Post()
  create(@Body() createMedicalSpecialityDto: CreateMedicalSpecialityDto) {
    return this.service.create(createMedicalSpecialityDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateMedicalSpecialityDto: UpdateMedicalSpecialityDto,
  ) {
    return this.service.update(id, updateMedicalSpecialityDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.service.remove(id);
  }
}
