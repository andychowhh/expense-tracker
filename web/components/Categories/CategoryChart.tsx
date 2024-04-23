import React from "react";
import { CategoryPieChart } from "../Dashboard/CategoryOverview/CategoryPieChart";
import { isGuest } from "@/utils";
import { guestCategoriesOverview } from "@/constants/guestData";
import axios from "@/app/api/axios";
import { CATEGORIES } from "@/constants";
import { CategoryDropdown } from "./CategoryDropdown";
import moment from "moment";
import { CategoryOverviewResponseData } from "@/types";

export async function CategoryChart({
  dateRange = moment().format("YYYY-MM"),
}: {
  dateRange: string;
}) {
  let categoriesData: CategoryOverviewResponseData[] = [];
  if (isGuest()) {
    categoriesData = guestCategoriesOverview;
  } else {
    categoriesData = (
      await axios.get(`/summary/categories?from=${dateRange}&to=${dateRange}`)
    ).data;
  }

  return (
    <div className="flex flex-col bg-white rounded h-full">
      <div className="flex justify-between items-center border-b">
        <CategoryDropdown />
        <div className="flex gap-3 mr-3 items-center">
          <div>Balance</div>
          <div className="bg-gray-200 rounded-lg py-1 px-2 ">-CA$797.49</div>
        </div>
      </div>
      <div className="flex-1 h-96">
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
}
