"use server";

import axios from "../../app/api/axios";
import {  User } from "@/types";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";

export async function googleLogin(token: string) {
  try {
    const loginRes: AxiosResponse<User> = await axios.post(
      `/auth/google-login`,
      {
        token: token,
      }
    );
    // TODO Type for login response
    cookies().set("accessToken", loginRes.data?.accessToken as any, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
    });

    cookies().set("refreshToken", loginRes.data?.refreshToken as any, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return loginRes.data;
  } catch (err) {
    console.log("googleLogin Error", { err });
  }
}
