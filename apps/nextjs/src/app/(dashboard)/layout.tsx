import type { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import { auth } from "@flow/auth";
import type { User } from "@flow/db";

import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}
