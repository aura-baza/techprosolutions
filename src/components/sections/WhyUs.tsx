import { useEffect, useState } from "react"
import { Clock, Headphones, ShieldCheck, Sparkles } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { stats } from "@/config/site"
import { useInView } from "@/hooks/useInView"

const reasons = [
  { icon: Clock, title: "Rapidez", text: "Respuesta en minutos y entregas a tiempo." },
  { icon: ShieldCheck, title: "Garantía", text: "Trabajo respaldado por escrito." },
  { icon: Headphones, title: "Soporte real", text: "Te acompañamos después de la entrega." },
  { icon: Sparkles, title: "Calidad", text: "Repuestos originales y código limpio." },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    let frame = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduced, value])

  return (
    <span ref={ref} className="tabular-nums">
      {(reduced ? value : n).toLocaleString("es-CO")}
      {suffix}
    </span>
  )
}

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 sm:p-12">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <SectionHeading eyebrow="¿Por qué elegirnos?" title="Confianza que se" highlight="nota" />
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-4xl font-extrabold text-gradient sm:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 80}>
                  <div className="flex h-full gap-3 rounded-2xl border border-border bg-background/60 p-4">
                    <Icon className="size-6 shrink-0 text-cyan" />
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-muted-foreground">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
