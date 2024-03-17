"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "../../constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "react-datepicker/dist/react-datepicker.css";

interface FormInput {
  date: Date;
}

export const TransactionListHeader = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      date: new Date(),
    },
  });
  const date = watch("date");
  const { push } = useRouter();

  const updateDateQueryParam = (date: Date) => {
    push(`/transactions?date=${moment(date).format(DEFAULT_DATE_FORMAT)}`);
  };

  return (
    <div className="flex justify-between items-center border-b py-3 sm:px-4">
      <div className="invisible">CA$0</div>
      <div className="flex gap-5">
        <button
          onClick={() => {
            const newDate = moment(date).add(-1, "days").toDate();
            setValue("date", newDate);
            updateDateQueryParam(newDate);
          }}
        >
          <ChevronLeftIcon className="mx-auto h-6 w-6" />
        </button>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              preventOpenOnFocus={true}
              withPortal={true}
              dateFormat="d MMM yyyy"
              maxDate={new Date()}
              onChange={(date) => {
                field.onChange(date);
                updateDateQueryParam(date as Date);
              }}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
              customInput={
                <div className="w-29 cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2 text-sm text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {moment(field.value).isSame(moment(), "day")
                    ? "Today"
                    : moment(field.value).format(DEFAULT_DATE_FORMAT)}
                </div>
              }
            />
          )}
        />
        <button
          disabled={moment(date).isSame(moment(), "day")}
          onClick={() => {
            const newDate = moment(date).add(1, "days").toDate();
            setValue("date", newDate);
            updateDateQueryParam(newDate);
          }}
        >
          <ChevronRightIcon
            className={`mx-auto h-6 w-6 ${
              moment(date).isSame(moment(), "day") && " text-gray-200"
            }`}
          />
        </button>
      </div>
      <div>CA$0</div>
    </div>
  );
};
