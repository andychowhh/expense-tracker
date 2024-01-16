import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OAuth2Client } from 'google-auth-library';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async login(token: string) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      return this.createUser({ email: payload?.email ?? 'N/A' });
    } catch (e) {
      console.log(e);
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (!user) {
      const newUser = await new this.userModel(createUserDto);
      return newUser.save();
    }

    return user;
  }
}
