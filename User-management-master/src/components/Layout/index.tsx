import React, { ReactNode } from "react";
import Header from "./Header/Header";

interface Props {
  children?: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className=" w-full mt-12">
      <Header />
      <main>{children}</main>
    </div>
  );
}
