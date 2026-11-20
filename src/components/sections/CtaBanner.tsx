import { WhatsAppButton } from "@/components/WhatsAppButton"

export function CtaBanner() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 text-center text-white shadow-[0_30px_80px_-30px_rgb(0_229_255/0.6)] sm:p-14">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">¿Listo para solucionar tu problema tecnológico?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85 sm:text-lg">
              Escríbenos ahora y recibe tu diagnóstico o cotización sin costo.
            </p>
            <WhatsAppButton
              className="mt-8 h-14 bg-white px-8 text-base text-[#0b1a3d] hover:bg-white/90"
              message="Hola, quiero agendar un servicio 🙌"
              label="Hablar por WhatsApp ahora"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
