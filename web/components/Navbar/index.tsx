"use client";

import { useContext } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { isEmpty } from "lodash";

import { LoginButton, MobileMenuButton } from "../Button";
import { ProfileDropdown } from "../Dropdown";
import { MobilePageLinks } from "../Link";

import { UserContext } from "../../context/UserContext";

export const Navbar = () => {
  const { user } = useContext(UserContext) ?? {};

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="bg-white px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-nav-bar items-center justify-between">
              {/* Mobile Menu */}
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <MobileMenuButton isOpen={open} />
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/wallet-icon-48.png"
                  alt="wallet-icon"
                  width={36}
                  height={36}
                />
                <span className="text-lg font-semibold ml-2">FinTrack</span>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isEmpty(user) ? (
                  <div className="hidden lg:block">
                    <LoginButton />
                  </div>
                ) : (
                  <>
                    <ProfileDropdown />
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="border-y border-neutral-200 absolute z-10 bg-white w-full lg:hidden">
            <MobilePageLinks />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
