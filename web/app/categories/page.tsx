import {
  CategoryChart,
  CategoryDetailsTable,
  CategoryDatePicker,
} from "@/components/Categories";
import { CategoryChartContextProvider } from "@/context/CategoryChartContext";

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: { date_range: string; transaction_type: string };
}) {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div>
        <CategoryDatePicker />
      </div>
      <CategoryChartContextProvider>
        <div className="flex-1 flex gap-4 flex-col lg:flex-row">
          <div className="flex-1">
            <CategoryChart
              dateRange={searchParams.date_range}
              transactionType={searchParams.transaction_type}
            />
          </div>
          <div className="flex-1">
            <CategoryDetailsTable dateRange={searchParams.date_range} />
          </div>
        </div>
      </CategoryChartContextProvider>
    </div>
  );
}
