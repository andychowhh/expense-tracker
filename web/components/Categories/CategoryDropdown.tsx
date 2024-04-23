'use client'

import React, { useContext } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { CategoryChartContext } from "@/context/CategoryChartContext";

const TRANSACTION_TYPE_OPTIONS = [
  {
    label: "Expense",
    value: "expense",
  },
  {
    label: "Income",
    value: "income",
  },
];

export const CategoryDropdown = () => {
  const { transactionType, setTransactionType } =
    useContext(CategoryChartContext)!;

  return (
    <Dropdown
      selected={transactionType}
      options={TRANSACTION_TYPE_OPTIONS}
      onSelect={(opt) => setTransactionType(opt)}
    />
  );
};
