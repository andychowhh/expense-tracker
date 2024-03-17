"use client";

import React from "react";
import Link from "next/link";
import { navigation } from "@/constants";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex bg-gray-100 text-gray-900">
      <aside className="flex h-screen px-7 flex-col items-center border-r border-neutral-200 bg-white">
        <nav className="flex flex-1 flex-col items-center gap-y-6 pt-10">
          {navigation.map(({ id, name, href, IconComponent }) => (
            <Link
              href={href}
              className={`group relative rounded-xl p-2 text-blue-600 hover:bg-gray-50 ${
                pathname === href ? "bg-gray-100" : ""
              }`}
              key={id}
            >
              <IconComponent
                className="block h-7 w-7"
                aria-hidden="true"
                fill={null}
              />
              <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                  <div className="absolute inset-0 -left-1 flex items-center">
                    <div className="h-2 w-2 rotate-45 bg-white"></div>
                  </div>
                  {name}
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};
