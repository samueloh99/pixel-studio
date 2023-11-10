import { Button } from "@/components/ui/button";

export function FirstSection() {
  return (
    <div className="w-full bg-blue-100 h-full py-[200px]">
      <div className="container flex flex-col justify-center items-center h-full gap-20">
        <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
          <h1 className="font-bold text-2xl">Our Approach</h1>

          <p className="font-normal text-sm">
            From Concept to Launch <br /> Our workflow is designed to keep you
            in the loop at every stage
          </p>
          <Button className="w-[200px] h-[70px] bg-black hover:bg-black/80 hover:rounded-md text-white font-bold uppercase">
            See pricing
          </Button>
        </div>
        <div className="flex flex-col gap-5 justify-center items-stretch w-full h-full text-center">
          <div className="flex flex-col gap-2 w-full h-full justify-start items-center rounded-md py-5">
            <h4 className="font-bold text-xl">1. Discover</h4>
            <p className="font-thin text-md italic">
              Understanding Your Vision
            </p>
            <p className="text-sm w-1/2">
              Our initial step is to delve deep into your goals, objectives, and
              aspirations. We set dedicated sessions to understand the nuances
              of your needs, ensuring we lay a strong foundation for the
              project.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full h-full justify-start items-center rounded-md py-5">
            <h4 className="font-bold text-xl">2. Design</h4>
            <p className="font-thin text-md italic">
              Crafting User-Centric Solutions
            </p>
            <p className="text-sm w-1/2">
              With your vision as our compass, we design intuitive and
              aesthetically pleasing UI/UX solutions. Our designs are not just
              visually compelling, but they also prioritize user engagement and
              functionality, ensuring that they resonate with your target
              audience.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full h-full justify-start items-center rounded-md py-5">
            <h4 className="font-bold text-xl">3. Deliver</h4>
            <p className="font-thin text-md italic">
              Transforming Designs into Dynamic Platforms
            </p>
            <p className="text-sm w-1/2">
              Post the design phase, our adept developers bring those designs to
              life. Using the latest technologies and best practices, we ensure
              that your website or app is robust, responsive, and optimized for
              performance.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full h-full justify-start items-center rounded-md py-5">
            <h4 className="font-bold text-xl">4. Develop</h4>
            <p className="font-thin text-md italic">
              Ensuring Your Project's Success Post-Launch
            </p>
            <p className="text-sm w-1/2">
              Our job doesn’t end at development. We assist in launching your
              project, providing necessary support and guidance. With
              comprehensive testing and quality assurance, we ensure everything
              runs smoothly, setting you up for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
