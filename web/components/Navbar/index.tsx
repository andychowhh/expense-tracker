"use client";

import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { isEmpty } from "lodash";

import { AddNewRecordButton, LoginButton, MobileMenuButton } from "../Button";
import { ProfileDropdown } from "../Dropdown";
import { PageLinks, MobilePageLinks } from "../Link";

import { UserContext } from "../../context/UserContext";

export const Navbar = () => {
  const { user } = useContext(UserContext) ?? {};

  return (
    <Disclosure as="nav">
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
                {isEmpty(user) ? (
                  <LoginButton />
                ) : (
                  <>
                    <AddNewRecordButton />
                    <ProfileDropdown />
                  </>
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
