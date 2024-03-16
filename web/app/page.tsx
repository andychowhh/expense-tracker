import {
  BudgetTracking,
  Overview,
  RecentTransactions,
} from "../components/Home";

export default function Home() {
  return (
    <div className="flex flex-col gap-7 pt-5">
      <Overview />
      <RecentTransactions />
      <BudgetTracking />
    </div>
  );
}
