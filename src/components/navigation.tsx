import { navigations } from "@/lib/data";

export function Navigation() {
  const active = "bg-white text-cor2";
  return (
    <div className="flex bg-cor2 text-white justify-between items-center fixed bottom-10 w-[550px] m-auto left-0 right-0 py-3 px-5 rounded-full text-sm">
      {navigations.map((item, key) => {
        return (
          <div key={key} className={`${key === 1 && active} p-2 rounded-full`}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
