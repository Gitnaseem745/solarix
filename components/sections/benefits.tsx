import { SectionHeading } from "@/components/ui/section-heading"
import { CardContainer } from "@/components/ui/card-container"
import { siteConfig } from "@/config/site"
import Badge from "../ui/badge"

export function Benefits() {
  const { benefits } = siteConfig.sections

  return (
    <section id="benefits" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col items-center">
      {/* Display the badge for the benefits section */}
      <Badge text={benefits.badge} variant="normal" />

      {/* Section heading with title and description */}
      <SectionHeading title={benefits.title} description={benefits.description} centered={true} className="mb-16" />

      {/* Grid container for benefit items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {benefits.items.map((benefit, index) => (
        // Card container for each benefit item with a delay for animation
        <CardContainer key={index} delay={0.1 * index} className="bg-gradient-to-br from-card to-card/50">
          <div className="h-full flex flex-col">
            {/* Icon container */}
            <div className="mb-4 p-2 rounded-lg w-fit bg-primary/10">
            <span className="text-primary">
              {/* Render the benefit icon */}
              <benefit.icon className="size-5" />
            </span>
            </div>
            {/* Benefit title */}
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            {/* Benefit description */}
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        </CardContainer>
        ))}
      </div>
    </div>
    </section>
  )
}
