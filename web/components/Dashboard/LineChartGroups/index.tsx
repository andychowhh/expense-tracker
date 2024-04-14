import React from "react";
import { LineChartCard } from "./LineChartCard";
import axios from "@/app/api/axios";
import { Summary } from "@/types";
import { isGuest } from "@/utils";
import { MOCK_LAST_YEAR_SUMMARY } from "@/constants/dashboard";

export const LineChartGroups = async () => {
  let summaryData: Summary[] = [];
  if (isGuest()) {
    summaryData = MOCK_LAST_YEAR_SUMMARY;
  } else {
    const summary = await axios.get("/summary/last-year");
    summaryData = summary.data;
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
    <div className="flex justify-between gap-4">
      <LineChartCard label="Total Balance" data={balance} />
      <LineChartCard label="Income" data={income} />
      <LineChartCard label="Expense" data={expense} />
    </div>
  );
};
