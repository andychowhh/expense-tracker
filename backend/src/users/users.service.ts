import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel
      .findOne({
        email: createUserDto.email,
      })
      .lean();

    if (!user) {
      const newUser = await new this.userModel(createUserDto);
      return newUser.save();
    }

    return user;
  }
}
