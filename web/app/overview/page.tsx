import { CategoryDonutChart } from "@/components/Overview";
import axios from "../../app/api/axios";
import { formatSummaryData } from "@/utils/formatSummaryData";
import { Summary } from "@/types";

export default async function OverviewPage() {
  const summaryData: Summary[] = (await axios.get("/summary?period=2024-03"))
    .data;
  const formattedSummaryData = formatSummaryData(summaryData);

  return (
    <div className="w-3/12 h-3/12">
      <div className="bg-white">
        <div className="flex justify-between border-b p-4">
          <div>Expense</div>
          <div>-CA$2453.44</div>
        </div>
        <div className="p-4">
          <CategoryDonutChart data={formattedSummaryData} />
        </div>
      </div>
    </div>
  );
}
