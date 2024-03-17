import { HomeIcon, CurrencyYenIcon } from "@heroicons/react/24/solid";

interface Navigation {
  id: string;
  name: string;
  href: string;
  IconComponent: any; // TODO set Type
}

export const navigation: Navigation[] = [
  { id: "home", name: "Home", href: "/", IconComponent: HomeIcon },
  {
    id: "transactions",
    name: "Transactions",
    href: "/transactions",
    IconComponent: CurrencyYenIcon,
  },
];
