import type { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import { auth } from "@flow/auth";

import { Navbar } from "~/components/dashboard/navbar";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div>
      <Navbar user={session.user} />
      {children}
    </div>
  );
}
