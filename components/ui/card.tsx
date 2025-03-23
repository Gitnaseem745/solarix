/**
 * Card component that displays an image, title, and description.
 *
 * @param {string | undefined} image - The URL of the image to display. If undefined, a placeholder image is used.
 * @param {string} title - The title text to display.
 * @param {string} description - The description text to display.
 *
 * @returns {JSX.Element} The rendered Card component.
 */
import Image from "next/image";

export default function Card({ image, title, description }: { image: string | undefined, title: string, description: string }) {
    return (
        <div className="h-full flex flex-col">
            <div className="mb-6 aspect-video relative rounded-lg overflow-hidden bg-background pointer-events-none">
                {image && (
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                )}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}
