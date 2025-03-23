"use client"
// Import necessary dependencies and components
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { CtaButton } from "../ui/cta-button"
import Badge from "../ui/badge"
import { SectionHeading } from "../ui/section-heading"
import { LampEffect } from "../ui/lamp"

// Define the CtaSection component
export function CtaSection() {
    // Destructure the cta section from the site configuration
    const { cta } = siteConfig.sections

    return (
        // Define the section with padding and overflow properties
        <section id="cta" className="py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Render the Badge component if cta.badge exists */}
                    {cta.badge && <Badge text={cta.badge} variant="normal" />}

                    {/* Render the SectionHeading component with title and description */}
                    <SectionHeading title={cta.title} description={cta.description} centered={true} className="mb-8" />

                    {/* Render the Background Light Effect */}
                    <LampEffect />

                    {/* Render the CTA Button with animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Initial animation state
                        whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
                        viewport={{ once: true }} // Trigger animation only once
                        transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
                        className="flex flex-col items-center"
                    >
                        {/* Render the CtaButton component */}
                        <CtaButton href={cta.buttonLink} text={cta.buttonText} className="w-full md:w-auto mb-4" />

                        {/* Render additional free text with animation if cta.freeText exists */}
                        {cta.freeText && (
                            <motion.p
                                initial={{ opacity: 0 }} // Initial animation state
                                whileInView={{ opacity: 1 }} // Animation state when in view
                                viewport={{ once: true }} // Trigger animation only once
                                transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
                                className="text-sm text-muted-foreground"
                            >
                                {cta.freeText}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
