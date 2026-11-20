import { useEffect, useState } from "react"
import { Menu, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { SITE_NAME, navLinks } from "@/config/site"
import { cn } from "@/lib/utils"

export function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2 font-heading text-lg font-bold">
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[0_0_20px_rgb(0_229_255/0.4)]">
        <Code2 className="size-5" />
      </span>
      <span>
        {SITE_NAME.split(" ")[0]}
        <span className="text-gradient"> {SITE_NAME.split(" ").slice(1).join(" ")}</span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />

        <ul className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-cyan">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton size="default" label="WhatsApp" className="h-10 px-4" />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Abrir menú">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border bg-background">
            <SheetHeader>
              <SheetTitle><Logo /></SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <SheetClose asChild>
                    <a href={l.href} className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-muted hover:text-cyan">
                      {l.label}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <div className="mt-auto p-4">
              <WhatsAppButton className="h-12 w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
