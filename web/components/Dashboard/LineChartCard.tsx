"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface LineChartCardProp {
  label: string;
  amount: number;
}

export const LineChartCard = ({ label, amount }: LineChartCardProp) => {
  return (
    <div className="flex flex-1 bg-white rounded p-3">
      <div className="flex flex-col flex-1">
        <div className="text-sm">{label}</div>
        <div className="text-2xl bold">{`$${amount}`}</div>
      </div>

      <div className="flex-1">
        <div className="flex justify-end items-center">
          <div>
            <ArrowUpIcon height={16} width={16} />
          </div>
          <div>+5%</div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={200}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
