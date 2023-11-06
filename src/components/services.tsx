import { designServices, webServices } from "@/lib/data";

export function Services() {
  return (
    <div className="flex flex-col p-5 justify-center items-center h-full py-[200px] gap-20">
      <div className="flex flex-col justify-center items-center h-full gap-20 w-full">
        <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
          <h1 className="font-bold text-2xl">Design Services</h1>

          <p className="font-normal text-sm">
            What we offer about design services.
          </p>
        </div>

        <div className="grid grid-cols-3 w-4/5 gap-10 bg-cor1 rounded-lg p-5">
          {designServices.map((item, key) => {
            return (
              <div
                key={key}
                className="flex text-center w-full justify-center items-center"
              >
                <h4 className="text-md font-bold underline">{item.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col p-5 justify-center items-center h-full gap-20 w-full">
        <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
          <h1 className="font-bold text-2xl">Web Development Services</h1>

          <p className="font-normal text-sm">
            With a robust skillset across our in house development team, we have
            the team to tackle technology projects of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-3 w-4/5 gap-10 bg-cor1 rounded-lg p-5">
          {webServices.map((item, key) => {
            return (
              <div
                key={key}
                className="flex text-center w-full justify-center items-center"
              >
                <h4 className="text-md font-bold underline">{item.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
