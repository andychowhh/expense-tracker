"use client";

import React, { useContext } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { CategoryChartContext } from "@/context/CategoryChartContext";
import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";

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
  const { updateQueryParams } = useUpdateQueryParams();

  return (
    <Dropdown
      selected={transactionType}
      options={TRANSACTION_TYPE_OPTIONS}
      onSelect={(opt) => {
        setTransactionType(opt);
        updateQueryParams("transaction_type", opt);
      }}
      menuButtonStyle={{ boxShadow: "none" }}
    />
  );
};
