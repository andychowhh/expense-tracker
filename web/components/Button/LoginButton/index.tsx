import React, { useContext } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { googleLogin } from "@/actions/auth";

export function LoginButton() {
  const { setUser } = useContext(UserContext) ?? {};
  const router = useRouter();

  const login = async (credentialResponse: CredentialResponse) => {
    const user = await googleLogin(credentialResponse?.credential ?? "");
    if (setUser) {
      setUser(user ? user : { _id: "", email: "", picture: "" });
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
