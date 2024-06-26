import Link from "next/link";

import { signIn } from "@flow/auth";

import { Button } from "~/app/_components/ui/button";
import { cn } from "~/lib/utils/cn";

interface HeaderProps {
  isLoggedIn: boolean;
}

export default function Header({ isLoggedIn }: HeaderProps) {
  return (
    <header className="fixed top-5 z-30 w-full">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div
            className={cn(
              "nav flex h-14 items-center justify-between rounded-lg px-3 backdrop:blur-lg",
            )}
          >
            <div>
              <Link href={"/"}>
                <h3 className={cn("text-lg font-bold text-gray-200")}>Flow</h3>
              </Link>
            </div>
            <nav className="flex flex-grow">
              <ul className="flex flex-grow flex-wrap items-center justify-end gap-s text-sm">
                <li>
                  <Link
                    href={"#pricing"}
                    className={cn("text-gray-200 transition-all duration-500 ")}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/docs"}
                    className={cn("text-gray-200 transition-all duration-500 ")}
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  {isLoggedIn ? (
                    <Button asChild size={"sm"}>
                      <Link href={"/dashboard"}>Dashboard</Link>
                    </Button>
                  ) : (
                    <form
                      action={async () => {
                        "use server";
                        await signIn("github", { redirectTo: "/dashboard" });
                      }}
                    >
                      <Button size={"sm"}>Sign In</Button>
                    </form>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
