import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  // X requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(
    parseInt(process.env.RATE_LIMITING_NUMBER_OF_REQUESTS ?? "50"),
    "10 s"
  ),
});

// Define which routes you want to rate limit
export const config = {
  matcher: ["/dashboard", "/transactions"],
};

export default async function middleware(request: NextRequest) {
  // You could alternatively limit based on user ID or similar
  const ip = request.ip ?? "127.0.0.1";
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    ip
  );
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/blocked", request.url));
}
