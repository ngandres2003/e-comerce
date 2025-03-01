"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, User, Menu } from "lucide-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Inicio
                </Link>
                <Link to="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Vinilos
                </Link>
                <Link to="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Artistas
                </Link>
                <Link to="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Ofertas
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">VinylSpot</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link to="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Vinilos
            </Link>
            <Link to="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Artistas
            </Link>
            <Link to="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Ofertas
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <form className="w-full lg:w-[300px]">
            <Input placeholder="Buscar vinilos..." className="w-full" />
          </form>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Cuenta</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Carrito</span>
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

