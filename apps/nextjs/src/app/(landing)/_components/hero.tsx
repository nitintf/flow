import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import { signIn } from "@flow/auth";

import { Button } from "~/app/_components/ui/button";
import { WeAreOpenSource } from "./open-source";

interface HeroSectionProps {
  isLoggedIn: boolean;
}

export const HeroSection = ({ isLoggedIn }: HeroSectionProps) => {
  return (
    <section className="relative">
      <div className="pt-44">
        <div className="mx-auto max-w-3xl px-4 pb-12 text-center md:px-6">
          <WeAreOpenSource />
          <h1 className="relative mt-4 bg-clip-text text-h2 font-[700] leading-[1.25] text-white">
            Your Dynamic Canvas for Seamless Screen Recording.
          </h1>
          <p className="pt-xs text-body text-gray-200">
            Your Creative Hub. Choose Your Cloud, Self-Host with Ease, or Opt
            for Our Streamlined Cloud Service. Your Videos, Your Control, Your
            Rules.
          </p>
          WW
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-4">
        <div>
          {isLoggedIn ? (
            <Button asChild className="text-h6">
              <Link href={"/dashboard"} className="flex items-center gap-2">
                <span>Go to Dashboard</span>
                <MoveRight />
              </Link>
            </Button>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/dashboard" });
              }}
            >
              <Button size={"lg"}>Continue with Github</Button>
            </form>
          )}
        </div>
      </div>

      <div className="relative mx-m mb-l mt-l flex justify-center md:mx-0">
        <Image
          className="rounded-xl"
          src={"/images/hero-image.png"}
          width={1104}
          height={600}
          alt="Dashboard hero image"
        />
      </div>
    </section>
  );
};
