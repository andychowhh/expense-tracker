import { TransactionList } from "../../components/TransactionsList";
import { TransactionListHeader, TransactionTable } from "../../components";
import { SearchParams } from "../../types";

export default function TransactionsPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  return (
    <div className="">
      <TransactionTable />
    </div>
  );
}
