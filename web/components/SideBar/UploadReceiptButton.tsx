"use client";

import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid";
import useToggle from "beautiful-react-hooks/useToggle";
import { TransactionModal } from "../TransactionModal";
import { Transaction } from "@/types";
import { createTransation } from "@/actions/transactions";
import { UploadReceiptModal } from "./UploadReceiptModal";

export const UploadReceiptButton = () => {
  const [isUploadReceiptModalOpen, toggleIsUploadReceiptModalOpen] =
    useToggle();
  return (
    <>
      {/* <TransactionModal
        defaultValues={null}
        isOpen={isAddNewRecordModalOpen}
        onClose={toggleAddNewRecordModal}
        onSubmit={async (props: Omit<Transaction, "_id">) =>
          await createTransation(props)
        }
      /> */}
      <UploadReceiptModal
        isOpen={isUploadReceiptModalOpen}
        onClose={toggleIsUploadReceiptModalOpen}
      />
      <button
        className={`group relative rounded-xl p-2 text-blue-600 hover:bg-gray-50`}
        onClick={toggleIsUploadReceiptModalOpen}
      >
        <ArrowUpOnSquareIcon
          className="block h-7 w-7"
          aria-hidden="true"
          fill={""}
        />
        <div className="absolute inset-y-0 left-12 hidden z-10 items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Upload Receipts
          </div>
        </div>
      </button>
    </>
  );
};
