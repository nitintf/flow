"use client"

import Link from "next/link";

import useScrollPosition from "~/hooks/useScrollPosition";
import { cn } from "@flow/ui/lib/utils";
import { Button } from "@flow/ui/components/button";

export default function Header() {
  const { isScrolled } = useScrollPosition({ threshold: 100 })

  return (
    <header className="fixed top-5 z-30 w-full">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className={cn("flex h-14 items-center justify-between rounded-lg border border-transparent px-3", {
            "shadow-none nav-bg backdrop-blur-[20px] backdrop-saturate-[1.9]": isScrolled,
            "landing-bg": !isScrolled
          })}>
            <div>
              <Link href={"/"}>
                <h3 className={cn("text-lg text-gray-900", { " mix-blend-difference": isScrolled })}>Flow</h3>
              </Link>
            </div>
            <nav className="flex flex-grow">
              <ul className="flex flex-grow flex-wrap items-center justify-end">
                <li>
                  <Link
                    href={"#pricing"}
                    className={cn("text-gray-500 transition-all duration-500 hover:text-black", { " mix-blend-difference": isScrolled })}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="ml-6">
                  <Button asChild>
                    <Link href={'/signin'}>Sign In</Link>
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
