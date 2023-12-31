import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";
import "@flow/ui/styles/global.css";

import { headers } from "next/headers";

import { cn } from "@flow/ui/lib/utils";

import { TRPCReactProvider } from "./providers";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "Create T3 Turbo",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://create-t3-turbo.vercel.app",
    siteName: "Create T3 Turbo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jullerino",
    creator: "@jullerino",
  },
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        suppressHydrationWarning
        className={cn(
          ["font-sans", fontSans.variable].join(" "),
          "overflow-x-hidden bg-background",
        )}
      >
        <TRPCReactProvider headers={headers()}>
          {props.children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
