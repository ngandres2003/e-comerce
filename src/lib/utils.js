import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/* Scrolls to document fragment or to the top of webpage on every
 * location update.
 * Use this at the start of every view to fix the scroll position
 * when navigating to a different view.
 */
export function useScrollOnNavigation() {
  const location = useLocation()

  useLayoutEffect(() => {
    const requestId = requestAnimationFrame(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1))
        if (element) {
          element.scrollIntoView()
        }
      } else {
        scrollTo(0, 0)
      }
    })

    return () => { cancelAnimationFrame(requestId) }
  }, [location.pathname, location.search, location.hash])
}
