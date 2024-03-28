import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionsService } from './transactions.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Get()
  async getTransaction() {
    return this.transactionService.getTransactionsByDate();
  }

  @Post()
  @ApiBody({ type: CreateTransactionDto })
  async createTransaction(@Body() body: CreateTransactionDto) {
    return this.transactionService.createTransaction(body);
  }
}
