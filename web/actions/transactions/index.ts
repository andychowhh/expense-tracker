"use server";

import { revalidateTag } from "next/cache";
import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "../../constants";
import axios from "../../app/api/axios";
import { PAYMENT_METHOD, User } from "@/types";

interface TransactionFormData {
  date: Date;
  category: string;
  paymentMethod: PAYMENT_METHOD;
  amount: number;
  note: string;
  user: User | undefined;
}

export async function createTransation({
  amount,
  category,
  paymentMethod,
  date,
  note,
  user,
}: TransactionFormData) {
  if (!user) return;
  console.log({ user, amount, category, paymentMethod, date, note });
  try {
    await axios.post(`/transactions`, {
      user: user ? user._id : "",
      amount,
      category,
      paymentMethod,
      date: moment(date).format(DEFAULT_DATE_FORMAT),
      note,
    });
    revalidateTag("transactions");
  } catch (err) {
    console.log("createTransation", err);
  }
}
