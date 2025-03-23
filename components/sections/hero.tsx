"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CtaButton } from "@/components/ui/cta-button"
import { siteConfig } from "@/config/site"
import Badge from "../ui/badge"
import Slider from "../ui/logo-slider"
import { SectionHeading } from "../ui/section-heading"
import BackgroundPathsWrapper from "../ui/background-path"

// Hero component definition
export function Hero() {
    // Destructure the hero section configuration from siteConfig
    const { hero } = siteConfig.sections

    return (
        // Main section container with styling and wrapped inside background paths for bg paths
        <BackgroundPathsWrapper>
            <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col items-center text-center">
                        {/* Badge component, displayed if hero.badge exists */}
                        {hero.badge && <Badge text={hero.badge} variant="normal" icon={hero.badgeIcon} />}

                        {/* Section heading with title and description */}
                        <SectionHeading title={hero.title} description={hero.description} variant="large" />

                        {/* Call-to-action buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Initial animation state
                            animate={{ opacity: 1, y: 0 }} // Animation state after mounting
                            transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            {/* Primary CTA button */}
                            <CtaButton
                                href={hero.primaryCta.href}
                                text={hero.primaryCta.text}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            />
                            {/* Secondary CTA button, displayed if hero.secondaryCta exists */}
                            {hero.secondaryCta && (
                                <CtaButton href={hero.secondaryCta.href} text={hero.secondaryCta.text} variant="outline" />
                            )}
                        </motion.div>

                        {/* Logos slider, displayed if hero.logos exists and has items */}
                        {hero.logos && hero.logos.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }} // Initial animation state
                                animate={{ opacity: 1 }} // Animation state after mounting
                                transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
                                className="mt-16 sm:max-w-2xl w-full overflow-hidden"
                            >
                                <Slider
                                    duration={60} // Duration for the slider animation
                                    pauseOnHover // Pause the slider on hover
                                    blurBorders // Apply blur effect to the borders
                                >
                                    {/* Map through the logos and create a slide for each */}
                                    {hero.logos.map((logo, i) => (
                                        <Slider.Slide key={i}>
                                            <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={150} height={40} className="opacity-70 hover:opacity-100 transition-opacity filter grayscale" />
                                        </Slider.Slide>
                                    ))}
                                </Slider>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </BackgroundPathsWrapper>
    )
}
