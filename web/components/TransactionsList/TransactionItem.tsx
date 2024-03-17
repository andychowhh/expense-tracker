"use client";

import React from "react";
import Image from "next/image";
import { CATEGORIES } from "@/constants";
import { Transaction } from "../../types";

function TransactionItem({
  category,
  amount,
}: Omit<Transaction, "_id" | "date" | "note">) {
  const itemCategory = CATEGORIES.find((c) => c.value === category);
  return (
    <li className="flex justify-between items-center gap-x-6 py-5">
      <div className="flex items-center min-w-0 gap-x-4">
        <div className="h-12 w-12 relative flex-none">
          <Image
            className="rounded-full bg-gray-50"
            src={itemCategory?.avatar ?? ""}
            alt={itemCategory?.label ?? ""}
            fill={true}
          />
        </div>
        <div className="min-w-0 flex-auto">{itemCategory?.label}</div>
        <div className="min-w-0 flex-auto">{""}</div>
      </div>
      <div className="sm:flex sm:flex-col">
        <p className="text-sm leading-6 text-gray-900">CA${amount}</p>
      </div>
    </li>
  );
}

export default TransactionItem;
