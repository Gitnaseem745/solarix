import { SectionHeading } from "@/components/ui/section-heading"
import { CardContainer } from "@/components/ui/card-container"
import { siteConfig } from "@/config/site"
import Badge from "../ui/badge"
import Card from "../ui/card"
// Import necessary components and configurations

export function Services() {
    // Destructure services section from site configuration
    const { services } = siteConfig.sections

    return (
        // Define the services section with padding and margin
        <section id="services" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl flex flex-col items-center">
                {/* Render the badge component with text and variant */}
                <Badge text={services.badge} variant="normal" />

                {/* Render the section heading with title, description, and styling */}
                <SectionHeading title={services.title} description={services.description} centered={true} className="mb-16" />

                {/* Render the first three service items in a grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
                    {services.items.slice(0, 3).map((service, index) => (
                        // Wrap each service card in a container with a delay for animation
                        <CardContainer key={index} delay={0.1 * index}>
                            <Card title={service.title} image={service.image} description={service.description} />
                        </CardContainer>
                    ))}
                </div>

                {/* If there are more than three service items, render the remaining items in a different grid layout */}
                {services.items.length > 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {services.items.slice(3).map((service, index) => (
                            // Wrap each additional service card in a container with a delay for animation
                            <CardContainer key={index + 3} delay={0.1 * (index + 3)}>
                                <Card title={service.title} image={service.image} description={service.description} />
                            </CardContainer>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
