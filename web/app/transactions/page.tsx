import { TransactionList } from "../../components/TransactionsList";
import { TransactionListHeader } from "../../components";
import { TransactionTable } from "@/components/TransactionTable";

export default function TransactionsPage() {
  return (
    // <div className="mt-5 mx-auto bg-white rounded sm:border sm:border-1 sm:max-w-md md:max-w-xl lg:max-w-3xl">
    //   <TransactionListHeader />
    //   <TransactionList />
    // </div>
    <div>
      <TransactionTable />
    </div>
  );
}
