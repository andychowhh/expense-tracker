"use client";

import React, { useState } from "react";

export const GuestAlert = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  if (!isAlertOpen) {
    return null;
  }

  return (
    <div className="flex justify-center relative top-0 px-7 py-3 bg-warning">
      {/* <button className="invisible">X</button> */}
      <span className="text-center">
        You are now visiting the page as a guest. Please login to enjoy the full
        functionality.
      </span>
      {/* <button onClick={() => setIsAlertOpen(false)}>X</button> */}
    </div>
  );
};
