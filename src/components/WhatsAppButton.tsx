import type { ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/WhatsAppIcon"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

type Props = Omit<ComponentProps<typeof Button>, "asChild"> & {
  message?: string
  label?: string
  showIcon?: boolean
}

export function WhatsAppButton({
  message,
  label = "Cotizar por WhatsApp",
  showIcon = true,
  className,
  children,
  size = "lg",
  ...props
}: Props) {
  return (
    <Button
      asChild
      size={size}
      className={cn(
        "bg-whatsapp font-semibold text-[#06281a] shadow-[0_10px_30px_-10px_rgb(37_211_102/0.7)] hover:bg-whatsapp/90 hover:shadow-[0_14px_40px_-10px_rgb(37_211_102/0.9)]",
        className,
      )}
      {...props}
    >
      <a href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
        {showIcon && <WhatsAppIcon className="size-5" />}
        {children ?? label}
      </a>
    </Button>
  )
}
