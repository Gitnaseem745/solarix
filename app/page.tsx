import { Hero } from "@/components/sections/hero"
import { Navbar } from "@/components/navbar"
import { WhoWeAre } from "@/components/sections/who-we-are"
import { Process } from "@/components/sections/process"
import { Services } from "@/components/sections/services"
import { Benefits } from "@/components/sections/benefits"
import { Plans } from "@/components/sections/plans"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Faqs } from "@/components/sections/faqs"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"
import ThemeDropdown from "@/components/ui/toggle-theme"

/**
 * The Home component serves as the main landing page for the Solarix website.
 * It includes various sections that provide information about the company,
 * its services, and customer testimonials. The page is structured with a 
 * navigation bar at the top and a footer at the bottom, with multiple 
 * informational sections in between.
 * 
 * Sections included:
 * - Navbar: The navigation bar at the top of the page.
 * - Hero: The hero section with a prominent call-to-action.
 * - WhoWeAre: Information about the company.
 * - Process: Details about the company's process.
 * - Services: Overview of the services offered.
 * - Benefits: Benefits of choosing the company.
 * - Plans: Different plans available for customers.
 * - Testimonials: Customer testimonials and reviews.
 * - Contact: Contact information and form.
 * - Faqs: Frequently asked questions.
 * - CtaSection: Call-to-action section encouraging user engagement.
 * - Footer: The footer section with additional links and information.
 * - ThemeToggle: A button to toggle the website's theme, fixed at the bottom-right corner.
 * 
 * @returns The main landing page component.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Process />
      <Services />
      <Benefits />
      <Plans />
      <Testimonials />
      <Contact />
      <Faqs />
      <CtaSection />
      <Footer />
      <ThemeDropdown className="fixed bottom-10 right-10 z-50" />
    </main>
  )
}
