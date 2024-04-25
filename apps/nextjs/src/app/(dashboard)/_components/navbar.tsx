"use client";

import { BellRing, Search } from "lucide-react";

import type { User } from "@flow/db";

import { Button } from "~/app/_components/ui/button";
import { Separator } from "~/app/_components/ui/separator";
import { UserDropdown } from "./user-dropdown";

interface Props {
  user: User;
}

export function Navbar({ user }: Props) {
  return (
    <>
      <div className="border-r border-zinc-700">
        <div className="flex max-w-sm flex-col justify-between px-4 py-xxs sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-h5 font-bold text-white">Flow.io</h1>
            </div>
          </div>
          <div className="flex flex-col space-x-2">
            <Button variant={"ghost"} size={"icon"}>
              <Search size={18} color="#ffffff" className="cursor-pointer" />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <BellRing size={18} color="#ffffff" className="cursor-pointer" />
            </Button>
            <div className="pl-[4px] pr-xxs">
              <UserDropdown user={user} />
            </div>
            <Separator orientation="vertical" className="h-[30px]" />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
