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

      <div className="flex-1 flex flex-col justify-between gap-4 h-full lg:flex-row lg:max-h-96">
        <FinancialInsight />
        <CategoryPieChart />
      </div>
    </div>
  );
}
