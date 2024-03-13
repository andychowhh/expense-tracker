import { TransactionList } from "../components/TransactionsList";
import { TransactionListHeader } from "../components";

export default function Home() {
  return (
    <div className="sm:border sm:border-1 sm:mt-4 sm:max-w-md sm:m-auto md:max-w-xl lg:max-w-3xl">
      <TransactionListHeader />
      <TransactionList />
    </div>
  );
}
