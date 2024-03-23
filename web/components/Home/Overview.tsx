import React from "react";

interface OverviewItemProp {
  label: string;
  value: string;
  type: string;
}

const ITEM_COLORS: Record<
  string,
  { backgroundColor: string; labelColor: string; valueColor: string }
> = {
  success: {
    backgroundColor: "bg-success",
    labelColor: "text-green-600", // 200
    valueColor: "text-green-800", // 200
  },
  info: {
    backgroundColor: "bg-info",
    labelColor: "text-blue-600", // 50
    valueColor: "text-blue-800", // 800
  },
  warning: {
    backgroundColor: "bg-warning",
    labelColor: "text-red-600", // 100
    valueColor: "text-red-800", // 800
  },
};

const OverviewItem = ({ label, value, type }: OverviewItemProp) => {
  return (
    <div
      className={`flex flex-col flex-1 justify-center px-4 py-5 rounded ${ITEM_COLORS[type].backgroundColor}`}
    >
      <h5 className={`text-base ${ITEM_COLORS[type].labelColor}`}>{label}</h5>
      <h2 className={`text-xl font-semibold ${ITEM_COLORS[type].valueColor}`}>${value}</h2>
    </div>
  );
};

export const Overview = () => {
  return (
    <div className="px-5 py-5 bg-white rounded">
      <span className="text-lg font-medium">Overview</span>
      <div className="flex gap-4 mt-4">
        <OverviewItem label="Total Balance" value="12,345.67" type="info" />
        <OverviewItem label="Income" value="6,780.00" type="success" />
        <OverviewItem label="Expenses" value="4,567.89" type="warning" />
      </div>
    </div>
  );
};
