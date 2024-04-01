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

export enum TRANSACTION_MODAL_ACTION {
  "ADD_TRANSACTION" = "ADD_TRANSACTION",
  "EDIT_TRANSACTION" = "EDIT_TRANSACTION",
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
