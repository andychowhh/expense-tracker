import { Summary } from "@/types";
import { FinancialInsightBarChart } from "./FinancialInsightBarChart";
import axios from "@/app/api/axios";

interface FinancialInsightProp {}

export const FinancialInsight = async ({}: FinancialInsightProp) => {
  const summary = await axios.get("/summary/last-year");
  const summaryData: Summary[] = summary.data;

  return (
    <div className="basis-2/3 flex flex-col bg-white p-4 h-full">
      <div className="flex justify-between">
        <div className="font-semibold">Financial Insights</div>
        <div>Dropdown</div>
      </div>
      <div className="flex-1 mt-2">
        <FinancialInsightBarChart
          data={summaryData.map(({ _id, totalIncome, totalExpense }) => {
            return { name: _id, income: totalIncome, expense: totalExpense };
          })}
        />
      </div>
    </div>
  );
};
