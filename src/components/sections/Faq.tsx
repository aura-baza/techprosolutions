import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/SectionHeading"
import { faqs } from "@/config/site"

export function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus" highlight="dudas" />
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card/60 px-5">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="py-5 text-base hover:text-cyan hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
