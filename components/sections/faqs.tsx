"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading" 
import { siteConfig } from "@/config/site" 
import { ChevronDown, ChevronUp } from "lucide-react"
import Badge from "../ui/badge" 

// Define the Faqs component
export function Faqs() {
    const { faqs } = siteConfig.sections // Destructure faqs from siteConfig.sections
    const [openIndex, setOpenIndex] = useState<number | null>(0) // Initialize state for open FAQ index

    // Function to toggle the open FAQ
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index) // Toggle between opening and closing the FAQ
    }

    return (
        <section id="faqs" className="py-20 px-4"> {/* Section for FAQs */}
            <div className="container mx-auto max-w-4xl flex flex-col items-center"> {/* Container for centering content */}
                <Badge text={faqs.badge} variant="normal" /> {/* Render Badge component */}

                <SectionHeading title={faqs.title} description={faqs.description} centered={true} className="mb-12" /> {/* Render SectionHeading component */}

                <div className="space-y-4 w-full"> {/* Container for FAQ items */}
                    {faqs.items.map((faq, index) => (
                        <motion.div
                            key={index} // Unique key for each FAQ item
                            initial={{ opacity: 0, y: 20 }} // Initial animation state
                            whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
                            viewport={{ once: true }} // Trigger animation only once
                            transition={{ duration: 0.5, delay: 0.1 * index }} // Animation transition settings
                            className={`rounded-xl overflow-hidden ${openIndex === index ? "bg-card" : "bg-card/50"}`} // Conditional styling based on openIndex
                        >
                            <button
                                onClick={() => toggleFaq(index)} // Toggle FAQ on button click
                                className="w-full flex items-center justify-between p-6 text-left" // Button styling
                                aria-expanded={openIndex === index} // ARIA attribute for accessibility
                            >
                                <h3 className="text-lg font-medium">{faq.question}</h3> {/* FAQ question */}
                                {openIndex === index ? (
                                    <ChevronUp className="size-5 flex-shrink-0" /> // ChevronUp icon if FAQ is open
                                ) : (
                                    <ChevronDown className="size-5 flex-shrink-0" /> // ChevronDown icon if FAQ is closed
                                )}
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                                }`} // Conditional styling for FAQ answer container
                            >
                                <p className="text-muted-foreground">{faq.answer}</p> {/* FAQ answer */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
