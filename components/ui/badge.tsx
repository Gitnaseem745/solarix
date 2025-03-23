'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * This is a Badge Component to show details of each section.
 * @param icon? = icon is an optional param to show icon pass an icon
 * @param text = the text you want to show in the badge
 * @param variant = 'scroll' | 'normal'
 * @param className? = this is for css classes 
 */
export interface BadgeProps { 
    icon?: string; 
    text: string;
    variant: 'scroll' | 'normal';
    className?: string; 
}

export default function Badge({ icon, text, variant, className }: BadgeProps) {

    // Define different animations based on the variant
    const animationProps = variant === 'normal' ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    } : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <motion.div
            {...animationProps}
            className={cn(
                "relative border border-border/10 shadow-sm bg-muted/25 backdrop-blur-sm mx-auto px-4",
                icon
                    ? "mb-6 inline-flex items-center gap-2 py-2 rounded-full"
                    : "inline-block py-1.5 rounded-full text-sm font-medium mb-8",
                className
            )}
        >
            {icon && (
                <span className="size-5 flex items-center justify-center pointer-events-none">
                    <Image src={icon || "/placeholder.svg"} alt="" width={20} height={20} />
                </span>
            )}
            <motion.span 
                className="text-sm font-medium line-clamp-1 relative overflow-hidden mix-blend-lighten"
                initial={{ backgroundPosition: "-200% 0" }}
                animate={{ backgroundPosition: "200% 0" }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                    background: "linear-gradient(90deg, hsl(var(--primary) / 0.5) 0%, hsl(var(--primary) / 1) 50%, hsl(var(--primary) / 0.5) 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {text}
            </motion.span>
        </motion.div>
    );
}
