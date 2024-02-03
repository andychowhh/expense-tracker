"use client";

import { Fragment, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";

import axios from "../../api/axios";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/solid";

import { CategorySelect } from "../../components";
import { Category } from "../../types";

import "react-datepicker/dist/react-datepicker.css";

interface Inputs {
  date: Date;
  category: Category;
  amount: number;
  note: string;
}

interface AddNewRecordModalProp {
  isOpen: boolean;
  onClose: () => void;
}

export function AddNewRecordModal({ isOpen, onClose }: AddNewRecordModalProp) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      date: new Date(),
    },
  });

  const add = async () => {
    await axios.post("http://localhost:3001/transactions", {
      user: "65bdcb493d58a80ae9d14850",
      amount: 99,
      category: "cat",
      date: "2019-02-10",
    });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 bg-red-100" onClose={onClose}>
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
          <div className="sm:flex sm:justify-center sm:h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="h-screen relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:rounded-lg sm:h-auto sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:flex-col sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Add New Record
                      </Dialog.Title>
                    </div>
                    <div className="w-full mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Date
                        </label>

                        <Controller
                          control={control}
                          name="date"
                          render={({ field }) => (
                            <DatePicker
                              selected={field.value}
                              preventOpenOnFocus={true}
                              dateFormat="d MMM yyyy"
                              maxDate={new Date()}
                              onChange={(date) => field.onChange(date)}
                              onKeyDown={(e) => {
                                e.preventDefault();
                              }}
                              className="text-sm border-0 rounded-md px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Category
                        </label>
                        <div className="mt-2">
                          <Controller
                            control={control}
                            name="category"
                            render={({ field }) => (
                              <CategorySelect
                                selected={field.value}
                                onChange={(item) => field.onChange(item)}
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4 sm:max-w-sm">
                        <label
                          htmlFor="amount"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Amount
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="number"
                              id="amount"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              {...register("amount")}
                            />
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                              CAD
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="note"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Note
                        </label>
                        <div className="mt-2">
                          <textarea
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                            {...register("note")}
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="receipt"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Receipt
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            <PhotoIcon
                              className="mx-auto h-12 w-12 text-gray-300"
                              aria-hidden="true"
                            />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    // onClick={() => onClose()}
                    onClick={() => add()}
                  >
                    Add
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
