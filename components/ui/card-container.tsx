/**
 * CardContainer component that wraps its children with a motion div from framer-motion.
 * It provides a subtle animation on scroll and a gradient overlay.
 *
 * @param {ReactNode} children - The content to be displayed inside the card.
 * @param {string} [className] - Optional additional class names for the card container.
 * @param {number} [delay=0] - Optional delay for the animation in seconds.
 *
 * @returns {JSX.Element} The animated card container component.
 */
"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CardContainerProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function CardContainer({ children, className = "", delay = 0 }: CardContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-3xl bg-card p-6 md:p-8 relative overflow-hidden ${className}`}
    >
      {/* Subtle color mask overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

      {/* Card content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
