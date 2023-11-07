import { navigations } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col gap-20">
        <div className="flex flex-col text-center justify-center items-center gap-5">
          <h1 className="text-2xl text-white font-normal w-[500px]">
            Discover the Perfect Fit with Our Design Solutions. (Yes, it's the
            one.)
          </h1>
          <h4 className="text-xl text-white w-[600px] font-light">
            Embark on an interactive journey with our design platform, and
            uncover the transformative effects it can have on your creative
            workflow, permanently.
          </h4>

          <Button className="mt-10 w-[300px] h-[60px] font-bold uppercase bg-white text-black hover:bg-slate-300">
            Book a call
          </Button>
        </div>
        <div className="flex flex-row w-full items-start justify-between">
          <div className="flex flex-row">
            <h1 className="text-white uppercase">Pixel Studio</h1>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              {navigations.map((item, key) => {
                return (
                  <p key={key} className="text-white font-thin text-sm">
                    {item.name}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white font-thin text-sm">Login</p>
              <p className="text-white font-thin text-sm">Get started</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
