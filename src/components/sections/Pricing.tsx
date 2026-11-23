import { Check, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { plans } from "@/config/site"
import { cn } from "@/lib/utils"

export function Pricing() {
  return (
    <section id="planes" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Planes web"
          title="Tu página web a un"
          highlight="precio justo"
          description="Precios de referencia. Escríbenos y ajustamos el plan a lo que tu negocio necesita."
        />
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <Card
                className={cn(
                  "glow-card relative h-full overflow-visible border bg-card/70",
                  p.featured
                    ? "border-cyan/60 pt-8 bg-gradient-to-b from-primary/20 to-card shadow-[0_20px_60px_-20px_rgb(0_229_255/0.5)] md:-translate-y-3"
                    : "border-border",
                )}
              >
                {p.featured && (
                  <Badge className="absolute top-0 left-1/2 z-10 h-auto -translate-x-1/2 -translate-y-1/2 gap-1.5 border-amber-300 bg-gradient-brand px-3.5 py-1.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgb(0_229_255/0.7)] [&>svg]:size-3.5!">
                    <Star className="fill-current" /> Más popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                  <p className="mt-4">
                    <span className="text-sm text-muted-foreground">Desde </span>
                    <span className="font-heading text-4xl font-extrabold">{p.price}</span>
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-whatsapp" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <WhatsAppButton
                    className="h-12 w-full"
                    message={`Hola, me interesa el plan ${p.name} (desde ${p.price}) para mi página web.`}
                    label="Lo quiero"
                  />
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
