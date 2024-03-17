import type { Metadata } from "next";

import "~/styles/globals.css";

import { headers } from "next/headers";

import { cn } from "~/lib/utils/cn";
import { calFont } from "~/lib/utils/fonts";
import { TRPCReactProvider } from "./providers";

export const metadata: Metadata = {
  title: "Flow - Seamless screen recording",
  description: "Your Dynamic Canvas for Seamless Screen Recording",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        suppressHydrationWarning
        className={cn(calFont.className, "overflow-x-hidden bg-background")}
      >
        <TRPCReactProvider headers={headers()}>
          {props.children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
