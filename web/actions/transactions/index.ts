"use server";

import { revalidateTag } from "next/cache";
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
  try {
    await axios.post(`/transactions`, {
      amount,
      category,
      paymentMethod,
      date,
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
    await axios.patch(`/transactions/${id}`, payload);
    revalidateTag("transactions");
  } catch (err) {
    return {
      success: false,
      message: getErrorMessage(err),
    };
  }
}
