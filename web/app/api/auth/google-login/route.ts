import { NextRequest, NextResponse } from "next/server";
import axios from "../../axios";
import { User } from "../../../../types";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";

// To handle a GET request to /api
export async function POST(request: NextRequest) {
  const { token } = await request.json();
  const loginRes: AxiosResponse<User> = await axios.post(`/auth/google-login`, {
    token: token,
  });
  // TODO Type for login response
  cookies().set("accessToken", loginRes.data?.accessToken as any, {
    httpOnly: true,
    maxAge: 24 * 60 * 60,
  });

  cookies().set("refreshToken", loginRes.data?.refreshToken as any, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
  });

  return NextResponse.json(loginRes.data, { status: 201 });
}
