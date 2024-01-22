"use client";

import { ExpenseStackedList } from "../components";
import axios from "../api/axios";

export default function Home() {
  const getUser = async () => {
    const getUserRes = await axios.get("/auth/me");
    console.log(getUserRes);
  };
  return (
    <>
      <ExpenseStackedList />
      <button onClick={getUser}>Get user</button>
    </>
  );
}
