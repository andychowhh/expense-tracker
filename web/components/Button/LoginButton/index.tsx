import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import axios from "../../../api/axios";

import { useAppSelector, useAppDispatch } from "../../../redux/hook";
import { setUser } from "../../../redux/slices/userSlice";

export function LoginButton() {
  const dispatch = useAppDispatch();

  const login = async (credentialResponse: CredentialResponse) => {
    const loginRes = await axios.post(
      "http://localhost:3001/auth/google-login",
      {
        token: credentialResponse.credential,
      }
    );

    dispatch(setUser(loginRes.data));
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
