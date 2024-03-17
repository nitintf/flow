import Image from "next/image";
import Link from "next/link";

import { auth } from "@flow/auth";

import { Button } from "~/components/ui/button";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { Pricing } from "./components/pricing";
import { Providers } from "./components/providers";
import { Title } from "./components/title";

export default async function HomePage() {
  const session = await auth();

  return (
    <div className="home flex h-screen flex-col items-center">
      <Header isLoggedIn={!!session?.user || false} />
      <main className="home flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="pt-40">
            <Title />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-4">
            <div>
              <Button>Request Demo</Button>
            </div>
            <div>
              <Button variant={"outline"} asChild>
                <Link href={"/signin"}>Try For Free</Link>
              </Button>
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
        <Features />
        <Providers />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
