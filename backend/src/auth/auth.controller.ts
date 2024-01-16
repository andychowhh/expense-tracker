import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google-login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.goolgeLoginIn(loginDto.token);
  }
}
