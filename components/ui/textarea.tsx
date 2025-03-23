// Import React and utility functions
import * as React from "react"
import { cn } from "@/lib/utils"

// Define the Textarea component using React.forwardRef to pass refs
const Textarea = React.forwardRef<
  HTMLTextAreaElement, // Specify the type of the ref
  React.ComponentProps<"textarea"> // Specify the props type for the textarea element
>(({ className, ...props }, ref) => { // Destructure className and other props
  return (
    // Render a textarea element with dynamic classes and forwarded ref
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className // Apply additional classes if provided
      )}
      ref={ref} // Forward the ref to the textarea element
      {...props} // Spread the remaining props onto the textarea element
    />
  )
})

// Set the display name for the Textarea component
Textarea.displayName = "Textarea"

// Export the Textarea component for use in other files
export { Textarea }
