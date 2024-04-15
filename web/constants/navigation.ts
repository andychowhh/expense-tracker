import {
  HomeIcon,
  CurrencyDollarIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

interface Navigation {
  id: string;
  name: string;
  href: string;
  IconComponent: any; // TODO set Type
}

export const navigation: Navigation[] = [
  // { id: "home", name: "Home", href: "/", IconComponent: HomeIcon },
  {
    id: "dashboard",
    name: "Dashboard",
    href: "/dashboard",
    IconComponent: Squares2X2Icon,
  },
  {
    id: "transactions",
    name: "Transactions",
    href: "/transactions",
    IconComponent: CurrencyDollarIcon,
  },
];
