import { auth } from "@flow/auth";

import { Features } from "./_components/features";
import { Footer } from "./_components/footer";
import Header from "./_components/header";
import { HeroSection } from "./_components/hero";
import { Pricing } from "./_components/pricing";
import { Providers } from "./_components/providers";

export default async function HomePage() {
  const session = await auth();

  return (
    <div className="home flex h-screen flex-col items-center">
      <Header isLoggedIn={!!session?.user} />
      <main className="home flex-grow">
        <HeroSection isLoggedIn={!!session?.user} />
        <Features />
        <Providers />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
