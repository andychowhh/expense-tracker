"use client";

import React, { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { navigation } from "@/constants";
import { LoginButton } from "@/components/Button";
import { UserContext } from "@/context/UserContext";
import { isEmpty } from "lodash";
import ProfileImage from "@/components/Dropdown/ProfileDropdown/ProfileImage";
import { useRouter } from "next/navigation";

export function MobilePageLinks() {
  const { user, setUser } = useContext(UserContext) ?? {};
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    setUser({});
    router.refresh();
  };

  return (
    <div>
      <div className="flex flex-col gap-2 px-2 pb-3 pt-2 text-gray-700">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className="w-full text-left hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {item.name}
          </Disclosure.Button>
        ))}
        <div>
          {isEmpty(user) ? (
            <div className="px-3 py-2">
              <LoginButton />
            </div>
          ) : (
            <div>
              <Disclosure.Button
                key="sign-out"
                className="w-full text-left hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                onClick={logout}
              >
                Sign Out
              </Disclosure.Button>
            </div>
          )}
        </div>
      </div>
      {!isEmpty(user) && (
        <div className="flex items-center gap-2 border-t px-5 py-2">
          <ProfileImage size={32} picture={user ? user.picture : ""} />
          <span className="text-sm">{user?.email}</span>
        </div>
      )}
    </div>
  );
}
