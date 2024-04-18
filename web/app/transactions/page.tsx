import { TransactionTable } from "@/components/Transaction";

export default function TransactionsPage({
  searchParams,
}: {
  searchParams?: { date?: string };
}) {
  return (
    <div className="flex flex-col items-center m-auto mt-0 max-w-7xl">
      <TransactionTable date={searchParams?.date ?? ""} />
    </div>
  );
}
