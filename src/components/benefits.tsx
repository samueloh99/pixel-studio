import { Button } from "@/components/ui/button";

export function Benefits() {
  return (
    <div className="container flex flex-col justify-center items-center h-full py-[200px] gap-40">
      <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
        <h1 className="font-bold text-2xl">Exclusive Member Privileges</h1>
        <p className="font-normal text-sm">
          Advantages so distinct, you'd choose us for all your design needs.
          Every time.
        </p>
        <Button size="lg">See pricing</Button>
      </div>

      <div className="grid grid-cols-3 w-full h-[300px] gap-5 justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-3 w-3/4 h-full m-auto">
          <h4 className="text-md font-bold">Creative Dashboard</h4>
          <p className="text-sm h-full">
            Unlimited design submissions? Absolutely! Make as many requests on
            your dashboard.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3 w-3/4 h-full m-auto">
          <h4 className="text-md font-bold">Rapid Turnaround</h4>
          <p className="text-sm h-full">
            Experience designs crafted to perfection in record time—typically in
            just a few days.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3 w-3/4 h-full m-auto">
          <h4 className="text-md font-bold">Predictable Pricing</h4>
          <p className="text-sm h-full">
            Clarity is key. Embrace a transparent pricing model with no hidden
            charges, month after month.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3 w-3/4 h-full m-auto">
          <h4 className="text-md font-bold">Premium Craftsmanship</h4>
          <p className="text-sm h-full">
            Exceptional design quality, every time. We're here to bring your
            vision to life, whenever the inspiration strikes.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3 w-3/4 h-full m-auto">
          <h4 className="text-md font-bold">Adaptability at its Best</h4>
          <p className="text-sm h-full">
            Whether scaling up or pausing, our services flex to fit your needs.
            Adapt as you grow.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-3 w-3/4 h-full m-auto">
          <h4 className="text-md font-bold">Distinctively Yours</h4>
          <p className="text-sm h-full">
            Every design we deliver is uniquely tailored. Own your designs
            fully, with no strings attached.
          </p>
        </div>
      </div>
    </div>
  );
}
