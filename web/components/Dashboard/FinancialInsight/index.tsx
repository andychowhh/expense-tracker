import { FinancialInsightBarChart } from "./FinancialInsightBarChart";

interface FinancialInsightProp {}

export const FinancialInsight = ({}: FinancialInsightProp) => {
  return (
    <div className="flex-1 flex flex-col bg-white p-3">
      <div className="flex justify-between">
        <div>Financial Insights</div>
        <div>Dropdown</div>
      </div>
      <div className="flex-1 mt-2">
        <FinancialInsightBarChart />
      </div>
    </div>
  );
};
