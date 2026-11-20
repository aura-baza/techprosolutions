import { useState, type FormEvent } from "react"
import { Clock, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/SectionHeading"
import { WhatsAppIcon } from "@/components/WhatsAppIcon"
import { CITY, EMAIL, HOURS, plans, services } from "@/config/site"
import { openWhatsApp } from "@/lib/whatsapp"

const options = [...services.map((s) => s.title), ...plans.map((p) => `Plan web ${p.name}`), "Otro"]

export function ContactForm() {
  const [name, setName] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ name?: string; service?: string }>({})

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: typeof errors = {}
    if (name.trim().length < 2) next.name = "Escribe tu nombre"
    if (!service) next.service = "Elige un servicio"
    setErrors(next)
    if (Object.keys(next).length) return

    const text = [
      `Hola, soy ${name.trim()}.`,
      `Me interesa: ${service}.`,
      message.trim() && `Detalles: ${message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n")
    openWhatsApp(text)
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contacto"
          title="Cuéntanos qué necesitas y te"
          highlight="respondemos ya"
          description="Completa el formulario y se abrirá WhatsApp con tu mensaje listo para enviar."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: MapPin, title: "Cobertura", text: CITY },
              { icon: Clock, title: "Horario", text: HOURS },
              { icon: Mail, title: "Correo", text: EMAIL },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-cyan">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{title}</p>
                  <p className="font-medium break-words">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-3xl border border-border bg-card/70 p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.name}
                  className="h-11"
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Servicio</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service" aria-invalid={!!errors.service} className="h-11 w-full">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje (opcional)</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ej: Mi portátil no enciende / Necesito una web para mi restaurante"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 w-full bg-whatsapp text-base font-semibold text-[#06281a] hover:bg-whatsapp/90"
            >
              <WhatsAppIcon className="size-5" /> Enviar por WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
