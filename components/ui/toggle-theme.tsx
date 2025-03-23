'use client';

import React, { JSX, useEffect, useState } from 'react';
import { useTheme } from 'next-themes'; 
import { Sun, Moon, Monitor } from 'lucide-react'; 
import { cn, removeSpecial } from '@/lib/utils'; 
import { siteConfig } from '@/config/site'; // Site configuration file containing available themes

const themes = siteConfig.themes; // List of themes from site config

const ThemeDropdown: React.FC<{ className?: string }> = ({ className }) => {
    const { setTheme, resolvedTheme } = useTheme(); // Theme state and function to set theme
    const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state
    const [mounted, setMounted] = useState(false); // Tracks component mount to prevent hydration issues

    // Mapping theme names to their respective icons
    const themeIcons: Record<string, JSX.Element> = {
        light: <Sun size={16} className="text-yellow-500" />, // Sun icon for light theme
        dark: <Moon size={16} className="text-indigo-900" />, // Moon icon for dark theme
        system: <Monitor size={16} className="text-gray-500" />, // Monitor icon for system theme
    };

    useEffect(() => {
        setMounted(true); // Set mounted state to true after component mounts
        const storedTheme = localStorage.getItem('theme'); // Get saved theme from local storage
        if (!storedTheme) {
            setTheme(siteConfig.theme); // Apply default theme if no theme is stored
        } else {
            setTheme(storedTheme); // Apply stored theme
        }
    }, [setTheme]);

    // Function to handle theme selection
    const handleThemeChange = (t: string) => {
        setTheme(t); // Apply selected theme
        localStorage.setItem('theme', t); // Store theme in local storage for persistence
        setIsOpen(false); // Close dropdown
    };

    if (!mounted) return null; // Prevent rendering until component is mounted to avoid hydration mismatch

    return (
        <div className={cn("relative", className)}>
            {/* Button to open theme selection dropdown */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-background border-border border px-3 py-2 rounded-md"
            >
                {themeIcons[resolvedTheme as string] || "🎨"} {/* Display current theme icon */}
                {removeSpecial(resolvedTheme || "null")} {/* Display current theme name */}
            </button>

            {/* Dropdown menu containing available themes */}
            {isOpen && (
                <div className="absolute bottom-full mb-2 w-40 bg-background border rounded-md shadow-lg">
                    {themes.map((t) => (
                        <button
                            key={t}
                            onClick={() => handleThemeChange(t)}
                            className="flex items-center gap-1 px-3 py-2 w-full hover:bg-background-alt"
                        >
                            {themeIcons[t] || "🎨"} {/* Display icon for each theme */}
                            <span className='truncate whitespace-nowrap overflow-hidden'>{removeSpecial(t)}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThemeDropdown;
