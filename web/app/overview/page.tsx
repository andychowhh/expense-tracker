import { CategoryDonutChart } from "@/components/Overview";
import axios from "../../app/api/axios";
import { formatSummaryData } from "@/utils/formatSummaryData";
import { Summary } from "@/types";

export default async function OverviewPage() {
  const summaryData: Summary[] = (await axios.get("/summary?period=2024-03"))
    .data;
  const formattedSummaryData = formatSummaryData(summaryData);

  return (
    <div className="w-6/12 h-6/12">
      <CategoryDonutChart data={formattedSummaryData} />
    </div>
  );
}
