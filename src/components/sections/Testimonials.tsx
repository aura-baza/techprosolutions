import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { testimonials } from "@/config/site"

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen nuestros" highlight="clientes" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <Card className="glow-card h-full border border-border bg-card/70">
                <CardContent className="flex h-full flex-col gap-4">
                  <Quote className="size-8 text-cyan/60" />
                  <div className="flex gap-0.5 text-[#fbbf24]">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="flex-1 text-muted-foreground">“{t.text}”</p>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
