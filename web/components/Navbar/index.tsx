"use client";

import { Disclosure } from "@headlessui/react";

import useToggle from "beautiful-react-hooks/useToggle";

import { BellIcon } from "@heroicons/react/24/outline";

import { AddNewRecordModal } from "../AddNewRecordModal";
import { LoginButton, MobileMenuButton } from "../Button";
import { ProfileDropdown } from "../Dropdown";

import type { RootState } from "../../redux/store";
import { useAppSelector, useAppDispatch } from "../../redux/hook";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Settings", href: "/settings", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [isAddNewRecordModalOpen, toggleAddNewRecordModal] = useToggle();
  const user = useAppSelector((state: RootState) => state.user);

  return (
    <>
      <AddNewRecordModal
        isOpen={isAddNewRecordModalOpen}
        onClose={toggleAddNewRecordModal}
      />
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <MobileMenuButton isOpen={open} />
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {user ? (
                    <>
                      <button
                        onClick={toggleAddNewRecordModal}
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Add New Record
                      </button>
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <ProfileDropdown />
                    </>
                  ) : (
                    <LoginButton />
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
