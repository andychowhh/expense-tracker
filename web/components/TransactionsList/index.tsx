import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "../../constants";
import { getCookie } from "../../utils";
import TransactionItem from "./TransactionItem";
import { Transaction } from "../../types";

export async function TransactionList() {
  const raw = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/transactions?date=${moment().format(
      DEFAULT_DATE_FORMAT
    )}`,
    {
      next: { tags: ["transactions"] },
      headers: {
        Cookie: `accessToken=${await getCookie("accessToken")}`,
      },
    }
  );
  const transactions: Transaction[] = await raw.json();

  return (
    <ul role="list" className="divide-y divide-gray-100 sm:px-4">
      {transactions.length > 0 ? (
        transactions.map(({ _id, category, amount }) => {
          return (
            <TransactionItem key={_id} category={category} amount={amount} />
          );
        })
      ) : (
        <div className="p-20 text-center">No expenses recorded today</div>
      )}
    </ul>
  );
}
