import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/sections/Navbar"
import { SITE_NAME, navLinks } from "@/config/site"

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              Servicio técnico y desarrollo web para personas, emprendedores y empresas.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-cyan">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">
          © {YEAR} {SITE_NAME}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
