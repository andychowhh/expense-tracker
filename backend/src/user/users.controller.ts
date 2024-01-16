import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { LoginDto } from './dto/login.dto';

// Update the route here
@Controller('login')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto.token);
  }
}
