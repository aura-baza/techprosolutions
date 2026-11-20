import { DEFAULT_MESSAGE, WHATSAPP_NUMBER } from "@/config/site"

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message: string = DEFAULT_MESSAGE): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer")
}
