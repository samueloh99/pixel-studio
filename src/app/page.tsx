import { Button } from "@/components/ui/button";
import { Intro } from "@/components/intro";
import { Services } from "@/components/services";
import { Works } from "@/components/works";
import { Benefits } from "@/components/benefits";
import { SecondSection } from "@/components/secondSection";
import { FirstSection } from "@/components/firstSection";
import { Plans } from "@/components/plans";
import { FAQS } from "@/components/faqs";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex relative flex-col justify-center w-full m-auto">
      <Navigation />
      <div className="flex flex-col w-full py-[400px] bg-cor1">
        <div className="container flex flex-col w-full items-center justify-center gap-10 h-full">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="font-bold text-4xl text-cor2">
              Design UX/UI & Web Development Agency
            </h1>
            <p className="font-medium text-base">
              Design or Development as subscription. Pause or cancel anytime.
            </p>
          </div>
          <Button>See pricing</Button>
        </div>
      </div>
      <Intro />
      <FirstSection />
      <SecondSection />
      <Benefits />
      <Works />
      <Services />
      <Plans />
      <FAQS />
    </main>
  );
}
