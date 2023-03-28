import React from "react";
import Link from "next/link";

interface Link {
  id: number;
  href: string;
  menu: string;
}

const links: Link[] = [
  { id: 1, href: "/login", menu: "Sign In" },
  { id: 2, href: "/registration", menu: "Sign Up" },
];

export default function Header() {
  return (
    <div className="py-3 px-12 bg-green-300 fixed top-0 w-full h-12 flex items-center justify-between ">
      <Link href="/">Home</Link>

      <ul
        className="flex justify-evenly items-center 
      "
      >
        {links.map(({ href, menu, id }) => (
          <li key={id} className="px-3">
            <Link href={href}>{menu}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
