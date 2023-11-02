import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";

export function FirstSection() {
  return (
    <div className="flex flex-col justify-center items-center h-full py-[300px] gap-10">
      <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
        <h1 className="font-bold text-2xl">Our Approach</h1>

        <p className="font-normal text-sm w-3/4">
          From Concept to Completion <br /> Our workflow is designed to keep you
          in the loop at every stage
        </p>
      </div>
      <div className="grid grid-cols-3  gap-0 justify-center items-center center w-2/5">
        <div className="flex flex-col gap-2 w-full h-full  justify-start items-center">
          <h4 className="font-bold text-xl">Discover</h4>
          <p className="w-full ">We dive deep to understand your vision.</p>
        </div>
        <div className="flex flex-col gap-2 w-[100px] m-auto h-full  justify-center items-center">
          <MoveRight size={50} />
        </div>
        <div className="flex flex-col gap-2 w-full h-full  justify-start items-center">
          <h4 className="font-bold text-xl">Design</h4>
          <p className="w-full ">
            Crafting bespoke solutions that align with your brand’s essence.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[100px] m-auto h-full  justify-center items-center">
          <MoveUp size={50} />
        </div>
        <div className="flex flex-col gap-2 w-full h-full  justify-start items-center"></div>
        <div className="flex flex-col gap-2 w-[100px] m-auto h-full  justify-center items-center">
          <MoveDown size={50} />
        </div>

        <div className="flex flex-col gap-2 w-full h-full  justify-start items-center">
          <h4 className="font-bold text-xl">Deliver</h4>
          <p className="w-full ">
            Launching your project with the support you need to grow.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[100px] m-auto h-full  justify-center items-center">
          <MoveLeft size={50} />
        </div>
        <div className="flex flex-col gap-2 w-full h-full  justify-start items-center">
          <h4 className="font-bold text-xl">Develop</h4>
          <p className="w-full ">
            Bringing designs to life with clean, efficient code.
          </p>
        </div>
      </div>
    </div>
  );
}
