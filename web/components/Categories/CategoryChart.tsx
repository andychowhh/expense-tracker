import React from "react";
import { CategoryPieChart } from "../Dashboard/CategoryOverview/CategoryPieChart";
import { isGuest } from "@/utils";
import { guestCategoriesOverview } from "@/constants/guestData";
import axios from "@/app/api/axios";
import { CATEGORIES } from "@/constants";
import { CategoryDropdown } from "./CategoryDropdown";
import moment from "moment";
import { CategoryOverviewResponseData } from "@/types";

interface CategoryChartProp {
  dateRange: string;
  transactionType: string;
}

export async function CategoryChart({
  dateRange = moment().format("YYYY-MM"),
  transactionType = "expense",
}: CategoryChartProp) {
  const categoriesData: CategoryOverviewResponseData[] = isGuest()
    ? guestCategoriesOverview
    : (await axios.get(`/summary/categories?from=${dateRange}&to=${dateRange}`))
        .data;
  const balance = categoriesData.reduce(
    (total, category) =>
      (total +=
        category._id === "income"
          ? category.totalAmount
          : -category.totalAmount),
    0
  );

  return (
    <div className="flex flex-col bg-white rounded h-full shadow-lg">
      <div className="flex justify-between items-center border-b">
        <CategoryDropdown />
        <div className="flex gap-3 mr-3 items-center">
          <div>Balance</div>
          <div
            className={`bg-gray-200 rounded-lg py-1 px-3 ${
              balance > 0 ? "text-green-700" : "text-red-500"
            }`}
          >
            {balance >= 0 ? `$${balance}` : `-$${Math.abs(balance)}`}
          </div>
        </div>
      </div>
      <div className="flex-auto h-72">
        <CategoryPieChart
          data={categoriesData
            .filter(({ _id }) =>
              transactionType === "income" ? _id === "income" : _id !== "income"
            )
            .map(({ _id, totalAmount }) => {
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
