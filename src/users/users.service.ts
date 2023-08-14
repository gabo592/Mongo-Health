import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = new this.model(createUserDto);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;
    return await newUser.save();
  }

  async findAll() {
    return await this.model.find().select('-password');
  }

  async findOne(id: string) {
    const user = await this.model.findById(id).select('-password');

    if (!user) {
      throw new NotFoundException(`User #${id} not found.`);
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.model.findOne({ email });

    if (!user) {
      throw new NotFoundException(`User with email: ${email} not found.`);
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
