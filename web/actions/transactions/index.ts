"use server";

import { revalidateTag } from "next/cache";
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

export async function createTransation({
  amount,
  category,
  date,
  note,
  user,
}: TransactionFormData) {
  await axios.post(`/transactions`, {
    user: user ? user._id : "",
    amount,
    category,
    date: moment(date).format(DEFAULT_DATE_FORMAT),
    note,
  });
  revalidateTag("transactions");
}
