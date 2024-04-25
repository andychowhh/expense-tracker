"use client";

import { PieChart, Pie, ResponsiveContainer, Label } from "recharts";

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
    if (percent * 100 < 1) {
      return null;
    }

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
        {data && data.length > 0 ? (
          <Pie
            dataKey="value"
            data={data}
            fill="#8884d8"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={renderCustomizedLabel}
            labelLine={false}
            style={{ outline: "none" }}
          />
        ) : (
          <Pie
            dataKey={"value"}
            data={[{ name: "No Data", value: 1 }]}
            fill="#8884d8"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={50}
          >
            <Label width={30} position="center">
              No Data
            </Label>
          </Pie>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};
