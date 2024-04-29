"use client";

import Image from "next/image";
import useToggle from "beautiful-react-hooks/useToggle";
import { PAYMENT_METHOD, Transaction } from "@/types";
import { CATEGORIES } from "@/constants";
import { deleteTransation, updateTransation } from "@/actions/transactions";
import TransactionModal from "../TransactionModal";
import { toLocalDate } from "@/utils/date";

export const TransactionTableItem = ({
  _id,
  amount,
  note,
  category,
  date,
  paymentMethod,
}: Transaction) => {
  const [isTransactionModalOpen, toggleIsTransactionModalOpen] = useToggle();
  const categoryObj = CATEGORIES.find((c) => c.value === category);

  return (
    <>
      <TransactionModal
        defaultValues={{
          amount,
          note,
          category,
          paymentMethod,
          date: toLocalDate(date),
        }}
        isOpen={isTransactionModalOpen}
        onClose={toggleIsTransactionModalOpen}
        onSubmit={async (props: Omit<Transaction, "_id">) =>
          await updateTransation(_id, props)
        }
      />
      <tr className="hover:bg-gray-50">
        <th className="flex gap-3 px-3 py-3 lg:px-6 lg:py-4 font-normal text-gray-900">
          <div className="relative h-10 w-10">
            <Image
              src={categoryObj?.avatar ?? ""}
              alt={categoryObj?.label ?? ""}
              fill={true}
            />
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-700">
              {categoryObj?.label}
            </div>
            <div className="text-gray-400">{note}</div>
          </div>
        </th>
        <td className="px-3 py-3 lg:px-6 lg:py-4">
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
        <td className="px-3 py-3 lg:px-6 lg:py-4">CA${amount}</td>
        <td className="px-3 py-3 lg:px-6 lg:py-4">
          <div className="flex justify-end gap-3 lg:gap-4">
            <button
              className="w-6 h-6"
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
            <button
              className="w-6 h-6"
              onClick={() => toggleIsTransactionModalOpen()}
            >
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
    </>
  );
};
