import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsOptional,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  user: Types.ObjectId;

  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  note?: string;
}
