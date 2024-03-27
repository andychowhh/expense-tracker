"use client";

import React, { ReactNode, useState, Dispatch, useEffect } from "react";
import { User } from "../types";

interface UserContextProp {
  user: User;
  setUser: Dispatch<User>;
}

export const UserContext = React.createContext<UserContextProp | null>(null);

export function UserContextProvider({
  accessToken,
  children,
}: {
  accessToken: string;
  children: ReactNode;
}) {
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const userProfileRaw = await fetch(`/api/auth/me`);
        const userRes = await userProfileRaw.json();
        if (!userRes.success) {
          return;
        }
        setUser(userRes.data);
      } catch (err) {
        console.log("fetchUserProfile error", err);
      }
    }
    fetchUserProfile();
  }, [accessToken]);

  const [user, setUser] = useState<User>();

  return (
    <UserContext.Provider value={{ user: user as User, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
