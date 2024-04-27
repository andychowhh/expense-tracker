"use client";

import React from "react";
import { useBreakpoint } from "@/hooks/useBreakPoint";
import { Summary } from "@/types";
import { LineChartCard } from "./LineChartCard";
import { LineChartCarousell } from "./LineChartCarousell";

interface LineChartGroupItemsProp {
  data: Summary[];
}

export function LineChartGroupItems({ data }: LineChartGroupItemsProp) {
  const balance = data.map(({ _id, totalIncome, totalExpense }) => {
    return { name: _id, pv: totalIncome - totalExpense };
  });
  const income = data.map(({ _id, totalIncome }) => {
    return { name: _id, pv: totalIncome };
  });
  const expense = data.map(({ _id, totalExpense }) => {
    return { name: _id, pv: totalExpense };
  });
  const { isMd } = useBreakpoint("md");

  function LineChartCardGroup() {
    return (
      <>
        <LineChartCard label="Total Balance" data={balance} />
        <LineChartCard label="Income" data={income} />
        <LineChartCard label="Expense" data={expense} />
      </>
    );
  }

  return (
    <>
      {isMd ? (
        <div className="flex justify-between gap-4">
          <LineChartCardGroup />
        </div>
      ) : (
        <div className="w-full">
          <LineChartCarousell>
            <LineChartCardGroup />
          </LineChartCarousell>
        </div>
      )}
    </>
  );
}
