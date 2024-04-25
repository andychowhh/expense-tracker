"use client";

import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { useQueryParams } from "@/hooks/useQueryParams";

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
  const { updateQueryParams, getQueryParam } = useQueryParams();
  
  const [transactionType, setTransactionType] = useState(
    getQueryParam("transaction_type") ?? "expense"
  );

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
