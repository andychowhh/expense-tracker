import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './interfaces/transaction.interface';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
  ) {}

  async getTransactions(userId: string) {}

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    const createTransaction = new this.transactionModel(createTransactionDto);
    return createTransaction.save();
  }
}
