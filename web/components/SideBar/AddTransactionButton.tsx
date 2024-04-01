"use client";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import useToggle from "beautiful-react-hooks/useToggle";
import { AddNewRecordModal } from "../AddNewRecordModal";

export const AddTransactionButton = () => {
  const [isAddNewRecordModalOpen, toggleAddNewRecordModal] = useToggle();
  return (
    <>
      <AddNewRecordModal
        isOpen={isAddNewRecordModalOpen}
        onClose={toggleAddNewRecordModal}
      />
      <button
        className={`group relative rounded-xl p-2 text-blue-600 hover:bg-gray-50`}
        onClick={toggleAddNewRecordModal}
      >
        <PlusCircleIcon
          className="block h-7 w-7"
          aria-hidden="true"
          fill={""}
        />
        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Add Transactions
          </div>
        </div>
      </button>
    </>
  );
};
