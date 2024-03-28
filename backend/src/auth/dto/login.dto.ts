import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    type: String,
    description: 'Google Token',
  })
  @IsString()
  @IsNotEmpty()
  token: string;
}
