import { ArrowRight, CheckCircle2, Cpu, Laptop, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/WhatsAppButton"

const perks = ["Diagnóstico gratis", "Garantía por escrito", "Respuesta en minutos"]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
        <div>
          <Badge variant="outline" className="mb-6 gap-1.5 border-cyan/40 bg-cyan/10 px-3 py-1 text-cyan">
            <Zap className="size-3.5" /> Soporte técnico + Desarrollo web
          </Badge>
          <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            Reparamos tu equipo y <span className="text-gradient">creamos tu página web</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Soluciones tecnológicas rápidas y confiables para personas y negocios. Desde un portátil que no enciende
            hasta la web que hará crecer tus ventas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              className="h-13 px-6 text-base"
              message="Hola, vi su página y quiero una cotización gratis 🚀"
              label="Cotizar gratis por WhatsApp"
            />
            <Button asChild variant="outline" size="lg" className="h-13 border-primary/40 px-6 text-base hover:border-cyan hover:text-cyan">
              <a href="#servicios">
                Ver servicios <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-whatsapp" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
      <div className="animate-float relative rounded-2xl border border-border bg-card/90 p-4 shadow-2xl backdrop-blur">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
            https://tunegocio.com
          </span>
        </div>
        <pre className="overflow-hidden rounded-xl bg-background/80 p-4 font-mono text-[13px] leading-6 sm:text-sm">
          <code>
            <span className="text-[#c792ea]">const</span> <span className="text-cyan">tuNegocio</span> = {"{"}
            {"\n"}  web: <span className="text-whatsapp">"rápida y moderna"</span>,
            {"\n"}  equipos: <span className="text-whatsapp">"funcionando 100%"</span>,
            {"\n"}  clientes: <span className="text-[#f78c6c]">Infinity</span>,
            {"\n"}{"}"}
          </code>
        </pre>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { icon: Laptop, label: "Reparación" },
            { icon: Cpu, label: "Upgrade" },
            { icon: Zap, label: "Web veloz" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-muted/60 p-3 text-xs">
              <Icon className="size-5 text-cyan" />
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -right-2 -bottom-6 rounded-xl border border-border bg-card px-4 py-3 shadow-xl sm:-right-6">
        <p className="text-xs text-muted-foreground">Velocidad web</p>
        <p className="font-heading text-2xl font-bold text-whatsapp">98/100</p>
      </div>
    </div>
  )
}
