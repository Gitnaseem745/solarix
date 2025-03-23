"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { CardContainer } from "@/components/ui/card-container"
import { Button } from "@/components/ui/button"
import { CtaButton } from "@/components/ui/cta-button"
import { siteConfig } from "@/config/site"
import { Check } from "lucide-react"
import Badge from "../ui/badge"

// The Plans component renders the pricing section of the landing page
export function Plans() {
    // Destructure the plans object from the siteConfig
    const { plans } = siteConfig.sections
    // useState hook to manage the billing cycle state, default is "annually"
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually")

    return (
        // Main section for pricing with padding
        <section id="pricing" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl flex flex-col items-center">
                {/* Badge component to display the badge text */}
                <Badge text={plans.badge} variant="normal" />

                {/* Section heading with title and description */}
                <SectionHeading title={plans.title} description={plans.description} centered={true} className="mb-12" />

                {/* Billing toggle buttons */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 rounded-full bg-card">
                        {/* Button for annual billing */}
                        <Button
                            variant={billingCycle === "annually" ? "default" : "ghost"}
                            className={`rounded-full ${billingCycle === "annually" ? "bg-primary text-primary-foreground" : ""}`}
                            onClick={() => setBillingCycle("annually")}
                        >
                            Annually
                        </Button>
                        {/* Button for monthly billing */}
                        <Button
                            variant={billingCycle === "monthly" ? "default" : "ghost"}
                            className={`rounded-full ${billingCycle === "monthly" ? "bg-primary text-primary-foreground" : ""}`}
                            onClick={() => setBillingCycle("monthly")}
                        >
                            Monthly
                        </Button>
                    </div>
                </div>

                {/* Grid container for the plan cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {plans.items.map((plan, index) => (
                        // Card container for each plan
                        <CardContainer
                            key={index}
                            delay={0.1 * index}
                            className={`${plan.featured ? "bg-gradient-to-br from-card to-card/70 border border-primary/20" : ""}`}
                        >
                            <div className="h-full flex flex-col">
                                {/* Plan icon and title */}
                                <div className="mb-4 flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <plan.icon className="size-5" />
                                    </div>
                                    <h3 className="text-xl font-bold">{plan.title}</h3>
                                </div>

                                {/* Plan price and description */}
                                <div className="mb-6">
                                    {plan.price !== "Custom" ? (
                                        <div className="flex items-end gap-1">
                                            <span className="text-4xl font-bold">
                                                ${billingCycle === "annually" ? plan.price.annual : plan.price.monthly}
                                            </span>
                                            <span className="text-muted-foreground mb-1">/month</span>
                                        </div>
                                    ) : (
                                        <div className="text-4xl font-bold">Custom</div>
                                    )}
                                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                                </div>

                                {/* Call to action button */}
                                <CtaButton
                                    href={plan.ctaLink}
                                    text={plan.ctaText}
                                    className={`w-full mb-6 ${plan.featured ? "bg-primary" : ""}`}
                                />

                                {/* List of plan features */}
                                <ul className="space-y-3 mt-auto">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-2">
                                            <Check className="size-5 text-primary shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    )
}
