import { Body, Response, Controller, Post, Get, Req } from '@nestjs/common';
import { Request, ExpressRequest, Response as ExpressResponse } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('google-login')
  async login(@Body() loginDto: LoginDto, @Response() res: ExpressResponse) {
    const loginRes = await this.authService.goolgeLoginIn(loginDto.token);

    res.cookie('accessToken', loginRes?.accessToken, {
      expires: new Date(new Date().getTime() + 1 * 60 * 60 * 1000), // 1 hr
      sameSite: 'strict',
      httpOnly: true,
    });

    return res.send(loginRes);
  }

  // TODO cleanup if no longer use
  @Post('logout')
  async logout(@Response() res: ExpressResponse) {
    res.cookie('accessToken', '', { expires: new Date() });

    return res.send(201);
  }

  @Public()
  @Get('me')
  async verifyToken(
    @Req() request: ExpressRequest,
    @Response() res: ExpressResponse,
  ) {
    try {
      // TODO fix type
      const token = request.cookies['accessToken'];
      return res.send(await this.authService.getUserByJwt(token));
    } catch (err) {
      console.log('Error on /auth/me: ', err);
    }
  }
}
