"use client";

import { Disclosure } from "@headlessui/react";

import { AddNewRecordButton, LoginButton, MobileMenuButton } from "../Button";
import { ProfileDropdown } from "../Dropdown";
import { PageLinks, MobilePageLinks } from "../Link";

import type { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hook";

export const Navbar = () => {
  const user = useAppSelector((state: RootState) => state.user);

  return (
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
                  <PageLinks />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user ? (
                  <>
                    <AddNewRecordButton />
                    <ProfileDropdown />
                  </>
                ) : (
                  <LoginButton />
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <MobilePageLinks />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
