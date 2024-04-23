import { Summary } from "@/types";
import { FinancialInsightBarChart } from "./FinancialInsightBarChart";
import axios from "@/app/api/axios";
import { isGuest } from "@/utils";
import { MOCK_LAST_YEAR_SUMMARY } from "@/constants/dashboard";
import { getLastTwelveMonths } from "@/utils/date";
import moment from "moment";

interface FinancialInsightProp {}

export const FinancialInsight = async ({}: FinancialInsightProp) => {
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

  return (
    <div className="flex-1 flex flex-col bg-white p-4 lg:basis-2/3">
      <div className="flex justify-center">
        <div className="font-semibold text-lg">Financial Insights</div>
      </div>
      <div className="flex-auto mt-2 h-96 lg:h-auto lg:flex-1">
        <FinancialInsightBarChart
          data={summaryData.map(({ _id, totalIncome, totalExpense }) => {
            return { name: _id, income: totalIncome, expense: totalExpense };
          })}
        />
      </div>
    </div>
  );
};
