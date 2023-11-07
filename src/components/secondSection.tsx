export function SecondSection() {
  return (
    <div className="container flex flex-col justify-center items-center h-full py-[200px] gap-20">
      <div className="flex flex-col items-center justify-center text-center w-full md:w-2/5 gap-5">
        <h1 className="font-bold text-2xl">
          Discover a New Era of Design & Development
        </h1>
        <p className="font-normal text-sm">
          Swap erratic freelancers and costly agencies for a transparent monthly
          subscription. Experience designs and developments that redefine swift
          delivery.
        </p>
      </div>
      <div className="flex flex-row gap-5 h-[340px] justify-center items-center w-full">
        <div className="flex flex-col w-1/4 h-full gap-5 text-center px-5 bg-cor1 items-center justify-center">
          <h4 className="font-bold text-md">
            "Innovation in design isn't just about aesthetics; it's about
            redefining standards. This team sets the gold standard."
          </h4>
          <h2 className="font-thin text-sm">Kevin O'Leary, 🦈 Shark Tank</h2>
        </div>
        <div className="flex flex-col justify-between gap-5 w-1/4 h-full">
          <div className="flex flex-col w-full h-full">
            <h4 className="font-bold text-md">On-the-Go Collaboration</h4>
            <p className="text-sm">
              Who enjoys long meetings? We certainly don't. That's why we've
              made the entire collaboration process concise.
            </p>
          </div>
          <div className="flex flex-col w-full h-full">
            <h4 className="font-bold text-md">Organize with Google Sheets</h4>
            <p className="text-sm">
              Every task, every detail. Track active, pending, and completed
              assignments seamlessly with our integrated Google Sheets system.
            </p>
          </div>
          <div className="flex flex-col w-full h-full justify-end">
            <h4 className="font-bold text-md">Teamwork Made Simple</h4>
            <p className="text-sm">
              Bring your entire crew on board. Ensure everyone is on the same
              page and witness progress in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
