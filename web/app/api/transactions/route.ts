import { NextRequest, NextResponse } from "next/server";
import { AxiosError } from "axios";
import axios from "../axios";
import { AxiosResponse } from "axios";
import { Transaction } from "../../../types";
import { isGuest } from "@/utils";
import { guestTransactions } from "@/constants/guestData";

interface Error {
  message: string[];
  statusCode: number;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const date = url.searchParams.get("date");

  if (isGuest()) {
    return NextResponse.json({ data: guestTransactions }, { status: 200 });
  }

  try {
    const transactionsRes: AxiosResponse<Transaction[]> = await axios.get(
      `/transactions`,
      {
        params: {
          date,
        },
      }
    );

    return NextResponse.json({ data: transactionsRes.data }, { status: 200 });
  } catch (error) {
    const axiosError = error as AxiosError<Error>;
    const { message, statusCode } = axiosError?.response?.data ?? {};
    return NextResponse.json({ message: message }, { status: statusCode });
  }
}
