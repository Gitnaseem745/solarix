// Import necessary components and configurations
import { SectionHeading } from "@/components/ui/section-heading"
import { CardContainer } from "@/components/ui/card-container"
import { siteConfig } from "@/config/site"
import Image from "next/image"
import Badge from "../ui/badge"

// Define the Testimonials component
export function Testimonials() {
  // Extract testimonials data from site configuration
  const { testimonials } = siteConfig.sections

  return (
    // Define the section with an ID and styling
    <section id="testi" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col items-center">
        {/* Display a badge with text from testimonials data */}
        <Badge text={testimonials.badge} variant="normal" />

        {/* Display the section heading with title and description */}
        <SectionHeading
          title={testimonials.title}
          description={testimonials.description}
          centered={true}
          className="mb-16"
        />

        {/* Display the first three testimonials in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
          {testimonials.items.slice(0, 3).map((testimonial, index) => (
            // Use CardContainer to wrap each testimonial
            <CardContainer key={index} delay={0.1 * index}>
              <div className="h-full flex flex-col">
                {/* Display the testimonial quote */}
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="mt-auto flex items-center gap-3">
                  {/* Display the avatar if available */}
                  {testimonial.avatar && (
                    <div className="size-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    {/* Display the name and title of the person */}
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContainer>
          ))}
        </div>

        {/* Display additional testimonials if there are more than three */}
        {testimonials.items.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {testimonials.items.slice(3).map((testimonial, index) => (
              <CardContainer key={index + 3} delay={0.1 * (index + 3)}>
                <div className="h-full flex flex-col">
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="mt-auto flex items-center gap-3">
                    {testimonial.avatar && (
                      <div className="size-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContainer>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
