import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { steps } from "@/config/site"

export function Process() {
  return (
    <section id="proceso" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Cómo trabajamos" title="Simple, rápido y" highlight="transparente" />
        <ol className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-primary via-cyan to-primary opacity-50 md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <li className="relative text-center">
                <span className="relative mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-brand font-heading text-xl font-bold text-white shadow-[0_0_30px_rgb(0_229_255/0.35)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
