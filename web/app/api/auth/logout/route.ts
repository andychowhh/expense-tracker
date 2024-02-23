import { NextRequest, NextResponse } from "next/server";
import axios from "../../axios";
import { cookies } from "next/headers";

// To handle a GET request to /api
export async function POST(request: NextRequest) {
  // If clean up is required in backend
  // await axios.post("http://backend:3001/auth/logout");

  cookies().delete("accessToken");

  return NextResponse.json({ status: 201 });
}
