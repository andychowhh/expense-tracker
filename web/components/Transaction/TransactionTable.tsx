import React from "react";
import { NextRequest, NextResponse } from "next/server";
import Image from "next/image";
import moment from "moment";
import { DEFAULT_DATE_FORMAT, CATEGORIES } from "@/constants";
import { getCookie } from "@/utils";
import { Transaction } from "@/types";
import { AxiosResponse } from "axios";

function TransactionTableItem({
  amount,
  note,
  category,
}: Omit<Transaction, "_id">) {
  const categoryObj = CATEGORIES.find((c) => c.value === category);
  return (
    <tr className="hover:bg-gray-50">
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-10 w-10">
          <Image
            src={categoryObj?.avatar ?? ""}
            alt={categoryObj?.label ?? ""}
            fill={true}
          />
        </div>
        <div className="text-sm">
          <div className="font-medium text-gray-700">{categoryObj?.label}</div>
          <div className="text-gray-400">Ice-Cream</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
          Cash
        </span>
      </td>
      <td className="px-6 py-4">CA${amount}</td>
      <td className="px-6 py-4">
        <div className="flex justify-end gap-4">
          <a x-data="{ tooltip: 'Delete' }" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              x-tooltip="tooltip"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </a>
          <a x-data="{ tooltip: 'Edite' }" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              x-tooltip="tooltip"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </a>
        </div>
      </td>
    </tr>
  );
}

export const TransactionTable = async ({ date }: { date: string }) => {
  const raw = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/transactions?date=${
      date ? date : moment().format(DEFAULT_DATE_FORMAT)
    }`,
    {
      next: { tags: ["transactions"] },
      headers: {
        Cookie: `accessToken=${await getCookie("accessToken")}`,
      },
    }
  );
  const transactionsRes = await raw.json();
  if (raw.status >= 400) {
    throw new Error(transactionsRes.message);
  }
  const transactions: Transaction[] = transactionsRes.data;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Category
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Payment Method
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>
          </tr>
        </thead>
        {transactions.length > 0 ? (
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {transactions.map(({ _id, amount, category, note, date }) => (
              <TransactionTableItem
                key={_id}
                amount={amount}
                category={category}
                note={note}
                date={date}
              />
            ))}
          </tbody>
        ) : (
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr>
              <td colSpan={4}>
                <div className="no-data inset-0 flex flex-col items-center justify-center py-28">
                  <div className="">
                    <Image
                      src="/images/no-data-icon.svg"
                      alt="no-data-icon"
                      height={70}
                      width={70}
                    />
                  </div>
                  <div>No data</div>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};
