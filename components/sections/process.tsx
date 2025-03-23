import { SectionHeading } from "@/components/ui/section-heading"
import { CardContainer } from "@/components/ui/card-container"
import { siteConfig } from "@/config/site"
import Badge from "../ui/badge"
import Card from "../ui/card"

// Define the Process component
export function Process() {
    // Destructure the process section from siteConfig
    const { process } = siteConfig.sections

    return (
        // Define the section with padding and margin
        <section id="process" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl flex flex-col items-center">
                {/* Render the Badge component with text and variant */}
                <Badge text={process.badge} variant="scroll" />

                {/* Render the SectionHeading component with title, description, and styling */}
                <SectionHeading title={process.title} description={process.description} centered={true} className="mb-16" />

                {/* Create a grid layout for the process steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {/* Map through the process steps and render each step in a CardContainer */}
                    {process.steps.map((step, index) => (
                        <CardContainer key={index} delay={0.1 * index}>
                            {/* Render the Card component with title, image, and description */}
                            <Card title={step.title} image={step.image} description={step.description} />
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    )
}
