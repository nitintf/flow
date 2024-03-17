"use client";

import { BellRing, Search } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { UserDropdown } from "./user-dropdown";

interface Props {
  user: any;
}

export function Navbar({ user }: Props) {
  return (
    <>
      <div className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl justify-between px-4 py-xxs sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-h3 font-bold text-white">Flow.io</h1>
            </div>
          </div>
          <div className="my-auto flex items-center space-x-2">
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
