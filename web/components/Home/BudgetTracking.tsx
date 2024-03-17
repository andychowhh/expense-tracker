import React from "react";
import Image from "next/image";
import { CATEGORIES } from "@/constants";

const CategoryItem = ({
  label,
  value,
  imageUrl,
}: {
  label: string;
  value: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <Image src={imageUrl} alt={value} width={30} height={30} />
      <span className="flex-1 ml-1">{label}</span>
      <div className="w-6/12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="flex-2 bg-blue-600 h-2.5 rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>
      <span className="flex-1 text-right">$650.00 / $ 1,000.00</span>
    </div>
  );
};

export const BudgetTracking = () => {
  return (
    <div className="px-5 py-5 bg-white rounded">
      <span className="text-lg font-medium">Budget Tracking</span>
      <div className="flex flex-col gap-3 mt-4">
        {CATEGORIES.map(({ label, value, avatar }) => (
          <CategoryItem key={value} label={label} imageUrl={avatar} value={value} />
        ))}
      </div>
    </div>
  );
};
