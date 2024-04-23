import React from "react";
import { CategoryPieChart } from "../Dashboard/CategoryOverview/CategoryPieChart";
import Dropdown from "@/components/Dropdown/Dropdown";

export function CategoryChart() {
  const data = [
    { name: "Food", value: 600, fill: "#0088FE", icon: "/images/food.png" },
    { name: "Snack", value: 200, fill: "#00C49F", icon: "/images/snack.png" },
    {
      name: "Medical",
      value: 300,
      fill: "#FFBB28",
      icon: "/images/medical.png",
    },
    {
      name: "Transportation",
      value: 300,
      fill: "#FF8042",
      icon: "/images/transportation.png",
    },
    {
      name: "Entertainment",
      value: 278,
      fill: "#800080",
      icon: "/images/entertainment.png",
    },
    { name: "Income", value: 189, fill: "#32CD32", icon: "/images/income.png" },
  ];

  return (
    <div className="bg-white rounded">
      <div className="flex justify-between items-center border-b">
        <Dropdown />
        <div className="flex gap-3 mr-3 items-center">
          <div>Balance</div>
          <div className="bg-gray-200 rounded-lg py-1 px-2 ">-CA$797.49</div>
        </div>
      </div>
      <div className="h-96">
        <CategoryPieChart data={data} />
      </div>
    </div>
  );
}
