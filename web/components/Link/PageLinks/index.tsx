import React from "react";
import { navigation } from "../../../constants";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function PageLinks() {
  return (
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
  );
}
