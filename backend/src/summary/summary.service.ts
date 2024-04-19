import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from '../transactions/interfaces/transaction.interface';
import { UserPayload } from '../users/interfaces/user.interface';
import moment from 'moment';

@Injectable()
export class SummaryService {
  constructor(
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
    @Inject(REQUEST)
    private request: Request & {
      user: UserPayload;
      query: { from: string; to: string };
    },
  ) {}

  async findLastYearSummary() {
    const today = new Date();
    const twelveMonthsAgo = new Date(today.getFullYear() - 1, 4, 1);

    const summaryResult = await this.transactionModel.aggregate([
      {
        $match: {
          date: { $gte: twelveMonthsAgo },
        },
      },
      {
        $sort: { date: -1 },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$date' } },
          totalExpense: {
            $sum: {
              $cond: [{ $ne: ['$category', 'income'] }, '$amount', 0],
            },
          },
          totalIncome: {
            $sum: {
              $cond: [{ $eq: ['$category', 'income'] }, '$amount', 0],
            },
          },
        },
      },
    ]);

    let currentMonth = twelveMonthsAgo.getMonth();
    let currentYear = twelveMonthsAgo.getFullYear();
    const results = [];

    for (let i = 0; i < 12; i++) {
      const monthYearKey = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        '0',
      )}`;
      const found = summaryResult.find((d) => d._id === monthYearKey);
      if (found) {
        results.push(found);
      } else {
        results.push({
          _id: monthYearKey,
          totalExpense: 0,
          totalIncome: 0,
        });
      }

      // Increment month and year appropriately
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
      } else {
        currentMonth++;
      }
    }
    return results;
  }

  async findCategoriesSummary() {
    const { from, to } = this.request.query;
    if (!from || !to) {
      throw new BadRequestException('Please specify the date range!');
    }
    const lastDayOfMonth = moment(to).endOf('month').format('YYYY-MM-DD');

    const summaryResult = await this.transactionModel.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(from),
            $lte: new Date(`${lastDayOfMonth}T23:59:59.999Z`),
          },
        },
      },
      {
        $group: {
          _id: '$category',
          totalAmount: {
            $sum: '$amount',
          },
          // items: {
          //   $push: '$$ROOT', // Push the original documents into the 'items' array
          // },
        },
      },
    ]);
    return summaryResult;
  }
}
