import axios from "@/app/api/axios";
import { CategoryPieChart } from "./CategoryPieChart";
import { CATEGORIES } from "@/constants";
import { isGuest } from "@/utils";
import { guestCategoriesOverview } from "@/constants/guestData";

export const CategoryOverview = async () => {
  let categoriesData: { _id: string; totalAmount: number }[] = [];
  if (isGuest()) {
    categoriesData = guestCategoriesOverview;
  } else {
    categoriesData = (
      await axios.get("/summary/categories?from=2024-04&to=2024-04")
    ).data;
  }

  return (
    <div className="flex-1 flex flex-col items-center bg-white rounded p-4 lg:basis-1/3">
      {/* <div className="w-full flex justify-center">
        <TransactionTypeTab />
      </div> */}
      <h1 className="font-semibold text-lg">Categories</h1>
      <div className="flex-auto w-full h-auto">
        <CategoryPieChart
          data={categoriesData.map(({ _id, totalAmount }) => {
            const category = CATEGORIES.find((c) => c.value === _id)!;
            return {
              name: category.label,
              value: totalAmount,
              fill: category.backgroundColor,
              icon: category.avatar,
            };
          })}
        />
      </div>
    </div>
  );
};