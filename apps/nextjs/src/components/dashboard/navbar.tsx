"use client";

import { usePathname } from "next/navigation";

import { cn } from "@flow/ui/lib/utils";

import { UserDropdown } from "./user-dropdown";

const navigation = [
  { name: "Home", href: "/dashboard" },
  { name: "Library", href: "/dashboard/library" },
];

export function Navbar({ user }: { user: any }) {
  const pathname = usePathname();

  return (
    <>
      <div className="border-b border-zinc-800">
        <div className="mx-auto flex h-16 max-w-7xl justify-between px-4 sm:px-6 lg:px-8 ">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100%" height="100%" rx="16" fill="currentColor" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    pathname === item.href
                      ? "border-slate-200 text-gray-200"
                      : "border-transparent text-gray-400 hover:border-slate-300 hover:text-gray-200",
                    "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="my-auto">
            <UserDropdown user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
