import {
  LineChartCard,
  FinancialInsight,
  CategoryPieChart,
  LineChartGroups,
} from "@/components/Dashboard";
import { MOCK_TOTAL_EXPENSE, MOCK_TOTAL_INCOME } from "@/constants/dashboard";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col mt-3 gap-4 h-screen">
      <div>
        <LineChartGroups />
      </div>

      <div className="flex-1 flex justify-between gap-4 max-h-96">
        <FinancialInsight />
        <CategoryPieChart />
      </div>
    </div>
  );
}
