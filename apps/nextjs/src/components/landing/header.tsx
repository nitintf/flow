import Link from "next/link";

import { Button } from "@flow/ui/components/button";
import { cn } from "@flow/ui/lib/utils";

export default function Header() {
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
              <ul className="flex flex-grow flex-wrap items-center justify-end">
                <li>
                  <Link
                    href={"#pricing"}
                    className={cn(
                      "text-gray-200 transition-all duration-500 hover:text-black",
                    )}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="ml-6">
                  <Button asChild>
                    <Link href={"/signin"}>Sign In</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
