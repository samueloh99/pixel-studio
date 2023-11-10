import NextImage from "next/image";

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
      <div className="flex flex-col relative h-[900px] bg-textured bg-cover bg-center bg-no-repeat">
        <div className="container flex flex-col w-full items-center justify-center gap-20 h-full z-10">
          <div className="flex flex-col justify-center items-center gap-10 text-center">
            <h1
              className="font-bold text-4xl text-white"
              style={{
                textShadow: "10px 10px black",
              }}
            >
              Design UX/UI & Web Development Agency
            </h1>
            <p className="font-medium text-base text-white">
              Design or Development as subscription.
              <br /> Pause or cancel anytime.
            </p>
          </div>
          <Button className="w-[200px] h-[70px] bg-black hover:bg-black/20 hover:rounded-md text-white font-bold uppercase shadow-xl shadow-black">
            See pricing
          </Button>
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
