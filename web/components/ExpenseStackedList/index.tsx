"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { isEmpty } from "lodash";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import axios from "../../api/axios";
import { DEFAULT_DATE_FORMAT } from "../../constants";
import { CATEGORIES } from "..";
import { UserContext } from "../../context/UserContext";
import { Transaction } from "../../types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface FormInput {
  date: Date;
}

export function ExpenseStackedList() {
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
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  const { user } = useContext(UserContext) ?? {};

  useEffect(() => {
    async function fetchTransactions() {
      if (!isEmpty(user)) {
        const res = await axios.get("http://localhost:3001/transactions", {
          params: {
            date: moment(date).format(DEFAULT_DATE_FORMAT),
          },
        });
        setTransaction(res.data);
      }
    }
    fetchTransactions();
  }, [date, user]);

  return (
    <div className="sm:border sm:border-1 sm:mt-4 sm:max-w-md sm:m-auto md:max-w-xl lg:max-w-3xl">
      <div className="flex justify-between items-center border-b py-2 sm:px-4">
        <div className="invisible">CA$0</div>
        <div className="flex gap-5">
          <button
            onClick={() =>
              setValue("date", moment(date).add(-1, "days").toDate())
            }
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
                onChange={(date) => field.onChange(date)}
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                customInput={
                  <div className="w-28 cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2 text-sm text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
            onClick={() =>
              setValue("date", moment(date).add(1, "days").toDate())
            }
          >
            <ChevronRightIcon className={`mx-auto h-6 w-6 ${moment(date).isSame(moment(), "day") && " text-gray-200"}`} />
          </button>
        </div>
        <div>CA$0</div>
      </div>
      <ul role="list" className="divide-y divide-gray-100 sm:px-4">
        {transactions.length > 0 ? (
          transactions.map((transaction) => {
            const category = CATEGORIES.find(
              (c) => c.value === transaction.category
            );
            return (
              <li
                key={transaction._id}
                className="flex justify-between items-center gap-x-6 py-5"
              >
                <div className="flex items-center min-w-0 gap-x-4">
                  <div className="h-12 w-12 relative flex-none">
                    <Image
                      className="rounded-full bg-gray-50"
                      src={category?.avatar ?? ""}
                      alt=""
                      fill={true}
                    />
                  </div>
                  <div className="min-w-0 flex-auto">{category?.label}</div>
                </div>
                <div className="sm:flex sm:flex-col">
                  <p className="text-sm leading-6 text-gray-900">
                    CA${transaction.amount}
                  </p>
                </div>
              </li>
            );
          })
        ) : (
          <div className="p-20 text-center">No expenses recorded today</div>
        )}
      </ul>
    </div>
  );
}
