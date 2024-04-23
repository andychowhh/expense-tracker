"use client";

import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { CalendarIcon } from "@heroicons/react/24/solid";

export function CategoryDatePicker() {
  const renderMonthContent = (
    month: number,
    shortMonth: string,
    longMonth: string,
    day: Date
  ) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="flex items-center gap-1 border rounded bg-white px-4 py-2 hover:bg-gray-50"
      onClick={onClick}
      ref={ref}
    >
      <div className="h-5 w-5">
        <CalendarIcon />
      </div>

      <div>{value}</div>
    </button>
  ));
  return (
    <div className="category-date-picker">
      <DatePicker
        selected={new Date()}
        renderMonthContent={renderMonthContent}
        customInput={<CustomInput />}
        showMonthYearPicker
        dateFormat="yyyy-MM"
        withPortal={true}
      />
    </div>
  );
}
