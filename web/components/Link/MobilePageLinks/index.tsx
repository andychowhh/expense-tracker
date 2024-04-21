import React from "react";
import { Disclosure } from "@headlessui/react";
import { navigation } from "../../../constants";
import { LoginButton } from "@/components/Button";

// TODO make it utils
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function MobilePageLinks() {
  return (
    <div className="space-y-2 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-700 hover:bg-gray-700 hover:text-white",
            "block rounded-md px-3 py-2 text-base font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
      <div>
        <LoginButton />
      </div>
    </div>
  );
}
