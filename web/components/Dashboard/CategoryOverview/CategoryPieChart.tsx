"use client";

import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

// const data = [
//   { name: "Food", value: 600, fill: "#0088FE", icon: "/images/food.png" },
//   { name: "Snack", value: 200, fill: "#00C49F", icon: "/images/snack.png" },
//   { name: "Medical", value: 300, fill: "#FFBB28", icon: "/images/medical.png" },
//   {
//     name: "Transportation",
//     value: 300,
//     fill: "#FF8042",
//     icon: "/images/transportation.png",
//   },
//   {
//     name: "Entertainment",
//     value: 278,
//     fill: "#800080",
//     icon: "/images/entertainment.png",
//   },
//   { name: "Income", value: 189, fill: "#32CD32", icon: "/images/income.png" },
// ];

interface CategoryPieChartProp {
  data: {
    name: string;
    value: number;
    fill: string;
    icon: string;
  }[];
}

export const CategoryPieChart = ({ data }: CategoryPieChartProp) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 40; // Base radius for positioning

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const imageSize = 30; // Size of the image

    return (
      <g>
        <image
          href={data[index].icon}
          x={x - imageSize}
          y={y - imageSize / 2}
          height={imageSize}
          width={imageSize}
        />
        <text
          x={x}
          y={y}
          fill="#666"
          textAnchor="start"
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </g>
    );
  };
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400} style={{ outline: "none" }}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={renderCustomizedLabel}
          labelLine={false}
          style={{ outline: "none" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
