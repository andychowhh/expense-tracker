"use client";

import { Fragment, useContext } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { string, number, date } from "yup";
import { CurrencyDollarIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import AutosizeInput from "react-input-autosize";

import { CategorySelectGrid } from "../CategorySelectGrid";
import { CATEGORIES } from "@/constants";
import { PAYMENT_METHOD, Transaction } from "@/types";

import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../../context/UserContext";
import { isEmpty } from "lodash";
import { SubmitButton } from "./SubmitButton";
import { DefaultResponse } from "@/types";
import { formatDate } from "@/utils/date";
import { XMarkIcon } from "@heroicons/react/24/outline";

export interface TransactionFormData {
  date: Date;
  paymentMethod: PAYMENT_METHOD;
  category: string;
  amount: number;
  note: string;
}

interface TransactionModalProp {
  defaultValues?: TransactionFormData | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (
    props: Omit<Transaction, "_id">
  ) => Promise<DefaultResponse<any> | undefined>;
}

const schema = yup.object({
  date: date().required(),
  paymentMethod: string().oneOf([
    PAYMENT_METHOD.CASH,
    PAYMENT_METHOD.CREDIT_CARD,
  ]),
  category: string().required(),
  amount: number().positive().required(),
  note: string(),
});

export default function TransactionModal({
  defaultValues,
  isOpen,
  onClose,
  onSubmit,
}: TransactionModalProp) {
  const { user } = useContext(UserContext) ?? {};

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues:
      defaultValues === null
        ? {
            date: new Date(),
            paymentMethod: PAYMENT_METHOD.CASH,
            category: CATEGORIES[0].value,
          }
        : defaultValues,
  });

  const addTransaction = async ({
    amount,
    category,
    paymentMethod,
    date,
    note,
  }: TransactionFormData) => {
    try {
      // TODO React-Hook-Form dirty field for update transaction
      const res = await onSubmit({
        amount,
        category,
        paymentMethod,
        date: formatDate(date),
        note,
      });
      if (res?.message) {
        // Show Toast
        console.log(res?.message);
        return;
      }
      reset(undefined, { keepDefaultValues: true });
      onClose();
    } catch (err) {
      console.log("addTransaction Error", err);
    }
  };

  if(!isOpen) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 bg-red-100"
        onClose={() => {
          reset();
          onClose();
        }}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
          <div className="sm:flex sm:justify-center h-full items-center">
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
                    <div className="flex justify-between items-center border-b py-2 px-5">
                      <div className="invisible">
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <Dialog.Title
                        as="h3"
                        className="text-base leading-6 text-gray-900 py-1"
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
                                  {formatDate(field.value)}
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
                      <div
                        className="text-neutral-400 cursor-pointer hover:text-neutral-500"
                        onClick={() => {
                          onClose();
                          reset();
                        }}
                      >
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between mt-2 py-2 px-4">
                      <Controller
                        control={control}
                        name="paymentMethod"
                        rules={{ required: true }}
                        render={({ field }) => (
                          // TODO - autofocus won't work for amount input if using button tag here
                          <div
                            className="flex flex-col items-center bg-gray-100 cursor-pointer px-2 py-1 min-w-[95px]"
                            onClick={(e) => {
                              e.preventDefault();
                              field.onChange(
                                field.value === PAYMENT_METHOD.CASH
                                  ? PAYMENT_METHOD.CREDIT_CARD
                                  : PAYMENT_METHOD.CASH
                              );
                            }}
                          >
                            <div className="flex flex-1 justify-center px-3 w-14">
                              {field.value === PAYMENT_METHOD.CASH ? (
                                <CurrencyDollarIcon />
                              ) : (
                                <CreditCardIcon />
                              )}
                            </div>
                            <span className="text-sm">
                              {field.value === PAYMENT_METHOD.CASH
                                ? "Cash"
                                : "Credit Card"}
                            </span>
                          </div>
                        )}
                      />

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
                              onChange={(item) => field.onChange(item)}
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
                  </div>
                  <div className="px-4 py-5 sm:flex sm:flex-row-reverse sm:px-6">
                    <SubmitButton disabled={isEmpty(user)} />
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
