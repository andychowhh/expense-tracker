import { CategoryChart } from "@/components/Categories";

export default async function CategoriesPage() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div>2024 April Dropdown</div>
      <div>
        <CategoryChart />
      </div>
      <div>Categories Details</div>
    </div>
  );
}
