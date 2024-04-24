"use client";

import React, { ReactNode, useState, Dispatch } from "react";

interface CategoryChartContextProp {
  transactionType: string;
  setTransactionType: Dispatch<string>;
}

export const CategoryChartContext =
  React.createContext<CategoryChartContextProp | null>(null);

export function CategoryChartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [transactionType, setTransactionType] = useState<string>("expense");

  return (
    <CategoryChartContext.Provider
      value={{ transactionType, setTransactionType }}
    >
      {children}
    </CategoryChartContext.Provider>
  );
}
