import React, { useContext } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../../../context/UserContext";
import { useRouter } from "next/navigation";

export function LoginButton() {
  const { setUser } = useContext(UserContext) ?? {};
  const router = useRouter();

  const login = async (credentialResponse: CredentialResponse) => {
    const loginRes = await fetch("/api/auth/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: credentialResponse.credential }),
    });
    const user = await loginRes.json();
    if (setUser) {
      setUser(user ? user : {});
    }
    router.refresh();
  };

  return (
    <GoogleLogin
      text="signin"
      size="large"
      width={100}
      onSuccess={login}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
