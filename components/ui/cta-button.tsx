/**
 * CtaButton component renders a customizable call-to-action button.
 * 
 * @param {string} href - The URL to navigate to when the button is clicked.
 * @param {string} text - The text to display inside the button.
 * @param {"default" | "outline" | "secondary"} [variant="default"] - The style variant of the button.
 * @param {string} [className=""] - Additional CSS classes to apply to the button.
 * @param {boolean} [icon=true] - Whether to display an icon next to the button text.
 * 
 * @returns {JSX.Element} A button component that navigates to the specified URL when clicked.
 */
"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface CtaButtonProps {
  href: string
  text: string
  variant?: "default" | "outline" | "secondary"
  className?: string
  icon?: boolean
}

export function CtaButton({ href, text, variant = "default", className = "", icon = true }: CtaButtonProps) {
  return (
    <Button asChild variant={variant} className={`${className}`}>
      <Link href={href} className="flex items-center gap-1">
          <span>{text}</span>
        {icon && (
          <span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        )}
      </Link>
    </Button>
  )
}
