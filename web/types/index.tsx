export interface Category {
  label: string;
  value: string;
  avatar: string;
}

export interface User {
  _id: string;
  email: string;
  picture: string;
  accessToken?: string;
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
