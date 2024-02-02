import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface MobileMenuButton {
  isOpen: boolean;
}

export function MobileMenuButton({ isOpen }: MobileMenuButton) {
  return (
    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
}
