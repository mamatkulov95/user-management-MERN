import { Links, TableHeader } from "@/interfaces/userInterfaces";

export const links: Links[] = [
  { id: 1, href: "/login", menu: "Sign In" },
  { id: 2, href: "/registration", menu: "Sign Up" },
];

export const theader: TableHeader[] = [
  { id: 1, header: "ID" },
  { id: 2, header: "Name" },
  { id: 3, header: "E-mail" },
  { id: 4, header: "Last login time" },
  { id: 5, header: "Registration time" },
  { id: 6, header: "Status" },
  { id: 7, header: "Actions" },
];

