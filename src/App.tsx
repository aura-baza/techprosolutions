import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"
import { ContactForm } from "@/components/sections/ContactForm"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { Faq } from "@/components/sections/Faq"
import { Footer } from "@/components/sections/Footer"
import { Hero } from "@/components/sections/Hero"
import { Navbar } from "@/components/sections/Navbar"
import { Pricing } from "@/components/sections/Pricing"
import { Process } from "@/components/sections/Process"
import { Services } from "@/components/sections/Services"
import { Testimonials } from "@/components/sections/Testimonials"
import { WhyUs } from "@/components/sections/WhyUs"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Pricing />
        <Process />
        <Testimonials />
        <Faq />
        <ContactForm />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
