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
      });
      const userPayload = { sub: sub, username: name };
      const accessToken = await this.jwtService.signAsync(userPayload);

      return { accessToken, picture };
    } catch (e) {
      console.log(e);
    }
  }
}
