import {
  LineChartCard,
  FinancialInsight,
  CategoryPieChart,
} from "@/components/Dashboard";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col mt-3 gap-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>Good Morning, Andy</div>
          <div>Welcome to your financial insights</div>
        </div>
        <div>
          <button>Export</button>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <LineChartCard label="Total Balance" amount={30000} />
        <LineChartCard label="Income" amount={40000} />
        <LineChartCard label="Total Balance" amount={10000} />
      </div>

      <div className="flex justify-between gap-4">
        <FinancialInsight />
        <CategoryPieChart />
      </div>

      <div>
        <div>Recent Transactions</div>
      </div>
    </div>
  );
}
