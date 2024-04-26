"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SubmitButton } from "../TransactionModal/SubmitButton";
import { createWorker } from "tesseract.js";

interface UploadReceiptModalProp {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadReceiptModal({
  isOpen,
  onClose,
}: UploadReceiptModalProp) {
  const cancelButtonRef = useRef(null);
  const [imagePath, setImagePath] = useState("");

  const handleImageChange = (event) => {
    console.log(event.target.files);
    if (event.target.files.length !== 0) {
      setImagePath(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting...");
    
    const worker = await createWorker("eng");
    console.log({ imagePath });

    const res = await worker.recognize(imagePath);
    console.log({res});
    await worker.terminate();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex justify-between items-center border-b py-2 px-5">
                  Upload Receipts
                </div>
                <form onSubmit={onSubmit}>
                  <div className="flex flex-col items-center gap-2 p-3">
                    {imagePath && (
                      <div>
                        <img src={imagePath} className="App-logo" alt="logo" />
                      </div>
                    )}
                    <div>
                      <input type="file" accept="image/*" onChange={handleImageChange} />
                    </div>
                  </div>
                  <div className="px-4 py-5 sm:flex sm:flex-row-reverse sm:px-6">
                    <SubmitButton disabled={false} />
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
