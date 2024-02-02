import React, { useContext } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import axios from "../../../api/axios";

import { UserContext } from "../../../context/UserContext";
import { User } from "../../../types";
import { AxiosResponse } from "axios";

export function LoginButton() {
  const { setUser } = useContext(UserContext) ?? {};

  const login = async (credentialResponse: CredentialResponse) => {
    const loginRes: AxiosResponse<User> = await axios.post(
      "http://localhost:3001/auth/google-login",
      {
        token: credentialResponse.credential,
      }
    );
    if (setUser) {
      setUser(loginRes ? loginRes.data : {});
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
