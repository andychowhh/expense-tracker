import React from "react";
import { Disclosure } from "@headlessui/react";

// TODO make it utils
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

// TODO make it constant
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Settings", href: "/settings", current: false },
];

export function MobilePageLinks() {
  return (
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
  );
}
