import {
  FinancialInsight,
  CategoryPieChart,
  LineChartGroups,
} from "@/components/Dashboard";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div>
        <LineChartGroups />
      </div>

      <div className="flex flex-col justify-between gap-4 h-full lg:flex-row">
        <FinancialInsight />
        <CategoryPieChart />
      </div>
    </div>
  );
}
