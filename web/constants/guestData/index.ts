import { PAYMENT_METHOD, Transaction } from "@/types";

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
