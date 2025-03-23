export type SiteConfig = {
    name: string
    title: string
    description: string
    url: string
    ogImage: string
    links: {
        twitter: string
        github: string
    }
    author: string
    twitterHandle: string
    keywords: string[]
    logo: string
    themes: string[]
    theme: "light" | "dark" | "system" | "cyan" | "cyberpunk" | "midnight" | "deep-ocean" | "dark-rosewood" | "arctic-night" | "obsidian-glow" | "titanium-steel" | "deep-forest" | "nocrurnal-gold" | "urban-slate"
    ctaText: string
    ctaLink: string
    mainNav: { title: string; href: string }[]
    socialLinks: { title: string; href: string; icon: any }[]
    footerLinks: {
      company: { title: string; href: string }[]
      resources: { title: string; href: string }[]
      legal: { title: string; href: string }[]
    }
    sections: {
      hero: {
        badge?: string
        badgeIcon?: string
        title: string
        description: string
        backgroundImage?: string
        primaryCta: { text: string; href: string }
        secondaryCta?: { text: string; href: string }
        logos?: { src: string; alt: string }[]
      }
      whoWeAre: {
        badge: string
        title: string
      }
      process: {
        badge: string
        title: string
        description: string
        steps: {
          title: string
          description: string
          image?: string
        }[]
      }
      services: {
        badge: string
        title: string
        description: string
        items: {
          title: string
          description: string
          image?: string
        }[]
      }
      benefits: {
        badge: string
        title: string
        description: string
        items: {
          icon: any
          title: string
          description: string
        }[]
      }
      plans: {
        badge: string
        title: string
        description: string
        items: {
          icon: any
          title: string
          description: string
          price: { monthly: number; annual: number } | "Custom"
          featured?: boolean
          ctaText: string
          ctaLink: string
          features: string[]
        }[]
      }
      testimonials: {
        badge: string
        title: string
        description: string
        items: {
          quote: string
          name: string
          title: string
          company: string
          avatar?: string
        }[]
      }
      cta: {
        badge?: string
        title: string
        description: string
        buttonText: string
        buttonLink: string
        freeText?: string
        backgroundImage?: string
      }
      contact: {
        badge: string
        title: string
        description: string
        email?: string
        phone?: string
        address?: string
      }
      faqs: {
        badge: string
        title: string
        description: string
        items: {
          question: string
          answer: string
        }[]
      }
    }
  }
