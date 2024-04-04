import {
  LineChartCard,
  FinancialInsight,
  CategoryPieChart,
} from "@/components/Dashboard";
import { MOCK_TOTAL_EXPENSE, MOCK_TOTAL_INCOME } from "@/constants/dashboard";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col mt-3 gap-4 h-screen">
      <div className="flex justify-between gap-4">
        <LineChartCard
          label="Total Balance"
          data={MOCK_TOTAL_EXPENSE}
          priceChange={-5}
        />
        <LineChartCard
          label="Income"
          data={MOCK_TOTAL_INCOME}
          priceChange={20}
        />
        <LineChartCard
          label="Expense"
          data={MOCK_TOTAL_EXPENSE}
          priceChange={-10}
        />
      </div>

      <div className="flex-1 flex justify-between gap-4 max-h-96">
        <FinancialInsight />
        <CategoryPieChart />
      </div>
    </div>
  );
}
