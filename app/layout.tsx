import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import Script from "next/script"
import { ReactLenis } from '../lib/lenis'

const inter = Inter({ subsets: ["latin"] })

// Define metadata for the site, used by Next.js for SEO and social sharing
export const metadata: Metadata = {
    title: {
        default: siteConfig.title, // Default title of the site
        template: `%s | ${siteConfig.title}`, // Template for dynamic titles
    },
    description: siteConfig.description, // Description of the site
    keywords: siteConfig.keywords, // Keywords for SEO
    authors: [
        {
            name: siteConfig.author, // Author's name
            url: siteConfig.url, // Author's URL
        },
    ],
    creator: siteConfig.author, // Creator's name
    openGraph: {
        type: "website", // Type of content
        locale: "en_US", // Locale of the content
        url: siteConfig.url, // URL of the site
        title: siteConfig.title, // Title for Open Graph
        description: siteConfig.description, // Description for Open Graph
        siteName: siteConfig.title, // Site name for Open Graph
        images: [
            {
                url: siteConfig.ogImage, // Image URL for Open Graph
                width: 1200, // Image width
                height: 630, // Image height
                alt: siteConfig.title, // Alt text for the image
            },
        ],
    },
    twitter: {
        card: "summary_large_image", // Type of Twitter card
        title: siteConfig.title, // Title for Twitter card
        description: siteConfig.description, // Description for Twitter card
        images: [siteConfig.ogImage], // Images for Twitter card
        creator: siteConfig.twitterHandle, // Twitter handle of the creator
    },
    icons: {
        icon: "/favicon.ico", // Path to the favicon
        shortcut: "/favicon-16x16.png", // Path to the shortcut icon
        apple: "/apple-touch-icon.png", // Path to the Apple touch icon
    },
    alternates: {
        canonical: siteConfig.url, // Canonical URL of the site
    },
    manifest: `${siteConfig.url}/site.webmanifest`, // Path to the web manifest
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                {/* viewport for mobile optimization */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>

            <ReactLenis root>
                <body className={inter.className}>
                    <ThemeProvider attribute="class" defaultTheme={siteConfig.theme} themes={siteConfig.themes}>
                        {children}
                    </ThemeProvider>
                    {/* JSON-LD Structured Data for better page speed */}
                    <Script
                        id="structured-data"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "name": siteConfig.title,
                                "operatingSystem": "Web",
                                "applicationCategory": "Technology",
                                "description": siteConfig.description,
                                "author": {
                                    "@type": "Person",
                                    "name": siteConfig.author,
                                },
                                "image": siteConfig.ogImage,
                                "url": siteConfig.url,
                            }),
                        }}
                    />
                </body>
            </ReactLenis>
        </html>
    )
}
