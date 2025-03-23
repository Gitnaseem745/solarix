/**
 * 🔥 Site Configuration (SEO + Theme + Section + Page)
 * 
 * 🚀 How to Add a New Theme:
 * 1. Define the theme in `globals.css`.
 * 2. Add its name to `themes` array below.
 * 3. Ensure `<ThemeProvider themes={siteConfig.themes}>` is set in `layout.tsx`.
 * 4. If using a toggle button, make sure it references `siteConfig.themes`.
 * 
 * 🎯 SEO is pre-configured. Just update `siteConfig` values per project.
 */

// Import necessary types and icons
import { SiteConfig } from "@/types"
import { Twitter, Linkedin, Dribbble, Instagram, Sparkle, Crown, Sparkles, Rocket, Lightbulb, HandshakeIcon } from "lucide-react"

// Define the site configuration object
export const siteConfig: SiteConfig = {
    name: "Solarix", // Site name
    title: "Solarix - Digital Innovation Partner", // Site title
    description: "Empowering your business through creative digital solutions and transformative technologies.", // Site description
    url: "https://your-domain.com", // Site URL
    ogImage: "https://your-domain.com/og.png", // Open Graph image URL
    links: {
        twitter: "https://twitter.com/yourusername", // Twitter link
        github: "https://github.com/yourusername", // GitHub link
    },
    author: "Your Name", // Author name (placeholder for customization)
    twitterHandle: "@yourhandle", // Twitter handle (generic or empty)
    keywords: ["keyword-1", "keyword-2", "keyword-3"], // Keywords (placeholder for customization)
    logo: "", // Logo URL
    themes: [
        "light", "dark", "system", "cyan", "cyberpunk", "midnight", "deep-ocean", "dark-rosewood", "arctic-night", "obsidian-glow", "titanium-steel", "deep-forest", "nocrurnal-gold", "urban-slate"
      ], // Available Themes
    theme: "dark-rosewood", // Default theme
    ctaText: "Get in touch", // Call-to-action text
    ctaLink: "#contact", // Call-to-action link
    mainNav: [
        { title: "About", href: "#about" }, // Navigation link to About section
        { title: "Solutions", href: "#services" }, // Navigation link to Solutions section
        { title: "Insights", href: "#benefits" }, // Navigation link to Insights section
        { title: "Pricing", href: "#pricing" }, // Navigation link to Pricing section
        { title: "Contact", href: "#contact" }, // Navigation link to Contact section
    ],
    socialLinks: [
        { title: "Twitter", href: "https://twitter.com", icon: Twitter }, // Twitter social link
        { title: "LinkedIn", href: "https://linkedin.com", icon: Linkedin }, // LinkedIn social link
        { title: "Dribbble", href: "https://dribbble.com", icon: Dribbble }, // Dribbble social link
        { title: "Instagram", href: "https://instagram.com", icon: Instagram }, // Instagram social link
    ],
    footerLinks: {
        company: [
            { title: "About", href: "/#" }, // Footer link to About page
            { title: "Careers", href: "/#" }, // Footer link to Careers page
            { title: "News", href: "/#" }, // Footer link to News page
            { title: "Contact", href: "/#" }, // Footer link to Contact page
        ],
        resources: [
            { title: "Documentation", href: "/#" }, // Footer link to Documentation page
            { title: "Tutorials", href: "/#" }, // Footer link to Tutorials page
            { title: "API", href: "/#" }, // Footer link to API page
            { title: "Support", href: "/#" }, // Footer link to Support page
        ],
        legal: [
            { title: "Privacy Policy", href: "/#" }, // Footer link to Privacy Policy page
            { title: "Terms of Service", href: "/#" }, // Footer link to Terms of Service page
            { title: "Cookie Policy", href: "/#" }, // Footer link to Cookie Policy page
        ],
    },
    sections: {
        hero: {
            badge: "Solarix - Digital Innovation Partner", // Hero section badge text
            badgeIcon: "", // Hero section badge icon
            title: "Revolutionize Your Digital Presence", // Hero section title
            description: "Harness the power of cutting-edge technologies and creative strategies to elevate your brand.", // Hero section description
            backgroundImage: "/placeholder.svg?height=1080&width=1920", // Hero section background image
            primaryCta: { text: "Our Solutions", href: "#services" }, // Primary call-to-action
            secondaryCta: { text: "View Pricing", href: "#pricing" }, // Secondary call-to-action
            logos: [
                { src: "/brands/brand_1.svg", alt: "Logo 1" }, // Partner logo 1
                { src: "/brands/brand_2.svg", alt: "Logo 2" }, // Partner logo 2
                { src: "/brands/brand_3.svg", alt: "Logo 3" }, // Partner logo 3
                { src: "/brands/brand_4.svg", alt: "Logo 4" }, // Partner logo 4
                { src: "/brands/brand_5.svg", alt: "Logo 5" }, // Partner logo 5
                { src: "/brands/brand_6.svg", alt: "Logo 6" }, // Partner logo 6
                { src: "/brands/brand_7.svg", alt: "Logo 7" }, // Partner logo 7
                { src: "/brands/brand_8.svg", alt: "Logo 8" }, // Partner logo 8
                { src: "/brands/brand_9.svg", alt: "Logo 9" }, // Partner logo 9
            ],
        },
        whoWeAre: {
            badge: "Who We Are", // Who We Are section badge text
            title: "At Solarix, we blend creativity with technology to deliver innovative digital solutions for modern businesses.", // Who We Are section title
        },
        process: {
            badge: "Process", // Process section badge text
            title: "Our Proven Approach", // Process section title
            description: "A strategic, step-by-step process designed to drive success in the digital era.", // Process section description
            steps: [
                {
                    title: "Research & Strategy", // Step 1 title
                    description: "We begin by understanding your business and target audience to craft a tailored strategy.", // Step 1 description
                    image: "/images/research_and_strategy.jpg", // Step 1 image
                },
                {
                    title: "Design & Development", // Step 2 title
                    description: "Our creative team designs and builds solutions that are both functional and visually stunning.", // Step 2 description
                    image: "/images/design_development.jpg", // Step 2 image
                },
                {
                    title: "Launch & Optimize", // Step 3 title
                    description: "We deploy your solution with precision and continuously optimize for peak performance.", // Step 3 description
                    image: "/images/launch_and_optimize.jpg", // Step 3 image
                },
            ],
        },
        services: {
            badge: "Services", // Services section badge text
            title: "Tailored Digital Services", // Services section title
            description: "Offering a comprehensive range of services to boost your digital footprint.", // Services section description
            items: [
                {
                    title: "Web Development", // Service 1 title
                    description: "Crafting responsive and high-performing websites that engage and convert.", // Service 1 description
                    image: "/images/web_development.jpg", // Service 1 image
                },
                {
                    title: "Mobile Apps", // Service 2 title
                    description: "Building intuitive mobile applications to connect with your customers on the go.", // Service 2 description
                    image: "/images/mobile_apps.jpg", // Service 2 image
                },
                {
                    title: "Digital Marketing", // Service 3 title
                    description: "Enhancing your online presence with targeted marketing strategies.", // Service 3 description
                    image: "/images/digital_marketing.jpg", // Service 3 image
                },
                {
                    title: "Brand Strategy", // Service 4 title
                    description: "Developing strong brand identities that resonate with your audience.", // Service 4 description
                    image: "/images/brand_strategy.jpg", // Service 4 image
                },
                {
                    title: "UI/UX Design", // Service 5 title
                    description: "Designing seamless user experiences that delight and retain customers.", // Service 5 description
                    image: "/images/ui_ux.jpg", // Service 5 image
                },
            ],
        },
        benefits: {
            badge: "Benefits", // Benefits section badge text
            title: "Why Choose Solarix", // Benefits section title
            description: "Unlock a world of opportunities with our innovative solutions.", // Benefits section description
            items: [
                {
                    icon: Rocket, // Benefit 1 icon
                    title: "Accelerated Growth", // Benefit 1 title
                    description: "Boost your business with solutions that drive rapid and sustainable growth.", // Benefit 1 description
                },
                {
                    icon: Lightbulb, // Benefit 2 icon
                    title: "Innovative Ideas", // Benefit 2 title
                    description: "Stay ahead with creative strategies and cutting-edge technologies.", // Benefit 2 description
                },
                {
                    icon: HandshakeIcon, // Benefit 3 icon
                    title: "Trusted Partnership", // Benefit 3 title
                    description: "Collaborate with a team committed to your success and long-term growth.", // Benefit 3 description
                },
            ],
        },
        plans: {
            badge: "Plans", // Plans section badge text
            title: "Flexible Pricing Plans", // Plans section title
            description: "Choose a plan that aligns with your business objectives.", // Plans section description
            items: [
                {
                    icon: Sparkle, // Plan 1 icon
                    title: "Starter", // Plan 1 title
                    description: "Ideal for small businesses looking to establish a digital presence.", // Plan 1 description
                    price: { monthly: 300, annual: 250 }, // Plan 1 price
                    ctaText: "Select Starter", // Plan 1 call-to-action text
                    ctaLink: "/signup?plan=starter", // Plan 1 call-to-action link
                    features: [
                        "Responsive website", // Plan 1 feature 1
                        "Basic SEO", // Plan 1 feature 2
                        "5 marketing campaigns", // Plan 1 feature 3
                        "Email support", // Plan 1 feature 4
                        "Monthly review", // Plan 1 feature 5
                    ],
                },
                {
                    icon: Sparkles, // Plan 2 icon
                    title: "Growth", // Plan 2 title
                    description: "For growing businesses needing advanced digital strategies.", // Plan 2 description
                    price: { monthly: 600, annual: 500 }, // Plan 2 price
                    featured: true, // Plan 2 featured flag
                    ctaText: "Select Growth", // Plan 2 call-to-action text
                    ctaLink: "/signup?plan=growth", // Plan 2 call-to-action link
                    features: [
                        "Custom web design", // Plan 2 feature 1
                        "Advanced SEO", // Plan 2 feature 2
                        "10 marketing campaigns", // Plan 2 feature 3
                        "Priority support", // Plan 2 feature 4
                        "Bi-weekly review", // Plan 2 feature 5
                    ],
                },
                {
                    icon: Crown, // Plan 3 icon
                    title: "Enterprise", // Plan 3 title
                    description: "Comprehensive solutions for large organizations.", // Plan 3 description
                    price: "Custom", // Plan 3 price
                    ctaText: "Contact Sales", // Plan 3 call-to-action text
                    ctaLink: "/contact?plan=enterprise", // Plan 3 call-to-action link
                    features: [
                        "Bespoke digital solutions", // Plan 3 feature 1
                        "Dedicated account manager", // Plan 3 feature 2
                        "Unlimited marketing campaigns", // Plan 3 feature 3
                        "24/7 support", // Plan 3 feature 4
                        "Tailored review sessions", // Plan 3 feature 5
                    ],
                },
            ],
        },
        testimonials: {
            badge: "Testimonials", // Testimonials section badge text
            title: "What Our Clients Say", // Testimonials section title
            description: "Hear from businesses that have transformed with Solarix.", // Testimonials section description
            items: [
                {
                    quote: "Solarix redefined our digital strategy. Their expertise has made a tangible impact on our growth!", // Testimonial 1 quote
                    name: "Alex Monroe", // Testimonial 1 name
                    title: "CEO", // Testimonial 1 title
                    company: "Innovatech", // Testimonial 1 company
                    avatar: "/users/user-1.jpg", // Testimonial 1 avatar
                },
                {
                    quote: "Working with Solarix was a game changer. Our online presence has never been stronger.", // Testimonial 2 quote
                    name: "Samantha Lee", // Testimonial 2 name
                    title: "Marketing Head", // Testimonial 2 title
                    company: "BrightLabs", // Testimonial 2 company
                    avatar: "/users/user-2.jpg", // Testimonial 2 avatar
                },
                {
                    quote: "Their attention to detail and innovative approach set them apart in the industry.", // Testimonial 3 quote
                    name: "Jordan Smith", // Testimonial 3 name
                    title: "Product Manager", // Testimonial 3 title
                    company: "TechNova", // Testimonial 3 company
                    avatar: "/users/user-3.jpg", // Testimonial 3 avatar
                },
                {
                    quote: "The team at Solarix delivered beyond expectations. Highly recommended for any digital project.", // Testimonial 4 quote
                    name: "Maria Garcia", // Testimonial 4 name
                    title: "COO", // Testimonial 4 title
                    company: "Visionary", // Testimonial 4 company
                    avatar: "/users/user-4.jpg", // Testimonial 4 avatar
                },
                {
                    quote: "Their solutions not only look great but perform flawlessly. Solarix is our trusted partner.", // Testimonial 5 quote
                    name: "Liam Wong", // Testimonial 5 name
                    title: "CTO", // Testimonial 5 title
                    company: "NextWave", // Testimonial 5 company
                    avatar: "/users/user-1.jpg", // Testimonial 5 avatar
                },
                {
                    quote: "Solarix's innovative approach has completely transformed our business operations.", // Testimonial 6 quote
                    name: "Olivia Patel", // Testimonial 6 name
                    title: "Founder", // Testimonial 6 title
                    company: "CreativeHub", // Testimonial 6 company
                    avatar: "/users/user-2.jpg", // Testimonial 6 avatar
                },
            ],
        },
        cta: {
            badge: "Solarix", // Call-to-action section badge text
            title: "Ready to Transform Your Business?", // Call-to-action section title
            description: "Let's discuss how our digital solutions can help you achieve your goals.", // Call-to-action section description
            buttonText: "Schedule a Consultation", // Call-to-action button text
            buttonLink: "/contact", // Call-to-action button link
            freeText: "Free Initial Consultation", // Call-to-action free text
            backgroundImage: "/placeholder.svg?height=1080&width=1920", // Call-to-action background image
        },
        contact: {
            badge: "Contact", // Contact section badge text
            title: "Get in Touch", // Contact section title
            description: "We're here to answer your questions and provide support. Reach out to us anytime.", // Contact section description
            email: "hello@Solarix.com", // Contact email
            phone: "(123) 456-7890", // Contact phone number
            address: "100 Innovation Drive, Silicon Valley", // Contact address
        },
        faqs: {
            badge: "FAQs", // FAQs section badge text
            title: "Frequently Asked Questions", // FAQs section title
            description: "Find answers to common queries about our services and processes.", // FAQs section description
            items: [
                {
                    question: "What digital services do you offer?", // FAQ 1 question
                    answer: "We offer a range of services including web development, mobile app creation, digital marketing, and UI/UX design tailored to your needs.", // FAQ 1 answer
                },
                {
                    question: "How do you ensure project success?", // FAQ 2 question
                    answer: "Our proven process, starting from research and strategy to design, development, and optimization, ensures each project is set up for success.", // FAQ 2 answer
                },
                {
                    question: "What industries do you serve?", // FAQ 3 question
                    answer: "We work with businesses across various sectors including tech, finance, healthcare, retail, and more.", // FAQ 3 answer
                },
                {
                    question: "Do you offer customized solutions?", // FAQ 4 question
                    answer: "Yes, our enterprise plans are fully customizable to fit the unique requirements of large organizations.", // FAQ 4 answer
                },
                {
                    question: "How can I get started?", // FAQ 5 question
                    answer: "Simply reach out to us via our contact page, and we’ll schedule a consultation to discuss your project in detail.", // FAQ 5 answer
                },
            ],
        },
    },
}
