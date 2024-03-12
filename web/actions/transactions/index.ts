"use server";

import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "../../constants";
import axios from "../../app/api/axios";
import { User } from "../../types";

interface TransactionFormData {
  date: Date;
  category: string;
  amount: number;
  note: string;
  user: User;
}

// export async function createTransation(formData: FormData) {
export async function createTransation({
  amount,
  category,
  date,
  note,
  user,
}: TransactionFormData) {
  await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions`, {
    // TODO update below
    // user: user ? user._id : "",
    user: "65ed126874a3809517c88423",
    amount,
    category,
    date: moment(date).format(DEFAULT_DATE_FORMAT),
    note,
  });
}
