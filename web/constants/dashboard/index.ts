import { Summary } from "@/types";

export const MOCK_TOTAL_EXPENSE = [
  {
    name: "Jan",
    pv: 3000,
  },
  {
    name: "Feb",
    pv: 1398,
  },
  {
    name: "Mar",
    pv: 9800,
  },
  {
    name: "Apr",
    pv: 3908,
  },
  {
    name: "May",
    pv: 4800,
  },
  {
    name: "Jun",
    pv: 3800,
  },
  {
    name: "Jul",
    pv: 4300,
  },
  {
    name: "Aug",
    pv: 3908,
  },
  {
    name: "Sep",
    pv: 4800,
  },
  {
    name: "Oct",
    pv: 3800,
  },
  {
    name: "Nov",
    pv: 4300,
  },
  {
    name: "Dec",
    pv: 4300,
  },
];

export const MOCK_TOTAL_INCOME = [
  {
    name: "Jan",
    pv: 5000,
  },
  {
    name: "Feb",
    pv: 2200,
  },
  {
    name: "Mar",
    pv: 8700,
  },
  {
    name: "Apr",
    pv: 3200,
  },
  {
    name: "May",
    pv: 5600,
  },
  {
    name: "Jun",
    pv: 4700,
  },
  {
    name: "Jul",
    pv: 5200,
  },
  {
    name: "Aug",
    pv: 3100,
  },
  {
    name: "Sep",
    pv: 5300,
  },
  {
    name: "Oct",
    pv: 2900,
  },
  {
    name: "Nov",
    pv: 6100,
  },
  {
    name: "Dec",
    pv: 6900,
  },
];

export const MOCK_MONTHLY_OVERVIEW = [
  { name: "Jan", expense: 3000, income: 5000 },
  { name: "Feb", expense: 1398, income: 2200 },
  { name: "Mar", expense: 9800, income: 8700 },
  { name: "Apr", expense: 3908, income: 3200 },
  { name: "May", expense: 4800, income: 5600 },
  { name: "Jun", expense: 3800, income: 4700 },
  { name: "Jul", expense: 4300, income: 5200 },
  { name: "Aug", expense: 3908, income: 3100 },
  { name: "Sep", expense: 4800, income: 5300 },
  { name: "Oct", expense: 3800, income: 2900 },
  { name: "Nov", expense: 4300, income: 6100 },
  { name: "Dec", expense: 4300, income: 6900 },
];

export const MOCK_LAST_YEAR_SUMMARY: Summary[] = [
  { _id: "2023-05", totalExpense: 4500, totalIncome: 6000 },
  { _id: "2023-06", totalExpense: 4800, totalIncome: 6200 },
  { _id: "2023-07", totalExpense: 5000, totalIncome: 7000 },
  { _id: "2023-08", totalExpense: 5200, totalIncome: 6500 },
  { _id: "2023-09", totalExpense: 4300, totalIncome: 5900 },
  { _id: "2023-10", totalExpense: 6800, totalIncome: 7200 },
  { _id: "2023-11", totalExpense: 4900, totalIncome: 6300 },
  { _id: "2023-12", totalExpense: 7500, totalIncome: 7600 },
  { _id: "2024-01", totalExpense: 4800, totalIncome: 6400 },
  { _id: "2024-02", totalExpense: 4600, totalIncome: 6100 },
  { _id: "2024-03", totalExpense: 359, totalIncome: 1200 },
  { _id: "2024-04", totalExpense: 273, totalIncome: 2200 },
];
