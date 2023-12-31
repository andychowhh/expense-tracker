import React from "react";

const RecordExpense = () => {
  return (
    <div className="h-screen p-40 bg-slate-200">
      <div className="border rounded bg-white p-10">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Add Expense Record
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
    </div>
  );
};

export default RecordExpense;
