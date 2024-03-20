import { NextRequest, NextResponse } from "next/server";
import axios from "../axios";
import { AxiosResponse } from "axios";
import { Transaction } from "../../../types";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const date = url.searchParams.get("date");
  const transactionsRes: AxiosResponse<Transaction[]> = await axios.get(
    `/transactions`,
    {
      params: {
        date,
      },
    }
  );

  return NextResponse.json(transactionsRes.data);
}
