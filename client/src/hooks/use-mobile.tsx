import * as React from "react"

// Define the breakpoint for mobile devices (in pixels)
const MOBILE_BREAKPOINT = 768

// Custom hook to determine if the current viewport width is below the mobile breakpoint
export function useIsMobile() {
  // State to track whether the viewport is considered mobile
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create a MediaQueryList object to monitor viewport width changes
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Function to update the state based on the current viewport width
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add an event listener to detect changes in the viewport width
    mql.addEventListener("change", onChange)

    // Set the initial state based on the current viewport width
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Cleanup function to remove the event listener when the component unmounts
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Return the state as a boolean value (default to false if undefined)
  return !!isMobile
}
