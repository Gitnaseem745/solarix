"use client"
// Import necessary libraries and components
import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/config/site"
import { Mail, Phone, MapPin } from "lucide-react"
import Badge from "../ui/badge"

// Define the Contact component
export function Contact() {
    // Destructure contact information from siteConfig
    const { contact } = siteConfig.sections

    // Initialize form state with useState hook
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })

    // Handle input changes and update form state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Log form data to console (replace with actual submission logic)
        console.log("Form submitted:", formState)
        // Reset form state
        setFormState({ name: "", email: "", message: "" })
    }

    return (
        <section id="contact" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl flex flex-col items-center">
                {/* Display badge with contact information */}
                <Badge text={contact.badge} variant="normal" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                    <div>
                        {/* Animated heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            {contact.title}
                        </motion.h2>
                        {/* Animated description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-muted-foreground mb-8"
                        >
                            {contact.description}
                        </motion.p>

                        <div className="space-y-4">
                            {/* Display contact email if available */}
                            {contact.email && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                                        <Mail className="size-5 text-primary" />
                                    </div>
                                    <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                                        {contact.email}
                                    </a>
                                </motion.div>
                            )}

                            {/* Display contact phone if available */}
                            {contact.phone && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                                        <Phone className="size-5 text-primary" />
                                    </div>
                                    <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="hover:text-primary transition-colors">
                                        {contact.phone}
                                    </a>
                                </motion.div>
                            )}

                            {/* Display contact address if available */}
                            {contact.address && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                                        <MapPin className="size-5 text-primary" />
                                    </div>
                                    <span>{contact.address}</span>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Animated form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl bg-card">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Naseem Ansari"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="naseem@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Hi, I am reaching out for..."
                                    rows={5}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                                Submit
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
