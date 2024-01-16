import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { LoginDto } from './dto/login.dto';

// Update the route here
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto.token);
  }
}
