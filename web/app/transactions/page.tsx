import {
  TransactionTable,
  TransactionListHeader,
} from "@/components/Transaction";

export default function TransactionsPage({
  searchParams,
}: {
  searchParams?: { date?: string };
}) {
  return (
    <div className="m-3 mt-0">
      <TransactionListHeader />
      <TransactionTable date={searchParams?.date ?? ""} />
    </div>
  );
}
