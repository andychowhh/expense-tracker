import { NextRequest, NextResponse } from "next/server";
import axios from "../../axios";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const params = new URLSearchParams(request.nextUrl.search);
  const jwtToken = params.get("jwtToken");
  const user = await axios.get("http://backend:3001/auth/me", {
    params: {
      jwtToken,
    },
  });

  return NextResponse.json(user.data, { status: 200 });
}
