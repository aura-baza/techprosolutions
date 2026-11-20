import { WhatsAppIcon } from "@/components/WhatsAppIcon"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 sm:right-6 sm:bottom-6"
    >
      <span className="hidden rounded-full bg-card/90 px-3 py-1.5 text-sm font-medium shadow-lg ring-1 ring-border backdrop-blur transition group-hover:opacity-100 sm:block sm:opacity-0">
        ¿Hablamos? 👋
      </span>
      <span className="animate-wa-pulse flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition group-hover:scale-110">
        <WhatsAppIcon className="size-7" />
      </span>
    </a>
  )
}
