"use client";

import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { TransactionTypeTab } from "./TransactionTypeTab";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

export const CategoryPieChart = () => {
  return (
    <div className="basis-1/3 flex flex-col items-center bg-white rounded p-4">
      <div className="w-full flex justify-center">
        <TransactionTypeTab />
      </div>
      <div className="flex-1 w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
