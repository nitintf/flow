import { redirect } from "next/navigation";
import { GithubIcon } from "lucide-react";

import { auth, signIn } from "@flow/auth";

import { Button } from "~/app/_components/ui/button";

export default async function Page() {
  const session = await auth();

  if (session && session.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen items-center justify-center px-m text-center">
      <div className="mx-auto max-w-lg py-l">
        <div className="flex h-full w-full flex-col items-center justify-center px-m">
          <div>
            <h1 className="text-h2 font-[700] leading-[1.7] text-foreground">
              Sign in to Flow
            </h1>
            <p className="text-h6 font-[400] leading-[1.2] text-zinc-400">
              Where Seamless Screen Recording Meets Intelligent Design.
            </p>
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <Button
                size={"lg"}
                className="mt-s flex w-full items-center justify-center gap-5 ring-1 ring-gray-700"
                variant={"secondary"}
              >
                <GithubIcon width={18} />
                Continue with Github
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
