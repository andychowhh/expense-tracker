import React, { useContext } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../../../context/UserContext";

export function LoginButton() {
  const { setUser } = useContext(UserContext) ?? {};

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
  };

  return (
    <GoogleLogin
      text="signin"
      size="large"
      onSuccess={login}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
