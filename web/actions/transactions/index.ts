"use server";

import { revalidateTag } from "next/cache";
import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "../../constants";
import axios from "../../app/api/axios";
import { PAYMENT_METHOD, User } from "@/types";
import { getErrorMessage } from "@/utils";

interface TransactionFormData {
  date: Date;
  category: string;
  paymentMethod: PAYMENT_METHOD;
  amount: number;
  note: string;
}

export async function createTransation({
  amount,
  category,
  paymentMethod,
  date,
  note,
}: TransactionFormData) {
  console.log({ amount, category, paymentMethod, date, note });
  try {
    await axios.post(`/transactions`, {
      amount,
      category,
      paymentMethod,
      date: moment(date).format(DEFAULT_DATE_FORMAT),
      note,
    });
    revalidateTag("transactions");
  } catch (err) {
    return {
      message: getErrorMessage(err),
    };
  }
}

export async function deleteTransation(id: string) {
  try {
    await axios.delete(`/transactions/${id}`);
    revalidateTag("transactions");
  } catch (err) {
    return {
      message: getErrorMessage(err),
    };
  }
}
