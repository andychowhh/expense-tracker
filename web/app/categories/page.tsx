import { CategoryChart, CategoryDetailsTable } from "@/components/Categories";
import { CategoryDatePicker } from "@/components/Categories/CategoryDatePicker";
import { CategoryChartContextProvider } from "@/context/CategoryChartContext";

export default async function CategoriesPage() {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div>
        <CategoryDatePicker />
      </div>
      <div className="flex-1 flex gap-4 flex-col lg:flex-row">
        <div className="flex-1">
          <CategoryChartContextProvider>
            <CategoryChart />
          </CategoryChartContextProvider>
        </div>
        <div className="flex-1">
          <CategoryDetailsTable />
        </div>
      </div>
    </div>
  );
}
