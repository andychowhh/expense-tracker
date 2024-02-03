import { Controller, Post, Body } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post()
  async createTransaction(@Body() body: CreateTransactionDto) {
    return this.transactionService.createTransaction(body);
  }
}
