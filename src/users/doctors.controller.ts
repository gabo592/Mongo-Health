import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/decorators/roles.decorator';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/models/role.model';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly service: DoctorsService) {}

  @Role(Roles.ADMIN)
  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.service.create(createDoctorDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.service.findOne(id);
  }

  @Role(Roles.ADMIN)
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
