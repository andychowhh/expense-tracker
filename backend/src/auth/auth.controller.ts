import {
  Body,
  Response,
  Controller,
  Post,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from './auth.guard';
import { RefreshJwtGuard } from './refresh.guard';
import { User } from '../users/decorator/user.decorator';
import { UserPayload } from '../users/interfaces/user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('google-login')
  async login(@Body() loginDto: LoginDto, @Response() res: ExpressResponse) {
    const loginRes = await this.authService.goolgeLoginIn(loginDto.token);
    return res.send(loginRes);
  }

  // TODO cleanup if no longer use
  @Post('logout')
  async logout(@Response() res: ExpressResponse) {
    res.cookie('accessToken', '', { expires: new Date() });

    return res.send(201);
  }

  @Get('me')
  async verifyToken(
    @Req() request: ExpressRequest,
    @Response() res: ExpressResponse,
  ) {
    try {
      const token: string = request.cookies['accessToken'];
      return res.send(await this.authService.getUserByJwt(token));
    } catch (err) {
      console.log('Error on /auth/me: ', err);
    }
  }

  @Public() // Remove the accessToken check
  @UseGuards(RefreshJwtGuard)
  @Get('refresh')
  async refreshToken(@User() user: UserPayload) {
    console.log('refreshing jwt Token');
    return await this.authService.refreshToken(user);
  }
}
