import NextImage from "next/image";
import { Button } from "@/components/ui/button";

import Work1 from "@/assets/work1.jpg";
import Work2 from "@/assets/work2.jpg";
import Work3 from "@/assets/work3.jpg";
import Work4 from "@/assets/work4.jpg";

export function Works() {
  return (
    <div className="container flex flex-col justify-center items-center h-full py-[200px] gap-20">
      <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
        <h1 className="font-bold text-2xl">Checkout our latest works</h1>

        <Button size="lg">View works</Button>
      </div>

      <div className="grid grid-cols-2 max-w-[800px] w-full h-full gap-5 justify-center">
        <div className="flex flex-col w-full h-full">
          <NextImage alt="work_case_1" priority src={Work1} />
        </div>
        <div className="flex flex-col w-full h-full">
          <NextImage alt="work_case_2" priority src={Work2} />
        </div>
        <div className="flex flex-col w-full h-full">
          <NextImage alt="work_case_3" priority src={Work3} />
        </div>
        <div className="flex flex-col w-full h-full">
          <NextImage alt="work_case_4" priority src={Work4} />
        </div>
      </div>
    </div>
  );
}
