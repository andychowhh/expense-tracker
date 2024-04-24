import { ChartData } from "chart.js";

export interface Category {
  label: string;
  value: string;
  avatar: string;
  backgroundColor: string;
  borderColor: string;
}

export interface User {
  _id: string;
  email: string;
  picture: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface Transaction {
  _id: string;
  amount: number;
  category: string;
  paymentMethod: PAYMENT_METHOD;
  date: string;
  note: string;
}

export interface SearchParams {
  [key: string]: string;
}

export enum PAYMENT_METHOD {
  CASH = "CASH",
  CREDIT_CARD = "CREDIT_CARD",
}

export interface DefaultResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export type CategoryDonutChartData = ChartData<"doughnut", number[], unknown>;

export interface ChartData {
  name: string;
  pv: number;
  uv?: number;
}

export interface Summary {
  _id: string;
  totalExpense: number;
  totalIncome: number;
}

export interface CategoryOverviewResponseData {
  _id: string;
  totalAmount: number;
  count: number;
}
