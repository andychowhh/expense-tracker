"use client";

import Image from "next/image";
import { PAYMENT_METHOD, Transaction } from "@/types";
import { CATEGORIES } from "@/constants";
import { deleteTransation } from "@/actions/transactions";

export const TransactionTableItem = ({
  _id,
  amount,
  note,
  category,
  paymentMethod,
}: Transaction) => {
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
          <div className="text-gray-400">{note}</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            paymentMethod === PAYMENT_METHOD.CASH
              ? "bg-green-50 text-green-600"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          {paymentMethod}
        </span>
      </td>
      <td className="px-6 py-4">CA${amount}</td>
      <td className="px-6 py-4">
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              if (window.confirm("Confirm to delete?")) {
                deleteTransation(_id);
              }
            }}
          >
            <Image
              src="/images/delete-action.svg"
              alt="delete-icon"
              height={24}
              width={24}
            />
          </button>
          <button>
            <Image
              src="/images/edit-action.svg"
              alt="edit-icon"
              height={24}
              width={24}
            />
          </button>
        </div>
      </td>
    </tr>
  );
};
