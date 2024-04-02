import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from '../transactions/interfaces/transaction.interface';
import { UserPayload } from '../users/interfaces/user.interface';

@Injectable()
export class SummaryService {
  constructor(
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
    @Inject(REQUEST) private request: Request & { user: UserPayload },
  ) {}

  findAll(type: string, period: string) {
    const [year, month] = period.split('-'); // e.g. 2024-03
    return this.transactionModel.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $month: '$date' }, parseInt(month)] },
              { $eq: [{ $year: '$date' }, parseInt(year)] },
            ],
          },
        },
      },
      {
        $group: {
          _id: '$category',
          totalAmount: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
    ]);
  }
}
