import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { Model } from 'mongoose';

@Injectable()
export class ImagesService {
  constructor(@InjectModel(Image.name) private model: Model<Image>) {}

  async create(createImageDto: CreateImageDto) {
    const newImage = new this.model(createImageDto);
    return await newImage.save();
  }

  findAll() {
    return `This action returns all images`;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
