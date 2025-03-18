"use client"

import React, { useState, useEffect, useRef } from "react"
import { cn } from "../../lib/utils"

const Sheet = ({ open, onOpenChange, children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { open, onOpenChange })
  })
}

const SheetTrigger = ({ asChild, children, open, onOpenChange }) => {
  if (asChild) {
    return React.cloneElement(children, {
      onClick: () => onOpenChange(!open),
    })
  }

  return <button onClick={() => onOpenChange(!open)}>{children}</button>
}

const SheetContent = ({ children, side = "right", className, open, onOpenChange }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (open) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [open])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && open) {
        onOpenChange(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onOpenChange, open])

  if (!isVisible && !open) return null

  const sideStyles = {
    right: "right-0 h-full",
    left: "left-0 h-full",
    top: "top-0 w-full",
    bottom: "bottom-0 w-full",
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div
        ref={ref}
        className={cn(
          "fixed bg-white/80 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300",
          sideStyles[side],
          open ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full",
          className,
        )}
      >
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          onClick={() => onOpenChange(false)}
        >
          ✕<span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  )
}

export { Sheet, SheetTrigger, SheetContent }

