import axios from "@/app/api/axios";
import { Summary } from "@/types";
import { formatSummaryData } from "@/utils/formatSummaryData";
import { CategoryDonutChart } from "./CategoryDonutChart";
import Dropdown from "@/components/Dropdown/Dropdown";

export default async function ExpenseChartSection() {
  const summaryData: Summary[] = (await axios.get("/summary?period=2024-03"))
    .data;
  const formattedSummaryData = formatSummaryData(summaryData);
  const totalAmount = summaryData.reduce(
    (total, data) => (total += data.totalAmount),
    0
  );

  return (
    <div className="bg-white">
      <div className="flex justify-between border-b p-4">
        <Dropdown />
        <div className="text-red-600">{`-CA$${totalAmount}`}</div>
      </div>
      <div className="p-4">
        <CategoryDonutChart data={formattedSummaryData} />
      </div>
    </div>
  );
}
