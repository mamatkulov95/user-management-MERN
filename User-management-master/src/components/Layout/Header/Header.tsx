import React from "react";
import Link from "next/link";
import { links } from "../../../mapData/data";

export default function Header() {
  return (
    <div className="py-3 px-14 bg-green-300 fixed top-0 w-full h-12 flex items-center justify-end ">
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>

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
