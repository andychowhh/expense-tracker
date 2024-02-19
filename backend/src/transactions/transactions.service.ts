import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';
import { Transaction } from './interfaces/transaction.interface';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import moment from 'moment';

@Injectable({ scope: Scope.REQUEST })
export class TransactionsService {
  constructor(
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
    @Inject(REQUEST) private request: Request,
  ) {}

  async getTransactionsByDate() {
    const user = this.request.user;
    const date = moment(new Date(this.request.query.date as string));
    const startOfDay = date.startOf('day').toDate();
    const endOfDay = date.endOf('day').toDate();

    return this.transactionModel.find({
      user: user._id,
      date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });
  }

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    const createTransaction = new this.transactionModel(createTransactionDto);
    return createTransaction.save();
  }
}
