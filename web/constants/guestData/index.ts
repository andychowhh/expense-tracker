import {
  CategoryOverviewResponseData,
  PAYMENT_METHOD,
  Transaction,
} from "@/types";

export const guestTransactions: Transaction[] = [
  {
    _id: "1",
    amount: 57,
    category: "food",
    date: "2024-03-23",
    note: "Fried Rice",
    paymentMethod: PAYMENT_METHOD.CASH,
  },
  {
    _id: "2",
    amount: 10,
    category: "snack",
    date: "2024-03-23",
    note: "Chocolate",
    paymentMethod: PAYMENT_METHOD.CREDIT_CARD,
  },
  {
    _id: "3",
    amount: 5,
    category: "transportation",
    date: "2024-03-23",
    note: "Bus",
    paymentMethod: PAYMENT_METHOD.CASH,
  },
  {
    _id: "4",
    amount: 500,
    category: "shopping",
    date: "2024-03-23",
    note: "Jacket",
    paymentMethod: PAYMENT_METHOD.CASH,
  },
  {
    _id: "5",
    amount: 25,
    category: "entertainment",
    date: "2024-03-23",
    note: "Badminton",
    paymentMethod: PAYMENT_METHOD.CREDIT_CARD,
  },
];

export const guestCategoriesOverview: CategoryOverviewResponseData[] = [
  { _id: "food", totalAmount: 600, count: 5 },
  { _id: "snack", totalAmount: 200, count: 1 },
  { _id: "medical", totalAmount: 300, count: 5 },
  {
    _id: "transportation",
    totalAmount: 300,
    count: 10,
  },
  {
    _id: "entertainment",
    totalAmount: 278,
    count: 2,
  },
  { _id: "income", totalAmount: 189, count: 3 },
];
