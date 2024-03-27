import { NextRequest, NextResponse } from "next/server";
import axios from "../../axios";

// To handle a GET request to /api
export async function GET() {
  try {
    const user = await axios.get(`/auth/refresh`);
    return NextResponse.json(user.data, { status: 200 });
  } catch (err) {
    // TODO handle error after modifying backend response
    console.log(err)
    return NextResponse.json({ message: "Get /auth/refresh error" }, { status: 501 });
  }
}
