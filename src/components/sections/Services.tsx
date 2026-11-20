import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { services } from "@/config/site"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que necesitas en"
          highlight="tecnología"
          description="Servicio técnico especializado y desarrollo web profesional, en un solo lugar."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon
            const isWeb = s.category === "web"
            return (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <Card className="glow-card h-full border border-border bg-card/70">
                  <CardHeader>
                    <div
                      className={cn(
                        "mb-3 flex size-12 items-center justify-center rounded-xl",
                        isWeb ? "bg-cyan/15 text-cyan" : "bg-primary/20 text-[#6b9bff]",
                      )}
                    >
                      <Icon className="size-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {isWeb ? "Desarrollo web" : "Servicio técnico"}
                    </span>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed">{s.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="px-0 text-cyan hover:bg-transparent hover:text-whatsapp">
                      <a
                        href={buildWhatsAppUrl(`Hola, quiero información sobre: ${s.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="size-4" /> Consultar
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
