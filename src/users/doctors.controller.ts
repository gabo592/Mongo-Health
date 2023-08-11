import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly service: DoctorsService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.service.create(createDoctorDto);
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
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    return this.service.update(id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.service.remove(id);
  }
}
