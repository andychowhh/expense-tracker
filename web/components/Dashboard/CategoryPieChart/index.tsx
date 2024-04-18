"use client";

import { PieChart, Pie, ResponsiveContainer, Sector, Label } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const data = [
  { name: "Food", value: 600, fill: "#0088FE" },
  { name: "Snack", value: 200, fill: "#00C49F" },
  { name: "Medical", value: 300, fill: "#FFBB28" },
  { name: "Transportation", value: 300, fill: "#FF8042" },
  { name: "Entertainment", value: 278, fill: "#800080" },
  { name: "Income", value: 189, fill: "#32CD32" },
];

export const CategoryPieChart = () => {
  return (
    <div className="flex-1 flex flex-col items-center bg-white rounded p-4 lg:basis-1/3">
      {/* <div className="w-full flex justify-center">
        <TransactionTypeTab />
      </div> */}
      <div className="flex-auto w-full h-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={(entry) =>
                `${entry.name} ${(entry.percent * 100).toFixed(0)}%`
              }
              labelLine={false}
              style={{outline: 'none'}}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
