import React from "react";
import useToggle from "beautiful-react-hooks/useToggle";

import { AddNewRecordModal } from "../../AddNewRecordModal";

export function AddNewRecordButton() {
  const [isAddNewRecordModalOpen, toggleAddNewRecordModal] = useToggle();
  return (
    <>
      <AddNewRecordModal
        isOpen={isAddNewRecordModalOpen}
        onClose={toggleAddNewRecordModal}
      />
      <button
        onClick={toggleAddNewRecordModal}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add New Record
      </button>
    </>
  );
}
