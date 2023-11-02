import { FirstSection } from "@/components/firstSection";
import { Intro } from "@/components/intro";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex relative flex-col border border-black justify-center max-w-[1280px] w-full m-auto">
      <Navigation />
      <div className="flex flex-col border border-black w-full items-center justify-center gap-10 h-screen">
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
      <Intro />
      <FirstSection />
    </main>
  );
}
