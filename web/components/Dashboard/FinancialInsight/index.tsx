import { FinancialInsightBarChart } from "./FinancialInsightBarChart";
import { MOCK_MONTHLY_OVERVIEW } from "@/constants/dashboard";

interface FinancialInsightProp {}

export const FinancialInsight = ({}: FinancialInsightProp) => {
  return (
    <div className="basis-2/3 flex flex-col bg-white p-4 h-full">
      <div className="flex justify-between">
        <div className="font-semibold">Financial Insights</div>
        <div>Dropdown</div>
      </div>
      <div className="flex-1 mt-2">
        <FinancialInsightBarChart data={MOCK_MONTHLY_OVERVIEW} />
      </div>
    </div>
  );
};
