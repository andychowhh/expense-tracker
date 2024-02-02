import { Request, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from '../auth/auth.guard';
import { Request as ExpressRequest } from 'express';

// Update the route here
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get()
  async getUser(@Request() request: ExpressRequest) {
    return 'Hello';
  }
}
