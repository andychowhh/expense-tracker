import { Summary } from "@/types";
import { FinancialInsightBarChart } from "./FinancialInsightBarChart";
import axios from "@/app/api/axios";
import { isGuest } from "@/utils";
import { MOCK_LAST_YEAR_SUMMARY } from "@/constants/dashboard";

interface FinancialInsightProp {}

export const FinancialInsight = async ({}: FinancialInsightProp) => {
  let summaryData: Summary[] = [];
  if (isGuest()) {
    summaryData = MOCK_LAST_YEAR_SUMMARY;
  } else {
    const summary = await axios.get("/summary/last-year");
    summaryData = summary.data;
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
