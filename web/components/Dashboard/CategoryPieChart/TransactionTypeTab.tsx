"use client";

import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const options = [
  { label: "Income", value: "income" },
  { label: "Expense", value: "expense" },
];

export const TransactionTypeTab = () => {
  return (
    <div className="w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {options.map(({ value, label }) => (
            <Tab
              key={value}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 px-5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                  selected
                    ? "bg-white text-blue-700"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {label}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};
