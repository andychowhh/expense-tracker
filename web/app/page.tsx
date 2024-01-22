"use client";

import ExpenseStackedList from "./ExpenseStackedList";
import axios from '../api/axios';

export default function Home() {
  const getUser = async () => {
    const getUserRes = await axios.get('/users');
    
  };
  return (
    <>
      <ExpenseStackedList />
      <button onClick={getUser}>Get user</button>
    </>
  );
}
