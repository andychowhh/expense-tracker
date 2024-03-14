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
  // TODO Remove
  // const user = await axios.get("http://backend:3001/auth/me", {
  //   params: {
  //     jwtToken: await getCookie("accessToken"),
  //   },
  // });

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const userProfileRaw = await fetch(`/api/auth/me`);
        const userRes = await userProfileRaw.json();
        setUser(userRes);
      } catch (err) {
        console.log("Contexterr", err);
      }
    }
    fetchUserProfile();
  }, [accessToken]);

  const [user, setUser] = useState<User>({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
