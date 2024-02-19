import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Get()
  async getTransaction() {
    return this.transactionService.getTransactionsByDate();
  }

  @Post()
  async createTransaction(@Body() body: CreateTransactionDto) {
    return this.transactionService.createTransaction(body);
  }
}
