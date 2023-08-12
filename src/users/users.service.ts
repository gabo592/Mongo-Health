import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = new this.model(createUserDto);
    return await newUser.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    const user = await this.model.findById(id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.model.findByIdAndUpdate(
      id,
      { $set: updateUserDto },
      { new: true },
    );

    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }

    return user;
  }

  async remove(id: string) {
    const user = await this.model.findByIdAndRemove(id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }

    return user;
  }
}
