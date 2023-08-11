import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MedicalTestsService } from './medical-tests.service';
import { CreateMedicalTestDto } from './dto/create-medical-test.dto';
import { UpdateMedicalTestDto } from './dto/update-medical-test.dto';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medical Tests')
@Controller('medical-tests')
export class MedicalTestsController {
  constructor(private readonly service: MedicalTestsService) {}

  @Post()
  create(@Body() createMedicalTestDto: CreateMedicalTestDto) {
    return this.service.create(createMedicalTestDto);
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
    @Body() updateMedicalTestDto: UpdateMedicalTestDto,
  ) {
    return this.service.update(id, updateMedicalTestDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.service.remove(id);
  }
}
