import { NextRequest, NextResponse } from "next/server";
import axios from "../../axios";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const params = new URLSearchParams(request.nextUrl.search);
  const jwtToken = params.get("jwtToken");
  try {
    // TODO Change it to POST
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`,
      {
        params: {
          jwtToken,
        },
      }
    );

    return NextResponse.json(user.data, { status: 200 });
  } catch (err) {
    // TODO handle error after modifying backend response
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
