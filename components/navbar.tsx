"use client"

// Import necessary hooks, components, and libraries
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Command, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { CtaButton } from "./ui/cta-button"
import { useTablet } from "@/hooks/use-tablet"

// Define the Navbar component
export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // State to manage mobile menu visibility
    const isMobile = useMobile() // Hook to check if the device is mobile
    const isTablet = useTablet() // Hook to check if the device is tablet
    const { scrollY } = useScroll() // Hook to get the scroll position

    // Transform values for navbar animation based on scroll position

    const height = useTransform(scrollY, [0, 100], ["80px", "60px"])
    const baseMaxWidth = isTablet ? "750px" : isMobile ? "350px" : "896px";
    const maxWidth = useTransform(scrollY, [0, 100], ["1280px", baseMaxWidth]);
    const padding = useTransform(scrollY, [0, 100], ["1.75rem", "1.5rem"])
    const top = useTransform(scrollY, [0, 100], ["0px", `${isMobile ? "20px" : "40px"}`])
    const scale = useTransform(scrollY, [0, 100], [1, 0.9])
    const opacity = useTransform(scrollY, [0, 100], [1, 0.95])
    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"])
    const background = useTransform(scrollY, [0, 100], ["rgba(10, 10, 20, 0)", "rgba(10, 10, 20, 0.1)"])

    const navLinks = siteConfig.mainNav // Navigation links from site configuration

    return (
        <>
            <motion.header
                style={{
                    height, // Dynamic height based on scroll position
                    background, // Dynamic background based on scroll position
                    backdropFilter: backdropBlur, // Dynamic backdrop blur based on scroll position
                    padding, // Dynamic padding based on scroll position
                    maxWidth, // Dynamic max width based on scroll position
                    top, // Dynamic top position based on scroll position
                }}
                className={cn("fixed top-5 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 flex items-center mx-auto rounded-lg max-w-7xl")}
                initial={{ opacity: 0, y: -20 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animation when in view
                transition={{ duration: 0.5 }} // Animation duration
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
                    <motion.div style={{ scale }}> {/* Animated logo */}
                        <Link href="/" className="flex items-center gap-2">
                            {siteConfig.logo ? <Image
                                src={siteConfig.logo || "/placeholder.svg"} // Display the site logo
                                alt={siteConfig.name} // Alt text for the logo
                                width={40}
                                height={40}
                                className="size-8"
                            /> :
                                <Command className="size-8 text-primary" />
                            }
                            <span className="text-xl font-bold text-foreground">{siteConfig.name}</span> {/* Site name */}
                        </Link>
                    </motion.div>

                    {/* Navigation links for desktop */}
                    {!isMobile ? (
                        <motion.nav style={{ opacity }} className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="text-foreground hover:text-primary transition-colors"
                                >
                                    {link.title} {/* Link title */}
                                </Link>
                            ))}
                            <CtaButton text={siteConfig.ctaText} href={siteConfig.ctaLink} /> {/* Call-to-action button */}
                        </motion.nav>
                    ) : (
                        // Menu button for mobile
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </Button>
                    )}
                </div>
            </motion.header>

            {/* Mobile menu */}
            {isMobile && (
                <div
                    className={`fixed inset-0 z-40 bg-background transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="pt-24 px-6 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.title} {/* Link title */}
                            </Link>
                        ))}
                        <Button
                            asChild
                            className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group"
                        >
                            <Link href={siteConfig.ctaLink} className="flex items-center gap-1">
                                <span className="relative inline-block transition-transform group-hover:-translate-y-full duration-300">
                                    {siteConfig.ctaText}
                                </span>
                                <span className="absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {siteConfig.ctaText}
                                </span>
                                <motion.span
                                    className="relative ml-1"
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 90, x: 2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowUpRight className="w-4 h-4" />
                                </motion.span>
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}
