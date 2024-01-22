import { Body, Response, Controller, Post } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
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
}
