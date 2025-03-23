// Enable client-side rendering
"use client"

// Import utility functions and motion library for animations
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

// Define the properties for the SectionHeading component
interface SectionHeadingProps {
    badge?: string // Optional badge text
    title: string // Required title text
    description?: string // Optional description text
    centered?: boolean // Optional flag to center the content
    className?: string // Optional additional CSS classes
    variant?: 'large' | 'normal' // Optional variant type
}

// Define the SectionHeading component
export function SectionHeading({ badge, title, description, centered = true, className = "", variant = 'normal' }: SectionHeadingProps) {  
    return (
        // Container for the section heading with conditional classes
        <div
            className={cn(variant === 'normal' && `space-y-4 ${centered ? "text-center" : ""} ${className} ${centered ? "flex flex-col items-center" : ""}`, variant === 'large' && "")}
        >
            {/* Display the badge if it exists */}
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Initial animation state
                    whileInView={{ opacity: 1, y: 0 }} // Animation when in view
                    viewport={{ once: true }} // Animate only once
                    transition={{ duration: 0.5, delay: 0.1 }} // Animation duration and delay
                    className="inline-block px-4 py-1.5 rounded-full bg-background-alt text-sm font-medium"
                >
                    {badge} {/* Render the badge text */}
                </motion.div>
            )}
            
            {/* Display the title with animation */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }} // Initial animation state
                whileInView={{ opacity: 1, y: 0 }} // Animation when in view
                viewport={{ once: true }} // Animate only once
                transition={{ duration: 0.5, delay: variant === 'normal' ? 0.2 : 0.1 }} // Animation duration and delay
                className={cn(variant === 'normal' ? "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    : "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                )}
            >
                {title} {/* Render the title text */}
            </motion.h2>

            {/* Display the description if it exists */}
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }} // Initial animation state
                    whileInView={{ opacity: 1, y: 0 }} // Animation when in view
                    viewport={{ once: true }} // Animate only once
                    transition={{ duration: 0.5, delay: variant === 'normal' ? 0.3 : 0.2 }} // Animation duration and delay
                    className={cn("text-lg text-muted-foreground max-w-3xl mx-auto",
                        variant === 'large' && "mb-8 md:text-xl"
                    )}
                >
                    {description} {/* Render the description text */}
                </motion.p>
            )}
        </div>
    )
}
