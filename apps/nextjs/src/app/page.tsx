import { auth } from "@flow/auth";
import { Button } from "@flow/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Features } from "~/components/landing/features";
import { Footer } from "~/components/landing/footer";
import Header from "~/components/landing/header";
import { Pricing } from "~/components/landing/pricing";
import { Providers } from "~/components/landing/providers";
import { Title } from "~/components/landing/title";

export default async function HomePage() {
  const session = await auth()

  if (session && session.user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex h-screen flex-col items-center">
      <Header />
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative">
          <div className="pt-40">
            <Title />
          </div>
          <div className="flex w-full justify-center gap-4 flex-wrap">
            <div>
              <Button>Request Demo</Button>
            </div>
            <div>
              <Button variant={'outline'} asChild>
                <Link href={"/signin"}>Try For Free</Link>
              </Button>
            </div>
          </div>

          <div className="mt-l mb-l relative flex justify-center md:mx-0 mx-m">
            <Image className="rounded-xl" src={"/images/hero-image.png"} width={1104} height={600} alt="Dashboard hero image"/>
          </div>
        </section>
        <Features />
        <Pricing />
        <Providers />
        <Footer />
      </main>
    </div>
  );
}
