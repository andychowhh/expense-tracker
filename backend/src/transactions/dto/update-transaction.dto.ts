import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDateString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class UpdateTransactionDto {
  @ApiProperty({
    type: Number,
    description: 'Amount',
  })
  @IsOptional()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    type: String,
    description: 'Category',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({
    type: String,
    description: 'Payment Method',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @ApiProperty({
    type: String,
    description: 'Date String',
  })
  @IsOptional()
  @IsNotEmpty()
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
