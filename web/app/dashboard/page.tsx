import {
  FinancialInsight,
  CategoryPieChart,
  LineChartGroups,
} from "@/components/Dashboard";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col mt-3 gap-4 h-screen">
      <div>
        <LineChartGroups />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-4 max-h-96 md:flex-row">
        <FinancialInsight />
        <CategoryPieChart />
      </div>
    </div>
  );
}
