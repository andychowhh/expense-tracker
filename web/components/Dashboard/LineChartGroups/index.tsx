import React from "react";
import { LineChartCard } from "./LineChartCard";
import axios from "@/app/api/axios";
import { Summary } from "@/types";
import { isGuest } from "@/utils";
import { MOCK_LAST_YEAR_SUMMARY } from "@/constants/dashboard";
import { getLastTwelveMonths } from "@/utils/date";
import moment from "moment";
import dynamic from 'next/dynamic'
 
const LineChartCarousell = dynamic(() => import('./LineChartCarousell'))

export const LineChartGroups = async () => {
  let summaryData: Summary[] = [];
  if (isGuest()) {
    summaryData = MOCK_LAST_YEAR_SUMMARY;
  } else {
    const lastTwelveMonths = getLastTwelveMonths(moment());
    const [from, to] = [lastTwelveMonths[0], lastTwelveMonths[11]];
    const summaryAmountData: Summary[] = (
      await axios.get(`/summary/amount?from=${from}&to=${to}`)
    ).data;

    summaryData = lastTwelveMonths.map((yearMonth) => {
      const item = summaryAmountData.find(({ _id }) => _id === yearMonth);
      return item
        ? item
        : {
            _id: yearMonth,
            totalExpense: 0,
            totalIncome: 0,
          };
    });
  }

  const balance = summaryData.map(({ _id, totalIncome, totalExpense }) => {
    return { name: _id, pv: totalIncome - totalExpense };
  });
  const income = summaryData.map(({ _id, totalIncome }) => {
    return { name: _id, pv: totalIncome };
  });
  const expense = summaryData.map(({ _id, totalExpense }) => {
    return { name: _id, pv: totalExpense };
  });

  return (
    <>
      <div className="hidden md:flex justify-between gap-4">
        <LineChartCard label="Total Balance" data={balance} />
        <LineChartCard label="Income" data={income} />
        <LineChartCard label="Expense" data={expense} />
      </div>
      <div className="md:hidden w-full">
        <LineChartCarousell>
          <LineChartCard label="Total Balance" data={balance} />
          <LineChartCard label="Income" data={income} />
          <LineChartCard label="Expense" data={expense} />
        </LineChartCarousell>
      </div>
    </>
  );
};
