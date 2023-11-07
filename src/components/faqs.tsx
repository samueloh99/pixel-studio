import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FAQS() {
  return (
    <div className="container flex flex-col justify-center items-center h-full py-[200px] gap-20 px-40">
      <h1 className="font-bold text-2xl">FAQs</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((item, key) => {
          return (
            <AccordionItem key={key} value={`item-${key}`}>
              <AccordionTrigger className="font-bold text-md">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-thin text-md">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
