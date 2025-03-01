import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2024 VinylSpot. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            Términos
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            Privacidad
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground">
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  )
}

