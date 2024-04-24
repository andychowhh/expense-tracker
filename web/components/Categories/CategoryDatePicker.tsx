"use client";

import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import moment from "moment";

export function CategoryDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const { push } = useRouter();

  const onDateUpdate = (date: Date) => {
    setStartDate(date);
    push(`/categories?date_range=${moment(date).format("YYYY-MM")}`);
  };

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
        renderMonthContent={renderMonthContent}
        customInput={<CustomInput />}
        showMonthYearPicker
        dateFormat="yyyy-MM"
        withPortal={true}
        maxDate={new Date()}
        selected={startDate}
        onChange={onDateUpdate}
      />
    </div>
  );
}