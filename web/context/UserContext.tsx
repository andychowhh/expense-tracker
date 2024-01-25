"use client";

import React, { ReactNode } from "react";
import { User } from "../types";

export const UserContext = React.createContext<User | null>(null);

export function UserContextProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: User;
}) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
