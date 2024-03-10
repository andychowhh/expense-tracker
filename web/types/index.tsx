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
  date: string;
  note: string;
}
