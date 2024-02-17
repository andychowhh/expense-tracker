"use client";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Category } from "@/types";

export const CATEGORIES: Category[] = [
  {
    label: "Food",
    value: "food",
    avatar: "/images/food.png",
  },
  {
    label: "Snack",
    value: "snack",
    avatar: "/images/snack.png",
  },
  {
    label: "Transportation",
    value: "transportation",
    avatar: "/images/transportation.png",
  },
  {
    label: "Shopping",
    value: "shopping",
    avatar: "/images/shopping.png",
  },
  {
    label: "Entertainment",
    value: "entertainment",
    avatar: "/images/entertainment.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface CategorySelectProp {
  selected: Category;
  onChange: (item: string) => void;
}

export function CategorySelect({
  selected = CATEGORIES[0],
  onChange,
}: CategorySelectProp) {
  return (
    <Listbox value={selected} onChange={(item) => onChange(item.value)}>
      {({ open }) => (
        <>
          <div className="relative mt-2 sm:max-w-sm">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <div className="h-5 w-5 relative">
                  <Image
                    src={selected.avatar}
                    alt=""
                    className="flex-shrink-0 rounded-full"
                    fill={true}
                  />
                </div>
                <span className="ml-3 block truncate">{selected.label}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {CATEGORIES.map((category) => (
                  <Listbox.Option
                    key={category.value}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <div className="h-5 w-5 relative">
                            <Image
                              src={category.avatar}
                              alt=""
                              className="flex-shrink-0 rounded-full"
                              fill={true}
                            />
                          </div>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {category.label}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
