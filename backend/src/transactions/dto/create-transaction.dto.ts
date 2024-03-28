import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({
    type: Number,
    description: 'Amount',
  })
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    type: String,
    description: 'Category',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    type: String,
    description: 'Payment Method',
  })
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @ApiProperty({
    type: String,
    description: 'Date String',
  })
  @IsDateString()
  date: string;

  @ApiProperty({
    type: String,
    description: 'Note',
  })
  @IsOptional()
  @IsString()
  note?: string;
}
