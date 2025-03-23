import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CtaButton } from "@/components/ui/cta-button";
import { Command } from "lucide-react";

// Footer component to display site information, navigation links, and social media links
export function Footer() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    // Sections for footer navigation with titles and corresponding links
    const footerSections = [
        { title: "Company", links: siteConfig.footerLinks.company },
        { title: "Resources", links: siteConfig.footerLinks.resources },
        { title: "Legal", links: siteConfig.footerLinks.legal },
    ];

    return (
        <footer className="bg-card/30 pt-16 pb-8 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Footer grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo and site details section */}
                    <div className="md:col-span-1">
                        {/* Link to homepage with logo and site name */}
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            {siteConfig.logo ? <Image
                                src={siteConfig.logo || "/placeholder.svg"} // Display the site logo
                                alt={siteConfig.name} // Alt text for the logo
                                width={40}
                                height={40}
                                className="size-8"
                            /> :
                                <Command className="size-8 text-primary" />
                            }
                            <span className="text-xl font-bold">{siteConfig.name}</span> {/* Display site name */}
                        </Link>
                        {/* Site description */}
                        <p className="text-muted-foreground mb-4">{siteConfig.description}</p>
                        {/* Call-to-action button */}
                        <CtaButton
                            href={siteConfig.ctaLink} // CTA link
                            text={siteConfig.ctaText} // CTA button text
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        />
                    </div>

                    {/* Dynamic footer navigation sections */}
                    {footerSections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="font-medium mb-4">{section.title}</h3> {/* Section title */}
                            <ul className="space-y-2">
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        {/* Navigation link */}
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer bottom section with copyright and social media links */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright text */}
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    {/* Social media links */}
                    <div className="flex gap-4">
                        {siteConfig.socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href} // Social media profile link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label={social.title} // Accessibility label
                            >
                                <social.icon className="size-5" /> {/* Social media icon */}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
