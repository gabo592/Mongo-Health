import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PatientsModule } from './patients.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PatientsModule],
})
export class UsersModule {}
