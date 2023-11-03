import { subscriptionTiers } from "@/lib/data";
import { Button } from "./ui/button";

export function Plans() {
  return (
    <div className="flex flex-col justify-center items-center h-full py-[200px] gap-20">
      <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
        <h1 className="font-bold text-2xl">Subscription Tiers</h1>

        <p className="font-normal text-sm">
          Discover the perfect package tailored for your needs.
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center w-full h-full text-center">
        <div className="flex w-full m-auto gap-5">
          <div className="flex gap-5 w-3/5">
            {subscriptionTiers.map((item, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col w-full gap-10 text-start bg-cor1 p-5 rounded-sm"
                >
                  <div className="flex flex-col gap-2">
                    <h4 className="text-md font-bold">{item.name}</h4>
                    <p className="text-xs font-thin">{item.subtitle}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold">${item.price}/m</h4>
                    <p className="text-xs font-thin">{item.priceTitle}</p>
                    <Button className="mt-10">Subscribe Now</Button>
                  </div>
                  <div className="w-full h-[1px] bg-[#ccc]" />
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-md">Benefits:</h4>
                    <ul className="list-disc">
                      {item.benefits.map((b, key) => {
                        return (
                          <li className="ml-5 text-sm font-light" key={key}>
                            {b}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col w-2/5 text-start gap-10">
            <div className="flex justify-start items-start flex-col bg-cor1 p-5 rounded-sm">
              <h4 className="font-bold text-md">Schedule a Discussion</h4>
              <p className="text-sm font-light">
                Delve deeper into our platform's features and see how it can
                assist you.
              </p>
              <button className="underline text-sm mt-5">book a call</button>
            </div>
            <div className="w-full h-[1px] bg-[#ccc]" />
            <div className="flex justify-start items-start flex-col bg-cor1 p-5 rounded-sm">
              <h4 className="font-bold text-md">Recommend Us & Benefit</h4>
              <p className="text-sm font-light">
                Secure a 5% recurring monthly bonus for every successful
                recommendation.
              </p>
              <button className="underline text-sm mt-5">join now</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-black w-full justify-center items-center py-10 rounded-sm">
          <h4 className="font-bold text-xl text-white">
            Web development service
          </h4>
          <p className="font-light text-white text-sm">
            Book a call with us to see the best plans suitable for you.
          </p>
          <Button className="mt-10 w-[200px] bg-white text-black hover:bg-slate-300">
            Book a call
          </Button>
        </div>
      </div>
    </div>
  );
}
