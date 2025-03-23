"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import Badge from "../ui/badge"

// Define the WhoWeAre component
export function WhoWeAre() {
  // Extract whoWeAre data from site configuration
  const { whoWeAre } = siteConfig.sections

  return (
    // Define the section with an ID and styling
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col items-center">
        {/* Display a badge with text from whoWeAre data */}
        <Badge text={whoWeAre.badge} variant="normal" />

        {/* Display the section title with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center max-w-5xl mx-auto"
        >
          {whoWeAre.title}
        </motion.h2>
      </div>
    </section>
  )
}
