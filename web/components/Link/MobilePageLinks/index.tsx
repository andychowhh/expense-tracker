"use client";

import React, { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { navigation } from "@/constants";
import { LoginButton } from "@/components/Button";
import { UserContext } from "@/context/UserContext";
import { isEmpty } from "lodash";
import ProfileImage from "@/components/Dropdown/ProfileDropdown/ProfileImage";
import { usePathname, useRouter } from "next/navigation";
import { TransactionModal } from "@/components/TransactionModal";
import useToggle from "beautiful-react-hooks/useToggle";
import { Transaction } from "@/types";
import { createTransation } from "@/actions/transactions";

export function MobilePageLinks() {
  const [isAddNewRecordModalOpen, toggleAddNewRecordModal] = useToggle();
  const pathname = usePathname();
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
      <TransactionModal
        defaultValues={null}
        isOpen={isAddNewRecordModalOpen}
        onClose={toggleAddNewRecordModal}
        onSubmit={async (props: Omit<Transaction, "_id">) =>
          await createTransation(props)
        }
      />
      <Disclosure.Panel className="border-y border-neutral-200 absolute z-10 bg-white w-full lg:hidden">
        <div className="flex flex-col gap-2 px-2 pb-3 pt-2 text-gray-700">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={`w-full text-left hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
                pathname === item.href ? "bg-gray-100 pointer-events-none" : ""
              }`}
            >
              {item.name}
            </Disclosure.Button>
          ))}
          <>
            {isEmpty(user) ? (
              <div className="px-3 py-2">
                <LoginButton />
              </div>
            ) : (
              <>
                <Disclosure.Button
                  key="add-transactions"
                  className="w-full text-left hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  onClick={() => toggleAddNewRecordModal()}
                >
                  Add Transactions
                </Disclosure.Button>
                <Disclosure.Button
                  key="sign-out"
                  className="w-full text-left hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  onClick={logout}
                >
                  Sign Out
                </Disclosure.Button>
              </>
            )}
          </>
        </div>
        {!isEmpty(user) && (
          <div className="flex items-center gap-2 border-t px-5 py-3">
            <ProfileImage size={32} picture={user ? user.picture : ""} />
            <span className="text-sm">{user?.email}</span>
          </div>
        )}
      </Disclosure.Panel>
    </div>
  );
}
