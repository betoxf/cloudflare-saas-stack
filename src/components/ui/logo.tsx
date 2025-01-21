"use client"

import { useEffect, useState } from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ 
  className = "", 
  width = 244,
  height = 58 
}: LogoProps) {
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() => {
    // Check if we're in dark mode
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
    
    // Create observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDarkMode = document.documentElement.classList.contains('dark')
          setIsDark(isDarkMode)
        }
      })
    })
    
    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  const fillColor = isDark ? '#ffffff' : '#2d2d33'

  return (
    <svg 
      width={width} 
      height={height}
      viewBox="0 0 244.14 57.59"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill={fillColor} d="M0,28.9C0,12.99,12.95,0,28.79,0s28.83,12.99,28.83,28.9-12.99,28.69-28.86,28.69S0,44.67,0,28.9ZM46.35,28.83c0-9.69-7.9-17.59-17.59-17.59s-17.52,7.9-17.52,17.59,7.87,17.49,17.52,17.49,17.59-7.87,17.59-17.49Z"/>
        <path fill={fillColor} d="M117.73,3.47v54.12h-11.34v-23.57c0-.31-.4-.43-.57-.18l-15.43,22.35c-.15.22-.47.22-.63,0l-15.4-22.35c-.17-.25-.57-.13-.57.18v23.57h-11.34V3.46c0-1.18,1.51-1.68,2.21-.73l24.39,32.88c.53.71,1.59.71,2.11,0L115.51,2.74c.7-.95,2.21-.45,2.21.73Z"/>
        <path fill={fillColor} d="M182.81,3.47v54.12h-11.34v-23.57c0-.31-.4-.43-.57-.18l-15.36,22.35c-.15.22-.47.22-.63,0l-15.47-22.35c-.17-.25-.57-.13-.57.18v23.57h-11.34V3.46c0-1.18,1.51-1.68,2.21-.73l24.39,32.88c.53.71,1.59.71,2.11,0L180.6,2.74c.7-.95,2.21-.45,2.21.73Z"/>
        <path fill="#bada31" d="M224.77,22.22l-7.87-10.62-21.13,45.98h16.96c.5,0,.96-.29,1.18-.74l3.02-6.16c.2-.41.79-.41,1,0l3.03,6.16c.22.45.68.73,1.18.73h16.96l-14.33-35.36Z"/>
        <path fill={fillColor} d="M243.93,54.73L217.97,1.99c-.45-.91-1.75-.91-2.2,0l-25.91,52.74c-.65,1.32.31,2.85,1.78,2.85h11.65c1.65,0,2.72-1.73,1.99-3.2l-2.19-4.45c-.6-1.22-.6-2.65,0-3.87l8.39-17.07c.22-.45.86-.45,1.08,0l7.36,14.95c.19.38.72.38.91,0l2.6-5.28c.14-.29.55-.29.7,0l5.87,11.92c.51,1.03.51,2.24,0,3.27l-.86,1.76c-.45.92.22,1.99,1.24,1.99h11.8c1.47,0,2.42-1.54,1.78-2.86ZM223.91,29.63l-2.87,5.84c-.22.45-.86.45-1.08,0l-2.87-5.84c-.19-.39-.19-.84,0-1.23l2.87-5.84c.22-.45.86-.45,1.08,0l2.87,5.84c.19.39.19.84,0,1.23Z"/>
      </g>
    </svg>
  )
}
