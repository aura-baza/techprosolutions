import type { LucideIcon } from "lucide-react"
import {
  Wrench,
  HardDrive,
  ShieldCheck,
  Wifi,
  Globe,
  ShoppingCart,
  Rocket,
  Search,
} from "lucide-react"

/* ============================================================
 *  CONFIGURACIÓN PRINCIPAL — edita estos valores
 * ============================================================ */

/** Número de WhatsApp con código de país, sin "+", espacios ni guiones. Ej: 573001234567 */
export const WHATSAPP_NUMBER = "573000000000"

/** Nombre del negocio */
export const SITE_NAME = "TechPro Soluciones"

/** Mensaje por defecto que llega a tu WhatsApp */
export const DEFAULT_MESSAGE = `Hola ${SITE_NAME}, quiero una cotización 👋`

export const CITY = "Atención presencial y remota"
export const EMAIL = "contacto@techpro.com"
export const HOURS = "Lun a Sáb · 8:00 a. m. – 7:00 p. m."

/* ============================================================ */

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  category: "tecnico" | "web"
}

export const services: Service[] = [
  {
    icon: Wrench,
    title: "Reparación de PC y portátiles",
    description: "Diagnóstico, cambio de piezas, pantallas, teclados y limpieza interna.",
    category: "tecnico",
  },
  {
    icon: HardDrive,
    title: "Formateo y software",
    description: "Instalación de Windows, programas, drivers y respaldo de tu información.",
    category: "tecnico",
  },
  {
    icon: ShieldCheck,
    title: "Eliminación de virus",
    description: "Limpieza de malware, optimización y antivirus para que tu equipo vuele.",
    category: "tecnico",
  },
  {
    icon: Wifi,
    title: "Redes y WiFi",
    description: "Configuración de routers, cableado y solución de problemas de conexión.",
    category: "tecnico",
  },
  {
    icon: Globe,
    title: "Páginas web corporativas",
    description: "Sitios modernos, rápidos y adaptados a celular que generan confianza.",
    category: "web",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas online",
    description: "Vende 24/7 con catálogo, carrito y pagos en línea integrados.",
    category: "web",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description: "Páginas enfocadas en convertir visitas en clientes para tus campañas.",
    category: "web",
  },
  {
    icon: Search,
    title: "SEO, dominio y hosting",
    description: "Aparece en Google, con tu dominio propio y alojamiento seguro.",
    category: "web",
  },
]

export type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: "Básico",
    price: "$350.000",
    description: "Ideal para emprendedores que inician su presencia digital.",
    features: [
      "Landing page de 1 sección larga",
      "Diseño adaptado a celular",
      "Botón directo a WhatsApp",
      "Formulario de contacto",
      "Entrega en 5 días",
    ],
  },
  {
    name: "Profesional",
    price: "$750.000",
    description: "La opción preferida por negocios que quieren crecer.",
    features: [
      "Hasta 5 páginas",
      "Dominio + hosting 1 año",
      "SEO básico en Google",
      "Integración con redes sociales",
      "Correos corporativos",
      "Soporte 3 meses",
    ],
    featured: true,
  },
  {
    name: "E‑commerce",
    price: "$1.500.000",
    description: "Tienda online completa lista para vender.",
    features: [
      "Catálogo ilimitado de productos",
      "Carrito y pagos en línea",
      "Panel de administración",
      "Capacitación incluida",
      "Soporte 6 meses",
    ],
  },
]

export const stats = [
  { value: 500, suffix: "+", label: "Clientes felices" },
  { value: 8, suffix: "", label: "Años de experiencia" },
  { value: 1200, suffix: "+", label: "Equipos reparados" },
  { value: 100, suffix: "%", label: "Garantía en servicios" },
]

export const steps = [
  { title: "Escríbenos", description: "Cuéntanos por WhatsApp qué necesitas. Respondemos en minutos." },
  { title: "Diagnóstico", description: "Evaluamos tu caso y te enviamos una propuesta clara, sin sorpresas." },
  { title: "Manos a la obra", description: "Ejecutamos el trabajo con avances y comunicación constante." },
  { title: "Entrega y soporte", description: "Recibes tu equipo o tu web funcionando, con garantía y soporte." },
]

export const testimonials = [
  {
    name: "Laura Gómez",
    role: "Dueña de boutique",
    text: "Me hicieron la tienda online en tiempo récord. Ahora recibo pedidos todos los días por WhatsApp.",
  },
  {
    name: "Carlos Rincón",
    role: "Contador independiente",
    text: "Mi portátil estaba lentísimo y lleno de virus. Quedó como nuevo y recuperaron todos mis archivos.",
  },
  {
    name: "Andrés Molina",
    role: "Restaurante El Fogón",
    text: "La página web nos trajo clientes nuevos desde Google. Atención rápida y muy profesional.",
  },
]

export const faqs = [
  {
    q: "¿Hacen servicio técnico a domicilio?",
    a: "Sí. Podemos ir a tu casa u oficina, o atenderte de forma remota si el problema es de software.",
  },
  {
    q: "¿Cuánto tarda en estar lista mi página web?",
    a: "Una landing page está lista en unos 5 días. Sitios más completos toman entre 2 y 4 semanas.",
  },
  {
    q: "¿Ofrecen garantía?",
    a: "Todos nuestros servicios tienen garantía. Las páginas web incluyen soporte según el plan elegido.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Transferencia, Nequi, Daviplata, tarjeta y efectivo. Para webs trabajamos con anticipo y saldo a la entrega.",
  },
]

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
]
