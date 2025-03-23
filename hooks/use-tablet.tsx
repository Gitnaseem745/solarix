"use client"

import { useState, useEffect } from "react"

export function useTablet() {
  const [isTablet, setIsTablet] = useState(false)
    
  useEffect(() => {
    const checkIfTablet = () => {
        setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024); // Tablet: 769px - 1024px
    }

    // Initial check
    checkIfTablet()

    // Add event listener
    window.addEventListener("resize", checkIfTablet)

    // Clean up
    return () => window.removeEventListener("resize", checkIfTablet)
  }, [])

  return isTablet
}
