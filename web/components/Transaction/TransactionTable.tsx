import React from "react";
import Image from "next/image";
import { getCookie } from "@/utils";
import { Transaction } from "@/types";
import { TransactionTableItem } from "./TransactionTableItem";
import { formatDate } from "@/utils/date";

export const TransactionTable = async ({ date }: { date: string }) => {
  const raw = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/transactions?date=${
      date ? date : formatDate(new Date())
    }`,
    {
      next: { tags: ["transactions"] },
      headers: {
        Cookie: `accessToken=${await getCookie(
          "accessToken"
        )};refreshToken=${await getCookie("refreshToken")}`,
      },
    }
  );
  const transactionsRes = await raw.json();
  if (raw.status >= 400) {
    throw new Error(transactionsRes.message);
  }
  const transactions: Transaction[] = transactionsRes.data;

  return (
    <div className="overflow-scroll max-h-[635px] rounded-lg border border-gray-200 shadow-md w-full">
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
            {transactions.map(
              ({ _id, amount, category, paymentMethod, note, date }) => (
                <TransactionTableItem
                  key={_id}
                  _id={_id}
                  amount={amount}
                  category={category}
                  paymentMethod={paymentMethod}
                  note={note}
                  date={date}
                />
              )
            )}
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
