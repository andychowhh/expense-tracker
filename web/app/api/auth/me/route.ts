import { NextRequest, NextResponse } from "next/server";
import axios from "../../axios";
import { isGuest } from "@/utils";
import { DefaultResponse, User } from "@/types";

// To handle a GET request to /api
export async function GET(): Promise<NextResponse<DefaultResponse<User>>> {
  if (isGuest()) {
    return NextResponse.json(
      { success: false, message: "User is a guest" },
      { status: 200 }
    );
  }

  try {
    const user = await axios.get(`/auth/me`);
    return NextResponse.json(
      { success: true, data: user.data },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Get auth/me error" },
      { status: 501 }
    );
  }
}
