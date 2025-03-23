"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Define the types for the component props
interface SliderProps {
    children: React.ReactElement[]; // Array of React elements to be displayed in the slider
    width?: string; // Width of each slide
    duration?: number; // Duration of the animation in seconds
    toRight?: boolean; // Direction of the slide animation
    pauseOnHover?: boolean; // Whether to pause the animation on hover
    blurBorders?: boolean; // Whether to blur the borders of the slider
    blurBorderColor?: string; // Color of the blur border
}

interface SlideProps {
    children: React.ReactNode; // Content of the slide
    width?: string; // Width of the slide
}

// Define the Slider component
const Slider: React.FC<SliderProps> & { Slide: React.FC<SlideProps> } = ({
    children,
    width = "200px",
    duration = 40,
    toRight = false,
    pauseOnHover = false,
    blurBorders = false,
    blurBorderColor,
}) => {
    const [idNanoid, setIdNanoid] = useState<string>(""); // State to store a unique ID for the slider
    const { resolvedTheme } = useTheme(); // Get the current theme

    // Generate a unique ID for the slider when the component mounts
    useEffect(() => {
        setIdNanoid(Math.random().toString(36).substring(2, 12));
    }, []);

    // Create and append a keyframes style element for the slider animation
    useEffect(() => {
        if (!children.length) return;

        const totalTranslateX = `calc(${toRight ? "" : "-"}${width} * ${children.length})`;
        const style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = `
            @keyframes slider_logo_slider_${idNanoid} {
                0% { transform: translateX(0); }
                100% { transform: translateX(${totalTranslateX}); }
            }
        `;
        document.head.appendChild(style);

        // Cleanup the style element when the component unmounts or dependencies change
        return () => {
            document.head.removeChild(style);
        };
    }, [toRight, width, children, idNanoid]);

    // Pause the animation when the mouse enters the slider
    const handleMouseEnter = () => {
        const sliderElement = document.getElementById(`slider_${idNanoid}`);
        if (sliderElement) sliderElement.style.animationPlayState = "paused";
    };

    // Resume the animation when the mouse leaves the slider
    const handleMouseLeave = () => {
        const sliderElement = document.getElementById(`slider_${idNanoid}`);
        if (sliderElement) sliderElement.style.animationPlayState = "running";
    };

    // Determine the border color based on the theme or prop
    const borderColor = blurBorderColor || `var(--background-${resolvedTheme})`;

    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    width: "100%",
                    overflow: "hidden",
                    position: "relative",
                }}
                onMouseEnter={() => pauseOnHover && handleMouseEnter()}
                onMouseLeave={() => pauseOnHover && handleMouseLeave()}
                id={`slider_wrapper_${idNanoid}`}
            >
                <div
                    style={{
                        display: "flex",
                        animation: `slider_logo_slider_${idNanoid} ${duration}s linear infinite`,
                        width: `calc(${width} * ${children.length * 3})`,
                    }}
                    id={`slider_${idNanoid}`}
                >
                    {Array(3)
                        .fill(children)
                        .flat()
                        .map((child, i) => (
                            <React.Fragment key={i}>{React.cloneElement(child, { width })}</React.Fragment>
                        ))}
                </div>
            </div>

            {blurBorders && (
                <>
                    <div
                        style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            width: "180px",
                            transform: "rotate(180deg)",
                            zIndex: 10,
                            height: "100%",
                            background: `linear-gradient(90deg, ${borderColor}, #000 10%, rgba(255,255,255,0) 80%)`,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "180px",
                            zIndex: 10,
                            height: "100%",
                            background: `linear-gradient(90deg, ${borderColor}, #000 10%, rgba(255,255,255,0) 80%)`,
                        }}
                    />
                </>
            )}
        </div>
    );
};

// Define the Slide component
const Slide: React.FC<SlideProps> = ({ children, width = "200px", ...props }) => {
    return (
        <div style={{ width, alignItems: "center", display: "flex" }} {...props}>
            {children}
        </div>
    );
};

// Assign the Slide component to the Slider component
Slider.Slide = Slide;

export default Slider;
