"use client";

import { Fragment, useContext, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { string, number, date } from "yup";
import { PhotoIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import AutosizeInput from "react-input-autosize";

import { CategorySelect, CategorySelectGrid } from "@/components";
import { CATEGORIES, DEFAULT_DATE_FORMAT } from "@/constants";
import { Category } from "../../types";

import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../../context/UserContext";
import { createTransation } from "../../actions/transactions";
import moment from "moment";

interface TransactionFormData {
  date: Date;
  category: string;
  amount: number;
  note: string;
}

interface AddNewRecordModalProp {
  isOpen: boolean;
  onClose: () => void;
}

const schema = yup
  .object({
    date: date().required(),
    category: string().required(),
    amount: number().positive().required(),
    note: string(),
  })
  .required();

export function AddNewRecordModal({ isOpen, onClose }: AddNewRecordModalProp) {
  const [test, setTest] = useState("");
  const { user } = useContext(UserContext) ?? {};
  const {
    control,
    formState,
    getValues,
    register,
    trigger,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TransactionFormData>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      date: new Date(),
      category: CATEGORIES[0].value,
    },
  });

  const addTransaction = async ({
    amount,
    category,
    date,
    note,
  }: TransactionFormData) => {
    createTransation({ amount, category, date, note, user });
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
          <div className="sm:flex sm:justify-center">
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
                <form action={handleSubmit(addTransaction)}>
                  <div className="bg-white">
                    <div className="flex justify-center border-b py-2">
                      <Dialog.Title
                        as="h3"
                        className="text-base leading-6 text-gray-900"
                      >
                        <Controller
                          control={control}
                          name="date"
                          rules={{ required: true }}
                          render={({ field }) => (
                            <DatePicker
                              selected={field.value}
                              preventOpenOnFocus={true}
                              dateFormat="d MMM yyyy"
                              maxDate={new Date()}
                              customInput={
                                <span className="border rounded-3xl bg-gray-200 py-1 px-2 hover:cursor-pointer">
                                  {moment(field.value).format(
                                    DEFAULT_DATE_FORMAT
                                  )}
                                </span>
                              }
                              onChange={(date) => field.onChange(date)}
                              onKeyDown={(e) => {
                                e.preventDefault();
                              }}
                            />
                          )}
                        />
                      </Dialog.Title>
                    </div>

                    <div className="flex justify-between mt-2 py-2 px-4">
                      <div className="flex flex-col items-center">
                        <div className="flex flex-1 justify-center bg-gray-100 px-3 w-14">
                          <CurrencyDollarIcon />
                        </div>
                        <span>Cash</span>
                      </div>
                      <div className="flex items-center justify-end text-3xl">
                        <span className="">CA$</span>
                        <Controller
                          control={control}
                          name="amount"
                          rules={{ required: true }}
                          render={({ field }) => (
                            <AutosizeInput
                              type="number"
                              className="autosize-input"
                              autoFocus
                              value={field.value}
                              onChange={(item: number) => field.onChange(item)}
                            />
                          )}
                        />
                      </div>
                    </div>

                    <div className="col-span-full mt-2">
                      <Controller
                        control={control}
                        name="category"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <CategorySelectGrid
                            selectedOption={field.value}
                            onChange={(item) => field.onChange(item)}
                          />
                        )}
                      />
                    </div>

                    <div className="col-span-full mt-4 px-4">
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
                        <p className="text-red-600">{errors.note?.message}</p>
                      </div>
                    </div>

                    {/* Receipt */}
                    {/* <div className="col-span-full">
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
                        </div> */}
                  </div>
                  <div className="px-4 py-5 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Add
                    </button>
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
