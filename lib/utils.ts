import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const removeSpecial = (s: string): string => {
    let normalized = s.replace(/[@%\-/#$]/g, ' ');
    let words = normalized.split(' ').filter(word => word.length > 0);
    let finalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return finalized;
}
