import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { UsersService } from '../users/users.service';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async goolgeLoginIn(token: string) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const { sub, email, picture, name } = ticket.getPayload() ?? {};
      const user = await this.usersService.createUser({
        email: email ?? '',
        picture: picture ?? '',
      });
      const userPayload = {
        sub: sub,
        username: name,
        email: email,
        _id: user._id,
      };
      const accessToken = await this.jwtService.signAsync(userPayload);

      return { accessToken, picture };
    } catch (e) {
      console.log(e);
    }
  }

  async getUserByJwt(token: string | null) {
    try {
      if (!token) return {};
      const user = await this.jwtService.verifyAsync(token);
      const dbUser = await this.usersService.findUser({
        email: user.email ?? '',
      });
      return dbUser;
    } catch (e) {
      throw e;
    }
  }
}
