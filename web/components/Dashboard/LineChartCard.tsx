"use client";

import React from "react";
import { Area, ResponsiveContainer, Line, ComposedChart } from "recharts";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { ChartData } from "@/types";

interface LineChartCardProp {
  data: ChartData[];
  label: string;
  priceChange: number;
}

export const LineChartCard = ({
  label,
  data,
  priceChange,
}: LineChartCardProp) => {
  const amount = data.reduce((total, item) => (total += item.pv), 0);
  return (
    <div className="flex flex-1 bg-white rounded p-3">
      <div className="flex flex-col flex-1">
        <div className="text-sm text-gray-400">{label}</div>
        <div className="text-2xl bold">{`$${amount}`}</div>
      </div>

      <div className="flex-1">
        <div
          className={`flex justify-end items-center ${
            priceChange > 0 ? "text-green-700" : "text-red-500"
          }`}
        >
          <div>
            {priceChange > 0 ? (
              <ArrowUpIcon height={18} width={18} />
            ) : (
              <ArrowDownIcon height={18} width={18} />
            )}
          </div>
          <div>{`${priceChange}%`}</div>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <ComposedChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Area
              type="linear"
              dataKey="pv"
              stroke="none"
              fill={
                priceChange > 0 ? "rgb(141, 218, 171)" : "rgb(254, 178, 178)"
              }
            />
            <Line
              type="linear"
              stroke={priceChange > 0 ? "rgb(21, 128, 61)" : "rgb(239, 68, 68)"}
              strokeWidth={2}
              dot={false}
              dataKey="pv"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
