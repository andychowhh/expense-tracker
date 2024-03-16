import React from "react";

const INITIAL_TRANSACTIONS: { id: number; label: string; value: string }[] = [
  { id: 1, label: "Grocery Store", value: "-$87.00" },
  { id: 2, label: "Salary", value: "+4,000.00" },
  { id: 3, label: "Grocery Store", value: "-$45.00" },
];

const TransactionsItem = ({
  label,
  value,
  isPositive,
}: {
  label: string;
  value: string;
  isPositive: boolean;
}) => {
  return (
    <div className="flex justify-between border-b py-2">
      <span>{label}</span>
      <span className={`${isPositive ? "text-green-600" : "text-red-600"}`}>
        {value}
      </span>
    </div>
  );
};

export const RecentTransactions = () => {
  return (
    <div className="px-5 py-5 bg-white rounded">
      <span className="text-lg font-medium">Recent Transactions</span>
      <div className="flex flex-col mt-4">
        {INITIAL_TRANSACTIONS.map(({ id, label, value }) => (
          <TransactionsItem
            key={id}
            label={label}
            value={value}
            isPositive={id % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};
