import ExpenseChartSection from "@/components/Overview/ExpenseChartSection";
import CategoryDetails from "@/components/Overview/CategoryDetails";

export default async function OverviewPage() {
  return (
    <div className="flex justify-between mt-3">
      <ExpenseChartSection />
      <CategoryDetails />
    </div>
  );
}
