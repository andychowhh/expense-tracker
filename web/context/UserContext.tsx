"use client";

import React, { ReactNode, useState, Dispatch } from "react";
import { User } from "../types";

interface UserContextProp {
  user: User;
  setUser: Dispatch<User>;
}

export const UserContext = React.createContext<UserContextProp | null>(null);

export function UserContextProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: User;
}) {
  const [user, setUser] = useState<User>(value);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
