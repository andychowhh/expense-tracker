"use server";

import { revalidateTag } from "next/cache";
import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "../../constants";
import axios from "../../app/api/axios";
import { Transaction } from "@/types";
import { getErrorMessage } from "@/utils";

export async function createTransation({
  amount,
  category,
  paymentMethod,
  date,
  note,
}: Omit<Transaction, "_id">) {
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
      success: false,
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
      success: false,
      message: getErrorMessage(err),
    };
  }
}

export async function updateTransation(
  id: string,
  payload: Partial<Transaction>
) {
  try {
    await axios.patch(`/transactions/${id}`, {
      ...payload,
      date: moment(payload?.date).format(DEFAULT_DATE_FORMAT),
    });
    revalidateTag("transactions");
  } catch (err) {
    // console.log("csss", err.response.data);
    return {
      success: false,
      message: getErrorMessage(err),
    };
  }
}
