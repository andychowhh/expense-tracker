import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

// Update the route here
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
