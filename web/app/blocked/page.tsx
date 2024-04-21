import React from "react";

export default function BlockedPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Rate Limiting Exceeded</h1>
      <div>Please try again after a while.</div>
    </div>
  );
}
