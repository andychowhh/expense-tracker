import {
  BudgetTracking,
  Overview,
  RecentTransactions,
} from "../components/Home";

export default function Home() {
  return (
    <div className="flex flex-col pt-5">
      <Overview />
      <RecentTransactions />
      <BudgetTracking />
    </div>
  );
}
